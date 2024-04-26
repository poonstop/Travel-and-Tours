<?php
// Include the database connection file
require_once '../../conn.php';

// Check if data is received via POST request
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Retrieve the JSON data sent by AJAX
    $dayCardData = json_decode($_POST['dayCardData'], true);

    // Loop through each day card data
    foreach ($dayCardData as $dayData) {
        // Extract data from the day card
        $day = $dayData['day'];
        $meal = $dayData['meal'];
        $acts = $dayData['acts'];
        $areas = $dayData['areas'];
        $optionAct = $dayData['optionAct'];
        $hotelstat = $dayData['hotelstat'];
        $hotel = $dayData['hotel'];

        // Log the received data (for debugging)
        echo "Day $day - Meal: $meal, Acts: $acts, Areas: $areas, Option Act: $optionAct, Hotel Stat: $hotelstat, Hotel: $hotel\n";

        // SQL query to insert data into tbl_itinerary
        $sql = "INSERT INTO tbl_itinerary (day, meals, hotel_stat, hotel, activity, poi, optional) VALUES (:day, :meal, :hotelstat, :hotel, :acts, :areas, :optionAct)";

        // Prepare and execute the SQL statement
        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':day', $day);
        $stmt->bindParam(':meal', $meal);
        $stmt->bindParam(':acts', $acts);
        $stmt->bindParam(':areas', $areas);
        $stmt->bindParam(':optionAct', $optionAct);
        $stmt->bindParam(':hotelstat', $hotelstat);
        $stmt->bindParam(':hotel', $hotel);
        $stmt->execute();
    }

    // Close the database connection
    $conn = null;

    // Output success message
    echo json_encode(array('success' => true));
} else {
    // Output error message if data is not received via POST
    echo json_encode(array('error' => 'Data not received via POST'));
}
?>
