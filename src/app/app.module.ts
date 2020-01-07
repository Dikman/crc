import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTabsModule } from '@angular/material/tabs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
import { Crc32Component } from './pages/crc32/crc32.component';
import { Crc24Component } from './pages/crc24/crc24.component';

/**
 * Import specific languages to avoid importing everything
 * The following will lazy load highlight.js core script (~10KB)
 */
export function getHighlightLanguages() {
  return {
    typescript: () => import('highlight.js/lib/languages/typescript')
  };
}

@NgModule({
  declarations: [
    AppComponent,
    Crc32Component,
    Crc24Component,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatGridListModule,
    MatTabsModule,
    HighlightModule
  ],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: { languages: getHighlightLanguages() }
    }
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
