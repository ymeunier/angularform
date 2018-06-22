import { Component } from '@angular/core';
import { UsersService } from './services/users.service';
import { User } from '../models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(public usersService: UsersService) {
    
  }

  title = 'app';
  public isHidden = false;
  

  public user = {
    name:'Yann',
    role:'admin'
  }

  public function1=(event : MouseEvent, name : string) => {
    this.user.name = "modified";
    this.isHidden=!this.isHidden;
    console.log(event);
    console.log(name);
  }

  public addUser=( name : string, role : string) => {
    this.userService.users.push(new User(name,role));

  }
  userService: any;
}