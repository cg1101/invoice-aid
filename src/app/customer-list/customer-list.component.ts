import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { InvoiceAidApiService } from '../invoice-aid-api.service';
import { Customer } from '../models';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {

  customers$: Observable<Customer[]> = this.api.getCustomers();

  constructor(protected api: InvoiceAidApiService) { }

  ngOnInit() { }

}
