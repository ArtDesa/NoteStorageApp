import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private http: HttpClient) { }

  //Gets the list of notes
  getNotes(): Observable<any>{
    return this.http.get('http://localhost:3000/notes')
  }
  

  //Adds a new note to notes
  addNote(note): Observable<any>{
    return this.http.post('http://localhost:3000/notes',note)
  }
  
  //Deletes Element with given id value
  deleteNote(id): Observable<any>{
    return this.http.delete('http://localhost:3000/notes/' + id)
  }
  

  //Gets the list of users
  getUsers(): Observable<any>{
    return this.http.get('http://localhost:3000/users')
  }
  
  //This adds a new user to db.json
  register(user): Observable<any>{
    return this.http.post('http://localhost:3000/users',user).pipe(
      catchError(this.handleErrors)
    )
  }

  
  login(): Observable<any>{
    return this.http.get('http://localhost:3000/users');
  }
  

  
  handleErrors(error){
    return throwError(error)
  }
  
}
