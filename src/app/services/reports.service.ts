import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable()
export class ReportsService {

  BASE_URL: string = "https://uncreditable-window.000webhostapp.com/financial_planning";

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

  getBudgetReport(id) {
    this.myHeader.append("Content-Type", "application/json");
    this.myHeader.append("Origin", "http://localhost:4200");

     return this.http.get<any>(`${this.BASE_URL}/getBudgetReport.php?user_ID=${id}`, { headers: this.myHeader})
                      .map((response) => response);
  }

  getSpentReport(id: any){
    this.myHeader.append("Content-Type", "application/json");
    this.myHeader.append("Origin", "http://localhost:4200");

     return this.http.get<any>(`${this.BASE_URL}/spentItemsReport.php?user_ID=${id}`, { headers: this.myHeader})
                      .map((response) => response);
  }

}
