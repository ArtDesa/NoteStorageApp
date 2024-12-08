import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  private notes = []
  private date;
  private dateString;
  private note;

  constructor() { }

  //Returns notes list stored in Note service using sendToNotes(info) method.
  getNotes(){
    return this.notes;
  }

  sendToNotes(info){
    //add to the end of the notes array in the db.json
    this.notes.push(info);
  }

  //Stores date provided in parameters
  setDate(info: Date){
    this.date = info;
  }

  //Returns date previously stored in parameter
  getDate(){
    return this.date;
  }

  //Holds date in string with format mm/dd/yyyy
  setDateString(date){
    
    var dateMonth = date.getMonth();
    var dateDay = date.getDate();
    var dateYear = date.getYear();
    
    this.dateString = dateMonth + "/" + dateDay + "/" + dateYear;
    
  }

  //Returns date in string with format mm/dd/yyyy
  getDateString(){
    return this.dateString;
  }

  //Holds note in Note service
  setNote(note){
    this.note = note;
  }

  //Returns the note that is stored in Note service
  getNote(){
    return this.note;
  }


}
