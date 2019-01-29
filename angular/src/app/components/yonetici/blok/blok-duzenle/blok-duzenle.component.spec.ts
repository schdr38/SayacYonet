import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlokDuzenleComponent } from './blok-duzenle.component';

describe('BlokDuzenleComponent', () => {
  let component: BlokDuzenleComponent;
  let fixture: ComponentFixture<BlokDuzenleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlokDuzenleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlokDuzenleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
