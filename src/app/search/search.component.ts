import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpService } from 'app/shared/http.service';
import { ResultData } from './result-data';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  result: ResultData;
  someString: string;

  @Output() update = new EventEmitter();

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.getData();
    this.someString = 'some written in string to output';
  }


  getData() {
      this.httpService.getData('123123123').subscribe(
        data => {
          this.result = data;
          console.log(data);
          return this.result;
        }
      );
    }

}
