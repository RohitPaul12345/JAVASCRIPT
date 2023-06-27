#! /usr/bin/env node

let ULID = require('../dist/index.umd.js')
process.stdout.write(ULID.ulid())
