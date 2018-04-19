import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../../services/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.css']
})
export class MainDashboardComponent implements OnInit {
  email="Joseph";


  constructor(private accountService: AccountService,
              private route: Router) { }

  ngOnInit() {
  }

  logout(){
    this.accountService.logout();
    this.route.navigate(['home']);
  }
}
