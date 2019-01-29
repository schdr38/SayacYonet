import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlokEkleComponent } from './blok-ekle.component';

describe('BlokEkleComponent', () => {
  let component: BlokEkleComponent;
  let fixture: ComponentFixture<BlokEkleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlokEkleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlokEkleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
