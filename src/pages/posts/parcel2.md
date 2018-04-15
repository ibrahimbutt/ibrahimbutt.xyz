---
title: "What I learned about life and happiness doing MITs 6.00.1x"
date: "2017-09-10"
# layout: post
---
# If you’ve ever configured Webpack, Parcel will blow your mind!
## And how to hit the ground running with Parcel.

In this post I will walk you through using Parcel, with Pug, Sass, Babel and PostCSS. With some comparisons to Webpack, as its the most popular module bundler.

---

## Zero Configuration: Webpack Vs Parcel
### Webpack

Version 4 is ‘zero-config’.

It’s zero-config in two ways:
1. You no longer have to specify an entry and output point.
2. Its production mode includes minification, scope hoisting, and tree-shaking.

Realistically, you’ll need a webpack.config.js for most projects.

> **Edit:** @TheLarkInn left a response to this article and enligtened me with what zero-config means to Webpack:

### Parcel

Parcel has native support for the following and more:

1. CSS
2. SCSS
3. Babel
4. PostCSS
5. PostHTML
6. TypeScript
7. JSX for React and Preact
8. Minification
9. Development Server

It doesn’t have native support for scope hoisting and tree-shaking, but it will in a future version.

Parcel is the winner in the context of zero-config.

### Build Time

|       Bundler        |  Time  |
|----------------------|--------|
| browserify           | 22.98s |
| webpack              | 20.71s |
| parcel               | 9.98s  |
| parcel - with cache  | 2.64s  |

Based on a reasonably sized app, containing 1726 modules, 6.5M uncompressed. Built on a 2016 MacBook Pro with 4 physical cores.

Webpack 4 uses a cache too, which helps with faster build times, but it’s not completely implemented yet.
