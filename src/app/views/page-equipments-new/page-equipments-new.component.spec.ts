import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageEquipmentsNewComponent } from './page-equipments-new.component';

describe('PageEquipmentsNewComponent', () => {
  let component: PageEquipmentsNewComponent;
  let fixture: ComponentFixture<PageEquipmentsNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageEquipmentsNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageEquipmentsNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
