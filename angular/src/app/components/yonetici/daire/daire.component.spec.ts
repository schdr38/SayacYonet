import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaireComponent } from './daire.component';

describe('DaireComponent', () => {
  let component: DaireComponent;
  let fixture: ComponentFixture<DaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
