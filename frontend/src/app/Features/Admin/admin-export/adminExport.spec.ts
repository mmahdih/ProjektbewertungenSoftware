import { ComponentFixture, TestBed } from '@angular/core/testing';

import { adminExport } from './adminExport';

describe('adminExport', () => {
  let component: adminExport;
  let fixture: ComponentFixture<adminExport>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [adminExport]
    })
    .compileComponents();

    fixture = TestBed.createComponent(adminExport);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
