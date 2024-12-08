import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { BackendService } from "../../../services/backend.service";
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  //note provided from the ngFor loop in notes.html
  @Input() note;
  //Provides parent notes component with the note ID
  @Output() noteEvent = new EventEmitter();
  //Provides parent notes component with the note ID
  @Output() noteDeleteEvent = new EventEmitter();
  //Holds the Note ID
  noteID;

  ngOnInit(): void {
    this.noteID = this.note.id;
  }

  constructor(public route: ActivatedRoute, private router: Router, private server: BackendService, private noteService: NoteService) { }

  //Sends note ID to note service to store it. //Sends Note id to parent note component
  editNote(){
    
    this.noteEvent.emit(this.note);

    //Gets note by date, sends it to Note Service, send user to edit-note component.
    //There user will edit the form with the values to submit a new note to be saved in db.json.
    //Old note without edits will be deleted, new note that was edited will be added to end of the array.
    this.router.navigate(['edit-note']);
    
  }

  //Sends Note id to parent notes component and navigates user to notes component
  deleteNote(){
    this.noteDeleteEvent.emit(this.noteID);
    this.router.navigate(['notes']);
  }


}
