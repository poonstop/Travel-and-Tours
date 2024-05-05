$(document).ready(function() {
    // Function to prompt user before saving
    $('#saveBtn').click(function() {
        if (confirm("Are you sure you want to save?")) {
            // Get pack_code from URL parameters
            const urlParams = new URLSearchParams(window.location.search);
            const packCode = urlParams.get('pack_code');
            console.log(packCode);
            // Array to store price card data
            var priceCardData = [];
           
            // Loop through each price card
            $('.price-card-add').each(function(index) {
                var priceCode = $(this).find('h6').text().match(/\d+/)[0];
                var currency = $(this).find('#curr' + (index + 1)).val(); // Get currency value
                var amount = $(this).find('#amount' + (index + 1)).val(); // Get amount value
                var priceDesc = $(this).find('#priceDesc' + (index + 1)).val(); // Get price description value
                
                // Push data to priceCardData array
                priceCardData.push({
                    price_code: priceCode,
                    currency: currency,
                    amount: amount,
                    price_desc: priceDesc
                });
            });
            
            // Log the data in the console
            console.log('POST Price Card Data:', priceCardData);
            

            $.ajax({
                url: 'php-files/UPDATE/tbl_price.php',
                type: 'POST',
                data: {
                    packCode: packCode, 
                    priceData: JSON.stringify(priceCardData) 
                }, // Modified data format
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
