import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { User } from '../model/user.model';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

@Injectable()
export class AccountService {

  BASE_URL: string = "https://uncreditable-window.000webhostapp.com/financial_planning";
  myHeader: HttpHeaders = new HttpHeaders();
  isLoggedIn: boolean = true;

  constructor(private Http: HttpClient,
              private router: Router) { }

  addUser(user: User): Observable<any>{
    this.myHeader.append("Content-Type", "application/json");
    this.myHeader.append("Origin", "http://localhost:4200");

    return this.Http.get(`${this.BASE_URL}/addUser.php?user_Name=${user.user_Name}&user_Surname=${user.user_Surname}&user_Gender=${user.user_Gender}&user_IdNumber=${user.user_IdNumber}&user_Email=${user.user_Email}&user_Password=${user.user_Password}&is_Archived=${user.is_Archived}`, {headers: this.myHeader})
                     .map((respose: any) => {
                       console.log(respose);
                      if (respose.success == 0){
                        alert(respose.message);
                      } else if (respose.success == 1) {
                        alert(respose.message);
                      }
                     });
  }

  userLogin(email, password){
    this.myHeader.append("Content-Type", "application/json");
    this.myHeader.append("Origin", "http://localhost:4200");


    return this.Http.get(`${this.BASE_URL}/login.php?user_Email=${email}&user_Password=${password}`, { headers: this.myHeader})
                    .map((response: any) => {
                      console.log(response);
                      if (response.success == 0){
                        this.isAuthenticated = false;
                        alert(response.message);
                      } else {
                        sessionStorage.setItem("currentUser", JSON.stringify(response));
                      }
                    });
  }

  logout() {
    sessionStorage.clear();
    localStorage.clear();
  }

  get isAuthenticated(){
    return this.isLoggedIn;
  }
  
  set isAuthenticated(status){
    this.isLoggedIn = status;
  }
}
