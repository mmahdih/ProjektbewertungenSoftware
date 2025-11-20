import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentExport } from './student-export';

describe('StudentExport', () => {
  let component: StudentExport;
  let fixture: ComponentFixture<StudentExport>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentExport]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentExport);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
