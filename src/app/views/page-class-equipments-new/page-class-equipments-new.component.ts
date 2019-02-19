import { Component, OnInit } from '@angular/core';
import {ResourceModelClassEquipments} from "../../models/resource-model-class-equipments";
import {ServiceClassEquipmentsService} from "../../services/service-class-equipments.service";

@Component({
  selector: 'app-page-class-equipments-new',
  templateUrl: './page-class-equipments-new.component.html',
  styleUrls: ['./page-class-equipments-new.component.css']
})
export class PageClassEquipmentsNewComponent implements OnInit {
  classEquipments: ResourceModelClassEquipments[] = [];
  classEquipment = new ResourceModelClassEquipments();

  constructor(private serviceClassEquipmentsService: ServiceClassEquipmentsService) { }

  ngOnInit() {
  }

  add(): void {
    this.serviceClassEquipmentsService.addClassEquipment(this.classEquipment as ResourceModelClassEquipments)
      .subscribe(classEquipment => {
        this.classEquipments.push(classEquipment);
      });
  }
}
