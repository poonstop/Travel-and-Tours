
<?php
//FUNCTION FOR SIGNUP
// Include the connection file
require_once 'conn.php';

// Enable error reporting for PDO
$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

// Check if form data has been submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the form data
    $username = $_POST["username"];
    $lname = $_POST["lname"];
    $fname = $_POST["fname"];
    $mi = $_POST["mi"];
    $email = $_POST["email"];
    $password = $_POST["password"];
    $confirm_password = $_POST["confirm_password"];

    // Check if passwords match
    if ($password!= $confirm_password) {
        echo "Error: Passwords do not match.";
        exit;
    }

    // Hash the password
    $hashed_password = password_hash($password, PASSWORD_DEFAULT);

    // Check if the username already exists in the database
    $stmt = $conn->prepare("SELECT * FROM tbl_users WHERE username = ?");
    $stmt->execute([$username]);
    $user = $stmt->fetch();

    if ($user) {
        echo "Error: The username already exists.";
        exit;
    }

    // Insert the user data into the database
    $sql = "INSERT INTO tbl_users (username, lname, fname, mi, email, pass) VALUES ('$username', '$lname', '$fname', '$mi', '$email', '$password')";
    $stmt = $conn->prepare($sql);
    $stmt->execute([$username, $lname, $fname, $mi, $email, $hashed_password]);

    // Check if the data was inserted successfully
    if ($stmt->rowCount() > 0) {
        echo "User created successfully.";
    } else {
        echo "Error: ". $sql. "<br>". $conn->error;
    }

    // Close the prepared statement and the connection
    $stmt = null;
    $conn = null;
}
?>
