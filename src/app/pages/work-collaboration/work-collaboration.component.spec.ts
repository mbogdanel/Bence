import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkCollaborationComponent } from './work-collaboration.component';

describe('WorkCollaborationComponent', () => {
  let component: WorkCollaborationComponent;
  let fixture: ComponentFixture<WorkCollaborationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkCollaborationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkCollaborationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
