import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-add-therapist-dialog',
  templateUrl: './add-therapist-dialog.component.html',
  styleUrls: ['./add-therapist-dialog.component.scss']
})
export class AddTherapistDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<AddTherapistDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    console.log('input used names->', this.data.usedNames);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
