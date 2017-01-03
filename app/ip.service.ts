import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Ip } from './ip';

@Injectable()
export class IpService {
  private ipUrl = 'http://ip-api.com/json';  // URL to web API
  private headers = new Headers({'Content-Type': 'application/json'});
  //private heroesUrl = 'api/heroes';  // URL to web api

  constructor(private http: Http) { }

  getIp(): Promise<Ip> {
    return this.http.get(this.ipUrl)
               .toPromise()
                  .then(this.extractData)
                  .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();

    console.log(body);
    
    return body || { };
  }


/*  getHero(id: number): Promise<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Hero)
      .catch(this.handleError);
  }*/

 

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}