import { Component, OnInit, Input } from '@angular/core';
import {ResourceModelStudios} from "../../models/resource-model-studios";
import {ServiceStudiosService} from "../../services/service-studios.service";
import {ActivatedRoute} from "@angular/router";
import { Location } from '@angular/common';
import {ServiceUsersService} from "../../services/service-users.service";
import {ResourceModelUsers} from "../../models/resource-model-users";

@Component({
  selector: 'app-page-studios-detail',
  templateUrl: './page-studios-detail.component.html',
  styleUrls: ['./page-studios-detail.component.css']
})
export class PageStudiosDetailComponent implements OnInit {
  @Input() studio: ResourceModelStudios;
  users: ResourceModelUsers[];

  constructor(
    private route: ActivatedRoute,
    private serviceStudiosService: ServiceStudiosService,
    private serviceUsersService: ServiceUsersService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getStudio();
    this.serviceUsersService.getUsers()
      .subscribe(users => this.users = users);
  }

  getStudio(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.serviceStudiosService.getStudio(id)
      .subscribe(studio => this.studio = studio);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.serviceStudiosService.updateStudio(this.studio)
      .subscribe(() => this.goBack());
  }
}
