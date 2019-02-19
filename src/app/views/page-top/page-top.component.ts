import { Component, OnInit, ViewChild } from '@angular/core';

import {NgxTuiCalendarComponent, TuiCalendarOptions} from 'ngx-tui-calendar';
import {ResourceModelReservations} from "../../models/resource-model-reservations";
import {ServiceReservationsService} from "../../services/service-reservations.service";

@Component({
  selector: 'app-page-top',
  templateUrl: './page-top.component.html',
  styleUrls: ['./page-top.component.css']
})
export class PageTopComponent implements OnInit {
  @ViewChild('exampleCalendar') exampleCalendar: NgxTuiCalendarComponent;
  reservations: ResourceModelReservations[];
  tuiCalendarOptions: TuiCalendarOptions;

  constructor(private serviceReservationsService: ServiceReservationsService) {
  }

  ngOnInit() {
    this.getReservations();

    this.exampleCalendar.setCalendarColor('1', {
      color: '#FFFFFF',
      bgColor: '#EFA14C',
      borderColor: '#FF0000'
    }, true);
    this.exampleCalendar.setCalendarColor('2', {
      color: '#FFFFFF',
      bgColor: '#A8C25C',
      borderColor: '#FF0000'
    }, true);
    this.exampleCalendar.setCalendarColor('3', {
      color: '#FFFFFF',
      bgColor: '#4EA397',
      borderColor: '#FF0000'
    }, true);
    this.exampleCalendar.setCalendarColor('4', {
      color: '#FFFFFF',
      bgColor: '#4E74A1',
      borderColor: '#FF0000'
    }, true);
    this.exampleCalendar.setCalendarColor('5', {
      color: '#FFFFFF',
      bgColor: '#A072A1',
      borderColor: '#FF0000'
    }, true);
    this.exampleCalendar.setCalendarColor('6', {
      color: '#FFFFFF',
      bgColor: '#E08081',
      borderColor: '#FF0000'
    }, true);
    this.exampleCalendar.setCalendarColor('7', {
      color: '#FFFFFF',
      bgColor: '#DDC354',
      borderColor: '#FF0000'
    }, true);
    this.exampleCalendar.setCalendarColor('8', {
      color: '#FFFFFF',
      bgColor: '#70B187',
      borderColor: '#FF0000'
    }, true);

    this.exampleCalendar.setOptions({
      month: {
        isAlways6Week: true,
        visibleScheduleCount: 6,
        // visibleWeeksCount: 6,
        daynames: ['日', '月', '火', '水', '木', '金', '土']
      }
    }, true);
    this.exampleCalendar.changeView('month');
  }

  onTuiCalendarCreate($event) {
    /* at this point the calendar has been created and it's methods are available via the ViewChild defined above, so for example you can do: */
    this.exampleCalendar.createSchedules([/* populated schedules array goes here*/]);
  }

  getReservations(): void {
    this.exampleCalendar.clear();
    this.serviceReservationsService.getReservations()
      .subscribe(reservations => {
        this.reservations = reservations;

        reservations.map(reservation => {
          // console.log("DEBUG DEBUG DEBUG reservation: ");
          // console.log(reservation.name);
          // console.log(new Date(reservation.lendingStartAt));
          // console.log(new Date(reservation.lendingEndAt));

          this.exampleCalendar.createSchedules([
            {
              id: reservation.id.toString(),
              calendarId: reservation.studioId,
              title: reservation.name,
              category: 'time',
              dueDateClass: '',
              start: reservation.lendingStartAt,
              end: reservation.lendingEndAt
            }]);
        });

      });
    this.exampleCalendar.render();

  }

}
