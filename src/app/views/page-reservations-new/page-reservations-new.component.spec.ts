import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageReservationsNewComponent } from './page-reservations-new.component';

describe('PageReservationsNewComponent', () => {
  let component: PageReservationsNewComponent;
  let fixture: ComponentFixture<PageReservationsNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageReservationsNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageReservationsNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
