import { Injectable } from '@angular/core';
import {
  collection,
  doc,
  docData,
  Firestore,
  getDoc,
  setDoc,
  updateDoc,
} from '@angular/fire/firestore';
import { from, Observable, of, switchMap } from 'rxjs';
import { User } from '../models/user';
import Jogo from '../models/jogo';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private firestore: Firestore, private authService: AuthService) {}

  get currentUserProfile$(): Observable<User | null> {
    return this.authService.currentUser$.pipe(
      switchMap((user) => {
        if (!user?.uid) {
          return of(null);
        }

        const ref = doc(this.firestore, 'users', user?.uid);
        return docData(ref) as Observable<User>;
      })
    );
  }

  // get currentUserGame$(): Observable<User | null> {
  //   return this.authService.currentUser$.pipe(
  //     switchMap((jogo) => {
  //       if (!jogo?.uid) {
  //         return of(null);
  //       }

  //       const ref = doc(this.firestore, 'Jogo', jogo?.uid);
  //       return docData(ref) as Observable<User>;
  //     })
  //   );
  // }

  addUser(user: User): Observable<void> {
    const ref = doc(this.firestore, 'users', user.uid);
    return from(setDoc(ref, user));
  }

  updateUser(user: User): Observable<void> {
    const ref = doc(this.firestore, 'users', user.uid);
    return from(updateDoc(ref, { ...user }));
  }

  // updateImage(jogo: Jogo): Observable<void> {
  //   const ref = doc(this.firestore, 'Jogos', jogo.id);
  //   return from(updateDoc(ref, { ...jogo }));
  // }
}
