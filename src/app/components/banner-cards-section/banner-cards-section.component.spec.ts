import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerCardsSectionComponent } from './banner-cards-section.component';

describe('BannerCardsSectionComponent', () => {
  let component: BannerCardsSectionComponent;
  let fixture: ComponentFixture<BannerCardsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerCardsSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerCardsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
