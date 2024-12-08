import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { BackendService } from "../../../services/backend.service";
import { NoteService } from "../../../services/note.service";
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';



@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.component.html',
  styleUrls: ['./edit-note.component.css']
})

export class EditNoteComponent implements OnInit{

  note; //Gets note from note service provided by notes component setNote() method

  notes; //List of notes
  
  yesOrNo; //Value determines which radio button is selected by default


  constructor(private fb: FormBuilder, public route: ActivatedRoute, private router: Router, private server: BackendService, private noteService: NoteService) {
    this.note = this.noteService.getNote(); 
    
    this.server.getNotes().subscribe((data)=>{
      this.notes = data.notes;
    });
  }
  
  ngOnInit(){
    //Uses the boolean value to determine which radio button is selected by default.
    if(this.note.favorite){
      this.yesOrNo = "yes";
    }else{
      this.yesOrNo = "no";
    }

  }

  /* Creates a new note from the information provided by user, deletes the current note with matching id, 
     then adds the new edited note to the json db */
  onSave(noteForm){
    
    //Obatin current date to provide it in the new note to add:
    var dateMonth = new Date().getMonth() + 1;
    var dateDay = new Date().getDate() + 1;
    var dateYear = new Date().getFullYear();
    
    var dateString = dateMonth + "/" + dateDay + "/" + dateYear;
    
    //Convert string "yes"/"no" to boolean values true or false
    var isFavorite = noteForm.controls.favorite.value
    var trueOrFalse: boolean;

    if(isFavorite == "yes"){
      trueOrFalse = true
    }else{
      trueOrFalse = false
    }
    
    //Create note with both form values and date to then add to the notes list in the json db
    let editedNote = {
      title: noteForm.controls.title.value,
      body: noteForm.controls.body.value,
      dateCreated: dateString,
      favorite: trueOrFalse,
    }

    //Delete Note using its id
    var noteID = this.note.id;
    this.server.deleteNote(this.note.id).subscribe();

    //Call Backservice addNote method to add the new edited note to the json db.
    this.server.addNote(editedNote).subscribe(query=>{
      if(query){
        this.router.navigate(['home']);
      }
      else{
        alert('Adding Note Failed. Please try again.');
      }
    })
    

  }

  //Sends user to home page
  goToHome() {
    this.router.navigate(['/home']);
  }

}
