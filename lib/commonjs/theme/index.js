"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "ThemeConsumer", {
  enumerable: true,
  get: function () {
    return _ThemeProvider.ThemeConsumer;
  }
});
Object.defineProperty(exports, "ThemeContext", {
  enumerable: true,
  get: function () {
    return _ThemeProvider.ThemeContext;
  }
});
Object.defineProperty(exports, "ThemeProvider", {
  enumerable: true,
  get: function () {
    return _ThemeProvider.default;
  }
});
Object.defineProperty(exports, "colors", {
  enumerable: true,
  get: function () {
    return _colors.default;
  }
});
Object.defineProperty(exports, "colorsDark", {
  enumerable: true,
  get: function () {
    return _colorsDark.default;
  }
});
Object.defineProperty(exports, "defaultTheme", {
  enumerable: true,
  get: function () {
    return _theme.default;
  }
});
Object.defineProperty(exports, "makeStyles", {
  enumerable: true,
  get: function () {
    return _makeStyles.makeStyles;
  }
});
Object.defineProperty(exports, "normalize", {
  enumerable: true,
  get: function () {
    return _normalizeText.default;
  }
});
Object.defineProperty(exports, "useTheme", {
  enumerable: true,
  get: function () {
    return _makeStyles.useTheme;
  }
});
Object.defineProperty(exports, "withTheme", {
  enumerable: true,
  get: function () {
    return _withTheme.default;
  }
});

var _colors = _interopRequireDefault(require("./colors"));

var _colorsDark = _interopRequireDefault(require("./colorsDark"));

var _ThemeProvider = _interopRequireWildcard(require("./ThemeProvider"));

var _withTheme = _interopRequireDefault(require("./withTheme"));

var _makeStyles = require("./makeStyles");

var _theme = _interopRequireDefault(require("./theme"));

var _normalizeText = _interopRequireDefault(require("./helpers/normalizeText"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
//# sourceMappingURL=index.js.map