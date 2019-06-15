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
    return this.http.get<Customer[]>('/');
  }

  getTherapists(): Observable<Therapist[]> {
    return this.http.get<Therapist[]>('/');
  }

  getInsurers(): Observable<Insurer[]> {
    return this.http.get<Insurer[]>('/');
  }
}
