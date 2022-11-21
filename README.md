# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @tbrowwnnn/lotide`

**Require it:**

`const _ = require('@tbrowwnnn/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head`: returns everything from an array except the last value
* `tail`: returns everything from an array except the first value
* `middle`: returnst the middle value from an array
* `countLetters`: returns an object showing how many letters are in a string
* `countOnly`: determins is a value is present in an object list
* `findKey`: finds the first key in a object based on a value in another object
* `findKeyByValue`: finds a key based on the value
* `flatten`: takes nested arrays and turns them into one array
* `index`: list of functions that allow you to call other functions in the folder
* `letterPositions`: returns a object from a string that will determine the position of each letter.
* `takeUntil`: Pull items from an array into another array and until it reaches as certain value.
* `without`: add an array element to a new array unless it matches a value that you determine.
