import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ConfirmDirective } from './directives/confirm.directive';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NotesComponent } from './home/notes/notes.component';
import { NoteByDateComponent } from './home/note-by-date/note-by-date.component';
import { NewNoteComponent } from './home/new-note/new-note.component';
import { EditNoteComponent } from './home/notes/edit-note/edit-note.component';
import { NoteComponent } from './home/notes/note/note.component';


const routes: Routes = [
  {path:'', redirectTo:'login', pathMatch:'full'},
  {path:'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path:'home', component: HomeComponent},
  {path:'newnote', component: NewNoteComponent},
  {path:'notes', component: NotesComponent, children:[
    {path:'note', component: NoteComponent}
  ]},
  {path:'edit-note', component: EditNoteComponent},
  {path:'note-by-date', component: NoteByDateComponent},
  {path:'**', component: PageNotFoundComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    ConfirmDirective,
    PageNotFoundComponent,
    NotesComponent,
    NoteByDateComponent,
    NewNoteComponent,
    EditNoteComponent,
    NoteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
/*
NOTE: DO NOT FIX VULNERABILITIES WITH THE npm audit commmand, THIS WILL BREAK THE PROJECT
YOU WILL NEED TO DELETE THE FOLDER AND GIT CLONE IT AGAIN FROM GITHUB

Before running the application, you need to start the JSON server (using db.json) with: json-server --watch db.json
This will launch the backend at a default URL, typically http://localhost:3000.
*Note: This will require the terminal used to run the command (the terminal will be busy running the server to take any other commands)
You must open another terminal to run the ng serve to start the Application.

ng command - Use to run application from the VS Code terminal. 
Run project from terminal with: ng serve
Stop the app when it is running with (in the terminal): Ctrl+C

This starts the Angular development server and compiles your app. By default, it runs on http://localhost:4200.
Open your browser and navigate to http://localhost:4200 to view your Angular app.

ng command is part of the Angular CLI (Command Line Interface).

Make sure the Angular CLI (Command Line Interface) is installed with: ng -version (if it is present)
If not installed, install it with: npm install -g @angular/cli

(npm commands are part of Node.js and stand for Node Package Manager. 
npm is used to install, manage, and update the dependencies (libraries, tools, etc.) required by your Angular project.))

To Create an Angular project use: ng new <my-angular-app>
*/