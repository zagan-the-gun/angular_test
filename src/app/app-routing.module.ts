import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {PageTopComponent} from './views/page-top/page-top.component';
import {PageUsersIndexComponent} from './views/page-users-index/page-users-index.component';
import {PageUsersDetailComponent} from './views/page-users-detail/page-users-detail.component';
import {PageUsersNewComponent} from './views/page-users-new/page-users-new.component';
import {PageStudiosIndexComponent} from './views/page-studios-index/page-studios-index.component';
import {PageStudiosDetailComponent} from './views/page-studios-detail/page-studios-detail.component';
import {PageEquipmentsIndexComponent} from './views/page-equipments-index/page-equipments-index.component';
import {PageReservationsIndexComponent} from './views/page-reservations-index/page-reservations-index.component';
import {PageStudiosNewComponent} from './views/page-studios-new/page-studios-new.component';
import {PageEquipmentsDetailComponent} from './views/page-equipments-detail/page-equipments-detail.component';
import {PageEquipmentsNewComponent} from './views/page-equipments-new/page-equipments-new.component';
import {PageReservationsDetailComponent} from './views/page-reservations-detail/page-reservations-detail.component';
import {PageReservationsNewComponent} from './views/page-reservations-new/page-reservations-new.component';
import {PageClassEquipmentsIndexComponent} from './views/page-class-equipments-index/page-class-equipments-index.component';
import {PageClassEquipmentsDetailComponent} from './views/page-class-equipments-detail/page-class-equipments-detail.component';
import {PageClassEquipmentsNewComponent} from './views/page-class-equipments-new/page-class-equipments-new.component';

const routes: Routes = [
  { path: '', component: PageTopComponent },
  { path: 'users/index',      component: PageUsersIndexComponent },
  { path: 'users/detail/:id', component: PageUsersDetailComponent },
  { path: 'users/new',        component: PageUsersNewComponent },

  { path: 'studios/index',      component: PageStudiosIndexComponent },
  { path: 'studios/detail/:id', component: PageStudiosDetailComponent },
  { path: 'studios/new',        component: PageStudiosNewComponent },

  { path: 'equipments/index',       component: PageEquipmentsIndexComponent },
  { path: 'equipments/detail/:id',  component: PageEquipmentsDetailComponent },
  { path: 'equipments/new',         component: PageEquipmentsNewComponent },

  { path: 'reservations/index',       component: PageReservationsIndexComponent },
  { path: 'reservations/detail/:id',  component: PageReservationsDetailComponent },
  { path: 'reservations/new',         component: PageReservationsNewComponent },

  { path: 'class-equipments/index',       component: PageClassEquipmentsIndexComponent },
  { path: 'class-equipments/detail/:id',  component: PageClassEquipmentsDetailComponent },
  { path: 'class-equipments/new',         component: PageClassEquipmentsNewComponent },

  { path: '', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
  // declarations: []
})
export class AppRoutingModule { }
