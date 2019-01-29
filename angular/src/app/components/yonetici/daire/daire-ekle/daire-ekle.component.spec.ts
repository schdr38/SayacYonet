import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaireEkleComponent } from './daire-ekle.component';

describe('DaireEkleComponent', () => {
  let component: DaireEkleComponent;
  let fixture: ComponentFixture<DaireEkleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaireEkleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaireEkleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
