import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SayacDuzenleComponent } from './sayac-duzenle.component';

describe('SayacDuzenleComponent', () => {
  let component: SayacDuzenleComponent;
  let fixture: ComponentFixture<SayacDuzenleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SayacDuzenleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SayacDuzenleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
