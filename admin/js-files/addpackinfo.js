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
                            <option value="N/A" id="notAP">N/a</option>
                            <option value="Check-In" id="checkin">Check-In</option>
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
    //clear button(might improve later)
    $('.btn-danger').click(function() {
        //reset form fields
        $('input[type="text"]').val('');
        $('select').val('');
        $('textarea').val('');
    });

    $('#addDayBtn').click(function() {
        addDayCard();
    });


});