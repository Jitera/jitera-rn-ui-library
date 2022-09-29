"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/* eslint-disable @typescript-eslint/no-unused-vars */
var _default = color => {
  return {
    alpha: function () {
      let value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      return {
        rgb: () => {
          return {
            string: () => {
              return color;
            }
          };
        }
      };
    },
    darken: function () {
      let value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      return {
        string: () => {
          return color;
        }
      };
    }
  };
};

exports.default = _default;
//# sourceMappingURL=index.web.js.map