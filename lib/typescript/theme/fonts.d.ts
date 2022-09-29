interface FontObject {
    fontFamily?: string;
    fontWeight?: 'normal' | 'bold' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900' | undefined;
}
export interface FontTypes {
    thin: FontObject;
    light: FontObject;
    regular: FontObject;
    medium: FontObject;
    black: FontObject;
    bold: FontObject;
}
declare const fonts: FontTypes;
export default fonts;
