import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MysignupComponent } from './mysignup.component';

describe('MysignupComponent', () => {
  let component: MysignupComponent;
  let fixture: ComponentFixture<MysignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MysignupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MysignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
