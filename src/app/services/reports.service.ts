import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable()
export class ReportsService {

  BASE_URL = "";
  myHeader: HttpHeaders = new HttpHeaders();

  constructor(private http: HttpClient) { }

  getAnalysisData(){
    this.myHeader.append("Content-Type", "application/json");
    this.myHeader.append("Origin", "http://localhost:4200");

     return this.http.get<Array<any>>(`${this.BASE_URL}`, { headers: this.myHeader})
                      .map((response) => response);
  }

  getVariantReport(){
    this.myHeader.append("Content-Type", "application/json");
    this.myHeader.append("Origin", "http://localhost:4200");

     return this.http.get<Array<any>>(`${this.BASE_URL}`, { headers: this.myHeader})
                      .map((response) => response);
  }

  getBudgetReport() {
    this.myHeader.append("Content-Type", "application/json");
    this.myHeader.append("Origin", "http://localhost:4200");

     return this.http.get<Array<any>>(`${this.BASE_URL}`, { headers: this.myHeader})
                      .map((response) => response);
  }

  getSpentReport(){
    this.myHeader.append("Content-Type", "application/json");
    this.myHeader.append("Origin", "http://localhost:4200");

     return this.http.get<Array<any>>(`${this.BASE_URL}`, { headers: this.myHeader})
                      .map((response) => response);
  }

}
