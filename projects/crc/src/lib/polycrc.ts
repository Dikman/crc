import { Converter } from './converter';

/**
 * General class to make a polynomial table for CRC calculation
 * @internal
 */
export class PolyCRC {

  private readonly reflectedXorIn = PolyCRC.reverse(this.xorIn, this.bits);

  private readonly msbMask = 1 << (this.bits - 1);

  private readonly mask = ((this.msbMask - 1) << 1) | 1;

  private readonly crcShift = 0;

  // ** It needs to uncomment and replace definition before if we want to support calculating CRC8 **
  // private readonly crcShift = this.bits < 8 ? 8 - this.bits : 0;

  private readonly shiftedXorIn = this.xorIn << this.crcShift;

  private readonly table = this.genPolyTable();

  private static reverse(data: number, width: number): number {
    let res = 0;

    for (let i = width; i > 0; i--) {
      res = res << 1 | data & 1;
      data >>= 1;
    }

    return res;
  }

  constructor(
    private readonly bits: number,
    private readonly poly: number,
    private readonly xorIn: number,
    private readonly xorOut: number,
    private readonly reflect: boolean
  ) {
    // ** The code below needs to uncomment if we want to support calculating CRC8 **
    // if (this.bits === 8 && !this.xorIn && !this.xorOut && !this.reflect) {
    //   this.calculate = (str: string): Converter => {
    //     let crc = 0;
    //
    //     for (let i = 0; i < str.length; i++) {
    //       crc = this.table[crc ^ str.charCodeAt(i)];
    //     }
    //
    //     return new Converter(crc, this.bits);
    //   };
    // }
  }

  public calculate(str: string): Converter {
    let crc: number;

    if (this.reflect) {
      crc = this.reflectedXorIn;

      for (let i = 0; i < str.length; i++) {
        crc = (this.table[(crc ^ str.charCodeAt(i)) & 0xff] ^ crc >>> 8) & this.mask;
      }
    } else {
      crc = this.shiftedXorIn;

      for (let i = 0; i < str.length; i++) {
        crc = this.table[((crc >> (this.bits - 8 + this.crcShift)) ^ str.charCodeAt(i)) & 0xff] << this.crcShift
          ^ crc << (8 - this.crcShift)
          & this.mask << this.crcShift;
      }

      crc >>= this.crcShift;
    }

    crc ^= this.xorOut;
    return new Converter(crc >>> 0, this.bits);
  }

  private genPolyTable(): Int32Array {
    const capacity = 256;
    const table = [];

    for (let i = 0; i < capacity; i++) {
      let reg = this.reflect ? PolyCRC.reverse(i, 8) : i;
      reg = reg << (this.bits - 8 + this.crcShift);

      for (let j = 0; j < 8; j++) {
        if ((reg & (this.msbMask << this.crcShift)) !== 0) {
          reg <<= 1;
          reg ^= this.poly << this.crcShift;
        } else {
          reg <<= 1;
        }
      }

      if (this.reflect) {
        reg = PolyCRC.reverse(reg >> this.crcShift, this.bits) << this.crcShift;
      }

      reg = (reg >> this.crcShift) & this.mask;
      table[i] = reg >>> 0;
    }

    return new Int32Array(table);
  }

}
