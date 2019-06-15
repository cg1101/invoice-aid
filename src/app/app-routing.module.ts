import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { TherapistListComponent } from './therapist-list/therapist-list.component';
import { InsurerListComponent } from './insurer-list/insurer-list.component';
import { NavigationComponent } from './navigation/navigation.component';

const routes: Routes = [
  {
    path: 'customers',
    component: CustomerListComponent
  },
  {
    path: 'therapists',
    component: TherapistListComponent
  },
  {
    path: 'insurers',
    component: InsurerListComponent
  },
  {
    path: '*',
    pathMatch: 'full',
    component: NavigationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
