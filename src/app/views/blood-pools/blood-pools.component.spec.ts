import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloodPoolsComponent } from './blood-pools.component';

describe('BloodPoolsComponent', () => {
  let component: BloodPoolsComponent;
  let fixture: ComponentFixture<BloodPoolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BloodPoolsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BloodPoolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
