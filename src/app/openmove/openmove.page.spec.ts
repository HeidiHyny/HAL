import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenmovePage } from './openmove.page';

describe('OpenmovePage', () => {
  let component: OpenmovePage;
  let fixture: ComponentFixture<OpenmovePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenmovePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenmovePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
