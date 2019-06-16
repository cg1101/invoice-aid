import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-add-customer-dialog',
  templateUrl: './add-customer-dialog.component.html',
  styleUrls: ['./add-customer-dialog.component.scss']
})
export class AddCustomerDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AddCustomerDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
