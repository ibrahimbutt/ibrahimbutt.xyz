---
title: "Understand how JavaScripts Map by making your own"
date: "2018-05-07"
featuredImage: "./feat2.jpg"
published: false
---

![Featured Image](./feat2.jpg)

**The aim of this post is to give you a greater understanding of how the `Array.prototype.map` method works, not only on the user end but also behind the scenes.**

## Getting Started

Make a file where you'll write the function. I named mines `myMap.js` but you can name yours whatever you'd like. I'll be referring to it as `myMap.js` for the remainder of this post.

You will also need Node installed so you can run the function in your terminal. To check if you have Node installed, open your terminal and type in `node -v` before hitting enter. If you're not presented with a version number, download it [here](https://nodejs.org/). Alternatively, you can run the code in a browser console.

## Creating a Prototype

### Expectations

We have to think what we expect of our function.

The native `map` method takes a callback as a parameter, which is called on each element (first level) inside the array `map` is called on. `map` then returns a new array with the result

#### Basic Example of Native Map

```javascript
const arr1 = [1, 2, 3];
const arr2 = arr1.map(n => n + 1);
// arr2 = [2, 3, 4]
```

**Aside**: `const arr = [1, 2, 3].map(n => element + 1);` would have the same effect.

### Important Details

There are are a few things you need to know before we make a start on our function.

**An array is an object**. It can store data like a normal object. Therefore, you can add/access data using dot notation.

You should have some knowledge of **prototypes and inheritance**, but for the purposes of this post, here's what you need to know:

1.  Arrays that we create are an instance of `Array`.
2.  This is evident from the explicit creation of arrays: `const anArray = new Array(1, 2, 3)`.
3.  Therefore, all methods on the `Array()` object are inherited by every array.

Inside your function file, write:

```javascript
const arr1 = [1, 2, 3];
const arr2 = arr1.map(element => elemnt + 1);
console.log(arr1, arr2);
```

Inside the terminal, ensuring you're in the directory in which `myMap.js` is in, run `node myMap.js`.

Comparing the two arrays, you’ll have noticed a few things:

1.  `arr1` has not been mutated
2.  `arr2` is an array with the expected values, which means a new array was returned and our callback was called on each element of `arr1`

Based on this knowledge, we can make a start on a prototype for our version of map, which we will call `myMap`. Lets add `myMap` the the array prototype.

```javascript
Array.prototype.myMap = function(callback) {};
```

We need to enumerate on each element of the array, therefore a for loop will be needed. However, we havent passed in an array to be enumerated on – we've only passed in a callback.

From the native `map` example, you'll see that the callback doesn't take in the array either. Instead, the callback was given an arguemnt called `element`, which as the name suggests, refers to an element from the array.

As the callback is called once for each element, we'll need to ensure that the argument passed into the callback on each call is updated.

So how does the native `map` method know to take in the array?

```javascript
Array.prototype.myMap = function(callback) {
  let newArray = [];
  let that = callOn || this;
  for (let i = 0; i < that.length; i++) {
    newArray.push(callback(that[i]));
  }
  return newArray;
};
```
