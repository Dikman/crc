import { Component } from '@angular/core';
import { crc24 } from '@dikman/crc';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demo';

  constructor() {
    // const a = new CRC(24, 0x864CFB, 0xB704CE, 0x000000, false);
    const a = crc24('hello');
    console.log(
      a.asNumber(),
      a.toString(),
      '0xCBF43926'
    );
  }
}
