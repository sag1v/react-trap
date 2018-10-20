export const imports = {
  'mdx/index.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "mdx-index" */ 'mdx/index.mdx'),
  'mdx/event.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "mdx-event" */ 'mdx/event.mdx'),
  'mdx/multipleEvents.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "mdx-multiple-events" */ 'mdx/multipleEvents.mdx'),
  'mdx/onoffEvents.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "mdx-onoff-events" */ 'mdx/onoffEvents.mdx'),
  'mdx/preventDefault.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "mdx-prevent-default" */ 'mdx/preventDefault.mdx'),
  'mdx/ref.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "mdx-ref" */ 'mdx/ref.mdx'),
}
