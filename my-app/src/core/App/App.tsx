import React from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { selectIsLightTheme } from '../../common/ThemeSlice';
import { themeDark, themeLight } from './theme';
import { GlobalStyle } from './GlobalStyle';

export const App = () => {
  const isLightTheme = useSelector(selectIsLightTheme);
  console.log(isLightTheme);
  

  return (
    <ThemeProvider theme={isLightTheme ? themeLight : themeDark}>
      <GlobalStyle />
      <span>Normalize</span>
      <span>Footer</span>
    </ThemeProvider>
  );
}
