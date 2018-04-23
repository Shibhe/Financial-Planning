import { Component, OnInit } from '@angular/core';
import { LineItems } from '../../../model/line_items.model';
import * as $ from 'jquery';


@Component({
  selector: 'app-line-item',
  templateUrl: './line-item.component.html',
  styleUrls: ['./line-item.component.css']
})
export class LineItemComponent implements OnInit {

  itemList: Array<any> = [];
  lineItem: LineItems = new LineItems();
  constructor() { }

  ngOnInit() {
  }

  saveItem()
  {
    this.lineItem.id += 1;
    this.itemList.push(this.lineItem);
    this.lineItem = new LineItems();
  }
  removeItem(id){
    return this.itemList.find(x => x.id === id);
  }

  confirm(){
    let id;
    let item = this.removeItem(id);
    this.itemList.splice(item, 1);
    console.log(item);
    
  }
}
