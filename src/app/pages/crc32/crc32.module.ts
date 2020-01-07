import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { Crc32RoutingModule } from './crc32-routing.module';
import { Crc32Component } from './crc32.component';

@NgModule({
  declarations: [
    Crc32Component
  ],
  imports: [
    SharedModule,
    Crc32RoutingModule
  ]
})
export class Crc32Module { }
