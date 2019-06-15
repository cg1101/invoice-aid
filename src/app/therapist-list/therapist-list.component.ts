import { Component, OnInit } from '@angular/core';
import { Therapist } from '../models';
import { InvoiceAidApiService } from '../invoice-aid-api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-therapist-list',
  templateUrl: './therapist-list.component.html',
  styleUrls: ['./therapist-list.component.scss']
})
export class TherapistListComponent implements OnInit {

  therapists$: Observable<Therapist[]> = this.api.getTherapists();

  constructor(protected api: InvoiceAidApiService) { }

  ngOnInit() {
  }

}
