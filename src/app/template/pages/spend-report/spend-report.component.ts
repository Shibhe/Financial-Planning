import { Component, OnInit } from '@angular/core';
import { ReportsService } from '../../../services/reports.service';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import * as $ from 'jquery';

@Component({
  selector: 'app-spend-report',
  templateUrl: './spend-report.component.html',
  styleUrls: ['./spend-report.component.css']
})
export class SpendReportComponent implements OnInit {

  typeSpend: any[] = [];
  totalAmt: number = 0;
  line = false;

  constructor(private _ReportsService: ReportsService,
    private spinnerService: Ng4LoadingSpinnerService) { }

  ngOnInit() {
      let id = JSON.parse(sessionStorage.getItem("currentUser"));
      this.spinnerService.show();
      this._ReportsService.getSpentReport(id.user_ID)
                          .subscribe((data) => {
                           console.log(data);
                          this.spinnerService.hide();
                              for (let index = 0; index < data.spendType.length; index++) {
                                 if (data.spendType[index].lineItems.length > 0)
                                    for (let i = 0; i < data.spendType[index].lineItems.length; i++){
                                      // this.line = this.getMonth(data.spendType[index].lineItems[i].budget_date)
                                      this.totalAmt = this.totalAmt + Number(data.spendType[index].lineItems[i].item_Amt);
                                    }
                               }
                              this.typeSpend.push(data);
                            })
                           // this.typeSpend.push(data);
                            console.log(this.typeSpend);
                          
  }

  getMonth(month){
      var d = new Date();
      var c = new Date(month);

      var n = d.getMonth() + 1;
      var s = c.getMonth() + 1;

      if (n > s){
        return true;
      }

      return false;
  }
}
