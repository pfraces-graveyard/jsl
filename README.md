# jsl

General-purpose JavaScript micro-library

## Featuring

*   Less than 100 lines of code
*   Type detection
*   Object traversal
*   Chainable API
*   Dependency-free
*   Adhered to the **Component Spec**

# Example

_TODO..._

# Install

Choose one:

    $ component pfraces/jsl
    $ npm install jsl

# Status

**jsl** is a work-in-progress and is only intended for my personal use at this 
time.

# API

## var obj = jsl(obj)

Gets a JavaScript obj and returns an object with methods for dealing with
that obj

## obj.isString()

Checks if the obj is a string

## obj.isNumber()

Checks if the obj is a number

## obj.isBoolean()

Checks if the obj is a boolean

## obj.isScalar()

Checks if the obj is a scalar type (string, number or boolean)

## obj.isArray()

Checks if the obj is an array

## obj.isFunction()

Checks if the obj is a function

## obj.toArray()

Returns the obj casted to a standard Array so you can use the Array
methods: forEach(), map(), filter(), ...

## obj.traverse(opts, handler)

Traverses recursively through the child nodes in `obj`

`opts`: _[Object]_

*   `filter` **_(Optional)_ [String]_**
        Traverse only by this property

*   `before` **_(Optional)_ [Function]**
        Called before any of the children are traversed

*   `each` **_(Optional)_ [Function]**
        Called on each child

*   `after` **_(Optional)_ [Function]**
        Called after any of the children are traversed

# Contribute

Get the sources at github: http://github.com/pfraces/jsl

# License

(The MIT License)

Copyright (c) 2012 [pfraces](http://github.com/pfraces)

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the 'Software'), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
of the Software, and to permit persons to whom the Software is furnished to do
so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
