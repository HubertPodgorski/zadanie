import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpService } from 'app/shared/http.service';
import { ResultData } from './result-data';
import { rawData } from '../shared/raw-data';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  result: ResultData;
  someString: string;
  companiesData = rawData;

  @Output() update = new EventEmitter();

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.someString = 'some written in string to output';
  }

  // getData() {
  //     this.httpService.getData('7777777777').subscribe(
  //       data => {
  //         this.companiesData = data;
  //         return this.companiesData;
  //       },
  //       error => console.log('Error: ' + error)
  //     );
  //   }

  checkValidity(companyId) {
    const errorHandleElement = <HTMLElement>document.querySelector('.error');
    const companyData = this.companiesData.filter((company) => {
      if (company.id === companyId) {
        return company;
      };
    });
    this.update.emit({data: companyData});
    if (companyData.length > 0) {
      errorHandleElement.style.opacity = '0';
    } else {
      errorHandleElement.style.opacity = '1';
    }
  }


}
