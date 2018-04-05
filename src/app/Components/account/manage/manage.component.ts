import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

import { UserService } from '../../../Services/User.Services';
import { User } from '../../../Models/User';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {

  _usersArray: User[];
  data = this.userSerivce.getCurrentData();

  constructor(private router: Router, private userSerivce: UserService) {

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
  }

}
