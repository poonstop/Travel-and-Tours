$(document).ready(function(){
    displayPack();
});

function displayPack(){
    $("#searchBar").val("");
    $.ajax({
        url:"php-files/packReport/displaySQL.php",
        type:"POST",
        success: function(data){
            $("#showPack").html(data);
        },
        error: function(xhr, status, error) {
            console.error('Error:', error);
            console.log('XHR:', xhr);
        }


    })

}

