import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Prod3Component } from './prod3.component';

describe('Prod3Component', () => {
  let component: Prod3Component;
  let fixture: ComponentFixture<Prod3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Prod3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Prod3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
