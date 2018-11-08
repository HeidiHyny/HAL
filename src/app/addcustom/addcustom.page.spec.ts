import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcustomPage } from './addcustom.page';

describe('AddcustomPage', () => {
  let component: AddcustomPage;
  let fixture: ComponentFixture<AddcustomPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddcustomPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcustomPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
