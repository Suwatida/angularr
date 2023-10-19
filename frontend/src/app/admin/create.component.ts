import { Component, inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { foodService } from '../food.service';

@Component({
    selector : 'app-create',
    template :`
    <form (submit)="onSubmit()">

      <div>
        <label for="name">
          Name
        </label>
        <input id="name" type="text" formControlName="name">
      </div>

      <div>
        <label for="city">
          City
        </label>
        <input id="city" type="text" formControlName="city">
      </div>

      <div>
      <label for="photo">
        Photo
      </label>
      <input id="photo" type="text" formControlName="photo">
    </div>

    <div>
    <label for="wifi">
      Wifi
    </label>
    <input id="wifi" type="checkbox" formControlName="wifi">
  </div>

      <button class="button" type="submit">Create</button>

    </form>`
})
    export class CreateRecordComponent {
        /*
  name: string;
  city: string;
  photo: string;
  wifi: boolean;

        */
        createForm = this.formBuilder.group({
            name :'',
            city :'',
            photo:'',
            wifi:true,
        });

        constructor(
            private foodService: foodService,
            private formBuilder: FormBuilder,
          ) {}
        
        onSubmit() {
            // Process form data here
            let values = {
                name: (<HTMLInputElement>document.getElementById("name")).value,
                city: (<HTMLInputElement>document.getElementById("city")).value,
                photo: (<HTMLInputElement>document.getElementById("photo")).value,
                wifi: (<HTMLInputElement>document.getElementById("wifi")).checked,
            }

            this.foodService.create(values);
            console.warn('Your record has been created', values);
            //this.createForm.reset();
        }

    }