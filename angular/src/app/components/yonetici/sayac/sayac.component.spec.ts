import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SayacComponent } from './sayac.component';

describe('SayacComponent', () => {
  let component: SayacComponent;
  let fixture: ComponentFixture<SayacComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SayacComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SayacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
