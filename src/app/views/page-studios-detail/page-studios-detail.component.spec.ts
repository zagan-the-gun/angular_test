import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageStudiosDetailComponent } from './page-studios-detail.component';

describe('PageStudiosDetailComponent', () => {
  let component: PageStudiosDetailComponent;
  let fixture: ComponentFixture<PageStudiosDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageStudiosDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageStudiosDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
