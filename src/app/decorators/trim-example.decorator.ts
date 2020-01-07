export function TrimExample(): PropertyDecorator {
  let value: string;

  return (target: any, propertyKey: string | symbol): void => {
    const update = Reflect.defineProperty(
      target,
      propertyKey,
      {
        configurable: true,
        enumerable: true,
        get: () => value,
        set: (newValue: string): void => {
          value = newValue.trim().replace(/(^|[\r\n]) {4}/g, '$1');
        }
      },
    );

    if (!update) {
      throw new Error('Unable to update property');
    }
  };
}
