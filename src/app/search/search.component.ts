import { Component, OnInit } from '@angular/core';
import { HttpService } from 'app/shared/http.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
      this.httpService.getData('123123123').subscribe(
        data => {
          console.log(data);
        }
      );
    }

}
