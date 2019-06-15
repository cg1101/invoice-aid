import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';
import {
  MatGridListModule, MatCardModule, MatMenuModule, MatIconModule,
  MatButtonModule, MatToolbarModule, MatSidenavModule, MatListModule
} from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
import { NavigationComponent } from './navigation/navigation.component';
import { InsurerListComponent } from './insurer-list/insurer-list.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { TherapistListComponent } from './therapist-list/therapist-list.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BackendMockService } from './backend-mock.service';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavigationComponent,
    InsurerListComponent,
    CustomerListComponent,
    TherapistListComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    LayoutModule,
    MatSidenavModule,
    MatListModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: BackendMockService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
