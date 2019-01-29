import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SayacEkleComponent } from './sayac-ekle.component';

describe('SayacEkleComponent', () => {
  let component: SayacEkleComponent;
  let fixture: ComponentFixture<SayacEkleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SayacEkleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SayacEkleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
