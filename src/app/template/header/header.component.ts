import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user.model';
import { AccountService } from '../../services/account.service';
import { HttpErrorResponse } from '@angular/common/http';
import * as $ from 'jquery';
import { Router } from '@angular/router';
import { Alert } from 'selenium-webdriver';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user: User = new User();

  constructor(private userAccountService: AccountService,
              private route: Router) { }

  ngOnInit() {

  }

  validateID($event){
    let idNumber = $event.target.value;
    let Gender = idNumber.substr(6,4);

    if (idNumber.length >= 10){
       if (parseInt(Gender) >= 5000){
          this.user.user_Gender = "Male";
       } else {
        this.user.user_Gender = "Female";
       }
    }
  }

  submitUser(){
      this.userAccountService.addUser(this.user)
          .subscribe((data) => {
            alert("Alert");
            $("#signUp").modal('hide');
            this.user = new User();
          },
          (err: HttpErrorResponse | Error) => {
           
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

  userLogin(){
    let email = this.user.user_Email;
    let password = this.user.user_Password;

    this.userAccountService.userLogin(email, password)
                            .subscribe((data) => {
                              this.setSessionStorage(data);
                              this.route.navigate(['user/dashboard', data.user_ID]);
                            },
                            (err: HttpErrorResponse | Error) => {
                             
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

  setSessionStorage(data){
    return sessionStorage.setItem("currentUser", data);
  }
}
