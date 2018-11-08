import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutprogPage } from './workoutprog.page';

describe('WorkoutprogPage', () => {
  let component: WorkoutprogPage;
  let fixture: ComponentFixture<WorkoutprogPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkoutprogPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkoutprogPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
