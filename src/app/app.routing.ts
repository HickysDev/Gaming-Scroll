import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SobreComponent } from './sobre/sobre.component';
import { SuporteComponent } from './suporte/suporte.component';
import { PerfilComponent } from './perfil/perfil.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { EditPerfilComponent } from './components/edit-perfil/edit-perfil.component';

export const routes: Routes = [
  { path: 'perfil', component: PerfilComponent },
  { path: '', component: HomeComponent },
  { path: 'registrar', component: RegisterComponent },
  { path: 'sobre', component: SobreComponent },
  { path: 'suporte', component: SuporteComponent },
  { path: 'entrar', component: LoginComponent },
  { path: 'edit-perfil', component: EditPerfilComponent },
];
