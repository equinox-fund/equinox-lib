import React from 'react';

var Button = function Button(_ref) {
  var label = _ref.label;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", null, label));
};

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

function _objectDestructuringEmpty(obj) {
  if (obj == null) throw new TypeError("Cannot destructure undefined");
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

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

var _ref = process.env.NODE_ENV === "production" ? {
  name: "hwfcu5",
  styles: "color:red"
} : {
  name: "szoot9-styles",
  styles: "color:red;label:styles;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFMEIiLCJmaWxlIjoic3R5bGVzLnRzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vcmVhY3QnXG5cbmNvbnN0IHN0eWxlcyA9ICh7fSkgPT4gY3NzYFxuICBjb2xvcjogcmVkO1xuYFxuXG5leHBvcnQgZGVmYXVsdCBzdHlsZXNcbiJdfQ== */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

var styles = function styles(_ref2) {
  _objectDestructuringEmpty(_ref2);

  return _ref;
};

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
}());
}(classnames$1));

var classnames = classnames$1.exports;

var _excluded = ["size", "weight", "children", "className", "caption", "ellipsis", "color", "uppercase", "hoverAsLink", "lineBreaks", "tag"];

var Typography = function Typography(_ref) {
  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'medium' : _ref$size,
      _ref$weight = _ref.weight,
      weight = _ref$weight === void 0 ? 'normal' : _ref$weight,
      children = _ref.children,
      className = _ref.className,
      _ref$caption = _ref.caption,
      caption = _ref$caption === void 0 ? false : _ref$caption,
      _ref$ellipsis = _ref.ellipsis,
      ellipsis = _ref$ellipsis === void 0 ? false : _ref$ellipsis,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? 'secondary' : _ref$color,
      _ref$uppercase = _ref.uppercase,
      uppercase = _ref$uppercase === void 0 ? false : _ref$uppercase,
      _ref$hoverAsLink = _ref.hoverAsLink,
      hoverAsLink = _ref$hoverAsLink === void 0 ? false : _ref$hoverAsLink,
      _ref$lineBreaks = _ref.lineBreaks,
      lineBreaks = _ref$lineBreaks === void 0 ? false : _ref$lineBreaks,
      _ref$tag = _ref.tag,
      tag = _ref$tag === void 0 ? 'p' : _ref$tag,
      restProps = _objectWithoutProperties(_ref, _excluded);

  var Component = tag;
  return /*#__PURE__*/React.createElement(Component, _extends({
    css: styles({
      size: size,
      weight: weight,
      color: color,
      caption: caption,
      uppercase: uppercase,
      ellipsis: ellipsis,
      lineBreaks: lineBreaks
    }),
    className: classnames(className, _defineProperty({}, 'hover-as-link', hoverAsLink))
  }, restProps), children);
};

export { Button, Typography };
//# sourceMappingURL=index.js.map
