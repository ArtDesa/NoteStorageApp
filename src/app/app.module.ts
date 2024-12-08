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
