'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign$1 = function() {
    __assign$1 = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign$1.apply(this, arguments);
};

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

var jsxRuntime = {exports: {}};

var reactJsxRuntime_production_min = {};

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
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
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

/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f=React__default["default"],g=60103;reactJsxRuntime_production_min.Fragment=60107;if("function"===typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element");reactJsxRuntime_production_min.Fragment=h("react.fragment");}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};
function q(c,a,k){var b,d={},e=null,l=null;void 0!==k&&(e=""+k);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(l=a.ref);for(b in a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a)void 0===d[b]&&(d[b]=a[b]);return {$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}reactJsxRuntime_production_min.jsx=q;reactJsxRuntime_production_min.jsxs=q;

var reactJsxRuntime_development = {};

/** @license React v17.0.2
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

(function (exports) {

if (process.env.NODE_ENV !== "production") {
  (function() {

var React = React__default["default"];
var _assign = objectAssign;

// ATTENTION
// When adding new symbols to this file,
// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var REACT_ELEMENT_TYPE = 0xeac7;
var REACT_PORTAL_TYPE = 0xeaca;
exports.Fragment = 0xeacb;
var REACT_STRICT_MODE_TYPE = 0xeacc;
var REACT_PROFILER_TYPE = 0xead2;
var REACT_PROVIDER_TYPE = 0xeacd;
var REACT_CONTEXT_TYPE = 0xeace;
var REACT_FORWARD_REF_TYPE = 0xead0;
var REACT_SUSPENSE_TYPE = 0xead1;
var REACT_SUSPENSE_LIST_TYPE = 0xead8;
var REACT_MEMO_TYPE = 0xead3;
var REACT_LAZY_TYPE = 0xead4;
var REACT_BLOCK_TYPE = 0xead9;
var REACT_SERVER_BLOCK_TYPE = 0xeada;
var REACT_FUNDAMENTAL_TYPE = 0xead5;
var REACT_DEBUG_TRACING_MODE_TYPE = 0xeae1;
var REACT_LEGACY_HIDDEN_TYPE = 0xeae3;

if (typeof Symbol === 'function' && Symbol.for) {
  var symbolFor = Symbol.for;
  REACT_ELEMENT_TYPE = symbolFor('react.element');
  REACT_PORTAL_TYPE = symbolFor('react.portal');
  exports.Fragment = symbolFor('react.fragment');
  REACT_STRICT_MODE_TYPE = symbolFor('react.strict_mode');
  REACT_PROFILER_TYPE = symbolFor('react.profiler');
  REACT_PROVIDER_TYPE = symbolFor('react.provider');
  REACT_CONTEXT_TYPE = symbolFor('react.context');
  REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
  REACT_SUSPENSE_TYPE = symbolFor('react.suspense');
  REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
  REACT_MEMO_TYPE = symbolFor('react.memo');
  REACT_LAZY_TYPE = symbolFor('react.lazy');
  REACT_BLOCK_TYPE = symbolFor('react.block');
  REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');
  REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');
  symbolFor('react.scope');
  symbolFor('react.opaque.id');
  REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
  symbolFor('react.offscreen');
  REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
}

var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';
function getIteratorFn(maybeIterable) {
  if (maybeIterable === null || typeof maybeIterable !== 'object') {
    return null;
  }

  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }

  return null;
}

var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

function error(format) {
  {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    printWarning('error', format, args);
  }
}

function printWarning(level, format, args) {
  // When changing this logic, you might want to also
  // update consoleWithStackDev.www.js as well.
  {
    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
    var stack = ReactDebugCurrentFrame.getStackAddendum();

    if (stack !== '') {
      format += '%s';
      args = args.concat([stack]);
    }

    var argsWithFormat = args.map(function (item) {
      return '' + item;
    }); // Careful: RN currently depends on this prefix

    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
    // breaks IE9: https://github.com/facebook/react/issues/13610
    // eslint-disable-next-line react-internal/no-production-logging

    Function.prototype.apply.call(console[level], console, argsWithFormat);
  }
}

// Filter certain DOM attributes (e.g. src, href) if their values are empty strings.

var enableScopeAPI = false; // Experimental Create Event Handle API.

function isValidElementType(type) {
  if (typeof type === 'string' || typeof type === 'function') {
    return true;
  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


  if (type === exports.Fragment || type === REACT_PROFILER_TYPE || type === REACT_DEBUG_TRACING_MODE_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI ) {
    return true;
  }

  if (typeof type === 'object' && type !== null) {
    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) {
      return true;
    }
  }

  return false;
}

function getWrappedName(outerType, innerType, wrapperName) {
  var functionName = innerType.displayName || innerType.name || '';
  return outerType.displayName || (functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName);
}

function getContextName(type) {
  return type.displayName || 'Context';
}

function getComponentName(type) {
  if (type == null) {
    // Host root, text node or just invalid type.
    return null;
  }

  {
    if (typeof type.tag === 'number') {
      error('Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');
    }
  }

  if (typeof type === 'function') {
    return type.displayName || type.name || null;
  }

  if (typeof type === 'string') {
    return type;
  }

  switch (type) {
    case exports.Fragment:
      return 'Fragment';

    case REACT_PORTAL_TYPE:
      return 'Portal';

    case REACT_PROFILER_TYPE:
      return 'Profiler';

    case REACT_STRICT_MODE_TYPE:
      return 'StrictMode';

    case REACT_SUSPENSE_TYPE:
      return 'Suspense';

    case REACT_SUSPENSE_LIST_TYPE:
      return 'SuspenseList';
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_CONTEXT_TYPE:
        var context = type;
        return getContextName(context) + '.Consumer';

      case REACT_PROVIDER_TYPE:
        var provider = type;
        return getContextName(provider._context) + '.Provider';

      case REACT_FORWARD_REF_TYPE:
        return getWrappedName(type, type.render, 'ForwardRef');

      case REACT_MEMO_TYPE:
        return getComponentName(type.type);

      case REACT_BLOCK_TYPE:
        return getComponentName(type._render);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            return getComponentName(init(payload));
          } catch (x) {
            return null;
          }
        }
    }
  }

  return null;
}

// Helpers to patch console.logs to avoid logging during side-effect free
// replaying on render function. This currently only patches the object
// lazily which won't cover if the log function was extracted eagerly.
// We could also eagerly patch the method.
var disabledDepth = 0;
var prevLog;
var prevInfo;
var prevWarn;
var prevError;
var prevGroup;
var prevGroupCollapsed;
var prevGroupEnd;

function disabledLog() {}

disabledLog.__reactDisabledLog = true;
function disableLogs() {
  {
    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      prevLog = console.log;
      prevInfo = console.info;
      prevWarn = console.warn;
      prevError = console.error;
      prevGroup = console.group;
      prevGroupCollapsed = console.groupCollapsed;
      prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

      var props = {
        configurable: true,
        enumerable: true,
        value: disabledLog,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        info: props,
        log: props,
        warn: props,
        error: props,
        group: props,
        groupCollapsed: props,
        groupEnd: props
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    disabledDepth++;
  }
}
function reenableLogs() {
  {
    disabledDepth--;

    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      var props = {
        configurable: true,
        enumerable: true,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        log: _assign({}, props, {
          value: prevLog
        }),
        info: _assign({}, props, {
          value: prevInfo
        }),
        warn: _assign({}, props, {
          value: prevWarn
        }),
        error: _assign({}, props, {
          value: prevError
        }),
        group: _assign({}, props, {
          value: prevGroup
        }),
        groupCollapsed: _assign({}, props, {
          value: prevGroupCollapsed
        }),
        groupEnd: _assign({}, props, {
          value: prevGroupEnd
        })
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    if (disabledDepth < 0) {
      error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
    }
  }
}

var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
var prefix;
function describeBuiltInComponentFrame(name, source, ownerFn) {
  {
    if (prefix === undefined) {
      // Extract the VM specific prefix used by each line.
      try {
        throw Error();
      } catch (x) {
        var match = x.stack.trim().match(/\n( *(at )?)/);
        prefix = match && match[1] || '';
      }
    } // We use the prefix to ensure our stacks line up with native stack frames.


    return '\n' + prefix + name;
  }
}
var reentry = false;
var componentFrameCache;

{
  var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
  componentFrameCache = new PossiblyWeakMap();
}

function describeNativeComponentFrame(fn, construct) {
  // If something asked for a stack inside a fake render, it should get ignored.
  if (!fn || reentry) {
    return '';
  }

  {
    var frame = componentFrameCache.get(fn);

    if (frame !== undefined) {
      return frame;
    }
  }

  var control;
  reentry = true;
  var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

  Error.prepareStackTrace = undefined;
  var previousDispatcher;

  {
    previousDispatcher = ReactCurrentDispatcher.current; // Set the dispatcher in DEV because this might be call in the render function
    // for warnings.

    ReactCurrentDispatcher.current = null;
    disableLogs();
  }

  try {
    // This should throw.
    if (construct) {
      // Something should be setting the props in the constructor.
      var Fake = function () {
        throw Error();
      }; // $FlowFixMe


      Object.defineProperty(Fake.prototype, 'props', {
        set: function () {
          // We use a throwing setter instead of frozen or non-writable props
          // because that won't throw in a non-strict mode function.
          throw Error();
        }
      });

      if (typeof Reflect === 'object' && Reflect.construct) {
        // We construct a different control for this case to include any extra
        // frames added by the construct call.
        try {
          Reflect.construct(Fake, []);
        } catch (x) {
          control = x;
        }

        Reflect.construct(fn, [], Fake);
      } else {
        try {
          Fake.call();
        } catch (x) {
          control = x;
        }

        fn.call(Fake.prototype);
      }
    } else {
      try {
        throw Error();
      } catch (x) {
        control = x;
      }

      fn();
    }
  } catch (sample) {
    // This is inlined manually because closure doesn't do it for us.
    if (sample && control && typeof sample.stack === 'string') {
      // This extracts the first frame from the sample that isn't also in the control.
      // Skipping one frame that we assume is the frame that calls the two.
      var sampleLines = sample.stack.split('\n');
      var controlLines = control.stack.split('\n');
      var s = sampleLines.length - 1;
      var c = controlLines.length - 1;

      while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
        // We expect at least one stack frame to be shared.
        // Typically this will be the root most one. However, stack frames may be
        // cut off due to maximum stack limits. In this case, one maybe cut off
        // earlier than the other. We assume that the sample is longer or the same
        // and there for cut off earlier. So we should find the root most frame in
        // the sample somewhere in the control.
        c--;
      }

      for (; s >= 1 && c >= 0; s--, c--) {
        // Next we find the first one that isn't the same which should be the
        // frame that called our sample function and the control.
        if (sampleLines[s] !== controlLines[c]) {
          // In V8, the first line is describing the message but other VMs don't.
          // If we're about to return the first line, and the control is also on the same
          // line, that's a pretty good indicator that our sample threw at same line as
          // the control. I.e. before we entered the sample frame. So we ignore this result.
          // This can happen if you passed a class to function component, or non-function.
          if (s !== 1 || c !== 1) {
            do {
              s--;
              c--; // We may still have similar intermediate frames from the construct call.
              // The next one that isn't the same should be our match though.

              if (c < 0 || sampleLines[s] !== controlLines[c]) {
                // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
                var _frame = '\n' + sampleLines[s].replace(' at new ', ' at ');

                {
                  if (typeof fn === 'function') {
                    componentFrameCache.set(fn, _frame);
                  }
                } // Return the line we found.


                return _frame;
              }
            } while (s >= 1 && c >= 0);
          }

          break;
        }
      }
    }
  } finally {
    reentry = false;

    {
      ReactCurrentDispatcher.current = previousDispatcher;
      reenableLogs();
    }

    Error.prepareStackTrace = previousPrepareStackTrace;
  } // Fallback to just using the name if we couldn't make it throw.


  var name = fn ? fn.displayName || fn.name : '';
  var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';

  {
    if (typeof fn === 'function') {
      componentFrameCache.set(fn, syntheticFrame);
    }
  }

  return syntheticFrame;
}
function describeFunctionComponentFrame(fn, source, ownerFn) {
  {
    return describeNativeComponentFrame(fn, false);
  }
}

function shouldConstruct(Component) {
  var prototype = Component.prototype;
  return !!(prototype && prototype.isReactComponent);
}

function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {

  if (type == null) {
    return '';
  }

  if (typeof type === 'function') {
    {
      return describeNativeComponentFrame(type, shouldConstruct(type));
    }
  }

  if (typeof type === 'string') {
    return describeBuiltInComponentFrame(type);
  }

  switch (type) {
    case REACT_SUSPENSE_TYPE:
      return describeBuiltInComponentFrame('Suspense');

    case REACT_SUSPENSE_LIST_TYPE:
      return describeBuiltInComponentFrame('SuspenseList');
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_FORWARD_REF_TYPE:
        return describeFunctionComponentFrame(type.render);

      case REACT_MEMO_TYPE:
        // Memo may contain any component type so we recursively resolve it.
        return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);

      case REACT_BLOCK_TYPE:
        return describeFunctionComponentFrame(type._render);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            // Lazy may contain any component type so we recursively resolve it.
            return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
          } catch (x) {}
        }
    }
  }

  return '';
}

var loggedTypeFailures = {};
var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame.setExtraStackFrame(null);
    }
  }
}

function checkPropTypes(typeSpecs, values, location, componentName, element) {
  {
    // $FlowFixMe This is okay but Flow doesn't know it.
    var has = Function.call.bind(Object.prototype.hasOwnProperty);

    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.

        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
            err.name = 'Invariant Violation';
            throw err;
          }

          error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
        } catch (ex) {
          error$1 = ex;
        }

        if (error$1 && !(error$1 instanceof Error)) {
          setCurrentlyValidatingElement(element);

          error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);

          setCurrentlyValidatingElement(null);
        }

        if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error$1.message] = true;
          setCurrentlyValidatingElement(element);

          error('Failed %s type: %s', location, error$1.message);

          setCurrentlyValidatingElement(null);
        }
      }
    }
  }
}

var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};
var specialPropKeyWarningShown;
var specialPropRefWarningShown;
var didWarnAboutStringRefs;

{
  didWarnAboutStringRefs = {};
}

function hasValidRef(config) {
  {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.ref !== undefined;
}

function hasValidKey(config) {
  {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.key !== undefined;
}

function warnIfStringRefCannotBeAutoConverted(config, self) {
  {
    if (typeof config.ref === 'string' && ReactCurrentOwner.current && self && ReactCurrentOwner.current.stateNode !== self) {
      var componentName = getComponentName(ReactCurrentOwner.current.type);

      if (!didWarnAboutStringRefs[componentName]) {
        error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', getComponentName(ReactCurrentOwner.current.type), config.ref);

        didWarnAboutStringRefs[componentName] = true;
      }
    }
  }
}

function defineKeyPropWarningGetter(props, displayName) {
  {
    var warnAboutAccessingKey = function () {
      if (!specialPropKeyWarningShown) {
        specialPropKeyWarningShown = true;

        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    };

    warnAboutAccessingKey.isReactWarning = true;
    Object.defineProperty(props, 'key', {
      get: warnAboutAccessingKey,
      configurable: true
    });
  }
}

function defineRefPropWarningGetter(props, displayName) {
  {
    var warnAboutAccessingRef = function () {
      if (!specialPropRefWarningShown) {
        specialPropRefWarningShown = true;

        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    };

    warnAboutAccessingRef.isReactWarning = true;
    Object.defineProperty(props, 'ref', {
      get: warnAboutAccessingRef,
      configurable: true
    });
  }
}
/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, instanceof check
 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} props
 * @param {*} key
 * @param {string|object} ref
 * @param {*} owner
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @internal
 */


var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,
    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,
    // Record the component responsible for creating this element.
    _owner: owner
  };

  {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.

    Object.defineProperty(element._store, 'validated', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: false
    }); // self and source are DEV only properties.

    Object.defineProperty(element, '_self', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: self
    }); // Two elements created in two different places should be considered
    // equal for testing purposes and therefore we hide it from enumeration.

    Object.defineProperty(element, '_source', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: source
    });

    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};
/**
 * https://github.com/reactjs/rfcs/pull/107
 * @param {*} type
 * @param {object} props
 * @param {string} key
 */

function jsxDEV(type, config, maybeKey, source, self) {
  {
    var propName; // Reserved names are extracted

    var props = {};
    var key = null;
    var ref = null; // Currently, key can be spread in as a prop. This causes a potential
    // issue if key is also explicitly declared (ie. <div {...props} key="Hi" />
    // or <div key="Hi" {...props} /> ). We want to deprecate key spread,
    // but as an intermediary step, we will use jsxDEV for everything except
    // <div {...props} key="Hi" />, because we aren't currently able to tell if
    // key is explicitly declared to be undefined or not.

    if (maybeKey !== undefined) {
      key = '' + maybeKey;
    }

    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    if (hasValidRef(config)) {
      ref = config.ref;
      warnIfStringRefCannotBeAutoConverted(config, self);
    } // Remaining properties are added to a new props object


    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    } // Resolve default props


    if (type && type.defaultProps) {
      var defaultProps = type.defaultProps;

      for (propName in defaultProps) {
        if (props[propName] === undefined) {
          props[propName] = defaultProps[propName];
        }
      }
    }

    if (key || ref) {
      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

      if (key) {
        defineKeyPropWarningGetter(props, displayName);
      }

      if (ref) {
        defineRefPropWarningGetter(props, displayName);
      }
    }

    return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
  }
}

var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement$1(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame$1.setExtraStackFrame(null);
    }
  }
}

var propTypesMisspellWarningShown;

{
  propTypesMisspellWarningShown = false;
}
/**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */

function isValidElement(object) {
  {
    return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
  }
}

function getDeclarationErrorAddendum() {
  {
    if (ReactCurrentOwner$1.current) {
      var name = getComponentName(ReactCurrentOwner$1.current.type);

      if (name) {
        return '\n\nCheck the render method of `' + name + '`.';
      }
    }

    return '';
  }
}

function getSourceInfoErrorAddendum(source) {
  {
    if (source !== undefined) {
      var fileName = source.fileName.replace(/^.*[\\\/]/, '');
      var lineNumber = source.lineNumber;
      return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
    }

    return '';
  }
}
/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */


var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  {
    var info = getDeclarationErrorAddendum();

    if (!info) {
      var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

      if (parentName) {
        info = "\n\nCheck the top-level render call using <" + parentName + ">.";
      }
    }

    return info;
  }
}
/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */


function validateExplicitKey(element, parentType) {
  {
    if (!element._store || element._store.validated || element.key != null) {
      return;
    }

    element._store.validated = true;
    var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

    if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
      return;
    }

    ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
    // property, it may be the creator of the child that's responsible for
    // assigning it a key.

    var childOwner = '';

    if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) {
      // Give the component that originally created this child.
      childOwner = " It was passed a child from " + getComponentName(element._owner.type) + ".";
    }

    setCurrentlyValidatingElement$1(element);

    error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);

    setCurrentlyValidatingElement$1(null);
  }
}
/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */


function validateChildKeys(node, parentType) {
  {
    if (typeof node !== 'object') {
      return;
    }

    if (Array.isArray(node)) {
      for (var i = 0; i < node.length; i++) {
        var child = node[i];

        if (isValidElement(child)) {
          validateExplicitKey(child, parentType);
        }
      }
    } else if (isValidElement(node)) {
      // This element was passed in a valid location.
      if (node._store) {
        node._store.validated = true;
      }
    } else if (node) {
      var iteratorFn = getIteratorFn(node);

      if (typeof iteratorFn === 'function') {
        // Entry iterators used to provide implicit keys,
        // but now we print a separate warning for them later.
        if (iteratorFn !== node.entries) {
          var iterator = iteratorFn.call(node);
          var step;

          while (!(step = iterator.next()).done) {
            if (isValidElement(step.value)) {
              validateExplicitKey(step.value, parentType);
            }
          }
        }
      }
    }
  }
}
/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */


function validatePropTypes(element) {
  {
    var type = element.type;

    if (type === null || type === undefined || typeof type === 'string') {
      return;
    }

    var propTypes;

    if (typeof type === 'function') {
      propTypes = type.propTypes;
    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
    // Inner props are checked in the reconciler.
    type.$$typeof === REACT_MEMO_TYPE)) {
      propTypes = type.propTypes;
    } else {
      return;
    }

    if (propTypes) {
      // Intentionally inside to avoid triggering lazy initializers:
      var name = getComponentName(type);
      checkPropTypes(propTypes, element.props, 'prop', name, element);
    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
      propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:

      var _name = getComponentName(type);

      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
    }

    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
    }
  }
}
/**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */


function validateFragmentProps(fragment) {
  {
    var keys = Object.keys(fragment.props);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];

      if (key !== 'children' && key !== 'key') {
        setCurrentlyValidatingElement$1(fragment);

        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);

        setCurrentlyValidatingElement$1(null);
        break;
      }
    }

    if (fragment.ref !== null) {
      setCurrentlyValidatingElement$1(fragment);

      error('Invalid attribute `ref` supplied to `React.Fragment`.');

      setCurrentlyValidatingElement$1(null);
    }
  }
}

function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
  {
    var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
    // succeed and there will likely be errors in render.

    if (!validType) {
      var info = '';

      if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
        info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
      }

      var sourceInfo = getSourceInfoErrorAddendum(source);

      if (sourceInfo) {
        info += sourceInfo;
      } else {
        info += getDeclarationErrorAddendum();
      }

      var typeString;

      if (type === null) {
        typeString = 'null';
      } else if (Array.isArray(type)) {
        typeString = 'array';
      } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
        typeString = "<" + (getComponentName(type.type) || 'Unknown') + " />";
        info = ' Did you accidentally export a JSX literal instead of a component?';
      } else {
        typeString = typeof type;
      }

      error('React.jsx: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
    }

    var element = jsxDEV(type, props, key, source, self); // The result can be nullish if a mock or a custom function is used.
    // TODO: Drop this when these are no longer allowed as the type argument.

    if (element == null) {
      return element;
    } // Skip key warning if the type isn't valid since our key validation logic
    // doesn't expect a non-string/function type and can throw confusing errors.
    // We don't want exception behavior to differ between dev and prod.
    // (Rendering will throw with a helpful message and as soon as the type is
    // fixed, the key warnings will appear.)


    if (validType) {
      var children = props.children;

      if (children !== undefined) {
        if (isStaticChildren) {
          if (Array.isArray(children)) {
            for (var i = 0; i < children.length; i++) {
              validateChildKeys(children[i], type);
            }

            if (Object.freeze) {
              Object.freeze(children);
            }
          } else {
            error('React.jsx: Static children should always be an array. ' + 'You are likely explicitly calling React.jsxs or React.jsxDEV. ' + 'Use the Babel transform instead.');
          }
        } else {
          validateChildKeys(children, type);
        }
      }
    }

    if (type === exports.Fragment) {
      validateFragmentProps(element);
    } else {
      validatePropTypes(element);
    }

    return element;
  }
} // These two functions exist to still get child warnings in dev
// even with the prod transform. This means that jsxDEV is purely
// opt-in behavior for better messages but that we won't stop
// giving you warnings if you use production apis.

function jsxWithValidationStatic(type, props, key) {
  {
    return jsxWithValidation(type, props, key, true);
  }
}
function jsxWithValidationDynamic(type, props, key) {
  {
    return jsxWithValidation(type, props, key, false);
  }
}

var jsx =  jsxWithValidationDynamic ; // we may want to special case jsxs internally to take advantage of static children.
// for now we can ship identical prod functions

var jsxs =  jsxWithValidationStatic ;

exports.jsx = jsx;
exports.jsxs = jsxs;
  })();
}
}(reactJsxRuntime_development));

if (process.env.NODE_ENV === 'production') {
  jsxRuntime.exports = reactJsxRuntime_production_min;
} else {
  jsxRuntime.exports = reactJsxRuntime_development;
}

// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
var getRandomValues;
var rnds8 = new Uint8Array(16);
function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation. Also,
    // find the complete implementation of crypto (msCrypto) on IE11.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== 'undefined' && typeof msCrypto.getRandomValues === 'function' && msCrypto.getRandomValues.bind(msCrypto);

    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }

  return getRandomValues(rnds8);
}

var REGEX = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;

function validate(uuid) {
  return typeof uuid === 'string' && REGEX.test(uuid);
}

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

var byteToHex = [];

for (var i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).substr(1));
}

function stringify(arr) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!validate(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

function v4(options, buf, offset) {
  options = options || {};
  var rnds = options.random || (options.rng || rng)(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (var i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return stringify(rnds);
}

var pipe = function (arg) {
    var fns = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        fns[_i - 1] = arguments[_i];
    }
    return fns.reduce(function (acc, fn) { return fn(acc); }, arg);
};
var arrayToObject = function (arr) {
    return arr.reduce(function (acc, curr) { return (__assign$1(__assign$1({}, acc), curr)); }, {});
};
var range = function (n) { return __spreadArray([], __read(new Array(n).keys()), false); };
var daysInMonth = function (year, month) {
    return new Date(year, month + 1, 0).getDate();
};
var getWeekday = function (year, month, day) {
    return new Date(year, month, day).toLocaleDateString("default", {
        weekday: "short",
    });
};

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$3 = ".input-component-wrapper {\n  border: 1px solid black;\n  padding: 10px;\n  border-radius: 3px;\n  background-color: white;\n  box-sizing: border-box;\n  height: 40px;\n  display: flex;\n}\n.input-component-wrapper .input-component {\n  border: none;\n  height: 100%;\n  outline: none;\n  font-size: 15px;\n  width: 100%;\n}";
styleInject(css_248z$3);

var Input = function (props) {
    var _a = __read(React.useState(""), 2), value = _a[0], setValue = _a[1];
    React.useEffect(function () {
        if (props.value)
            setValue(props.value);
    }, []);
    var handleContent = function (event) {
        var content = event.target.value;
        setValue(content);
        if (props.onChange)
            props.onChange(content);
    };
    return (jsxRuntime.exports.jsx("div", __assign$1({ className: "input-component-wrapper" }, { children: jsxRuntime.exports.jsx("input", { type: "text", className: "input-component", value: value, placeholder: props === null || props === void 0 ? void 0 : props.placeholder, onChange: handleContent }) })));
};

var DefaultContext = {
  color: undefined,
  size: undefined,
  className: undefined,
  style: undefined,
  attr: undefined
};
var IconContext = React__default["default"].createContext && React__default["default"].createContext(DefaultContext);

var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

var __rest = undefined && undefined.__rest || function (s, e) {
  var t = {};

  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

function Tree2Element(tree) {
  return tree && tree.map(function (node, i) {
    return React__default["default"].createElement(node.tag, __assign({
      key: i
    }, node.attr), Tree2Element(node.child));
  });
}

function GenIcon(data) {
  return function (props) {
    return React__default["default"].createElement(IconBase, __assign({
      attr: __assign({}, data.attr)
    }, props), Tree2Element(data.child));
  };
}
function IconBase(props) {
  var elem = function (conf) {
    var attr = props.attr,
        size = props.size,
        title = props.title,
        svgProps = __rest(props, ["attr", "size", "title"]);

    var computedSize = size || conf.size || "1em";
    var className;
    if (conf.className) className = conf.className;
    if (props.className) className = (className ? className + ' ' : '') + props.className;
    return React__default["default"].createElement("svg", __assign({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, conf.attr, attr, svgProps, {
      className: className,
      style: __assign(__assign({
        color: props.color || conf.color
      }, conf.style), props.style),
      height: computedSize,
      width: computedSize,
      xmlns: "http://www.w3.org/2000/svg"
    }), title && React__default["default"].createElement("title", null, title), props.children);
  };

  return IconContext !== undefined ? React__default["default"].createElement(IconContext.Consumer, null, function (conf) {
    return elem(conf);
  }) : elem(DefaultContext);
}

// THIS FILE IS AUTO GENERATED
function MdArrowDropDown (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M7 10l5 5 5-5z"}}]})(props);
}function MdArrowDropUp (props) {
  return GenIcon({"tag":"svg","attr":{"viewBox":"0 0 24 24"},"child":[{"tag":"path","attr":{"fill":"none","d":"M0 0h24v24H0z"}},{"tag":"path","attr":{"d":"M7 14l5-5 5 5z"}}]})(props);
}

var css_248z$2 = ".select-component-wrapper {\n  background-color: red;\n}\n.select-component-wrapper .select-input {\n  border: 1px solid black;\n  padding: 10px;\n  border-radius: 3px;\n  background-color: white;\n  box-sizing: border-box;\n  height: 40px;\n  display: grid;\n  grid-template-columns: 1fr auto;\n  position: relative;\n  align-items: center;\n  justify-content: center;\n  padding: 0;\n}\n.select-component-wrapper .select-input:hover {\n  cursor: pointer;\n}\n.select-component-wrapper .select-input .select-content {\n  width: 100%;\n  flex-grow: 1;\n  padding-left: 10px;\n}\n.select-component-wrapper .select-input .arrow-icon {\n  font-size: 25px;\n}\n.select-component-wrapper .options-wrapper {\n  display: relative;\n  width: 100%;\n}\n.select-component-wrapper .options-wrapper .select-options {\n  position: absolute;\n  background-color: white;\n  box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 5px -3px, rgba(0, 0, 0, 0.14) 0px 8px 10px 1px, rgba(0, 0, 0, 0.12) 0px 3px 14px 2px;\n  z-index: 999;\n}\n.select-component-wrapper .options-wrapper .select-options .option {\n  padding: 10px;\n}\n.select-component-wrapper .options-wrapper .select-options .option:hover {\n  background-color: #eaeaea;\n  cursor: pointer;\n}\n.select-component-wrapper .options-wrapper .select-options .option.empty-message {\n  display: flex;\n  justify-content: center;\n}\n.select-component-wrapper .options-wrapper .select-options .option.empty-message:hover {\n  background-color: transparent;\n}";
styleInject(css_248z$2);

function Select(props) {
    var _a = __read(React.useState(), 2), content = _a[0], setContent = _a[1];
    var _b = __read(React.useState(""), 2), contentDisplay = _b[0], setContentDisplay = _b[1];
    var _c = __read(React.useState(false), 2), isOpened = _c[0], setIsOpened = _c[1];
    React.useEffect(function () {
        if (content)
            setContentDisplay(content.label);
        if (props.onChange)
            props.onChange(content === null || content === void 0 ? void 0 : content.value);
    }, [content]);
    React.useEffect(function () {
        var selectedOption = props.options.find(function (i) { return i.value === props.value; });
        setContent(selectedOption);
    }, [props.value]);
    var optionsWrapperRef = React.createRef();
    var optionsRef = React.createRef();
    React.useEffect(function () {
        var wrapperWidth = optionsWrapperRef.current
            .offsetWidth;
        var options = optionsRef.current;
        if (options) {
            options.style.width = "".concat(wrapperWidth, "px");
        }
    }, [optionsWrapperRef, optionsRef]);
    var handleClick = function (event) {
        var _a;
        if (optionsRef) {
            var isRelated = (_a = optionsRef.current) === null || _a === void 0 ? void 0 : _a.contains(event.target);
            if (!isRelated)
                setIsOpened(!isOpened);
        }
    };
    var handleBlur = function (event) {
        if (event.relatedTarget !== optionsRef.current) {
            setIsOpened(false);
        }
    };
    var handleChange = function (option) {
        setContent(option);
        setIsOpened(false);
    };
    var options = props.options || [];
    var Options = options.map(function (option) {
        return (jsxRuntime.exports.jsx("div", __assign$1({ className: "option", onClick: function () { return handleChange(option); } }, { children: jsxRuntime.exports.jsx("span", { children: option.label }) }), v4()));
    });
    var EmptyMessage = (jsxRuntime.exports.jsx("div", __assign$1({ className: "option empty-message" }, { children: jsxRuntime.exports.jsx("span", { children: "No options " }) })));
    return (jsxRuntime.exports.jsxs("div", __assign$1({ className: "select-component-wrapper", onClick: handleClick, onBlur: handleBlur, tabIndex: 0 }, { children: [jsxRuntime.exports.jsxs("div", __assign$1({ className: "select-input" }, { children: [jsxRuntime.exports.jsx("div", __assign$1({ className: "select-content" }, { children: contentDisplay })), isOpened ? (jsxRuntime.exports.jsx(MdArrowDropUp, { className: "arrow-icon" })) : (jsxRuntime.exports.jsx(MdArrowDropDown, { className: "arrow-icon" }))] })), jsxRuntime.exports.jsx("div", __assign$1({ className: "options-wrapper", ref: optionsWrapperRef }, { children: isOpened && (jsxRuntime.exports.jsx("div", __assign$1({ className: "select-options", ref: optionsRef, tabIndex: 0 }, { children: options.length ? Options : EmptyMessage }))) }))] })));
}

var YearBox = function (props) {
    var _a = __read(React.useState(props.year), 2), year = _a[0], setYear = _a[1];
    var _b = __read(React.useState(false), 2), edit = _b[0], setEdit = _b[1];
    var handlePress = function (event) {
        if (event.key === "Enter") {
            props.setYear(year);
            setEdit(false);
        }
    };
    var handleChange = function (event) {
        setYear(Number(event.target.value));
    };
    return (jsxRuntime.exports.jsxs("div", __assign$1({ className: "calendar-header" }, { children: [jsxRuntime.exports.jsx("input", { type: "button", value: "<", onClick: props.goPrevious, className: "calendar-arrow" }), edit ? (jsxRuntime.exports.jsx("input", { className: "edit-year-input", onKeyDown: handlePress, onChange: handleChange, value: year })) : (jsxRuntime.exports.jsx("span", __assign$1({ onClick: function () { return setEdit(true); } }, { children: props.year }))), jsxRuntime.exports.jsx("input", { type: "button", value: ">", onClick: props.goNext, className: "calendar-arrow" })] })));
};

var Month = function (props) {
    var monthName = new Date(props.year, props.month).toLocaleDateString("default", {
        month: "long",
    });
    return (jsxRuntime.exports.jsxs("div", __assign$1({ className: "calendar-month" }, { children: [jsxRuntime.exports.jsx("input", { type: "button", value: "<", onClick: props.goPrevious, className: "calendar-arrow" }), jsxRuntime.exports.jsx("span", __assign$1({ className: "month-name" }, { children: monthName })), jsxRuntime.exports.jsx("input", { type: "button", value: ">", onClick: props.goNext, className: "calendar-arrow" })] })));
};

var Day = function (props) {
    var weekdaysArray = range(7).map(function (count) {
        return getWeekday(2022, 2, 6 + count);
    });
    var WeekDays = weekdaysArray.map(function (i) { return jsxRuntime.exports.jsx("span", { children: i }, i); });
    var generateDaysArray = function () {
        var monthLength = daysInMonth(props.year, props.month);
        var firstWeekday = getWeekday(props.year, props.month, 1);
        var firstWeekdayIndex = weekdaysArray.indexOf(firstWeekday);
        var daysArray = range(6).map(function (_) { return range(7); });
        var firstWeekLength = 7 - firstWeekdayIndex;
        var parsedDaysArray = daysArray.map(function (weekArr, index) {
            if (index === 0) {
                return weekArr.map(function (_day, dayIndex) {
                    return dayIndex >= firstWeekdayIndex
                        ? dayIndex - firstWeekdayIndex + 1
                        : null;
                });
            }
            return weekArr.map(function (day) {
                var currentDay = firstWeekLength + 1 + day + (index - 1) * 7;
                return currentDay < monthLength + 1 ? currentDay : null;
            });
        });
        return parsedDaysArray;
    };
    var Days = generateDaysArray().map(function (weekArr, index) { return (jsxRuntime.exports.jsx("div", __assign$1({ className: "calendar-week" }, { children: jsxRuntime.exports.jsx(jsxRuntime.exports.Fragment, { children: weekArr.map(function (day, i) { return (jsxRuntime.exports.jsx("div", __assign$1({ className: day === props.day ? "selected" : "", onClick: function () { return day && props.setDay(day); } }, { children: jsxRuntime.exports.jsx("span", { children: day || "" }) }), "day-".concat(i, "-").concat(day))); }) }) }), index)); });
    return (jsxRuntime.exports.jsxs("div", __assign$1({ className: "calendar-days" }, { children: [jsxRuntime.exports.jsx("div", __assign$1({ className: "weekdays" }, { children: WeekDays })), Days] })));
};

var DateComponent = function (props) {
    var year = props.year, month = props.month, day = props.day, setMonth = props.setMonth, setYear = props.setYear, setDay = props.setDay;
    React.useEffect(function () {
        var monthString = "0".concat(month + 1).split("").slice(-2).join("");
        var dayString = "0".concat(day).split("").slice(-2).join("");
        var dateString = "".concat(year, "/").concat(monthString, "/").concat(dayString);
        props.setInput(dateString);
    }, [props]);
    var changeMonth = function (count) { return function () {
        if (count < 0) {
            if (month > 0)
                setMonth(month + count);
            if (month === 0) {
                setYear(year - 1);
                setMonth(11);
            }
        }
        if (count > 0) {
            if (month < 11)
                setMonth(month + count);
            if (month === 11) {
                setYear(year + 1);
                setMonth(0);
            }
        }
    }; };
    var handleSetDay = function (d) {
        setDay(d);
    };
    return (jsxRuntime.exports.jsxs("div", __assign$1({ className: "calendar-wrapper", tabIndex: 0, onBlur: props.handleBlur }, { children: [jsxRuntime.exports.jsx(YearBox, { year: year, setYear: setYear, goPrevious: function () { return setYear(year - 1); }, goNext: function () { return setYear(year + 1); } }), jsxRuntime.exports.jsx(Month, { year: year, month: month, goPrevious: changeMonth(-1), goNext: changeMonth(1) }), jsxRuntime.exports.jsx(Day, { year: year, month: month, day: day, setDay: handleSetDay })] })));
};

var css_248z$1 = ".date-component-wrapper {\n  border: 1px solid black;\n  padding: 10px;\n  border-radius: 3px;\n  background-color: white;\n  box-sizing: border-box;\n  height: 40px;\n  position: relative;\n}\n.date-component-wrapper .input-component {\n  border: none;\n  height: 100%;\n  outline: none;\n  font-size: 15px;\n  width: 100%;\n}\n.date-component-wrapper .calendar-wrapper {\n  left: 0;\n  top: 40px;\n  width: 400px;\n  height: 400px;\n  border: 1px solid black;\n  border-radius: 4px;\n  position: absolute;\n  background-color: white;\n  display: flex;\n  flex-direction: column;\n}\n.date-component-wrapper .calendar-wrapper .calendar-arrow {\n  border: none;\n  background-color: transparent;\n  font-weight: bold;\n}\n.date-component-wrapper .calendar-wrapper .calendar-arrow:hover {\n  cursor: pointer;\n}\n.date-component-wrapper .calendar-wrapper .calendar-header {\n  border-bottom: 1px solid black;\n  padding: 10px;\n  display: flex;\n  justify-content: space-between;\n}\n.date-component-wrapper .calendar-wrapper .calendar-header .edit-year-input {\n  width: 50px;\n}\n.date-component-wrapper .calendar-wrapper .calendar-month {\n  padding: 20px 10px;\n  display: flex;\n  justify-content: space-between;\n}\n.date-component-wrapper .calendar-wrapper .calendar-month .month-name {\n  font-size: 25px;\n  text-transform: uppercase;\n}\n.date-component-wrapper .calendar-wrapper .calendar-days {\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n}\n.date-component-wrapper .calendar-wrapper .calendar-days .weekdays,\n.date-component-wrapper .calendar-wrapper .calendar-days .calendar-week {\n  display: grid;\n  grid-template-columns: repeat(7, 14%);\n  padding-left: 1%;\n  padding-right: 1%;\n  justify-items: center;\n}\n.date-component-wrapper .calendar-wrapper .calendar-days .weekdays > div:hover,\n.date-component-wrapper .calendar-wrapper .calendar-days .calendar-week > div:hover {\n  cursor: pointer;\n}\n.date-component-wrapper .calendar-wrapper .calendar-days .weekdays .selected,\n.date-component-wrapper .calendar-wrapper .calendar-days .calendar-week .selected {\n  color: white;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.date-component-wrapper .calendar-wrapper .calendar-days .weekdays .selected span,\n.date-component-wrapper .calendar-wrapper .calendar-days .calendar-week .selected span {\n  height: 25px;\n  width: 25px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: black;\n  border-radius: 50%;\n}\n.date-component-wrapper .calendar-wrapper .calendar-days .calendar-week {\n  height: 16.6666666667%;\n}\n.date-component-wrapper .calendar-wrapper .calendar-days .calendar-week div {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  width: 100%;\n}";
styleInject(css_248z$1);

var DatePicker = function (props) {
    var _a = __read(React.useState(""), 2), value = _a[0], setValue = _a[1];
    var _b = __read(React.useState(false), 2), showCalendar = _b[0], setShowCalendar = _b[1];
    var _c = __read(React.useState(Number(new Date().getFullYear())), 2), year = _c[0], setYear = _c[1];
    var _d = __read(React.useState(Number(new Date().getMonth())), 2), month = _d[0], setMonth = _d[1];
    var _e = __read(React.useState(Number(new Date().getDate())), 2), day = _e[0], setDay = _e[1];
    var handleContent = function (event) { return setValue(event.currentTarget.value); };
    var parseString = function (v) {
        var _a = __read(v.split(/[\/\-]/).map(function (i) { return Number(i); }), 3), y = _a[0], m = _a[1], d = _a[2];
        if (m >= 1 && m <= 12 && d >= 1 && d <= 31) {
            setYear(y);
            setMonth(m - 1);
            setDay(d);
            return v.split(/[\/\-]/).join("/");
        }
        else {
            setValue("");
            return "";
        }
    };
    React.useEffect(function () {
        if (props.value) {
            setValue(props.value);
            var value_1 = parseString(props.value);
            setValue(value_1);
        }
    }, []);
    React.useEffect(function () {
        if (props.onChange) {
            props.onChange(value);
        }
    }, [value]);
    var handleBlur = function (event) {
        if (!event.relatedTarget) {
            setShowCalendar(false);
        }
    };
    var handlePress = function (event) {
        if (event.key === "Enter") {
            parseString(value);
        }
    };
    return (jsxRuntime.exports.jsxs("div", __assign$1({ className: "date-component-wrapper" }, { children: [jsxRuntime.exports.jsx("input", { type: "text", className: "input-component", value: value, onChange: handleContent, onFocus: function () { return setShowCalendar(true); }, onBlur: handleBlur, onKeyDown: handlePress }), showCalendar && (jsxRuntime.exports.jsx(DateComponent, { handleBlur: handleBlur, setInput: setValue, year: year, month: month, day: day, setYear: setYear, setMonth: setMonth, setDay: setDay }))] })));
};

var inputsOptionsDefault = {
    input: Input,
    select: Select,
    datePicker: DatePicker,
};

var inferType = function (typeValue, collection) {
    return collection[typeValue];
};

var ValidationType;
(function (ValidationType) {
    ValidationType["EMAIL"] = "email";
    ValidationType["PASSWORD"] = "password";
})(ValidationType || (ValidationType = {}));

var errorMessages = {
    required: "Field required",
    email: "Must be a valid email",
    password: "Password must have between 8 and 12 characters, an uppercase letter, a lowercase letter, a special character and a number ",
};

var getDefaultResult = function () { return ({ error: false, message: "" }); };
var required = function (item) {
    var _a;
    if ((_a = item.config.validation) === null || _a === void 0 ? void 0 : _a.required) {
        var state = item.state;
        var hasError = state === undefined || state === null || state === "";
        return {
            item: item,
            result: {
                error: hasError,
                message: hasError ? errorMessages.required : "",
            },
        };
    }
    return { item: item, result: getDefaultResult() };
};
var callback = function (_a) {
    var _b;
    var item = _a.item, result = _a.result;
    if (result.error)
        return { item: item, result: result };
    if ((_b = item.config.validation) === null || _b === void 0 ? void 0 : _b.callback) {
        var state = item.state;
        return {
            item: item,
            result: item.config.validation.callback(state),
        };
    }
    return {
        item: item,
        result: result,
    };
};
var email = function (_a) {
    var _b;
    var item = _a.item, result = _a.result;
    if (result.error)
        return { item: item, result: result };
    var regex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var state = item.state;
    var isValid = regex.test(state);
    if (((_b = item.config.validation) === null || _b === void 0 ? void 0 : _b.type) === ValidationType.EMAIL) {
        return {
            item: item,
            result: {
                error: !isValid,
                message: isValid ? "" : errorMessages.email,
            },
        };
    }
    return {
        item: item,
        result: result,
    };
};
var password = function (_a) {
    var _b;
    var item = _a.item, result = _a.result;
    if (result.error)
        return { item: item, result: result };
    var regex = /((?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])){8,12}/;
    var state = item.state;
    var isValid = regex.test(state);
    if (((_b = item.config.validation) === null || _b === void 0 ? void 0 : _b.type) === ValidationType.PASSWORD) {
        return {
            item: item,
            result: {
                error: !isValid,
                message: isValid ? "" : errorMessages.password,
            },
        };
    }
    return {
        item: item,
        result: result,
    };
};

var validator = function (item) {
    return pipe(item, required, email, password, callback);
};

var InputWrapper = React.forwardRef(function (props, ref) {
    var _a = __read(React.useState(props.formData[props.itemData.name] || ""), 2), value = _a[0], setValue = _a[1];
    var _b = __read(React.useState(""), 2), error = _b[0], setError = _b[1];
    var Component = props.component;
    React.useImperativeHandle(ref, function () { return ({
        getValue: function () { return value; },
        getErrorMessage: function () { return error; },
    }); });
    React.useEffect(function () {
        var message = validator(__assign$1(__assign$1({}, props.itemData), { state: value })).result.message;
        setError(message);
    }, [value]);
    return (jsxRuntime.exports.jsxs("div", __assign$1({ className: "form-input-wrapper" }, { children: [jsxRuntime.exports.jsx(Component, __assign$1({}, props, { value: props.formData[props.itemData.name], onChange: setValue })), jsxRuntime.exports.jsx("div", __assign$1({ className: "error-message" }, { children: jsxRuntime.exports.jsx("span", { children: props.showErrors && error }) }))] })));
});

var css_248z = "span {\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n.form-builder {\n  padding: 20px;\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  box-sizing: border-box;\n  width: 100%;\n}\n.form-builder__title-wrapper {\n  padding: 20px 0;\n}\n.form-builder__title-wrapper .form-builder__title {\n  display: flex;\n  justify-content: center;\n  font-size: 30px;\n}\n.form-builder__items {\n  column-gap: 10px;\n  display: grid;\n  grid-template-columns: repeat(12, 1fr);\n  background-color: white;\n  box-sizing: border-box;\n}\n.form-builder__items .form_builder__item {\n  display: flex;\n  flex-direction: column;\n}\n.form-builder__items .form_builder__item + .form_builder__item {\n  margin-top: 20px;\n}\n.form-builder__items .form_builder__item + .form_builder__item[class*=\" col-\"] {\n  margin-top: 0;\n}\n.form-builder__items .form_builder__item-label {\n  margin-top: 5px;\n  margin-bottom: 5px;\n}\n.form-builder__items .form_builder__item.col-1 {\n  grid-column: span 1;\n}\n.form-builder__items .form_builder__item.col-2 {\n  grid-column: span 2;\n}\n.form-builder__items .form_builder__item.col-3 {\n  grid-column: span 3;\n}\n.form-builder__items .form_builder__item.col-4 {\n  grid-column: span 4;\n}\n.form-builder__items .form_builder__item.col-5 {\n  grid-column: span 5;\n}\n.form-builder__items .form_builder__item.col-6 {\n  grid-column: span 6;\n}\n.form-builder__items .form_builder__item.col-7 {\n  grid-column: span 7;\n}\n.form-builder__items .form_builder__item.col-8 {\n  grid-column: span 8;\n}\n.form-builder__items .form_builder__item.col-9 {\n  grid-column: span 9;\n}\n.form-builder__items .form_builder__item.col-10 {\n  grid-column: span 10;\n}\n.form-builder__items .form_builder__item.col-11 {\n  grid-column: span 11;\n}\n.form-builder__items .form_builder__item.col-12 {\n  grid-column: span 12;\n}\n.form-builder .form-builder__buttons {\n  padding: 20px 0;\n  display: flex;\n  justify-content: center;\n}\n.form-builder .form-builder__buttons .form-builder__button {\n  width: 80px;\n  height: 40px;\n  background-color: white;\n  border-radius: 3px;\n  border: 1px solid black;\n}\n.form-builder .form-builder__buttons .form-builder__button + .form-builder__button {\n  margin-left: 40px;\n}\n.form-builder .form-builder__buttons .form-builder__button:active {\n  background-color: rgba(0, 0, 0, 0.5);\n}\n.form-builder .form-builder__buttons .form-builder__button:hover {\n  cursor: pointer;\n}\n\n.form-input-wrapper .error-message {\n  color: #b33030;\n  font-size: 12px;\n  height: 25px;\n  display: flex;\n  align-items: center;\n}";
styleInject(css_248z);

var FormBuilder = function (props) {
    var _a = __read(React.useState(true), 1), showErrors = _a[0];
    var inputsOptions = props.inputsOptions
        ? __assign$1(__assign$1({}, inputsOptionsDefault), props.inputsOptions) : inputsOptionsDefault;
    var _b = __read(React.useState({}), 2), payload = _b[0], setPayload = _b[1];
    React.useEffect(function () {
        if (props.formContent)
            setPayload(props.formContent);
    }, []);
    var InputsData = props.config.map(function (item) {
        var _a, _b;
        var Component = inferType(item.config.inputType, inputsOptions);
        var colStyle = ((_a = item.config.style) === null || _a === void 0 ? void 0 : _a.cols)
            ? "col-".concat((_b = item.config.style) === null || _b === void 0 ? void 0 : _b.cols)
            : "col-12";
        var ref = React.createRef();
        var component = (jsxRuntime.exports.jsxs("div", __assign$1({ className: "form_builder__item ".concat(colStyle) }, { children: [jsxRuntime.exports.jsx("div", __assign$1({ className: "form_builder__item-label" }, { children: jsxRuntime.exports.jsx("span", { children: item.label }) })), jsxRuntime.exports.jsx(InputWrapper, __assign$1({ component: Component, itemData: item, showErrors: showErrors, formData: payload, ref: ref }, item.config.props))] }), v4()));
        return { component: component, ref: ref, name: item.name };
    });
    var Inputs = InputsData.map(function (i) { return i.component; });
    var onClickSubmit = function () {
        var data = InputsData.map(function (i) {
            var _a;
            var _b;
            return (_a = {},
                _a[i.name] = (_b = i.ref.current) === null || _b === void 0 ? void 0 : _b.getValue(),
                _a);
        });
        var errors = InputsData.map(function (i) { var _a; return (_a = i.ref.current) === null || _a === void 0 ? void 0 : _a.getErrorMessage(); });
        var isFormValid = Object.values(errors).every(function (i) { return !i; });
        if (isFormValid) {
            if (props.onValid) {
                props.onValid(arrayToObject(data));
                setPayload(arrayToObject(data));
            }
        }
        else {
            if (props.onInvalid)
                props.onInvalid(arrayToObject(data));
        }
    };
    var clearForm = function () {
        var clearedPayload = Object.keys(payload).map(function (k) { return [k, ""]; });
        setPayload(Object.fromEntries(clearedPayload));
    };
    var Buttons = (jsxRuntime.exports.jsxs("div", __assign$1({ className: "form-builder__buttons" }, { children: [jsxRuntime.exports.jsx("button", __assign$1({ className: "form-builder__button", onClick: onClickSubmit }, { children: "SUBMIT" })), jsxRuntime.exports.jsx("button", __assign$1({ className: "form-builder__button", onClick: clearForm }, { children: "CLEAR" }))] })));
    return (jsxRuntime.exports.jsxs("div", __assign$1({ className: "form-builder" }, { children: [jsxRuntime.exports.jsx("div", __assign$1({ className: "form-builder__title-wrapper" }, { children: jsxRuntime.exports.jsx("span", __assign$1({ className: "form-builder__title" }, { children: props.title })) })), jsxRuntime.exports.jsx("div", __assign$1({ className: "form-builder__items" }, { children: Inputs })), (props.submitButton && props.submitButton(onClickSubmit)) || Buttons] })));
};

var configForm = function (inputsOptions) { return function (formConfig) {
    return FormBuilder(__assign$1(__assign$1({}, inputsOptions), formConfig));
}; };

exports.FormBuilder = configForm;
exports["default"] = configForm;
