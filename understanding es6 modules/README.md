## Understanding Ecmascript 6 Module Feature

learning es6 Module feature using export/import Keyword By following steps of [Sitepoint atricle: understanding es6 modules] (http://www.sitepoint.com/understanding-es6-modules/)

To run one of the examples:

```
node out/app.js
```

**iF** you need to tranpiler `ES6` module and  compiles it into `ES5` compatible code in the `CommonJS` or `AMD` style, Using `ES6 Module Transpiler` tool

```
node install
```

Then run `ES6 Module Transpiler` tool  with `CommonJS` style:
```
./node_modules/es6-module-transpiler/bin/compile-modules convert -I scripts -o out app.js utility.js --format commonjs
```
OR run `ES6 Module Transpiler` tool  with `AMD` style:
```
./node_modules/es6-module-transpiler/bin/compile-modules convert -I scripts -o out app.js utility.js --format amd
```
Open generated `app.js` file into `out/` folder and change line `require("utility");` to `require("./utility");`

Then run example:

```
node out/app.js
```
