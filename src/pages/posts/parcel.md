---
title: "this: If you’ve ever configured Webpack, Parcel will blow your mind!"
date: "2017-012-10"
featuredImage: "./image.jpg"
---
# If you’ve ever configured Webpack, Parcel will blow your mind!
## And how to hit the ground running with Parcel.

![salted duck eggs](./image2.jpg)

**In this post I will walk you through using Parcel, with Pug, Sass, Babel and PostCSS. With some comparisons to Webpack, as its the most popular module bundler.**
## Zero Configuration: Webpack Vs Parcel
### Webpack

The next hour was the worst of my life. I don’t remember large chunks of it. What I do remember haunts me. I remember running away from the stage repeating “Oh no oh no oh no.” I have a flash memory of dry heaving into a potted palm tree. I recall sobbing uncontrollably in the car. And as much as I’d like to, I can’t forget having a meltdown while packing my suitcase — crying, yelling, and pounding my fists on the ground like a five-year old.

My dad was dying of sepsis. And I felt helpless, 200 miles away at a concert in Palm Springs.

You might not have heard of sepsis. You’re not alone — almost half the population hasn’t either.

> **Edit:** @TheLarkInn left a response to this article and enligtened me with what zero-config means to Webpack:

Sepsis is the body’s extreme reaction to an infection. The immune system essentially backfires and triggers inflammatory responses throughout the body. The infection can start anywhere — pneumonia, the skin, or a UTI. Sepsis is considered severe sepsis when organs exhibit signs of malfunctioning, like difficulty breathing or abnormally high heart rate. Septic shock takes hold when blood pressure drops to a critical low, even with treatment and intravenous fluids.

My dad had his hip replaced in a planned surgery two days before. Without anyone realizing, his incision got infected. When he returned home from the hospital, his condition worsened. He started vomiting, ran a fever, and became confused — thinking he was at the home in Toronto that we’d left decades ago.

Version 4 is ‘zero-config’.

It’s zero-config in two ways:
1. You no longer have to specify an entry and output point.
2. Its production mode includes minification, scope hoisting, and tree-shaking.

Realistically, you’ll need a webpack.config.js for most projects.


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