# Find n Choose k - How many combinations of the k items can be found in collection C?

## What is this extension for? :mag_right:

This extension allows you to easily calculate how many combinations of k elements can be found in collection c. 

From Wikipedia: 

Combinations refer to the combination of n things taken k at a time without repetition. To refer to combinations in which repetition is allowed, the terms k-selection, k-multiset, or k-combination with repetition are often used. If, in the above example, it were possible to have two of any one kind of fruit there would be 3 more 2-selections: one with two apples, one with two oranges, and one with two pears.

## Installation :floppy_disk:

Download the .js file to your numi extensions directory.

## How to use it :wrench:

The terminology choose, nCr or ncr can be used. Be sure to maintain the order of arguments (C, K) such that C > K.


```
choose(8;2) // 28

x = 7
y = 25
ncr(x;y) // 0

x = 25
y = 7
ncr(x;y) // 480,700
```