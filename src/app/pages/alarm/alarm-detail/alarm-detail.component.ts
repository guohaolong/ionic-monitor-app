import { Component, OnInit, Input } from '@angular/core';
import { ModalController, AlertController, ActionSheetController, IonItemSliding } from '@ionic/angular';
import * as moment from 'moment';

@Component({
  selector: 'app-alarm-detail',
  templateUrl: './alarm-detail.component.html',
  styleUrls: ['./alarm-detail.component.scss'],
})
export class AlarmDetailComponent implements OnInit {

  @Input() level: string;
  alarms: Array<any>;

  constructor(
    public alertController: AlertController,
    public modalController: ModalController,
    public actionSheetController: ActionSheetController
  ) { }

  ngOnInit() {
    this.alarms = this.getAlarmDetails(this.level);
  }

  getAlarmDetails(level: string) {
    const criticalAlarms = [];
    for (let i = 0; i < 3; i++) {
      criticalAlarms.push({
        name: `High Hum ${i + 1} Alarm`,
        triggerValue: '28.60℃',
        time: '2019-06-12 17:33:47',
        equipName: 'ENV_TH1',
        alarmAffirm: (i === 2 ? true : false),
        alarmAffirmUser: 'admin',
        alarmAffirmTime: '2019-06-06 15:19:51'
      });
    }

    const moderateAlarms = [];
    for (let i = 0; i < 16; i++) {
      moderateAlarms.push({
        name: `High Hum ${i + 1} Alarm`,
        triggerValue: `${i * 0.2 + 20}℃`,
        time: '2019-06-12 17:33:47',
        equipName: `ENV_TH${i % 4 + 1}`,
        alarmAffirm: (i % 7 === 0 ? true : false),
        alarmAffirmUser: 'admin',
        alarmAffirmTime: '2019-06-06 15:19:51'
      });
    }

    const lowAlarms = [];
    for (let i = 0; i < 22; i++) {
      lowAlarms.push({
        name: `High Hum ${i + 1} Alarm`,
        triggerValue: `${i * 0.2 + 20}℃`,
        time: '2019-06-12 17:33:47',
        equipName: `ENV_TH${i % 6 + 1}`,
        alarmAffirm: (i % 6 === 0 ? true : false),
        alarmAffirmUser: 'admin',
        alarmAffirmTime: '2019-06-06 15:19:51'
      });
    }

    let alarms = [];
    switch (level) {
      case 'Critical':
        alarms = criticalAlarms;
        break;
      case 'Moderate':
        alarms = moderateAlarms;
        break;
      case 'Low':
        alarms = lowAlarms;
        break;
      default:
        alarms = lowAlarms;
        break;
    }
    return alarms;
  }

  async presentAlert(alarmItem: any, ionItemSliding: IonItemSliding) {
    if (alarmItem.alarmAffirm) {
      return;
    }

    const alert = await this.alertController.create({
      header: 'Confirm',
      message: 'Acknowledge this alarm?',
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
            console.log('Cancel clicked!');
          }
        },
        {
          text: 'OK',
          handler: () => {
            this.acknowledgeAlarm(alarmItem);
            ionItemSliding.close();
          }
        }
      ]
    });

    await alert.present();
  }

  private acknowledgeAlarm(alarmItem: any) {
    alarmItem.alarmAffirm = true;
    alarmItem.alarmAffirmTime = moment(new Date()).format('YYYY-MM-DD HH:mm:ss');
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Alarm',
      buttons: [{
        text: 'ACK All',
        icon: 'remove-circle',
        handler: () => {
          this.alarms.forEach((alarm) => {
            if (!alarm.alarmAffirm) {
              this.acknowledgeAlarm(alarm);
            }
          });
        }
      }, {
        text: 'Cancel',
        icon: 'close-circle',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

  doRefresh(event: any) {
    setTimeout(() => {
      this.alarms = this.getAlarmDetails(this.level);
      event.target.complete();
    }, 2000);
  }

  async closeModal() {
    this.modalController.dismiss();
  }

}
