document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    const username = document.getElementById('nm').value;
    const password = document.getElementById('ps').value;

    // Show the loader
    document.getElementById('loader').style.display = 'block';

    // Validation logic
    const correctPassword = 'aftab2005';
    const correctUsername = 'aftab shahmadar';

    let errorMessage = '';

    if (username !== correctUsername && password !== correctPassword) {
        errorMessage = "You've entered both username and password incorrectly, please try again.";
    } else if (username !== correctUsername) {
        errorMessage = "You've entered the wrong username, please try again.";
    } else if (password !== correctPassword) {
        errorMessage = "You've entered the wrong password, please try again.";
    }

    if (errorMessage) {
        // Show error message after a delay and hide the loader
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
