<?php
// Include the database connection script
require_once("../../../conn.php");

// Check if pack_code is provided
if(isset($_GET['pack_code'])) {
    $packCode = $_GET['pack_code'];
    error_log('flight GET packCode: ' . $packCode, 0);
    try {
        // Prepare SQL statement to fetch flight data based on pack_code
        $stmt = $conn->prepare("SELECT flight_code, travel_start, travel_end, flight_info FROM tbl_flight WHERE pack_code = ?");
        $stmt->execute([$packCode]);
        $flightData = $stmt->fetchAll(PDO::FETCH_ASSOC);

        // Send flight data as JSON response
        echo json_encode($flightData);
    } catch(PDOException $e) {
        // Handle any errors
        error_log('Error: ' . $e->getMessage(), 0);        
        echo json_encode(array('error' => 'An error occurred while fetching flight data'));
    }
} else {
    // Send error response if pack_code is not provided
    echo json_encode(array('error' => 'Pack code is not provided'));
}
?>
