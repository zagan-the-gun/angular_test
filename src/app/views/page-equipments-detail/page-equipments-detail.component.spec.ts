import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageEquipmentsDetailComponent } from './page-equipments-detail.component';

describe('PageEquipmentsDetailComponent', () => {
  let component: PageEquipmentsDetailComponent;
  let fixture: ComponentFixture<PageEquipmentsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageEquipmentsDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageEquipmentsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
