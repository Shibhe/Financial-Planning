import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { User } from '../model/user.model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AccountService {

  BASE_URL: string = "https://uncreditable-window.000webhostapp.com/financial_planning";
  myHeader: HttpHeaders = new HttpHeaders();

  constructor(private Http: HttpClient) { }
  addUser(user: User): Observable<User>{
    this.myHeader.append("Content-Type", "application/json");
    this.myHeader.append("Origin", "http://localhost:4200");


    return this.Http.post<User>(`${this.BASE_URL}/addUser.php`, user, {headers: this.myHeader})
                                                                      .map((respose) => respose);
  }

  userLogin(email, password): Observable<any>{
    this.myHeader.append("Content-Type", "application/json");
    this.myHeader.append("Origin", "http://localhost:4200");


    return this.Http.get(`${this.BASE_URL}/login.php?user_Email=${email}&user_Password=${password}`, { headers: this.myHeader})
                    .map((response) => response);
                     
                   
  }

  logout() {
    sessionStorage.clear();
    localStorage.clear();
  }
}
