import { Component, OnInit } from '@angular/core';
import { InvoiceAidApiService } from '../invoice-aid-api.service';
import { Insurer } from '../models';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material';
import { AddInsurerDialogComponent } from '../add-insurer-dialog/add-insurer-dialog.component';
import { withLatestFrom } from 'rxjs/operators';

@Component({
  selector: 'app-insurer-list',
  templateUrl: './insurer-list.component.html',
  styleUrls: ['./insurer-list.component.scss']
})
export class InsurerListComponent implements OnInit {

  insurers: Insurer[] = [];

  constructor(protected api: InvoiceAidApiService, protected dialog: MatDialog) { }

  ngOnInit() {
    this.api.getInsurers().subscribe(insurers => {
      this.insurers = insurers;
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddInsurerDialogComponent, {
      width: '250px',
      data: {
        name: '',
        usedNames: this.insurers.map(i => (i as any).insurerName)
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log('Dialog returns->', result);
      if (result) {
        this.api.createInsurer({ insurerName: result })
          .subscribe(newInsurer => {
            console.log('createInsurer->', newInsurer);
            this.insurers.push(newInsurer);
          });
      }
    });
  }
}
