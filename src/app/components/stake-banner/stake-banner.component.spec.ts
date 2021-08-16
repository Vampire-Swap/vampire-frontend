import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StakeBannerComponent } from './stake-banner.component';

describe('StakeBannerComponent', () => {
  let component: StakeBannerComponent;
  let fixture: ComponentFixture<StakeBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StakeBannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StakeBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
