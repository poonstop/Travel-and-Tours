$(document).ready(function() {
    // Event listener for saving the package
    $('#saveBtn').click(function() {
        //tbl_pack forms
        //creation of primary key for each rows of tbl_pack 
        const currentDate = new Date();
        const year = currentDate.getFullYear();
        let month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
        let day = currentDate.getDate().toString().padStart(2, '0');
        let hours = currentDate.getHours().toString().padStart(2, '0');
        let minutes = currentDate.getMinutes().toString().padStart(2, '0');
        let seconds = currentDate.getSeconds().toString().padStart(2, '0');
        let milliseconds = currentDate.getMilliseconds().toString().padStart(3, '0');
        const packCode = `${year}${month}${day}_${hours}${minutes}${seconds}_${milliseconds}`;//sets value for PK
        const packTitle = $('#packTitle').val();
        const route = $('#route').val();
        const include = $('#include').val();
        const exclude = $('#exclude').val();
        
        //tbl_itinerary forms
        const dayCardData = [];//array for each days' data
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
        //debug for console
        console.log('Pack Code: ', packCode);
        console.log('Package Title:', packTitle);
        console.log('Route:', route);
        console.log('Include:', include);
        console.log('Exclude:', exclude);
        console.log('Day Card Data:', dayCardData);//day card JSON 
        
        $.ajax({
            url: 'php-files/add-tblpack.php',
            method: 'POST',
            dataType: 'json',
            data: {
                //tbl_pack
                packCode: packCode,
                packTitle: packTitle,
                route: route,
                include: include,
                exclude: exclude,
                dayCardData: JSON.stringify(dayCardData)//tbl_itinerary 
            },
            success: function(response) {
                console.log('Data successfully posted to backend.');
                console.log('Response:', response);
            },
            error: function(xhr, status, error) {
                console.error('Error:', error);
                console.log('XHR:', xhr);
            }
        });
    });
});



/*
make a background selector for the packages
step 1: using japan as a reference(refer to img), display them onto 3 1:2 images(width:height)
step2: if one of the images is clicked, it gets highlighted and is to be set as a variable
step 3: once the save button is clicked, it will be used to create a background 
for the itinerary display(refer to admin.html)

*/