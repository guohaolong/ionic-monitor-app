import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PersonalPage } from './personal.page';
import { ImageViewerComponent } from './../../components/image-viewer/image-viewer.component';

const routes: Routes = [
  {
    path: '',
    component: PersonalPage
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
    PersonalPage,
    ImageViewerComponent,
  ],
  entryComponents: [
    ImageViewerComponent,
  ]
})
export class PersonalPageModule { }
