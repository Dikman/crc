import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Crc24Component } from './pages/crc24/crc24.component';
import { Crc32Component } from './pages/crc32/crc32.component';

const routes: Routes = [
  {
    path: 'crc24',
    component: Crc24Component
  },
  {
    path: 'crc32',
    component: Crc32Component
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
