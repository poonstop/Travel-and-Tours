$(document).ready(function() {
    // Function to add a day card
    function addDayCard(dayCount, data) {
        $('.day-card .btn-close').remove();
        // Contains the HTML for the day card
        var dayCardHtml = `
            <div class="day-card p-3" id="dayCard${dayCount}">
                <div class="day-row d-flex">
                    <div class="form-floating col-md-10  d-flex justify-content-start">
                        <h5>Day ${dayCount}</h5>
                    </div>
                    <div class="form-floating col-md-2 d-flex justify-content-end">
                        <button type="button" class="btn-close " aria-label="Close"></button>
                    </div>
                </div>
                <div class="day-row d-flex justify-content-center mb-2">
                    <div class="form-floating col-md-4 w-25">
                        <input class="form-control" type="text" id="meal${dayCount}" maxlength="5" value="${data['meals'] || ''}">
                        <label for="meal${dayCount}">Meals (B/L/D)</label>
                    </div>
                    <div class="divider"></div>
                    <div class="form-floating col-md-4 w-75">
                        <input class="form-control" type="text" id="acts${dayCount}" value="${data['activity'] || ''}">
                        <label for="acts${dayCount}">Activities</label>
                    </div>
                </div>
                <div class="day-row mb-2 w-100">
                    <div class="form-floating w-100">
                        <input class="form-control" type="text" id="areas${dayCount}" value="${data['poi'] || ''}">
                        <label for="areas${dayCount}">Locations (location1>location2>location3...)</label>
                    </div>
                </div>
                <div class="day-row mb-2 w-100">
                    <div class="form-floating w-100">
                        <input class="form-control" type="text" id="optionAct${dayCount}" value="${data['optional'] || ''}">
                        <label for="optionAct${dayCount}">Optional Activities</label>
                    </div>
                </div>
                <div class="day-row d-flex justify-content-center">
                    <div class="form-floating col-md-4 mr-3">
                        <select type="text" class="form-select" id="hotelstat${dayCount}" placeholder="">
                            <option value="N/A" id="notAP">N/a</option>
                            <option value="Check-In" id="checkin" ${data['hotel_stat'] === 'Check-In' ? 'selected' : ''}>Check-In</option>
                            <option value="Check-Out" id="checkout" ${data['hotel_stat'] === 'Check-Out' ? 'selected' : ''}>Check-Out</option>
                        </select>
                        <label for="hotelstat${dayCount}">Hotel Status</label>
                    </div>
                    <div class="col-md-2 text-center">
                        <p id="verb">To</p>
                    </div>
                    <div class="form-floating col-md-6 ml-3">
                        <input class="form-control" type="text" id="hotel${dayCount}" placeholder="${data['hotel'] || ''}">
                        <label for="hotel${dayCount}">Hotel</label>
                    </div>
                </div>
                <div class="day-row d-flex justify-content-center mt-2">
                    <button class="btn btn-danger clearBtn" data-day="${dayCount}">Clear</button>
                </div>
            </div>
        `;
        $('#dayContainer').append(dayCardHtml);
        // Event listener to remove the day card
        $('#dayCard' + dayCount + ' .btn-close').click(function() {
            $(this).closest('.day-card').remove();
        });
    }

    // Function to add a price card
    function addPriceCard(currency = '', price = '', priceDesc = '') {
        var priceCount = $('.price-card-add').length + 1;
        var priceCardHtml= `
            <div id="priceCard${priceCount}" class="price-card-add rounded bg-secondary p-2 mb-2">
                <h6>Price ${priceCount}</h6>
                <div class="row">
                    <div class="col-md-6"> 
                        <div class="form-floating mb-2"> 
                            <input type="text" class="form-control" id="curr${priceCount}" placeholder="" maxlength="4" value="${currency}">
                            <label for="curr${priceCount}">Currency</label>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-floating mb-2"> 
                            <input type="number" class="form-control" id="amount${priceCount}" placeholder="" value="${price}">
                            <label for="amount${priceCount}">Amount</label>
                        </div>
                    </div>
                </div>      
                <div class="row"> 
                    <div class="col-md-12">
                        <div class="form-floating mb-2">
                            <input type="text" class="form-control" id="priceDesc${priceCount}" placeholder="" value="${priceDesc}">
                            <label for="priceDesc${priceCount}">Description</label>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="d-flex justify-content-end">
                        <button id="clearPriceBtn${priceCount}" class="btn btn-danger clearPriceBtn">Clear</button>
                    </div>
                </div>
            </div>
        `;
        $('#priceContainer').append(priceCardHtml);
    }

    // Function to add a flight card
    function addFlightCard(plane = '', start = '', end = '') {
        var flightCount = $('.flight-card-add').length + 1;
        var flightCardHtml = `
            <div id="flightCard${flightCount}" class="flight-card-add rounded bg-secondary p-2 mb-2">
                <h6>Flight ${flightCount}</h6>
                <div class="row">
                    <div class="mb-2">
                        <div class="form-floating">
                            <input type="text" class="form-control" id="plane${flightCount}" placeholder="" value="${plane}">
                            <label for="plane${flightCount}">Airline Plane</label>
                        </div>
                    </div>
                </div>
                <div class="row d-flex justify-content-center">
                    <div class="col-md-4  w-50">
                        <div class="form-floating mb-2">
                            <input class="form-control" type="date" id="schedStart${flightCount}"value="${start}">
                            <label for="schedStart${flightCount}">Start Date</label>
                        </div>
                    </div>
                    <div class="col-md-4  w-50">
                        <div class="form-floating mb-2">
                            <input class="form-control" type="date" id="schedEnd${flightCount}" placeholder="" value="${end}">
                            <label for="schedEnd${flightCount}">End Date</label>                                                      
                        </div>
                    </div>        
                </div>
                <div class="row">
                    <div class="d-flex justify-content-end">
                        <button id="clearflightBtn${flightCount}" class="btn btn-danger clearflightBtn">Clear</button>
                    </div>
                </div>
            </div> 
        `;
        $('#flightContainer').append(flightCardHtml);
    }

    // Event listener to add a new day card
    $('#addDayBtn').click(function() {
        var numberOfDayCards = $('.day-card').length + 1;
        addDayCard(numberOfDayCards, { meals: '', activity: '', poi: '', optional: '', hotel: '' });
    });

    // Event listener to add a new price card
    $('#addPrice').click(function() {
        addPriceCard();
    });

    // Event listener to add a new flight card
    $('#addFlight').click(function() {
        addFlightCard();
    });

    // Event listener for clear buttons on day cards
    $(document).on('click', '.clearBtn', function() {
        var dayCount = $(this).data('day');
        clearDayCard(dayCount);
    });

    // Event listener for clear buttons on flight cards
    $(document).on('click', '.clearflightBtn', function() {
        var flightCount = $(this).attr('id').replace('clearflightBtn', '');
        clearFlightCard(flightCount);
    });

    // Event listener for clear buttons on price cards
    $(document).on('click', '.clearPriceBtn', function() {
        var priceCount = $(this).attr('id').replace('clearPriceBtn', '');
        clearPriceCard(priceCount);
    });

    // Function to clear values within a specific day card
    function clearDayCard(dayCount) {
        $('#meal' + dayCount).val('');
        $('#acts' + dayCount).val('');
        $('#areas' + dayCount).val('');
        $('#optionAct' + dayCount).val('');
        $('#hotel' + dayCount).val('');
        $('#hotelstat' + dayCount).val('N/A');
    }

    // Function to clear values within a specific flight card
    function clearFlightCard(flightCount) {
        $('#plane' + flightCount).val('');
        $('#schedStart' + flightCount).val('');
        $('#schedEnd' + flightCount).val('');
    }

    // Function to clear values within a specific price card
    function clearPriceCard(priceCount) {
        $('#curr' + priceCount).val('');
        $('#amount' + priceCount).val('');
        $('#priceDesc' + priceCount).val('');
    }
});
