import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { BackendService } from "../../services/backend.service";
import { NoteService } from '../../services/note.service';

@Component({
  selector: 'app-note-by-date',
  templateUrl: './note-by-date.component.html',
  styleUrls: ['./note-by-date.component.css']
})
export class NoteByDateComponent implements OnInit  {

  allNotes; //Stores list of all notes from json db
  date; //Holds date provided by Note service getDate() method
  dateString; //Holds string with the date in format mm/dd/yyyy

  constructor(public route: ActivatedRoute, private router: Router, private server: BackendService, private noteServer: NoteService) { }

  //Gets all notes from the json db.
  ngOnInit(){
    this.server.getNotes().subscribe((data)=>{
      this.allNotes = data;
    });
    

    this.date = this.noteServer.getDate(); //Gets the date stored in Note service and assigns it to the date var.

    //Creates string of the date stored in Note service in the format mm/dd/yyyy
    var dateMonth = new Date(this.noteServer.getDate()).getMonth() + 1;
    var dateDay = new Date(this.noteServer.getDate()).getDate() + 1;
    var dateYear = new Date(this.noteServer.getDate()).getFullYear();
    
    this.dateString = dateMonth + "/" + dateDay + "/" + dateYear;

  }

  //Sends use back to Home page
  goToHome() {
    this.router.navigate(['/home']);
  }





  






}
