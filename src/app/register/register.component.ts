import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackendService } from '../services/backend.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router, private server: BackendService) {}

  ngOnInit(): void {
  }

  onSubmit(register){
    
  
    //Gets values from Register Form
    let user = {
      username: register.controls.username.value,
      password: register.controls.password.value,
    }
    
    //Sends values to Backendservice. 
    this.server.register(user).subscribe(query=>{
      if(query){
        this.router.navigate(['login']);
      }
      else{
        alert('Registration Failed. Post was unable to complete.');
      }
    })
    

  }

  goToLogin(){
    this.router.navigate(['/login']);
  }

}
