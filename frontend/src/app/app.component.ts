/* Import statements and component decorator */

import { Component } from '@angular/core';
import { restaurantComponent } from './restaurant/restaurant.component';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    restaurantComponent,
    RouterLink,
    RouterOutlet,
  ],
  template: `
    <main>
      <a [routerLink]="['/']">
        <header class="brand-name">
          <img class="brand-logo" src="/assets/logo.jpg" alt="logo" aria-hidden="true">
        </header>
      </a>
      <p>The Best Restaurant 2023</p>
      <section class="content">
        <router-outlet></router-outlet>
      </section>
    </main>
  `,
  styleUrls: ['./app.component.css'], // Include the CSS file
})
export class AppComponent {
  title = 'restaurants';
}
