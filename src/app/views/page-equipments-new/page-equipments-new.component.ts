import { Component, OnInit } from '@angular/core';
import {ResourceModelEquipments} from "../../models/resource-model-equipments";
import {ServiceEquipmentsService} from "../../services/service-equipments.service";
import {ServiceClassEquipmentsService} from "../../services/service-class-equipments.service";
import {ResourceModelClassEquipments} from "../../models/resource-model-class-equipments";

@Component({
  selector: 'app-page-equipments-new',
  templateUrl: './page-equipments-new.component.html',
  styleUrls: ['./page-equipments-new.component.css']
})
export class PageEquipmentsNewComponent implements OnInit {
  equipments: ResourceModelEquipments[] = [];
  classEquipments: ResourceModelClassEquipments[];
  equipment = new ResourceModelEquipments();

  constructor(
    private serviceEquipmentsService: ServiceEquipmentsService,
    private serviceClassEquipmentsService: ServiceClassEquipmentsService
  ) { }

  ngOnInit() {
    this.serviceClassEquipmentsService.getClassEquipments()
      .subscribe(classEquipments => this.classEquipments = classEquipments);
  }

  add(): void {
    this.serviceEquipmentsService.addEquipment(this.equipment as ResourceModelEquipments)
      .subscribe(equipment => {
        this.equipments.push(equipment);
      });
  }

}
