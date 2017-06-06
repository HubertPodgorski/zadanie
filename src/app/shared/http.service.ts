import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class HttpService {

  apiUrl = 'http://ihaveanidea.aveneo.pl/NIPAPI/Help/api/Company';

  constructor(
    private http: Http,
  ) { }

  getData(CompanyId) {
    const headers = new Headers();
    headers.append('Access-Control-Allow-Origin', '*');
    return this.http.get(`${this.apiUrl}?CompanyId=${CompanyId}`, {headers: headers})
      .map(result => result.json())
      .map((companies) => {
        const company = companies;
        console.log(company);
        return company;
      });
  }
}
