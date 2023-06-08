import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeBasicAdminComponent } from './employe-basic-admin.component';

describe('EmployeBasicAdminComponent', () => {
  let component: EmployeBasicAdminComponent;
  let fixture: ComponentFixture<EmployeBasicAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeBasicAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeBasicAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
