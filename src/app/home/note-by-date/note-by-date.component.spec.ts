import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteByDateComponent } from './note-by-date.component';

describe('NoteByDateComponent', () => {
  let component: NoteByDateComponent;
  let fixture: ComponentFixture<NoteByDateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NoteByDateComponent]
    });
    fixture = TestBed.createComponent(NoteByDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
