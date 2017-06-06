import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-search-history',
  templateUrl: './search-history.component.html',
  styleUrls: ['./search-history.component.css']
})
export class SearchHistoryComponent implements OnInit {
  @Input() searchData;

  constructor() { }

  ngOnInit() {
  }

}
