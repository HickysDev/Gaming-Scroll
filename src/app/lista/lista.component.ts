import { Component, OnInit } from '@angular/core';
import { addDoc, Firestore, collection } from 'firebase/firestore';
import { ListaService } from '../services/lista.service';
import Jogo from '../models/jogo';


@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

jogos: Jogo[];

  constructor(private listaService: ListaService) {
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
