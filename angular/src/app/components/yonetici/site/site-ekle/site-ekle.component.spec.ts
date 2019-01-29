import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteEkleComponent } from './site-ekle.component';

describe('SiteEkleComponent', () => {
  let component: SiteEkleComponent;
  let fixture: ComponentFixture<SiteEkleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteEkleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteEkleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
