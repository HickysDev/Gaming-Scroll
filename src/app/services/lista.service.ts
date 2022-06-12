import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import Jogo from '../models/jogo'



@Injectable({
  providedIn: 'root'
})
export class ListaService {

  constructor(private firestore: Firestore) { }

  addJogo(jogo: Jogo){
    const jogoRef = collection(this.firestore, 'Jogos');
    return addDoc(jogoRef, jogo);
    
  }

  getJogos(): Observable<Jogo[]>{
    const jogoRef = collection(this.firestore, 'Jogos');
    return collectionData(jogoRef, { idField: 'id'}) as Observable<Jogo[]>;
  }
}
