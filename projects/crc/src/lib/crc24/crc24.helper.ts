import { PolyCRC, ValueFormatter } from '../polycrc';

let polyCRC: PolyCRC;

export function crc24(str: string): ValueFormatter {
  const crc = polyCRC || (polyCRC = new PolyCRC(24, 0x864CFB, 0xB704CE, 0x000000, false));
  return crc.calculate(str);
}
