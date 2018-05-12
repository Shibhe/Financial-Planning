import { Component, OnInit } from '@angular/core';
import { User } from '../../../model/user.model';
import { AccountService } from '../../../services/account.service';
import { Bank_Details } from '../../../model/bank_details.model';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {
  user;
  userDetails: User = new User();
  bank: Bank_Details = new Bank_Details();
  
  constructor(private accountService: AccountService, 
              private userAccountService: AccountService,
              private route: Router,
              private spinnerService: Ng4LoadingSpinnerService) { }

  ngOnInit() {
    this.user = JSON.parse(sessionStorage.getItem("currentUser"));
  }

  editDetail(){
      let email = this.userDetails.user_Email;
      let password = this.userDetails.user_Password;
      let user_ID = this.user.user_ID;

      this.accountService.edit(email, password, user_ID)
                          .subscribe((data) => console.log(data));
  }

  submitBank(){
    this.spinnerService.show();
 
    let user_ID = this.user.user_ID;
    
    this.bank.user_ID = user_ID;
    this.bank.status_ID = 1;
    
    this.userAccountService.addBank(this.bank)
        .subscribe((data) => {
          this.spinnerService.hide();
          
          this.user = new User();
        },
        (err: HttpErrorResponse | Error) => {
          this.spinnerService.hide();
         if (err instanceof HttpErrorResponse) {
            if (err.status == 404){
             console.log(err.message);
            } else if (err.status == 401){
              console.log(err.message);
            } else if (err.status == 400){
              console.log(err.message);
            }
          } else {
            console.log(err.message);
          }
        });
  }

}
