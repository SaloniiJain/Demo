import { Component } from '@angular/core';
import {UsersDataService} from './users-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'demo-app';
  name = '';
  componentName = 'Parent';

  firstName: string;
  lastName: string;
  siblings: Array<string>;

  str: string;
  num: number;

  valueEmittedFromChildComponent: string = '';

  ngOnInit() {
    this.firstName = 'John';
    this.lastName = 'Doe';
    this.siblings = new Array<string>('Jane', 'Jack', 'Sophie');

    this.str = 'John Doe';
    this.num = 27;
  }

  parentEventHandlerFunction(valueEmitted) {
    this.valueEmittedFromChildComponent = valueEmitted;
  }
  constructor(private user:UsersDataService)
  {
    console.warn(this.user.getData)
    let data=this.user.getData();
    this.name = data.name
  }
}
