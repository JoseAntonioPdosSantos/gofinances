import 'styled-components';
import theme from './theme';
import { Feather } from '@expo/vector-icons';

declare module 'styled-components' {
    type ThemeType = typeof theme

    export interface DefaultTheme extends ThemeType {}
}
