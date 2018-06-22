import { Injectable } from '@angular/core';
import { User } from '../../models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  public users = new Array<User>();
  
  constructor() { }
}
