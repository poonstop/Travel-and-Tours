$(document).ready(function() {
    function addDayCard() {
        var dayCount = $('.day-card').length + 1; // Get the current count of day cards
        $('.day-card .btn-close').remove();// Remove all close btn 
        var dayCardHtml = `
                        <div class="day-card p-3" id="dayCard${dayCount}">
                            <!-- Close button -->
                            <button type="button" class="btn-close float-end" aria-label="Close"></button>

                            <div class="day-row">
                                <h5>Day ${dayCount}</h5>
                            </div>
                            <div class="day-row d-flex justify-content-center mb-2 p-1">
                                <div class="form-floating col-md-4 w-50">
                                    <input class="form-control" type="text" id="meal" placeholder="">
                                    <label for="meal">Meals(ex. b/l/d or b/x/x)</label>
                                </div>
                                <div class="divider"></div>
                                <div class="form-floating col-md-4 w-50">
                                    <input class="form-control" type="text" id="acts" placeholder="">
                                    <label for="acts">Activities</label>
                                </div>
                            </div>
                            <div class="day-row d-flex justify-content-center mb-2 p-1">
                                <div class="form-floating col-md-4 w-100">
                                    <input class="form-control" type="text" id="areas" placeholder="">
                                    <label for="areas">Locations(ex. city1>city2>city3...)</label>
                                </div>
                            </div>
                            <div class="day-row d-flex justify-content-center mb-2 p-1">
                                <div class="form-floating col-md-4 w-100">
                                    <input class="form-control" type="text" id="optionAct" placeholder="">
                                    <label for="optionAct">Optional Activities</label>
                                </div>
                            </div>
                            <div class="day-row d-flex justify-content-center">
                                <div class="form-floating col-md-4 mr-3">
                                    <select type="text" class="form-select" id="hotelstat" placeholder="">
                                        <option value="Check-In" id="checkin">Check-In</option>
                                        <option value="Transfer" id="transfer">Transfer</option>
                                        <option value="Check-Out" id="checkout">Check-Out</option>
                                    </select>
                                    <label for="hotelstat">Hotel Status</label>
                                </div>
                                <div class="col-md-2 text-center">
                                    <p id="verb">To</p><!--add script to change this depending on the-->
                                </div>
                                <div class="form-floating col-md-6 ml-3">
                                    <input class="form-control" type="text" id="hotel" placeholder="">
                                    <label for="hotel">Hotel</label>
                                </div>
                            </div>
                        </div>
                    `;
        $('#dayContainer').append(dayCardHtml);
        // Add Close button only to the latest day card
        $('#dayCard' + dayCount).append('<button type="button" class="btn-close float-end" aria-label="Close"></button>');
        // Event listener for Close button click
        $('#dayCard' + dayCount + ' .btn-close').click(function() {
            $(this).closest('.day-card').remove(); // Remove the day card when the Close button is clicked
            // If there are remaining day cards, add "X" button to the new latest card
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
    //Add Day button
    $('#addDayBtn').click(function() {
        addDayCard(); // Add a new day card when the button is clicked
    });
     //Clear button
    $('.btn-danger').click(function() {
        // Reset form fields
        $('input[type="text"]').val('');
        $('select').val('');
        $('textarea').val('');
    });
});

// Event listener for Save button click(being fixed)
$('.btn-success').click(function() {
    // Initialize an array to store day card data
    var dayCardData = [];

    // Loop through each day card
    $('.day-card').each(function(index) {
        var dayCard = $(this);
        var dayData = {};

        // Get data from input fields within the day card
        dayData.day = index + 1;
        dayData.meal = dayCard.find('input#meal').val();
        dayData.acts = dayCard.find('input#acts').val();
        dayData.areas = dayCard.find('input#areas').val();
        dayData.optionAct = dayCard.find('input#optionAct').val();
        dayData.hotelstat = dayCard.find('select#hotelstat').val();
        dayData.hotel = dayCard.find('input#hotel').val();

        // Add day card data to the array
        dayCardData.push(dayData);
    });

    // Send data via AJAX to addpackage.js
    $.ajax({
        url: 'addpackage.js', // Path to your addpackage.js script
        method: 'POST',
        dataType: 'json', // Assuming the response will be JSON
        data: { dayCardData: JSON.stringify(dayCardData) },
        success: function(response) {
            // Print each day card and its corresponding data to the console
            dayCardData.forEach(function(dayData) {
                console.log('Day ' + dayData.day + ':');
                console.log(dayData);
            });
        },
        error: function(xhr, status, error) {
            console.error('Error:', error);
        }
    });
});

/*addpackages here
// Function to handle saving the day card data
function saveDayCardData(dayCardData) {
    $.ajax({
        url: '../php-files/add-tblpack.php', // Replace with the URL of your PHP script
        method: 'POST',
        data: { dayCardData: dayCardData },
        success: function(response) {
            // Handle success response
            console.log(response);
        },
        error: function(xhr, status, error) {
            // Handle error response
            console.error(error);
        }
    });
}

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