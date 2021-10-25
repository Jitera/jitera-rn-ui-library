import { withTheme } from '../../../theme';
import { Page, PageProps } from './Component';

export { Page };
export type { PageProps };

const PageWithTheme: any = withTheme(Page, 'Page');
export default PageWithTheme;
