$(document).ready(function() {
    //pull data from database
     
        function getPackCodeFromURL(url) {
            var urlParams = new URLSearchParams(url);
            return urlParams.get('pack_code');
        }
    
        // Event handler for edit button click
        $('#editBtn').on('click', function() {
            // Get the URL of the edit button
            var editUrl = $(this).attr('href');
            // Extract the pack code from the URL
            var packCode = getPackCodeFromURL(editUrl);
    
            // AJAX request to fetch package details
            $.ajax({
                url: 'php-files/show-package.php',
                type: 'GET',
                data: { pack_code: packCode },
                success: function(data) {
                    // Parse the JSON response
                    var package = JSON.parse(data);
                
                    // Append package details to HTML elements
                    $('#packTitle').val(package.title);
                    $('#route').val(package.route);
                    $('#include').val(package.inclusion);
                    $('#exclude').val(package.exclusion);
                }
            });
        });




});
//edit package

//delete package(optional)