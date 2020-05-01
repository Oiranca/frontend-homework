import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagefamilyComponent } from './managefamily.component';

describe('ManagefamilyComponent', () => {
  let component: ManagefamilyComponent;
  let fixture: ComponentFixture<ManagefamilyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagefamilyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagefamilyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
