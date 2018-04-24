import { Component, OnInit } from '@angular/core';
import { LineItems } from '../../../model/line_items.model';
import * as $ from 'jquery';
import { LineItemsService } from '../../../services/line-items.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { SpendType } from '../../../model/spendType.model';


@Component({
  selector: 'app-line-item',
  templateUrl: './line-item.component.html',
  styleUrls: ['./line-item.component.css']
})
export class LineItemComponent implements OnInit {

  lineItemList: Array<any> = [];
  spendItems: Array<any> = [];
  lineItem: LineItems = new LineItems();
  spendType: SpendType = new SpendType();
  
  constructor(private _LineItemsService: LineItemsService,
    private spinnerService: Ng4LoadingSpinnerService) { }


  ngOnInit() {

    let id = JSON.parse(sessionStorage.getItem("currentUser"));

    this.spinnerService.show();
    this._LineItemsService.getItems(id.user_ID)
                          .subscribe((data) => {

                            if (data.error == true){
                              this.lineItemList = [];
                            } else {
                              this.lineItemList.push(data);
                              localStorage.setItem("lineItems", JSON.stringify(data));
                            }

                            this.spinnerService.hide();
                            
                            console.log(this.lineItemList);
                          },(err: HttpErrorResponse | Error) => {
                            this.spinnerService.hide();
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

  saveItem()
  {
      this.spinnerService.show();
      let id = JSON.parse(sessionStorage.getItem("currentUser"));

      this.lineItem.user_ID = id.user_ID;

      this._LineItemsService.addItem(this.lineItem)
                            .subscribe((data) => {
                              this.spinnerService.hide();
                              alert(data);
                            },(err: HttpErrorResponse | Error) => {
                              this.spinnerService.hide();
                             if (err instanceof HttpErrorResponse) {
                              this.spinnerService.hide();
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

  saveSpendType()
  {
      this.spinnerService.show();
      
      this._LineItemsService.addSpendType(this.spendType)
                            .subscribe((data) => {
                              this.spinnerService.hide();
                              alert(data);
                            },(err: HttpErrorResponse | Error) => {
                              this.spinnerService.hide();
                             if (err instanceof HttpErrorResponse) {
                              this.spinnerService.hide();
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

  removeItem(id){

  }


  confirm(){
   
  }
}
