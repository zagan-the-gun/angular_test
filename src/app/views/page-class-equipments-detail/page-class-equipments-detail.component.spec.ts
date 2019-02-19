import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageClassEquipmentsDetailComponent } from './page-class-equipments-detail.component';

describe('PageClassEquipmentsDetailComponent', () => {
  let component: PageClassEquipmentsDetailComponent;
  let fixture: ComponentFixture<PageClassEquipmentsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageClassEquipmentsDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageClassEquipmentsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
