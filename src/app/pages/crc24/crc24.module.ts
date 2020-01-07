import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { Crc24RoutingModule } from './crc24-routing.module';
import { Crc24Component } from './crc24.component';

@NgModule({
  declarations: [
    Crc24Component
  ],
  imports: [
    SharedModule,
    Crc24RoutingModule
  ]
})
export class Crc24Module { }
