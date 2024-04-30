<?php
// Include the database connection script
require_once '../../conn.php';

try {
    // Prepare and execute query to fetch packages
    $stmt = $conn->prepare("SELECT * FROM tbl_pack");
    $stmt->execute();

    // Fetch all rows as an associative array
    $packages = $stmt->fetchAll(PDO::FETCH_ASSOC);

    // Output packages as JSON
    echo json_encode($packages);
} catch(PDOException $e) {
    // Handle any errors
    echo json_encode(array('error' => $e->getMessage()));
}
?>
