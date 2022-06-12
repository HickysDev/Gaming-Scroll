import { Component, OnInit } from '@angular/core';
import { ignoreElements } from 'rxjs';
import { routes } from '../app.routing';
import { AppComponent } from '../app.component';
import { AuthService } from '../services/auth.service';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  user$ = this.usersService.currentUserProfile$;

  constructor(
    private usersService: UsersService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {}
}
