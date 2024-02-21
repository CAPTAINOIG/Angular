import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BehavioursubjectComponent } from './behavioursubject.component';

describe('BehavioursubjectComponent', () => {
  let component: BehavioursubjectComponent;
  let fixture: ComponentFixture<BehavioursubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BehavioursubjectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BehavioursubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
