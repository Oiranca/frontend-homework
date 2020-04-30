import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationnavbarComponent } from './applicationnavbar.component';

describe('ApplicationnavbarComponent', () => {
  let component: ApplicationnavbarComponent;
  let fixture: ComponentFixture<ApplicationnavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicationnavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationnavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
