import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddInsurerDialogComponent } from './add-insurer-dialog.component';

describe('AddInsurerDialogComponent', () => {
  let component: AddInsurerDialogComponent;
  let fixture: ComponentFixture<AddInsurerDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddInsurerDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddInsurerDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
