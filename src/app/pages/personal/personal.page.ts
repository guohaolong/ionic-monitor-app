import { Component, OnInit } from '@angular/core';
import { ActionSheetController, LoadingController, ModalController } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

import { User, AuthService } from './../../services/auth.service';
import { ImageViewerComponent } from './../../components/image-viewer/image-viewer.component';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.page.html',
  styleUrls: ['./personal.page.scss'],
})
export class PersonalPage implements OnInit {

  user: User;
  currentImage: any;

  constructor(
    private authService: AuthService,
    private camera: Camera,
    private actionSheetController: ActionSheetController,
    private loadingController: LoadingController,
    private modalController: ModalController,
  ) { }

  ngOnInit() {
    this.getCurrentUser();
  }

  getCurrentUser() {
    this.user = this.authService.getUser();
  }

  async presentViewModal() {
    const modal = await this.modalController.create({
      component: ImageViewerComponent,
      componentProps: {
        imageTitle: this.user.userName,
        imageSource: this.currentImage || 'assets/images/girl-avatar.png',
      }
    });
    return await modal.present();
  }

  async changePicture() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Upload Picture',
      buttons: [{
        text: 'Camera',
        icon: 'camera',
        handler: () => {
          this.takePicture();
        }
      }, {
        text: 'Gallery',
        icon: 'aperture',
        handler: () => {
          this.getPicture();
        }
      }]
    });
    await actionSheet.present();
  }

  async takePicture() {
    const loading = await this.loadingController.create({ message: 'Please wait...' });
    loading.present();

    const options: CameraOptions = {
      quality: 60,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.CAMERA
    };

    this.camera.getPicture(options).then((imageData) => {
      if (imageData) {
        this.currentImage = 'data:image/jpeg;base64,' + imageData;
      }
      loading.dismiss();
    }, (err) => {
      // Handle error
      console.log('Camera issue:' + err);
      loading.dismiss();
    });
  }

  async getPicture() {
    const loading = await this.loadingController.create({ message: 'Please wait...' });
    loading.present();

    const options: CameraOptions = {
      quality: 60,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM
    };

    this.camera.getPicture(options).then((imageData) => {
      if (imageData) {
        this.currentImage = 'data:image/jpeg;base64,' + imageData;
      }
      loading.dismiss();
    }, (err) => {
      // Handle error
      console.log('Camera issue:' + err);
      loading.dismiss();
    });
  }

}
