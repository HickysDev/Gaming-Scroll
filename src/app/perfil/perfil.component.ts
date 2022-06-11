import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { UsersService } from '../services/users.service';
import { routes } from '../app.routing';
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css'],
})
export class PerfilComponent implements OnInit {
  user$ = this.usersService.currentUserProfile$;

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {}
}
