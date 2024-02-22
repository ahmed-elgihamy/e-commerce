import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  displayError:string='';
  isLoading:boolean=false;
  loginForm: FormGroup = new FormGroup({

    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^\w{6,}$/),
    ]),

 
  });


constructor( private _authService:AuthService , private _router:Router){



}

  login(form: FormGroup) {
    console.log(form);
    this.allControlsTouched(form);
      this.displayError=''
    if(form.valid && !this.isLoading){
    this.isLoading=true;
     this._authService.signin(form.value).subscribe(
      {
         next:(data)=>{

          console.log(data);
          if(data.message=='success'){


            localStorage.setItem("userToken",data.token)
            this._authService.setUserToken()
            this._router.navigate(['/home'])
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
