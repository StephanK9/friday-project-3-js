import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Meal Tracker App for {{month}}/{{day}}/{{year}}</h1>
    <h3>{{currentFocus}}</h3>
    <ul>
      <li *ngFor="let currentFood of foods">{{currentFood.description}}</li>
    </ul>
  </div>
  `
})

export class AppComponent {
  currentFocus: string = 'Food Logged';
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
  foods: Food[] = [
    new Food('Pasta with butter and cheese'),
    new Food('Chicken with rice'),
    new Food('Soup for da soul')
  ];
}

export class Food {
  public done: boolean = false;
  constructor(public description: string) { }
}
