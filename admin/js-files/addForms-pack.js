$(document).ready(function(){
    //adds Day Card
    //if got enough time, add clear and remove button below the day cards and add clear btn for each card
    function addDayCard() {
        var dayCount = $('.day-card').length + 1;//sets the value of the day card, is referenced by the JSON array
        $('.day-card .btn-close').remove();
        //contains the HTML to be repeatedly displayed as a form
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
                        <input class="form-control" type="text" id="meal${dayCount}" maxlength=5 placeholder="">
                        <label for="meal${dayCount}">Meals (B/L/D)</label>
                    </div>
                    <div class="divider"></div>
                    <div class="form-floating col-md-4 w-75">
                        <input class="form-control" type="text" id="acts${dayCount}" placeholder="">
                        <label for="acts${dayCount}">Activities</label>
                    </div>
                </div>
                <div class="day-row mb-2 w-100">
                    <div class="form-floating w-100">
                        <input class="form-control" type="text" id="areas${dayCount}" placeholder="">
                        <label for="areas${dayCount}">Locations (location1>location2>location3...)</label>
                    </div>
                </div>
                <div class="day-row mb-2 w-100">
                    <div class="form-floating w-100">
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
        $('#dayContainer').append(dayCardHtml);//creates it inside the dayContainer div
        //might fix this or remove
        $('#dayCard' + dayCount + ' .btn-close').click(function() {
            $(this).closest('.day-card').remove();
        });
    } 
    function addFlightCard() {
        var flightCount = $('.flight-card-add').length + 1;
        var flightCardHtml = `
            <div id="flightCard${flightCount}" class="flight-card-add rounded bg-secondary p-2 mb-2">
                <h6>Flight ${flightCount}</h6>
                <div class="row">
                    <div class="mb-2">
                        <div class="form-floating">
                            <input type="text" class="form-control" id="plane${flightCount}" placeholder="">
                            <label for="plane${flightCount}">Airline Plane</label>
                        </div>
                    </div>
                </div>
                <div class="row d-flex justify-content-center">
                    <div class="col-md-4  w-50">
                        <div class="form-floating mb-2">
                            <input class="form-control" type="date" id="schedStart${flightCount}" placeholder="">
                            <label for="schedStart${flightCount}">Start Date</label>
                        </div>
                    </div>
                    <div class="col-md-4  w-50">
                        <div class="form-floating mb-2">
                            <input class="form-control" type="date" id="schedEnd${flightCount}" placeholder="">
                            <label for="schedEnd${flightCount}">End Date</label>                                                      
                        </div>
                    </div>        
                </div>
                <div class="row">
                    <div class="d-flex justify-content-end">
                        <button id="clearflightBtn${flightCount}" class="btn btn-danger">Clear</button>
                    </div>
                </div>
            </div> 
        `;
        $('#flightContainer').append(flightCardHtml);
    }
    
    function addPriceCard(){
        var priceCount = $('.price-card-add').length + 1;
        var priceCardHtml= `
        <div id="priceCard${priceCount}" class="price-card-add rounded bg-secondary p-2 mb-2">
            <div>
                <h6>Price ${priceCount}</h6>
                <!--insert close button somewhere here--> 
            </div>
            <div class="row">
                <div class="col-md-6"> 
                    <div class="form-floating mb-2"> 
                        <select type="text" class="form-select" id="curr${priceCount}" placeholder="">
                            <option value="PHP" id="php">PHP</option>
                            <option value="USD" id="usd">USD</option>
                            <option value="EUR" id="eur">EUR</option>
                        </select>
                        <label for="curr${priceCount}">Currency</label>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-floating mb-2"> 
                        <input type="number" class="form-control" id="amount${priceCount}" placeholder="">
                        <label for="amount${priceCount}">Amount</label>
                    </div>
                </div>
            </div>      
            <div class="row"> 
                <div class="col-md-12">
                    <div class="form-floating mb-2">
                        <input type="text" class="form-control" id="priceDesc${priceCount}" placeholder="">
                        <label for="priceDesc${priceCount}">Description</label>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="d-flex justify-content-end">
                    <button id="clearPriceBtn${priceCount}" class="btn btn-danger">Clear</button>
                </div>
            </div>
        </div>
        `;
        $('#priceContainer').append(priceCardHtml);
    }
     //adds new flight
     $('#addPrice').click(function(){
        addPriceCard();
    });
    
    //adds new flight
    $('#addFlight').click(function(){
        addFlightCard();
    });
    
    //adds new itinerary form
    $('#addDayBtn').click(function() {
        addDayCard();
    });

    //clear every forms(modify so that it can only clear a specific form)
    $('#clearPack').click(function() {
        $('input[type="text"]').val('');
        $('select').val('');
        $('textarea').val('');
    });
    
});
