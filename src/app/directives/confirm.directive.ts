import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appConfirm]',
  providers: [{provide: NG_VALIDATORS, useExisting: ConfirmDirective, multi:true}]
})
export class ConfirmDirective implements Validator {

  constructor() { }

  validate(control: AbstractControl): ValidationErrors {
    
    let error;
    
    if(control.value.password != control.value.confirmPassword){
      error = {"matchingError": true}
    }
    
    return error;  

  }

}
