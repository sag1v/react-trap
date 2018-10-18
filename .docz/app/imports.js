export const imports = {
  'mdx/index.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "mdx-index" */ 'mdx/index.mdx'),
  'mdx/mouseover.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "mdx-mouseover" */ 'mdx/mouseover.mdx'),
  'mdx/onoffEvents.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "mdx-onoff-events" */ 'mdx/onoffEvents.mdx'),
  'mdx/multipleEvents.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "mdx-multiple-events" */ 'mdx/multipleEvents.mdx'),
  'mdx/preventDefault.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "mdx-prevent-default" */ 'mdx/preventDefault.mdx'),
}
