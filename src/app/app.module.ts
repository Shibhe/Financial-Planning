// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RoutingModule } from './config/routes.module';
import { HttpClientModule } from '@angular/common/http';

// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './template/header/header.component';
import { FooterComponent } from './template/footer/footer.component';
import { MainComponent } from './template/main/main.component';
import { HomeComponent } from './views/home/home.component';
import { MainDashboardComponent } from './views/template/main-dashboard/main-dashboard.component';
import { HeaderDashboardComponent } from './views/template/header-dashboard/header-dashboard.component';
import { FooterDashboardComponent } from './views/template/footer-dashboard/footer-dashboard.component';
import { BodyDashboardComponent } from './views/template/body-dashboard/body-dashboard.component';
import { BudgetReportComponent } from './template/pages/budget-report/budget-report.component';
import { TransBankStatementComponent } from './template/pages/trans-bank-statement/trans-bank-statement.component';
import { SpendReportComponent } from './template/pages/spend-report/spend-report.component';
import { VarianceReportComponent } from './template/pages/variance-report/variance-report.component';
import { OverviewComponent } from './template/pages/overview/overview.component';

// Services
import { AccountService } from './services/account.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    HomeComponent,
    MainDashboardComponent,
    HeaderDashboardComponent,
    FooterDashboardComponent,
    BodyDashboardComponent,
    BudgetReportComponent,
    TransBankStatementComponent,
    SpendReportComponent,
    VarianceReportComponent,
    OverviewComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ AccountService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
