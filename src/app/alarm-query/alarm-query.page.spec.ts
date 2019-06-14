import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlarmQueryPage } from './alarm-query.page';

describe('AlarmQueryPage', () => {
  let component: AlarmQueryPage;
  let fixture: ComponentFixture<AlarmQueryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlarmQueryPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlarmQueryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
