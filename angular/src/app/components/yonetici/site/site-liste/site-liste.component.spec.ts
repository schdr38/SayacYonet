import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteListeComponent } from './site-liste.component';

describe('SiteListeComponent', () => {
  let component: SiteListeComponent;
  let fixture: ComponentFixture<SiteListeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteListeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
