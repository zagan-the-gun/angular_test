import { Component, OnInit } from '@angular/core';
import {ServiceStudiosService} from "../../services/service-studios.service";
import {ResourceModelStudios} from "../../models/resource-model-studios";

@Component({
  selector: 'app-page-studios-new',
  templateUrl: './page-studios-new.component.html',
  styleUrls: ['./page-studios-new.component.css']
})
export class PageStudiosNewComponent implements OnInit {
  studios: ResourceModelStudios[] = [];
  studio = new ResourceModelStudios();

  constructor(private serviceStudiosService: ServiceStudiosService) { }

  ngOnInit() {
  }

  add(): void {
    this.serviceStudiosService.addStudio(this.studio as ResourceModelStudios)
      .subscribe(studio => {
        this.studios.push(studio);
      });
  }
}
