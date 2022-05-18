import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {IUser} from "../interfaces";
import {urls} from "../constans";

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private httpClient:HttpClient) { }

  getAll(): Observable<IUser[]> {
    return this.httpClient.get<IUser[]>(urls.users);
  }

  getDyId(id:String): Observable<IUser> {
    return this.httpClient.get<IUser>(`${urls.users}/${id}`);
  }
}
