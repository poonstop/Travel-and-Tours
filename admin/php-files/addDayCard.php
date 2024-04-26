<?php
session_start();

if (isset($_POST['action']) && $_POST['action'] == 'addDay') {
    if (!isset($_SESSION['dayCount'])) {
        $_SESSION['dayCount'] = 1; // Initialize day count if not set
    } else {
        $_SESSION['dayCount']++; // Increment day count when Add Day button is clicked
    }
    echo $_SESSION['dayCount']; // Send the updated day count back to the client
}
?>