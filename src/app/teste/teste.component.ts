import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-teste',
  templateUrl: './teste.component.html',
  styleUrls: ['./teste.component.css'],
})
export class TesteComponent implements OnInit {
  @Output() isLogout = new EventEmitter<void>();
  constructor(public firebaseService: FirebaseService) {}

  ngOnInit(): void {}
  logout() {
    this.firebaseService.logout();
    this.isLogout.emit();
  }
}
