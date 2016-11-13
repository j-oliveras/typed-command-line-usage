/// <reference path="../out/index.d.ts" />

import test = require('blue-tape');

import commandLineUsage = require('command-line-usage');

test('Imported is function', t => {
  t.true(typeof commandLineUsage === 'function');
}).
end();

// TODO ad more tests
