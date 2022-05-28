import { Routes } from "@angular/router"
import { RegistrarComponent } from "./registrar/registrar.component";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { SobreComponent } from "./sobre/sobre.component";

export const routes: Routes = [
    { path: "", component: HomeComponent },
    { path: "login", component: LoginComponent },
    { path: "registrar", component: RegistrarComponent },
    { path: "sobre", component: SobreComponent }
];