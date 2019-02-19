import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartHeaderComponent } from './part-header.component';

describe('PartHeaderComponent', () => {
  let component: PartHeaderComponent;
  let fixture: ComponentFixture<PartHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
