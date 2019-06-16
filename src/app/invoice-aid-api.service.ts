import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Customer, Insurer, Therapist } from './models';

@Injectable({
  providedIn: 'root'
})
export class InvoiceAidApiService {

  constructor(protected http: HttpClient) { }

  getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>('/customers');
  }

  getTherapists(): Observable<Therapist[]> {
    return this.http.get<Therapist[]>('/therapists');
  }

  getInsurers(): Observable<Insurer[]> {
    return this.http.get<Insurer[]>('/insurers');
  }

  createInsurer(input: any): Observable<Insurer> {
    const { insurerName } = input;
    console.log(`creating insurer using input->`, input);
    return this.http.post<Insurer>('/insurers', { insurerName });
  }

  createCustomer(input: any): Observable<Customer> {
    const { familyName, givenName, dateOfBirth, phone } = input;
    console.log(`creating customer using input->`, input);
    return this.http.post<Customer>('/customers', { familyName, givenName, dateOfBirth, phone });
  }
}
