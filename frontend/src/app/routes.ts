import { Routes } from '@angular/router';
import { restaurantComponent } from './restaurant/restaurant.component';
import { DetailsComponent } from './details/details.component';
import { CreateRecordComponent } from './admin/create.component';
import { UpdateComponent } from './admin/update.component';

const routeConfig: Routes = [
  {
    path: '',
    component: restaurantComponent,
    title: 'restaurant page'
  },
  {
    path: 'details/:id',
    component: DetailsComponent,
    title: 'restaurant details'
  },
  {
    path:'create',
    component: CreateRecordComponent,
    title:'create'
  },
  {
    path:'update/:id',
    component: UpdateComponent,
    title:'update'
  }
];

export default routeConfig;
