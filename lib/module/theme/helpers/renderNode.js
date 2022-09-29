function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';

const renderNode = function (Component, content) {
  let defaultProps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  if (content == null || content === false) {
    return null;
  }

  if ( /*#__PURE__*/React.isValidElement(content)) {
    return content;
  }

  if (typeof content === 'function') {
    return content();
  } // Just in case


  if (content === true) {
    return /*#__PURE__*/React.createElement(Component, defaultProps);
  }

  if (typeof content === 'string') {
    if (content.length === 0) {
      return null;
    }

    return /*#__PURE__*/React.createElement(Component, defaultProps, content);
  }

  if (typeof content === 'number') {
    return /*#__PURE__*/React.createElement(Component, defaultProps, content);
  }

  return /*#__PURE__*/React.createElement(Component, _extends({}, defaultProps, content));
};

export default renderNode;
//# sourceMappingURL=renderNode.js.map