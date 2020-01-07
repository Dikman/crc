import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { crc32 } from '@dikman/crc';
import { Subscription } from 'rxjs';
import { TrimExample } from 'src/app/decorators/trim-example.decorator';

@Component({
  templateUrl: './crc32.component.html'
})
export class Crc32Component implements OnInit, OnDestroy {

  @TrimExample()
  public exampleCode = `
    import { crc32 } from '@dikman/crc';

    const checksum = crc32('hello');

    console.log(checksum.toHEX());
    // "0x3610A686"

    console.log(checksum.asNumber());
    // 907060870
  `;

  public exampleString = new FormControl('hello');

  public exampleChecksum: string;

  private exampleSubscription: Subscription;

  public ngOnInit(): void {
    this.exampleSubscription = this.exampleString.valueChanges.subscribe(() => this.invalidate());
    this.invalidate();
  }

  public ngOnDestroy(): void {
    this.exampleSubscription.unsubscribe();
  }

  private invalidate(): void {
    this.exampleChecksum = crc32(this.exampleString.value).toHEX();
  }

}