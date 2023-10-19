import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardRegionsComponent } from './dashboard-regions.component';

describe('DashboardRegionsComponent', () => {
  let component: DashboardRegionsComponent;
  let fixture: ComponentFixture<DashboardRegionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardRegionsComponent]
    });
    fixture = TestBed.createComponent(DashboardRegionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
