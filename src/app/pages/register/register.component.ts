import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {  Router } from '@angular/router';
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {

  displayError:string='';
  isLoading:boolean=false;
  registerForm: FormGroup = new FormGroup({
    name: new FormControl(null, [
      Validators.required,
      Validators.maxLength(15),
      Validators.minLength(3),
    ]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^\w{6,}$/),
    ]),
    rePassword: new FormControl(null, [
      Validators.required,
      RxwebValidators.compare({fieldName:'password' })
    ]),
    phone: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^01[0125][0-9]{8}$/),
    ]),
  });


constructor( private _authService:AuthService , private _router:Router){



}

  register(form: FormGroup) {
    console.log(form);
    this.displayError='';
    
    
    this.allControlsTouched(form);
    
    if(form.valid && !this.isLoading){
        this.isLoading=true;
     this._authService.signUp(form.value).subscribe(
      {
         next:(data)=>{

          console.log(data);
          if(data.message=='success'){
            this._router.navigate(['/login'])
          }
         },
         error:(err)=>{
          console.log(err);
          this.displayError=err.error.message;
          
          this.isLoading=false
         }

      }
     )
    }
  }

  allControlsTouched(form: FormGroup) {
    // array of value
    Object.values(form.controls).forEach((control: any) => {
      control.markAsTouched();
      if (control.controls) {
        this.allControlsTouched(control);
      }
    });
  }
}
