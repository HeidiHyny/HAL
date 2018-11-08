import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoveprogPage } from './moveprog.page';

describe('MoveprogPage', () => {
  let component: MoveprogPage;
  let fixture: ComponentFixture<MoveprogPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoveprogPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoveprogPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
