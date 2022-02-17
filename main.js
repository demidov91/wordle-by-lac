/**
 * @license
 *****************************************************************************
  Copyright (c) Microsoft Corporation.

  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.

  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
*****************************************************************************/
'use strict';
this.wordle = this.wordle || {}, this.wordle.bundle = function(exports) {
  /**
   * @param {!Object} obj
   * @return {?}
   */
  function _typeof(obj) {
    return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
      return typeof obj;
    } : function(obj) {
      return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    })(obj);
  }
  /**
   * @param {!AudioNode} b
   * @param {!Function} a
   * @return {undefined}
   */
  function log(b, a) {
    if (!(b instanceof a)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  /**
   * @param {!Function} a
   * @param {string} d
   * @return {undefined}
   */
  function t(a, d) {
    /** @type {number} */
    var i = 0;
    for (; i < d.length; i++) {
      var desc = d[i];
      desc.enumerable = desc.enumerable || false;
      /** @type {boolean} */
      desc.configurable = true;
      if ("value" in desc) {
        /** @type {boolean} */
        desc.writable = true;
      }
      Object.defineProperty(a, desc.key, desc);
    }
  }
  /**
   * @param {!Function} e
   * @param {!Function} r
   * @param {!Function} n
   * @return {?}
   */
  function trigger(e, r, n) {
    return r && t(e.prototype, r), n && t(e, n), e;
  }
  /**
   * @param {!Object} object
   * @param {string} name
   * @param {string} id
   * @return {?}
   */
  function callback(object, name, id) {
    return name in object ? Object.defineProperty(object, name, {
      value : id,
      enumerable : true,
      configurable : true,
      writable : true
    }) : object[name] = id, object;
  }
  /**
   * @param {string} message
   * @param {!Object} t
   * @return {undefined}
   */
  function on(message, t) {
    if ("function" != typeof t && null !== t) {
      throw new TypeError("Super expression must either be null or a function");
    }
    /** @type {!Object} */
    message.prototype = Object.create(t && t.prototype, {
      constructor : {
        value : message,
        writable : true,
        configurable : true
      }
    });
    if (t) {
      fn(message, t);
    }
  }
  /**
   * @param {(!Function|string)} that
   * @return {?}
   */
  function wrapper(that) {
    return (wrapper = Object.setPrototypeOf ? Object.getPrototypeOf : function(a) {
      return a.__proto__ || Object.getPrototypeOf(a);
    })(that);
  }
  /**
   * @param {string} type
   * @param {!Object} source
   * @return {?}
   */
  function fn(type, source) {
    return (fn = Object.setPrototypeOf || function(m, a) {
      return m.__proto__ = a, m;
    })(type, source);
  }
  /**
   * @return {?}
   */
  function defer() {
    if ("undefined" == typeof Reflect || !Reflect.construct) {
      return false;
    }
    if (Reflect.construct.sham) {
      return false;
    }
    if ("function" == typeof Proxy) {
      return true;
    }
    try {
      return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      })), true;
    } catch (e) {
      return false;
    }
  }
  /**
   * @param {!Function} type
   * @param {!Array} a
   * @param {!Function} fn
   * @return {?}
   */
  function init(type, a, fn) {
    return (init = defer() ? Reflect.construct : function(type, ctorArgs, e) {
      /** @type {!Array} */
      var or_queue = [null];
      or_queue.push.apply(or_queue, ctorArgs);
      var t = new (Function.bind.apply(type, or_queue));
      return e && fn(t, e.prototype), t;
    }).apply(null, arguments);
  }
  /**
   * @param {string} ctor
   * @return {?}
   */
  function register(ctor) {
    /** @type {(Map|undefined)} */
    var ss = "function" == typeof Map ? new Map : void 0;
    return (register = function(value) {
      /**
       * @return {?}
       */
      function method() {
        return init(value, arguments, wrapper(this).constructor);
      }
      if (null === value || (s = value, -1 === Function.toString.call(s).indexOf("[native code]"))) {
        return value;
      }
      var s;
      if ("function" != typeof value) {
        throw new TypeError("Super expression must either be null or a function");
      }
      if (void 0 !== ss) {
        if (ss.has(value)) {
          return ss.get(value);
        }
        ss.set(value, method);
      }
      return method.prototype = Object.create(value.prototype, {
        constructor : {
          value : method,
          enumerable : false,
          writable : true,
          configurable : true
        }
      }), fn(method, value);
    })(ctor);
  }
  /**
   * @param {number} name
   * @return {?}
   */
  function set(name) {
    if (void 0 === name) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return name;
  }
  /**
   * @param {undefined} event
   * @param {string} a
   * @return {?}
   */
  function onChange(event, a) {
    return !a || "object" != typeof a && "function" != typeof a ? set(event) : a;
  }
  /**
   * @param {!Function} name
   * @return {?}
   */
  function makeRequest(name) {
    var deferred = defer();
    return function() {
      var val;
      var C = wrapper(name);
      if (deferred) {
        var ctor = wrapper(this).constructor;
        val = Reflect.construct(C, arguments, ctor);
      } else {
        val = C.apply(this, arguments);
      }
      return onChange(this, val);
    };
  }
  /**
   * @param {!Object} el
   * @param {number} target
   * @return {?}
   */
  function update(el, target) {
    return function(val) {
      if (Array.isArray(val)) {
        return val;
      }
    }(el) || function(s, a) {
      var g = null == s ? null : "undefined" != typeof Symbol && s[Symbol.iterator] || s["@@iterator"];
      if (null == g) {
        return;
      }
      var info;
      var o;
      /** @type {!Array} */
      var m = [];
      /** @type {boolean} */
      var _n = true;
      /** @type {boolean} */
      var i = false;
      try {
        g = g.call(s);
        for (; !(_n = (info = g.next()).done) && (m.push(info.value), !a || m.length !== a); _n = true) {
        }
      } catch (tObj) {
        /** @type {boolean} */
        i = true;
        o = tObj;
      } finally {
        try {
          if (!(_n || null == g.return)) {
            g.return();
          }
        } finally {
          if (i) {
            throw o;
          }
        }
      }
      return m;
    }(el, target) || validate(el, target) || function() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  /**
   * @param {!Object} i
   * @return {?}
   */
  function toArray(i) {
    return function(e) {
      if (Array.isArray(e)) {
        return next(e);
      }
    }(i) || function(units) {
      if ("undefined" != typeof Symbol && null != units[Symbol.iterator] || null != units["@@iterator"]) {
        return Array.from(units);
      }
    }(i) || validate(i) || function() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  /**
   * @param {!Object} e
   * @param {number} a
   * @return {?}
   */
  function validate(e, a) {
    if (e) {
      if ("string" == typeof e) {
        return next(e, a);
      }
      /** @type {string} */
      var k = Object.prototype.toString.call(e).slice(8, -1);
      return "Object" === k && e.constructor && (k = e.constructor.name), "Map" === k || "Set" === k ? Array.from(e) : "Arguments" === k || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(k) ? next(e, a) : void 0;
    }
  }
  /**
   * @param {!Object} item
   * @param {number} i
   * @return {?}
   */
  function next(item, i) {
    if (null == i || i > item.length) {
      i = item.length;
    }
    /** @type {number} */
    var k = 0;
    /** @type {!Array} */
    var copy = new Array(i);
    for (; k < i; k++) {
      copy[k] = item[k];
    }
    return copy;
  }
  /**
   * @param {?} x
   * @param {?} y
   * @return {?}
   */
  function is(x, y) {
    return x === y || x != x && y != y;
  }
  /**
   * @param {!Array} keys
   * @param {!Object} key
   * @return {?}
   */
  function indexOfIdentical(keys, key) {
    var i = keys.length;
    for (; i--;) {
      if (is(keys[i][0], key)) {
        return i;
      }
    }
    return -1;
  }
  /**
   * @param {string} entries
   * @return {undefined}
   */
  function ListCache(entries) {
    /** @type {number} */
    var i = -1;
    var length = null == entries ? 0 : entries.length;
    this.clear();
    for (; ++i < length;) {
      var entry = entries[i];
      this.set(entry[0], entry[1]);
    }
  }
  /**
   * @param {?} value
   * @return {?}
   */
  function stringify(value) {
    return null == value ? void 0 === value ? "[object Undefined]" : "[object Null]" : symToStringTag && symToStringTag in Object(value) ? function(e) {
      var t = func.call(e, x);
      var i = e[x];
      try {
        e[x] = void 0;
        /** @type {boolean} */
        var ba = true;
      } catch (e) {
      }
      var b = type.call(e);
      return ba && (t ? e[x] = i : delete e[x]), b;
    }(value) : function(obj) {
      return objToString.call(obj);
    }(value);
  }
  /**
   * @param {!Object} obj
   * @return {?}
   */
  function isArray(obj) {
    var type = _typeof(obj);
    return null != obj && ("object" == type || "function" == type);
  }
  /**
   * @param {!Object} date
   * @return {?}
   */
  function toString(date) {
    if (!isArray(date)) {
      return false;
    }
    var value = stringify(date);
    return "[object Function]" == value || "[object GeneratorFunction]" == value || "[object AsyncFunction]" == value || "[object Proxy]" == value;
  }
  /**
   * @param {string} value
   * @return {?}
   */
  function isNative(value) {
    return !(!isArray(value) || (args = value, flagAlias && flagAlias in args)) && (toString(value) ? reIsNative : reIsHostCtor).test(function(value) {
      if (null != value) {
        try {
          return objectToString$2.call(value);
        } catch (e) {
        }
        try {
          return value + "";
        } catch (e) {
        }
      }
      return "";
    }(value));
    var args;
  }
  /**
   * @param {!Function} object
   * @param {string} key
   * @return {?}
   */
  function getNative(object, key) {
    var value = function(object, name) {
      return null == object ? void 0 : object[name];
    }(object, key);
    return isNative(value) ? value : void 0;
  }
  /**
   * @param {string} entries
   * @return {undefined}
   */
  function Hash(entries) {
    /** @type {number} */
    var i = -1;
    var length = null == entries ? 0 : entries.length;
    this.clear();
    for (; ++i < length;) {
      var entry = entries[i];
      this.set(entry[0], entry[1]);
    }
  }
  /**
   * @param {!Object} self
   * @param {!Object} s
   * @return {?}
   */
  function get(self, s) {
    var numrc;
    var type;
    var data = self.__data__;
    return ("string" == (type = _typeof(numrc = s)) || "number" == type || "symbol" == type || "boolean" == type ? "__proto__" !== numrc : null === numrc) ? data["string" == typeof s ? "string" : "hash"] : data.map;
  }
  /**
   * @param {string} values
   * @return {undefined}
   */
  function MapCache(values) {
    /** @type {number} */
    var i = -1;
    var length = null == values ? 0 : values.length;
    this.clear();
    for (; ++i < length;) {
      var entry = values[i];
      this.set(entry[0], entry[1]);
    }
  }
  /**
   * @param {?} entries
   * @return {undefined}
   */
  function Stack(entries) {
    var data = this.__data__ = new ListCache(entries);
    this.size = data.size;
  }
  /**
   * @param {!Object} obj
   * @param {string} prop
   * @param {!Object} def
   * @return {undefined}
   */
  function extend(obj, prop, def) {
    if ("__proto__" == prop && defineProperty) {
      defineProperty(obj, prop, {
        configurable : true,
        enumerable : true,
        value : def,
        writable : true
      });
    } else {
      /** @type {!Object} */
      obj[prop] = def;
    }
  }
  /**
   * @param {!Object} obj
   * @param {string} item
   * @param {?} value
   * @return {undefined}
   */
  function clone(obj, item, value) {
    if (void 0 !== value && !is(obj[item], value) || void 0 === value && !(item in obj)) {
      extend(obj, item, value);
    }
  }
  /**
   * @param {!Object} typedArray
   * @param {boolean} isDeep
   * @return {?}
   */
  function copy(typedArray, isDeep) {
    var arrayBuffer;
    var lump;
    var buffer = isDeep ? (arrayBuffer = typedArray.buffer, lump = new arrayBuffer.constructor(arrayBuffer.byteLength), (new Uint8Array(lump)).set(new Uint8Array(arrayBuffer)), lump) : typedArray.buffer;
    return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
  }
  /**
   * @param {!Object} array
   * @return {?}
   */
  function require(array) {
    var obj = array && array.constructor;
    return array === ("function" == typeof obj && obj.prototype || objectProto$12);
  }
  /**
   * @param {!Object} obj
   * @return {?}
   */
  function isObject(obj) {
    return null != obj && "object" == _typeof(obj);
  }
  /**
   * @param {!Array} value
   * @return {?}
   */
  function requiredValueValid(value) {
    return isObject(value) && "[object Arguments]" == stringify(value);
  }
  /**
   * @param {number} length
   * @return {?}
   */
  function isLength(length) {
    return "number" == typeof length && length > -1 && length % 1 == 0 && length <= 9007199254740991;
  }
  /**
   * @param {!Object} value
   * @return {?}
   */
  function isString(value) {
    return null != value && isLength(value.length) && !toString(value);
  }
  /**
   * @param {!Object} value
   * @param {string} name
   * @return {?}
   */
  function isPlainObject(value, name) {
    if (("constructor" !== name || "function" != typeof value[name]) && "__proto__" != name) {
      return value[name];
    }
  }
  /**
   * @param {!Object} data
   * @param {string} key
   * @param {?} value
   * @return {undefined}
   */
  function split(data, key, value) {
    var options = data[key];
    if (!(has.call(data, key) && is(options, value) && (void 0 !== value || key in data))) {
      extend(data, key, value);
    }
  }
  /**
   * @param {?} val
   * @param {number} x
   * @return {?}
   */
  function push(val, x) {
    var type = _typeof(val);
    return !!(x = null == x ? 9007199254740991 : x) && ("number" == type || "symbol" != type && rNum.test(val)) && val > -1 && val % 1 == 0 && val < x;
  }
  /**
   * @param {!Array} value
   * @param {boolean} inherited
   * @return {?}
   */
  function arrayLikeKeys(value, inherited) {
    /** @type {boolean} */
    var isArr = _isArray(value);
    var isBuff = !isArr && isBuffer(value);
    var isTyped = !isArr && !isBuff && action(value);
    var isType = !isArr && !isBuff && !isTyped && isTypedArray(value);
    var skipIndexes = isArr || isBuff || isTyped || isType;
    var result = skipIndexes ? function(length, iteratee) {
      /** @type {number} */
      var i = -1;
      /** @type {!Array} */
      var result = Array(length);
      for (; ++i < length;) {
        /** @type {string} */
        result[i] = iteratee(i);
      }
      return result;
    }(value.length, String) : [];
    var actual = result.length;
    var key;
    for (key in value) {
      if (!(!inherited && !__hasProp.call(value, key) || skipIndexes && ("length" == key || isTyped && ("offset" == key || "parent" == key) || isType && ("buffer" == key || "byteLength" == key || "byteOffset" == key) || push(key, actual)))) {
        result.push(key);
      }
    }
    return result;
  }
  /**
   * @param {!Array} source
   * @return {?}
   */
  function translate(source) {
    if (!isArray(source)) {
      return function(object) {
        /** @type {!Array} */
        var arr = [];
        if (null != object) {
          var key;
          for (key in Object(object)) {
            arr.push(key);
          }
        }
        return arr;
      }(source);
    }
    var contents = require(source);
    /** @type {!Array} */
    var result = [];
    var prop;
    for (prop in source) {
      if ("constructor" != prop || !contents && safeHasOwnProperty.call(source, prop)) {
        result.push(prop);
      }
    }
    return result;
  }
  /**
   * @param {!Array} data
   * @return {?}
   */
  function keys(data) {
    return isString(data) ? arrayLikeKeys(data, true) : translate(data);
  }
  /**
   * @param {!Array} value
   * @return {?}
   */
  function add(value) {
    return function(x, counter, data, fn) {
      /** @type {boolean} */
      var offer = !data;
      if (!data) {
        data = {};
      }
      /** @type {number} */
      var n = -1;
      var max = counter.length;
      for (; ++n < max;) {
        var i = counter[n];
        var value = fn ? fn(data[i], x[i], i, data, x) : void 0;
        if (void 0 === value) {
          value = x[i];
        }
        if (offer) {
          extend(data, i, value);
        } else {
          split(data, i, value);
        }
      }
      return data;
    }(value, keys(value));
  }
  /**
   * @param {!Object} x
   * @param {!Object} instance
   * @param {string} type
   * @param {number} fn
   * @param {!Function} map
   * @param {string} transform
   * @param {!Object} context
   * @return {undefined}
   */
  function test(x, instance, type, fn, map, transform, context) {
    var v = isPlainObject(x, type);
    var data = isPlainObject(instance, type);
    var result = context.get(data);
    if (result) {
      clone(x, type, result);
    } else {
      var val;
      var result = transform ? transform(v, data, type + "", x, instance, context) : void 0;
      /** @type {boolean} */
      var flag = void 0 === result;
      if (flag) {
        /** @type {boolean} */
        var h = _isArray(data);
        var d = !h && action(data);
        var w = !h && !d && isTypedArray(data);
        result = data;
        if (h || d || w) {
          if (_isArray(v)) {
            result = v;
          } else {
            if (isObject(val = v) && isString(val)) {
              result = function(params, result) {
                /** @type {number} */
                var p = -1;
                var q = params.length;
                if (!result) {
                  /** @type {!Array} */
                  result = Array(q);
                }
                for (; ++p < q;) {
                  result[p] = params[p];
                }
                return result;
              }(v);
            } else {
              if (d) {
                /** @type {boolean} */
                flag = false;
                result = function(o, zoomAware) {
                  if (zoomAware) {
                    return o.slice();
                  }
                  var s = o.length;
                  var date = create ? create(s) : new o.constructor(s);
                  return o.copy(date), date;
                }(data, true);
              } else {
                if (w) {
                  /** @type {boolean} */
                  flag = false;
                  result = copy(data, true);
                } else {
                  /** @type {!Array} */
                  result = [];
                }
              }
            }
          }
        } else {
          if (function(value) {
            if (!isObject(value) || "[object Object]" != stringify(value)) {
              return false;
            }
            var proto = $(value);
            if (null === proto) {
              return true;
            }
            var Ctor = hasOwnProperty.call(proto, "constructor") && proto.constructor;
            return "function" == typeof Ctor && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
          }(data) || isBuffer(data)) {
            result = v;
            if (isBuffer(v)) {
              result = add(v);
            } else {
              if (!(isArray(v) && !toString(v))) {
                result = function(value) {
                  return "function" != typeof value.constructor || require(value) ? {} : resolve($(value));
                }(data);
              }
            }
          } else {
            /** @type {boolean} */
            flag = false;
          }
        }
      }
      if (flag) {
        context.set(data, result);
        map(result, data, fn, transform, context);
        context.delete(data);
      }
      clone(x, type, result);
    }
  }
  /**
   * @param {!Object} object
   * @param {!Object} source
   * @param {number} options
   * @param {string} customizer
   * @param {?} stack
   * @return {undefined}
   */
  function baseMerge(object, source, options, customizer, stack) {
    if (object !== source) {
      baseFor(source, function(srcValue, type) {
        if (stack || (stack = new Stack), isArray(srcValue)) {
          test(object, source, type, options, baseMerge, customizer, stack);
        } else {
          var result = customizer ? customizer(isPlainObject(object, type), srcValue, type + "", object, source, stack) : void 0;
          if (void 0 === result) {
            /** @type {!Object} */
            result = srcValue;
          }
          clone(object, type, result);
        }
      }, keys);
    }
  }
  /**
   * @param {!Array} keys
   * @return {?}
   */
  function key(keys) {
    return keys;
  }
  /**
   * @param {!Function} fn
   * @param {?} thisArg
   * @param {!Object} params
   * @return {?}
   */
  function applyQuick(fn, thisArg, params) {
    switch(params.length) {
      case 0:
        return fn.call(thisArg);
      case 1:
        return fn.call(thisArg, params[0]);
      case 2:
        return fn.call(thisArg, params[0], params[1]);
      case 3:
        return fn.call(thisArg, params[0], params[1], params[2]);
    }
    return fn.apply(thisArg, params);
  }
  /**
   * @param {string} id
   * @param {undefined} val
   * @return {?}
   */
  function exists(id, val) {
    return expect(function(e, i, value) {
      return i = max(void 0 === i ? e.length - 1 : i, 0), function() {
        /** @type {!Arguments} */
        var a = arguments;
        /** @type {number} */
        var j = -1;
        /** @type {number} */
        var m = max(a.length - i, 0);
        /** @type {!Array} */
        var x = Array(m);
        for (; ++j < m;) {
          x[j] = a[i + j];
        }
        /** @type {number} */
        j = -1;
        /** @type {!Array} */
        var params = Array(i + 1);
        for (; ++j < i;) {
          params[j] = a[j];
        }
        return params[i] = value(x), applyQuick(e, this, params);
      };
    }(id, val, key), id + "");
  }
  /**
   * @return {?}
   */
  function parse() {
    /** @type {string} */
    var favs_data = window.localStorage.getItem(url) || JSON.stringify(data);
    return JSON.parse(favs_data);
  }
  /**
   * @param {?} rows
   * @return {undefined}
   */
  function done(rows) {
    var createdRows = parse();
    !function(showThumb) {
      window.localStorage.setItem(url, JSON.stringify(showThumb));
    }(_afterCreateRow(createdRows, rows));
  }
  /**
   * @return {undefined}
   */
  function check() {
    dataLayer.push(arguments);
  }
  /**
   * @param {!Array} errors
   * @param {!NodeList} component
   * @return {?}
   */
  function filter(errors, component) {
    var tableSjis = {};
    return errors.forEach(function(inStyles, methodNameOrFunction) {
      if (component[methodNameOrFunction]) {
        /** @type {number} */
        var stylesLimit = 0;
        for (; stylesLimit < inStyles.length; stylesLimit++) {
          var sjis = inStyles[stylesLimit];
          var counter = component[methodNameOrFunction][stylesLimit];
          var id = tableSjis[sjis] || "unknown";
          if (settings[counter] > settings[id]) {
            tableSjis[sjis] = counter;
          }
        }
      }
    }), tableSjis;
  }
  /**
   * @param {number} number
   * @return {?}
   */
  function ordinal(number) {
    /** @type {!Array} */
    switch(number) {
      case 1:
        return "Pieršaja";
      case 2:
        return "Druhaja";
      case 3:
        return "Treciaja";
      case 4:
        return "Čacviortaja";
	  case 5:
        return "Piataja";
    }
	return number + "-ja";
  }
  /**
   * @param {!Date} obj
   * @param {!Date} val
   * @return {?}
   */
  function cb(obj, val) {
    /** @type {!Date} */
    var t = new Date(obj);
    /** @type {number} */
    var filmSteps = (new Date(val)).setHours(0, 0, 0, 0) - t.setHours(0, 0, 0, 0);
    return Math.round(filmSteps / 864E5);
  }
  /**
   * @param {!Date} a
   * @return {?}
   */
  function isDate(a) {
    var i;
    var j = getTime(a);
    return i = (j * 26641) % options.length, options[i];
  }

  /**
   * @param {!Date} token
   * @return {?}
   */
  function getTime(token) {
    return cb(mutationsMap, token);
  }
  /**
   * @param {!NodeList} values
   * @return {?}
   */
  function combine(values) {
    /** @type {string} */
    var ret = "";
    /** @type {number} */
    var j = 0;
    for (; j < values.length; j++) {
      /** @type {number} */
      var braceIndex = choices.indexOf(values[j]);
      /** @type {string} */
      ret = ret + (braceIndex >= 0 ? braces[braceIndex] : "_");
    }
    return ret;
  }
  /**
   * @return {?}
   */
  function deepClone() {
    /** @type {string} */
    var favs_data = window.localStorage.getItem(STORAGE_KEY_MOCKSTORE) || JSON.stringify(train1or);
    return JSON.parse(favs_data);
  }
  /**
   * @param {?} options
   * @return {undefined}
   */
  function draw(options) {
    var stdout = options.isWin;
    var includerReg = options.isStreak;
    var t = options.numGuesses;
    var data = deepClone();
    if (stdout) {
      data.guesses[t] += 1;
      if (includerReg) {
        data.currentStreak += 1;
      } else {
        /** @type {number} */
        data.currentStreak = 1;
      }
    } else {
      /** @type {number} */
      data.currentStreak = 0;
      data.guesses.fail += 1;
    }
    /** @type {number} */
    data.maxStreak = Math.max(data.currentStreak, data.maxStreak);
    data.gamesPlayed += 1;
    data.gamesWon += stdout ? 1 : 0;
    /** @type {number} */
    data.winPercentage = Math.round(data.gamesWon / data.gamesPlayed * 100);
    /** @type {number} */
    data.averageGuesses = Math.round(Object.entries(data.guesses).reduce(function(i, select) {
      var res = update(select, 2);
      var k = res[0];
      var width = res[1];
      return k !== undefined ? i = i + k * width : i;
    }, 0) / data.gamesWon);
    (function(commitData) {
      window.localStorage.setItem(STORAGE_KEY_MOCKSTORE, JSON.stringify(commitData));
    })(data);
  }
  /**
   * @param {?} thisArg
   * @param {number} _arguments
   * @param {!Function} P
   * @param {!Function} generator
   * @return {?}
   */
  function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function(expect, reject) {
      /**
       * @param {?} value
       * @return {undefined}
       */
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (createConnectionErr) {
          reject(createConnectionErr);
        }
      }
      /**
       * @param {?} value
       * @return {undefined}
       */
      function rejected(value) {
        try {
          step(generator.throw(value));
        } catch (createConnectionErr) {
          reject(createConnectionErr);
        }
      }
      /**
       * @param {!Object} result
       * @return {undefined}
       */
      function step(result) {
        var x;
        if (result.done) {
          expect(result.value);
        } else {
          (x = result.value, x instanceof P ? x : new P(function(resolve) {
            resolve(x);
          })).then(fulfilled, rejected);
        }
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  }
  /**
   * @param {?} text
   * @param {!Function} a
   * @return {?}
   */
  function send(text, a) {
    /**
     * @param {number} data
     * @return {?}
     */
    function verb(data) {
      return function(i) {
        return function(op) {
          if (pp) {
            throw new TypeError("Generator is already executing.");
          }
          for (; _;) {
            try {
              if (pp = 1, c && (t = 2 & op[0] ? c.return : op[0] ? c.throw || ((t = c.return) && t.call(c), 0) : c.next) && !(t = t.call(c, op[1])).done) {
                return t;
              }
              switch(c = 0, t && (op = [2 & op[0], t.value]), op[0]) {
                case 0:
                case 1:
                  t = op;
                  break;
                case 4:
                  return _.label++, {
                    value : op[1],
                    done : false
                  };
                case 5:
                  _.label++;
                  c = op[1];
                  /** @type {!Array} */
                  op = [0];
                  continue;
                case 7:
                  op = _.ops.pop();
                  _.trys.pop();
                  continue;
                default:
                  if (!((t = (t = _.trys).length > 0 && t[t.length - 1]) || 6 !== op[0] && 2 !== op[0])) {
                    /** @type {number} */
                    _ = 0;
                    continue;
                  }
                  if (3 === op[0] && (!t || op[1] > t[0] && op[1] < t[3])) {
                    _.label = op[1];
                    break;
                  }
                  if (6 === op[0] && _.label < t[1]) {
                    _.label = t[1];
                    t = op;
                    break;
                  }
                  if (t && _.label < t[2]) {
                    _.label = t[2];
                    _.ops.push(op);
                    break;
                  }
                  if (t[2]) {
                    _.ops.pop();
                  }
                  _.trys.pop();
                  continue;
              }
              op = a.call(text, _);
            } catch (e) {
              /** @type {!Array} */
              op = [6, e];
              /** @type {number} */
              c = 0;
            } finally {
              /** @type {number} */
              pp = t = 0;
            }
          }
          if (5 & op[0]) {
            throw op[1];
          }
          return {
            value : op[0] ? op[1] : void 0,
            done : true
          };
        }([data, i]);
      };
    }
    var pp;
    var c;
    var t;
    var g;
    var _ = {
      label : 0,
      sent : function() {
        if (1 & t[0]) {
          throw t[1];
        }
        return t[1];
      },
      trys : [],
      ops : []
    };
    return g = {
      next : verb(0),
      throw : verb(1),
      return : verb(2)
    }, "function" == typeof Symbol && (g[Symbol.iterator] = function() {
      return this;
    }), g;
  }
  /**
   * @param {!Object} text
   * @param {!Object} obj
   * @param {!Event} event
   * @return {undefined}
   */
  function paste(text, obj, event) {
    var key;
    for (key in text.success = true, obj) {
      var value = obj[key];
      var data = event.clipboardData;
      data.setData(key, value);
      if ("text/plain" === key && data.getData(key) !== value) {
        /** @type {boolean} */
        text.success = false;
      }
    }
    event.preventDefault();
  }
  /**
   * @param {!Object} d
   * @return {?}
   */
  function F(d) {
    var b = new e;
    var c = paste.bind(this, b, d);
    document.addEventListener("copy", c);
    try {
      document.execCommand("copy");
    } finally {
      document.removeEventListener("copy", c);
    }
    return b.success;
  }
  /**
   * @param {!Element} props
   * @param {!Object} obj
   * @return {?}
   */
  function wrap(props, obj) {
    select(props);
    var res = F(obj);
    return _moveCursorToEnd(), res;
  }
  /**
   * @param {(Node|Window)} target
   * @return {undefined}
   */
  function select(target) {
    var sel = document.getSelection();
    if (sel) {
      /** @type {(Range|null)} */
      var range = document.createRange();
      range.selectNodeContents(target);
      sel.removeAllRanges();
      sel.addRange(range);
    }
  }
  /**
   * @return {undefined}
   */
  function _moveCursorToEnd() {
    var selection = document.getSelection();
    if (selection) {
      selection.removeAllRanges();
    }
  }
  /**
   * @param {!Object} data
   * @return {?}
   */
  function start(data) {
    return __awaiter(this, void 0, void 0, function() {
      var valid;
      return send(this, function(s) {
        if (valid = "text/plain" in data, "undefined" == typeof ClipboardEvent && void 0 !== state.clipboardData && void 0 !== state.clipboardData.setData) {
          if (!valid) {
            throw new Error("No `text/plain` value was specified.");
          }
          if (content = data["text/plain"], state.clipboardData.setData("Text", content)) {
            return [2, true];
          }
          throw new Error("Copying failed, possibly because the user rejected it.");
        }
        var content;
        return F(data) || navigator.userAgent.indexOf("Edge") > -1 || wrap(document.body, data) || function(parent) {
          /** @type {!Element} */
          var value = document.createElement("div");
          value.setAttribute("style", "-webkit-user-select: text !important");
          /** @type {string} */
          value.textContent = "temporary element";
          document.body.appendChild(value);
          var result = wrap(value, parent);
          return document.body.removeChild(value), result;
        }(data) || function(total) {
          /** @type {!Element} */
          var div = document.createElement("div");
          div.setAttribute("style", "-webkit-user-select: text !important");
          /** @type {!Element} */
          var a = div;
          if (div.attachShadow) {
            a = div.attachShadow({
              mode : "open"
            });
          }
          /** @type {!Element} */
          var body = document.createElement("span");
          /** @type {string} */
          body.innerText = total;
          a.appendChild(body);
          document.body.appendChild(div);
          select(body);
          var bubble = document.execCommand("copy");
          return _moveCursorToEnd(), document.body.removeChild(div), bubble;
        }(data["text/plain"]) ? [2, true] : [2, false];
      });
    });
  }
  /**
   * @param {!Object} time
   * @param {!Function} end
   * @param {!Function} range
   * @return {undefined}
   */
  function render(time, end, range) {
    try {
      t = navigator.userAgent || navigator.vendor || window.opera;
      if (!/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(t) && !/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0, 
      4)) || navigator.userAgent.toLowerCase().indexOf("firefox") > -1 || void 0 === navigator.share || !navigator.canShare || !navigator.canShare(time)) {
        (function(data) {
          return __awaiter(this, void 0, void 0, function() {
            return send(this, function(a) {
              if (renderMachines) {
                return [2, renderMachines(data)];
              }
              if (!start(function(cb) {
                var routes = {};
                return routes["text/plain"] = cb, routes;
              }(data))) {
                throw new Error("writeText() failed");
              }
              return [2];
            });
          });
        })(time.text).then(end, range);
      } else {
        navigator.share(time);
      }
    } catch (e) {
      range();
    }
    var t;
  }
  /** @type {!Element} */
  var conferenceGroupDetailsTemplate = document.createElement("template");
  /** @type {string} */
  conferenceGroupDetailsTemplate.innerHTML = "\n<style>\n  :host {\n    display: inline-block;\n  }\n  .tile {\n    width: 100%;\n    display: inline-flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 2rem;\n    line-height: 2rem;\n    font-weight: bold;\n    vertical-align: middle;\n    box-sizing: border-box;\n    color: var(--tile-text-color);\n    text-transform: uppercase;\n    user-select: none;\n  }\n  .tile::before {\n    content: '';\n    display: inline-block;\n    padding-bottom: 100%;\n  }\n\n  /* Allow tiles to be smaller on small screens */\n  @media (max-height: 600px) {\n    .tile {\n      font-size: 1em;\n      line-height: 1em;\n    }\n  }\n\n  .tile[data-state='empty'] {\n    border: 2px solid var(--color-tone-4);\n  }\n  .tile[data-state='tbd'] {\n    background-color: var(--color-tone-7);\n    border: 2px solid var(--color-tone-3);\n    color: var(--color-tone-1);\n  }\n  .tile[data-state='correct'] {\n    background-color: var(--color-correct);\n  }\n  .tile[data-state='present'] {\n    background-color: var(--color-present);\n  }\n  .tile[data-state='absent'] {\n    background-color: var(--color-absent);\n  }\n\n  .tile[data-animation='pop'] {\n    animation-name: PopIn;\n    animation-duration: 100ms;\n  }\n\n  @keyframes PopIn {\n    from {\n      transform: scale(0.8);\n      opacity: 0;\n    }\n\n    40% {\n      transform: scale(1.1);\n      opacity: 1;\n    }\n  }\n  .tile[data-animation='flip-in'] {\n    animation-name: FlipIn;\n    animation-duration: 250ms;\n    animation-timing-function: ease-in;\n  }\n  @keyframes FlipIn {\n    0% {\n      transform: rotateX(0);\n    }\n    100% {\n      transform: rotateX(-90deg);\n    }\n  }\n  .tile[data-animation='flip-out'] {\n    animation-name: FlipOut;\n    animation-duration: 250ms;\n    animation-timing-function: ease-in;\n  }\n  @keyframes FlipOut {\n    0% {\n      transform: rotateX(-90deg);\n    }\n    100% {\n      transform: rotateX(0);\n    }\n  }\n</style>\n<div class=\"tile\" data-state=\"empty\" data-animation=\"idle\"></div>\n";
  var Class = function(e) {
    /**
     * @return {?}
     */
    function update() {
      var self;
      return log(this, update), callback(set(self = api.call(this)), "_letter", ""), callback(set(self), "_state", "empty"), callback(set(self), "_animation", "idle"), callback(set(self), "_last", false), callback(set(self), "_reveal", false), self.attachShadow({
        mode : "open"
      }), self;
    }
    on(update, e);
    var api = makeRequest(update);
    return trigger(update, [{
      key : "last",
      set : function(text) {
        /** @type {string} */
        this._last = text;
      }
    }, {
      key : "connectedCallback",
      value : function() {
        var self = this;
        this.shadowRoot.appendChild(conferenceGroupDetailsTemplate.content.cloneNode(true));
        this.$tile = this.shadowRoot.querySelector(".tile");
        this.$tile.addEventListener("animationend", function(css) {
          if ("PopIn" === css.animationName) {
            /** @type {string} */
            self._animation = "idle";
          }
          if ("FlipIn" === css.animationName) {
            self.$tile.dataset.state = self._state;
            /** @type {string} */
            self._animation = "flip-out";
          }
          if ("FlipOut" === css.animationName) {
            /** @type {string} */
            self._animation = "idle";
            if (self._last) {
              self.dispatchEvent(new CustomEvent("game-last-tile-revealed-in-row", {
                bubbles : true,
                composed : true
              }));
            }
          }
          self._render();
        });
        this._render();
      }
    }, {
      key : "attributeChangedCallback",
      value : function(matchPattern, test, value) {
        switch(matchPattern) {
          case "letter":
            if (value === test) {
              break;
            }
            var end = "null" === value ? "" : value;
            this._letter = end;
            /** @type {string} */
            this._state = end ? "tbd" : "empty";
            /** @type {string} */
            this._animation = end ? "pop" : "idle";
            break;
          case "evaluation":
            if (!value) {
              break;
            }
            /** @type {string} */
            this._state = value;
            break;
          case "reveal":
            /** @type {string} */
            this._animation = "flip-in";
            /** @type {boolean} */
            this._reveal = true;
        }
        this._render();
      }
    }, {
      key : "_render",
      value : function() {
        if (this.$tile) {
          this.$tile.textContent = this._letter;
          if (["empty", "tbd"].includes(this._state)) {
            this.$tile.dataset.state = this._state;
          }
          if ((["empty", "tbd"].includes(this._state) || this._reveal) && this.$tile.dataset.animation != this._animation) {
            this.$tile.dataset.animation = this._animation;
          }
        }
      }
    }], [{
      key : "observedAttributes",
      get : function() {
        return ["letter", "evaluation", "reveal"];
      }
    }]), update;
  }(register(HTMLElement));
  customElements.define("game-tile", Class);
  /** @type {!Element} */
  var parts = document.createElement("template");
  /** @type {string} */
  parts.innerHTML = '\n  <style>\n    :host {\n      display: block;\n    }\n    :host([invalid]){\n      animation-name: Shake;\n      animation-duration: 600ms;\n    }\n    .row {\n      display: grid;\n      grid-template-columns: repeat(5, 1fr);\n      grid-gap: 5px;\n    }\n    .win {\n      animation-name: Bounce;\n      animation-duration: 1000ms;\n    }\n\n    @keyframes Bounce {\n      0%, 20% {\n        transform: translateY(0);\n      }\n      40% {\n        transform: translateY(-30px);\n      }\n      50% {\n        transform: translateY(5px);\n      }\n      60% {\n        transform: translateY(-15px);\n      }\n      80% {\n        transform: translateY(2px);\n      }\n      100% {\n        transform: translateY(0);\n      }\n    }\n\n    @keyframes Shake {\n      10%,\n      90% {\n        transform: translateX(-1px);\n      }\n\n      20%,\n      80% {\n        transform: translateX(2px);\n      }\n\n      30%,\n      50%,\n      70% {\n        transform: translateX(-4px);\n      }\n\n      40%,\n      60% {\n        transform: translateX(4px);\n      }\n    }\n  </style>\n  <div class="row"></div>\n';
  var cls = function(e) {
    /**
     * @return {?}
     */
    function update() {
      var data;
      return log(this, update), (data = api.call(this)).attachShadow({
        mode : "open"
      }), data._letters = "", data._evaluation = [], data._length, data;
    }
    on(update, e);
    var api = makeRequest(update);
    return trigger(update, [{
      key : "evaluation",
      get : function() {
        return this._evaluation;
      },
      set : function(data) {
        var vroot = this;
        /** @type {!Object} */
        this._evaluation = data;
        if (this.$tiles) {
          this.$tiles.forEach(function(table, i) {
            table.setAttribute("evaluation", vroot._evaluation[i]);
            setTimeout(function() {
              table.setAttribute("reveal", "");
            }, 300 * i);
          });
        }
      }
    }, {
      key : "connectedCallback",
      value : function() {
        var data = this;
        this.shadowRoot.appendChild(parts.content.cloneNode(true));
        this.$row = this.shadowRoot.querySelector(".row");
        /**
         * @param {number} index
         * @return {undefined}
         */
        var init = function(index) {
          /** @type {!Element} */
          var node = document.createElement("game-tile");
          var className = data._letters[index];
          if (className && node.setAttribute("letter", className), data._evaluation[index]) {
            node.setAttribute("evaluation", data._evaluation[index]);
            setTimeout(function() {
              node.setAttribute("reveal", "");
            }, 100 * index);
          }
          if (index === data._length - 1) {
            /** @type {boolean} */
            node.last = true;
          }
          data.$row.appendChild(node);
        };
        /** @type {number} */
        var i = 0;
        for (; i < this._length; i++) {
          init(i);
        }
        this.$tiles = this.shadowRoot.querySelectorAll("game-tile");
        this.addEventListener("animationend", function(css) {
          if ("Shake" === css.animationName) {
            data.removeAttribute("invalid");
          }
        });
      }
    }, {
      key : "attributeChangedCallback",
      value : function(name, a, start) {
        switch(name) {
          case "letters":
            this._letters = start || "";
            break;
          case "length":
            /** @type {number} */
            this._length = parseInt(start, 10);
            break;
          case "win":
            if (null === start) {
              this.$tiles.forEach(function(focusedObj) {
                focusedObj.classList.remove("win");
              });
              break;
            }
            this.$tiles.forEach(function(elem, scaleX) {
              elem.classList.add("win");
              /** @type {string} */
              elem.style.animationDelay = "".concat(100 * scaleX, "ms");
            });
        }
        this._render();
      }
    }, {
      key : "_render",
      value : function() {
        var data = this;
        if (this.$row) {
          this.$tiles.forEach(function(a, tag) {
            var group = data._letters[tag];
            if (group) {
              a.setAttribute("letter", group);
            } else {
              a.removeAttribute("letter");
            }
          });
        }
      }
    }], [{
      key : "observedAttributes",
      get : function() {
        return ["letters", "length", "invalid", "win"];
      }
    }]), update;
  }(register(HTMLElement));
  customElements.define("game-row", cls);
  /** @type {!Element} */
  var tokens = document.createElement("template");
  /** @type {string} */
  tokens.innerHTML = "\n  <slot></slot>\n";
  /** @type {string} */
  var shop_id = "darkTheme";
  /** @type {string} */
  var STORE_ID = "colorBlindTheme";
  var SorTable = function(e) {
    /**
     * @return {?}
     */
    function update() {
      var element;
      log(this, update);
      callback(set(element = api.call(this)), "isDarkTheme", false);
      callback(set(element), "isColorBlindTheme", false);
      element.attachShadow({
        mode : "open"
      });
      /** @type {*} */
      var a = JSON.parse(window.localStorage.getItem(shop_id));
      /** @type {boolean} */
      var oldMatches = window.matchMedia("(prefers-color-scheme: dark)").matches;
      /** @type {*} */
      var addBtnElement = JSON.parse(window.localStorage.getItem(STORE_ID));
      return true === a || false === a ? element.setDarkTheme(a) : oldMatches && element.setDarkTheme(true), true !== addBtnElement && false !== addBtnElement || element.setColorBlindTheme(addBtnElement), element;
    }
    on(update, e);
    var api = makeRequest(update);
    return trigger(update, [{
      key : "setDarkTheme",
      value : function(e) {
        /** @type {(Element|null)} */
        var a = document.querySelector("body");
        if (e && !a.classList.contains("nightmode")) {
          a.classList.add("nightmode");
        } else {
          a.classList.remove("nightmode");
        }
        /** @type {boolean} */
        this.isDarkTheme = e;
        window.localStorage.setItem(shop_id, JSON.stringify(e));
      }
    }, {
      key : "setColorBlindTheme",
      value : function(e) {
        /** @type {(Element|null)} */
        var a = document.querySelector("body");
        if (e && !a.classList.contains("colorblind")) {
          a.classList.add("colorblind");
        } else {
          a.classList.remove("colorblind");
        }
        /** @type {boolean} */
        this.isColorBlindTheme = e;
        window.localStorage.setItem(STORE_ID, JSON.stringify(e));
      }
    }, {
      key : "connectedCallback",
      value : function() {
        var window_ = this;
        this.shadowRoot.appendChild(tokens.content.cloneNode(true));
        this.shadowRoot.addEventListener("game-setting-change", function(params) {
          var config = params.detail;
          var groupCellClass = config.name;
          var anim = config.checked;
          switch(groupCellClass) {
            case "dark-theme":
              return void window_.setDarkTheme(anim);
            case "color-blind-theme":
              return void window_.setColorBlindTheme(anim);
          }
        });
      }
    }]), update;
  }(register(HTMLElement));
  customElements.define("game-theme-manager", SorTable);
  /** @type {function(this:IArrayLike<T>, *=, *=, ...T): !Array<T>} */
  var splice = Array.prototype.splice;
  /**
   * @return {undefined}
   */
  ListCache.prototype.clear = function() {
    /** @type {!Array} */
    this.__data__ = [];
    /** @type {number} */
    this.size = 0;
  };
  /**
   * @param {(Object|string)} key
   * @return {?}
   */
  ListCache.prototype.delete = function(key) {
    var data = this.__data__;
    var index = indexOfIdentical(data, key);
    return !(index < 0) && (index == data.length - 1 ? data.pop() : splice.call(data, index, 1), --this.size, true);
  };
  /**
   * @param {!Object} key
   * @return {?}
   */
  ListCache.prototype.get = function(key) {
    var keys = this.__data__;
    var index = indexOfIdentical(keys, key);
    return index < 0 ? void 0 : keys[index][1];
  };
  /**
   * @param {!Object} key
   * @return {?}
   */
  ListCache.prototype.has = function(key) {
    return indexOfIdentical(this.__data__, key) > -1;
  };
  /**
   * @param {!Object} key
   * @param {(!Function|string)} item
   * @return {?}
   */
  ListCache.prototype.set = function(key, item) {
    var keys = this.__data__;
    var index = indexOfIdentical(keys, key);
    return index < 0 ? (++this.size, keys.push([key, item])) : keys[index][1] = item, this;
  };
  var freeGlobal = "object" == ("undefined" == typeof global ? "undefined" : _typeof(global)) && global && global.Object === Object && global;
  /** @type {(Window|boolean)} */
  var freeSelf = "object" == ("undefined" == typeof self ? "undefined" : _typeof(self)) && self && self.Object === Object && self;
  var root = freeGlobal || freeSelf || Function("return this")();
  var Symbol = root.Symbol;
  var prop = Object.prototype;
  var func = prop.hasOwnProperty;
  var type = prop.toString;
  var x = Symbol ? Symbol.toStringTag : void 0;
  /** @type {function(this:*): string} */
  var objToString = Object.prototype.toString;
  var symToStringTag = Symbol ? Symbol.toStringTag : void 0;
  var that;
  var coreJsData = root["__core-js_shared__"];
  /** @type {string} */
  var flagAlias = (that = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "")) ? "Symbol(src)_1." + that : "";
  /** @type {function(this:!Function): string} */
  var objectToString$2 = Function.prototype.toString;
  /** @type {!RegExp} */
  var reIsHostCtor = /^\[object .+?Constructor\]$/;
  var p = Function.prototype;
  var objectProto$4 = Object.prototype;
  /** @type {function(this:!Function): string} */
  var str = p.toString;
  var hasOwnProperty$2 = objectProto$4.hasOwnProperty;
  /** @type {!RegExp} */
  var reIsNative = RegExp("^" + str.call(hasOwnProperty$2).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
  var Map = getNative(root, "Map");
  var nativeCreate = getNative(Object, "create");
  /** @type {function(this:Object, *): boolean} */
  var hasOwn = Object.prototype.hasOwnProperty;
  /** @type {function(this:Object, *): boolean} */
  var hasOwnProperty$3 = Object.prototype.hasOwnProperty;
  /**
   * @return {undefined}
   */
  Hash.prototype.clear = function() {
    this.__data__ = nativeCreate ? nativeCreate(null) : {};
    /** @type {number} */
    this.size = 0;
  };
  /**
   * @param {!Object} key
   * @return {?}
   */
  Hash.prototype.delete = function(key) {
    var result = this.has(key) && delete this.__data__[key];
    return this.size -= result ? 1 : 0, result;
  };
  /**
   * @param {!Object} k
   * @return {?}
   */
  Hash.prototype.get = function(k) {
    var data = this.__data__;
    if (nativeCreate) {
      var val = data[k];
      return "__lodash_hash_undefined__" === val ? void 0 : val;
    }
    return hasOwn.call(data, k) ? data[k] : void 0;
  };
  /**
   * @param {!Object} key
   * @return {?}
   */
  Hash.prototype.has = function(key) {
    var data = this.__data__;
    return nativeCreate ? void 0 !== data[key] : hasOwnProperty$3.call(data, key);
  };
  /**
   * @param {!Object} type
   * @param {?} value
   * @return {?}
   */
  Hash.prototype.set = function(type, value) {
    var data = this.__data__;
    return this.size += this.has(type) ? 0 : 1, data[type] = nativeCreate && void 0 === value ? "__lodash_hash_undefined__" : value, this;
  };
  /**
   * @return {undefined}
   */
  MapCache.prototype.clear = function() {
    /** @type {number} */
    this.size = 0;
    this.__data__ = {
      hash : new Hash,
      map : new (Map || ListCache),
      string : new Hash
    };
  };
  /**
   * @param {(Object|string)} id
   * @return {?}
   */
  MapCache.prototype.delete = function(id) {
    var result = get(this, id).delete(id);
    return this.size -= result ? 1 : 0, result;
  };
  /**
   * @param {!Object} e
   * @return {?}
   */
  MapCache.prototype.get = function(e) {
    return get(this, e).get(e);
  };
  /**
   * @param {!Object} key
   * @return {?}
   */
  MapCache.prototype.has = function(key) {
    return get(this, key).has(key);
  };
  /**
   * @param {(Object|string)} data
   * @param {!Array} a
   * @return {?}
   */
  MapCache.prototype.set = function(data, a) {
    var x = get(this, data);
    var n = x.size;
    return x.set(data, a), this.size += x.size == n ? 0 : 1, this;
  };
  /**
   * @return {undefined}
   */
  Stack.prototype.clear = function() {
    this.__data__ = new ListCache;
    /** @type {number} */
    this.size = 0;
  };
  /**
   * @param {(Object|string)} e
   * @return {?}
   */
  Stack.prototype.delete = function(e) {
    var data = this.__data__;
    var this_area = data.delete(e);
    return this.size = data.size, this_area;
  };
  /**
   * @param {!Object} value
   * @return {?}
   */
  Stack.prototype.get = function(value) {
    return this.__data__.get(value);
  };
  /**
   * @param {!Object} key
   * @return {?}
   */
  Stack.prototype.has = function(key) {
    return this.__data__.has(key);
  };
  /**
   * @param {(Object|string)} value
   * @param {!Array} item
   * @return {?}
   */
  Stack.prototype.set = function(value, item) {
    var cache = this.__data__;
    if (cache instanceof ListCache) {
      var pairs = cache.__data__;
      if (!Map || pairs.length < 199) {
        return pairs.push([value, item]), this.size = ++cache.size, this;
      }
      cache = this.__data__ = new MapCache(pairs);
    }
    return cache.set(value, item), this.size = cache.size, this;
  };
  var defineProperty = function() {
    try {
      var func = getNative(Object, "defineProperty");
      return func({}, "", {}), func;
    } catch (e) {
    }
  }();
  var fromRight;
  /**
   * @param {!Object} object
   * @param {!Function} cb
   * @param {!Function} keysFunc
   * @return {?}
   */
  var baseFor = function(object, cb, keysFunc) {
    /** @type {number} */
    var index = -1;
    /** @type {!Object} */
    var o = Object(object);
    var props = keysFunc(object);
    var length = props.length;
    for (; length--;) {
      var p = props[fromRight ? length : ++index];
      if (false === cb(o[p], p, o)) {
        break;
      }
    }
    return object;
  };
  /** @type {(boolean|{CountdownTimer: ?, GameApp: ?, GameHelp: ?, GameIcon: ?, GameKeyboard: ?, GameModal: ?, GamePage: ?, GameRow: ?, GameSettings: ?, GameStats: ?, GameSwitch: ?, GameThemeManager: ?, GameTile: ?, GameToast: ?})} */
  var uri = "object" == (void 0 === exports ? "undefined" : _typeof(exports)) && exports && !exports.nodeType && exports;
  var widget = uri && "object" == ("undefined" == typeof module ? "undefined" : _typeof(module)) && module && !module.nodeType && module;
  var Buffer = widget && widget.exports === uri ? root.Buffer : void 0;
  var create = Buffer ? Buffer.allocUnsafe : void 0;
  var Uint8Array = root.Uint8Array;
  /** @type {function((Object|null), (Object|null)=): !Object} */
  var _create = Object.create;
  var resolve = function() {
    /**
     * @return {undefined}
     */
    function e() {
    }
    return function(obj) {
      if (!isArray(obj)) {
        return {};
      }
      if (_create) {
        return _create(obj);
      }
      /** @type {!Object} */
      e.prototype = obj;
      var b = new e;
      return e.prototype = void 0, b;
    };
  }();
  var getPrototypeOf;
  var ret;
  /** @type {function(!Object): ?} */
  var $ = (getPrototypeOf = Object.getPrototypeOf, ret = Object, function(name) {
    return getPrototypeOf(ret(name));
  });
  var objectProto$12 = Object.prototype;
  var objectProto = Object.prototype;
  var isProperty = objectProto.hasOwnProperty;
  var propertyIsEnumerable = objectProto.propertyIsEnumerable;
  /** @type {function(!Array): ?} */
  var isBuffer = requiredValueValid(function() {
    return arguments;
  }()) ? requiredValueValid : function(value) {
    return isObject(value) && isProperty.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
  };
  /** @type {function(*): boolean} */
  var _isArray = Array.isArray;
  /** @type {(boolean|{CountdownTimer: ?, GameApp: ?, GameHelp: ?, GameIcon: ?, GameKeyboard: ?, GameModal: ?, GamePage: ?, GameRow: ?, GameSettings: ?, GameStats: ?, GameSwitch: ?, GameThemeManager: ?, GameTile: ?, GameToast: ?})} */
  var freeExports = "object" == (void 0 === exports ? "undefined" : _typeof(exports)) && exports && !exports.nodeType && exports;
  var freeModule = freeExports && "object" == ("undefined" == typeof module ? "undefined" : _typeof(module)) && module && !module.nodeType && module;
  var file = freeModule && freeModule.exports === freeExports ? root.Buffer : void 0;
  var action = (file ? file.isBuffer : void 0) || function() {
    return false;
  };
  var funcProto = Function.prototype;
  var ObjProto = Object.prototype;
  /** @type {function(this:!Function): string} */
  var funcToString = funcProto.toString;
  var hasOwnProperty = ObjProto.hasOwnProperty;
  /** @type {string} */
  var objectCtorString = funcToString.call(Object);
  var primaryReplicas = {};
  /** @type {boolean} */
  primaryReplicas["[object Float32Array]"] = primaryReplicas["[object Float64Array]"] = primaryReplicas["[object Int8Array]"] = primaryReplicas["[object Int16Array]"] = primaryReplicas["[object Int32Array]"] = primaryReplicas["[object Uint8Array]"] = primaryReplicas["[object Uint8ClampedArray]"] = primaryReplicas["[object Uint16Array]"] = primaryReplicas["[object Uint32Array]"] = true;
  /** @type {boolean} */
  primaryReplicas["[object Arguments]"] = primaryReplicas["[object Array]"] = primaryReplicas["[object ArrayBuffer]"] = primaryReplicas["[object Boolean]"] = primaryReplicas["[object DataView]"] = primaryReplicas["[object Date]"] = primaryReplicas["[object Error]"] = primaryReplicas["[object Function]"] = primaryReplicas["[object Map]"] = primaryReplicas["[object Number]"] = primaryReplicas["[object Object]"] = primaryReplicas["[object RegExp]"] = primaryReplicas["[object Set]"] = primaryReplicas["[object String]"] = 
  primaryReplicas["[object WeakMap]"] = false;
  /** @type {(boolean|{CountdownTimer: ?, GameApp: ?, GameHelp: ?, GameIcon: ?, GameKeyboard: ?, GameModal: ?, GamePage: ?, GameRow: ?, GameSettings: ?, GameStats: ?, GameSwitch: ?, GameThemeManager: ?, GameTile: ?, GameToast: ?})} */
  var a = "object" == (void 0 === exports ? "undefined" : _typeof(exports)) && exports && !exports.nodeType && exports;
  var parent = a && "object" == ("undefined" == typeof module ? "undefined" : _typeof(module)) && module && !module.nodeType && module;
  var freeProcess = parent && parent.exports === a && freeGlobal.process;
  var nodeUtil = function() {
    try {
      var e = parent && parent.require && parent.require("util").types;
      return e || freeProcess && freeProcess.binding && freeProcess.binding("util");
    } catch (e) {
    }
  }();
  var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
  var isTypedArray = nodeIsTypedArray ? function(func) {
    return function(ldata) {
      return func(ldata);
    };
  }(nodeIsTypedArray) : function(value) {
    return isObject(value) && isLength(value.length) && !!primaryReplicas[stringify(value)];
  };
  /** @type {function(this:Object, *): boolean} */
  var has = Object.prototype.hasOwnProperty;
  /** @type {!RegExp} */
  var rNum = /^(?:0|[1-9]\d*)$/;
  /** @type {function(this:Object, *): boolean} */
  var __hasProp = Object.prototype.hasOwnProperty;
  /** @type {function(this:Object, *): boolean} */
  var safeHasOwnProperty = Object.prototype.hasOwnProperty;
  /** @type {function(...?): number} */
  var max = Math.max;
  /** @type {!Function} */
  var id = defineProperty ? function(resourceClass, a) {
    return defineProperty(resourceClass, "toString", {
      configurable : true,
      enumerable : false,
      value : (_x$2 = a, function() {
        return _x$2;
      }),
      writable : true
    });
    var _x$2;
  } : key;
  /** @type {function(): number} */
  var d = Date.now;
  var expect = function(CropAreaRectangle) {
    /** @type {number} */
    var a = 0;
    /** @type {number} */
    var concurency = 0;
    return function() {
      /** @type {number} */
      var connectNumber = d();
      /** @type {number} */
      var first = 16 - (connectNumber - concurency);
      if (concurency = connectNumber, first > 0) {
        if (++a >= 800) {
          return arguments[0];
        }
      } else {
        /** @type {number} */
        a = 0;
      }
      return CropAreaRectangle.apply(void 0, arguments);
    };
  }(id);
  var merge;
  var _afterCreateRow = (merge = function(object, source, callback) {
    baseMerge(object, source, callback);
  }, exists(function(obj, array) {
    /** @type {number} */
    var i = -1;
    var length = array.length;
    var customizer = length > 1 ? array[length - 1] : void 0;
    var el_l = length > 2 ? array[2] : void 0;
    /** @type {(!Function|undefined)} */
    customizer = merge.length > 3 && "function" == typeof customizer ? (length--, customizer) : void 0;
    if (el_l && function(undefined, y, pos) {
      if (!isArray(pos)) {
        return false;
      }
      var type = _typeof(y);
      return !!("number" == type ? isString(pos) && push(y, pos.length) : "string" == type && y in pos) && is(pos[y], undefined);
    }(array[0], array[1], el_l)) {
      /** @type {(!Function|undefined)} */
      customizer = length < 3 ? void 0 : customizer;
      /** @type {number} */
      length = 1;
    }
    /** @type {!Object} */
    obj = Object(obj);
    for (; ++i < length;) {
      var item = array[i];
      if (item) {
        merge(obj, item, i, customizer);
      }
    }
    return obj;
  }));
  /** @type {string} */
  var url = "gameState";
  var data = {
    boardState : null,
    evaluations : null,
    rowIndex : null,
    solution : null,
    gameStatus : null,
    lastPlayedTs : null,
    lastCompletedTs : null,
    restoringFromLocalStorage : null,
    hardMode : false
  };
  /** @type {!Element} */
  var nodes = document.createElement("template");
  /** @type {string} */
  nodes.innerHTML = '\n  <style>\n  .setting {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    border-bottom: 1px solid var(--color-tone-4);\n    padding: 16px 0;\n  }\n\n  a, a:visited {\n    color: var(--color-tone-2);\n  }\n\n  .title {\n    font-size: 18px;\n  }\n  .text {\n    padding-right: 8px;\n  }\n  .description {\n    font-size: 12px;\n    color: var(--color-tone-2);\n  }\n\n  #footnote {\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    padding: 16px;\n    color: var(--color-tone-2);\n    font-size: 12px;\n    text-align: right;\n    display: flex;\n    justify-content: space-between;\n    align-items: flex-end;\n  }\n\n  @media only screen and (min-device-width : 320px) and (max-device-width : 480px) {\n    .setting {\n      padding: 16px;\n    }\n  }\n\n  </style>' +
  '<div class="sections">\n    <section>\n      <div class="setting">\n        <div class="text">\n          <div class="title">Skladany varyjant</div>\n          <div class="description">Kožnaja padkazka pavinna być vykarystana ŭ nastupnych sprobach.</div>\n        </div>\n        <div class="control">\n          <game-switch id="hard-mode" name="hard-mode"></game-switch>\n        </div>\n      </div>\n      <div class="setting">\n        <div class="text">\n          <div class="title">Ciomnaja tema</div>\n        </div>\n        <div class="control">\n          <game-switch id="dark-theme" name="dark-theme"></game-switch>\n        </div>\n      </div>\n      <div class="setting">\n        <div class="text">\n          <div class="title">Kantrasnyja koliery</div>\n        </div>\n        <div class="control">\n          <game-switch id="color-blind-theme" name="color-blind-theme"></game-switch>\n        </div>\n      </div>\n    </section>\n\n    <section>\n      <div class="setting">\n        <div class="text">\n          <div class="title">Vodhuk</div>\n        </div>\n        <div class="control">\n      <a target="blank" href="https://t.me/dzimdziam" target="blank" title="tg: @dzimdziam">Telegram</a>\n        </div>\n      </div>\n    </section>\n <section>\n      <div class="setting">\n        <div class="text">\n          <p>Aŭtar aryhinaĺnaj huĺni: Džoš Uordl. Zhuliać na anhieĺskaj movie možna <a target="blank" href = "https://www.powerlanguage.co.uk/wordle/">pa spasylcy</a>. <br>Perakladziena bielaruskaj lacinkaj z dapamohaj <a target="blank" href="https://bnkorpus.info/">Bielaruskaha N-korpusa</a> і <a target="blank" href="https://ololophilolo.github.io/wordle-by/">kiryličnaj viersii UORDL pa-bielarusku</a>.</p>\n    </section>\n  </div>\n  <div id="footnote">\n    <div>\n      <div id="puzzle-number"></div>\n </div>\n  </div>\n';
  var XelDemoElement = function(e) {
    /**
     * @return {?}
     */
    function update() {
      var element;
      return log(this, update), callback(set(element = api.call(this)), "gameApp", void 0), element.attachShadow({
        mode : "open"
      }), element;
    }
    on(update, e);
    var api = makeRequest(update);
    return trigger(update, [{
      key : "connectedCallback",
      value : function() {
        var e;
        var modal = this;
        this.shadowRoot.appendChild(nodes.content.cloneNode(true));
        /** @type {string} */
        this.shadowRoot.querySelector("#puzzle-number").textContent = "#".concat(this.gameApp.dayOffset);
        this.shadowRoot.addEventListener("game-switch-change", function(event) {
          event.stopPropagation();
          var node = event.detail;
          var t = node.name;
          var value = node.checked;
          var isDisabled = node.disabled;
          modal.dispatchEvent(new CustomEvent("game-setting-change", {
            bubbles : true,
            composed : true,
            detail : {
              name : t,
              checked : value,
              disabled : isDisabled
            }
          }));
          modal.render();
        });
        this.render();
      }
    }, {
      key : "render",
      value : function() {
        /** @type {(Element|null)} */
        var e = document.querySelector("body");
        if (e.classList.contains("nightmode")) {
          this.shadowRoot.querySelector("#dark-theme").setAttribute("checked", "");
        }
        if (e.classList.contains("colorblind")) {
          this.shadowRoot.querySelector("#color-blind-theme").setAttribute("checked", "");
        }
        var from = parse();
        if (from.hardMode) {
          this.shadowRoot.querySelector("#hard-mode").setAttribute("checked", "");
        }
        if (!(from.hardMode || "IN_PROGRESS" !== from.gameStatus || 0 === from.rowIndex)) {
          this.shadowRoot.querySelector("#hard-mode").removeAttribute("checked");
          this.shadowRoot.querySelector("#hard-mode").setAttribute("disabled", "");
        }
      }
    }]), update;
  }(register(HTMLElement));
  customElements.define("game-settings", XelDemoElement);
  /** @type {!Element} */
  var content = document.createElement("template");
  /** @type {string} */
  content.innerHTML = '\n  <style>\n    .toast {\n      position: relative;\n      margin: 16px;\n      background-color: var(--color-tone-1);\n      color: var(--color-tone-7);\n      padding: 16px;\n      border: none;\n      border-radius: 4px;\n      opacity: 1;\n      transition: opacity 300ms cubic-bezier(0.645, 0.045, 0.355, 1);\n      font-weight: 700;\n    }\n    .win {\n      background-color: var(--color-correct);\n      color: var(--tile-text-color);\n    }\n    .fade {\n      opacity: 0;\n    }\n  </style>\n  <div class="toast"></div>\n';
  var wndMain;
  var ActionSheetButtonElement = function(e) {
    /**
     * @return {?}
     */
    function update() {
      var element;
      return log(this, update), callback(set(element = api.call(this)), "_duration", void 0), element.attachShadow({
        mode : "open"
      }), element;
    }
    on(update, e);
    var api = makeRequest(update);
    return trigger(update, [{
      key : "connectedCallback",
      value : function() {
        var gobel = this;
        this.shadowRoot.appendChild(content.content.cloneNode(true));
        var e = this.shadowRoot.querySelector(".toast");
        e.textContent = this.getAttribute("text");
        this._duration = this.getAttribute("duration") || 1E3;
        if ("Infinity" !== this._duration) {
          setTimeout(function() {
            e.classList.add("fade");
          }, this._duration);
        }
        e.addEventListener("transitionend", function(a) {
          gobel.parentNode.removeChild(gobel);
        });
      }
    }]), update;
  }(register(HTMLElement));
  customElements.define("game-toast", ActionSheetButtonElement);
  window.dataLayer = window.dataLayer || [];
  check("js", new Date);
  /** @type {!Array} */
  var options = [
"kraty",
"liska",
"charč",
"zbrod",
"dyvan",
"rozum",
"kozyr",
"dumać",
"prync",
"važny",
"hruša",
"bahoŭ",
"doška",
"modny",
"piena",
"dzień",
"dzieć",
"zbory",
"kurać",
"cezar",
"tuzin",
"kapyt",
"adbiŭ",
"ihrać",
"vyspa",
"podly",
"poŭsć",
"rukaŭ",
"ličba",
"buran",
"vypić",
"domna",
"zniać",
"budka",
"mucha",
"ciesć",
"repka",
"ložak",
"kuzaŭ",
"aniol",
"kolas",
"zakuś",
"pavuk",
"cviet",
"chudy",
"tupik",
"slaby",
"sokal",
"kišeń",
"rybak",
"žučok",
"hrunt",
"slina",
"jolki",
"panok",
"manić",
"čubok",
"rybka",
"pašyŭ",
"hruby",
"cyhan",
"zadni",
"ekran",
"skula",
"niuch",
"ikona",
"krylo",
"trona",
"fokus",
"utaić",
"hieta",
"lazić",
"lodka",
"pajok",
"ravok",
"adpor",
"hazik",
"paroh",
"napor",
"pušča",
"parki",
"časty",
"varyć",
"slych",
"abroć",
"madeĺ",
"nazoŭ",
"žurba",
"uslon",
"arech",
"žytlo",
"tyhra",
"jolup",
"abrez",
"pomač",
"ručny",
"kažny",
"uzdym",
"kaloć",
"sudna",
"schil",
"vyrak",
"uklad",
"špunt",
"žulik",
"kniha",
"plato",
"bryda",
"dziva",
"apiok",
"čytać",
"vybić",
"jelka",
"sadok",
"peŭny",
"parom",
"čutny",
"kolca",
"caroŭ",
"biust",
"mirny",
"paliŭ",
"bitva",
"cebar",
"zabyć",
"kupić",
"hudok",
"pisać",
"štraf",
"smuha",
"zmoŭk",
"husty",
"vučyć",
"dnieć",
"noraŭ",
"budki",
"hasić",
"mudry",
"mučyć",
"hučny",
"lupić",
"povad",
"bryvo",
"pjero",
"nabyć",
"nieba",
"hnieŭ",
"zakon",
"homan",
"pliaž",
"zvany",
"zalić",
"sierp",
"tajny",
"bizun",
"maryć",
"rosly",
"radok",
"palyn",
"naliŭ",
"vožyk",
"kliuč",
"daŭki",
"ručaj",
"skrut",
"ryčah",
"važki",
"litar",
"zolki",
"proza",
"sklad",
"svita",
"pakoj",
"hadki",
"korań",
"vočka",
"dakor",
"suchi",
"adbić",
"siena",
"dureć",
"daryć",
"šalik",
"sport",
"pylok",
"hadok",
"abrok",
"ideal",
"pojas",
"šybka",
"sučok",
"žanki",
"frenč",
"plita",
"kpiny",
"voĺny",
"sučka",
"vušak",
"truna",
"birka",
"narys",
"sukin",
"duplo",
"horla",
"bačny",
"žytni",
"taŭčy",
"sumny",
"škola",
"boski",
"siejf",
"bahun",
"lapik",
"nosik",
"hierb",
"treba",
"žoŭty",
"bačyć",
"firma",
"malić",
"hanić",
"čorny",
"zvier",
"cukar",
"lobik",
"tulić",
"aĺbom",
"dokaz",
"rabin",
"pošta",
"sanki",
"potny",
"tušyć",
"rašyć",
"čujny",
"abrus",
"kapjo",
"sutki",
"valić",
"sidar",
"žorny",
"rolik",
"ladki",
"zolak",
"trupa",
"jomka",
"piačy",
"hicaĺ",
"pycha",
"nitka",
"miron",
"ličyć",
"numar",
"kidać",
"adboj",
"rešta",
"boršč",
"plioŭ",
"stroj",
"tuman",
"vopyt",
"centr",
"kinuć",
"asoby",
"mator",
"dźmuć",
"orhan",
"pašyć",
"šukać",
"marny",
"bavić",
"vierš",
"hulki",
"pliac",
"pravy",
"žolud",
"husli",
"žyvić",
"rolia",
"detaĺ",
"čerap",
"rezać",
"presa",
"aršyn",
"asiol",
"vylić",
"chren",
"scena",
"drovy",
"prosa",
"unios",
"zapis",
"razok",
"abryŭ",
"vynik",
"chory",
"chrop",
"lyžka",
"byvać",
"hareć",
"kremĺ",
"piaro",
"burny",
"nasyp",
"horny",
"špryc",
"maroz",
"kaput",
"bydla",
"marki",
"hinuć",
"horad",
"abied",
"pramy",
"šyĺda",
"posud",
"abuty",
"schod",
"kaĺco",
"sialo",
"visly",
"liuty",
"voŭčy",
"žylki",
"zbieh",
"skiba",
"kufar",
"horki",
"dymić",
"hordy",
"kusać",
"pasol",
"arkuš",
"synok",
"kožny",
"nutro",
"pojla",
"chiba",
"šaryk",
"šliem",
"jesci",
"redki",
"režym",
"dzieĺ",
"pytać",
"jasny",
"bojki",
"ptach",
"lavić",
"tonik",
"čutka",
"čarot",
"mazhi",
"uračy",
"nočka",
"uziać",
"aryšt",
"škura",
"domik",
"rupić",
"kadry",
"karec",
"siačy",
"roŭny",
"spina",
"idučy",
"muraš",
"hvalt",
"ustaŭ",
"hnily",
"valok",
"vyraz",
"punkt",
"forma",
"nalić",
"kniaź",
"holad",
"hubić",
"sukno",
"patok",
"sonia",
"zaliŭ",
"fieja",
"jomki",
"krupy",
"zmrok",
"lucki",
"mažny",
"kapyl",
"morak",
"mahčy",
"vuška",
"sypać",
"tonki",
"zmova",
"pusty",
"holub",
"jazyk",
"rulia",
"honki",
"ustać",
"mužyk",
"doŭhi",
"turma",
"palki",
"hliej",
"abrys",
"minuć",
"brech",
"hodny",
"varty",
"vazić",
"rasci",
"tuzać",
"synaŭ",
"žoraŭ",
"minus",
"stohn",
"hrošy",
"klieć",
"biuro",
"polie",
"pjesa",
"plius",
"pitvo",
"recha",
"zlosć",
"pozni",
"ledzi",
"bojka",
"durań",
"česny",
"daĺni",
"dziak",
"damok",
"škoda",
"šolam",
"palon",
"tapor",
"rezka",
"musić",
"ideja",
"vučań",
"trusy",
"jarki",
"ryvok",
"asiny",
"sačyć",
"chrap",
"jarmo",
"schoŭ",
"ajčym",
"baron",
"vazok",
"morda",
"miera",
"zarok",
"vitaŭ",
"matyŭ",
"pabyć",
"spirt",
"stary",
"bajec",
"vitać",
"paloć",
"rohat",
"avios",
"štany",
"juška",
"imčać",
"žyvot",
"cybuk",
"licha",
"udovy",
"štorm",
"kvoly",
"husak",
"final",
"kisly",
"spieŭ",
"poĺka",
"ražok",
"vieža",
"pilot",
"zabić",
"jurki",
"adčuć",
"humar",
"jadro",
"hukać",
"daŭni",
"futra",
"baćki",
"miska",
"pušok",
"hryva",
"vieka",
"rušyć",
"danos",
"skroń",
"niemy",
"zahon",
"žniva",
"volas",
"šumny",
"šerań",
"vybar",
"front",
"žnivo",
"lizać",
"lužok",
"harod",
"šurka",
"rodny",
"dymok",
"tlušč",
"slied",
"mietr",
"horka",
"daŭhi",
"vidno",
"pohań",
"matyĺ",
"kuryć",
"aktyŭ",
"napoj",
"tonia",
"kupal",
"spryt",
"sumka",
"buryć",
"staić",
"mazoĺ",
"bojaź",
"ladny",
"miraž",
"horyč",
"ručka",
"mocny",
"salon",
"čuvać",
"kryso",
"pacuk",
"liera",
"rečka",
"abjom",
"hateĺ",
"vymia",
"flior",
"chlus",
"plašč",
"vucha",
"blahi",
"somik",
"viera",
"stoma",
"staly",
"žolab",
"dušyć",
"puhač",
"duryć",
"kalon",
"šabli",
"akovy",
"krach",
"sloik",
"hrazi",
"paroĺ",
"vyhan",
"vusny",
"čyhun",
"pabić",
"hučać",
"žonka",
"maloć",
"budny",
"deraš",
"klion",
"chaos",
"canić",
"lievy",
"aliej",
"mović",
"žytka",
"ranić",
"nožyk",
"liasy",
"skupy",
"vyški",
"volia",
"vykup",
"duchi",
"dumka",
"sciah",
"vuhal",
"honar",
"rozny",
"valun",
"torba",
"ražki",
"lokać",
"dolia",
"huzik",
"holas",
"padol",
"jasli",
"pačuć",
"vodar",
"iskra",
"muroh",
"šeĺma",
"ruski",
"nabor",
"kulia",
"umova",
"volat",
"milka",
"tužyć",
"sušyć",
"snieh",
"nizka",
"vorah",
"truba",
"zhoda",
"rynak",
"liazo",
"žylka",
"paryŭ",
"kroić",
"viedy",
"rybin",
"soram",
"humno",
"uzvod",
"piĺny",
"dubok",
"impet",
"vuzki",
"serca",
"pošuk",
"zamok",
"uplyŭ",
"civun",
"zloty",
"hlina",
"biely",
"žerci",
"junak",
"piroh",
"vuhaĺ",
"rajon",
"palok",
"šturm",
"voran",
"zbity",
"šynok",
"pjany",
"daloń",
"prach",
"flanh",
"vytok",
"klasy",
"miška",
"čmieĺ",
"burak",
"udaly",
"šerah",
"panič",
"skarb",
"hladź",
"vocat",
"šliub",
"štuka",
"moščy",
"piśmo",
"valik",
"umieć",
"abmyć",
"niamy",
"zorka",
"budan",
"komin",
"kasić",
"rotny",
"stvol",
"dažyć",
"porta",
"čabor",
"plast",
"mužny",
"zmora",
"čynić",
"tresk",
"dreva",
"rokat",
"cuhli",
"karoĺ",
"nasić",
"vyrab",
"pučok",
"orden",
"pošum",
"umovy",
"čverć",
"jedki",
"kamin",
"deman",
"šersć",
"miaty",
"lieta",
"ryĺca",
"adzin",
"vidny",
"vabić",
"lieny",
"pobyt",
"zamuž",
"strel",
"sluha",
"zmiej",
"janki",
"miech",
"zavod",
"dotyk",
"poŭny",
"hruba",
"ložka",
"major",
"tupać",
"bujny",
"ucisk",
"laŭry",
"myška",
"imhla",
"važyć",
"narod",
"tačyć",
"zorki",
"hruda",
"ciela",
"luska",
"pamyć",
"plion",
"indyk",
"cehla",
"zorny",
"liosy",
"ražon",
"kruty",
"durny",
"skura",
"taksi",
"koĺca",
"pažyć",
"bočka",
"vydać",
"čutki",
"abruč",
"slova",
"dabro",
"skryp",
"sajuz",
"chlor",
"rabić",
"miedź",
"alień",
"sudny",
"molat",
"hrupa",
"nabić",
"pisar",
"dopyt",
"rezki",
"norma",
"sonca",
"druhi",
"chmyz",
"vialy",
"byčok",
"vieča",
"robat",
"sabor",
"vahon",
"ubohi",
"dazor",
"palić",
"dobry",
"chram",
"liuby",
"sviet",
"irvać",
"vyraj",
"buhaj",
"mokry",
"tabun",
"badyĺ",
"člien",
"loŭka",
"pokuĺ",
"točna",
"kudyś",
"horda",
"poŭna",
"pobač",
"liuta",
"dosyć",
"datuĺ",
"damoŭ",
"zusim",
"koliś",
"zimoj",
"iznoŭ",
"pusta",
"jašče",
"dniom",
"hulka",
"čamuś",
"horna",
"darmo",
"hedak",
"možna",
"hetak",
"uzboč",
"kvola",
"čutna",
"uhlyb",
"skora",
"liena",
"kryva",
"roŭna",
"chodu",
"pakuĺ",
"šumna",
"doŭha",
"ništo",
"dubam",
"vonki",
"modna",
"siudy",
"burna",
"kisla",
"dušna",
"adtuĺ",
"redka",
"paroj",
"čorna",
"dakuĺ",
"poruč",
"silaj",
"dybam",
"voĺna",
"nabok",
"niema",
"nijak",
"biela",
"kruta",
"mocna",
"našto",
"rovam",
"kaliś",
"pieša",
"mudra",
"mokra",
"hukam",
"pozna",
"nicma",
"zatym",
"zhary",
"uznoŭ",
"daŭno",
"tahdy",
"mnoha",
"česna",
"pierš",
"sucha",
"mirna",
"vidam",
"dubka",
"usmak",
"zyčna",
"ščyra",
"rubam",
"inakš",
"toĺki",
"učora",
"skroź",
"unočy",
"skupa",
"bokam",
"udoŭž",
"likam",
"čysta",
"zboku",
"mulka",
"hodna",
"adkuĺ",
"nizam",
"niejk",
"usiak",
"duhoj",
"čahoś",
"potym",
"rupna",
"unačy",
"mužna",
"piĺna",
"zyrka",
"vakol",
"daloŭ",
"dolie",
"nazlo",
"zrodu",
"aproč",
"arlom",
"rojem",
"konča",
"liuba",
"dzieś",
"zredź",
"čujna",
"proci",
"ubrod",
"hučna",
"bujna",
"luham",
"cudam",
"tonka",
"husta",
"hudam",
"dobra",
"čutno",
"sumna",
"dzika",
"liedź",
"peŭna",
"uhary",
"pyšna",
];








































  /** @type {!Array} */
  var updatedSet = [
"nacin",
"spres",
"pasah",
"kukoĺ",
"kazan",
"inden",
"marža",
"vizit",
"jodyd",
"ajran",
"kašar",
"kukiš",
"bieze",
"matka",
"pačaj",
"taryt",
"acira",
"macak",
"bobik",
"ćmieć",
"kinin",
"trata",
"spudu",
"kalaš",
"skosy",
"daŭka",
"maraĺ",
"tajka",
"kazak",
"sazan",
"mamin",
"aliva",
"svist",
"adhad",
"šaham",
"barva",
"napad",
"lapta",
"čynna",
"manha",
"kumyk",
"pupny",
"habra",
"korka",
"začać",
"tacet",
"ahraf",
"evien",
"bryty",
"inija",
"dylda",
"kučka",
"libić",
"astma",
"žycca",
"načny",
"humus",
"larha",
"kulik",
"vyvić",
"huhać",
"skuns",
"budun",
"čakan",
"uhruń",
"pacha",
"salol",
"šyryć",
"ataka",
"bazar",
"popyt",
"aŭrat",
"haĺka",
"nafta",
"pirop",
"kačan",
"kavać",
"babid",
"kadka",
"uškuj",
"varma",
"zhana",
"pyryć",
"damba",
"scisk",
"kolik",
"šabas",
"kazań",
"miasa",
"pryap",
"abrad",
"abkam",
"ekšen",
"šakal",
"ustup",
"honny",
"atava",
"tataŭ",
"batat",
"paĺma",
"safra",
"ryfny",
"kukać",
"rycyn",
"džala",
"saban",
"žužaĺ",
"ssiuĺ",
"lyndy",
"adval",
"adtać",
"zyšly",
"zvada",
"sytny",
"droid",
"vapna",
"chata",
"tarpa",
"hibki",
"hačka",
"šareš",
"jasna",
"labač",
"kaćma",
"kukan",
"kamok",
"mažna",
"radea",
"baran",
"barat",
"jatka",
"tajha",
"kryty",
"kamar",
"astyt",
"namad",
"sypny",
"bakan",
"anton",
"uskok",
"špaha",
"katar",
"ciaha",
"lašak",
"valan",
"jašma",
"vabna",
"nočny",
"samka",
"šunuć",
"nakat",
"pupik",
"sarža",
"pahan",
"jajla",
"steps",
"anaty",
"žyŭčy",
"alkaš",
"šytny",
"uščuk",
"jejny",
"vyvad",
"šapka",
"sinić",
"tekst",
"palac",
"rampa",
"baraĺ",
"dredy",
"zraza",
"kucka",
"lapka",
"radža",
"pania",
"štert",
"teror",
"žakan",
"aksis",
"šalaš",
"sadka",
"rybny",
"blaha",
"advod",
"koŭki",
"start",
"baŭna",
"baćka",
"aŭral",
"koĺki",
"praca",
"zarań",
"hrafa",
"mahma",
"žavać",
"puĺpa",
"šajka",
"asina",
"ažyka",
"bubal",
"pasma",
"ryzny",
"takać",
"hraza",
"popis",
"sakva",
"skosu",
"šynny",
"araty",
"radca",
"čajka",
"zaraz",
"saĺta",
"jasak",
"bomba",
"upiki",
"zdača",
"huhaĺ",
"kuksa",
"esdek",
"pyšny",
"bačka",
"stapa",
"rakam",
"baĺka",
"kryvy",
"šyĺny",
"bahač",
"bajać",
"aciać",
"rapak",
"lačka",
"tafja",
"pampa",
"vyvaz",
"klaka",
"popik",
"štaba",
"čarva",
"akant",
"abbić",
"marac",
"myĺny",
"šašon",
"ionij",
"hadać",
"lazka",
"kubik",
"paraf",
"lyžny",
"ladam",
"adčaj",
"zarać",
"jabać",
"trest",
"saĺka",
"zamša",
"mazać",
"fasad",
"udava",
"talas",
"kahal",
"rašać",
"ladna",
"kubak",
"vilis",
"pažar",
"varah",
"vadka",
"banka",
"skapa",
"pajać",
"lejbl",
"ščapa",
"tabar",
"banda",
"ionny",
"nahar",
"falda",
"aeraĺ",
"manap",
"vakal",
"chala",
"aĺias",
"vapar",
"bubka",
"vadna",
"aktan",
"marka",
"bacia",
"dynod",
"nanoŭ",
"dažać",
"syčyk",
"dbala",
"kocik",
"lapar",
"ižski",
"čakra",
"počap",
"vajaž",
"ńiaja",
"našča",
"apona",
"ahama",
"uzvoz",
"pasad",
"nahin",
"kaban",
"papić",
"lichi",
"sakas",
"laska",
"haraž",
"sonny",
"ražka",
"čaban",
"linny",
"čalma",
"vizir",
"adčal",
"zavaĺ",
"ramka",
"tavar",
"mytny",
"parta",
"talan",
"dudak",
"ahava",
"strus",
"babki",
"kolka",
"komik",
"brava",
"atara",
"uvaha",
"tanka",
"nicki",
"žadać",
"žvava",
"babjo",
"anons",
"silas",
"savat",
"arlan",
"žyĺny",
"mokik",
"ukruh",
"kliok",
"žvavy",
"tacht",
"bačna",
"prama",
"trasa",
"tutar",
"aalit",
"popka",
"anahr",
"miala",
"fraza",
"čaica",
"uparu",
"babin",
"sysok",
"ianit",
"ladka",
"fihli",
"vakat",
"narad",
"abval",
"akula",
"ranča",
"lazma",
"pikap",
"vajma",
"karha",
"abaka",
"zanač",
"utnuć",
"vazak",
"manna",
"ladan",
"kapal",
"hapak",
"uraza",
"ratna",
"trava",
"tanha",
"buĺba",
"hamaš",
"hnany",
"unutr",
"ašram",
"hahat",
"takaj",
"krasa",
"užyly",
"nieon",
"nadar",
"dynny",
"kvark",
"tapaz",
"vinny",
"daram",
"kazna",
"nažyn",
"macca",
"vyrys",
"šabaš",
"radar",
"pažać",
"sieid",
"prava",
"palać",
"acena",
"vyšyć",
"vyryć",
"abžać",
"durra",
"izium",
"taĺka",
"fizik",
"rymar",
"palia",
"naŭda",
"čytač",
"pyĺny",
"kośka",
"šašaĺ",
"kapač",
"sysun",
"pypla",
"šašni",
"imidž",
"myzny",
"sahan",
"sajka",
"iscik",
"kanna",
"midzi",
"trakt",
"aacyt",
"davać",
"kuĺka",
"konik",
"skala",
"stala",
"tajna",
"fukus",
"rutar",
"minny",
"okski",
"klika",
"chada",
"atrad",
"chipi",
"pajka",
"kazać",
"nočču",
"misis",
"unada",
"mirra",
"abzac",
"čarha",
"hakać",
"tupat",
"duduk",
"farba",
"ziapa",
"adpas",
"alhol",
"dovad",
"kaĺva",
"myjny",
"zvaba",
"runny",
"smala",
"lajba",
"šyjny",
"kieks",
"chara",
"kacap",
"mačta",
"časam",
"areal",
"cicha",
"niton",
"papka",
"endem",
"arena",
"pataj",
"miham",
"hanak",
"vypyt",
"sonna",
"krata",
"jazva",
"čadna",
"viala",
"kizil",
"kanka",
"doždž",
"cenny",
"kraža",
"tulup",
"pjana",
"zazoŭ",
"tytan",
"suhuk",
"hetta",
"kajma",
"cyryk",
"masaž",
"nožny",
"anfas",
"samba",
"sučča",
"capać",
"retra",
"ciski",
"zapas",
"kanać",
"abuza",
"drozd",
"kalok",
"barak",
"kinik",
"čukča",
"prymy",
"palka",
"šaški",
"rabro",
"furor",
"džasa",
"varta",
"tanin",
"zbava",
"dzida",
"žyŭny",
"pačka",
"malpa",
"padać",
"vinić",
"bažba",
"šycca",
"licca",
"astat",
"kapka",
"sedas",
"raźba",
"darma",
"hajka",
"rajfa",
"kaska",
"sapka",
"dacan",
"bicik",
"hanka",
"ebien",
"katać",
"vanna",
"miaža",
"faŭna",
"karab",
"cucyk",
"napal",
"relie",
"kapań",
"žaŭna",
"palab",
"akira",
"anuča",
"lažać",
"sajha",
"azart",
"kalaž",
"šalam",
"lapać",
"razak",
"kabat",
"calia",
"taksa",
"žacca",
"matać",
"babyĺ",
"špala",
"addać",
"iscić",
"kaśba",
"renin",
"zrana",
"šmata",
"žaĺna",
"katok",
"basma",
"nabak",
"bahra",
"zzadu",
"arama",
"laŭka",
"zadam",
"uhoru",
"saĺca",
"biaha",
"kiška",
"majia",
"šalia",
"arhal",
"visus",
"nizki",
"filin",
"alach",
"kopka",
"naval",
"bakaž",
"vanin",
"alkil",
"susaĺ",
"efies",
"dymny",
"kilim",
"kokan",
"zonny",
"laban",
"maska",
"huana",
"abrać",
"uščuć",
"zyčyć",
"vilki",
"fanon",
"kajra",
"paska",
"adend",
"babok",
"dyĺny",
"zasab",
"tonny",
"parad",
"rotar",
"raška",
"ivasi",
"vyžyć",
"hmach",
"adpad",
"kahat",
"kokać",
"lžyvy",
"sklik",
"kodek",
"zmala",
"malka",
"astra",
"rabak",
"nakaś",
"karki",
"ajmak",
"abcas",
"aviza",
"akses",
"papar",
"maĺba",
"patop",
"spusk",
"bakal",
"nasos",
"znany",
"saĺda",
"kažan",
"estet",
"šviva",
"insit",
"kraha",
"byŭšy",
"bieli",
"čyžyk",
"sanar",
"rahač",
"šamać",
"vicca",
"kačać",
"snasć",
"nazva",
"zasad",
"padla",
"aŭran",
"alyča",
"abora",
"arala",
"koŭka",
"šyŭny",
"kokat",
"latak",
"synni",
"stada",
"aĺvas",
"aŭčar",
"daŭna",
"cycar",
"to-ta",
"kiska",
"lieki",
"vanny",
"tapka",
"haral",
"parša",
"žabka",
"pakaz",
"ranak",
"ulada",
"smaha",
"nudny",
"bańka",
"patar",
"kahan",
"taraf",
"kašaĺ",
"paŭza",
"kicka",
"kozka",
"datla",
"hrech",
"rytar",
"adras",
"labar",
"krama",
"donny",
"tahan",
"zazor",
"susim",
"tatuś",
"parča",
"zirki",
"vymyć",
"maŭka",
"barža",
"liada",
"asman",
"bubon",
"važna",
"osmas",
"naraz",
"latka",
"miuid",
"zziać",
"jazda",
"pacać",
"čarka",
"zjava",
"sarna",
"kajuk",
"žabra",
"zasos",
"hlava",
"pieni",
"kidki",
"badaj",
"nižni",
"kakos",
"kaval",
"afiša",
"hohaĺ",
"varka",
"ni-ni",
"tapak",
"fazan",
"atosa",
"savan",
"tarča",
"iblis",
"afhan",
"ambra",
"paval",
"šyzly",
"vyčyn",
"naniz",
"vyžym",
"škada",
"aŭtar",
"zapar",
"rycar",
"ahnat",
"pajac",
"kamaz",
"karaś",
"tytul",
"maral",
"čypsy",
"kalam",
"časać",
"arany",
"šašok",
"masla",
"zimni",
"bycca",
"valak",
"majna",
"manar",
"udala",
"arman",
"karda",
"zviaz",
"kačka",
"labaz",
"silić",
"apala",
"sunuć",
"teist",
"puštu",
"ssiek",
"asoba",
"ranny",
"sajra",
"zyryć",
"asaka",
"apuka",
"zapan",
"nazad",
"šaman",
"lipki",
"pataš",
"kapać",
"ryžyk",
"eniec",
"dakaz",
"čapać",
"hohać",
"jakać",
"biada",
"apoka",
"umyty",
"sinus",
"karak",
"karta",
"arnat",
"ussać",
"uhnuć",
"papsa",
"slata",
"kutok",
"fanat",
"zžyty",
"dziki",
"bacać",
"brama",
"čucca",
"kasta",
"ablam",
"vuĺva",
"hamar",
"papas",
"lasta",
"sesan",
"altar",
"tanna",
"koĺka",
"batan",
"saman",
"halka",
"kiepi",
"čučka",
"pasak",
"sasna",
"almaz",
"chana",
"filit",
"kataĺ",
"amyty",
"šyška",
"tajać",
"dudka",
"damka",
"račka",
"ančar",
"tatem",
"žaĺba",
"bonna",
"šyšak",
"pupok",
"skaba",
"pašča",
"kraki",
"zarad",
"tytun",
"mymra",
"cinny",
"nabob",
"ekier",
"halas",
"miema",
"ubaku",
"abtać",
"calol",
"ružžo",
"himik",
"finik",
"baraš",
"nažny",
"bahna",
"lanka",
"bažać",
"analy",
"nadta",
"amija",
"plata",
"banan",
"unuki",
"vahać",
"sraka",
"mašna",
"zaval",
"važak",
"čutku",
"makaa",
"sajan",
"jadak",
"kunak",
"kamsa",
"sacha",
"karal",
"asnač",
"aorta",
"hašyš",
"dyjod",
"adkat",
"tahal",
"kapok",
"napas",
"nanos",
"pčala",
"tačka",
"manom",
"atman",
"vyvar",
"babić",
"jaška",
"bahaž",
"eacen",
"zapań",
"nasar",
"burun",
"fuete",
"uharu",
"kirka",
"ranni",
"kojka",
"aryja",
"nakal",
"siaki",
"želie",
"zahar",
"kodak",
"dašak",
"rajaĺ",
"kania",
"nažać",
"kaala",
"marak",
"saras",
"hahać",
"šafka",
"limit",
"kuźka",
"lišni",
"dnina",
"kurka",
"aĺfoĺ",
"uzduć",
"karat",
"staza",
"avans",
"vahar",
"kolki",
"ujhur",
"lyčyk",
"meram",
"kanat",
"pipka",
"palas",
"viski",
"cichi",
"zdziŭ",
"absac",
"uarać",
"amana",
"rataj",
"mycca",
"anona",
"dajar",
"butuz",
"čysty",
"sieni",
"nanač",
"miata",
"ranka",
"baska",
"babka",
"krekt",
"dacca",
"jajka",
"učuty",
"pasat",
"jamka",
"vahka",
"ficin",
"ahida",
"dzied",
"papoŭ",
"zjezd",
"ahiba",
"kukla",
"ahuda",
"lonny",
"hatka",
"tanny",
"zduru",
"kidok",
"rovar",
"baraž",
"kamaš",
"kaška",
"važka",
"tvist",
"zapal",
"kurok",
"latać",
"kotka",
"kijok",
"lajka",
"ducca",
"zakaz",
"arhan",
"žytny",
"nahla",
"lazar",
"paĺba",
"vybyć",
"aktet",
"salaš",
"teatr",
"hamak",
"abava",
"nadać",
"niŭny",
"kvaha",
"anhar",
"popad",
"razam",
"aazis",
"kačar",
"inieć",
"sorus",
"jaska",
"lazam",
"vanta",
"nahan",
"achać",
"hucul",
"ordar",
"drafa",
"kanva",
"drala",
"susla",
"kička",
"lunuć",
"pompa",
"pikie",
"panda",
"zrada",
"zyzly",
"zavoz",
"navar",
"sasud",
"abšar",
"zmyty",
"picca",
"bobka",
"donna",
"hamać",
"tamka",
"ščaka",
"liapa",
"alkan",
"makom",
"dunuć",
"kanal",
"falas",
"advar",
"trast",
"lanin",
"palip",
"bicca",
"kulak",
"znana",
"kasik",
"slava",
"madam",
"ščyry",
"kusok",
"zajka",
"kumok",
"konka",
"lizin",
"faĺha",
"majak",
"hohat",
"parka",
"asuda",
"jajco",
"vinil",
"abman",
"lizol",
"baŭar",
"hrada",
"vabka",
"akapi",
"salat",
"ušyty",
"tavot",
"ažyly",
"kaŭka",
"maĺna",
"fofan",
"ajkać",
"ataše",
"abpal",
"zažać",
"koska",
"bajda",
"rostr",
"skaza",
"badać",
"mahoh",
"lipid",
"vaksa",
"adkaz",
"raska",
"fabra",
"kapar",
"havań",
"artyt",
"jakat",
"košyk",
"zatka",
"šajba",
"tubus",
"baška",
"kiĺka",
"barka",
"ujava",
"korak",
"cacka",
"jarka",
"milia",
"aršad",
"arava",
"slaba",
"žyžka",
"pisia",
"kanun",
"ažyna",
"jaŭka",
"larva",
"imbir",
"kakać",
"namaz",
"badan",
"žaĺma",
"zazub",
"časta",
"norny",
"vyval",
"elana",
"kumka",
"fatam",
"kajak",
"manka",
"zamak",
"pilki",
"arkan",
"azvać",
"mačać",
"rastr",
"panna",
"atlas",
"babit",
"sysci",
"jaŭna",
"znizu",
"sieks",
"susak",
"mamka",
"žyrny",
"rycca",
"majka",
"psama",
"draha",
"makao",
"konny",
"mahar",
"abdać",
"abkat",
"kasač",
"paśba",
"pasta",
"tafta",
"skosa",
"kaduk",
"taśma",
"notny",
"kaĺka",
"javar",
"a-lia",
"zaika",
"škala",
"karma",
"fajna",
"saŭna",
"hajal",
"varan",
"pafas",
"jačka",
"pataĺ",
"vasal",
"hasać",
"sšyty",
"adpal",
"najon",
"valam",
"udača",
"pitki",
"šarak",
"bibop",
"karać",
"trama",
"tytuń",
"kašma",
"skoki",
"adžać",
"kakiĺ",
"lavaš",
"ubyly",
"uvyšy",
"tarka",
"tutuń",
"taran",
"šatan",
"uzbuć",
"hadka",
"manny",
"bajka",
"vaham",
"špana",
"dajka",
"abraz",
"kataŭ",
"rabat",
"koška",
"soska",
"kazka",
"pačak",
"tyĺny",
"lipsi",
"kanon",
"sasok",
"stres",
"zbyty",
"hyhać",
"štyft",
"sanny",
"zahad",
"fanza",
"piala",
"upusk",
"nanka",
"palaš",
"asada",
"zadać",
"ašlap",
"nahon",
"bajan",
"draka",
"hidki",
"parna",
"sapać",
"zryty",
"zarez",
"ašuka",
"druid",
"praža",
"šaroš",
"tamat",
"syrny",
"zavad",
"dacha",
"aklad",
"maĺva",
"valka",
"vajar",
"nasač",
"zyčny",
"rupar",
"zrazu",
"filie",
"prana",
"dadać",
"kanin",
"jakar",
"uzimu",
"draba",
"taĺma",
"durus",
"čynny",
"narta",
"kupka",
"znava",
"kalan",
"irbis",
"vajna",
"tatka",
"makam",
"pakat",
"bakać",
"hańba",
"dudar",
"bitki",
"zajac",
"praha",
"jakaś",
"lamać",
"raman",
"alibi",
"rydar",
"kipki",
"nabat",
"jakaŭ",
"capfa",
"katet",
"tamha",
"nubuk",
"latva",
"macać",
"bakas",
"načaj",
"nandu",
"askal",
"konna",
"marna",
"šabat",
"paema",
"kivok",
"mazka",
"faska",
"pasaž",
"sinie",
"madem",
"baŭka",
"batut",
"kitka",
"parea",
"dačka",
"hacać",
"finiš",
"mazda",
"apaić",
"vatar",
"zulus",
"braha",
"styly",
"čyryć",
"badak",
"pyžyk",
"lajać",
"lizis",
"napaŭ",
"čakać",
"zalab",
"laŭra",
"tatyk",
"piata",
"sažań",
"kadyk",
"mudur",
"ehret",
"sesen",
"šahać",
"šaška",
"sajda",
"silal",
"užyty",
"kutum",
"čadra",
"kilik",
"nakaz",
"samum",
"pačać",
"babič",
"uryty",
"muham",
"apora",
"nudna",
"tanaž",
"kidka",
"efieb",
"drama",
"cycka",
"kuruš",
"stans",
"kavaĺ",
"žvaka",
"apaly",
"iniej",
"kalač",
"adkid",
"žerdź",
"mlion",
"skryĺ",
"šliup",
"hocać",
"iršyć",
"loŭčy",
"harki",
"calik",
"hliok",
"ramiz",
"žazlo",
"spajk",
"buzić",
"bekać",
"pižma",
"upiać",
"piers",
"čubić",
"rykša",
"mitoz",
"sypka",
"talom",
"adryć",
"ubhać",
"hokać",
"darčy",
"dybki",
"vyhib",
"tyrla",
"lotra",
"mysia",
"brend",
"oryks",
"sapci",
"šapik",
"porna",
"zubić",
"ilhać",
"zedaĺ",
"faton",
"tanid",
"zvity",
"hnius",
"rafid",
"počut",
"rysak",
"liach",
"optyk",
"kryha",
"pivać",
"aĺkoŭ",
"hrant",
"kadub",
"hrašy",
"indyj",
"fulie",
"irzać",
"honta",
"rusič",
"malyš",
"uhožy",
"zoryć",
"batyr",
"lipka",
"struh",
"račyć",
"uzryŭ",
"navoj",
"lužyć",
"fijat",
"takyr",
"dasol",
"šubka",
"rapny",
"surok",
"bitok",
"latyš",
"kviet",
"recin",
"schin",
"uspić",
"spreć",
"lutka",
"napić",
"sprat",
"cybur",
"raton",
"sihać",
"tarec",
"sihma",
"styĺb",
"krota",
"buton",
"vypar",
"boinh",
"judoĺ",
"kubar",
"echin",
"tkany",
"zahib",
"aport",
"hanor",
"zžaty",
"linuć",
"torny",
"vopis",
"adlup",
"kučar",
"kielb",
"kipny",
"straz",
"uvity",
"baryl",
"aciol",
"hajer",
"žarsć",
"hluzd",
"vabik",
"damyć",
"mlieć",
"abliz",
"žerla",
"šybki",
"jokat",
"darts",
"roĺka",
"alimp",
"liman",
"zahin",
"hbany",
"humor",
"kuzen",
"pamin",
"zakot",
"adlom",
"vyhar",
"kuraž",
"mitaĺ",
"patly",
"bomka",
"zuryć",
"čalić",
"sitar",
"mucić",
"skory",
"ihrek",
"vobuŭ",
"hanok",
"šorac",
"toryć",
"dybać",
"lažok",
"pozny",
"švank",
"basok",
"tomik",
"cezki",
"urvas",
"štych",
"kieĺt",
"draić",
"pokus",
"siŭka",
"cyrka",
"rysić",
"ceryj",
"druza",
"pyšeć",
"aziel",
"forte",
"enski",
"draby",
"abvod",
"bocik",
"bujan",
"kupny",
"piŭco",
"bohaŭ",
"dužać",
"lučka",
"hibać",
"šacki",
"ježny",
"jasyk",
"siply",
"vypad",
"pučyć",
"ustoj",
"viraž",
"čyžoŭ",
"bulit",
"kobyz",
"viurm",
"unter",
"tarny",
"tužny",
"požah",
"rycht",
"naryt",
"uslać",
"jadok",
"chryp",
"ampir",
"skvil",
"bušaĺ",
"dutar",
"zobny",
"davić",
"pcieć",
"sačok",
"hurba",
"mantu",
"vudka",
"šelak",
"pirol",
"čubka",
"čajny",
"islam",
"ziebu",
"uĺtra",
"scień",
"murza",
"zimny",
"ulity",
"celik",
"adbor",
"lasny",
"deviz",
"kurva",
"arkoz",
"dyšaĺ",
"utkać",
"jurta",
"floŭt",
"antyk",
"psiar",
"turyć",
"fiert",
"zavuč",
"eazin",
"alios",
"svitč",
"virus",
"katni",
"duhać",
"kureć",
"moduĺ",
"serum",
"piens",
"šupki",
"kobra",
"žaryć",
"druki",
"tamil",
"reška",
"filum",
"minać",
"topas",
"mekać",
"sopat",
"defis",
"chvat",
"boraŭ",
"nyrec",
"lozny",
"adhon",
"psiny",
"polym",
"jalik",
"tajon",
"miryć",
"pamol",
"solad",
"tureĺ",
"admyć",
"kupje",
"sinap",
"imžeć",
"rasol",
"abryć",
"adpić",
"beĺka",
"videa",
"vokis",
"hulia",
"plieć",
"jelić",
"lacin",
"začos",
"splin",
"hanit",
"lodar",
"linza",
"donar",
"dyhać",
"muson",
"bijom",
"jolka",
"džoŭĺ",
"mroja",
"acieć",
"zapyn",
"chenć",
"bonus",
"aŭlos",
"vidmo",
"ronda",
"bujać",
"bidon",
"kalif",
"spaić",
"šabot",
"tymol",
"lunka",
"hičan",
"žmudź",
"hacić",
"vynas",
"bonza",
"dabor",
"kupjo",
"kurač",
"zruch",
"etuaĺ",
"pufik",
"abžyn",
"supar",
"huńka",
"kreol",
"katod",
"hrety",
"hajno",
"likod",
"najom",
"plint",
"mysok",
"sital",
"pužać",
"sukać",
"ržany",
"karel",
"nakip",
"fajny",
"paloh",
"sifon",
"zduty",
"ascyt",
"pasiŭ",
"scynk",
"zasyp",
"cybjo",
"sijon",
"amšyć",
"kvest",
"kupon",
"bažon",
"vapić",
"anhob",
"huzak",
"prely",
"mroić",
"dyjen",
"sopki",
"kotra",
"kasny",
"udych",
"tolas",
"lahin",
"tapić",
"taros",
"davoz",
"mucyn",
"ciurk",
"soška",
"zliot",
"saŭnd",
"krona",
"zybić",
"sunit",
"proha",
"mknuć",
"kutas",
"omski",
"zacny",
"repny",
"špona",
"vieps",
"šytvo",
"obdym",
"sikch",
"uklon",
"miers",
"cukat",
"žadny",
"hlica",
"liazh",
"siorb",
"eskiz",
"radno",
"sušeć",
"rovik",
"aktod",
"hajdy",
"kiern",
"kliap",
"melan",
"jedny",
"abvyć",
"trans",
"luzać",
"hruca",
"javić",
"bienč",
"taryf",
"favus",
"adloŭ",
"kuban",
"suryk",
"folia",
"arden",
"vodka",
"uĺski",
"inhuš",
"apret",
"hajok",
"tacki",
"uhoda",
"jodny",
"vynuć",
"streć",
"vožah",
"vynos",
"žaĺny",
"hiĺza",
"šatun",
"čylim",
"panos",
"jaŭny",
"balyk",
"barec",
"mieoz",
"niŭch",
"maśie",
"myčeć",
"sfahn",
"duĺny",
"navić",
"sirop",
"vutly",
"začyn",
"erzia",
"zador",
"kurec",
"mufta",
"namoŭ",
"tuizl",
"mojva",
"bravy",
"cišyć",
"vitok",
"turka",
"šlanh",
"batoh",
"brejk",
"roila",
"aplit",
"kuraj",
"flank",
"jodat",
"tyrać",
"šknuć",
"daŭny",
"ambon",
"latuk",
"kopać",
"abmyl",
"siema",
"kazus",
"modus",
"fliec",
"ubity",
"rulon",
"baryd",
"butly",
"ryfić",
"filon",
"imšyć",
"vulka",
"polis",
"rodyj",
"akson",
"vydra",
"žoran",
"finka",
"ryfma",
"enzim",
"hlosa",
"tumba",
"bureć",
"kiure",
"kreda",
"kabil",
"skrap",
"hliuk",
"čyhir",
"demas",
"kietč",
"vison",
"ruĺka",
"šeryf",
"vosci",
"vahul",
"pryčt",
"balon",
"žanuć",
"šuhać",
"stend",
"dušok",
"baton",
"nižyć",
"lykus",
"maksi",
"cysta",
"pikta",
"sponž",
"flius",
"rebus",
"chaŭs",
"viĺcy",
"rypać",
"sočka",
"fižmy",
"šumok",
"tulka",
"račny",
"fiksa",
"noski",
"sitny",
"lińka",
"burat",
"alkin",
"chelp",
"pazyŭ",
"psieć",
"donum",
"polik",
"pohuk",
"derbi",
"punia",
"kuĺba",
"adron",
"zhina",
"smoŭž",
"ealit",
"dujka",
"muška",
"uliah",
"zahul",
"ratok",
"ryhać",
"zakip",
"čurać",
"šybać",
"lupka",
"hiema",
"nasil",
"chižy",
"hupać",
"nyrka",
"uzvyć",
"uzrok",
"dekor",
"manto",
"celić",
"oniks",
"šyvok",
"bilon",
"ambre",
"aĺbit",
"liany",
"kajne",
"porsć",
"račok",
"uzajm",
"počuŭ",
"sovać",
"pamor",
"tromp",
"husar",
"nikly",
"hončy",
"zurna",
"pazoŭ",
"vanty",
"pomny",
"pasci",
"todes",
"vacin",
"možny",
"vyžla",
"imasć",
"taŭro",
"mužni",
"nodać",
"vutka",
"hutny",
"čocha",
"barny",
"abmol",
"dylia",
"sypki",
"curyć",
"vozik",
"posul",
"urvis",
"liufa",
"cytra",
"hlyza",
"ptašy",
"napis",
"fotka",
"bieĺt",
"harus",
"našyć",
"mateĺ",
"pirat",
"lunit",
"tonus",
"ščoŭk",
"lazur",
"lioch",
"vaĺny",
"žabič",
"kasir",
"solid",
"sfien",
"lapny",
"cokaĺ",
"župan",
"zarub",
"župić",
"rušać",
"sikoz",
"kazić",
"ryfli",
"eĺbor",
"limon",
"lupać",
"myčać",
"panty",
"ponča",
"zmust",
"advoz",
"sykać",
"žuryć",
"adhin",
"čepać",
"socki",
"kudla",
"zviak",
"straž",
"cyroz",
"lubin",
"kalym",
"vidok",
"pašny",
"kofie",
"hiejm",
"hnaić",
"načos",
"zlota",
"rezon",
"aŭdyt",
"zaduć",
"dynar",
"nucić",
"mytar",
"inžyr",
"tyĺda",
"pryma",
"tryko",
"bitka",
"čyhać",
"bodzi",
"domra",
"capki",
"sliva",
"abvić",
"butaĺ",
"vuhor",
"epiur",
"junit",
"jakut",
"chobi",
"šutka",
"pahon",
"chaki",
"celon",
"vatni",
"salić",
"učyna",
"jušyć",
"vitka",
"chrom",
"azimy",
"repić",
"zaviś",
"adzoŭ",
"celka",
"vozka",
"robka",
"vycik",
"adloh",
"indus",
"facet",
"šyjka",
"kabul",
"hazon",
"kočat",
"zliak",
"adnos",
"šaŭro",
"virny",
"abduć",
"ševaž",
"nakid",
"halyn",
"urvać",
"soĺda",
"ryžeć",
"tapir",
"mbajt",
"chupa",
"avoid",
"lifny",
"rezvy",
"sačeń",
"syrec",
"narez",
"halić",
"lopać",
"adčep",
"spona",
"bardo",
"datny",
"abloń",
"šelon",
"ceška",
"aŭski",
"pliuš",
"dnovy",
"votum",
"vypas",
"vypat",
"tumar",
"panus",
"svišč",
"aŭhur",
"hrejd",
"biruč",
"zlity",
"deist",
"kašpo",
"meron",
"pryšč",
"kišeć",
"lasoś",
"ciorn",
"horst",
"rupny",
"kresć",
"samit",
"lacić",
"zaton",
"lidar",
"ryzka",
"chlud",
"doĺka",
"asieč",
"ježka",
"šyreć",
"notys",
"adryŭ",
"vylam",
"schon",
"rando",
"nižeć",
"mulki",
"boĺka",
"kadon",
"mason",
"žudny",
"aksid",
"sinod",
"binom",
"sciok",
"zadok",
"debać",
"kuhać",
"adlić",
"fuhas",
"lyčka",
"šycik",
"mučny",
"zubje",
"šaron",
"čulić",
"pilon",
"šepat",
"porsk",
"lysun",
"haŭno",
"aftoz",
"dzeta",
"moĺny",
"ramny",
"lepać",
"imšeć",
"kurta",
"utora",
"dzira",
"zavyć",
"zbryć",
"boĺny",
"ramon",
"podyj",
"tryps",
"upreć",
"švart",
"hučok",
"draže",
"ĺviny",
"junha",
"bučny",
"tanuć",
"chota",
"flora",
"prajd",
"blank",
"kulič",
"hibon",
"tupki",
"piesa",
"zasol",
"usied",
"vadyr",
"koder",
"lysik",
"sobaĺ",
"tujer",
"nemać",
"sabur",
"bucik",
"favor",
"adcin",
"žarki",
"zmysl",
"impat",
"fimoz",
"topaĺ",
"sopla",
"bukać",
"sopar",
"kieta",
"pucyk",
"cetan",
"jadun",
"nadoj",
"tukan",
"nobiĺ",
"volik",
"kašne",
"tamič",
"adlyh",
"puryn",
"purha",
"sprej",
"sajot",
"buśka",
"renta",
"suvoj",
"siryn",
"silač",
"rucin",
"rezus",
"nulik",
"rudny",
"uciać",
"ryska",
"aznob",
"žykać",
"lynuć",
"rejać",
"hliot",
"čapić",
"humka",
"sierb",
"čepik",
"lužny",
"mukać",
"borzy",
"adbyć",
"pavić",
"pliot",
"china",
"vieĺs",
"jurod",
"rezol",
"hupat",
"aŭreć",
"rabik",
"vyhul",
"rubka",
"radyj",
"vohki",
"otrak",
"krypt",
"pakus",
"paroć",
"busak",
"devon",
"mutny",
"tenis",
"vyhin",
"cypki",
"kareć",
"buten",
"zamor",
"kamuz",
"sinhl",
"pchać",
"pijar",
"adeon",
"supyn",
"kutni",
"chluz",
"zavid",
"sudak",
"asovy",
"karny",
"čepki",
"hanus",
"žyhuĺ",
"volki",
"kliec",
"aniel",
"lyhać",
"celom",
"latyń",
"šamot",
"tenar",
"chrup",
"klioŭ",
"havot",
"lonža",
"vodny",
"fanty",
"forum",
"viduk",
"sahib",
"hitaŭ",
"furaž",
"vyšah",
"kraše",
"šubat",
"matok",
"syčać",
"nilot",
"avien",
"drena",
"kalot",
"upaly",
"pekać",
"volić",
"etrol",
"uzlić",
"vypal",
"safoj",
"dubas",
"piron",
"lusta",
"mnohi",
"hzyms",
"adžyn",
"mišeń",
"nadty",
"hopać",
"typus",
"kiejf",
"valki",
"ržavy",
"lieča",
"rucha",
"cišeć",
"pamyi",
"vykas",
"pazor",
"juzer",
"panyć",
"humit",
"bipak",
"slaić",
"ekspo",
"sutyk",
"šykać",
"tumak",
"muton",
"skrom",
"fiton",
"čunia",
"manul",
"pomut",
"kapir",
"dykać",
"matuz",
"zdrok",
"kvadr",
"huran",
"pizda",
"fondy",
"muraĺ",
"kulon",
"ehida",
"sycić",
"frant",
"dypoĺ",
"uazik",
"buksa",
"myšca",
"achop",
"bujok",
"areol",
"stoŭp",
"saryč",
"cudny",
"posny",
"zapić",
"lamjo",
"fotyk",
"spity",
"abdym",
"viend",
"lapić",
"rydać",
"osmij",
"mučać",
"zloba",
"dopis",
"siejm",
"fieod",
"čokać",
"morfa",
"chiry",
"čytka",
"huzna",
"sierv",
"pidar",
"psota",
"kroza",
"bluza",
"dbaly",
"niehr",
"mansi",
"mažor",
"nasok",
"ablyh",
"abhon",
"hliva",
"tyraž",
"smorž",
"kiedr",
"valin",
"aplik",
"lioza",
"adzol",
"zviać",
"polka",
"zumki",
"strub",
"ziero",
"nyhać",
"čykać",
"izhoj",
"laŭny",
"piasć",
"pikar",
"nokać",
"kifoz",
"halit",
"relon",
"tyfon",
"uplyć",
"roski",
"zalik",
"dycht",
"ircha",
"skotč",
"tyran",
"zošly",
"kacin",
"piech",
"voŭna",
"valuj",
"lando",
"skrep",
"harny",
"dryin",
"pačyn",
"bivak",
"obski",
"zator",
"mutar",
"čujka",
"zamyć",
"sprut",
"lobny",
"rekat",
"baroć",
"čyrva",
"šliak",
"smuta",
"lišak",
"čezly",
"pavyć",
"dulia",
"cykać",
"ubrać",
"sviny",
"kuvać",
"čajok",
"smajl",
"žurać",
"parny",
"vykid",
"pojma",
"syčeć",
"harem",
"karst",
"silur",
"trefa",
"lazun",
"kadet",
"stoik",
"chlup",
"začuć",
"auĺny",
"tuhaj",
"typaž",
"liues",
"ajrol",
"kvota",
"upiok",
"vykus",
"biaks",
"zubok",
"zažor",
"zapor",
"kalun",
"narok",
"žakob",
"ilhun",
"parez",
"adžym",
"roiva",
"tlien",
"relin",
"alund",
"remiz",
"prant",
"hikać",
"konus",
"uzval",
"vušly",
"abuch",
"mylić",
"adžon",
"rubin",
"poŭch",
"šorty",
"liuks",
"skreb",
"hnuty",
"huraĺ",
"jekać",
"šubny",
"pifas",
"lažny",
"kresy",
"chaus",
"desań",
"erzac",
"lotas",
"plieš",
"kozyt",
"mliva",
"tokar",
"povar",
"rynka",
"eolaŭ",
"barmy",
"hepać",
"kanoe",
"šefaŭ",
"baĺny",
"avity",
"latvy",
"advić",
"piŭko",
"adkos",
"pyska",
"akcyz",
"basić",
"mačyć",
"porub",
"žabin",
"huĺba",
"hliak",
"sitro",
"tramp",
"kscić",
"klier",
"zasor",
"puzyr",
"bitny",
"tyrsa",
"šaĺny",
"liška",
"binha",
"sińka",
"puzan",
"uzvah",
"piran",
"śiera",
"pazur",
"plios",
"cubki",
"hruta",
"blief",
"repik",
"fatum",
"myjka",
"varki",
"aščer",
"minor",
"toŭsć",
"zdaić",
"bukiš",
"janot",
"uzhon",
"ĺvica",
"modly",
"myčka",
"kaĺie",
"asieć",
"hnoma",
"rozka",
"kryca",
"tykać",
"kapun",
"čuvaš",
"jodki",
"kozly",
"baryš",
"dašyć",
"fomka",
"toryj",
"čužak",
"umiać",
"uchil",
"pošly",
"vymak",
"nivoz",
"elinh",
"ravun",
"miena",
"čaren",
"zoĺny",
"razny",
"cikać",
"kofta",
"pokat",
"balid",
"ianol",
"kajot",
"sadki",
"tečka",
"podka",
"mokša",
"milok",
"pjeza",
"voĺta",
"lotać",
"redan",
"hlaŭk",
"točka",
"psina",
"duvan",
"hačyć",
"pakos",
"cipun",
"vaniĺ",
"čurka",
"traić",
"mirza",
"nykać",
"skrob",
"zyreć",
"paŭšy",
"dutyš",
"lityj",
"citla",
"jadki",
"mulat",
"cukać",
"abzol",
"nimfa",
"iknuć",
"žaron",
"zybun",
"rykać",
"husci",
"nycik",
"šyhal",
"dušny",
"namyć",
"dafin",
"nahly",
"sciob",
"jurny",
"jucha",
"psich",
"frukt",
"lokan",
"curok",
"močka",
"hiaur",
"spaly",
"sieŭr",
"virok",
"uryna",
"lučok",
"palir",
"počka",
"rutyl",
"duška",
"termy",
"ciačy",
"vylaŭ",
"dojna",
"zdoba",
"dužeć",
"čuška",
"nalik",
"bizon",
"ipryt",
"fitol",
"piryt",
"žydki",
"tomka",
"sakie",
"ošski",
"ploić",
"mirab",
"chadž",
"kidas",
"talon",
"mihać",
"zdrać",
"skarn",
"cybić",
"dymka",
"mudak",
"dalić",
"pozva",
"zialo",
"bizań",
"vyšuk",
"hička",
"munit",
"korch",
"niejl",
"pušny",
"žylić",
"dvaić",
"vodyr",
"navod",
"echać",
"aplyŭ",
"viepr",
"batun",
"časny",
"dront",
"ihrok",
"ĺhota",
"lynić",
"abčes",
"kliuz",
"murcy",
"pohud",
"pošar",
"alonž",
"reliz",
"doĺny",
"halep",
"mojra",
"deĺta",
"parch",
"pieon",
"bruić",
"sobić",
"pitok",
"cymol",
"ščepa",
"hekać",
"abmin",
"soŭki",
"horan",
"naščy",
"kodar",
"halop",
"aplyć",
"cenoz",
"plica",
"chiek",
"bujer",
"mulit",
"naroh",
"licej",
"kubla",
"abvoz",
"vabki",
"padki",
"lohik",
"pudra",
"pucik",
"mužaŭ",
"humoz",
"kabur",
"slajd",
"zraić",
"adhul",
"kuĺša",
"miuon",
"kodla",
"ižyca",
"pakon",
"kulaž",
"rumba",
"sutaž",
"soĺny",
"vymal",
"daśie",
"razić",
"kureń",
"mnich",
"mučan",
"namul",
"efiop",
"dačuć",
"orski",
"uhbać",
"lypać",
"piŭny",
"kirza",
"čužyk",
"plied",
"usiek",
"liard",
"lachi",
"miesa",
"uzhor",
"astyć",
"debil",
"namol",
"pisčy",
"naboj",
"pokać",
"kušać",
"liuft",
"renij",
"birža",
"buliń",
"hamon",
"arsin",
"pykać",
"etnas",
"uzvić",
"kulan",
"abloŭ",
"fazny",
"huzyr",
"rypus",
"soŭka",
"cybik",
"apieć",
"adkuć",
"zimka",
"kudra",
"mysik",
"šyĺca",
"busoĺ",
"parus",
"redut",
"bahor",
"edžar",
"jeraś",
"drany",
"tupić",
"bačok",
"alief",
"tembr",
"vusač",
"kumys",
"vybaj",
"lizat",
"nyrok",
"saplo",
"paryć",
"kavun",
"bantu",
"demka",
"syreć",
"dakuć",
"suhon",
"zombi",
"hutać",
"supić",
"husit",
"tyfus",
"šprot",
"kopra",
"jokać",
"žytco",
"volak",
"vočap",
"mitra",
"kučny",
"zujok",
"hušča",
"klioš",
"vytak",
"vierf",
"nizać",
"kvarc",
"dojla",
"žydok",
"ačkur",
"sorha",
"bolić",
"ilavy",
"rulić",
"vieja",
"burka",
"kliše",
"balty",
"hiujs",
"sulad",
"basci",
"čyslo",
"adtok",
"hniot",
"kosny",
"puant",
"talij",
"cieča",
"mikać",
"ochać",
"korda",
"fijal",
"halun",
"hrydź",
"cedra",
"donia",
"invar",
"tužeć",
"spica",
"vyrub",
"luzan",
"vinco",
"turać",
"cvily",
"kolin",
"trend",
"vorak",
"lunać",
"stavy",
"klips",
"uliok",
"baner",
"štora",
"niŭka",
"nojeŭ",
"cupać",
"špora",
"vuzić",
"aciok",
"hmina",
"iŭryt",
"nikać",
"viest",
"lajno",
"brydž",
"admin",
"vočny",
"eciud",
"pynić",
"dučka",
"skuty",
"lavis",
"vyšni",
"rosny",
"psiuk",
"abort",
"pacir",
"urema",
"umbra",
"hykać",
"zečka",
"aliur",
"rejka",
"dačny",
"sutny",
"loŭki",
"vihoń",
"lubka",
"mylki",
"zubny",
"puška",
"tlieć",
"juryć",
"pisah",
"aĺhin",
"suška",
"slota",
"čolka",
"kapry",
"zašyć",
"dohma",
"čukać",
"žanić",
"žatny",
"stvor",
"furma",
"reviu",
"iržać",
"karyć",
"ziepa",
"upity",
"nioba",
"syrok",
"ziujd",
"suvać",
"svoić",
"žuraŭ",
"namyŭ",
"buhor",
"subar",
"čareń",
"hibka",
"kašub",
"šruba",
"slenh",
"kuras",
"adžyć",
"pater",
"larok",
"silok",
"chlip",
"začep",
"drajv",
"palik",
"tukać",
"pyĺka",
"mazur",
"vospa",
"švied",
"tepać",
"cynka",
"brany",
"nieta",
"arhus",
"pliur",
"rumyn",
"chort",
"nukać",
"ukryć",
"kavyĺ",
"eponž",
"orfik",
"šyizm",
"dojny",
"kolat",
"nožka",
"struk",
"akuty",
"kista",
"trach",
"haĺny",
"aproš",
"bacik",
"zniba",
"zmiać",
"hurma",
"vierč",
"uznos",
"celit",
"bastr",
"jaski",
"huzka",
"mšany",
"tuneĺ",
"taryć",
"vyžal",
"piery",
"skryć",
"šejch",
"baŭny",
"flint",
"podum",
"bihas",
"zyrki",
"ratny",
"stela",
"fateĺ",
"piešy",
"kmieć",
"hirka",
"kumir",
"fidar",
"halon",
"vabny",
"actek",
"zyčać",
"mazok",
"sukol",
"blind",
"zaryć",
"cezij",
"sitka",
"šupić",
"kurny",
"huzać",
"vizaž",
"špieh",
"jalki",
"uhreć",
"bolka",
"skurč",
"baryj",
"dabyć",
"bitum",
"stejk",
"šupik",
"spazm",
"opium",
"sotka",
"vydma",
"vysić",
"murka",
"abmor",
"podać",
"indol",
"Аlach",
"dynas",
"frank",
"ijena",
"upaić",
"zmoha",
"hierc",
"kapot",
"kotla",
"sašyn",
"sukre",
"finoz",
"ryjal",
"fliak",
"dyjez",
"sopka",
"čumak",
"vinuć",
"kivot",
"moŭny",
"sivak",
"zašly",
"polba",
"adšyć",
"imšal",
"chend",
"broić",
"puhać",
"rvota",
"vinda",
"foska",
"hryža",
"znuda",
"spiec",
"dziub",
"elips",
"parub",
"aeron",
"hlija",
"vušny",
"džyha",
"zhaić",
"kudly",
"zhnić",
"deboš",
"milon",
"hižeć",
"fikus",
"caŭjo",
"košar",
"cubić",
"abloh",
"hamoz",
"sudok",
"mizer",
"honka",
"šnaps",
"akord",
"vajun",
"čaron",
"uraić",
"vajer",
"lamut",
"bodka",
"blint",
"lojny",
"rumza",
"stoŭb",
"vilka",
"sacin",
"zieĺc",
"rejch",
"šaryć",
"pinka",
"rezit",
"skaŭt",
"vyšeć",
"retuš",
"ronža",
"nažyć",
"duĺka",
"miely",
"itryj",
"hirsa",
"zvody",
"kabol",
"kosma",
"deryk",
"ručyć",
"puryć",
"sadom",
"zacin",
"flirt",
"cmien",
"aerob",
"paduć",
"blium",
"vierk",
"navyk",
"strup",
"zumpf",
"štrek",
"poĺny",
"roska",
"šlius",
"kirpa",
"vadny",
"zhuba",
"vyška",
"celia",
"zavić",
"ablud",
"šopka",
"plise",
"cepki",
"pejsa",
"zareć",
"hazyr",
"jasik",
"teizm",
"fibra",
"freon",
"busać",
"uzysk",
"tryba",
"ahreć",
"tezis",
"kumol",
"korab",
"pižon",
"aspid",
"prost",
"telur",
"kitab",
"toŭšč",
"naviś",
"fahot",
"cesar",
"biton",
"sojka",
"rasić",
"nakup",
"zanyć",
"cohać",
"panur",
"lirny",
"anšef",
"vylik",
"fason",
"tujka",
"rvany",
"rajok",
"kloŭn",
"šliuz",
"erbij",
"zlieć",
"škant",
"kihać",
"nyrać",
"zapoj",
"ješčy",
"žyčka",
"salop",
"cekać",
"abšyć",
"zluda",
"psaĺm",
"putny",
"zybać",
"uzryć",
"dolić",
"liask",
"saryt",
"safit",
"piĺsć",
"turač",
"naryŭ",
"uščać",
"pajus",
"šuter",
"pruhi",
"zapyt",
"jačny",
"halij",
"ankoĺ",
"vyžać",
"zybka",
"jubka",
"polaz",
"tromb",
"sivuč",
"kutać",
"bažok",
"šynka",
"lizun",
"kmien",
"duryk",
"siera",
"šalie",
"adpis",
"bjuik",
"kierb",
"pokuć",
"putra",
"sknar",
"spora",
"anhil",
"saĺny",
"tchor",
"žeton",
"vyrok",
"cyhać",
"curka",
"češka",
"žabić",
"latok",
"nadum",
"tyčka",
"zakid",
"bočny",
"tablo",
"štamb",
"lažyć",
"čchać",
"kiejs",
"abtok",
"vykuć",
"bason",
"nohać",
"bliuz",
"puńka",
"admor",
"pitny",
"drost",
"sipać",
"žycik",
"sliab",
"jucki",
"uzdać",
"areli",
"luzny",
"sčuty",
"hučeć",
"adlik",
"cipka",
"lazny",
"išačy",
"vylaz",
"sošny",
"minka",
"zanos",
"mikst",
"zyčeć",
"posik",
"koraš",
"hryza",
"duant",
"pyrka",
"jasyr",
"barež",
"kacić",
"dapić",
"rendž",
"dziel",
"žuryk",
"zasoŭ",
"cyjan",
"butan",
"inšeć",
"carok",
"aduty",
"huban",
"ujezd",
"zakut",
"dońka",
"mient",
"uŭraž",
"herad",
"jalić",
"kačur",
"fakir",
"topka",
"zliub",
"drema",
"čmary",
"trusk",
"hlint",
"kumža",
"cupki",
"kajlo",
"ablić",
"lieja",
"nardy",
"vyhuk",
"kopša",
"liešč",
"notka",
"lucik",
"dziob",
"hbajt",
"fužer",
"hvozd",
"imžyć",
"copać",
"noska",
"etyka",
"žyhać",
"murlo",
"vykaz",
"lysić",
"mareĺ",
"štejn",
"jamny",
"vožka",
"ablom",
"hiejt",
"doĺni",
"ruĺny",
"tynoĺ",
"porka",
"dumny",
"kliop",
"pužka",
"skvap",
"huzok",
"šyzik",
"faliń",
"piton",
"dupka",
"fasoĺ",
"paboi",
"zakol",
"dacki",
"calok",
"paloŭ",
"tymin",
"žyraf",
"vadki",
"utvor",
"fasny",
"konta",
"afšor",
"šurać",
"ablik",
"halyš",
"stola",
"stupa",
"hlyba",
"dukat",
"muĺka",
"denim",
"jenol",
"zažyŭ",
"naryć",
"žujny",
"dyĺka",
"žutly",
"rehbi",
"zybki",
"čužeć",
"kliej",
"čyfir",
"zlieb",
"koŭch",
"padub",
"kalos",
"tknuć",
"zažyć",
"hlajd",
"cokać",
"dynha",
"zodčy",
"zandr",
"vyzaŭ",
"mykać",
"chost",
"nasoŭ",
"abnim",
"litka",
"vieta",
"šryft",
"hidra",
"zakup",
"sikać",
"ajsor",
"uzvar",
"viryć",
"kolar",
"parok",
"hojny",
"šyfon",
"duval",
"somaŭ",
"jucht",
"chily",
"zhnać",
"kumač",
"žeoda",
"špień",
"donca",
"mohul",
"kupać",
"viesć",
"cioša",
"žniec",
"adkol",
"bahon",
"uhnać",
"focik",
"cynha",
"split",
"zarob",
"jeŭra",
"ceŭka",
"solki",
"huĺka",
"muryn",
"ascio",
"spred",
"aŭhit",
"mazki",
"lasik",
"ekzot",
"vykać",
"pozyŭ",
"norka",
"počat",
"satyr",
"kobza",
"slany",
"pušyć",
"haboj",
"zrost",
"mašok",
"spieć",
"rafik",
"hlist",
"kopaš",
"pasyl",
"aiĺny",
"landy",
"visok",
"vupar",
"hocki",
"piure",
"vusik",
"zysci",
"cišać",
"hamuz",
"zhelk",
"abrek",
"furka",
"maĺny",
"mazut",
"silon",
"akryć",
"smieć",
"šklić",
"chalt",
"aplot",
"bryca",
"pajed",
"čuvak",
"vinol",
"luzha",
"astoj",
"ryžak",
"ejdas",
"usčać",
"zalom",
"žučyć",
"hnida",
"telom",
"pierl",
"horac",
"dubny",
"šorny",
"prent",
"jurok",
"sciać",
"ducik",
"šamki",
"užaty",
"lučyć",
"racin",
"limfa",
"raŭnd",
"kašeĺ",
"kolba",
"vierp",
"žujka",
"elita",
"homik",
"lytka",
"bučyć",
"pudki",
"sempl",
"liryk",
"alieĺ",
"kalij",
"hicać",
"burda",
"zapil",
"mecić",
"abieh",
"nakol",
"zakis",
"pavoj",
"chiet",
"vorka",
"klinč",
"dužka",
"syčuh",
"sitca",
"fareĺ",
"sapny",
"lopar",
"obier",
"kanuć",
"huĺny",
"asmol",
"buhai",
"uroda",
"filom",
"cymus",
"šareć",
"vikar",
"radon",
"cypka",
"chlam",
"rynuć",
"pikać",
"putać",
"toner",
"rahoz",
"hafre",
"rypki",
"zabor",
"cotny",
"mlosć",
"uhreŭ",
"kajur",
"hruzd",
"džhać",
"topki",
"abžyć",
"dekan",
"bucić",
"baloń",
"rusin",
"proba",
"bejdž",
"skaĺp",
"turok",
"futar",
"vyzal",
"rapid",
"brynk",
"lučać",
"muĺča",
"cenur",
"tomny",
"zažon",
"donka",
"čurek",
"dojka",
"skvoš",
"lišaj",
"kipry",
"dabić",
"ustoi",
"talyš",
"butyl",
"sokat",
"akcin",
"bareĺ",
"viška",
"tryzm",
"radny",
"aksil",
"Нojeŭ",
"vobad",
"skrab",
"dahon",
"parej",
"poiva",
"paneĺ",
"derma",
"džajv",
"skvar",
"biĺcy",
"uhaić",
"talib",
"tchlo",
"ustyć",
"kurča",
"fiška",
"hibly",
"uzlom",
"vosyp",
"cokat",
"ruina",
"barej",
"strop",
"zipun",
"hazny",
"bukta",
"pylić",
"cybać",
"solka",
"dubjo",
"pikša",
"ochra",
"profi",
"bajok",
"rusak",
"latuń",
"šlich",
"manit",
"kupčy",
"žerab",
"čyrok",
"vyčuć",
"kodab",
"načuć",
"vykat",
"kladź",
"nočvy",
"myska",
"bulat",
"zaryn",
"zakuć",
"kosia",
"pokut",
"rojny",
"hubka",
"noška",
"šypun",
"jorka",
"hlipt",
"polah",
"razik",
"hubač",
"lopat",
"setar",
"roĺny",
"kibuc",
"mahot",
"ponaž",
"kadny",
"žureć",
"vohly",
"fukać",
"abdur",
"tanić",
"hoĺka",
"chisć",
"kliba",
"bazis",
"fikch",
"čyrka",
"sikun",
"sudar",
"sipaj",
"afiks",
"razuć",
"dynia",
"pasul",
"zaloh",
"bruja",
"surta",
"foĺha",
"samon",
"kruča",
"tchać",
"kivać",
"dybić",
"rozha",
"talus",
"adliŭ",
"sipka",
"pošuh",
"škval",
"žabry",
"adept",
"palom",
"kiury",
"tuška",
"abcuh",
"paryk",
"unija",
"skaĺd",
"sieča",
"bursa",
"kučma",
"lohas",
"kabuz",
"klops",
"džhir",
"abkos",
"arlon",
"zvich",
"sočny",
"zamin",
"pabor",
"ajrot",
"banić",
"piean",
"šyrma",
"flieš",
"znamy",
"frejm",
"pinta",
"žorsć",
"tymus",
"šorka",
"nakos",
"fiĺtr",
"čopik",
"antre",
"kužaĺ",
"ispyt",
"klady",
"aktor",
"turak",
"nahul",
"ceĺny",
"lomka",
"lieha",
"lykać",
"piraŭ",
"surma",
"lafit",
"zykać",
"freza",
"arhon",
"steka",
"padly",
"puĺka",
"vyrod",
"biejt",
"hrena",
"knica",
"dymar",
"splaŭ",
"mahut",
"sapun",
"hubny",
"irvań",
"myśka",
"edykt",
"dziuh",
"saĺpy",
"huska",
"aŭtol",
"viena",
"vudar",
"eksod",
"čadny",
"džuma",
"pukać",
"muĺda",
"zaboj",
"drejf",
"nalom",
"dyńka",
"bruta",
"lienč",
"uzviŭ",
"kahor",
"lokus",
"vymać",
"zaĺny",
"dunit",
"strym",
"supin",
"bufon",
"šalom",
"blisk",
"mijoz",
"žyrat",
"zubik",
"liema",
"lučny",
"lomik",
"siren",
"splyć",
"ručać",
"apnuć",
"korba",
"tranš",
"kruiz",
"dubić",
"intym",
"pycik",
"utoma",
"farny",
"altyn",
"psuta",
"moška",
"kmiet",
"masiŭ",
"šaten",
"furan",
"tazik",
"sizaĺ",
"prajs",
"piśka",
"lasun",
"pilka",
"batly",
"pajol",
"abdum",
"pušta",
"spurt",
"topik",
"stylo",
"cynik",
"vytać",
"deizm",
"bazon",
"biest",
"škred",
"šutar",
"nierv",
"kvant",
"reŭza",
"zdryh",
"supor",
"rocik",
"trumo",
"čarod",
"šyzak",
"vorny",
"vobla",
"dolar",
"ižora",
"cnota",
"fierź",
"kupaž",
"bulka",
"čekać",
"kalit",
"irmas",
"zakor",
"kadyš",
"bruch",
"borny",
"vypis",
"ucios",
"baret",
"čmuta",
"tajec",
"vatny",
"epika",
"uspol",
"bojny",
"adrez",
"svinh",
"rubić",
"uzbić",
"čumny",
"mikoz",
"truch",
"puzač",
"rynda",
"sytka",
"hnuly",
"čužka",
"tamić",
"fazis",
"kabyz",
"turne",
"vazon",
"sklon",
"bitar",
"hurok",
"hodni",
"sakol",
"žulan",
"mieta",
"nazor",
"stryž",
"adhuk",
"poliz",
"lubok",
"fietr",
"žryca",
"jarus",
"latny",
"čekat",
"lomki",
"hrand",
"bistr",
"anior",
"pudla",
"žrela",
"pyška",
"manhĺ",
"baryt",
"mycka",
"tulij",
"štamp",
"rynit",
"siejv",
"akryl",
"afort",
"usmal",
"umaić",
"haloš",
"nyčka",
"uniać",
"debit",
"chauz",
"apšyt",
"psovy",
"nacki",
"tynok",
"amšeć",
"raŭci",
"labok",
"hitan",
"prynt",
"tojma",
"pobak",
"huĺma",
"tylam",
"vuzka",
"henam",
"vočna",
"ubaki",
"kišma",
"abnoč",
"supal",
"apsom",
"rozna",
"storč",
"rosna",
"kupna",
"usmoĺ",
"zdolu",
"soĺna",
"borza",
"uvysi",
"myĺna",
"žujma",
"umach",
"optam",
"uboha",
"jodka",
"žadom",
"pomna",
"lučna",
"juzam",
"nikla",
"čepka",
"končy",
"tupka",
"chiža",
"zbreź",
"sujma",
"honam",
"roŭma",
"kotma",
"pruha",
"dybka",
"kuĺma",
"chuda",
"inody",
"uredź",
"sukam",
"patuĺ",
"čezla",
"udosć",
"boĺma",
"nohca",
"dotuĺ",
"zolka",
"rydma",
"birma",
"durna",
"zhola",
"poraź",
"pudka",
"žoŭta",
"uplyń",
"lžyva",
"naŭdy",
"rački",
"sočna",
"tyčma",
"torna",
"putna",
"uplaŭ",
"vomaĺ",
"ušyta",
"rodna",
"pyĺna",
"pytma",
"sytna",
"žutla",
"kučna",
"nadyś",
"cuham",
"hidka",
"hoĺma",
"ličma",
"zvočy",
"hužam",
"sipla",
"cudna",
"rezva",
"zimna",
"dvoru",
"pačym",
"lieva",
"henak",
"lisam",
"koćma",
"zhoža",
"slabo",
"posna",
"dokuĺ",
"znova",
"bitma",
"piĺma",
"zruki",
"zvoli",
"kosna",
"toĺma",
"nicam",
"vokal",
"jedma",
"dymna",
"ježma",
"kvita",
"zorna",
"dujma",
"dolam",
"znovu",
"dolki",
"vonku",
"dumna",
"pošla",
"ničuć",
"zoĺna",
"kurna",
"sumiž",
"volka",
"podla",
"pytam",
"jedka",
"uproč",
"kotam",
"liŭma",
"mutna",
"tudoj",
"uskač",
"uzvyš",
"potaj",
"bučna",
"vusna",
"napoŭ",
"tulam",
"moŭna",
"rybna",
"ceĺna",
"učosy",
"kinhi",
"vabki",
"kieki",
"lobii",
"šachi",
"čanhi",
"radki",
"sprei",
"sčuta",
"marki",
"kluni",
"zbavy",
"bamii",
"hadki",
"trasy",
"štyry",
"bamžy",
"hirki",
"niefy",
"liosy",
"skopy",
"nimby",
"parše",
"murzy",
"syrcy",
"tyčki",
"maĺmy",
"smohi",
"chaby",
"arapy",
"iosif",
"katyń",
"torty",
"kuźma",
"užata",
"zduta",
"cebry",
"lažki",
"haryń",
"psoty",
"sibir",
"muĺdy",
"bodki",
"prasy",
"chany",
"aŭdzi",
"split",
"bildy",
"tarčy",
"adzin",
"upisy",
"mytni",
"aryly",
"kaaly",
"dračy",
"zhiny",
"učuta",
"akuni",
"hurby",
"maŭki",
"domry",
"pudly",
"turmy",
"sensy",
"avozy",
"dubki",
"ilona",
"svaty",
"kascy",
"marfa",
"astap",
"štyli",
"čaušy",
"palki",
"huńki",
"sušni",
"kaony",
"faĺšy",
"jardy",
"irtyš",
"chvoi",
"džeki",
"sosny",
"kremy",
"hlyzy",
"hidry",
"vydmy",
"vosip",
"sofja",
"idučy",
"kajfy",
"kvoki",
"tunis",
"šyršy",
"bordy",
"mačty",
"sukre",
"jukan",
"ščupy",
"žydki",
"soski",
"travy",
"ažyki",
"burhi",
"faĺcy",
"miaty",
"abazy",
"droby",
"puščy",
"bajty",
"pinki",
"škaly",
"rusty",
"hrany",
"kalki",
"soški",
"liŭni",
"džumy",
"stahi",
"carki",
"tryby",
"spičy",
"čejny",
"forta",
"voĺha",
"piony",
"kassi",
"mirty",
"uhiny",
"buksy",
"sudan",
"moški",
"liski",
"hreta",
"zbory",
"hroty",
"spamy",
"tyrsy",
"zmyty",
"treki",
"piśki",
"rytmy",
"flipy",
"fanzy",
"truty",
"vyspy",
"dychi",
"lochi",
"anidy",
"aceny",
"boŭty",
"minin",
"omuli",
"šurfy",
"donhi",
"dzvie",
"choty",
"donny",
"jenki",
"klify",
"ujuny",
"burty",
"edyly",
"rybcy",
"stomy",
"latki",
"chaty",
"voĺva",
"šesci",
"borci",
"kvasy",
"zbany",
"tydni",
"fiĺmy",
"sioly",
"ahaty",
"onimy",
"liaki",
"adury",
"jeĺsk",
"bziki",
"pamir",
"hnany",
"kojry",
"korny",
"trapy",
"koski",
"anily",
"ačosy",
"zruby",
"lukas",
"kiety",
"fraki",
"stoks",
"takaj",
"biern",
"cmoki",
"horsy",
"vuhly",
"kohii",
"dziei",
"skosy",
"anina",
"pyški",
"bauly",
"rumin",
"jaĺcy",
"kryly",
"beĺki",
"cesii",
"červi",
"šlify",
"babry",
"brešy",
"huĺki",
"skipy",
"apija",
"ciahi",
"šynki",
"traki",
"tyhli",
"zirki",
"zmiei",
"klady",
"nioby",
"byčki",
"štyby",
"laden",
"notki",
"farty",
"epron",
"sudny",
"citly",
"horki",
"filii",
"ikaby",
"pampy",
"asman",
"atela",
"siŭki",
"sočki",
"brest",
"fanty",
"spirs",
"aruba",
"butli",
"tyĺdy",
"cukry",
"asady",
"ciemy",
"džuba",
"istcy",
"poŭna",
"čaŭny",
"sonia",
"nasau",
"šlyki",
"kumžy",
"zrezy",
"kiĺki",
"binty",
"chryi",
"buhry",
"tarhi",
"labki",
"rapty",
"chešy",
"liehi",
"turaŭ",
"čubki",
"dyski",
"abody",
"kolty",
"kaŭšy",
"cykli",
"nyčki",
"chamy",
"raŭty",
"matčy",
"piśmy",
"spity",
"žukaŭ",
"sluck",
"bijsk",
"huĺni",
"ubory",
"treli",
"hoĺfy",
"bramy",
"zalpy",
"viški",
"kraty",
"plačy",
"dreny",
"maary",
"ziepy",
"kliby",
"druhi",
"abory",
"faksy",
"durni",
"zbyta",
"kofry",
"maĺby",
"aziny",
"šatry",
"pieni",
"afišy",
"zloty",
"imamy",
"valui",
"zhrai",
"svany",
"hiĺzy",
"vitki",
"zlata",
"rynki",
"černi",
"koški",
"cejsy",
"zmiai",
"kužli",
"junhi",
"hryfy",
"utuly",
"ježki",
"flahi",
"chory",
"lutki",
"barcy",
"kidki",
"kisty",
"presy",
"linzy",
"pravy",
"vinty",
"pyski",
"hrupy",
"chašy",
"alivy",
"zbita",
"dryli",
"uhony",
"faski",
"hlosy",
"araby",
"zniby",
"urady",
"višni",
"nižšy",
"kryžy",
"zasni",
"kazly",
"ruchi",
"šyški",
"zlomy",
"david",
"plavy",
"lifty",
"linda",
"paŭša",
"hohaĺ",
"vitaĺ",
"soŭki",
"lonžy",
"piscy",
"ahačy",
"bjefy",
"kremĺ",
"mamki",
"hryvy",
"tenty",
"flory",
"škoty",
"vaĺsy",
"sčesy",
"rejki",
"pasty",
"zlity",
"tyhry",
"šyrak",
"brovy",
"kiely",
"solki",
"sibsy",
"pruhi",
"matki",
"pazly",
"anody",
"taĺmy",
"rejsy",
"bliki",
"amoki",
"krapy",
"harcy",
"anučy",
"uruby",
"žachi",
"polki",
"slešy",
"knoty",
"žujki",
"kiepy",
"čapcy",
"špuli",
"mazdy",
"locyi",
"sialy",
"žužli",
"noryi",
"špary",
"zlady",
"huryi",
"haboi",
"pytli",
"saŭny",
"fajly",
"dryly",
"treci",
"milki",
"ulity",
"nadoi",
"teiny",
"uhlič",
"bryty",
"avali",
"hlyki",
"pskoŭ",
"karpy",
"poivy",
"šmony",
"afhan",
"etany",
"zhany",
"udačy",
"žuiry",
"paval",
"stoly",
"kašmy",
"šunty",
"liasy",
"honhi",
"habon",
"apady",
"kuksy",
"jaršy",
"žabry",
"košty",
"sietl",
"ftory",
"apačy",
"čarki",
"rampy",
"listy",
"ušyty",
"mamaj",
"horly",
"apory",
"lyžki",
"softy",
"žabki",
"manki",
"damki",
"ihnat",
"huzki",
"sadki",
"uremy",
"jajcy",
"vydry",
"ataki",
"čmoki",
"stely",
"piety",
"plock",
"ulita",
"ržeŭi",
"ulusy",
"opieĺ",
"barvy",
"kreŭi",
"etmii",
"snapy",
"piĺni",
"iloty",
"pupsy",
"lordy",
"kamaz",
"piary",
"bryli",
"vindy",
"čužki",
"kopii",
"tania",
"trumy",
"druki",
"čyrki",
"koksy",
"zaily",
"saamy",
"kaški",
"mroki",
"nyrcy",
"fiety",
"šepty",
"poter",
"buršy",
"klony",
"ijeny",
"rvačy",
"hrohi",
"deraš",
"pucin",
"valki",
"kryzy",
"školy",
"zvaby",
"lajby",
"ubity",
"psuty",
"džazy",
"amyta",
"hrypy",
"miery",
"milan",
"imchi",
"šliei",
"lisci",
"jaźki",
"aboly",
"aslan",
"nočki",
"randy",
"marat",
"žmoty",
"bukty",
"abity",
"troli",
"tuški",
"saiby",
"abady",
"lioki",
"karhi",
"taŭry",
"šyity",
"intel",
"arany",
"svift",
"dachi",
"nazvy",
"varki",
"duĺki",
"maĺcy",
"navoi",
"hruni",
"apaki",
"kyzyl",
"emiry",
"ahiby",
"dočki",
"alžyr",
"fanta",
"pasii",
"ahudy",
"hminy",
"hurdy",
"murly",
"slana",
"ikony",
"uroki",
"lyčki",
"fohty",
"druja",
"viazy",
"ukoly",
"sitki",
"ložki",
"dubcy",
"kucki",
"slipy",
"niŭki",
"dymki",
"soply",
"ižycy",
"kofty",
"sajty",
"ščoki",
"pyrki",
"etapy",
"dački",
"racei",
"mumii",
"upudy",
"kaski",
"tunhi",
"zbrui",
"mazhi",
"akcyi",
"pieki",
"najmy",
"ronžy",
"zhody",
"ciaŭi",
"žylki",
"bivis",
"pompy",
"stuki",
"doški",
"stepy",
"avary",
"bonzy",
"zmory",
"robin",
"tvary",
"upity",
"bruki",
"štahi",
"voran",
"baćki",
"dońki",
"dučki",
"trupy",
"hudki",
"daŭhi",
"viečy",
"jamki",
"prali",
"mliet",
"zvita",
"čyrvy",
"bicci",
"kadzi",
"rajki",
"arana",
"prudy",
"adboi",
"šerpy",
"akoty",
"žerar",
"klupy",
"krany",
"šuany",
"barty",
"kučki",
"klapy",
"hrumy",
"bryžy",
"ružžy",
"kanki",
"laski",
"birki",
"alina",
"hancy",
"taksy",
"sumki",
"trypy",
"dujki",
"zieŭs",
"astoi",
"iskry",
"lapki",
"suraž",
"žniai",
"cuhli",
"bažki",
"saski",
"dojly",
"izhoi",
"šoŭki",
"duški",
"čysly",
"uvaly",
"bieki",
"cyrki",
"puski",
"zrady",
"pifii",
"volli",
"myśki",
"linus",
"alany",
"žrely",
"kamki",
"syrki",
"taĺki",
"efory",
"foski",
"tepci",
"abuta",
"bunin",
"lužki",
"ladki",
"razcy",
"kolli",
"žaŭny",
"plovy",
"daŭny",
"čukčy",
"urazy",
"prypy",
"kopyś",
"karyi",
"vuchi",
"šyjki",
"čvyry",
"zaboi",
"repsy",
"valli",
"stroi",
"ačoly",
"žbany",
"tolki",
"šnipy",
"ryhor",
"slupy",
"haici",
"korki",
"siĺfy",
"šnary",
"raduń",
"tajcy",
"furyi",
"kazań",
"zondy",
"urony",
"špicy",
"ubita",
"racyi",
"šyŭki",
"kliai",
"celki",
"hlusk",
"naivy",
"nicše",
"zečki",
"kroty",
"rezki",
"tajny",
"stoli",
"stazy",
"žarty",
"boinh",
"knihi",
"eliat",
"pychi",
"kurvy",
"ručki",
"kaĺvy",
"azony",
"forbs",
"jatki",
"liuki",
"kuĺby",
"skaty",
"asoby",
"prusy",
"užaty",
"viena",
"ulary",
"kufli",
"hrudy",
"drahi",
"zhuki",
"fiĺcy",
"uračy",
"traty",
"uliki",
"putčy",
"anita",
"ajaks",
"biedy",
"pandy",
"frazy",
"prysy",
"vutki",
"nazar",
"noski",
"arary",
"morfy",
"lojny",
"skiny",
"dudki",
"šyfry",
"tumby",
"tajki",
"korhi",
"ranhi",
"atava",
"ciuki",
"hrazy",
"punšy",
"brany",
"miažy",
"amany",
"cnoty",
"skuta",
"roĺki",
"lucci",
"atary",
"ziaby",
"snoby",
"atavy",
"hrušy",
"bulki",
"lipki",
"chaki",
"klyki",
"uvary",
"vazki",
"troje",
"štufy",
"napoi",
"ateli",
"ažyny",
"hicli",
"karty",
"kličy",
"užyta",
"piory",
"amily",
"korci",
"aŭscy",
"pavoi",
"faŭny",
"lotry",
"cioci",
"pinsk",
"puĺsy",
"hoĺšy",
"vuški",
"fusty",
"vojny",
"panki",
"zaiki",
"miemy",
"udovy",
"ajery",
"funty",
"čerhi",
"šutki",
"kaŭki",
"dryhi",
"apyty",
"kubki",
"brack",
"voski",
"paŭšy",
"kajmy",
"porty",
"vośmy",
"ahuly",
"varni",
"kirki",
"mlyny",
"koŭna",
"irady",
"pilki",
"biržy",
"hipsy",
"testy",
"inety",
"mazyr",
"tajmy",
"uvity",
"slovy",
"jaren",
"zievy",
"itaka",
"tulij",
"zvity",
"pjesy",
"tuhai",
"kierč",
"hofry",
"ziapy",
"dancy",
"larki",
"romby",
"bajki",
"hryzy",
"češki",
"kukly",
"roŭni",
"banki",
"brudy",
"liški",
"zlivy",
"dziuk",
"vyški",
"zničy",
"basmy",
"čmury",
"šaržy",
"konha",
"silki",
"demki",
"čmuty",
"slavy",
"bisau",
"aliei",
"žmaki",
"zjady",
"zamki",
"farby",
"torfy",
"reŭzy",
"žnivy",
"žakty",
"party",
"dužki",
"džava",
"hurty",
"janka",
"ryšty",
"cvier",
"oračy",
"trony",
"špili",
"klark",
"muški",
"vorki",
"umyty",
"uitni",
"spony",
"smyki",
"ciažy",
"jazvy",
"kieny",
"misii",
"bliny",
"kički",
"jamal",
"prydy",
"centy",
"koĺcy",
"raski",
"špury",
"korby",
"hibki",
"tufli",
"dženi",
"sysci",
"tomas",
"džyny",
"spily",
"klasy",
"kutki",
"bukli",
"inter",
"dalas",
"kurdy",
"tebli",
"stuzy",
"štuki",
"marhi",
"rvana",
"blaty",
"sviež",
"myski",
"amary",
"parys",
"samas",
"šatly",
"ryĺcy",
"zmany",
"lacya",
"šancy",
"hrety",
"kilty",
"upyny",
"kryhi",
"huzny",
"hlieb",
"sčuty",
"licei",
"kicki",
"amury",
"liali",
"rubki",
"helap",
"plady",
"tarty",
"frezy",
"vorsy",
"hryby",
"popki",
"citoŭ",
"ujavy",
"šamiĺ",
"narač",
"daški",
"mordy",
"tujki",
"šumki",
"zžyty",
"hrafy",
"dyany",
"pinhi",
"sihmy",
"krupy",
"akuty",
"lakcy",
"batyj",
"boksy",
"dzeny",
"rabry",
"realy",
"barki",
"biehi",
"dziki",
"džymi",
"kozki",
"mafii",
"kruhi",
"dusty",
"upory",
"cysty",
"forsy",
"zloje",
"amapy",
"kumki",
"kryty",
"dyldy",
"astry",
"furki",
"pachi",
"deĺty",
"opcyi",
"avaly",
"zryta",
"himny",
"podyi",
"ruĺki",
"datny",
"pieta",
"chuan",
"isopy",
"čarhi",
"ažury",
"ryŭki",
"ciroĺ",
"muĺty",
"šafki",
"roĺni",
"rejty",
"banty",
"maŭry",
"koĺty",
"cynii",
"ryčyi",
"kresy",
"orhii",
"talii",
"oland",
"asoki",
"svity",
"sieci",
"čelsi",
"piežo",
"arydy",
"fiški",
"bardy",
"karčy",
"anton",
"aramy",
"čuški",
"aboje",
"sipki",
"zvany",
"umyta",
"mopsy",
"sopat",
"skaly",
"irysy",
"liemy",
"rupii",
"kolby",
"katar",
"dzoty",
"lomki",
"žanry",
"trusy",
"pošty",
"kursy",
"kramy",
"duchi",
"druck",
"rybki",
"kajly",
"horan",
"udary",
"ceryi",
"lazni",
"harby",
"šansy",
"kobry",
"hines",
"turki",
"klaki",
"morhi",
"štaby",
"palmy",
"namib",
"vuhli",
"busly",
"viaki",
"bomby",
"štosy",
"zduty",
"pasly",
"kapry",
"rypsy",
"ulovy",
"žonki",
"makoš",
"zyski",
"udavy",
"hnusy",
"uvita",
"naasy",
"šlicy",
"bloki",
"barsy",
"bimsy",
"kuryi",
"sajki",
"ščors",
"alieh",
"bolki",
"drevy",
"kaiki",
"dojny",
"karma",
"tropy",
"špory",
"zahsy",
"ciski",
"troty",
"žracy",
"chabl",
"rosii",
"vyrai",
"treby",
"hrošy",
"drapy",
"nauru",
"lupki",
"kisci",
"bajcy",
"livan",
"anisy",
"zvody",
"chuki",
"dubli",
"miuli",
"kotki",
"časci",
"blium",
"janus",
"boĺšy",
"vaĺcy",
"brusy",
"kruki",
"ojčyč",
"žučki",
"zmyvy",
"nanki",
"adumy",
"myšcy",
"cipki",
"braki",
"buśki",
"hduli",
"abaty",
"stady",
"bodni",
"nimfy",
"stuly",
"rosty",
"lazki",
"štoki",
"kieby",
"slahi",
"šorcy",
"prymy",
"firny",
"chajt",
"zlaki",
"vussi",
"klany",
"šabli",
"chody",
"nitki",
"hajki",
"špihi",
"sypki",
"azidy",
"baržy",
"aniny",
"syski",
"dyĺki",
"aryki",
"tejpy",
"šaški",
"ražki",
"tymor",
"syrty",
"repki",
"pilip",
"lipii",
"čytki",
"ahidy",
"ranty",
"surmy",
"bzyki",
"dzina",
"honty",
"hlyžy",
"kraby",
"sarty",
"sšyty",
"hosci",
"hoĺdy",
"šaron",
"jačei",
"artur",
"paŭel",
"lubki",
"mansy",
"araki",
"koŭčy",
"ryfmy",
"chiby",
"asoty",
"kluby",
"urody",
"kudly",
"zlita",
"čarli",
"hraki",
"zurny",
"amyty",
"hieny",
"pakty",
"plaki",
"spady",
"tupai",
"džaly",
"finki",
"puĺty",
"liuis",
"chady",
"bomki",
"zjavy",
"zamšy",
"minki",
"krali",
"pitki",
"plisy",
"šairy",
"kafli",
"uraty",
"kolcy",
"bahny",
"chiny",
"škury",
"liety",
"anusy",
"džobs",
"navum",
"rvoty",
"džons",
"kusty",
"fobii",
"dasty",
"vinna",
"blicy",
"dante",
"čaĺcy",
"čaicy",
"hnuta",
"zuchi",
"rynat",
"mymry",
"amidy",
"kvačy",
"zrazy",
"myški",
"siŭcy",
"cacki",
"tomsk",
"sieny",
"stoki",
"skoki",
"blohi",
"kainy",
"ryzki",
"fiksy",
"bohuš",
"kvizy",
"mirzy",
"broni",
"pakoi",
"prahi",
"vybai",
"ščaŭi",
"jamby",
"makar",
"pracy",
"hnana",
"malie",
"sieul",
"kacia",
"krozy",
"kupki",
"pruty",
"areny",
"čarty",
"dohmy",
"citry",
"eliny",
"šybki",
"uĺryk",
"niani",
"štory",
"zmiry",
"pinty",
"džuty",
"opusy",
"dakar",
"siĺva",
"chazy",
"draby",
"apašy",
"ščepy",
"bluzy",
"kraki",
"kurcy",
"kropy",
"škuty",
"smuty",
"klara",
"žochi",
"znaki",
"vyžly",
"doĺki",
"vuzly",
"kapli",
"hlicy",
"kitki",
"rumzy",
"kanty",
"štaty",
"zubcy",
"flaty",
"meryi",
"slivy",
"skoly",
"jamsy",
"jarki",
"kneli",
"ciamy",
"dzety",
"slany",
"sudki",
"kvahi",
"znosy",
"koŭki",
"išaki",
"lišai",
"paĺmy",
"hreki",
"stusy",
"lučak",
"nacyi",
"špaty",
"ščyty",
"sajry",
"danni",
"kiski",
"prozy",
"dzivy",
"tulki",
"kańki",
"vuĺvy",
"zvana",
"klaus",
"porki",
"pieny",
"hlivy",
"termy",
"cypki",
"spiny",
"malpy",
"dvoje",
"maržy",
"kubly",
"staly",
"nyrki",
"smoly",
"koĺki",
"šmery",
"afity",
"skiby",
"furmy",
"krahi",
"hajny",
"jaŭki",
"pšeki",
"šarmy",
"kirpy",
"loski",
"usoly",
"vanty",
"žyčki",
"čajki",
"temza",
"ustoi",
"todar",
"honki",
"bryhi",
"rečki",
"dvary",
"trosy",
"šyrmy",
"truki",
"turyn",
"čorty",
"hramy",
"rabat",
"pryzy",
"ulany",
"siety",
"zdani",
"ĺhoty",
"čerci",
"šycik",
"chary",
"horšy",
"hanki",
"machi",
"razań",
"ždany",
"lusty",
"banhi",
"škody",
"zryvy",
"myĺcy",
"dajmy",
"šliry",
"čujki",
"sčepy",
"zioly",
"tečki",
"juški",
"narva",
"hoĺki",
"vaduc",
"mysli",
"ranki",
"formy",
"pčoly",
"iksii",
"kuźki",
"taici",
"niava",
"sački",
"šychi",
"krycy",
"azoly",
"čalmy",
"čyhir",
"miški",
"emali",
"krepy",
"pejsy",
"donni",
"huĺcy",
"ščury",
"musty",
"sasny",
"cykly",
"šneki",
"tosty",
"tuzla",
"irchi",
"šurki",
"čadry",
"žezly",
"štamy",
"zbyty",
"oskar",
"myčki",
"hlumy",
"cimur",
"kjaty",
"maisy",
"siomy",
"ažany",
"kudry",
"pužki",
"saksy",
"manii",
"esery",
"kośki",
"stažy",
"zžaty",
"kliry",
"maĺta",
"ĺvicy",
"holli",
"curki",
"čviry",
"lučki",
"dyšli",
"hanza",
"lački",
"zedli",
"skovy",
"hliny",
"hanna",
"žarny",
"utory",
"torby",
"haĺni",
"zubji",
"raksy",
"rafii",
"atamy",
"kabul",
"malki",
"umbry",
"uvozy",
"ziomy",
"stody",
"katly",
"kurčy",
"oraki",
"naŭdy",
"ačahi",
"lytki",
"araty",
"stany",
"rački",
"daryj",
"kiksy",
"unuki",
"soncy",
"šylli",
"ahavy",
"žviry",
"bardo",
"zžata",
"lasty",
"kašli",
"hraby",
"kaĺcy",
"biert",
"atosy",
"liazy",
"cycki",
"kiški",
"šlaki",
"druzy",
"vusci",
"spisy",
"plyty",
"kosmy",
"skuty",
"šaŭki",
"stosy",
"pysin",
"vojty",
"ašuhi",
"kliny",
"dyńki",
"sšyta",
"epody",
"paryž",
"pluhi",
"talin",
"kitaj",
"smoki",
"zubry",
"spody",
"sučki",
"stapy",
"mieli",
"jarly",
"vožki",
"skury",
"čakry",
"minsk",
"hreny",
"ščaki",
"uryny",
"jahor",
"linii",
"kaĺki",
"rodas",
"bursy",
"zvaly",
"tomki",
"tyoly",
"ujomy",
"farsy",
"šulli",
"pojly",
"knaty",
"uhody",
"tuazy",
"šyĺcy",
"zryty",
"pialy",
"čechi",
"žylli",
"liery",
"mahii",
"ramki",
"dramy",
"spicy",
"hruki",
"lodki",
"pupki",
"ryski",
"darja",
"raŭki",
"merfi",
"puški",
"miety",
"roivy",
"iryna",
"šajry",
"dremy",
"dumki",
"spudy",
"atoly",
"fiony",
"ofisy",
"skaby",
"zlaja",
"bački",
"kadry",
"hbany",
"sažni",
"ehidy",
"linki",
"hlyty",
"sonhi",
"daĺšy",
"filip",
"kapyĺ",
"šasty",
"fanhi",
"špiki",
"upiry",
"parki",
"cieni",
"sipai",
"ulady",
"palau",
"zajki",
"sercy",
"floty",
"julia",
"lieny",
"liozy",
"žyĺcy",
"normy",
"budki",
"abavy",
"svary",
"marei",
"tkany",
"donki",
"bromy",
"kučmy",
"proby",
"faršy",
"lunki",
"barys",
"juraś",
"vycci",
"aĺtei",
"sojki",
"bykaŭ",
"zubki",
"pinii",
"kuĺmy",
"ceški",
"kuĺty",
"kvoty",
"zmovy",
"kobzy",
"leŭty",
"tarcy",
"kojki",
"vieny",
"zdymy",
"unady",
"hubki",
"padly",
"dampy",
"plazy",
"ciely",
"harty",
"korty",
"močki",
"dumcy",
"eskin",
"halsy",
"kopki",
"paemy",
"škivy",
"treny",
"hurki",
"festy",
"facyi",
"čutki",
"mitry",
"zžyta",
"ahamy",
"faldy",
"čučki",
"altaj",
"masly",
"halty",
"asiny",
"ukosy",
"matni",
"sartr",
"zmusy",
"ratai",
"halat",
"zlovy",
"džoni",
"vilty",
"akyny",
"natan",
"asudy",
"kopji",
"spory",
"šufli",
"škloŭ",
"hučki",
"liena",
"karan",
"mašny",
"avita",
"vuhry",
"kazki",
"abuzy",
"fomki",
"barań",
"sojmy",
"ukazy",
"šramy",
"kuĺki",
"nožki",
"jomki",
"zvivy",
"jurki",
"viežy",
"epiki",
"chaly",
"endzi",
"dupki",
"žazly",
"lapci",
"avity",
"knicy",
"kubań",
"vokny",
"sajhi",
"arbat",
"nisan",
"joŭni",
"lapty",
"tytry",
"brydy",
"styli",
"dubaj",
"piaty",
"juryj",
"scyla",
"drosy",
"hruzy",
"šaŭcy",
"žyŭcy",
"fejsy",
"ranni",
"sotni",
"ahary",
"zhuby",
"alofi",
"kapki",
"humny",
"burki",
"mieka",
"zvozy",
"spita",
"cviny",
"upita",
"bludy",
"skapy",
"apony",
"zorki",
"iryty",
"hieli",
"sukni",
"siemy",
"zajcy",
"nizki",
"fideĺ",
"zhony",
"torsy",
"lojeŭ",
"košmy",
"jacek",
"papki",
"biŭni",
"midyi",
"madyi",
"umany",
"fuzii",
"tynda",
"miežy",
"chapy",
"cytry",
"kupcy",
"jorki",
"špony",
"bierh",
"ryndy",
"fuksy",
"suški",
"zikry",
"džery",
"voĺty",
"laŭcy",
"dzidy",
"alach",
"atyka",
"fieny",
"fibry",
"siena",
"strai",
"ličby",
"suvoi",
"rudzi",
"kački",
"kolas",
"bitly",
"imidy",
"šmaty",
"mazki",
"plity",
"bojni",
"švaby",
"bočki",
"hryžy",
"ibisy",
"karžy",
"pojmy",
"zeĺva",
"brasy",
"kvity",
"jaški",
"kiŭki",
"znudy",
"čynšy",
"miešy",
"cioki",
"jubki",
"litva",
"zmyta",
"calki",
"aryna",
"uzory",
"šuryk",
"hnidy",
"marta",
"kroki",
"trohi",
"nobiĺ",
"nohci",
"bunty",
"myjni",
"limby",
"drofy",
"lumpy",
"tynki",
"mialy",
"saĺki",
"kreny",
"odumy",
"bitki",
"poĺki",
"mieny",
"puĺpy",
"tatki",
"stupy",
"fakty",
"praja",
"murej",
"raity",
"kossi",
"žmuty",
"budni",
"tartu",
"vulli",
"akuly",
"pšyki",
"ačepy",
"prany",
"frejd",
"šajki",
"praha",
"kasii",
"muary",
"ažahi",
"šusty",
"lukin",
"sachi",
"sliny",
"liuli",
"vaŭki",
"tlumy",
"fondy",
"zlyja",
"urezy",
"žhuty",
"plicy",
"roily",
"maĺvy",
"fachi",
"bundy",
"traly",
"rudni",
"susly",
"zvady",
"kursk",
"snidy",
"emany",
"knopy",
"skuly",
"naski",
"razki",
"eliza",
"fizii",
"virki",
"plany",
"krejh",
"ryaly",
"kusci",
"fotki",
"stali",
"tramy",
"bredy",
"liusi",
"torki",
"pipki",
"fordy",
"marsy",
"krysy",
"žerom",
"baksy",
"dešty",
"drony",
"tvory",
"bandy",
"bubki",
"kolki",
"muchi",
"pački",
"paščy",
"raški",
"bahry",
"žoŭny",
"žondy",
"kajry",
"sceny",
"akuta",
"vilki",
"dukty",
"horcy",
"džypy",
"spyny",
"sluhi",
"maršy",
"dunin",
"altei",
"tonha",
"rvany",
"pizdy",
"abyki",
"chase",
"vapny",
"breki",
"cenzy",
"epasy",
"kručy",
"azija",
"pyĺki",
"uruki",
"vulki",
"visla",
"samki",
"puńki",
"alieś",
"hlyby",
"vidki",
"čurki",
"sytki",
"šlamy",
"abram",
"lioša",
"rejch",
"jački",
"hožšy",
"pikšy",
"voiny",
"uzusy",
"firmy",
"jakaŭ",
"uncyi",
"kamli",
"karmy",
"sopki",
"tahil",
"jajki",
"liapy",
"viski",
"hruty",
"šorki",
"šejki",
"rozhi",
"idaly",
"plyni",
"azoty",
"paŭzy",
"majki",
"hyrki",
"paety",
"areli",
"larvy",
"draki",
"abuty",
"bajdy",
"jarmy",
"tokia",
"vunii",
"atyki",
"vidmy",
"ramsy",
"litki",
"kryki",
"sorak",
"rynhi",
"kleby",
"horny",
"radžy",
"nensi",
"ziaci",
"hački",
"sloty",
"hrady",
"devis",
"žycci",
"hrymy",
"hebli",
"armii",
"zadki",
"zuavy",
"kuski",
"miesy",
"endru",
"amažy",
"rubcy",
"lanki",
"choly",
"irena",
"žniei",
"remni",
"hruby",
"ušyta",
"hatki",
"klumy",
"inesa",
"bubny",
"dniny",
"tački",
"myjki",
"morze",
"kasty",
"sraki",
"cviki",
"reški",
"taras",
"zonhi",
"lilii",
"špaly",
"lokci",
"bujki",
"sakvy",
"tanki",
"norty",
"dryki",
"kipci",
"sińki",
"balty",
"kurty",
"hnomy",
"pasmy",
"siury",
"zdory",
"sukny",
"miski",
"trešy",
"adaty",
"dajki",
"kražy",
"rakii",
"steki",
"miata",
"kosci",
"piečy",
"klava",
"chvar",
"juraj",
"hrozy",
"adesa",
"dochi",
"murki",
"vasiĺ",
"krony",
"kojmy",
"nalli",
"robki",
"siečy",
"ujuki",
"amičy",
"alien",
"samcy",
"plisa",
"docha",
"litry",
"rapsy",
"plyvy",
"kotly",
"šerly",
"aecyj",
"zludy",
"ražny",
"hliai",
"konki",
"skity",
"kliki",
"učuty",
"trefy",
"illia",
"maski",
"rancy",
"rejvy",
"vudki",
"švivy",
"pučki",
"uvody",
"buhai",
"jalta",
"rozki",
"bańki",
"raisa",
"naiby",
"efiry",
"damby",
"šapki",
"ohany",
"styki",
"eseks",
"liady",
"zroki",
"tarki",
"araly",
"hafty",
"skoby",
"hiery",
"avieĺ",
"kniei",
"domny",
"karki",
"kufry",
"šroty",
"iduča",
"aravy",
"troja",
"šyĺdy",
"čapli",
"vizhi",
"arloŭ",
"rejdy",
"eltan",
"tarpy",
"haret",
"baĺki",
"bryfy",
"sincy",
"šajby",
"tempy",
"žesty",
"mojry",
"ivona",
"drana",
"kijeŭ",
"papoŭ",
"akopy",
"hnuty",
"huski",
"kuzni",
"aminy",
"sinaj",
"juani",
"drafy",
"mazda",
"sotki",
"ptozy",
"kryta",
"bloty",
"tonia",
"hurmy",
"elany",
"stery",
"šruby",
"zimki",
"šnury",
"kufii",
"sakli",
"apoki",
"faŭst",
"jolki",
"vučni",
"capfy",
"vozki",
"miely",
"šacii",
"jafim",
"pyply",
"žanna",
"panny",
"sepii",
"počki",
"rumby",
"luara",
"narty",
"anony",
"daŭki",
"kijki",
"kordy",
"ruryk",
"bojki",
"muĺki",
"česci",
"masci",
"rebry",
"tyrly",
"pylki",
"žoŭci",
"kancy",
"norki",
"pikty",
"lajmy",
"pirsy",
"krezy",
"maĺki",
"šeĺmy",
"žrycy",
"tkačy",
"kampy",
"hiemy",
"cechi",
"baski",
"užony",
"šlahi",
"biksy",
"jukas",
"šosty",
"jelki",
"paski",
"špaki",
"portu",
"puazy",
"mlivy",
"katki",
"abozy",
"dueli",
"laŭžy",
"knyry",
"čarĺz",
"byŭšy",
"rubli",
"bieli",
"zolki",
"štyki",
"liudy",
"ciosy",
"džeby",
"volha",
"krosy",
"zatki",
"tkana",
"liŭry",
"pierm",
"boĺki",
"lančy",
"džemy",
"topki",
"hloki",
"devid",
"drany",
"lhuny",
"hiozy",
"ziuki",
"lajki",
"bryta",
"natry",
"paĺcy",
"ryfty",
"fryzy",
"naboi",
"ruiny",
"skidy",
"sopli",
"zloby",
"visty",
"špahi",
"laŭry",
"famin",
"zapoi",
"ručai",
"dunaj",
"pjezy",
"lievy",
"akony",
"jakub",
"zhiby",
"etasy",
"haĺki",
"udody",
"rykšy",
"skify",
"cezar",
"zybki",
"podki",
"skony",
"blums",
"bonny",
"babki",
"vosci",
"platy",
"steny",
"surki",
"lazar",
"brycy",
"kurai",
"elada",
"humki",
"sizif",
"užyty",
"hrašy",
"jurty",
"adony",
"utomy",
"atyty",
"sousy",
"aryeĺ",
"učyny",
"baŭki",
"kurki",
"chali",
"šopki",
"futry",
"ahaja",
"kryšy",
"kodly",
"čolki",
"marks",
"synki",
"paryi",
"džasy",
"stavy",
"kiryl",
"kapcy",
"davyd",
"jadry",
"laŭki",
"bazyĺ",
"aaron",
"dziry",
"spasy",
"dryny",
"tomaš",
"uhary",
"vafli",
"kajty",
"tafji",
"prohi",
"lieon",
"stopy",
"štofy",
"truby",
"nordy",
"rydli",
"etyly",
"bitvy",
"duply",
"teksy",
"tuncy",
"makii",
"šatny",
"frenk",
"fiski",
"renty",
"dojki",
"uryty",
"kuĺšy",
"takty",
"halki",
"hlavy",
"klipy",
"zbity",
"rančy",
"točki",
"hički",
"čochi",
"elity",
"ratki",
"hrani",
"nardy",
"lijon",
"zhasy",
"sidry",
"vodki",
"radcy",
"doncy",
"skazy",
"tancy",
"zvyki",
"žytki",
"kiešy",
"ijony",
"pčaly",
"sadam",
"haŭki",
"kupji",
"hrosy",
"frycy",
"kadki",
"kruty",
"uciny",
"metry",
"sapki",
"siedy",
"chity",
"juncy",
"abaki",
"karcy",
"duety",
"niuni",
"flešy",
"ceŭki",
"dyoly",
"lyžni",
"finty",
"kiedy",
"azury",
"noški",
"miačy",
"bryzy",
"psamy",
"duhin",
"haĺcy",
"morsy",
"patčy",
"roski",
"brady",
"zujki",
"lieki",
"masty",
"alisa",
"vočki",
"šeĺfy",
"bobki",
"hrucy",
"biely",
"sitcy",
"cynki",
"sochi",
"bydly",
"vanny",
"jaski",
"braty",
"arudy",
"žeody",
"vieki",
"smaki",
"žyžki",
"alody",
"eĺdar",
"aorty",
"pieli",
"torpy",
"sierž",
"sajdy",
"razin",
"apaly",
"mufty",
"husty",
"puĺki",
"piski",
"šubki",
"mnoha",
"žerly",
"pozvy",
"truny",
"lińki",
"mycki",
"zdoby",
"knary",
"uškui",
"sijam",
"sarny",
"tapki",
"umovy",
"ukusy",
"pajki",
"draty",
"upady",
"patap",
"mulli",
  ];
  /** @type {string} */
  var c = "present";
  /** @type {string} */
  var correctLetter = "correct";
  /** @type {string} */
  var bytes = "absent";
  var settings = {
    unknown : 0,
    absent : 1,
    present : 2,
    correct : 3
  };
  /** @type {!Date} */
  var mutationsMap = new Date(2022, 1, 14, 0, 0, 0, 0);
  /** @type {string} */
  var choices = "šśertyuiopasdfhjklzcčćvbnmžźńĺŭ";
  /** @type {!Array<?>} */
  var braces = [].concat(toArray(choices.split("").slice(13)), toArray(choices.split("").slice(0, 13)));
  /** @type {string} */
  var STORAGE_KEY_MOCKSTORE = "statistics";
  /** @type {string} */
  var undefined = "fail";
  var train1or = {
    currentStreak : 0,
    maxStreak : 0,
    guesses : callback({
      1 : 0,
      2 : 0,
      3 : 0,
      4 : 0,
      5 : 0,
      6 : 0
    }, undefined, 0),
    winPercentage : 0,
    gamesPlayed : 0,
    gamesWon : 0,
    averageGuesses : 0
  };
  /** @type {!Element} */
  var post = document.createElement("template");
  /** @type {string} */
  post.innerHTML = "\n  <style>\n  .toaster {\n    position: absolute;\n    top: 10%;\n    left: 50%;\n    transform: translate(-50%, 0);\n    pointer-events: none;\n    width: fit-content;\n  }\n  #game-toaster {\n    z-index: ".concat(1E3, ";\n  }\n  #system-toaster {\n    z-index: ").concat(4E3, ';\n  }\n\n  #game {\n    width: 100%;\n    max-width: var(--game-max-width);\n    margin: 0 auto;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n  }\n  header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    height: var(--header-height);\n    color: var(--color-tone-1);\n    border-bottom: 1px solid var(--color-tone-4);\n  }\n  header .title {\n    font-weight: 700;\n    font-size: 36px;\n    letter-spacing: 0.2rem;\n    text-transform: uppercase;\n    text-align: center;\n    position: absolute;\n    left: 0;\n    right: 0;\n    pointer-events: none;\n  }\n\n  @media (max-width: 360px) {\n    header .title {\n      font-size: 22px;\n      letter-spacing: 0.1rem;\n    }\n  }\n\n  #board-container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-grow: 1;\n    overflow: hidden;\n  }\n  #board {\n    display: grid;\n    grid-template-rows: repeat(6, 1fr);\n    grid-gap: 5px;\n    padding:10px;\n    box-sizing: border-box;\n  }\n  button.icon {\n    background: none;\n    border: none;\n    cursor: pointer;\n    padding: 0 4px;\n  }\n\n  #debug-tools {\n    position: absolute;\n    bottom: 0;\n  }\n\n  </style>\n  <game-theme-manager>\n    <div id="game">\n      <header>\n        <div class="menu">\n          <button id="help-button" class="icon" aria-label="help">\n            <game-icon icon="help"></game-icon>\n          </button>\n        </div>\n        <div class="title">\n         UORDL\n        </div>\n        <div class="menu">\n          <button id="statistics-button" class="icon" aria-label="statistics">\n            <game-icon icon="statistics"></game-icon>\n          </button>\n          <button id="settings-button" class="icon" aria-label="settings">\n            <game-icon icon="settings"></game-icon>\n          </button>\n        </div>\n      </header>\n        <div id="board-container">\n          <div id="board"></div>\n        </div>\n        <game-keyboard></game-keyboard>\n        <game-modal></game-modal>\n        <game-page></game-page>\n        <div class="toaster" id="game-toaster"></div>\n        <div class="toaster" id="system-toaster"></div>\n    </div>\n  </game-theme-manager>\n  <div id="debug-tools"></div>\n');
  /** @type {!Element} */
  var form = document.createElement("template");
  /** @type {string} */
  form.innerHTML = '\n<button id="reveal">reveal</button>\n<button id="shake">shake</button>\n<button id="bounce">bounce</button>\n<button id="toast">toast</button>\n<button id="modal">modal</button>\n';
  /** @type {string} */
  var exitCode = "IN_PROGRESS";
  /** @type {string} */
  var CONNECTING = "WIN";
  /** @type {string} */
  var obj = "FAIL";
  /** @type {!Array} */
  var pedalboards = ["Nievierahodna", "Cudoŭna", "Vydatna", "Hodna", "Dobra", "Uf!"];
  var DialogElement = function(e) {
    /**
     * @return {?}
     */
    function init() {
      var self;
      log(this, init);
      callback(set(self = request.call(this)), "tileIndex", 0);
      callback(set(self), "rowIndex", 0);
      callback(set(self), "solution", void 0);
      callback(set(self), "boardState", void 0);
      callback(set(self), "evaluations", void 0);
      callback(set(self), "canInput", true);
      callback(set(self), "gameStatus", exitCode);
      callback(set(self), "letterEvaluations", {});
      callback(set(self), "$board", void 0);
      callback(set(self), "$keyboard", void 0);
      callback(set(self), "$game", void 0);
      callback(set(self), "today", void 0);
      callback(set(self), "lastPlayedTs", void 0);
      callback(set(self), "lastCompletedTs", void 0);
      callback(set(self), "hardMode", void 0);
      callback(set(self), "dayOffset", void 0);
      self.attachShadow({
        mode : "open"
      });
      /** @type {!Date} */
      self.today = new Date;
      var data = parse();
      return self.lastPlayedTs = data.lastPlayedTs, !self.lastPlayedTs || cb(new Date(self.lastPlayedTs), self.today) >= 1 ? (self.boardState = (new Array(6)).fill(""), self.evaluations = (new Array(6)).fill(null), self.solution = isDate(self.today), self.dayOffset = getTime(self.today), self.lastCompletedTs = data.lastCompletedTs, self.hardMode = data.hardMode, self.restoringFromLocalStorage = false, done({
        rowIndex : self.rowIndex,
        boardState : self.boardState,
        evaluations : self.evaluations,
        solution : self.solution,
        gameStatus : self.gameStatus
      }), check("event", "level_start", {
        level_name : combine(self.solution)
      })) : (self.boardState = data.boardState, self.evaluations = data.evaluations, self.rowIndex = data.rowIndex, self.solution = data.solution, self.dayOffset = getTime(self.today), self.letterEvaluations = filter(self.boardState, self.evaluations), self.gameStatus = data.gameStatus, self.lastCompletedTs = data.lastCompletedTs, self.hardMode = data.hardMode, self.gameStatus !== exitCode && (self.canInput = false), self.restoringFromLocalStorage = true), self;
    }
    on(init, e);
    var request = makeRequest(init);
    return trigger(init, [{
      key : "evaluateRow",
      value : function() {
        if (5 === this.tileIndex && !(this.rowIndex >= 6)) {
          var value;
          var brickInput = this.$board.querySelectorAll("game-row")[this.rowIndex];
          var integer = this.boardState[this.rowIndex];
          if (value = integer, !updatedSet.includes(value) && !options.includes(value)) {
            return brickInput.setAttribute("invalid", ""), void this.addToast("Hetaje slova mnie nieviadoma!");
          }
          if (this.hardMode) {
            var that = function(x, obj, word) {
              if (!x || !obj || !word) {
                return {
                  validGuess : true
                };
              }
              /** @type {number} */
              var i = 0;
              for (; i < word.length; i++) {
                if (word[i] === correctLetter && x[i] !== obj[i]) {
                  return {
                    validGuess : false,
                    errorMessage : "".concat(ordinal(i + 1), " litara pavinna być ").concat(obj[i].toUpperCase())
                  };
                }
              }
              var o = {};
              /** @type {number} */
              var k = 0;
              for (; k < word.length; k++) {
                if ([correctLetter, c].includes(word[k])) {
                  if (o[obj[k]]) {
                    o[obj[k]] += 1;
                  } else {
                    /** @type {number} */
                    o[obj[k]] = 1;
                  }
                }
              }
              var newValuesArr = x.split("").reduce(function(eventsDict, event) {
                return eventsDict[event] ? eventsDict[event] += 1 : eventsDict[event] = 1, eventsDict;
              }, {});
              var f;
              for (f in o) {
                if ((newValuesArr[f] || 0) < o[f]) {
                  return {
                    validGuess : false,
                    errorMessage : "U slovie pavinna być ".concat(f.toUpperCase())
                  };
                }
              }
              return {
                validGuess : true
              };
            }(integer, this.boardState[this.rowIndex - 1], this.evaluations[this.rowIndex - 1]);
            var malakh = that.validGuess;
            var paramErrorMessage = that.errorMessage;
            if (!malakh) {
              return brickInput.setAttribute("invalid", ""), void this.addToast(paramErrorMessage || "Not valid in hard mode");
            }
          }
          var that = function(p, s) {
            /** @type {!IArrayLike<?>} */
            var v = Array(s.length).fill(bytes);
            /** @type {!IArrayLike<?>} */
            var eccBuffer = Array(s.length).fill(true);
            /** @type {!IArrayLike<?>} */
            var fdcache = Array(s.length).fill(true);
            /** @type {number} */
            var i = 0;
            for (; i < p.length; i++) {
              if (p[i] === s[i] && fdcache[i]) {
                /** @type {string} */
                v[i] = correctLetter;
                /** @type {boolean} */
                eccBuffer[i] = false;
                /** @type {boolean} */
                fdcache[i] = false;
              }
            }
            /** @type {number} */
            var t = 0;
            for (; t < p.length; t++) {
              var type = p[t];
              if (eccBuffer[t]) {
                /** @type {number} */
                var i = 0;
                for (; i < s.length; i++) {
                  var n = s[i];
                  if (fdcache[i] && type === n) {
                    /** @type {string} */
                    v[t] = c;
                    /** @type {boolean} */
                    fdcache[i] = false;
                    break;
                  }
                }
              }
            }
            return v;
          }(integer, this.solution);
          this.evaluations[this.rowIndex] = that;
          this.letterEvaluations = filter(this.boardState, this.evaluations);
          brickInput.evaluation = this.evaluations[this.rowIndex];
          this.rowIndex += 1;
          /** @type {boolean} */
          var eventName = this.rowIndex >= 6;
          var propertyName = that.every(function(guess) {
            return "correct" === guess;
          });
          if (eventName || propertyName) {
            draw({
              isWin : propertyName,
              isStreak : !!this.lastCompletedTs && 1 === cb(new Date(this.lastCompletedTs), new Date),
              numGuesses : this.rowIndex
            });
            done({
              lastCompletedTs : Date.now()
            });
            /** @type {string} */
            this.gameStatus = propertyName ? CONNECTING : obj;
            check("event", "level_end", {
              level_name : combine(this.solution),
              num_guesses : this.rowIndex,
              success : propertyName
            });
          }
          /** @type {number} */
          this.tileIndex = 0;
          /** @type {boolean} */
          this.canInput = false;
          done({
            rowIndex : this.rowIndex,
            boardState : this.boardState,
            evaluations : this.evaluations,
            solution : this.solution,
            gameStatus : this.gameStatus,
            lastPlayedTs : Date.now()
          });
        }
      }
    }, {
      key : "addLetter",
      value : function(recB) {
        if (this.gameStatus === exitCode) {
          if (this.canInput) {
            if (!(this.tileIndex >= 5)) {
              this.boardState[this.rowIndex] += recB;
              this.$board.querySelectorAll("game-row")[this.rowIndex].setAttribute("letters", this.boardState[this.rowIndex]);
              this.tileIndex += 1;
            }
          }
        }
      }
    }, {
      key : "removeLetter",
      value : function() {
        if (this.gameStatus === exitCode && this.canInput && !(this.tileIndex <= 0)) {
          this.boardState[this.rowIndex] = this.boardState[this.rowIndex].slice(0, this.boardState[this.rowIndex].length - 1);
          var _ = this.$board.querySelectorAll("game-row")[this.rowIndex];
          if (this.boardState[this.rowIndex]) {
            _.setAttribute("letters", this.boardState[this.rowIndex]);
          } else {
            _.removeAttribute("letters");
          }
          _.removeAttribute("invalid");
          this.tileIndex -= 1;
        }
      }
    }, {
      key : "submitGuess",
      value : function() {
        if (this.gameStatus === exitCode && this.canInput) {
          if (5 !== this.tileIndex) {
            return this.$board.querySelectorAll("game-row")[this.rowIndex].setAttribute("invalid", ""), void this.addToast("Nie chapaje litar!");
          }
          this.evaluateRow();
        }
      }
    }, {
      key : "addToast",
      value : function(reason, label) {
        var s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        /** @type {!Element} */
        var t = document.createElement("game-toast");
        t.setAttribute("text", reason);
        if (label) {
          t.setAttribute("duration", label);
        }
        if (s) {
          this.shadowRoot.querySelector("#system-toaster").prepend(t);
        } else {
          this.shadowRoot.querySelector("#game-toaster").prepend(t);
        }
      }
    }, {
      key : "sizeBoard",
      value : function() {
        var scrollbar_handle = this.shadowRoot.querySelector("#board-container");
        /** @type {number} */
        var x = Math.min(Math.floor(scrollbar_handle.clientHeight * (5 / 6)), 350);
        /** @type {number} */
        var predicted_answer = 6 * Math.floor(x / 5);
        /** @type {string} */
        this.$board.style.width = "".concat(x, "px");
        /** @type {string} */
        this.$board.style.height = "".concat(predicted_answer, "px");
      }
    }, {
      key : "showStatsModal",
      value : function() {
        var span = this.$game.querySelector("game-modal");
        /** @type {!Element} */
        var edit = document.createElement("game-stats");
        if (this.gameStatus === CONNECTING && this.rowIndex <= 6) {
          edit.setAttribute("highlight-guess", this.rowIndex);
        }
        edit.gameApp = this;
        span.appendChild(edit);
        span.setAttribute("open", "");
      }
    }, {
      key : "showHelpModal",
      value : function() {
        var e = this.$game.querySelector("game-modal");
        e.appendChild(document.createElement("game-help"));
        e.setAttribute("open", "");
      }
    }, {
      key : "connectedCallback",
      value : function() {
        var self = this;
        this.shadowRoot.appendChild(post.content.cloneNode(true));
        this.$game = this.shadowRoot.querySelector("#game");
        this.$board = this.shadowRoot.querySelector("#board");
        this.$keyboard = this.shadowRoot.querySelector("game-keyboard");
        this.sizeBoard();
        if (!this.lastPlayedTs) {
          setTimeout(function() {
            return self.showHelpModal();
          }, 100);
        }
        /** @type {number} */
        var prop = 0;
        for (; prop < 6; prop++) {
          /** @type {!Element} */
          var model = document.createElement("game-row");
          model.setAttribute("letters", this.boardState[prop]);
          model.setAttribute("length", 5);
          if (this.evaluations[prop]) {
            model.evaluation = this.evaluations[prop];
          }
          this.$board.appendChild(model);
        }
        this.$game.addEventListener("game-key-press", function(sender) {
          var s = sender.detail.key;
          if ("←" === s || "Backspace" === s) {
            self.removeLetter();
          } else {
            if ("↵" === s || "Enter" === s) {
              self.submitGuess();
            } else {
              if (choices.includes(s.toLowerCase())) {
                self.addLetter(s.toLowerCase());
              }
            }
          }
        });
        this.$game.addEventListener("game-last-tile-revealed-in-row", function(event) {
          self.$keyboard.letterEvaluations = self.letterEvaluations;
          if (self.rowIndex < 6) {
            /** @type {boolean} */
            self.canInput = true;
          }
          var r = self.$board.querySelectorAll("game-row")[self.rowIndex - 1];
          if ((event.path || event.composedPath && event.composedPath()).includes(r)) {
            if ([CONNECTING, obj].includes(self.gameStatus)) {
              if (self.restoringFromLocalStorage) {
                self.showStatsModal();
              } else {
                if (self.gameStatus === CONNECTING) {
                  r.setAttribute("win", "");
                  self.addToast(pedalboards[self.rowIndex - 1], 2E3);
                }
                if (self.gameStatus === obj) {
                  self.addToast(self.solution.toUpperCase(), 1 / 0);
                }
                setTimeout(function() {
                  self.showStatsModal();
                }, 2500);
              }
            }
            /** @type {boolean} */
            self.restoringFromLocalStorage = false;
          }
        });
        this.shadowRoot.addEventListener("game-setting-change", function(event) {
          var node = event.detail;
          var variableIdentifier = node.name;
          var connection = node.checked;
          var isDisabled = node.disabled;
          switch(variableIdentifier) {
            case "hard-mode":
              return void(isDisabled ? self.addToast("Hard mode can only be enabled at the start of a round", 1500, true) : (self.hardMode = connection, done({
                hardMode : connection
              })));
          }
        });
        this.shadowRoot.getElementById("settings-button").addEventListener("click", function(a) {
          var body = self.$game.querySelector("game-page");
          /** @type {!Text} */
          var debug = document.createTextNode("Naladki");
          body.appendChild(debug);
          /** @type {!Element} */
          var node = document.createElement("game-settings");
          node.setAttribute("slot", "content");
          node.gameApp = self;
          body.appendChild(node);
          body.setAttribute("open", "");
        });
        this.shadowRoot.getElementById("help-button").addEventListener("click", function(a) {
          var s = self.$game.querySelector("game-page");
          /** @type {!Text} */
          var t = document.createTextNode("Jak huliać");
          s.appendChild(t);
          /** @type {!Element} */
          var container = document.createElement("game-help");
          container.setAttribute("page", "");
          container.setAttribute("slot", "content");
          s.appendChild(container);
          s.setAttribute("open", "");
        });
        this.shadowRoot.getElementById("statistics-button").addEventListener("click", function(a) {
          self.showStatsModal();
        });
        window.addEventListener("resize", this.sizeBoard.bind(this));
      }
    }, {
      key : "disconnectedCallback",
      value : function() {
      }
    }, {
      key : "debugTools",
      value : function() {
        var i = this;
        this.shadowRoot.getElementById("debug-tools").appendChild(form.content.cloneNode(true));
        this.shadowRoot.getElementById("toast").addEventListener("click", function(a) {
          i.addToast("hello world");
        });
        this.shadowRoot.getElementById("modal").addEventListener("click", function(a) {
          var s = i.$game.querySelector("game-modal");
          /** @type {string} */
          s.textContent = "hello plz";
          s.setAttribute("open", "");
        });
        this.shadowRoot.getElementById("reveal").addEventListener("click", function() {
          i.evaluateRow();
        });
        this.shadowRoot.getElementById("shake").addEventListener("click", function() {
          i.$board.querySelectorAll("game-row")[i.rowIndex].setAttribute("invalid", "");
        });
        this.shadowRoot.getElementById("bounce").addEventListener("click", function() {
          var context = i.$board.querySelectorAll("game-row")[i.rowIndex - 1];
          if ("" === context.getAttribute("win")) {
            context.removeAttribute("win");
          } else {
            context.setAttribute("win", "");
          }
        });
      }
    }]), init;
  }(register(HTMLElement));
  customElements.define("game-app", DialogElement);
  /** @type {!Element} */
  var tabs = document.createElement("template");
  /** @type {string} */
  tabs.innerHTML = "\n  <style>\n    .overlay {\n      display: none;\n      position: absolute;\n      width: 100%;\n      height: 100%;\n      top: 0;\n      left: 0;\n      justify-content: center;\n      align-items: center;\n      background-color: var(--opacity-50);\n      z-index: ".concat(3E3, ';\n    }\n\n    :host([open]) .overlay {\n      display: flex;\n    }\n\n    .content {\n      position: relative;\n      border-radius: 8px;\n      border: 1px solid var(--color-tone-6);\n      background-color: var(--modal-content-bg);\n      color: var(--color-tone-1);\n      box-shadow: 0 4px 23px 0 rgba(0, 0, 0, 0.2);\n      width: 90%;\n      max-height: 90%;\n      overflow-y: auto;\n      animation: SlideIn 200ms;\n      max-width: var(--game-max-width);\n      padding: 16px;\n      box-sizing: border-box;\n    }\n\n    .content.closing {\n      animation: SlideOut 200ms;\n    }\n\n    .close-icon {\n      width: 24px;\n      height: 24px;\n      position: absolute;\n      top: 16px;\n      right: 16px;\n    }\n\n    game-icon {\n      position: fixed;\n      user-select: none;\n      cursor: pointer;\n    }\n\n    @keyframes SlideIn {\n      0% {\n        transform: translateY(30px);\n        opacity: 0;\n      }\n      100% {\n        transform: translateY(0px);\n        opacity: 1;\n      }\n    }\n    @keyframes SlideOut {\n      0% {\n        transform: translateY(0px);\n        opacity: 1;\n      }\n      90% {\n        opacity: 0;\n      }\n      100% {\n        opacity: 0;\n        transform: translateY(60px);\n      }\n    }\n  </style>\n  <div class="overlay">\n    <div class="content">\n      <slot></slot>\n      <div class="close-icon">\n        <game-icon icon="close"></game-icon>\n      </div>\n    </div>\n  </div>\n');
  var XBabel2 = function(e) {
    /**
     * @return {?}
     */
    function update() {
      var e;
      return log(this, update), (e = api.call(this)).attachShadow({
        mode : "open"
      }), e;
    }
    on(update, e);
    var api = makeRequest(update);
    return trigger(update, [{
      key : "connectedCallback",
      value : function() {
        var menu = this;
        this.shadowRoot.appendChild(tabs.content.cloneNode(true));
        this.addEventListener("click", function(a) {
          menu.shadowRoot.querySelector(".content").classList.add("closing");
        });
        this.shadowRoot.addEventListener("animationend", function(css) {
          if ("SlideOut" === css.animationName) {
            menu.shadowRoot.querySelector(".content").classList.remove("closing");
            menu.removeChild(menu.firstChild);
            menu.removeAttribute("open");
          }
        });
      }
    }]), update;
  }(register(HTMLElement));
  customElements.define("game-modal", XBabel2);
  /** @type {!Element} */
  var fragment = document.createElement("template");
  /** @type {string} */
  fragment.innerHTML = "\n  <style>\n  :host {\n    height: var(--keyboard-height);\n  }\n  #keyboard {\n    margin: 0 8px;\n    user-select: none;\n  }\n  \n  .row {\n    display: flex;\n    width: 100%;\n    margin: 0 auto 8px;\n    /* https://stackoverflow.com/questions/46167604/ios-html-disable-double-tap-to-zoom */\n    touch-action: manipulation;\n  }\n  \n  button {\n    font-family: inherit;\n    font-weight: bold;\n    border: 0;\n    padding: 0;\n    margin: 0 6px 0 0;\n    height: 58px;\n    border-radius: 4px;\n    cursor: pointer;\n    user-select: none;\n    background-color: var(--key-bg);\n    color: var(--key-text-color);\n    flex: 1;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    text-transform: uppercase;\n    -webkit-tap-highlight-color: rgba(0,0,0,0.3);\n  }\n\n  button:focus {\n    outline: none;\n  }\n\n  button.fade {\n    transition: background-color 0.1s ease, color 0.1s ease;\n  }\n  \n  button:last-of-type {\n    margin: 0;\n  }\n  \n  .half {\n    flex: 0.5;\n  }\n  \n  .one {\n    flex: 1;\n  }\n\n  .one-and-a-half {\n    flex: 1.5;\n    font-size: 12px;\n  }\n  \n  .two {\n    flex: 2;\n  }\n\n  button[data-state='correct'] {\n    background-color: var(--key-bg-correct);\n    color: var(--key-evaluated-text-color);\n  }\n\n  button[data-state='present'] {\n    background-color: var(--key-bg-present);\n    color: var(--key-evaluated-text-color);\n  }\n\n  button[data-state='absent'] {\n    background-color: var(--key-bg-absent);\n    color: var(--key-evaluated-text-color);\n  }\n\n  </style>\n  <div id=\"keyboard\"></div>\n";
  /** @type {!Element} */
  var templateNode = document.createElement("template");
  /** @type {string} */
  templateNode.innerHTML = "\n  <button>key</button>\n";
  /** @type {!Element} */
  var _temp = document.createElement("template");
  /** @type {string} */
  _temp.innerHTML = '\n  <div></div>\n';
  /** @type {!Array} */
  var pipelets = [["ś", "š", "e", "r", "t", "y", "u", "i", "o", "p", "ŭ", "←"], ["a", "s", "d", "f", "ć", "h", "j", "k", "l", "ĺ"], ["↵", "z", "ž", "ź", "c", "č", "v", "b", "n", "ń", "m"]];
  var XDefined = function(e) {
    /**
     * @return {?}
     */
    function update() {
      var element;
      return log(this, update), callback(set(element = api.call(this)), "_letterEvaluations", {}), element.attachShadow({
        mode : "open"
      }), element;
    }
    on(update, e);
    var api = makeRequest(update);
    return trigger(update, [{
      key : "letterEvaluations",
      set : function(data) {
        /** @type {!Object} */
        this._letterEvaluations = data;
        this._render();
      }
    }, {
      key : "dispatchKeyPressEvent",
      value : function(e) {
        this.dispatchEvent(new CustomEvent("game-key-press", {
          bubbles : true,
          composed : true,
          detail : {
            key : e
          }
        }));
      }
    }, {
      key : "connectedCallback",
      value : function() {
        var base = this;
        this.shadowRoot.appendChild(fragment.content.cloneNode(true));
        this.$keyboard = this.shadowRoot.getElementById("keyboard");
        this.$keyboard.addEventListener("click", function(event) {
          var el = event.target.closest("button");
          if (el && base.$keyboard.contains(el)) {
            base.dispatchKeyPressEvent(el.dataset.key);
          }
        });
        window.addEventListener("keydown", function(event) {
          if (true !== event.repeat) {
            var s = event.key;
            /** @type {boolean} */
            var meta = event.metaKey;
            /** @type {boolean} */
            var ctrlPressed = event.ctrlKey;
            if (!(meta || ctrlPressed)) {
              if (choices.includes(s.toLowerCase()) || "Backspace" === s || "Enter" === s) {
                base.dispatchKeyPressEvent(s);
              }
            }
          }
        });
        this.$keyboard.addEventListener("transitionend", function(event) {
          var el = event.target.closest("button");
          if (el && base.$keyboard.contains(el)) {
            el.classList.remove("fade");
          }
        });
        pipelets.forEach(function(wrappersTemplates) {
          /** @type {!Element} */
          var s = document.createElement("div");
          s.classList.add("row");
          wrappersTemplates.forEach(function(char) {
            var span;

              if ((span = templateNode.content.cloneNode(true).firstElementChild).dataset.key = char, span.textContent = char, "←" === char) {
                /** @type {!Element} */
                var t = document.createElement("game-icon");
                t.setAttribute("icon", "backspace");
                /** @type {string} */
                span.textContent = "";
                span.appendChild(t);
                span.classList.add("one-and-a-half");
              }
              if ("↵" == char) {
                /** @type {string} */
                span.textContent = "uvod";
                span.classList.add("one-and-a-half");
              }

            s.appendChild(span);
          });
          base.$keyboard.appendChild(s);
        });
        this._render();
      }
    }, {
      key : "_render",
      value : function() {
        var i;
        for (i in this._letterEvaluations) {
          var objectDiv = this.$keyboard.querySelector('[data-key="'.concat(i, '"]'));
          objectDiv.dataset.state = this._letterEvaluations[i];
          objectDiv.classList.add("fade");
        }
      }
    }]), update;
  }(register(HTMLElement));
  customElements.define("game-keyboard", XDefined);
  (function() {
    (console.warn || console.log).apply(console, arguments);
  }).bind("[clipboard-polyfill]");
  var dom;
  var list;
  var app;
  var comp;
  /** @type {(Navigator|undefined)} */
  var target = "undefined" == typeof navigator ? void 0 : navigator;
  var clipboard = null == target ? void 0 : target.clipboard;
  if (!(null === (dom = null == clipboard ? void 0 : clipboard.read) || void 0 === dom)) {
    dom.bind(clipboard);
  }
  if (!(null === (list = null == clipboard ? void 0 : clipboard.readText) || void 0 === list)) {
    list.bind(clipboard);
  }
  var renderMachines = (null === (app = null == clipboard ? void 0 : clipboard.write) || void 0 === app || app.bind(clipboard), null === (comp = null == clipboard ? void 0 : clipboard.writeText) || void 0 === comp ? void 0 : comp.bind(clipboard));
  /** @type {(Window|undefined)} */
  var _a = "undefined" == typeof window ? void 0 : window;
  /** @type {(Window|undefined)} */
  var state = (null == _a || _a.ClipboardItem, _a);
  /**
   * @return {undefined}
   */
  var e = function() {
    /** @type {boolean} */
    this.success = false;
  };
  /** @type {!Element} */
  var $template = document.createElement("template");
  /** @type {string} */
  $template.innerHTML = '\n  <style>\n    .container {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      justify-content: center;\n      padding: 16px 0; \n    }\n    h1 {\n      font-weight: 700;\n      font-size: 16px;\n      letter-spacing: 0.5px;\n      text-transform: uppercase;\n      text-align: center;\n      margin-bottom: 10px;\n    }\n  \n    #statistics {\n      display: flex;\n      margin-bottom: \n    }\n\n    .statistic-container {\n      flex: 1;\n    }\n\n    .statistic-container .statistic {\n      font-size: 36px;\n      font-weight: 400;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      text-align: center;\n      letter-spacing: 0.05em;\n      font-variant-numeric: proportional-nums;\n    }\n\n    .statistic.timer {\n      font-variant-numeric: initial;\n    }\n\n    .statistic-container .label {\n      font-size: 12px;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      text-align: center;\n    }\n\n    #guess-distribution {\n      width: 80%;\n    }\n\n    .graph-container {\n      width: 100%;\n      height: 20px;\n      display: flex;\n      align-items: center;\n      padding-bottom: 4px;\n      font-size: 14px;\n      line-height: 20px;\n    }\n\n    .graph-container .graph {\n      width: 100%;\n      height: 100%;\n      padding-left: 4px;\n    }\n\n    .graph-container .graph .graph-bar {\n      height: 100%;\n      /* Assume no wins */\n      width: 0%;\n      position: relative;\n      background-color: var(--color-absent);\n      display: flex;\n      justify-content: center;\n    }\n\n    .graph-container .graph .graph-bar.highlight {\n      background-color: var(--color-correct);\n    }\n\n    .graph-container .graph .graph-bar.align-right {\n      justify-content: flex-end;\n      padding-right: 8px;\n    }\n\n    .graph-container .graph .num-guesses {\n      font-weight: bold;\n      color: var(--tile-text-color);\n    }\n\n    #statistics,\n    #guess-distribution {\n      padding-bottom: 10px;\n    }\n\n    .footer {\n      display: flex;\n      width: 100%;\n    }\n\n    .countdown {\n      border-right: 1px solid var(--color-tone-1);\n      padding-right: 12px;\n      width: 50%;\n    }\n\n    .share {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      padding-left: 12px;\n      width: 50%;\n    }\n\n    .no-data {\n      text-align: center;\n    }\n\n    button#share-button {\n      background-color: var(--key-bg-correct);\n      color: var(--key-evaluated-text-color);\n      font-family: inherit;\n      font-weight: bold;\n      border-radius: 4px;\n      cursor: pointer;\n      border: none;\n      user-select: none;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      text-transform: uppercase;\n      -webkit-tap-highlight-color: rgba(0,0,0,0.3);\n      width: 80%;\n      font-size: 12px;\n      height: 52px;\n      -webkit-filter: brightness(100%);\n    }\n    button#share-button:hover {\n      opacity: 0.9;\n    }\n    button#share-button game-icon {\n      width: 24px;\n      height: 24px;\n      padding-left: 8px;\n    }\n  </style>\n\n  <div class="container">\n    <h1>Statystyka</h1>\n    <div id="statistics"></div>\n    <h1>Historyja huĺniaŭ</h1>\n    <div id="guess-distribution"></div>\n    <div class="footer"></div>\n  </div>\n';
  /** @type {!Element} */
  var tpl = document.createElement("template");
  /** @type {string} */
  tpl.innerHTML = '\n  <div class="statistic-container">\n    <div class="statistic"></div>\n    <div class="label"></div>\n  </div>\n';
  /** @type {!Element} */
  var container = document.createElement("template");
  /** @type {string} */
  container.innerHTML = '\n    <div class="graph-container">\n      <div class="guess"></div>\n      <div class="graph">\n        <div class="graph-bar">\n          <div class="num-guesses">\n        </div>\n      </div>\n      </div>\n    </div>\n';
  /** @type {!Element} */
  var cached = document.createElement("template");
  /** @type {string} */
  cached.innerHTML = '\n  <div class="countdown">\n    <h1>Nastupny ŬORDL</h1>\n    <div id="timer">\n      <div class="statistic-container">\n        <div class="statistic timer">\n          <countdown-timer></countdown-timer>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class="share">\n    <button id="share-button">\n      Zachavać vynik\n    </button>\n  </div>\n';
  var dragitemhomes = {
    currentStreak : "Biahučaja sieryja",
    maxStreak : "Najliepšaja sieryja",
    winPercentage : "% pieramoh",
    gamesPlayed : "Usiaho huĺniaŭ",
    gamesWon : "Pieramoh",
    averageGuesses : "Siaredniaja koĺkasć sprobaŭ"
  };
  var XProgressbarElement = function(e) {
    /**
     * @return {?}
     */
    function update() {
      var self;
      return log(this, update), callback(set(self = api.call(this)), "stats", {}), callback(set(self), "gameApp", void 0), self.attachShadow({
        mode : "open"
      }), self.stats = deepClone(), self;
    }
    on(update, e);
    var api = makeRequest(update);
    return trigger(update, [{
      key : "connectedCallback",
      value : function() {
        var self = this;
        this.shadowRoot.appendChild($template.content.cloneNode(true));
        var years = this.shadowRoot.getElementById("statistics");
        var overlay = this.shadowRoot.getElementById("guess-distribution");
        /** @type {number} */
        var total = Math.max.apply(Math, toArray(Object.values(this.stats.guesses)));
        if (Object.values(this.stats.guesses).every(function(canCreateDiscussions) {
          return 0 === canCreateDiscussions;
        })) {
          /** @type {!Element} */
          var cursor = document.createElement("div");
          cursor.classList.add("no-data");
          /** @type {string} */
          cursor.innerText = "Niama dadzienych!";
          overlay.appendChild(cursor);
        } else {
          /** @type {number} */
          var i = 1;
          for (; i < Object.keys(this.stats.guesses).length; i++) {
            /** @type {number} */
            var funcCode = i;
            var v = this.stats.guesses[i];
            var fragment = container.content.cloneNode(true);
            /** @type {number} */
            var x = Math.max(7, Math.round(v / total * 100));
            /** @type {number} */
            fragment.querySelector(".guess").textContent = funcCode;
            var visualsElement = fragment.querySelector(".graph-bar");
            if (visualsElement.style.width = "".concat(x, "%"), "number" == typeof v) {
              fragment.querySelector(".num-guesses").textContent = v;
              if (v > 0) {
                visualsElement.classList.add("align-right");
              }
              /** @type {number} */
              var t = parseInt(this.getAttribute("highlight-guess"), 10);
              if (t && i === t) {
                visualsElement.classList.add("highlight");
              }
            }
            overlay.appendChild(fragment);
          }
        }
        if (["gamesPlayed", "winPercentage", "currentStreak", "maxStreak"].forEach(function(x) {
          var dragitemhome = dragitemhomes[x];
          var subwiki = self.stats[x];
          var span = tpl.content.cloneNode(true);
          span.querySelector(".label").textContent = dragitemhome;
          span.querySelector(".statistic").textContent = subwiki;
          years.appendChild(span);
        }), this.gameApp.gameStatus !== exitCode) {
          var tableRowElementOne = this.shadowRoot.querySelector(".footer");
          var tableDataCellElementOne = cached.content.cloneNode(true);
          tableRowElementOne.appendChild(tableDataCellElementOne);
          this.shadowRoot.querySelector("button#share-button").addEventListener("click", function(event) {
            event.preventDefault();
            event.stopPropagation();
            render(function(data) {
              var a = data.evaluations;
              var datas = data.dayOffset;
              var val = data.rowIndex;
              var currentAnime = data.isHardMode;
              /** @type {boolean} */
              var active = data.isWin;
              /** @type {*} */
              var element = JSON.parse(window.localStorage.getItem(shop_id));
              /** @type {*} */
              var i = JSON.parse(window.localStorage.getItem(STORE_ID));
              /** @type {string} */
              var level = "Bielaruski UORDL ".concat(datas);
              /** @type {string} */
              level = level + " ".concat(active ? val : "X", "/").concat(6);
              if (currentAnime) {
                /** @type {string} */
                level = level + "*";
              }
              /** @type {string} */
              var url = "";
              return a.forEach(function(wrappersTemplates) {
                if (wrappersTemplates) {
                  wrappersTemplates.forEach(function(type) {
                    if (type) {
                      /** @type {string} */
                      var p = "";
                      switch(type) {
                        case correctLetter:
                          p = function(aRoundNumber) {
                            return aRoundNumber ? String.fromCodePoint("0x1F7E7") : String.fromCodePoint("0x1F7E9");
                          }(i);
                          break;
                        case c:
                          p = function(aRoundNumber) {
                            return aRoundNumber ? String.fromCodePoint("0x1F7E6") : String.fromCodePoint("0x1F7E8");
                          }(i);
                          break;
                        case bytes:
                          p = function(suppressDisabledCheck) {
                            return suppressDisabledCheck ? String.fromCodePoint("0x2B1B") : String.fromCodePoint("0x2B1C");
                          }(element);
                      }
                      url = url + p;
                    }
                  });
                  url = url + "\n";
                }
              }), {
                text : "".concat(level, "\n\n").concat(url.trimEnd()).concat("\n\n#uordl\n\n").concat("https://demidov91.github.io/wordle-by-lac/?t=2")
              };
            }({
              evaluations : self.gameApp.evaluations,
              dayOffset : self.gameApp.dayOffset,
              rowIndex : self.gameApp.rowIndex,
              isHardMode : self.gameApp.hardMode,
              isWin : self.gameApp.gameStatus === CONNECTING
            }), function() {
              self.gameApp.addToast("Vynik skapiravany!", 2E3, true);
            }, function() {
              self.gameApp.addToast("Nie atrymalasia padzialicca vynikam", 2E3, true);
            });
          });
        }
      }
    }]), update;
  }(register(HTMLElement));
  customElements.define("game-stats", XProgressbarElement);
  /** @type {!Element} */
  var result = document.createElement("template");
  /** @type {string} */
  result.innerHTML = '\n  <style>\n    :host {\n    }\n    .container {\n      display: flex;\n      justify-content: space-between;\n    }\n    .switch {\n      height: 20px;\n      width: 32px;\n      vertical-align: middle;\n      /* not quite right */\n      background: var(--color-tone-3);\n      border-radius: 999px;\n      display: block;\n      position: relative;\n    }\n    .knob {\n      display: block;\n      position: absolute;\n      left: 2px;\n      top: 2px;\n      height: calc(100% - 4px);\n      width: 50%;\n      border-radius: 8px;\n      background: var(--white);\n      transform: translateX(0);\n      transition: transform 0.3s;\n    }\n    :host([checked]) .switch {\n      background: var(--color-correct);\n    }\n    :host([checked]) .knob {\n      transform: translateX(calc(100% - 4px));\n    }\n    :host([disabled]) .switch {\n      opacity: 0.5;\n    }\n  </style>\n  <div class="container">\n    <label><slot></slot></label>\n    <div class="switch">\n      <span class="knob"></div>\n    </div>\n  </div>\n';
  var XBabel = function(e) {
    /**
     * @return {?}
     */
    function update() {
      var e;
      return log(this, update), (e = api.call(this)).attachShadow({
        mode : "open"
      }), e;
    }
    on(update, e);
    var api = makeRequest(update);
    return trigger(update, [{
      key : "connectedCallback",
      value : function() {
        var checkbox = this;
        this.shadowRoot.appendChild(result.content.cloneNode(true));
        this.shadowRoot.querySelector(".container").addEventListener("click", function(event) {
          event.stopPropagation();
          if (checkbox.hasAttribute("checked")) {
            checkbox.removeAttribute("checked");
          } else {
            checkbox.setAttribute("checked", "");
          }
          checkbox.dispatchEvent(new CustomEvent("game-switch-change", {
            bubbles : true,
            composed : true,
            detail : {
              name : checkbox.getAttribute("name"),
              checked : checkbox.hasAttribute("checked"),
              disabled : checkbox.hasAttribute("disabled")
            }
          }));
        });
      }
    }], [{
      key : "observedAttributes",
      get : function() {
        return ["checked"];
      }
    }]), update;
  }(register(HTMLElement));
  customElements.define("game-switch", XBabel);
  /** @type {!Element} */
  var element = document.createElement("template");
  /** @type {string} */
  element.innerHTML = '\n  <style>\n  .instructions {\n    font-size: 14px;\n    color: var(--color-tone-1)\n  }\n\n  .examples {\n    border-bottom: 1px solid var(--color-tone-4);\n    border-top: 1px solid var(--color-tone-4);\n  }\n\n  .example {\n    margin-top: 24px;\n    margin-bottom: 24px;\n  }\n\n  game-tile {\n    width: 40px;\n    height: 40px;\n  }\n\n  :host([page]) section {\n    padding: 16px;\n    padding-top: 0px;\n  }\n\n  </style>\n  <section>\n    <div class="instructions">\n      <p>Adhadajcie <strong>ŬORDL</strong> za 6 sprobaŭ.</p>\n      <p>Kožnaja sproba pavinna zmiaščać isnujučaje slova z piaci litar. <strong>Dž, dź, ch</strong> ličacca za dzvie litary, susiedniaja miakka<b><i>ś</i></b>ć nie pieradajecca na piśmie. Litary <strong>G, Ł</strong> nie vykarystoŭvajucca. Nacisnicie kniopku "uvod", kab pacvierdzić sproby.</p>\n <p>Zahadana moža być liubaja čascina movy, alie ŭ pačatkovaj formie, jak u sloŭniku: napryklad, nazoŭny sklon ci infinityŭ.</p>\n     <p>Paslia kožnaj zdahadki kolier plitki zmienicca, kab pakazać, nakoĺki vaša zdahadka byla blizkaj da slova.</p>\n      <div class="examples">\n        <p><strong>Pryklady</strong></p>\n        <div class="example">\n          <div class="row">\n            <game-tile letter="h" evaluation="correct" reveal></game-tile>\n            <game-tile letter="a"></game-tile>\n            <game-tile letter="r"></game-tile>\n            <game-tile letter="a"></game-tile>\n            <game-tile letter="ž"></game-tile>\n          </div>\n          <p>Litara <strong>H</strong> josć u slovie i znachodzicca na praviĺnym miescy.</p>\n        </div>\n        <div class="example">\n          <div class="row">\n            <game-tile letter="s"></game-tile>\n            <game-tile letter="v" evaluation="present" reveal></game-tile>\n            <game-tile letter="i"></game-tile>\n            <game-tile letter="e"></game-tile>\n            <game-tile letter="t"></game-tile>\n          </div>\n          <p>Litara <strong>V</strong> josć u slovie, alie znachodzicca na inšym miescy.</p>\n        </div>\n        <div class="example">\n          <div class="row">\n            <game-tile letter="l"></game-tile>\n            <game-tile letter="a"></game-tile>\n            <game-tile letter="v"></game-tile>\n            <game-tile letter="i"></game-tile>\n            <game-tile letter="ć"  evaluation="absent" reveal></game-tile>\n          </div>\n          <p>Litary <strong>Ć</strong> zusim niama ŭ slovie.</p>\n        </div>\n      </div>\n      <p><strong>Novy ŬORDL zjaŭliajecca kožny dzień!</strong></p>\n    </div>\n  </section>\n';
  var XDrawerElement = function(e) {
    /**
     * @return {?}
     */
    function update() {
      var e;
      return log(this, update), (e = api.call(this)).attachShadow({
        mode : "open"
      }), e;
    }
    on(update, e);
    var api = makeRequest(update);
    return trigger(update, [{
      key : "connectedCallback",
      value : function() {
        this.shadowRoot.appendChild(element.content.cloneNode(true));
      }
    }]), update;
  }(register(HTMLElement));
  customElements.define("game-help", XDrawerElement);
  /** @type {!Element} */
  var template = document.createElement("template");
  /** @type {string} */
  template.innerHTML = "\n  <style>\n    .overlay {\n      display: none;\n      position: absolute;\n      width: 100%;\n      height: 100%;\n      top: 0;\n      left: 0;\n      justify-content: center;\n      background-color: var(--color-background);\n      animation: SlideIn 100ms linear;\n      z-index: ".concat(2E3, ';\n    }\n\n    :host([open]) .overlay {\n      display: flex;\n    }\n\n    .content {\n      position: relative;\n      color: var(--color-tone-1);\n      padding: 0 32px;\n      max-width: var(--game-max-width);\n      width: 100%;\n      overflow-y: auto;\n      height: 100%;\n      display: flex;\n      flex-direction: column;\n    }\n\n    .content-container {\n      height: 100%;\n    }\n\n    .overlay.closing {\n      animation: SlideOut 150ms linear;\n    }\n\n    header {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      position: relative;\n    }\n\n    h1 {\n      font-weight: 700;\n      font-size: 16px;\n      letter-spacing: 0.5px;\n      text-transform: uppercase;\n      text-align: center;\n      margin-bottom: 10px;\n    }\n\n    game-icon {\n      position: absolute;\n      right: 0;\n      user-select: none;\n      cursor: pointer;\n    }\n\n    @media only screen and (min-device-width : 320px) and (max-device-width : 480px) {\n      .content {\n        max-width: 100%;\n        padding: 0;\n      }\n      game-icon {\n        padding: 0 16px;\n      }\n    }\n\n    @keyframes SlideIn {\n      0% {\n        transform: translateY(30px);\n        opacity: 0;\n      }\n      100% {\n        transform: translateY(0px);\n        opacity: 1;\n      }\n    }\n    @keyframes SlideOut {\n      0% {\n        transform: translateY(0px);\n        opacity: 1;\n      }\n      90% {\n        opacity: 0;\n      }\n      100% {\n        opacity: 0;\n        transform: translateY(60px);\n      }\n    }\n  </style>\n  <div class="overlay">\n    <div class="content">\n      <header>\n        <h1><slot></slot></h1>\n        <game-icon icon="close"></game-icon>\n      </header>\n      <div class="content-container">\n        <slot name="content"></slot>\n      </div>\n    </div>\n  </div>\n');
  var XCheckboxElement = function(e) {
    /**
     * @return {?}
     */
    function update() {
      var e;
      return log(this, update), (e = api.call(this)).attachShadow({
        mode : "open"
      }), e;
    }
    on(update, e);
    var api = makeRequest(update);
    return trigger(update, [{
      key : "connectedCallback",
      value : function() {
        var menu = this;
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.shadowRoot.querySelector("game-icon").addEventListener("click", function(a) {
          menu.shadowRoot.querySelector(".overlay").classList.add("closing");
        });
        this.shadowRoot.addEventListener("animationend", function(css) {
          if ("SlideOut" === css.animationName) {
            menu.shadowRoot.querySelector(".overlay").classList.remove("closing");
            Array.from(menu.childNodes).forEach(function(a) {
              menu.removeChild(a);
            });
            menu.removeAttribute("open");
          }
        });
      }
    }]), update;
  }(register(HTMLElement));
  customElements.define("game-page", XCheckboxElement);
  /** @type {!Element} */
  var templateElement = document.createElement("template");
  /** @type {string} */
  templateElement.innerHTML = '\n  <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">\n    <path fill=var(--color-tone-3) />\n  </svg>\n';
  var opts = {
    help : "M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z",
    settings : "M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z",
    backspace : "M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H7.07L2.4 12l4.66-7H22v14zm-11.59-2L14 13.41 17.59 17 19 15.59 15.41 12 19 8.41 17.59 7 14 10.59 10.41 7 9 8.41 12.59 12 9 15.59z",
    close : "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z",
    share : "M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92c0-1.61-1.31-2.92-2.92-2.92zM18 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM6 13c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm12 7.02c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z",
    statistics : "M16,11V3H8v6H2v12h20V11H16z M10,5h4v14h-4V5z M4,11h4v8H4V11z M20,19h-4v-6h4V19z"
  };
  var XThrobberElement = function(e) {
    /**
     * @return {?}
     */
    function update() {
      var e;
      return log(this, update), (e = api.call(this)).attachShadow({
        mode : "open"
      }), e;
    }
    on(update, e);
    var api = makeRequest(update);
    return trigger(update, [{
      key : "connectedCallback",
      value : function() {
        this.shadowRoot.appendChild(templateElement.content.cloneNode(true));
        var index = this.getAttribute("icon");
        this.shadowRoot.querySelector("path").setAttribute("d", opts[index]);
        if ("backspace" === index) {
          this.shadowRoot.querySelector("path").setAttribute("fill", "var(--color-tone-1)");
        }
        if ("share" === index) {
          this.shadowRoot.querySelector("path").setAttribute("fill", "var(--white)");
        }
      }
    }]), update;
  }(register(HTMLElement));
  customElements.define("game-icon", XThrobberElement);
  /** @type {!Element} */
  var s = document.createElement("template");
  /** @type {string} */
  s.innerHTML = '\n  <div id="timer"></div>\n';
  /** @type {number} */
  var msDay = 6E4;
  /** @type {number} */
  var msMonth = 36E5;
  var XIconElement = function(e) {
    /**
     * @return {?}
     */
    function update() {
      var self;
      log(this, update);
      callback(set(self = config.call(this)), "targetEpochMS", void 0);
      callback(set(self), "intervalId", void 0);
      callback(set(self), "$timer", void 0);
      self.attachShadow({
        mode : "open"
      });
      /** @type {!Date} */
      var restart = new Date;
      return restart.setDate(restart.getDate() + 1), restart.setHours(0, 0, 0, 0), self.targetEpochMS = restart.getTime(), self;
    }
    on(update, e);
    var config = makeRequest(update);
    return trigger(update, [{
      key : "padDigit",
      value : function(funcToEval) {
        return funcToEval.toString().padStart(2, "0");
      }
    }, {
      key : "updateTimer",
      value : function() {
        var funcCode;
        /** @type {number} */
        var lastKeyWidth = (new Date).getTime();
        /** @type {number} */
        var ms = Math.floor(this.targetEpochMS - lastKeyWidth);
        if (ms <= 0) {
          /** @type {string} */
          funcCode = "00:00:00";
        } else {
          /** @type {number} */
          var activeTicketIds = Math.floor(ms % 864E5 / msMonth);
          /** @type {number} */
          var objectsExpand = Math.floor(ms % msMonth / msDay);
          /** @type {number} */
          var subVariant = Math.floor(ms % msDay / 1E3);
          /** @type {string} */
          funcCode = "".concat(this.padDigit(activeTicketIds), ":").concat(this.padDigit(objectsExpand), ":").concat(this.padDigit(subVariant));
        }
        /** @type {string} */
        this.$timer.textContent = funcCode;
      }
    }, {
      key : "connectedCallback",
      value : function() {
        var self = this;
        this.shadowRoot.appendChild(s.content.cloneNode(true));
        this.$timer = this.shadowRoot.querySelector("#timer");
        /** @type {number} */
        this.intervalId = setInterval(function() {
          self.updateTimer();
        }, 200);
      }
    }, {
      key : "disconnectedCallback",
      value : function() {
        clearInterval(this.intervalId);
      }
    }]), update;
  }(register(HTMLElement));
  return customElements.define("countdown-timer", XIconElement), exports.CountdownTimer = XIconElement, exports.GameApp = DialogElement, exports.GameHelp = XDrawerElement, exports.GameIcon = XThrobberElement, exports.GameKeyboard = XDefined, exports.GameModal = XBabel2, exports.GamePage = XCheckboxElement, exports.GameRow = cls, exports.GameSettings = XelDemoElement, exports.GameStats = XProgressbarElement, exports.GameSwitch = XBabel, exports.GameThemeManager = SorTable, exports.GameTile = Class, 
  exports.GameToast = ActionSheetButtonElement, Object.defineProperty(exports, "__esModule", {
    value : true
  }), exports;
}({});
