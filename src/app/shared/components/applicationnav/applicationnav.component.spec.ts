import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AplicationnavbarComponent } from './aplicationnavbar.component';

describe('AplicationnavbarComponent', () => {
  let component: AplicationnavbarComponent;
  let fixture: ComponentFixture<AplicationnavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AplicationnavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AplicationnavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
