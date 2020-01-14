import { Converter } from './converter';

describe('Converter', () => {
  const checks = [
    {
      value: 0xF,
      bits: 8,
      prefix: undefined,
      hex: '0x0F'
    },
    {
      value: 0xB2A1,
      bits: 16,
      prefix: undefined,
      hex: '0xB2A1'
    },
    {
      value: 0xC3B2A1,
      bits: 24,
      prefix: '#',
      hex: '#C3B2A1'
    },
    {
      value: 0xD4C3B2A1,
      bits: 32,
      prefix: undefined,
      hex: '0xD4C3B2A1'
    }
  ];

  for (const check of checks) {
    const converter = new Converter(check.value, check.bits);

    it(`should convert ${check.value} to ${check.hex}`, () => {
      expect(converter.toHEX(check.prefix)).toBe(check.hex);
    });

    it(`should the "toString" method returns the same value as the "toHEX" method for value ${check.value}`, () => {
      expect(converter.toHEX()).toBe(converter.toString());
    });

    it(`should return the input value ${check.value} without changes`, () => {
      expect(converter.asNumber()).toBe(check.value);
    });

    it(`should the "valueOf" method returns the same value as the "asNumber" method for value ${check.value}`, () => {
      expect(converter.asNumber()).toBe(converter.valueOf());
    });
  }
});
