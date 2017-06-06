import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class HttpService {

  apiUrl = 'http://ihaveanidea.aveneo.pl/NIPAPI/Help/api/Company';

  constructor(
    private http: Http,
  ) { }

  getData(CompanyId) {
    return this.http.get(`${this.apiUrl}?CompanyId=${CompanyId}`)
      .map(result => result.json())
      .map((companies) => {
        const company = companies;
        console.log(company);
        return company;
      });
  }
}
