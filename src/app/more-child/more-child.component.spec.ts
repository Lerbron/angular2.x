/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MoreChildComponent } from './more-child.component';

describe('MoreChildComponent', () => {
  let component: MoreChildComponent;
  let fixture: ComponentFixture<MoreChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoreChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
