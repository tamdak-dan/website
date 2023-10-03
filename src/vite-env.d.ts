/// <reference types="vite/client" />

declare module "*.jpg" {
  const value: any;
  export = value;
}
declare module "*.png" {
  const value: any;
  export = value;
}

declare module "*.svg" {
  const ReactComponent: any;
  export { ReactComponent };
}
