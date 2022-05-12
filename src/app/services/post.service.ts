import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {IPost} from "../interfaces";
import {urls} from "../constans";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClint: HttpClient) {
  }

  getAll():Observable<IPost[]>{
    return this.httpClint.get<IPost[]>(urls.posts)
  }
}
