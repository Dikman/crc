import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { HighlightModule } from 'ngx-highlightjs';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    HighlightModule,
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    HighlightModule,
  ]
})
export class SharedModule { }
