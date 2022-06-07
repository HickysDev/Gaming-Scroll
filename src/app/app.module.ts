import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { routes } from './app.routing';
import { NavBarCliComponent } from './nav-bar-cli/nav-bar-cli.component';
import { FooterComponent } from './footer/footer.component';
import { SobreComponent } from './sobre/sobre.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { FirebaseService } from './services/firebase.service';
import { TesteComponent } from './teste/teste.component';
import { SuporteComponent } from './suporte/suporte.component';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { AuthService } from './shared/services/auth.service';
import { EditComponent } from './jogos/edit/edit.component';
import { ListComponent } from './jogos/list/list.component';
import { PerfilComponent } from './perfil/perfil.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarCliComponent,
    FooterComponent,
    SobreComponent,
    TesteComponent,
    SuporteComponent,
    SignInComponent,
    SignUpComponent,
    EditComponent,
    ListComponent,
    PerfilComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
