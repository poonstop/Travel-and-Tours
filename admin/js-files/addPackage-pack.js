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
        const packCode = `${year}${month}${day}_${hours}${minutes}${seconds}_${milliseconds}`;//creates value for PK

        const packTitle = $('#packTitle').val();
        const route = $('#route').val();
        const include = $('#include').val();
        const exclude = $('#exclude').val();
        

        //HEY YOU!! use this code snippet for reference on getting the values of each iteration of a form
        //tbl_flight forms
        const flightListData = [];//array for each flight's data

        //this code puts the value of each items into the array above
        $('.flight-card-add').each(function(index) {
            const flightCard = $(this);
            //this is the JSON file which contains a single index of an array(mind you that the array is 2 dimensional)
            //example flightListData= [{flight: 1, plane: 'ada', ..}, {flight: 2, plane: 'baba', ...}, ...]
            const flightData = {
                flight: index + 1,
                plane: flightCard.find('#plane' + (index + 1)).val(),
                schedStart: flightCard.find('#schedStart' + (index + 1)).val(),
                schedEnd: flightCard.find('#schedEnd' + (index + 1)).val(),
            };
            flightListData.push(flightData);//this code pushes the values into the array
        });

        //tbl_price forms
        const priceCardData = [];//array for each prices' data
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

        // Debug for console
        console.log('Pack Code: ', packCode);
        console.log('Package Title:', packTitle);
        console.log('Route:', route);
        console.log('Include:', include);
        console.log('Exclude:', exclude);
        console.log('Price Card Data:', priceCardData);//pricesdata JSON 
        console.log('Flight Card Data:', flightListData);//flights data JSON 
        console.log('Day Card Data:', dayCardData);//days data JSON 

        // Add condition where if forms are empty, don't do this function (not sure if you have to nest the if)
        /*
        if (packTitle == null || route == null || include == null || exclude == null){

        }
        */
        //create display confirm message, if clicked on yes, then save
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
                flightListData: JSON.stringify(flightListData), //tbl_flight
                priceCardData: JSON.stringify(priceCardData),//tbl_price
                dayCardData: JSON.stringify(dayCardData)//tbl_itinerary
            },
            success: function(response) {
                console.log('Data successfully posted to backend.');
                console.log('Response:', response);
                //add line of code here that displays message that asks the user if they still want to insert a package, if so, clear all forms, otherwise, clear all forms and redirect to the package.php 
            },
            error: function(xhr, status, error) {
                console.error('Error:', error);
                console.log('XHR:', xhr);
            }
        }); 
    });
});
