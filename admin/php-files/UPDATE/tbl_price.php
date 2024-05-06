<?php
require_once '../../../conn.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $packCode = $_POST['packCode']; 
    $dayCardData = json_decode($_POST['dayData'], true);
    $priceCardData = json_decode($_POST['priceData'], true);
    $flightCardData = json_decode($_POST['flightData'], true);

    if (!empty($dayCardData) && !empty($priceCardData) && !empty($flightCardData)) {
        try {
            $conn->beginTransaction();
            
            // Update or insert day card data
            foreach ($dayCardData as $dayData) {
                $stmt = $conn->prepare("SELECT * FROM tbl_itinerary WHERE pack_code = ? AND itinerary_id = ?");
                $stmt->execute([$packCode, $dayData['itinerary_id']]);
                $dayRecord = $stmt->fetch(PDO::FETCH_ASSOC);
                
                if ($dayRecord) {
                    $stmt = $conn->prepare("UPDATE tbl_itinerary SET day = ?, meals = ?, hotel_stat = ?, hotel = ?, activity = ?, poi = ?, optional = ? WHERE pack_code = ? AND itinerary_id = ?");
                    $stmt->execute([$dayData['day'], $dayData['meals'], $dayData['hotel_stat'], $dayData['hotel'], $dayData['activity'], $dayData['poi'], $dayData['optional'], $packCode, $dayData['itinerary_id']]);
                } else {
                    $stmt = $conn->prepare("INSERT INTO tbl_itinerary (pack_code, day, meals, hotel_stat, hotel, activity, poi, optional) VALUES (?, ?, ?, ?, ?, ?, ?, ?)");
                    $stmt->execute([$packCode, $dayData['day'], $dayData['meals'], $dayData['hotel_stat'], $dayData['hotel'], $dayData['activity'], $dayData['poi'], $dayData['optional']]);
                }
            }

            // Update or insert price data
            foreach ($priceCardData as $priceData) {
                $stmt = $conn->prepare("SELECT * FROM tbl_price WHERE pack_code = ? AND price_code = ?");
                $stmt->execute([$packCode, $priceData['price_code']]);
                $priceRecord = $stmt->fetch(PDO::FETCH_ASSOC);
                
                if ($priceRecord) {
                    $stmt = $conn->prepare("UPDATE tbl_price SET currency = ?, price = ?, price_desc = ? WHERE pack_code = ? AND price_code = ?");
                    $stmt->execute([$priceData['currency'], $priceData['amount'], $priceData['price_desc'], $packCode, $priceData['price_code']]);
                } else {
                    $stmt = $conn->prepare("INSERT INTO tbl_price (pack_code, currency, price, price_desc) VALUES (?, ?, ?, ?)");
                    $stmt->execute([$packCode, $priceData['currency'], $priceData['amount'], $priceData['price_desc']]);
                }
            }

            // Update or insert flight data
            foreach ($flightCardData as $flightData) {
                $stmt = $conn->prepare("SELECT * FROM tbl_flight WHERE pack_code = ? AND flight_code = ?");
                $stmt->execute([$packCode, $flightData['flight_code']]);
                $flightRecord = $stmt->fetch(PDO::FETCH_ASSOC);
                
                if ($flightRecord) {
                    $stmt = $conn->prepare("UPDATE tbl_flight SET travel_start = ?, travel_end = ?, flight_info = ? WHERE pack_code = ? AND flight_code = ?");
                    $stmt->execute([$flightData['travel_start'], $flightData['travel_end'], $flightData['plane'], $packCode, $flightData['flight_code']]);
                } else {
                    $stmt = $conn->prepare("INSERT INTO tbl_flight (pack_code, travel_start, travel_end, flight_info) VALUES (?, ?, ?, ?)");
                    $stmt->execute([$packCode, $flightData['travel_start'], $flightData['travel_end'], $flightData['plane']]);
                }
            }

            $conn->commit();
            echo json_encode(array('success' => 'Data saved successfully'));
        } catch (PDOException $e) {
            $conn->rollBack();//in case of error, this removes any anomalous insert/update
            echo json_encode(array('error' => 'Database error: ' . $e->getMessage()));
        }
    } else {
        echo json_encode(array('error' => 'Saved data not received or empty'));
    }
} else {
    echo json_encode(array('error' => 'Invalid request method'));
}
?>
