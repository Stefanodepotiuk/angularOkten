import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import {IComment} from "../interfaces";
import {urls} from "../constans";

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private httpClint: HttpClient) {
  }

  getAll():Observable<IComment[]>{
    return this.httpClint.get<IComment[]>(urls.comments)
  }
}
