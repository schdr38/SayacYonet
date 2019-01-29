import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaireDuzenleComponent } from './daire-duzenle.component';

describe('DaireDuzenleComponent', () => {
  let component: DaireDuzenleComponent;
  let fixture: ComponentFixture<DaireDuzenleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaireDuzenleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaireDuzenleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
