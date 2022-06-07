import { Component, OnInit } from '@angular/core';
import { ignoreElements } from 'rxjs';
import { routes } from '../app.routing';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  isSignedIn = 0;

  constructor(public authService: AuthService) {}

  ngOnInit(): void {
    if (this.authService.isLoggedIn) {
      this.isSignedIn = 1;
    } else {
      this.isSignedIn = 0;
    }
  }
}
