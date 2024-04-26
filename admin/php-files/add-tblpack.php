<?php
// Retrieve the day card data sent from addpackage.js
$dayCardData = $_POST['dayCardData'];

// Output the received data to the browser console
echo "<script>";
echo "console.log('Received Day Card Data:');";
echo "console.log(" . json_encode($dayCardData) . ");";
echo "</script>";
?>
