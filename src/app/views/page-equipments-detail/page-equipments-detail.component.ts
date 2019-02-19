import {Component, OnInit, Input} from '@angular/core';
import {ResourceModelEquipments} from "../../models/resource-model-equipments";
import {ActivatedRoute} from "@angular/router";
import {ServiceEquipmentsService} from "../../services/service-equipments.service";
import { Location } from '@angular/common';
import {ServiceUsersService} from "../../services/service-users.service";
import {ServiceClassEquipmentsService} from "../../services/service-class-equipments.service";
import {ResourceModelUsers} from "../../models/resource-model-users";
import {ResourceModelClassEquipments} from "../../models/resource-model-class-equipments";

@Component({
  selector: 'app-page-equipments-detail',
  templateUrl: './page-equipments-detail.component.html',
  styleUrls: ['./page-equipments-detail.component.css']
})

export class PageEquipmentsDetailComponent implements OnInit {
  @Input() equipment: ResourceModelEquipments;
  users: ResourceModelUsers[];
  classEquipments: ResourceModelClassEquipments[];

  constructor(
    private route: ActivatedRoute,
    private serviceEquipmentsService: ServiceEquipmentsService,
    private serviceUsersService: ServiceUsersService,
    private serviceClassEquipmentsService: ServiceClassEquipmentsService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getEquipment();
    this.serviceUsersService.getUsers()
      .subscribe(users => this.users = users);
    this.serviceClassEquipmentsService.getClassEquipments()
      .subscribe(classEquipments => this.classEquipments = classEquipments);
  }

  getEquipment(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.serviceEquipmentsService.getEquipment(id)
      .subscribe(equipment => this.equipment = equipment);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.serviceEquipmentsService.updateEquipment(this.equipment)
      .subscribe(() => this.goBack());
  }
}
