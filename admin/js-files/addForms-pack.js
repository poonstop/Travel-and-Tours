$(document).ready(function(){
    //adds Day Card 
    function addDayCard() {
        var dayCount = $('.day-card').length + 1;
        $('.day-card .btn-close').remove();
        var dayCardHtml = `
            <div class="day-card p-3" id="dayCard${dayCount}">
                <!-- Close button -->
                <button type="button" class="btn-close float-end" aria-label="Close"></button>
                <div class="day-row">
                    <h5>Day ${dayCount}</h5>
                </div>
                <div class="day-row d-flex justify-content-center mb-2 p-1">
                    <div class="form-floating col-md-2 w-25">
                        <input class="form-control" type="text" id="meal${dayCount}" placeholder="">
                        <label for="meal${dayCount}">Meals (e.g., b/l/d or b/x/x)</label>
                    </div>
                    <div class="divider"></div>
                    <div class="form-floating col-md-6 w-100">
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
        $('#dayCard' + dayCount).append('<button type="button" class="btn-close float-end" aria-label="Close"></button>');
        $('#dayCard' + dayCount + ' .btn-close').click(function() {
            $(this).closest('.day-card').remove();
            if ($('.day-card').length > 0) {
                var latestDayCount = $('.day-card').length;
                $('#dayCard' + latestDayCount).append('<button type="button" class="btn-close float-end" aria-label="Close"></button>');
                $('#dayCard' + latestDayCount + ' .btn-close').click(function() {
                    $(this).closest('.day-card').remove();
                });
            }
        });
    } 
    //adds new itinerary form
    $('#addDayBtn').click(function() {
        addDayCard();
    });

    //clear every forms
    $('#clearPack').click(function() {
        $('input[type="text"]').val('');
        $('select').val('');
        $('textarea').val('');
    });
});
