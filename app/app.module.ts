import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IpService }     from './ip.service'; 
import { OpenWeatherService }     from './openweather.service'; 
import { AppComponent }  from './app.component';
import { HttpModule } from '@angular/http';

@NgModule({
  imports:      [ BrowserModule,HttpModule],
  declarations: [ AppComponent ],
  providers:    [ IpService,OpenWeatherService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
