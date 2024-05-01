<?php
require_once '../../../conn.php';

// Check if the POST data contains the 'itineraries' array
if(isset($_POST['itineraries'])) {
    // Decode the JSON string into an array of itineraries
    $itineraries = json_decode($_POST['itineraries'], true);

    // Iterate over each itinerary
    foreach($itineraries as $itinerary) {
        $itinerary_id = $itinerary['itinerary_id'];
        $pack_code = $itinerary['pack_code'];
        $day = $itinerary['day']; // Day number
        $meals = $itinerary['meals'];
        $hotel_stat = $itinerary['hotel_stat'];
        $hotel = $itinerary['hotel'];
        $activity = $itinerary['activity'];
        $poi = $itinerary['poi'];
        $optional = $itinerary['optional'];

        // Check if the itinerary already exists in the database
        $query = "SELECT * FROM tbl_itinerary WHERE itinerary_id = :itinerary_id";
        $statement = $conn->prepare($query);
        $statement->bindParam(':itinerary_id', $itinerary_id);
        $statement->execute();
        $existing_itinerary = $statement->fetch(PDO::FETCH_ASSOC);

        if($existing_itinerary) {
            // Itinerary exists, update the values
            $query = "UPDATE tbl_itinerary SET pack_code = :pack_code, day = :day, meals = :meals, hotel_stat = :hotel_stat, hotel = :hotel, activity = :activity, poi = :poi, optional = :optional WHERE itinerary_id = :itinerary_id";
        } else {
            // Itinerary does not exist, insert the values
            $query = "INSERT INTO tbl_itinerary (itinerary_id, pack_code, day, meals, hotel_stat, hotel, activity, poi, optional) VALUES (:itinerary_id, :pack_code, :day, :meals, :hotel_stat, :hotel, :activity, :poi, :optional)";
        }

        // Prepare and execute the query
        $statement = $conn->prepare($query);
        $statement->bindParam(':itinerary_id', $itinerary_id);
        $statement->bindParam(':pack_code', $pack_code);
        $statement->bindParam(':day', $day);
        $statement->bindParam(':meals', $meals);
        $statement->bindParam(':hotel_stat', $hotel_stat);
        $statement->bindParam(':hotel', $hotel);
        $statement->bindParam(':activity', $activity);
        $statement->bindParam(':poi', $poi);
        $statement->bindParam(':optional', $optional);
        $statement->execute();
    }

    // Respond with success message
    echo "Data saved successfully!";
} else {
    // If 'itineraries' array is not found in POST data
    echo "No data received.";
}
?>
