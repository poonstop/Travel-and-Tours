
<?php
//FUNCTION FOR SIGNUP
// Include the connection file
$servername = "localhost"; // servername
$username = "username"; //  username
$password = "password"; //  password
$dbname = "db_ttms"; //  database name

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

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

    $stmt = $conn->prepare("INSERT INTO users (username, password, email) VALUES (?, ?, ?)");
    $stmt->bind_param("sss", $username, $password, $email);

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
    if ($stmt->execute() === TRUE) {
        $success_message = "User registered successfully.";
    } else {
        $error_message = "Error: " . $stmt->error;
    }

    // Close statement
    $stmt->close();
}

// Close connection
$conn->close();
?>
