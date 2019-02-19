import { Component, OnInit, Input } from '@angular/core';
import {ResourceModelReservations} from "../../models/resource-model-reservations";
import {ServiceReservationsService} from "../../services/service-reservations.service";
import {ServiceStudiosService} from "../../services/service-studios.service";
import {ServiceEquipmentsService} from "../../services/service-equipments.service";
import {ServiceUsersService} from "../../services/service-users.service";
import {ResourceModelStudios} from "../../models/resource-model-studios";
import {ResourceModelEquipments} from "../../models/resource-model-equipments";
import {ResourceModelUsers} from "../../models/resource-model-users";
import {ServiceClassEquipmentsService} from "../../services/service-class-equipments.service";
import {ResourceModelClassEquipments} from "../../models/resource-model-class-equipments";
import { Location } from '@angular/common';

export class Reservation {
  constructor(
    public userId: number,
    public equipmentId: number,
    public studioId: number,
    public name: string,
    public description: string,
    public comment: string,
    public lendingStartAt: Date,
    public lendingEndAt: Date,
  ) {  }
}

@Component({
  selector: 'app-page-reservations-new',
  templateUrl: './page-reservations-new.component.html',
  styleUrls: ['./page-reservations-new.component.css']
})
export class PageReservationsNewComponent implements OnInit {
  reservations: ResourceModelReservations[] = [];
  users: ResourceModelUsers[];
  equipments: ResourceModelEquipments[];
  studios: ResourceModelStudios[];
  classEquipments: ResourceModelClassEquipments[];
  reservation = new Reservation(null, null, null, '', '', '', null, null);

  public selectedMoments = [new Date(), new Date()];

  constructor(
    private serviceReservationsService: ServiceReservationsService,
    private serviceUsersService: ServiceUsersService,
    private serviceEquipmentsService: ServiceEquipmentsService,
    private serviceStudiosService: ServiceStudiosService,
    private serviceClassEquipmentsService: ServiceClassEquipmentsService,
    private location: Location,
  ) { }

  ngOnInit() {
    this.serviceUsersService.getUsers()
      .subscribe(users => this.users = users);
    this.serviceEquipmentsService.getEquipments()
      .subscribe(equipments => this.equipments = equipments);
    this.serviceStudiosService.getStudios()
      .subscribe(studios => this.studios = studios);
    this.serviceClassEquipmentsService.getClassEquipments()
      .subscribe(classEquipments => this.classEquipments = classEquipments);
  }

  add(): void {
    console.log("DEBUG DEBUG DEBUG this.selectedMoments[0]: ");
    console.log(this.selectedMoments[0]);
    console.log("DEBUG DEBUG DEBUG this.selectedMoments[1]: ");
    console.log(this.selectedMoments[1]);
    this.reservation.lendingStartAt = this.selectedMoments[0];
    this.reservation.lendingEndAt = this.selectedMoments[1];
    console.log("DEBUG DEBUG DEBUG lendingStartAt: ");
    console.log(this.reservation.lendingStartAt);
    console.log("DEBUG DEBUG DEBUG lendingEndAt: ");
    console.log(this.reservation.lendingEndAt);

    // this.serviceReservationsService.addReservation(this.reservation as ResourceModelReservations)
    //   .subscribe(reservation => {
    //     this.reservations.push(reservation);
    //   });

    this.equipments.filter(equipment => equipment.reservationStatus == 1).map( equipment => {
      this.reservation.equipmentId = equipment.id;
      this.serviceReservationsService.addReservation(this.reservation as ResourceModelReservations)
        .subscribe(reservation => {
          this.reservations.push(reservation);
        });
    });
    this.goBack();
  }

  goBack(): void {
    this.location.back();
  }

}
