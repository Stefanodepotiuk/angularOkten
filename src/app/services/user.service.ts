import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {IUser} from "../interfaces";
import {urls} from "../constans";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClint: HttpClient) {
  }

  getAll():Observable<IUser[]>{
    return this.httpClint.get<IUser[]>(urls.users)
  }
}
