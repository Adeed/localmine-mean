import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../../Services/User.Services';
import { PostService } from '../../Services/Post.Service';
import { User } from '../../Models/User';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  _usersArray: User[];
  data = this.userSerivce.getCurrentData();

  // instantiate posts to an empty array
  posts: any = [];

  constructor(private postsService: PostService, private router: Router, private userSerivce: UserService) {

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
      // Retrieve posts from the API
    this.postsService.getAllPosts().subscribe(posts => {
      this.posts = posts;
      });
  }
}
