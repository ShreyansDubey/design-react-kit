(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react'), require('react-popper'), require('react-dom'), require('react-transition-group/Transition')) :
  typeof define === 'function' && define.amd ? define(['exports', 'react', 'react-popper', 'react-dom', 'react-transition-group/Transition'], factory) :
  (global = global || self, factory(global.DesignReactKit = {}, global.React, global.ReactPopper, global.ReactDOM, global.ReactTransitionGroup.Transition));
}(this, (function (exports, React, reactPopper, ReactDOM, Transition) { 'use strict';

  var React__default = 'default' in React ? React['default'] : React;
  ReactDOM = ReactDOM && ReactDOM.hasOwnProperty('default') ? ReactDOM['default'] : ReactDOM;
  Transition = Transition && Transition.hasOwnProperty('default') ? Transition['default'] : Transition;

  function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends.apply(this, arguments);
  }

  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }

    return target;
  }

  function unwrapExports (x) {
  	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
  }

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  var reactIs_production_min = createCommonjsModule(function (module, exports) {

    Object.defineProperty(exports, "__esModule", {
      value: !0
    });
    var b = "function" === typeof Symbol && Symbol["for"],
        c = b ? Symbol["for"]("react.element") : 60103,
        d = b ? Symbol["for"]("react.portal") : 60106,
        e = b ? Symbol["for"]("react.fragment") : 60107,
        f = b ? Symbol["for"]("react.strict_mode") : 60108,
        g = b ? Symbol["for"]("react.profiler") : 60114,
        h = b ? Symbol["for"]("react.provider") : 60109,
        k = b ? Symbol["for"]("react.context") : 60110,
        l = b ? Symbol["for"]("react.async_mode") : 60111,
        m = b ? Symbol["for"]("react.concurrent_mode") : 60111,
        n = b ? Symbol["for"]("react.forward_ref") : 60112,
        p = b ? Symbol["for"]("react.suspense") : 60113,
        q = b ? Symbol["for"]("react.suspense_list") : 60120,
        r = b ? Symbol["for"]("react.memo") : 60115,
        t = b ? Symbol["for"]("react.lazy") : 60116,
        v = b ? Symbol["for"]("react.fundamental") : 60117,
        w = b ? Symbol["for"]("react.responder") : 60118,
        x = b ? Symbol["for"]("react.scope") : 60119;

    function y(a) {
      if ("object" === typeof a && null !== a) {
        var u = a.$$typeof;

        switch (u) {
          case c:
            switch (a = a.type, a) {
              case l:
              case m:
              case e:
              case g:
              case f:
              case p:
                return a;

              default:
                switch (a = a && a.$$typeof, a) {
                  case k:
                  case n:
                  case h:
                    return a;

                  default:
                    return u;
                }

            }

          case t:
          case r:
          case d:
            return u;
        }
      }
    }

    function z(a) {
      return y(a) === m;
    }

    exports.typeOf = y;
    exports.AsyncMode = l;
    exports.ConcurrentMode = m;
    exports.ContextConsumer = k;
    exports.ContextProvider = h;
    exports.Element = c;
    exports.ForwardRef = n;
    exports.Fragment = e;
    exports.Lazy = t;
    exports.Memo = r;
    exports.Portal = d;
    exports.Profiler = g;
    exports.StrictMode = f;
    exports.Suspense = p;

    exports.isValidElementType = function (a) {
      return "string" === typeof a || "function" === typeof a || a === e || a === m || a === g || a === f || a === p || a === q || "object" === typeof a && null !== a && (a.$$typeof === t || a.$$typeof === r || a.$$typeof === h || a.$$typeof === k || a.$$typeof === n || a.$$typeof === v || a.$$typeof === w || a.$$typeof === x);
    };

    exports.isAsyncMode = function (a) {
      return z(a) || y(a) === l;
    };

    exports.isConcurrentMode = z;

    exports.isContextConsumer = function (a) {
      return y(a) === k;
    };

    exports.isContextProvider = function (a) {
      return y(a) === h;
    };

    exports.isElement = function (a) {
      return "object" === typeof a && null !== a && a.$$typeof === c;
    };

    exports.isForwardRef = function (a) {
      return y(a) === n;
    };

    exports.isFragment = function (a) {
      return y(a) === e;
    };

    exports.isLazy = function (a) {
      return y(a) === t;
    };

    exports.isMemo = function (a) {
      return y(a) === r;
    };

    exports.isPortal = function (a) {
      return y(a) === d;
    };

    exports.isProfiler = function (a) {
      return y(a) === g;
    };

    exports.isStrictMode = function (a) {
      return y(a) === f;
    };

    exports.isSuspense = function (a) {
      return y(a) === p;
    };
  });
  unwrapExports(reactIs_production_min);
  var reactIs_production_min_1 = reactIs_production_min.typeOf;
  var reactIs_production_min_2 = reactIs_production_min.AsyncMode;
  var reactIs_production_min_3 = reactIs_production_min.ConcurrentMode;
  var reactIs_production_min_4 = reactIs_production_min.ContextConsumer;
  var reactIs_production_min_5 = reactIs_production_min.ContextProvider;
  var reactIs_production_min_6 = reactIs_production_min.Element;
  var reactIs_production_min_7 = reactIs_production_min.ForwardRef;
  var reactIs_production_min_8 = reactIs_production_min.Fragment;
  var reactIs_production_min_9 = reactIs_production_min.Lazy;
  var reactIs_production_min_10 = reactIs_production_min.Memo;
  var reactIs_production_min_11 = reactIs_production_min.Portal;
  var reactIs_production_min_12 = reactIs_production_min.Profiler;
  var reactIs_production_min_13 = reactIs_production_min.StrictMode;
  var reactIs_production_min_14 = reactIs_production_min.Suspense;
  var reactIs_production_min_15 = reactIs_production_min.isValidElementType;
  var reactIs_production_min_16 = reactIs_production_min.isAsyncMode;
  var reactIs_production_min_17 = reactIs_production_min.isConcurrentMode;
  var reactIs_production_min_18 = reactIs_production_min.isContextConsumer;
  var reactIs_production_min_19 = reactIs_production_min.isContextProvider;
  var reactIs_production_min_20 = reactIs_production_min.isElement;
  var reactIs_production_min_21 = reactIs_production_min.isForwardRef;
  var reactIs_production_min_22 = reactIs_production_min.isFragment;
  var reactIs_production_min_23 = reactIs_production_min.isLazy;
  var reactIs_production_min_24 = reactIs_production_min.isMemo;
  var reactIs_production_min_25 = reactIs_production_min.isPortal;
  var reactIs_production_min_26 = reactIs_production_min.isProfiler;
  var reactIs_production_min_27 = reactIs_production_min.isStrictMode;
  var reactIs_production_min_28 = reactIs_production_min.isSuspense;

  var reactIs_development = createCommonjsModule(function (module, exports) {
  });
  unwrapExports(reactIs_development);
  var reactIs_development_1 = reactIs_development.typeOf;
  var reactIs_development_2 = reactIs_development.AsyncMode;
  var reactIs_development_3 = reactIs_development.ConcurrentMode;
  var reactIs_development_4 = reactIs_development.ContextConsumer;
  var reactIs_development_5 = reactIs_development.ContextProvider;
  var reactIs_development_6 = reactIs_development.Element;
  var reactIs_development_7 = reactIs_development.ForwardRef;
  var reactIs_development_8 = reactIs_development.Fragment;
  var reactIs_development_9 = reactIs_development.Lazy;
  var reactIs_development_10 = reactIs_development.Memo;
  var reactIs_development_11 = reactIs_development.Portal;
  var reactIs_development_12 = reactIs_development.Profiler;
  var reactIs_development_13 = reactIs_development.StrictMode;
  var reactIs_development_14 = reactIs_development.Suspense;
  var reactIs_development_15 = reactIs_development.isValidElementType;
  var reactIs_development_16 = reactIs_development.isAsyncMode;
  var reactIs_development_17 = reactIs_development.isConcurrentMode;
  var reactIs_development_18 = reactIs_development.isContextConsumer;
  var reactIs_development_19 = reactIs_development.isContextProvider;
  var reactIs_development_20 = reactIs_development.isElement;
  var reactIs_development_21 = reactIs_development.isForwardRef;
  var reactIs_development_22 = reactIs_development.isFragment;
  var reactIs_development_23 = reactIs_development.isLazy;
  var reactIs_development_24 = reactIs_development.isMemo;
  var reactIs_development_25 = reactIs_development.isPortal;
  var reactIs_development_26 = reactIs_development.isProfiler;
  var reactIs_development_27 = reactIs_development.isStrictMode;
  var reactIs_development_28 = reactIs_development.isSuspense;

  var reactIs = createCommonjsModule(function (module) {

    {
      module.exports = reactIs_production_min;
    }
  });

  /*
  object-assign
  (c) Sindre Sorhus
  @license MIT
  */
  /* eslint-disable no-unused-vars */

  var getOwnPropertySymbols = Object.getOwnPropertySymbols;
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  var propIsEnumerable = Object.prototype.propertyIsEnumerable;

  function toObject(val) {
    if (val === null || val === undefined) {
      throw new TypeError('Object.assign cannot be called with null or undefined');
    }

    return Object(val);
  }

  function shouldUseNative() {
    try {
      if (!Object.assign) {
        return false;
      } // Detect buggy property enumeration order in older V8 versions.
      // https://bugs.chromium.org/p/v8/issues/detail?id=4118


      var test1 = new String('abc'); // eslint-disable-line no-new-wrappers

      test1[5] = 'de';

      if (Object.getOwnPropertyNames(test1)[0] === '5') {
        return false;
      } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


      var test2 = {};

      for (var i = 0; i < 10; i++) {
        test2['_' + String.fromCharCode(i)] = i;
      }

      var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
        return test2[n];
      });

      if (order2.join('') !== '0123456789') {
        return false;
      } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


      var test3 = {};
      'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
        test3[letter] = letter;
      });

      if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
        return false;
      }

      return true;
    } catch (err) {
      // We don't expect any of the above to throw, but better to be safe.
      return false;
    }
  }

  var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
    var from;
    var to = toObject(target);
    var symbols;

    for (var s = 1; s < arguments.length; s++) {
      from = Object(arguments[s]);

      for (var key in from) {
        if (hasOwnProperty.call(from, key)) {
          to[key] = from[key];
        }
      }

      if (getOwnPropertySymbols) {
        symbols = getOwnPropertySymbols(from);

        for (var i = 0; i < symbols.length; i++) {
          if (propIsEnumerable.call(from, symbols[i])) {
            to[symbols[i]] = from[symbols[i]];
          }
        }
      }
    }

    return to;
  };

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
  var ReactPropTypesSecret_1 = ReactPropTypesSecret;

  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  function emptyFunction() {}

  function emptyFunctionWithReset() {}

  emptyFunctionWithReset.resetWarningCache = emptyFunction;

  var factoryWithThrowingShims = function factoryWithThrowingShims() {
    function shim(props, propName, componentName, location, propFullName, secret) {
      if (secret === ReactPropTypesSecret_1) {
        // It is still safe when called from React.
        return;
      }

      var err = new Error('Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use PropTypes.checkPropTypes() to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
      err.name = 'Invariant Violation';
      throw err;
    }
    shim.isRequired = shim;

    function getShim() {
      return shim;
    }
    // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.

    var ReactPropTypes = {
      array: shim,
      bool: shim,
      func: shim,
      number: shim,
      object: shim,
      string: shim,
      symbol: shim,
      any: shim,
      arrayOf: getShim,
      element: shim,
      elementType: shim,
      instanceOf: getShim,
      node: shim,
      objectOf: getShim,
      oneOf: getShim,
      oneOfType: getShim,
      shape: getShim,
      exact: getShim,
      checkPropTypes: emptyFunctionWithReset,
      resetWarningCache: emptyFunction
    };
    ReactPropTypes.PropTypes = ReactPropTypes;
    return ReactPropTypes;
  };

  var propTypes = createCommonjsModule(function (module) {
    /**
     * Copyright (c) 2013-present, Facebook, Inc.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    {
      // By explicitly using `prop-types` you are opting into new production behavior.
      // http://fb.me/prop-types-in-prod
      module.exports = factoryWithThrowingShims();
    }
  });

  var classnames = createCommonjsModule(function (module) {
    /*!
      Copyright (c) 2017 Jed Watson.
      Licensed under the MIT License (MIT), see
      http://jedwatson.github.io/classnames
    */

    /* global define */
    (function () {

      var hasOwn = {}.hasOwnProperty;

      function classNames() {
        var classes = [];

        for (var i = 0; i < arguments.length; i++) {
          var arg = arguments[i];
          if (!arg) continue;
          var argType = typeof arg;

          if (argType === 'string' || argType === 'number') {
            classes.push(arg);
          } else if (Array.isArray(arg) && arg.length) {
            var inner = classNames.apply(null, arg);

            if (inner) {
              classes.push(inner);
            }
          } else if (argType === 'object') {
            for (var key in arg) {
              if (hasOwn.call(arg, key) && arg[key]) {
                classes.push(key);
              }
            }
          }
        }

        return classes.join(' ');
      }

      if ( module.exports) {
        classNames["default"] = classNames;
        module.exports = classNames;
      } else {
        window.classNames = classNames;
      }
    })();
  });

  function getScrollbarWidth() {
    var scrollDiv = document.createElement('div'); // .modal-scrollbar-measure styles // https://github.com/twbs/bootstrap/blob/v4.0.0-alpha.4/scss/_modal.scss#L106-L113

    scrollDiv.style.position = 'absolute';
    scrollDiv.style.top = '-9999px';
    scrollDiv.style.width = '50px';
    scrollDiv.style.height = '50px';
    scrollDiv.style.overflow = 'scroll';
    document.body.appendChild(scrollDiv);
    var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
    document.body.removeChild(scrollDiv);
    return scrollbarWidth;
  }
  function setScrollbarWidth(padding) {
    document.body.style.paddingRight = padding > 0 ? padding + "px" : null;
  }
  function isBodyOverflowing() {
    return document.body.clientWidth < window.innerWidth;
  }
  function getOriginalBodyPadding() {
    var style = window.getComputedStyle(document.body, null);
    return parseInt(style && style.getPropertyValue('padding-right') || 0, 10);
  }
  function conditionallyUpdateScrollbar() {
    var scrollbarWidth = getScrollbarWidth(); // https://github.com/twbs/bootstrap/blob/v4.0.0-alpha.6/js/src/modal.js#L433

    var fixedContent = document.querySelectorAll('.fixed-top, .fixed-bottom, .is-fixed, .sticky-top')[0];
    var bodyPadding = fixedContent ? parseInt(fixedContent.style.paddingRight || 0, 10) : 0;

    if (isBodyOverflowing()) {
      setScrollbarWidth(bodyPadding + scrollbarWidth);
    }
  }
  var globalCssModule;
  function setGlobalCssModule(cssModule) {
    globalCssModule = cssModule;
  }
  function mapToCssModules(className, cssModule) {
    if (className === void 0) {
      className = '';
    }

    if (cssModule === void 0) {
      cssModule = globalCssModule;
    }

    if (!cssModule) return className;
    return className.split(' ').map(function (c) {
      return cssModule[c] || c;
    }).join(' ');
  }
  /**
   * Returns a new object with the key/value pairs from `obj` that are not in the array `omitKeys`.
   */

  function omit(obj, omitKeys) {
    var result = {};
    Object.keys(obj).forEach(function (key) {
      if (omitKeys.indexOf(key) === -1) {
        result[key] = obj[key];
      }
    });
    return result;
  }
  /**
   * Returns a filtered copy of an object with only the specified keys.
   */

  function pick(obj, keys) {
    var pickKeys = Array.isArray(keys) ? keys : [keys];
    var length = pickKeys.length;
    var key;
    var result = {};

    while (length > 0) {
      length -= 1;
      key = pickKeys[length];
      result[key] = obj[key];
    }

    return result;
  }
  var warned = {};
  function warnOnce(message) {
    if (!warned[message]) {
      /* istanbul ignore else */
      if (typeof console !== 'undefined') {
        console.error(message); // eslint-disable-line no-console
      }

      warned[message] = true;
    }
  }
  function deprecated(propType, explanation) {
    return function validate(props, propName, componentName) {
      if (props[propName] !== null && typeof props[propName] !== 'undefined') {
        warnOnce("\"" + propName + "\" property of \"" + componentName + "\" has been deprecated.\n" + explanation);
      }

      for (var _len = arguments.length, rest = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
        rest[_key - 3] = arguments[_key];
      }

      return propType.apply(void 0, [props, propName, componentName].concat(rest));
    };
  } // Shim Element if needed (e.g. in Node environment)

  var Element = typeof window === 'object' && window.Element || function () {};

  function DOMElement(props, propName, componentName) {
    if (!(props[propName] instanceof Element)) {
      return new Error('Invalid prop `' + propName + '` supplied to `' + componentName + '`. Expected prop to be an instance of Element. Validation failed.');
    }
  }
  var targetPropType = propTypes.oneOfType([propTypes.string, propTypes.func, DOMElement, propTypes.shape({
    current: propTypes.any
  })]);
  var tagPropType = propTypes.oneOfType([propTypes.func, propTypes.string, propTypes.shape({
    $$typeof: propTypes.symbol,
    render: propTypes.func
  }), propTypes.arrayOf(propTypes.oneOfType([propTypes.func, propTypes.string, propTypes.shape({
    $$typeof: propTypes.symbol,
    render: propTypes.func
  })]))]);
  /* eslint key-spacing: ["error", { afterColon: true, align: "value" }] */
  // These are all setup to match what is in the bootstrap _variables.scss
  // https://github.com/twbs/bootstrap/blob/v4-dev/scss/_variables.scss

  var TransitionTimeouts = {
    Fade: 150,
    // $transition-fade
    Collapse: 350,
    // $transition-collapse
    Modal: 300,
    // $modal-transition
    Carousel: 600 // $carousel-transition

  }; // Duplicated Transition.propType keys to ensure that Reactstrap builds
  // for distribution properly exclude these keys for nested child HTML attributes
  // since `react-transition-group` removes propTypes in production builds.

  var TransitionPropTypeKeys = ['in', 'mountOnEnter', 'unmountOnExit', 'appear', 'enter', 'exit', 'timeout', 'onEnter', 'onEntering', 'onEntered', 'onExit', 'onExiting', 'onExited'];
  var TransitionStatuses = {
    ENTERING: 'entering',
    ENTERED: 'entered',
    EXITING: 'exiting',
    EXITED: 'exited'
  };
  var keyCodes = {
    esc: 27,
    space: 32,
    enter: 13,
    tab: 9,
    up: 38,
    down: 40,
    home: 36,
    end: 35,
    n: 78,
    p: 80
  };
  var PopperPlacements = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'];
  var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
  function isReactRefObj(target) {
    if (target && typeof target === 'object') {
      return 'current' in target;
    }

    return false;
  }

  function getTag(value) {
    if (value == null) {
      return value === undefined ? '[object Undefined]' : '[object Null]';
    }

    return Object.prototype.toString.call(value);
  }

  function toNumber(value) {
    var type = typeof value;
    var NAN = 0 / 0;

    if (type === 'number') {
      return value;
    }

    if (type === 'symbol' || type === 'object' && getTag(value) === '[object Symbol]') {
      return NAN;
    }

    if (isObject(value)) {
      var other = typeof value.valueOf === 'function' ? value.valueOf() : value;
      value = isObject(other) ? "" + other : other;
    }

    if (type !== 'string') {
      return value === 0 ? value : +value;
    }

    value = value.replace(/^\s+|\s+$/g, '');
    var isBinary = /^0b[01]+$/i.test(value);
    return isBinary || /^0o[0-7]+$/i.test(value) ? parseInt(value.slice(2), isBinary ? 2 : 8) : /^[-+]0x[0-9a-f]+$/i.test(value) ? NAN : +value;
  }
  function isObject(value) {
    var type = typeof value;
    return value != null && (type === 'object' || type === 'function');
  }
  function isFunction(value) {
    if (!isObject(value)) {
      return false;
    }

    var tag = getTag(value);
    return tag === '[object Function]' || tag === '[object AsyncFunction]' || tag === '[object GeneratorFunction]' || tag === '[object Proxy]';
  }
  function findDOMElements(target) {
    if (isReactRefObj(target)) {
      return target.current;
    }

    if (isFunction(target)) {
      return target();
    }

    if (typeof target === 'string' && canUseDOM) {
      var selection = document.querySelectorAll(target);

      if (!selection.length) {
        selection = document.querySelectorAll("#" + target);
      }

      if (!selection.length) {
        throw new Error("The target '" + target + "' could not be identified in the dom, tip: check spelling");
      }

      return selection;
    }

    return target;
  }
  function isArrayOrNodeList(els) {
    if (els === null) {
      return false;
    }

    return Array.isArray(els) || canUseDOM && typeof els.length === 'number';
  }
  function getTarget(target, allElements) {
    var els = findDOMElements(target);

    if (isArrayOrNodeList(els) && !allElements) {
      return els[0];
    }

    return els;
  }
  var defaultToggleEvents = ['touchstart', 'click'];
  function addMultipleEventListeners(_els, handler, _events, useCapture) {
    var els = _els;

    if (!isArrayOrNodeList(els)) {
      els = [els];
    }

    var events = _events;

    if (typeof events === 'string') {
      events = events.split(/\s+/);
    }

    if (!isArrayOrNodeList(els) || typeof handler !== 'function' || !Array.isArray(events)) {
      throw new Error("\n      The first argument of this function must be DOM node or an array on DOM nodes or NodeList.\n      The second must be a function.\n      The third is a string or an array of strings that represents DOM events\n    ");
    }

    Array.prototype.forEach.call(events, function (event) {
      Array.prototype.forEach.call(els, function (el) {
        el.addEventListener(event, handler, useCapture);
      });
    });
    return function removeEvents() {
      Array.prototype.forEach.call(events, function (event) {
        Array.prototype.forEach.call(els, function (el) {
          el.removeEventListener(event, handler, useCapture);
        });
      });
    };
  }
  var focusableElements = ['a[href]', 'area[href]', 'input:not([disabled]):not([type=hidden])', 'select:not([disabled])', 'textarea:not([disabled])', 'button:not([disabled])', 'object', 'embed', '[tabindex]:not(.modal)', 'audio[controls]', 'video[controls]', '[contenteditable]:not([contenteditable="false"])'];

  var utils = /*#__PURE__*/Object.freeze({
    __proto__: null,
    getScrollbarWidth: getScrollbarWidth,
    setScrollbarWidth: setScrollbarWidth,
    isBodyOverflowing: isBodyOverflowing,
    getOriginalBodyPadding: getOriginalBodyPadding,
    conditionallyUpdateScrollbar: conditionallyUpdateScrollbar,
    setGlobalCssModule: setGlobalCssModule,
    mapToCssModules: mapToCssModules,
    omit: omit,
    pick: pick,
    warnOnce: warnOnce,
    deprecated: deprecated,
    DOMElement: DOMElement,
    targetPropType: targetPropType,
    tagPropType: tagPropType,
    TransitionTimeouts: TransitionTimeouts,
    TransitionPropTypeKeys: TransitionPropTypeKeys,
    TransitionStatuses: TransitionStatuses,
    keyCodes: keyCodes,
    PopperPlacements: PopperPlacements,
    canUseDOM: canUseDOM,
    isReactRefObj: isReactRefObj,
    toNumber: toNumber,
    isObject: isObject,
    isFunction: isFunction,
    findDOMElements: findDOMElements,
    isArrayOrNodeList: isArrayOrNodeList,
    getTarget: getTarget,
    defaultToggleEvents: defaultToggleEvents,
    addMultipleEventListeners: addMultipleEventListeners,
    focusableElements: focusableElements
  });

  var propTypes$1 = {
    tag: tagPropType,
    fluid: propTypes.bool,
    className: propTypes.string,
    cssModule: propTypes.object
  };
  var defaultProps = {
    tag: 'div'
  };

  var Container = function Container(props) {
    var className = props.className,
        cssModule = props.cssModule,
        fluid = props.fluid,
        Tag = props.tag,
        attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "fluid", "tag"]);

    var classes = mapToCssModules(classnames(className, fluid ? 'container-fluid' : 'container'), cssModule);
    return React__default.createElement(Tag, _extends({}, attributes, {
      className: classes
    }));
  };

  Container.propTypes = propTypes$1;
  Container.defaultProps = defaultProps;

  var propTypes$2 = {
    tag: tagPropType,
    noGutters: propTypes.bool,
    className: propTypes.string,
    cssModule: propTypes.object,
    form: propTypes.bool
  };
  var defaultProps$1 = {
    tag: 'div'
  };

  var Row = function Row(props) {
    var className = props.className,
        cssModule = props.cssModule,
        noGutters = props.noGutters,
        Tag = props.tag,
        form = props.form,
        attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "noGutters", "tag", "form"]);

    var classes = mapToCssModules(classnames(className, noGutters ? 'no-gutters' : null, form ? 'form-row' : 'row'), cssModule);
    return React__default.createElement(Tag, _extends({}, attributes, {
      className: classes
    }));
  };

  Row.propTypes = propTypes$2;
  Row.defaultProps = defaultProps$1;

  var colWidths = ['xs', 'sm', 'md', 'lg', 'xl'];
  var stringOrNumberProp = propTypes.oneOfType([propTypes.number, propTypes.string]);
  var columnProps = propTypes.oneOfType([propTypes.bool, propTypes.number, propTypes.string, propTypes.shape({
    size: propTypes.oneOfType([propTypes.bool, propTypes.number, propTypes.string]),
    order: stringOrNumberProp,
    offset: stringOrNumberProp
  })]);
  var propTypes$3 = {
    tag: tagPropType,
    xs: columnProps,
    sm: columnProps,
    md: columnProps,
    lg: columnProps,
    xl: columnProps,
    className: propTypes.string,
    cssModule: propTypes.object,
    widths: propTypes.array
  };
  var defaultProps$2 = {
    tag: 'div',
    widths: colWidths
  };

  var getColumnSizeClass = function getColumnSizeClass(isXs, colWidth, colSize) {
    if (colSize === true || colSize === '') {
      return isXs ? 'col' : "col-" + colWidth;
    } else if (colSize === 'auto') {
      return isXs ? 'col-auto' : "col-" + colWidth + "-auto";
    }

    return isXs ? "col-" + colSize : "col-" + colWidth + "-" + colSize;
  };

  var Col = function Col(props) {
    var className = props.className,
        cssModule = props.cssModule,
        widths = props.widths,
        Tag = props.tag,
        attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "widths", "tag"]);

    var colClasses = [];
    widths.forEach(function (colWidth, i) {
      var columnProp = props[colWidth];
      delete attributes[colWidth];

      if (!columnProp && columnProp !== '') {
        return;
      }

      var isXs = !i;

      if (isObject(columnProp)) {
        var _classNames;

        var colSizeInterfix = isXs ? '-' : "-" + colWidth + "-";
        var colClass = getColumnSizeClass(isXs, colWidth, columnProp.size);
        colClasses.push(mapToCssModules(classnames((_classNames = {}, _classNames[colClass] = columnProp.size || columnProp.size === '', _classNames["order" + colSizeInterfix + columnProp.order] = columnProp.order || columnProp.order === 0, _classNames["offset" + colSizeInterfix + columnProp.offset] = columnProp.offset || columnProp.offset === 0, _classNames)), cssModule));
      } else {
        var _colClass = getColumnSizeClass(isXs, colWidth, columnProp);

        colClasses.push(_colClass);
      }
    });

    if (!colClasses.length) {
      colClasses.push('col');
    }

    var classes = mapToCssModules(classnames(className, colClasses), cssModule);
    return React__default.createElement(Tag, _extends({}, attributes, {
      className: classes
    }));
  };

  Col.propTypes = propTypes$3;
  Col.defaultProps = defaultProps$2;

  var propTypes$4 = {
    light: propTypes.bool,
    dark: propTypes.bool,
    full: propTypes.bool,
    fixed: propTypes.string,
    sticky: propTypes.string,
    color: propTypes.string,
    role: propTypes.string,
    tag: tagPropType,
    className: propTypes.string,
    cssModule: propTypes.object,
    expand: propTypes.oneOfType([propTypes.bool, propTypes.string])
  };
  var defaultProps$3 = {
    tag: 'nav',
    expand: false
  };

  var getExpandClass = function getExpandClass(expand) {
    if (expand === false) {
      return false;
    } else if (expand === true || expand === 'xs') {
      return 'navbar-expand';
    }

    return "navbar-expand-" + expand;
  };

  var Navbar = function Navbar(props) {
    var _classNames;

    var expand = props.expand,
        className = props.className,
        cssModule = props.cssModule,
        light = props.light,
        dark = props.dark,
        fixed = props.fixed,
        sticky = props.sticky,
        color = props.color,
        Tag = props.tag,
        attributes = _objectWithoutPropertiesLoose(props, ["expand", "className", "cssModule", "light", "dark", "fixed", "sticky", "color", "tag"]);

    var classes = mapToCssModules(classnames(className, 'navbar', getExpandClass(expand), (_classNames = {
      'navbar-light': light,
      'navbar-dark': dark
    }, _classNames["bg-" + color] = color, _classNames["fixed-" + fixed] = fixed, _classNames["sticky-" + sticky] = sticky, _classNames)), cssModule);
    return React__default.createElement(Tag, _extends({}, attributes, {
      className: classes
    }));
  };

  Navbar.propTypes = propTypes$4;
  Navbar.defaultProps = defaultProps$3;

  var propTypes$5 = {
    tag: tagPropType,
    className: propTypes.string,
    cssModule: propTypes.object
  };
  var defaultProps$4 = {
    tag: 'a'
  };

  var NavbarBrand = function NavbarBrand(props) {
    var className = props.className,
        cssModule = props.cssModule,
        Tag = props.tag,
        attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "tag"]);

    var classes = mapToCssModules(classnames(className, 'navbar-brand'), cssModule);
    return React__default.createElement(Tag, _extends({}, attributes, {
      className: classes
    }));
  };

  NavbarBrand.propTypes = propTypes$5;
  NavbarBrand.defaultProps = defaultProps$4;

  var propTypes$6 = {
    tag: tagPropType,
    type: propTypes.string,
    className: propTypes.string,
    cssModule: propTypes.object,
    children: propTypes.node
  };
  var defaultProps$5 = {
    tag: 'button',
    type: 'button'
  };

  var NavbarToggler = function NavbarToggler(props) {
    var className = props.className,
        cssModule = props.cssModule,
        children = props.children,
        Tag = props.tag,
        attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "children", "tag"]);

    var classes = mapToCssModules(classnames(className, 'navbar-toggler'), cssModule);
    return React__default.createElement(Tag, _extends({
      "aria-label": "Toggle navigation"
    }, attributes, {
      className: classes
    }), children || React__default.createElement("span", {
      className: mapToCssModules('navbar-toggler-icon', cssModule)
    }));
  };

  NavbarToggler.propTypes = propTypes$6;
  NavbarToggler.defaultProps = defaultProps$5;

  var propTypes$7 = {
    tabs: propTypes.bool,
    pills: propTypes.bool,
    vertical: propTypes.oneOfType([propTypes.bool, propTypes.string]),
    horizontal: propTypes.string,
    justified: propTypes.bool,
    fill: propTypes.bool,
    navbar: propTypes.bool,
    card: propTypes.bool,
    tag: tagPropType,
    className: propTypes.string,
    cssModule: propTypes.object
  };
  var defaultProps$6 = {
    tag: 'ul',
    vertical: false
  };

  var getVerticalClass = function getVerticalClass(vertical) {
    if (vertical === false) {
      return false;
    } else if (vertical === true || vertical === 'xs') {
      return 'flex-column';
    }

    return "flex-" + vertical + "-column";
  };

  var Nav = function Nav(props) {
    var className = props.className,
        cssModule = props.cssModule,
        tabs = props.tabs,
        pills = props.pills,
        vertical = props.vertical,
        horizontal = props.horizontal,
        justified = props.justified,
        fill = props.fill,
        navbar = props.navbar,
        card = props.card,
        Tag = props.tag,
        attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "tabs", "pills", "vertical", "horizontal", "justified", "fill", "navbar", "card", "tag"]);

    var classes = mapToCssModules(classnames(className, navbar ? 'navbar-nav' : 'nav', horizontal ? "justify-content-" + horizontal : false, getVerticalClass(vertical), {
      'nav-tabs': tabs,
      'card-header-tabs': card && tabs,
      'nav-pills': pills,
      'card-header-pills': card && pills,
      'nav-justified': justified,
      'nav-fill': fill
    }), cssModule);
    return React__default.createElement(Tag, _extends({}, attributes, {
      className: classes
    }));
  };

  Nav.propTypes = propTypes$7;
  Nav.defaultProps = defaultProps$6;

  var propTypes$8 = {
    tag: tagPropType,
    active: propTypes.bool,
    className: propTypes.string,
    cssModule: propTypes.object
  };
  var defaultProps$7 = {
    tag: 'li'
  };

  var NavItem = function NavItem(props) {
    var className = props.className,
        cssModule = props.cssModule,
        active = props.active,
        Tag = props.tag,
        attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "active", "tag"]);

    var classes = mapToCssModules(classnames(className, 'nav-item', active ? 'active' : false), cssModule);
    return React__default.createElement(Tag, _extends({}, attributes, {
      className: classes
    }));
  };

  NavItem.propTypes = propTypes$8;
  NavItem.defaultProps = defaultProps$7;

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }

  var propTypes$9 = {
    tag: tagPropType,
    innerRef: propTypes.oneOfType([propTypes.object, propTypes.func, propTypes.string]),
    disabled: propTypes.bool,
    active: propTypes.bool,
    className: propTypes.string,
    cssModule: propTypes.object,
    onClick: propTypes.func,
    href: propTypes.any
  };
  var defaultProps$8 = {
    tag: 'a'
  };

  var NavLink =
  /*#__PURE__*/
  function (_React$Component) {
    _inheritsLoose(NavLink, _React$Component);

    function NavLink(props) {
      var _this;

      _this = _React$Component.call(this, props) || this;
      _this.onClick = _this.onClick.bind(_assertThisInitialized(_this));
      return _this;
    }

    var _proto = NavLink.prototype;

    _proto.onClick = function onClick(e) {
      if (this.props.disabled) {
        e.preventDefault();
        return;
      }

      if (this.props.href === '#') {
        e.preventDefault();
      }

      if (this.props.onClick) {
        this.props.onClick(e);
      }
    };

    _proto.render = function render() {
      var _this$props = this.props,
          className = _this$props.className,
          cssModule = _this$props.cssModule,
          active = _this$props.active,
          Tag = _this$props.tag,
          innerRef = _this$props.innerRef,
          attributes = _objectWithoutPropertiesLoose(_this$props, ["className", "cssModule", "active", "tag", "innerRef"]);

      var classes = mapToCssModules(classnames(className, 'nav-link', {
        disabled: attributes.disabled,
        active: active
      }), cssModule);
      return React__default.createElement(Tag, _extends({}, attributes, {
        ref: innerRef,
        onClick: this.onClick,
        className: classes
      }));
    };

    return NavLink;
  }(React__default.Component);

  NavLink.propTypes = propTypes$9;
  NavLink.defaultProps = defaultProps$8;

  var propTypes$a = {
    tag: tagPropType,
    listTag: tagPropType,
    className: propTypes.string,
    listClassName: propTypes.string,
    cssModule: propTypes.object,
    children: propTypes.node,
    'aria-label': propTypes.string
  };
  var defaultProps$9 = {
    tag: 'nav',
    listTag: 'ol',
    'aria-label': 'breadcrumb'
  };

  var Breadcrumb = function Breadcrumb(props) {
    var className = props.className,
        listClassName = props.listClassName,
        cssModule = props.cssModule,
        children = props.children,
        Tag = props.tag,
        ListTag = props.listTag,
        label = props['aria-label'],
        attributes = _objectWithoutPropertiesLoose(props, ["className", "listClassName", "cssModule", "children", "tag", "listTag", "aria-label"]);

    var classes = mapToCssModules(classnames(className), cssModule);
    var listClasses = mapToCssModules(classnames('breadcrumb', listClassName), cssModule);
    return React__default.createElement(Tag, _extends({}, attributes, {
      className: classes,
      "aria-label": label
    }), React__default.createElement(ListTag, {
      className: listClasses
    }, children));
  };

  Breadcrumb.propTypes = propTypes$a;
  Breadcrumb.defaultProps = defaultProps$9;

  var propTypes$b = {
    tag: tagPropType,
    active: propTypes.bool,
    className: propTypes.string,
    cssModule: propTypes.object
  };
  var defaultProps$a = {
    tag: 'li'
  };

  var BreadcrumbItem = function BreadcrumbItem(props) {
    var className = props.className,
        cssModule = props.cssModule,
        active = props.active,
        Tag = props.tag,
        attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "active", "tag"]);

    var classes = mapToCssModules(classnames(className, active ? 'active' : false, 'breadcrumb-item'), cssModule);
    return React__default.createElement(Tag, _extends({}, attributes, {
      className: classes,
      "aria-current": active ? 'page' : undefined
    }));
  };

  BreadcrumbItem.propTypes = propTypes$b;
  BreadcrumbItem.defaultProps = defaultProps$a;

  var propTypes$c = {
    active: propTypes.bool,
    'aria-label': propTypes.string,
    block: propTypes.bool,
    color: propTypes.string,
    disabled: propTypes.bool,
    outline: propTypes.bool,
    tag: tagPropType,
    innerRef: propTypes.oneOfType([propTypes.object, propTypes.func, propTypes.string]),
    onClick: propTypes.func,
    size: propTypes.string,
    children: propTypes.node,
    className: propTypes.string,
    cssModule: propTypes.object,
    close: propTypes.bool
  };
  var defaultProps$b = {
    color: 'secondary',
    tag: 'button'
  };

  var Button =
  /*#__PURE__*/
  function (_React$Component) {
    _inheritsLoose(Button, _React$Component);

    function Button(props) {
      var _this;

      _this = _React$Component.call(this, props) || this;
      _this.onClick = _this.onClick.bind(_assertThisInitialized(_this));
      return _this;
    }

    var _proto = Button.prototype;

    _proto.onClick = function onClick(e) {
      if (this.props.disabled) {
        e.preventDefault();
        return;
      }

      if (this.props.onClick) {
        this.props.onClick(e);
      }
    };

    _proto.render = function render() {
      var _this$props = this.props,
          active = _this$props.active,
          ariaLabel = _this$props['aria-label'],
          block = _this$props.block,
          className = _this$props.className,
          close = _this$props.close,
          cssModule = _this$props.cssModule,
          color = _this$props.color,
          outline = _this$props.outline,
          size = _this$props.size,
          Tag = _this$props.tag,
          innerRef = _this$props.innerRef,
          attributes = _objectWithoutPropertiesLoose(_this$props, ["active", "aria-label", "block", "className", "close", "cssModule", "color", "outline", "size", "tag", "innerRef"]);

      if (close && typeof attributes.children === 'undefined') {
        attributes.children = React__default.createElement("span", {
          "aria-hidden": true
        }, "\xD7");
      }

      var btnOutlineColor = "btn" + (outline ? '-outline' : '') + "-" + color;
      var classes = mapToCssModules(classnames(className, {
        close: close
      }, close || 'btn', close || btnOutlineColor, size ? "btn-" + size : false, block ? 'btn-block' : false, {
        active: active,
        disabled: this.props.disabled
      }), cssModule);

      if (attributes.href && Tag === 'button') {
        Tag = 'a';
      }

      var defaultAriaLabel = close ? 'Close' : null;
      return React__default.createElement(Tag, _extends({
        type: Tag === 'button' && attributes.onClick ? 'button' : undefined
      }, attributes, {
        className: classes,
        ref: innerRef,
        onClick: this.onClick,
        "aria-label": ariaLabel || defaultAriaLabel
      }));
    };

    return Button;
  }(React__default.Component);

  Button.propTypes = propTypes$c;
  Button.defaultProps = defaultProps$b;

  /**
   * DropdownContext
   * {
   *  toggle: PropTypes.func.isRequired,
   *  isOpen: PropTypes.bool.isRequired,
   *  direction: PropTypes.oneOf(['up', 'down', 'left', 'right']).isRequired,
   *  inNavbar: PropTypes.bool.isRequired,
   *  disabled: PropTypes.bool
   * }
   */

  var DropdownContext = React__default.createContext({});

  var propTypes$d = {
    a11y: propTypes.bool,
    disabled: propTypes.bool,
    direction: propTypes.oneOf(['up', 'down', 'left', 'right']),
    group: propTypes.bool,
    isOpen: propTypes.bool,
    nav: propTypes.bool,
    active: propTypes.bool,
    addonType: propTypes.oneOfType([propTypes.bool, propTypes.oneOf(['prepend', 'append'])]),
    size: propTypes.string,
    tag: tagPropType,
    toggle: propTypes.func,
    children: propTypes.node,
    className: propTypes.string,
    cssModule: propTypes.object,
    inNavbar: propTypes.bool,
    setActiveFromChild: propTypes.bool
  };
  var defaultProps$c = {
    a11y: true,
    isOpen: false,
    direction: 'down',
    nav: false,
    active: false,
    addonType: false,
    inNavbar: false,
    setActiveFromChild: false
  };

  var Dropdown =
  /*#__PURE__*/
  function (_React$Component) {
    _inheritsLoose(Dropdown, _React$Component);

    function Dropdown(props) {
      var _this;

      _this = _React$Component.call(this, props) || this;
      _this.addEvents = _this.addEvents.bind(_assertThisInitialized(_this));
      _this.handleDocumentClick = _this.handleDocumentClick.bind(_assertThisInitialized(_this));
      _this.handleKeyDown = _this.handleKeyDown.bind(_assertThisInitialized(_this));
      _this.removeEvents = _this.removeEvents.bind(_assertThisInitialized(_this));
      _this.toggle = _this.toggle.bind(_assertThisInitialized(_this));
      _this.containerRef = React__default.createRef();
      return _this;
    }

    var _proto = Dropdown.prototype;

    _proto.getContextValue = function getContextValue() {
      return {
        toggle: this.toggle,
        isOpen: this.props.isOpen,
        direction: this.props.direction === 'down' && this.props.dropup ? 'up' : this.props.direction,
        inNavbar: this.props.inNavbar,
        disabled: this.props.disabled
      };
    };

    _proto.componentDidMount = function componentDidMount() {
      this.handleProps();
    };

    _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
      if (this.props.isOpen !== prevProps.isOpen) {
        this.handleProps();
      }
    };

    _proto.componentWillUnmount = function componentWillUnmount() {
      this.removeEvents();
    };

    _proto.getContainer = function getContainer() {
      return this.containerRef.current;
    };

    _proto.getMenuCtrl = function getMenuCtrl() {
      if (this._$menuCtrl) return this._$menuCtrl;
      this._$menuCtrl = this.getContainer().querySelector('[aria-expanded]');
      return this._$menuCtrl;
    };

    _proto.getMenuItems = function getMenuItems() {
      return [].slice.call(this.getContainer().querySelectorAll('[role="menuitem"]'));
    };

    _proto.addEvents = function addEvents() {
      var _this2 = this;

      ['click', 'touchstart', 'keyup'].forEach(function (event) {
        return document.addEventListener(event, _this2.handleDocumentClick, true);
      });
    };

    _proto.removeEvents = function removeEvents() {
      var _this3 = this;

      ['click', 'touchstart', 'keyup'].forEach(function (event) {
        return document.removeEventListener(event, _this3.handleDocumentClick, true);
      });
    };

    _proto.handleDocumentClick = function handleDocumentClick(e) {
      if (e && (e.which === 3 || e.type === 'keyup' && e.which !== keyCodes.tab)) return;
      var container = this.getContainer();

      if (container.contains(e.target) && container !== e.target && (e.type !== 'keyup' || e.which === keyCodes.tab)) {
        return;
      }

      this.toggle(e);
    };

    _proto.handleKeyDown = function handleKeyDown(e) {
      var _this4 = this;

      if (/input|textarea/i.test(e.target.tagName) || keyCodes.tab === e.which && (e.target.getAttribute('role') !== 'menuitem' || !this.props.a11y)) {
        return;
      }

      e.preventDefault();
      if (this.props.disabled) return;

      if (this.getMenuCtrl() === e.target) {
        if (!this.props.isOpen && [keyCodes.space, keyCodes.enter, keyCodes.up, keyCodes.down].indexOf(e.which) > -1) {
          this.toggle(e);
          setTimeout(function () {
            return _this4.getMenuItems()[0].focus();
          });
        } else if (this.props.isOpen && e.which === keyCodes.esc) {
          this.toggle(e);
        }
      }

      if (this.props.isOpen && e.target.getAttribute('role') === 'menuitem') {
        if ([keyCodes.tab, keyCodes.esc].indexOf(e.which) > -1) {
          this.toggle(e);
          this.getMenuCtrl().focus();
        } else if ([keyCodes.space, keyCodes.enter].indexOf(e.which) > -1) {
          e.target.click();
          this.getMenuCtrl().focus();
        } else if ([keyCodes.down, keyCodes.up].indexOf(e.which) > -1 || [keyCodes.n, keyCodes.p].indexOf(e.which) > -1 && e.ctrlKey) {
          var $menuitems = this.getMenuItems();
          var index = $menuitems.indexOf(e.target);

          if (keyCodes.up === e.which || keyCodes.p === e.which && e.ctrlKey) {
            index = index !== 0 ? index - 1 : $menuitems.length - 1;
          } else if (keyCodes.down === e.which || keyCodes.n === e.which && e.ctrlKey) {
            index = index === $menuitems.length - 1 ? 0 : index + 1;
          }

          $menuitems[index].focus();
        } else if (keyCodes.end === e.which) {
          var _$menuitems = this.getMenuItems();

          _$menuitems[_$menuitems.length - 1].focus();
        } else if (keyCodes.home === e.which) {
          var _$menuitems2 = this.getMenuItems();

          _$menuitems2[0].focus();
        } else if (e.which >= 48 && e.which <= 90) {
          var _$menuitems3 = this.getMenuItems();

          var charPressed = String.fromCharCode(e.which).toLowerCase();

          for (var i = 0; i < _$menuitems3.length; i += 1) {
            var firstLetter = _$menuitems3[i].textContent && _$menuitems3[i].textContent[0].toLowerCase();

            if (firstLetter === charPressed) {
              _$menuitems3[i].focus();

              break;
            }
          }
        }
      }
    };

    _proto.handleProps = function handleProps() {
      if (this.props.isOpen) {
        this.addEvents();
      } else {
        this.removeEvents();
      }
    };

    _proto.toggle = function toggle(e) {
      if (this.props.disabled) {
        return e && e.preventDefault();
      }

      return this.props.toggle(e);
    };

    _proto.render = function render() {
      var _classNames, _ref;

      var _omit = omit(this.props, ['toggle', 'disabled', 'inNavbar', 'a11y']),
          className = _omit.className,
          cssModule = _omit.cssModule,
          direction = _omit.direction,
          isOpen = _omit.isOpen,
          group = _omit.group,
          size = _omit.size,
          nav = _omit.nav,
          setActiveFromChild = _omit.setActiveFromChild,
          active = _omit.active,
          addonType = _omit.addonType,
          tag = _omit.tag,
          attrs = _objectWithoutPropertiesLoose(_omit, ["className", "cssModule", "direction", "isOpen", "group", "size", "nav", "setActiveFromChild", "active", "addonType", "tag"]);

      var Tag = tag || (nav ? 'li' : 'div');
      var subItemIsActive = false;

      if (setActiveFromChild) {
        React__default.Children.map(this.props.children[1].props.children, function (dropdownItem) {
          if (dropdownItem && dropdownItem.props.active) subItemIsActive = true;
        });
      }

      var classes = mapToCssModules(classnames(className, direction !== 'down' && "drop" + direction, nav && active ? 'active' : false, setActiveFromChild && subItemIsActive ? 'active' : false, (_classNames = {}, _classNames["input-group-" + addonType] = addonType, _classNames['btn-group'] = group, _classNames["btn-group-" + size] = !!size, _classNames.dropdown = !group && !addonType, _classNames.show = isOpen, _classNames['nav-item'] = nav, _classNames)), cssModule);
      return React__default.createElement(DropdownContext.Provider, {
        value: this.getContextValue()
      }, React__default.createElement(reactPopper.Manager, null, React__default.createElement(Tag, _extends({}, attrs, (_ref = {}, _ref[typeof Tag === 'string' ? 'ref' : 'innerRef'] = this.containerRef, _ref), {
        onKeyDown: this.handleKeyDown,
        className: classes
      }))));
    };

    return Dropdown;
  }(React__default.Component);

  Dropdown.propTypes = propTypes$d;
  Dropdown.defaultProps = defaultProps$c;

  var propTypes$e = {
    children: propTypes.node
  };

  var ButtonDropdown = function ButtonDropdown(props) {
    return React__default.createElement(Dropdown, _extends({
      group: true
    }, props));
  };

  ButtonDropdown.propTypes = propTypes$e;

  var propTypes$f = {
    tag: tagPropType,
    'aria-label': propTypes.string,
    className: propTypes.string,
    cssModule: propTypes.object,
    role: propTypes.string,
    size: propTypes.string,
    vertical: propTypes.bool
  };
  var defaultProps$d = {
    tag: 'div',
    role: 'group'
  };

  var ButtonGroup = function ButtonGroup(props) {
    var className = props.className,
        cssModule = props.cssModule,
        size = props.size,
        vertical = props.vertical,
        Tag = props.tag,
        attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "size", "vertical", "tag"]);

    var classes = mapToCssModules(classnames(className, size ? 'btn-group-' + size : false, vertical ? 'btn-group-vertical' : 'btn-group'), cssModule);
    return React__default.createElement(Tag, _extends({}, attributes, {
      className: classes
    }));
  };

  ButtonGroup.propTypes = propTypes$f;
  ButtonGroup.defaultProps = defaultProps$d;

  var propTypes$g = {
    tag: tagPropType,
    'aria-label': propTypes.string,
    className: propTypes.string,
    cssModule: propTypes.object,
    role: propTypes.string
  };
  var defaultProps$e = {
    tag: 'div',
    role: 'toolbar'
  };

  var ButtonToolbar = function ButtonToolbar(props) {
    var className = props.className,
        cssModule = props.cssModule,
        Tag = props.tag,
        attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "tag"]);

    var classes = mapToCssModules(classnames(className, 'btn-toolbar'), cssModule);
    return React__default.createElement(Tag, _extends({}, attributes, {
      className: classes
    }));
  };

  ButtonToolbar.propTypes = propTypes$g;
  ButtonToolbar.defaultProps = defaultProps$e;

  var propTypes$h = {
    children: propTypes.node,
    active: propTypes.bool,
    disabled: propTypes.bool,
    divider: propTypes.bool,
    tag: tagPropType,
    header: propTypes.bool,
    onClick: propTypes.func,
    className: propTypes.string,
    cssModule: propTypes.object,
    toggle: propTypes.bool
  };
  var defaultProps$f = {
    tag: 'button',
    toggle: true
  };

  var DropdownItem =
  /*#__PURE__*/
  function (_React$Component) {
    _inheritsLoose(DropdownItem, _React$Component);

    function DropdownItem(props) {
      var _this;

      _this = _React$Component.call(this, props) || this;
      _this.onClick = _this.onClick.bind(_assertThisInitialized(_this));
      _this.getTabIndex = _this.getTabIndex.bind(_assertThisInitialized(_this));
      return _this;
    }

    var _proto = DropdownItem.prototype;

    _proto.onClick = function onClick(e) {
      if (this.props.disabled || this.props.header || this.props.divider) {
        e.preventDefault();
        return;
      }

      if (this.props.onClick) {
        this.props.onClick(e);
      }

      if (this.props.toggle) {
        this.context.toggle(e);
      }
    };

    _proto.getTabIndex = function getTabIndex() {
      if (this.props.disabled || this.props.header || this.props.divider) {
        return '-1';
      }

      return '0';
    };

    _proto.render = function render() {
      var tabIndex = this.getTabIndex();
      var role = tabIndex > -1 ? 'menuitem' : undefined;

      var _omit = omit(this.props, ['toggle']),
          className = _omit.className,
          cssModule = _omit.cssModule,
          divider = _omit.divider,
          Tag = _omit.tag,
          header = _omit.header,
          active = _omit.active,
          props = _objectWithoutPropertiesLoose(_omit, ["className", "cssModule", "divider", "tag", "header", "active"]);

      var classes = mapToCssModules(classnames(className, {
        disabled: props.disabled,
        'dropdown-item': !divider && !header,
        active: active,
        'dropdown-header': header,
        'dropdown-divider': divider
      }), cssModule);

      if (Tag === 'button') {
        if (header) {
          Tag = 'h6';
        } else if (divider) {
          Tag = 'div';
        } else if (props.href) {
          Tag = 'a';
        }
      }

      return React__default.createElement(Tag, _extends({
        type: Tag === 'button' && (props.onClick || this.props.toggle) ? 'button' : undefined
      }, props, {
        tabIndex: tabIndex,
        role: role,
        className: classes,
        onClick: this.onClick
      }));
    };

    return DropdownItem;
  }(React__default.Component);

  DropdownItem.propTypes = propTypes$h;
  DropdownItem.defaultProps = defaultProps$f;
  DropdownItem.contextType = DropdownContext;

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      var ownKeys = Object.keys(source);

      if (typeof Object.getOwnPropertySymbols === 'function') {
        ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
      }

      ownKeys.forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    }

    return target;
  }

  var propTypes$i = {
    tag: tagPropType,
    children: propTypes.node.isRequired,
    right: propTypes.bool,
    flip: propTypes.bool,
    modifiers: propTypes.object,
    className: propTypes.string,
    cssModule: propTypes.object,
    persist: propTypes.bool,
    positionFixed: propTypes.bool
  };
  var defaultProps$g = {
    tag: 'div',
    flip: true
  };
  var noFlipModifier = {
    flip: {
      enabled: false
    }
  };
  var directionPositionMap = {
    up: 'top',
    left: 'left',
    right: 'right',
    down: 'bottom'
  };

  var DropdownMenu =
  /*#__PURE__*/
  function (_React$Component) {
    _inheritsLoose(DropdownMenu, _React$Component);

    function DropdownMenu() {
      return _React$Component.apply(this, arguments) || this;
    }

    var _proto = DropdownMenu.prototype;

    _proto.render = function render() {
      var _this = this;

      var _this$props = this.props,
          className = _this$props.className,
          cssModule = _this$props.cssModule,
          right = _this$props.right,
          tag = _this$props.tag,
          flip = _this$props.flip,
          modifiers = _this$props.modifiers,
          persist = _this$props.persist,
          positionFixed = _this$props.positionFixed,
          attrs = _objectWithoutPropertiesLoose(_this$props, ["className", "cssModule", "right", "tag", "flip", "modifiers", "persist", "positionFixed"]);

      var classes = mapToCssModules(classnames(className, 'dropdown-menu', {
        'dropdown-menu-right': right,
        show: this.context.isOpen
      }), cssModule);
      var Tag = tag;

      if (persist || this.context.isOpen && !this.context.inNavbar) {
        var position1 = directionPositionMap[this.context.direction] || 'bottom';
        var position2 = right ? 'end' : 'start';
        var poperPlacement = position1 + "-" + position2;
        var poperModifiers = !flip ? _objectSpread({}, modifiers, {}, noFlipModifier) : modifiers;
        var popperPositionFixed = !!positionFixed;
        return React__default.createElement(reactPopper.Popper, {
          placement: poperPlacement,
          modifiers: poperModifiers,
          positionFixed: popperPositionFixed
        }, function (_ref) {
          var ref = _ref.ref,
              style = _ref.style,
              placement = _ref.placement;
          return React__default.createElement(Tag, _extends({
            tabIndex: "-1",
            role: "menu",
            ref: ref,
            style: style
          }, attrs, {
            "aria-hidden": !_this.context.isOpen,
            className: classes,
            "x-placement": placement
          }));
        });
      }

      return React__default.createElement(Tag, _extends({
        tabIndex: "-1",
        role: "menu"
      }, attrs, {
        "aria-hidden": !this.context.isOpen,
        className: classes,
        "x-placement": attrs.placement
      }));
    };

    return DropdownMenu;
  }(React__default.Component);
  DropdownMenu.propTypes = propTypes$i;
  DropdownMenu.defaultProps = defaultProps$g;
  DropdownMenu.contextType = DropdownContext;

  var propTypes$j = {
    caret: propTypes.bool,
    color: propTypes.string,
    children: propTypes.node,
    className: propTypes.string,
    cssModule: propTypes.object,
    disabled: propTypes.bool,
    onClick: propTypes.func,
    'aria-haspopup': propTypes.bool,
    split: propTypes.bool,
    tag: tagPropType,
    nav: propTypes.bool
  };
  var defaultProps$h = {
    'aria-haspopup': true,
    color: 'secondary'
  };

  var DropdownToggle =
  /*#__PURE__*/
  function (_React$Component) {
    _inheritsLoose(DropdownToggle, _React$Component);

    function DropdownToggle(props) {
      var _this;

      _this = _React$Component.call(this, props) || this;
      _this.onClick = _this.onClick.bind(_assertThisInitialized(_this));
      return _this;
    }

    var _proto = DropdownToggle.prototype;

    _proto.onClick = function onClick(e) {
      if (this.props.disabled || this.context.disabled) {
        e.preventDefault();
        return;
      }

      if (this.props.nav && !this.props.tag) {
        e.preventDefault();
      }

      if (this.props.onClick) {
        this.props.onClick(e);
      }

      this.context.toggle(e);
    };

    _proto.render = function render() {
      var _this2 = this;

      var _this$props = this.props,
          className = _this$props.className,
          color = _this$props.color,
          cssModule = _this$props.cssModule,
          caret = _this$props.caret,
          split = _this$props.split,
          nav = _this$props.nav,
          tag = _this$props.tag,
          props = _objectWithoutPropertiesLoose(_this$props, ["className", "color", "cssModule", "caret", "split", "nav", "tag"]);

      var ariaLabel = props['aria-label'] || 'Toggle Dropdown';
      var classes = mapToCssModules(classnames(className, {
        'dropdown-toggle': caret || split,
        'dropdown-toggle-split': split,
        'nav-link': nav
      }), cssModule);
      var children = props.children || React__default.createElement("span", {
        className: "sr-only"
      }, ariaLabel);
      var Tag;

      if (nav && !tag) {
        Tag = 'a';
        props.href = '#';
      } else if (!tag) {
        Tag = Button;
        props.color = color;
        props.cssModule = cssModule;
      } else {
        Tag = tag;
      }

      if (this.context.inNavbar) {
        return React__default.createElement(Tag, _extends({}, props, {
          className: classes,
          onClick: this.onClick,
          "aria-expanded": this.context.isOpen,
          children: children
        }));
      }

      return React__default.createElement(reactPopper.Reference, null, function (_ref) {
        var _ref2;

        var ref = _ref.ref;
        return React__default.createElement(Tag, _extends({}, props, (_ref2 = {}, _ref2[typeof Tag === 'string' ? 'ref' : 'innerRef'] = ref, _ref2), {
          className: classes,
          onClick: _this2.onClick,
          "aria-expanded": _this2.context.isOpen,
          children: children
        }));
      });
    };

    return DropdownToggle;
  }(React__default.Component);

  DropdownToggle.propTypes = propTypes$j;
  DropdownToggle.defaultProps = defaultProps$h;
  DropdownToggle.contextType = DropdownContext;

  var interopRequireDefault = createCommonjsModule(function (module) {
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        "default": obj
      };
    }

    module.exports = _interopRequireDefault;
  });
  unwrapExports(interopRequireDefault);

  var hasClass_1 = createCommonjsModule(function (module, exports) {

    exports.__esModule = true;
    exports["default"] = hasClass;

    function hasClass(element, className) {
      if (element.classList) return !!className && element.classList.contains(className);else return (" " + (element.className.baseVal || element.className) + " ").indexOf(" " + className + " ") !== -1;
    }

    module.exports = exports["default"];
  });
  unwrapExports(hasClass_1);

  var addClass_1 = createCommonjsModule(function (module, exports) {

    exports.__esModule = true;
    exports["default"] = addClass;

    var _hasClass = interopRequireDefault(hasClass_1);

    function addClass(element, className) {
      if (element.classList) element.classList.add(className);else if (!(0, _hasClass["default"])(element, className)) if (typeof element.className === 'string') element.className = element.className + ' ' + className;else element.setAttribute('class', (element.className && element.className.baseVal || '') + ' ' + className);
    }

    module.exports = exports["default"];
  });
  unwrapExports(addClass_1);

  function replaceClassName(origClass, classToRemove) {
    return origClass.replace(new RegExp('(^|\\s)' + classToRemove + '(?:\\s|$)', 'g'), '$1').replace(/\s+/g, ' ').replace(/^\s*|\s*$/g, '');
  }

  var removeClass = function removeClass(element, className) {
    if (element.classList) element.classList.remove(className);else if (typeof element.className === 'string') element.className = replaceClassName(element.className, className);else element.setAttribute('class', replaceClassName(element.className && element.className.baseVal || '', className));
  };

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  function componentWillMount() {
    // Call this.constructor.gDSFP to support sub-classes.
    var state = this.constructor.getDerivedStateFromProps(this.props, this.state);

    if (state !== null && state !== undefined) {
      this.setState(state);
    }
  }

  function componentWillReceiveProps(nextProps) {
    // Call this.constructor.gDSFP to support sub-classes.
    // Use the setState() updater to ensure state isn't stale in certain edge cases.
    function updater(prevState) {
      var state = this.constructor.getDerivedStateFromProps(nextProps, prevState);
      return state !== null && state !== undefined ? state : null;
    } // Binding "this" is important for shallow renderer support.


    this.setState(updater.bind(this));
  }

  function componentWillUpdate(nextProps, nextState) {
    try {
      var prevProps = this.props;
      var prevState = this.state;
      this.props = nextProps;
      this.state = nextState;
      this.__reactInternalSnapshotFlag = true;
      this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(prevProps, prevState);
    } finally {
      this.props = prevProps;
      this.state = prevState;
    }
  } // React may warn about cWM/cWRP/cWU methods being deprecated.
  // Add a flag to suppress these warnings for this special case.


  componentWillMount.__suppressDeprecationWarning = true;
  componentWillReceiveProps.__suppressDeprecationWarning = true;
  componentWillUpdate.__suppressDeprecationWarning = true;

  function polyfill(Component) {
    var prototype = Component.prototype;

    if (!prototype || !prototype.isReactComponent) {
      throw new Error('Can only polyfill class components');
    }

    if (typeof Component.getDerivedStateFromProps !== 'function' && typeof prototype.getSnapshotBeforeUpdate !== 'function') {
      return Component;
    } // If new component APIs are defined, "unsafe" lifecycles won't be called.
    // Error if any of these lifecycles are present,
    // Because they would work differently between older and newer (16.3+) versions of React.


    var foundWillMountName = null;
    var foundWillReceivePropsName = null;
    var foundWillUpdateName = null;

    if (typeof prototype.componentWillMount === 'function') {
      foundWillMountName = 'componentWillMount';
    } else if (typeof prototype.UNSAFE_componentWillMount === 'function') {
      foundWillMountName = 'UNSAFE_componentWillMount';
    }

    if (typeof prototype.componentWillReceiveProps === 'function') {
      foundWillReceivePropsName = 'componentWillReceiveProps';
    } else if (typeof prototype.UNSAFE_componentWillReceiveProps === 'function') {
      foundWillReceivePropsName = 'UNSAFE_componentWillReceiveProps';
    }

    if (typeof prototype.componentWillUpdate === 'function') {
      foundWillUpdateName = 'componentWillUpdate';
    } else if (typeof prototype.UNSAFE_componentWillUpdate === 'function') {
      foundWillUpdateName = 'UNSAFE_componentWillUpdate';
    }

    if (foundWillMountName !== null || foundWillReceivePropsName !== null || foundWillUpdateName !== null) {
      var componentName = Component.displayName || Component.name;
      var newApiName = typeof Component.getDerivedStateFromProps === 'function' ? 'getDerivedStateFromProps()' : 'getSnapshotBeforeUpdate()';
      throw Error('Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n' + componentName + ' uses ' + newApiName + ' but also contains the following legacy lifecycles:' + (foundWillMountName !== null ? '\n  ' + foundWillMountName : '') + (foundWillReceivePropsName !== null ? '\n  ' + foundWillReceivePropsName : '') + (foundWillUpdateName !== null ? '\n  ' + foundWillUpdateName : '') + '\n\nThe above lifecycles should be removed. Learn more about this warning here:\n' + 'https://fb.me/react-async-component-lifecycle-hooks');
    } // React <= 16.2 does not support static getDerivedStateFromProps.
    // As a workaround, use cWM and cWRP to invoke the new static lifecycle.
    // Newer versions of React will ignore these lifecycles if gDSFP exists.


    if (typeof Component.getDerivedStateFromProps === 'function') {
      prototype.componentWillMount = componentWillMount;
      prototype.componentWillReceiveProps = componentWillReceiveProps;
    } // React <= 16.2 does not support getSnapshotBeforeUpdate.
    // As a workaround, use cWU to invoke the new lifecycle.
    // Newer versions of React will ignore that lifecycle if gSBU exists.


    if (typeof prototype.getSnapshotBeforeUpdate === 'function') {
      if (typeof prototype.componentDidUpdate !== 'function') {
        throw new Error('Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype');
      }

      prototype.componentWillUpdate = componentWillUpdate;
      var componentDidUpdate = prototype.componentDidUpdate;

      prototype.componentDidUpdate = function componentDidUpdatePolyfill(prevProps, prevState, maybeSnapshot) {
        // 16.3+ will not execute our will-update method;
        // It will pass a snapshot value to did-update though.
        // Older versions will require our polyfilled will-update value.
        // We need to handle both cases, but can't just check for the presence of "maybeSnapshot",
        // Because for <= 15.x versions this might be a "prevContext" object.
        // We also can't just check "__reactInternalSnapshot",
        // Because get-snapshot might return a falsy value.
        // So check for the explicit __reactInternalSnapshotFlag flag to determine behavior.
        var snapshot = this.__reactInternalSnapshotFlag ? this.__reactInternalSnapshot : maybeSnapshot;
        componentDidUpdate.call(this, prevProps, prevState, snapshot);
      };
    }

    return Component;
  }

  var reactLifecyclesCompat_es = /*#__PURE__*/Object.freeze({
    __proto__: null,
    polyfill: polyfill
  });

  var Transition_1 = createCommonjsModule(function (module, exports) {

    exports.__esModule = true;
    exports["default"] = exports.EXITING = exports.ENTERED = exports.ENTERING = exports.EXITED = exports.UNMOUNTED = void 0;

    var PropTypes = _interopRequireWildcard(propTypes);

    var _react = _interopRequireDefault(React__default);

    var _reactDom = _interopRequireDefault(ReactDOM);

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        "default": obj
      };
    }

    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) {
        return obj;
      } else {
        var newObj = {};

        if (obj != null) {
          for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
              var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};

              if (desc.get || desc.set) {
                Object.defineProperty(newObj, key, desc);
              } else {
                newObj[key] = obj[key];
              }
            }
          }
        }

        newObj["default"] = obj;
        return newObj;
      }
    }

    function _objectWithoutPropertiesLoose(source, excluded) {
      if (source == null) return {};
      var target = {};
      var sourceKeys = Object.keys(source);
      var key, i;

      for (i = 0; i < sourceKeys.length; i++) {
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
      }

      return target;
    }

    function _inheritsLoose(subClass, superClass) {
      subClass.prototype = Object.create(superClass.prototype);
      subClass.prototype.constructor = subClass;
      subClass.__proto__ = superClass;
    }

    var UNMOUNTED = 'unmounted';
    exports.UNMOUNTED = UNMOUNTED;
    var EXITED = 'exited';
    exports.EXITED = EXITED;
    var ENTERING = 'entering';
    exports.ENTERING = ENTERING;
    var ENTERED = 'entered';
    exports.ENTERED = ENTERED;
    var EXITING = 'exiting';
    /**
     * The Transition component lets you describe a transition from one component
     * state to another _over time_ with a simple declarative API. Most commonly
     * it's used to animate the mounting and unmounting of a component, but can also
     * be used to describe in-place transition states as well.
     *
     * ---
     *
     * **Note**: `Transition` is a platform-agnostic base component. If you're using
     * transitions in CSS, you'll probably want to use
     * [`CSSTransition`](https://reactcommunity.org/react-transition-group/css-transition)
     * instead. It inherits all the features of `Transition`, but contains
     * additional features necessary to play nice with CSS transitions (hence the
     * name of the component).
     *
     * ---
     *
     * By default the `Transition` component does not alter the behavior of the
     * component it renders, it only tracks "enter" and "exit" states for the
     * components. It's up to you to give meaning and effect to those states. For
     * example we can add styles to a component when it enters or exits:
     *
     * ```jsx
     * import { Transition } from 'react-transition-group';
     *
     * const duration = 300;
     *
     * const defaultStyle = {
     *   transition: `opacity ${duration}ms ease-in-out`,
     *   opacity: 0,
     * }
     *
     * const transitionStyles = {
     *   entering: { opacity: 0 },
     *   entered:  { opacity: 1 },
     * };
     *
     * const Fade = ({ in: inProp }) => (
     *   <Transition in={inProp} timeout={duration}>
     *     {state => (
     *       <div style={{
     *         ...defaultStyle,
     *         ...transitionStyles[state]
     *       }}>
     *         I'm a fade Transition!
     *       </div>
     *     )}
     *   </Transition>
     * );
     * ```
     *
     * There are 4 main states a Transition can be in:
     *  - `'entering'`
     *  - `'entered'`
     *  - `'exiting'`
     *  - `'exited'`
     *
     * Transition state is toggled via the `in` prop. When `true` the component
     * begins the "Enter" stage. During this stage, the component will shift from
     * its current transition state, to `'entering'` for the duration of the
     * transition and then to the `'entered'` stage once it's complete. Let's take
     * the following example (we'll use the
     * [useState](https://reactjs.org/docs/hooks-reference.html#usestate) hook):
     *
     * ```jsx
     * function App() {
     *   const [inProp, setInProp] = useState(false);
     *   return (
     *     <div>
     *       <Transition in={inProp} timeout={500}>
     *         {state => (
     *           // ...
     *         )}
     *       </Transition>
     *       <button onClick={() => setInProp(true)}>
     *         Click to Enter
     *       </button>
     *     </div>
     *   );
     * }
     * ```
     *
     * When the button is clicked the component will shift to the `'entering'` state
     * and stay there for 500ms (the value of `timeout`) before it finally switches
     * to `'entered'`.
     *
     * When `in` is `false` the same thing happens except the state moves from
     * `'exiting'` to `'exited'`.
     */

    exports.EXITING = EXITING;

    var Transition =
    /*#__PURE__*/
    function (_React$Component) {
      _inheritsLoose(Transition, _React$Component);

      function Transition(props, context) {
        var _this;

        _this = _React$Component.call(this, props, context) || this;
        var parentGroup = context.transitionGroup; // In the context of a TransitionGroup all enters are really appears

        var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
        var initialStatus;
        _this.appearStatus = null;

        if (props["in"]) {
          if (appear) {
            initialStatus = EXITED;
            _this.appearStatus = ENTERING;
          } else {
            initialStatus = ENTERED;
          }
        } else {
          if (props.unmountOnExit || props.mountOnEnter) {
            initialStatus = UNMOUNTED;
          } else {
            initialStatus = EXITED;
          }
        }

        _this.state = {
          status: initialStatus
        };
        _this.nextCallback = null;
        return _this;
      }

      var _proto = Transition.prototype;

      _proto.getChildContext = function getChildContext() {
        return {
          transitionGroup: null // allows for nested Transitions

        };
      };

      Transition.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
        var nextIn = _ref["in"];

        if (nextIn && prevState.status === UNMOUNTED) {
          return {
            status: EXITED
          };
        }

        return null;
      }; // getSnapshotBeforeUpdate(prevProps) {
      //   let nextStatus = null
      //   if (prevProps !== this.props) {
      //     const { status } = this.state
      //     if (this.props.in) {
      //       if (status !== ENTERING && status !== ENTERED) {
      //         nextStatus = ENTERING
      //       }
      //     } else {
      //       if (status === ENTERING || status === ENTERED) {
      //         nextStatus = EXITING
      //       }
      //     }
      //   }
      //   return { nextStatus }
      // }


      _proto.componentDidMount = function componentDidMount() {
        this.updateStatus(true, this.appearStatus);
      };

      _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
        var nextStatus = null;

        if (prevProps !== this.props) {
          var status = this.state.status;

          if (this.props["in"]) {
            if (status !== ENTERING && status !== ENTERED) {
              nextStatus = ENTERING;
            }
          } else {
            if (status === ENTERING || status === ENTERED) {
              nextStatus = EXITING;
            }
          }
        }

        this.updateStatus(false, nextStatus);
      };

      _proto.componentWillUnmount = function componentWillUnmount() {
        this.cancelNextCallback();
      };

      _proto.getTimeouts = function getTimeouts() {
        var timeout = this.props.timeout;
        var exit, enter, appear;
        exit = enter = appear = timeout;

        if (timeout != null && typeof timeout !== 'number') {
          exit = timeout.exit;
          enter = timeout.enter; // TODO: remove fallback for next major

          appear = timeout.appear !== undefined ? timeout.appear : enter;
        }

        return {
          exit: exit,
          enter: enter,
          appear: appear
        };
      };

      _proto.updateStatus = function updateStatus(mounting, nextStatus) {
        if (mounting === void 0) {
          mounting = false;
        }

        if (nextStatus !== null) {
          // nextStatus will always be ENTERING or EXITING.
          this.cancelNextCallback();

          var node = _reactDom["default"].findDOMNode(this);

          if (nextStatus === ENTERING) {
            this.performEnter(node, mounting);
          } else {
            this.performExit(node);
          }
        } else if (this.props.unmountOnExit && this.state.status === EXITED) {
          this.setState({
            status: UNMOUNTED
          });
        }
      };

      _proto.performEnter = function performEnter(node, mounting) {
        var _this2 = this;

        var enter = this.props.enter;
        var appearing = this.context.transitionGroup ? this.context.transitionGroup.isMounting : mounting;
        var timeouts = this.getTimeouts();
        var enterTimeout = appearing ? timeouts.appear : timeouts.enter; // no enter animation skip right to ENTERED
        // if we are mounting and running this it means appear _must_ be set

        if (!mounting && !enter) {
          this.safeSetState({
            status: ENTERED
          }, function () {
            _this2.props.onEntered(node);
          });
          return;
        }

        this.props.onEnter(node, appearing);
        this.safeSetState({
          status: ENTERING
        }, function () {
          _this2.props.onEntering(node, appearing);

          _this2.onTransitionEnd(node, enterTimeout, function () {
            _this2.safeSetState({
              status: ENTERED
            }, function () {
              _this2.props.onEntered(node, appearing);
            });
          });
        });
      };

      _proto.performExit = function performExit(node) {
        var _this3 = this;

        var exit = this.props.exit;
        var timeouts = this.getTimeouts(); // no exit animation skip right to EXITED

        if (!exit) {
          this.safeSetState({
            status: EXITED
          }, function () {
            _this3.props.onExited(node);
          });
          return;
        }

        this.props.onExit(node);
        this.safeSetState({
          status: EXITING
        }, function () {
          _this3.props.onExiting(node);

          _this3.onTransitionEnd(node, timeouts.exit, function () {
            _this3.safeSetState({
              status: EXITED
            }, function () {
              _this3.props.onExited(node);
            });
          });
        });
      };

      _proto.cancelNextCallback = function cancelNextCallback() {
        if (this.nextCallback !== null) {
          this.nextCallback.cancel();
          this.nextCallback = null;
        }
      };

      _proto.safeSetState = function safeSetState(nextState, callback) {
        // This shouldn't be necessary, but there are weird race conditions with
        // setState callbacks and unmounting in testing, so always make sure that
        // we can cancel any pending setState callbacks after we unmount.
        callback = this.setNextCallback(callback);
        this.setState(nextState, callback);
      };

      _proto.setNextCallback = function setNextCallback(callback) {
        var _this4 = this;

        var active = true;

        this.nextCallback = function (event) {
          if (active) {
            active = false;
            _this4.nextCallback = null;
            callback(event);
          }
        };

        this.nextCallback.cancel = function () {
          active = false;
        };

        return this.nextCallback;
      };

      _proto.onTransitionEnd = function onTransitionEnd(node, timeout, handler) {
        this.setNextCallback(handler);
        var doesNotHaveTimeoutOrListener = timeout == null && !this.props.addEndListener;

        if (!node || doesNotHaveTimeoutOrListener) {
          setTimeout(this.nextCallback, 0);
          return;
        }

        if (this.props.addEndListener) {
          this.props.addEndListener(node, this.nextCallback);
        }

        if (timeout != null) {
          setTimeout(this.nextCallback, timeout);
        }
      };

      _proto.render = function render() {
        var status = this.state.status;

        if (status === UNMOUNTED) {
          return null;
        }

        var _this$props = this.props,
            children = _this$props.children,
            childProps = _objectWithoutPropertiesLoose(_this$props, ["children"]); // filter props for Transtition


        delete childProps["in"];
        delete childProps.mountOnEnter;
        delete childProps.unmountOnExit;
        delete childProps.appear;
        delete childProps.enter;
        delete childProps.exit;
        delete childProps.timeout;
        delete childProps.addEndListener;
        delete childProps.onEnter;
        delete childProps.onEntering;
        delete childProps.onEntered;
        delete childProps.onExit;
        delete childProps.onExiting;
        delete childProps.onExited;

        if (typeof children === 'function') {
          return children(status, childProps);
        }

        var child = _react["default"].Children.only(children);

        return _react["default"].cloneElement(child, childProps);
      };

      return Transition;
    }(_react["default"].Component);

    Transition.contextTypes = {
      transitionGroup: PropTypes.object
    };
    Transition.childContextTypes = {
      transitionGroup: function transitionGroup() {}
    };
    Transition.propTypes =  {};

    function noop() {}

    Transition.defaultProps = {
      "in": false,
      mountOnEnter: false,
      unmountOnExit: false,
      appear: false,
      enter: true,
      exit: true,
      onEnter: noop,
      onEntering: noop,
      onEntered: noop,
      onExit: noop,
      onExiting: noop,
      onExited: noop
    };
    Transition.UNMOUNTED = 0;
    Transition.EXITED = 1;
    Transition.ENTERING = 2;
    Transition.ENTERED = 3;
    Transition.EXITING = 4;

    var _default = (0, reactLifecyclesCompat_es.polyfill)(Transition);

    exports["default"] = _default;
  });
  unwrapExports(Transition_1);
  var Transition_2 = Transition_1.EXITING;
  var Transition_3 = Transition_1.ENTERED;
  var Transition_4 = Transition_1.ENTERING;
  var Transition_5 = Transition_1.EXITED;
  var Transition_6 = Transition_1.UNMOUNTED;

  var CSSTransition_1 = createCommonjsModule(function (module, exports) {

    exports.__esModule = true;
    exports["default"] = void 0;

    var PropTypes = _interopRequireWildcard(propTypes);

    var _addClass = _interopRequireDefault(addClass_1);

    var _removeClass = _interopRequireDefault(removeClass);

    var _react = _interopRequireDefault(React__default);

    var _Transition = _interopRequireDefault(Transition_1);

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        "default": obj
      };
    }

    function _interopRequireWildcard(obj) {
      if (obj && obj.__esModule) {
        return obj;
      } else {
        var newObj = {};

        if (obj != null) {
          for (var key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
              var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};

              if (desc.get || desc.set) {
                Object.defineProperty(newObj, key, desc);
              } else {
                newObj[key] = obj[key];
              }
            }
          }
        }

        newObj["default"] = obj;
        return newObj;
      }
    }

    function _extends() {
      _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];

          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }

        return target;
      };

      return _extends.apply(this, arguments);
    }

    function _inheritsLoose(subClass, superClass) {
      subClass.prototype = Object.create(superClass.prototype);
      subClass.prototype.constructor = subClass;
      subClass.__proto__ = superClass;
    }

    var addClass = function addClass(node, classes) {
      return node && classes && classes.split(' ').forEach(function (c) {
        return (0, _addClass["default"])(node, c);
      });
    };

    var removeClass$1 = function removeClass(node, classes) {
      return node && classes && classes.split(' ').forEach(function (c) {
        return (0, _removeClass["default"])(node, c);
      });
    };
    /**
     * A transition component inspired by the excellent
     * [ng-animate](http://www.nganimate.org/) library, you should use it if you're
     * using CSS transitions or animations. It's built upon the
     * [`Transition`](https://reactcommunity.org/react-transition-group/transition)
     * component, so it inherits all of its props.
     *
     * `CSSTransition` applies a pair of class names during the `appear`, `enter`,
     * and `exit` states of the transition. The first class is applied and then a
     * second `*-active` class in order to activate the CSSS transition. After the
     * transition, matching `*-done` class names are applied to persist the
     * transition state.
     *
     * ```jsx
     * function App() {
     *   const [inProp, setInProp] = useState(false);
     *   return (
     *     <div>
     *       <CSSTransition in={inProp} timeout={200} classNames="my-node">
     *         <div>
     *           {"I'll receive my-node-* classes"}
     *         </div>
     *       </CSSTransition>
     *       <button type="button" onClick={() => setInProp(true)}>
     *         Click to Enter
     *       </button>
     *     </div>
     *   );
     * }
     * ```
     *
     * When the `in` prop is set to `true`, the child component will first receive
     * the class `example-enter`, then the `example-enter-active` will be added in
     * the next tick. `CSSTransition` [forces a
     * reflow](https://github.com/reactjs/react-transition-group/blob/5007303e729a74be66a21c3e2205e4916821524b/src/CSSTransition.js#L208-L215)
     * between before adding the `example-enter-active`. This is an important trick
     * because it allows us to transition between `example-enter` and
     * `example-enter-active` even though they were added immediately one after
     * another. Most notably, this is what makes it possible for us to animate
     * _appearance_.
     *
     * ```css
     * .my-node-enter {
     *   opacity: 0;
     * }
     * .my-node-enter-active {
     *   opacity: 1;
     *   transition: opacity 200ms;
     * }
     * .my-node-exit {
     *   opacity: 1;
     * }
     * .my-node-exit-active {
     *   opacity: 0;
     *   transition: opacity: 200ms;
     * }
     * ```
     *
     * `*-active` classes represent which styles you want to animate **to**.
     */


    var CSSTransition =
    /*#__PURE__*/
    function (_React$Component) {
      _inheritsLoose(CSSTransition, _React$Component);

      function CSSTransition() {
        var _this;

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

        _this.onEnter = function (node, appearing) {
          var _this$getClassNames = _this.getClassNames(appearing ? 'appear' : 'enter'),
              className = _this$getClassNames.className;

          _this.removeClasses(node, 'exit');

          addClass(node, className);

          if (_this.props.onEnter) {
            _this.props.onEnter(node, appearing);
          }
        };

        _this.onEntering = function (node, appearing) {
          var _this$getClassNames2 = _this.getClassNames(appearing ? 'appear' : 'enter'),
              activeClassName = _this$getClassNames2.activeClassName;

          _this.reflowAndAddClass(node, activeClassName);

          if (_this.props.onEntering) {
            _this.props.onEntering(node, appearing);
          }
        };

        _this.onEntered = function (node, appearing) {
          var appearClassName = _this.getClassNames('appear').doneClassName;

          var enterClassName = _this.getClassNames('enter').doneClassName;

          var doneClassName = appearing ? appearClassName + " " + enterClassName : enterClassName;

          _this.removeClasses(node, appearing ? 'appear' : 'enter');

          addClass(node, doneClassName);

          if (_this.props.onEntered) {
            _this.props.onEntered(node, appearing);
          }
        };

        _this.onExit = function (node) {
          var _this$getClassNames3 = _this.getClassNames('exit'),
              className = _this$getClassNames3.className;

          _this.removeClasses(node, 'appear');

          _this.removeClasses(node, 'enter');

          addClass(node, className);

          if (_this.props.onExit) {
            _this.props.onExit(node);
          }
        };

        _this.onExiting = function (node) {
          var _this$getClassNames4 = _this.getClassNames('exit'),
              activeClassName = _this$getClassNames4.activeClassName;

          _this.reflowAndAddClass(node, activeClassName);

          if (_this.props.onExiting) {
            _this.props.onExiting(node);
          }
        };

        _this.onExited = function (node) {
          var _this$getClassNames5 = _this.getClassNames('exit'),
              doneClassName = _this$getClassNames5.doneClassName;

          _this.removeClasses(node, 'exit');

          addClass(node, doneClassName);

          if (_this.props.onExited) {
            _this.props.onExited(node);
          }
        };

        _this.getClassNames = function (type) {
          var classNames = _this.props.classNames;
          var isStringClassNames = typeof classNames === 'string';
          var prefix = isStringClassNames && classNames ? classNames + '-' : '';
          var className = isStringClassNames ? prefix + type : classNames[type];
          var activeClassName = isStringClassNames ? className + '-active' : classNames[type + 'Active'];
          var doneClassName = isStringClassNames ? className + '-done' : classNames[type + 'Done'];
          return {
            className: className,
            activeClassName: activeClassName,
            doneClassName: doneClassName
          };
        };

        return _this;
      }

      var _proto = CSSTransition.prototype;

      _proto.removeClasses = function removeClasses(node, type) {
        var _this$getClassNames6 = this.getClassNames(type),
            className = _this$getClassNames6.className,
            activeClassName = _this$getClassNames6.activeClassName,
            doneClassName = _this$getClassNames6.doneClassName;

        className && removeClass$1(node, className);
        activeClassName && removeClass$1(node, activeClassName);
        doneClassName && removeClass$1(node, doneClassName);
      };

      _proto.reflowAndAddClass = function reflowAndAddClass(node, className) {
        // This is for to force a repaint,
        // which is necessary in order to transition styles when adding a class name.
        if (className) {
          /* eslint-disable no-unused-expressions */
          node && node.scrollTop;
          /* eslint-enable no-unused-expressions */

          addClass(node, className);
        }
      };

      _proto.render = function render() {
        var props = _extends({}, this.props);

        delete props.classNames;
        return _react["default"].createElement(_Transition["default"], _extends({}, props, {
          onEnter: this.onEnter,
          onEntered: this.onEntered,
          onEntering: this.onEntering,
          onExit: this.onExit,
          onExiting: this.onExiting,
          onExited: this.onExited
        }));
      };

      return CSSTransition;
    }(_react["default"].Component);

    CSSTransition.defaultProps = {
      classNames: ''
    };
    CSSTransition.propTypes =  {};
    var _default = CSSTransition;
    exports["default"] = _default;
    module.exports = exports["default"];
  });
  unwrapExports(CSSTransition_1);

  var ChildMapping = createCommonjsModule(function (module, exports) {

    exports.__esModule = true;
    exports.getChildMapping = getChildMapping;
    exports.mergeChildMappings = mergeChildMappings;
    exports.getInitialChildMapping = getInitialChildMapping;
    exports.getNextChildMapping = getNextChildMapping;
    /**
     * Given `this.props.children`, return an object mapping key to child.
     *
     * @param {*} children `this.props.children`
     * @return {object} Mapping of key to child
     */

    function getChildMapping(children, mapFn) {
      var mapper = function mapper(child) {
        return mapFn && (0, React__default.isValidElement)(child) ? mapFn(child) : child;
      };

      var result = Object.create(null);
      if (children) React__default.Children.map(children, function (c) {
        return c;
      }).forEach(function (child) {
        // run the map function here instead so that the key is the computed one
        result[child.key] = mapper(child);
      });
      return result;
    }
    /**
     * When you're adding or removing children some may be added or removed in the
     * same render pass. We want to show *both* since we want to simultaneously
     * animate elements in and out. This function takes a previous set of keys
     * and a new set of keys and merges them with its best guess of the correct
     * ordering. In the future we may expose some of the utilities in
     * ReactMultiChild to make this easy, but for now React itself does not
     * directly have this concept of the union of prevChildren and nextChildren
     * so we implement it here.
     *
     * @param {object} prev prev children as returned from
     * `ReactTransitionChildMapping.getChildMapping()`.
     * @param {object} next next children as returned from
     * `ReactTransitionChildMapping.getChildMapping()`.
     * @return {object} a key set that contains all keys in `prev` and all keys
     * in `next` in a reasonable order.
     */


    function mergeChildMappings(prev, next) {
      prev = prev || {};
      next = next || {};

      function getValueForKey(key) {
        return key in next ? next[key] : prev[key];
      } // For each key of `next`, the list of keys to insert before that key in
      // the combined list


      var nextKeysPending = Object.create(null);
      var pendingKeys = [];

      for (var prevKey in prev) {
        if (prevKey in next) {
          if (pendingKeys.length) {
            nextKeysPending[prevKey] = pendingKeys;
            pendingKeys = [];
          }
        } else {
          pendingKeys.push(prevKey);
        }
      }

      var i;
      var childMapping = {};

      for (var nextKey in next) {
        if (nextKeysPending[nextKey]) {
          for (i = 0; i < nextKeysPending[nextKey].length; i++) {
            var pendingNextKey = nextKeysPending[nextKey][i];
            childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
          }
        }

        childMapping[nextKey] = getValueForKey(nextKey);
      } // Finally, add the keys which didn't appear before any key in `next`


      for (i = 0; i < pendingKeys.length; i++) {
        childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
      }

      return childMapping;
    }

    function getProp(child, prop, props) {
      return props[prop] != null ? props[prop] : child.props[prop];
    }

    function getInitialChildMapping(props, onExited) {
      return getChildMapping(props.children, function (child) {
        return (0, React__default.cloneElement)(child, {
          onExited: onExited.bind(null, child),
          "in": true,
          appear: getProp(child, 'appear', props),
          enter: getProp(child, 'enter', props),
          exit: getProp(child, 'exit', props)
        });
      });
    }

    function getNextChildMapping(nextProps, prevChildMapping, onExited) {
      var nextChildMapping = getChildMapping(nextProps.children);
      var children = mergeChildMappings(prevChildMapping, nextChildMapping);
      Object.keys(children).forEach(function (key) {
        var child = children[key];
        if (!(0, React__default.isValidElement)(child)) return;
        var hasPrev = key in prevChildMapping;
        var hasNext = key in nextChildMapping;
        var prevChild = prevChildMapping[key];
        var isLeaving = (0, React__default.isValidElement)(prevChild) && !prevChild.props["in"]; // item is new (entering)

        if (hasNext && (!hasPrev || isLeaving)) {
          // console.log('entering', key)
          children[key] = (0, React__default.cloneElement)(child, {
            onExited: onExited.bind(null, child),
            "in": true,
            exit: getProp(child, 'exit', nextProps),
            enter: getProp(child, 'enter', nextProps)
          });
        } else if (!hasNext && hasPrev && !isLeaving) {
          // item is old (exiting)
          // console.log('leaving', key)
          children[key] = (0, React__default.cloneElement)(child, {
            "in": false
          });
        } else if (hasNext && hasPrev && (0, React__default.isValidElement)(prevChild)) {
          // item hasn't changed transition states
          // copy over the last transition props;
          // console.log('unchanged', key)
          children[key] = (0, React__default.cloneElement)(child, {
            onExited: onExited.bind(null, child),
            "in": prevChild.props["in"],
            exit: getProp(child, 'exit', nextProps),
            enter: getProp(child, 'enter', nextProps)
          });
        }
      });
      return children;
    }
  });
  unwrapExports(ChildMapping);
  var ChildMapping_1 = ChildMapping.getChildMapping;
  var ChildMapping_2 = ChildMapping.mergeChildMappings;
  var ChildMapping_3 = ChildMapping.getInitialChildMapping;
  var ChildMapping_4 = ChildMapping.getNextChildMapping;

  var TransitionGroup_1 = createCommonjsModule(function (module, exports) {

    exports.__esModule = true;
    exports["default"] = void 0;

    var _propTypes = _interopRequireDefault(propTypes);

    var _react = _interopRequireDefault(React__default);

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        "default": obj
      };
    }

    function _objectWithoutPropertiesLoose(source, excluded) {
      if (source == null) return {};
      var target = {};
      var sourceKeys = Object.keys(source);
      var key, i;

      for (i = 0; i < sourceKeys.length; i++) {
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
      }

      return target;
    }

    function _extends() {
      _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];

          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }

        return target;
      };

      return _extends.apply(this, arguments);
    }

    function _inheritsLoose(subClass, superClass) {
      subClass.prototype = Object.create(superClass.prototype);
      subClass.prototype.constructor = subClass;
      subClass.__proto__ = superClass;
    }

    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }

      return self;
    }

    var values = Object.values || function (obj) {
      return Object.keys(obj).map(function (k) {
        return obj[k];
      });
    };

    var defaultProps = {
      component: 'div',
      childFactory: function childFactory(child) {
        return child;
      }
      /**
       * The `<TransitionGroup>` component manages a set of transition components
       * (`<Transition>` and `<CSSTransition>`) in a list. Like with the transition
       * components, `<TransitionGroup>` is a state machine for managing the mounting
       * and unmounting of components over time.
       *
       * Consider the example below. As items are removed or added to the TodoList the
       * `in` prop is toggled automatically by the `<TransitionGroup>`.
       *
       * Note that `<TransitionGroup>`  does not define any animation behavior!
       * Exactly _how_ a list item animates is up to the individual transition
       * component. This means you can mix and match animations across different list
       * items.
       */

    };

    var TransitionGroup =
    /*#__PURE__*/
    function (_React$Component) {
      _inheritsLoose(TransitionGroup, _React$Component);

      function TransitionGroup(props, context) {
        var _this;

        _this = _React$Component.call(this, props, context) || this;

        var handleExited = _this.handleExited.bind(_assertThisInitialized(_assertThisInitialized(_this))); // Initial children should all be entering, dependent on appear


        _this.state = {
          handleExited: handleExited,
          firstRender: true
        };
        return _this;
      }

      var _proto = TransitionGroup.prototype;

      _proto.getChildContext = function getChildContext() {
        return {
          transitionGroup: {
            isMounting: !this.appeared
          }
        };
      };

      _proto.componentDidMount = function componentDidMount() {
        this.appeared = true;
        this.mounted = true;
      };

      _proto.componentWillUnmount = function componentWillUnmount() {
        this.mounted = false;
      };

      TransitionGroup.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, _ref) {
        var prevChildMapping = _ref.children,
            handleExited = _ref.handleExited,
            firstRender = _ref.firstRender;
        return {
          children: firstRender ? (0, ChildMapping.getInitialChildMapping)(nextProps, handleExited) : (0, ChildMapping.getNextChildMapping)(nextProps, prevChildMapping, handleExited),
          firstRender: false
        };
      };

      _proto.handleExited = function handleExited(child, node) {
        var currentChildMapping = (0, ChildMapping.getChildMapping)(this.props.children);
        if (child.key in currentChildMapping) return;

        if (child.props.onExited) {
          child.props.onExited(node);
        }

        if (this.mounted) {
          this.setState(function (state) {
            var children = _extends({}, state.children);

            delete children[child.key];
            return {
              children: children
            };
          });
        }
      };

      _proto.render = function render() {
        var _this$props = this.props,
            Component = _this$props.component,
            childFactory = _this$props.childFactory,
            props = _objectWithoutPropertiesLoose(_this$props, ["component", "childFactory"]);

        var children = values(this.state.children).map(childFactory);
        delete props.appear;
        delete props.enter;
        delete props.exit;

        if (Component === null) {
          return children;
        }

        return _react["default"].createElement(Component, props, children);
      };

      return TransitionGroup;
    }(_react["default"].Component);

    TransitionGroup.childContextTypes = {
      transitionGroup: _propTypes["default"].object.isRequired
    };
    TransitionGroup.propTypes =  {};
    TransitionGroup.defaultProps = defaultProps;

    var _default = (0, reactLifecyclesCompat_es.polyfill)(TransitionGroup);

    exports["default"] = _default;
    module.exports = exports["default"];
  });
  unwrapExports(TransitionGroup_1);

  var ReplaceTransition_1 = createCommonjsModule(function (module, exports) {

    exports.__esModule = true;
    exports["default"] = void 0;

    var _propTypes = _interopRequireDefault(propTypes);

    var _react = _interopRequireDefault(React__default);

    var _TransitionGroup = _interopRequireDefault(TransitionGroup_1);

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        "default": obj
      };
    }

    function _objectWithoutPropertiesLoose(source, excluded) {
      if (source == null) return {};
      var target = {};
      var sourceKeys = Object.keys(source);
      var key, i;

      for (i = 0; i < sourceKeys.length; i++) {
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
      }

      return target;
    }

    function _inheritsLoose(subClass, superClass) {
      subClass.prototype = Object.create(superClass.prototype);
      subClass.prototype.constructor = subClass;
      subClass.__proto__ = superClass;
    }
    /**
     * The `<ReplaceTransition>` component is a specialized `Transition` component
     * that animates between two children.
     *
     * ```jsx
     * <ReplaceTransition in>
     *   <Fade><div>I appear first</div></Fade>
     *   <Fade><div>I replace the above</div></Fade>
     * </ReplaceTransition>
     * ```
     */


    var ReplaceTransition =
    /*#__PURE__*/
    function (_React$Component) {
      _inheritsLoose(ReplaceTransition, _React$Component);

      function ReplaceTransition() {
        var _this;

        for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
          _args[_key] = arguments[_key];
        }

        _this = _React$Component.call.apply(_React$Component, [this].concat(_args)) || this;

        _this.handleEnter = function () {
          for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }

          return _this.handleLifecycle('onEnter', 0, args);
        };

        _this.handleEntering = function () {
          for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
            args[_key3] = arguments[_key3];
          }

          return _this.handleLifecycle('onEntering', 0, args);
        };

        _this.handleEntered = function () {
          for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
            args[_key4] = arguments[_key4];
          }

          return _this.handleLifecycle('onEntered', 0, args);
        };

        _this.handleExit = function () {
          for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
            args[_key5] = arguments[_key5];
          }

          return _this.handleLifecycle('onExit', 1, args);
        };

        _this.handleExiting = function () {
          for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
            args[_key6] = arguments[_key6];
          }

          return _this.handleLifecycle('onExiting', 1, args);
        };

        _this.handleExited = function () {
          for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
            args[_key7] = arguments[_key7];
          }

          return _this.handleLifecycle('onExited', 1, args);
        };

        return _this;
      }

      var _proto = ReplaceTransition.prototype;

      _proto.handleLifecycle = function handleLifecycle(handler, idx, originalArgs) {
        var _child$props;

        var children = this.props.children;

        var child = _react["default"].Children.toArray(children)[idx];

        if (child.props[handler]) (_child$props = child.props)[handler].apply(_child$props, originalArgs);
        if (this.props[handler]) this.props[handler]((0, ReactDOM.findDOMNode)(this));
      };

      _proto.render = function render() {
        var _this$props = this.props,
            children = _this$props.children,
            inProp = _this$props["in"],
            props = _objectWithoutPropertiesLoose(_this$props, ["children", "in"]);

        var _React$Children$toArr = _react["default"].Children.toArray(children),
            first = _React$Children$toArr[0],
            second = _React$Children$toArr[1];

        delete props.onEnter;
        delete props.onEntering;
        delete props.onEntered;
        delete props.onExit;
        delete props.onExiting;
        delete props.onExited;
        return _react["default"].createElement(_TransitionGroup["default"], props, inProp ? _react["default"].cloneElement(first, {
          key: 'first',
          onEnter: this.handleEnter,
          onEntering: this.handleEntering,
          onEntered: this.handleEntered
        }) : _react["default"].cloneElement(second, {
          key: 'second',
          onEnter: this.handleExit,
          onEntering: this.handleExiting,
          onEntered: this.handleExited
        }));
      };

      return ReplaceTransition;
    }(_react["default"].Component);

    ReplaceTransition.propTypes =  {};
    var _default = ReplaceTransition;
    exports["default"] = _default;
    module.exports = exports["default"];
  });
  unwrapExports(ReplaceTransition_1);

  var reactTransitionGroup = createCommonjsModule(function (module) {

    var _CSSTransition = _interopRequireDefault(CSSTransition_1);

    var _ReplaceTransition = _interopRequireDefault(ReplaceTransition_1);

    var _TransitionGroup = _interopRequireDefault(TransitionGroup_1);

    var _Transition = _interopRequireDefault(Transition_1);

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        "default": obj
      };
    }

    module.exports = {
      Transition: _Transition["default"],
      TransitionGroup: _TransitionGroup["default"],
      ReplaceTransition: _ReplaceTransition["default"],
      CSSTransition: _CSSTransition["default"]
    };
  });
  unwrapExports(reactTransitionGroup);
  var reactTransitionGroup_1 = reactTransitionGroup.Transition;
  var reactTransitionGroup_2 = reactTransitionGroup.TransitionGroup;
  var reactTransitionGroup_3 = reactTransitionGroup.ReplaceTransition;
  var reactTransitionGroup_4 = reactTransitionGroup.CSSTransition;

  var propTypes$k = _objectSpread({}, reactTransitionGroup_1.propTypes, {
    children: propTypes.oneOfType([propTypes.arrayOf(propTypes.node), propTypes.node]),
    tag: tagPropType,
    baseClass: propTypes.string,
    baseClassActive: propTypes.string,
    className: propTypes.string,
    cssModule: propTypes.object,
    innerRef: propTypes.oneOfType([propTypes.object, propTypes.string, propTypes.func])
  });

  var defaultProps$i = _objectSpread({}, reactTransitionGroup_1.defaultProps, {
    tag: 'div',
    baseClass: 'fade',
    baseClassActive: 'show',
    timeout: TransitionTimeouts.Fade,
    appear: true,
    enter: true,
    exit: true,
    "in": true
  });

  function Fade(props) {
    var Tag = props.tag,
        baseClass = props.baseClass,
        baseClassActive = props.baseClassActive,
        className = props.className,
        cssModule = props.cssModule,
        children = props.children,
        innerRef = props.innerRef,
        otherProps = _objectWithoutPropertiesLoose(props, ["tag", "baseClass", "baseClassActive", "className", "cssModule", "children", "innerRef"]);

    var transitionProps = pick(otherProps, TransitionPropTypeKeys);
    var childProps = omit(otherProps, TransitionPropTypeKeys);
    return React__default.createElement(reactTransitionGroup_1, transitionProps, function (status) {
      var isActive = status === 'entered';
      var classes = mapToCssModules(classnames(className, baseClass, isActive && baseClassActive), cssModule);
      return React__default.createElement(Tag, _extends({
        className: classes
      }, childProps, {
        ref: innerRef
      }), children);
    });
  }

  Fade.propTypes = propTypes$k;
  Fade.defaultProps = defaultProps$i;

  var propTypes$l = {
    color: propTypes.string,
    pill: propTypes.bool,
    tag: tagPropType,
    innerRef: propTypes.oneOfType([propTypes.object, propTypes.func, propTypes.string]),
    children: propTypes.node,
    className: propTypes.string,
    cssModule: propTypes.object
  };
  var defaultProps$j = {
    color: 'secondary',
    pill: false,
    tag: 'span'
  };

  var Badge = function Badge(props) {
    var className = props.className,
        cssModule = props.cssModule,
        color = props.color,
        innerRef = props.innerRef,
        pill = props.pill,
        Tag = props.tag,
        attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "color", "innerRef", "pill", "tag"]);

    var classes = mapToCssModules(classnames(className, 'badge', 'badge-' + color, pill ? 'badge-pill' : false), cssModule);

    if (attributes.href && Tag === 'span') {
      Tag = 'a';
    }

    return React__default.createElement(Tag, _extends({}, attributes, {
      className: classes,
      ref: innerRef
    }));
  };

  Badge.propTypes = propTypes$l;
  Badge.defaultProps = defaultProps$j;

  var propTypes$m = {
    tag: tagPropType,
    inverse: propTypes.bool,
    color: propTypes.string,
    body: propTypes.bool,
    outline: propTypes.bool,
    className: propTypes.string,
    cssModule: propTypes.object,
    innerRef: propTypes.oneOfType([propTypes.object, propTypes.string, propTypes.func])
  };
  var defaultProps$k = {
    tag: 'div'
  };

  var Card = function Card(props) {
    var className = props.className,
        cssModule = props.cssModule,
        color = props.color,
        body = props.body,
        inverse = props.inverse,
        outline = props.outline,
        Tag = props.tag,
        innerRef = props.innerRef,
        attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "color", "body", "inverse", "outline", "tag", "innerRef"]);

    var classes = mapToCssModules(classnames(className, 'card', inverse ? 'text-white' : false, body ? 'card-body' : false, color ? (outline ? 'border' : 'bg') + "-" + color : false), cssModule);
    return React__default.createElement(Tag, _extends({}, attributes, {
      className: classes,
      ref: innerRef
    }));
  };

  Card.propTypes = propTypes$m;
  Card.defaultProps = defaultProps$k;

  var propTypes$n = {
    tag: tagPropType,
    className: propTypes.string,
    cssModule: propTypes.object
  };
  var defaultProps$l = {
    tag: 'div'
  };

  var CardGroup = function CardGroup(props) {
    var className = props.className,
        cssModule = props.cssModule,
        Tag = props.tag,
        attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "tag"]);

    var classes = mapToCssModules(classnames(className, 'card-group'), cssModule);
    return React__default.createElement(Tag, _extends({}, attributes, {
      className: classes
    }));
  };

  CardGroup.propTypes = propTypes$n;
  CardGroup.defaultProps = defaultProps$l;

  var propTypes$o = {
    tag: tagPropType,
    className: propTypes.string,
    cssModule: propTypes.object
  };
  var defaultProps$m = {
    tag: 'div'
  };

  var CardDeck = function CardDeck(props) {
    var className = props.className,
        cssModule = props.cssModule,
        Tag = props.tag,
        attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "tag"]);

    var classes = mapToCssModules(classnames(className, 'card-deck'), cssModule);
    return React__default.createElement(Tag, _extends({}, attributes, {
      className: classes
    }));
  };

  CardDeck.propTypes = propTypes$o;
  CardDeck.defaultProps = defaultProps$m;

  var propTypes$p = {
    tag: tagPropType,
    className: propTypes.string,
    cssModule: propTypes.object
  };
  var defaultProps$n = {
    tag: 'div'
  };

  var CardColumns = function CardColumns(props) {
    var className = props.className,
        cssModule = props.cssModule,
        Tag = props.tag,
        attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "tag"]);

    var classes = mapToCssModules(classnames(className, 'card-columns'), cssModule);
    return React__default.createElement(Tag, _extends({}, attributes, {
      className: classes
    }));
  };

  CardColumns.propTypes = propTypes$p;
  CardColumns.defaultProps = defaultProps$n;

  var propTypes$q = {
    tag: tagPropType,
    className: propTypes.string,
    cssModule: propTypes.object,
    innerRef: propTypes.oneOfType([propTypes.object, propTypes.string, propTypes.func])
  };
  var defaultProps$o = {
    tag: 'div'
  };

  var CardBody = function CardBody(props) {
    var className = props.className,
        cssModule = props.cssModule,
        innerRef = props.innerRef,
        Tag = props.tag,
        attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "innerRef", "tag"]);

    var classes = mapToCssModules(classnames(className, 'card-body'), cssModule);
    return React__default.createElement(Tag, _extends({}, attributes, {
      className: classes,
      ref: innerRef
    }));
  };

  CardBody.propTypes = propTypes$q;
  CardBody.defaultProps = defaultProps$o;

  var propTypes$r = {
    tag: tagPropType,
    innerRef: propTypes.oneOfType([propTypes.object, propTypes.func, propTypes.string]),
    className: propTypes.string,
    cssModule: propTypes.object
  };
  var defaultProps$p = {
    tag: 'a'
  };

  var CardLink = function CardLink(props) {
    var className = props.className,
        cssModule = props.cssModule,
        Tag = props.tag,
        innerRef = props.innerRef,
        attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "tag", "innerRef"]);

    var classes = mapToCssModules(classnames(className, 'card-link'), cssModule);
    return React__default.createElement(Tag, _extends({}, attributes, {
      ref: innerRef,
      className: classes
    }));
  };

  CardLink.propTypes = propTypes$r;
  CardLink.defaultProps = defaultProps$p;

  var propTypes$s = {
    tag: tagPropType,
    className: propTypes.string,
    cssModule: propTypes.object
  };
  var defaultProps$q = {
    tag: 'div'
  };

  var CardFooter = function CardFooter(props) {
    var className = props.className,
        cssModule = props.cssModule,
        Tag = props.tag,
        attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "tag"]);

    var classes = mapToCssModules(classnames(className, 'card-footer'), cssModule);
    return React__default.createElement(Tag, _extends({}, attributes, {
      className: classes
    }));
  };

  CardFooter.propTypes = propTypes$s;
  CardFooter.defaultProps = defaultProps$q;

  var propTypes$t = {
    tag: tagPropType,
    className: propTypes.string,
    cssModule: propTypes.object
  };
  var defaultProps$r = {
    tag: 'div'
  };

  var CardHeader = function CardHeader(props) {
    var className = props.className,
        cssModule = props.cssModule,
        Tag = props.tag,
        attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "tag"]);

    var classes = mapToCssModules(classnames(className, 'card-header'), cssModule);
    return React__default.createElement(Tag, _extends({}, attributes, {
      className: classes
    }));
  };

  CardHeader.propTypes = propTypes$t;
  CardHeader.defaultProps = defaultProps$r;

  var propTypes$u = {
    tag: tagPropType,
    top: propTypes.bool,
    bottom: propTypes.bool,
    className: propTypes.string,
    cssModule: propTypes.object
  };
  var defaultProps$s = {
    tag: 'img'
  };

  var CardImg = function CardImg(props) {
    var className = props.className,
        cssModule = props.cssModule,
        top = props.top,
        bottom = props.bottom,
        Tag = props.tag,
        attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "top", "bottom", "tag"]);

    var cardImgClassName = 'card-img';

    if (top) {
      cardImgClassName = 'card-img-top';
    }

    if (bottom) {
      cardImgClassName = 'card-img-bottom';
    }

    var classes = mapToCssModules(classnames(className, cardImgClassName), cssModule);
    return React__default.createElement(Tag, _extends({}, attributes, {
      className: classes
    }));
  };

  CardImg.propTypes = propTypes$u;
  CardImg.defaultProps = defaultProps$s;

  var propTypes$v = {
    tag: tagPropType,
    className: propTypes.string,
    cssModule: propTypes.object
  };
  var defaultProps$t = {
    tag: 'div'
  };

  var CardImgOverlay = function CardImgOverlay(props) {
    var className = props.className,
        cssModule = props.cssModule,
        Tag = props.tag,
        attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "tag"]);

    var classes = mapToCssModules(classnames(className, 'card-img-overlay'), cssModule);
    return React__default.createElement(Tag, _extends({}, attributes, {
      className: classes
    }));
  };

  CardImgOverlay.propTypes = propTypes$v;
  CardImgOverlay.defaultProps = defaultProps$t;

  var CarouselItem =
  /*#__PURE__*/
  function (_React$Component) {
    _inheritsLoose(CarouselItem, _React$Component);

    function CarouselItem(props) {
      var _this;

      _this = _React$Component.call(this, props) || this;
      _this.state = {
        startAnimation: false
      };
      _this.onEnter = _this.onEnter.bind(_assertThisInitialized(_this));
      _this.onEntering = _this.onEntering.bind(_assertThisInitialized(_this));
      _this.onExit = _this.onExit.bind(_assertThisInitialized(_this));
      _this.onExiting = _this.onExiting.bind(_assertThisInitialized(_this));
      _this.onExited = _this.onExited.bind(_assertThisInitialized(_this));
      return _this;
    }

    var _proto = CarouselItem.prototype;

    _proto.onEnter = function onEnter(node, isAppearing) {
      this.setState({
        startAnimation: false
      });
      this.props.onEnter(node, isAppearing);
    };

    _proto.onEntering = function onEntering(node, isAppearing) {
      // getting this variable triggers a reflow
      var offsetHeight = node.offsetHeight;
      this.setState({
        startAnimation: true
      });
      this.props.onEntering(node, isAppearing);
      return offsetHeight;
    };

    _proto.onExit = function onExit(node) {
      this.setState({
        startAnimation: false
      });
      this.props.onExit(node);
    };

    _proto.onExiting = function onExiting(node) {
      this.setState({
        startAnimation: true
      });
      node.dispatchEvent(new CustomEvent('slide.bs.carousel'));
      this.props.onExiting(node);
    };

    _proto.onExited = function onExited(node) {
      node.dispatchEvent(new CustomEvent('slid.bs.carousel'));
      this.props.onExited(node);
    };

    _proto.render = function render() {
      var _this2 = this;

      var _this$props = this.props,
          isIn = _this$props["in"],
          children = _this$props.children,
          cssModule = _this$props.cssModule,
          slide = _this$props.slide,
          Tag = _this$props.tag,
          className = _this$props.className,
          transitionProps = _objectWithoutPropertiesLoose(_this$props, ["in", "children", "cssModule", "slide", "tag", "className"]);

      return React__default.createElement(reactTransitionGroup_1, _extends({}, transitionProps, {
        enter: slide,
        exit: slide,
        "in": isIn,
        onEnter: this.onEnter,
        onEntering: this.onEntering,
        onExit: this.onExit,
        onExiting: this.onExiting,
        onExited: this.onExited
      }), function (status) {
        var direction = _this2.context.direction;
        var isActive = status === TransitionStatuses.ENTERED || status === TransitionStatuses.EXITING;
        var directionClassName = (status === TransitionStatuses.ENTERING || status === TransitionStatuses.EXITING) && _this2.state.startAnimation && (direction === 'right' ? 'carousel-item-left' : 'carousel-item-right');
        var orderClassName = status === TransitionStatuses.ENTERING && (direction === 'right' ? 'carousel-item-next' : 'carousel-item-prev');
        var itemClasses = mapToCssModules(classnames(className, 'carousel-item', isActive && 'active', directionClassName, orderClassName), cssModule);
        return React__default.createElement(Tag, {
          className: itemClasses
        }, children);
      });
    };

    return CarouselItem;
  }(React__default.Component);

  CarouselItem.propTypes = _objectSpread({}, reactTransitionGroup_1.propTypes, {
    tag: tagPropType,
    "in": propTypes.bool,
    cssModule: propTypes.object,
    children: propTypes.node,
    slide: propTypes.bool,
    className: propTypes.string
  });
  CarouselItem.defaultProps = _objectSpread({}, reactTransitionGroup_1.defaultProps, {
    tag: 'div',
    timeout: TransitionTimeouts.Carousel,
    slide: true
  });
  CarouselItem.contextTypes = {
    direction: propTypes.string
  };

  var Carousel =
  /*#__PURE__*/
  function (_React$Component) {
    _inheritsLoose(Carousel, _React$Component);

    function Carousel(props) {
      var _this;

      _this = _React$Component.call(this, props) || this;
      _this.handleKeyPress = _this.handleKeyPress.bind(_assertThisInitialized(_this));
      _this.renderItems = _this.renderItems.bind(_assertThisInitialized(_this));
      _this.hoverStart = _this.hoverStart.bind(_assertThisInitialized(_this));
      _this.hoverEnd = _this.hoverEnd.bind(_assertThisInitialized(_this));
      _this.state = {
        direction: 'right',
        indicatorClicked: false
      };
      return _this;
    }

    var _proto = Carousel.prototype;

    _proto.getChildContext = function getChildContext() {
      return {
        direction: this.state.direction
      };
    };

    _proto.componentDidMount = function componentDidMount() {
      // Set up the cycle
      if (this.props.ride === 'carousel') {
        this.setInterval();
      } // TODO: move this to the specific carousel like bootstrap. Currently it will trigger ALL carousels on the page.


      document.addEventListener('keyup', this.handleKeyPress);
    };

    _proto.UNSAFE_componentWillReceiveProps = function UNSAFE_componentWillReceiveProps(nextProps) {
      this.setInterval(nextProps); // Calculate the direction to turn

      if (this.props.activeIndex + 1 === nextProps.activeIndex) {
        this.setState({
          direction: 'right'
        });
      } else if (this.props.activeIndex - 1 === nextProps.activeIndex) {
        this.setState({
          direction: 'left'
        });
      } else if (this.props.activeIndex > nextProps.activeIndex) {
        this.setState({
          direction: this.state.indicatorClicked ? 'left' : 'right'
        });
      } else if (this.props.activeIndex !== nextProps.activeIndex) {
        this.setState({
          direction: this.state.indicatorClicked ? 'right' : 'left'
        });
      }

      this.setState({
        indicatorClicked: false
      });
    };

    _proto.componentWillUnmount = function componentWillUnmount() {
      this.clearInterval();
      document.removeEventListener('keyup', this.handleKeyPress);
    };

    _proto.setInterval = function (_setInterval) {
      function setInterval() {
        return _setInterval.apply(this, arguments);
      }

      setInterval.toString = function () {
        return _setInterval.toString();
      };

      return setInterval;
    }(function (props) {
      if (props === void 0) {
        props = this.props;
      } // make sure not to have multiple intervals going...


      this.clearInterval();

      if (props.interval) {
        this.cycleInterval = setInterval(function () {
          props.next();
        }, parseInt(props.interval, 10));
      }
    });

    _proto.clearInterval = function (_clearInterval) {
      function clearInterval() {
        return _clearInterval.apply(this, arguments);
      }

      clearInterval.toString = function () {
        return _clearInterval.toString();
      };

      return clearInterval;
    }(function () {
      clearInterval(this.cycleInterval);
    });

    _proto.hoverStart = function hoverStart() {
      if (this.props.pause === 'hover') {
        this.clearInterval();
      }

      if (this.props.mouseEnter) {
        var _this$props;

        (_this$props = this.props).mouseEnter.apply(_this$props, arguments);
      }
    };

    _proto.hoverEnd = function hoverEnd() {
      if (this.props.pause === 'hover') {
        this.setInterval();
      }

      if (this.props.mouseLeave) {
        var _this$props2;

        (_this$props2 = this.props).mouseLeave.apply(_this$props2, arguments);
      }
    };

    _proto.handleKeyPress = function handleKeyPress(evt) {
      if (this.props.keyboard) {
        if (evt.keyCode === 37) {
          this.props.previous();
        } else if (evt.keyCode === 39) {
          this.props.next();
        }
      }
    };

    _proto.renderItems = function renderItems(carouselItems, className) {
      var _this2 = this;

      var slide = this.props.slide;
      return React__default.createElement("div", {
        className: className
      }, carouselItems.map(function (item, index) {
        var isIn = index === _this2.props.activeIndex;
        return React__default.cloneElement(item, {
          "in": isIn,
          slide: slide
        });
      }));
    };

    _proto.render = function render() {
      var _this3 = this;

      var _this$props3 = this.props,
          cssModule = _this$props3.cssModule,
          slide = _this$props3.slide,
          className = _this$props3.className;
      var outerClasses = mapToCssModules(classnames(className, 'carousel', slide && 'slide'), cssModule);
      var innerClasses = mapToCssModules(classnames('carousel-inner'), cssModule); // filter out booleans, null, or undefined

      var children = this.props.children.filter(function (child) {
        return child !== null && child !== undefined && typeof child !== 'boolean';
      });
      var slidesOnly = children.every(function (child) {
        return child.type === CarouselItem;
      }); // Rendering only slides

      if (slidesOnly) {
        return React__default.createElement("div", {
          className: outerClasses,
          onMouseEnter: this.hoverStart,
          onMouseLeave: this.hoverEnd
        }, this.renderItems(children, innerClasses));
      } // Rendering slides and controls


      if (children[0] instanceof Array) {
        var _carouselItems = children[0];
        var _controlLeft = children[1];
        var _controlRight = children[2];
        return React__default.createElement("div", {
          className: outerClasses,
          onMouseEnter: this.hoverStart,
          onMouseLeave: this.hoverEnd
        }, this.renderItems(_carouselItems, innerClasses), _controlLeft, _controlRight);
      } // Rendering indicators, slides and controls


      var indicators = children[0];

      var wrappedOnClick = function wrappedOnClick(e) {
        if (typeof indicators.props.onClickHandler === 'function') {
          _this3.setState({
            indicatorClicked: true
          }, function () {
            return indicators.props.onClickHandler(e);
          });
        }
      };

      var wrappedIndicators = React__default.cloneElement(indicators, {
        onClickHandler: wrappedOnClick
      });
      var carouselItems = children[1];
      var controlLeft = children[2];
      var controlRight = children[3];
      return React__default.createElement("div", {
        className: outerClasses,
        onMouseEnter: this.hoverStart,
        onMouseLeave: this.hoverEnd
      }, wrappedIndicators, this.renderItems(carouselItems, innerClasses), controlLeft, controlRight);
    };

    return Carousel;
  }(React__default.Component);

  Carousel.propTypes = {
    // the current active slide of the carousel
    activeIndex: propTypes.number,
    // a function which should advance the carousel to the next slide (via activeIndex)
    next: propTypes.func.isRequired,
    // a function which should advance the carousel to the previous slide (via activeIndex)
    previous: propTypes.func.isRequired,
    // controls if the left and right arrow keys should control the carousel
    keyboard: propTypes.bool,

    /* If set to "hover", pauses the cycling of the carousel on mouseenter and resumes the cycling of the carousel on
     * mouseleave. If set to false, hovering over the carousel won't pause it. (default: "hover")
     */
    pause: propTypes.oneOf(['hover', false]),
    // Autoplays the carousel after the user manually cycles the first item. If "carousel", autoplays the carousel on load.
    // This is how bootstrap defines it... I would prefer a bool named autoplay or something...
    ride: propTypes.oneOf(['carousel']),
    // the interval at which the carousel automatically cycles (default: 5000)
    // eslint-disable-next-line react/no-unused-prop-types
    interval: propTypes.oneOfType([propTypes.number, propTypes.string, propTypes.bool]),
    children: propTypes.array,
    // called when the mouse enters the Carousel
    mouseEnter: propTypes.func,
    // called when the mouse exits the Carousel
    mouseLeave: propTypes.func,
    // controls whether the slide animation on the Carousel works or not
    slide: propTypes.bool,
    cssModule: propTypes.object,
    className: propTypes.string
  };
  Carousel.defaultProps = {
    interval: 5000,
    pause: 'hover',
    keyboard: true,
    slide: true
  };
  Carousel.childContextTypes = {
    direction: propTypes.string
  };

  var CarouselControl = function CarouselControl(props) {
    var direction = props.direction,
        onClickHandler = props.onClickHandler,
        cssModule = props.cssModule,
        directionText = props.directionText,
        className = props.className;
    var anchorClasses = mapToCssModules(classnames(className, "carousel-control-" + direction), cssModule);
    var iconClasses = mapToCssModules(classnames("carousel-control-" + direction + "-icon"), cssModule);
    var screenReaderClasses = mapToCssModules(classnames('sr-only'), cssModule);
    return React__default.createElement("a", {
      className: anchorClasses,
      style: {
        cursor: "pointer"
      },
      role: "button",
      tabIndex: "0",
      onClick: function onClick(e) {
        e.preventDefault();
        onClickHandler();
      }
    }, React__default.createElement("span", {
      className: iconClasses,
      "aria-hidden": "true"
    }), React__default.createElement("span", {
      className: screenReaderClasses
    }, directionText || direction));
  };

  CarouselControl.propTypes = {
    direction: propTypes.oneOf(['prev', 'next']).isRequired,
    onClickHandler: propTypes.func.isRequired,
    cssModule: propTypes.object,
    directionText: propTypes.string,
    className: propTypes.string
  };

  var CarouselIndicators = function CarouselIndicators(props) {
    var items = props.items,
        activeIndex = props.activeIndex,
        cssModule = props.cssModule,
        onClickHandler = props.onClickHandler,
        className = props.className;
    var listClasses = mapToCssModules(classnames(className, 'carousel-indicators'), cssModule);
    var indicators = items.map(function (item, idx) {
      var indicatorClasses = mapToCssModules(classnames({
        active: activeIndex === idx
      }), cssModule);
      return React__default.createElement("li", {
        key: "" + (item.key || Object.values(item).join('')),
        onClick: function onClick(e) {
          e.preventDefault();
          onClickHandler(idx);
        },
        className: indicatorClasses
      });
    });
    return React__default.createElement("ol", {
      className: listClasses
    }, indicators);
  };

  CarouselIndicators.propTypes = {
    items: propTypes.array.isRequired,
    activeIndex: propTypes.number.isRequired,
    cssModule: propTypes.object,
    onClickHandler: propTypes.func.isRequired,
    className: propTypes.string
  };

  var CarouselCaption = function CarouselCaption(props) {
    var captionHeader = props.captionHeader,
        captionText = props.captionText,
        cssModule = props.cssModule,
        className = props.className;
    var classes = mapToCssModules(classnames(className, 'carousel-caption', 'd-none', 'd-md-block'), cssModule);
    return React__default.createElement("div", {
      className: classes
    }, React__default.createElement("h3", null, captionHeader), React__default.createElement("p", null, captionText));
  };

  CarouselCaption.propTypes = {
    captionHeader: propTypes.node,
    captionText: propTypes.node.isRequired,
    cssModule: propTypes.object,
    className: propTypes.string
  };

  var propTypes$w = {
    items: propTypes.array.isRequired,
    indicators: propTypes.bool,
    controls: propTypes.bool,
    autoPlay: propTypes.bool,
    defaultActiveIndex: propTypes.number,
    activeIndex: propTypes.number,
    next: propTypes.func,
    previous: propTypes.func,
    goToIndex: propTypes.func
  };

  var UncontrolledCarousel =
  /*#__PURE__*/
  function (_Component) {
    _inheritsLoose(UncontrolledCarousel, _Component);

    function UncontrolledCarousel(props) {
      var _this;

      _this = _Component.call(this, props) || this;
      _this.animating = false;
      _this.state = {
        activeIndex: props.defaultActiveIndex || 0
      };
      _this.next = _this.next.bind(_assertThisInitialized(_this));
      _this.previous = _this.previous.bind(_assertThisInitialized(_this));
      _this.goToIndex = _this.goToIndex.bind(_assertThisInitialized(_this));
      _this.onExiting = _this.onExiting.bind(_assertThisInitialized(_this));
      _this.onExited = _this.onExited.bind(_assertThisInitialized(_this));
      return _this;
    }

    var _proto = UncontrolledCarousel.prototype;

    _proto.onExiting = function onExiting() {
      this.animating = true;
    };

    _proto.onExited = function onExited() {
      this.animating = false;
    };

    _proto.next = function next() {
      if (this.animating) return;
      var nextIndex = this.state.activeIndex === this.props.items.length - 1 ? 0 : this.state.activeIndex + 1;
      this.setState({
        activeIndex: nextIndex
      });
    };

    _proto.previous = function previous() {
      if (this.animating) return;
      var nextIndex = this.state.activeIndex === 0 ? this.props.items.length - 1 : this.state.activeIndex - 1;
      this.setState({
        activeIndex: nextIndex
      });
    };

    _proto.goToIndex = function goToIndex(newIndex) {
      if (this.animating) return;
      this.setState({
        activeIndex: newIndex
      });
    };

    _proto.render = function render() {
      var _this2 = this;

      var _this$props = this.props,
          defaultActiveIndex = _this$props.defaultActiveIndex,
          autoPlay = _this$props.autoPlay,
          indicators = _this$props.indicators,
          controls = _this$props.controls,
          items = _this$props.items,
          goToIndex = _this$props.goToIndex,
          props = _objectWithoutPropertiesLoose(_this$props, ["defaultActiveIndex", "autoPlay", "indicators", "controls", "items", "goToIndex"]);

      var activeIndex = this.state.activeIndex;
      var slides = items.map(function (item) {
        var key = item.key || item.src;
        return React__default.createElement(CarouselItem, {
          onExiting: _this2.onExiting,
          onExited: _this2.onExited,
          key: key
        }, React__default.createElement("img", {
          className: "d-block w-100",
          src: item.src,
          alt: item.altText
        }), React__default.createElement(CarouselCaption, {
          captionText: item.caption,
          captionHeader: item.header || item.caption
        }));
      });
      return React__default.createElement(Carousel, _extends({
        activeIndex: activeIndex,
        next: this.next,
        previous: this.previous,
        ride: autoPlay ? 'carousel' : undefined
      }, props), indicators && React__default.createElement(CarouselIndicators, {
        items: items,
        activeIndex: props.activeIndex || activeIndex,
        onClickHandler: goToIndex || this.goToIndex
      }), slides, controls && React__default.createElement(CarouselControl, {
        direction: "prev",
        directionText: "Previous",
        onClickHandler: props.previous || this.previous
      }), controls && React__default.createElement(CarouselControl, {
        direction: "next",
        directionText: "Next",
        onClickHandler: props.next || this.next
      }));
    };

    return UncontrolledCarousel;
  }(React.Component);

  UncontrolledCarousel.propTypes = propTypes$w;
  UncontrolledCarousel.defaultProps = {
    controls: true,
    indicators: true,
    autoPlay: true
  };

  var propTypes$x = {
    tag: tagPropType,
    className: propTypes.string,
    cssModule: propTypes.object
  };
  var defaultProps$u = {
    tag: 'div'
  };

  var CardSubtitle = function CardSubtitle(props) {
    var className = props.className,
        cssModule = props.cssModule,
        Tag = props.tag,
        attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "tag"]);

    var classes = mapToCssModules(classnames(className, 'card-subtitle'), cssModule);
    return React__default.createElement(Tag, _extends({}, attributes, {
      className: classes
    }));
  };

  CardSubtitle.propTypes = propTypes$x;
  CardSubtitle.defaultProps = defaultProps$u;

  var propTypes$y = {
    tag: tagPropType,
    className: propTypes.string,
    cssModule: propTypes.object
  };
  var defaultProps$v = {
    tag: 'p'
  };

  var CardText = function CardText(props) {
    var className = props.className,
        cssModule = props.cssModule,
        Tag = props.tag,
        attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "tag"]);

    var classes = mapToCssModules(classnames(className, 'card-text'), cssModule);
    return React__default.createElement(Tag, _extends({}, attributes, {
      className: classes
    }));
  };

  CardText.propTypes = propTypes$y;
  CardText.defaultProps = defaultProps$v;

  var propTypes$z = {
    tag: tagPropType,
    className: propTypes.string,
    cssModule: propTypes.object
  };
  var defaultProps$w = {
    tag: 'div'
  };

  var CardTitle = function CardTitle(props) {
    var className = props.className,
        cssModule = props.cssModule,
        Tag = props.tag,
        attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "tag"]);

    var classes = mapToCssModules(classnames(className, 'card-title'), cssModule);
    return React__default.createElement(Tag, _extends({}, attributes, {
      className: classes
    }));
  };

  CardTitle.propTypes = propTypes$z;
  CardTitle.defaultProps = defaultProps$w;

  function noop() {}

  var propTypes$A = {
    children: propTypes.node.isRequired,
    popperClassName: propTypes.string,
    placement: propTypes.string,
    placementPrefix: propTypes.string,
    arrowClassName: propTypes.string,
    hideArrow: propTypes.bool,
    tag: tagPropType,
    isOpen: propTypes.bool.isRequired,
    cssModule: propTypes.object,
    offset: propTypes.oneOfType([propTypes.string, propTypes.number]),
    fallbackPlacement: propTypes.oneOfType([propTypes.string, propTypes.array]),
    flip: propTypes.bool,
    container: targetPropType,
    target: targetPropType.isRequired,
    modifiers: propTypes.object,
    boundariesElement: propTypes.oneOfType([propTypes.string, DOMElement]),
    onClosed: propTypes.func,
    fade: propTypes.bool,
    transition: propTypes.shape(Fade.propTypes)
  };
  var defaultProps$x = {
    boundariesElement: 'scrollParent',
    placement: 'auto',
    hideArrow: false,
    isOpen: false,
    offset: 0,
    fallbackPlacement: 'flip',
    flip: true,
    container: 'body',
    modifiers: {},
    onClosed: noop,
    fade: true,
    transition: _objectSpread({}, Fade.defaultProps)
  };

  var PopperContent =
  /*#__PURE__*/
  function (_React$Component) {
    _inheritsLoose(PopperContent, _React$Component);

    function PopperContent(props) {
      var _this;

      _this = _React$Component.call(this, props) || this;
      _this.setTargetNode = _this.setTargetNode.bind(_assertThisInitialized(_this));
      _this.getTargetNode = _this.getTargetNode.bind(_assertThisInitialized(_this));
      _this.getRef = _this.getRef.bind(_assertThisInitialized(_this));
      _this.onClosed = _this.onClosed.bind(_assertThisInitialized(_this));
      _this.state = {
        isOpen: props.isOpen
      };
      return _this;
    }

    PopperContent.getDerivedStateFromProps = function getDerivedStateFromProps(props, state) {
      if (props.isOpen && !state.isOpen) {
        return {
          isOpen: props.isOpen
        };
      } else return null;
    };

    var _proto = PopperContent.prototype;

    _proto.componentDidUpdate = function componentDidUpdate() {
      if (this._element && this._element.childNodes && this._element.childNodes[0] && this._element.childNodes[0].focus) {
        this._element.childNodes[0].focus();
      }
    };

    _proto.setTargetNode = function setTargetNode(node) {
      this.targetNode = typeof node === 'string' ? getTarget(node) : node;
    };

    _proto.getTargetNode = function getTargetNode() {
      return this.targetNode;
    };

    _proto.getContainerNode = function getContainerNode() {
      return getTarget(this.props.container);
    };

    _proto.getRef = function getRef(ref) {
      this._element = ref;
    };

    _proto.onClosed = function onClosed() {
      this.props.onClosed();
      this.setState({
        isOpen: false
      });
    };

    _proto.renderChildren = function renderChildren() {
      var _this$props = this.props,
          cssModule = _this$props.cssModule,
          children = _this$props.children,
          isOpen = _this$props.isOpen,
          flip = _this$props.flip,
          target = _this$props.target,
          offset = _this$props.offset,
          fallbackPlacement = _this$props.fallbackPlacement,
          placementPrefix = _this$props.placementPrefix,
          _arrowClassName = _this$props.arrowClassName,
          hideArrow = _this$props.hideArrow,
          _popperClassName = _this$props.popperClassName,
          tag = _this$props.tag,
          container = _this$props.container,
          modifiers = _this$props.modifiers,
          boundariesElement = _this$props.boundariesElement,
          onClosed = _this$props.onClosed,
          fade = _this$props.fade,
          transition = _this$props.transition,
          placement = _this$props.placement,
          attrs = _objectWithoutPropertiesLoose(_this$props, ["cssModule", "children", "isOpen", "flip", "target", "offset", "fallbackPlacement", "placementPrefix", "arrowClassName", "hideArrow", "popperClassName", "tag", "container", "modifiers", "boundariesElement", "onClosed", "fade", "transition", "placement"]);

      var arrowClassName = mapToCssModules(classnames('arrow', _arrowClassName), cssModule);
      var popperClassName = mapToCssModules(classnames(_popperClassName, placementPrefix ? placementPrefix + "-auto" : ''), this.props.cssModule);

      var extendedModifiers = _objectSpread({
        offset: {
          offset: offset
        },
        flip: {
          enabled: flip,
          behavior: fallbackPlacement
        },
        preventOverflow: {
          boundariesElement: boundariesElement
        }
      }, modifiers);

      var popperTransition = _objectSpread({}, Fade.defaultProps, {}, transition, {
        baseClass: fade ? transition.baseClass : '',
        timeout: fade ? transition.timeout : 0
      });

      return React__default.createElement(Fade, _extends({}, popperTransition, attrs, {
        "in": isOpen,
        onExited: this.onClosed,
        tag: tag
      }), React__default.createElement(reactPopper.Popper, {
        referenceElement: this.targetNode,
        modifiers: extendedModifiers,
        placement: placement
      }, function (_ref) {
        var ref = _ref.ref,
            style = _ref.style,
            placement = _ref.placement,
            arrowProps = _ref.arrowProps;
        return React__default.createElement("div", {
          ref: ref,
          style: style,
          className: popperClassName,
          "x-placement": placement
        }, children, !hideArrow && React__default.createElement("span", {
          ref: arrowProps.ref,
          className: arrowClassName,
          style: arrowProps.style
        }));
      }));
    };

    _proto.render = function render() {
      this.setTargetNode(this.props.target);

      if (this.state.isOpen) {
        return this.props.container === 'inline' ? this.renderChildren() : ReactDOM.createPortal(React__default.createElement("div", {
          ref: this.getRef
        }, this.renderChildren()), this.getContainerNode());
      }

      return null;
    };

    return PopperContent;
  }(React__default.Component);

  PopperContent.propTypes = propTypes$A;
  PopperContent.defaultProps = defaultProps$x;

  var PopperTargetHelper = function PopperTargetHelper(props, context) {
    context.popperManager.setTargetNode(getTarget(props.target));
    return null;
  };

  PopperTargetHelper.contextTypes = {
    popperManager: propTypes.object.isRequired
  };
  PopperTargetHelper.propTypes = {
    target: targetPropType.isRequired
  };

  var propTypes$B = {
    placement: propTypes.oneOf(PopperPlacements),
    target: targetPropType.isRequired,
    container: targetPropType,
    isOpen: propTypes.bool,
    disabled: propTypes.bool,
    hideArrow: propTypes.bool,
    boundariesElement: propTypes.oneOfType([propTypes.string, DOMElement]),
    className: propTypes.string,
    innerClassName: propTypes.string,
    arrowClassName: propTypes.string,
    popperClassName: propTypes.string,
    cssModule: propTypes.object,
    toggle: propTypes.func,
    autohide: propTypes.bool,
    placementPrefix: propTypes.string,
    delay: propTypes.oneOfType([propTypes.shape({
      show: propTypes.number,
      hide: propTypes.number
    }), propTypes.number]),
    modifiers: propTypes.object,
    offset: propTypes.oneOfType([propTypes.string, propTypes.number]),
    innerRef: propTypes.oneOfType([propTypes.func, propTypes.string, propTypes.object]),
    trigger: propTypes.string,
    fade: propTypes.bool,
    flip: propTypes.bool
  };
  var DEFAULT_DELAYS = {
    show: 0,
    hide: 0
  };
  var defaultProps$y = {
    isOpen: false,
    hideArrow: false,
    autohide: false,
    delay: DEFAULT_DELAYS,
    toggle: function toggle() {},
    trigger: 'click',
    fade: true
  };

  function isInDOMSubtree(element, subtreeRoot) {
    return subtreeRoot && (element === subtreeRoot || subtreeRoot.contains(element));
  }

  function isInDOMSubtrees(element, subtreeRoots) {
    if (subtreeRoots === void 0) {
      subtreeRoots = [];
    }

    return subtreeRoots && subtreeRoots.length && subtreeRoots.find(function (subTreeRoot) {
      return isInDOMSubtree(element, subTreeRoot);
    });
  }

  var TooltipPopoverWrapper =
  /*#__PURE__*/
  function (_React$Component) {
    _inheritsLoose(TooltipPopoverWrapper, _React$Component);

    function TooltipPopoverWrapper(props) {
      var _this;

      _this = _React$Component.call(this, props) || this;
      _this._targets = [];
      _this.currentTargetElement = null;
      _this.addTargetEvents = _this.addTargetEvents.bind(_assertThisInitialized(_this));
      _this.handleDocumentClick = _this.handleDocumentClick.bind(_assertThisInitialized(_this));
      _this.removeTargetEvents = _this.removeTargetEvents.bind(_assertThisInitialized(_this));
      _this.toggle = _this.toggle.bind(_assertThisInitialized(_this));
      _this.showWithDelay = _this.showWithDelay.bind(_assertThisInitialized(_this));
      _this.hideWithDelay = _this.hideWithDelay.bind(_assertThisInitialized(_this));
      _this.onMouseOverTooltipContent = _this.onMouseOverTooltipContent.bind(_assertThisInitialized(_this));
      _this.onMouseLeaveTooltipContent = _this.onMouseLeaveTooltipContent.bind(_assertThisInitialized(_this));
      _this.show = _this.show.bind(_assertThisInitialized(_this));
      _this.hide = _this.hide.bind(_assertThisInitialized(_this));
      _this.onEscKeyDown = _this.onEscKeyDown.bind(_assertThisInitialized(_this));
      _this.getRef = _this.getRef.bind(_assertThisInitialized(_this));
      _this.state = {
        isOpen: props.isOpen
      };
      _this._isMounted = false;
      return _this;
    }

    var _proto = TooltipPopoverWrapper.prototype;

    _proto.componentDidMount = function componentDidMount() {
      this._isMounted = true;
      this.updateTarget();
    };

    _proto.componentWillUnmount = function componentWillUnmount() {
      this._isMounted = false;
      this.removeTargetEvents();
      this._targets = null;
      this.clearShowTimeout();
      this.clearHideTimeout();
    };

    TooltipPopoverWrapper.getDerivedStateFromProps = function getDerivedStateFromProps(props, state) {
      if (props.isOpen && !state.isOpen) {
        return {
          isOpen: props.isOpen
        };
      } else return null;
    };

    _proto.onMouseOverTooltipContent = function onMouseOverTooltipContent() {
      if (this.props.trigger.indexOf('hover') > -1 && !this.props.autohide) {
        if (this._hideTimeout) {
          this.clearHideTimeout();
        }

        if (this.state.isOpen && !this.props.isOpen) {
          this.toggle();
        }
      }
    };

    _proto.onMouseLeaveTooltipContent = function onMouseLeaveTooltipContent(e) {
      if (this.props.trigger.indexOf('hover') > -1 && !this.props.autohide) {
        if (this._showTimeout) {
          this.clearShowTimeout();
        }

        e.persist();
        this._hideTimeout = setTimeout(this.hide.bind(this, e), this.getDelay('hide'));
      }
    };

    _proto.onEscKeyDown = function onEscKeyDown(e) {
      if (e.key === 'Escape') {
        this.hide(e);
      }
    };

    _proto.getRef = function getRef(ref) {
      var innerRef = this.props.innerRef;

      if (innerRef) {
        if (typeof innerRef === 'function') {
          innerRef(ref);
        } else if (typeof innerRef === 'object') {
          innerRef.current = ref;
        }
      }

      this._popover = ref;
    };

    _proto.getDelay = function getDelay(key) {
      var delay = this.props.delay;

      if (typeof delay === 'object') {
        return isNaN(delay[key]) ? DEFAULT_DELAYS[key] : delay[key];
      }

      return delay;
    };

    _proto.show = function show(e) {
      if (!this.props.isOpen) {
        this.clearShowTimeout();
        this.currentTargetElement = e && e.target;
        this.toggle(e);
      }
    };

    _proto.showWithDelay = function showWithDelay(e) {
      if (this._hideTimeout) {
        this.clearHideTimeout();
      }

      this._showTimeout = setTimeout(this.show.bind(this, e), this.getDelay('show'));
    };

    _proto.hide = function hide(e) {
      if (this.props.isOpen) {
        this.clearHideTimeout();
        this.currentTargetElement = null;
        this.toggle(e);
      }
    };

    _proto.hideWithDelay = function hideWithDelay(e) {
      if (this._showTimeout) {
        this.clearShowTimeout();
      }

      this._hideTimeout = setTimeout(this.hide.bind(this, e), this.getDelay('hide'));
    };

    _proto.clearShowTimeout = function clearShowTimeout() {
      clearTimeout(this._showTimeout);
      this._showTimeout = undefined;
    };

    _proto.clearHideTimeout = function clearHideTimeout() {
      clearTimeout(this._hideTimeout);
      this._hideTimeout = undefined;
    };

    _proto.handleDocumentClick = function handleDocumentClick(e) {
      var triggers = this.props.trigger.split(' ');

      if (triggers.indexOf('legacy') > -1 && (this.props.isOpen || isInDOMSubtrees(e.target, this._targets))) {
        if (this._hideTimeout) {
          this.clearHideTimeout();
        }

        if (this.props.isOpen && !isInDOMSubtree(e.target, this._popover)) {
          this.hideWithDelay(e);
        } else if (!this.props.isOpen) {
          this.showWithDelay(e);
        }
      } else if (triggers.indexOf('click') > -1 && isInDOMSubtrees(e.target, this._targets)) {
        if (this._hideTimeout) {
          this.clearHideTimeout();
        }

        if (!this.props.isOpen) {
          this.showWithDelay(e);
        } else {
          this.hideWithDelay(e);
        }
      }
    };

    _proto.addEventOnTargets = function addEventOnTargets(type, handler, isBubble) {
      this._targets.forEach(function (target) {
        target.addEventListener(type, handler, isBubble);
      });
    };

    _proto.removeEventOnTargets = function removeEventOnTargets(type, handler, isBubble) {
      this._targets.forEach(function (target) {
        target.removeEventListener(type, handler, isBubble);
      });
    };

    _proto.addTargetEvents = function addTargetEvents() {
      if (this.props.trigger) {
        var triggers = this.props.trigger.split(' ');

        if (triggers.indexOf('manual') === -1) {
          if (triggers.indexOf('click') > -1 || triggers.indexOf('legacy') > -1) {
            document.addEventListener('click', this.handleDocumentClick, true);
          }

          if (this._targets && this._targets.length) {
            if (triggers.indexOf('hover') > -1) {
              this.addEventOnTargets('mouseover', this.showWithDelay, true);
              this.addEventOnTargets('mouseout', this.hideWithDelay, true);
            }

            if (triggers.indexOf('focus') > -1) {
              this.addEventOnTargets('focusin', this.show, true);
              this.addEventOnTargets('focusout', this.hide, true);
            }

            this.addEventOnTargets('keydown', this.onEscKeyDown, true);
          }
        }
      }
    };

    _proto.removeTargetEvents = function removeTargetEvents() {
      if (this._targets) {
        this.removeEventOnTargets('mouseover', this.showWithDelay, true);
        this.removeEventOnTargets('mouseout', this.hideWithDelay, true);
        this.removeEventOnTargets('keydown', this.onEscKeyDown, true);
        this.removeEventOnTargets('focusin', this.show, true);
        this.removeEventOnTargets('focusout', this.hide, true);
      }

      document.removeEventListener('click', this.handleDocumentClick, true);
    };

    _proto.updateTarget = function updateTarget() {
      var newTarget = getTarget(this.props.target, true);

      if (newTarget !== this._targets) {
        this.removeTargetEvents();
        this._targets = newTarget ? Array.from(newTarget) : [];
        this.currentTargetElement = this.currentTargetElement || this._targets[0];
        this.addTargetEvents();
      }
    };

    _proto.toggle = function toggle(e) {
      if (this.props.disabled || !this._isMounted) {
        return e && e.preventDefault();
      }

      return this.props.toggle(e);
    };

    _proto.render = function render() {
      if (!this.props.isOpen) {
        return null;
      }

      this.updateTarget();
      var _this$props = this.props,
          className = _this$props.className,
          cssModule = _this$props.cssModule,
          innerClassName = _this$props.innerClassName,
          target = _this$props.target,
          isOpen = _this$props.isOpen,
          hideArrow = _this$props.hideArrow,
          boundariesElement = _this$props.boundariesElement,
          placement = _this$props.placement,
          placementPrefix = _this$props.placementPrefix,
          arrowClassName = _this$props.arrowClassName,
          popperClassName = _this$props.popperClassName,
          container = _this$props.container,
          modifiers = _this$props.modifiers,
          offset = _this$props.offset,
          fade = _this$props.fade,
          flip = _this$props.flip;
      var attributes = omit(this.props, Object.keys(propTypes$B));
      var popperClasses = mapToCssModules(popperClassName, cssModule);
      var classes = mapToCssModules(innerClassName, cssModule);
      return React__default.createElement(PopperContent, {
        className: className,
        target: this.currentTargetElement || this._targets[0],
        isOpen: isOpen,
        hideArrow: hideArrow,
        boundariesElement: boundariesElement,
        placement: placement,
        placementPrefix: placementPrefix,
        arrowClassName: arrowClassName,
        popperClassName: popperClasses,
        container: container,
        modifiers: modifiers,
        offset: offset,
        cssModule: cssModule,
        fade: fade,
        flip: flip
      }, React__default.createElement("div", _extends({}, attributes, {
        ref: this.getRef,
        className: classes,
        role: "tooltip",
        "aria-hidden": isOpen,
        onMouseOver: this.onMouseOverTooltipContent,
        onMouseLeave: this.onMouseLeaveTooltipContent,
        onKeyDown: this.onEscKeyDown
      })));
    };

    return TooltipPopoverWrapper;
  }(React__default.Component);

  TooltipPopoverWrapper.propTypes = propTypes$B;
  TooltipPopoverWrapper.defaultProps = defaultProps$y;

  var defaultProps$z = {
    placement: 'right',
    placementPrefix: 'bs-popover',
    trigger: 'click'
  };

  var Popover = function Popover(props) {
    var popperClasses = classnames('popover', 'show');
    var classes = classnames('popover-inner', props.innerClassName);
    return React__default.createElement(TooltipPopoverWrapper, _extends({}, props, {
      popperClassName: popperClasses,
      innerClassName: classes
    }));
  };

  Popover.propTypes = propTypes$B;
  Popover.defaultProps = defaultProps$z;

  var propTypes$C = {
    tag: tagPropType,
    className: propTypes.string,
    cssModule: propTypes.object
  };
  var defaultProps$A = {
    tag: 'h3'
  };

  var PopoverHeader = function PopoverHeader(props) {
    var className = props.className,
        cssModule = props.cssModule,
        Tag = props.tag,
        attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "tag"]);

    var classes = mapToCssModules(classnames(className, 'popover-header'), cssModule);
    return React__default.createElement(Tag, _extends({}, attributes, {
      className: classes
    }));
  };

  PopoverHeader.propTypes = propTypes$C;
  PopoverHeader.defaultProps = defaultProps$A;

  var propTypes$D = {
    tag: tagPropType,
    className: propTypes.string,
    cssModule: propTypes.object
  };
  var defaultProps$B = {
    tag: 'div'
  };

  var PopoverBody = function PopoverBody(props) {
    var className = props.className,
        cssModule = props.cssModule,
        Tag = props.tag,
        attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "tag"]);

    var classes = mapToCssModules(classnames(className, 'popover-body'), cssModule);
    return React__default.createElement(Tag, _extends({}, attributes, {
      className: classes
    }));
  };

  PopoverBody.propTypes = propTypes$D;
  PopoverBody.defaultProps = defaultProps$B;

  var propTypes$E = {
    children: propTypes.node.isRequired,
    node: propTypes.any
  };

  var Portal =
  /*#__PURE__*/
  function (_React$Component) {
    _inheritsLoose(Portal, _React$Component);

    function Portal() {
      return _React$Component.apply(this, arguments) || this;
    }

    var _proto = Portal.prototype;

    _proto.componentWillUnmount = function componentWillUnmount() {
      if (this.defaultNode) {
        document.body.removeChild(this.defaultNode);
      }

      this.defaultNode = null;
    };

    _proto.render = function render() {
      if (!canUseDOM) {
        return null;
      }

      if (!this.props.node && !this.defaultNode) {
        this.defaultNode = document.createElement('div');
        document.body.appendChild(this.defaultNode);
      }

      return ReactDOM.createPortal(this.props.children, this.props.node || this.defaultNode);
    };

    return Portal;
  }(React__default.Component);

  Portal.propTypes = propTypes$E;

  function noop$1() {}

  var FadePropTypes = propTypes.shape(Fade.propTypes);
  var propTypes$F = {
    isOpen: propTypes.bool,
    autoFocus: propTypes.bool,
    centered: propTypes.bool,
    scrollable: propTypes.bool,
    size: propTypes.string,
    toggle: propTypes.func,
    keyboard: propTypes.bool,
    role: propTypes.string,
    labelledBy: propTypes.string,
    backdrop: propTypes.oneOfType([propTypes.bool, propTypes.oneOf(['static'])]),
    onEnter: propTypes.func,
    onExit: propTypes.func,
    onOpened: propTypes.func,
    onClosed: propTypes.func,
    children: propTypes.node,
    className: propTypes.string,
    wrapClassName: propTypes.string,
    modalClassName: propTypes.string,
    backdropClassName: propTypes.string,
    contentClassName: propTypes.string,
    external: propTypes.node,
    fade: propTypes.bool,
    cssModule: propTypes.object,
    zIndex: propTypes.oneOfType([propTypes.number, propTypes.string]),
    backdropTransition: FadePropTypes,
    modalTransition: FadePropTypes,
    innerRef: propTypes.oneOfType([propTypes.object, propTypes.string, propTypes.func]),
    unmountOnClose: propTypes.bool,
    returnFocusAfterClose: propTypes.bool
  };
  var propsToOmit = Object.keys(propTypes$F);
  var defaultProps$C = {
    isOpen: false,
    autoFocus: true,
    centered: false,
    scrollable: false,
    role: 'dialog',
    backdrop: true,
    keyboard: true,
    zIndex: 1050,
    fade: true,
    onOpened: noop$1,
    onClosed: noop$1,
    modalTransition: {
      timeout: TransitionTimeouts.Modal
    },
    backdropTransition: {
      mountOnEnter: true,
      timeout: TransitionTimeouts.Fade // uses standard fade transition

    },
    unmountOnClose: true,
    returnFocusAfterClose: true
  };

  var Modal =
  /*#__PURE__*/
  function (_React$Component) {
    _inheritsLoose(Modal, _React$Component);

    function Modal(props) {
      var _this;

      _this = _React$Component.call(this, props) || this;
      _this._element = null;
      _this._originalBodyPadding = null;
      _this.getFocusableChildren = _this.getFocusableChildren.bind(_assertThisInitialized(_this));
      _this.handleBackdropClick = _this.handleBackdropClick.bind(_assertThisInitialized(_this));
      _this.handleBackdropMouseDown = _this.handleBackdropMouseDown.bind(_assertThisInitialized(_this));
      _this.handleEscape = _this.handleEscape.bind(_assertThisInitialized(_this));
      _this.handleTab = _this.handleTab.bind(_assertThisInitialized(_this));
      _this.onOpened = _this.onOpened.bind(_assertThisInitialized(_this));
      _this.onClosed = _this.onClosed.bind(_assertThisInitialized(_this));
      _this.manageFocusAfterClose = _this.manageFocusAfterClose.bind(_assertThisInitialized(_this));
      _this.state = {
        isOpen: false
      };
      return _this;
    }

    var _proto = Modal.prototype;

    _proto.componentDidMount = function componentDidMount() {
      var _this$props = this.props,
          isOpen = _this$props.isOpen,
          autoFocus = _this$props.autoFocus,
          onEnter = _this$props.onEnter;

      if (isOpen) {
        this.init();
        this.setState({
          isOpen: true
        });

        if (autoFocus) {
          this.setFocus();
        }
      }

      if (onEnter) {
        onEnter();
      }

      this._isMounted = true;
    };

    _proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
      if (this.props.isOpen && !prevProps.isOpen) {
        this.init();
        this.setState({
          isOpen: true
        }); // let render() renders Modal Dialog first

        return;
      } // now Modal Dialog is rendered and we can refer this._element and this._dialog


      if (this.props.autoFocus && this.state.isOpen && !prevState.isOpen) {
        this.setFocus();
      }

      if (this._element && prevProps.zIndex !== this.props.zIndex) {
        this._element.style.zIndex = this.props.zIndex;
      }
    };

    _proto.componentWillUnmount = function componentWillUnmount() {
      if (this.props.onExit) {
        this.props.onExit();
      }

      if (this._element) {
        this.destroy();

        if (this.state.isOpen) {
          this.close();
        }
      }

      this._isMounted = false;
    };

    _proto.onOpened = function onOpened(node, isAppearing) {
      this.props.onOpened();
      (this.props.modalTransition.onEntered || noop$1)(node, isAppearing);
    };

    _proto.onClosed = function onClosed(node) {
      var unmountOnClose = this.props.unmountOnClose; // so all methods get called before it is unmounted

      this.props.onClosed();
      (this.props.modalTransition.onExited || noop$1)(node);

      if (unmountOnClose) {
        this.destroy();
      }

      this.close();

      if (this._isMounted) {
        this.setState({
          isOpen: false
        });
      }
    };

    _proto.setFocus = function setFocus() {
      if (this._dialog && this._dialog.parentNode && typeof this._dialog.parentNode.focus === 'function') {
        this._dialog.parentNode.focus();
      }
    };

    _proto.getFocusableChildren = function getFocusableChildren() {
      return this._element.querySelectorAll(focusableElements.join(', '));
    };

    _proto.getFocusedChild = function getFocusedChild() {
      var currentFocus;
      var focusableChildren = this.getFocusableChildren();

      try {
        currentFocus = document.activeElement;
      } catch (err) {
        currentFocus = focusableChildren[0];
      }

      return currentFocus;
    } // not mouseUp because scrollbar fires it, shouldn't close when user scrolls
    ;

    _proto.handleBackdropClick = function handleBackdropClick(e) {
      if (e.target === this._mouseDownElement) {
        e.stopPropagation();
        if (!this.props.isOpen || this.props.backdrop !== true) return;
        var backdrop = this._dialog ? this._dialog.parentNode : null;

        if (backdrop && e.target === backdrop && this.props.toggle) {
          this.props.toggle(e);
        }
      }
    };

    _proto.handleTab = function handleTab(e) {
      if (e.which !== 9) return;
      var focusableChildren = this.getFocusableChildren();
      var totalFocusable = focusableChildren.length;
      if (totalFocusable === 0) return;
      var currentFocus = this.getFocusedChild();
      var focusedIndex = 0;

      for (var i = 0; i < totalFocusable; i += 1) {
        if (focusableChildren[i] === currentFocus) {
          focusedIndex = i;
          break;
        }
      }

      if (e.shiftKey && focusedIndex === 0) {
        e.preventDefault();
        focusableChildren[totalFocusable - 1].focus();
      } else if (!e.shiftKey && focusedIndex === totalFocusable - 1) {
        e.preventDefault();
        focusableChildren[0].focus();
      }
    };

    _proto.handleBackdropMouseDown = function handleBackdropMouseDown(e) {
      this._mouseDownElement = e.target;
    };

    _proto.handleEscape = function handleEscape(e) {
      if (this.props.isOpen && this.props.keyboard && e.keyCode === 27 && this.props.toggle) {
        e.preventDefault();
        e.stopPropagation();
        this.props.toggle(e);
      }
    };

    _proto.init = function init() {
      try {
        this._triggeringElement = document.activeElement;
      } catch (err) {
        this._triggeringElement = null;
      }

      if (!this._element) {
        this._element = document.createElement('div');

        this._element.setAttribute('tabindex', '-1');

        this._element.style.position = 'relative';
        this._element.style.zIndex = this.props.zIndex;
        document.body.appendChild(this._element);
      }

      this._originalBodyPadding = getOriginalBodyPadding();
      conditionallyUpdateScrollbar();

      if (Modal.openCount === 0) {
        document.body.className = classnames(document.body.className, mapToCssModules('modal-open', this.props.cssModule));
      }

      Modal.openCount += 1;
    };

    _proto.destroy = function destroy() {
      if (this._element) {
        document.body.removeChild(this._element);
        this._element = null;
      }

      this.manageFocusAfterClose();
    };

    _proto.manageFocusAfterClose = function manageFocusAfterClose() {
      if (this._triggeringElement) {
        var returnFocusAfterClose = this.props.returnFocusAfterClose;
        if (this._triggeringElement.focus && returnFocusAfterClose) this._triggeringElement.focus();
        this._triggeringElement = null;
      }
    };

    _proto.close = function close() {
      if (Modal.openCount <= 1) {
        var modalOpenClassName = mapToCssModules('modal-open', this.props.cssModule); // Use regex to prevent matching `modal-open` as part of a different class, e.g. `my-modal-opened`

        var modalOpenClassNameRegex = new RegExp("(^| )" + modalOpenClassName + "( |$)");
        document.body.className = document.body.className.replace(modalOpenClassNameRegex, ' ').trim();
      }

      this.manageFocusAfterClose();
      Modal.openCount = Math.max(0, Modal.openCount - 1);
      setScrollbarWidth(this._originalBodyPadding);
    };

    _proto.renderModalDialog = function renderModalDialog() {
      var _classNames,
          _this2 = this;

      var attributes = omit(this.props, propsToOmit);
      var dialogBaseClass = 'modal-dialog';
      return React__default.createElement("div", _extends({}, attributes, {
        className: mapToCssModules(classnames(dialogBaseClass, this.props.className, (_classNames = {}, _classNames["modal-" + this.props.size] = this.props.size, _classNames[dialogBaseClass + "-centered"] = this.props.centered, _classNames[dialogBaseClass + "-scrollable"] = this.props.scrollable, _classNames)), this.props.cssModule),
        role: "document",
        ref: function ref(c) {
          _this2._dialog = c;
        }
      }), React__default.createElement("div", {
        className: mapToCssModules(classnames('modal-content', this.props.contentClassName), this.props.cssModule)
      }, this.props.children));
    };

    _proto.render = function render() {
      var unmountOnClose = this.props.unmountOnClose;

      if (!!this._element && (this.state.isOpen || !unmountOnClose)) {
        var isModalHidden = !!this._element && !this.state.isOpen && !unmountOnClose;
        this._element.style.display = isModalHidden ? 'none' : 'block';
        var _this$props2 = this.props,
            wrapClassName = _this$props2.wrapClassName,
            modalClassName = _this$props2.modalClassName,
            backdropClassName = _this$props2.backdropClassName,
            cssModule = _this$props2.cssModule,
            isOpen = _this$props2.isOpen,
            backdrop = _this$props2.backdrop,
            role = _this$props2.role,
            labelledBy = _this$props2.labelledBy,
            external = _this$props2.external,
            innerRef = _this$props2.innerRef;
        var modalAttributes = {
          onClick: this.handleBackdropClick,
          onMouseDown: this.handleBackdropMouseDown,
          onKeyUp: this.handleEscape,
          onKeyDown: this.handleTab,
          style: {
            display: 'block'
          },
          'aria-labelledby': labelledBy,
          role: role,
          tabIndex: '-1'
        };
        var hasTransition = this.props.fade;

        var modalTransition = _objectSpread({}, Fade.defaultProps, {}, this.props.modalTransition, {
          baseClass: hasTransition ? this.props.modalTransition.baseClass : '',
          timeout: hasTransition ? this.props.modalTransition.timeout : 0
        });

        var backdropTransition = _objectSpread({}, Fade.defaultProps, {}, this.props.backdropTransition, {
          baseClass: hasTransition ? this.props.backdropTransition.baseClass : '',
          timeout: hasTransition ? this.props.backdropTransition.timeout : 0
        });

        var Backdrop = backdrop && (hasTransition ? React__default.createElement(Fade, _extends({}, backdropTransition, {
          "in": isOpen && !!backdrop,
          cssModule: cssModule,
          className: mapToCssModules(classnames('modal-backdrop', backdropClassName), cssModule)
        })) : React__default.createElement("div", {
          className: mapToCssModules(classnames('modal-backdrop', 'show', backdropClassName), cssModule)
        }));
        return React__default.createElement(Portal, {
          node: this._element
        }, React__default.createElement("div", {
          className: mapToCssModules(wrapClassName)
        }, React__default.createElement(Fade, _extends({}, modalAttributes, modalTransition, {
          "in": isOpen,
          onEntered: this.onOpened,
          onExited: this.onClosed,
          cssModule: cssModule,
          className: mapToCssModules(classnames('modal', modalClassName), cssModule),
          innerRef: innerRef
        }), external, this.renderModalDialog()), Backdrop));
      }

      return null;
    };

    return Modal;
  }(React__default.Component);

  Modal.propTypes = propTypes$F;
  Modal.defaultProps = defaultProps$C;
  Modal.openCount = 0;

  var propTypes$G = {
    tag: tagPropType,
    wrapTag: tagPropType,
    toggle: propTypes.func,
    className: propTypes.string,
    cssModule: propTypes.object,
    children: propTypes.node,
    closeAriaLabel: propTypes.string,
    charCode: propTypes.oneOfType([propTypes.string, propTypes.number]),
    close: propTypes.object
  };
  var defaultProps$D = {
    tag: 'h5',
    wrapTag: 'div',
    closeAriaLabel: 'Close',
    charCode: 215
  };

  var ModalHeader = function ModalHeader(props) {
    var closeButton;

    var className = props.className,
        cssModule = props.cssModule,
        children = props.children,
        toggle = props.toggle,
        Tag = props.tag,
        WrapTag = props.wrapTag,
        closeAriaLabel = props.closeAriaLabel,
        charCode = props.charCode,
        close = props.close,
        attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "children", "toggle", "tag", "wrapTag", "closeAriaLabel", "charCode", "close"]);

    var classes = mapToCssModules(classnames(className, 'modal-header'), cssModule);

    if (!close && toggle) {
      var closeIcon = typeof charCode === 'number' ? String.fromCharCode(charCode) : charCode;
      closeButton = React__default.createElement("button", {
        type: "button",
        onClick: toggle,
        className: mapToCssModules('close', cssModule),
        "aria-label": closeAriaLabel
      }, React__default.createElement("span", {
        "aria-hidden": "true"
      }, closeIcon));
    }

    return React__default.createElement(WrapTag, _extends({}, attributes, {
      className: classes
    }), React__default.createElement(Tag, {
      className: mapToCssModules('modal-title', cssModule)
    }, children), close || closeButton);
  };

  ModalHeader.propTypes = propTypes$G;
  ModalHeader.defaultProps = defaultProps$D;

  var propTypes$H = {
    tag: tagPropType,
    className: propTypes.string,
    cssModule: propTypes.object
  };
  var defaultProps$E = {
    tag: 'div'
  };

  var ModalBody = function ModalBody(props) {
    var className = props.className,
        cssModule = props.cssModule,
        Tag = props.tag,
        attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "tag"]);

    var classes = mapToCssModules(classnames(className, 'modal-body'), cssModule);
    return React__default.createElement(Tag, _extends({}, attributes, {
      className: classes
    }));
  };

  ModalBody.propTypes = propTypes$H;
  ModalBody.defaultProps = defaultProps$E;

  var propTypes$I = {
    tag: tagPropType,
    className: propTypes.string,
    cssModule: propTypes.object
  };
  var defaultProps$F = {
    tag: 'div'
  };

  var ModalFooter = function ModalFooter(props) {
    var className = props.className,
        cssModule = props.cssModule,
        Tag = props.tag,
        attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "tag"]);

    var classes = mapToCssModules(classnames(className, 'modal-footer'), cssModule);
    return React__default.createElement(Tag, _extends({}, attributes, {
      className: classes
    }));
  };

  ModalFooter.propTypes = propTypes$I;
  ModalFooter.defaultProps = defaultProps$F;

  var defaultProps$G = {
    placement: 'top',
    autohide: true,
    placementPrefix: 'bs-tooltip',
    trigger: 'click hover focus'
  };

  var Tooltip = function Tooltip(props) {
    var popperClasses = classnames('tooltip', 'show');
    var classes = classnames('tooltip-inner', props.innerClassName);
    return React__default.createElement(TooltipPopoverWrapper, _extends({}, props, {
      popperClassName: popperClasses,
      innerClassName: classes
    }));
  };

  Tooltip.propTypes = propTypes$B;
  Tooltip.defaultProps = defaultProps$G;

  var propTypes$J = {
    className: propTypes.string,
    cssModule: propTypes.object,
    size: propTypes.string,
    bordered: propTypes.bool,
    borderless: propTypes.bool,
    striped: propTypes.bool,
    dark: propTypes.bool,
    hover: propTypes.bool,
    responsive: propTypes.oneOfType([propTypes.bool, propTypes.string]),
    tag: tagPropType,
    responsiveTag: tagPropType,
    innerRef: propTypes.oneOfType([propTypes.func, propTypes.string, propTypes.object])
  };
  var defaultProps$H = {
    tag: 'table',
    responsiveTag: 'div'
  };

  var Table = function Table(props) {
    var className = props.className,
        cssModule = props.cssModule,
        size = props.size,
        bordered = props.bordered,
        borderless = props.borderless,
        striped = props.striped,
        dark = props.dark,
        hover = props.hover,
        responsive = props.responsive,
        Tag = props.tag,
        ResponsiveTag = props.responsiveTag,
        innerRef = props.innerRef,
        attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "size", "bordered", "borderless", "striped", "dark", "hover", "responsive", "tag", "responsiveTag", "innerRef"]);

    var classes = mapToCssModules(classnames(className, 'table', size ? 'table-' + size : false, bordered ? 'table-bordered' : false, borderless ? 'table-borderless' : false, striped ? 'table-striped' : false, dark ? 'table-dark' : false, hover ? 'table-hover' : false), cssModule);
    var table = React__default.createElement(Tag, _extends({}, attributes, {
      ref: innerRef,
      className: classes
    }));

    if (responsive) {
      var responsiveClassName = mapToCssModules(responsive === true ? 'table-responsive' : "table-responsive-" + responsive, cssModule);
      return React__default.createElement(ResponsiveTag, {
        className: responsiveClassName
      }, table);
    }

    return table;
  };

  Table.propTypes = propTypes$J;
  Table.defaultProps = defaultProps$H;

  var propTypes$K = {
    tag: tagPropType,
    flush: propTypes.bool,
    className: propTypes.string,
    cssModule: propTypes.object
  };
  var defaultProps$I = {
    tag: 'ul'
  };

  var ListGroup = function ListGroup(props) {
    var className = props.className,
        cssModule = props.cssModule,
        Tag = props.tag,
        flush = props.flush,
        attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "tag", "flush"]);

    var classes = mapToCssModules(classnames(className, 'list-group', flush ? 'list-group-flush' : false), cssModule);
    return React__default.createElement(Tag, _extends({}, attributes, {
      className: classes
    }));
  };

  ListGroup.propTypes = propTypes$K;
  ListGroup.defaultProps = defaultProps$I;

  var propTypes$L = {
    children: propTypes.node,
    inline: propTypes.bool,
    tag: tagPropType,
    innerRef: propTypes.oneOfType([propTypes.object, propTypes.func, propTypes.string]),
    className: propTypes.string,
    cssModule: propTypes.object
  };
  var defaultProps$J = {
    tag: 'form'
  };

  var Form =
  /*#__PURE__*/
  function (_Component) {
    _inheritsLoose(Form, _Component);

    function Form(props) {
      var _this;

      _this = _Component.call(this, props) || this;
      _this.getRef = _this.getRef.bind(_assertThisInitialized(_this));
      _this.submit = _this.submit.bind(_assertThisInitialized(_this));
      return _this;
    }

    var _proto = Form.prototype;

    _proto.getRef = function getRef(ref) {
      if (this.props.innerRef) {
        this.props.innerRef(ref);
      }

      this.ref = ref;
    };

    _proto.submit = function submit() {
      if (this.ref) {
        this.ref.submit();
      }
    };

    _proto.render = function render() {
      var _this$props = this.props,
          className = _this$props.className,
          cssModule = _this$props.cssModule,
          inline = _this$props.inline,
          Tag = _this$props.tag,
          innerRef = _this$props.innerRef,
          attributes = _objectWithoutPropertiesLoose(_this$props, ["className", "cssModule", "inline", "tag", "innerRef"]);

      var classes = mapToCssModules(classnames(className, inline ? 'form-inline' : false), cssModule);
      return React__default.createElement(Tag, _extends({}, attributes, {
        ref: innerRef,
        className: classes
      }));
    };

    return Form;
  }(React.Component);

  Form.propTypes = propTypes$L;
  Form.defaultProps = defaultProps$J;

  var propTypes$M = {
    children: propTypes.node,
    tag: tagPropType,
    className: propTypes.string,
    cssModule: propTypes.object,
    valid: propTypes.bool,
    tooltip: propTypes.bool
  };
  var defaultProps$K = {
    tag: 'div',
    valid: undefined
  };

  var FormFeedback = function FormFeedback(props) {
    var className = props.className,
        cssModule = props.cssModule,
        valid = props.valid,
        tooltip = props.tooltip,
        Tag = props.tag,
        attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "valid", "tooltip", "tag"]);

    var validMode = tooltip ? 'tooltip' : 'feedback';
    var classes = mapToCssModules(classnames(className, valid ? "valid-" + validMode : "invalid-" + validMode), cssModule);
    return React__default.createElement(Tag, _extends({}, attributes, {
      className: classes
    }));
  };

  FormFeedback.propTypes = propTypes$M;
  FormFeedback.defaultProps = defaultProps$K;

  var propTypes$N = {
    children: propTypes.node,
    row: propTypes.bool,
    check: propTypes.bool,
    inline: propTypes.bool,
    disabled: propTypes.bool,
    tag: tagPropType,
    className: propTypes.string,
    cssModule: propTypes.object
  };
  var defaultProps$L = {
    tag: 'div'
  };

  var FormGroup = function FormGroup(props) {
    var className = props.className,
        cssModule = props.cssModule,
        row = props.row,
        disabled = props.disabled,
        check = props.check,
        inline = props.inline,
        Tag = props.tag,
        attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "row", "disabled", "check", "inline", "tag"]);

    var classes = mapToCssModules(classnames(className, row ? 'row' : false, check ? 'form-check' : 'form-group', check && inline ? 'form-check-inline' : false, check && disabled ? 'disabled' : false), cssModule);

    if (Tag === 'fieldset') {
      attributes.disabled = disabled;
    }

    return React__default.createElement(Tag, _extends({}, attributes, {
      className: classes
    }));
  };

  FormGroup.propTypes = propTypes$N;
  FormGroup.defaultProps = defaultProps$L;

  var propTypes$O = {
    children: propTypes.node,
    inline: propTypes.bool,
    tag: tagPropType,
    color: propTypes.string,
    className: propTypes.string,
    cssModule: propTypes.object
  };
  var defaultProps$M = {
    tag: 'small',
    color: 'muted'
  };

  var FormText = function FormText(props) {
    var className = props.className,
        cssModule = props.cssModule,
        inline = props.inline,
        color = props.color,
        Tag = props.tag,
        attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "inline", "color", "tag"]);

    var classes = mapToCssModules(classnames(className, !inline ? 'form-text' : false, color ? "text-" + color : false), cssModule);
    return React__default.createElement(Tag, _extends({}, attributes, {
      className: classes
    }));
  };

  FormText.propTypes = propTypes$O;
  FormText.defaultProps = defaultProps$M;

  var propTypes$P = {
    children: propTypes.node,
    type: propTypes.string,
    size: propTypes.string,
    bsSize: propTypes.string,
    valid: propTypes.bool,
    invalid: propTypes.bool,
    tag: tagPropType,
    innerRef: propTypes.oneOfType([propTypes.object, propTypes.func, propTypes.string]),
    plaintext: propTypes.bool,
    addon: propTypes.bool,
    className: propTypes.string,
    cssModule: propTypes.object
  };
  var defaultProps$N = {
    type: 'text'
  };

  var Input =
  /*#__PURE__*/
  function (_React$Component) {
    _inheritsLoose(Input, _React$Component);

    function Input(props) {
      var _this;

      _this = _React$Component.call(this, props) || this;
      _this.getRef = _this.getRef.bind(_assertThisInitialized(_this));
      _this.focus = _this.focus.bind(_assertThisInitialized(_this));
      return _this;
    }

    var _proto = Input.prototype;

    _proto.getRef = function getRef(ref) {
      if (this.props.innerRef) {
        this.props.innerRef(ref);
      }

      this.ref = ref;
    };

    _proto.focus = function focus() {
      if (this.ref) {
        this.ref.focus();
      }
    };

    _proto.render = function render() {
      var _this$props = this.props,
          className = _this$props.className,
          cssModule = _this$props.cssModule,
          type = _this$props.type,
          bsSize = _this$props.bsSize,
          valid = _this$props.valid,
          invalid = _this$props.invalid,
          tag = _this$props.tag,
          addon = _this$props.addon,
          plaintext = _this$props.plaintext,
          innerRef = _this$props.innerRef,
          attributes = _objectWithoutPropertiesLoose(_this$props, ["className", "cssModule", "type", "bsSize", "valid", "invalid", "tag", "addon", "plaintext", "innerRef"]);

      var checkInput = ['radio', 'checkbox'].indexOf(type) > -1;
      var isNotaNumber = new RegExp('\\D', 'g');
      var fileInput = type === 'file';
      var textareaInput = type === 'textarea';
      var selectInput = type === 'select';
      var Tag = tag || (selectInput || textareaInput ? type : 'input');
      var formControlClass = 'form-control';

      if (plaintext) {
        formControlClass = formControlClass + "-plaintext";
        Tag = tag || 'input';
      } else if (fileInput) {
        formControlClass = formControlClass + "-file";
      } else if (checkInput) {
        if (addon) {
          formControlClass = null;
        } else {
          formControlClass = 'form-check-input';
        }
      }

      if (attributes.size && isNotaNumber.test(attributes.size)) {
        warnOnce('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.');
        bsSize = attributes.size;
        delete attributes.size;
      }

      var classes = mapToCssModules(classnames(className, invalid && 'is-invalid', valid && 'is-valid', bsSize ? "form-control-" + bsSize : false, formControlClass), cssModule);

      if (Tag === 'input' || tag && typeof tag === 'function') {
        attributes.type = type;
      }

      if (attributes.children && !(plaintext || type === 'select' || typeof Tag !== 'string' || Tag === 'select')) {
        warnOnce("Input with a type of \"" + type + "\" cannot have children. Please use \"value\"/\"defaultValue\" instead.");
        delete attributes.children;
      }

      return React__default.createElement(Tag, _extends({}, attributes, {
        ref: innerRef,
        className: classes
      }));
    };

    return Input;
  }(React__default.Component);

  Input.propTypes = propTypes$P;
  Input.defaultProps = defaultProps$N;

  var propTypes$Q = {
    tag: tagPropType,
    size: propTypes.string,
    className: propTypes.string,
    cssModule: propTypes.object
  };
  var defaultProps$O = {
    tag: 'div'
  };

  var InputGroup = function InputGroup(props) {
    var className = props.className,
        cssModule = props.cssModule,
        Tag = props.tag,
        size = props.size,
        attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "tag", "size"]);

    var classes = mapToCssModules(classnames(className, 'input-group', size ? "input-group-" + size : null), cssModule);
    return React__default.createElement(Tag, _extends({}, attributes, {
      className: classes
    }));
  };

  InputGroup.propTypes = propTypes$Q;
  InputGroup.defaultProps = defaultProps$O;

  var propTypes$R = {
    tag: tagPropType,
    className: propTypes.string,
    cssModule: propTypes.object
  };
  var defaultProps$P = {
    tag: 'span'
  };

  var InputGroupText = function InputGroupText(props) {
    var className = props.className,
        cssModule = props.cssModule,
        Tag = props.tag,
        attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "tag"]);

    var classes = mapToCssModules(classnames(className, 'input-group-text'), cssModule);
    return React__default.createElement(Tag, _extends({}, attributes, {
      className: classes
    }));
  };

  InputGroupText.propTypes = propTypes$R;
  InputGroupText.defaultProps = defaultProps$P;

  var propTypes$S = {
    tag: tagPropType,
    addonType: propTypes.oneOf(['prepend', 'append']).isRequired,
    children: propTypes.node,
    className: propTypes.string,
    cssModule: propTypes.object
  };
  var defaultProps$Q = {
    tag: 'div'
  };

  var InputGroupAddon = function InputGroupAddon(props) {
    var className = props.className,
        cssModule = props.cssModule,
        Tag = props.tag,
        addonType = props.addonType,
        children = props.children,
        attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "tag", "addonType", "children"]);

    var classes = mapToCssModules(classnames(className, 'input-group-' + addonType), cssModule); // Convenience to assist with transition

    if (typeof children === 'string') {
      return React__default.createElement(Tag, _extends({}, attributes, {
        className: classes
      }), React__default.createElement(InputGroupText, {
        children: children
      }));
    }

    return React__default.createElement(Tag, _extends({}, attributes, {
      className: classes,
      children: children
    }));
  };

  InputGroupAddon.propTypes = propTypes$S;
  InputGroupAddon.defaultProps = defaultProps$Q;

  var propTypes$T = {
    addonType: propTypes.oneOf(['prepend', 'append']).isRequired,
    children: propTypes.node
  };

  var InputGroupButtonDropdown = function InputGroupButtonDropdown(props) {
    return React__default.createElement(Dropdown, props);
  };

  InputGroupButtonDropdown.propTypes = propTypes$T;

  var colWidths$1 = ['xs', 'sm', 'md', 'lg', 'xl'];
  var stringOrNumberProp$1 = propTypes.oneOfType([propTypes.number, propTypes.string]);
  var columnProps$1 = propTypes.oneOfType([propTypes.string, propTypes.number, propTypes.shape({
    size: stringOrNumberProp$1,
    order: stringOrNumberProp$1,
    offset: stringOrNumberProp$1
  })]);
  var propTypes$U = {
    children: propTypes.node,
    hidden: propTypes.bool,
    check: propTypes.bool,
    size: propTypes.string,
    "for": propTypes.string,
    tag: tagPropType,
    className: propTypes.string,
    cssModule: propTypes.object,
    xs: columnProps$1,
    sm: columnProps$1,
    md: columnProps$1,
    lg: columnProps$1,
    xl: columnProps$1,
    widths: propTypes.array
  };
  var defaultProps$R = {
    tag: 'label',
    widths: colWidths$1
  };

  var getColumnSizeClass$1 = function getColumnSizeClass(isXs, colWidth, colSize) {
    if (colSize === true || colSize === '') {
      return isXs ? 'col' : "col-" + colWidth;
    } else if (colSize === 'auto') {
      return isXs ? 'col-auto' : "col-" + colWidth + "-auto";
    }

    return isXs ? "col-" + colSize : "col-" + colWidth + "-" + colSize;
  };

  var Label = function Label(props) {
    var className = props.className,
        cssModule = props.cssModule,
        hidden = props.hidden,
        widths = props.widths,
        Tag = props.tag,
        check = props.check,
        size = props.size,
        htmlFor = props["for"],
        attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "hidden", "widths", "tag", "check", "size", "for"]);

    var colClasses = [];
    widths.forEach(function (colWidth, i) {
      var columnProp = props[colWidth];
      delete attributes[colWidth];

      if (!columnProp && columnProp !== '') {
        return;
      }

      var isXs = !i;
      var colClass;

      if (isObject(columnProp)) {
        var _classNames;

        var colSizeInterfix = isXs ? '-' : "-" + colWidth + "-";
        colClass = getColumnSizeClass$1(isXs, colWidth, columnProp.size);
        colClasses.push(mapToCssModules(classnames((_classNames = {}, _classNames[colClass] = columnProp.size || columnProp.size === '', _classNames["order" + colSizeInterfix + columnProp.order] = columnProp.order || columnProp.order === 0, _classNames["offset" + colSizeInterfix + columnProp.offset] = columnProp.offset || columnProp.offset === 0, _classNames))), cssModule);
      } else {
        colClass = getColumnSizeClass$1(isXs, colWidth, columnProp);
        colClasses.push(colClass);
      }
    });
    var classes = mapToCssModules(classnames(className, hidden ? 'sr-only' : false, check ? 'form-check-label' : false, size ? "col-form-label-" + size : false, colClasses, colClasses.length ? 'col-form-label' : false), cssModule);
    return React__default.createElement(Tag, _extends({
      htmlFor: htmlFor
    }, attributes, {
      className: classes
    }));
  };

  Label.propTypes = propTypes$U;
  Label.defaultProps = defaultProps$R;

  var propTypes$V = {
    body: propTypes.bool,
    bottom: propTypes.bool,
    children: propTypes.node,
    className: propTypes.string,
    cssModule: propTypes.object,
    heading: propTypes.bool,
    left: propTypes.bool,
    list: propTypes.bool,
    middle: propTypes.bool,
    object: propTypes.bool,
    right: propTypes.bool,
    tag: tagPropType,
    top: propTypes.bool
  };

  var Media = function Media(props) {
    var body = props.body,
        bottom = props.bottom,
        className = props.className,
        cssModule = props.cssModule,
        heading = props.heading,
        left = props.left,
        list = props.list,
        middle = props.middle,
        object = props.object,
        right = props.right,
        tag = props.tag,
        top = props.top,
        attributes = _objectWithoutPropertiesLoose(props, ["body", "bottom", "className", "cssModule", "heading", "left", "list", "middle", "object", "right", "tag", "top"]);

    var defaultTag;

    if (heading) {
      defaultTag = 'h4';
    } else if (attributes.href) {
      defaultTag = 'a';
    } else if (attributes.src || object) {
      defaultTag = 'img';
    } else if (list) {
      defaultTag = 'ul';
    } else {
      defaultTag = 'div';
    }

    var Tag = tag || defaultTag;
    var classes = mapToCssModules(classnames(className, {
      'media-body': body,
      'media-heading': heading,
      'media-left': left,
      'media-right': right,
      'media-top': top,
      'media-bottom': bottom,
      'media-middle': middle,
      'media-object': object,
      'media-list': list,
      media: !body && !heading && !left && !right && !top && !bottom && !middle && !object && !list
    }), cssModule);
    return React__default.createElement(Tag, _extends({}, attributes, {
      className: classes
    }));
  };

  Media.propTypes = propTypes$V;

  var propTypes$W = {
    active: propTypes.bool,
    children: propTypes.node,
    className: propTypes.string,
    cssModule: propTypes.object,
    disabled: propTypes.bool,
    tag: tagPropType
  };
  var defaultProps$S = {
    tag: 'li'
  };

  var PaginationItem = function PaginationItem(props) {
    var active = props.active,
        className = props.className,
        cssModule = props.cssModule,
        disabled = props.disabled,
        Tag = props.tag,
        attributes = _objectWithoutPropertiesLoose(props, ["active", "className", "cssModule", "disabled", "tag"]);

    var classes = mapToCssModules(classnames(className, 'page-item', {
      active: active,
      disabled: disabled
    }), cssModule);
    return React__default.createElement(Tag, _extends({}, attributes, {
      className: classes
    }));
  };

  PaginationItem.propTypes = propTypes$W;
  PaginationItem.defaultProps = defaultProps$S;

  var propTypes$X = {
    'aria-label': propTypes.string,
    children: propTypes.node,
    className: propTypes.string,
    cssModule: propTypes.object,
    next: propTypes.bool,
    previous: propTypes.bool,
    first: propTypes.bool,
    last: propTypes.bool,
    tag: tagPropType
  };
  var defaultProps$T = {
    tag: 'a'
  };

  var PaginationLink = function PaginationLink(props) {
    var className = props.className,
        cssModule = props.cssModule,
        next = props.next,
        previous = props.previous,
        first = props.first,
        last = props.last,
        Tag = props.tag,
        attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "next", "previous", "first", "last", "tag"]);

    var classes = mapToCssModules(classnames(className, 'page-link'), cssModule);
    var defaultAriaLabel;

    if (previous) {
      defaultAriaLabel = 'Previous';
    } else if (next) {
      defaultAriaLabel = 'Next';
    } else if (first) {
      defaultAriaLabel = 'First';
    } else if (last) {
      defaultAriaLabel = 'Last';
    }

    var ariaLabel = props['aria-label'] || defaultAriaLabel;
    var defaultCaret;

    if (previous) {
      defaultCaret = "\u2039";
    } else if (next) {
      defaultCaret = "\u203A";
    } else if (first) {
      defaultCaret = "\xAB";
    } else if (last) {
      defaultCaret = "\xBB";
    }

    var children = props.children;

    if (children && Array.isArray(children) && children.length === 0) {
      children = null;
    }

    if (!attributes.href && Tag === 'a') {
      Tag = 'button';
    }

    if (previous || next || first || last) {
      children = [React__default.createElement("span", {
        "aria-hidden": "true",
        key: "caret"
      }, children || defaultCaret), React__default.createElement("span", {
        className: "sr-only",
        key: "sr"
      }, ariaLabel)];
    }

    return React__default.createElement(Tag, _extends({}, attributes, {
      className: classes,
      "aria-label": ariaLabel
    }), children);
  };

  PaginationLink.propTypes = propTypes$X;
  PaginationLink.defaultProps = defaultProps$T;

  /**
   * TabContext
   * {
   *  activeTabId: PropTypes.any
   * }
   */

  var TabContext = React__default.createContext({});

  var propTypes$Y = {
    tag: tagPropType,
    activeTab: propTypes.any,
    className: propTypes.string,
    cssModule: propTypes.object
  };
  var defaultProps$U = {
    tag: 'div'
  };

  var TabContent =
  /*#__PURE__*/
  function (_Component) {
    _inheritsLoose(TabContent, _Component);

    TabContent.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, prevState) {
      if (prevState.activeTab !== nextProps.activeTab) {
        return {
          activeTab: nextProps.activeTab
        };
      }

      return null;
    };

    function TabContent(props) {
      var _this;

      _this = _Component.call(this, props) || this;
      _this.state = {
        activeTab: _this.props.activeTab
      };
      return _this;
    }

    var _proto = TabContent.prototype;

    _proto.render = function render() {
      var _this$props = this.props,
          className = _this$props.className,
          cssModule = _this$props.cssModule,
          Tag = _this$props.tag;
      var attributes = omit(this.props, Object.keys(propTypes$Y));
      var classes = mapToCssModules(classnames('tab-content', className), cssModule);
      return React__default.createElement(TabContext.Provider, {
        value: {
          activeTabId: this.state.activeTab
        }
      }, React__default.createElement(Tag, _extends({}, attributes, {
        className: classes
      })));
    };

    return TabContent;
  }(React.Component);

  polyfill(TabContent);
  TabContent.propTypes = propTypes$Y;
  TabContent.defaultProps = defaultProps$U;

  var propTypes$Z = {
    tag: tagPropType,
    className: propTypes.string,
    cssModule: propTypes.object,
    tabId: propTypes.any
  };
  var defaultProps$V = {
    tag: 'div'
  };
  function TabPane(props) {
    var className = props.className,
        cssModule = props.cssModule,
        tabId = props.tabId,
        Tag = props.tag,
        attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "tabId", "tag"]);

    var getClasses = function getClasses(activeTabId) {
      return mapToCssModules(classnames('tab-pane', className, {
        active: tabId === activeTabId
      }), cssModule);
    };

    return React__default.createElement(TabContext.Consumer, null, function (_ref) {
      var activeTabId = _ref.activeTabId;
      return React__default.createElement(Tag, _extends({}, attributes, {
        className: getClasses(activeTabId)
      }));
    });
  }
  TabPane.propTypes = propTypes$Z;
  TabPane.defaultProps = defaultProps$V;

  var propTypes$_ = {
    tag: tagPropType,
    fluid: propTypes.bool,
    className: propTypes.string,
    cssModule: propTypes.object
  };
  var defaultProps$W = {
    tag: 'div'
  };

  var Jumbotron = function Jumbotron(props) {
    var className = props.className,
        cssModule = props.cssModule,
        Tag = props.tag,
        fluid = props.fluid,
        attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "tag", "fluid"]);

    var classes = mapToCssModules(classnames(className, 'jumbotron', fluid ? 'jumbotron-fluid' : false), cssModule);
    return React__default.createElement(Tag, _extends({}, attributes, {
      className: classes
    }));
  };

  Jumbotron.propTypes = propTypes$_;
  Jumbotron.defaultProps = defaultProps$W;

  var propTypes$$ = {
    children: propTypes.node,
    className: propTypes.string,
    closeClassName: propTypes.string,
    closeAriaLabel: propTypes.string,
    cssModule: propTypes.object,
    color: propTypes.string,
    fade: propTypes.bool,
    isOpen: propTypes.bool,
    toggle: propTypes.func,
    tag: tagPropType,
    transition: propTypes.shape(Fade.propTypes),
    innerRef: propTypes.oneOfType([propTypes.object, propTypes.string, propTypes.func])
  };
  var defaultProps$X = {
    color: 'success',
    isOpen: true,
    tag: 'div',
    closeAriaLabel: 'Close',
    fade: true,
    transition: _objectSpread({}, Fade.defaultProps, {
      unmountOnExit: true
    })
  };

  function Alert(props) {
    var className = props.className,
        closeClassName = props.closeClassName,
        closeAriaLabel = props.closeAriaLabel,
        cssModule = props.cssModule,
        Tag = props.tag,
        color = props.color,
        isOpen = props.isOpen,
        toggle = props.toggle,
        children = props.children,
        transition = props.transition,
        fade = props.fade,
        innerRef = props.innerRef,
        attributes = _objectWithoutPropertiesLoose(props, ["className", "closeClassName", "closeAriaLabel", "cssModule", "tag", "color", "isOpen", "toggle", "children", "transition", "fade", "innerRef"]);

    var classes = mapToCssModules(classnames(className, 'alert', "alert-" + color, {
      'alert-dismissible': toggle
    }), cssModule);
    var closeClasses = mapToCssModules(classnames('close', closeClassName), cssModule);

    var alertTransition = _objectSpread({}, Fade.defaultProps, {}, transition, {
      baseClass: fade ? transition.baseClass : '',
      timeout: fade ? transition.timeout : 0
    });

    return React__default.createElement(Fade, _extends({}, attributes, alertTransition, {
      tag: Tag,
      className: classes,
      "in": isOpen,
      role: "alert",
      innerRef: innerRef
    }), toggle ? React__default.createElement("button", {
      type: "button",
      className: closeClasses,
      "aria-label": closeAriaLabel,
      onClick: toggle
    }, React__default.createElement("span", {
      "aria-hidden": "true"
    }, "\xD7")) : null, children);
  }

  Alert.propTypes = propTypes$$;
  Alert.defaultProps = defaultProps$X;

  var _transitionStatusToCl;

  var propTypes$10 = _objectSpread({}, reactTransitionGroup_1.propTypes, {
    isOpen: propTypes.bool,
    children: propTypes.oneOfType([propTypes.arrayOf(propTypes.node), propTypes.node]),
    tag: tagPropType,
    className: propTypes.node,
    navbar: propTypes.bool,
    cssModule: propTypes.object,
    innerRef: propTypes.oneOfType([propTypes.func, propTypes.string, propTypes.object])
  });

  var defaultProps$Y = _objectSpread({}, reactTransitionGroup_1.defaultProps, {
    isOpen: false,
    appear: false,
    enter: true,
    exit: true,
    tag: 'div',
    timeout: TransitionTimeouts.Collapse
  });

  var transitionStatusToClassHash = (_transitionStatusToCl = {}, _transitionStatusToCl[TransitionStatuses.ENTERING] = 'collapsing', _transitionStatusToCl[TransitionStatuses.ENTERED] = 'collapse show', _transitionStatusToCl[TransitionStatuses.EXITING] = 'collapsing', _transitionStatusToCl[TransitionStatuses.EXITED] = 'collapse', _transitionStatusToCl);

  function getTransitionClass(status) {
    return transitionStatusToClassHash[status] || 'collapse';
  }

  function getHeight(node) {
    return node.scrollHeight;
  }

  var Collapse =
  /*#__PURE__*/
  function (_Component) {
    _inheritsLoose(Collapse, _Component);

    function Collapse(props) {
      var _this;

      _this = _Component.call(this, props) || this;
      _this.state = {
        height: null
      };
      ['onEntering', 'onEntered', 'onExit', 'onExiting', 'onExited'].forEach(function (name) {
        _this[name] = _this[name].bind(_assertThisInitialized(_this));
      });
      return _this;
    }

    var _proto = Collapse.prototype;

    _proto.onEntering = function onEntering(node, isAppearing) {
      this.setState({
        height: getHeight(node)
      });
      this.props.onEntering(node, isAppearing);
    };

    _proto.onEntered = function onEntered(node, isAppearing) {
      this.setState({
        height: null
      });
      this.props.onEntered(node, isAppearing);
    };

    _proto.onExit = function onExit(node) {
      this.setState({
        height: getHeight(node)
      });
      this.props.onExit(node);
    };

    _proto.onExiting = function onExiting(node) {
      // getting this variable triggers a reflow
      var _unused = node.offsetHeight; // eslint-disable-line no-unused-vars

      this.setState({
        height: 0
      });
      this.props.onExiting(node);
    };

    _proto.onExited = function onExited(node) {
      this.setState({
        height: null
      });
      this.props.onExited(node);
    };

    _proto.render = function render() {
      var _this2 = this;

      var _this$props = this.props,
          Tag = _this$props.tag,
          isOpen = _this$props.isOpen,
          className = _this$props.className,
          navbar = _this$props.navbar,
          cssModule = _this$props.cssModule,
          children = _this$props.children,
          innerRef = _this$props.innerRef,
          otherProps = _objectWithoutPropertiesLoose(_this$props, ["tag", "isOpen", "className", "navbar", "cssModule", "children", "innerRef"]);

      var height = this.state.height;
      var transitionProps = pick(otherProps, TransitionPropTypeKeys);
      var childProps = omit(otherProps, TransitionPropTypeKeys);
      return React__default.createElement(reactTransitionGroup_1, _extends({}, transitionProps, {
        "in": isOpen,
        onEntering: this.onEntering,
        onEntered: this.onEntered,
        onExit: this.onExit,
        onExiting: this.onExiting,
        onExited: this.onExited
      }), function (status) {
        var collapseClass = getTransitionClass(status);
        var classes = mapToCssModules(classnames(className, collapseClass, navbar && 'navbar-collapse'), cssModule);
        var style = height === null ? null : {
          height: height
        };
        return React__default.createElement(Tag, _extends({}, childProps, {
          style: _objectSpread({}, childProps.style, {}, style),
          className: classes,
          ref: _this2.props.innerRef,
          "aria-expanded": isOpen ? 'true' : 'false'
        }), children);
      });
    };

    return Collapse;
  }(React.Component);

  Collapse.propTypes = propTypes$10;
  Collapse.defaultProps = defaultProps$Y;

  var propTypes$11 = {
    tag: tagPropType,
    active: propTypes.bool,
    disabled: propTypes.bool,
    color: propTypes.string,
    action: propTypes.bool,
    className: propTypes.any,
    cssModule: propTypes.object
  };
  var defaultProps$Z = {
    tag: 'li'
  };

  var handleDisabledOnClick = function handleDisabledOnClick(e) {
    e.preventDefault();
  };

  var ListGroupItem = function ListGroupItem(props) {
    var className = props.className,
        cssModule = props.cssModule,
        Tag = props.tag,
        active = props.active,
        disabled = props.disabled,
        action = props.action,
        color = props.color,
        attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "tag", "active", "disabled", "action", "color"]);

    var classes = mapToCssModules(classnames(className, active ? 'active' : false, disabled ? 'disabled' : false, action ? 'list-group-item-action' : false, color ? "list-group-item-" + color : false, 'list-group-item'), cssModule); // Prevent click event when disabled.

    if (disabled) {
      attributes.onClick = handleDisabledOnClick;
    }

    return React__default.createElement(Tag, _extends({}, attributes, {
      className: classes
    }));
  };

  ListGroupItem.propTypes = propTypes$11;
  ListGroupItem.defaultProps = defaultProps$Z;

  var propTypes$12 = {
    tag: tagPropType,
    className: propTypes.any,
    cssModule: propTypes.object
  };
  var defaultProps$_ = {
    tag: 'h5'
  };

  var ListGroupItemHeading = function ListGroupItemHeading(props) {
    var className = props.className,
        cssModule = props.cssModule,
        Tag = props.tag,
        attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "tag"]);

    var classes = mapToCssModules(classnames(className, 'list-group-item-heading'), cssModule);
    return React__default.createElement(Tag, _extends({}, attributes, {
      className: classes
    }));
  };

  ListGroupItemHeading.propTypes = propTypes$12;
  ListGroupItemHeading.defaultProps = defaultProps$_;

  var propTypes$13 = {
    tag: tagPropType,
    className: propTypes.any,
    cssModule: propTypes.object
  };
  var defaultProps$$ = {
    tag: 'p'
  };

  var ListGroupItemText = function ListGroupItemText(props) {
    var className = props.className,
        cssModule = props.cssModule,
        Tag = props.tag,
        attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "tag"]);

    var classes = mapToCssModules(classnames(className, 'list-group-item-text'), cssModule);
    return React__default.createElement(Tag, _extends({}, attributes, {
      className: classes
    }));
  };

  ListGroupItemText.propTypes = propTypes$13;
  ListGroupItemText.defaultProps = defaultProps$$;

  var UncontrolledAlert =
  /*#__PURE__*/
  function (_Component) {
    _inheritsLoose(UncontrolledAlert, _Component);

    function UncontrolledAlert(props) {
      var _this;

      _this = _Component.call(this, props) || this;
      _this.state = {
        isOpen: true
      };
      _this.toggle = _this.toggle.bind(_assertThisInitialized(_this));
      return _this;
    }

    var _proto = UncontrolledAlert.prototype;

    _proto.toggle = function toggle() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    };

    _proto.render = function render() {
      return React__default.createElement(Alert, _extends({
        isOpen: this.state.isOpen,
        toggle: this.toggle
      }, this.props));
    };

    return UncontrolledAlert;
  }(React.Component);

  var omitKeys = ['defaultOpen'];

  var UncontrolledButtonDropdown =
  /*#__PURE__*/
  function (_Component) {
    _inheritsLoose(UncontrolledButtonDropdown, _Component);

    function UncontrolledButtonDropdown(props) {
      var _this;

      _this = _Component.call(this, props) || this;
      _this.state = {
        isOpen: props.defaultOpen || false
      };
      _this.toggle = _this.toggle.bind(_assertThisInitialized(_this));
      return _this;
    }

    var _proto = UncontrolledButtonDropdown.prototype;

    _proto.toggle = function toggle() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    };

    _proto.render = function render() {
      return React__default.createElement(ButtonDropdown, _extends({
        isOpen: this.state.isOpen,
        toggle: this.toggle
      }, omit(this.props, omitKeys)));
    };

    return UncontrolledButtonDropdown;
  }(React.Component);
  UncontrolledButtonDropdown.propTypes = _objectSpread({
    defaultOpen: propTypes.bool
  }, ButtonDropdown.propTypes);

  var omitKeys$1 = ['toggleEvents', 'defaultOpen'];
  var propTypes$14 = {
    defaultOpen: propTypes.bool,
    toggler: propTypes.string.isRequired,
    toggleEvents: propTypes.arrayOf(propTypes.string)
  };
  var defaultProps$10 = {
    toggleEvents: defaultToggleEvents
  };

  var UncontrolledCollapse =
  /*#__PURE__*/
  function (_Component) {
    _inheritsLoose(UncontrolledCollapse, _Component);

    function UncontrolledCollapse(props) {
      var _this;

      _this = _Component.call(this, props) || this;
      _this.togglers = null;
      _this.removeEventListeners = null;
      _this.toggle = _this.toggle.bind(_assertThisInitialized(_this));
      _this.state = {
        isOpen: props.defaultOpen || false
      };
      return _this;
    }

    var _proto = UncontrolledCollapse.prototype;

    _proto.componentDidMount = function componentDidMount() {
      this.togglers = findDOMElements(this.props.toggler);

      if (this.togglers.length) {
        this.removeEventListeners = addMultipleEventListeners(this.togglers, this.toggle, this.props.toggleEvents);
      }
    };

    _proto.componentWillUnmount = function componentWillUnmount() {
      if (this.togglers.length && this.removeEventListeners) {
        this.removeEventListeners();
      }
    };

    _proto.toggle = function toggle(e) {
      this.setState(function (_ref) {
        var isOpen = _ref.isOpen;
        return {
          isOpen: !isOpen
        };
      });
      e.preventDefault();
    };

    _proto.render = function render() {
      return React__default.createElement(Collapse, _extends({
        isOpen: this.state.isOpen
      }, omit(this.props, omitKeys$1)));
    };

    return UncontrolledCollapse;
  }(React.Component);

  UncontrolledCollapse.propTypes = propTypes$14;
  UncontrolledCollapse.defaultProps = defaultProps$10;

  var omitKeys$2 = ['defaultOpen'];

  var UncontrolledDropdown =
  /*#__PURE__*/
  function (_Component) {
    _inheritsLoose(UncontrolledDropdown, _Component);

    function UncontrolledDropdown(props) {
      var _this;

      _this = _Component.call(this, props) || this;
      _this.state = {
        isOpen: props.defaultOpen || false
      };
      _this.toggle = _this.toggle.bind(_assertThisInitialized(_this));
      return _this;
    }

    var _proto = UncontrolledDropdown.prototype;

    _proto.toggle = function toggle() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    };

    _proto.render = function render() {
      return React__default.createElement(Dropdown, _extends({
        isOpen: this.state.isOpen,
        toggle: this.toggle
      }, omit(this.props, omitKeys$2)));
    };

    return UncontrolledDropdown;
  }(React.Component);
  UncontrolledDropdown.propTypes = _objectSpread({
    defaultOpen: propTypes.bool
  }, Dropdown.propTypes);

  var omitKeys$3 = ['defaultOpen'];

  var UncontrolledTooltip =
  /*#__PURE__*/
  function (_Component) {
    _inheritsLoose(UncontrolledTooltip, _Component);

    function UncontrolledTooltip(props) {
      var _this;

      _this = _Component.call(this, props) || this;
      _this.state = {
        isOpen: props.defaultOpen || false
      };
      _this.toggle = _this.toggle.bind(_assertThisInitialized(_this));
      return _this;
    }

    var _proto = UncontrolledTooltip.prototype;

    _proto.toggle = function toggle() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    };

    _proto.render = function render() {
      return React__default.createElement(Tooltip, _extends({
        isOpen: this.state.isOpen,
        toggle: this.toggle
      }, omit(this.props, omitKeys$3)));
    };

    return UncontrolledTooltip;
  }(React.Component);
  UncontrolledTooltip.propTypes = _objectSpread({
    defaultOpen: propTypes.bool
  }, Tooltip.propTypes);

  var _extends_1 = createCommonjsModule(function (module) {
    function _extends() {
      module.exports = _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];

          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }

        return target;
      };

      return _extends.apply(this, arguments);
    }

    module.exports = _extends;
  });

  function _defineProperty$1(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  var defineProperty = _defineProperty$1;

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
        arr2[i] = arr[i];
      }

      return arr2;
    }
  }

  var arrayWithoutHoles = _arrayWithoutHoles;

  function _iterableToArray(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
  }

  var iterableToArray = _iterableToArray;

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
  }

  var nonIterableSpread = _nonIterableSpread;

  function _toConsumableArray(arr) {
    return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();
  }

  var toConsumableArray = _toConsumableArray;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var classCallCheck = _classCallCheck;

  var _typeof_1 = createCommonjsModule(function (module) {
    function _typeof2(obj) {
      if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
        _typeof2 = function _typeof2(obj) {
          return typeof obj;
        };
      } else {
        _typeof2 = function _typeof2(obj) {
          return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
        };
      }

      return _typeof2(obj);
    }

    function _typeof(obj) {
      if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
        module.exports = _typeof = function _typeof(obj) {
          return _typeof2(obj);
        };
      } else {
        module.exports = _typeof = function _typeof(obj) {
          return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
        };
      }

      return _typeof(obj);
    }

    module.exports = _typeof;
  });

  function _assertThisInitialized$1(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  var assertThisInitialized = _assertThisInitialized$1;

  function _possibleConstructorReturn(self, call) {
    if (call && (_typeof_1(call) === "object" || typeof call === "function")) {
      return call;
    }

    return assertThisInitialized(self);
  }

  var possibleConstructorReturn = _possibleConstructorReturn;

  var getPrototypeOf = createCommonjsModule(function (module) {
    function _getPrototypeOf(o) {
      module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      };
      return _getPrototypeOf(o);
    }

    module.exports = _getPrototypeOf;
  });

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  var createClass = _createClass;

  var setPrototypeOf = createCommonjsModule(function (module) {
    function _setPrototypeOf(o, p) {
      module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
      };

      return _setPrototypeOf(o, p);
    }

    module.exports = _setPrototypeOf;
  });

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) setPrototypeOf(subClass, superClass);
  }

  var inherits = _inherits;

  var throttle_1 = createCommonjsModule(function (module, exports) {

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;

    var throttle = function throttle(fn) {
      var threshold = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
      var last;
      var timer;
      return function () {
        var now = +new Date();
        var timePassed = !!last && now < last + threshold;

        if (timePassed) {
          clearTimeout(timer);
          timer = setTimeout(function () {
            last = now;
            fn();
          }, threshold);
        } else {
          last = now;
          fn();
        }
      };
    };

    var _default = throttle;
    exports["default"] = _default;
  });
  unwrapExports(throttle_1);

  var Scrollspy_1 = createCommonjsModule(function (module, exports) {

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports["default"] = void 0;

    var _extends2 = interopRequireDefault(_extends_1);

    var _defineProperty2 = interopRequireDefault(defineProperty);

    var _toConsumableArray2 = interopRequireDefault(toConsumableArray);

    var _classCallCheck2 = interopRequireDefault(classCallCheck);

    var _possibleConstructorReturn2 = interopRequireDefault(possibleConstructorReturn);

    var _getPrototypeOf2 = interopRequireDefault(getPrototypeOf);

    var _assertThisInitialized2 = interopRequireDefault(assertThisInitialized);

    var _createClass2 = interopRequireDefault(createClass);

    var _inherits2 = interopRequireDefault(inherits);

    var _propTypes = interopRequireDefault(propTypes);

    var _react = interopRequireDefault(React__default);

    var _classnames = interopRequireDefault(classnames);

    var _throttle = interopRequireDefault(throttle_1);

    function isEqualArray(a, b) {
      return a.length === b.length && a.every(function (item, index) {
        return item === b[index];
      });
    }

    var Scrollspy =
    /*#__PURE__*/
    function (_React$Component) {
      (0, _inherits2["default"])(Scrollspy, _React$Component);
      (0, _createClass2["default"])(Scrollspy, null, [{
        key: "propTypes",
        get: function get() {
          return {
            items: _propTypes["default"].arrayOf(_propTypes["default"].string).isRequired,
            currentClassName: _propTypes["default"].string.isRequired,
            scrolledPastClassName: _propTypes["default"].string,
            style: _propTypes["default"].object,
            componentTag: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].func]),
            offset: _propTypes["default"].number,
            rootEl: _propTypes["default"].string,
            onUpdate: _propTypes["default"].func
          };
        }
      }, {
        key: "defaultProps",
        get: function get() {
          return {
            items: [],
            currentClassName: '',
            style: {},
            componentTag: 'ul',
            offset: 0,
            onUpdate: function onUpdate() {}
          };
        }
      }]);

      function Scrollspy(props) {
        var _this;

        (0, _classCallCheck2["default"])(this, Scrollspy);
        _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Scrollspy).call(this, props));
        _this.state = {
          targetItems: [],
          inViewState: [],
          isScrolledPast: [] // manually bind as ES6 does not apply this
          // auto binding as React.createClass does

        };
        _this._handleSpy = _this._handleSpy.bind((0, _assertThisInitialized2["default"])(_this));
        return _this;
      }

      (0, _createClass2["default"])(Scrollspy, [{
        key: "_initSpyTarget",
        value: function _initSpyTarget(items) {
          var targetItems = items.map(function (item) {
            return document.getElementById(item);
          });
          return targetItems;
        } // https://github.com/makotot/react-scrollspy/pull/45

      }, {
        key: "_fillArray",
        value: function _fillArray(array, val) {
          var newArray = [];

          for (var i = 0, max = array.length; i < max; i++) {
            newArray[i] = val;
          }

          return newArray;
        }
      }, {
        key: "_isScrolled",
        value: function _isScrolled() {
          return this._getScrollDimension().scrollTop > 0;
        }
      }, {
        key: "_getScrollDimension",
        value: function _getScrollDimension() {
          var doc = document;
          var rootEl = this.props.rootEl;
          var scrollTop = rootEl ? doc.querySelector(rootEl).scrollTop : doc.documentElement.scrollTop || doc.body.parentNode.scrollTop || doc.body.scrollTop;
          var scrollHeight = rootEl ? doc.querySelector(rootEl).scrollHeight : doc.documentElement.scrollHeight || doc.body.parentNode.scrollHeight || doc.body.scrollHeight;
          return {
            scrollTop: scrollTop,
            scrollHeight: scrollHeight
          };
        }
      }, {
        key: "_getElemsViewState",
        value: function _getElemsViewState(targets) {
          var elemsInView = [];
          var elemsOutView = [];
          var viewStatusList = [];
          var targetItems = targets ? targets : this.state.targetItems;
          var hasInViewAlready = false;

          for (var i = 0, max = targetItems.length; i < max; i++) {
            var currentContent = targetItems[i];
            var isInView = hasInViewAlready ? false : this._isInView(currentContent);

            if (isInView) {
              hasInViewAlready = true;
              elemsInView.push(currentContent);
            } else {
              elemsOutView.push(currentContent);
            }

            var isLastItem = i === max - 1;

            var isScrolled = this._isScrolled(); // https://github.com/makotot/react-scrollspy/pull/26#issue-167413769


            var isLastShortItemAtBottom = this._isAtBottom() && this._isInView(currentContent) && !isInView && isLastItem && isScrolled;

            if (isLastShortItemAtBottom) {
              elemsOutView.pop();
              elemsOutView.push.apply(elemsOutView, (0, _toConsumableArray2["default"])(elemsInView));
              elemsInView = [currentContent];
              viewStatusList = this._fillArray(viewStatusList, false);
              isInView = true;
            }

            viewStatusList.push(isInView);
          }

          return {
            inView: elemsInView,
            outView: elemsOutView,
            viewStatusList: viewStatusList,
            scrolledPast: this.props.scrolledPastClassName && this._getScrolledPast(viewStatusList)
          };
        }
      }, {
        key: "_isInView",
        value: function _isInView(el) {
          if (!el) {
            return false;
          }

          var _this$props = this.props,
              rootEl = _this$props.rootEl,
              offset = _this$props.offset;
          var rootRect;

          if (rootEl) {
            rootRect = document.querySelector(rootEl).getBoundingClientRect();
          }

          var rect = el.getBoundingClientRect();
          var winH = rootEl ? rootRect.height : window.innerHeight;

          var _this$_getScrollDimen = this._getScrollDimension(),
              scrollTop = _this$_getScrollDimen.scrollTop;

          var scrollBottom = scrollTop + winH;
          var elTop = rootEl ? rect.top + scrollTop - rootRect.top + offset : rect.top + scrollTop + offset;
          var elBottom = elTop + el.offsetHeight;
          return elTop < scrollBottom && elBottom > scrollTop;
        }
      }, {
        key: "_isAtBottom",
        value: function _isAtBottom() {
          var rootEl = this.props.rootEl;

          var _this$_getScrollDimen2 = this._getScrollDimension(),
              scrollTop = _this$_getScrollDimen2.scrollTop,
              scrollHeight = _this$_getScrollDimen2.scrollHeight;

          var winH = rootEl ? document.querySelector(rootEl).getBoundingClientRect().height : window.innerHeight;
          var scrolledToBottom = scrollTop + winH >= scrollHeight;
          return scrolledToBottom;
        }
      }, {
        key: "_getScrolledPast",
        value: function _getScrolledPast(viewStatusList) {
          if (!viewStatusList.some(function (item) {
            return item;
          })) {
            return viewStatusList;
          }

          var hasFoundInView = false;
          var scrolledPastItems = viewStatusList.map(function (item) {
            if (item && !hasFoundInView) {
              hasFoundInView = true;
              return false;
            }

            return !hasFoundInView;
          });
          return scrolledPastItems;
        }
      }, {
        key: "_spy",
        value: function _spy(targets) {
          var _this2 = this;

          var elemensViewState = this._getElemsViewState(targets);

          var currentStatuses = this.state.inViewState;
          this.setState({
            inViewState: elemensViewState.viewStatusList,
            isScrolledPast: elemensViewState.scrolledPast
          }, function () {
            _this2._update(currentStatuses);
          });
        }
      }, {
        key: "_update",
        value: function _update(prevStatuses) {
          if (isEqualArray(this.state.inViewState, prevStatuses)) {
            return;
          }

          this.props.onUpdate(this.state.targetItems[this.state.inViewState.indexOf(true)]);
        }
      }, {
        key: "_handleSpy",
        value: function _handleSpy() {
          (0, _throttle["default"])(this._spy(), 100);
        }
      }, {
        key: "_initFromProps",
        value: function _initFromProps() {
          var targetItems = this._initSpyTarget(this.props.items);

          this.setState({
            targetItems: targetItems
          });

          this._spy(targetItems);
        }
      }, {
        key: "offEvent",
        value: function offEvent() {
          var el = this.props.rootEl ? document.querySelector(this.props.rootEl) : window;
          el.removeEventListener('scroll', this._handleSpy);
        }
      }, {
        key: "onEvent",
        value: function onEvent() {
          var el = this.props.rootEl ? document.querySelector(this.props.rootEl) : window;
          el.addEventListener('scroll', this._handleSpy);
        }
      }, {
        key: "componentDidMount",
        value: function componentDidMount() {
          this._initFromProps();

          this.onEvent();
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          this.offEvent();
        }
      }, {
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps() {
          this._initFromProps();
        }
      }, {
        key: "render",
        value: function render() {
          var _this3 = this;

          var Tag = this.props.componentTag;
          var _this$props2 = this.props,
              children = _this$props2.children,
              className = _this$props2.className,
              scrolledPastClassName = _this$props2.scrolledPastClassName,
              style = _this$props2.style;
          var counter = 0;

          var items = _react["default"].Children.map(children, function (child, idx) {
            var _classNames;

            if (!child) {
              return null;
            }

            var ChildTag = child.type;
            var isScrolledPast = scrolledPastClassName && _this3.state.isScrolledPast[idx];
            var childClass = (0, _classnames["default"])((_classNames = {}, (0, _defineProperty2["default"])(_classNames, "".concat(child.props.className), child.props.className), (0, _defineProperty2["default"])(_classNames, "".concat(_this3.props.currentClassName), _this3.state.inViewState[idx]), (0, _defineProperty2["default"])(_classNames, "".concat(_this3.props.scrolledPastClassName), isScrolledPast), _classNames));
            return _react["default"].createElement(ChildTag, (0, _extends2["default"])({}, child.props, {
              className: childClass,
              key: counter++
            }), child.props.children);
          });

          var itemClass = (0, _classnames["default"])((0, _defineProperty2["default"])({}, "".concat(className), className));
          return _react["default"].createElement(Tag, {
            className: itemClass,
            style: style
          }, items);
        }
      }]);
      return Scrollspy;
    }(_react["default"].Component);

    exports["default"] = Scrollspy;
  });
  var Scrollspy = unwrapExports(Scrollspy_1);

  function _defineProperty$2(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _extends$1() {
    _extends$1 = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends$1.apply(this, arguments);
  }

  function _inheritsLoose$1(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
  }

  function _objectWithoutPropertiesLoose$1(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }

    return target;
  }

  function _assertThisInitialized$2(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  var propTypes$15 = {
    tag: propTypes.oneOfType([propTypes.func, propTypes.string]),
    className: propTypes.string
  };
  var defaultProps$11 = {
    tag: 'div'
  };
  function Accordion(props) {
    var className = props.className,
        Tag = props.tag,
        attributes = _objectWithoutPropertiesLoose$1(props, ["className", "tag"]);

    var classes = classnames('collapse-div', className);
    return React__default.createElement(Tag, _extends$1({}, attributes, {
      className: classes
    }));
  }
  Accordion.propTypes = propTypes$15;
  Accordion.defaultProps = defaultProps$11;

  var propTypes$16 = {
    tag: propTypes.oneOfType([propTypes.func, propTypes.string]),
    className: propTypes.string,
    active: propTypes.bool,
    onToggle: propTypes.func
  };
  var defaultProps$12 = {
    tag: 'button'
  };
  function AccordionHeader(props) {
    var className = props.className,
        Tag = props.tag,
        active = props.active,
        onToggle = props.onToggle,
        attributes = _objectWithoutPropertiesLoose$1(props, ["className", "tag", "active", "onToggle"]);

    var classes = classnames('collapse-header');
    var toggleClasses = classnames(className, {
      collapsed: active
    });
    return React__default.createElement("div", {
      className: classes
    }, React__default.createElement(Tag, _extends$1({
      "data-toggle": "collapse",
      "aria-expanded": active ? 'true' : 'false',
      className: toggleClasses,
      onClick: onToggle
    }, attributes)));
  }
  AccordionHeader.propTypes = propTypes$16;
  AccordionHeader.defaultProps = defaultProps$12;

  var _transitionStatusToCl$1;
  var TransitionTimeouts$1 = TransitionTimeouts,
      TransitionPropTypeKeys$1 = TransitionPropTypeKeys,
      TransitionStatuses$1 = TransitionStatuses,
      pick$1 = pick,
      omit$1 = omit;

  var propTypes$17 = _extends$1({}, Transition.propTypes, {
    // eslint-disable-line react/forbid-foreign-prop-types
    children: propTypes.oneOfType([propTypes.arrayOf(propTypes.node), propTypes.node]),
    tag: propTypes.oneOfType([propTypes.func, propTypes.string]),
    className: propTypes.string,
    active: propTypes.bool,
    onToggle: propTypes.func
  });

  var defaultProps$13 = _extends$1({}, Transition.defaultProps, {
    timeout: TransitionTimeouts$1.Collapse,
    tag: 'div'
  });

  var transitionStatusToClassHash$1 = (_transitionStatusToCl$1 = {}, _transitionStatusToCl$1[TransitionStatuses$1.ENTERING] = 'collapsing', _transitionStatusToCl$1[TransitionStatuses$1.ENTERED] = 'collapse show', _transitionStatusToCl$1[TransitionStatuses$1.EXITING] = 'collapsing', _transitionStatusToCl$1[TransitionStatuses$1.EXITED] = 'collapse', _transitionStatusToCl$1);

  function getTransitionClass$1(status) {
    return transitionStatusToClassHash$1[status] || 'collapse';
  }

  function getHeight$1(node) {
    return node.scrollHeight;
  }

  var AccordionBody =
  /*#__PURE__*/
  function (_Component) {
    _inheritsLoose$1(AccordionBody, _Component);

    function AccordionBody() {
      var _this;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _Component.call.apply(_Component, [this].concat(args)) || this;

      _defineProperty$2(_assertThisInitialized$2(_this), "state", {
        height: null
      });

      _defineProperty$2(_assertThisInitialized$2(_this), "onEntering", function (node, isAppearing) {
        _this.setState({
          height: getHeight$1(node)
        });

        _this.props.onEntering(node, isAppearing);
      });

      _defineProperty$2(_assertThisInitialized$2(_this), "onEntered", function (node, isAppearing) {
        _this.setState({
          height: null
        });

        _this.props.onEntered(node, isAppearing);
      });

      _defineProperty$2(_assertThisInitialized$2(_this), "onExit", function (node) {
        _this.setState({
          height: getHeight$1(node)
        });

        _this.props.onExit(node);
      });

      _defineProperty$2(_assertThisInitialized$2(_this), "onExiting", function (node) {
        // getting this variable triggers a reflow
        var _unused = node.offsetHeight; // eslint-disable-line no-unused-vars

        _this.setState({
          height: 0
        });

        _this.props.onExiting(node);
      });

      _defineProperty$2(_assertThisInitialized$2(_this), "onExited", function (node) {
        _this.setState({
          height: null
        });

        _this.props.onExited(node);
      });

      return _this;
    }

    var _proto = AccordionBody.prototype;

    _proto.render = function render() {
      var _this$props = this.props,
          className = _this$props.className,
          Tag = _this$props.tag,
          active = _this$props.active,
          children = _this$props.children,
          attributes = _objectWithoutPropertiesLoose$1(_this$props, ["className", "tag", "active", "children"]);

      var height = this.state.height;
      var transitionProps = pick$1(attributes, TransitionPropTypeKeys$1);
      var childProps = omit$1(attributes, TransitionPropTypeKeys$1);
      return React__default.createElement(Transition, _extends$1({}, transitionProps, {
        "in": active,
        onEntering: this.onEntering,
        onEntered: this.onEntered,
        onExit: this.onExit,
        onExiting: this.onExiting,
        onExited: this.onExited
      }), function (status) {
        var transitionClass = getTransitionClass$1(status);
        var classes = classnames(className, transitionClass);
        var style = height === null ? null : {
          height: height
        };
        return React__default.createElement(Tag, _extends$1({
          className: classes,
          style: _extends$1({}, childProps.style, {}, style)
        }, childProps), React__default.createElement("div", {
          className: "collapse-body"
        }, children));
      });
    };

    return AccordionBody;
  }(React.Component);
  AccordionBody.propTypes = propTypes$17;
  AccordionBody.defaultProps = defaultProps$13;

  var propTypes$18 = {
    tag: propTypes.oneOfType([propTypes.func, propTypes.string]),
    className: propTypes.string
  };
  var defaultProps$14 = {
    tag: 'div'
  };

  var AvatarContainer = function AvatarContainer(props) {
    var className = props.className,
        Tag = props.tag,
        attributes = _objectWithoutPropertiesLoose$1(props, ["className", "tag"]);

    var wrapperClasses = classnames('d-flex align-items-center justify-content-around flex-wrap flex-sm-nowrap', className);
    return React__default.createElement(Tag, _extends$1({}, attributes, {
      className: wrapperClasses
    }));
  };

  AvatarContainer.propTypes = propTypes$18;
  AvatarContainer.defaultProps = defaultProps$14;

  var propTypes$19 = {
    tag: propTypes.oneOfType([propTypes.func, propTypes.string]),
    className: propTypes.string,
    wrapperClassName: propTypes.string
  };
  var defaultProps$15 = {
    tag: 'ul'
  };

  var AvatarGroupContainer = function AvatarGroupContainer(props) {
    var className = props.className,
        Tag = props.tag,
        wrapperClassName = props.wrapperClassName,
        attributes = _objectWithoutPropertiesLoose$1(props, ["className", "tag", "wrapperClassName"]);

    var wrapperClasses = classnames('avatar-group-stacked', wrapperClassName);
    return React__default.createElement(Tag, _extends$1({}, attributes, {
      className: wrapperClasses
    }));
  };

  AvatarGroupContainer.propTypes = propTypes$19;
  AvatarGroupContainer.defaultProps = defaultProps$15;

  var propTypes$1a = {
    tag: propTypes.oneOfType([propTypes.func, propTypes.string]),
    className: propTypes.string
  };
  var defaultProps$16 = {
    tag: 'div'
  };

  var AvatarExtraText = function AvatarExtraText(props) {
    var className = props.className,
        Tag = props.tag,
        attributes = _objectWithoutPropertiesLoose$1(props, ["className", "tag"]);

    var wrapperClass = classnames('extra-text', className);
    return React__default.createElement(Tag, _extends$1({
      className: wrapperClass
    }, attributes));
  };

  AvatarExtraText.propTypes = propTypes$1a;
  AvatarExtraText.defaultProps = defaultProps$16;

  var propTypes$1b = {
    tag: propTypes.oneOfType([propTypes.func, propTypes.string]),
    className: propTypes.string,
    href: propTypes.oneOfType([propTypes.func, propTypes.string]),
    color: propTypes.string,
    size: propTypes.string
  };
  var defaultProps$17 = {
    tag: 'div'
  };

  var AvatarIcon = function AvatarIcon(props) {
    var _classNames;

    var className = props.className,
        Tag = props.tag,
        size = props.size,
        href = props.href,
        color = props.color,
        attributes = _objectWithoutPropertiesLoose$1(props, ["className", "tag", "size", "href", "color"]);

    var typeClass = classnames('avatar', (_classNames = {}, _classNames["size-" + size] = size, _classNames["avatar-" + color] = color, _classNames));

    if (href) {
      return React__default.createElement("a", _extends$1({
        href: href
      }, attributes, {
        className: typeClass
      }));
    }

    return React__default.createElement(Tag, _extends$1({}, attributes, {
      className: typeClass
    }));
  };

  AvatarIcon.propTypes = propTypes$1b;
  AvatarIcon.defaultProps = defaultProps$17;

  var propTypes$1c = {
    tag: propTypes.oneOfType([propTypes.func, propTypes.string]),
    className: propTypes.string,
    presence: propTypes.string
  };
  var defaultProps$18 = {
    tag: 'div'
  };

  var AvatarPresence = function AvatarPresence(props) {
    var _classNames;

    var className = props.className,
        Tag = props.tag,
        presence = props.presence,
        attributes = _objectWithoutPropertiesLoose$1(props, ["className", "tag", "presence"]);

    var typeClass = classnames('avatar-presence', (_classNames = {}, _classNames["" + presence] = presence, _classNames));
    return React__default.createElement(Tag, _extends$1({}, attributes, {
      className: typeClass
    }));
  };

  AvatarPresence.propTypes = propTypes$1c;
  AvatarPresence.defaultProps = defaultProps$18;

  var propTypes$1d = {
    tag: propTypes.oneOfType([propTypes.func, propTypes.string]),
    className: propTypes.string,
    status: propTypes.string
  };
  var defaultProps$19 = {
    tag: 'div'
  };

  var AvatarStatus = function AvatarStatus(props) {
    var _classNames;

    var className = props.className,
        Tag = props.tag,
        status = props.status,
        attributes = _objectWithoutPropertiesLoose$1(props, ["className", "tag", "status"]);

    var typeClass = classnames('avatar-status', (_classNames = {}, _classNames["" + status] = status, _classNames));
    return React__default.createElement(Tag, _extends$1({}, attributes, {
      className: typeClass
    }));
  };

  AvatarStatus.propTypes = propTypes$1d;
  AvatarStatus.defaultProps = defaultProps$19;

  var propTypes$1e = {
    tag: propTypes.oneOfType([propTypes.func, propTypes.string]),
    className: propTypes.string,
    extra: propTypes.string
  };
  var defaultProps$1a = {
    tag: 'div'
  };

  var AvatarWrapper = function AvatarWrapper(props) {
    var _classNames;

    var className = props.className,
        Tag = props.tag,
        extra = props.extra,
        attributes = _objectWithoutPropertiesLoose$1(props, ["className", "tag", "extra"]);

    var wrapperClass = classnames('avatar-wrapper', className, (_classNames = {}, _classNames["avatar-extra-" + extra] = extra, _classNames));
    return React__default.createElement(Tag, _extends$1({}, attributes, {
      className: wrapperClass
    }));
  };

  AvatarWrapper.propTypes = propTypes$1e;
  AvatarWrapper.defaultProps = defaultProps$1a;

  var propTypes$1f = {
    color: propTypes.string,
    pill: propTypes.bool,
    tag: propTypes.string,
    children: propTypes.node,
    cssModule: propTypes.object,
    className: propTypes.string
  };
  var defaultProps$1b = {
    color: 'secondary',
    pill: false,
    tag: 'span'
  };

  var Badge$1 = function Badge$1(props) {
    var children = props.children;
    return React__default.createElement(Badge, props, children);
  };

  Badge$1.propTypes = propTypes$1f;
  Badge$1.defaultProps = defaultProps$1b;

  var propTypes$1g = _extends$1({}, Button.propTypes, {
    icon: propTypes.bool
  });

  var defaultProps$1c = _extends$1({}, Button.defaultProps, {
    icon: false
  });

  var Button$1 = function Button$1(_ref) {
    var icon = _ref.icon,
        className = _ref.className,
        attributes = _objectWithoutPropertiesLoose$1(_ref, ["icon", "className"]);

    var classes = classnames(className, {
      'btn-icon': icon
    });
    return React__default.createElement(Button, _extends$1({
      className: classes
    }, attributes));
  };

  Button$1.propTypes = propTypes$1g;
  Button$1.defaultProps = defaultProps$1c;

  var propTypes$1h = {
    children: propTypes.node,
    className: propTypes.string,
    color: propTypes.string,
    highlight: propTypes.bool,
    tag: propTypes.oneOfType([propTypes.func, propTypes.string])
  };
  var defaultProps$1d = {
    color: '',
    highlight: false,
    tag: 'div'
  };

  var Callout = function Callout(_ref) {
    var children = _ref.children,
        color = _ref.color,
        highlight = _ref.highlight,
        Tag = _ref.tag,
        attributes = _objectWithoutPropertiesLoose$1(_ref, ["children", "color", "highlight", "tag"]);

    var classes = classnames('callout', color, {
      'callout-highlight': highlight
    });
    return React__default.createElement(Tag, _extends$1({
      className: classes
    }, attributes), children);
  };

  Callout.propTypes = propTypes$1h;
  Callout.defaultProps = defaultProps$1d;

  var propTypes$1i = {
    bigText: propTypes.bool,
    className: propTypes.string,
    children: propTypes.node,
    tag: propTypes.oneOfType([propTypes.func, propTypes.string])
  };
  var defaultProps$1e = {
    bigText: false,
    tag: 'p'
  };

  var CalloutText = function CalloutText(_ref) {
    var bigText = _ref.bigText,
        children = _ref.children,
        className = _ref.className,
        Tag = _ref.tag,
        attributes = _objectWithoutPropertiesLoose$1(_ref, ["bigText", "children", "className", "tag"]);

    var classes = classnames(className, {
      'callout-big-text': bigText
    });
    return React__default.createElement(Tag, _extends$1({
      className: classes
    }, attributes), children);
  };

  CalloutText.propTypes = propTypes$1i;
  CalloutText.defaultProps = defaultProps$1e;

  var propTypes$1j = {
    children: propTypes.node,
    className: propTypes.string,
    tag: propTypes.oneOfType([propTypes.func, propTypes.string])
  };
  var defaultProps$1f = {
    tag: 'div'
  };

  var CalloutTitle = function CalloutTitle(_ref) {
    var children = _ref.children,
        className = _ref.className,
        Tag = _ref.tag,
        attributes = _objectWithoutPropertiesLoose$1(_ref, ["children", "className", "tag"]);

    var classes = classnames(className, 'callout-title');
    return React__default.createElement(Tag, _extends$1({
      className: classes
    }, attributes), children);
  };

  CalloutTitle.propTypes = propTypes$1j;
  CalloutTitle.defaultProps = defaultProps$1f;

  var propTypes$1k = _extends$1({}, Collapse.propTypes, {
    // eslint-disable-line react/forbid-foreign-prop-types

    /** Indica se il componente Collapse è usato all'interno di un componente Header */
    header: propTypes.bool,

    /** Indica se il menu HeaderNav sia aperto o meno. Usato unicamente nel caso della HeaderNav, ovvero con navbar e header entrambi true */
    inOpen: propTypes.bool,

    /** Funzione chiamata su click di overlay dell'HeaderNav aperto. Usato unicamente nel caso della HeaderNav, ovvero con navbar e header entrambi true */
    onOverlayClick: propTypes.func
  });

  var Collapse$1 = function Collapse$1(_ref) {
    var header = _ref.header,
        className = _ref.className,
        navbar = _ref.navbar,
        children = _ref.children,
        isOpen = _ref.isOpen,
        onOverlayClick = _ref.onOverlayClick,
        attributes = _objectWithoutPropertiesLoose$1(_ref, ["header", "className", "navbar", "children", "isOpen", "onOverlayClick"]);

    if (navbar && header) {
      var _classes = classnames(className, 'navbar-collapsable', {
        expanded: isOpen
      });

      return React__default.createElement(Collapse, _extends$1({
        className: _classes,
        navbar: navbar,
        style: {
          display: isOpen ? 'block' : 'none'
        }
      }, attributes), React__default.createElement("div", {
        className: "overlay",
        style: {
          display: isOpen ? 'block' : 'none'
        },
        onClick: onOverlayClick
      }), React__default.createElement("div", {
        className: "close-div sr-only"
      }, React__default.createElement("button", {
        className: "btn close-menu",
        type: "button"
      }, React__default.createElement("span", {
        className: "it-close"
      }), "close")), children);
    }

    var classes = classnames(className, {
      'link-list-wrapper': header
    });
    return React__default.createElement(Collapse, _extends$1({
      className: classes
    }, attributes, {
      navbar: navbar,
      isOpen: isOpen
    }), children);
  };

  Collapse$1.propTypes = propTypes$1k;
  Collapse$1.defaultProps = Collapse.defaultProps;

  var FormGroup$1 =
  /*#__PURE__*/
  function (_Component) {
    _inheritsLoose$1(FormGroup$1, _Component);

    function FormGroup$1() {
      var _this;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _Component.call.apply(_Component, [this].concat(args)) || this;

      _defineProperty$2(_assertThisInitialized$2(_this), "state", {
        active: _this.props.active || false,
        value: null
      });

      _defineProperty$2(_assertThisInitialized$2(_this), "onFocus", function (callback, active) {
        if (active === void 0) {
          active = true;
        }

        _this.setState({
          active: active
        }, function () {
          if (callback) {
            callback();
          }
        });
      });

      _defineProperty$2(_assertThisInitialized$2(_this), "onBlur", function (callback, active) {
        if (active === void 0) {
          active = false;
        }

        _this.setState({
          active: active
        }, function () {
          if (callback) {
            callback();
          }
        });
      });

      _defineProperty$2(_assertThisInitialized$2(_this), "onChange", function (callback, event) {
        var value;
        var target;

        if (event && event.persist) {
          // SyntheticEvent
          event.persist();
          target = {
            event: event
          };
          value = {
            target: target
          };
        } else if (event.label) {
          // Autocomplete
          value = event.label;
        }

        _this.setState({
          value: value
        }, function () {
          if (callback) {
            callback(event);
          }
        });
      });

      return _this;
    }

    var _proto = FormGroup$1.prototype;

    _proto.render = function render() {
      var _this2 = this;

      var _this$state = this.state,
          active = _this$state.active,
          value = _this$state.value;

      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          col = _this$props.col,
          rest = _objectWithoutPropertiesLoose$1(_this$props, ["children", "className", "col"]);

      var hasValue = !!value;
      var classNames = [className, active ? 'active' : '', col ? 'col' : ''].join(' ');
      return React__default.createElement(FormGroup, _extends$1({}, rest, {
        className: classNames
      }), function () {
        return React__default.Children.map(children, function (child) {
          if (child === null) return;
          var _child$props = child.props,
              _onFocus = _child$props.onFocus,
              _onBlur = _child$props.onBlur,
              _onChange = _child$props.onChange,
              className = _child$props.className;

          switch (child.type) {
            case Input:
              var isLabelActive = null;
              return React__default.cloneElement(child, _extends$1({}, child.props, {
                onFocus: function onFocus() {
                  _this2.onFocus(_onFocus);
                },
                onBlur: function onBlur() {
                  _this2.onBlur(_onBlur);
                },
                onChange: function onChange(e) {
                  _this2.onChange(_onChange, e);
                }
              }, isLabelActive));

            case Label:
              var hasChildValue = false;
              React__default.Children.toArray(children).filter(function (child) {
                switch (child.type) {
                  case Input:
                    return true;

                  default:
                    return false;
                }
              }).map(function (child) {
                if (child.props.value) {
                  hasChildValue = true;
                }

                return false;
              });
              classNames = hasValue || hasChildValue ? [className, 'active'].join(' ') : className;
              return React__default.cloneElement(child, _extends$1({}, child.props, {
                className: classNames
              }));

            default:
              return child;
          }
        });
      }());
    };

    return FormGroup$1;
  }(React.Component);

  FormGroup$1.defaultProps = FormGroup.defaultProps;
  FormGroup$1.propTypes = FormGroup.propTypes;

  /**
   * HeaderContext
   * {
   *  type: PropTypes.oneOf([SLIM, CENTER, NAVBAR]).isRequired
   * }
   */

  var HeaderContext = React__default.createContext({});
  var SLIM = 'slim';
  var CENTER = 'center';
  var NAVBAR = 'navbar';

  var propTypes$1l = {
    /** Classi addizionali per il componente Header */
    className: propTypes.string,
    // cannot use variables above here or storybook writes the full import stacktrace

    /** Tipo di componente Header: può essere solamente uno di questi tre tipi */
    type: propTypes.oneOf(['slim', 'center', 'navbar']).isRequired,

    /** Riduce la grandezza del componente Header. Funziona solamente con Header "center". */
    small: propTypes.bool,

    /** Imposta il tema per il componente Header. Per gli Header di tipo "slim" o "center"
     *  il valore di default è "dark". Per l'Header di tipo "nav" il tema di default è "light"
     *  in mobile, mentre "dark" in versione desktop.
     */
    theme: propTypes.oneOf(['', 'light', 'dark'])
  };
  var defaultProps$1g = {
    small: false
  };

  var Header = function Header(_ref) {
    var _classNames;

    var className = _ref.className,
        small = _ref.small,
        theme = _ref.theme,
        type = _ref.type,
        attributes = _objectWithoutPropertiesLoose$1(_ref, ["className", "small", "theme", "type"]);

    // use context here as theme
    var classes = classnames(className, (_classNames = {}, _classNames["it-header-" + type + "-wrapper"] = type, _classNames['it-small-header'] = type === CENTER && small, _classNames["theme-" + theme] = type !== NAVBAR && theme, _classNames['theme-dark-mobile'] = type === NAVBAR && theme === 'dark', _classNames['theme-light-desk'] = type === NAVBAR && theme === 'light', _classNames));
    return React__default.createElement(HeaderContext.Provider, {
      value: {
        type: type
      }
    }, React__default.createElement("div", _extends$1({
      className: classes
    }, attributes)));
  };

  Header.propTypes = propTypes$1l;
  Header.defaultProps = defaultProps$1g;

  function areInputsEqual(newInputs, lastInputs) {
    if (newInputs.length !== lastInputs.length) {
      return false;
    }

    for (var i = 0; i < newInputs.length; i++) {
      if (newInputs[i] !== lastInputs[i]) {
        return false;
      }
    }

    return true;
  }

  function memoizeOne(resultFn, isEqual) {
    if (isEqual === void 0) {
      isEqual = areInputsEqual;
    }

    var lastThis;
    var lastArgs = [];
    var lastResult;
    var calledOnce = false;

    function memoized() {
      var newArgs = [];

      for (var _i = 0; _i < arguments.length; _i++) {
        newArgs[_i] = arguments[_i];
      }

      if (calledOnce && lastThis === this && isEqual(newArgs, lastArgs)) {
        return lastResult;
      }

      lastResult = resultFn.apply(this, newArgs);
      calledOnce = true;
      lastThis = this;
      lastArgs = newArgs;
      return lastResult;
    }

    return memoized;
  }

  /*! *****************************************************************************
  Copyright (c) Microsoft Corporation. All rights reserved.
  Licensed under the Apache License, Version 2.0 (the "License"); you may not use
  this file except in compliance with the License. You may obtain a copy of the
  License at http://www.apache.org/licenses/LICENSE-2.0

  THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
  KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
  WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
  MERCHANTABLITY OR NON-INFRINGEMENT.

  See the Apache Version 2.0 License for specific language governing permissions
  and limitations under the License.
  ***************************************************************************** */

  /* global Reflect, Promise */

  var _extendStatics = function extendStatics(d, b) {
    _extendStatics = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics(d, b);
  };

  function __extends(d, b) {
    _extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  }

  var _assign = function __assign() {
    _assign = Object.assign || function __assign(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];

        for (var p in s) {
          if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
      }

      return t;
    };

    return _assign.apply(this, arguments);
  };

  function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
      s += arguments[i].length;
    }

    for (var r = Array(s), k = 0, i = 0; i < il; i++) {
      for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
        r[k] = a[j];
      }
    }

    return r;
  }

  var shallowEqualScroll = function shallowEqualScroll(a, b) {
    if (a === b) {
      return true;
    }

    return a.x === b.x && a.y === b.y && a.xTurn === b.xTurn && a.yTurn === b.yTurn && a.xDTurn === b.xDTurn && a.yDTurn === b.yDTurn && a.isScrollingUp === b.isScrollingUp && a.isScrollingDown === b.isScrollingDown && a.isScrollingLeft === b.isScrollingLeft && a.isScrollingRight === b.isScrollingRight;
  };

  var shallowEqualRect = function shallowEqualRect(a, b) {
    if (a === b) {
      return true;
    }

    return a.top === b.top && a.right === b.right && a.bottom === b.bottom && a.left === b.left && a.height === b.height && a.width === b.width;
  };

  var shallowEqualDimensions = function shallowEqualDimensions(a, b) {
    if (a === b) {
      return true;
    }

    return a.width === b.width && a.height === b.height && a.clientWidth === b.clientWidth && a.clientHeight === b.clientHeight && a.outerWidth === b.outerWidth && a.outerHeight === b.outerHeight && a.documentWidth === b.documentWidth && a.documentHeight === b.documentHeight;
  }; // implementation based on https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md


  var browserSupportsPassiveEvents = function () {
    if (typeof window === 'undefined') {
      return false;
    }

    var supportsPassive = false;

    try {
      var opts = Object.defineProperty({}, 'passive', {
        get: function get() {
          supportsPassive = true;
        }
      });
      window.addEventListener('testPassive', null, opts);
      window.removeEventListener('testPassive', null, opts);
    } catch (e) {
      return false;
    }

    return supportsPassive;
  }();

  var simpleDebounce = function simpleDebounce(fn, delay) {
    var timeout;
    return function () {
      var args = [];

      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }

      clearTimeout(timeout);
      timeout = setTimeout.apply(void 0, __spreadArrays([fn, delay], args));
    };
  };

  var debounceOnUpdate = function debounceOnUpdate(fn, delay) {
    var timeout;
    var scrollDidUpdate = false;
    var dimensionsDidUpdate = false;
    return function (viewport, options) {
      clearTimeout(timeout);
      scrollDidUpdate = scrollDidUpdate || options.scrollDidUpdate;
      dimensionsDidUpdate = dimensionsDidUpdate || options.dimensionsDidUpdate;
      timeout = setTimeout(function () {
        fn(viewport, {
          scrollDidUpdate: scrollDidUpdate,
          dimensionsDidUpdate: dimensionsDidUpdate
        });
        scrollDidUpdate = false;
        dimensionsDidUpdate = false;
      }, delay);
    };
  };

  var requestAnimationFrame = function () {
    var fallback = function fallback(callback) {
      return setTimeout(callback, 1000 / 60);
    };

    if (typeof window !== 'undefined') {
      return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || fallback;
    }

    return fallback;
  }();

  var cancelAnimationFrame = function () {
    if (typeof window !== 'undefined') {
      return window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.webkitCancelRequestAnimationFrame || clearTimeout;
    }

    return clearTimeout;
  }();

  var now = typeof performance !== 'undefined' && performance.now ? performance.now.bind(performance) : Date.now;

  var createPerformanceMarker = function createPerformanceMarker() {
    var start = now();
    return function () {
      return now() - start;
    };
  };

  var getClientDimensions = function getClientDimensions() {
    if (typeof document === 'undefined' || !document.documentElement) {
      return createEmptyDimensionState();
    }

    var innerWidth = window.innerWidth,
        innerHeight = window.innerHeight,
        outerWidth = window.outerWidth,
        outerHeight = window.outerHeight;
    var _a = document.documentElement,
        clientWidth = _a.clientWidth,
        clientHeight = _a.clientHeight,
        scrollHeight = _a.scrollHeight,
        scrollWidth = _a.scrollWidth,
        offsetHeight = _a.offsetHeight,
        offsetWidth = _a.offsetWidth;
    return {
      width: innerWidth,
      height: innerHeight,
      clientWidth: clientWidth,
      clientHeight: clientHeight,
      outerWidth: outerWidth,
      outerHeight: outerHeight,
      documentWidth: Math.max(scrollWidth, offsetWidth, clientWidth),
      documentHeight: Math.max(scrollHeight, offsetHeight, clientHeight)
    };
  };

  var getNodeScroll = function getNodeScroll(elem) {
    if (elem === void 0) {
      elem = window;
    }

    var scrollX = elem.scrollX,
        scrollY = elem.scrollY;

    if (scrollX === undefined) {
      scrollX = elem.pageXOffset;
    }

    if (scrollY === undefined) {
      scrollY = elem.pageYOffset;
    }

    return {
      x: scrollX,
      y: scrollY
    };
  };

  var getClientScroll = function getClientScroll(prevScrollState) {
    if (prevScrollState === void 0) {
      prevScrollState = createEmptyScrollState();
    }

    if (typeof window === 'undefined') {
      return createEmptyScrollState();
    }

    var _a = getNodeScroll(),
        x = _a.x,
        y = _a.y;

    var nextScrollState = _assign({}, prevScrollState);

    var prevIsScrollingLeft = prevScrollState.isScrollingLeft,
        prevIsScrollingUp = prevScrollState.isScrollingUp,
        prevXTurn = prevScrollState.xTurn,
        prevYTurn = prevScrollState.yTurn;
    nextScrollState.isScrollingLeft = isScrollingLeft(x, nextScrollState);
    nextScrollState.isScrollingRight = isScrollingRight(x, nextScrollState);
    nextScrollState.isScrollingUp = isScrollingUp(y, nextScrollState);
    nextScrollState.isScrollingDown = isScrollingDown(y, nextScrollState);
    nextScrollState.xTurn = nextScrollState.isScrollingLeft === prevIsScrollingLeft ? prevXTurn : x;
    nextScrollState.yTurn = nextScrollState.isScrollingUp === prevIsScrollingUp ? prevYTurn : y;
    nextScrollState.xDTurn = x - nextScrollState.xTurn;
    nextScrollState.yDTurn = y - nextScrollState.yTurn;
    nextScrollState.x = x;
    nextScrollState.y = y;
    return nextScrollState;
  };

  var isScrollingLeft = function isScrollingLeft(x, prev) {
    switch (true) {
      case x < prev.x:
        return true;

      case x > prev.x:
        return false;

      case x === prev.x:
        return prev.isScrollingLeft;

      default:
        throw new Error('Could not calculate isScrollingLeft');
    }
  };

  var isScrollingRight = function isScrollingRight(x, prev) {
    switch (true) {
      case x > prev.x:
        return true;

      case x < prev.x:
        return false;

      case x === prev.x:
        return prev.isScrollingRight;

      default:
        throw new Error('Could not calculate isScrollingRight');
    }
  };

  var isScrollingUp = function isScrollingUp(y, prev) {
    switch (true) {
      case y < prev.y:
        return true;

      case y > prev.y:
        return false;

      case y === prev.y:
        return prev.isScrollingUp;

      default:
        throw new Error('Could not calculate isScrollingUp');
    }
  };

  var isScrollingDown = function isScrollingDown(y, prev) {
    switch (true) {
      case y > prev.y:
        return true;

      case y < prev.y:
        return false;

      case y === prev.y:
        return prev.isScrollingDown;

      default:
        throw new Error('Could not calculate isScrollingDown');
    }
  };

  var createEmptyScrollState = function createEmptyScrollState() {
    return {
      x: 0,
      y: 0,
      isScrollingUp: false,
      isScrollingDown: false,
      isScrollingLeft: false,
      isScrollingRight: false,
      xTurn: 0,
      yTurn: 0,
      xDTurn: 0,
      yDTurn: 0
    };
  };

  var createEmptyDimensionState = function createEmptyDimensionState() {
    return {
      width: 0,
      height: 0,
      clientWidth: 0,
      clientHeight: 0,
      outerWidth: 0,
      outerHeight: 0,
      documentWidth: 0,
      documentHeight: 0
    };
  };

  var ViewportCollector =
  /** @class */
  function (_super) {
    __extends(ViewportCollector, _super);

    function ViewportCollector(props) {
      var _this = _super.call(this, props) || this;

      _this.tick = function () {
        if (_this) {
          if (_this.scrollMightHaveUpdated || _this.resizeMightHaveUpdated) {
            _this.syncState();

            _this.scrollMightHaveUpdated = false;
            _this.resizeMightHaveUpdated = false;
          }

          _this.tickId = undefined;
        }
      };

      _this.handleScroll = function () {
        _this.scrollMightHaveUpdated = true;

        if (!_this.tickId) {
          _this.tickId = requestAnimationFrame(_this.tick);
        }
      };

      _this.handleResize = function () {
        _this.resizeMightHaveUpdated = true;

        if (!_this.tickId) {
          _this.tickId = requestAnimationFrame(_this.tick);
        }
      };

      _this.handleResizeDebounce = simpleDebounce(_this.handleResize, 88);
      _this.getPublicScroll = memoizeOne(function (scroll) {
        return _assign({}, scroll);
      }, function (_a, _b) {
        var a = _a[0];
        var b = _b[0];
        return shallowEqualScroll(a, b);
      });
      _this.getPublicDimensions = memoizeOne(function (dimensions) {
        return _assign({}, dimensions);
      }, function (_a, _b) {
        var a = _a[0];
        var b = _b[0];
        return shallowEqualDimensions(a, b);
      });

      _this.syncState = function () {
        if (_this.scrollMightHaveUpdated) {
          Object.assign(_this.scrollState, getClientScroll(_this.scrollState));
        }

        if (_this.resizeMightHaveUpdated) {
          Object.assign(_this.dimensionsState, getClientDimensions());
        }

        var scrollDidUpdate = _this.scrollMightHaveUpdated && !shallowEqualScroll(_this.lastSyncedScrollState, _this.scrollState);
        var dimensionsDidUpdate = _this.resizeMightHaveUpdated && !shallowEqualDimensions(_this.lastSyncedDimensionsState, _this.dimensionsState);

        if (scrollDidUpdate) {
          _this.lastSyncedScrollState = _assign({}, _this.scrollState);
        }

        if (dimensionsDidUpdate) {
          _this.lastSyncedDimensionsState = _assign({}, _this.dimensionsState);
        }

        if (scrollDidUpdate || dimensionsDidUpdate) {
          var publicState = _this.getPropsFromState();

          _this.props.onUpdate(publicState, {
            scrollDidUpdate: scrollDidUpdate,
            dimensionsDidUpdate: dimensionsDidUpdate
          });

          _this.updateOnIdle(publicState, {
            scrollDidUpdate: scrollDidUpdate,
            dimensionsDidUpdate: dimensionsDidUpdate
          });
        }
      };

      _this.updateOnIdle = debounceOnUpdate(function () {
        var _a;

        var args = [];

        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }

        if (typeof _this.props.onIdledUpdate === 'function') {
          (_a = _this.props).onIdledUpdate.apply(_a, args);
        }
      }, 166);
      _this.state = {
        parentProviderExists: false
      };
      _this.scrollMightHaveUpdated = false;
      _this.resizeMightHaveUpdated = false;
      _this.scrollState = createEmptyScrollState();
      _this.dimensionsState = createEmptyDimensionState();
      _this.lastSyncedDimensionsState = _assign({}, _this.dimensionsState);
      _this.lastSyncedScrollState = _assign({}, _this.scrollState);
      _this.resizeObserver = null;
      return _this;
    }

    ViewportCollector.prototype.componentDidMount = function () {
      var options = browserSupportsPassiveEvents ? {
        passive: true
      } : false;
      window.addEventListener('scroll', this.handleScroll, options);
      window.addEventListener('resize', this.handleResizeDebounce, options);
      window.addEventListener('orientationchange', this.handleResizeDebounce, options);

      if (typeof window.ResizeObserver !== 'undefined') {
        this.resizeObserver = new window.ResizeObserver(this.handleResizeDebounce);
        this.resizeObserver.observe(document.body);
      }

      this.handleScroll();
      this.handleResize();
    };

    ViewportCollector.prototype.componentWillUnmount = function () {
      window.removeEventListener('scroll', this.handleScroll, false);
      window.removeEventListener('resize', this.handleResizeDebounce, false);
      window.removeEventListener('orientationchange', this.handleResizeDebounce, false);

      if (this.resizeObserver) {
        this.resizeObserver.disconnect();
        this.resizeObserver = null;
      }

      if (typeof this.tickId === 'number') {
        cancelAnimationFrame(this.tickId);
      }
    };

    ViewportCollector.prototype.getPropsFromState = function () {
      return {
        scroll: this.getPublicScroll(this.lastSyncedScrollState),
        dimensions: this.getPublicDimensions(this.lastSyncedDimensionsState)
      };
    };

    ViewportCollector.prototype.render = function () {
      return null;
    };

    return ViewportCollector;
  }(React.PureComponent);

  var createFallbackViewportRequester = function createFallbackViewportRequester() {
    var defaultValue;
    var lastAccess = 0;
    return function () {
      if (!defaultValue || now() - lastAccess > 1000) {
        defaultValue = {
          scroll: getClientScroll(),
          dimensions: getClientDimensions()
        };
        lastAccess = now();
      }

      return defaultValue;
    };
  };

  var ViewportContext = React.createContext({
    removeViewportChangeListener: function removeViewportChangeListener(handler) {},
    scheduleReinitializeChangeHandler: function scheduleReinitializeChangeHandler(handler) {},
    addViewportChangeListener: function addViewportChangeListener(handler, options) {},
    getCurrentViewport: createFallbackViewportRequester(),
    hasRootProviderAsParent: false,
    version: '1.11.0'
  });

  var maxIterations = function maxIterations(priority) {
    switch (priority) {
      case 'highest':
        return 0;

      case 'high':
        return 4;

      case 'normal':
        return 16;

      case 'low':
        return 64;
    }
  };

  var shouldSkipIteration = function shouldSkipIteration(_a, budget) {
    var getPriority = _a.priority,
        averageExecutionCost = _a.averageExecutionCost,
        skippedIterations = _a.skippedIterations;
    var priority = getPriority();

    if (priority === 'highest') {
      return false;
    }

    if (priority !== 'low' && averageExecutionCost <= budget) {
      return false;
    }

    if (averageExecutionCost <= budget / 10) {
      return false;
    }

    var probability = skippedIterations / maxIterations(priority);

    if (probability >= 1) {
      return false;
    }

    return Math.random() > probability;
  };

  var ViewportProvider =
  /** @class */
  function (_super) {
    __extends(ViewportProvider, _super);

    function ViewportProvider(props) {
      var _this = _super.call(this, props) || this;

      _this.listeners = [];

      _this.triggerUpdateToListeners = function (state, _a, options) {
        var scrollDidUpdate = _a.scrollDidUpdate,
            dimensionsDidUpdate = _a.dimensionsDidUpdate;
        var getOverallDuration = createPerformanceMarker();

        var _b = Object.assign({
          isIdle: false,
          shouldInitialize: false
        }, options),
            isIdle = _b.isIdle,
            shouldInitialize = _b.shouldInitialize;

        var updatableListeners = _this.listeners.filter(function (_a) {
          var notifyScroll = _a.notifyScroll,
              notifyDimensions = _a.notifyDimensions,
              notifyOnlyWhenIdle = _a.notifyOnlyWhenIdle,
              skippedIterations = _a.skippedIterations,
              initialized = _a.initialized;
          var needsUpdate = skippedIterations > 0;

          if (notifyOnlyWhenIdle() !== isIdle && !needsUpdate) {
            return false;
          }

          if (shouldInitialize && !initialized) {
            return true;
          }

          var updateForScroll = notifyScroll() && scrollDidUpdate;
          var updateForDimensions = notifyDimensions() && dimensionsDidUpdate;
          return updateForScroll || updateForDimensions;
        });

        if (_this.props.experimentalSchedulerEnabled) {
          if (!isIdle) {
            var budget_1 = 16 / updatableListeners.length;
            updatableListeners = updatableListeners.filter(function (listener) {
              var skip = listener.initialized ? shouldSkipIteration(listener, budget_1) : false;

              if (skip) {
                listener.skippedIterations++;
                return false;
              }

              listener.skippedIterations = 0;
              return true;
            });
          }
        }

        var layouts = updatableListeners.map(function (_a) {
          var recalculateLayoutBeforeUpdate = _a.recalculateLayoutBeforeUpdate;

          if (recalculateLayoutBeforeUpdate) {
            var getDuration = createPerformanceMarker();
            var layoutState = recalculateLayoutBeforeUpdate(state);
            return [layoutState, getDuration()];
          }

          return null;
        });
        var overallJSHandlerTotalCost = 0;
        updatableListeners.forEach(function (listener, index) {
          var handler = listener.handler,
              averageExecutionCost = listener.averageExecutionCost,
              iterations = listener.iterations;

          var _a = layouts[index] || [null, 0],
              layout = _a[0],
              layoutCost = _a[1];

          var getDuration = createPerformanceMarker();
          handler(state, layout);
          var totalCost = layoutCost + getDuration();
          var diff = totalCost - averageExecutionCost;
          var i = iterations + 1;
          listener.averageExecutionCost = averageExecutionCost + diff / i;
          listener.iterations = i;
          listener.initialized = true;
          overallJSHandlerTotalCost += totalCost;
        });

        if (_this.props.experimentalSchedulerLayoutCalculatorEnabled && updatableListeners.length) {
          setTimeout(function () {
            var diffPerHandler = (getOverallDuration() - overallJSHandlerTotalCost) / updatableListeners.length;
            updatableListeners.forEach(function (listener) {
              listener.averageExecutionCost = listener.averageExecutionCost + diffPerHandler / listener.iterations;
            });
          }, 0);
        }
      };

      _this.addViewportChangeListener = function (handler, options) {
        _this.listeners.push(_assign({
          handler: handler,
          iterations: 0,
          averageExecutionCost: 0,
          skippedIterations: 0,
          initialized: false
        }, options));

        _this.handleListenerUpdate();
      };

      _this.scheduleReinitializeChangeHandler = function (h) {
        var listener = _this.listeners.find(function (_a) {
          var handler = _a.handler;
          return handler === h;
        });

        if (listener && listener.initialized) {
          listener.initialized = false;

          _this.handleListenerUpdate();
        }
      };

      _this.removeViewportChangeListener = function (h) {
        _this.listeners = _this.listeners.filter(function (_a) {
          var handler = _a.handler;
          return handler !== h;
        });

        _this.handleListenerUpdate();
      };

      _this.collector = React.createRef();
      _this.getCurrentDefaultViewport = createFallbackViewportRequester();
      _this.contextValue = {
        addViewportChangeListener: _this.addViewportChangeListener,
        removeViewportChangeListener: _this.removeViewportChangeListener,
        scheduleReinitializeChangeHandler: _this.scheduleReinitializeChangeHandler,
        getCurrentViewport: function getCurrentViewport() {
          if (!_this.collector.current) {
            return _this.getCurrentDefaultViewport();
          }

          return _this.collector.current.getPropsFromState();
        },
        hasRootProviderAsParent: true,
        version: '1.11.0'
      };

      _this.renderChildren = function (props) {
        if (props.hasRootProviderAsParent) {

          return _this.props.children;
        }

        return React.createElement(React.Fragment, null, _this.state.hasListeners && React.createElement(ViewportCollector, {
          ref: _this.collector,
          onUpdate: _this.triggerUpdateToListeners,
          onIdledUpdate: function onIdledUpdate(state, updates) {
            return _this.triggerUpdateToListeners(state, updates, {
              isIdle: true
            });
          }
        }), React.createElement(ViewportContext.Provider, {
          value: _this.contextValue
        }, _this.props.children));
      };

      _this.state = {
        hasListeners: false
      };
      return _this;
    }

    ViewportProvider.prototype.componentWillUnmount = function () {
      if (typeof this.updateListenersTick === 'number') {
        clearTimeout(this.updateListenersTick);
      }

      if (typeof this.initializeListenersTick === 'number') {
        cancelAnimationFrame(this.initializeListenersTick);
      }
    };

    ViewportProvider.prototype.handleListenerUpdate = function () {
      var _this = this;

      if (this.updateListenersTick === undefined) {
        this.updateListenersTick = setTimeout(function () {
          var nextState = _this.listeners.length !== 0;

          if (_this.state.hasListeners !== nextState) {
            _this.setState({
              hasListeners: _this.listeners.length !== 0
            });
          }

          _this.updateListenersTick = undefined;
        }, 1);
      }

      if (this.initializeListenersTick === undefined) {
        this.initializeListenersTick = requestAnimationFrame(function () {
          if (_this.collector.current && _this.listeners.some(function (l) {
            return !l.initialized;
          })) {
            _this.triggerUpdateToListeners(_this.collector.current.getPropsFromState(), {
              dimensionsDidUpdate: false,
              scrollDidUpdate: false
            }, {
              isIdle: false,
              shouldInitialize: true
            });
          }

          _this.initializeListenersTick = undefined;
        });
      }
    };

    ViewportProvider.prototype.render = function () {
      return React.createElement(ViewportContext.Consumer, null, this.renderChildren);
    };

    return ViewportProvider;
  }(React.PureComponent);

  var ObserveViewport =
  /** @class */
  function (_super) {
    __extends(ObserveViewport, _super);

    function ObserveViewport(props) {
      var _this = _super.call(this, props) || this;

      _this.handleViewportUpdate = function (viewport, layoutSnapshot) {
        if (_this.props.onUpdate) {
          _this.props.onUpdate(viewport, layoutSnapshot);
        }

        if (_this.props.children) {
          _this.syncState(viewport);
        }
      };

      _this.registerViewportListeners = function (_a) {
        var addViewportChangeListener = _a.addViewportChangeListener,
            removeViewportChangeListener = _a.removeViewportChangeListener,
            scheduleReinitializeChangeHandler = _a.scheduleReinitializeChangeHandler,
            hasRootProviderAsParent = _a.hasRootProviderAsParent,
            getCurrentViewport = _a.getCurrentViewport;

        if (!hasRootProviderAsParent) {
          return null;
        }

        var shouldRegister = _this.removeViewportChangeListener !== removeViewportChangeListener;

        if (!shouldRegister) {
          return null;
        }

        if (_this.removeViewportChangeListener) {
          _this.removeViewportChangeListener(_this.handleViewportUpdate);
        }

        _this.removeViewportChangeListener = removeViewportChangeListener;
        _this.getCurrentViewport = getCurrentViewport;
        _this.scheduleReinitializeChangeHandler = scheduleReinitializeChangeHandler;
        addViewportChangeListener(_this.handleViewportUpdate, {
          notifyScroll: function notifyScroll() {
            return !_this.props.disableScrollUpdates;
          },
          notifyDimensions: function notifyDimensions() {
            return !_this.props.disableDimensionsUpdates;
          },
          notifyOnlyWhenIdle: function notifyOnlyWhenIdle() {
            return _this.props.deferUpdateUntilIdle;
          },
          priority: function priority() {
            return _this.props.priority;
          },
          recalculateLayoutBeforeUpdate: function recalculateLayoutBeforeUpdate(viewport) {
            if (_this.props.recalculateLayoutBeforeUpdate) {
              return _this.props.recalculateLayoutBeforeUpdate(viewport);
            }

            return null;
          }
        });

        if (_this.props.children) {
          _this.syncState(getCurrentViewport());
        }

        return null;
      };

      _this.state = {
        scroll: createEmptyScrollState(),
        dimensions: createEmptyDimensionState()
      };
      return _this;
    }

    ObserveViewport.prototype.componentDidUpdate = function (prevProps) {
      var dimensionsBecameActive = !this.props.disableDimensionsUpdates && prevProps.disableDimensionsUpdates;
      var scrollBecameActive = !this.props.disableScrollUpdates && prevProps.disableScrollUpdates;

      if (typeof this.scheduleReinitializeChangeHandler === 'function' && (dimensionsBecameActive || scrollBecameActive)) {
        this.scheduleReinitializeChangeHandler(this.handleViewportUpdate);
      }
    };

    ObserveViewport.prototype.componentWillUnmount = function () {
      if (this.removeViewportChangeListener) {
        this.removeViewportChangeListener(this.handleViewportUpdate);
      }

      this.removeViewportChangeListener = undefined;
      this.scheduleReinitializeChangeHandler = undefined;

      if (typeof this.tickId === 'number') {
        cancelAnimationFrame(this.tickId);
      }
    };

    ObserveViewport.prototype.syncState = function (nextViewport) {
      var _this = this;

      if (this.tickId === undefined) {
        this.tickId = requestAnimationFrame(function () {
          _this.setState(nextViewport);

          _this.tickId = undefined;
        });
      }
    };

    Object.defineProperty(ObserveViewport.prototype, "optionNotifyScroll", {
      get: function get() {
        return !this.props.disableScrollUpdates;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(ObserveViewport.prototype, "optionNotifyDimensions", {
      get: function get() {
        return !this.props.disableDimensionsUpdates;
      },
      enumerable: true,
      configurable: true
    });

    ObserveViewport.prototype.render = function () {
      var children = this.props.children;
      return React.createElement(React.Fragment, null, React.createElement(ViewportContext.Consumer, null, this.registerViewportListeners), children ? children(this.state) : null);
    };

    ObserveViewport.defaultProps = {
      disableScrollUpdates: false,
      disableDimensionsUpdates: false,
      deferUpdateUntilIdle: false,
      priority: 'normal'
    };
    return ObserveViewport;
  }(React.Component);
  /**
   * @deprecated Use useRect or useRectEffect instead as it provides better performance.
   */


  var ObserveBoundingClientRect =
  /** @class */
  function (_super) {
    __extends(ObserveBoundingClientRect, _super);

    function ObserveBoundingClientRect(props) {
      var _this = _super.call(this, props) || this;

      _this.syncState = function () {
        var node = _this.props.node;

        if (!node || !node.current) {
          return;
        }

        var rect = _this.getRectFromNode();

        if (rect && !_this.state.isInitialized) {
          _this.setState(_assign(_assign({}, rect), {
            isInitialized: true
          }));

          return;
        }

        _this.setState(rect);
      };

      _this.state = {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        height: 0,
        width: 0,
        isInitialized: false
      };
      return _this;
    }

    ObserveBoundingClientRect.prototype.componentDidMount = function () {
      this.tick(this.syncState);
    };

    ObserveBoundingClientRect.prototype.componentDidUpdate = function (prevProps, prevState) {
      var rect = this.getRectFromState();
      var prevRect = this.getRectFromState(prevState);

      if (!rect) {
        return;
      }

      if (this.props.onInit) {
        if (!prevState.isInitialized && this.state.isInitialized) {
          this.props.onInit(rect);
        }
      }

      if (this.props.onUpdate) {
        if (prevRect === null || !shallowEqualRect(rect, prevRect)) {
          this.props.onUpdate(rect);
        }
      }
    };

    ObserveBoundingClientRect.prototype.componentWillUnmount = function () {
      if (typeof this.tickId === 'number') {
        cancelAnimationFrame(this.tickId);
      }
    };

    ObserveBoundingClientRect.prototype.tick = function (updater) {
      var _this = this;

      this.tickId = requestAnimationFrame(function () {
        updater();

        _this.tick(updater);
      });
    };

    ObserveBoundingClientRect.prototype.getRectFromState = function (state) {
      if (state === void 0) {
        state = this.state;
      }

      if (!state.isInitialized) {
        return null;
      }

      return {
        height: state.height,
        width: state.width,
        top: state.top,
        bottom: state.bottom,
        left: state.left,
        right: state.right
      };
    };

    ObserveBoundingClientRect.prototype.getRectFromNode = function () {
      var node = this.props.node;

      if (!node || !node.current) {
        return null;
      }

      var rect = node.current.getBoundingClientRect();
      return {
        height: rect.height,
        width: rect.width,
        top: rect.top,
        bottom: rect.bottom,
        left: rect.left,
        right: rect.right
      };
    };

    ObserveBoundingClientRect.prototype.render = function () {
      var children = this.props.children;
      return typeof children === 'function' ? children(this.getRectFromState()) : null;
    };

    return ObserveBoundingClientRect;
  }(React.PureComponent);

  /*! *****************************************************************************
  Copyright (c) Microsoft Corporation. All rights reserved.
  Licensed under the Apache License, Version 2.0 (the "License"); you may not use
  this file except in compliance with the License. You may obtain a copy of the
  License at http://www.apache.org/licenses/LICENSE-2.0

  THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
  KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
  WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
  MERCHANTABLITY OR NON-INFRINGEMENT.

  See the Apache Version 2.0 License for specific language governing permissions
  and limitations under the License.
  ***************************************************************************** */

  /* global Reflect, Promise */

  var _extendStatics$1 = function extendStatics(d, b) {
    _extendStatics$1 = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function (d, b) {
      d.__proto__ = b;
    } || function (d, b) {
      for (var p in b) {
        if (b.hasOwnProperty(p)) d[p] = b[p];
      }
    };

    return _extendStatics$1(d, b);
  };

  function __extends$1(d, b) {
    _extendStatics$1(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  }

  var _assign$1 = function __assign() {
    _assign$1 = Object.assign || function __assign(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];

        for (var p in s) {
          if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
      }

      return t;
    };

    return _assign$1.apply(this, arguments);
  };

  function __rest(s, e) {
    var t = {};

    for (var p in s) {
      if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    }

    if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
  }

  var StickyGroupContext = React.createContext({
    stickyOffset: {
      top: 0,
      height: 0
    },
    updateStickyOffset: function updateStickyOffset(offset, height) {}
  });

  var connect = function connect() {
    return function (WrappedComponent) {
      var ConnectedComponent = function ConnectedComponent(props) {
        return React.createElement(StickyGroupContext.Consumer, null, function (context) {
          return React.createElement(WrappedComponent, _assign$1({}, props, {
            stickyOffset: context.stickyOffset,
            updateStickyOffset: context.updateStickyOffset
          }));
        });
      };

      var displayName = WrappedComponent.displayName || WrappedComponent.name || 'Component';
      ConnectedComponent.displayName = "connectSticky(" + displayName + ")";
      return ConnectedComponent;
    };
  };

  var StickyScrollUpProvider =
  /** @class */
  function (_super) {
    __extends$1(StickyScrollUpProvider, _super);

    function StickyScrollUpProvider() {
      var _this = _super !== null && _super.apply(this, arguments) || this;

      _this.stickyOffset = {
        top: 0,
        height: 0
      };

      _this.updateStickyOffset = function (stickyOffset, height) {
        _this.stickyOffset.top = Math.min(stickyOffset, height);
        _this.stickyOffset.height = height;
      };

      return _this;
    }

    StickyScrollUpProvider.prototype.render = function () {
      return React.createElement(ViewportProvider, {
        experimentalSchedulerEnabled: true
      }, React.createElement(StickyGroupContext.Provider, {
        value: {
          updateStickyOffset: this.updateStickyOffset,
          stickyOffset: this.stickyOffset
        }
      }, this.props.children));
    };

    return StickyScrollUpProvider;
  }(React.PureComponent);

  var baseStyles = {
    width: 'inherit'
  };

  var prefixTransform = function prefixTransform(transform) {
    return {
      transform: transform,
      WebkitTransform: transform,
      msTransform: transform,
      OTransform: transform
    };
  };

  var StickyElement = function StickyElement(_a) {
    var children = _a.children,
        forwardRef = _a.forwardRef,
        _b = _a.style,
        overrideStyles = _b === void 0 ? {} : _b,
        _c = _a.positionStyle,
        positionStyle = _c === void 0 ? {} : _c,
        disabled = _a.disabled,
        renderArgs = _a.renderArgs,
        props = __rest(_a, ["children", "forwardRef", "style", "positionStyle", "disabled", "renderArgs"]);

    var style = !disabled ? _assign$1(_assign$1(_assign$1({}, baseStyles), positionStyle), overrideStyles) : {};

    if (style.transform) {
      Object.assign(style, prefixTransform(style.transform));
    }

    return React.createElement("div", _assign$1({
      ref: forwardRef,
      style: style
    }, props), typeof children === 'function' ? children(renderArgs) : children);
  };

  var StickyPlaceholder =
  /** @class */
  function (_super) {
    __extends$1(StickyPlaceholder, _super);

    function StickyPlaceholder() {
      var _this = _super !== null && _super.apply(this, arguments) || this;

      _this.state = {
        isRecalculating: false,
        isWaitingForRecalculation: false,
        stickyHeight: null,
        stickyWidth: null,
        clientSize: null
      };

      _this.calculateSize = function () {
        if (_this.props.stickyRef.current && !_this.state.isRecalculating && _this.state.isWaitingForRecalculation) {
          return _this.props.stickyRef.current.getBoundingClientRect();
        }

        return null;
      };

      _this.handleDimensionsUpdate = function (_a, stickyRect) {
        var dimensions = _a.dimensions;
        var width = dimensions.width,
            clientWidth = dimensions.clientWidth;
        var nextClientSize = [width, clientWidth].join(',');

        if (!_this.state.isWaitingForRecalculation && _this.state.clientSize !== nextClientSize) {
          _this.setState({
            clientSize: nextClientSize,
            isRecalculating: true,
            isWaitingForRecalculation: true
          }, function () {
            requestAnimationFrame(function () {
              _this.setState({
                isRecalculating: false
              });
            });
          });

          return;
        }

        if (stickyRect && _this.state.isWaitingForRecalculation) {
          _this.setState({
            clientSize: nextClientSize,
            stickyHeight: stickyRect.height,
            stickyWidth: stickyRect.width,
            isWaitingForRecalculation: false
          });

          return;
        }
      };

      return _this;
    }

    StickyPlaceholder.prototype.render = function () {
      var _a = this.props,
          children = _a.children,
          disabled = _a.disabled,
          style = _a.style,
          className = _a.className,
          forwardRef = _a.forwardRef;
      var _b = this.state,
          isRecalculating = _b.isRecalculating,
          isWaitingForRecalculation = _b.isWaitingForRecalculation,
          stickyHeight = _b.stickyHeight,
          stickyWidth = _b.stickyWidth;
      var isActive = !disabled && !isWaitingForRecalculation;

      var baseStyle = _assign$1({
        position: 'relative'
      }, style);

      var containerStyle = isActive ? _assign$1({
        height: stickyHeight,
        width: stickyWidth
      }, baseStyle) : baseStyle;
      return React.createElement(React.Fragment, null, React.createElement("div", {
        ref: forwardRef,
        style: containerStyle,
        className: className
      }, children({
        isRecalculating: isWaitingForRecalculation
      })), !this.props.disableResizing && React.createElement(ObserveViewport, {
        disableScrollUpdates: true,
        disableDimensionsUpdates: isRecalculating,
        onUpdate: this.handleDimensionsUpdate,
        recalculateLayoutBeforeUpdate: this.calculateSize,
        priority: "highest"
      }));
    };

    StickyPlaceholder.defaultProps = {
      style: {}
    };
    return StickyPlaceholder;
  }(React.Component);

  var supportsWillChange = function () {
    var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined' && document.documentElement;

    if (!isBrowser) {
      return false;
    }

    return 'willChange' in document.documentElement.style;
  }();

  var supportsPositionSticky = function () {
    var isBrowser = typeof window !== 'undefined' && typeof CSS !== 'undefined';

    if (!isBrowser) {
      return false;
    }

    return CSS.supports ? CSS.supports('position: sticky') : false;
  }();

  var shallowEqualPositionStyles = function shallowEqualPositionStyles(a, b) {
    if (a === b) {
      return true;
    }

    if (a.position !== b.position) {
      return false;
    }

    if (a.top !== b.top) {
      return false;
    }

    if (a.transform !== b.transform) {
      return false;
    }

    if (a.willChange !== b.willChange) {
      return false;
    }

    return true;
  };

  var Sticky =
  /** @class */
  function (_super) {
    __extends$1(Sticky, _super);

    function Sticky() {
      var _this = _super !== null && _super.apply(this, arguments) || this;

      _this.stickyRef = React.createRef();
      _this.placeholderRef = React.createRef();
      _this.nativeStickyThrewOnce = false;
      _this.state = {
        isSticky: false,
        isDockedToBottom: false,
        isNearToViewport: false,
        appliedOverflowScroll: 'end',
        styles: {},
        useNativeSticky: false
      };

      _this.hasContainer = function () {
        return Boolean(_this.props.container);
      };

      _this.isNearToViewport = function (rect) {
        var padding = 700;
        return rect.top - padding < 0 && rect.bottom + padding > 0;
      };

      _this.getOverflowScrollType = function (rectSticky, dimensions) {
        return _this.props.overflowScroll === 'flow' && _this.calcHeightDifference(rectSticky, dimensions) > 0 ? 'flow' : 'end';
      };

      _this.isSticky = function (rect, containerRect, dimensions) {
        if (!_this.hasContainer()) {
          return Math.round(containerRect.top) <= _this.offsetTop;
        }

        if (Math.round(containerRect.top) > _this.offsetTop) {
          return false;
        }

        var height = _this.props.overflowScroll === 'flow' ? Math.min(rect.height, dimensions.height) : rect.height;

        if (Math.round(containerRect.bottom) - _this.offsetTop < height) {
          return false;
        }

        return true;
      };

      _this.shouldUseNativeSticky = function (appliedOverflowScroll) {
        if (!_this.props.experimentalNative || !supportsPositionSticky || appliedOverflowScroll !== 'end' || _this.props.stickyOffset.top !== 0) {
          return false;
        }

        return true;
      };

      _this.isDockedToBottom = function (rect, containerRect, dimensions) {
        if (!rect || !containerRect) {
          return false;
        }

        if (!_this.hasContainer()) {
          return false;
        }

        if (rect.height > containerRect.height) {
          return false;
        }

        var height = _this.props.overflowScroll === 'flow' ? Math.min(rect.height, dimensions.height) : rect.height;

        if (Math.round(containerRect.bottom) - _this.offsetTop >= height) {
          return false;
        }

        return true;
      };

      _this.recalculateLayoutBeforeUpdate = function () {
        var containerRect = _this.container.current.getBoundingClientRect();

        var stickyRect = _this.stickyRef.current.getBoundingClientRect();

        return {
          stickyRect: stickyRect,
          containerRect: containerRect
        };
      };

      _this.handleScrollUpdate = function (_a, _b) {
        var scroll = _a.scroll,
            dimensions = _a.dimensions;
        var stickyRect = _b.stickyRect,
            containerRect = _b.containerRect;

        if (_this.props.disabled) {
          return;
        } // in case children is not a function renderArgs will never be used


        var willRenderAsAFunction = typeof _this.props.children === 'function';

        var appliedOverflowScroll = _this.getOverflowScrollType(stickyRect, dimensions);

        var useNativeSticky = _this.shouldUseNativeSticky(appliedOverflowScroll);

        var styles = useNativeSticky ? {} : _this.getStickyStyles(stickyRect, containerRect, scroll, dimensions);
        var stateStyles = _this.state.styles;
        var stylesDidChange = !shallowEqualPositionStyles(styles, stateStyles);
        var isSticky = willRenderAsAFunction ? _this.isSticky(stickyRect, containerRect, dimensions) : false;
        var isDockedToBottom = willRenderAsAFunction ? _this.isDockedToBottom(stickyRect, containerRect, dimensions) : false;

        var isNearToViewport = _this.isNearToViewport(stickyRect);

        var useNativeStickyDidChange = _this.state.useNativeSticky !== useNativeSticky;
        var isStickyDidChange = _this.state.isSticky !== isSticky;
        var isDockedToBottomDidChange = _this.state.isDockedToBottom !== isDockedToBottom;
        var isNearToViewportDidChange = _this.state.isNearToViewport !== isNearToViewport;
        var appliedOverflowScrollDidChange = appliedOverflowScroll !== _this.state.appliedOverflowScroll;

        if (!useNativeStickyDidChange && !stylesDidChange && !isStickyDidChange && !isDockedToBottomDidChange && !isNearToViewportDidChange && !appliedOverflowScrollDidChange) {
          return;
        }

        _this.setState({
          useNativeSticky: useNativeSticky,
          isSticky: isSticky,
          isDockedToBottom: isDockedToBottom,
          isNearToViewport: isNearToViewport,
          appliedOverflowScroll: appliedOverflowScroll,
          styles: stylesDidChange ? styles : stateStyles
        });
      };

      _this.renderSticky = function (_a) {
        var isRecalculating = _a.isRecalculating;
        var _b = _this.props,
            children = _b.children,
            disabled = _b.disabled,
            stickyProps = _b.stickyProps;
        return React.createElement(StickyElement, _assign$1({
          forwardRef: _this.stickyRef,
          positionStyle: _this.state.styles,
          disabled: disabled || isRecalculating,
          children: children,
          renderArgs: {
            isSticky: _this.state.isSticky,
            isDockedToBottom: _this.state.isDockedToBottom,
            isNearToViewport: _this.state.isNearToViewport,
            appliedOverflowScroll: _this.state.appliedOverflowScroll
          }
        }, stickyProps));
      };

      return _this;
    }

    Object.defineProperty(Sticky.prototype, "container", {
      get: function get() {
        return this.props.container || this.placeholderRef;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(Sticky.prototype, "offsetTop", {
      get: function get() {
        return this.props.stickyOffset.top + this.props.defaultOffsetTop;
      },
      enumerable: true,
      configurable: true
    });

    Sticky.prototype.calcHeightDifference = function (rectSticky, dimensions) {
      if (!dimensions) {
        return 0;
      }

      return Math.max(0, Math.round(rectSticky.height) - dimensions.height);
    };

    Sticky.prototype.calcOverflowScrollFlowStickyStyles = function (rectSticky, containerRect, scroll, dimensions) {
      var containerTop = Math.round(containerRect.top);
      var stickyTop = Math.round(rectSticky.top);
      var scrollY = Math.round(scroll.y);
      var scrollYTurn = Math.round(scroll.yTurn);
      var heightDiff = this.calcHeightDifference(rectSticky, dimensions);
      var containerTopOffset = containerTop + scrollY - this.props.stickyOffset.height;
      var isStickyBottomReached = Math.round(rectSticky.bottom) <= dimensions.height;
      var isContainerTopReached = containerTop < this.offsetTop;
      var isTurnWithinHeightOffset = scrollYTurn - heightDiff <= containerTopOffset;
      var isTurnPointBeforeContainer = scrollYTurn < containerTopOffset;
      var isTurnPointAfterContainer = scrollYTurn > containerTopOffset + containerRect.height;
      var isTurnPointWithinContainer = !(isTurnPointBeforeContainer || isTurnPointAfterContainer); // scroll down AND sticky rect bottom not reached AND turn point not within the container OR
      // scroll up AND container top not reached OR
      //scroll up AND turns within the height diff AND turn point not within the container

      if (scroll.isScrollingDown && !isStickyBottomReached && !isTurnPointWithinContainer || scroll.isScrollingUp && !isContainerTopReached || scroll.isScrollingUp && isTurnWithinHeightOffset && !isTurnPointWithinContainer) {
        return {
          position: 'absolute',
          top: 0
        };
      } // scroll down AND sticky bottom reached


      if (scroll.isScrollingDown && isStickyBottomReached) {
        return {
          position: 'fixed',
          top: -heightDiff
        };
      }

      var isStickyTopReached = stickyTop >= this.offsetTop; // scroll down AND turn point within container OR
      // scroll up AND turn point not before container AND not sticky top reached

      if (scroll.isScrollingDown && isTurnPointWithinContainer || scroll.isScrollingUp && !isTurnPointBeforeContainer && !isStickyTopReached) {
        return {
          position: 'absolute',
          top: Math.abs(scrollY - stickyTop + (containerTop - scrollY))
        };
      }

      return {
        position: 'fixed',
        top: this.offsetTop
      };
    };

    Sticky.prototype.calcPositionStyles = function (rectSticky, containerRect, scroll, dimensions) {
      if (this.isSticky(rectSticky, containerRect, dimensions)) {
        if (this.getOverflowScrollType(rectSticky, dimensions) === 'flow') {
          return this.calcOverflowScrollFlowStickyStyles(rectSticky, containerRect, scroll, dimensions);
        }

        var stickyOffset = this.props.stickyOffset.top;
        var stickyHeight = this.props.stickyOffset.height;
        var headIsFlexible = stickyOffset > 0 && stickyOffset < stickyHeight;

        if (headIsFlexible) {
          var relYTurn = Math.round(scroll.yTurn - scroll.y + scroll.yDTurn) - Math.round(containerRect.top);
          return {
            position: 'absolute',
            top: relYTurn + this.offsetTop
          };
        }

        return {
          position: 'fixed',
          top: this.offsetTop
        };
      }

      if (this.isDockedToBottom(rectSticky, containerRect, dimensions)) {
        return {
          position: 'absolute',
          top: containerRect.height - rectSticky.height
        };
      }

      return {
        position: 'absolute',
        top: 0
      };
    };

    Sticky.prototype.getStickyStyles = function (rect, containerRect, scroll, dimensions) {
      var styles = this.calcPositionStyles(rect, containerRect, scroll, dimensions);

      if (!this.props.disableHardwareAcceleration) {
        var shouldAccelerate = this.isNearToViewport(rect);

        if (supportsWillChange) {
          styles.willChange = shouldAccelerate ? 'position, top' : null;
        } else {
          styles.transform = shouldAccelerate ? "translateZ(0)" : null;
        }
      }

      return styles;
    };

    Sticky.prototype.render = function () {
      var _a = this.props,
          disabled = _a.disabled,
          disableResizing = _a.disableResizing,
          style = _a.style,
          className = _a.className,
          overflowScroll = _a.overflowScroll;
      return React.createElement(React.Fragment, null, React.createElement(StickyPlaceholder, {
        className: className,
        style: this.state.useNativeSticky ? _assign$1({
          position: 'sticky',
          top: this.props.defaultOffsetTop
        }, style) : style,
        disabled: disabled,
        forwardRef: this.placeholderRef,
        stickyRef: this.stickyRef,
        disableResizing: disableResizing
      }, this.renderSticky), React.createElement(ObserveViewport, {
        disableScrollUpdates: disabled,
        disableDimensionsUpdates: disabled || overflowScroll !== 'flow',
        onUpdate: this.handleScrollUpdate,
        recalculateLayoutBeforeUpdate: this.recalculateLayoutBeforeUpdate,
        priority: this.state.isNearToViewport ? 'highest' : 'low'
      }));
    };

    Sticky.defaultProps = {
      stickyOffset: {
        top: 0,
        height: 0
      },
      defaultOffsetTop: 0,
      disableResizing: false,
      disableHardwareAcceleration: false,
      overflowScroll: 'end',
      experimentalNative: false,
      style: {}
    };
    return Sticky;
  }(React.PureComponent);

  var Sticky$1 = connect()(Sticky);

  var calcPositionStyles = function calcPositionStyles(rect, scroll, _a) {
    var _b = _a.offsetTop,
        offsetTop = _b === void 0 ? 0 : _b;
    var rectTop = Math.round(rect.top);
    var scrollY = Math.round(scroll.y);

    if (scroll.isScrollingDown) {
      // disable sticky mode above the top offset while scrolling down
      if (rectTop > 0 && scrollY < offsetTop) {
        return {
          position: 'absolute',
          top: 0
        };
      } // element is visible and scrolls down


      return {
        position: 'absolute',
        top: Math.max(scrollY - offsetTop + rectTop, 0)
      };
    }

    var isTopVisible = rectTop >= 0;
    var isBottomVisible = rectTop + rect.height <= 0; // element is visible and scrolls up

    if (!isTopVisible && !isBottomVisible) {
      return {
        position: 'absolute',
        top: scrollY - offsetTop + rectTop
      };
    } // disable sticky mode above the top offset while scrolling up


    if (scrollY <= offsetTop) {
      return {
        position: 'absolute',
        top: 0
      };
    }

    if (Math.round(scroll.yDTurn) === 0) {
      // scroll direction changed from down to up and the element was not visible
      if (isBottomVisible) {
        return {
          position: 'absolute',
          top: Math.round(scroll.yTurn) - offsetTop - rect.height
        };
      } // scroll direction changed from down to up and the element was fully visible


      return {
        position: 'absolute',
        top: Math.max(scrollY - offsetTop, 0)
      };
    } // set sticky


    return {
      position: 'fixed',
      top: 0
    };
  };

  var StickyScrollUp =
  /** @class */
  function (_super) {
    __extends$1(StickyScrollUp, _super);

    function StickyScrollUp() {
      var _this = _super !== null && _super.apply(this, arguments) || this;

      _this.stickyRef = React.createRef();
      _this.placeholderRef = React.createRef();
      _this.stickyOffset = null;
      _this.stickyOffsetHeight = 0;
      _this.state = {
        styles: {},
        isNearToViewport: false,
        isSticky: false
      };

      _this.isNearToViewport = function (rect) {
        var padding = 700;
        return rect.top - padding < 0;
      };

      _this.recalculateLayoutBeforeUpdate = function () {
        return {
          placeholderRect: _this.placeholderRef.current.getBoundingClientRect(),
          stickyRect: _this.stickyRef.current.getBoundingClientRect()
        };
      };

      _this.handleViewportUpdate = function (_a, _b) {
        var scroll = _a.scroll;
        var stickyRect = _b.stickyRect,
            placeholderRect = _b.placeholderRect;

        if (_this.props.disabled) {
          return;
        } // in case children is not a function renderArgs will never be used


        var willRenderAsAFunction = typeof _this.props.children === 'function';
        var nextOffset = Math.max(Math.round(stickyRect.bottom), 0);
        var nextOffsetHeight = stickyRect.height;
        var offsetDidChange = _this.stickyOffset !== nextOffset;
        var offsetHeightDidChange = _this.stickyOffsetHeight !== nextOffsetHeight;

        var styles = _this.getStickyStyles(stickyRect, placeholderRect, scroll);

        var stateStyles = _this.state.styles;
        var stylesDidChange = !shallowEqualPositionStyles(styles, stateStyles);

        var isNearToViewport = _this.isNearToViewport(stickyRect);

        var isSticky = willRenderAsAFunction ? styles.top === 0 && styles.position === 'fixed' : false;
        var isNearToViewportDidChange = _this.state.isNearToViewport !== isNearToViewport;
        var isStickyDidChange = _this.state.isSticky !== isSticky;

        if (_this.props.updateStickyOffset && (offsetDidChange || offsetHeightDidChange)) {
          _this.props.updateStickyOffset(nextOffset, nextOffsetHeight);
        }

        if (!stylesDidChange && !isNearToViewportDidChange && !isStickyDidChange) {
          return;
        }

        _this.setState({
          styles: stylesDidChange ? styles : stateStyles,
          isNearToViewport: isNearToViewport,
          isSticky: isSticky
        });
      };

      _this.renderSticky = function (_a) {
        var isRecalculating = _a.isRecalculating;
        var _b = _this.props,
            disabled = _b.disabled,
            children = _b.children,
            stickyProps = _b.stickyProps;
        return React.createElement(StickyElement, _assign$1({
          forwardRef: _this.stickyRef,
          positionStyle: _this.state.styles,
          disabled: disabled || isRecalculating,
          children: children,
          renderArgs: {
            isNearToViewport: _this.state.isNearToViewport,
            isSticky: _this.state.isSticky
          }
        }, stickyProps));
      };

      return _this;
    }

    StickyScrollUp.prototype.componentDidUpdate = function (prevProps, prevState) {
      if (this.props.updateStickyOffset && prevProps.disabled !== this.props.disabled) {
        this.props.updateStickyOffset(this.props.disabled ? 0 : this.stickyOffset, this.stickyOffsetHeight);
      }
    };

    StickyScrollUp.prototype.getStickyStyles = function (stickyRect, placeholderRect, scroll) {
      var offsetTop = isNaN(this.props.defaultOffsetTop) ? Math.round(placeholderRect.top) + Math.round(scroll.y) : this.props.defaultOffsetTop;
      var styles = calcPositionStyles(stickyRect, scroll, {
        offsetTop: offsetTop
      });

      if (!this.props.disableHardwareAcceleration) {
        var shouldAccelerate = this.isNearToViewport(stickyRect);

        if (supportsWillChange) {
          styles.willChange = shouldAccelerate ? 'position, top' : null;
        } else {
          styles.transform = shouldAccelerate ? "translateZ(0)" : null;
        }
      }

      return styles;
    };

    StickyScrollUp.prototype.render = function () {
      var _a = this.props,
          disabled = _a.disabled,
          disableResizing = _a.disableResizing,
          style = _a.style,
          className = _a.className;
      return React.createElement(React.Fragment, null, React.createElement(StickyPlaceholder, {
        className: className,
        style: style,
        disabled: disabled,
        stickyRef: this.stickyRef,
        disableResizing: disableResizing,
        forwardRef: this.placeholderRef
      }, this.renderSticky), React.createElement(ObserveViewport, {
        disableScrollUpdates: disabled,
        disableDimensionsUpdates: true,
        onUpdate: this.handleViewportUpdate,
        recalculateLayoutBeforeUpdate: this.recalculateLayoutBeforeUpdate,
        priority: this.state.isNearToViewport ? 'highest' : 'low'
      }));
    };

    StickyScrollUp.defaultProps = {
      disableHardwareAcceleration: false,
      disableResizing: false,
      style: {}
    };
    return StickyScrollUp;
  }(React.PureComponent);

  var StickyScrollUp$1 = connect()(StickyScrollUp);

  var propTypes$1m = {
    /** Aggiunge un ombra per enfatizzare il componente rispetto alla pagina in cui è contenuto */
    shadow: propTypes.bool,

    /** Aggiunge il comportamento "sticky" ai componenti Header contenuti */
    sticky: propTypes.bool,

    /** Classi addizionali per il componente Headers */
    className: propTypes.string
  };
  var defaultProps$1h = {
    shadow: false,
    sticky: false
  };

  var Headers = function Headers(_ref) {
    var className = _ref.className,
        shadow = _ref.shadow,
        sticky = _ref.sticky,
        attributes = _objectWithoutPropertiesLoose$1(_ref, ["className", "shadow", "sticky"]);

    var classes = classnames('it-header-wrapper', {
      'it-shadow': shadow,
      'it-header-sticky': sticky
    }, className);

    if (!sticky) {
      return React__default.createElement("div", _extends$1({
        className: classes
      }, attributes));
    }

    return React__default.createElement(StickyScrollUpProvider, null, React__default.createElement(Sticky$1, {
      style: {
        position: 'sticky',
        zIndex: 2
      }
    }, React__default.createElement("div", _extends$1({
      className: classes
    }, attributes))));
  };

  Headers.propTypes = propTypes$1m;
  Headers.defaultProps = defaultProps$1h;

  var iconSprite = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxkZWZzPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtYXJyb3ctZG93biIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTcuOSAxMy4ybC01LjQgNS4zVjNoLTF2MTUuNWwtNS40LTUuMy0uNy43IDYuNiA2LjUgNi42LTYuNXpNMTIgMTl6Ii8+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtYXJyb3ctZG93bi1jaXJjbGUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTE1LjYgMTMuMmwuNy43LTQuMyA0LjMtNC4zLTQuMy43LS43IDMuMSAzLjFWN2gxdjkuMnpNMjIgMTJBMTAgMTAgMCAxMTEyIDJhMTAgMTAgMCAwMTEwIDEwem0tMSAwYTkgOSAwIDEwLTkgOSA5IDkgMCAwMDktOXoiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PC9zdmc+PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGlkPSJpdC1hcnJvdy1kb3duLXRyaWFuZ2xlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik05LjIgMTJoNS42YTEgMSAwIDAxLjcgMS43TDEyIDE3LjNsLTMuNS0zLjZhMSAxIDAgMDEuNy0xLjd6Ii8+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtYXJyb3ctbGVmdCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMjEgMTEuNUg1LjVsNS4zLTUuNC0uNy0uN0wzLjYgMTJsNi41IDYuNi43LS43LTUuMy01LjRIMjF6TTUgMTJ6Ii8+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtYXJyb3ctbGVmdC1jaXJjbGUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTcuNyAxMS41SDE3djFINy44bDMgMy4xLS43LjdMNS44IDEybDQuMy00LjMuNy43ek0yMiAxMkExMCAxMCAwIDExMTIgMmExMCAxMCAwIDAxMTAgMTB6bS0xIDBhOSA5IDAgMTAtOSA5IDkgOSAwIDAwOS05eiIvPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LWFycm93LWxlZnQtdHJpYW5nbGUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEyIDkuMnY1LjZhMSAxIDAgMDEtMS43LjdMNi44IDEybDMuNS0zLjVhMSAxIDAgMDExLjcuN3oiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PC9zdmc+PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGlkPSJpdC1hcnJvdy1yaWdodCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTMuOSA1LjRsLS43LjcgNS4zIDUuNEgzdjFoMTUuNWwtNS4zIDUuNC43LjcgNi42LTYuNnpNMTkgMTJ6Ii8+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtYXJyb3ctcmlnaHQtY2lyY2xlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xMy45IDcuN2w0LjMgNC4zLTQuMyA0LjMtLjctLjcgMy4xLTMuMUg3di0xaDkuMmwtMy0zLjF6TTIyIDEyQTEwIDEwIDAgMTExMiAyYTEwIDEwIDAgMDExMCAxMHptLTEgMGE5IDkgMCAxMC05IDkgOSA5IDAgMDA5LTl6Ii8+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtYXJyb3ctcmlnaHQtdHJpYW5nbGUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEyIDE0LjhWOS4yYTEgMSAwIDAxMS43LS43bDMuNSAzLjUtMy41IDMuNWExIDEgMCAwMS0xLjctLjd6Ii8+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtYXJyb3ctdXAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTE4LjYgMTAuMUwxMiAzLjVsLTYuNiA2LjYuNy43IDUuNC01LjNWMjFoMVY1LjVsNS40IDUuM3pNMTIgNXoiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PC9zdmc+PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGlkPSJpdC1hcnJvdy11cC1jaXJjbGUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEyIDUuOGw0LjMgNC4zLS43LjctMy4xLTMuMVYxN2gtMVY3LjhsLTMuMSAzLS43LS43ek0yMiAxMkExMCAxMCAwIDExMTIgMmExMCAxMCAwIDAxMTAgMTB6bS0xIDBhOSA5IDAgMTAtOSA5IDkgOSAwIDAwOS05eiIvPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LWFycm93LXVwLXRyaWFuZ2xlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xNC44IDEySDkuMmExIDEgMCAwMS0uNy0xLjdMMTIgNi44bDMuNSAzLjVhMSAxIDAgMDEtLjcgMS43eiIvPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LWJlaGFuY2UiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjxwYXRoIGQ9Ik03LjgzIDUuNzVhOCA4IDAgMDExLjYuMTUgMy4zOCAzLjM4IDAgMDExLjI0LjUxYy4zNDUuMjMzLjYyLjU1NC44LjkzLjIwMi40NTYuMjk4Ljk1Mi4yOCAxLjQ1YTIuNjggMi42OCAwIDAxLS40MiAxLjU0IDMuMDUgMy4wNSAwIDAxLTEuMjUgMSAyLjkyIDIuOTIgMCAwMTEuNjggMS4xNWMuMzkzLjU5LjU5IDEuMjkuNTYgMmEzLjM5IDMuMzkgMCAwMS0uMzIgMS41OSAzLjA4IDMuMDggMCAwMS0xIDEuMTEgNC4yNyA0LjI3IDAgMDEtMS40LjY0QTYgNiAwIDAxOCAxOEgyVjUuNzVoNS44M3ptLS4zNSA1YTIgMiAwIDAwMS4xOS0uMzVjLjMyOC0uMjcuNS0uNjg3LjQ2LTEuMTFBMS40NyAxLjQ3IDAgMDA5IDguNTRhMS4xNiAxLjE2IDAgMDAtLjQyLS40M0ExLjggMS44IDAgMDA4IDcuOWEzLjI2IDMuMjYgMCAwMC0uNy0uMDZINC43NHYyLjg3bDIuNzQuMDR6bS4xNSA1LjIyYy4yNTIuMDAzLjUwMy0uMDIuNzUtLjA3YTIgMiAwIDAwLjYyLS4zIDEuMzkgMS4zOSAwIDAwLjQ0LS40OSAxLjczIDEuNzMgMCAwMC4xNi0uOEExLjY0IDEuNjQgMCAwMDkuMDkgMTNhMi4zMyAyLjMzIDAgMDAtMS40MS0uNEg0Ljc0djMuMzhsMi44OS0uMDF6bTguNTQtLjA4YTIuMTggMi4xOCAwIDAwMS41OC41NCAyLjI0IDIuMjQgMCAwMDEuMjUtLjM3IDEuNiAxLjYgMCAwMC42NS0uNzloMi4xNWE0LjA2IDQuMDYgMCAwMS0xLjU4IDIuMjkgNC42NCA0LjY0IDAgMDEtMi41OC42OSA1LjIzIDUuMjMgMCAwMS0xLjktLjMzIDQgNCAwIDAxLTIuMzMtMi40NCA1LjI1IDUuMjUgMCAwMS0uMzItMS44OSA1LjEyIDUuMTIgMCAwMS4zMy0xLjg2IDQuMTQgNC4xNCAwIDAxLjkzLTEuNDkgNC40OCA0LjQ4IDAgMDExLjQ0LTEgNC41OSA0LjU5IDAgMDExLjg1LS4zNiA0LjMxIDQuMzEgMCAwMTIgLjQ0QTQgNCAwIDAxMjEgMTAuNWMuMzcuNTA1LjYzNiAxLjA4Ljc4IDEuNjlhNi4xOCA2LjE4IDAgMDEuMTcgMmgtNi4zOGEyLjUgMi41IDAgMDAuNiAxLjd6TTE5IDExLjIyYTEuODMgMS44MyAwIDAwLTEuMzgtLjQ5IDIgMiAwIDAwLTEgLjIgMS44IDEuOCAwIDAwLS42Mi40OSAxLjYyIDEuNjIgMCAwMC0uMzMuNjIgMi44NyAyLjg3IDAgMDAtLjExLjU5aDRhMi40IDIuNCAwIDAwLS41Ni0xLjQxem0tMy45My00LjY1aDQuOTh2MS4yMWgtNC45OFY2LjU3eiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtYnVyZ2VyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0yMiA1djFIMlY1ek0yIDEyLjVoMjB2LTFIMnpNMiAxOWgyMHYtMUgyeiIvPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LWNhbGVuZGFyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0yMC41IDRIMTdWM2gtMXYxSDhWM0g3djFIMy41QTEuNSAxLjUgMCAwMDIgNS41djEzQTEuNSAxLjUgMCAwMDMuNSAyMGgxN2ExLjUgMS41IDAgMDAxLjUtMS41di0xM0ExLjUgMS41IDAgMDAyMC41IDR6bS41IDE0LjVhLjUuNSAwIDAxLS41LjVoLTE3YS41LjUgMCAwMS0uNS0uNXYtMTNhLjUuNSAwIDAxLjUtLjVIN3YxaDFWNWg4djFoMVY1aDMuNWEuNS41IDAgMDEuNS41ek00IDhoMTZ2MUg0eiIvPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LWNhbWVyYSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMjAuNSAyMGgtMTdBMS41IDEuNSAwIDAxMiAxOC41di0xMEExLjUgMS41IDAgMDEzLjUgN2g0LjNsMS41LTIuM2ExLjUgMS41IDAgMDExLjItLjdoM2ExLjUgMS41IDAgMDExLjIuN0wxNi4yIDdoNC4zQTEuNSAxLjUgMCAwMTIyIDguNXYxMGExLjUgMS41IDAgMDEtMS41IDEuNXpNMy41IDhhLjUuNSAwIDAwLS41LjV2MTBhLjUuNSAwIDAwLjUuNWgxN2EuNS41IDAgMDAuNS0uNXYtMTBhLjUuNSAwIDAwLS41LS41aC00LjhsLTEuOC0yLjgtLjQtLjJoLTNsLS40LjJMOC4zIDh6TTEyIDE4YTUgNSAwIDExNS01IDUgNSAwIDAxLTUgNXptMC05YTQgNCAwIDEwNCA0IDQgNCAwIDAwLTQtNHpNNyA1SDR2MWgzeiIvPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LWNhcmQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTIwLjUgNWgtMTdBMS41IDEuNSAwIDAwMiA2LjV2MTFBMS41IDEuNSAwIDAwMy41IDE5aDE3YTEuNSAxLjUgMCAwMDEuNS0xLjV2LTExQTEuNSAxLjUgMCAwMDIwLjUgNXpNMyA5aDE4djNIM3ptMTggOC41YS41LjUgMCAwMS0uNS41aC0xN2EuNS41IDAgMDEtLjUtLjVWMTNoMTh6TTMgOFY2LjVhLjUuNSAwIDAxLjUtLjVoMTdhLjUuNSAwIDAxLjUuNVY4em01IDdINHYtMWg0eiIvPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LWNoZWNrIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik05LjYgMTYuOUw0IDExLjRsLjgtLjcgNC44IDQuOCA4LjUtOC40LjcuN3oiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PC9zdmc+PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGlkPSJpdC1jaGVjay1jaXJjbGUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTE3LjEgNy45bC43LjctNy44IDcuNi00LjctNC42LjctLjcgNCAzLjl6TTIyIDEyQTEwIDEwIDAgMTExMiAyYTEwIDEwIDAgMDExMCAxMHptLTEgMGE5IDkgMCAxMC05IDkgOSA5IDAgMDA5LTl6Ii8+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtY2hldnJvbi1sZWZ0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xNC42IDE3LjJMOSAxMS42IDE0LjYgNmwuOC43LTQuOSA0LjkgNC45IDQuOXoiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LWNoZXZyb24tcmlnaHQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTkuOCAxNy4ybC0uOC0uNyA0LjktNC45TDkgNi43bC44LS43IDUuNiA1LjZ6Ii8+PC9zdmc+PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGlkPSJpdC1jbGlwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xMSAyMmEyLjkgMi45IDAgMDEtMy0zVjZhNCA0IDAgMDE4IDB2MTBoLTFWNmEzIDMgMCAwMC02IDB2MTNhMiAyIDAgMDA0IDBWOGExIDEgMCAwMC0yIDB2OGgtMVY4YTIgMiAwIDAxNCAwdjExYTIuOSAyLjkgMCAwMS0zIDN6Ii8+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtY2xvY2siIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTExLjUgNWgxdjcuNUg3di0xaDQuNXpNMjIgMTJBMTAgMTAgMCAxMTEyIDJhMTAgMTAgMCAwMTEwIDEwem0tMSAwYTkgOSAwIDEwLTkgOSA5IDkgMCAwMDktOXoiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PC9zdmc+PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGlkPSJpdC1jbG9zZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTIuNyAxMmwzLjcgMy42LS44LjgtMy42LTMuNy0zLjYgMy43LS44LS44IDMuNy0zLjYtMy43LTMuNi44LS44IDMuNiAzLjcgMy42LTMuNy44Ljh6Ii8+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtY2xvc2UtYmlnIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xMi43IDEybDYuNyA2LjYtLjguOC02LjYtNi43LTYuNiA2LjctLjgtLjggNi43LTYuNi02LjctNi42LjgtLjggNi42IDYuNyA2LjYtNi43LjguOHoiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PC9zdmc+PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGlkPSJpdC1jbG9zZS1jaXJjbGUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTE2LjMgOC4zTDEyLjYgMTJsMy43IDMuNi0uNy43LTMuNy0zLjYtMy42IDMuNi0uNy0uNyAzLjYtMy42LTMuNi0zLjcuNy0uNyAzLjYgMy43IDMuNy0zLjd6TTIyIDEyQTEwIDEwIDAgMTExMiAyYTEwIDEwIDAgMDExMCAxMHptLTEgMGE5IDkgMCAxMC05IDkgOSA5IDAgMDA5LTl6Ii8+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtY29kZS1jaXJjbGUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTE5IDEybC0yLjkgMi45LS43LS44IDIuMS0yLjEtMi4xLTIuMS43LS44ek03LjkgOS4xTDUgMTJsMi45IDIuOS43LS44TDYuNSAxMmwyLjEtMi4xek0yMiAxMkExMCAxMCAwIDExMTIgMmExMCAxMCAwIDAxMTAgMTB6bS0xIDBhOSA5IDAgMTAtOSA5IDkgOSAwIDAwOS05ek05LjYgMTYuNWwxIC4zIDMuNy05LjMtLjktLjN6Ii8+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtY29sbGFwc2UiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTE2LjUgMTUuNGwtNC45LTQuOS00LjkgNC45LS43LS44TDExLjYgOWw1LjYgNS42eiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtY29tbWVudCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTkgM0g1YTIgMiAwIDAwLTIgMnYxMGEyIDIgMCAwMDIgMmgydjUuNGwxLjctMS43IDMuNy0zLjdIMTlhMiAyIDAgMDAyLTJWNWEyIDIgMCAwMC0yLTJ6bTEgMTJhLjkuOSAwIDAxLTEgMWgtN2wtNCA0di00SDVhLjkuOSAwIDAxLTEtMVY1YS45LjkgMCAwMTEtMWgxNGEuOS45IDAgMDExIDF6TTkgMTBhLjkuOSAwIDAxLTEgMSAuOS45IDAgMDEtMS0xIC45LjkgMCAwMTEtMSAuOS45IDAgMDExIDF6bTQgMGExIDEgMCAwMS0yIDAgMSAxIDAgMDEyIDB6bTQgMGExIDEgMCAwMS0yIDAgMSAxIDAgMDEyIDB6Ii8+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtY29weSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTkuNSA0SDE4di0uNkExLjUgMS41IDAgMDAxNi41IDJoLTExQTEuNSAxLjUgMCAwMDQgMy40djE1LjJBMS41IDEuNSAwIDAwNS41IDIwSDd2LjZBMS41IDEuNSAwIDAwOC41IDIyaDExYTEuNSAxLjUgMCAwMDEuNS0xLjRWNS40QTEuNSAxLjUgMCAwMDE5LjUgNHpNNSAxOC42VjMuNGEuNS41IDAgMDEuNS0uNGgxMWEuNS41IDAgMDEuNS40djE1LjJhLjUuNSAwIDAxLS41LjRoLTExYS41LjUgMCAwMS0uNS0uNHptMTUgMmEuNS41IDAgMDEtLjUuNGgtMTFhLjUuNSAwIDAxLS41LS40VjIwaDguNWExLjUgMS41IDAgMDAxLjUtMS40VjVoMS41YS41LjUgMCAwMS41LjR6Ii8+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtZGVzaWduZXJzLWl0YWxpYSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNOC42NjMgMjAuNjc1VjcuNjQxSDEyLjN2MTMuMDU3SDguNjYzdi0uMDIzek0yMi45NTIgMTAuNjFoLTMuMzI1djUuMzU3YzAgLjUzNC4wMjQuODgyLjA0OCAxLjExMy4wMjQuMjEuMTIuMzk1LjI4OS41NTcuMTY5LjE2Mi40MzQuMjMyLjc5NS4yMzJsMi4wNzItLjA0Ni4xNjkgMi43ODNjLTEuMjA1LjI1NS0yLjE0NS4zOTQtMi43NzEuMzk0LTEuNjM5IDAtMi43NDctLjM0OC0zLjMyNS0xLjA2Ny0uNjAzLS42OTYtLjg5Mi0xLjk5NC0uODkyLTMuODk2VjRoMy42Mzl2My42MThoMy4zMjV2Mi45OTJoLS4wMjR6bS0xOS43Ni45OTdjLS42MjYgMC0xLjE1Ni0uMjA5LTEuNTY1LS42MjZBMi4xMTMgMi4xMTMgMCAwMTEgOS40NWMwLS42MDQuMjE3LTEuMTE0LjYwMi0xLjUzMS40MS0uNDE4Ljk0LS42MDMgMS41NjctLjYwMy42MjYgMCAxLjE1Ni4yMDggMS41NjYuNjI2LjQxLjQxNy42MDIuOTI3LjYwMiAxLjU1NCAwIC42MjYtLjE5MiAxLjExMy0uNjAyIDEuNTMtLjM4Ni4zNzEtLjg5Mi41OC0xLjU0Mi41OHoiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LWRvd25sb2FkIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xMiAxNC4yTDcuNyA5LjlsLjctLjcgMy4xIDMuMVYzaDF2OS4ybDMuMS0zIC43Ljd6bTctMi4ydjcuNWEuNS41IDAgMDEtLjUuNWgtMTNhLjUuNSAwIDAxLS41LS41VjEySDR2Ny41QTEuNSAxLjUgMCAwMDUuNSAyMWgxM2ExLjUgMS41IDAgMDAxLjUtMS41VjEyeiIvPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LWVycm9yIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xMS41IDE0LjJWNS43aDEuMnY4LjV6bS0uMSA0LjFoMS4ydi0xLjhoLTEuMnpNMjIgNy45djguM0wxNi4xIDIySDcuOUwyIDE2LjJWNy45TDcuOSAyaDguMnptLTEgLjRMMTUuNyAzSDguM0wzIDguM3Y3LjVMOC4zIDIxaDcuNGw1LjMtNS4yeiIvPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LWV4Y2hhbmdlLWNpcmNsZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTIgMmExMCAxMCAwIDEwMTAgMTBBMTAgMTAgMCAwMDEyIDJ6bTAgMTlhOSA5IDAgMTE5LTkgOSA5IDAgMDEtOSA5em01LjEtOC45bC44LjgtNC4zIDQuM2ExLjUgMS41IDAgMDEtMS4xLjQgMS41IDEuNSAwIDAxLTEuMS0uNEw5IDE0LjdWMTdIOHYtNGg0djFIOS43bDIuNCAyLjVoLjh6bS02LTQuNmwtNC4yIDQuNC0uOC0uOCA0LjMtNC4zYTEuNSAxLjUgMCAwMTEuMS0uNCAxLjUgMS41IDAgMDExLjEuNEwxNSA5LjNWN2gxdjRoLTR2LTFoMi4zbC0yLjQtMi41aC0uOHoiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PC9zdmc+PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGlkPSJpdC1leHBhbmQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTExLjYgMTUuNEw2IDkuOGwuNy0uOCA0LjkgNC45TDE2LjUgOWwuNy44eiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtZXh0ZXJuYWwtbGluayIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMjEgM3Y2aC0xVjQuN2wtNy42IDcuNy0uOC0uOEwxOS4zIDRIMTVWM3ptLTQgMTYuNWEuNS41IDAgMDEtLjUuNWgtMTJhLjUuNSAwIDAxLS41LS41di0xMmEuNS41IDAgMDEuNS0uNUgxMlY2SDQuNUExLjUgMS41IDAgMDAzIDcuNXYxMkExLjUgMS41IDAgMDA0LjUgMjFoMTJhMS41IDEuNSAwIDAwMS41LTEuNVYxMmgtMXoiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PC9zdmc+PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGlkPSJpdC1mYWNlYm9vayIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PHBhdGggZD0iTTEzLjU1IDIydi05LjExaDMuMDdsLjQ2LTMuNTZoLTMuNTNWNy4wNWMwLTEgLjI5LTEuNzMgMS43Ny0xLjczaDEuODdWMi4xNEEyNS4xNCAyNS4xNCAwIDAwMTQuNDUgMmMtMi43MiAwLTQuNTggMS42Ni00LjU4IDQuN3YyLjYySDYuODF2My41N2gzLjA2VjIyaDMuNjh6Ii8+PC9zdmc+PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGlkPSJpdC1mYWNlYm9vay1zcXVhcmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjxwYXRoIGQ9Ik0yMCAzSDRhMSAxIDAgMDAtMSAxdjE2YTEgMSAwIDAwMSAxaDguNjN2LTYuOTVoLTIuMzd2LTIuNzRoMi4zNHYtMmEzLjI4IDMuMjggMCAwMTMuNS0zLjZjLjcwNSAwIDEuNDEuMDQgMi4xMS4xMnYyLjQ0aC0xLjQ0Yy0xLjEzIDAtMS4zNC41My0xLjM0IDEuMzJ2MS43NGgyLjdsLS4zNSAyLjcyaC0yLjM1djdIMjBhMSAxIDAgMDAxLTFWNGExIDEgMCAwMC0xLTF6Ii8+PC9zdmc+PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGlkPSJpdC1maWxlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xNC43IDJINi41QTEuNSAxLjUgMCAwMDUgMy41djE3QTEuNSAxLjUgMCAwMDYuNSAyMmgxMWExLjUgMS41IDAgMDAxLjUtMS41VjYuM3ptLjMgMS43TDE3LjMgNmgtMS44YS41LjUgMCAwMS0uNS0uNXpNMTcuNSAyMWgtMTFhLjUuNSAwIDAxLS41LS41di0xN2EuNS41IDAgMDEuNS0uNUgxNHYyLjVBMS41IDEuNSAwIDAwMTUuNSA3SDE4djEzLjVhLjUuNSAwIDAxLS41LjV6TTggOWg4djFIOHptMCAyaDh2MUg4em0wIDJoNHYxSDh6Ii8+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtZmlsZXMiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTE1LjcgMkg3LjVBMS41IDEuNSAwIDAwNiAzLjVWNGgtLjVBMS41IDEuNSAwIDAwNCA1LjV2MTVBMS41IDEuNSAwIDAwNS41IDIyaDExYTEuNSAxLjUgMCAwMDEuNS0xLjVWMjBoLjVhMS41IDEuNSAwIDAwMS41LTEuNVY2LjN6bS4zIDEuN0wxOC4zIDZoLTEuOGEuNS41IDAgMDEtLjUtLjV6bTEgMTYuOGEuNS41IDAgMDEtLjUuNWgtMTFhLjUuNSAwIDAxLS41LS41di0xNWEuNS41IDAgMDEuNS0uNUg2djEzLjVBMS41IDEuNSAwIDAwNy41IDIwSDE3em0xLjUtMS41aC0xMWEuNS41IDAgMDEtLjUtLjV2LTE1YS41LjUgMCAwMS41LS41SDE1djIuNUExLjUgMS41IDAgMDAxNi41IDdIMTl2MTEuNWEuNS41IDAgMDEtLjUuNXpNOSA5aDh2MUg5em0wIDJoOHYxSDl6bTAgMmg0djFIOXoiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PC9zdmc+PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGlkPSJpdC1mbGlja3IiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjxjaXJjbGUgY3g9IjYuNzMiIGN5PSIxMiIgcj0iNC43MyIvPjxjaXJjbGUgY3g9IjE3LjI3IiBjeT0iMTIiIHI9IjQuNzMiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LWZsaWNrci1zcXVhcmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjxwYXRoIGQ9Ik0yMCA0YTMuMjYgMy4yNiAwIDAwLTIuMzgtMUg2LjM4QTMuMjYgMy4yNiAwIDAwNCA0YTMuMjYgMy4yNiAwIDAwLTEgMi4zN3YxMS4yNUEzLjI2IDMuMjYgMCAwMDQgMjBhMy4yNiAzLjI2IDAgMDAyLjM5IDFoMTEuMjRBMy4zOCAzLjM4IDAgMDAyMSAxNy42MlY2LjM3QTMuMjYgMy4yNiAwIDAwMjAgNHptLTkuNTYgOS43N2EyLjUgMi41IDAgMDEtMy41MSAwIDIuNDkgMi40OSAwIDAxMC0zLjUyIDIuNSAyLjUgMCAwMTMuNTEgMCAyLjQ5IDIuNDkgMCAwMTAgMy41MnptNi42MSAwQTIuNDkgMi40OSAwIDAxMTIuODIgMTJhMi40OSAyLjQ5IDAgMDE0LjI0LTEuNzYgMi40OSAyLjQ5IDAgMDEwIDMuNTJsLS4wMS4wMXoiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LWZvbGRlciIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMjAgNmgtOGwtMi0ySDRhMiAyIDAgMDAtMiAydjEyYTIgMiAwIDAwMiAyaDE2YTIgMiAwIDAwMi0yVjhhMiAyIDAgMDAtMi0yem0xIDEyYS45LjkgMCAwMS0xIDFINGEuOS45IDAgMDEtMS0xVjZhLjkuOSAwIDAxMS0xaDUuNmwxLjcgMS43LjMuM0gyMGEuOS45IDAgMDExIDF6TTQgOGgxNnYxSDR6Ii8+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtZ2l0aHViIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48cGF0aCBkPSJNMTIgMmExMCAxMCAwIDAwLTMuMTYgMTkuNDljLjUuMDkuNjgtLjIyLjY4LS40OHYtMS43QzYuNzMgMTkuOTEgNi4xNCAxOCA2LjE0IDE4QTIuNjkgMi42OSAwIDAwNSAxNi41Yy0uOTEtLjYyLjA3LS42MS4wNy0uNjFhMi4xMyAyLjEzIDAgMDExLjUzIDEgMi4xNCAyLjE0IDAgMDAyLjkxLjgzIDIuMTYgMi4xNiAwIDAxLjYzLTEuMzRjLTIuMTQtLjIxLTQuNTItMS4wNy00LjUyLTQuOWEzLjg5IDMuODkgMCAwMTEtMi42OSAzLjU3IDMuNTcgMCAwMS4xLTIuNjRzLjg0LS4yNyAyLjc1IDFhOS42MyA5LjYzIDAgMDE1IDBjMS45MS0xLjI5IDIuNzUtMSAyLjc1LTEgLjM3LjgzNS40MDUgMS43OC4xIDIuNjRhMy44OSAzLjg5IDAgMDExIDIuNjljMCAzLjg0LTIuMzQgNC42OC00LjU3IDQuOTMuNDgyLjQ5LjczIDEuMTY0LjY4IDEuODV2Mi43NWMwIC4zMy4xOC41OC42OS40OEExMCAxMCAwIDAwMTIgMnoiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LWhlYXJpbmciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTIwIDlhNi44IDYuOCAwIDAxLTMuNSA2bC0yIDEuMWEzLjMgMy4zIDAgMDAtMS41IDIuN0EzLjIgMy4yIDAgMDE5LjggMjJoLS42YTMuNCAzLjQgMCAwMS0zLTIuMWwuOS0uNUEyLjMgMi4zIDAgMDA5LjIgMjFoLjZhMi4xIDIuMSAwIDAwMS42LS43IDIgMiAwIDAwLjYtMS41IDQgNCAwIDAxMi0zLjVsMi0xLjJBNS45IDUuOSAwIDAwMTkgOWE2IDYgMCAwMC02LTYgNiA2IDAgMDAtNC44IDIuNGwtLjgtLjZBNyA3IDAgMDExMyAyYTcgNyAwIDAxNyA3ek03LjUgMTJBNS41IDUuNSAwIDAwMiA2LjV2MWE0LjUgNC41IDAgMDEwIDl2MUE1LjUgNS41IDAgMDA3LjUgMTJ6TTUgMTJhMi45IDIuOSAwIDAwLTMtM3YxYTIgMiAwIDAxMCA0djFhMi45IDIuOSAwIDAwMy0zem01IDBhOCA4IDAgMDAtOC04djFhNyA3IDAgMDEwIDE0djFhOCA4IDAgMDA4LTh6bTUuOS4zYTQuNSA0LjUgMCAwMDEuMi0zLjIgNC41IDQuNSAwIDAwLTEuMi0zLjIgNC41IDQuNSAwIDAwLTMuMi0xLjRBNC44IDQuOCAwIDAwOS41IDZsLS4zLjMuMi4zYTguOCA4LjggMCAwMTEuMyAzdi40aC40YTEuNSAxLjUgMCAwMTAgM3YxYTIuNSAyLjUgMCAwMDIuNS0yLjUgMi42IDIuNiAwIDAwLTItMi41IDguNSA4LjUgMCAwMC0xLjEtMi42IDMuOSAzLjkgMCAwMTIuMi0uOSAzLjUgMy41IDAgMDEyLjQgMSAzLjUgMy41IDAgMDExIDIuNiAzLjUgMy41IDAgMDEtMSAyLjZ6Ii8+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtaGVscCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTIuOCAyMmgtMS40di0yLjFoMS40em0tLjEtNC45aC0xLjJhOS43IDkuNyAwIDAxLS4xLTEuNyAyLjcgMi43IDAgMDEuMy0xLjIgNS42IDUuNiAwIDAxLjctMS4zbDIuMy0yLjFhOS42IDkuNiAwIDAwMS44LTIuMSA0LjUgNC41IDAgMDAuNS0yLjMgMyAzIDAgMDAtMS4xLTIuNiA2LjIgNi4yIDAgMDAtMy40LS43IDIyLjkgMjIuOSAwIDAwLTMuNi41bC0xIC4zLS4yLTEuMmguMWExOC4xIDE4LjEgMCAwMTQuNy0uOCA3LjQgNy40IDAgMDE0LjMgMSA0LjIgNC4yIDAgMDExLjQgMy41IDUgNSAwIDAxLS41IDIuNyA4LjYgOC42IDAgMDEtMS45IDIuMiAxOS43IDE5LjcgMCAwMC0xLjggMS42IDYuMiA2LjIgMCAwMC0uOSAxLjIgMi4zIDIuMyAwIDAwLS40IDEuNHoiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PC9zdmc+PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGlkPSJpdC1oZWxwLWNpcmNsZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTIgMmExMCAxMCAwIDEwMTAgMTBBMTAgMTAgMCAwMDEyIDJ6bTAgMTlhOSA5IDAgMTE5LTkgOSA5IDAgMDEtOSA5em0tMS4yLTQuNUgxMnYxLjhoLTEuMnptNC41LThhNC4yIDQuMiAwIDAxLS4zIDEuOCA1LjQgNS40IDAgMDEtMS4zIDEuNEwxMi4zIDEzYTIuOCAyLjggMCAwMC0uNCAxLjJ2LjZIMTFhMyAzIDAgMDEtLjItMSAyLjEgMi4xIDAgMDEuNS0xLjIgOSA5IDAgMDExLjQtMS40IDYuNCA2LjQgMCAwMDEuMi0xLjMgMi42IDIuNiAwIDAwLjMtMS40IDEuNyAxLjcgMCAwMC0uNi0xLjQgMy41IDMuNSAwIDAwLTItLjRMOS4zIDdoLS41di0uOGExMC4yIDEwLjIgMCAwMTMtLjUgNC45IDQuOSAwIDAxMi43LjYgMi43IDIuNyAwIDAxLjggMi4yeiIvPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LWhvcm4iIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTUgOWEzIDMgMCAwMDAgNmguNUw3IDE5LjNBMi41IDIuNSAwIDAwOS4zIDIxaC4yYTEuNCAxLjQgMCAwMDEuMi0uNiAxLjQgMS40IDAgMDAuMi0xLjRsLTEuMy00aDEuOGw4LjYgMy44VjQuN0wxMS40IDl6bTUgMTAuM2EuNy43IDAgMDEtLjEuNWwtLjQuMmgtLjJhMS41IDEuNSAwIDAxLTEuNC0xbC0xLjMtNGgxLjl6TTUgMTRhMiAyIDAgMDEwLTRoNnY0em0xNCAzLjJsLTctM1Y5LjhsNy0zLjV6TTIyIDl2NmgtMVY5eiIvPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LWluZm8tY2lyY2xlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xMiAyYTEwIDEwIDAgMTAxMCAxMEExMCAxMCAwIDAwMTIgMnptMCAxOWE5IDkgMCAxMTktOSA5IDkgMCAwMS05IDl6bS0uNy0xNWgxLjV2MmgtMS41em0wIDNoMS41djloLTEuNXoiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PC9zdmc+PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGlkPSJpdC1pbnN0YWdyYW0iIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjxwYXRoIGQ9Ik0xMiA0LjYybC0uMDEuMDhIOC4zNWE1LjEyIDUuMTIgMCAwMC0xLjY3LjMxYy0uMzguMTUtLjcyLjM4Mi0xIC42OC0uMjk4LjI4LS41My42Mi0uNjggMWE1LjEyIDUuMTIgMCAwMC0uMyAxLjY4djcuMjhjLjAxLjU3LjExNCAxLjEzNC4zMSAxLjY3LjE1LjM4LjM4Mi43Mi42OCAxIC4yOC4yOTguNjIuNTMgMSAuNjguNTM2LjE5NiAxLjEuMyAxLjY3LjMxLjk1LjA1IDEuMjQuMDUgMy42NC4wNSAyLjQgMCAyLjY0LS4wNSAzLjY0LS4wNWE1LjEyIDUuMTIgMCAwMDEuNjctLjMxQTMuMDggMy4wOCAwIDAwMTkgMTcuMzFhNS4xMiA1LjEyIDAgMDAuMy0xLjY4Yy4wNS0uOTUuMDUtMS4yNC4wNS0zLjY0IDAtMi40LS4wNS0yLjY0LS4wNS0zLjY0YTUuMTIgNS4xMiAwIDAwLS4zMS0xLjY3IDIuNzcgMi43NyAwIDAwLS42OC0xIDIuNzcgMi43NyAwIDAwLTEtLjY4IDUuMTIgNS4xMiAwIDAwLTEuNjctLjM4SDEyek0xMiAzdi4wNWgzLjcxYTYuOSA2LjkgMCAwMTIuMTkuNDIgNC42NCA0LjY0IDAgMDEyLjY4IDIuNjNBNi45IDYuOSAwIDAxMjEgOC4yOWMwIC45Ni4wNSAxLjI3LjA1IDMuNzFTMjEgMTQuNzEgMjEgMTUuNzFhNi45IDYuOSAwIDAxLS40NyAyLjI0IDQuNjQgNC42NCAwIDAxLTIuNjMgMi42MyA2LjkgNi45IDAgMDEtMi4xOS40MmMtLjk2LjA1LTEuMjcuMDUtMy43MS4wNVM5LjI5IDIxIDguMjkgMjFhNi45IDYuOSAwIDAxLTIuMTktLjQ3IDQuNjQgNC42NCAwIDAxLTIuNjMtMi42MyA2LjkgNi45IDAgMDEtLjQyLTIuMTlWMTIgOC4yOWE2LjkgNi45IDAgMDEuNDItMi4xOUE0LjY0IDQuNjQgMCAwMTYuMSAzLjQyIDYuOSA2LjkgMCAwMTguMjkgM0gxMnptMCA0LjM4YTQuNjIgNC42MiAwIDExMCA5LjI0IDQuNjIgNC42MiAwIDAxMC05LjI0ek0xMiAxNWEzIDMgMCAxMDAtNiAzIDMgMCAwMDAgNnptNC44LTYuNzJhMS4wOCAxLjA4IDAgMTEwLTIuMTYgMS4wOCAxLjA4IDAgMDEwIDIuMTZ6Ii8+PC9zdmc+PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGlkPSJpdC1rZXkiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTE4IDEwYTIgMiAwIDEwMiAyIDIgMiAwIDAwLTItMnptMCAzYTEgMSAwIDExMS0xIC45LjkgMCAwMS0xIDF6bS0xLTZhNS4xIDUuMSAwIDAwLTQuNiAzSDMuM2wtMiAyIDMgM0g3di0xaC4zbDEgMUgxMXYtMWgxLjRhNS4xIDUuMSAwIDAwNC42IDMgNSA1IDAgMDAwLTEwem0wIDlhNC4xIDQuMSAwIDAxLTMuOC0yLjdWMTNIMTB2MUg4LjdsLTEtMUg2djFINC43bC0yLTIgMS0xaDkuNHYtLjNBNC4xIDQuMSAwIDAxMTcgOGE0IDQgMCAwMTAgOHoiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PC9zdmc+PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGlkPSJpdC1sZXNzLWNpcmNsZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTIgM2E5IDkgMCAwMTYuMzYgMTUuMzZBOSA5IDAgMDE1LjY0IDUuNjIgOC45MyA4LjkzIDAgMDExMiAzbTAtMWExMCAxMCAwIDEwNy4wNyAyLjkzQTkuOTMgOS45MyAwIDAwMTIgMnoiLz48cmVjdCB4PSI3IiB5PSIxMS4yNSIgd2lkdGg9IjEwIiBoZWlnaHQ9IjEuNSIgcng9Ii43NSIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtbGluayIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTMuNCAxMy40bC0uNy0uN2EyLjkgMi45IDAgMDAuOS0yLjEgMi43IDIuNyAwIDAwLS45LTIuMUw5LjIgNC45YTMuMiAzLjIgMCAwMC00LjMgMCAzLjIgMy4yIDAgMDAwIDQuM0w3LjggMTJsLS43LjctMi45LTIuOGE0LjIgNC4yIDAgMDEwLTUuNyA0LjIgNC4yIDAgMDE1LjcgMGwzLjUgMy42YTMuNiAzLjYgMCAwMTEuMiAyLjggMy42IDMuNiAwIDAxLTEuMiAyLjh6bTYuNCA2LjRhNC4yIDQuMiAwIDAwMC01LjdsLTIuOS0yLjgtLjcuNyAyLjkgMi44YTMuMiAzLjIgMCAwMTAgNC4zIDMuMiAzLjIgMCAwMS00LjMgMGwtMy41LTMuNmEyLjcgMi43IDAgMDEtLjktMi4xIDIuOSAyLjkgMCAwMS45LTIuMWwtLjctLjdhMy42IDMuNiAwIDAwLTEuMiAyLjggMy42IDMuNiAwIDAwMS4yIDIuOGwzLjUgMy42YTMuOCAzLjggMCAwMDIuOCAxLjEgMy45IDMuOSAwIDAwMi45LTEuMXptLTYuNy02LjciLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PC9zdmc+PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGlkPSJpdC1saW5rZWRpbiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PHBhdGggZD0iTTE2LjUzIDguNjhBMy45NCAzLjk0IDAgMDAxMyAxMC42MlY5SDkuMzd2MTJoMy43M3YtNS45NWMwLTEuNTcuMjktMy4wOSAyLjI0LTMuMDkgMS45NSAwIDEuOTMgMS44IDEuOTMgMy4xOVYyMUgyMXYtNi42YzAtMy4yMy0uNjktNS43Mi00LjQ3LTUuNzJ6TTUuMTYgM2EyLjE3IDIuMTcgMCAxMDIuMTYgMi4xOEEyLjE2IDIuMTYgMCAwMDUuMTYgM3pNMy4yOSA5djEySDdWOUgzLjI5em0xMy4yNC0uM0EzLjk0IDMuOTQgMCAwMDEzIDEwLjYyVjlIOS4zN3YxMmgzLjczdi01Ljk1YzAtMS41Ny4yOS0zLjA5IDIuMjQtMy4wOSAxLjk1IDAgMS45MyAxLjggMS45MyAzLjE5VjIxSDIxdi02LjZjMC0zLjIzLS42OS01LjcyLTQuNDctNS43MnYuMDJ6TTMuMjkgMjFIN1Y5SDMuMjl2MTJ6TTUuMTYgM2EyLjE3IDIuMTcgMCAxMDIuMTYgMi4xOEEyLjE2IDIuMTYgMCAwMDUuMTYgM3oiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LWxpbmtlZGluLXNxdWFyZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PHBhdGggZD0iTTE5LjY3IDNINC4zM0ExLjMyIDEuMzIgMCAwMDMgNC4zdjE1LjRBMS4zMiAxLjMyIDAgMDA0LjMzIDIxaDE1LjM0QTEuMzIgMS4zMiAwIDAwMjEgMTkuN1Y0LjNBMS4zMiAxLjMyIDAgMDAxOS42NyAzek04LjM0IDE4LjM0SDUuNjdWOS43NWgyLjY3djguNTl6TTcgOC41N0ExLjU1IDEuNTUgMCAxMTguNTUgNyAxLjU0IDEuNTQgMCAwMTcgOC41N3ptMTEuMzQgOS43N2gtMi42N3YtNC4xOGMwLTEgMC0yLjI4LTEuMzktMi4yOHMtMS42IDEuMDktMS42IDIuMjF2NC4yNUgxMFY5Ljc1aDIuNTZ2MS4xN2EyLjgzIDIuODMgMCAwMTIuNTMtMS4zOWMyLjcgMCAzLjIgMS43OCAzLjIgNC4xbC4wNSA0LjcxeiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtbGlzdCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNCAxMmEuOS45IDAgMDEtMSAxIDEgMSAwIDAxMC0yIC45LjkgMCAwMTEgMXpNMyA0LjVhLjkuOSAwIDAwLTEgMSAuOS45IDAgMDAxIDEgLjkuOSAwIDAwMS0xIC45LjkgMCAwMC0xLTF6bTAgMTNhMSAxIDAgMDAwIDIgMSAxIDAgMDAwLTJ6TTYgNXYxaDE2VjV6bTAgNy41aDE2di0xSDZ6TTYgMTloMTZ2LTFINnoiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PC9zdmc+PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGlkPSJpdC1sb2NrIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xOC41IDguNUgxN1Y4QTUgNSAwIDAwNyA4di41SDUuNUExLjUgMS41IDAgMDA0IDEwdjguNUExLjUgMS41IDAgMDA1LjUgMjBoMTNhMS41IDEuNSAwIDAwMS41LTEuNVYxMGExLjUgMS41IDAgMDAtMS41LTEuNXpNOCA4YTQgNCAwIDAxOCAwdi41SDh6bTExIDEwLjVhLjUuNSAwIDAxLS41LjVoLTEzYS41LjUgMCAwMS0uNS0uNVYxMGEuNS41IDAgMDEuNS0uNWgxM2EuNS41IDAgMDEuNS41eiIvPjxwYXRoIGQ9Ik0xMiAxMy4yNWExIDEgMCAxMS0xIDEgMSAxIDAgMDExLTFtMC0xYTIgMiAwIDEwMiAyIDIgMiAwIDAwLTItMnoiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LWxvY2tlZCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTYuNSAxMkgxNlY3YTQgNCAwIDAwLTggMHY1aC0uNWExLjEgMS4xIDAgMDAtMS4xIDEuMXY2LjhBMS4xIDEuMSAwIDAwNy41IDIxaDlhMS4xIDEuMSAwIDAwMS4xLTEuMXYtNi44YTEuMSAxLjEgMCAwMC0xLjEtMS4xek05IDdhMyAzIDAgMDE2IDB2NUg5em03LjYgMTIuOWEuMS4xIDAgMDEtLjEuMWgtOWEuMS4xIDAgMDEtLjEtLjF2LTYuOGg5LjJ6TTEzIDE1LjVhLjguOCAwIDAxLS41Ljh2MS41aC0xdi0xLjVhLjguOCAwIDAxLS41LS44IDEgMSAwIDAxMiAweiIvPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LW1haWwiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTIwLjUgNWgtMTdBMS41IDEuNSAwIDAwMiA2LjV2MTFBMS41IDEuNSAwIDAwMy41IDE5aDE3YTEuNSAxLjUgMCAwMDEuNS0xLjV2LTExQTEuNSAxLjUgMCAwMDIwLjUgNXptLS4zIDFsLTcuMSA3LjJhMS42IDEuNiAwIDAxLTIuMiAwTDMuOCA2ek0zIDE3LjNWNi42TDguMyAxMnptLjcuN0w5IDEyLjdsMS4yIDEuMmEyLjcgMi43IDAgMDAzLjYgMGwxLjItMS4yIDUuMyA1LjN6bTEyLTZMMjEgNi42djEwLjd6Ii8+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtbWVkaXVtIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48cGF0aCBkPSJNNSA3LjYzQS43Mi43MiAwIDAwNC44MiA3TDMuMTMgNXYtLjNoNS4yMmw0IDguODQgMy41NC04Ljg0aDVWNWwtMS40MiAxLjRhLjQzLjQzIDAgMDAtLjE2LjR2MTAuMTJhLjQ1LjQ1IDAgMDAuMTYuNDFsMS40IDEuMzd2LjNoLTd2LS4zbDEuNDUtMS40MWMuMTQtLjE0LjE0LS4xOC4xNC0uNFY4LjcxTDExLjM3IDE5aC0uNTVMNi4xMiA4LjcxdjYuODhhLjkzLjkzIDAgMDAuMjYuNzlsMS44OSAyLjI5VjE5SDIuOTF2LS4zbDEuODktMi4zMmEuOTIuOTIgMCAwMC4yLS43OVY3LjYzeiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtbWVkaXVtLXNxdWFyZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PHBhdGggZD0iTTMgM2gxOHYxOEgzVjN6bTQuMyAxMS4zNmEuNjQuNjQgMCAwMS0uMTcuNTRsLTEuMjcgMS41NHYuMmgzLjZ2LS4yTDguMTkgMTQuOWEuNjcuNjcgMCAwMS0uMTktLjU0VjkuNzRsMy4xNiA2LjloLjM3bDIuNzEtNi45djUuNWMwIC4xNSAwIC4xNy0uMDkuMjdsLTEgMXYuMmg0Ljc0di0uMmwtLjg5LS45OGEuMjcuMjcgMCAwMS0uMTEtLjI3di02LjhhLjI4LjI4IDAgMDEuMTEtLjI3bDEtLjkzdi0uMmgtMy4zOUwxMi4yMyAxMyA5LjUyIDcuMDZINnYuMmwxLjE0IDEuMzZBLjUuNSAwIDAxNy4zIDl2NS4zNnoiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LW1pbnVzIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0yMCAxMi41SDR2LTFoMTZ6Ii8+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtbWludXMtY2lyY2xlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik02LjkgMTEuNWgxMHYxaC0xMHpNMjIgMTJBMTAgMTAgMCAxMTEyIDJhMTAgMTAgMCAwMTEwIDEwem0tMSAwYTkgOSAwIDEwLTkgOSA5IDkgMCAwMDktOXoiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PC9zdmc+PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGlkPSJpdC1tb3JlLWFjdGlvbnMiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTYgMTBhMiAyIDAgMTAyIDIgMiAyIDAgMDAtMi0yem0wIDNhMSAxIDAgMDEwLTIgMSAxIDAgMDEwIDJ6bTYtM2EyIDIgMCAxMDIgMiAyIDIgMCAwMC0yLTJ6bTAgM2ExIDEgMCAxMTEtMSAuOS45IDAgMDEtMSAxem02LTNhMiAyIDAgMTAyIDIgMiAyIDAgMDAtMi0yem0wIDNhMSAxIDAgMTExLTEgLjkuOSAwIDAxLTEgMXoiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PC9zdmc+PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGlkPSJpdC1tb3JlLWl0ZW1zIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xMiAxOGExIDEgMCAxMS0xIDEgLjkuOSAwIDAxMS0xbTAtMWEyIDIgMCAxMDIgMiAyIDIgMCAwMC0yLTJ6bTAtNmExIDEgMCAxMS0xIDEgLjkuOSAwIDAxMS0xbTAtMWEyIDIgMCAxMDIgMiAyIDIgMCAwMC0yLTJ6bTAtNmEuOS45IDAgMDExIDEgMSAxIDAgMDEtMiAwIC45LjkgMCAwMTEtMW0wLTFhMiAyIDAgMTAyIDIgMiAyIDAgMDAtMi0yeiIvPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LW5vdGUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTE4LjUgNGgtMTNBMS41IDEuNSAwIDAwNCA1LjV2MTNBMS41IDEuNSAwIDAwNS41IDIwaDEwLjJsNC4zLTQuM1Y1LjVBMS41IDEuNSAwIDAwMTguNSA0ek01IDE4LjV2LTEzYS41LjUgMCAwMS41LS41aDEzYS41LjUgMCAwMS41LjVWMTVoLTIuNWExLjUgMS41IDAgMDAtMS41IDEuNVYxOUg1LjVhLjUuNSAwIDAxLS41LS41ek0xOC4zIDE2TDE2IDE4LjN2LTEuOGEuNS41IDAgMDEuNS0uNXpNMTYgOUg4VjhoOHptMCAySDh2LTFoOHptLTIgMXYxSDh2LTF6Ii8+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtcGEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTMgMjFoMTh2MUgzem0wLTFoMTh2LTFIM3pNMjIgOUgybDEwLTd6TTUuMiA4aDEzLjZMMTIgMy4yek02IDE4di04SDV2OHptNCAwdi04SDl2OHptNSAwdi04aC0xdjh6bTQgMHYtOGgtMXY4eiIvPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LXBhc3N3b3JkLWludmlzaWJsZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTUgMTJhMy4yIDMuMiAwIDAwLS43LTEuOWwuNC0xLjFhNC4yIDQuMiAwIDAxMS4zIDMgNCA0IDAgMDEtMy45IDRsLjQtMS4xQTIuOSAyLjkgMCAwMDE1IDEyek0zLjEgMTJBOS44IDkuOCAwIDAxMTIgNi41aC40bC40LS45SDEyYTEwLjkgMTAuOSAwIDAwLTkuOCA2TDIgMTJsLjIuNWExMSAxMSAwIDAwNi4xIDUuM2wuMy0uOUE5LjggOS44IDAgMDEzLjEgMTJ6bTE4LjctLjVhMTEgMTEgMCAwMC02LjEtNS4zbC0uMy45YTkuOCA5LjggMCAwMTUuNSA0LjkgOS44IDkuOCAwIDAxLTguOSA1LjVoLS40bC0uNC45aC44YTEwLjkgMTAuOSAwIDAwOS44LTZsLjItLjR6TTExLjUgOS4xbC40LTEuMUE0IDQgMCAwMDggMTJhNC4yIDQuMiAwIDAwMS4zIDNsLjQtMS4xQTMuMiAzLjIgMCAwMTkgMTJhMi45IDIuOSAwIDAxMi41LTIuOXptMy4xLTUuN0w4LjUgMjAuM2wuOS4zIDYuMS0xNi45eiIvPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LXBhc3N3b3JkLXZpc2libGUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTIxLjggMTEuNWExMSAxMSAwIDAwLTE5LjYgMEwyIDEybC4yLjVhMTEgMTEgMCAwMDE5LjYgMGwuMi0uNXptLTkuOCA2QTkuOCA5LjggMCAwMTMuMSAxMiA5LjggOS44IDAgMDExMiA2LjVhOS44IDkuOCAwIDAxOC45IDUuNSA5LjggOS44IDAgMDEtOC45IDUuNXpNMTIgOGE0IDQgMCAxMDQgNCA0IDQgMCAwMC00LTR6bTAgN2EzIDMgMCAxMTMtMyAyLjkgMi45IDAgMDEtMyAzeiIvPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LXBlbmNpbCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMjAuNSAzLjVhMi45IDIuOSAwIDAwLTIuMS0uOSAzLjEgMy4xIDAgMDAtMi4yLjlMNC42IDE1LjJsLTEgNS4yIDUuMi0xTDIwLjUgNy44YTMgMyAwIDAwMC00LjN6bS01LjcgMi44bC43LS43IDIuOSAyLjktLjcuN3ptLS43LjhsMS4xIDEtOC40IDguNC0xLjEtMS4xek01LjcgMTguM2EuNy43IDAgMDAtLjYtLjNsLjMtMS41IDIuMSAyLjEtMS41LjNhLjcuNyAwIDAwLS4zLS42em0yLjkgMGwtMS4xLTEuMSA4LjQtOC40IDEgMS4xek0xOS44IDcuMWwtLjcuNy0yLjktMi45LjctLjdhMi4yIDIuMiAwIDAxMS41LS42IDIgMiAwIDAxMS40LjYgMi4xIDIuMSAwIDAxMCAyLjl6Ii8+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtcGluIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xOC4xIDE0TDE1IDEwLjNWNC42TDE2LjMgMkg3LjdMOSA0LjZ2NS43TDUuOSAxNGg1LjZ2OGgxdi04ek0xMCA1aDR2NWgtNHptNC43LTJsLS41IDFIOS44bC0uNS0xem0tNSA4aDQuNmwxLjYgMkg4LjF6Ii8+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtcGx1cyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMjAgMTIuNWgtNy41VjIwaC0xdi03LjVINHYtMWg3LjVWNGgxdjcuNUgyMHoiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PC9zdmc+PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGlkPSJpdC1wbHVzLWNpcmNsZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTIuNCAxMS41aDQuNXYxaC00LjVWMTdoLTF2LTQuNUg2Ljl2LTFoNC41VjdoMXptOS42LjVBMTAgMTAgMCAxMTEyIDJhMTAgMTAgMCAwMTEwIDEwem0tMSAwYTkgOSAwIDEwLTkgOSA5IDkgMCAwMDktOXoiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PC9zdmc+PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGlkPSJpdC1wcmVzZW50YXRpb24iIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTQgNXYxMC42QTIuNCAyLjQgMCAwMDYuNCAxOGgzLjFsLTEuMSA0aDFsMS4xLTRoMi43bDEuMiA0aDFsLTEuMi00aDMuNWEyLjMgMi4zIDAgMDAyLjMtMi4zVjV6bTE1IDEwLjdhMS4zIDEuMyAwIDAxLTEuMyAxLjNINi40QTEuNCAxLjQgMCAwMTUgMTUuNlY2aDE0ek0yMSAzdjFIM1Yzem0tOSAxM2E0LjUgNC41IDAgMTAtNC41LTQuNUE0LjUgNC41IDAgMDAxMiAxNnptLS41LTcuOVYxMUg4LjZhMy40IDMuNCAwIDAxMi45LTIuOXptMSAzLjlWOGEzLjUgMy41IDAgMDEtLjUgNyAzLjQgMy40IDAgMDEtMy40LTN6Ii8+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtcHJpbnQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTIxIDkuNUExLjUgMS41IDAgMDAxOS41IDhIMTdWM0g3djVINC41QTEuNSAxLjUgMCAwMDMgOS41VjE2aDJ2M2gydjJoMTB2LTJoMnYtM2gyek04IDRoOHY0SDh6TTYgMTh2LTRoMXY0em0xMCAySDh2LTZoOHY2em0yLTJoLTF2LTRoMXY0em0yLTNoLTF2LTJINXYySDRWOS41YS41LjUgMCAwMS41LS41aDE1YS41LjUgMCAwMS41LjV6TTYgMTFoNHYxSDZ6Ii8+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtc2VhcmNoIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0yMS45IDIxLjFMMTYgMTUuM2E4LjMgOC4zIDAgMDAyLTUuMyA4IDggMCAxMC04IDggOC4zIDguMyAwIDAwNS4zLTJsNS44IDUuOXpNMTAgMTdhNyA3IDAgMTE3LTcgNyA3IDAgMDEtNyA3eiIvPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LXNldHRpbmdzIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xMiA3LjVhNC41IDQuNSAwIDEwNC41IDQuNUE0LjUgNC41IDAgMDAxMiA3LjV6bTAgOGEzLjUgMy41IDAgMTEzLjUtMy41IDMuNSAzLjUgMCAwMS0zLjUgMy41em05LjgtMS42QTEyLjMgMTIuMyAwIDAwMjIgMTJhMTIuMyAxMi4zIDAgMDAtLjItMS45bC0yLjEtLjNhOC43IDguNyAwIDAwLS43LTEuN2wxLjMtMS43YTguNyA4LjcgMCAwMC0yLjctMi43TDE1LjkgNWwtMS43LS43LS4zLTIuMUwxMiAybC0xLjkuMi0uMyAyLjEtMS43LjctMS43LTEuM2E4LjcgOC43IDAgMDAtMi43IDIuN0w1IDguMWE4LjcgOC43IDAgMDAtLjcgMS43bC0yLjEuM0ExMi4zIDEyLjMgMCAwMDIgMTJhMTIuMyAxMi4zIDAgMDAuMiAxLjlsMi4xLjNhOC43IDguNyAwIDAwLjcgMS43bC0xLjMgMS43YTguNyA4LjcgMCAwMDIuNyAyLjdMOC4xIDE5bDEuNy43LjMgMi4xIDEuOS4yIDEuOS0uMi4zLTIuMSAxLjctLjcgMS43IDEuM2E4LjcgOC43IDAgMDAyLjctMi43TDE5IDE1LjlhOC43IDguNyAwIDAwLjctMS43em0tMi45LS43bC0uMi43YTMuOSAzLjkgMCAwMS0uNiAxLjVsLS4zLjYuNC41LjggMS4xYTkuMyA5LjMgMCAwMS0xLjQgMS40bC0xLjEtLjgtLjUtLjQtLjYuM2EzLjkgMy45IDAgMDEtMS41LjZsLS43LjJ2LjdsLS4yIDEuM2gtMmwtLjItMS4zdi0uN2wtLjctLjJhMy45IDMuOSAwIDAxLTEuNS0uNmwtLjYtLjMtLjUuNC0xLjEuOEE5LjMgOS4zIDAgMDE1IDE3LjZsLjgtMS4xLjQtLjUtLjMtLjZhMy45IDMuOSAwIDAxLS42LTEuNWwtLjItLjdoLS43TDMuMSAxM2EzLjQgMy40IDAgMDEtLjEtMSAzLjQgMy40IDAgMDEuMS0xbDEuMy0uMmguN2wuMi0uN2EzLjkgMy45IDAgMDEuNi0xLjVsLjMtLjYtLjQtLjVMNSA2LjQgNi40IDVsMS4xLjguNS40LjYtLjNhMy45IDMuOSAwIDAxMS41LS42bC43LS4ydi0uN2wuMi0xLjNoMmwuMiAxLjN2LjdsLjcuMmEzLjkgMy45IDAgMDExLjUuNmwuNi4zLjUtLjQgMS4xLS44QTkuMyA5LjMgMCAwMTE5IDYuNGwtLjggMS4xLS40LjUuMy42YTMuOSAzLjkgMCAwMS42IDEuNWwuMi43aC43bDEuMy4yYTMuNCAzLjQgMCAwMS4xIDEgMy40IDMuNCAwIDAxLS4xIDFsLTEuMy4yeiIvPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LXNoYXJlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xNy41IDE1YTIuNSAyLjUgMCAwMC0yIDFsLTcuNi0zLjRBMS4zIDEuMyAwIDAwOCAxMmExLjMgMS4zIDAgMDAtLjEtLjZMMTUuNSA4YTIuNSAyLjUgMCAxMC0uNS0xLjUgMS4zIDEuMyAwIDAwLjEuNmwtNy42IDMuNGEyLjUgMi41IDAgMTAwIDNsNy42IDMuNGExLjMgMS4zIDAgMDAtLjEuNiAyLjUgMi41IDAgMTAyLjUtMi41em0wLTEwQTEuNSAxLjUgMCAwMTE5IDYuNWExLjUgMS41IDAgMDEtMyAwQTEuNSAxLjUgMCAwMTE3LjUgNXptLTEyIDguNWExLjUgMS41IDAgMDEwLTMgMS41IDEuNSAwIDAxMCAzem0xMiA1LjVhMS41IDEuNSAwIDExMS41LTEuNSAxLjUgMS41IDAgMDEtMS41IDEuNXoiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PC9zdmc+PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGlkPSJpdC1zdGFyLWZ1bGwiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEyIDEuN0w5LjUgOS4ySDEuNkw4IDEzLjlsLTIuNCA3LjYgNi40LTQuNyA2LjQgNC43LTIuNC03LjYgNi40LTQuN2gtNy45TDEyIDEuN3oiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PC9zdmc+PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGlkPSJpdC1zdGFyLW91dGxpbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEyIDQuOWwxLjUgNC42LjIuN2g1LjdsLTQgMi45LS42LjQuMi43IDEuNSA0LjctMy45LTIuOS0uNi0uNC0uNi40LTMuOSAyLjlMOSAxNC4ybC4yLS43LS42LS40LTQtMi45aDUuN2wuMi0uN0wxMiA0LjltMC0zLjJMOS41IDkuMkgxLjZMOCAxMy45bC0yLjQgNy42IDYuNC00LjcgNi40IDQuNy0yLjQtNy42IDYuNC00LjdoLTcuOUwxMiAxLjd6Ii8+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtdGVhbS1kaWdpdGFsZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMjMuNjQ4IDI0SC4zNTJBLjM1My4zNTMgMCAwMTAgMjMuNjQ4Vi4zNTJDMCAuMTU4LjE1OCAwIC4zNTIgMGgyMy4yOTZjLjE5NCAwIC4zNTIuMTU4LjM1Mi4zNTJ2MjMuMjk2YS4zNTMuMzUzIDAgMDEtLjM1Mi4zNTJ6TTUuODE0IDExLjc5MmExLjU5NiAxLjU5NiAwIDEwMC0zLjE5MiAxLjU5NiAxLjU5NiAwIDAwMCAzLjE5MnpNMTAgMTguOTk0VjE5aDQuNDE4QzE5LjEzIDE5IDIwIDE2LjY4NSAyMCAxMi4yNTMgMjAgNy45MyAxOC45OTUgNiAxNC40MTggNkgxMHYxMi45OTR6bTQuNDE4LTEwLjcwMmMyLjU4NiAwIDIuODM4IDEuMTEgMi44MzggMy45NTUgMCAyLjg5LS4yNTIgNC40NTUtMi44MzggNC40NTVoLTEuNzU2di04LjQxaDEuNzU2eiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtdGVsZXBob25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik01IDNoLjE4TTIwIDExLjU2QTcuNTkgNy41OSAwIDAwMTIuNDggNGgtLjA2YS40OS40OSAwIDAwLS40OS40OC41LjUgMCAwMC40OS41MUE2LjYxIDYuNjEgMCAwMTE5IDExLjYyYS41MS41MSAwIDAwLjU0LjQ2LjQ5LjQ5IDAgMDAuNDUtLjQ2cy4wMS0uMDQuMDEtLjA2eiIvPjxwYXRoIGQ9Ik0xNi45MyAxMS42OGE0LjUgNC41IDAgMDAtNC40OC00LjQ4LjUxLjUxIDAgMDAwIDEgMy41IDMuNSAwIDAxMy40OSAzLjQ5LjUuNSAwIDAwLjUuNS41MS41MSAwIDAwLjUtLjUxek0xNS42OCAyMS4xOWExMy4zMiAxMy4zMiAwIDAxLTEyLjgtMTMuMS45Mi45MiAwIDAxLjYyLS44OGMxLjc0LS41NiA0LTEgNC43LjA2YTcuMzkgNy4zOSAwIDAxLjg1IDIuOTF2LjIxYTEuNDggMS40OCAwIDAxLS43IDEuNjguODEuODEgMCAwMC0uNDkuNzEgMTIuNTUgMTIuNTUgMCAwMDMuMzggMy41MS44OC44OCAwIDAwLjQ4LS41NmMuMDktLjUzLjU4LTEgMS43LS44NWguMjFhNyA3IDAgMDEyLjg1Ljg3YzEgLjcyLjYyIDMgLjA5IDQuNzJhMSAxIDAgMDEtLjg5Ljcyek02LjU1IDcuNTJhOS41IDkuNSAwIDAwLTIuNzguNTUgMTIuNDEgMTIuNDEgMCAwMDExLjkxIDEyLjIyYy43My0yLjI2LjY2LTMuNTQuMzEtMy43OGE2LjY2IDYuNjYgMCAwMC0yLjQ2LS43MmgtLjIyYy0uMzIgMC0uNjUgMC0uNjguMTJhMS45IDEuOSAwIDAxLTEuMjcgMS4zNGwtLjIxLjA3LS4xNS0uMTVhMTMuNDQgMTMuNDQgMCAwMS0zLjktNEw3IDEzYTEuNjggMS42OCAwIDAxMS0xLjdjLjEyLS4wNy4zMy0uMTguMjUtLjc1di0uMjJhNi44NCA2Ljg0IDAgMDAtLjctMi41NGMtLjItLjE4LS41NS0uMjctMS0uMjd6Ii8+PC9zdmc+PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGlkPSJpdC10b29sIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik03LjcgNWEzLjEgMy4xIDAgMDExLjcuNSAzLjEgMy4xIDAgMDExLjYgMyAzIDMgMCAwMC44IDIuNGw2LjMgNi4zYTEgMSAwIDAxLjIgMS4zIDEgMSAwIDAxLS44LjUuOS45IDAgMDEtLjctLjNsLTYuNC02LjRhMyAzIDAgMDAtMi4xLS44aC0uNmEyLjggMi44IDAgMDEtMi4yLTFoMi43VjYuNEg1LjFhMi43IDIuNyAwIDAxMS4xLTFBMi44IDIuOCAwIDAxNy43IDVtMC0xYTQuNiA0LjYgMCAwMC0yIC41IDQuMSA0LjEgMCAwMC0yLjEgMi45aDMuNnYyLjFIMy43YTUuNCA1LjQgMCAwMDEgMS44IDQuNCA0LjQgMCAwMDMgMS4yaC42YTIuNCAyLjQgMCAwMTEuNC41bDYuNCA2LjRhMiAyIDAgMDAxLjQuNiAxLjkgMS45IDAgMDAxLjYtLjkgMiAyIDAgMDAtLjMtMi42bC02LjMtNi4zYTEuOCAxLjggMCAwMS0uNS0xLjYgNC40IDQuNCAwIDAwLTItNEE0LjYgNC42IDAgMDA3LjcgNHoiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PC9zdmc+PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGlkPSJpdC10d2l0dGVyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48cGF0aCBkPSJNOC4wOCAyMGExMC45MyAxMC45MyAwIDAwMTEtMTF2LS41YTggOCAwIDAwMS45Mi0yIDcuODUgNy44NSAwIDAxLTIuMjIuNjFBMy44OSAzLjg5IDAgMDAyMC40OCA1YTggOCAwIDAxLTIuNDguOTEgMy44NyAzLjg3IDAgMDAtNi41OSAzLjUyIDExIDExIDAgMDEtOC00IDMuODUgMy44NSAwIDAwMS4xOSA1LjE2IDMuNzYgMy43NiAwIDAxLTEuNzUtLjQ4QTMuODcgMy44NyAwIDAwNiAxMy45MWEzLjczIDMuNzMgMCAwMS0xIC4xNCA0LjMgNC4zIDAgMDEtLjczLS4wNSAzLjg3IDMuODcgMCAwMDMuNjEgMi42OCA3LjczIDcuNzMgMCAwMS00LjggMS42NiA3IDcgMCAwMS0uOTItLjA2QTEwLjkgMTAuOSAwIDAwOC4wOCAyMCIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtdHdpdHRlci1zcXVhcmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjxwYXRoIGQ9Ik0xOS41IDIyaC0xNUEyLjUgMi41IDAgMDEyIDE5LjV2LTE1QTIuNSAyLjUgMCAwMTQuNSAyaDE1QTIuNSAyLjUgMCAwMTIyIDQuNXYxNWEyLjUgMi41IDAgMDEtMi41IDIuNXptLTkuODItNC45MkE3LjI0IDcuMjQgMCAwMDE3IDkuNzl2LS4zM2E1LjIyIDUuMjIgMCAwMDEuMjgtMS4zMyA1LjIyIDUuMjIgMCAwMS0xLjQ4LjQgMi41NiAyLjU2IDAgMDAxLjE0LTEuNDIgNC45MyA0LjkzIDAgMDEtMS42NC42MiAyLjUzIDIuNTMgMCAwMC0xLjg2LS44MSAyLjU3IDIuNTcgMCAwMC0yLjU3IDIuNTdjLjAwMy4xOTUuMDI2LjM5LjA3LjU4YTcuMjYgNy4yNiAwIDAxLTUuMzItMi42OCAyLjU5IDIuNTkgMCAwMC44IDMuNDMgMi43OCAyLjc4IDAgMDEtMS4xNi0uMzIgMi41NyAyLjU3IDAgMDAyLjA1IDIuNTIgMi40NiAyLjQ2IDAgMDEtMS4xNS4wNCAyLjU1IDIuNTUgMCAwMDIuMzkgMS43OEE1LjEzIDUuMTMgMCAwMTYuMzcgMTZhNi4wOCA2LjA4IDAgMDEtLjYxIDAgNy4yMyA3LjIzIDAgMDAzLjkyIDEuMTR2LS4wNnoiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LXVubG9ja2VkIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xNi41IDEySDE2VjZhNCA0IDAgMDAtOCAwdjNoMVY2YTMgMyAwIDAxNiAwdjZINy41YTEuMSAxLjEgMCAwMC0xLjEgMS4xdjYuOEExLjEgMS4xIDAgMDA3LjUgMjFoOWExLjEgMS4xIDAgMDAxLjEtMS4xdi02LjhhMS4xIDEuMSAwIDAwLTEuMS0xLjF6bS4xIDcuOWEuMS4xIDAgMDEtLjEuMWgtOWEuMS4xIDAgMDEtLjEtLjF2LTYuOGg5LjJ6TTEzIDE1LjVhLjguOCAwIDAxLS41Ljh2MS41aC0xdi0xLjVhLjguOCAwIDAxLS41LS44IDEgMSAwIDAxMiAweiIvPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LXVwbG9hZCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNOC40IDcuM2wtLjctLjdMMTIgMi4zbDQuMyA0LjMtLjcuNy0zLjEtMy4xdjkuM2gtMVY0LjJ6TTE5IDEydjcuNWEuNS41IDAgMDEtLjUuNWgtMTNhLjUuNSAwIDAxLS41LS41VjEySDR2Ny41QTEuNSAxLjUgMCAwMDUuNSAyMWgxM2ExLjUgMS41IDAgMDAxLjUtMS41VjEyeiIvPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LXVzZXIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEyIDEzYTQgNCAwIDAwNC00VjZhNCA0IDAgMDAtOCAwdjNhNCA0IDAgMDA0IDR6TTkgNmEzIDMgMCAwMTYgMHYzYTMgMyAwIDAxLTYgMHptMTEgMTZoLTFhNyA3IDAgMDAtMTQgMEg0YTggOCAwIDAxMTYgMHoiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PC9zdmc+PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGlkPSJpdC12aWRlbyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTcuNSA3LjNWNkExLjUgMS41IDAgMDAxNiA0LjVINS41QTEuNSAxLjUgMCAwMDQgNnY4YTEuNSAxLjUgMCAwMDEuNSAxLjVoMy40TDcuNCAyMWgxbDEuNi01LjVoMS44bDEuNiA1LjVoMWwtMS42LTUuNUgxNmExLjUgMS41IDAgMDAxLjUtMS41di0xLjNsNCAxLjVWNS44em0zIDUuNWwtNC0xLjVWMTRhLjUuNSAwIDAxLS41LjVINS41QS41LjUgMCAwMTUgMTRWNmEuNS41IDAgMDEuNS0uNUgxNmEuNS41IDAgMDEuNS41djIuN2w0LTEuNXpNMiA4aDF2NEgyeiIvPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LXdhcm5pbmciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEyLjUgMTdoLTFWMmgxem0wIDNoLTF2MmgxeiIvPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LXdhcm5pbmctY2lyY2xlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0xMiAyYTEwIDEwIDAgMTAxMCAxMEExMCAxMCAwIDAwMTIgMnptMCAxOWE5IDkgMCAxMTktOSA5IDkgMCAwMS05IDl6bS0uNS02LjhWNS43aDEuMnY4LjV6bS0uMSAyLjNoMS4ydjEuOGgtMS4yeiIvPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48L3N2Zz48c3ZnIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9Iml0LXdoYXRzYXBwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48cGF0aCBkPSJNMTkuMDkgNC42M2ExMCAxMCAwIDAwLTE1LjY4IDEyTDIgMjEuOGw1LjI4LTEuMzhBMTAgMTAgMCAwMDEyIDIxLjYzYTEwIDEwIDAgMDA3LjA1LTE3aC4wNHpNMTIgMjBhOC4xOCA4LjE4IDAgMDEtNC4yMS0xLjE2bC0uMzEtLjE4LTMuMTMuODMuODQtMy4wNi0uMTktLjM2QTguMjggOC4yOCAwIDExMTIgMjB6bTQuNTQtNi4yYy0uMjUtLjEzLTEuNDctLjczLTEuNy0uODEtLjIzLS4wOC0uMzktLjEzLS41Ni4xMi0uMjQ2LjM0Ny0uNTEuNjgtLjc5IDEtLjE0LjE2LS4yOS4xOC0uNTQuMDZhNi45MiA2LjkyIDAgMDEtMi0xLjIzIDcuMjcgNy4yNyAwIDAxLTEuMzgtMS43M2MtLjE1LS4yNSAwLS4zOC4xMS0uNTFzLjI1LS4yOS4zNy0uNDNhMS41MSAxLjUxIDAgMDAuMjUtLjQyLjQ2LjQ2IDAgMDAwLS40M2MtLjA0LS4yLS41NC0xLjQyLS43NS0xLjkyLS4yMS0uNS0uNC0uNDItLjU2LS40M2gtLjQ3YTEgMSAwIDAwLS42Ny4zMUEyLjgxIDIuODEgMCAwMDcgOS40NSA0LjczIDQuNzMgMCAwMDggMTJhMTEgMTEgMCAwMDQuMjUgMy43NmMuNDY0LjIuOTM4LjM3OCAxLjQyLjUzYTMuMjggMy4yOCAwIDAwMS41Ni4wOSAyLjU0IDIuNTQgMCAwMDEuNjgtMS4xOCAyLjA5IDIuMDkgMCAwMC4xNS0xLjJjLS4wNi0uMDctLjIzLS4xMy0uNDgtLjI1bC0uMDQuMDV6Ii8+PC9zdmc+PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGlkPSJpdC13aGF0c2FwcC1zcXVhcmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgyNHYyNEgweiIvPjxwYXRoIGQ9Ik0xNiA4LjA3YTUuMzQgNS4zNCAwIDAwLTkuMTEgMy43NyA1LjI4IDUuMjggMCAwMC44MiAyLjg0bC4xMi4yLS41MyAyIDItLjUzLjIuMTFjLjgyLjQ5IDEuNzU2Ljc1IDIuNzEuNzVBNS4zNCA1LjM0IDAgMDAxNiA4LjA3em0tLjgzIDUuODNhMS42NiAxLjY2IDAgMDEtMS4wOC43NiAyLjIzIDIuMjMgMCAwMS0xLS4wNmMtLjIzLS4wOC0uNTMtLjE4LS45MS0uMzRhNy4xNiA3LjE2IDAgMDEtMi43OC0yLjQyIDMuMTMgMy4xMyAwIDAxLS42Ni0xLjY2IDEuODMgMS44MyAwIDAxLjU2LTEuMzQuNTkuNTkgMCAwMS40My0uMkgxMGMuMSAwIC4yMyAwIC4zNi4yNy4xMy4yNy40NSAxLjExLjQ5IDEuMTlhLjMuMyAwIDAxMCAuMjggMS4yIDEuMiAwIDAxLS4xNi4yN2MtLjA4LjEtLjE3LjIxLS4yNC4yOC0uMDcuMDctLjE3LjE3LS4wNy4zMy4yMzkuNDEzLjU0Ljc4Ny44OSAxLjExLjM4LjM0LjgxNi42MTIgMS4yOS44LjE2LjA4LjI1LjA2LjM0IDAgLjA5LS4wNi40LS40Ny41MS0uNjMuMTEtLjE2LjIxLS4xNC4zNi0uMDguMTUuMDYuOTQuNDQgMS4xLjUyLjE2LjA4LjI2LjEyLjMuMTlhMS4zNiAxLjM2IDAgMDEtLjAzLjczaC4wM3oiLz48cGF0aCBkPSJNMjEgNy4wOWE4LjI2IDguMjYgMCAwMC0uMDktMS4xNSAzLjQ5IDMuNDkgMCAwMC0xLjg1LTIuNTEgMy44OSAzLjg5IDAgMDAtMS0uMzJBOC4zNiA4LjM2IDAgMDAxNi45MSAzSDcuMDlhOC4yNiA4LjI2IDAgMDAtMS4xNS4wOUEzLjQ5IDMuNDkgMCAwMDMuNDMgNWEzLjg5IDMuODkgMCAwMC0uMzIgMUE4LjM2IDguMzYgMCAwMDMgNy4wOXY5LjgyYy4wMDMuMzg1LjAzMy43Ny4wOSAxLjE1QTMuNDkgMy40OSAwIDAwNSAyMC41N2EzLjg5IDMuODkgMCAwMDEgLjMyYy4zODQuMDYuNzcxLjA5NCAxLjE2LjFoOS44MmE4LjI2IDguMjYgMCAwMDEuMTUtLjA5IDMuNDkgMy40OSAwIDAwMi41MS0xLjg1IDMuODkgMy44OSAwIDAwLjMyLTEgOC4zNiA4LjM2IDAgMDAuMS0xLjE2VjcuNTdjLS4wNi0uMS0uMDYtLjMxLS4wNi0uNDh6bS04LjggMTEuMTdhNi4zOSA2LjM5IDAgMDEtMy4wNi0uNzhsLTMuNDEuODkuOTItMy4zMmE2LjMzIDYuMzMgMCAwMS0uODYtMy4yMSA2LjQxIDYuNDEgMCAwMTExLTQuNTMgNi4zMyA2LjMzIDAgMDExLjg4IDQuNTQgNi40MiA2LjQyIDAgMDEtNi40NyA2LjQxeiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQteW91dHViZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PHBhdGggZD0iTTIxLjU2IDcuMmEyLjUgMi41IDAgMDAtMS43Ni0xLjc3QzE4LjI0IDUgMTIgNSAxMiA1cy02LjI0IDAtNy44LjQyQTIuNSAyLjUgMCAwMDIuNDQgNy4yIDI1LjcyIDI1LjcyIDAgMDAyIDEyYy0uMDEgMS42MS4xMyAzLjIxNy40MiA0LjhhMi41IDIuNSAwIDAwMS43OCAxLjc3QzUuNzYgMTkgMTIgMTkgMTIgMTlzNi4yNCAwIDcuOC0uNDJhMi41IDIuNSAwIDAwMS43Ni0xLjc3QTI1LjcyIDI1LjcyIDAgMDAyMiAxMmEyNS43MiAyNS43MiAwIDAwLS40NC00Ljh6TTEwIDE1VjlsNS4xOSAzTDEwIDE1eiIvPjwvc3ZnPjxzdmcgdmlld0JveD0iMCAwIDI0IDI0IiBpZD0iaXQtem9vbS1pbiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTAuNCA5LjVoMy4zdjFoLTMuM3YzLjJoLTF2LTMuMkg2LjJ2LTFoMy4yVjYuMmgxem0xMC43IDEyLjRMMTUuMyAxNmE4LjMgOC4zIDAgMDEtNS4zIDIgOCA4IDAgMTE4LTggOC4zIDguMyAwIDAxLTIgNS4zbDUuOSA1Ljh6TTE3IDEwYTcgNyAwIDEwLTcgNyA3IDcgMCAwMDctN3oiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PC9zdmc+PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIGlkPSJpdC16b29tLW91dCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNi4yIDkuNWg3LjV2MUg2LjJ6bTE0LjkgMTIuNEwxNS4zIDE2YTguMyA4LjMgMCAwMS01LjMgMiA4IDggMCAxMTgtOCA4LjMgOC4zIDAgMDEtMiA1LjNsNS45IDUuOHpNMTcgMTBhNyA3IDAgMTAtNyA3IDcgNyAwIDAwNy03eiIvPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMHoiLz48L3N2Zz48L2RlZnM+PC9zdmc+';

  var propTypes$1n = {
    className: propTypes.string,
    color: propTypes.string,
    size: propTypes.string,
    icon: propTypes.string,
    padding: propTypes.bool
  };
  var defaultProps$1i = {
    color: '',
    size: '',
    icon: '',
    padding: false
  };

  var Icon = function Icon(_ref) {
    var _classNames;

    var color = _ref.color,
        size = _ref.size,
        icon = _ref.icon,
        className = _ref.className,
        padding = _ref.padding,
        attributes = _objectWithoutPropertiesLoose$1(_ref, ["color", "size", "icon", "className", "padding"]);

    var classes = classnames('icon', className, (_classNames = {}, _classNames["icon-" + color] = color, _classNames["icon-" + size] = size, _classNames['icon-padded'] = padding, _classNames), size);
    return React__default.createElement("svg", _extends$1({
      className: classes
    }, attributes), React__default.createElement("use", {
      xlinkHref: iconSprite + "#" + icon
    }));
  };

  Icon.propTypes = propTypes$1n;
  Icon.defaultProps = defaultProps$1i;

  var propTypes$1o = {
    /** Utilizzarlo in caso di utilizzo di componenti personalizzati */
    tag: propTypes.oneOfType([propTypes.func, propTypes.string]),

    /** Classi aggiuntive da usare per il componente HeaderBrand */
    className: propTypes.string,

    /** Da usare per la sovrascrittura di classi predefinite */
    cssModule: propTypes.object,

    /** Da usare con il componente Header Nav in versione "responsive" */
    responsive: propTypes.bool,

    /** Da utilizzare per specificare URL risorsa esterna. */
    href: propTypes.string,

    /** Icona da utilizzare nel componente. Utilizzata unicamente quando l'Header è di tipo Center.  */
    iconName: propTypes.string,

    /** Elementi React da renderizzare al proprio interno. */
    children: propTypes.oneOfType([propTypes.arrayOf(propTypes.node), propTypes.node])
  };
  var defaultProps$1j = {
    tag: 'a',
    responsive: false
  };

  var HeaderBrand =
  /*#__PURE__*/
  function (_PureComponent) {
    _inheritsLoose$1(HeaderBrand, _PureComponent);

    function HeaderBrand() {
      return _PureComponent.apply(this, arguments) || this;
    }

    var _proto = HeaderBrand.prototype;

    _proto.addChildClasses = function addChildClasses(child, i) {
      // convention here: first item is the main title, while others subtext
      var className = classnames(child.props.className, 'no_toc', {
        'd-none d-md-block': i
      } // subtext is anything but first element
      );
      var props = {
        className: className
      };
      return React__default.cloneElement(child, props);
    };

    _proto.render = function render() {
      var _this = this;

      var _this$props = this.props,
          className = _this$props.className,
          href = _this$props.href,
          iconName = _this$props.iconName,
          children = _this$props.children,
          responsive = _this$props.responsive,
          attributes = _objectWithoutPropertiesLoose$1(_this$props, ["className", "href", "iconName", "children", "responsive"]);

      var type = this.context.type;

      if (type !== CENTER) {
        var classes = classnames('d-lg-block', className, {
          'd-none': !responsive
        });
        return React__default.createElement(NavbarBrand, _extends$1({
          className: classes,
          href: href
        }, attributes), children);
      }

      return React__default.createElement("div", {
        className: "it-brand-wrapper"
      }, React__default.createElement("a", {
        href: href
      }, iconName && React__default.createElement(Icon, {
        icon: iconName
      }), React__default.createElement("div", {
        className: "it-brand-text"
      }, React__default.Children.map(children, function (child, i) {
        return _this.addChildClasses(child, i);
      }))));
    };

    return HeaderBrand;
  }(React.PureComponent);

  _defineProperty$2(HeaderBrand, "propTypes", propTypes$1o);

  _defineProperty$2(HeaderBrand, "defaultProps", defaultProps$1j);

  _defineProperty$2(HeaderBrand, "contextType", HeaderContext);

  var propTypes$1p = {
    /** Classi addizionali per il componente HeaderContent */
    className: propTypes.string,

    /** Da utilizzare per indicare che all'interno dell'Header verrà utilizzato un Megamenu */
    megamenu: propTypes.bool,

    /** Parametro per il controllo responsive del componente: valori Bootstrap standard sono "sm", "md", "lg", "xl" */
    expand: propTypes.oneOfType([propTypes.bool, propTypes.string])
  };
  var defaultProps$1k = {};

  var HeaderContent =
  /*#__PURE__*/
  function (_PureComponent) {
    _inheritsLoose$1(HeaderContent, _PureComponent);

    function HeaderContent() {
      return _PureComponent.apply(this, arguments) || this;
    }

    var _proto = HeaderContent.prototype;

    _proto.render = function render() {
      var _this$props = this.props,
          className = _this$props.className,
          megamenu = _this$props.megamenu,
          attributes = _objectWithoutPropertiesLoose$1(_this$props, ["className", "megamenu"]);

      var type = this.context.type;
      var classes = classnames(className, {
        'it-header-slim-wrapper-content': type === SLIM,
        'it-header-center-content-wrapper': type === CENTER,
        navbar: type === NAVBAR,
        'has-megamenu': megamenu
      });
      var Content = type === NAVBAR ? React__default.createElement(Navbar, _extends$1({
        className: classes
      }, attributes)) : React__default.createElement("div", _extends$1({
        className: classes
      }, attributes));
      return React__default.createElement("div", {
        className: "container"
      }, React__default.createElement("div", {
        className: "row"
      }, React__default.createElement("div", {
        className: "col-12"
      }, Content)));
    };

    return HeaderContent;
  }(React.PureComponent);

  _defineProperty$2(HeaderContent, "propTypes", propTypes$1p);

  _defineProperty$2(HeaderContent, "defaultProps", defaultProps$1k);

  _defineProperty$2(HeaderContent, "contextType", HeaderContext);

  var propTypes$1q = {
    /** Classi addizionali per il componente HeaderLinkZone, applicata all'element "nav" annidato */
    className: propTypes.string
  };
  var defaultProps$1l = {};

  var HeaderLinkZone = function HeaderLinkZone(_ref) {
    var className = _ref.className,
        attributes = _objectWithoutPropertiesLoose$1(_ref, ["className"]);

    var classes = classnames(className);
    return React__default.createElement("div", {
      className: "nav-mobile"
    }, React__default.createElement("nav", _extends$1({
      className: classes
    }, attributes)));
  };

  HeaderLinkZone.propTypes = propTypes$1q;
  HeaderLinkZone.defaultProps = defaultProps$1l;

  var propTypes$1r = {
    /** Classi addizionali per il componente HeaderRightZone */
    className: propTypes.string
  };
  var defaultProps$1m = {};

  var HeaderRightZone =
  /*#__PURE__*/
  function (_PureComponent) {
    _inheritsLoose$1(HeaderRightZone, _PureComponent);

    function HeaderRightZone() {
      return _PureComponent.apply(this, arguments) || this;
    }

    var _proto = HeaderRightZone.prototype;

    _proto.render = function render() {
      var _this$props = this.props,
          className = _this$props.className,
          attributes = _objectWithoutPropertiesLoose$1(_this$props, ["className"]);

      var type = this.context.type;
      var classes = classnames(className, {
        // BI >= 1.3.6
        'it-header-slim-right-zone': type === SLIM,
        // BI < 1.3.6
        'header-slim-right-zone': type === SLIM,
        'it-right-zone': type !== SLIM
      });
      return React__default.createElement("div", _extends$1({
        className: classes
      }, attributes));
    };

    return HeaderRightZone;
  }(React.PureComponent);

  _defineProperty$2(HeaderRightZone, "propTypes", propTypes$1r);

  _defineProperty$2(HeaderRightZone, "defaultProps", defaultProps$1m);

  _defineProperty$2(HeaderRightZone, "contextType", HeaderContext);

  var propTypes$1s = {
    /** Classi addizionali per il componente HeaderSearch */
    className: propTypes.string,

    /** Etichetta di testo da applicare all'elemento. In caso di stringa vuota non verrà mostrato alcun testo */
    label: propTypes.string,

    /** Nome dell'icona da utilizzare */
    iconName: propTypes.string,

    /** Indirizzo di indirizzamento al click dell'icona */
    href: propTypes.string
  };
  var defaultProps$1n = {
    iconName: 'it-search'
  };

  var HeaderSearch = function HeaderSearch(_ref) {
    var className = _ref.className,
        label = _ref.label,
        href = _ref.href,
        iconName = _ref.iconName,
        attributes = _objectWithoutPropertiesLoose$1(_ref, ["className", "label", "href", "iconName"]);

    var classes = classnames('it-search-wrapper', className);
    return React__default.createElement("div", _extends$1({
      className: classes
    }, attributes), label && React__default.createElement("span", {
      className: "d-none d-md-block"
    }, label), React__default.createElement("a", {
      className: "search-link rounded-icon",
      "aria-label": label,
      href: href
    }, React__default.createElement(Icon, {
      icon: iconName
    })));
  };

  HeaderSearch.propTypes = propTypes$1s;
  HeaderSearch.defaultProps = defaultProps$1n;

  var propTypes$1t = {
    /** Classi addizionali per il componente HeaderSocialsZone, verrà applicato all'elemento wrapper più esterno. */
    className: propTypes.string,

    /** Etichetta utilizzata per presentare i social presenti. In caso di stringa vuota non verrà mostrata alcuna etichetta */
    label: propTypes.string,

    /** Utilizzato per elencare i social da mostrare */
    children: propTypes.oneOfType([propTypes.arrayOf(propTypes.node), propTypes.node])
  };
  var defaultProps$1o = {};

  var HeaderSocialsZone = function HeaderSocialsZone(_ref) {
    var className = _ref.className,
        children = _ref.children,
        label = _ref.label,
        attributes = _objectWithoutPropertiesLoose$1(_ref, ["className", "children", "label"]);

    var classes = classnames('it-socials d-none d-md-flex', className);
    return React__default.createElement("div", _extends$1({
      className: classes
    }, attributes), label && React__default.createElement("span", null, label), children);
  };

  HeaderSocialsZone.propTypes = propTypes$1t;
  HeaderSocialsZone.defaultProps = defaultProps$1o;

  var propTypes$1u = {
    /** Tipo di elemento DOM da utilizzare: di default "a" per Header Slim, "button" per altri tipi di Header.
     * Se fornito questo sovrascriverà il valore di default.
     */
    tag: propTypes.string,

    /** Indica l'attributo "type" sull'elemento DOM. Di default '' per Header Slim, "button" per altri tipi di Header.
     * Se fornito questo sovrascriverà il valore di default.
     */
    type: propTypes.string,

    /** Classi addizionali per il componente HeaderToggler */
    className: propTypes.string
  };
  var defaultProps$1p = {};

  var HeaderToggler =
  /*#__PURE__*/
  function (_PureComponent) {
    _inheritsLoose$1(HeaderToggler, _PureComponent);

    function HeaderToggler() {
      return _PureComponent.apply(this, arguments) || this;
    }

    var _proto = HeaderToggler.prototype;

    _proto.render = function render() {
      var _this$props = this.props,
          className = _this$props.className,
          tag = _this$props.tag,
          type = _this$props.type,
          attributes = _objectWithoutPropertiesLoose$1(_this$props, ["className", "tag", "type"]);

      var HeaderType = this.context.type;
      var BUTTON = 'button';
      var defaultTag = HeaderType === SLIM ? 'a' : BUTTON;
      var defaultType = HeaderType === SLIM ? '' : BUTTON;
      var classes = classnames({
        'it-opener d-lg-none': HeaderType === SLIM,
        'custom-navbar-toggler': HeaderType === NAVBAR
      }, className);
      return React__default.createElement(NavbarToggler, _extends$1({
        className: classes
      }, attributes, {
        tag: tag || defaultTag,
        type: type || defaultType,
        href: "#"
      }));
    };

    return HeaderToggler;
  }(React.PureComponent);

  _defineProperty$2(HeaderToggler, "propTypes", propTypes$1u);

  _defineProperty$2(HeaderToggler, "defaultProps", defaultProps$1p);

  _defineProperty$2(HeaderToggler, "contextType", HeaderContext);

  function Hero(props) {
    return React__default.createElement(Jumbotron, props);
  }
  Hero.defaultProps = Jumbotron.defaultProps;
  Hero.propTypes = Jumbotron.propTypes;

  var mapToCssModules$1 = mapToCssModules,
      deprecated$1 = deprecated,
      warnOnce$1 = warnOnce;
  var propTypes$1v = {
    children: propTypes.node,
    type: propTypes.string,
    size: propTypes.string,
    label: propTypes.string,
    placeholder: propTypes.string,
    value: propTypes.string,
    id: propTypes.string,
    infoText: propTypes.string,
    normalized: propTypes.bool,
    bsSize: propTypes.string,
    state: deprecated$1(propTypes.string, 'Please use the props "valid" and "invalid" to indicate the state.'),
    valid: propTypes.bool,
    invalid: propTypes.bool,
    tag: propTypes.oneOfType([propTypes.func, propTypes.string]),
    innerRef: propTypes.oneOfType([propTypes.object, propTypes.func, propTypes.string]),
    "static": deprecated$1(propTypes.bool, 'Please use the prop "plaintext"'),
    plaintext: propTypes.bool,
    addon: propTypes.bool,
    className: propTypes.string,
    cssModule: propTypes.object
  };
  var defaultProps$1q = {
    type: 'text'
  };

  var Input$1 =
  /*#__PURE__*/
  function (_React$Component) {
    _inheritsLoose$1(Input, _React$Component);

    function Input() {
      var _this;

      _this = _React$Component.call(this) || this;

      _defineProperty$2(_assertThisInitialized$2(_this), "toggleFocusLabel", function () {
        _this.setState({
          isFocused: true
        });
      });

      _defineProperty$2(_assertThisInitialized$2(_this), "toggleBlurLabel", function (e) {
        if (e.target.value === '') {
          _this.setState({
            isFocused: !_this.state.isFocused
          });
        }
      });

      _this.state = {
        isFocused: false,
        hidden: true,
        icon: true
      };
      _this.toggleShow = _this.toggleShow.bind(_assertThisInitialized$2(_this));
      return _this;
    }

    var _proto = Input.prototype;

    _proto.toggleShow = function toggleShow() {
      this.setState({
        hidden: !this.state.hidden,
        icon: !this.state.icon
      });
    };

    _proto.render = function render() {
      var _this2 = this;

      var _this$props = this.props,
          className = _this$props.className,
          cssModule = _this$props.cssModule,
          type = _this$props.type,
          state = _this$props.state,
          tag = _this$props.tag,
          addon = _this$props.addon,
          staticInput = _this$props["static"],
          plaintext = _this$props.plaintext,
          innerRef = _this$props.innerRef,
          label = _this$props.label,
          infoText = _this$props.infoText,
          placeholder = _this$props.placeholder,
          normalized = _this$props.normalized,
          value = _this$props.value,
          attributes = _objectWithoutPropertiesLoose$1(_this$props, ["className", "cssModule", "type", "state", "tag", "addon", "static", "plaintext", "innerRef", "label", "infoText", "placeholder", "normalized", "value"]);

      var _this$props2 = this.props,
          bsSize = _this$props2.bsSize,
          valid = _this$props2.valid,
          invalid = _this$props2.invalid;
      var checkInput = ['radio', 'checkbox'].indexOf(type) > -1;
      var isNotaNumber = new RegExp('\\D', 'g');
      var fileInput = type === 'file';
      var textareaInput = type === 'textarea';
      var selectInput = type === 'select';
      var Tag = tag || (selectInput || textareaInput ? type : 'input');
      var formControlClass = 'form-control';
      var infoTextControlClass = 'form-text text-muted';

      if (plaintext || staticInput) {
        formControlClass = formControlClass + "-plaintext";
        Tag = tag || 'p';
      } else if (fileInput) {
        formControlClass = formControlClass + "-file";
      } else if (checkInput) {
        if (addon) {
          formControlClass = null;
        }
        /* Causes a regression with `bootstrap-italia`
              else {
                  formControlClass = 'form-check-input';
              }
              */

      }

      if (valid || invalid) {
        infoTextControlClass = null;
      }

      if (state && typeof valid === 'undefined' && typeof invalid === 'undefined') {
        if (state === 'danger') {
          invalid = true;
        } else if (state === 'success') {
          valid = true;
        }
      }

      if (attributes.size && isNotaNumber.test(attributes.size)) {
        warnOnce$1('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.');
        bsSize = attributes.size;
        delete attributes.size;
      }

      var classes = mapToCssModules$1(classnames(className, invalid && 'is-invalid', valid && 'is-valid', bsSize ? "form-control-" + bsSize : false, formControlClass), cssModule);
      var wrapperClass = mapToCssModules$1(classnames(className, 'form-group'), cssModule);
      var infoTextClass = mapToCssModules$1(classnames(className, valid ? 'valid-feedback' : false, invalid ? 'invalid-feedback' : false, infoTextControlClass));

      if (Tag === 'input' || typeof tag !== 'string') {
        attributes.type = type;
      }

      if (attributes.children && !(plaintext || staticInput || type === 'select' || typeof Tag !== 'string' || Tag === 'select')) {
        warnOnce$1("Input with a type of \"" + type + "\" cannot have children. Please use \"value\"/\"defaultValue\" instead.");
        delete attributes.children;
      }

      if (placeholder || value) {
        return React__default.createElement("div", {
          className: wrapperClass
        }, React__default.createElement(Tag, _extends$1({}, attributes, {
          ref: innerRef,
          className: classes,
          id: this.props.id,
          onFocus: this.toggleFocusLabel,
          onBlur: function onBlur(e) {
            return _this2.toggleBlurLabel(e);
          },
          placeholder: this.props.placeholder,
          value: this.props.value
        })), React__default.createElement("label", {
          htmlFor: this.props.id,
          className: "active"
        }, this.props.label), React__default.createElement("small", {
          className: infoTextClass
        }, this.props.infoText));
      }

      if (attributes.type === 'password') {
        return React__default.createElement("div", {
          className: wrapperClass
        }, React__default.createElement(Tag, _extends$1({}, attributes, {
          ref: innerRef,
          type: this.state.hidden ? 'password' : 'text',
          className: this.state.isFocused ? 'form-control input-password focus--mouse' : 'form-control input-password',
          onFocus: this.toggleFocusLabel,
          onBlur: function onBlur(e) {
            return _this2.toggleBlurLabel(e);
          },
          id: this.props.id,
          placeholder: this.props.placeholder,
          value: this.props.value
        })), React__default.createElement("span", {
          className: "password-icon",
          "aria-hidden": "true"
        }, React__default.createElement("svg", {
          className: "password-icon-visible icon icon-sm",
          onClick: this.toggleShow
        }, React__default.createElement("use", {
          xlinkHref: "/svg/sprite.svg#it-password-" + (this.state.icon ? 'visible' : 'invisible')
        }))), React__default.createElement("label", {
          htmlFor: this.props.id,
          className: this.state.isFocused ? 'active' : ''
        }, this.props.label), React__default.createElement("small", {
          className: infoTextClass
        }, this.props.infoText));
      }

      if (normalized) {
        return React__default.createElement("div", {
          className: wrapperClass
        }, React__default.createElement(Tag, _extends$1({}, attributes, {
          className: this.state.isFocused ? 'form-control-plaintext focus--mouse' : 'form-control-plaintext',
          onFocus: this.toggleFocusLabel,
          onBlur: function onBlur(e) {
            return _this2.toggleBlurLabel(e);
          },
          id: this.props.id,
          value: this.props.value,
          readOnly: true
        })), React__default.createElement("label", {
          htmlFor: this.props.id,
          className: this.state.isFocused ? 'active' : ''
        }, this.props.label), React__default.createElement("small", {
          className: infoTextClass
        }, this.props.infoText));
      }

      if (label || infoText) {
        return React__default.createElement("div", {
          className: wrapperClass
        }, React__default.createElement(Tag, _extends$1({}, attributes, {
          ref: innerRef,
          className: classes,
          id: this.props.id,
          onFocus: this.toggleFocusLabel,
          onBlur: function onBlur(e) {
            return _this2.toggleBlurLabel(e);
          },
          value: this.props.value
        })), React__default.createElement("label", {
          htmlFor: this.props.id,
          className: this.state.isFocused ? 'active' : ''
        }, this.props.label), React__default.createElement("small", {
          className: infoTextClass
        }, this.props.infoText));
      }

      return React__default.createElement(Tag, _extends$1({}, attributes, {
        ref: innerRef,
        className: classes
      }));
    };

    return Input;
  }(React__default.Component);

  Input$1.propTypes = propTypes$1v;
  Input$1.defaultProps = defaultProps$1q;

  var propTypes$1w = {
    /** Utilizzarlo in caso di utilizzo di componenti personalizzati */
    tag: propTypes.oneOfType([propTypes.func, propTypes.string]),

    /** Da utilizzare in caso di titolo principale della lista. Passare una componente React da mostrare come titolo */
    header: propTypes.node,

    /** Classi aggiuntive da usare per il componente lista del LinkList */
    className: propTypes.string,

    /** Classi aggiuntive da usare per il componente wrapper del LinkList */
    wrapperClassName: propTypes.string,

    /** Quando è abilitato gestisce una lista in cui ciascun elemento è composto da più componenti/elementi. */
    multiline: propTypes.bool,
    sublist: propTypes.bool,
    avatar: propTypes.bool
  };
  var defaultProps$1r = {
    tag: 'div'
  };

  var LinkList = function LinkList(props) {
    var className = props.className,
        wrapperClassName = props.wrapperClassName,
        Tag = props.tag,
        multiline = props.multiline,
        header = props.header,
        sublist = props.sublist,
        avatar = props.avatar,
        attributes = _objectWithoutPropertiesLoose$1(props, ["className", "wrapperClassName", "tag", "multiline", "header", "sublist", "avatar"]);

    var wrapperClasses = classnames(multiline ? 'multiline' : false, 'link-list-wrapper', wrapperClassName);
    var classes = classnames(className, sublist ? 'link-sublist' : 'link-list', avatar && 'avatar-group');

    if (sublist) {
      return React__default.createElement(React__default.Fragment, null, header, React__default.createElement("ul", _extends$1({}, attributes, {
        className: classes
      })));
    }

    return React__default.createElement(Tag, {
      className: wrapperClasses
    }, header, React__default.createElement("ul", _extends$1({}, attributes, {
      className: classes
    })));
  };

  LinkList.propTypes = propTypes$1w;
  LinkList.defaultProps = defaultProps$1r;

  var propTypes$1x = {
    /** Indica se l'elemento è attivo o no */
    active: propTypes.bool,

    /** Indica se l'elemento è disabilitato o no */
    disabled: propTypes.bool,

    /** Indica se l'elemento è un titolo. */
    header: propTypes.bool,

    /** Indica se l'elemento è un divisore */
    divider: propTypes.bool,

    /** Utilizzarlo in caso di utilizzo di componenti personalizzati */
    tag: propTypes.oneOfType([propTypes.func, propTypes.string]),

    /** Classi aggiuntive da usare per il componente LinkListItem */
    className: propTypes.any,

    /** Indica il link a cui l'elemento deve puntare. */
    href: propTypes.string,

    /** Indica la taglia/grandezza dell'elemento */
    size: propTypes.string
  };
  var defaultProps$1s = {
    tag: 'a'
  };

  var handleDisabledOnClick$1 = function handleDisabledOnClick(e) {
    e.preventDefault();
  };

  var LinkListItem = function LinkListItem(_ref) {
    var className = _ref.className,
        active = _ref.active,
        disabled = _ref.disabled,
        header = _ref.header,
        divider = _ref.divider,
        href = _ref.href,
        size = _ref.size,
        Tag = _ref.tag,
        attributes = _objectWithoutPropertiesLoose$1(_ref, ["className", "active", "disabled", "header", "divider", "href", "size", "tag"]);

    var classes = classnames(className, {
      active: active,
      disabled: disabled,
      header: header,
      divider: divider,
      size: size
    }, 'list-item'); // Prevent click event when disabled.

    if (disabled) {
      attributes.onClick = handleDisabledOnClick$1;
    }

    if (header) {
      Tag = 'h3';
    } else if (divider) {
      Tag = 'span';
    }

    if (header && href) {
      return React__default.createElement("li", null, React__default.createElement(Tag, null, React__default.createElement("a", _extends$1({
        href: href || '#'
      }, attributes, {
        className: classes
      }))));
    }

    attributes.href = href;
    return React__default.createElement("li", null, React__default.createElement(Tag, _extends$1({}, attributes, {
      className: classes
    })));
  };

  LinkListItem.propTypes = propTypes$1x;
  LinkListItem.defaultProps = defaultProps$1s;

  var propTypes$1y = {
    /** Renderizza i componenti NavItem al suo interno come tab. */
    tabs: propTypes.bool,

    /** Renderizza i componenti NavItem al suo interno come pills. */
    pills: propTypes.bool,

    /** Renderizza i componenti NavItem al suo interno come tab. */
    card: propTypes.bool,

    /** Se abilitato tutti i NavItem all'interno avranno la stessa larghezza */
    justified: propTypes.bool,

    /** Se abilitato i NavItem all'intero occuperanno tutto lo spazio disponibile  */
    fill: propTypes.bool,

    /** Da utilizzare per rendere il componente Nav verticale. Viene abilitato automaticamente in versione mobile. Valori possibili sono `true`, `false` o `"xs"` */
    vertical: propTypes.oneOfType([propTypes.bool, propTypes.string]),

    /** Da utilizzare per cambiare l'allineamento all'interno della Nav. Valori possibili sono `"center"` o `"end"` per posizionare il contenuto a centro o sulla destra. */
    horizontal: propTypes.string,

    /** Se utilizzata all'interno di una navbar, impostarlo su `true`. In caso di Header Nav, impostarlo a `true` insieme a inHeader. */
    navbar: propTypes.bool,

    /** Utilizzarlo in caso di utilizzo di componenti personalizzati */
    tag: propTypes.oneOfType([propTypes.func, propTypes.string])
  };
  var defaultProps$1t = {
    tag: 'ul',
    vertical: false
  };

  var Nav$1 = function Nav$1(_ref) {
    var attributes = _extends$1({}, _ref);

    return React__default.createElement(Nav, attributes);
  };

  Nav$1.propTypes = propTypes$1y;
  Nav$1.defaultProps = defaultProps$1t;

  var propTypes$1z = {
    children: propTypes.node,
    className: propTypes.string,
    tag: propTypes.oneOfType([propTypes.func, propTypes.string]),
    'aria-label': propTypes.string
  };
  var defaultProps$1u = {
    tag: 'nav',
    'aria-label': 'pagination'
  };

  var Pager = function Pager(props) {
    var children = props.children,
        className = props.className,
        Tag = props.tag,
        label = props['aria-label'];
    var classes = classnames(className, 'pagination-wrapper');
    return React__default.createElement(Tag, {
      className: classes,
      "aria-label": label
    }, children);
  };

  Pager.propTypes = propTypes$1z;
  Pager.defaultProps = defaultProps$1u;

  var propTypes$1A = {
    className: propTypes.string,
    size: propTypes.string,
    tag: propTypes.oneOfType([propTypes.func, propTypes.string])
  };
  var defaultProps$1v = {
    tag: 'ul'
  };

  var PagerList = function PagerList(props) {
    var _classNames;

    var className = props.className,
        size = props.size,
        Tag = props.tag,
        attributes = _objectWithoutPropertiesLoose$1(props, ["className", "size", "tag"]);

    var listClasses = classnames(className, 'pagination', (_classNames = {}, _classNames["pagination-" + size] = !!size, _classNames));
    return React__default.createElement(Tag, _extends$1({}, attributes, {
      className: listClasses
    }));
  };

  PagerList.propTypes = propTypes$1A;
  PagerList.defaultProps = defaultProps$1v;

  var PasswordInput =
  /*#__PURE__*/
  function (_Component) {
    _inheritsLoose$1(PasswordInput, _Component);

    function PasswordInput() {
      var _this;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _Component.call.apply(_Component, [this].concat(args)) || this;

      _defineProperty$2(_assertThisInitialized$2(_this), "state", {
        showPassword: false
      });

      _defineProperty$2(_assertThisInitialized$2(_this), "onPasswordToggle", function () {
        _this.setState(function (prevState) {
          return {
            showPassword: !prevState.showPassword
          };
        });
      });

      return _this;
    }

    var _proto = PasswordInput.prototype;

    _proto.render = function render() {
      var showPassword = this.state.showPassword;

      var _this$props = this.props,
          type = _this$props.type,
          rest = _objectWithoutPropertiesLoose$1(_this$props, ["type"]);

      var classNames = ['btn-eye', showPassword ? 'eye-off' : 'eye-on'].join(' ');
      return React__default.createElement(React.Fragment, null, React__default.createElement("span", {
        className: classNames,
        onClick: this.onPasswordToggle
      }), React__default.createElement(Input$1, _extends$1({}, rest, {
        type: showPassword ? 'text' : type
      })));
    };

    return PasswordInput;
  }(React.Component);

  _defineProperty$2(PasswordInput, "defaultProps", {
    type: 'password'
  });

  PasswordInput.propTypes = _extends$1({}, Input$1.propTypes);

  var defaultSteps = [{
    score: 0,
    label: 'inserisci almeno 8 caratteri e una lettera maiuscola',
    className: 'danger'
  }, {
    score: 1,
    label: 'password troppo debole',
    className: 'danger'
  }, {
    score: 25,
    label: 'password debole',
    className: 'danger'
  }, {
    score: 50,
    label: 'password sicura',
    className: 'warning'
  }, {
    score: 75,
    label: 'password molto sicura',
    className: 'success'
  }];

  var PasswordMeter =
  /*#__PURE__*/
  function (_Component) {
    _inheritsLoose$1(PasswordMeter, _Component);

    function PasswordMeter() {
      return _Component.apply(this, arguments) || this;
    }

    var _proto = PasswordMeter.prototype;

    _proto.render = function render() {
      var _this$props = this.props,
          steps = _this$props.steps,
          score = _this$props.score;
      var currentStep = steps.filter(function (step) {
        return step.score <= score;
      }).reduce(function (acc, current) {
        return acc.score > current.score ? acc : current;
      });
      var label = currentStep.label,
          className = currentStep.className;
      return React__default.createElement("div", {
        className: "psw-wrapper"
      }, React__default.createElement("span", {
        className: "psw-text text-" + className + " " + className
      }, label), React__default.createElement("div", {
        className: "progress rounded-0 position-relative psw-meter"
      }, React__default.createElement("div", {
        className: "row position-absolute w-100 m-0"
      }, React__default.createElement("div", {
        className: "col-3 border-left border-right border-white"
      }), React__default.createElement("div", {
        className: "col-3 border-left border-right border-white"
      }), React__default.createElement("div", {
        className: "col-3 border-left border-right border-white"
      }), React__default.createElement("div", {
        className: "col-3 border-left border-right border-white"
      })), React__default.createElement("div", {
        className: "progress-bar bg-" + className + " " + className,
        style: {
          width: score + "%"
        }
      })));
    };

    return PasswordMeter;
  }(React.Component);

  _defineProperty$2(PasswordMeter, "defaultProps", {
    score: 0,
    steps: defaultSteps
  });

  PasswordMeter.propTypes = {
    score: propTypes.number,
    steps: propTypes.arrayOf(propTypes.shape({
      score: propTypes.number,
      label: propTypes.string,
      className: propTypes.string
    }))
  };

  var propTypes$1B = {
    tag: propTypes.oneOfType([propTypes.func, propTypes.string]),
    className: propTypes.string
  };
  var defaultProps$1w = {
    tag: 'div'
  };

  var Skiplink = function Skiplink(props) {
    var className = props.className,
        Tag = props.tag,
        attributes = _objectWithoutPropertiesLoose$1(props, ["className", "tag"]);

    var classes = classnames(className, 'skiplinks');
    return React__default.createElement(Tag, _extends$1({
      className: classes
    }, attributes));
  };

  Skiplink.propTypes = propTypes$1B;
  Skiplink.defaultProps = defaultProps$1w;

  var propTypes$1C = {
    tag: propTypes.oneOfType([propTypes.func, propTypes.string]),
    className: propTypes.string
  };
  var defaultProps$1x = {
    tag: 'a'
  };

  var SkiplinkItem = function SkiplinkItem(props) {
    var className = props.className,
        Tag = props.tag,
        attributes = _objectWithoutPropertiesLoose$1(props, ["className", "tag"]);

    var classes = classnames(className, 'sr-only', 'sr-only-focusable');
    return React__default.createElement(Tag, _extends$1({
      className: classes
    }, attributes));
  };

  SkiplinkItem.propTypes = propTypes$1C;
  SkiplinkItem.defaultProps = defaultProps$1x;

  var Toggle =
  /*#__PURE__*/
  function (_Component) {
    _inheritsLoose$1(Toggle, _Component);

    function Toggle() {
      return _Component.apply(this, arguments) || this;
    }

    var _proto = Toggle.prototype;

    _proto.render = function render() {
      var _this$props = this.props,
          label = _this$props.label,
          rest = _objectWithoutPropertiesLoose$1(_this$props, ["label"]);

      return React__default.createElement("div", {
        className: "toggles"
      }, React__default.createElement(Label, {
        check: true
      }, label, React__default.createElement(Input, _extends$1({
        type: "checkbox"
      }, rest)), React__default.createElement("span", {
        className: "lever"
      })));
    };

    return Toggle;
  }(React.Component);

  Toggle.propTypes = _extends$1({
    label: propTypes.oneOfType([propTypes.string, propTypes.element])
  }, Input.propTypes);

  var propTypes$1D = {
    tag: propTypes.oneOfType([propTypes.func, propTypes.string]),
    className: propTypes.string,
    secondary: propTypes.bool,
    left: propTypes.bool,
    right: propTypes.bool,
    dark: propTypes.bool
  };
  var defaultProps$1y = {
    tag: 'div'
  };

  var Sidebar = function Sidebar(props) {
    var className = props.className,
        Tag = props.tag,
        secondary = props.secondary,
        left = props.left,
        right = props.right,
        dark = props.dark,
        attributes = _objectWithoutPropertiesLoose$1(props, ["className", "tag", "secondary", "left", "right", "dark"]);

    var wrapperClasses = classnames(className, left ? 'it-line-left-side' : false, right ? 'it-line-right-side' : false, dark ? 'theme-dark' : false, 'sidebar-wrapper');
    var wrapperClassesLinkList = classnames(secondary ? 'linklist-secondary' : false, 'sidebar-linklist-wrapper');

    if (secondary) {
      return React__default.createElement(Tag, _extends$1({}, attributes, {
        className: wrapperClassesLinkList
      }));
    }

    return React__default.createElement(Tag, {
      className: wrapperClasses
    }, React__default.createElement(Tag, _extends$1({}, attributes, {
      className: wrapperClassesLinkList
    })));
  };

  Sidebar.propTypes = propTypes$1D;
  Sidebar.defaultProps = defaultProps$1y;

  var propTypes$1E = {
    tag: propTypes.oneOfType([propTypes.func, propTypes.string]),
    className: propTypes.string,
    value: propTypes.number,
    label: propTypes.string,
    indeterminate: propTypes.bool,
    color: propTypes.string
  };
  var defaultProps$1z = {
    tag: 'div',
    role: 'progressbar',
    indeterminate: false
  };

  var Progress =
  /*#__PURE__*/
  function (_React$Component) {
    _inheritsLoose$1(Progress, _React$Component);

    function Progress() {
      return _React$Component.apply(this, arguments) || this;
    }

    var _proto = Progress.prototype;

    _proto.render = function render() {
      var _this$props = this.props,
          className = _this$props.className,
          Tag = _this$props.tag,
          value = _this$props.value,
          label = _this$props.label,
          indeterminate = _this$props.indeterminate,
          color = _this$props.color,
          attributes = _objectWithoutPropertiesLoose$1(_this$props, ["className", "tag", "value", "label", "indeterminate", "color"]);

      var wrapperClasses = classnames('progress-bar-wrapper');
      var secondaryWrapperClasses = classnames(className, indeterminate ? 'progress-indeterminate' : false, color ? 'progress-color' : false, 'progress');
      var classes = classnames(className, 'progress-bar', color ? "bg-" + this.props.color : false);

      if (label && value) {
        return React__default.createElement(Tag, {
          className: wrapperClasses
        }, React__default.createElement("div", {
          className: "progress-bar-label"
        }, React__default.createElement("span", {
          className: "sr-only"
        }, this.props.label), this.props.value + '%'), React__default.createElement(Tag, {
          className: secondaryWrapperClasses
        }, React__default.createElement("div", _extends$1({}, attributes, {
          className: classes,
          role: "progressbar",
          style: {
            width: this.props.value + '%'
          },
          "aria-valuenow": this.props.value,
          "aria-valuemin": "0",
          "aria-valuemax": "100"
        }))));
      }

      return React__default.createElement(Tag, {
        className: secondaryWrapperClasses
      }, React__default.createElement("div", {
        className: "progress-bar-label"
      }, React__default.createElement("span", {
        className: "sr-only"
      }, this.props.label)), React__default.createElement("div", _extends$1({}, attributes, {
        className: classes,
        role: "progressbar",
        style: {
          width: this.props.value + '%'
        },
        "aria-valuenow": this.props.value,
        "aria-valuemin": "0",
        "aria-valuemax": "100"
      })));
    };

    return Progress;
  }(React__default.Component);

  Progress.propTypes = propTypes$1E;
  Progress.defaultProps = defaultProps$1z;

  var propTypes$1F = {
    tag: propTypes.oneOfType([propTypes.func, propTypes.string]),
    className: propTypes.string,
    active: propTypes.bool,
    small: propTypes.bool,
    "double": propTypes.bool
  };
  var defaultProps$1A = {
    tag: 'span',
    active: false,
    small: false,
    "double": false
  };

  var Spinner =
  /*#__PURE__*/
  function (_React$Component) {
    _inheritsLoose$1(Spinner, _React$Component);

    function Spinner() {
      return _React$Component.apply(this, arguments) || this;
    }

    var _proto = Spinner.prototype;

    _proto.render = function render() {
      var _this$props = this.props,
          className = _this$props.className,
          Tag = _this$props.tag,
          active = _this$props.active,
          small = _this$props.small,
          _double = _this$props["double"],
          attributes = _objectWithoutPropertiesLoose$1(_this$props, ["className", "tag", "active", "small", "double"]);

      var wrapperClasses = classnames(active ? 'progress-spinner-active' : false, small ? 'size-sm' : false, _double ? 'progress-spinner-double' : false, 'progress-spinner');
      var innerClasses = classnames('progress-spinner-inner');
      var classes = classnames(className, 'sr-only');

      if (_double) {
        return React__default.createElement(Tag, {
          className: wrapperClasses
        }, React__default.createElement("div", {
          className: innerClasses
        }), React__default.createElement("div", {
          className: innerClasses
        }), React__default.createElement(Tag, _extends$1({}, attributes, {
          className: classes
        }), "Caricamento..."));
      }

      return React__default.createElement(Tag, {
        className: wrapperClasses
      }, React__default.createElement(Tag, _extends$1({}, attributes, {
        className: classes
      }), "Caricamento..."));
    };

    return Spinner;
  }(React__default.Component);

  Spinner.propTypes = propTypes$1F;
  Spinner.defaultProps = defaultProps$1A;

  var propTypes$1G = _extends$1({}, Card.propTypes, {
    teaser: propTypes.bool,
    spacing: propTypes.bool,
    noWrapper: propTypes.bool,
    wrapperClassName: propTypes.string
  });

  var defaultProps$1B = _extends$1({}, Card.defaultProps, {
    noWrapper: false
  });

  var Card$1 = function Card$1(_ref) {
    var teaser = _ref.teaser,
        spacing = _ref.spacing,
        noWrapper = _ref.noWrapper,
        wrapperClassName = _ref.wrapperClassName,
        attributes = _objectWithoutPropertiesLoose$1(_ref, ["teaser", "spacing", "noWrapper", "wrapperClassName"]);

    var wrapperClasses = classnames('card-wrapper', wrapperClassName, {
      'card-space': spacing,
      'card-teaser-wrapper': teaser
    });
    var cardClasses = classnames(attributes.className, {
      'card-teaser': teaser
    });

    if (noWrapper) {
      return React__default.createElement(Card, _extends$1({}, attributes, {
        className: cardClasses
      }));
    }

    return React__default.createElement("div", {
      className: wrapperClasses
    }, React__default.createElement(Card, _extends$1({}, attributes, {
      className: cardClasses
    })));
  };

  Card$1.propTypes = propTypes$1G;
  Card$1.defaultProps = defaultProps$1B;

  var propTypes$1H = {
    iconName: propTypes.string,
    date: propTypes.string,
    href: propTypes.string
  };

  var CardCategory = function CardCategory(props) {
    var iconName = props.iconName,
        date = props.date,
        href = props.href,
        attributes = _objectWithoutPropertiesLoose$1(props, ["iconName", "date", "href"]);

    var children = attributes.children,
        rest = _objectWithoutPropertiesLoose$1(attributes, ["children"]);

    var classes = classnames({
      'category-top': !iconName,
      'categoryicon-top': iconName
    }); // Simple category link

    var categoryLink = !iconName && React__default.createElement("a", {
      href: href,
      className: "category"
    }, children);
    var categoryDate = !iconName && React__default.createElement("span", {
      className: "data"
    }, date); // Category with icon

    var categoryText = iconName && React__default.createElement("span", {
      className: "text"
    }, children);
    var categoryIcon = iconName && React__default.createElement(Icon, {
      icon: iconName
    });
    return React__default.createElement("div", _extends$1({
      className: classes
    }, rest), categoryLink, categoryDate, categoryIcon, categoryText);
  };

  CardCategory.propTypes = propTypes$1H;

  var propTypes$1I = {
    tag: propTypes.string,
    className: propTypes.string
  };
  var defaultProps$1C = {
    tag: 'a'
  };

  var CardTag = function CardTag(props) {
    var className = props.className,
        Tag = props.tag,
        attributes = _objectWithoutPropertiesLoose$1(props, ["className", "tag"]);

    var classes = classnames(className, 'card-tag');
    return React__default.createElement(Tag, _extends$1({
      className: classes
    }, attributes));
  };

  CardTag.propTypes = propTypes$1I;
  CardTag.defaultProps = defaultProps$1C;

  var propTypes$1J = {
    children: propTypes.node,
    date: propTypes.string
  };

  var CardTagsHeader = function CardTagsHeader(props) {
    var date = props.date,
        children = props.children,
        attributes = _objectWithoutPropertiesLoose$1(props, ["date", "children"]);

    return React__default.createElement("div", _extends$1({
      className: "head-tags"
    }, attributes), children, date && React__default.createElement("span", {
      className: "data"
    }, date));
  };

  CardTagsHeader.propTypes = propTypes$1J;

  var propTypes$1K = {
    className: propTypes.string
  };

  var CardSignature = function CardSignature(props) {
    var className = props.className,
        attributes = _objectWithoutPropertiesLoose$1(props, ["className"]);

    var classes = classnames(className, 'card-signature');
    return React__default.createElement("span", _extends$1({
      className: classes
    }, attributes));
  };

  CardSignature.propTypes = propTypes$1K;

  var propTypes$1L = {
    className: propTypes.string
  };

  var CardFooterCTA = function CardFooterCTA(props) {
    var className = props.className,
        attributes = _objectWithoutPropertiesLoose$1(props, ["className"]);

    var classes = classnames(className, 'it-card-footer');
    return React__default.createElement("div", _extends$1({
      className: classes
    }, attributes));
  };

  CardFooterCTA.propTypes = propTypes$1L;

  var propTypes$1M = {
    className: propTypes.string,
    iconName: propTypes.string,
    href: propTypes.string,
    text: propTypes.string
  };
  var defaultTypes = {
    iconName: 'it-arrow-right'
  };

  var CardReadMore = function CardReadMore(props) {
    var className = props.className,
        text = props.text,
        iconName = props.iconName,
        attributes = _objectWithoutPropertiesLoose$1(props, ["className", "text", "iconName"]);

    var classes = classnames(className, 'read-more');
    return React__default.createElement("a", _extends$1({
      className: classes
    }, attributes), React__default.createElement("span", {
      className: "text"
    }, text), iconName && React__default.createElement(Icon, {
      icon: iconName
    }));
  };

  CardReadMore.propTypes = propTypes$1M;
  CardReadMore.defaultTypes = defaultTypes;

  var propTypes$1N = {
    tag: propTypes.oneOfType([propTypes.func, propTypes.string]),
    className: propTypes.string
  };
  var defaultProps$1D = {
    tag: 'nav'
  };

  var BottomNav = function BottomNav(props) {
    var Tag = props.tag,
        attributes = _objectWithoutPropertiesLoose$1(props, ["tag"]);

    var wrapperClasses = classnames('bottom-nav');
    return React__default.createElement(Tag, {
      className: wrapperClasses
    }, React__default.createElement("ul", attributes));
  };

  BottomNav.propTypes = propTypes$1N;
  BottomNav.defaultProps = defaultProps$1D;

  var propTypes$1O = {
    tag: propTypes.oneOfType([propTypes.func, propTypes.string]),
    className: propTypes.string,
    active: propTypes.bool,
    link: propTypes.string,
    label: propTypes.string,
    iconName: propTypes.string,
    srText: propTypes.string,
    alert: propTypes.bool,
    badge: propTypes.bool
  };
  var defaultProps$1E = {
    tag: 'a',
    link: '#',
    iconName: 'it-comment',
    srText: false
  };

  var BottomNavItem = function BottomNavItem(_ref) {
    var active = _ref.active,
        badge = _ref.badge,
        alert = _ref.alert,
        link = _ref.link,
        srText = _ref.srText,
        iconName = _ref.iconName,
        label = _ref.label,
        Tag = _ref.tag,
        attributes = _objectWithoutPropertiesLoose$1(_ref, ["active", "badge", "alert", "link", "srText", "iconName", "label", "tag"]);

    var activeClass = classnames(active ? 'active' : false);
    var badgeWrapper = badge ? React__default.createElement("div", {
      className: "badge-wrapper"
    }, React__default.createElement("span", {
      className: "bottom-nav-badge"
    }, badge)) : false;
    var alertWrapper = alert ? React__default.createElement("div", {
      className: "badge-wrapper"
    }, React__default.createElement("span", {
      className: "bottom-nav-alert"
    })) : false;
    return React__default.createElement("li", attributes, React__default.createElement(Tag, {
      href: link,
      className: activeClass
    }, badgeWrapper, alertWrapper, React__default.createElement(Icon, {
      icon: iconName
    }), React__default.createElement("span", {
      className: "bottom-nav-label"
    }, label, React__default.createElement("span", {
      className: "sr-only"
    }, srText))));
  };

  BottomNavItem.propTypes = propTypes$1O;
  BottomNavItem.defaultProps = defaultProps$1E;

  var propTypes$1P = {
    tag: propTypes.oneOfType([propTypes.func, propTypes.string]),
    className: propTypes.string
  };
  var defaultProps$1F = {
    tag: 'div'
  };

  function CookieBar(props) {
    var className = props.className,
        Tag = props.tag,
        attributes = _objectWithoutPropertiesLoose$1(props, ["className", "tag"]);

    var wrapperClasses = classnames('cookiebar show', className);
    return React__default.createElement(Tag, _extends$1({}, attributes, {
      className: wrapperClasses
    }));
  }

  CookieBar.propTypes = propTypes$1P;
  CookieBar.defaultProps = defaultProps$1F;

  var propTypes$1Q = {
    tag: propTypes.oneOfType([propTypes.func, propTypes.string]),
    className: propTypes.string
  };
  var defaultProps$1G = {
    tag: 'div'
  };

  var CookieBarButtons = function CookieBarButtons(props) {
    var className = props.className,
        Tag = props.tag,
        attributes = _objectWithoutPropertiesLoose$1(props, ["className", "tag"]);

    var buttonClasses = classnames(className, 'cookiebar-buttons');
    return React__default.createElement(Tag, _extends$1({
      className: buttonClasses
    }, attributes));
  };

  CookieBarButtons.propTypes = propTypes$1Q;
  CookieBarButtons.defaultProps = defaultProps$1G;

  var propTypes$1R = {
    tag: propTypes.oneOfType([propTypes.func, propTypes.string]),
    className: propTypes.string
  };
  var defaultProps$1H = {
    tag: 'button'
  };

  var CookieBarButton =
  /*#__PURE__*/
  function (_React$Component) {
    _inheritsLoose$1(CookieBarButton, _React$Component);

    function CookieBarButton() {
      return _React$Component.apply(this, arguments) || this;
    }

    var _proto = CookieBarButton.prototype;

    _proto.render = function render() {
      var _this$props = this.props,
          Tag = _this$props.tag,
          className = _this$props.className,
          attributes = _objectWithoutPropertiesLoose$1(_this$props, ["tag", "className"]);

      var activeClass = classnames(className, 'cookiebar-btn');
      return React__default.createElement(Tag, _extends$1({
        href: true,
        className: activeClass
      }, attributes));
    };

    return CookieBarButton;
  }(React__default.Component);

  CookieBarButton.propTypes = propTypes$1R;
  CookieBarButton.defaultProps = defaultProps$1H;

  var propTypes$1S = {
    /** Utilizzarlo in caso di utilizzo di componenti personalizzati */
    tag: propTypes.oneOfType([propTypes.func, propTypes.string]),

    /** Classi aggiuntive da usare per il componente Chip */
    className: propTypes.string,

    /** Impostarlo su `true` per centrare la label all'interno */
    simple: propTypes.bool,

    /** Impostarlo su `true` per una versione più grande del componente Chip. */
    large: propTypes.bool,

    /** Impostarlo su `true` per renderizzare il componente Chip come disabilitato */
    disabled: propTypes.bool,
    color: propTypes.string
  };
  var defaultProps$1I = {
    tag: 'div',
    simple: false,
    large: false,
    disabled: false,
    color: ''
  };

  var Chip = function Chip(props) {
    var _classNames;

    var className = props.className,
        color = props.color,
        Tag = props.tag,
        simple = props.simple,
        large = props.large,
        disabled = props.disabled,
        attributes = _objectWithoutPropertiesLoose$1(props, ["className", "color", "tag", "simple", "large", "disabled"]);

    var classes = classnames('chip', className, (_classNames = {
      'chip-simple': simple,
      'chip-lg': large,
      'chip-disabled': disabled
    }, _classNames["chip-" + color] = color, _classNames));
    return React__default.createElement(Tag, _extends$1({
      className: classes
    }, attributes));
  };

  Chip.propTypes = propTypes$1S;
  Chip.defaultProps = defaultProps$1I;

  var propTypes$1T = {
    /** Utilizzarlo in caso di utilizzo di componenti personalizzati */
    tag: propTypes.oneOfType([propTypes.func, propTypes.string]),

    /** Classi aggiuntive da usare per il componente ChipLabel */
    className: propTypes.string
  };
  var defaultProps$1J = {
    tag: 'span'
  };

  var ChipLabel = function ChipLabel(props) {
    var className = props.className,
        Tag = props.tag,
        attributes = _objectWithoutPropertiesLoose$1(props, ["className", "tag"]);

    var classes = classnames(className, 'chip-label');
    return React__default.createElement(Tag, _extends$1({}, attributes, {
      className: classes
    }));
  };

  ChipLabel.propTypes = propTypes$1T;
  ChipLabel.defaultProps = defaultProps$1J;

  var ToolkitFontLoader =
  /*#__PURE__*/
  function (_Component) {
    _inheritsLoose$1(ToolkitFontLoader, _Component);

    function ToolkitFontLoader() {
      return _Component.apply(this, arguments) || this;
    }

    var _proto = ToolkitFontLoader.prototype;

    _proto.componentDidMount = function componentDidMount() {
      if (typeof window !== 'undefined') {
        var WebFont = require('webfontloader');

        WebFont.load({
          custom: {
            families: ['Titillium Web:300,400,600,700:latin-ext', 'Lora:400,700:latin-ext', 'Roboto Mono:400,700:latin-ext']
          }
        });
      }
    };

    _proto.render = function render() {
      return null;
    };

    return ToolkitFontLoader;
  }(React.Component);

  exports.Accordion = Accordion;
  exports.AccordionBody = AccordionBody;
  exports.AccordionHeader = AccordionHeader;
  exports.Alert = Alert;
  exports.AvatarContainer = AvatarContainer;
  exports.AvatarExtraText = AvatarExtraText;
  exports.AvatarGroupContainer = AvatarGroupContainer;
  exports.AvatarIcon = AvatarIcon;
  exports.AvatarPresence = AvatarPresence;
  exports.AvatarStatus = AvatarStatus;
  exports.AvatarWrapper = AvatarWrapper;
  exports.Badge = Badge$1;
  exports.BottomNav = BottomNav;
  exports.BottomNavItem = BottomNavItem;
  exports.Breadcrumb = Breadcrumb;
  exports.BreadcrumbItem = BreadcrumbItem;
  exports.Button = Button$1;
  exports.ButtonDropdown = ButtonDropdown;
  exports.ButtonGroup = ButtonGroup;
  exports.ButtonToolbar = ButtonToolbar;
  exports.Callout = Callout;
  exports.CalloutText = CalloutText;
  exports.CalloutTitle = CalloutTitle;
  exports.Card = Card$1;
  exports.CardBody = CardBody;
  exports.CardCategory = CardCategory;
  exports.CardColumns = CardColumns;
  exports.CardDeck = CardDeck;
  exports.CardFooter = CardFooter;
  exports.CardFooterCTA = CardFooterCTA;
  exports.CardGroup = CardGroup;
  exports.CardHeader = CardHeader;
  exports.CardImg = CardImg;
  exports.CardImgOverlay = CardImgOverlay;
  exports.CardLink = CardLink;
  exports.CardReadMore = CardReadMore;
  exports.CardSignature = CardSignature;
  exports.CardSubtitle = CardSubtitle;
  exports.CardTag = CardTag;
  exports.CardTagsHeader = CardTagsHeader;
  exports.CardText = CardText;
  exports.CardTitle = CardTitle;
  exports.Carousel = Carousel;
  exports.CarouselCaption = CarouselCaption;
  exports.CarouselControl = CarouselControl;
  exports.CarouselIndicators = CarouselIndicators;
  exports.CarouselItem = CarouselItem;
  exports.Chip = Chip;
  exports.ChipLabel = ChipLabel;
  exports.Col = Col;
  exports.Collapse = Collapse$1;
  exports.Container = Container;
  exports.CookieBar = CookieBar;
  exports.CookieBarButton = CookieBarButton;
  exports.CookieBarButtons = CookieBarButtons;
  exports.Dropdown = Dropdown;
  exports.DropdownItem = DropdownItem;
  exports.DropdownMenu = DropdownMenu;
  exports.DropdownToggle = DropdownToggle;
  exports.Fade = Fade;
  exports.FontLoader = ToolkitFontLoader;
  exports.Form = Form;
  exports.FormFeedback = FormFeedback;
  exports.FormGroup = FormGroup$1;
  exports.FormText = FormText;
  exports.Header = Header;
  exports.HeaderBrand = HeaderBrand;
  exports.HeaderContent = HeaderContent;
  exports.HeaderLinkZone = HeaderLinkZone;
  exports.HeaderRightZone = HeaderRightZone;
  exports.HeaderSearch = HeaderSearch;
  exports.HeaderSocialsZone = HeaderSocialsZone;
  exports.HeaderToggler = HeaderToggler;
  exports.Headers = Headers;
  exports.Hero = Hero;
  exports.Icon = Icon;
  exports.Input = Input$1;
  exports.InputGroup = InputGroup;
  exports.InputGroupAddon = InputGroupAddon;
  exports.InputGroupButtonDropdown = InputGroupButtonDropdown;
  exports.InputGroupText = InputGroupText;
  exports.Jumbotron = Jumbotron;
  exports.Label = Label;
  exports.LinkList = LinkList;
  exports.LinkListItem = LinkListItem;
  exports.ListGroup = ListGroup;
  exports.ListGroupItem = ListGroupItem;
  exports.ListGroupItemHeading = ListGroupItemHeading;
  exports.ListGroupItemText = ListGroupItemText;
  exports.Media = Media;
  exports.Modal = Modal;
  exports.ModalBody = ModalBody;
  exports.ModalFooter = ModalFooter;
  exports.ModalHeader = ModalHeader;
  exports.Nav = Nav$1;
  exports.NavItem = NavItem;
  exports.NavLink = NavLink;
  exports.Navbar = Navbar;
  exports.NavbarBrand = NavbarBrand;
  exports.NavbarToggler = NavbarToggler;
  exports.Pager = Pager;
  exports.PagerItem = PaginationItem;
  exports.PagerLink = PaginationLink;
  exports.PagerList = PagerList;
  exports.PasswordInput = PasswordInput;
  exports.PasswordMeter = PasswordMeter;
  exports.Popover = Popover;
  exports.PopoverBody = PopoverBody;
  exports.PopoverHeader = PopoverHeader;
  exports.PopperContent = PopperContent;
  exports.PopperTargetHelper = PopperTargetHelper;
  exports.Progress = Progress;
  exports.Row = Row;
  exports.Scrollspy = Scrollspy;
  exports.Sidebar = Sidebar;
  exports.Skiplink = Skiplink;
  exports.SkiplinkItem = SkiplinkItem;
  exports.Spinner = Spinner;
  exports.TabContent = TabContent;
  exports.TabPane = TabPane;
  exports.Table = Table;
  exports.Toggle = Toggle;
  exports.Tooltip = Tooltip;
  exports.UncontrolledAlert = UncontrolledAlert;
  exports.UncontrolledButtonDropdown = UncontrolledButtonDropdown;
  exports.UncontrolledCarousel = UncontrolledCarousel;
  exports.UncontrolledCollapse = UncontrolledCollapse;
  exports.UncontrolledDropdown = UncontrolledDropdown;
  exports.UncontrolledTooltip = UncontrolledTooltip;
  exports.Util = utils;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=design-react-kit.js.map
