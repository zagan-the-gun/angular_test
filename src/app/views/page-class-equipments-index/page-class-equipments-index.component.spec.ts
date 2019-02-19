import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageClassEquipmentsIndexComponent } from './page-class-equipments-index.component';

describe('PageClassEquipmentsIndexComponent', () => {
  let component: PageClassEquipmentsIndexComponent;
  let fixture: ComponentFixture<PageClassEquipmentsIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageClassEquipmentsIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageClassEquipmentsIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
