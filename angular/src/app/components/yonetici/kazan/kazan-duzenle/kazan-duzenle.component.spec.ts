import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KazanDuzenleComponent } from './kazan-duzenle.component';

describe('KazanDuzenleComponent', () => {
  let component: KazanDuzenleComponent;
  let fixture: ComponentFixture<KazanDuzenleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KazanDuzenleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KazanDuzenleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
