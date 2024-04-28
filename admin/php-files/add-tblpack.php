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

    //execute
    if ($stmtPack->execute()) {
        //check if data is empty
        if (isset($_POST['dayCardData']) && !empty($_POST['dayCardData'])) {
            $dayCardData = json_decode($_POST['dayCardData'], true);

            //prepare for tbl_itinerary
            $sqlItinerary = "INSERT INTO tbl_itinerary (pack_code, day, meals, hotel_stat, hotel, activity, poi, optional) VALUES (:packCode, :day, :meals, :hotel_stat, :hotel, :activity, :poi, :optional)";
            $stmtItinerary = $conn->prepare($sqlItinerary);

            //multiple day card data, execute prepared statement for tbl_itinerary
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
        //successful data insertion
        echo json_encode(array('success' => true));
    } else {
        //error message for tbl_pack
        echo json_encode(array('error' => 'Error inserting data into tbl_pack'));
    }
} else {
    //error message if data from AJAX is missing
    echo json_encode(array('error' => 'Data not received at POST'));
}
?>
