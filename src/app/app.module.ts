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
import {
  AngularFireDatabase,
  AngularFireDatabaseModule,
} from '@angular/fire/compat/database';
import { SuporteComponent } from './suporte/suporte.component';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireModule } from '@angular/fire/compat';
import { RegisterComponent } from './components/register/register.component';
import { PerfilComponent } from './perfil/perfil.component';
import { HotToastModule } from '@ngneat/hot-toast';
import { AuthService } from './services/auth.service';
import { Auth, provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { EditPerfilComponent } from './components/edit-perfil/edit-perfil.component';
import { ScrollComponent } from './components/scroll/scroll.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarCliComponent,
    FooterComponent,
    SobreComponent,
    SuporteComponent,
    RegisterComponent,
    PerfilComponent,
    LoginComponent,
    EditPerfilComponent,
    ScrollComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    HotToastModule.forRoot(),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
    ReactiveFormsModule,
    FormsModule,
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
