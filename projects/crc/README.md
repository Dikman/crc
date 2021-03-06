# CRC

[![npm](https://img.shields.io/npm/v/@dikman/crc.svg?maxAge=2592000?style=plastic)](https://www.npmjs.com/package/@dikman/crc)
[![Downloads](https://img.shields.io/npm/dt/@dikman/crc.svg?maxAge=2592000?style=plastic)](https://www.npmjs.com/package/@dikman/crc)
[![Monthly Downloads](https://img.shields.io/npm/dm/@dikman/crc.svg)](https://www.npmjs.com/package/@dikman/crc)
[![npm bundle size (minified + gzip)](https://img.shields.io/bundlephobia/minzip/@dikman/crc.svg)](https://bundlephobia.com/result?p=@dikman/crc)
[![License](https://img.shields.io/npm/l/express.svg?maxAge=2592000)](/LICENSE)

The library for calculating Cyclic Redundancy Check (CRC) for browser-side. The calculation is table-based. Tables are dynamically generated once per each CRC function.

This library is an adaptation and simplification of [polycrc](https://github.com/latysheff/node-polycrc.git) for use it on browser-side. CRC mathematics is checked with [pycrc](https://github.com/tpircher/pycrc.git). It seems to be no other module in npm registry wich possible to use with [Angular framework](https://angular.io).

Even though this library was designed for browser-side it also keeps the possibility to use on nodejs-side.

## Contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->


- [Installation](#installation)
- [API](#api)
- [Usage](#usage)
  - [Calculate a CRC32](#calculate-a-crc32)
  - [Calculate a CRC24](#calculate-a-crc24)
- [License](#license)
- [Generated](#generated)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Installation

```
npm install @dikman/crc
```

## API

```js
function crc24(str: string): Converter;
```

```js
function crc32(str: string): Converter;
```

```js
interface Converter {
  public toHEX(prefix: string = '0x'): string;
  public asNumber(): number;
}
```

## Usage

### Calculate a CRC32

```js
import { crc32 } from '@dikman/crc';

const checksum = crc32('hello');

console.log(checksum.toHEX());
// "0x3610A686"

console.log(checksum.asNumber());
// 907060870
```

### Calculate a CRC24

```js
import { crc24 } from '@dikman/crc';

const checksum = crc24('hello');

console.log(checksum.toHEX());
// "0x47F58A"

console.log(checksum.asNumber());
// 4715914
```

## License

The MIT License (MIT)

Copyright (c) 2020 Dmitriy Kuznetsov

## Generated

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.22.
