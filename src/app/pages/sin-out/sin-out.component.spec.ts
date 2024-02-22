import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinOutComponent } from './sin-out.component';

describe('SinOutComponent', () => {
  let component: SinOutComponent;
  let fixture: ComponentFixture<SinOutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SinOutComponent]
    });
    fixture = TestBed.createComponent(SinOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
