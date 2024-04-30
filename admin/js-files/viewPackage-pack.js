$(document).ready(function() {
    // AJAX request to fetch packages
    $.ajax({
        url: 'php-files/show-tblpack.php',
        type: 'GET',
        success: function(data) {
            // Parse the JSON response
            var packages = JSON.parse(data);
        
            // Iterate over packages
            packages.forEach(function(pack) {
                // Create HTML for package card
                var packageCard = '<div class="package-card" style="background-image: url(\'../img/osaka.jpg\')">';
                packageCard += '<div class="row">';
                packageCard += '<a id="closeBtn" class="btn-close bg-danger"></a>';
                packageCard += '</div>';
                packageCard += '<div class="row">';
                packageCard += '<div class="title" id="title">';
                packageCard += '<p>' + pack.title + '</p>';
                packageCard += '</div>';
                packageCard += '<div class="description">';
                packageCard += '<p class="mb-2" id="locations">' + pack.locations + '</p>';
                packageCard += '</div>';
                packageCard += '</div>';
                packageCard += '<div class="row">';
                // Edit button with onclick function
                packageCard += '<a class="button bg-success">Edit Package</a>';//href="editPackage-pack.php?pack_code=' + pack.pack_code + '"
                packageCard += '</div>';
                packageCard += '</div>';

                // Append the package card to packageContainer
                $('#packContainer').append(packageCard);
            });
        }
    });
    
});
