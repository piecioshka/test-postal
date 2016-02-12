# test-postal

:ledger: Test application building with `postal.js`.

## Test in browser?

First you should build `dist` directory.

```
npm run build
```

... and open browser in `app/index.html`.

## Unit test

Use `jasmine` for setup unit tests:

```
npm install
npm test
```

## Coverage

Use `istanbul` by command `npm run coverage`:

```
4 specs, 0 failures
Finished in 0.011 seconds
=============================================================================
Writing coverage object [/Users/piecioshka/projects/test-postal/coverage/coverage.json]
Writing coverage reports at [/Users/piecioshka/projects/test-postal/coverage]
=============================================================================

=============================== Coverage summary ===============================
Statements   : 100% ( 6/6 )
Branches     : 100% ( 0/0 )
Functions    : 100% ( 2/2 )
Lines        : 100% ( 6/6 )
================================================================================
```
