import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Prod11Component } from './prod11.component';

describe('Prod11Component', () => {
  let component: Prod11Component;
  let fixture: ComponentFixture<Prod11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Prod11Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Prod11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
