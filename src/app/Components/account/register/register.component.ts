import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { UserService } from '../../../Services/User.Services';
import { User } from '../../../Models/User';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    user;
    total;
    _usersArray: User[];

    constructor(private http: HttpClient, private userSerivce: UserService) { }


    ngOnInit() {
        this.getUsers();
    }

    getUsers(): void {
        this.userSerivce.getUsers()
            .subscribe(
            resultArray => this._usersArray = resultArray,
            error => console.log('Error :: ' + error)
            )
    }

    regUser(value) {
        this.user = {
            id: this.total + 1,
            fname: value.fname,
            lname: value.lname,
            email: value.email,
            pass: value.pass,
            Date: 22,
            mine_pwr: 150,
            accnt_blnce: 0,
            draw_amnt: 0
        };
        const headers = new HttpHeaders()
            .set('Authorization', 'my-auth-token')
            .set('Content-Type', 'application/json');

        this.http.post('http://127.0.0.1:3000/api/add-user', JSON.stringify(this.user), {
            headers: headers
        })
            .subscribe(data => {
                console.log(data);
            });
    }
}
