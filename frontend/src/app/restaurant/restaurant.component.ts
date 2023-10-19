import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {foodLocationComponent } from '../food-location/food-location.component';
import { foodlocation } from '../foodlocation';
import { foodService } from '../food.service';

@Component({
  selector: 'app-restaurant',
  standalone: true,
  imports: [
    CommonModule,
    foodLocationComponent
  ],
  template: `
    <section>
      <form (submit)="filterResults(filter.value)">
      <input type="text" placeholder="search " #filter>
      <button class="primary" type="button" (click)="filterResults(filter.value)">Search</button>
      </form>
    </section>
    <section class="results">
    <app-food-location *ngFor="let foodLocation of filteredLocationList" [foodLocation]="foodLocation"></app-food-location>
    </section>
  `,
  
  styleUrls: ['./restaurant.component.css'],
  
})

export class restaurantComponent {
  foodLocationList: foodlocation[] = [];
  foodService: foodService = inject(foodService);

  constructor() {
    this.foodService.getAllfoodLocations().then((foodLocationList: foodlocation[]) => {
      this.foodLocationList = foodLocationList;
      this.filteredLocationList = foodLocationList;
    });
  }
  filteredLocationList: foodlocation[] = [];
  filterResults(text: string) {
    if (!text) {
      this.filteredLocationList = this.foodLocationList;
    }
  
    this.filteredLocationList = this.foodLocationList.filter(
      foodLocation => foodLocation?.city.toLowerCase().includes(text.toLowerCase())
    );
    return false;
  }
}
