import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalemailComponent } from './modalemail.component';

describe('ModalemialComponent', () => {
  let component: ModalemailComponent;
  let fixture: ComponentFixture<ModalemailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalemailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalemailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
