<?php
// Retrieve the pack_code from the URL
if(isset($_GET['pack_code'])) {
    $packCode = $_GET['pack_code'];

    // Include the database connection script
    require_once("../../conn.php");

    try {
        // Prepare SQL statement to fetch package details based on pack_code
        $stmt = $conn->prepare("SELECT * FROM tbl_pack WHERE pack_code = ?");
        $stmt->execute([$packCode]);
        $packageData = $stmt->fetch(PDO::FETCH_ASSOC);

        // Close the database connection
        $conn = null;

        // Return JSON response
        header('Content-Type: application/json');
        echo json_encode($packageData);
        exit(); // Terminate the script execution
    } catch(PDOException $e) {
        // Handle any errors
        echo "Error: " . $e->getMessage();
    }
} else {
    // Redirect to an error page or handle the case when pack_code is not provided
    header("Location: error.php");
    exit(); // Terminate the script execution
}
?>
