import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageHeaderComponents } from './page-header';

describe('PageHeader', () => {
  let component: PageHeaderComponents;
  let fixture: ComponentFixture<PageHeaderComponents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageHeaderComponents]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageHeaderComponents);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
