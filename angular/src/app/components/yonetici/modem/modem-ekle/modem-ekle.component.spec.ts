import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModemEkleComponent } from './modem-ekle.component';

describe('ModemEkleComponent', () => {
  let component: ModemEkleComponent;
  let fixture: ComponentFixture<ModemEkleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModemEkleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModemEkleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
