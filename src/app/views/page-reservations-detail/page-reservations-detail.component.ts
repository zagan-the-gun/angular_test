import {Component, OnInit, Input} from '@angular/core';
import {ServiceReservationsService} from "../../services/service-reservations.service";
import {ActivatedRoute} from "@angular/router";
import {ResourceModelReservations} from "../../models/resource-model-reservations";
import { Location } from '@angular/common';
import {ServiceUsersService} from "../../services/service-users.service";
import {ResourceModelUsers} from "../../models/resource-model-users";
import {ServiceEquipmentsService} from "../../services/service-equipments.service";
import {ResourceModelEquipments} from "../../models/resource-model-equipments";
import {ServiceStudiosService} from "../../services/service-studios.service";
import {ResourceModelStudios} from "../../models/resource-model-studios";
import {ResourceModelClassEquipments} from "../../models/resource-model-class-equipments";
import {ServiceClassEquipmentsService} from "../../services/service-class-equipments.service";

@Component({
  selector: 'app-page-reservations-detail',
  templateUrl: './page-reservations-detail.component.html',
  styleUrls: ['./page-reservations-detail.component.css']
})
export class PageReservationsDetailComponent implements OnInit {
  @Input() reservation: ResourceModelReservations;
  users: ResourceModelUsers[];
  equipments: ResourceModelEquipments[];
  studios: ResourceModelStudios[];
  classEquipments: ResourceModelClassEquipments[];

  constructor(
    private route: ActivatedRoute,
    private serviceReservationsService: ServiceReservationsService,
    private location: Location,
    private serviceUsersService: ServiceUsersService,
    private serviceEquipmentsService: ServiceEquipmentsService,
    private serviceStudiosService: ServiceStudiosService,
    private serviceClassEquipmentsService: ServiceClassEquipmentsService
  ) {}

  ngOnInit(): void {
    this.getReservation();
    this.serviceUsersService.getUsers()
      .subscribe(users => this.users = users);
    this.serviceEquipmentsService.getEquipments()
      .subscribe(equipments => this.equipments = equipments);
    this.serviceStudiosService.getStudios()
      .subscribe(studios => this.studios = studios);
    this.serviceClassEquipmentsService.getClassEquipments()
      .subscribe(classEquipments => this.classEquipments = classEquipments);
  }

  getReservation(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.serviceReservationsService.getReservation(id)
      .subscribe(reservation => this.reservation = reservation);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.serviceReservationsService.updateReservation(this.reservation)
      .subscribe(() => this.goBack());
  }
}
