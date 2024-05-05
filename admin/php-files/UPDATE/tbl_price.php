<?php
require_once '../../../conn.php';

// Check if data is received from AJAX
if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    // Check if priceCardData is set and not empty
    if (isset($_POST['priceData']) && !empty($_POST['priceData'])) {
        $packCode = $_POST['packCode']; 
        $priceCardData = json_decode($_POST['priceData'], true);

        $sqlPack = "UPDATE tbl_pack  SET(title = :title, locations = :locations, inclusion = :inclusion, exclusion = :exclusion) WHERE pack_code = :packCode";
        $stmtPack = $conn->prepare($sqlPack);
        $stmtPack->bindParam(':packCode', $packCode);
        $stmtPack->bindParam(':title', $packTitle);
        $stmtPack->bindParam(':locations', $route);
        $stmtPack->bindParam(':inclusion', $include);
        $stmtPack->bindParam(':exclusion', $exclude);

        //copy this for tbl_flight and tbl_itinerary
        if ($priceCardData !== null) {
            // Loop through each price card data received from AJAX
            foreach ($priceCardData as $priceData) {
                // Check if the record already exists in tbl_price
                $stmt = $conn->prepare("SELECT * FROM tbl_price WHERE pack_code = ? AND price_code = ?");
                $stmt->execute([$packCode, $priceData['price_code']]);
                $existingRecord = $stmt->fetch(PDO::FETCH_ASSOC);

                if ($existingRecord) {
                    // Update the existing record
                    $stmt = $conn->prepare("UPDATE tbl_price SET currency = ?, price = ?, price_desc = ? WHERE pack_code = ? AND price_code = ?");
                    $stmt->execute([$priceData['currency'], $priceData['amount'], $priceData['price_desc'], $packCode, $priceData['price_code']]);
                } else {
                    // Insert a new record if the price code doesn't exist
                    $stmt = $conn->prepare("INSERT INTO tbl_price (pack_code,  currency, price, price_desc) VALUES (?, ?, ?, ?)");
                    $stmt->execute([$packCode, $priceData['currency'], $priceData['amount'], $priceData['price_desc']]);
                }
            }
            echo json_encode(array('success' => 'Data saved successfully'));
        } else {
            echo json_encode(array('error' => 'Error decoding price data'));
        }
    } else {
        // Error message if data from AJAX is missing
        echo json_encode(array('error' => 'Data not received at POST'));
    }
} else {
    // Error message if request method is not POST
    echo json_encode(array('error' => 'Invalid request method'));
}
?>
