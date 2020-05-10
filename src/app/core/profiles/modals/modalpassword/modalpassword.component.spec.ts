import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalpasswordComponent } from './modalpassword.component';

describe('ModalpasswordComponent', () => {
  let component: ModalpasswordComponent;
  let fixture: ComponentFixture<ModalpasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalpasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalpasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
