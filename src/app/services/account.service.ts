import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { User } from '../model/user.model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AccountService {

  BASE_URL: string = "https://uncreditable-window.000webhostapp.com/financial_planning";
  myHeader: HttpHeaders = new HttpHeaders();
  isLoggedIn: boolean = true;

  constructor(private Http: HttpClient) { }
  addUser(user){
    this.myHeader.append("Content-Type", "application/json");
    this.myHeader.append("Origin", "http://localhost:4200");


    return this.Http.post(`${this.BASE_URL}/addUser.php`, user, {headers: this.myHeader})
                     .map((respose) => respose);
  }

  userLogin(email, password): Observable<any>{
    this.myHeader.append("Content-Type", "application/json");
    this.myHeader.append("Origin", "http://localhost:4200");


    return this.Http.get(`${this.BASE_URL}/login.php?user_Email=${email}&user_Password=${password}`, { headers: this.myHeader})
                    .map((response) => {
                      if (response == "404") {
                        alert("Email or Password is invalid")
                        this.isAuthenticated = false;
                      } else {
                        this.setSessionStorage(response);                      }
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

  setSessionStorage(data){
    return sessionStorage.setItem("currentUser", data);
  }
}
