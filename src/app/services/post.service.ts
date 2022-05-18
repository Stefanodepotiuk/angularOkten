import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {IPost} from "../interfaces";
import {urls} from "../constans";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient:HttpClient) { }

  getAll(): Observable<IPost[]> {
    return this.httpClient.get<IPost[]>(urls.posts);
  }

  getDyId(id:String): Observable<IPost> {
    return this.httpClient.get<IPost>(`${urls.posts}/${id}`);
  }
}
