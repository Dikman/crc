import { MediaMatcher } from '@angular/cdk/layout';
import { Component } from '@angular/core';

interface MenuItem {
  link: string;
  title?: string;
  category: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public menu: Array<MenuItem> = [
    {
      link: 'crc24',
      title: 'CRC 24',
      category: 'helper'
    },
    {
      link: 'crc32',
      title: 'CRC 32',
      category: 'helper'
    }
  ];

  public mobile: MediaQueryList;

  constructor(media: MediaMatcher) {
    this.mobile = media.matchMedia('(max-width: 599px)');
  }

}
