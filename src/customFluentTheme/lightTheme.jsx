import { teamsLightTheme, createLightTheme } from '@fluentui/react-components';
// import { BrandVariants, Theme, webLightTheme, createLightTheme } from '@fluentui/react-components';
// const customBrandRamp: BrandVariants = {
//   10: '#008',
//   //...
//   160: '#88F',
// };
// export const customLightTheme: Theme = createLightTheme(...webLightTheme, { colorNeutralForeground1: '#f00' }, customBrandRamp);

const customBrandRamp = {
  "10": "#004578",
  "20": "#00508b",
  "30": "#005a9e",
  "40": "#0864ae",
  "50": "#106ebe",
  "60": "#0873c9",
  "70": "#0078d4",
  "80": "#1680d6",
  "90": "#2b88d8",
  "100": "#4e9cdf",
  "110": "#71afe5",
  "120": "#9cc8ed",
  "130": "#c7e0f4",
  "140": "#d3e6f7",
  "150": "#deecf9",
  "160": "#e7f1fb"
};
const compVar = {
  // componentVariables: {
  //   SvgIcon: {
  //     color: 'cornflowerblue',
  //   },
  // }
};

export const customLightTheme = createLightTheme({ ...teamsLightTheme, ...customBrandRamp, ...compVar });
