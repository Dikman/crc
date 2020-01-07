import { Converter } from '../converter';
import { PolyCRC } from '../polycrc';

/**
 * Object to make a polynomial table for CRC calculation
 * @internal
 */
let polyCRC: PolyCRC;

/**
 * Calculates CRC24 from a given string
 *
 * @param str Source string whose checksum will be calculated
 */
export function crc24(str: string): Converter {
  const crc = polyCRC || (polyCRC = new PolyCRC(24, 0x864CFB, 0xB704CE, 0x000000, false));
  return crc.calculate(str);
}
