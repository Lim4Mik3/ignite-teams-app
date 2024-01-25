import 'styled-components/native';
import globalTheme from '../theme/global-theme';

declare module 'styled-components/native' {
  type ThemeType = typeof globalTheme;

  export interface DefaultTheme extends ThemeType { }
}