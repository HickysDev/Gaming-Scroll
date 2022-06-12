import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-nav-bar-cli',
  templateUrl: './nav-bar-cli.component.html',
  styleUrls: ['./nav-bar-cli.component.css'],
})
export class NavBarCliComponent implements OnInit {
  user$ = this.usersService.currentUserProfile$;

  constructor(
    private authService: AuthService,
    public usersService: UsersService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  logout() {
    this.authService.logout().subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
