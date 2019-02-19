import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageReservationsIndexComponent } from './page-reservations-index.component';

describe('PageReservationsIndexComponent', () => {
  let component: PageReservationsIndexComponent;
  let fixture: ComponentFixture<PageReservationsIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageReservationsIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageReservationsIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
