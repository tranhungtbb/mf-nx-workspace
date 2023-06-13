import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
    login$ = new BehaviorSubject({});

    login(username : string, password : string){
        this.login$.next({ username, password });
    }
}
