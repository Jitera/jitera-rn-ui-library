/* eslint-disable @typescript-eslint/no-unused-vars */
export default (color: string) => {
  return {
    alpha: (value: number = 0) => {
      return {
        rgb: () => {
          return {
            string: () => {
              return color;
            },
          };
        },
      };
    },
    darken: (value: number = 0) => {
      return {
        string: () => {
          return color;
        },
      };
    },
  };
};
