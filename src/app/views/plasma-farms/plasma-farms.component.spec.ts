import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlasmaFarmsComponent } from './plasma-farms.component';

describe('PlasmaFarmsComponent', () => {
  let component: PlasmaFarmsComponent;
  let fixture: ComponentFixture<PlasmaFarmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlasmaFarmsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlasmaFarmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
