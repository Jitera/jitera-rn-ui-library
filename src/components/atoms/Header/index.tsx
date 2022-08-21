import Header from "./ThemedComponent";
import { withTheme } from "../../../theme";

import type { HeaderProps } from "./Component";

export { Header };
export type { HeaderProps };
export default withTheme(Header, "Header");
