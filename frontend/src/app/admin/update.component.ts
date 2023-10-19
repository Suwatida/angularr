import { Component, inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { foodService } from '../food.service';
import { foodlocation } from '../foodlocation';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
    selector : 'app-update',
    standalone: true,
    imports: [
        CommonModule,
        ReactiveFormsModule,

      ],
    template :`
    <form (submit)="onSubmit()">

      <div>
        <label for="name">
          Name
        </label>
        <input id="name" type="text" [value]="foodLocation?.name" formControlName="name">
      </div>

      <div>
        <label for="city">
          City
        </label>
        <input id="city" type="text" [value]="foodLocation?.city" formControlName="city">
      </div>

      <div>
      <label for="photo">
        Photo
      </label>
      <input id="photo" type="text" [value]="foodLocation?.photo" formControlName="photo">
    </div>

    <div>
    <label for="wifi">
      Wifi
    </label>
    <input id="wifi" type="checkbox" [value]="foodLocation?.wifi" formControlName="wifi">
  </div>

      <button class="button" type="submit">Update</button>

    </form>`
})
    export class UpdateComponent {
     
  route: ActivatedRoute = inject(ActivatedRoute);
  foodService = inject(foodService);
  foodLocation: foodlocation | undefined;
  

        constructor() {
            const foodLocationId = this.route.snapshot.params['id'];
            this.foodService.getfoodlocationById(foodLocationId).then(foodLocation => {
              this.foodLocation = foodLocation;
            });
          }
        
        onSubmit() {
            // Process form data here
            let values = {
                name: (<HTMLInputElement>document.getElementById("name")).value,
                city: (<HTMLInputElement>document.getElementById("city")).value,
                photo: (<HTMLInputElement>document.getElementById("photo")).value,
                wifi: (<HTMLInputElement>document.getElementById("wifi")).checked,
            }

        
            const foodLocationId = this.route.snapshot.params['id'];
            this.foodService.update(foodLocationId,values);
        }

    }
