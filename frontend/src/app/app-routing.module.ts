import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { 
    path: 'login', 
    loadChildren: './login/login.module#LoginPageModule' 
  },
  { 
    path: 'candidate-form', 
    loadChildren: './candidate-form/candidate-form.module#CandidateFormPageModule' 
  },
  {
    path: 'entreprise-form',
    loadChildren: './entreprise-form/entreprise-form.module#EntrepriseFormPageModule'
  },
  { 
    path: 'post-an-add-page', 
    loadChildren: './post-an-add-page/post-an-add-page.module#PostAnAddPagePageModule' 
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
