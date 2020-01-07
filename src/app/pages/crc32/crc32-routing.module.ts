import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Crc32Component } from './crc32.component';

const routes: Routes = [
  {
    path: '',
    component: Crc32Component
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
export class Crc32RoutingModule { }
