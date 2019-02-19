import { Component, OnInit } from '@angular/core';
import {ServiceEquipmentsService} from "../../services/service-equipments.service";
import {ResourceModelEquipments} from "../../models/resource-model-equipments";

@Component({
  selector: 'app-page-equipments-index',
  templateUrl: './page-equipments-index.component.html',
  styleUrls: ['./page-equipments-index.component.css']
})
export class PageEquipmentsIndexComponent implements OnInit {
  equipments: ResourceModelEquipments[];

  constructor(private serviceEquipmentsService: ServiceEquipmentsService) { }

  ngOnInit() {
    this.getEquipments();
  }

  getEquipments(): void {
    this.serviceEquipmentsService.getEquipments()
      .subscribe(equipments => this.equipments = equipments);
  }

  delete(equipment: ResourceModelEquipments): void {
    this.equipments = this.equipments.filter(h => h !== equipment);
    this.serviceEquipmentsService.deleteEquipment(equipment).subscribe();
  }
}
