import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Y2020Component } from './y2020.component';

describe('Y2020Component', () => {
  let component: Y2020Component;
  let fixture: ComponentFixture<Y2020Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Y2020Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Y2020Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
