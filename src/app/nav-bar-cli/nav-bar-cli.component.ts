import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-nav-bar-cli',
  templateUrl: './nav-bar-cli.component.html',
  styleUrls: ['./nav-bar-cli.component.css'],
})
export class NavBarCliComponent implements OnInit {
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
