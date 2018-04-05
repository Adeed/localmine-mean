import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

import { UserService } from '../../../Services/User.Services';
import { User } from '../../../Models/User';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  _usersArray: User[];
  user;

  constructor(private router: Router, private userSerivce: UserService) {
    userSerivce.getLoggedInName.subscribe(temp => this.changeName(temp));
  }

  private changeName(name: string): void {
    this.user = name;
  }
  getUsers(): void {
    this.userSerivce.getUsers()
      .subscribe(
      resultArray => this._usersArray = resultArray,
      error => console.log('Error :: ' + error)
      )
  }

  ngOnInit(): void {
    this.getUsers();
    this.user = this.userSerivce.getCurrentData();
  }

}
