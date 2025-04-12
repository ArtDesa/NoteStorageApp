import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http'
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
  bootstrap: [AppComponent], 
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ], 
  providers: [provideHttpClient(withInterceptorsFromDi())] 
})
        
export class AppModule { }

/*
Has now been updated to Angular 18 from Angular 16 (original). 
1 notable change is HttpClientModule being deprecated and replaced with the provideHttpClient() function.
For more details check bottom of these notes.

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


  Explaining change from HttpClientModule to provideHttpClient() function:

The change from `HttpClientModule` to `providers: [provideHttpClient(withInterceptorsFromDi())]` in Angular 18 reflects a shift towards a more streamlined and flexible approach to configuring the `HttpClient`. Here's a breakdown of the change:

### Why This Change Occurred:
1. **Deprecation of `HttpClientModule`**:
   - In Angular 18, `HttpClientModule` was deprecated because it essentially duplicated the functionality of the `provideHttpClient()` function.
   - The Angular team aimed to simplify the setup for `HttpClient` by encouraging developers to use `provideHttpClient()` directly, which aligns better with Angular's move towards standalone components and functional configurations.

2. **Improved Configuration**:
   - The `provideHttpClient()` function allows developers to configure `HttpClient` with additional features, such as interceptors, fetch API support, and JSONP support, in a more modular and declarative way.
   - This approach reduces the likelihood of developers accidentally including both `HttpClientModule` and `provideHttpClient()` in their projects, which was a common issue.

### How It Replicates `HttpClientModule` Functionality:
- **Dependency Injection**:
  - `HttpClientModule` provided the `HttpClient` service via Angular's dependency injection system. The `provideHttpClient()` function does the same, ensuring that `HttpClient` can be injected into components, services, and other classes.

- **Interceptors**:
  - The `withInterceptorsFromDi()` option in `provideHttpClient()` replicates the interceptor functionality previously supported by `HttpClientModule`. It allows you to include class-based interceptors in the `HttpClient` configuration.

- **Standalone Components**:
  - For standalone components, `provideHttpClient()` can be added directly to the `providers` array during application bootstrap, making it more versatile than `HttpClientModule`.

### Example:
Here’s how the new setup looks:
```typescript
bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(withInterceptorsFromDi()),
  ],
});
```
This change simplifies the configuration process and aligns with Angular's evolving architecture. Let me know if you'd like help adapting your project further!
*/