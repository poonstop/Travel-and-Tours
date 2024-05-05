<?php
require_once '../../conn.php'; // Include your database connection file
/*fix this shit later, add a foreach loop with a nested condition;
foreach(){
    if($itineraryID === itinerary_id){//if there is a matching itinerary_id within the records of tbl_itinerary
        //updates the already existing recods, excluding the pack_code
        
    }else{
        //inserts new records into the database, including the pack_code
        INSERT INTO tbl_itinerary(meals, hotel_stat, hotel, activity, poi, optional) VALUES (:meals, :hotelStat, :hotel, :activity, :poi, :optional) WHERE itinerary_id = :itinerary_id;

    }

}

*/
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the data from the POST request for tbl_pack
    $packCode = $_POST['packCode'];
    $packTitle = $_POST['packTitle'];
    $route = $_POST['route'];
    $include = $_POST['include'];
    $exclude = $_POST['exclude'];

    // Prepare the SQL statement for inserting into tbl_pack
    $sqlPack = "INSERT INTO tbl_pack (pack_code, title, locations, inclusion, exclusion) 
                VALUES (:packCode, :title, :locations, :inclusion, :exclusion) 
                ON DUPLICATE KEY UPDATE 
                title = VALUES(title), 
                locations = VALUES(locations), 
                inclusion = VALUES(inclusion), 
                exclusion = VALUES(exclusion)";
    // Prepare and execute the SQL statement for tbl_pack
    $stmtPack = $conn->prepare($sqlPack);
    $stmtPack->execute([
        ':packCode' => $packCode,
        ':title' => $packTitle,
        ':locations' => $route,
        ':inclusion' => $include,
        ':exclusion' => $exclude
    ]);
    $packCode = $conn->lastInsertId();
    
    // Data for tbl_flight
    $flightListData = json_decode($_POST['flightListData'], true);
    // Prepare the SQL statement for inserting into tbl_flight
    $sqlFlight = "INSERT INTO tbl_flight (pack_code, flight_code, travel_start, travel_end, flight_info) 
                  VALUES (:packCode, :flightCode, :travelStart, :travelEnd, :flightInfo) 
                  ON DUPLICATE KEY UPDATE 
                  travel_start = VALUES(travel_start), 
                  travel_end = VALUES(travel_end), 
                  flight_info = VALUES(flight_info)";
    // Prepare and execute the SQL statement for tbl_flight
    $stmtFlight = $conn->prepare($sqlFlight);
    foreach ($flightListData as $flightData) {
        $stmtFlight->execute([
            ':packCode' => $packCode,
            ':flightCode' => $flightData['flight'], 
            ':travelStart' => $flightData['schedStart'],
            ':travelEnd' => $flightData['schedEnd'],
            ':flightInfo' => $flightData['plane']
        ]);
    }

    // Data for tbl_price
    $priceCardData = json_decode($_POST['priceCardData'], true);
    // Prepare the SQL statement for inserting into tbl_price
    $sqlPrice = "INSERT INTO tbl_price (pack_code, price_code, currency, price, price_desc) 
                 VALUES (:packCode, :priceCode, :currency, :price, :priceDesc) 
                 ON DUPLICATE KEY UPDATE 
                 currency = VALUES(currency), 
                 price = VALUES(price), 
                 price_desc = VALUES(price_desc)";
    // Prepare and execute the SQL statement for tbl_price
    $stmtPrice = $conn->prepare($sqlPrice);
    foreach ($priceCardData as $priceData) {
        $stmtPrice->execute([
            ':packCode' => $packCode,
            ':priceCode' => $priceData['price'], // Assuming 'price' is the primary key for tbl_price
            ':currency' => $priceData['currency'],
            ':price' => $priceData['amount'],
            ':priceDesc' => $priceData['desc']
        ]);
    }

    // Data for tbl_itinerary
    $dayCardData = json_decode($_POST['dayCardData'], true);
    // Prepare the SQL statement for inserting into tbl_itinerary
    $sqlItinerary = "INSERT INTO tbl_itinerary (pack_code, itinerary_id, day, meals, hotel_stat, hotel, activity, poi, optional) 
                     VALUES (:packCode, :itineraryId, :day, :meals, :hotelStat, :hotel, :activity, :poi, :optional) 
                     ON DUPLICATE KEY UPDATE 
                     meals = VALUES(meals), 
                     hotel_stat = VALUES(hotel_stat), 
                     hotel = VALUES(hotel), 
                     activity = VALUES(activity), 
                     poi = VALUES(poi), 
                     optional = VALUES(optional)";
    // Prepare and execute the SQL statement for tbl_itinerary
    $stmtItinerary = $conn->prepare($sqlItinerary);
    foreach ($dayCardData as $dayData) {
        $stmtItinerary->execute([
            ':packCode' => $packCode,
            ':itineraryId' => $dayData['day'], // Assuming 'day' is the primary key for tbl_itinerary
            ':day' => $dayData['day'],
            ':meals' => $dayData['meal'],
            ':hotelStat' => $dayData['hotelstat'],
            ':hotel' => $dayData['hotel'],
            ':activity' => $dayData['acts'],
            ':poi' => $dayData['areas'],
            ':optional' => $dayData['optionAct']
        ]);
    }
}
?>
