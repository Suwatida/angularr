import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { foodService } from '../food.service';
import { foodlocation } from '../foodlocation';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],
  template: `
  <article>
    <img class="listing-photo" [src]="foodLocation?.photo"
      alt="Exterior photo of {{foodLocation?.name}}"/>
    <section class="listing-description">
      <h2 class="listing-heading">{{foodLocation?.name}}</h2>
      <p class="listing-location">{{foodLocation?.city}}</p>
    </section>
    <section class="listing-features">
      <h2 class="section-heading">About this food location</h2>
      <ul>
      <li>Risus feugiat in ante metus dictum at tempor commodo ullamcorper.<br> Varius duis at consectetur lorem. Aliquet porttitor lacus luctus<br>accumsan tortor posuere ac ut consequat. In tellus integer feugiat scelerisque varius. Commodo viverra maecenas accumsan lacus vel facilisis volutpat est velit. </li>
        <li>Does this location have wifi: {{foodLocation?.wifi}}</li>
      </ul>
    </section>
    <section class="listing-apply">
      <h2 class="section-heading">Reserve in advance</h2>
      <form [formGroup]="applyForm" (submit)="submitApplication()">
        <label for="first-name">First Name</label>
        <input id="first-name" type="text" formControlName="firstName">

        <label for="last-name">Last Name</label>
        <input id="last-name" type="text" formControlName="lastName">

        <label for="email">Email</label>
        <input id="email" type="email" formControlName="email">
        <button type="submit" class="primary">Reservation</button>
      </form>
      <button (click)="deleteRecord()" class="primary">Delete</button>
      <a [routerLink]="['/create']">Create</a>
      <a [routerLink]="['/update', this.route.snapshot.params['id']]">Update</a>

    </section>
  </article>
`,
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent {

  route: ActivatedRoute = inject(ActivatedRoute);
  foodService = inject(foodService);
  foodLocation: foodlocation | undefined;
  
  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl('')
  });

  constructor() {
    const foodLocationId = this.route.snapshot.params['id'];
    this.foodService.getfoodlocationById(foodLocationId).then(foodLocation => {
      this.foodLocation = foodLocation;
    });
  }
  
  submitApplication() {
    this.foodService.submitApplication(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? ''
    );
  }

  deleteRecord(){
    const foodLocationId = this.route.snapshot.params['id'];
    this.foodService.deleteid(foodLocationId);
  }

}

