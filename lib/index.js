// # jsl
//
// General purpose JavaScript Library

module.exports = function (obj) {
  return new Jsl(obj);
}

// # Constructor

// ## var obj = jsl(obj)
//
// Gets a JavaScript obj and returns an object with methods for dealing with
// that obj

var Jsl = function (obj) {
  this.obj = obj;
};

// # Type detection and casts
//
// References:
//
// *   [http://blog.niftysnippets.org/2010/09/say-what.html](http://blog.niftysnippets.org/2010/09/say-what.html)
// *   [https://developer.mozilla.org/en-US/docs/DOM/NodeList](https://developer.mozilla.org/en-US/docs/DOM/NodeList)

// ## obj.isString()
//
// Checks if the obj is a string

Jsl.prototype.isString = function () {
  return typeof this.obj === 'string' || this.obj instanceof String;
}

// ## obj.isNumber()
//
// Checks if the obj is a number

Jsl.prototype.isNumber = function () {
  return typeof this.obj === 'number' || this.obj instanceof Number;
}

// ## obj.isBoolean()
//
// Checks if the obj is a boolean

Jsl.prototype.isBoolean = function () {
  return typeof this.obj === 'boolean' || this.obj instanceof Boolean;
}

// ## obj.isScalar()
//
// Checks if the obj is a scalar type (string, number or boolean)

Jsl.prototype.isScalar = function () {
  return this.isString() || this.isNumber() || this.isBoolean();
}

// ## obj.isArray()
//
// Checks if the obj is an array

Jsl.prototype.isArray = function () {
  return this.obj instanceof Array;
}

// ## obj.isFunction()
//
// Checks if the obj is a function

Jsl.prototype.isFunction = function () {
  return typeof this.obj === 'function';
}

// ## obj.toArray()
//
// Returns the obj casted to a standard Array so you can use the Array
// methods: forEach(), map(), filter(), ...

Jsl.prototype.toArray = function () {
  if (this.isArray()) return this.obj;
  if (this.isFunction()) return jsl(this.obj()).toArray();
  if (this.isScalar() || !this.obj.length) return [].concat(this.obj);
  return Array.prototype.map.call(this.obj, function (item) {
    return item;
  });
}

// # Working with Objects and Arrays

// ## obj.traverse(opts, handler)
//
// Traverses recursively through the child nodes in `obj`
//
// Based on: [http://github.com/substack/js-traverse](http://github.com/substack/js-traverse) 
//
// `opts`: _[Object]_
//
// *   `filter` **_(Optional)_ [String]_**
//         Traverse only by this property
//
// *   `before` **_(Optional)_ [Function]**
//         Called before any of the children are traversed
//
// *   `each` **_(Optional)_ [Function]**
//         Called on each child
//
// *   `after` **_(Optional)_ [Function]**
//         Called after any of the children are traversed

Jsl.prototype.traverse = function (opts) {
  var filtered = opts.filter ? this.obj[opts.filter] : this.obj;

  if (!filtered) return;
  if (opts.before) opts.before(this.obj);
  
  jsl(filtered).toArray().forEach(function (node) {
    if (opts.each) opts.each(node);
    jsl(node).traverse(opts);
  });

  if (opts.after) opts.after(this.obj);
}
