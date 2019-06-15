import { Component, OnInit } from '@angular/core';
import { InvoiceAidApiService } from '../invoice-aid-api.service';
import { Insurer } from '../models';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-insurer-list',
  templateUrl: './insurer-list.component.html',
  styleUrls: ['./insurer-list.component.scss']
})
export class InsurerListComponent implements OnInit {

  insurers$: Observable<Insurer[]> = this.api.getInsurers();

  constructor(protected api: InvoiceAidApiService) { }

  ngOnInit() {
  }

}
