<?php
// Include the database connection script
require_once("../../../conn.php");

// Check if pack_code is provided
if(isset($_GET['pack_code'])) {
    $packCode = $_GET['pack_code'];

    try {
        // Prepare SQL statement to fetch itinerary data based on pack_code
        $stmt = $conn->prepare("SELECT itinerary_id, meals, hotel_stat, hotel, activity, poi, optional FROM tbl_itinerary WHERE pack_code = ?");
        $stmt->execute([$packCode]);
        $itineraryData = $stmt->fetchAll(PDO::FETCH_ASSOC);

        // Close the database connection
        $conn = null;

        // Send itinerary data as JSON response
        echo json_encode($itineraryData);
    } catch(PDOException $e) {
        // Handle any errors
        echo json_encode(array('error' => 'An error occurred while fetching data'));
    }
} else {
    // Send error response if pack_code is not provided
    echo json_encode(array('error' => 'Pack code is not provided'));
}
?>
