---
title: "Understand how JavaScripts Map works by creating your own using TDD"
date: "2018-05-07"
featuredImage: "./feat2.jpg"
published: false
---

![Featured Image](./feat2.jpg)

**This post has a few aims. Firstly, to give you a greater understanding of how the Array.prototype.map method works, not only on the user end but also behind the scenes. Secondly, a brief introduction to Test Driven Development, using the Mocha testing framework and the Chai assertion library.**

## Project Setup

Open up your terminal and run the following to setup the project:

```bash
mkdir myMap && cd myMap && yarn init -y && yarn add mocha chai && mkdir test && cd test && touch test.js
```

Inside `test.js`, add `const expect = require('chai').expect;` to load in the assertion library.

## Creating a Prototype

### First Steps

Now we have to think what we expect of our function.

The native `map` method takes a callback function as a parameter, which is called on each element of the array `map` is called on. `map` then returns a new array, which includes elements that are returned from each callback function call.

Open up the console in your browser and input:

```javascript
const arr1 = [1, 2, 3];
const arr2 = arr1.map(n => n + 1);
```

Now, input `arr1`and hit enter. Do the same for `arr2`. Comparing the two arrays, you’ll have noticed a few things:

1.  `arr1` has not been mutated
2.  `arr2` is an array with the expected values, which means a new array was returned and our callback was called on each element of `arr1`

Keep this browser console open as you’ll be coming back to it often

**Aside**: `[1, 2, 3].map(n => n + 1);` would have the same effect.

Based on this knowledge, we can make a start on a prototype for our version of map, which we will call myMap.
