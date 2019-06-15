import { Component, OnInit } from '@angular/core';
import { InvoiceAidApiService } from '../invoice-aid-api.service';
import { Insurer } from '../models';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material';
import { AddInsurerDialogComponent } from '../add-insurer-dialog/add-insurer-dialog.component';

@Component({
  selector: 'app-insurer-list',
  templateUrl: './insurer-list.component.html',
  styleUrls: ['./insurer-list.component.scss']
})
export class InsurerListComponent implements OnInit {

  insurers$: Observable<Insurer[]> = this.api.getInsurers();

  constructor(protected api: InvoiceAidApiService, protected dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddInsurerDialogComponent, {
      width: '250px',
      data: { name: 'nothing' }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log('Dialog returns->', result);
    });
  }

}
