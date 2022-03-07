'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var react = require('@emotion/react');

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

var css_248z = "@import './fonts.css';\n\n/*\n! tailwindcss v3.0.23 | MIT License | https://tailwindcss.com\n*/\n\n/*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: #e5e7eb; /* 2 */\n}\n\n::before,\n::after {\n  --tw-content: '';\n}\n\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user's configured `sans` font-family by default.\n*/\n\nhtml {\n  line-height: 1.5; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n  -moz-tab-size: 4; /* 3 */\n  -o-tab-size: 4;\n     tab-size: 4; /* 3 */\n  font-family: Rubik, Arial, sans-serif; /* 4 */\n}\n\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\n*/\n\nbody {\n  margin: 0; /* 1 */\n  line-height: inherit; /* 2 */\n}\n\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n  border-top-width: 1px; /* 3 */\n}\n\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr:where([title]) {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n\n/*\nRemove the default font size and weight for headings.\n*/\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/*\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/*\n1. Use the user's configured `mono` font family by default.\n2. Correct the odd `em` font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/*\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/*\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n  border-collapse: collapse; /* 3 */\n}\n\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: inherit; /* 1 */\n  color: inherit; /* 1 */\n  margin: 0; /* 2 */\n  padding: 0; /* 3 */\n}\n\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\n\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n  -webkit-appearance: button; /* 1 */\n  background-color: transparent; /* 2 */\n  background-image: none; /* 2 */\n}\n\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n\n:-moz-focusring {\n  outline: auto;\n}\n\n/*\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type='search'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to `inherit` in Safari.\n*/\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nlegend {\n  padding: 0;\n}\n\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/*\nPrevent resizing textareas horizontally by default.\n*/\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user's configured gray 400 color.\n*/\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\ninput:-ms-input-placeholder, textarea:-ms-input-placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\n/*\nSet the default cursor for buttons.\n*/\n\nbutton,\n[role=\"button\"] {\n  cursor: pointer;\n}\n\n/*\nMake sure disabled buttons don't get the pointer cursor.\n*/\n\n:disabled {\n  cursor: default;\n}\n\n/*\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/*\nEnsure the default browser behavior of the `hidden` attribute.\n*/\n\n[hidden] {\n  display: none;\n}\n\n.text-caption-sm{\n  font-size: 0.625rem;\n  line-height: 140%;\n}\n\n@media (min-width: 768px){\n\n  .text-caption-sm{\n    font-size: 0.75rem;\n    line-height: 140%;\n  }\n}\n\n.text-caption-md{\n  font-size: 0.75rem;\n  line-height: 140%;\n}\n\n@media (min-width: 768px){\n\n  .text-caption-md{\n    font-size: 0.875rem;\n    line-height: 140%;\n  }\n}\n\n.text-caption-lg{\n  font-size: 0.875rem;\n  line-height: 140%;\n}\n\n@media (min-width: 768px){\n\n  .text-caption-lg{\n    font-size: 1rem;\n    line-height: 140%;\n  }\n}\n\n.text-body-sm{\n  font-size: 1rem;\n  line-height: 140%;\n}\n\n@media (min-width: 768px){\n\n  .text-body-sm{\n    font-size: 1.125rem;\n    line-height: 140%;\n  }\n}\n\n.text-body-md{\n  font-size: 1.125rem;\n  line-height: 140%;\n}\n\n@media (min-width: 768px){\n\n  .text-body-md{\n    font-size: 1.25rem;\n    line-height: 140%;\n  }\n}\n\n.text-body-lg{\n  font-size: 1.5rem;\n  line-height: 140%;\n}\n\n@media (min-width: 768px){\n\n  .text-body-lg{\n    font-size: 2.25rem;\n    line-height: 140%;\n  }\n}\n\n*, ::before, ::after{\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n.container{\n  width: 100%;\n}\n@media (min-width: 375px){\n\n  .container{\n    max-width: 375px;\n  }\n}\n@media (min-width: 480px){\n\n  .container{\n    max-width: 480px;\n  }\n}\n@media (min-width: 640px){\n\n  .container{\n    max-width: 640px;\n  }\n}\n@media (min-width: 768px){\n\n  .container{\n    max-width: 768px;\n  }\n}\n@media (min-width: 1024px){\n\n  .container{\n    max-width: 1024px;\n  }\n}\n@media (min-width: 1280px){\n\n  .container{\n    max-width: 1280px;\n  }\n}\n@media (min-width: 1400px){\n\n  .container{\n    max-width: 1400px;\n  }\n}\n@media (min-width: 1720px){\n\n  .container{\n    max-width: 1720px;\n  }\n}\n.container{\n  padding-left: 1rem;\n  padding-right: 1rem;\n  margin: 0 auto 5rem;\n}\n@media (min-width: 375px){\n\n  .container{\n    padding-left: 1.5rem;\n    padding-right: 1.5rem;\n    max-width: none;\n  }\n}\n@media (min-width: 768px){\n\n  .container{\n    padding-left: 2rem;\n    padding-right: 2rem;\n    max-width: none;\n  }\n}\n@media (min-width: 1400px){\n\n  .container{\n    padding-left: 5rem;\n    padding-right: 5rem;\n    max-width: 100rem;\n  }\n}\n.overflow-hidden{\n  overflow: hidden;\n}\n.overflow-ellipsis{\n  text-overflow: ellipsis;\n}\n.whitespace-pre-line{\n  white-space: pre-line;\n}\n.font-normal{\n  font-weight: 400;\n}\n.font-medium{\n  font-weight: 500;\n}\n.font-semibold{\n  font-weight: 600;\n}\n.uppercase{\n  text-transform: uppercase;\n}\n.text-neutral-silver{\n  --tw-text-opacity: 1;\n  color: rgb(176 176 176 / var(--tw-text-opacity));\n}\n.text-neutral{\n  --tw-text-opacity: 1;\n  color: rgb(14 14 14 / var(--tw-text-opacity));\n}\n.text-primary{\n  --tw-text-opacity: 1;\n  color: rgb(101 96 189 / var(--tw-text-opacity));\n}\n.text-secondary{\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity));\n}\n.text-system-error{\n  --tw-text-opacity: 1;\n  color: rgb(251 18 102 / var(--tw-text-opacity));\n}\n.text-system-warning{\n  --tw-text-opacity: 1;\n  color: rgb(228 228 79 / var(--tw-text-opacity));\n}\n.text-system-success{\n  --tw-text-opacity: 1;\n  color: rgb(101 238 156 / var(--tw-text-opacity));\n}\n.text-system-info{\n  --tw-text-opacity: 1;\n  color: rgb(105 192 202 / var(--tw-text-opacity));\n}\n.underline{\n  -webkit-text-decoration-line: underline;\n          text-decoration-line: underline;\n}\n.transition{\n  transition-property: color, background-color, border-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-text-decoration-color, -webkit-backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-text-decoration-color, -webkit-backdrop-filter;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n}\n";
styleInject(css_248z);

var Button = function Button(_ref) {
  var label = _ref.label;
  return react.jsx("div", null, react.jsx("button", null, label));
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
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function _EMOTION_STRINGIFIED_CSS_ERROR__() { return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop)."; }

var _ref = process.env.NODE_ENV === "production" ? {
  name: "or1bqa",
  styles: "cursor:pointer;text-decoration:underline"
} : {
  name: "2honql-styles",
  styles: "cursor:pointer;text-decoration:underline;label:styles;",
  map: "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2QlEiLCJmaWxlIjoic3R5bGVzLnRzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR3LCB7IGNzcyB9IGZyb20gJ3R3aW4ubWFjcm8nO1xuY29uc3Qgc3R5bGVzID0gKHsgc2l6ZSA9ICdtZWRpdW0nLCB3ZWlnaHQgPSAnbm9ybWFsJywgY29sb3IgPSAncHJpbWFyeScsIGNhcHRpb24gPSBmYWxzZSwgdmFyaWFudEhvdmVyID0gJ25vcm1hbCcsIGVsbGlwc2lzID0gZmFsc2UsIHVwcGVyY2FzZSA9IGZhbHNlLCB1bmRlcmxpbmUgPSBmYWxzZSwgbGluZUJyZWFrcyA9IGZhbHNlIH0pID0+IGNzcyBgXG4gICR7Y29sb3IgPT09ICdtdXRlZCcgJiYgdHcgYHRleHQtbmV1dHJhbC1zaWx2ZXJgfTtcbiAgJHtjb2xvciA9PT0gJ2RhcmsnICYmIHR3IGB0ZXh0LW5ldXRyYWxgfTtcbiAgJHtjb2xvciA9PT0gJ3ByaW1hcnknICYmIHR3IGB0ZXh0LXByaW1hcnlgfTtcbiAgJHtjb2xvciA9PT0gJ3NlY29uZGFyeScgJiYgdHcgYHRleHQtc2Vjb25kYXJ5YH07XG4gICR7Y29sb3IgPT09ICdlcnJvcicgJiYgdHcgYHRleHQtc3lzdGVtLWVycm9yYH07XG4gICR7Y29sb3IgPT09ICd3YXJuaW5nJyAmJiB0dyBgdGV4dC1zeXN0ZW0td2FybmluZ2B9O1xuICAke2NvbG9yID09PSAnc3VjY2VzcycgJiYgdHcgYHRleHQtc3lzdGVtLXN1Y2Nlc3NgfTtcbiAgJHtjb2xvciA9PT0gJ2luZm8nICYmIHR3IGB0ZXh0LXN5c3RlbS1pbmZvYH07XG5cbiAgJHtzaXplID09PSAnc21hbGwnICYmIHR3IGB0ZXh0LWJvZHktc21gfTtcbiAgJHtzaXplID09PSAnbWVkaXVtJyAmJiB0dyBgdGV4dC1ib2R5LW1kYH07XG4gICR7c2l6ZSA9PT0gJ2xhcmdlJyAmJiB0dyBgdGV4dC1ib2R5LWxnYH07XG4gICR7c2l6ZSA9PT0gJ3NtYWxsJyAmJiBjYXB0aW9uICYmIHR3IGB0ZXh0LWNhcHRpb24tc21gfTtcbiAgJHtzaXplID09PSAnbWVkaXVtJyAmJiBjYXB0aW9uICYmIHR3IGB0ZXh0LWNhcHRpb24tbWRgfTtcbiAgJHtzaXplID09PSAnbGFyZ2UnICYmIGNhcHRpb24gJiYgdHcgYHRleHQtY2FwdGlvbi1sZ2B9O1xuXG4gICR7d2VpZ2h0ID09PSAnbm9ybWFsJyAmJiB0dyBgZm9udC1ub3JtYWxgfTtcbiAgJHt3ZWlnaHQgPT09ICdtZWRpdW0nICYmIHR3IGBmb250LW1lZGl1bWB9O1xuICAke3dlaWdodCA9PT0gJ3NlbWlib2xkJyAmJiB0dyBgZm9udC1zZW1pYm9sZGB9O1xuXG4gICR7dXBwZXJjYXNlICYmIHR3IGB1cHBlcmNhc2VgfTtcblxuICAke2xpbmVCcmVha3MgJiYgdHcgYHdoaXRlc3BhY2UtcHJlLWxpbmVgfTtcblxuICAke2VsbGlwc2lzICYmIHR3IGBvdmVyZmxvdy1lbGxpcHNpcyBvdmVyZmxvdy1oaWRkZW5gfTtcblxuICAke3VuZGVybGluZSAmJlxuICAgIGNzcyBgXG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICBgfVxuXG4gICYuaG92ZXItYXMtbGluayB7XG4gICAgdHJhbnNpdGlvbjogY29sb3I7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgICR7dHcgYHRleHQtbmV1dHJhbC1zaWx2ZXJgfVxuICAgIH1cbiAgfVxuYDtcbmV4cG9ydCBkZWZhdWx0IHN0eWxlcztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXN0eWxlcy5qcy5tYXAiXX0= */",
  toString: _EMOTION_STRINGIFIED_CSS_ERROR__
};

var styles = function styles(_ref2) {
  var _ref2$size = _ref2.size,
      size = _ref2$size === void 0 ? 'medium' : _ref2$size,
      _ref2$weight = _ref2.weight,
      weight = _ref2$weight === void 0 ? 'normal' : _ref2$weight,
      _ref2$color = _ref2.color,
      color = _ref2$color === void 0 ? 'primary' : _ref2$color,
      _ref2$caption = _ref2.caption,
      caption = _ref2$caption === void 0 ? false : _ref2$caption;
      _ref2.variantHover;
      var _ref2$ellipsis = _ref2.ellipsis,
      ellipsis = _ref2$ellipsis === void 0 ? false : _ref2$ellipsis,
      _ref2$uppercase = _ref2.uppercase,
      uppercase = _ref2$uppercase === void 0 ? false : _ref2$uppercase,
      _ref2$underline = _ref2.underline,
      underline = _ref2$underline === void 0 ? false : _ref2$underline,
      _ref2$lineBreaks = _ref2.lineBreaks,
      lineBreaks = _ref2$lineBreaks === void 0 ? false : _ref2$lineBreaks;
  return (
    /*#__PURE__*/

    /*#__PURE__*/
    react.css(color === 'muted' && {
      "--tw-text-opacity": "1",
      "color": "rgba(176, 176, 176, var(--tw-text-opacity))"
    }, ";", color === 'dark' && {
      "--tw-text-opacity": "1",
      "color": "rgba(14, 14, 14, var(--tw-text-opacity))"
    }, ";", color === 'primary' && {
      "--tw-text-opacity": "1",
      "color": "rgba(101, 96, 189, var(--tw-text-opacity))"
    }, ";", color === 'secondary' && {
      "--tw-text-opacity": "1",
      "color": "rgba(255, 255, 255, var(--tw-text-opacity))"
    }, ";", color === 'error' && {
      "--tw-text-opacity": "1",
      "color": "rgba(251, 18, 102, var(--tw-text-opacity))"
    }, ";", color === 'warning' && {
      "--tw-text-opacity": "1",
      "color": "rgba(228, 228, 79, var(--tw-text-opacity))"
    }, ";", color === 'success' && {
      "--tw-text-opacity": "1",
      "color": "rgba(101, 238, 156, var(--tw-text-opacity))"
    }, ";", color === 'info' && {
      "--tw-text-opacity": "1",
      "color": "rgba(105, 192, 202, var(--tw-text-opacity))"
    }, ";", size === 'small' && {
      "fontSize": "1rem",
      "lineHeight": "140%",
      "@media (min-width: 768px)": {
        "fontSize": "1.125rem",
        "lineHeight": "140%"
      }
    }, ";", size === 'medium' && {
      "fontSize": "1.125rem",
      "lineHeight": "140%",
      "@media (min-width: 768px)": {
        "fontSize": "1.25rem",
        "lineHeight": "140%"
      }
    }, ";", size === 'large' && {
      "fontSize": "1.5rem",
      "lineHeight": "140%",
      "@media (min-width: 768px)": {
        "fontSize": "2.25rem",
        "lineHeight": "140%"
      }
    }, ";", size === 'small' && caption && {
      "fontSize": "0.625rem",
      "lineHeight": "140%",
      "@media (min-width: 768px)": {
        "fontSize": "0.75rem",
        "lineHeight": "140%"
      }
    }, ";", size === 'medium' && caption && {
      "fontSize": "0.75rem",
      "lineHeight": "140%",
      "@media (min-width: 768px)": {
        "fontSize": "0.875rem",
        "lineHeight": "140%"
      }
    }, ";", size === 'large' && caption && {
      "fontSize": "0.875rem",
      "lineHeight": "140%",
      "@media (min-width: 768px)": {
        "fontSize": "1rem",
        "lineHeight": "140%"
      }
    }, ";", weight === 'normal' && {
      "fontWeight": "400"
    }, ";", weight === 'medium' && {
      "fontWeight": "500"
    }, ";", weight === 'semibold' && {
      "fontWeight": "600"
    }, ";", uppercase && {
      "textTransform": "uppercase"
    }, ";", lineBreaks && {
      "whiteSpace": "pre-line"
    }, ";", ellipsis && {
      "textOverflow": "ellipsis",
      "overflow": "hidden"
    }, ";", underline && _ref, " &.hover-as-link{transition:color;&:hover{--tw-text-opacity:1;color:rgba(176, 176, 176, var(--tw-text-opacity));;}}" + (process.env.NODE_ENV === "production" ? "" : ";label:styles;"), process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDd00iLCJmaWxlIjoic3R5bGVzLnRzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHR3LCB7IGNzcyB9IGZyb20gJ3R3aW4ubWFjcm8nO1xuY29uc3Qgc3R5bGVzID0gKHsgc2l6ZSA9ICdtZWRpdW0nLCB3ZWlnaHQgPSAnbm9ybWFsJywgY29sb3IgPSAncHJpbWFyeScsIGNhcHRpb24gPSBmYWxzZSwgdmFyaWFudEhvdmVyID0gJ25vcm1hbCcsIGVsbGlwc2lzID0gZmFsc2UsIHVwcGVyY2FzZSA9IGZhbHNlLCB1bmRlcmxpbmUgPSBmYWxzZSwgbGluZUJyZWFrcyA9IGZhbHNlIH0pID0+IGNzcyBgXG4gICR7Y29sb3IgPT09ICdtdXRlZCcgJiYgdHcgYHRleHQtbmV1dHJhbC1zaWx2ZXJgfTtcbiAgJHtjb2xvciA9PT0gJ2RhcmsnICYmIHR3IGB0ZXh0LW5ldXRyYWxgfTtcbiAgJHtjb2xvciA9PT0gJ3ByaW1hcnknICYmIHR3IGB0ZXh0LXByaW1hcnlgfTtcbiAgJHtjb2xvciA9PT0gJ3NlY29uZGFyeScgJiYgdHcgYHRleHQtc2Vjb25kYXJ5YH07XG4gICR7Y29sb3IgPT09ICdlcnJvcicgJiYgdHcgYHRleHQtc3lzdGVtLWVycm9yYH07XG4gICR7Y29sb3IgPT09ICd3YXJuaW5nJyAmJiB0dyBgdGV4dC1zeXN0ZW0td2FybmluZ2B9O1xuICAke2NvbG9yID09PSAnc3VjY2VzcycgJiYgdHcgYHRleHQtc3lzdGVtLXN1Y2Nlc3NgfTtcbiAgJHtjb2xvciA9PT0gJ2luZm8nICYmIHR3IGB0ZXh0LXN5c3RlbS1pbmZvYH07XG5cbiAgJHtzaXplID09PSAnc21hbGwnICYmIHR3IGB0ZXh0LWJvZHktc21gfTtcbiAgJHtzaXplID09PSAnbWVkaXVtJyAmJiB0dyBgdGV4dC1ib2R5LW1kYH07XG4gICR7c2l6ZSA9PT0gJ2xhcmdlJyAmJiB0dyBgdGV4dC1ib2R5LWxnYH07XG4gICR7c2l6ZSA9PT0gJ3NtYWxsJyAmJiBjYXB0aW9uICYmIHR3IGB0ZXh0LWNhcHRpb24tc21gfTtcbiAgJHtzaXplID09PSAnbWVkaXVtJyAmJiBjYXB0aW9uICYmIHR3IGB0ZXh0LWNhcHRpb24tbWRgfTtcbiAgJHtzaXplID09PSAnbGFyZ2UnICYmIGNhcHRpb24gJiYgdHcgYHRleHQtY2FwdGlvbi1sZ2B9O1xuXG4gICR7d2VpZ2h0ID09PSAnbm9ybWFsJyAmJiB0dyBgZm9udC1ub3JtYWxgfTtcbiAgJHt3ZWlnaHQgPT09ICdtZWRpdW0nICYmIHR3IGBmb250LW1lZGl1bWB9O1xuICAke3dlaWdodCA9PT0gJ3NlbWlib2xkJyAmJiB0dyBgZm9udC1zZW1pYm9sZGB9O1xuXG4gICR7dXBwZXJjYXNlICYmIHR3IGB1cHBlcmNhc2VgfTtcblxuICAke2xpbmVCcmVha3MgJiYgdHcgYHdoaXRlc3BhY2UtcHJlLWxpbmVgfTtcblxuICAke2VsbGlwc2lzICYmIHR3IGBvdmVyZmxvdy1lbGxpcHNpcyBvdmVyZmxvdy1oaWRkZW5gfTtcblxuICAke3VuZGVybGluZSAmJlxuICAgIGNzcyBgXG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICBgfVxuXG4gICYuaG92ZXItYXMtbGluayB7XG4gICAgdHJhbnNpdGlvbjogY29sb3I7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgICR7dHcgYHRleHQtbmV1dHJhbC1zaWx2ZXJgfVxuICAgIH1cbiAgfVxuYDtcbmV4cG9ydCBkZWZhdWx0IHN0eWxlcztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXN0eWxlcy5qcy5tYXAiXX0= */", process.env.NODE_ENV === "production" ? "" : ";label:styles;")
  );
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

var Typography = function Typography(_a) {
  var _a$size = _a.size,
      size = _a$size === void 0 ? 'medium' : _a$size,
      _a$weight = _a.weight,
      weight = _a$weight === void 0 ? 'normal' : _a$weight,
      children = _a.children,
      className = _a.className,
      _a$caption = _a.caption,
      caption = _a$caption === void 0 ? false : _a$caption,
      _a$ellipsis = _a.ellipsis,
      ellipsis = _a$ellipsis === void 0 ? false : _a$ellipsis,
      _a$color = _a.color,
      color = _a$color === void 0 ? 'secondary' : _a$color,
      _a$uppercase = _a.uppercase,
      uppercase = _a$uppercase === void 0 ? false : _a$uppercase,
      _a$hoverAsLink = _a.hoverAsLink,
      hoverAsLink = _a$hoverAsLink === void 0 ? false : _a$hoverAsLink,
      _a$lineBreaks = _a.lineBreaks,
      lineBreaks = _a$lineBreaks === void 0 ? false : _a$lineBreaks,
      _a$tag = _a.tag,
      tag = _a$tag === void 0 ? 'p' : _a$tag,
      restProps = __rest(_a, ["size", "weight", "children", "className", "caption", "ellipsis", "color", "uppercase", "hoverAsLink", "lineBreaks", "tag"]);

  var Component = tag;
  return react.jsx(Component, _extends({
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

exports.Button = Button;
exports.Typography = Typography;
//# sourceMappingURL=index.js.map
