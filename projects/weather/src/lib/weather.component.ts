import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lib-weather',
  templateUrl: './weather.component.html',
  styles: []
})
export class WeatherComponent implements OnInit {

  @Input() name: string;
  result: string;

  constructor() { }

  ngOnInit() {
  }

  clickMe() {
    this.result = `Hi, ${this.name} how are you?? <3 Welcome to Libraries of Angular`;
  }

}
