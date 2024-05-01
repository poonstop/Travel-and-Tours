<?php
    session_start();
    if(isset($_SESSION['username'])){
        if($_SESSION['userlvl']=='admin'){
            header("location: Admin/admin.php");
        }else{
            header("location: index.php");
        }
    }

    require("conn.php");
    if(isset($_POST['uname'])){

        $uname = $_POST['uname'];
        $pass = $_POST['pass'];

        $sql = "SELECT * FROM tbl_user WHERE username = '$uname' AND password = '$pass'";
        //prepare
        //bind
        //execute
        $query = $conn->query($sql);
        if($query->rowCount() > 0){
            foreach($query as $row){
                $_SESSION['username'] = $row['username'];
                $_SESSION['userlvl'] = $row['userlevel'];
            }
            if($_SESSION['userlvl']=='admin'){
                echo "admin";
            }else{
                echo "client";
            }

        }else{
            echo "error";
        }
    }
?>