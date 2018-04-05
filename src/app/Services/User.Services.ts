import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/Rx';
import { Component, Output, EventEmitter } from '@angular/core';

import { User } from '../Models/User';

@Injectable()
export class UserService {

    private _postsURL = '../../assets/api/users.json';
    private data;

    @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();

    constructor(private http: Http) {
    }

    setData(data) {
        this.data = data;
    }

    getCurrentData() {
        const temp = this.data;
        this.getLoggedInName.emit(temp);
        return temp;
    }

    clearData() {
        this.data = undefined;
    }

    getUsers(): Observable<User[]> {
        return this.http
            .get(this._postsURL)
            .map(res => <User[]>res.json().users)
            .do(users => users)
            .catch(this.handleError);
    }

    addUsers(user) {
        this.http
            .post('/api/add', user)
            // See below - subscribe() is still necessary when using post().
            .subscribe();
    }

    private handleError(error: Response) {
        return Observable.throw(error.statusText);
    }
}
