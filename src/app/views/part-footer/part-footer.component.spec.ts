import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartFooterComponent } from './part-footer.component';

describe('PartFooterComponent', () => {
  let component: PartFooterComponent;
  let fixture: ComponentFixture<PartFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
