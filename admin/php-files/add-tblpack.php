<?php
require_once '../../conn.php';//connects to db, DONT TOUCH

//checks if data is received from AJAX
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    //data for tbl_pack(main)
    $packCode = $_POST['packCode']; 
    $packTitle = $_POST['packTitle'];
    $route = $_POST['route'];
    $include = $_POST['include'];
    $exclude = $_POST['exclude'];

    //prepare for tbl_pak
    $sqlPack = "INSERT INTO tbl_pack (pack_code, title, locations, inclusion, exclusion) VALUES (:packCode, :title, :locations, :inclusion, :exclusion)";
    $stmtPack = $conn->prepare($sqlPack);
    $stmtPack->bindParam(':packCode', $packCode);
    $stmtPack->bindParam(':title', $packTitle);
    $stmtPack->bindParam(':locations', $route);
    $stmtPack->bindParam(':inclusion', $include);
    $stmtPack->bindParam(':exclusion', $exclude);

    //LOOK AT THIS FOR REFERENCE AT JSON ARRAY INSERT, refer to tbl_flight insert
    //runs once tbl_pack insert is successful
    if ($stmtPack->execute()) {
        //tbl_flight
        if (isset($_POST['flightListData']) && !empty($_POST['flightListData'])) {
            $flightListData = json_decode($_POST['flightListData'], true);//retrieves the JSON data and sets it as a variable(similar to how an array is set)

            //prepare for tbl_flight
            $sqlFlight = "INSERT INTO tbl_flight (pack_code, travel_start, travel_end, flight_info) VALUES (:packCode, :travel_start, :travel_end, :flight_info)";
            $stmtFlight = $conn->prepare($sqlFlight);

            //loop for binding the value of each data for every entry in the SQL insert
            foreach ($flightListData as $flightData) {
                $stmtFlight->bindParam(':packCode', $packCode);//assigns packCode as FK
                $stmtFlight->bindParam(':flight_info', $flightData['plane']);
                $stmtFlight->bindParam(':travel_start', $flightData['schedStart']);
                $stmtFlight->bindParam(':travel_end', $flightData['schedEnd']);
                $stmtFlight->execute();
            }
        }

        //tbl_price
        if (isset($_POST['priceCardData']) && !empty($_POST['priceCardData'])) {
            $priceCardData = json_decode($_POST['priceCardData'], true);

            //prepare for tbl_price
            $sqlPrice = "INSERT INTO tbl_price (pack_code, currency, price, price_desc) VALUES (:packCode, :currency, :amount, :desc)";
            $stmtPrice = $conn->prepare($sqlPrice);

            foreach ($priceCardData as $priceData) {
                $stmtPrice->bindParam(':packCode', $packCode);
                $stmtPrice->bindParam(':currency', $priceData['currency']);
                $stmtPrice->bindParam(':amount', $priceData['amount']);
                $stmtPrice->bindParam(':desc', $priceData['desc']);
                $stmtPrice->execute();
            }
        }
        //tbl_itinerary
        if (isset($_POST['dayCardData']) && !empty($_POST['dayCardData'])) {
            $dayCardData = json_decode($_POST['dayCardData'], true);

            //prepare for tbl_itinerary
            $sqlItinerary = "INSERT INTO tbl_itinerary (pack_code, day, meals, hotel_stat, hotel, activity, poi, optional) VALUES (:packCode, :day, :meals, :hotel_stat, :hotel, :activity, :poi, :optional)";
            $stmtItinerary = $conn->prepare($sqlItinerary);

            foreach ($dayCardData as $dayData) {
                $stmtItinerary->bindParam(':packCode', $packCode);
                $stmtItinerary->bindParam(':day', $dayData['day']);
                $stmtItinerary->bindParam(':meals', $dayData['meal']);
                $stmtItinerary->bindParam(':hotel_stat', $dayData['hotelstat']);
                $stmtItinerary->bindParam(':hotel', $dayData['hotel']);
                $stmtItinerary->bindParam(':activity', $dayData['acts']);
                $stmtItinerary->bindParam(':poi', $dayData['areas']);
                $stmtItinerary->bindParam(':optional', $dayData['optionAct']);
                $stmtItinerary->execute();
            }
        }
        //success
        echo json_encode(array('success' => true));
    } else {
        //eror message for tbl_pack
        echo json_encode(array('error' => 'Error inserting data into tbl_price'));
    }

} else {
    //error message if data from AJAX is missing
    echo json_encode(array('error' => 'Data not received at POST'));
}
?>
