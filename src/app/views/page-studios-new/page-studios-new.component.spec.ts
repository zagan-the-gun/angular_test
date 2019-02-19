import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageStudiosNewComponent } from './page-studios-new.component';

describe('PageStudiosNewComponent', () => {
  let component: PageStudiosNewComponent;
  let fixture: ComponentFixture<PageStudiosNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageStudiosNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageStudiosNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
