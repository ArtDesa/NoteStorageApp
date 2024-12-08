import { Component, OnInit, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { BackendService } from "../../services/backend.service";
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit  {
  //List of notes
  notes;
  //ID for note we want to edit
  noteId;

  constructor(public route: ActivatedRoute, private router: Router, private server: BackendService, private noteService: NoteService) { }
  //private server: BackendService
  //Uses notes service to get the list of notes with getNotes()
  /*
  ngOnInit(){
    this.notes = this.noteService.getNotes();
  }
  */

  //Stores notes list from json db in noteId
  ngOnInit(){
    
    this.server.getNotes().subscribe((data)=>{
      this.notes = data;
    });

  }

  //Navigates user to Edit-Note component
  editNote(){

    //Gets note by date, sends it to Note Service, send user to edit-note component.
    //There user will edit the form with the values to submit a new note to be saved in db.json.
    //Old note without edits will be deleted, new note that was edited will be added to end of array.
    this.router.navigate(['/edit-note']);

  }

  //Sends note ID to note service to store it.
  //sendNote(note)
  sendNote(note){
    this.noteService.setNote(note)
    //this.noteService.setNoteId(noteId);
  }

  //Find the note with the id and calls Backdoor service to delete it.
  deleteNote(noteId){

    //Confimrs if note with id provided exists in notes list
    for(var i=0; i < this.notes.length ;i++){
      if(this.notes[i].id == noteId){
        //console.log("id value in notes array: " + this.notes[i].id);
        //console.log("Note id we want to delete: " + noteId);
        
        //Passes id to deleteNote method in Backdoor service
        this.server.deleteNote(this.notes[i].id).subscribe(query=>{
          if(query){
            this.router.navigate(['/home']);

          }
          else{
            alert('Registration Failed. Post was unable to complete.');
          }
        })
      }
    }
  }


  goToHome() {
    this.router.navigate(['/home']);
  }

}
