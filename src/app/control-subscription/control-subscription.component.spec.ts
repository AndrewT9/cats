import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlSubscriptionComponent } from './control-subscription.component';

describe('ControlSubscriptionComponent', () => {
  let component: ControlSubscriptionComponent;
  let fixture: ComponentFixture<ControlSubscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlSubscriptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ControlSubscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
