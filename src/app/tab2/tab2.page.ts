import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { AlarmDetailPage } from '../alarm-detail/alarm-detail.page';
import { AlarmQueryPage } from '../alarm-query/alarm-query.page';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public modalController: ModalController) { }

  async presentModal(level: string) {
    const modal = await this.modalController.create({
      component: AlarmDetailPage,
      componentProps: { level }
    });
    return await modal.present();
  }

  async presentQueryModal() {
    const modal = await this.modalController.create({
      component: AlarmQueryPage
    });
    return await modal.present();
  }
}
