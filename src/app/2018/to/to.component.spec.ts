import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ToComponent } from './to.component';

describe('ToComponent', () => {
  let component: ToComponent;
  let fixture: ComponentFixture<ToComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ToComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
