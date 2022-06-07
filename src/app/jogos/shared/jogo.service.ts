import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import Jogo from './jogo.model';

@Injectable({
  providedIn: 'root',
})
export class JogoService {
  private dbPath = '/jogo';
  jogoRef: AngularFirestoreCollection<Jogo>;
  constructor(private db: AngularFirestore) {
    this.jogoRef = db.collection(this.dbPath);
  }
  getAll(): AngularFirestoreCollection<Jogo> {
    return this.jogoRef;
  }
  create(jogo: Jogo): any {
    return this.jogoRef.add({ ...jogo });
  }
  update(id: string, data: any): Promise<void> {
    return this.jogoRef.doc(id).update(data);
  }
  delete(id: string): Promise<void> {
    return this.jogoRef.doc(id).delete();
  }
}
