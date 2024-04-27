$(document).ready(function() {
   
    /*
    function addPrice(){

    }
    function addFlight(){
        //var flightHtml = `
        
        //`;
    }
    */
    //add Day button
    

    //add price button

    //add flight button

 
 
    // Function to send immediate data
    function sendPackage(packTitle, route, inclusion, exclusion) {
        // Log package information
        console.log('Package Title:', packTitle);
        console.log('Route:', route);
        console.log('Inclusion:', inclusion);
        console.log('Exclusion:', exclusion);
  
        $.ajax({
            url: 'php-files/add-tblpack.php',
            method: 'POST',
            dataType: 'json',
            data: {
                packTitle: packTitle,
                route: route,
                inclusion: inclusion,
                exclusion: exclusion
            },
            success: function(response) {
                console.log('Immediate data successfully posted to the server.');
                console.log('Response:', response);
            },
            error: function(xhr, status, error) {
                console.error('Immediate Error:', error);
                console.log('XHR:', xhr);
            }
        });
    }
    /*
    separate these related files to addpackinfo.js
    // Function to send delayed data
    function sendDelayedData(dayCardData) {
        setTimeout(function() {
            $.ajax({
                url: 'php-files/add-tblpack.php',
                method: 'POST',
                dataType: 'json',
                data: {
                    dayCardData: JSON.stringify(dayCardData)
                },
                success: function(response) {
                    console.log('Delayed data successfully posted to the server.');
                    console.log('Response:', response);
                },
                error: function(xhr, status, error) {
                    console.error('Delayed Error:', error);
                    console.log('XHR:', xhr);
                }
            });
        }, 2000); // Delay of 2000 milliseconds (2 seconds)
    }
    */
    // Event listener for clicking the "Save" button
    $('#saveBtn').click(function() {
        // Fetch package information from the form
        var packTitle = $('#packTitle').val();
        var route = $('#route').val();
        var inclusion = $('#include').val();
        var exclusion = $('#exclude').val();

        //first batch of info
        sendPackage(packTitle, route, inclusion, exclusion);
        /*
        // Array for day card data
        var dayCardData = [];
    
        // Fetch data from each day card
        $('.day-card').each(function(index) {
            var dayCard = $(this);
            var dayData = {
                day: index + 1,
                meal: dayCard.find('#meal' + (index + 1)).val(),
                acts: dayCard.find('#acts' + (index + 1)).val(),
                areas: dayCard.find('#areas' + (index + 1)).val(),
                optionAct: dayCard.find('#optionAct' + (index + 1)).val(),
                hotelstat: dayCard.find('#hotelstat' + (index + 1)).val(),
                hotel: dayCard.find('#hotel' + (index + 1)).val()
            };
            dayCardData.push(dayData);
        });
    
        // Log day card data
        console.log('Day Card Data:', dayCardData);
    
        // Send delayed data
        sendDelayedData(dayCardData);
        */
    });



});


/*
make a background selector for the packages
step 1: using japan as a reference(refer to img), display them onto 3 1:2 images(width:height)
step2: if one of the images is clicked, it gets highlighted and is to be set as a variable
step 3: once the save button is clicked, it will be used to create a background 
for the itinerary display(refer to admin.html)

*/