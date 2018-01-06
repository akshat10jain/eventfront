import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeteventComponent } from './getevent.component';

describe('GeteventComponent', () => {
  let component: GeteventComponent;
  let fixture: ComponentFixture<GeteventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeteventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeteventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
