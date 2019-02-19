import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageClassEquipmentsNewComponent } from './page-class-equipments-new.component';

describe('PageClassEquipmentsNewComponent', () => {
  let component: PageClassEquipmentsNewComponent;
  let fixture: ComponentFixture<PageClassEquipmentsNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageClassEquipmentsNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageClassEquipmentsNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
