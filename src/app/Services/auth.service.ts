import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
userToken:BehaviorSubject <string> = new BehaviorSubject('')
  constructor(private _httpClient:HttpClient ,private _router:Router) { 

    if(localStorage.getItem("userToken")){

      this.userToken.next( JSON.stringify(localStorage.getItem("userToken")))
    }
  }

  setUserToken(){
    let token = JSON.stringify(localStorage.getItem("userToken"))
     this.userToken.next(token)
  }

signUp(info:User): Observable<any>{

  return this._httpClient.post(`https://ecommerce.routemisr.com/api/v1/auth/signup ` ,info)
}
signin(info:User): Observable<any>{

  return this._httpClient.post(`https://ecommerce.routemisr.com/api/v1/auth/signin ` ,info)
}

signOut(){

  localStorage.removeItem("userToken");
  this.userToken.next("")
 this._router.navigate(["/login"])

}

}
