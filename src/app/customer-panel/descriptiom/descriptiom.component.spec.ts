import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptiomComponent } from './descriptiom.component';

describe('DescriptiomComponent', () => {
  let component: DescriptiomComponent;
  let fixture: ComponentFixture<DescriptiomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescriptiomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescriptiomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
