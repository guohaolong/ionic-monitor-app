import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import * as moment from 'moment';

@Component({
  selector: 'app-alarm-query',
  templateUrl: './alarm-query.component.html',
  styleUrls: ['./alarm-query.component.scss'],
})
export class AlarmQueryComponent implements OnInit {

  startDate: string;
  endDate: string;
  alarms: Array<any>;
  isQuerying: boolean;

  constructor(
    public modalController: ModalController,
    public toastController: ToastController
  ) { }

  ngOnInit() {
    this.startDate = moment(new Date()).format('YYYY-MM-DD 00:00');
    this.endDate = moment(new Date()).format('YYYY-MM-DD 23:59');
  }

  getAlarms() {
    const alarms = [];
    for (let i = 0; i < 5; i++) {
      alarms.push({
        name: `High Hum ${i + 1} Alarm`,
        triggerValue: '28.60℃',
        time: '2019-06-12 17:33:47',
        equipName: 'ENV_TH1',
        confirmor: 'admin',
        confirmTime: '2019-06-19 15:19:51',
        levelString: (i % 2 === 0 ? 'Critical' : 'Moderate')
      });
    }
    alarms[2].levelString = 'Low';

    this.alarms = alarms;
  }

  queryAlarms() {
    this.alarms = [];
    this.isQuerying = true;

    setTimeout(() => {
      this.isQuerying = false;
      this.getAlarms();
      this.presentToast(`${this.alarms.length} entries were queried.`);
    }, 2500);
  }

  clearAlarms() {
    this.alarms.length = 0;
    this.presentToast('Clear query result successfully.');
  }

  async presentToast(msg: string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

  async closeModal() {
    this.modalController.dismiss();
  }

}
