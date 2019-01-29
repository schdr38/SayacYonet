import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlokListeComponent } from './blok-liste.component';

describe('BlokListeComponent', () => {
  let component: BlokListeComponent;
  let fixture: ComponentFixture<BlokListeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlokListeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlokListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
