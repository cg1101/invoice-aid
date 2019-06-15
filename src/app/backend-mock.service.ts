import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { Customer, Insurer, Therapist } from './models';

@Injectable()
export class BackendMockService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const { url } = req;
    let body;
    if (url.match(/^\/customers/)) {
      body = [
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
      return of(new HttpResponse<Customer[]>({
        status: 200,
        body
      }));
    } else if (url.match(/^\/insurers/)) {
      body = [
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
      return of(new HttpResponse<Insurer[]>({
        status: 200,
        body
      }));
    } else if (url.match(/^\/therapists/)) {
      body = [
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
      return of(new HttpResponse<Therapist[]>({
        status: 200,
        body
      }));
    }
    return next.handle(req);
  }
}
