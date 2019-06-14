import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs.router.module';

import { TabsPage } from './tabs.page';
import { AlarmDetailPageModule } from '../alarm-detail/alarm-detail.module';
import { AlarmQueryPageModule } from '../alarm-query/alarm-query.module';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    AlarmDetailPageModule,
    AlarmQueryPageModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule { }
