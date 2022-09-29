/* eslint-disable @typescript-eslint/no-unused-vars */
export default (color => {
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
});
//# sourceMappingURL=index.web.js.map