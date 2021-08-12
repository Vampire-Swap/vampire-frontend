import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatingImageComponent } from './floating-image.component';

describe('FloatingImageComponent', () => {
  let component: FloatingImageComponent;
  let fixture: ComponentFixture<FloatingImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FloatingImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FloatingImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
