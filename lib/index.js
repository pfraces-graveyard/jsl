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

  // ## jslib.toArray()
  //
  // Returns the entity casted to a standard Array so you can use the Array
  // methods: forEach(), map(), filter(), ...

  jslib.toArray = function () {
  }

  return self;
}
