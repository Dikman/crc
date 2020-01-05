import { PolyCRC, ValueFormatter } from '../polycrc';

let polyCRC: PolyCRC;

export function crc32(str: string): ValueFormatter {
  const crc = polyCRC || (polyCRC = new PolyCRC(32, 0x04C11DB7, 0xFFFFFFFF, 0xFFFFFFFF, true));
  return crc.calculate(str);
}
