/**
 * Wrapper for convert a value to hex representation
 */
export class Converter {

  /**
   * Hex representation of a value
   */
  private hex: string;

  /**
   * Creates an object wrapper for convert a given value
   *
   * @param value Source value
   * @param bits Number of bits used
   * @internal
   */
  constructor(
    private readonly value: number,
    private readonly bits: number
  ) { }

  /**
   * Returns hex representation of a value
   *
   * @param prefix Prefix string before hex representation
   */
  public toHEX(prefix: string = '0x'): string {
    if (!this.hex) {
      const length = Math.max(Math.floor(this.bits / 4), 1);
      this.hex = this.value.toString(16).toUpperCase().padStart(length, '0');
    }

    return prefix + this.hex;
  }

  /**
   * Returns a raw value
   */
  public asNumber(): number {
    return this.value;
  }

  /**
   * Returns hex representation of a value
   */
  public toString(): string {
    return this.toHEX();
  }

  /**
   * Returns a raw value
   */
  public valueOf(): number {
    return this.asNumber();
  }

}
