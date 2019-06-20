import { Component } from '@angular/core';

import { Platform, ToastController, ModalController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  lastTimeBackPress = 0;
  timePeriodToExit = 2000;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    private toastController: ToastController,
    private modalController: ModalController,
  ) {
    this.initializeApp();
    this.backButtonEvent();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleLightContent();
      this.splashScreen.hide();
    });
  }

  backButtonEvent() {
    this.platform.backButton.subscribeWithPriority(9999, () => {
      document.addEventListener('backbutton', async (event) => {
        event.preventDefault();
        event.stopPropagation();

        // close modal
        try {
          const element = await this.modalController.getTop();
          if (element) {
            element.dismiss();
            return;
          }
        } catch (error) {
          console.error(error);
        }

        if (this.router.url !== '/tabs/home' && this.router.url.indexOf('/tabs/') > -1) {
          this.router.navigate(['/tabs/home']);
          return;
        }

        if (this.router.url === '/tabs/home' || this.router.url === '/login') {
          if (new Date().getTime() - this.lastTimeBackPress < this.timePeriodToExit) {
            navigator['app'].exitApp(); // work in ionic 4
          } else {
            this.presentToast(`Press back again to exit App.`);
            this.lastTimeBackPress = new Date().getTime();
          }
        }

      }, false);
    });
  }

  async presentToast(msg: string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000,
      position: 'middle'
    });

    toast.present();
  }

}
