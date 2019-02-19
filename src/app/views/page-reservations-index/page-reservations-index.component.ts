import { Component, OnInit } from '@angular/core';
import {ServiceReservationsService} from "../../services/service-reservations.service";
import {ResourceModelReservations} from "../../models/resource-model-reservations";

@Component({
  selector: 'app-page-reservations-index',
  templateUrl: './page-reservations-index.component.html',
  styleUrls: ['./page-reservations-index.component.css']
})
export class PageReservationsIndexComponent implements OnInit {
  reservations: ResourceModelReservations[];

  constructor(private serviceReservationsService: ServiceReservationsService) { }

  ngOnInit() {
    this.getReservations();
  }

  getReservations(): void {
    this.serviceReservationsService.getReservations()
      .subscribe(reservations => this.reservations = reservations);
  }

  delete(reservation: ResourceModelReservations): void {
    this.reservations = this.reservations.filter(h => h !== reservation);
    this.serviceReservationsService.deleteReservation(reservation).subscribe();
  }
}
