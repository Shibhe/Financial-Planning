import { Component, OnInit } from '@angular/core';
import { LineItemsService } from '../../../services/line-items.service';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-spent-item',
  templateUrl: './spent-item.component.html',
  styleUrls: ['./spent-item.component.css']
})
export class SpentItemComponent implements OnInit {
  spendItems: Array<any> = [];
  currentUser;
  constructor(private _LineItemsService: LineItemsService,
    private spinnerService: Ng4LoadingSpinnerService) { }

  ngOnInit() {
   
  }

}
