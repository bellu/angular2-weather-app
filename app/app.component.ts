import { Component,OnInit } from '@angular/core';
import { IpService } from './ip.service'; 
import { OpenWeatherService } from './openweather.service'; 
import { Ip } from './ip';
 

@Component({
  selector: 'my-app',
  templateUrl: './app/app.component.html',
  styleUrls: [ './app/app.component.css' ]
})
export class AppComponent implements OnInit  { 
  ip : Ip;
  errorMessage: string;
  weather: any;
  currentMeter: string = 'C';

  constructor(private IpService: IpService, private OpenWeatherService: OpenWeatherService) { }

  ngOnInit() { this.getIp().then( () => this.getWeatherByLatLon() );  }

  getIp(): Promise<any> {
   return this.IpService.getIp()
                     .then(
                       Ip => this.ip = Ip,
                       error =>  this.errorMessage = <any>error);
  }

  getWeatherByLatLon() {
    this.OpenWeatherService.getWeatherByLatLon(this.ip.lat, this.ip.lon)
                     .then(
                       weather => this.weather = weather,
                       error =>  this.errorMessage = <any>error);
  }

  switchMeter(){
    if(this.currentMeter == 'C'){
      this.weather.main.temp = this.weather.main.temp * 9 / 5 + 32;
      this.currentMeter = 'F';
    } else {
      this.weather.main.temp = (this.weather.main.temp - 32) * 5 / 9;
      this.currentMeter = 'C';
    }
    this.weather.main.temp = this.weather.main.temp.toFixed(2);
  }
}
