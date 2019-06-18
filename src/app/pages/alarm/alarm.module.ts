import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AlarmPage } from './alarm.page';
import { AlarmDetailComponent } from './alarm-detail/alarm-detail.component';
import { AlarmQueryComponent } from './alarm-query/alarm-query.component';

const routes: Routes = [
  {
    path: '',
    component: AlarmPage,
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    AlarmPage,
    AlarmDetailComponent,
    AlarmQueryComponent
  ],
  entryComponents: [
    AlarmDetailComponent,
    AlarmQueryComponent
  ]
})
export class AlarmPageModule { }
