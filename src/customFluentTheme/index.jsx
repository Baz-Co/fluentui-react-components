import { webDarkTheme, createDarkTheme } from '@fluentui/react-components';
// import { BrandVariants, Theme, webDarkTheme, createDarkTheme } from '@fluentui/react-components';
// const customBrandRamp: BrandVariants = {
//   10: '#008',
//   //...
//   160: '#88F',
// };
// export const customDarkTheme: Theme = createDarkTheme(...webDarkTheme, { colorNeutralForeground1: '#f00' }, customBrandRamp);

export const customDarkTheme = createDarkTheme({...webDarkTheme});