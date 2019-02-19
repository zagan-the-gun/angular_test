import { Component, OnInit } from '@angular/core';
import {ServiceUsersService} from "../../services/service-users.service";
import {ResourceModelUsers} from "../../models/resource-model-users";

@Component({
  selector: 'app-page-users-new',
  templateUrl: './page-users-new.component.html',
  styleUrls: ['./page-users-new.component.css']
})
export class PageUsersNewComponent implements OnInit {
  users: ResourceModelUsers[] = [];
  user = new ResourceModelUsers();

  constructor(private serviceUsersService: ServiceUsersService) {
  }

  ngOnInit() {
  }

  // add(name: string): void {
  // name = name.trim();
  // if (!name) { return; }
  // this.serviceUsersService.addUser({ name } as ResourceModelUsers)
  //   .subscribe(user => {
  //     console.log("DEBUG DEBUG DEBUG add user:");
  //     console.log(user);
  //     this.users.push(user);
  //   });
  // }

  add(): void {
    this.serviceUsersService.addUser(this.user as ResourceModelUsers)
      .subscribe(user => {
        this.users.push(user);
      });
  }
}
