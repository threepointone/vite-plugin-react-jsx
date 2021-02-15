## vite-plugin-react-jsx

This is a plugin for [`Vite`](https://vitejs.dev/) that enhances the transformation of jsx when used with React.

- In development mode, it adds debug information in development mode so that React Devtools (and other tools) can display the filename and line number that element came from, which is great while debugging.
  - This does mean you're using [Babel](https://babeljs.io/) in addition to vite's compilation pipeline, which may make things a bit slower (TODO: measure what the difference in speed is.)
  - Of course, this can be removed at any time without breaking your application in anyway.
  - This particular transform is very simple, so there's opportunity here to implement it as a standalone thing, potentially in another language like Go or Rust (or even convince esbuild to implement it internally).
- Optionally (passing `runtime: 'automatic'`), you can enable [React's new jsx transform](https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html); this may benefit in slightly smaller bundles and upcoming optimisations, however it will also be used during _production_ builds. (TODO: measure how much slower that may be.)
  - I'm considering removing this, it may trip up folks who may enable it for very little wins.

---

[Evan You](https://github.com/yyx990803) [recommended merging this into vite directly](https://twitter.com/youyuxi/status/1358416871637270528), potentially incorporating the react-refresh plugin, so this becomes a single babel pass. Sounds good to me. This plugin needs to run before anything else in the pipeline (specifically, before jsx gets converted to `React.createElement` calls). In rollup plugin land, this means using the option `enforce: "pre"`. I'm going to first send a small PR that moves the react-refresh plugin to the head of the pipeline, and follow that up with a bigger PR that adds this plugin to it. Let's also rename it to something like `@vite/plugin-react`.
