import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteDuzenleComponent } from './site-duzenle.component';

describe('SiteDuzenleComponent', () => {
  let component: SiteDuzenleComponent;
  let fixture: ComponentFixture<SiteDuzenleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteDuzenleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteDuzenleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
