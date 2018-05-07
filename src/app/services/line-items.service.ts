import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { LineItems } from '../model/line_items.model';
import { SpendType } from '../model/spendType.model';

@Injectable()
export class LineItemsService {

  BASE_URL: string = "https://uncreditable-window.000webhostapp.com/financial_planning";
  myHeader: HttpHeaders = new HttpHeaders();

  constructor(private Http: HttpClient) { }
  
  addItem(item: LineItems){
    this.myHeader.append("Content-Type", "application/json");
    this.myHeader.append("Origin", "http://localhost:4200");

    return this.Http.get<any>(`${this.BASE_URL}/addLineItem.php?item_Name=${item.item_Name}&item_Amt=${item.item_Amt}&item_Desc=${item.item_Desc}&item_Type=${item.item_Type}&user_ID=${item.user_ID}`, {headers: this.myHeader})
                      .map((respose) => {
                        if (respose.success == 1){
                          alert(respose.message);
                        } else if (respose.success == 0){
                          alert(respose.message);
                        }
                    });
  }

  editItem(item){
    this.myHeader.append("Content-Type", "application/json");
    this.myHeader.append("Origin", "http://localhost:4200");

    return this.Http.post(`${this.BASE_URL}`, item, {headers: this.myHeader})
                    .map((respose) => respose);
  }

  removeItem(id, user_ID): Observable<any>{
    this.myHeader.append("Content-Type", "application/json");
    this.myHeader.append("Origin", "http://localhost:4200");
    

    return this.Http.get(`${this.BASE_URL}/deleteLineItem.php?item_ID=${id}&user_ID=${user_ID}`, {headers: this.myHeader})
                    .map((respose: any) => {
                      if (respose.success == 1){
                        alert(respose.message);
                      } else if (respose.success == 0){
                        alert(respose.message);
                      }
                    });
  }

  getItems(id){
    this.myHeader.append("Content-Type", "application/json");
    this.myHeader.append("Origin", "http://localhost:4200");

    return this.Http.get<any>(`${this.BASE_URL}/getLineItems.php?user_ID=${id}`, {headers: this.myHeader})
                    .map((respose) => respose);
  }
 
  addSpendType(spendType: SpendType){
    this.myHeader.append("Content-Type", "application/json");
    this.myHeader.append("Origin", "http://localhost:4200");

    return this.Http.get<any>(`${this.BASE_URL}/addSpendType.php?spend_type_name=${spendType.spend_type_name}&spend_type_desc=${spendType.spend_type_desc}&spend_type_Amt=${spendType.spend_type_Amt}&user_ID=${spendType.user_ID}`, {headers: this.myHeader})
                    .map((response) => {
                      if (response.success == 1){
                        alert(response.message);
                      } else if (response.success == 0){
                        alert(response.message);
                      }
                    });
  }

  getSpendType(user_ID){
    this.myHeader.append("Content-Type", "application/json");
    this.myHeader.append("Origin", "http://localhost:4200");

    return this.Http.get<any>(`${this.BASE_URL}/getSpendType.php?user_ID=${user_ID}`,  {headers: this.myHeader})
                    .map((respose) => respose);
  }

}
