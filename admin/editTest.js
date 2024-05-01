$(document).ready(function() {
    // Retrieve the pack_code from the URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const packCode = urlParams.get('pack_code');

    // Print the retrieved pack_code on the console
    console.log("Retrieved pack_code:", packCode);
});
