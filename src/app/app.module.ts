// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RoutingModule } from './config/routes.module';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';

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
import { NotFoundComponent } from './helpers/errors/not-found.error';
import { ChartsComponent } from './template/pages/charts/charts.component';
import { LineItemComponent } from './template/pages/line-item/line-item.component';
import { AuthGaurd } from './helpers/auth/auth.gaurd';
import { UnAuthorizeComponent } from './helpers/errors/unauthorized.error';
import { LineItemsService } from './services/line-items.service';
import { ReportsService } from './services/reports.service';


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
    OverviewComponent,
    NotFoundComponent,
    ChartsComponent,
    LineItemComponent,
    UnAuthorizeComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule.forRoot(),
    Ng4LoadingSpinnerModule.forRoot()
  ],
  providers: [ AccountService, AuthGaurd, LineItemsService, ReportsService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
