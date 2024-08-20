document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    const username = document.getElementById('nm').value;
    const password = document.getElementById('ps').value;

    document.getElementById('loader').style.display = 'block';

    
    let errorMessage = '';

    
    const correctPassword = 'aftab2005';
    const correctUsername = 'aftab shahmadar'

    if (username !== correctUsername && password !== correctPassword) {
        swal("Oops!", "You've entered both username and password incorrectly, please try again.", "error");
    } 
    else if (username !== correctUsername) {
        swal("Oops!", "You've entered the wrong username, please try again.", "error");
    } 
    else if (password !== correctPassword) {
        swal("Oops!", "You've entered the wrong password, please try again.", "error");
    } 

    else if (errorMessage) {
        // Hide the loader and show the error message
        setTimeout(function() {
            document.getElementById('loader').style.display = 'none';
            swal("Oops!", errorMessage, "error");
        }, 3000); // Delay for 3 seconds
    } else {
        // Redirect to the home page after a delay
        setTimeout(function() {
            document.getElementById('loader').style.display = 'none';
            window.location.href = 'home-page.html';
        }, 3000); // Delay for 3 seconds
    }
});


    
