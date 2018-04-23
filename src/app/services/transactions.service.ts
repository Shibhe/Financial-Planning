import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable()
export class TransactionsService {
  BASE_URL = "";
  myHeader: HttpHeaders = new HttpHeaders();

  constructor(private http: HttpClient) { }

  classifyATransaction(){
    this.myHeader.append("Content-Type", "application/json");
    this.myHeader.append("Origin", "http://localhost:4200");

     return this.http.get<Array<any>>(`${this.BASE_URL}`, { headers: this.myHeader})
                      .map((response) => response);
  }

  addDownloadedStatement(statement){
    this.myHeader.append("Content-Type", "application/json");
    this.myHeader.append("Origin", "http://localhost:4200");

    return this.http.post(`${this.BASE_URL}`, statement, { headers: this.myHeader})
                    .map((response) => response);
  }

  getListOfBanks(){
    this.myHeader.append("Content-Type", "application/json");
    this.myHeader.append("Origin", "http://localhost:4200");

    return this.http.get<Array<any>>(`${this.BASE_URL}`, { headers: this.myHeader})
                    .map((response) => response);
  }

  getSpendType(){
    this.myHeader.append("Content-Type", "application/json");
    this.myHeader.append("Origin", "http://localhost:4200");

    return this.http.get<Array<any>>(`${this.BASE_URL}`, { headers: this.myHeader})
                    .map((response) => response);
  }

  getReportPeriod(){
    this.myHeader.append("Content-Type", "application/json");
    this.myHeader.append("Origin", "http://localhost:4200");

    return this.http.get<Array<any>>(`${this.BASE_URL}`, { headers: this.myHeader})
                    .map((response) => response);
  }
  
  getLineItemPerSelectedType(){
    this.myHeader.append("Content-Type", "application/json");
    this.myHeader.append("Origin", "http://localhost:4200");

    return this.http.get<Array<any>>(`${this.BASE_URL}`, { headers: this.myHeader})
                    .map((response) => response);
  }
}
