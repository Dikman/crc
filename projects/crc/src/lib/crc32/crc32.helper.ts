import { Converter } from '../converter';
import { PolyCRC } from '../polycrc';

/**
 * Object to make a polynomial table for CRC calculation
 * @internal
 */
let polyCRC: PolyCRC;

/**
 * Calculates CRC32 from a given string
 *
 * @param str Source string whose checksum will be calculated
 */
export function crc32(str: string): Converter {
  const crc = polyCRC || (polyCRC = new PolyCRC(32, 0x04C11DB7, 0xFFFFFFFF, 0xFFFFFFFF, true));
  return crc.calculate(str);
}
