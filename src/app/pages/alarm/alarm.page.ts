import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { AlarmQueryComponent } from './alarm-query/alarm-query.component';
import { AlarmDetailComponent } from './alarm-detail/alarm-detail.component';

@Component({
  selector: 'app-alarm',
  templateUrl: './alarm.page.html',
  styleUrls: ['./alarm.page.scss'],
})
export class AlarmPage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  async presentModal(level: string) {
    const modal = await this.modalController.create({
      component: AlarmDetailComponent,
      componentProps: { level }
    });
    return await modal.present();
  }

  async presentQueryModal() {
    const modal = await this.modalController.create({
      component: AlarmQueryComponent
    });
    return await modal.present();
  }

}
