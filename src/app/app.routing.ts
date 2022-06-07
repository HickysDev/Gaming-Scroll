import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SobreComponent } from './sobre/sobre.component';
import { SuporteComponent } from './suporte/suporte.component';
import { NgModule } from '@angular/core';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: SignInComponent },
  { path: 'registrar', component: SignUpComponent },
  { path: 'sobre', component: SobreComponent },
  { path: 'suporte', component: SuporteComponent },
];
