<?php
    // Database connection parameters
    $hostname = 'localhost';
    $database = 'db_ttms';
    $username = 'root';
    $password = '';

    try {
        // Create a PDO connection to the database
        $conn = new PDO("mysql:host=$hostname;dbname=$database", $username, $password);

        // Set the PDO error mode to exception
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        // Output success message if connected successfully (optional)
        // echo "Connected successfully";
    } catch(PDOException $e) {
        // Output error message if connection fails
        echo "Connection failed: " . $e->getMessage();
    }
?>
