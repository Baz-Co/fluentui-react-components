import { teamsDarkTheme, createDarkTheme } from '@fluentui/react-components';
// TODO: TypeScript
// import { BrandVariants, Theme, webDarkTheme, createDarkTheme } from '@fluentui/react-components';
// const customBrandRamp: BrandVariants = {
//   10: '#008',
//   //...
//   160: '#88F',
// };
// export const customDarkTheme: Theme = createDarkTheme(...webDarkTheme, { colorNeutralForeground1: '#f00' }, customBrandRamp);

const customBrandRamp = {
  "10": "#86c7e1",
  "20": "#74bedc",
  "30": "#61b5d6",
  "40": "#55afd3",
  "50": "#49a9cf",
  "60": "#41a5cc",
  "70": "#38a0c9",
  "80": "#3597bd",
  "90": "#328db1",
  "100": "#2a7795",
  "110": "#226079",
  "120": "#1a485b",
  "130": "#11303c",
  "140": "#0d252e",
  "150": "#091a20",
  "160": "#061014"
};

export const customDarkTheme = createDarkTheme({ ...teamsDarkTheme, ...customBrandRamp });
