import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { UserService } from './User.Services';
import { User } from 'app/Models/User';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router, private userService: UserService) {
    }

    canActivate() {

        if (this.userService.getCurrentData()) {
            return true;
        }

        // not logged in so redirect to login page
        this.router.navigate(['/Login']);
        return false;
    }

    canDeactivate() {
        if (this.userService.getCurrentData()) {
            return true;
        }

        // not logged in so redirect to login page
        this.router.navigate(['/Login']);
        return false;
      }
}
