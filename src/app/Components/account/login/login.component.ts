import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { UserService } from '../../../Services/User.Services';
import { User } from '../../../Models/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  _usersArray: User[];
  loggedUser: User[] = [];

  constructor(private userSerivce: UserService, private router: Router) { }

  getUsers(): void {
    this.userSerivce.getUsers()
      .subscribe(
      resultArray => this._usersArray = resultArray,
      error => console.log('Error :: ' + error)
      )
  }

  ngOnInit() {
    console.log(this.getUsers())
  }

  somefunction(user) {
    this.userSerivce.setData(user);
    this.router.navigateByUrl('/Dashboard');
  }

  loginSubmit(value) {
    this._usersArray.forEach(user => {
      if (user.email === value.email) {
        if (user.pass === value.pass) {

          this.somefunction(user);

        } else { console.log('Password doesnt match') }
      } else { console.log('Email address not found') }
    });
  }

  loggedIn() {

  }

}
