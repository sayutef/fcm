import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTComponent } from './page-t.component';

describe('PageTComponent', () => {
  let component: PageTComponent;
  let fixture: ComponentFixture<PageTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PageTComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
