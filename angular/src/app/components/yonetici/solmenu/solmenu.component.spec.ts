import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolmenuComponent } from './solmenu.component';

describe('SolmenuComponent', () => {
  let component: SolmenuComponent;
  let fixture: ComponentFixture<SolmenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolmenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
