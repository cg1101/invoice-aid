import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';
import {
  MatGridListModule,
  MatCardModule,
  MatMenuModule,
  MatIconModule,
  MatButtonModule,
  MatToolbarModule,
  MatSidenavModule,
  MatListModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  MatTableModule,
  MatExpansionModule,
  MatPaginatorModule,
  MatSortModule,
  MatCheckboxModule,
} from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
import { NavigationComponent } from './navigation/navigation.component';
import { InsurerListComponent } from './insurer-list/insurer-list.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { TherapistListComponent } from './therapist-list/therapist-list.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BackendMockService } from './backend-mock.service';
import { CommonModule } from '@angular/common';
import { AddInsurerDialogComponent } from './add-insurer-dialog/add-insurer-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddCustomerDialogComponent } from './add-customer-dialog/add-customer-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavigationComponent,
    InsurerListComponent,
    CustomerListComponent,
    TherapistListComponent,
    AddInsurerDialogComponent,
    AddCustomerDialogComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatMenuModule,
    MatIconModule,
    MatInputModule,
    MatToolbarModule,
    MatButtonModule,
    LayoutModule,
    MatSidenavModule,
    MatListModule,
    MatTableModule,
    MatExpansionModule,
    MatPaginatorModule,
    MatSortModule,
    MatCheckboxModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: BackendMockService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    AddCustomerDialogComponent,
    AddInsurerDialogComponent
  ]
})
export class AppModule { }
