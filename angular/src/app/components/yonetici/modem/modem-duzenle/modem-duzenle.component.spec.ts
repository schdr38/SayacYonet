import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModemDuzenleComponent } from './modem-duzenle.component';

describe('ModemDuzenleComponent', () => {
  let component: ModemDuzenleComponent;
  let fixture: ComponentFixture<ModemDuzenleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModemDuzenleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModemDuzenleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
