export const imports = {
  'mdx/index.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "mdx-index" */ 'mdx/index.mdx'),
}
