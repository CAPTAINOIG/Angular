import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BehavioursignupComponent } from './behavioursignup.component';

describe('BehavioursignupComponent', () => {
  let component: BehavioursignupComponent;
  let fixture: ComponentFixture<BehavioursignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BehavioursignupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BehavioursignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
