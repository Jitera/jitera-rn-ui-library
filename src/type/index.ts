export type Ref<T> = {
  ref?: T;
};

export type PropsWithRef<T> = T & Ref<any>;

export type PreviewProps = {
  isPreview?: boolean
}
