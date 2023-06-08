import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeChartAdminComponent } from './employe-chart-admin.component';

describe('EmployeChartAdminComponent', () => {
  let component: EmployeChartAdminComponent;
  let fixture: ComponentFixture<EmployeChartAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeChartAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeChartAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
