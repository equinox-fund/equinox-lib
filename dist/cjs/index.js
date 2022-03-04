'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _mergeNamespaces(n, m) {
	m.forEach(function (e) {
		e && typeof e !== 'string' && !Array.isArray(e) && Object.keys(e).forEach(function (k) {
			if (k !== 'default' && !(k in n)) {
				var d = Object.getOwnPropertyDescriptor(e, k);
				Object.defineProperty(n, k, d.get ? d : {
					enumerable: true,
					get: function () { return e[k]; }
				});
			}
		});
	});
	return Object.freeze(n);
}

var react = {exports: {}};

var react_production_min = {};

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/* eslint-disable no-unused-vars */


var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty$1 = Object.prototype.hasOwnProperty;
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
      if (hasOwnProperty$1.call(from, key)) {
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
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var l$1 = objectAssign,
    n$1 = 60103,
    p$1 = 60106;
react_production_min.Fragment = 60107;
react_production_min.StrictMode = 60108;
react_production_min.Profiler = 60114;
var q$1 = 60109,
    r$1 = 60110,
    t$1 = 60112;
react_production_min.Suspense = 60113;
var u = 60115,
    v$1 = 60116;

if ("function" === typeof Symbol && Symbol.for) {
  var w$1 = Symbol.for;
  n$1 = w$1("react.element");
  p$1 = w$1("react.portal");
  react_production_min.Fragment = w$1("react.fragment");
  react_production_min.StrictMode = w$1("react.strict_mode");
  react_production_min.Profiler = w$1("react.profiler");
  q$1 = w$1("react.provider");
  r$1 = w$1("react.context");
  t$1 = w$1("react.forward_ref");
  react_production_min.Suspense = w$1("react.suspense");
  u = w$1("react.memo");
  v$1 = w$1("react.lazy");
}

var x$1 = "function" === typeof Symbol && Symbol.iterator;

function y$1(a) {
  if (null === a || "object" !== typeof a) return null;
  a = x$1 && a[x$1] || a["@@iterator"];
  return "function" === typeof a ? a : null;
}

function z$1(a) {
  for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++) b += "&args[]=" + encodeURIComponent(arguments[c]);

  return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}

var A$1 = {
  isMounted: function () {
    return !1;
  },
  enqueueForceUpdate: function () {},
  enqueueReplaceState: function () {},
  enqueueSetState: function () {}
},
    B = {};

function C(a, b, c) {
  this.props = a;
  this.context = b;
  this.refs = B;
  this.updater = c || A$1;
}

C.prototype.isReactComponent = {};

C.prototype.setState = function (a, b) {
  if ("object" !== typeof a && "function" !== typeof a && null != a) throw Error(z$1(85));
  this.updater.enqueueSetState(this, a, b, "setState");
};

C.prototype.forceUpdate = function (a) {
  this.updater.enqueueForceUpdate(this, a, "forceUpdate");
};

function D() {}

D.prototype = C.prototype;

function E(a, b, c) {
  this.props = a;
  this.context = b;
  this.refs = B;
  this.updater = c || A$1;
}

var F = E.prototype = new D();
F.constructor = E;
l$1(F, C.prototype);
F.isPureReactComponent = !0;
var G = {
  current: null
},
    H = Object.prototype.hasOwnProperty,
    I = {
  key: !0,
  ref: !0,
  __self: !0,
  __source: !0
};

function J(a, b, c) {
  var e,
      d = {},
      k = null,
      h = null;
  if (null != b) for (e in void 0 !== b.ref && (h = b.ref), void 0 !== b.key && (k = "" + b.key), b) H.call(b, e) && !I.hasOwnProperty(e) && (d[e] = b[e]);
  var g = arguments.length - 2;
  if (1 === g) d.children = c;else if (1 < g) {
    for (var f = Array(g), m = 0; m < g; m++) f[m] = arguments[m + 2];

    d.children = f;
  }
  if (a && a.defaultProps) for (e in g = a.defaultProps, g) void 0 === d[e] && (d[e] = g[e]);
  return {
    $$typeof: n$1,
    type: a,
    key: k,
    ref: h,
    props: d,
    _owner: G.current
  };
}

function K(a, b) {
  return {
    $$typeof: n$1,
    type: a.type,
    key: b,
    ref: a.ref,
    props: a.props,
    _owner: a._owner
  };
}

function L(a) {
  return "object" === typeof a && null !== a && a.$$typeof === n$1;
}

function escape(a) {
  var b = {
    "=": "=0",
    ":": "=2"
  };
  return "$" + a.replace(/[=:]/g, function (a) {
    return b[a];
  });
}

var M = /\/+/g;

function N(a, b) {
  return "object" === typeof a && null !== a && null != a.key ? escape("" + a.key) : b.toString(36);
}

function O(a, b, c, e, d) {
  var k = typeof a;
  if ("undefined" === k || "boolean" === k) a = null;
  var h = !1;
  if (null === a) h = !0;else switch (k) {
    case "string":
    case "number":
      h = !0;
      break;

    case "object":
      switch (a.$$typeof) {
        case n$1:
        case p$1:
          h = !0;
      }

  }
  if (h) return h = a, d = d(h), a = "" === e ? "." + N(h, 0) : e, Array.isArray(d) ? (c = "", null != a && (c = a.replace(M, "$&/") + "/"), O(d, b, c, "", function (a) {
    return a;
  })) : null != d && (L(d) && (d = K(d, c + (!d.key || h && h.key === d.key ? "" : ("" + d.key).replace(M, "$&/") + "/") + a)), b.push(d)), 1;
  h = 0;
  e = "" === e ? "." : e + ":";
  if (Array.isArray(a)) for (var g = 0; g < a.length; g++) {
    k = a[g];
    var f = e + N(k, g);
    h += O(k, b, c, f, d);
  } else if (f = y$1(a), "function" === typeof f) for (a = f.call(a), g = 0; !(k = a.next()).done;) k = k.value, f = e + N(k, g++), h += O(k, b, c, f, d);else if ("object" === k) throw b = "" + a, Error(z$1(31, "[object Object]" === b ? "object with keys {" + Object.keys(a).join(", ") + "}" : b));
  return h;
}

function P(a, b, c) {
  if (null == a) return a;
  var e = [],
      d = 0;
  O(a, e, "", "", function (a) {
    return b.call(c, a, d++);
  });
  return e;
}

function Q(a) {
  if (-1 === a._status) {
    var b = a._result;
    b = b();
    a._status = 0;
    a._result = b;
    b.then(function (b) {
      0 === a._status && (b = b.default, a._status = 1, a._result = b);
    }, function (b) {
      0 === a._status && (a._status = 2, a._result = b);
    });
  }

  if (1 === a._status) return a._result;
  throw a._result;
}

var R = {
  current: null
};

function S() {
  var a = R.current;
  if (null === a) throw Error(z$1(321));
  return a;
}

var T = {
  ReactCurrentDispatcher: R,
  ReactCurrentBatchConfig: {
    transition: 0
  },
  ReactCurrentOwner: G,
  IsSomeRendererActing: {
    current: !1
  },
  assign: l$1
};
react_production_min.Children = {
  map: P,
  forEach: function (a, b, c) {
    P(a, function () {
      b.apply(this, arguments);
    }, c);
  },
  count: function (a) {
    var b = 0;
    P(a, function () {
      b++;
    });
    return b;
  },
  toArray: function (a) {
    return P(a, function (a) {
      return a;
    }) || [];
  },
  only: function (a) {
    if (!L(a)) throw Error(z$1(143));
    return a;
  }
};
react_production_min.Component = C;
react_production_min.PureComponent = E;

react_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = T;

react_production_min.cloneElement = function (a, b, c) {
  if (null === a || void 0 === a) throw Error(z$1(267, a));
  var e = l$1({}, a.props),
      d = a.key,
      k = a.ref,
      h = a._owner;

  if (null != b) {
    void 0 !== b.ref && (k = b.ref, h = G.current);
    void 0 !== b.key && (d = "" + b.key);
    if (a.type && a.type.defaultProps) var g = a.type.defaultProps;

    for (f in b) H.call(b, f) && !I.hasOwnProperty(f) && (e[f] = void 0 === b[f] && void 0 !== g ? g[f] : b[f]);
  }

  var f = arguments.length - 2;
  if (1 === f) e.children = c;else if (1 < f) {
    g = Array(f);

    for (var m = 0; m < f; m++) g[m] = arguments[m + 2];

    e.children = g;
  }
  return {
    $$typeof: n$1,
    type: a.type,
    key: d,
    ref: k,
    props: e,
    _owner: h
  };
};

react_production_min.createContext = function (a, b) {
  void 0 === b && (b = null);
  a = {
    $$typeof: r$1,
    _calculateChangedBits: b,
    _currentValue: a,
    _currentValue2: a,
    _threadCount: 0,
    Provider: null,
    Consumer: null
  };
  a.Provider = {
    $$typeof: q$1,
    _context: a
  };
  return a.Consumer = a;
};

react_production_min.createElement = J;

react_production_min.createFactory = function (a) {
  var b = J.bind(null, a);
  b.type = a;
  return b;
};

react_production_min.createRef = function () {
  return {
    current: null
  };
};

react_production_min.forwardRef = function (a) {
  return {
    $$typeof: t$1,
    render: a
  };
};

react_production_min.isValidElement = L;

react_production_min.lazy = function (a) {
  return {
    $$typeof: v$1,
    _payload: {
      _status: -1,
      _result: a
    },
    _init: Q
  };
};

react_production_min.memo = function (a, b) {
  return {
    $$typeof: u,
    type: a,
    compare: void 0 === b ? null : b
  };
};

react_production_min.useCallback = function (a, b) {
  return S().useCallback(a, b);
};

react_production_min.useContext = function (a, b) {
  return S().useContext(a, b);
};

react_production_min.useDebugValue = function () {};

react_production_min.useEffect = function (a, b) {
  return S().useEffect(a, b);
};

react_production_min.useImperativeHandle = function (a, b, c) {
  return S().useImperativeHandle(a, b, c);
};

react_production_min.useLayoutEffect = function (a, b) {
  return S().useLayoutEffect(a, b);
};

react_production_min.useMemo = function (a, b) {
  return S().useMemo(a, b);
};

react_production_min.useReducer = function (a, b, c) {
  return S().useReducer(a, b, c);
};

react_production_min.useRef = function (a) {
  return S().useRef(a);
};

react_production_min.useState = function (a) {
  return S().useState(a);
};

react_production_min.version = "17.0.2";

var react_development = {};

/** @license React v17.0.2
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

(function (exports) {

  if (process.env.NODE_ENV !== "production") {
    (function () {

      var _assign = objectAssign; // TODO: this is special because it gets imported during build.

      var ReactVersion = '17.0.2'; // ATTENTION
      // When adding new symbols to this file,
      // Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
      // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
      // nor polyfill, then a plain number is used for performance.

      var REACT_ELEMENT_TYPE = 0xeac7;
      var REACT_PORTAL_TYPE = 0xeaca;
      exports.Fragment = 0xeacb;
      exports.StrictMode = 0xeacc;
      exports.Profiler = 0xead2;
      var REACT_PROVIDER_TYPE = 0xeacd;
      var REACT_CONTEXT_TYPE = 0xeace;
      var REACT_FORWARD_REF_TYPE = 0xead0;
      exports.Suspense = 0xead1;
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
        exports.StrictMode = symbolFor('react.strict_mode');
        exports.Profiler = symbolFor('react.profiler');
        REACT_PROVIDER_TYPE = symbolFor('react.provider');
        REACT_CONTEXT_TYPE = symbolFor('react.context');
        REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
        exports.Suspense = symbolFor('react.suspense');
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
      /**
       * Keeps track of the current dispatcher.
       */


      var ReactCurrentDispatcher = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      };
      /**
       * Keeps track of the current batch's configuration such as how long an update
       * should suspend for if it needs to.
       */

      var ReactCurrentBatchConfig = {
        transition: 0
      };
      /**
       * Keeps track of the current owner.
       *
       * The current owner is the component who should own any components that are
       * currently being constructed.
       */

      var ReactCurrentOwner = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      };
      var ReactDebugCurrentFrame = {};
      var currentExtraStackFrame = null;

      function setExtraStackFrame(stack) {
        {
          currentExtraStackFrame = stack;
        }
      }

      {
        ReactDebugCurrentFrame.setExtraStackFrame = function (stack) {
          {
            currentExtraStackFrame = stack;
          }
        }; // Stack implementation injected by the current renderer.


        ReactDebugCurrentFrame.getCurrentStack = null;

        ReactDebugCurrentFrame.getStackAddendum = function () {
          var stack = ''; // Add an extra top frame while an element is being validated

          if (currentExtraStackFrame) {
            stack += currentExtraStackFrame;
          } // Delegate to the injected renderer-specific implementation


          var impl = ReactDebugCurrentFrame.getCurrentStack;

          if (impl) {
            stack += impl() || '';
          }

          return stack;
        };
      }
      /**
       * Used by act() to track whether you're inside an act() scope.
       */

      var IsSomeRendererActing = {
        current: false
      };
      var ReactSharedInternals = {
        ReactCurrentDispatcher: ReactCurrentDispatcher,
        ReactCurrentBatchConfig: ReactCurrentBatchConfig,
        ReactCurrentOwner: ReactCurrentOwner,
        IsSomeRendererActing: IsSomeRendererActing,
        // Used by renderers to avoid bundling object-assign twice in UMD bundles:
        assign: _assign
      };
      {
        ReactSharedInternals.ReactDebugCurrentFrame = ReactDebugCurrentFrame;
      } // by calls to these methods by a Babel plugin.
      //
      // In PROD (or in packages without access to React internals),
      // they are left as they are instead.

      function warn(format) {
        {
          for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
          }

          printWarning('warn', format, args);
        }
      }

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

      var didWarnStateUpdateForUnmountedComponent = {};

      function warnNoop(publicInstance, callerName) {
        {
          var _constructor = publicInstance.constructor;
          var componentName = _constructor && (_constructor.displayName || _constructor.name) || 'ReactClass';
          var warningKey = componentName + "." + callerName;

          if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
            return;
          }

          error("Can't call %s on a component that is not yet mounted. " + 'This is a no-op, but it might indicate a bug in your application. ' + 'Instead, assign to `this.state` directly or define a `state = {};` ' + 'class property with the desired state in the %s component.', callerName, componentName);
          didWarnStateUpdateForUnmountedComponent[warningKey] = true;
        }
      }
      /**
       * This is the abstract API for an update queue.
       */


      var ReactNoopUpdateQueue = {
        /**
         * Checks whether or not this composite component is mounted.
         * @param {ReactClass} publicInstance The instance we want to test.
         * @return {boolean} True if mounted, false otherwise.
         * @protected
         * @final
         */
        isMounted: function (publicInstance) {
          return false;
        },

        /**
         * Forces an update. This should only be invoked when it is known with
         * certainty that we are **not** in a DOM transaction.
         *
         * You may want to call this when you know that some deeper aspect of the
         * component's state has changed but `setState` was not called.
         *
         * This will not invoke `shouldComponentUpdate`, but it will invoke
         * `componentWillUpdate` and `componentDidUpdate`.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueForceUpdate: function (publicInstance, callback, callerName) {
          warnNoop(publicInstance, 'forceUpdate');
        },

        /**
         * Replaces all of the state. Always use this or `setState` to mutate state.
         * You should treat `this.state` as immutable.
         *
         * There is no guarantee that `this.state` will be immediately updated, so
         * accessing `this.state` after calling this method may return the old value.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} completeState Next state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueReplaceState: function (publicInstance, completeState, callback, callerName) {
          warnNoop(publicInstance, 'replaceState');
        },

        /**
         * Sets a subset of the state. This only exists because _pendingState is
         * internal. This provides a merging strategy that is not available to deep
         * properties which is confusing. TODO: Expose pendingState or don't use it
         * during the merge.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} partialState Next partial state to be merged with state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} Name of the calling function in the public API.
         * @internal
         */
        enqueueSetState: function (publicInstance, partialState, callback, callerName) {
          warnNoop(publicInstance, 'setState');
        }
      };
      var emptyObject = {};
      {
        Object.freeze(emptyObject);
      }
      /**
       * Base class helpers for the updating state of a component.
       */

      function Component(props, context, updater) {
        this.props = props;
        this.context = context; // If a component has string refs, we will assign a different object later.

        this.refs = emptyObject; // We initialize the default updater but the real one gets injected by the
        // renderer.

        this.updater = updater || ReactNoopUpdateQueue;
      }

      Component.prototype.isReactComponent = {};
      /**
       * Sets a subset of the state. Always use this to mutate
       * state. You should treat `this.state` as immutable.
       *
       * There is no guarantee that `this.state` will be immediately updated, so
       * accessing `this.state` after calling this method may return the old value.
       *
       * There is no guarantee that calls to `setState` will run synchronously,
       * as they may eventually be batched together.  You can provide an optional
       * callback that will be executed when the call to setState is actually
       * completed.
       *
       * When a function is provided to setState, it will be called at some point in
       * the future (not synchronously). It will be called with the up to date
       * component arguments (state, props, context). These values can be different
       * from this.* because your function may be called after receiveProps but before
       * shouldComponentUpdate, and this new state, props, and context will not yet be
       * assigned to this.
       *
       * @param {object|function} partialState Next partial state or function to
       *        produce next partial state to be merged with current state.
       * @param {?function} callback Called after state is updated.
       * @final
       * @protected
       */

      Component.prototype.setState = function (partialState, callback) {
        if (!(typeof partialState === 'object' || typeof partialState === 'function' || partialState == null)) {
          {
            throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
          }
        }

        this.updater.enqueueSetState(this, partialState, callback, 'setState');
      };
      /**
       * Forces an update. This should only be invoked when it is known with
       * certainty that we are **not** in a DOM transaction.
       *
       * You may want to call this when you know that some deeper aspect of the
       * component's state has changed but `setState` was not called.
       *
       * This will not invoke `shouldComponentUpdate`, but it will invoke
       * `componentWillUpdate` and `componentDidUpdate`.
       *
       * @param {?function} callback Called after update is complete.
       * @final
       * @protected
       */


      Component.prototype.forceUpdate = function (callback) {
        this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');
      };
      /**
       * Deprecated APIs. These APIs used to exist on classic React classes but since
       * we would like to deprecate them, we're not going to move them over to this
       * modern base class. Instead, we define a getter that warns if it's accessed.
       */


      {
        var deprecatedAPIs = {
          isMounted: ['isMounted', 'Instead, make sure to clean up subscriptions and pending requests in ' + 'componentWillUnmount to prevent memory leaks.'],
          replaceState: ['replaceState', 'Refactor your code to use setState instead (see ' + 'https://github.com/facebook/react/issues/3236).']
        };

        var defineDeprecationWarning = function (methodName, info) {
          Object.defineProperty(Component.prototype, methodName, {
            get: function () {
              warn('%s(...) is deprecated in plain JavaScript React classes. %s', info[0], info[1]);
              return undefined;
            }
          });
        };

        for (var fnName in deprecatedAPIs) {
          if (deprecatedAPIs.hasOwnProperty(fnName)) {
            defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
          }
        }
      }

      function ComponentDummy() {}

      ComponentDummy.prototype = Component.prototype;
      /**
       * Convenience component with default shallow equality check for sCU.
       */

      function PureComponent(props, context, updater) {
        this.props = props;
        this.context = context; // If a component has string refs, we will assign a different object later.

        this.refs = emptyObject;
        this.updater = updater || ReactNoopUpdateQueue;
      }

      var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
      pureComponentPrototype.constructor = PureComponent; // Avoid an extra prototype jump for these methods.

      _assign(pureComponentPrototype, Component.prototype);

      pureComponentPrototype.isPureReactComponent = true; // an immutable object with a single mutable value

      function createRef() {
        var refObject = {
          current: null
        };
        {
          Object.seal(refObject);
        }
        return refObject;
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

          case exports.Profiler:
            return 'Profiler';

          case exports.StrictMode:
            return 'StrictMode';

          case exports.Suspense:
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

      var hasOwnProperty = Object.prototype.hasOwnProperty;
      var RESERVED_PROPS = {
        key: true,
        ref: true,
        __self: true,
        __source: true
      };
      var specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;
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

      function defineKeyPropWarningGetter(props, displayName) {
        var warnAboutAccessingKey = function () {
          {
            if (!specialPropKeyWarningShown) {
              specialPropKeyWarningShown = true;
              error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
            }
          }
        };

        warnAboutAccessingKey.isReactWarning = true;
        Object.defineProperty(props, 'key', {
          get: warnAboutAccessingKey,
          configurable: true
        });
      }

      function defineRefPropWarningGetter(props, displayName) {
        var warnAboutAccessingRef = function () {
          {
            if (!specialPropRefWarningShown) {
              specialPropRefWarningShown = true;
              error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
            }
          }
        };

        warnAboutAccessingRef.isReactWarning = true;
        Object.defineProperty(props, 'ref', {
          get: warnAboutAccessingRef,
          configurable: true
        });
      }

      function warnIfStringRefCannotBeAutoConverted(config) {
        {
          if (typeof config.ref === 'string' && ReactCurrentOwner.current && config.__self && ReactCurrentOwner.current.stateNode !== config.__self) {
            var componentName = getComponentName(ReactCurrentOwner.current.type);

            if (!didWarnAboutStringRefs[componentName]) {
              error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', componentName, config.ref);
              didWarnAboutStringRefs[componentName] = true;
            }
          }
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
       * Create and return a new ReactElement of the given type.
       * See https://reactjs.org/docs/react-api.html#createelement
       */


      function createElement(type, config, children) {
        var propName; // Reserved names are extracted

        var props = {};
        var key = null;
        var ref = null;
        var self = null;
        var source = null;

        if (config != null) {
          if (hasValidRef(config)) {
            ref = config.ref;
            {
              warnIfStringRefCannotBeAutoConverted(config);
            }
          }

          if (hasValidKey(config)) {
            key = '' + config.key;
          }

          self = config.__self === undefined ? null : config.__self;
          source = config.__source === undefined ? null : config.__source; // Remaining properties are added to a new props object

          for (propName in config) {
            if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
              props[propName] = config[propName];
            }
          }
        } // Children can be more than one argument, and those are transferred onto
        // the newly allocated props object.


        var childrenLength = arguments.length - 2;

        if (childrenLength === 1) {
          props.children = children;
        } else if (childrenLength > 1) {
          var childArray = Array(childrenLength);

          for (var i = 0; i < childrenLength; i++) {
            childArray[i] = arguments[i + 2];
          }

          {
            if (Object.freeze) {
              Object.freeze(childArray);
            }
          }
          props.children = childArray;
        } // Resolve default props


        if (type && type.defaultProps) {
          var defaultProps = type.defaultProps;

          for (propName in defaultProps) {
            if (props[propName] === undefined) {
              props[propName] = defaultProps[propName];
            }
          }
        }

        {
          if (key || ref) {
            var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

            if (key) {
              defineKeyPropWarningGetter(props, displayName);
            }

            if (ref) {
              defineRefPropWarningGetter(props, displayName);
            }
          }
        }
        return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
      }

      function cloneAndReplaceKey(oldElement, newKey) {
        var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
        return newElement;
      }
      /**
       * Clone and return a new ReactElement using element as the starting point.
       * See https://reactjs.org/docs/react-api.html#cloneelement
       */


      function cloneElement(element, config, children) {
        if (!!(element === null || element === undefined)) {
          {
            throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + element + ".");
          }
        }

        var propName; // Original props are copied

        var props = _assign({}, element.props); // Reserved names are extracted


        var key = element.key;
        var ref = element.ref; // Self is preserved since the owner is preserved.

        var self = element._self; // Source is preserved since cloneElement is unlikely to be targeted by a
        // transpiler, and the original source is probably a better indicator of the
        // true owner.

        var source = element._source; // Owner will be preserved, unless ref is overridden

        var owner = element._owner;

        if (config != null) {
          if (hasValidRef(config)) {
            // Silently steal the ref from the parent.
            ref = config.ref;
            owner = ReactCurrentOwner.current;
          }

          if (hasValidKey(config)) {
            key = '' + config.key;
          } // Remaining properties override existing props


          var defaultProps;

          if (element.type && element.type.defaultProps) {
            defaultProps = element.type.defaultProps;
          }

          for (propName in config) {
            if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
              if (config[propName] === undefined && defaultProps !== undefined) {
                // Resolve default props
                props[propName] = defaultProps[propName];
              } else {
                props[propName] = config[propName];
              }
            }
          }
        } // Children can be more than one argument, and those are transferred onto
        // the newly allocated props object.


        var childrenLength = arguments.length - 2;

        if (childrenLength === 1) {
          props.children = children;
        } else if (childrenLength > 1) {
          var childArray = Array(childrenLength);

          for (var i = 0; i < childrenLength; i++) {
            childArray[i] = arguments[i + 2];
          }

          props.children = childArray;
        }

        return ReactElement(element.type, key, ref, self, source, owner, props);
      }
      /**
       * Verifies the object is a ReactElement.
       * See https://reactjs.org/docs/react-api.html#isvalidelement
       * @param {?object} object
       * @return {boolean} True if `object` is a ReactElement.
       * @final
       */


      function isValidElement(object) {
        return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
      }

      var SEPARATOR = '.';
      var SUBSEPARATOR = ':';
      /**
       * Escape and wrap key so it is safe to use as a reactid
       *
       * @param {string} key to be escaped.
       * @return {string} the escaped key.
       */

      function escape(key) {
        var escapeRegex = /[=:]/g;
        var escaperLookup = {
          '=': '=0',
          ':': '=2'
        };
        var escapedString = key.replace(escapeRegex, function (match) {
          return escaperLookup[match];
        });
        return '$' + escapedString;
      }
      /**
       * TODO: Test that a single child and an array with one item have the same key
       * pattern.
       */


      var didWarnAboutMaps = false;
      var userProvidedKeyEscapeRegex = /\/+/g;

      function escapeUserProvidedKey(text) {
        return text.replace(userProvidedKeyEscapeRegex, '$&/');
      }
      /**
       * Generate a key string that identifies a element within a set.
       *
       * @param {*} element A element that could contain a manual key.
       * @param {number} index Index that is used if a manual key is not provided.
       * @return {string}
       */


      function getElementKey(element, index) {
        // Do some typechecking here since we call this blindly. We want to ensure
        // that we don't block potential future ES APIs.
        if (typeof element === 'object' && element !== null && element.key != null) {
          // Explicit key
          return escape('' + element.key);
        } // Implicit key determined by the index in the set


        return index.toString(36);
      }

      function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
        var type = typeof children;

        if (type === 'undefined' || type === 'boolean') {
          // All of the above are perceived as null.
          children = null;
        }

        var invokeCallback = false;

        if (children === null) {
          invokeCallback = true;
        } else {
          switch (type) {
            case 'string':
            case 'number':
              invokeCallback = true;
              break;

            case 'object':
              switch (children.$$typeof) {
                case REACT_ELEMENT_TYPE:
                case REACT_PORTAL_TYPE:
                  invokeCallback = true;
              }

          }
        }

        if (invokeCallback) {
          var _child = children;
          var mappedChild = callback(_child); // If it's the only child, treat the name as if it was wrapped in an array
          // so that it's consistent if the number of children grows:

          var childKey = nameSoFar === '' ? SEPARATOR + getElementKey(_child, 0) : nameSoFar;

          if (Array.isArray(mappedChild)) {
            var escapedChildKey = '';

            if (childKey != null) {
              escapedChildKey = escapeUserProvidedKey(childKey) + '/';
            }

            mapIntoArray(mappedChild, array, escapedChildKey, '', function (c) {
              return c;
            });
          } else if (mappedChild != null) {
            if (isValidElement(mappedChild)) {
              mappedChild = cloneAndReplaceKey(mappedChild, // Keep both the (mapped) and old keys if they differ, just as
              // traverseAllChildren used to do for objects as children
              escapedPrefix + ( // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
              mappedChild.key && (!_child || _child.key !== mappedChild.key) ? // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
              escapeUserProvidedKey('' + mappedChild.key) + '/' : '') + childKey);
            }

            array.push(mappedChild);
          }

          return 1;
        }

        var child;
        var nextName;
        var subtreeCount = 0; // Count of children found in the current subtree.

        var nextNamePrefix = nameSoFar === '' ? SEPARATOR : nameSoFar + SUBSEPARATOR;

        if (Array.isArray(children)) {
          for (var i = 0; i < children.length; i++) {
            child = children[i];
            nextName = nextNamePrefix + getElementKey(child, i);
            subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
          }
        } else {
          var iteratorFn = getIteratorFn(children);

          if (typeof iteratorFn === 'function') {
            var iterableChildren = children;
            {
              // Warn about using Maps as children
              if (iteratorFn === iterableChildren.entries) {
                if (!didWarnAboutMaps) {
                  warn('Using Maps as children is not supported. ' + 'Use an array of keyed ReactElements instead.');
                }

                didWarnAboutMaps = true;
              }
            }
            var iterator = iteratorFn.call(iterableChildren);
            var step;
            var ii = 0;

            while (!(step = iterator.next()).done) {
              child = step.value;
              nextName = nextNamePrefix + getElementKey(child, ii++);
              subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
            }
          } else if (type === 'object') {
            var childrenString = '' + children;
            {
              {
                throw Error("Objects are not valid as a React child (found: " + (childrenString === '[object Object]' ? 'object with keys {' + Object.keys(children).join(', ') + '}' : childrenString) + "). If you meant to render a collection of children, use an array instead.");
              }
            }
          }
        }

        return subtreeCount;
      }
      /**
       * Maps children that are typically specified as `props.children`.
       *
       * See https://reactjs.org/docs/react-api.html#reactchildrenmap
       *
       * The provided mapFunction(child, index) will be called for each
       * leaf child.
       *
       * @param {?*} children Children tree container.
       * @param {function(*, int)} func The map function.
       * @param {*} context Context for mapFunction.
       * @return {object} Object containing the ordered map of results.
       */


      function mapChildren(children, func, context) {
        if (children == null) {
          return children;
        }

        var result = [];
        var count = 0;
        mapIntoArray(children, result, '', '', function (child) {
          return func.call(context, child, count++);
        });
        return result;
      }
      /**
       * Count the number of children that are typically specified as
       * `props.children`.
       *
       * See https://reactjs.org/docs/react-api.html#reactchildrencount
       *
       * @param {?*} children Children tree container.
       * @return {number} The number of children.
       */


      function countChildren(children) {
        var n = 0;
        mapChildren(children, function () {
          n++; // Don't return anything
        });
        return n;
      }
      /**
       * Iterates through children that are typically specified as `props.children`.
       *
       * See https://reactjs.org/docs/react-api.html#reactchildrenforeach
       *
       * The provided forEachFunc(child, index) will be called for each
       * leaf child.
       *
       * @param {?*} children Children tree container.
       * @param {function(*, int)} forEachFunc
       * @param {*} forEachContext Context for forEachContext.
       */


      function forEachChildren(children, forEachFunc, forEachContext) {
        mapChildren(children, function () {
          forEachFunc.apply(this, arguments); // Don't return anything.
        }, forEachContext);
      }
      /**
       * Flatten a children object (typically specified as `props.children`) and
       * return an array with appropriately re-keyed children.
       *
       * See https://reactjs.org/docs/react-api.html#reactchildrentoarray
       */


      function toArray(children) {
        return mapChildren(children, function (child) {
          return child;
        }) || [];
      }
      /**
       * Returns the first child in a collection of children and verifies that there
       * is only one child in the collection.
       *
       * See https://reactjs.org/docs/react-api.html#reactchildrenonly
       *
       * The current implementation of this function assumes that a single child gets
       * passed without a wrapper, but the purpose of this helper function is to
       * abstract away the particular structure of children.
       *
       * @param {?object} children Child collection structure.
       * @return {ReactElement} The first and only `ReactElement` contained in the
       * structure.
       */


      function onlyChild(children) {
        if (!isValidElement(children)) {
          {
            throw Error("React.Children.only expected to receive a single React element child.");
          }
        }

        return children;
      }

      function createContext(defaultValue, calculateChangedBits) {
        if (calculateChangedBits === undefined) {
          calculateChangedBits = null;
        } else {
          {
            if (calculateChangedBits !== null && typeof calculateChangedBits !== 'function') {
              error('createContext: Expected the optional second argument to be a ' + 'function. Instead received: %s', calculateChangedBits);
            }
          }
        }

        var context = {
          $$typeof: REACT_CONTEXT_TYPE,
          _calculateChangedBits: calculateChangedBits,
          // As a workaround to support multiple concurrent renderers, we categorize
          // some renderers as primary and others as secondary. We only expect
          // there to be two concurrent renderers at most: React Native (primary) and
          // Fabric (secondary); React DOM (primary) and React ART (secondary).
          // Secondary renderers store their context values on separate fields.
          _currentValue: defaultValue,
          _currentValue2: defaultValue,
          // Used to track how many concurrent renderers this context currently
          // supports within in a single renderer. Such as parallel server rendering.
          _threadCount: 0,
          // These are circular
          Provider: null,
          Consumer: null
        };
        context.Provider = {
          $$typeof: REACT_PROVIDER_TYPE,
          _context: context
        };
        var hasWarnedAboutUsingNestedContextConsumers = false;
        var hasWarnedAboutUsingConsumerProvider = false;
        var hasWarnedAboutDisplayNameOnConsumer = false;
        {
          // A separate object, but proxies back to the original context object for
          // backwards compatibility. It has a different $$typeof, so we can properly
          // warn for the incorrect usage of Context as a Consumer.
          var Consumer = {
            $$typeof: REACT_CONTEXT_TYPE,
            _context: context,
            _calculateChangedBits: context._calculateChangedBits
          }; // $FlowFixMe: Flow complains about not setting a value, which is intentional here

          Object.defineProperties(Consumer, {
            Provider: {
              get: function () {
                if (!hasWarnedAboutUsingConsumerProvider) {
                  hasWarnedAboutUsingConsumerProvider = true;
                  error('Rendering <Context.Consumer.Provider> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Provider> instead?');
                }

                return context.Provider;
              },
              set: function (_Provider) {
                context.Provider = _Provider;
              }
            },
            _currentValue: {
              get: function () {
                return context._currentValue;
              },
              set: function (_currentValue) {
                context._currentValue = _currentValue;
              }
            },
            _currentValue2: {
              get: function () {
                return context._currentValue2;
              },
              set: function (_currentValue2) {
                context._currentValue2 = _currentValue2;
              }
            },
            _threadCount: {
              get: function () {
                return context._threadCount;
              },
              set: function (_threadCount) {
                context._threadCount = _threadCount;
              }
            },
            Consumer: {
              get: function () {
                if (!hasWarnedAboutUsingNestedContextConsumers) {
                  hasWarnedAboutUsingNestedContextConsumers = true;
                  error('Rendering <Context.Consumer.Consumer> is not supported and will be removed in ' + 'a future major release. Did you mean to render <Context.Consumer> instead?');
                }

                return context.Consumer;
              }
            },
            displayName: {
              get: function () {
                return context.displayName;
              },
              set: function (displayName) {
                if (!hasWarnedAboutDisplayNameOnConsumer) {
                  warn('Setting `displayName` on Context.Consumer has no effect. ' + "You should set it directly on the context with Context.displayName = '%s'.", displayName);
                  hasWarnedAboutDisplayNameOnConsumer = true;
                }
              }
            }
          }); // $FlowFixMe: Flow complains about missing properties because it doesn't understand defineProperty

          context.Consumer = Consumer;
        }
        {
          context._currentRenderer = null;
          context._currentRenderer2 = null;
        }
        return context;
      }

      var Uninitialized = -1;
      var Pending = 0;
      var Resolved = 1;
      var Rejected = 2;

      function lazyInitializer(payload) {
        if (payload._status === Uninitialized) {
          var ctor = payload._result;
          var thenable = ctor(); // Transition to the next state.

          var pending = payload;
          pending._status = Pending;
          pending._result = thenable;
          thenable.then(function (moduleObject) {
            if (payload._status === Pending) {
              var defaultExport = moduleObject.default;
              {
                if (defaultExport === undefined) {
                  error('lazy: Expected the result of a dynamic import() call. ' + 'Instead received: %s\n\nYour code should look like: \n  ' + // Break up imports to avoid accidentally parsing them as dependencies.
                  'const MyComponent = lazy(() => imp' + "ort('./MyComponent'))", moduleObject);
                }
              } // Transition to the next state.

              var resolved = payload;
              resolved._status = Resolved;
              resolved._result = defaultExport;
            }
          }, function (error) {
            if (payload._status === Pending) {
              // Transition to the next state.
              var rejected = payload;
              rejected._status = Rejected;
              rejected._result = error;
            }
          });
        }

        if (payload._status === Resolved) {
          return payload._result;
        } else {
          throw payload._result;
        }
      }

      function lazy(ctor) {
        var payload = {
          // We use these fields to store the result.
          _status: -1,
          _result: ctor
        };
        var lazyType = {
          $$typeof: REACT_LAZY_TYPE,
          _payload: payload,
          _init: lazyInitializer
        };
        {
          // In production, this would just set it on the object.
          var defaultProps;
          var propTypes; // $FlowFixMe

          Object.defineProperties(lazyType, {
            defaultProps: {
              configurable: true,
              get: function () {
                return defaultProps;
              },
              set: function (newDefaultProps) {
                error('React.lazy(...): It is not supported to assign `defaultProps` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');
                defaultProps = newDefaultProps; // Match production behavior more closely:
                // $FlowFixMe

                Object.defineProperty(lazyType, 'defaultProps', {
                  enumerable: true
                });
              }
            },
            propTypes: {
              configurable: true,
              get: function () {
                return propTypes;
              },
              set: function (newPropTypes) {
                error('React.lazy(...): It is not supported to assign `propTypes` to ' + 'a lazy component import. Either specify them where the component ' + 'is defined, or create a wrapping component around it.');
                propTypes = newPropTypes; // Match production behavior more closely:
                // $FlowFixMe

                Object.defineProperty(lazyType, 'propTypes', {
                  enumerable: true
                });
              }
            }
          });
        }
        return lazyType;
      }

      function forwardRef(render) {
        {
          if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
            error('forwardRef requires a render function but received a `memo` ' + 'component. Instead of forwardRef(memo(...)), use ' + 'memo(forwardRef(...)).');
          } else if (typeof render !== 'function') {
            error('forwardRef requires a render function but was given %s.', render === null ? 'null' : typeof render);
          } else {
            if (render.length !== 0 && render.length !== 2) {
              error('forwardRef render functions accept exactly two parameters: props and ref. %s', render.length === 1 ? 'Did you forget to use the ref parameter?' : 'Any additional parameter will be undefined.');
            }
          }

          if (render != null) {
            if (render.defaultProps != null || render.propTypes != null) {
              error('forwardRef render functions do not support propTypes or defaultProps. ' + 'Did you accidentally pass a React component?');
            }
          }
        }
        var elementType = {
          $$typeof: REACT_FORWARD_REF_TYPE,
          render: render
        };
        {
          var ownName;
          Object.defineProperty(elementType, 'displayName', {
            enumerable: false,
            configurable: true,
            get: function () {
              return ownName;
            },
            set: function (name) {
              ownName = name;

              if (render.displayName == null) {
                render.displayName = name;
              }
            }
          });
        }
        return elementType;
      } // Filter certain DOM attributes (e.g. src, href) if their values are empty strings.


      var enableScopeAPI = false; // Experimental Create Event Handle API.

      function isValidElementType(type) {
        if (typeof type === 'string' || typeof type === 'function') {
          return true;
        } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


        if (type === exports.Fragment || type === exports.Profiler || type === REACT_DEBUG_TRACING_MODE_TYPE || type === exports.StrictMode || type === exports.Suspense || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI) {
          return true;
        }

        if (typeof type === 'object' && type !== null) {
          if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) {
            return true;
          }
        }

        return false;
      }

      function memo(type, compare) {
        {
          if (!isValidElementType(type)) {
            error('memo: The first argument must be a component. Instead ' + 'received: %s', type === null ? 'null' : typeof type);
          }
        }
        var elementType = {
          $$typeof: REACT_MEMO_TYPE,
          type: type,
          compare: compare === undefined ? null : compare
        };
        {
          var ownName;
          Object.defineProperty(elementType, 'displayName', {
            enumerable: false,
            configurable: true,
            get: function () {
              return ownName;
            },
            set: function (name) {
              ownName = name;

              if (type.displayName == null) {
                type.displayName = name;
              }
            }
          });
        }
        return elementType;
      }

      function resolveDispatcher() {
        var dispatcher = ReactCurrentDispatcher.current;

        if (!(dispatcher !== null)) {
          {
            throw Error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.");
          }
        }

        return dispatcher;
      }

      function useContext(Context, unstable_observedBits) {
        var dispatcher = resolveDispatcher();
        {
          if (unstable_observedBits !== undefined) {
            error('useContext() second argument is reserved for future ' + 'use in React. Passing it is not supported. ' + 'You passed: %s.%s', unstable_observedBits, typeof unstable_observedBits === 'number' && Array.isArray(arguments[2]) ? '\n\nDid you call array.map(useContext)? ' + 'Calling Hooks inside a loop is not supported. ' + 'Learn more at https://reactjs.org/link/rules-of-hooks' : '');
          } // TODO: add a more generic warning for invalid values.


          if (Context._context !== undefined) {
            var realContext = Context._context; // Don't deduplicate because this legitimately causes bugs
            // and nobody should be using this in existing code.

            if (realContext.Consumer === Context) {
              error('Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be ' + 'removed in a future major release. Did you mean to call useContext(Context) instead?');
            } else if (realContext.Provider === Context) {
              error('Calling useContext(Context.Provider) is not supported. ' + 'Did you mean to call useContext(Context) instead?');
            }
          }
        }
        return dispatcher.useContext(Context, unstable_observedBits);
      }

      function useState(initialState) {
        var dispatcher = resolveDispatcher();
        return dispatcher.useState(initialState);
      }

      function useReducer(reducer, initialArg, init) {
        var dispatcher = resolveDispatcher();
        return dispatcher.useReducer(reducer, initialArg, init);
      }

      function useRef(initialValue) {
        var dispatcher = resolveDispatcher();
        return dispatcher.useRef(initialValue);
      }

      function useEffect(create, deps) {
        var dispatcher = resolveDispatcher();
        return dispatcher.useEffect(create, deps);
      }

      function useLayoutEffect(create, deps) {
        var dispatcher = resolveDispatcher();
        return dispatcher.useLayoutEffect(create, deps);
      }

      function useCallback(callback, deps) {
        var dispatcher = resolveDispatcher();
        return dispatcher.useCallback(callback, deps);
      }

      function useMemo(create, deps) {
        var dispatcher = resolveDispatcher();
        return dispatcher.useMemo(create, deps);
      }

      function useImperativeHandle(ref, create, deps) {
        var dispatcher = resolveDispatcher();
        return dispatcher.useImperativeHandle(ref, create, deps);
      }

      function useDebugValue(value, formatterFn) {
        {
          var dispatcher = resolveDispatcher();
          return dispatcher.useDebugValue(value, formatterFn);
        }
      } // Helpers to patch console.logs to avoid logging during side-effect free
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

      var ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher;
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
          previousDispatcher = ReactCurrentDispatcher$1.current; // Set the dispatcher in DEV because this might be call in the render function
          // for warnings.

          ReactCurrentDispatcher$1.current = null;
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
            ReactCurrentDispatcher$1.current = previousDispatcher;
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
          case exports.Suspense:
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
      var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;

      function setCurrentlyValidatingElement(element) {
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

      function setCurrentlyValidatingElement$1(element) {
        {
          if (element) {
            var owner = element._owner;
            var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
            setExtraStackFrame(stack);
          } else {
            setExtraStackFrame(null);
          }
        }
      }

      var propTypesMisspellWarningShown;
      {
        propTypesMisspellWarningShown = false;
      }

      function getDeclarationErrorAddendum() {
        if (ReactCurrentOwner.current) {
          var name = getComponentName(ReactCurrentOwner.current.type);

          if (name) {
            return '\n\nCheck the render method of `' + name + '`.';
          }
        }

        return '';
      }

      function getSourceInfoErrorAddendum(source) {
        if (source !== undefined) {
          var fileName = source.fileName.replace(/^.*[\\\/]/, '');
          var lineNumber = source.lineNumber;
          return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
        }

        return '';
      }

      function getSourceInfoErrorAddendumForProps(elementProps) {
        if (elementProps !== null && elementProps !== undefined) {
          return getSourceInfoErrorAddendum(elementProps.__source);
        }

        return '';
      }
      /**
       * Warn if there's no key explicitly set on dynamic arrays of children or
       * object keys are not valid. This allows us to keep track of children between
       * updates.
       */


      var ownerHasKeyUseWarning = {};

      function getCurrentComponentErrorInfo(parentType) {
        var info = getDeclarationErrorAddendum();

        if (!info) {
          var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

          if (parentName) {
            info = "\n\nCheck the top-level render call using <" + parentName + ">.";
          }
        }

        return info;
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

        if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
          // Give the component that originally created this child.
          childOwner = " It was passed a child from " + getComponentName(element._owner.type) + ".";
        }

        {
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

      function createElementWithValidation(type, props, children) {
        var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
        // succeed and there will likely be errors in render.

        if (!validType) {
          var info = '';

          if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
            info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
          }

          var sourceInfo = getSourceInfoErrorAddendumForProps(props);

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

          {
            error('React.createElement: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
          }
        }

        var element = createElement.apply(this, arguments); // The result can be nullish if a mock or a custom function is used.
        // TODO: Drop this when these are no longer allowed as the type argument.

        if (element == null) {
          return element;
        } // Skip key warning if the type isn't valid since our key validation logic
        // doesn't expect a non-string/function type and can throw confusing errors.
        // We don't want exception behavior to differ between dev and prod.
        // (Rendering will throw with a helpful message and as soon as the type is
        // fixed, the key warnings will appear.)


        if (validType) {
          for (var i = 2; i < arguments.length; i++) {
            validateChildKeys(arguments[i], type);
          }
        }

        if (type === exports.Fragment) {
          validateFragmentProps(element);
        } else {
          validatePropTypes(element);
        }

        return element;
      }

      var didWarnAboutDeprecatedCreateFactory = false;

      function createFactoryWithValidation(type) {
        var validatedFactory = createElementWithValidation.bind(null, type);
        validatedFactory.type = type;
        {
          if (!didWarnAboutDeprecatedCreateFactory) {
            didWarnAboutDeprecatedCreateFactory = true;
            warn('React.createFactory() is deprecated and will be removed in ' + 'a future major release. Consider using JSX ' + 'or use React.createElement() directly instead.');
          } // Legacy hook: remove it


          Object.defineProperty(validatedFactory, 'type', {
            enumerable: false,
            get: function () {
              warn('Factory.type is deprecated. Access the class directly ' + 'before passing it to createFactory.');
              Object.defineProperty(this, 'type', {
                value: type
              });
              return type;
            }
          });
        }
        return validatedFactory;
      }

      function cloneElementWithValidation(element, props, children) {
        var newElement = cloneElement.apply(this, arguments);

        for (var i = 2; i < arguments.length; i++) {
          validateChildKeys(arguments[i], newElement.type);
        }

        validatePropTypes(newElement);
        return newElement;
      }

      {
        try {
          var frozenObject = Object.freeze({});
          /* eslint-disable no-new */

          new Map([[frozenObject, null]]);
          new Set([frozenObject]);
          /* eslint-enable no-new */
        } catch (e) {}
      }
      var createElement$1 = createElementWithValidation;
      var cloneElement$1 = cloneElementWithValidation;
      var createFactory = createFactoryWithValidation;
      var Children = {
        map: mapChildren,
        forEach: forEachChildren,
        count: countChildren,
        toArray: toArray,
        only: onlyChild
      };
      exports.Children = Children;
      exports.Component = Component;
      exports.PureComponent = PureComponent;
      exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;
      exports.cloneElement = cloneElement$1;
      exports.createContext = createContext;
      exports.createElement = createElement$1;
      exports.createFactory = createFactory;
      exports.createRef = createRef;
      exports.forwardRef = forwardRef;
      exports.isValidElement = isValidElement;
      exports.lazy = lazy;
      exports.memo = memo;
      exports.useCallback = useCallback;
      exports.useContext = useContext;
      exports.useDebugValue = useDebugValue;
      exports.useEffect = useEffect;
      exports.useImperativeHandle = useImperativeHandle;
      exports.useLayoutEffect = useLayoutEffect;
      exports.useMemo = useMemo;
      exports.useReducer = useReducer;
      exports.useRef = useRef;
      exports.useState = useState;
      exports.version = ReactVersion;
    })();
  }
})(react_development);

if (process.env.NODE_ENV === 'production') {
  react.exports = react_production_min;
} else {
  react.exports = react_development;
}

var React = react.exports;

var React$1 = /*#__PURE__*/_mergeNamespaces({
	__proto__: null,
	'default': React
}, [react.exports]);

const Button = ({ label }) => {
    return (React.createElement("div", null,
        React.createElement("button", null, label)));
};

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
function __rest(s, e) {
  var t = {};

  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
}

/*

Based off glamor's StyleSheet, thanks Sunil ❤️

high performance StyleSheet for css-in-js systems

- uses multiple style tags behind the scenes for millions of rules
- uses `insertRule` for appending in production for *much* faster performance

// usage

import { StyleSheet } from '@emotion/sheet'

let styleSheet = new StyleSheet({ key: '', container: document.head })

styleSheet.insert('#box { border: 1px solid red; }')
- appends a css rule into the stylesheet

styleSheet.flush()
- empties the stylesheet of all its contents

*/
// $FlowFixMe
function sheetForTag(tag) {
  if (tag.sheet) {
    // $FlowFixMe
    return tag.sheet;
  } // this weirdness brought to you by firefox

  /* istanbul ignore next */


  for (var i = 0; i < document.styleSheets.length; i++) {
    if (document.styleSheets[i].ownerNode === tag) {
      // $FlowFixMe
      return document.styleSheets[i];
    }
  }
}

function createStyleElement(options) {
  var tag = document.createElement('style');
  tag.setAttribute('data-emotion', options.key);

  if (options.nonce !== undefined) {
    tag.setAttribute('nonce', options.nonce);
  }

  tag.appendChild(document.createTextNode(''));
  tag.setAttribute('data-s', '');
  return tag;
}

var StyleSheet = /*#__PURE__*/function () {
  function StyleSheet(options) {
    var _this = this;

    this._insertTag = function (tag) {
      var before;

      if (_this.tags.length === 0) {
        if (_this.insertionPoint) {
          before = _this.insertionPoint.nextSibling;
        } else if (_this.prepend) {
          before = _this.container.firstChild;
        } else {
          before = _this.before;
        }
      } else {
        before = _this.tags[_this.tags.length - 1].nextSibling;
      }

      _this.container.insertBefore(tag, before);

      _this.tags.push(tag);
    };

    this.isSpeedy = options.speedy === undefined ? process.env.NODE_ENV === 'production' : options.speedy;
    this.tags = [];
    this.ctr = 0;
    this.nonce = options.nonce; // key is the value of the data-emotion attribute, it's used to identify different sheets

    this.key = options.key;
    this.container = options.container;
    this.prepend = options.prepend;
    this.insertionPoint = options.insertionPoint;
    this.before = null;
  }

  var _proto = StyleSheet.prototype;

  _proto.hydrate = function hydrate(nodes) {
    nodes.forEach(this._insertTag);
  };

  _proto.insert = function insert(rule) {
    // the max length is how many rules we have per style tag, it's 65000 in speedy mode
    // it's 1 in dev because we insert source maps that map a single rule to a location
    // and you can only have one source map per style tag
    if (this.ctr % (this.isSpeedy ? 65000 : 1) === 0) {
      this._insertTag(createStyleElement(this));
    }

    var tag = this.tags[this.tags.length - 1];

    if (process.env.NODE_ENV !== 'production') {
      var isImportRule = rule.charCodeAt(0) === 64 && rule.charCodeAt(1) === 105;

      if (isImportRule && this._alreadyInsertedOrderInsensitiveRule) {
        // this would only cause problem in speedy mode
        // but we don't want enabling speedy to affect the observable behavior
        // so we report this error at all times
        console.error("You're attempting to insert the following rule:\n" + rule + '\n\n`@import` rules must be before all other types of rules in a stylesheet but other rules have already been inserted. Please ensure that `@import` rules are before all other rules.');
      }

      this._alreadyInsertedOrderInsensitiveRule = this._alreadyInsertedOrderInsensitiveRule || !isImportRule;
    }

    if (this.isSpeedy) {
      var sheet = sheetForTag(tag);

      try {
        // this is the ultrafast version, works across browsers
        // the big drawback is that the css won't be editable in devtools
        sheet.insertRule(rule, sheet.cssRules.length);
      } catch (e) {
        if (process.env.NODE_ENV !== 'production' && !/:(-moz-placeholder|-moz-focus-inner|-moz-focusring|-ms-input-placeholder|-moz-read-write|-moz-read-only|-ms-clear){/.test(rule)) {
          console.error("There was a problem inserting the following rule: \"" + rule + "\"", e);
        }
      }
    } else {
      tag.appendChild(document.createTextNode(rule));
    }

    this.ctr++;
  };

  _proto.flush = function flush() {
    // $FlowFixMe
    this.tags.forEach(function (tag) {
      return tag.parentNode && tag.parentNode.removeChild(tag);
    });
    this.tags = [];
    this.ctr = 0;

    if (process.env.NODE_ENV !== 'production') {
      this._alreadyInsertedOrderInsensitiveRule = false;
    }
  };

  return StyleSheet;
}();

var MS = '-ms-';
var MOZ = '-moz-';
var WEBKIT = '-webkit-';
var COMMENT = 'comm';
var RULESET = 'rule';
var DECLARATION = 'decl';
var IMPORT = '@import';
var KEYFRAMES = '@keyframes';

/**
 * @param {number}
 * @return {number}
 */
var abs = Math.abs;
/**
 * @param {number}
 * @return {string}
 */

var from = String.fromCharCode;
/**
 * @param {object}
 * @return {object}
 */

var assign = Object.assign;
/**
 * @param {string} value
 * @param {number} length
 * @return {number}
 */

function hash(value, length) {
  return (((length << 2 ^ charat(value, 0)) << 2 ^ charat(value, 1)) << 2 ^ charat(value, 2)) << 2 ^ charat(value, 3);
}
/**
 * @param {string} value
 * @return {string}
 */

function trim(value) {
  return value.trim();
}
/**
 * @param {string} value
 * @param {RegExp} pattern
 * @return {string?}
 */

function match(value, pattern) {
  return (value = pattern.exec(value)) ? value[0] : value;
}
/**
 * @param {string} value
 * @param {(string|RegExp)} pattern
 * @param {string} replacement
 * @return {string}
 */

function replace(value, pattern, replacement) {
  return value.replace(pattern, replacement);
}
/**
 * @param {string} value
 * @param {string} search
 * @return {number}
 */

function indexof(value, search) {
  return value.indexOf(search);
}
/**
 * @param {string} value
 * @param {number} index
 * @return {number}
 */

function charat(value, index) {
  return value.charCodeAt(index) | 0;
}
/**
 * @param {string} value
 * @param {number} begin
 * @param {number} end
 * @return {string}
 */

function substr(value, begin, end) {
  return value.slice(begin, end);
}
/**
 * @param {string} value
 * @return {number}
 */

function strlen(value) {
  return value.length;
}
/**
 * @param {any[]} value
 * @return {number}
 */

function sizeof(value) {
  return value.length;
}
/**
 * @param {any} value
 * @param {any[]} array
 * @return {any}
 */

function append(value, array) {
  return array.push(value), value;
}
/**
 * @param {string[]} array
 * @param {function} callback
 * @return {string}
 */

function combine(array, callback) {
  return array.map(callback).join('');
}

var line = 1;
var column = 1;
var length = 0;
var position = 0;
var character = 0;
var characters = '';
/**
 * @param {string} value
 * @param {object | null} root
 * @param {object | null} parent
 * @param {string} type
 * @param {string[] | string} props
 * @param {object[] | string} children
 * @param {number} length
 */

function node(value, root, parent, type, props, children, length) {
  return {
    value: value,
    root: root,
    parent: parent,
    type: type,
    props: props,
    children: children,
    line: line,
    column: column,
    length: length,
    return: ''
  };
}
/**
 * @param {object} root
 * @param {object} props
 * @return {object}
 */

function copy(root, props) {
  return assign(node('', null, null, '', null, null, 0), root, {
    length: -root.length
  }, props);
}
/**
 * @return {number}
 */

function char() {
  return character;
}
/**
 * @return {number}
 */

function prev() {
  character = position > 0 ? charat(characters, --position) : 0;
  if (column--, character === 10) column = 1, line--;
  return character;
}
/**
 * @return {number}
 */

function next() {
  character = position < length ? charat(characters, position++) : 0;
  if (column++, character === 10) column = 1, line++;
  return character;
}
/**
 * @return {number}
 */

function peek() {
  return charat(characters, position);
}
/**
 * @return {number}
 */

function caret() {
  return position;
}
/**
 * @param {number} begin
 * @param {number} end
 * @return {string}
 */

function slice(begin, end) {
  return substr(characters, begin, end);
}
/**
 * @param {number} type
 * @return {number}
 */

function token(type) {
  switch (type) {
    // \0 \t \n \r \s whitespace token
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    // ! + , / > @ ~ isolate token

    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126: // ; { } breakpoint token

    case 59:
    case 123:
    case 125:
      return 4;
    // : accompanied token

    case 58:
      return 3;
    // " ' ( [ opening delimit token

    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    // ) ] closing delimit token

    case 41:
    case 93:
      return 1;
  }

  return 0;
}
/**
 * @param {string} value
 * @return {any[]}
 */

function alloc(value) {
  return line = column = 1, length = strlen(characters = value), position = 0, [];
}
/**
 * @param {any} value
 * @return {any}
 */

function dealloc(value) {
  return characters = '', value;
}
/**
 * @param {number} type
 * @return {string}
 */

function delimit(type) {
  return trim(slice(position - 1, delimiter(type === 91 ? type + 2 : type === 40 ? type + 1 : type)));
}
/**
 * @param {number} type
 * @return {string}
 */

function whitespace(type) {
  while (character = peek()) if (character < 33) next();else break;

  return token(type) > 2 || token(character) > 3 ? '' : ' ';
}
/**
 * @param {number} index
 * @param {number} count
 * @return {string}
 */

function escaping(index, count) {
  while (--count && next()) // not 0-9 A-F a-f
  if (character < 48 || character > 102 || character > 57 && character < 65 || character > 70 && character < 97) break;

  return slice(index, caret() + (count < 6 && peek() == 32 && next() == 32));
}
/**
 * @param {number} type
 * @return {number}
 */

function delimiter(type) {
  while (next()) switch (character) {
    // ] ) " '
    case type:
      return position;
    // " '

    case 34:
    case 39:
      if (type !== 34 && type !== 39) delimiter(character);
      break;
    // (

    case 40:
      if (type === 41) delimiter(type);
      break;
    // \

    case 92:
      next();
      break;
  }

  return position;
}
/**
 * @param {number} type
 * @param {number} index
 * @return {number}
 */

function commenter(type, index) {
  while (next()) // //
  if (type + character === 47 + 10) break; // /*
  else if (type + character === 42 + 42 && peek() === 47) break;

  return '/*' + slice(index, position - 1) + '*' + from(type === 47 ? type : next());
}
/**
 * @param {number} index
 * @return {string}
 */

function identifier(index) {
  while (!token(peek())) next();

  return slice(index, position);
}

/**
 * @param {string} value
 * @return {object[]}
 */

function compile(value) {
  return dealloc(parse('', null, null, null, [''], value = alloc(value), 0, [0], value));
}
/**
 * @param {string} value
 * @param {object} root
 * @param {object?} parent
 * @param {string[]} rule
 * @param {string[]} rules
 * @param {string[]} rulesets
 * @param {number[]} pseudo
 * @param {number[]} points
 * @param {string[]} declarations
 * @return {object}
 */

function parse(value, root, parent, rule, rules, rulesets, pseudo, points, declarations) {
  var index = 0;
  var offset = 0;
  var length = pseudo;
  var atrule = 0;
  var property = 0;
  var previous = 0;
  var variable = 1;
  var scanning = 1;
  var ampersand = 1;
  var character = 0;
  var type = '';
  var props = rules;
  var children = rulesets;
  var reference = rule;
  var characters = type;

  while (scanning) switch (previous = character, character = next()) {
    // (
    case 40:
      if (previous != 108 && characters.charCodeAt(length - 1) == 58) {
        if (indexof(characters += replace(delimit(character), '&', '&\f'), '&\f') != -1) ampersand = -1;
        break;
      }

    // " ' [

    case 34:
    case 39:
    case 91:
      characters += delimit(character);
      break;
    // \t \n \r \s

    case 9:
    case 10:
    case 13:
    case 32:
      characters += whitespace(previous);
      break;
    // \

    case 92:
      characters += escaping(caret() - 1, 7);
      continue;
    // /

    case 47:
      switch (peek()) {
        case 42:
        case 47:
          append(comment(commenter(next(), caret()), root, parent), declarations);
          break;

        default:
          characters += '/';
      }

      break;
    // {

    case 123 * variable:
      points[index++] = strlen(characters) * ampersand;
    // } ; \0

    case 125 * variable:
    case 59:
    case 0:
      switch (character) {
        // \0 }
        case 0:
        case 125:
          scanning = 0;
        // ;

        case 59 + offset:
          if (property > 0 && strlen(characters) - length) append(property > 32 ? declaration(characters + ';', rule, parent, length - 1) : declaration(replace(characters, ' ', '') + ';', rule, parent, length - 2), declarations);
          break;
        // @ ;

        case 59:
          characters += ';';
        // { rule/at-rule

        default:
          append(reference = ruleset(characters, root, parent, index, offset, rules, points, type, props = [], children = [], length), rulesets);
          if (character === 123) if (offset === 0) parse(characters, root, reference, reference, props, rulesets, length, points, children);else switch (atrule) {
            // d m s
            case 100:
            case 109:
            case 115:
              parse(value, reference, reference, rule && append(ruleset(value, reference, reference, 0, 0, rules, points, type, rules, props = [], length), children), rules, children, length, points, rule ? props : children);
              break;

            default:
              parse(characters, reference, reference, reference, [''], children, 0, points, children);
          }
      }

      index = offset = property = 0, variable = ampersand = 1, type = characters = '', length = pseudo;
      break;
    // :

    case 58:
      length = 1 + strlen(characters), property = previous;

    default:
      if (variable < 1) if (character == 123) --variable;else if (character == 125 && variable++ == 0 && prev() == 125) continue;

      switch (characters += from(character), character * variable) {
        // &
        case 38:
          ampersand = offset > 0 ? 1 : (characters += '\f', -1);
          break;
        // ,

        case 44:
          points[index++] = (strlen(characters) - 1) * ampersand, ampersand = 1;
          break;
        // @

        case 64:
          // -
          if (peek() === 45) characters += delimit(next());
          atrule = peek(), offset = length = strlen(type = characters += identifier(caret())), character++;
          break;
        // -

        case 45:
          if (previous === 45 && strlen(characters) == 2) variable = 0;
      }

  }

  return rulesets;
}
/**
 * @param {string} value
 * @param {object} root
 * @param {object?} parent
 * @param {number} index
 * @param {number} offset
 * @param {string[]} rules
 * @param {number[]} points
 * @param {string} type
 * @param {string[]} props
 * @param {string[]} children
 * @param {number} length
 * @return {object}
 */

function ruleset(value, root, parent, index, offset, rules, points, type, props, children, length) {
  var post = offset - 1;
  var rule = offset === 0 ? rules : [''];
  var size = sizeof(rule);

  for (var i = 0, j = 0, k = 0; i < index; ++i) for (var x = 0, y = substr(value, post + 1, post = abs(j = points[i])), z = value; x < size; ++x) if (z = trim(j > 0 ? rule[x] + ' ' + y : replace(y, /&\f/g, rule[x]))) props[k++] = z;

  return node(value, root, parent, offset === 0 ? RULESET : type, props, children, length);
}
/**
 * @param {number} value
 * @param {object} root
 * @param {object?} parent
 * @return {object}
 */

function comment(value, root, parent) {
  return node(value, root, parent, COMMENT, from(char()), substr(value, 2, -2), 0);
}
/**
 * @param {string} value
 * @param {object} root
 * @param {object?} parent
 * @param {number} length
 * @return {object}
 */

function declaration(value, root, parent, length) {
  return node(value, root, parent, DECLARATION, substr(value, 0, length), substr(value, length + 1, -1), length);
}

/**
 * @param {string} value
 * @param {number} length
 * @return {string}
 */

function prefix(value, length) {
  switch (hash(value, length)) {
    // color-adjust
    case 5103:
      return WEBKIT + 'print-' + value + value;
    // animation, animation-(delay|direction|duration|fill-mode|iteration-count|name|play-state|timing-function)

    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921: // text-decoration, filter, clip-path, backface-visibility, column, box-decoration-break

    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005: // mask, mask-image, mask-(mode|clip|size), mask-(repeat|origin), mask-position, mask-composite,

    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855: // background-clip, columns, column-(count|fill|gap|rule|rule-color|rule-style|rule-width|span|width)

    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return WEBKIT + value + value;
    // appearance, user-select, transform, hyphens, text-size-adjust

    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return WEBKIT + value + MOZ + value + MS + value + value;
    // flex, flex-direction

    case 6828:
    case 4268:
      return WEBKIT + value + MS + value + value;
    // order

    case 6165:
      return WEBKIT + value + MS + 'flex-' + value + value;
    // align-items

    case 5187:
      return WEBKIT + value + replace(value, /(\w+).+(:[^]+)/, WEBKIT + 'box-$1$2' + MS + 'flex-$1$2') + value;
    // align-self

    case 5443:
      return WEBKIT + value + MS + 'flex-item-' + replace(value, /flex-|-self/, '') + value;
    // align-content

    case 4675:
      return WEBKIT + value + MS + 'flex-line-pack' + replace(value, /align-content|flex-|-self/, '') + value;
    // flex-shrink

    case 5548:
      return WEBKIT + value + MS + replace(value, 'shrink', 'negative') + value;
    // flex-basis

    case 5292:
      return WEBKIT + value + MS + replace(value, 'basis', 'preferred-size') + value;
    // flex-grow

    case 6060:
      return WEBKIT + 'box-' + replace(value, '-grow', '') + WEBKIT + value + MS + replace(value, 'grow', 'positive') + value;
    // transition

    case 4554:
      return WEBKIT + replace(value, /([^-])(transform)/g, '$1' + WEBKIT + '$2') + value;
    // cursor

    case 6187:
      return replace(replace(replace(value, /(zoom-|grab)/, WEBKIT + '$1'), /(image-set)/, WEBKIT + '$1'), value, '') + value;
    // background, background-image

    case 5495:
    case 3959:
      return replace(value, /(image-set\([^]*)/, WEBKIT + '$1' + '$`$1');
    // justify-content

    case 4968:
      return replace(replace(value, /(.+:)(flex-)?(.*)/, WEBKIT + 'box-pack:$3' + MS + 'flex-pack:$3'), /s.+-b[^;]+/, 'justify') + WEBKIT + value + value;
    // (margin|padding)-inline-(start|end)

    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return replace(value, /(.+)-inline(.+)/, WEBKIT + '$1$2') + value;
    // (min|max)?(width|height|inline-size|block-size)

    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      // stretch, max-content, min-content, fill-available
      if (strlen(value) - 1 - length > 6) switch (charat(value, length + 1)) {
        // (m)ax-content, (m)in-content
        case 109:
          // -
          if (charat(value, length + 4) !== 45) break;
        // (f)ill-available, (f)it-content

        case 102:
          return replace(value, /(.+:)(.+)-([^]+)/, '$1' + WEBKIT + '$2-$3' + '$1' + MOZ + (charat(value, length + 3) == 108 ? '$3' : '$2-$3')) + value;
        // (s)tretch

        case 115:
          return ~indexof(value, 'stretch') ? prefix(replace(value, 'stretch', 'fill-available'), length) + value : value;
      }
      break;
    // position: sticky

    case 4949:
      // (s)ticky?
      if (charat(value, length + 1) !== 115) break;
    // display: (flex|inline-flex)

    case 6444:
      switch (charat(value, strlen(value) - 3 - (~indexof(value, '!important') && 10))) {
        // stic(k)y
        case 107:
          return replace(value, ':', ':' + WEBKIT) + value;
        // (inline-)?fl(e)x

        case 101:
          return replace(value, /(.+:)([^;!]+)(;|!.+)?/, '$1' + WEBKIT + (charat(value, 14) === 45 ? 'inline-' : '') + 'box$3' + '$1' + WEBKIT + '$2$3' + '$1' + MS + '$2box$3') + value;
      }

      break;
    // writing-mode

    case 5936:
      switch (charat(value, length + 11)) {
        // vertical-l(r)
        case 114:
          return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, 'tb') + value;
        // vertical-r(l)

        case 108:
          return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, 'tb-rl') + value;
        // horizontal(-)tb

        case 45:
          return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, 'lr') + value;
      }

      return WEBKIT + value + MS + value + value;
  }

  return value;
}

/**
 * @param {object[]} children
 * @param {function} callback
 * @return {string}
 */

function serialize(children, callback) {
  var output = '';
  var length = sizeof(children);

  for (var i = 0; i < length; i++) output += callback(children[i], i, children, callback) || '';

  return output;
}
/**
 * @param {object} element
 * @param {number} index
 * @param {object[]} children
 * @param {function} callback
 * @return {string}
 */

function stringify(element, index, children, callback) {
  switch (element.type) {
    case IMPORT:
    case DECLARATION:
      return element.return = element.return || element.value;

    case COMMENT:
      return '';

    case KEYFRAMES:
      return element.return = element.value + '{' + serialize(element.children, callback) + '}';

    case RULESET:
      element.value = element.props.join(',');
  }

  return strlen(children = serialize(element.children, callback)) ? element.return = element.value + '{' + children + '}' : '';
}

/**
 * @param {function[]} collection
 * @return {function}
 */

function middleware(collection) {
  var length = sizeof(collection);
  return function (element, index, children, callback) {
    var output = '';

    for (var i = 0; i < length; i++) output += collection[i](element, index, children, callback) || '';

    return output;
  };
}
/**
 * @param {function} callback
 * @return {function}
 */

function rulesheet(callback) {
  return function (element) {
    if (!element.root) if (element = element.return) callback(element);
  };
}
/**
 * @param {object} element
 * @param {number} index
 * @param {object[]} children
 * @param {function} callback
 */

function prefixer(element, index, children, callback) {
  if (element.length > -1) if (!element.return) switch (element.type) {
    case DECLARATION:
      element.return = prefix(element.value, element.length);
      break;

    case KEYFRAMES:
      return serialize([copy(element, {
        value: replace(element.value, '@', '@' + WEBKIT)
      })], callback);

    case RULESET:
      if (element.length) return combine(element.props, function (value) {
        switch (match(value, /(::plac\w+|:read-\w+)/)) {
          // :read-(only|write)
          case ':read-only':
          case ':read-write':
            return serialize([copy(element, {
              props: [replace(value, /:(read-\w+)/, ':' + MOZ + '$1')]
            })], callback);
          // :placeholder

          case '::placeholder':
            return serialize([copy(element, {
              props: [replace(value, /:(plac\w+)/, ':' + WEBKIT + 'input-$1')]
            }), copy(element, {
              props: [replace(value, /:(plac\w+)/, ':' + MOZ + '$1')]
            }), copy(element, {
              props: [replace(value, /:(plac\w+)/, MS + 'input-$1')]
            })], callback);
        }

        return '';
      });
  }
}

var weakMemoize = function weakMemoize(func) {
  // $FlowFixMe flow doesn't include all non-primitive types as allowed for weakmaps
  var cache = new WeakMap();
  return function (arg) {
    if (cache.has(arg)) {
      // $FlowFixMe
      return cache.get(arg);
    }

    var ret = func(arg);
    cache.set(arg, ret);
    return ret;
  };
};

function memoize(fn) {
  var cache = Object.create(null);
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}

var last = function last(arr) {
  return arr.length ? arr[arr.length - 1] : null;
}; // based on https://github.com/thysultan/stylis.js/blob/e6843c373ebcbbfade25ebcc23f540ed8508da0a/src/Tokenizer.js#L239-L244


var identifierWithPointTracking = function identifierWithPointTracking(begin, points, index) {
  var previous = 0;
  var character = 0;

  while (true) {
    previous = character;
    character = peek(); // &\f

    if (previous === 38 && character === 12) {
      points[index] = 1;
    }

    if (token(character)) {
      break;
    }

    next();
  }

  return slice(begin, position);
};

var toRules = function toRules(parsed, points) {
  // pretend we've started with a comma
  var index = -1;
  var character = 44;

  do {
    switch (token(character)) {
      case 0:
        // &\f
        if (character === 38 && peek() === 12) {
          // this is not 100% correct, we don't account for literal sequences here - like for example quoted strings
          // stylis inserts \f after & to know when & where it should replace this sequence with the context selector
          // and when it should just concatenate the outer and inner selectors
          // it's very unlikely for this sequence to actually appear in a different context, so we just leverage this fact here
          points[index] = 1;
        }

        parsed[index] += identifierWithPointTracking(position - 1, points, index);
        break;

      case 2:
        parsed[index] += delimit(character);
        break;

      case 4:
        // comma
        if (character === 44) {
          // colon
          parsed[++index] = peek() === 58 ? '&\f' : '';
          points[index] = parsed[index].length;
          break;
        }

      // fallthrough

      default:
        parsed[index] += from(character);
    }
  } while (character = next());

  return parsed;
};

var getRules = function getRules(value, points) {
  return dealloc(toRules(alloc(value), points));
}; // WeakSet would be more appropriate, but only WeakMap is supported in IE11


var fixedElements = /* #__PURE__ */new WeakMap();

var compat = function compat(element) {
  if (element.type !== 'rule' || !element.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  element.length < 1) {
    return;
  }

  var value = element.value,
      parent = element.parent;
  var isImplicitRule = element.column === parent.column && element.line === parent.line;

  while (parent.type !== 'rule') {
    parent = parent.parent;
    if (!parent) return;
  } // short-circuit for the simplest case


  if (element.props.length === 1 && value.charCodeAt(0) !== 58
  /* colon */
  && !fixedElements.get(parent)) {
    return;
  } // if this is an implicitly inserted rule (the one eagerly inserted at the each new nested level)
  // then the props has already been manipulated beforehand as they that array is shared between it and its "rule parent"


  if (isImplicitRule) {
    return;
  }

  fixedElements.set(element, true);
  var points = [];
  var rules = getRules(value, points);
  var parentRules = parent.props;

  for (var i = 0, k = 0; i < rules.length; i++) {
    for (var j = 0; j < parentRules.length; j++, k++) {
      element.props[k] = points[i] ? rules[i].replace(/&\f/g, parentRules[j]) : parentRules[j] + " " + rules[i];
    }
  }
};

var removeLabel = function removeLabel(element) {
  if (element.type === 'decl') {
    var value = element.value;

    if ( // charcode for l
    value.charCodeAt(0) === 108 && // charcode for b
    value.charCodeAt(2) === 98) {
      // this ignores label
      element["return"] = '';
      element.value = '';
    }
  }
};

var ignoreFlag = 'emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason';

var isIgnoringComment = function isIgnoringComment(element) {
  return !!element && element.type === 'comm' && element.children.indexOf(ignoreFlag) > -1;
};

var createUnsafeSelectorsAlarm = function createUnsafeSelectorsAlarm(cache) {
  return function (element, index, children) {
    if (element.type !== 'rule') return;
    var unsafePseudoClasses = element.value.match(/(:first|:nth|:nth-last)-child/g);

    if (unsafePseudoClasses && cache.compat !== true) {
      var prevElement = index > 0 ? children[index - 1] : null;

      if (prevElement && isIgnoringComment(last(prevElement.children))) {
        return;
      }

      unsafePseudoClasses.forEach(function (unsafePseudoClass) {
        console.error("The pseudo class \"" + unsafePseudoClass + "\" is potentially unsafe when doing server-side rendering. Try changing it to \"" + unsafePseudoClass.split('-child')[0] + "-of-type\".");
      });
    }
  };
};

var isImportRule = function isImportRule(element) {
  return element.type.charCodeAt(1) === 105 && element.type.charCodeAt(0) === 64;
};

var isPrependedWithRegularRules = function isPrependedWithRegularRules(index, children) {
  for (var i = index - 1; i >= 0; i--) {
    if (!isImportRule(children[i])) {
      return true;
    }
  }

  return false;
}; // use this to remove incorrect elements from further processing
// so they don't get handed to the `sheet` (or anything else)
// as that could potentially lead to additional logs which in turn could be overhelming to the user


var nullifyElement = function nullifyElement(element) {
  element.type = '';
  element.value = '';
  element["return"] = '';
  element.children = '';
  element.props = '';
};

var incorrectImportAlarm = function incorrectImportAlarm(element, index, children) {
  if (!isImportRule(element)) {
    return;
  }

  if (element.parent) {
    console.error("`@import` rules can't be nested inside other rules. Please move it to the top level and put it before regular rules. Keep in mind that they can only be used within global styles.");
    nullifyElement(element);
  } else if (isPrependedWithRegularRules(index, children)) {
    console.error("`@import` rules can't be after other rules. Please put your `@import` rules before your other rules.");
    nullifyElement(element);
  }
};

var isBrowser$3 = typeof document !== 'undefined';
var getServerStylisCache = isBrowser$3 ? undefined : weakMemoize(function () {
  return memoize(function () {
    var cache = {};
    return function (name) {
      return cache[name];
    };
  });
});
var defaultStylisPlugins = [prefixer];

var createCache = function createCache(options) {
  var key = options.key;

  if (process.env.NODE_ENV !== 'production' && !key) {
    throw new Error("You have to configure `key` for your cache. Please make sure it's unique (and not equal to 'css') as it's used for linking styles to your cache.\n" + "If multiple caches share the same key they might \"fight\" for each other's style elements.");
  }

  if (isBrowser$3 && key === 'css') {
    var ssrStyles = document.querySelectorAll("style[data-emotion]:not([data-s])"); // get SSRed styles out of the way of React's hydration
    // document.head is a safe place to move them to(though note document.head is not necessarily the last place they will be)
    // note this very very intentionally targets all style elements regardless of the key to ensure
    // that creating a cache works inside of render of a React component

    Array.prototype.forEach.call(ssrStyles, function (node) {
      // we want to only move elements which have a space in the data-emotion attribute value
      // because that indicates that it is an Emotion 11 server-side rendered style elements
      // while we will already ignore Emotion 11 client-side inserted styles because of the :not([data-s]) part in the selector
      // Emotion 10 client-side inserted styles did not have data-s (but importantly did not have a space in their data-emotion attributes)
      // so checking for the space ensures that loading Emotion 11 after Emotion 10 has inserted some styles
      // will not result in the Emotion 10 styles being destroyed
      var dataEmotionAttribute = node.getAttribute('data-emotion');

      if (dataEmotionAttribute.indexOf(' ') === -1) {
        return;
      }

      document.head.appendChild(node);
      node.setAttribute('data-s', '');
    });
  }

  var stylisPlugins = options.stylisPlugins || defaultStylisPlugins;

  if (process.env.NODE_ENV !== 'production') {
    // $FlowFixMe
    if (/[^a-z-]/.test(key)) {
      throw new Error("Emotion key must only contain lower case alphabetical characters and - but \"" + key + "\" was passed");
    }
  }

  var inserted = {}; // $FlowFixMe

  var container;
  var nodesToHydrate = [];

  if (isBrowser$3) {
    container = options.container || document.head;
    Array.prototype.forEach.call( // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll("style[data-emotion^=\"" + key + " \"]"), function (node) {
      var attrib = node.getAttribute("data-emotion").split(' '); // $FlowFixMe

      for (var i = 1; i < attrib.length; i++) {
        inserted[attrib[i]] = true;
      }

      nodesToHydrate.push(node);
    });
  }

  var _insert;

  var omnipresentPlugins = [compat, removeLabel];

  if (process.env.NODE_ENV !== 'production') {
    omnipresentPlugins.push(createUnsafeSelectorsAlarm({
      get compat() {
        return cache.compat;
      }

    }), incorrectImportAlarm);
  }

  if (isBrowser$3) {
    var currentSheet;
    var finalizingPlugins = [stringify, process.env.NODE_ENV !== 'production' ? function (element) {
      if (!element.root) {
        if (element["return"]) {
          currentSheet.insert(element["return"]);
        } else if (element.value && element.type !== COMMENT) {
          // insert empty rule in non-production environments
          // so @emotion/jest can grab `key` from the (JS)DOM for caches without any rules inserted yet
          currentSheet.insert(element.value + "{}");
        }
      }
    } : rulesheet(function (rule) {
      currentSheet.insert(rule);
    })];
    var serializer = middleware(omnipresentPlugins.concat(stylisPlugins, finalizingPlugins));

    var stylis = function stylis(styles) {
      return serialize(compile(styles), serializer);
    };

    _insert = function insert(selector, serialized, sheet, shouldCache) {
      currentSheet = sheet;

      if (process.env.NODE_ENV !== 'production' && serialized.map !== undefined) {
        currentSheet = {
          insert: function insert(rule) {
            sheet.insert(rule + serialized.map);
          }
        };
      }

      stylis(selector ? selector + "{" + serialized.styles + "}" : serialized.styles);

      if (shouldCache) {
        cache.inserted[serialized.name] = true;
      }
    };
  } else {
    var _finalizingPlugins = [stringify];

    var _serializer = middleware(omnipresentPlugins.concat(stylisPlugins, _finalizingPlugins));

    var _stylis = function _stylis(styles) {
      return serialize(compile(styles), _serializer);
    }; // $FlowFixMe


    var serverStylisCache = getServerStylisCache(stylisPlugins)(key);

    var getRules = function getRules(selector, serialized) {
      var name = serialized.name;

      if (serverStylisCache[name] === undefined) {
        serverStylisCache[name] = _stylis(selector ? selector + "{" + serialized.styles + "}" : serialized.styles);
      }

      return serverStylisCache[name];
    };

    _insert = function _insert(selector, serialized, sheet, shouldCache) {
      var name = serialized.name;
      var rules = getRules(selector, serialized);

      if (cache.compat === undefined) {
        // in regular mode, we don't set the styles on the inserted cache
        // since we don't need to and that would be wasting memory
        // we return them so that they are rendered in a style tag
        if (shouldCache) {
          cache.inserted[name] = true;
        }

        if ( // using === development instead of !== production
        // because if people do ssr in tests, the source maps showing up would be annoying
        process.env.NODE_ENV === 'development' && serialized.map !== undefined) {
          return rules + serialized.map;
        }

        return rules;
      } else {
        // in compat mode, we put the styles on the inserted cache so
        // that emotion-server can pull out the styles
        // except when we don't want to cache it which was in Global but now
        // is nowhere but we don't want to do a major right now
        // and just in case we're going to leave the case here
        // it's also not affecting client side bundle size
        // so it's really not a big deal
        if (shouldCache) {
          cache.inserted[name] = rules;
        } else {
          return rules;
        }
      }
    };
  }

  var cache = {
    key: key,
    sheet: new StyleSheet({
      key: key,
      container: container,
      nonce: options.nonce,
      speedy: options.speedy,
      prepend: options.prepend,
      insertionPoint: options.insertionPoint
    }),
    nonce: options.nonce,
    inserted: inserted,
    registered: {},
    insert: _insert
  };
  cache.sheet.hydrate(nodesToHydrate);
  return cache;
};

var reactIs$1 = {exports: {}};

var reactIs_production_min = {};

/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var b = "function" === typeof Symbol && Symbol.for,
    c = b ? Symbol.for("react.element") : 60103,
    d = b ? Symbol.for("react.portal") : 60106,
    e = b ? Symbol.for("react.fragment") : 60107,
    f = b ? Symbol.for("react.strict_mode") : 60108,
    g = b ? Symbol.for("react.profiler") : 60114,
    h = b ? Symbol.for("react.provider") : 60109,
    k = b ? Symbol.for("react.context") : 60110,
    l = b ? Symbol.for("react.async_mode") : 60111,
    m = b ? Symbol.for("react.concurrent_mode") : 60111,
    n = b ? Symbol.for("react.forward_ref") : 60112,
    p = b ? Symbol.for("react.suspense") : 60113,
    q = b ? Symbol.for("react.suspense_list") : 60120,
    r = b ? Symbol.for("react.memo") : 60115,
    t = b ? Symbol.for("react.lazy") : 60116,
    v = b ? Symbol.for("react.block") : 60121,
    w = b ? Symbol.for("react.fundamental") : 60117,
    x = b ? Symbol.for("react.responder") : 60118,
    y = b ? Symbol.for("react.scope") : 60119;

function z(a) {
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
              case t:
              case r:
              case h:
                return a;

              default:
                return u;
            }

        }

      case d:
        return u;
    }
  }
}

function A(a) {
  return z(a) === m;
}

reactIs_production_min.AsyncMode = l;
reactIs_production_min.ConcurrentMode = m;
reactIs_production_min.ContextConsumer = k;
reactIs_production_min.ContextProvider = h;
reactIs_production_min.Element = c;
reactIs_production_min.ForwardRef = n;
reactIs_production_min.Fragment = e;
reactIs_production_min.Lazy = t;
reactIs_production_min.Memo = r;
reactIs_production_min.Portal = d;
reactIs_production_min.Profiler = g;
reactIs_production_min.StrictMode = f;
reactIs_production_min.Suspense = p;

reactIs_production_min.isAsyncMode = function (a) {
  return A(a) || z(a) === l;
};

reactIs_production_min.isConcurrentMode = A;

reactIs_production_min.isContextConsumer = function (a) {
  return z(a) === k;
};

reactIs_production_min.isContextProvider = function (a) {
  return z(a) === h;
};

reactIs_production_min.isElement = function (a) {
  return "object" === typeof a && null !== a && a.$$typeof === c;
};

reactIs_production_min.isForwardRef = function (a) {
  return z(a) === n;
};

reactIs_production_min.isFragment = function (a) {
  return z(a) === e;
};

reactIs_production_min.isLazy = function (a) {
  return z(a) === t;
};

reactIs_production_min.isMemo = function (a) {
  return z(a) === r;
};

reactIs_production_min.isPortal = function (a) {
  return z(a) === d;
};

reactIs_production_min.isProfiler = function (a) {
  return z(a) === g;
};

reactIs_production_min.isStrictMode = function (a) {
  return z(a) === f;
};

reactIs_production_min.isSuspense = function (a) {
  return z(a) === p;
};

reactIs_production_min.isValidElementType = function (a) {
  return "string" === typeof a || "function" === typeof a || a === e || a === m || a === g || a === f || a === p || a === q || "object" === typeof a && null !== a && (a.$$typeof === t || a.$$typeof === r || a.$$typeof === h || a.$$typeof === k || a.$$typeof === n || a.$$typeof === w || a.$$typeof === x || a.$$typeof === y || a.$$typeof === v);
};

reactIs_production_min.typeOf = z;

var reactIs_development = {};

/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (process.env.NODE_ENV !== "production") {
  (function () {
    // nor polyfill, then a plain number is used for performance.

    var hasSymbol = typeof Symbol === 'function' && Symbol.for;
    var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
    var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
    var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
    var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
    var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
    var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
    var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
    // (unstable) APIs that have been removed. Can we remove the symbols?

    var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
    var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
    var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
    var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
    var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
    var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
    var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
    var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
    var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
    var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
    var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

    function isValidElementType(type) {
      return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
    }

    function typeOf(object) {
      if (typeof object === 'object' && object !== null) {
        var $$typeof = object.$$typeof;

        switch ($$typeof) {
          case REACT_ELEMENT_TYPE:
            var type = object.type;

            switch (type) {
              case REACT_ASYNC_MODE_TYPE:
              case REACT_CONCURRENT_MODE_TYPE:
              case REACT_FRAGMENT_TYPE:
              case REACT_PROFILER_TYPE:
              case REACT_STRICT_MODE_TYPE:
              case REACT_SUSPENSE_TYPE:
                return type;

              default:
                var $$typeofType = type && type.$$typeof;

                switch ($$typeofType) {
                  case REACT_CONTEXT_TYPE:
                  case REACT_FORWARD_REF_TYPE:
                  case REACT_LAZY_TYPE:
                  case REACT_MEMO_TYPE:
                  case REACT_PROVIDER_TYPE:
                    return $$typeofType;

                  default:
                    return $$typeof;
                }

            }

          case REACT_PORTAL_TYPE:
            return $$typeof;
        }
      }

      return undefined;
    } // AsyncMode is deprecated along with isAsyncMode


    var AsyncMode = REACT_ASYNC_MODE_TYPE;
    var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
    var ContextConsumer = REACT_CONTEXT_TYPE;
    var ContextProvider = REACT_PROVIDER_TYPE;
    var Element = REACT_ELEMENT_TYPE;
    var ForwardRef = REACT_FORWARD_REF_TYPE;
    var Fragment = REACT_FRAGMENT_TYPE;
    var Lazy = REACT_LAZY_TYPE;
    var Memo = REACT_MEMO_TYPE;
    var Portal = REACT_PORTAL_TYPE;
    var Profiler = REACT_PROFILER_TYPE;
    var StrictMode = REACT_STRICT_MODE_TYPE;
    var Suspense = REACT_SUSPENSE_TYPE;
    var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

    function isAsyncMode(object) {
      {
        if (!hasWarnedAboutDeprecatedIsAsyncMode) {
          hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

          console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
        }
      }
      return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
    }

    function isConcurrentMode(object) {
      return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
    }

    function isContextConsumer(object) {
      return typeOf(object) === REACT_CONTEXT_TYPE;
    }

    function isContextProvider(object) {
      return typeOf(object) === REACT_PROVIDER_TYPE;
    }

    function isElement(object) {
      return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
    }

    function isForwardRef(object) {
      return typeOf(object) === REACT_FORWARD_REF_TYPE;
    }

    function isFragment(object) {
      return typeOf(object) === REACT_FRAGMENT_TYPE;
    }

    function isLazy(object) {
      return typeOf(object) === REACT_LAZY_TYPE;
    }

    function isMemo(object) {
      return typeOf(object) === REACT_MEMO_TYPE;
    }

    function isPortal(object) {
      return typeOf(object) === REACT_PORTAL_TYPE;
    }

    function isProfiler(object) {
      return typeOf(object) === REACT_PROFILER_TYPE;
    }

    function isStrictMode(object) {
      return typeOf(object) === REACT_STRICT_MODE_TYPE;
    }

    function isSuspense(object) {
      return typeOf(object) === REACT_SUSPENSE_TYPE;
    }

    reactIs_development.AsyncMode = AsyncMode;
    reactIs_development.ConcurrentMode = ConcurrentMode;
    reactIs_development.ContextConsumer = ContextConsumer;
    reactIs_development.ContextProvider = ContextProvider;
    reactIs_development.Element = Element;
    reactIs_development.ForwardRef = ForwardRef;
    reactIs_development.Fragment = Fragment;
    reactIs_development.Lazy = Lazy;
    reactIs_development.Memo = Memo;
    reactIs_development.Portal = Portal;
    reactIs_development.Profiler = Profiler;
    reactIs_development.StrictMode = StrictMode;
    reactIs_development.Suspense = Suspense;
    reactIs_development.isAsyncMode = isAsyncMode;
    reactIs_development.isConcurrentMode = isConcurrentMode;
    reactIs_development.isContextConsumer = isContextConsumer;
    reactIs_development.isContextProvider = isContextProvider;
    reactIs_development.isElement = isElement;
    reactIs_development.isForwardRef = isForwardRef;
    reactIs_development.isFragment = isFragment;
    reactIs_development.isLazy = isLazy;
    reactIs_development.isMemo = isMemo;
    reactIs_development.isPortal = isPortal;
    reactIs_development.isProfiler = isProfiler;
    reactIs_development.isStrictMode = isStrictMode;
    reactIs_development.isSuspense = isSuspense;
    reactIs_development.isValidElementType = isValidElementType;
    reactIs_development.typeOf = typeOf;
  })();
}

if (process.env.NODE_ENV === 'production') {
  reactIs$1.exports = reactIs_production_min;
} else {
  reactIs$1.exports = reactIs_development;
}

var reactIs = reactIs$1.exports;
var FORWARD_REF_STATICS = {
  '$$typeof': true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  '$$typeof': true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

var isBrowser$2 = typeof document !== 'undefined';

function getRegisteredStyles(registered, registeredStyles, classNames) {
  var rawClassName = '';
  classNames.split(' ').forEach(function (className) {
    if (registered[className] !== undefined) {
      registeredStyles.push(registered[className] + ";");
    } else {
      rawClassName += className + " ";
    }
  });
  return rawClassName;
}

var registerStyles = function registerStyles(cache, serialized, isStringTag) {
  var className = cache.key + "-" + serialized.name;

  if ( // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (isStringTag === false || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  isBrowser$2 === false && cache.compat !== undefined) && cache.registered[className] === undefined) {
    cache.registered[className] = serialized.styles;
  }
};

var insertStyles = function insertStyles(cache, serialized, isStringTag) {
  registerStyles(cache, serialized, isStringTag);
  var className = cache.key + "-" + serialized.name;

  if (cache.inserted[serialized.name] === undefined) {
    var stylesForSSR = '';
    var current = serialized;

    do {
      var maybeStyles = cache.insert(serialized === current ? "." + className : '', current, cache.sheet, true);

      if (!isBrowser$2 && maybeStyles !== undefined) {
        stylesForSSR += maybeStyles;
      }

      current = current.next;
    } while (current !== undefined);

    if (!isBrowser$2 && stylesForSSR.length !== 0) {
      return stylesForSSR;
    }
  }
};

/* eslint-disable */
// Inspired by https://github.com/garycourt/murmurhash-js
// Ported from https://github.com/aappleby/smhasher/blob/61a0530f28277f2e850bfc39600ce61d02b518de/src/MurmurHash2.cpp#L37-L86
function murmur2(str) {
  // 'm' and 'r' are mixing constants generated offline.
  // They're not really 'magic', they just happen to work well.
  // const m = 0x5bd1e995;
  // const r = 24;
  // Initialize the hash
  var h = 0; // Mix 4 bytes at a time into the hash

  var k,
      i = 0,
      len = str.length;

  for (; len >= 4; ++i, len -= 4) {
    k = str.charCodeAt(i) & 0xff | (str.charCodeAt(++i) & 0xff) << 8 | (str.charCodeAt(++i) & 0xff) << 16 | (str.charCodeAt(++i) & 0xff) << 24;
    k =
    /* Math.imul(k, m): */
    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16);
    k ^=
    /* k >>> r: */
    k >>> 24;
    h =
    /* Math.imul(k, m): */
    (k & 0xffff) * 0x5bd1e995 + ((k >>> 16) * 0xe995 << 16) ^
    /* Math.imul(h, m): */
    (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  } // Handle the last few bytes of the input array


  switch (len) {
    case 3:
      h ^= (str.charCodeAt(i + 2) & 0xff) << 16;

    case 2:
      h ^= (str.charCodeAt(i + 1) & 0xff) << 8;

    case 1:
      h ^= str.charCodeAt(i) & 0xff;
      h =
      /* Math.imul(h, m): */
      (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  } // Do a few final mixes of the hash to ensure the last few
  // bytes are well-incorporated.


  h ^= h >>> 13;
  h =
  /* Math.imul(h, m): */
  (h & 0xffff) * 0x5bd1e995 + ((h >>> 16) * 0xe995 << 16);
  return ((h ^ h >>> 15) >>> 0).toString(36);
}

var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};

var ILLEGAL_ESCAPE_SEQUENCE_ERROR = "You have illegal escape sequence in your template literal, most likely inside content's property value.\nBecause you write your CSS inside a JavaScript string you actually have to do double escaping, so for example \"content: '\\00d7';\" should become \"content: '\\\\00d7';\".\nYou can read more about this here:\nhttps://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences";
var UNDEFINED_AS_OBJECT_KEY_ERROR = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).";
var hyphenateRegex = /[A-Z]|^ms/g;
var animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g;

var isCustomProperty = function isCustomProperty(property) {
  return property.charCodeAt(1) === 45;
};

var isProcessableValue = function isProcessableValue(value) {
  return value != null && typeof value !== 'boolean';
};

var processStyleName = /* #__PURE__ */memoize(function (styleName) {
  return isCustomProperty(styleName) ? styleName : styleName.replace(hyphenateRegex, '-$&').toLowerCase();
});

var processStyleValue = function processStyleValue(key, value) {
  switch (key) {
    case 'animation':
    case 'animationName':
      {
        if (typeof value === 'string') {
          return value.replace(animationRegex, function (match, p1, p2) {
            cursor = {
              name: p1,
              styles: p2,
              next: cursor
            };
            return p1;
          });
        }
      }
  }

  if (unitlessKeys[key] !== 1 && !isCustomProperty(key) && typeof value === 'number' && value !== 0) {
    return value + 'px';
  }

  return value;
};

if (process.env.NODE_ENV !== 'production') {
  var contentValuePattern = /(attr|counters?|url|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/;
  var contentValues = ['normal', 'none', 'initial', 'inherit', 'unset'];
  var oldProcessStyleValue = processStyleValue;
  var msPattern = /^-ms-/;
  var hyphenPattern = /-(.)/g;
  var hyphenatedCache = {};

  processStyleValue = function processStyleValue(key, value) {
    if (key === 'content') {
      if (typeof value !== 'string' || contentValues.indexOf(value) === -1 && !contentValuePattern.test(value) && (value.charAt(0) !== value.charAt(value.length - 1) || value.charAt(0) !== '"' && value.charAt(0) !== "'")) {
        throw new Error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + value + "\"'`");
      }
    }

    var processed = oldProcessStyleValue(key, value);

    if (processed !== '' && !isCustomProperty(key) && key.indexOf('-') !== -1 && hyphenatedCache[key] === undefined) {
      hyphenatedCache[key] = true;
      console.error("Using kebab-case for css properties in objects is not supported. Did you mean " + key.replace(msPattern, 'ms-').replace(hyphenPattern, function (str, _char) {
        return _char.toUpperCase();
      }) + "?");
    }

    return processed;
  };
}

function handleInterpolation(mergedProps, registered, interpolation) {
  if (interpolation == null) {
    return '';
  }

  if (interpolation.__emotion_styles !== undefined) {
    if (process.env.NODE_ENV !== 'production' && interpolation.toString() === 'NO_COMPONENT_SELECTOR') {
      throw new Error('Component selectors can only be used in conjunction with @emotion/babel-plugin.');
    }

    return interpolation;
  }

  switch (typeof interpolation) {
    case 'boolean':
      {
        return '';
      }

    case 'object':
      {
        if (interpolation.anim === 1) {
          cursor = {
            name: interpolation.name,
            styles: interpolation.styles,
            next: cursor
          };
          return interpolation.name;
        }

        if (interpolation.styles !== undefined) {
          var next = interpolation.next;

          if (next !== undefined) {
            // not the most efficient thing ever but this is a pretty rare case
            // and there will be very few iterations of this generally
            while (next !== undefined) {
              cursor = {
                name: next.name,
                styles: next.styles,
                next: cursor
              };
              next = next.next;
            }
          }

          var styles = interpolation.styles + ";";

          if (process.env.NODE_ENV !== 'production' && interpolation.map !== undefined) {
            styles += interpolation.map;
          }

          return styles;
        }

        return createStringFromObject(mergedProps, registered, interpolation);
      }

    case 'function':
      {
        if (mergedProps !== undefined) {
          var previousCursor = cursor;
          var result = interpolation(mergedProps);
          cursor = previousCursor;
          return handleInterpolation(mergedProps, registered, result);
        } else if (process.env.NODE_ENV !== 'production') {
          console.error('Functions that are interpolated in css calls will be stringified.\n' + 'If you want to have a css call based on props, create a function that returns a css call like this\n' + 'let dynamicStyle = (props) => css`color: ${props.color}`\n' + 'It can be called directly with props or interpolated in a styled call like this\n' + "let SomeComponent = styled('div')`${dynamicStyle}`");
        }

        break;
      }

    case 'string':
      if (process.env.NODE_ENV !== 'production') {
        var matched = [];
        var replaced = interpolation.replace(animationRegex, function (match, p1, p2) {
          var fakeVarName = "animation" + matched.length;
          matched.push("const " + fakeVarName + " = keyframes`" + p2.replace(/^@keyframes animation-\w+/, '') + "`");
          return "${" + fakeVarName + "}";
        });

        if (matched.length) {
          console.error('`keyframes` output got interpolated into plain string, please wrap it with `css`.\n\n' + 'Instead of doing this:\n\n' + [].concat(matched, ["`" + replaced + "`"]).join('\n') + '\n\nYou should wrap it with `css` like this:\n\n' + ("css`" + replaced + "`"));
        }
      }

      break;
  } // finalize string values (regular strings and functions interpolated into css calls)


  if (registered == null) {
    return interpolation;
  }

  var cached = registered[interpolation];
  return cached !== undefined ? cached : interpolation;
}

function createStringFromObject(mergedProps, registered, obj) {
  var string = '';

  if (Array.isArray(obj)) {
    for (var i = 0; i < obj.length; i++) {
      string += handleInterpolation(mergedProps, registered, obj[i]) + ";";
    }
  } else {
    for (var _key in obj) {
      var value = obj[_key];

      if (typeof value !== 'object') {
        if (registered != null && registered[value] !== undefined) {
          string += _key + "{" + registered[value] + "}";
        } else if (isProcessableValue(value)) {
          string += processStyleName(_key) + ":" + processStyleValue(_key, value) + ";";
        }
      } else {
        if (_key === 'NO_COMPONENT_SELECTOR' && process.env.NODE_ENV !== 'production') {
          throw new Error('Component selectors can only be used in conjunction with @emotion/babel-plugin.');
        }

        if (Array.isArray(value) && typeof value[0] === 'string' && (registered == null || registered[value[0]] === undefined)) {
          for (var _i = 0; _i < value.length; _i++) {
            if (isProcessableValue(value[_i])) {
              string += processStyleName(_key) + ":" + processStyleValue(_key, value[_i]) + ";";
            }
          }
        } else {
          var interpolated = handleInterpolation(mergedProps, registered, value);

          switch (_key) {
            case 'animation':
            case 'animationName':
              {
                string += processStyleName(_key) + ":" + interpolated + ";";
                break;
              }

            default:
              {
                if (process.env.NODE_ENV !== 'production' && _key === 'undefined') {
                  console.error(UNDEFINED_AS_OBJECT_KEY_ERROR);
                }

                string += _key + "{" + interpolated + "}";
              }
          }
        }
      }
    }
  }

  return string;
}

var labelPattern = /label:\s*([^\s;\n{]+)\s*(;|$)/g;
var sourceMapPattern;

if (process.env.NODE_ENV !== 'production') {
  sourceMapPattern = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//g;
} // this is the cursor for keyframes
// keyframes are stored on the SerializedStyles object as a linked list


var cursor;

var serializeStyles = function serializeStyles(args, registered, mergedProps) {
  if (args.length === 1 && typeof args[0] === 'object' && args[0] !== null && args[0].styles !== undefined) {
    return args[0];
  }

  var stringMode = true;
  var styles = '';
  cursor = undefined;
  var strings = args[0];

  if (strings == null || strings.raw === undefined) {
    stringMode = false;
    styles += handleInterpolation(mergedProps, registered, strings);
  } else {
    if (process.env.NODE_ENV !== 'production' && strings[0] === undefined) {
      console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);
    }

    styles += strings[0];
  } // we start at 1 since we've already handled the first arg


  for (var i = 1; i < args.length; i++) {
    styles += handleInterpolation(mergedProps, registered, args[i]);

    if (stringMode) {
      if (process.env.NODE_ENV !== 'production' && strings[i] === undefined) {
        console.error(ILLEGAL_ESCAPE_SEQUENCE_ERROR);
      }

      styles += strings[i];
    }
  }

  var sourceMap;

  if (process.env.NODE_ENV !== 'production') {
    styles = styles.replace(sourceMapPattern, function (match) {
      sourceMap = match;
      return '';
    });
  } // using a global regex with .exec is stateful so lastIndex has to be reset each time


  labelPattern.lastIndex = 0;
  var identifierName = '';
  var match; // https://esbench.com/bench/5b809c2cf2949800a0f61fb5

  while ((match = labelPattern.exec(styles)) !== null) {
    identifierName += '-' + // $FlowFixMe we know it's not null
    match[1];
  }

  var name = murmur2(styles) + identifierName;

  if (process.env.NODE_ENV !== 'production') {
    // $FlowFixMe SerializedStyles type doesn't have toString property (and we don't want to add it)
    return {
      name: name,
      styles: styles,
      map: sourceMap,
      next: cursor,
      toString: function toString() {
        return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
      }
    };
  }

  return {
    name: name,
    styles: styles,
    next: cursor
  };
};

var isBrowser$1 = typeof document !== 'undefined';
var hasOwnProperty = {}.hasOwnProperty;
var EmotionCacheContext = /* #__PURE__ */react.exports.createContext( // we're doing this to avoid preconstruct's dead code elimination in this one case
// because this module is primarily intended for the browser and node
// but it's also required in react native and similar environments sometimes
// and we could have a special build just for that
// but this is much easier and the native packages
// might use a different theme context in the future anyway
typeof HTMLElement !== 'undefined' ? /* #__PURE__ */createCache({
  key: 'css'
}) : null);

if (process.env.NODE_ENV !== 'production') {
  EmotionCacheContext.displayName = 'EmotionCacheContext';
}

EmotionCacheContext.Provider;

var withEmotionCache = function withEmotionCache(func) {
  // $FlowFixMe
  return /*#__PURE__*/react.exports.forwardRef(function (props, ref) {
    // the cache will never be null in the browser
    var cache = react.exports.useContext(EmotionCacheContext);
    return func(props, cache, ref);
  });
};

if (!isBrowser$1) {
  withEmotionCache = function withEmotionCache(func) {
    return function (props) {
      var cache = react.exports.useContext(EmotionCacheContext);

      if (cache === null) {
        // yes, we're potentially creating this on every render
        // it doesn't actually matter though since it's only on the server
        // so there will only every be a single render
        // that could change in the future because of suspense and etc. but for now,
        // this works and i don't want to optimise for a future thing that we aren't sure about
        cache = createCache({
          key: 'css'
        });
        return /*#__PURE__*/react.exports.createElement(EmotionCacheContext.Provider, {
          value: cache
        }, func(props, cache));
      } else {
        return func(props, cache);
      }
    };
  };
}

var ThemeContext = /* #__PURE__ */react.exports.createContext({});

if (process.env.NODE_ENV !== 'production') {
  ThemeContext.displayName = 'EmotionThemeContext';
}

var isBrowser$1$1 = typeof document !== 'undefined';
var useInsertionEffect$1 = React$1['useInsertion' + 'Effect'] ? React$1['useInsertion' + 'Effect'] : function useInsertionEffect(create) {
  create();
};

function useInsertionEffectMaybe(create) {
  if (!isBrowser$1$1) {
    return create();
  }

  useInsertionEffect$1(create);
}

var typePropName = '__EMOTION_TYPE_PLEASE_DO_NOT_USE__';
var labelPropName = '__EMOTION_LABEL_PLEASE_DO_NOT_USE__';

var Insertion$1 = function Insertion(_ref) {
  var cache = _ref.cache,
      serialized = _ref.serialized,
      isStringTag = _ref.isStringTag;
  registerStyles(cache, serialized, isStringTag);
  var rules = useInsertionEffectMaybe(function () {
    return insertStyles(cache, serialized, isStringTag);
  });

  if (!isBrowser$1 && rules !== undefined) {
    var _ref2;

    var serializedNames = serialized.name;
    var next = serialized.next;

    while (next !== undefined) {
      serializedNames += ' ' + next.name;
      next = next.next;
    }

    return /*#__PURE__*/react.exports.createElement("style", (_ref2 = {}, _ref2["data-emotion"] = cache.key + " " + serializedNames, _ref2.dangerouslySetInnerHTML = {
      __html: rules
    }, _ref2.nonce = cache.sheet.nonce, _ref2));
  }

  return null;
};

var Emotion = /* #__PURE__ */withEmotionCache(function (props, cache, ref) {
  var cssProp = props.css; // so that using `css` from `emotion` and passing the result to the css prop works
  // not passing the registered cache to serializeStyles because it would
  // make certain babel optimisations not possible

  if (typeof cssProp === 'string' && cache.registered[cssProp] !== undefined) {
    cssProp = cache.registered[cssProp];
  }

  var WrappedComponent = props[typePropName];
  var registeredStyles = [cssProp];
  var className = '';

  if (typeof props.className === 'string') {
    className = getRegisteredStyles(cache.registered, registeredStyles, props.className);
  } else if (props.className != null) {
    className = props.className + " ";
  }

  var serialized = serializeStyles(registeredStyles, undefined, react.exports.useContext(ThemeContext));

  if (process.env.NODE_ENV !== 'production' && serialized.name.indexOf('-') === -1) {
    var labelFromStack = props[labelPropName];

    if (labelFromStack) {
      serialized = serializeStyles([serialized, 'label:' + labelFromStack + ';']);
    }
  }

  className += cache.key + "-" + serialized.name;
  var newProps = {};

  for (var key in props) {
    if (hasOwnProperty.call(props, key) && key !== 'css' && key !== typePropName && (process.env.NODE_ENV === 'production' || key !== labelPropName)) {
      newProps[key] = props[key];
    }
  }

  newProps.ref = ref;
  newProps.className = className;
  return /*#__PURE__*/react.exports.createElement(react.exports.Fragment, null, /*#__PURE__*/react.exports.createElement(Insertion$1, {
    cache: cache,
    serialized: serialized,
    isStringTag: typeof WrappedComponent === 'string'
  }), /*#__PURE__*/react.exports.createElement(WrappedComponent, newProps));
});

if (process.env.NODE_ENV !== 'production') {
  Emotion.displayName = 'EmotionCssPropInternal';
}

var pkg = {
  name: "@emotion/react",
  version: "11.8.1",
  main: "dist/emotion-react.cjs.js",
  module: "dist/emotion-react.esm.js",
  browser: {
    "./dist/emotion-react.cjs.js": "./dist/emotion-react.browser.cjs.js",
    "./dist/emotion-react.esm.js": "./dist/emotion-react.browser.esm.js"
  },
  types: "types/index.d.ts",
  files: ["src", "dist", "jsx-runtime", "jsx-dev-runtime", "_isolated-hnrs", "types/*.d.ts", "macro.js", "macro.d.ts", "macro.js.flow"],
  sideEffects: false,
  author: "Emotion Contributors",
  license: "MIT",
  scripts: {
    "test:typescript": "dtslint types"
  },
  dependencies: {
    "@babel/runtime": "^7.13.10",
    "@emotion/babel-plugin": "^11.7.1",
    "@emotion/cache": "^11.7.1",
    "@emotion/serialize": "^1.0.2",
    "@emotion/sheet": "^1.1.0",
    "@emotion/utils": "^1.1.0",
    "@emotion/weak-memoize": "^0.2.5",
    "hoist-non-react-statics": "^3.3.1"
  },
  peerDependencies: {
    "@babel/core": "^7.0.0",
    react: ">=16.8.0"
  },
  peerDependenciesMeta: {
    "@babel/core": {
      optional: true
    },
    "@types/react": {
      optional: true
    }
  },
  devDependencies: {
    "@babel/core": "^7.13.10",
    "@emotion/css": "11.7.1",
    "@emotion/css-prettifier": "1.0.1",
    "@emotion/server": "11.4.0",
    "@emotion/styled": "11.8.1",
    "@types/react": "^16.9.11",
    dtslint: "^0.3.0",
    "html-tag-names": "^1.1.2",
    react: "16.14.0",
    "svg-tag-names": "^1.1.1"
  },
  repository: "https://github.com/emotion-js/emotion/tree/main/packages/react",
  publishConfig: {
    access: "public"
  },
  "umd:main": "dist/emotion-react.umd.min.js",
  preconstruct: {
    entrypoints: ["./index.js", "./jsx-runtime.js", "./jsx-dev-runtime.js", "./_isolated-hnrs.js"],
    umdName: "emotionReact"
  }
};

var useInsertionEffect = React$1['useInsertion' + 'Effect'] ? React$1['useInsertion' + 'Effect'] : react.exports.useLayoutEffect;
var warnedAboutCssPropForGlobal = false; // maintain place over rerenders.
// initial render from browser, insertBefore context.sheet.tags[0] or if a style hasn't been inserted there yet, appendChild
// initial client-side render from SSR, use place of hydrating tag

var Global = /* #__PURE__ */withEmotionCache(function (props, cache) {
  if (process.env.NODE_ENV !== 'production' && !warnedAboutCssPropForGlobal && ( // check for className as well since the user is
  // probably using the custom createElement which
  // means it will be turned into a className prop
  // $FlowFixMe I don't really want to add it to the type since it shouldn't be used
  props.className || props.css)) {
    console.error("It looks like you're using the css prop on Global, did you mean to use the styles prop instead?");
    warnedAboutCssPropForGlobal = true;
  }

  var styles = props.styles;
  var serialized = serializeStyles([styles], undefined, react.exports.useContext(ThemeContext));

  if (!isBrowser$1) {
    var _ref;

    var serializedNames = serialized.name;
    var serializedStyles = serialized.styles;
    var next = serialized.next;

    while (next !== undefined) {
      serializedNames += ' ' + next.name;
      serializedStyles += next.styles;
      next = next.next;
    }

    var shouldCache = cache.compat === true;
    var rules = cache.insert("", {
      name: serializedNames,
      styles: serializedStyles
    }, cache.sheet, shouldCache);

    if (shouldCache) {
      return null;
    }

    return /*#__PURE__*/react.exports.createElement("style", (_ref = {}, _ref["data-emotion"] = cache.key + "-global " + serializedNames, _ref.dangerouslySetInnerHTML = {
      __html: rules
    }, _ref.nonce = cache.sheet.nonce, _ref));
  } // yes, i know these hooks are used conditionally
  // but it is based on a constant that will never change at runtime
  // it's effectively like having two implementations and switching them out
  // so it's not actually breaking anything


  var sheetRef = react.exports.useRef();
  useInsertionEffect(function () {
    var key = cache.key + "-global";
    var sheet = new StyleSheet({
      key: key,
      nonce: cache.sheet.nonce,
      container: cache.sheet.container,
      speedy: cache.sheet.isSpeedy
    });
    var rehydrating = false; // $FlowFixMe

    var node = document.querySelector("style[data-emotion=\"" + key + " " + serialized.name + "\"]");

    if (cache.sheet.tags.length) {
      sheet.before = cache.sheet.tags[0];
    }

    if (node !== null) {
      rehydrating = true; // clear the hash so this node won't be recognizable as rehydratable by other <Global/>s

      node.setAttribute('data-emotion', key);
      sheet.hydrate([node]);
    }

    sheetRef.current = [sheet, rehydrating];
    return function () {
      sheet.flush();
    };
  }, [cache]);
  useInsertionEffect(function () {
    var sheetRefCurrent = sheetRef.current;
    var sheet = sheetRefCurrent[0],
        rehydrating = sheetRefCurrent[1];

    if (rehydrating) {
      sheetRefCurrent[1] = false;
      return;
    }

    if (serialized.next !== undefined) {
      // insert keyframes
      insertStyles(cache, serialized.next, true);
    }

    if (sheet.tags.length) {
      // if this doesn't exist then it will be null so the style element will be appended
      var element = sheet.tags[sheet.tags.length - 1].nextElementSibling;
      sheet.before = element;
      sheet.flush();
    }

    cache.insert("", serialized, sheet, false);
  }, [cache, serialized.name]);
  return null;
});

if (process.env.NODE_ENV !== 'production') {
  Global.displayName = 'EmotionGlobal';
}

function css() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return serializeStyles(args);
}

var classnames$2 = function classnames(args) {
  var len = args.length;
  var i = 0;
  var cls = '';

  for (; i < len; i++) {
    var arg = args[i];
    if (arg == null) continue;
    var toAdd = void 0;

    switch (typeof arg) {
      case 'boolean':
        break;

      case 'object':
        {
          if (Array.isArray(arg)) {
            toAdd = classnames(arg);
          } else {
            if (process.env.NODE_ENV !== 'production' && arg.styles !== undefined && arg.name !== undefined) {
              console.error('You have passed styles created with `css` from `@emotion/react` package to the `cx`.\n' + '`cx` is meant to compose class names (strings) so you should convert those styles to a class name by passing them to the `css` received from <ClassNames/> component.');
            }

            toAdd = '';

            for (var k in arg) {
              if (arg[k] && k) {
                toAdd && (toAdd += ' ');
                toAdd += k;
              }
            }
          }

          break;
        }

      default:
        {
          toAdd = arg;
        }
    }

    if (toAdd) {
      cls && (cls += ' ');
      cls += toAdd;
    }
  }

  return cls;
};

function merge(registered, css, className) {
  var registeredStyles = [];
  var rawClassName = getRegisteredStyles(registered, registeredStyles, className);

  if (registeredStyles.length < 2) {
    return className;
  }

  return rawClassName + css(registeredStyles);
}

var Insertion = function Insertion(_ref) {
  var cache = _ref.cache,
      serializedArr = _ref.serializedArr;
  var rules = useInsertionEffectMaybe(function () {
    var rules = '';

    for (var i = 0; i < serializedArr.length; i++) {
      var res = insertStyles(cache, serializedArr[i], false);

      if (!isBrowser$1 && res !== undefined) {
        rules += res;
      }
    }

    if (!isBrowser$1) {
      return rules;
    }
  });

  if (!isBrowser$1 && rules.length !== 0) {
    var _ref2;

    return /*#__PURE__*/react.exports.createElement("style", (_ref2 = {}, _ref2["data-emotion"] = cache.key + " " + serializedArr.map(function (serialized) {
      return serialized.name;
    }).join(' '), _ref2.dangerouslySetInnerHTML = {
      __html: rules
    }, _ref2.nonce = cache.sheet.nonce, _ref2));
  }

  return null;
};

var ClassNames = /* #__PURE__ */withEmotionCache(function (props, cache) {
  var hasRendered = false;
  var serializedArr = [];

  var css = function css() {
    if (hasRendered && process.env.NODE_ENV !== 'production') {
      throw new Error('css can only be used during render');
    }

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var serialized = serializeStyles(args, cache.registered);
    serializedArr.push(serialized); // registration has to happen here as the result of this might get consumed by `cx`

    registerStyles(cache, serialized, false);
    return cache.key + "-" + serialized.name;
  };

  var cx = function cx() {
    if (hasRendered && process.env.NODE_ENV !== 'production') {
      throw new Error('cx can only be used during render');
    }

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return merge(cache.registered, css, classnames$2(args));
  };

  var content = {
    css: css,
    cx: cx,
    theme: react.exports.useContext(ThemeContext)
  };
  var ele = props.children(content);
  hasRendered = true;
  return /*#__PURE__*/react.exports.createElement(react.exports.Fragment, null, /*#__PURE__*/react.exports.createElement(Insertion, {
    cache: cache,
    serializedArr: serializedArr
  }), ele);
});

if (process.env.NODE_ENV !== 'production') {
  ClassNames.displayName = 'EmotionClassNames';
}

if (process.env.NODE_ENV !== 'production') {
  var isBrowser = typeof document !== 'undefined'; // #1727 for some reason Jest evaluates modules twice if some consuming module gets mocked with jest.mock

  var isJest = typeof jest !== 'undefined';

  if (isBrowser && !isJest) {
    // globalThis has wide browser support - https://caniuse.com/?search=globalThis, Node.js 12 and later
    var globalContext = // $FlowIgnore
    typeof globalThis !== 'undefined' ? globalThis // eslint-disable-line no-undef
    : isBrowser ? window : global;
    var globalKey = "__EMOTION_REACT_" + pkg.version.split('.')[0] + "__";

    if (globalContext[globalKey]) {
      console.warn('You are loading @emotion/react when it is already loaded. Running ' + 'multiple instances may cause problems. This can happen if multiple ' + 'versions are used, or if multiple builds of the same version are ' + 'used.');
    }

    globalContext[globalKey] = true;
  }
}

const styles = ({}) => css `
  color: red;
`;

var classnames$1 = {exports: {}};

/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/

(function (module) {
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
        } else if (Array.isArray(arg)) {
          if (arg.length) {
            var inner = classNames.apply(null, arg);

            if (inner) {
              classes.push(inner);
            }
          }
        } else if (argType === 'object') {
          if (arg.toString === Object.prototype.toString) {
            for (var key in arg) {
              if (hasOwn.call(arg, key) && arg[key]) {
                classes.push(key);
              }
            }
          } else {
            classes.push(arg.toString());
          }
        }
      }

      return classes.join(' ');
    }

    if (module.exports) {
      classNames.default = classNames;
      module.exports = classNames;
    } else {
      window.classNames = classNames;
    }
  })();
})(classnames$1);

var classnames = classnames$1.exports;

const Typography = (_a) => {
    var { size = 'medium', weight = 'normal', children, className, caption = false, ellipsis = false, color = 'secondary', uppercase = false, hoverAsLink = false, lineBreaks = false, tag = 'p' } = _a, restProps = __rest(_a, ["size", "weight", "children", "className", "caption", "ellipsis", "color", "uppercase", "hoverAsLink", "lineBreaks", "tag"]);
    const Component = tag;
    return (React.createElement(Component, Object.assign({ css: styles({
            size,
            weight,
            color,
            caption,
            uppercase,
            ellipsis,
            lineBreaks
        }), className: classnames(className, { ['hover-as-link']: hoverAsLink }) }, restProps), children));
};

exports.Button = Button;
exports.Typography = Typography;
//# sourceMappingURL=index.js.map
