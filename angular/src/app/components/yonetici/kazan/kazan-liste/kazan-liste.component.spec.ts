import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KazanListeComponent } from './kazan-liste.component';

describe('KazanListeComponent', () => {
  let component: KazanListeComponent;
  let fixture: ComponentFixture<KazanListeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KazanListeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KazanListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
