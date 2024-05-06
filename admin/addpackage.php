<?php
session_start(); // Start the session
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>Package Manager</title>
    <meta content="width=device-width, initial-scale=1.0" name="viewport">
    <meta content="" name="keywords">
    <meta content="" name="description">
    <!-- Favicon -->
    <link href="../img/favicon.ico" rel="icon">
    <!-- Google Web Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&family=Roboto:wght@500;700&display=swap" rel="stylesheet"> 
    <!-- Icon Font Stylesheet -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet">
    <!-- Libraries Stylesheet -->
    <link href="../lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet">
    <link href="../lib/tempusdominus/css/tempusdominus-bootstrap-4.min.css" rel="stylesheet" />
    <!-- Customized Bootstrap Stylesheet -->
    <link href="../css/bootstrap.min.css" rel="stylesheet">
    <!-- Template Stylesheet -->
    <link href="../css/style.css" rel="stylesheet">
</head>
<body>
    <div class="container-fluid position-relative d-flex p-0">
        <!-- Spinner Start -->
        <div id="spinner" class="show bg-dark position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
            <div class="spinner-border text-primary" style="width: 3rem; height: 3rem;" role="status">
                <span class="sr-only">Loading...</span>
            </div>
        </div>
        <!-- Spinner End -->

    <!-- Sidebar Start -->
    <div class="sidebar pe-4 pb-3">
        <nav class="navbar bg-secondary navbar-dark">
            <div class="navbar-brand mx-4 mb-3">       
                <img class="logo-small" src="../img/logo.jpg" alt="">
            </div>
            <div class="d-flex align-items-center ms-4 mb-4">
                <div class="position-relative">
                    <img class="rounded-circle" src="../img/user.jpg" alt="" style="width: 40px; height: 40px;">
                    <div class="bg-success rounded-circle border border-2 border-white position-absolute end-0 bottom-0 p-1"></div>
                </div>
                <div class="ms-3">
                    <!--Edit here for the username and userlevel-->
                    <h6 class="mb-0">Jhon Doe</h6>
                    <span>Admin</span>
                </div>
            </div>
            <div class="navbar-nav w-100">
                <!--Booking-->
                <a href="admin.php" class="nav-item nav-link"><i class="fa fa-tachometer-alt me-2"></i>Book Now</a>
                <!--User Management-->
                <div class="nav-item dropdown">
                    <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown"><i class="fa fa-laptop me-2"></i>User Management</a>
                    <div class="dropdown-menu bg-transparent border-0">
                        <a href="staff.html" class="dropdown-item">Staff</a>
                        <a href="client.html" class="dropdown-item">Client</a>
                    </div>
                </div>
                <!--Travel package management-->
                <a href="package.php" class="nav-item nav-link  active"><i class="fa fa-th me-2"></i>Package Management</a>
                <!--Reports-->
                <div class="nav-item dropdown">
                    <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown"><i class="far fa-file-alt me-2"></i>Reports</a>
                    <div class="dropdown-menu bg-transparent border-0">
                        <a href="bookinfolist.html" class="dropdown-item">Booking history</a>
                        <a href="itineraryreport.html" class="dropdown-item">Itinerary Reports</a> 
                    </div>
                </div>
            </div>
        </nav>
    </div>
    <!-- Sidebar End -->

        <!-- Content Start -->
        <div class="content">
            <!-- Navbar Start -->
            <nav class="navbar navbar-expand bg-secondary navbar-dark sticky-top px-4 py-0">
                <a href="index.html" class="navbar-brand d-flex d-lg-none me-4">
                    <h2 class="text-primary mb-0"><i class="fa fa-user-edit"></i></h2>
                </a>
                <a href="#" class="sidebar-toggler flex-shrink-0">
                    <i class="fa fa-bars"></i>
                </a>
                <h2 class="text-primary m-2">Reinjan Package Creator</h3>
                <div class="navbar-nav align-items-center ms-auto">
                    <div class="nav-item dropdown">
                        <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                            <i class="fa fa-envelope me-lg-2"></i>
                            <span class="d-none d-lg-inline-flex">Message</span>
                        </a>
                        <div class="dropdown-menu dropdown-menu-end bg-secondary border-0 rounded-0 rounded-bottom m-0">
                            <a href="#" class="dropdown-item">
                                <div class="d-flex align-items-center">
                                    <img class="rounded-circle" src="../img/user.jpg" alt="" style="width: 40px; height: 40px;">
                                    <div class="ms-2">
                                        <h6 class="fw-normal mb-0">Jhon send you a message</h6>
                                        <small>15 minutes ago</small>
                                    </div>
                                </div>
                            </a>
                            <hr class="dropdown-divider">
                            <a href="#" class="dropdown-item">
                                <div class="d-flex align-items-center">
                                    <img class="rounded-circle" src="../img/user.jpg" alt="" style="width: 40px; height: 40px;">
                                    <div class="ms-2">
                                        <h6 class="fw-normal mb-0">Jhon send you a message</h6>
                                        <small>15 minutes ago</small>
                                    </div>
                                </div>
                            </a>
                            <hr class="dropdown-divider">
                            <a href="#" class="dropdown-item">
                                <div class="d-flex align-items-center">
                                    <img class="rounded-circle" src="../img/user.jpg" alt="" style="width: 40px; height: 40px;">
                                    <div class="ms-2">
                                        <h6 class="fw-normal mb-0">Jhon send you a message</h6>
                                        <small>15 minutes ago</small>
                                    </div>
                                </div>
                            </a>
                            <hr class="dropdown-divider">
                            <a href="#" class="dropdown-item text-center">See all message</a>
                        </div>
                    </div>
                    <div class="nav-item dropdown">
                        <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                            <i class="fa fa-bell me-lg-2"></i>
                            <span class="d-none d-lg-inline-flex">Notification</span>
                        </a>
                        <div class="dropdown-menu dropdown-menu-end bg-secondary border-0 rounded-0 rounded-bottom m-0">
                            <a href="#" class="dropdown-item">
                                <h6 class="fw-normal mb-0">Profile updated</h6>
                                <small>15 minutes ago</small>
                            </a>
                            <hr class="dropdown-divider">
                            <a href="#" class="dropdown-item">
                                <h6 class="fw-normal mb-0">New user added</h6>
                                <small>15 minutes ago</small>
                            </a>
                            <hr class="dropdown-divider">
                            <a href="#" class="dropdown-item">
                                <h6 class="fw-normal mb-0">Password changed</h6>
                                <small>15 minutes ago</small>
                            </a>
                            <hr class="dropdown-divider">
                            <a href="#" class="dropdown-item text-center">See all notifications</a>
                        </div>
                    </div>
                    <div class="nav-item dropdown">
                        <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                            <img class="rounded-circle me-lg-2" src="../img/user.jpg" alt="" style="width: 40px; height: 40px;">
                            <span class="d-none d-lg-inline-flex">John Doe</span>
                        </a>
                        <div class="dropdown-menu dropdown-menu-end bg-secondary border-0 rounded-0 rounded-bottom m-0">
                            <a href="#" class="dropdown-item">My Profile</a>
                            <a href="#" class="dropdown-item">Settings</a>
                            <a href="nouser.html" class="dropdown-item">Log Out</a>
                        </div>
                    </div>
                </div>
            </nav>
            <!-- Navbar End -->
            <div class="container-fluid pt-4 px-4 ">
                <div class="d-flex justify-content-end mb-4">
                    <button id="clearPack" class="btn btn-danger me-2">Clear Package</button>
                    <button id="saveBtn" class="btn btn-success">Save Package</button><!--If possible, make this floating-->
                </div>
                <div class="booking-container p-4">
                    <!--General package information goes here-->
                    <div class="col-md-6">
                            <div class="rounded h-100 mr-3">  
                                <!--form for tbl_pack-->
                                <div class="row rounded bg-secondary p-2 mb-3">
                                <div class="d-flex  col-md-6 justify-content-start"><h5>Package Information</h5></div>      
                                    <div class="d-flex flex-row w-100 mb-3 mt-3 justify-content-center">
                                        <div class="form-floating col-md-4 w-50">
                                            <input class="form-control" type="text" id="packTitle" placeholder="">
                                            <label for="packTitle">Title</label>
                                        </div>
                                        <div class="divider"></div>
                                        <div class="form-floating col-md-4 w-50">
                                            <input class="form-control" type="text" id="route" placeholder="">
                                            <label for="route">Route (e.g., city1 > city2 > city3...)</label>
                                        </div>
                                    </div>
                                    <div class="d-flex justify-content-center mb-2">
                                        <div class="form-floating w-100">
                                            <textarea class="form-control" id="include" style="height: 150px;"></textarea>
                                            <label for="include">Inclusion</label>
                                        </div>
                                        <div class="divider"></div>
                                        <div class="form-floating w-100">
                                            <textarea class="form-control" id="exclude" style="height: 150px;"></textarea>
                                            <label for="exclude">Exclusion</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <h5>Price List</h5>
                                        <!--price card "spawns" here-->
                                        <div id="priceContainer" class="row-md-6">                   
                                        </div>
                                        <!--button that adds a price-->
                                        <button id="addPrice" class="rounded w-100 btn-success">Add Price</button>
                                    </div>
                                    <!--forms for tbl_flight-->
                                    <div class="col-md-6 rounded">
                                        <h5>Travel Dates</h5>
                                        <!--flight cards "spawns" here--> 
                                        <div class="flight-box" id="flightContainer">     
                                        </div> 
                                        <button id="addFlight" class="rounded w-100 btn-success">Add Flight</button>
                                    </div>
                                </div>    
                            </div>                                                          
                    </div>
                    <div class="divider m-3"></div>

                    <!--form for itineraries goes here-->  
                    <div class="col-md-6">
                        <!--form for tbl_price-->
                        <!--forms for tbl-itineraries--> 
                        <div class="row-md-6 border-success">
                            <div class="rounded bg-secondary mb-2 p-4">
                                <h6>ITINERARY PLANNER</h6>
                            </div>
                            <div id="dayContainer">
                                <!--day cards here-->
                            </div>
                            <!--button for adding a new itinerary-->
                            <button class="rounded w-100 btn-success" id="addDayBtn">Add Day</button>        
                        </div>       
                    </div>       
                </div>
            <br>
            <!-- Footer Start -->
            <div class="container-fluid pt-4 px-4">
                <div class="bg-secondary rounded-top p-4">
                    <div class="row">
                        <div class="col-12 col-sm-6 text-center text-sm-start">
                            &copy; <a href="#">Your Site Name</a>, All Right Reserved. 
                        </div>
                        <div class="col-12 col-sm-6 text-center text-sm-end">
                            <!--/*** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. ***/-->
                            Designed By <a href="https://htmlcodex.com">HTML Codex</a>
                            <br>Distributed By: <a href="https://themewagon.com" target="_blank">ThemeWagon</a>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Footer End -->

        </div>
        <!-- Content End -->
  

    </div>

    <!-- JavaScript Libraries -->
    <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></script>
    <script src="../lib/chart/chart.min.js"></script>
    <script src="../lib/easing/easing.min.js"></script>
    <script src="../lib/waypoints/waypoints.min.js"></script>
    <script src="../lib/owlcarousel/owl.carousel.min.js"></script>
    <script src="../lib/tempusdominus/js/moment.min.js"></script>
    <script src="../lib/tempusdominus/js/moment-timezone.min.js"></script>
    <script src="../lib/tempusdominus/js/tempusdominus-bootstrap-4.min.js"></script>
    <!-- Template Javascript -->
    <script src="../js/main.js"></script>

    
    <!--custom javaScript-->
    <script src="js-files/addPackage-pack.js"></script><!--main JS script-->
    <!--<script src="js-files/test.js"></script>-->
    <script src="js-files/addForms-pack.js"></script><!--addsforms -->
    <script src="php-files/add-tblpack.php"></script><!--add to database-->


    <!-- Template Javascript -->
    <script src="../js/main.js"></script>
</body>

</html>