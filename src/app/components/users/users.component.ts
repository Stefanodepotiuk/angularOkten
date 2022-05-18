import {Component, OnInit} from '@angular/core';
import {IUser} from "../../interfaces";
import {UserserviceService} from "../../services";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: IUser[];

  constructor(private userserviceService: UserserviceService) {
  }

  ngOnInit(): void {
    this.userserviceService.getAll().subscribe(value => this.users = value)
  }

}
