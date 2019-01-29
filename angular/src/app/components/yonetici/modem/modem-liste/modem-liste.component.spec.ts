import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModemListeComponent } from './modem-liste.component';

describe('ModemListeComponent', () => {
  let component: ModemListeComponent;
  let fixture: ComponentFixture<ModemListeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModemListeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModemListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
