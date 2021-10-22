/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UtopianComponent } from './utopian.component';

describe('UtopianComponent', () => {
  let component: UtopianComponent;
  let fixture: ComponentFixture<UtopianComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UtopianComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UtopianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
