import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BackendService } from '../services/backend.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder, private router:Router, private server: BackendService) { }

  verified = false;

  ngOnInit(): void {
  }

  loginForm = this.fb.group({
    username:['',[Validators.required, Validators.minLength(6)]],
    password:['', Validators.required],
    confirmPassword:['', Validators.required]
  },{
    validators: this.confirmValidator() //This is applied to the form itself
  })
  
  usernameError = this.loginForm.get('username').invalid
  passwordError = this.loginForm.get('password').invalid

  confirmValidator(): ValidatorFn{
    return(control:AbstractControl): ValidationErrors =>{
      
      let error;

      //if the values don't match we return an error is true.
      if(control.value.password != control.value.confirmPassword){
        error = {"matchingError": true}
      }

      //we retun error, our map of errors. If it is empty, 
      //the list of validators(validators: this.confirmValidator()) will be empty as well, 
      //and show as empty when we are trying to check vs the value later. 
      return error;
    }
  }

  login(){
    let body = {
      username: this.username.value,
      password: this.password.value
    }

    var verified;

    this.server.login().subscribe((data)=>{
      for(let i=0; i<data.length; i++){
        console.log(body.password);
        console.log(data[i].password);
        console.log(body.password === data[i].password)
        console.log(body.username === data[i].username && body.password === data[i].password)
        
        if(body.username === data[i].username && body.password === data[i].password){
          verified = true;
        }
        
      }
      
      if(verified){
        this.router.navigate(['/home']);
      }
      else{
        alert("User does not exist or password does not match!")
      }
   
    });

  }

  
  get username(){
    return this.loginForm.get('username');
  }
  
  get password(){
    return this.loginForm.get('password');
  }
  

  goToRegister(){
    this.router.navigate(['/register']);
  }



}
