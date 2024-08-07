document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    const username = document.getElementById('nm').value;
    const password = document.getElementById('ps').value;

    
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
    else {
        window.location.href = 'home-page.html';
    }
    })
