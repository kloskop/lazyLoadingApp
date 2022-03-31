import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatformDetectorComponent } from './platform-detector.component';

describe('PlatformDetectorComponent', () => {
  let component: PlatformDetectorComponent;
  let fixture: ComponentFixture<PlatformDetectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlatformDetectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlatformDetectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
