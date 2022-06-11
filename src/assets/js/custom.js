function Validate() {
  var password = document.getElementById("password").value;
  var ConfirmPassword = document.getElementById("confirmPassword").value;
  if (password != ConfirmPassword) {
    document.getElementById("message").style.color = "red";
    document.getElementById("message").innerHTML = "As senhas divergem.";
  } else {
    password == ConfirmPassword;
    document.getElementById("message").style.color = "green";
    document.getElementById("message").innerHTML = "As senhas coincidem.";
  }
}

class editProfile {
  constructor() {
    this.isEditable = !this.isEditable;
  }
}
