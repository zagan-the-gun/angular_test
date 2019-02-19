import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageUsersDetailComponent } from './page-users-detail.component';

describe('PageUsersDetailComponent', () => {
  let component: PageUsersDetailComponent;
  let fixture: ComponentFixture<PageUsersDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageUsersDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageUsersDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
