"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useFirstMountState = useFirstMountState;

var _react = require("react");

function useFirstMountState() {
  const isFirst = (0, _react.useRef)(true);

  if (isFirst.current) {
    isFirst.current = false;
    return true;
  }

  return isFirst.current;
}
//# sourceMappingURL=useFirstMountState.js.map