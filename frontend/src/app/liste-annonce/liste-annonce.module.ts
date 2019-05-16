import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ListeAnnoncePage } from './liste-annonce.page';

const routes: Routes = [
  {
    path: '',
    component: ListeAnnoncePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ListeAnnoncePage]
})
export class ListeAnnoncePageModule {}
