import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Crc24Component } from './crc24.component';

const routes: Routes = [
  {
    path: '',
    component: Crc24Component
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class Crc24RoutingModule { }
