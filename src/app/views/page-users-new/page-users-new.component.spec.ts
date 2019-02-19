import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageUsersNewComponent } from './page-users-new.component';

describe('PageUsersNewComponent', () => {
  let component: PageUsersNewComponent;
  let fixture: ComponentFixture<PageUsersNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageUsersNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageUsersNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
