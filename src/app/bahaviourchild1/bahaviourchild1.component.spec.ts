import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bahaviourchild1Component } from './bahaviourchild1.component';

describe('Bahaviourchild1Component', () => {
  let component: Bahaviourchild1Component;
  let fixture: ComponentFixture<Bahaviourchild1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bahaviourchild1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Bahaviourchild1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
