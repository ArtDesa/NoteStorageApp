import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { BackendService } from "../../services/backend.service";

@Component({
  selector: 'app-new-note',
  templateUrl: './new-note.component.html',
  styleUrls: ['./new-note.component.css']
})
export class NewNoteComponent implements OnInit{
  
  notes; //Stores list of notes from json db

  constructor(public route: ActivatedRoute, private router: Router, private server: BackendService) { }

  ngOnInit(){
    this.server.getNotes().subscribe((data)=>{
      this.notes = data.notes;
    });
      
  }

  addToNotes(noteForm){
    
    //Obtains the current date
    var currentDate = new Date();
    var dateMonth = currentDate.getMonth() + 1;
    var dateDay = currentDate.getDate();
    var dateYear = currentDate.getFullYear();
    
    var dateString = dateMonth + "/" + dateDay + "/" + dateYear;

    //Creates note to then pass to Backend Service method to add it to the json db
    let note = {
      title: noteForm.controls.title.value,
      body: noteForm.controls.body.value,
      dateCreated: dateString,
      favorite: noteForm.controls.favorite.value,
    }


    //Calls the Backservice addNote method and provides it the note to add to the json db
    this.server.addNote(note).subscribe(query=>{
      if(query){
        this.router.navigate(['home']);
      }
      else{
        alert('Adding Note Failed. Please try again.');
      }
    })
    
  }

  //Sends user to Home page
  goToHome() {
    this.router.navigate(['/home']);
  }


}
