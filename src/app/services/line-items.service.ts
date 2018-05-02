import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { LineItems } from '../model/line_items.model';

@Injectable()
export class LineItemsService {

  BASE_URL: string = "https://uncreditable-window.000webhostapp.com/financial_planning";
  myHeader: HttpHeaders = new HttpHeaders();

  constructor(private Http: HttpClient) { }
  
  addItem(item){
    this.myHeader.append("Content-Type", "application/json");
    this.myHeader.append("Origin", "http://localhost:4200");

    return this.Http.post(`${this.BASE_URL}/addLineItem.php`, item, {headers: this.myHeader})
                    .map((respose) => respose);
  }

  editItem(item){
    this.myHeader.append("Content-Type", "application/json");
    this.myHeader.append("Origin", "http://localhost:4200");

    return this.Http.post(`${this.BASE_URL}`, item, {headers: this.myHeader})
                    .map((respose) => respose);
  }

  removeItem(id, user_ID){
    this.myHeader.append("Content-Type", "application/json");
    this.myHeader.append("Origin", "http://localhost:4200");
    

    return this.Http.delete(`${this.BASE_URL}/deleteLineItem.php?item_ID=${id}&user_ID=${user_ID}`, {headers: this.myHeader})
                    .map((respose) => respose);
  }

  getItems(id){
    this.myHeader.append("Content-Type", "application/json");
    this.myHeader.append("Origin", "http://localhost:4200");

    return this.Http.get<any>(`${this.BASE_URL}/getLineItems.php?user_ID=${id}`, {headers: this.myHeader})
                    .map((respose) => respose);
  }
 
  getSpendItems(){
    this.myHeader.append("Content-Type", "application/json");
    this.myHeader.append("Origin", "http://localhost:4200");

    return this.Http.get<any>(`${this.BASE_URL}/getSpendType.php`, {headers: this.myHeader})
                    .map((respose) => respose);
  }

  addSpendType(spendType){
    this.myHeader.append("Content-Type", "application/json");
    this.myHeader.append("Origin", "http://localhost:4200");

    return this.Http.post(`${this.BASE_URL}/addSpendType.php`, spendType,  {headers: this.myHeader})
                    .map((respose) => respose);
  }

}
