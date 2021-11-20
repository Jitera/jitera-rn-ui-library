import { withTheme } from '../../../theme';
import Page from './ThemedComponent';
import type { PageProps } from './Component';

export { Page };
export type { PageProps };

const PageWithTheme: any = withTheme(Page, 'Page');
export default PageWithTheme;
