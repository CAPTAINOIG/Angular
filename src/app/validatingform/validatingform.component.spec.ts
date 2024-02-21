import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidatingformComponent } from './validatingform.component';

describe('ValidatingformComponent', () => {
  let component: ValidatingformComponent;
  let fixture: ComponentFixture<ValidatingformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValidatingformComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ValidatingformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
