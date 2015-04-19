/* global Intl */

// Add support for intl on node.js
// See: http://formatjs.io/guides/runtime-environments/#server

import { locales } from "../config";
import IntlUtils from "../utils/IntlUtils";

const debug = require("debug")("isomorphic500");

if (locales) {

  if (global.Intl) {

    if (!locales.every(IntlUtils.hasBuiltInLocaleData)) {

      // `Intl` exists, but it doesn't have the data we need, so load the
      // polyfill and replace the constructors with the polyfill's.
      const IntlPolyfill = require("intl");
      Intl.NumberFormat = IntlPolyfill.NumberFormat;
      Intl.DateTimeFormat = IntlPolyfill.DateTimeFormat;

      debug("Intl has been found, but locale data has been polyfilled.");

    }
  }
  else {
    // No `Intl`: use and load the polyfill.
    global.Intl = require("intl");
    debug("Intl is not supported, so the polyfill has been loaded.");
  }

}
