<?php
// Include the database connection script
include('../../conn.php');

// Check if pack_code is provided
if(isset($_GET['pack_code'])) {
    $pack_code = $_GET['pack_code'];

    try {
        // Prepare and execute query to fetch package details based on pack_code
        $stmt = $conn->prepare("SELECT * FROM tbl_pack WHERE pack_code = ?");
        $stmt->execute([$pack_code]);

        // Fetch package details
        $package = $stmt->fetch(PDO::FETCH_ASSOC);

        // Output package details as JSON
        echo json_encode($package);
    } catch(PDOException $e) {
        // Handle any errors
        echo json_encode(array('error' => $e->getMessage()));
    }
} else {
    // If pack_code is not provided, return error
    echo json_encode(array('error' => 'Pack code not provided'));
}
?>
