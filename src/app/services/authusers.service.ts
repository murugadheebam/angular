import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SERVER_URL } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthusersService {

  constructor(private httpClient: HttpClient) 
  { 

  }
  public authuserlogin(formdata): Observable<any>{
    return this.httpClient.post(SERVER_URL+'authusers/authuserlogin',formdata);
  }


}
