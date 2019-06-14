import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AlarmQueryPage } from './alarm-query.page';

const routes: Routes = [
  {
    path: '',
    component: AlarmQueryPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AlarmQueryPage],
  entryComponents: [AlarmQueryPage],
})
export class AlarmQueryPageModule { }
