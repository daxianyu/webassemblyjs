// @flow

const leb = require("./leb");

/**
 * According to https://webassembly.github.io/spec/core/binary/values.html#binary-int
 * max = ceil(32/7)
 */
export const MAX_NUMBER_OF_BYTE_U32 = 5;

/**
 * According to https://webassembly.github.io/spec/core/binary/values.html#binary-int
 * max = ceil(64/7)
 */
export const MAX_NUMBER_OF_BYTE_U64 = 10;

export function decodeInt64(encodedBuffer: Buffer, index: number): any {
  return leb.decodeInt64(encodedBuffer, index);
}

export function decodeUInt64(encodedBuffer: Buffer, index: number): any {
  return leb.decodeUInt64(encodedBuffer, index);
}

export function decodeInt32(encodedBuffer: Buffer, index: number): any {
  return leb.decodeInt32(encodedBuffer, index);
}

export function decodeUInt32(encodedBuffer: Buffer, index: number): any {
  return leb.decodeUInt32(encodedBuffer, index);
}

export function encodeU32(v: number): Buffer {
  return leb.encodeUInt32(v);
}

export function encodeI32(v: number): Buffer {
  return leb.encodeInt32(v);
}

export function encodeI64(v: number): Buffer {
  return leb.encodeInt64(v);
}
