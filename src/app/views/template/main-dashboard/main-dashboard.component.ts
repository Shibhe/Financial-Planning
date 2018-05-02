import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../../services/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.css']
})
export class MainDashboardComponent implements OnInit {

  currentUser;

  constructor(private accountService: AccountService,
              private route: Router) { }

  ngOnInit() {
    if (!sessionStorage.getItem("currentUser")){
       this.route.navigate(['home']);
    } else {
      this.currentUser = JSON.parse(sessionStorage.getItem("currentUser"));
      console.log(JSON.parse(sessionStorage.getItem("currentUser")));
    }
  }

  logout(){
    this.accountService.logout();
    this.route.navigate(['home']);
  }
}
