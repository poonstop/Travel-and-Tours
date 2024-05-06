<?php
// Include the database connection script
require_once("../../../conn.php");

// Check if pack_code is provided
if(isset($_GET['pack_code'])) {
    $packCode = $_GET['pack_code']; 
    error_log('price GET packCode: ' . $packCode, 0);
    try {
        // Prepare SQL statement to fetch price data based on pack_code
        $stmt = $conn->prepare("SELECT price_code, currency, price, price_desc FROM tbl_price WHERE pack_code = ?");
        $stmt->execute([$packCode]);
        $priceData = $stmt->fetchAll(PDO::FETCH_ASSOC);

        // Send price data as JSON response
        echo json_encode($priceData);
    } catch(PDOException $e) {
        // Log the error message
        error_log('Error: ' . $e->getMessage(), 0);        
        // Handle any errors
        echo json_encode(array('error' => 'An error occurred while fetching data at tbl_price'));
    }
} else {
    // Send error response if pack_code is not provided
    echo json_encode(array('error' => 'Pack code is not provided'));
}
?>
