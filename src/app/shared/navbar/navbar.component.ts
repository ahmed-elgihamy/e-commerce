import { Component } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
isLoggedIn:boolean=false;

  constructor( private _authService:AuthService ){
     _authService.userToken.subscribe({
     next: (data)=>{

    
     if(_authService.userToken.getValue()){

      this.isLoggedIn=true;
     }else{

      this.isLoggedIn=false;
     }
      
     }})
    }





    signOut(){

      this._authService.signOut()
    }
  }

