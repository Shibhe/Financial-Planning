import { NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { MainComponent } from "../template/main/main.component";
import { LoginComponent } from "../views/login/login.component";
import { RegisterComponent } from "../views/register/register.component";
import { NotFoundComponent } from "../helpers/errors/not-found.error";

const appRouter: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/home'},
    { path: 'home', component: MainComponent },
    { path: 'user/signin', component: LoginComponent },
    { path: 'user/signup', component: RegisterComponent },
    { path: '**', component: NotFoundComponent}
    ]
  
@NgModule({
    imports: [RouterModule.forRoot(appRouter, { enableTracing: false, preloadingStrategy: PreloadAllModules})],
    exports: [RouterModule]
  })

  export class RoutingModule{

  }
