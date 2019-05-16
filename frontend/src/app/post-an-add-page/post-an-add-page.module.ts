import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PostAnAddPagePage } from './post-an-add-page.page';

const routes: Routes = [
  {
    path: '',
    component: PostAnAddPagePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PostAnAddPagePage]
})
export class PostAnAddPagePageModule {}
