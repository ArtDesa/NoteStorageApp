import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { BackendService } from "../services/backend.service";
import { NoteService } from '../services/note.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //Array of Notes to pull from the db.json
  notes;

  //Stores date value provided by user to then search for a note in db.json
  date;

  //Array with last 3 notes
  lastThreeNotes;

  constructor(public route: ActivatedRoute, private router: Router, private server: BackendService, private noteServer: NoteService) { }

  //getNotes() - Will retrieve all notes in the db server.
  ngOnInit(){
    this.server.getNotes().subscribe((data)=>{
      this.notes = data;
    });
    
    this.server.getNotes().subscribe((data)=>{
      this.lastThreeNotes = data.slice(-3);
    });

  }

  //Component that will display all notes
  goToNotes(){
    this.router.navigate(['/notes']);
  }

  //Component that will display page to create and add a new note
  goToNewNote(){
    this.router.navigate(['/newnote']);
  }

  //Component that will display a single note. (from there options to edit and delete)
  goToNote(){

    this.noteServer.setDate(this.date);
  
    this.router.navigate(['/note-by-date']);
  }
  
  getNoteDate(){
    //for loop that searches the notes array to find the note that correcponds to the date provided.
  }

}
