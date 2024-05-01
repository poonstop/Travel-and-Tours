$(document).ready(function() {
    // Function to save package data
    function savePackageData() {
        // Display a confirmation message
        if (confirm("Are you sure you want to save the package data?")) {
            // Retrieve pack code from URL parameter
            const packCode = new URLSearchParams(window.location.search).get('pack_code');
            
            // Retrieve data from forms
            const packTitle = $('#packTitle').val();
            const route = $('#route').val();
            const include = $('#include').val();
            const exclude = $('#exclude').val();

            // Data for tbl_flight forms
            const flightListData = [];
            $('.flight-card-add').each(function(index) {
                const flightCard = $(this);
                const flightData = {
                    flight: index + 1,
                    plane: flightCard.find('#plane' + (index + 1)).val(),
                    schedStart: flightCard.find('#schedStart' + (index + 1)).val(),
                    schedEnd: flightCard.find('#schedEnd' + (index + 1)).val(),
                };
                flightListData.push(flightData);
            });

            // Data for tbl_price forms
            const priceCardData = [];
            $('.price-card-add').each(function(index) {
                const priceCard = $(this);
                const priceData = {
                    price: index + 1,
                    currency: priceCard.find('#curr' + (index + 1)).val(),
                    amount: priceCard.find('#amount' + (index + 1)).val(),
                    desc: priceCard.find('#priceDesc' + (index + 1)).val(),
                };
                priceCardData.push(priceData);
            });

            // Data for tbl_itinerary forms
            const dayCardData = [];
            $('.day-card').each(function(index) {
                const dayCard = $(this);
                const dayData = {
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

            // Debug log
            console.log('Pack Code: ', packCode);
            console.log('Package Title:', packTitle);
            console.log('Route:', route);
            console.log('Include:', include);
            console.log('Exclude:', exclude);
            console.log('Price Card Data:', priceCardData);
            console.log('Flight Card Data:', flightListData);
            console.log('Day Card Data:', dayCardData);

            // AJAX POST request to save data
            $.ajax({
                url: 'php-files/edit-tblpack.php',
                method: 'POST',
                dataType: 'json',
                data: {
                    packCode: packCode,
                    packTitle: packTitle,
                    route: route,
                    include: include,
                    exclude: exclude,
                    flightListData: JSON.stringify(flightListData),
                    priceCardData: JSON.stringify(priceCardData),
                    dayCardData: JSON.stringify(dayCardData)
                },
                success: function(response) {
                    console.log('Data successfully posted to backend.');
                    console.log('Response:', response);
                    // Add code here to display a success message to the user
                },
                error: function(xhr, status, error) {
                    console.error('Error:', error);
                    console.log('XHR:', xhr);
                    // Add code here to display an error message to the user
                }
            });
        } else {
            // Add code here if the user cancels the save operation
            console.log('Save operation cancelled.');
        }
    }
    // Event listener for saving the package
    $('#saveBtn').click(function() {
        savePackageData();
    });

});
