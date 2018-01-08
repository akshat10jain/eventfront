import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageeventComponent } from './manageevent.component';

describe('ManageeventComponent', () => {
  let component: ManageeventComponent;
  let fixture: ComponentFixture<ManageeventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageeventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageeventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
