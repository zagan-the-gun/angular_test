import { Component, OnInit } from '@angular/core';
import {ResourceModelStudios} from "../../models/resource-model-studios";
import {ServiceStudiosService} from "../../services/service-studios.service";

@Component({
  selector: 'app-page-studios-index',
  templateUrl: './page-studios-index.component.html',
  styleUrls: ['./page-studios-index.component.css']
})
export class PageStudiosIndexComponent implements OnInit {
  studios: ResourceModelStudios[];

  constructor(private serviceStudiosService: ServiceStudiosService) { }

  ngOnInit() {
    this.getStudios();
  }

  getStudios(): void {
    this.serviceStudiosService.getStudios()
      .subscribe(studios => this.studios = studios);
  }

  delete(studio: ResourceModelStudios): void {
    this.studios = this.studios.filter(h => h !== studio);
    this.serviceStudiosService.deleteStudio(studio).subscribe();
  }
}
