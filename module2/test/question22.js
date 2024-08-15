document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    const username = document.getElementById('nm').value;
    const password = document.getElementById('ps').value;
    const email    = document.getElementById('em').value;

    
    const correctPassword = 'aftab2005';
    const correctUsername = 'aftab shahmadar'
    const correctEmail    = 'aftabshahmadar@gmail.com'       

    if (username !== correctUsername && password !== correctPassword && email !== correctEmail) {
        swal("Oops!", "You've entered details incorrectly, please try again.", "error");
    } 
    else if (username !== correctUsername && password !== correctPassword) {
        swal("Oops!", "You've entered the wrong username and password, please try again.", "error");
    } 
    else if (username !== correctUsername && email !== correctEmail) {
        swal("Oops!", "You've entered the wrong password and email, please try again.", "error");
    } 
    else if (password !== correctPassword && email !== correctEmail) {
        swal("Oops!", "You've entered the wrong password and email, please try again.", "error");
    }
    else if (username !== correctUsername) {
        swal("Oops!", "You've entered the wrong username, please try again.", "error");
    }
    else if (password !== correctPassword) {
        swal("Oops!", "You've entered the wrong password, please try again.", "error");
    }
    else if (email !== correctEmail) {
        swal("Oops!", "You've entered the wrong email, please try again.", "error");
    }
    else {
        window.location.href = 'question22.html';
    }
    })
