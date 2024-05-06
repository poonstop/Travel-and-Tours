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
                <h6>Itinerary ID: ${data['itinerary_id']}</h6> <!-- Added itinerary_id here -->
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
                <div class="row">
                    <div class="d-flex justify-content-end">
                        <button class="btn btn-danger clearBtn" data-day="${dayCount}">Clear</button>
                    </div>
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
    function addPriceCard(priceCode = '', currency = '', price = '', priceDesc = '') {
        var priceCount = $('.price-card-add').length + 1;
        var priceCardHtml= `
            <div id="priceCard${priceCount}" class="price-card-add rounded bg-secondary p-2 mb-2">
                <h5>Price ${priceCount}</h5>
                <h6 id="priceCode">${priceCode}</h6>
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
                            <select class="form-select" id="plane${flightCount}">
                                <option value="Airplane 1" ${plane === 'Airplane 1' ? 'selected' : ''}>Airplane 1</option>
                                <option value="Airplane 2" ${plane === 'Airplane 2' ? 'selected' : ''}>Airplane 2</option>
                            </select>
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
    
    // Function to fetch price data from PHP script
    function fetchPriceData(packCode) {
        $.ajax({
            url: 'php-files/GET-edit/price.php',
            type: 'GET',
            data: { pack_code: packCode },
            dataType: 'json',
            success: function(data) {
                // Log the received price data
                console.log('Received price data:', data);
                
                // Loop through the data to populate price cards
                for (var i = 0; i < data.length; i++) {
                    addPriceCard(data[i]['price_code'], data[i]['currency'], data[i]['price'], data[i]['price_desc']);
                }
               
            },
            error: function(xhr, status, error) {
                // Log any errors that occur during the AJAX request
                console.error('Error fetching price data:', error);
            }
        });
    }
 
        

    // Function to fetch flight data from PHP script
    function fetchFlightData(packCode) {
        $.ajax({
            url: 'php-files/GET-edit/flight.php',
            type: 'GET',
            data: { pack_code: packCode },
            dataType: 'json',
            success: function(data) {
                // Log the received flight data
                console.log('Flight data:', data);
    
                // Loop through the data to populate flight cards
                for (var i = 0; i < data.length; i++) {
                    addFlightCard(data[i]['plane'], data[i]['travel_start'], data[i]['travel_end']);
                }
            },
            error: function(xhr, status, error) {
                // Log any errors that occur during the AJAX request
                console.error('Error fetching flight data:', error);
            }
        });
    }
        
    // Function to fetch itinerary data from PHP script
    function fetchItineraryData(packCode) {
        $.ajax({
            url: 'php-files/GET-edit/itinerary.php',
            type: 'GET',
            data: { pack_code: packCode },
            dataType: 'json',
            success: function(data) {
                // Log the received itinerary data
                console.log('Itinerary data:', data);
                
                // Loop through the data to populate day cards
                for (var i = 0; i < data.length; i++) {
                    addDayCard(i + 1, data[i]);
                }
            },
            error: function(xhr, status, error) {
                // Log any errors that occur during the AJAX request
                console.error('Error fetching itinerary data:', error);
            }
        });
    }
    
    // Get the pack_code from the URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const packCode = urlParams.get('pack_code');
    
    // Call the fetchItineraryData function with the received pack_code
    if (packCode) {
        fetchItineraryData(packCode);
        fetchPriceData(packCode);
        fetchFlightData(packCode);
    } else {
        console.error('Pack code not found in URL parameters');
    }
});
