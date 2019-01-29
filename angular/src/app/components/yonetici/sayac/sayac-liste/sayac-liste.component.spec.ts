import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SayacListeComponent } from './sayac-liste.component';

describe('SayacListeComponent', () => {
  let component: SayacListeComponent;
  let fixture: ComponentFixture<SayacListeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SayacListeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SayacListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
