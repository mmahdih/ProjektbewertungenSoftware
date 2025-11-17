import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Loginn } from './loginn';

describe('Loginn', () => {
  let component: Loginn;
  let fixture: ComponentFixture<Loginn>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Loginn]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Loginn);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
