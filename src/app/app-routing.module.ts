import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'crc24',
    loadChildren: () => import('./pages/crc24/crc24.module').then(m => m.Crc24Module)
  },
  {
    path: 'crc32',
    loadChildren: () => import('./pages/crc32/crc32.module').then(m => m.Crc32Module)
  },
  {
    path: '**',
    redirectTo: 'crc24'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
