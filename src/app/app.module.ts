import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PageUsersIndexComponent } from './views/page-users-index/page-users-index.component';
import { PageEquipmentsIndexComponent } from './views/page-equipments-index/page-equipments-index.component';
import { PageStudiosIndexComponent } from './views/page-studios-index/page-studios-index.component';
import { PageReservationsIndexComponent } from './views/page-reservations-index/page-reservations-index.component';
import { PageTopComponent } from './views/page-top/page-top.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { PartHeaderComponent } from './views/part-header/part-header.component';
import { PartFooterComponent } from './views/part-footer/part-footer.component';

import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { PageUsersDetailComponent } from './views/page-users-detail/page-users-detail.component';
import { PageUsersNewComponent } from './views/page-users-new/page-users-new.component';
import { PageStudiosNewComponent } from './views/page-studios-new/page-studios-new.component';
import { PageStudiosDetailComponent } from './views/page-studios-detail/page-studios-detail.component';
import { PageEquipmentsDetailComponent } from './views/page-equipments-detail/page-equipments-detail.component';
import { PageReservationsDetailComponent } from './views/page-reservations-detail/page-reservations-detail.component';
import { PageReservationsNewComponent } from './views/page-reservations-new/page-reservations-new.component';
import { PageEquipmentsNewComponent } from './views/page-equipments-new/page-equipments-new.component';
import { OwlDateTimeModule, OwlNativeDateTimeModule, OWL_DATE_TIME_LOCALE } from 'ng-pick-datetime';
import { PageClassEquipmentsIndexComponent } from './views/page-class-equipments-index/page-class-equipments-index.component';
import { PageClassEquipmentsNewComponent } from './views/page-class-equipments-new/page-class-equipments-new.component';
import { PageClassEquipmentsDetailComponent } from './views/page-class-equipments-detail/page-class-equipments-detail.component';
import {Ng2SmartTableModule} from 'ng2-smart-table';
import {Ng2CompleterModule} from 'ng2-completer';
import { NgxTuiCalendarModule } from 'ngx-tui-calendar';

@NgModule({
  declarations: [
    AppComponent,
    PageUsersIndexComponent,
    PageEquipmentsIndexComponent,
    PageStudiosIndexComponent,
    PageReservationsIndexComponent,
    PageTopComponent,
    PartHeaderComponent,
    PartFooterComponent,
    PageUsersDetailComponent,
    PageUsersNewComponent,
    PageStudiosNewComponent,
    PageStudiosDetailComponent,
    PageEquipmentsDetailComponent,
    PageReservationsDetailComponent,
    PageReservationsNewComponent,
    PageEquipmentsNewComponent,
    PageClassEquipmentsIndexComponent,
    PageClassEquipmentsNewComponent,
    PageClassEquipmentsDetailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,

    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),

    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),

    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    Ng2CompleterModule,
    Ng2SmartTableModule,

    NgxTuiCalendarModule.forRoot(),
  ],
  bootstrap: [ AppComponent ],
  providers: [
    // use french locale
    {provide: OWL_DATE_TIME_LOCALE, useValue: 'jp'},
  ],

})
export class AppModule { }
