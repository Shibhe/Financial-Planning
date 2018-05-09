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
  categories: any[] = [];
  currentUser;
  constructor(private _LineItemsService: LineItemsService,
    private spinnerService: Ng4LoadingSpinnerService) { }


  ngOnInit() {

    this.currentUser = JSON.parse(sessionStorage.getItem("currentUser"));

    this.spinnerService.show();
   
    this.showSpentTypes();
    this.getCategories();

    this._LineItemsService.getItems(this.currentUser.user_ID)
                          .subscribe((data) => {

                            if (data.error == true){
                              this.lineItemList = [];
                            } else {
                              this.lineItemList.push(data);
                              console.log(this.lineItemList);
                              console.log(data);
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
      this.lineItem.user_ID = this.currentUser.user_ID;

      this._LineItemsService.addItem(this.lineItem)
                            .subscribe((data) => {
                              this.spinnerService.hide();
                              
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

      this.spendType.user_ID = this.currentUser.user_ID;

      this._LineItemsService.addSpendType(this.spendType)
                            .subscribe((data) => {

                              this.spinnerService.hide();
                              
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

    this.spinnerService.show();
    
    this._LineItemsService.removeItem(id, this.currentUser.user_ID)
                          .subscribe((data) => {
                            this.spinnerService.hide();
                            console.log(data);
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

  showSpentTypes(){

    this.spinnerService.show();
    this._LineItemsService.getSpendType(this.currentUser.user_ID)
                          .subscribe((data) => {
                            this.spinnerService.hide();
                              this.spendItems.push(data);
                              console.log(this.spendItems);
                              localStorage.setItem("spentItems", JSON.stringify(data));
                            
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

  getCategories(){
    this.spinnerService.show();
    this._LineItemsService.getCategory()
                          .subscribe((data) => {
                            this.spinnerService.hide();
                             this.categories.push(data);
                             console.log(this.categories);
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

}
