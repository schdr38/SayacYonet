import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaireListeComponent } from './daire-liste.component';

describe('DaireListeComponent', () => {
  let component: DaireListeComponent;
  let fixture: ComponentFixture<DaireListeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaireListeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaireListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
