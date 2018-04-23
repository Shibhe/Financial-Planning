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

    return this.Http.post(`${this.BASE_URL}`, item, {headers: this.myHeader})
                    .map((respose) => respose);
  }

  editItem(item){
    this.myHeader.append("Content-Type", "application/json");
    this.myHeader.append("Origin", "http://localhost:4200");

    return this.Http.post(`${this.BASE_URL}`, item, {headers: this.myHeader})
                    .map((respose) => respose);
  }

  removeItem(id){
    this.myHeader.append("Content-Type", "application/json");
    this.myHeader.append("Origin", "http://localhost:4200");

    return this.Http.delete(`${this.BASE_URL}/removeItem.php?id=${id}`, {headers: this.myHeader})
                    .map((respose) => respose);
  }

  getItems(){
    this.myHeader.append("Content-Type", "application/json");
    this.myHeader.append("Origin", "http://localhost:4200");

    return this.Http.get(`${this.BASE_URL}`, {headers: this.myHeader})
                    .map((respose) => respose);
  }

}