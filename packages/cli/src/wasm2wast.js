#!/usr/bin/env node
const { readFileSync } = require("fs");
const { parseBinary } = require("@webassemblyjs/wasm-parser");
const { printWAST } = require("@webassemblyjs/wast-printer");

function toArrayBuffer(buf) {
  return buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength);
}

const filename = process.argv[2];

const buff = toArrayBuffer(readFileSync(filename, null));
const ast = parseBinary(buff);

const wast = printWAST(ast);

process.stdout.write(wast);