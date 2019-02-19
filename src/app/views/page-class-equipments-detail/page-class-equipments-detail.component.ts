import {Component, OnInit, Input} from '@angular/core';
import {ServiceClassEquipmentsService} from "../../services/service-class-equipments.service";
import {ResourceModelClassEquipments} from "../../models/resource-model-class-equipments";
import {ActivatedRoute} from "@angular/router";
import { Location } from '@angular/common';
import {ServiceUsersService} from "../../services/service-users.service";
import {ResourceModelUsers} from "../../models/resource-model-users";

@Component({
  selector: 'app-page-class-equipments-detail',
  templateUrl: './page-class-equipments-detail.component.html',
  styleUrls: ['./page-class-equipments-detail.component.css']
})
export class PageClassEquipmentsDetailComponent implements OnInit {
  @Input() classEquipment: ResourceModelClassEquipments;
  users: ResourceModelUsers[];

  constructor(
    private route: ActivatedRoute,
    private serviceClassEquipmentsService: ServiceClassEquipmentsService,
    private serviceUsersService: ServiceUsersService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getClassEquipment();
    this.serviceUsersService.getUsers()
      .subscribe(users => this.users = users);
  }

  getClassEquipment(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.serviceClassEquipmentsService.getClassEquipment(id)
      .subscribe(classEquipment => this.classEquipment = classEquipment);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.serviceClassEquipmentsService.updateClassEquipment(this.classEquipment)
      .subscribe(() => this.goBack());
  }
}
