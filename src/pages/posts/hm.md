---
title: "The Use of Psychology in Deceptive Software Design"
date: "2017-012-10"
featuredImage: "./image4.jpg"
---
# The Use of Psychology in Deceptive Software Design
## And how to hit the ground running with Parcel.

Websites and mobile applications are often designed to entice or persuade consumers and users to behave in certain ways, such as signing up for services or purchasing products and services. Most of these products use common industry user interface (UI) and user experience (UX) design techniques that are based on our knowledge of human psychology and a body of knowledge regarding common design techniques and patterns.

---

## Zero Configuration: Webpack Vs Parcel
### Webpack

![Alt text](image4.jpg)

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

```javascript
const lol = 123;
console.log(lol)
```