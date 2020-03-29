import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTherapistDialogComponent } from './add-therapist-dialog.component';

describe('AddTherapistDialogComponent', () => {
  let component: AddTherapistDialogComponent;
  let fixture: ComponentFixture<AddTherapistDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTherapistDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTherapistDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
