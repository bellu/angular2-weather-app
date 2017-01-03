import { Injectable }     from '@angular/core';
import { Http, Response,URLSearchParams } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class OpenWeatherService {
  private openWeatherUrl = 'http://api.openweathermap.org/data/2.5/weather';  // URL to web API
  private apiKey = 'eed09a5bf750a33d0ea60bffcc7135e5'; //API Key
  private headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'});
  //private heroesUrl = 'api/heroes';  // URL to web api

  constructor(private http: Http) { }

  getWeatherByLatLon(lat: number, lon: number): Promise<any> {
    let options = new RequestOptions({
        headers: this.headers,
        // Have to make a URLSearchParams with a query string
        search: new URLSearchParams('lat='+lat+'&lon='+lon+'&units=metric&appid='+this.apiKey)
    });    

    return this.http.get(this.openWeatherUrl, options)
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