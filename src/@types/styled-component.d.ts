import 'styled-components';
import globalTheme from '../theme/global-theme';

declare module 'styled-components' {
  type ThemeType = typeof globalTheme;

  export interface DefaultTheme extends ThemeType { }
}