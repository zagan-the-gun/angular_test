import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageUsersIndexComponent } from './page-users-index.component';

describe('PageUsersIndexComponent', () => {
  let component: PageUsersIndexComponent;
  let fixture: ComponentFixture<PageUsersIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageUsersIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageUsersIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
