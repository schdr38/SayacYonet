import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KazanComponent } from './kazan.component';

describe('KazanComponent', () => {
  let component: KazanComponent;
  let fixture: ComponentFixture<KazanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KazanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KazanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
