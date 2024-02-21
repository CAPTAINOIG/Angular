import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MysigninComponent } from './mysignin.component';

describe('MysigninComponent', () => {
  let component: MysigninComponent;
  let fixture: ComponentFixture<MysigninComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MysigninComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MysigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
