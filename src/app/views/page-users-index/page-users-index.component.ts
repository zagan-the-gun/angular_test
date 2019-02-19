import { Component, OnInit } from '@angular/core';
import {ResourceModelUsers} from '../../models/resource-model-users';
import {ServiceUsersService} from "../../services/service-users.service";

@Component({
  selector: 'app-page-users-index',
  templateUrl: './page-users-index.component.html',
  styleUrls: ['./page-users-index.component.css'],
  template: `<ng2-smart-table [settings]="settings" [source]="users" (deleteConfirm)="delete($event)"></ng2-smart-table>`
})
export class PageUsersIndexComponent implements OnInit {
  // users: ResourceModelUsers[];
  users: ResourceModelUsers[] = [];
  settings = {
    columns: {
      id: {
        title: 'ID'
      },
      name: {
        title: 'Full Name'
      },
      kana: {
        title: 'Kana'
      },
      email: {
        title: 'Email'
      }
    },
    actions: {
      edit: false
    }

  };
  constructor(private serviceUsersService: ServiceUsersService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(): void {
    this.serviceUsersService.getUsers()
      .subscribe(users => this.users = users);
  }

  delete(user: ResourceModelUsers): void {
    console.log("DEBUG DEBUG DEBUG delete: ");
    console.log(user);
    this.users = this.users.filter(h => h !== user);
    this.serviceUsersService.deleteUser(user).subscribe();
  }
}
