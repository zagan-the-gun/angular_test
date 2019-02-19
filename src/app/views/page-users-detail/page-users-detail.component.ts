import {Component, OnInit, Input} from '@angular/core';
import {ResourceModelUsers} from "../../models/resource-model-users";
import {ServiceUsersService} from "../../services/service-users.service";
import {ActivatedRoute} from "@angular/router";
import { Location } from '@angular/common';

@Component({
  selector: 'app-page-users-detail',
  templateUrl: './page-users-detail.component.html',
  styleUrls: ['./page-users-detail.component.css']
})
export class PageUsersDetailComponent implements OnInit {
  @Input() user: ResourceModelUsers;
  users: ResourceModelUsers[];

  constructor(
    private route: ActivatedRoute,
    private serviceUsersService: ServiceUsersService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getUser();
    this.serviceUsersService.getUsers()
      .subscribe(users => this.users = users);
  }

  getUser(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.serviceUsersService.getUser(id)
      .subscribe(user => this.user = user);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.serviceUsersService.updateUser(this.user)
      .subscribe(() => this.goBack());
  }
}
