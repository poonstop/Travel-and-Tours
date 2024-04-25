<?php
    $conn = new PDO('mysql:host=localhost;dbname=db_travelMIS','root','');
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    if (!$conn) {
        die("Connection Error") . $mysql->connect_errno;
    }
?>