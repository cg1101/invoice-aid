import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-add-insurer-dialog',
  templateUrl: './add-insurer-dialog.component.html',
  styleUrls: ['./add-insurer-dialog.component.scss']
})
export class AddInsurerDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AddInsurerDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    console.log('input used names->', this.data.usedNames);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
