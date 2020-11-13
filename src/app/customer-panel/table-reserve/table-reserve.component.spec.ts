import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableReserveComponent } from './table-reserve.component';

describe('TableReserveComponent', () => {
  let component: TableReserveComponent;
  let fixture: ComponentFixture<TableReserveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableReserveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableReserveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
