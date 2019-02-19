import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageStudiosIndexComponent } from './page-studios-index.component';

describe('PageStudiosIndexComponent', () => {
  let component: PageStudiosIndexComponent;
  let fixture: ComponentFixture<PageStudiosIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageStudiosIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageStudiosIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
