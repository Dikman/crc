import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { crc24 } from '@dikman/crc';
import { Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { TrimExample } from 'src/app/shared/decorators/trim-example.decorator';

@Component({
  templateUrl: './crc24.component.html'
})
export class Crc24Component implements OnInit, OnDestroy {

  @TrimExample()
  public exampleCode = `
    import { crc24 } from '@dikman/crc';

    const checksum = crc24('hello');

    console.log(checksum.toHEX());
    // "0x47F58A"

    console.log(checksum.asNumber());
    // 4715914
  `;

  public exampleString = new FormControl('hello');

  public exampleChecksum: string;

  private exampleSubscription: Subscription;

  public ngOnInit(): void {
    this.exampleSubscription = this.exampleString
      .valueChanges
      .pipe(
        debounceTime(200),
        distinctUntilChanged()
      )
      .subscribe(() => this.invalidate());


    this.invalidate();
  }

  public ngOnDestroy(): void {
    this.exampleSubscription.unsubscribe();
  }

  private invalidate(): void {
    this.exampleChecksum = crc24(this.exampleString.value).toHEX();
  }

}
