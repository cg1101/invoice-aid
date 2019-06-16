import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { InvoiceAidApiService } from '../invoice-aid-api.service';
import { Customer } from '../models';
import { MatDialog } from '@angular/material';
import { AddCustomerDialogComponent } from '../add-customer-dialog/add-customer-dialog.component';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {

  customers: Customer[] = [];

  constructor(protected api: InvoiceAidApiService, protected dialog: MatDialog) { }

  ngOnInit() {
    this.api.getCustomers().subscribe(customers => {
      this.customers = customers;
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddCustomerDialogComponent, {
      width: '250px',
      data: {
        familyName: '',
        givenName: '',
        dateOfBirth: '',
        phone: ''
      }
    });

    dialogRef.afterClosed().subscribe(newCustomerData => {
      console.log('The dialog was closed');
      console.log('Dialog returns->', newCustomerData);
      if (newCustomerData) {
        this.api.createCustomer(newCustomerData)
          .subscribe(newCustomer => {
            console.log('createInsurer->', newCustomer);
            this.customers.push(newCustomer);
          });
      }
    });
  }
}
