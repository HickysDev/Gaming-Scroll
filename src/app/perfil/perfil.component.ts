import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { UsersService } from '../services/users.service';
import { ListaService } from '../services/lista.service';
import Jogo from '../models/jogo';
import { routes } from '../app.routing';
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css'],
})
export class PerfilComponent implements OnInit {
  user$ = this.usersService.currentUserProfile$;

  jogos: Jogo[];

  constructor(private usersService: UsersService, private listaService: ListaService) {
    this.jogos = [{
      nome: '',
      nota: '',
      imagem: ''
    }];
  }

  ngOnInit(): void {
    this.listaService.getJogos().subscribe(jogos =>{
    this.jogos = jogos
  })
  }
}
