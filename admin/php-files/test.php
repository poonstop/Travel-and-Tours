<?php
// Include the database connection script
require_once("../../conn.php");

// Default SQL query to select all packages
$sql = "SELECT * FROM tbl_pack";

// If search parameter is provided, modify the SQL query accordingly
if(isset($_POST['search'])){
    $search = $_POST['search'];
    $sql .= " WHERE pack_name LIKE '%$search%'";
}

try {
    // Execute the SQL query
    $stmt = $conn->query($sql);
    $packages = $stmt->fetchAll(PDO::FETCH_ASSOC);

    // Check if there are any packages
    if($packages) {
        // Iterate over packages and generate HTML
        foreach ($packages as $package) {
?>
            <div class="package-card" style="background-image: url('../img/osaka.jpg')">
                <div class="row">
                    <a id="closeBtn" class="btn-close bg-danger"></a>
                </div>
                <div class="row">
                    <div class="title" id="title">
                        <p><?php echo $package['title']; ?></p>
                    </div>
                    <div class="description">
                        <p class="mb-2" id="locations"><?php echo $package['locations']; ?></p>
                    </div>
                </div>
                <div class="row">
                    <!-- Edit button with data-pack-code attribute -->
                    <button class="button bg-success editBtn" data-pack-code="<?php echo $package['pack_code']; ?>">Edit Package</button>
                </div>
            </div>
<?php
        }
    } else {
        // If no packages found, display a message
?>
        <div class="no-record"><p>No Record</p></div>
<?php
    }
} catch(PDOException $e) {
    // Handle any errors
    echo "Error: " . $e->getMessage();
}
?>
