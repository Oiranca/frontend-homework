import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterfamilyComponent } from './registerfamily.component';

describe('RegisterfamilyComponent', () => {
  let component: RegisterfamilyComponent;
  let fixture: ComponentFixture<RegisterfamilyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterfamilyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterfamilyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
