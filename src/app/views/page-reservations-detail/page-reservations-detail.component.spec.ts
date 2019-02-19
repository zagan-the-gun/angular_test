import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageReservationsDetailComponent } from './page-reservations-detail.component';

describe('PageReservationsDetailComponent', () => {
  let component: PageReservationsDetailComponent;
  let fixture: ComponentFixture<PageReservationsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageReservationsDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageReservationsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
