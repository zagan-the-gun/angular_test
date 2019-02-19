import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageEquipmentsIndexComponent } from './page-equipments-index.component';

describe('PageEquipmentsIndexComponent', () => {
  let component: PageEquipmentsIndexComponent;
  let fixture: ComponentFixture<PageEquipmentsIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageEquipmentsIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageEquipmentsIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
