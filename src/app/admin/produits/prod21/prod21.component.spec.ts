import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Prod21Component } from './prod21.component';

describe('Prod21Component', () => {
  let component: Prod21Component;
  let fixture: ComponentFixture<Prod21Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Prod21Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Prod21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
