// # jsLib - General purpose JavaScript Library

// # Constructor
//
// ## jslib(entity)
//
// Gets a JavaScript entity and returns an object with methods for dealing with
// that entity

var jslib = function (entity) {
  var self = {};
  self.entity = entity;

  // # Type detection and casts
  //
  // References:
  //
  // *   http://blog.niftysnippets.org/2010/09/say-what.html
  // *   https://developer.mozilla.org/en-US/docs/DOM/NodeList

  // ## jslib.isString()
  //
  // Checks if the entity is a string

  self.isString = function () {
    return typeof self.entity === 'string' || self.entity instanceof String;
  }

  // ## jslib.isNumber()
  //
  // Checks if the entity is a number

  self.isNumber = function () {
    return typeof self.entity === 'number' || self.entity instanceof Number;
  }

  // ## jslib.isBoolean()
  //
  // Checks if the entity is a boolean

  self.isBoolean = function () {
    return typeof self.entity === 'boolean' || self.entity instanceof Boolean;
  }

  // ## jslib.isScalar()
  //
  // Checks if the entity is a scalar type (string, number or boolean)

  self.isScalar = function () {
    return self.isString() || self.isNumber() || self.isBoolean();
  }

  // ## jslib.isArray()
  //
  // Checks if the entity is an array

  self.isArray = function () {
    return self.entity instanceof Array;
  }

  // ## jslib.isFunction()
  //
  // Checks if the entity is a function

  self.isFunction = function () {
    return typeof self.entity === 'function';
  }

  // ## jslib.toArray()
  //
  // Returns the entity casted to a standard Array so you can use the Array
  // methods: forEach(), map(), filter(), ...

  self.toArray = function () {
    if (self.isArray() || self.isScalar()) return [].concat(self.entity);
    else if (self.isFunction()) return jslib(self.entity()).toArray();
    else {
      return Array.prototype.map.call(self.entity, function (item) {
        return item;
      });
    }
  }

  // # Working with Objects and Arrays

  // ## jslib.traverse()
  //
  // Traverses recursively through all the child nodes of `entity`

  self.traverse = function (opts, handler) {
    handler(self.entity);
    if (opts.before) opts.before(self.entity);
    self.toArray().foreach(function (node) {
      jslib(node).traverse(opts, handler);
    });
    if (opts.after) opts.after(self.entity);
  }

  return self;
}
