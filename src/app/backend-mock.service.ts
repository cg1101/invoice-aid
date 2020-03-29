import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { Customer, Insurer, Therapist } from './models';

@Injectable()
export class BackendMockService implements HttpInterceptor {

  customers = [
    {
      customerId: 1,
      familyName: 'fa',
      givenName: 'gi',
    },
    {
      customerId: 2,
      familyName: 'fa2',
      givenName: 'gi2',
    },
    {
      customerId: 3,
      familyName: 'fa3',
      givenName: 'gi3',
    },
  ];
  insurers = [
    {
      insurerId: 1,
      insurerName: 'Bupa',
    },
    {
      insurerId: 2,
      insurerName: 'Medibank',
    },
    {
      insurerId: 3,
      insurerName: 'AIG',
    },
  ];
  therapists = [
    {
      therapistId: 1,
      familyName: 'Big',
      givenName: 'Bang',
    },
    {
      therapistId: 2,
      familyName: 'Johnson',
      givenName: 'Scarlet',
    },
    {
      therapistId: 3,
      familyName: 'Hello',
      givenName: 'World',
    },
  ];

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const { url } = req;
    console.log(`interceptor -> `, url);
    let body;
    console.log(`url matched->`, url);
    if (url.match(/^\/customers/)) {
      if (req.method === 'GET') {
        body = [...this.customers];
        return of(new HttpResponse<Customer[]>({
          status: 200,
          body
        }));
      } else if (req.method === 'POST') {
        const newCustomer = {
          customerId: this.customers.length + 1,
          familyName: req.body.familyName,
          givenName: req.body.givenName,
          dateOfBirth: req.body.dateOfBirth,
          phone: req.body.phone,
        };
        this.customers.push(newCustomer);
        body = newCustomer;
        return of(new HttpResponse<Customer>({
          status: 200,
          body
        }));
      }
    } else if (url.match(/^\/insurers/)) {
      if (req.method === 'GET') {
        body = [...this.insurers];
        return of(new HttpResponse<Insurer[]>({
          status: 200,
          body
        }));
      } else if (req.method === 'POST') {
        const newInsurer = {
          insurerId: this.insurers.length + 1,
          insurerName: req.body.insurerName
        };
        this.insurers.push(newInsurer);
        body = newInsurer;
        return of(new HttpResponse<Insurer>({
          status: 200,
          body
        }));
      }
    } else if (url.match(/^\/therapists/)) {
      if (req.method === 'GET') {
        body = [...this.therapists];
        return of(new HttpResponse<Therapist[]>({
          status: 200,
          body
        }));
      } else if (req.method === 'POST') {
        const newTherapist = {
          therapistId: this.therapists.length + 1,
          familyName: req.body.familyName,
          givenName: req.body.givenName,
        };
        this.therapists.push(newTherapist);
        body = newTherapist;
        return of(new HttpResponse<Therapist>({
          status: 200,
          body
        }));
      }
    }
    return next.handle(req);
  }
}
