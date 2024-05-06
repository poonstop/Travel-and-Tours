$(document).ready(function() {
    $('#saveBtn').click(function() {
        if (confirm("Are you sure you want to save?")) {
            const urlParams = new URLSearchParams(window.location.search);
            const packCode = urlParams.get('pack_code');
            console.log(packCode);
           
            var priceCardData = [];
            $('.price-card-add').each(function(index) {
                //gets data from the form
                priceCardData.push({
                    price_code: $(this).find('#priceCode').text(),
                    currency: $(this).find('#curr' + (index + 1)).val(),
                    amount: $(this).find('#amount' + (index + 1)).val(),
                    price_desc: $(this).find('#priceDesc' + (index + 1)).val()
                });
            });
            
            var flightCardData = [];
            $('.flight-card-add').each(function(index) {   
                flightCardData.push({
                    flight_code: $(this).find('#flightCode').text(),
                    travel_start: $(this).find('#schedStart' + (index + 1)).val(),
                    travel_end: $(this).find('#schedEnd' + (index + 1)).val(),
                    plane: $(this).find('#plane' + (index + 1)).val()
                });
            });

            var dayCardData = [];
            $('.day-card').each(function(index) {   
                dayCardData.push({
                    itinerary_id: $(this).find('#dayId').text(),
                    day: parseInt($(this).find('#dayNum').text().match(/\d+/)[0]),//watch out for this in case of errors note: pa especial kasi ito smh
                    meals: $(this).find('#meal' + (index + 1)).val(),
                    hotel_stat: $(this).find('#hotelstat' + (index + 1)).val(),
                    hotel: $(this).find('#hotel' + (index + 1)).val(),
                    activity: $(this).find('#acts' + (index + 1)).val(),
                    poi: $(this).find('#areas' + (index + 1)).val(),
                    optional: $(this).find('#optionAct' + (index + 1)).val(),
                });
            });

            // Log the data in the console
            console.log('POST Day Data:', dayCardData);
            console.log('POST Price Data:', priceCardData);    
            console.log('POST Flight Data:', flightCardData);    

            // Make the AJAX request
            $.ajax({
                url: 'php-files/UPDATE/tbl_price.php',
                type: 'POST',
                data: {
                    packCode: packCode, 
                    priceData: JSON.stringify(priceCardData),
                    flightData: JSON.stringify(flightCardData),
                    dayData: JSON.stringify(dayCardData)
                },
                dataType: 'json',
                success: function(response) {
                    // Handle success response
                    console.log('Data saved successfully:', response);
                    alert('Data saved successfully');
                },
                error: function(xhr, status, error) {
                    // Handle error response
                    console.error('Error saving data:', error);
                    alert('Error saving data. Please try again.');
                }
            });
        }
    });
});
