import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatetasksComponent } from './createtasks.component';

describe('CreatetasksComponent', () => {
  let component: CreatetasksComponent;
  let fixture: ComponentFixture<CreatetasksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatetasksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatetasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
