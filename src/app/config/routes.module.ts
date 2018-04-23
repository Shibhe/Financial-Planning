import { NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { MainComponent } from "../template/main/main.component";
import { NotFoundComponent } from "../helpers/errors/not-found.error";
import { MainDashboardComponent } from "../views/template/main-dashboard/main-dashboard.component";
import { BudgetReportComponent } from "../template/pages/budget-report/budget-report.component";
import { LineItemComponent } from "../template/pages/line-item/line-item.component";

const appRouter: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/home'},
    { path: 'home', component: MainComponent },
    { path: 'user/signin/dashboard', component: MainDashboardComponent },
    { path: 'user/signin/dashboard/budget', component: BudgetReportComponent},
    { path: 'user/signin/dashboard/line-items', component: LineItemComponent},
    { path: '**', component: NotFoundComponent}
    ]
  
@NgModule({
    imports: [RouterModule.forRoot(appRouter, { enableTracing: false, preloadingStrategy: PreloadAllModules})],
    exports: [RouterModule]
  })

  export class RoutingModule{

  }
