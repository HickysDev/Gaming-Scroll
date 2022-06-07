import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../shared/services/auth.service";

declare const Validate: any;

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  constructor(
    public authService: AuthService
  ) { }
  ngOnInit() { };


  onkeyup() {
    Validate()
  };

  getvalue(userEmail: string, userPwd: string, ConfirmPassword: string) {
    var email = userEmail;
    var password = userPwd;
    var passwordConfirm = ConfirmPassword;

    if (password == passwordConfirm) {
      this.authService.SignUp(email, password)
      alert("Conta Registrada.");
    } else
      alert("Ocorreu um erro inesperado.");

  }

}

function email(email: any, password: any) {
  throw new Error('Function not implemented.');
}
