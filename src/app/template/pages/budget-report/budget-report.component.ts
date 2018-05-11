import { Component, OnInit } from '@angular/core';
import { ReportsService } from '../../../services/reports.service';

@Component({
  selector: 'app-budget-report',
  templateUrl: './budget-report.component.html',
  styleUrls: ['./budget-report.component.css']
})
export class BudgetReportComponent implements OnInit {
  typeSpend: any[] = [];
  totalAmt: number = 0;

  constructor(private _ReportsService: ReportsService) { }

  ngOnInit() {
      let id = JSON.parse(sessionStorage.getItem("currentUser"));

      this._ReportsService.getBudgetReport(id.user_ID)
                          .subscribe((data) => {
                         // console.log(data);
                          
                              for (let index = 0; index < data.budgetType.length; index++) {
                                for (let i = 0; i < data.budgetType[index].lineItems.length; i++){
                                    this.totalAmt = this.totalAmt + Number(data.budgetType[index].lineItems[i].item_Amt);
                                }
                              }
                             
                              this.typeSpend.push(data);
                            })
                           // this.typeSpend.push(data);
                            console.log(this.typeSpend);
                          
  }

}
