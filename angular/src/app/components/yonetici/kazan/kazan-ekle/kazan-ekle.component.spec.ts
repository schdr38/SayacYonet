import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KazanEkleComponent } from './kazan-ekle.component';

describe('KazanEkleComponent', () => {
  let component: KazanEkleComponent;
  let fixture: ComponentFixture<KazanEkleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KazanEkleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KazanEkleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
