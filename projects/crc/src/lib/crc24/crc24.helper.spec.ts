import { checksums } from '../checksums';
import { crc24 } from './crc24.helper';

describe('crc24', () => {
  for (const check of checksums) {
    const len = check.sample.length;

    it(`should generate a correct checksum for the fixed sample by ${len} chars`, () => {
      const value = crc24(check.sample).toHEX();
      expect(value).toBe(check.checksum.crc24);
    });
  }
});
