import { NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { MainComponent } from "../template/main/main.component";
import { NotFoundComponent } from "../helpers/errors/not-found.error";
import { MainDashboardComponent } from "../views/template/main-dashboard/main-dashboard.component";

const appRouter: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/home'},
    { path: 'home', component: MainComponent },
    { path: 'user/dashboard', component: MainDashboardComponent },
    { path: '**', component: NotFoundComponent}
    ]
  
@NgModule({
    imports: [RouterModule.forRoot(appRouter, { enableTracing: false, preloadingStrategy: PreloadAllModules})],
    exports: [RouterModule]
  })

  export class RoutingModule{

  }
