import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Y2018Component } from './y2018.component';

describe('Y2018Component', () => {
  let component: Y2018Component;
  let fixture: ComponentFixture<Y2018Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ Y2018Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Y2018Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
