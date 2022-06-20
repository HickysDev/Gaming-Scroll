import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { UsersService } from '../services/users.service';
import { ListaService } from '../services/lista.service';
import Jogo from '../models/jogo';
import { routes } from '../app.routing';
import { HotToastService } from '@ngneat/hot-toast';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css'],
})
export class PerfilComponent implements OnInit {
  user$ = this.usersService.currentUserProfile$;

  formulario: FormGroup;
  jogos: Jogo[];

  constructor(
    private usersService: UsersService,
    private listaService: ListaService,
    private toast: HotToastService
  ) {
    this.jogos = [
      {
        nome: '',
        nota: '',
        imagem: '',
      },
    ];
    this.formulario = new FormGroup({
      nome: new FormControl(),
      nota: new FormControl(),
      imagem: new FormControl(),
    });
  }

  ngOnInit(): void {
    this.listaService.getJogos().subscribe((jogos) => {
      this.jogos = jogos;
    });
  }

  async onClickDelete(jogo: Jogo) {
    const response = await this.listaService.deleteJogo(jogo);
    this.toast.observe({
      loading: 'Enviando a imagem...',
      success: 'Imagem enviada com sucesso.',
      error: 'Ocorreu um erro ao enviar a imagem...',
    }),
      console.log(response);
  }
}
