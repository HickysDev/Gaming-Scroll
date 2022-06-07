

function Validate() {

    var password = document.getElementById("userPwd").value;
    var ConfirmPassword = document.getElementById("ConfirmPassword").value;
    if (password != ConfirmPassword) {
        document.getElementById('message').style.color = 'red';
        document.getElementById('message').innerHTML = 'As senhas divergem.';


    } else {
        (password == ConfirmPassword)
        document.getElementById('message').style.color = 'green';
        document.getElementById('message').innerHTML = 'As senhas coincidem.';
    }

}










