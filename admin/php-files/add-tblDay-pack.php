<?php
require_once '../../conn.php';//connect to database DONT TOUCH

//checks if data is received from AJAX
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    //JSON data from addDates-pack.js
    $dayCardData = json_decode($_POST['dayCardData'], true);
    //tbl_itinerary SQL insert 
    $sql = "INSERT INTO tbl_itinerary (day, meals, hotel_stat, hotel, activity, poi, optional) VALUES (?, ?, ?, ?, ?, ?, ?)";
    //Prepare and execute the SQL statement
    $stmt = $conn->prepare($sql);
    // Check if preparation succeeded
    if ($stmt) {
        //day card data
        foreach ($dayCardData as $dayData) {
            $day = $dayData['day'];
            $meal = $dayData['meal'];
            $acts = $dayData['acts'];
            $areas = $dayData['areas'];
            $optionAct = $dayData['optionAct'];
            $hotelstat = $dayData['hotelstat'];
            $hotel = $dayData['hotel'];
            //bind
            $stmt->bind_param('issssss', $day, $meal, $hotelstat, $hotel, $acts, $areas, $optionAct);
            $stmt->execute();//execute
            //errors check
            if ($stmt->error) {
                // Output error message
                echo json_encode(array('error' => 'Error inserting ITINERARY into database: ' . $stmt->error));
                exit;
            }
        }
        $stmt->close();//close statement    
        $conn->close(); //close database connection

        // Output success message
        echo json_encode(array('success' => true));
    } else {
        //error message if preparation failed
        echo json_encode(array('error' => 'Error preparing SQL statement: ' . $conn->error));
    }
} else {
    // Output error message if data is not received via POST
    echo json_encode(array('error' => 'Data not received via POST'));
}
?>
