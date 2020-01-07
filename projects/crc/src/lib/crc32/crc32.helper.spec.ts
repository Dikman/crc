import { checks } from '../checks';
import { crc32 } from './crc32.helper';

describe('crc32', () => {
  for (const check of checks) {
    const len = check.sample.length;

    it(`should generate a correct checksum for the fixed sample by ${len} chars`, () => {
      const value = crc32(check.sample).toHEX();
      expect(value).toBe(check.checksum.crc32);
    });
  }
});
