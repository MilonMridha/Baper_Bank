
document.getElementById('login-submit').addEventListener('click', function () {
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    // console.log(emailField);

    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    console.log(userPassword);
    if(userEmail == 'test@gmail.com' && userPassword == 'secret' ){
        window.location.href = 'banking.html'
    }
})


