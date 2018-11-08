import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewworkoutPage } from './newworkout.page';

describe('NewworkoutPage', () => {
  let component: NewworkoutPage;
  let fixture: ComponentFixture<NewworkoutPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewworkoutPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewworkoutPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
