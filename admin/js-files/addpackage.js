$(document).ready(function() {
    function addDayCard() {
        var dayCount = $('.day-card').length + 1; //Get the current count of day cards
        $('.day-card .btn-close').remove(); //removes all close buttons
        var dayCardHtml = `
            <div class="day-card p-3" id="dayCard${dayCount}">
                <!-- Close button -->
                <button type="button" class="btn-close float-end" aria-label="Close"></button>
                <div class="day-row">
                    <h5>Day ${dayCount}</h5>
                </div>
                <div class="day-row d-flex justify-content-center mb-2 p-1">
                    <div class="form-floating col-md-4 w-50">
                        <input class="form-control" type="text" id="meal${dayCount}" placeholder="">
                        <label for="meal${dayCount}">Meals (e.g., b/l/d or b/x/x)</label>
                    </div>
                    <div class="divider"></div>
                    <div class="form-floating col-md-4 w-50">
                        <input class="form-control" type="text" id="acts${dayCount}" placeholder="">
                        <label for="acts${dayCount}">Activities</label>
                    </div>
                </div>
                <div class="day-row d-flex justify-content-center mb-2 p-1">
                    <div class="form-floating col-md-4 w-100">
                        <input class="form-control" type="text" id="areas${dayCount}" placeholder="">
                        <label for="areas${dayCount}">Locations (e.g., city1>city2>city3...)</label>
                    </div>
                </div>
                <div class="day-row d-flex justify-content-center mb-2 p-1">
                    <div class="form-floating col-md-4 w-100">
                        <input class="form-control" type="text" id="optionAct${dayCount}" placeholder="">
                        <label for="optionAct${dayCount}">Optional Activities</label>
                    </div>
                </div>
                <div class="day-row d-flex justify-content-center">
                    <div class="form-floating col-md-4 mr-3">
                        <select type="text" class="form-select" id="hotelstat${dayCount}" placeholder="">
                            <option value="Check-In" id="checkin">Check-In</option>
                            <option value="Transfer" id="transfer">Transfer</option>
                            <option value="Check-Out" id="checkout">Check-Out</option>
                        </select>
                        <label for="hotelstat${dayCount}">Hotel Status</label>
                    </div>
                    <div class="col-md-2 text-center">
                        <p id="verb">To</p>
                    </div>
                    <div class="form-floating col-md-6 ml-3">
                        <input class="form-control" type="text" id="hotel${dayCount}" placeholder="">
                        <label for="hotel${dayCount}">Hotel</label>
                    </div>
                </div>
            </div>
        `;
        $('#dayContainer').append(dayCardHtml);
        //Add Close button ONLY to the latest day card
        $('#dayCard' + dayCount).append('<button type="button" class="btn-close float-end" aria-label="Close"></button>');
        //Close button
        $('#dayCard' + dayCount + ' .btn-close').click(function() {
            $(this).closest('.day-card').remove(); // Remove the day card when the Close button is clicked
            //adds "X" button to the new card
            if ($('.day-card').length > 0) {
                var latestDayCount = $('.day-card').length;
                $('#dayCard' + latestDayCount).append('<button type="button" class="btn-close float-end" aria-label="Close"></button>');
                // Reassign the event listener to the new Close button
                $('#dayCard' + latestDayCount + ' .btn-close').click(function() {
                    $(this).closest('.day-card').remove(); // Remove the day card when the Close button is clicked
                });
            }
        });
    }
    
    function addPrice(){

    }
    function addFlight(){
        var flightHtml = `
        
        `;
    }
    //add Day button
    $('#addDayBtn').click(function() {
        addDayCard();//adds a new day card
    });

    //add price button

    //add flight button

    //clear button
    $('.btn-danger').click(function() {
        //reset form fields
        $('input[type="text"]').val('');
        $('select').val('');
        $('textarea').val('');
    });




    // Event listener for clicking the "Save" button
    $('#saveBtn').click(function() {
        // Initialize an array to store day card data
        var dayCardData = [];
        //package info
        /* ids that are indicated : title route inclusion exclusion */
        //pricelist
        /*derived from multiple values*/
        //flight info

        //day cards
        $('.day-card').each(function(index) {
            var dayCard = $(this);
            var dayData = {};
            // Get data from input fields within the day card
            dayData.day = index + 1;
            dayData.meal = dayCard.find('#meal' + (index + 1)).val();
            dayData.acts = dayCard.find('#acts' + (index + 1)).val();
            dayData.areas = dayCard.find('#areas' + (index + 1)).val();
            dayData.optionAct = dayCard.find('#optionAct' + (index + 1)).val();
            dayData.hotelstat = dayCard.find('#hotelstat' + (index + 1)).val();
            dayData.hotel = dayCard.find('#hotel' + (index + 1)).val();
            // Add day card data to the array
            dayCardData.push(dayData);
        });
        // Send the data to the PHP file using AJAX
        $.ajax({
            url: 'php-files/add-tblpack.php', // Corrected path to the PHP file
            method: 'POST',
            dataType: 'json',
            data: { 
                dayCardData: JSON.stringify(dayCardData)
            
            
            },
            // Inside the AJAX success and error functions
            success: function(response) {
                console.log('Data successfully posted to the server.');
                console.log('Response:', response); // Log the response from the server
            },
            error: function(xhr, status, error) {
                console.error('Error:', error);
                console.log('XHR:', xhr); // Log the XHR object for debugging
            }
        });
        // Display the data in the console
        dayCardData.forEach(function(dayData) {
            console.log('Day ' + dayData.day + ':');
            console.log('Meal: ' + dayData.meal);
            console.log('Acts: ' + dayData.acts);
            console.log('Areas: ' + dayData.areas);
            console.log('Option Act: ' + dayData.optionAct);
            console.log('Hotel Stat: ' + dayData.hotelstat);
            console.log('Hotel: ' + dayData.hotel);
        });
    });
});


/*addpackages here

make sure to add a +(plus) button below the pricing in order 
to add additional pricings in case the package calls for more than 1 prices,
if more than 1 price, then create a duplicate row, but with different price
refer to one of the album images at the gc for reference

*/
/*
make a background selector for the packages
step 1: using japan as a reference(refer to img), display them onto 3 1:2 images(width:height)
step2: if one of the images is clicked, it gets highlighted and is to be set as a variable
step 3: once the save button is clicked, it will be used to create a background 
for the itinerary display(refer to admin.html)

*/