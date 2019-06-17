import { Component, OnInit } from '@angular/core';
import { Therapist } from '../models';
import { InvoiceAidApiService } from '../invoice-aid-api.service';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material';
import { AddTherapistDialogComponent } from '../add-therapist-dialog/add-therapist-dialog.component';

@Component({
  selector: 'app-therapist-list',
  templateUrl: './therapist-list.component.html',
  styleUrls: ['./therapist-list.component.scss']
})
export class TherapistListComponent implements OnInit {

  therapists: Therapist[] = [];

  constructor(protected api: InvoiceAidApiService, public dialog: MatDialog) { }

  ngOnInit() {
    this.api.getTherapists().subscribe(therapists => {
      this.therapists = therapists;
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddTherapistDialogComponent, {
      width: '250px',
      data: {
        familyName: '',
        givenName: ''
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log('Dialog returns->', result);
      if (result) {
        this.api.createTherapist({ ...result })
          .subscribe(newTherapist => {
            console.log('createTherapist->', newTherapist);
            this.therapists.push(newTherapist);
          });
      }
    });
  }
}
