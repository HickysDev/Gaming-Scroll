import { Injectable } from '@angular/core';
import {
  Firestore,
  addDoc,
  collection,
  collectionData,
  doc,
  deleteDoc,
} from '@angular/fire/firestore';
import { updateDoc } from 'firebase/firestore';
import { from, Observable } from 'rxjs';
import Jogo from '../models/jogo';

@Injectable({
  providedIn: 'root',
})
export class ListaService {
  constructor(private firestore: Firestore) {}

  addJogo(jogo: Jogo) {
    const jogoRef = collection(this.firestore, 'Jogos');
    return addDoc(jogoRef, jogo);
  }

  getJogos(): Observable<Jogo[]> {
    const jogoRef = collection(this.firestore, 'Jogos');
    return collectionData(jogoRef, { idField: 'id' }) as Observable<Jogo[]>;
  }

  deleteJogo(jogo: Jogo) {
    const jogoDocRef = doc(this.firestore, `Jogos/${jogo.id}`);
    return deleteDoc(jogoDocRef);
  }
}
