import { Component, OnInit } from '@angular/core';
import { ReportsService } from '../../../services/reports.service';

@Component({
  selector: 'app-spend-report',
  templateUrl: './spend-report.component.html',
  styleUrls: ['./spend-report.component.css']
})
export class SpendReportComponent implements OnInit {

  typeSpend: any[] = [];
  constructor(private _ReportsService: ReportsService) { }

  ngOnInit() {
      let id = JSON.parse(sessionStorage.getItem("currentUser"));

      this._ReportsService.getSpentReport(id.user_ID)
                          .subscribe((data) => {
                            this.typeSpend.push(data);
                            console.log(this.typeSpend);
                          });
  }

}
