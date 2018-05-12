import { Component, OnInit } from '@angular/core';
import { Bank_Statement } from '../../../model/import_statement.model';
declare var $: any;

@Component({
  selector: 'app-trans-bank-statement',
  templateUrl: './trans-bank-statement.component.html',
  styleUrls: ['./trans-bank-statement.component.css']
})
export class TransBankStatementComponent implements OnInit {

  lines: any[] = [];
  bank_Statement: Bank_Statement = new Bank_Statement();

  constructor() { }

  ngOnInit() {
  }

  handleFileSelect(evt) {
    var files = evt.target.files; // FileList object
    var file = files[0];
    var reader = new FileReader();
    reader.readAsText(file);
    reader.onload = (event: any) => {
      var csv = event.target.result; // Content of CSV file
      this.extractData(csv); //Here you can call the above function.
    }

    $("#bankStatement").modal();

  }
   extractData(data) { // Input csv data to the function
    
    let csvData = data;
    let allTextLines = csvData.split(/\r\n|\n/);
    let headers = allTextLines[0].split(',');
    

    for ( let i = 0; i < allTextLines.length; i++) {
        // split content based on comma
        let data = allTextLines[i].split(',');
        if (data.length == headers.length) {
            let tarr = [];
            for ( let j = 0; j < headers.length; j++) {
                tarr.push(data[j]);
            }
          this.lines.push(tarr);
          this.bank_Statement.downloaded.push(tarr["downloaded_statement"]);
          this.bank_Statement.listOfBanks.push(tarr["bank_name"]);
        }
    }
    console.log(this.lines); //The data in the form of 2 dimensional array.
  }
}
