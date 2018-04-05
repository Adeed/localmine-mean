import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Router } from '@angular/router';
import { UserService } from '../../Services/User.Services';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.css'],
  animations: [
    trigger('slideInOut', [
      state('in', style({
        transform: 'translate3d(0, 0, 0)'
      })),
      state('out', style({
        transform: 'translate3d(100%, 0, 0)'
      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ]),
  ]
})
export class TopnavComponent implements OnInit {

  data;
  loggedin;
  menuState = 'out';
  constructor(private router: Router, private userSerivce: UserService) {
    userSerivce.getLoggedInName.subscribe(temp => this.changeName(temp));
  }

  private changeName(name: string): void {
    this.loggedin = name;
  }

  logout() {
    this.userSerivce.clearData();
    this.loggedin = false;
  }

  toggleMenu() {
    this.menuState = this.menuState === 'out' ? 'in' : 'out';
  }

  ngOnInit() {
    this.data = this.userSerivce.getCurrentData();
    if (this.data) {
      return this.loggedin = true
    } else { return this.loggedin = false }
  }

}
