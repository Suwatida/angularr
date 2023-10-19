import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { foodlocation } from '../foodlocation';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-food-location',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  template: `
  <section class="listing">
    <img class="listing-photo" [src]="foodLocation.photo" alt="Exterior photo of {{foodLocation.name}}">
    <h2 class="listing-heading">{{ foodLocation.name }}</h2>
    <p class="listing-location">{{ foodLocation.city}}</p>
    <a [routerLink]="['/details', foodLocation._id]">Learn More</a>
  </section>
`,
  styleUrls: ['./food-location.component.css'],
})

export class foodLocationComponent {

  @Input() foodLocation!: foodlocation;

}
