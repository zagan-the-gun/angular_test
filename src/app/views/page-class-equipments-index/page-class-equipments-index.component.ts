import { Component, OnInit } from '@angular/core';
import {ResourceModelClassEquipments} from "../../models/resource-model-class-equipments";
import {ServiceClassEquipmentsService} from "../../services/service-class-equipments.service";

@Component({
  selector: 'app-page-class-equipments-index',
  templateUrl: './page-class-equipments-index.component.html',
  styleUrls: ['./page-class-equipments-index.component.css']
})
export class PageClassEquipmentsIndexComponent implements OnInit {
  classEquipments: ResourceModelClassEquipments[];

  constructor(private serviceClassEquipmentsService: ServiceClassEquipmentsService) { }

  ngOnInit() {
    this.getClassEquipments();
  }

  getClassEquipments(): void {
    this.serviceClassEquipmentsService.getClassEquipments()
      .subscribe(classEquipments => this.classEquipments = classEquipments);
  }

  delete(classEquipment: ResourceModelClassEquipments): void {
    this.classEquipments = this.classEquipments.filter(h => h !== classEquipment);
    this.serviceClassEquipmentsService.deleteClassEquipment(classEquipment).subscribe();
  }
}
