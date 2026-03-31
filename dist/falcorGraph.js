"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PromiseMap = PromiseMap;
exports.falcorGraph = exports.falcor = void 0;
var _falcor = _interopRequireDefault(require("falcor"));
var _ModelRoot2 = _interopRequireDefault(require("falcor/lib/ModelRoot"));
var _XMLHttpSource = _interopRequireDefault(require("./falcor-http-datasource/src/XMLHttpSource"));
var _lodashEs = require("lodash-es");
var _excluded = ["falcor", "onProgress", "concurrency"],
  _excluded2 = ["index", "placeholder"];
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _get() { return _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (e, t, r) { var p = _superPropBase(e, t); if (p) { var n = Object.getOwnPropertyDescriptor(p, t); return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value; } }, _get.apply(null, arguments); }
function _superPropBase(t, o) { for (; !{}.hasOwnProperty.call(t, o) && null !== (t = _getPrototypeOf(t));); return t; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
var Model = _falcor["default"].Model;
function PromiseMap(iterable, mapper) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var concurrency = options.concurrency || Infinity;
  var index = 0;
  var results = [];
  var pending = [];
  var iterator = iterable[Symbol.iterator]();
  while (concurrency-- > 0) {
    var thread = wrappedMapper();
    if (thread) pending.push(thread);else break;
  }
  return Promise.all(pending).then(function () {
    return results;
  });
  function wrappedMapper() {
    var next = iterator.next();
    if (next.done) return null;
    var i = index++;
    var mapped = mapper(next.value, i);
    return Promise.resolve(mapped).then(function (resolved) {
      results[i] = resolved;
      return wrappedMapper();
    });
  }
}
var CustomSource = /*#__PURE__*/function (_HttpDataSource) {
  function CustomSource() {
    _classCallCheck(this, CustomSource);
    return _callSuper(this, CustomSource, arguments);
  }
  _inherits(CustomSource, _HttpDataSource);
  return _createClass(CustomSource, [{
    key: "onBeforeRequest",
    value: function onBeforeRequest(config) {
      var _window;
      if (window && (_window = window) !== null && _window !== void 0 && _window.localStorage) {
        var _window$localStorage;
        var userToken = (_window$localStorage = window.localStorage) === null || _window$localStorage === void 0 ? void 0 : _window$localStorage.getItem('userToken');
        if (userToken) {
          config.headers['Authorization'] = userToken;
        }
      }
    }
  }]);
}(_XMLHttpSource["default"]);
function cacheFromStorage() {
  var falcorCache = {};
  // if (localStorage && localStorage.getItem('falcorCache')) {
  //   let token = localStorage.getItem('token')
  //   let user = localStorage.getItem('currentUser')
  //   if (token && user) {
  //     falcorCache = JSON.parse(localStorage.getItem('falcorCache'))
  //   }
  // }
  return falcorCache;
}
var noop = function noop() {};
var chunker = function chunker(values, request) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var _options$placeholder = options.placeholder,
    placeholder = _options$placeholder === void 0 ? "replace_me" : _options$placeholder,
    _options$chunkSize = options.chunkSize,
    chunkSize = _options$chunkSize === void 0 ? 100 : _options$chunkSize;
  var requests = [];
  var _loop = function _loop(n) {
    requests.push(request.map(function (r) {
      return r === placeholder ? values.slice(n, n + chunkSize) : r;
    }));
  };
  for (var n = 0; n < values.length; n += chunkSize) {
    _loop(n);
  }
  return requests.length ? requests : [request];
};
var falcorChunker = function falcorChunker(requests) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var falcor = options.falcor,
    _options$onProgress = options.onProgress,
    onProgress = _options$onProgress === void 0 ? noop : _options$onProgress,
    _options$concurrency = options.concurrency,
    concurrency = _options$concurrency === void 0 ? 5 : _options$concurrency,
    rest = _objectWithoutProperties(options, _excluded);
  var throttledCB = (0, _lodashEs.throttle)(onProgress, 50);
  var progress = 0,
    total = 0;
  var chunks = requests.reduce(function (accum, _ref) {
    var _ref2 = _slicedToArray(_ref, 2),
      val = _ref2[0],
      req = _ref2[1];
    var chunked = chunker(val, req, rest);
    total += chunked.length;
    accum.push.apply(accum, _toConsumableArray(chunked));
    return accum;
  }, []);

  // return chunks
  // .reduce((a, c) => {
  //     return a.then(() => falcor.get(c))
  //       .then(() => {
  //         throttledCB(++progress, total);
  //       });
  //   }, Promise.resolve());

  return PromiseMap(chunks, function (c) {
    return falcor.get(c).then(function () {
      throttledCB(++progress, total);
    });
  }, {
    concurrency: concurrency
  });
};
var getArgs = function getArgs(args) {
  return args.reduce(function (a, c) {
    if (Array.isArray(c)) {
      a[0].push(c);
    } else {
      a[1] = c;
    }
    return a;
  }, [[], {}]);
};
var falcorChunkerNice = function falcorChunkerNice() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  var _getArgs = getArgs(args),
    _getArgs2 = _slicedToArray(_getArgs, 2),
    requests = _getArgs2[0],
    options = _getArgs2[1];
  var _options$index = options.index,
    index = _options$index === void 0 ? null : _options$index,
    _options$placeholder2 = options.placeholder,
    placeholder = _options$placeholder2 === void 0 ? "replace_me" : _options$placeholder2,
    rest = _objectWithoutProperties(options, _excluded2);
  var reduced = requests.reduce(function (a, c) {
    var values = [],
      found = false;
    var request = c.map(function (r, i) {
      if (Array.isArray(r) && r.length && !found && (index === null || index === i)) {
        found = true;
        values = r;
        return placeholder;
      }
      return r;
    });
    a.push([values, request]);
    return a;
  }, []);
  return falcorChunker(reduced, _objectSpread(_objectSpread({}, rest), {}, {
    placeholder: placeholder
  }));
};

// let counter = 0;
var MyModelRoot = /*#__PURE__*/function (_ModelRoot) {
  function MyModelRoot() {
    var _this;
    _classCallCheck(this, MyModelRoot);
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    _this = _callSuper(this, MyModelRoot, [].concat(args));
    _this.listeners = [];
    _this.onChange = _this.onChange.bind(_this);
    _this.listen = _this.listen.bind(_this);
    _this.unlisten = _this.unlisten.bind(_this);
    return _this;
  }
  _inherits(MyModelRoot, _ModelRoot);
  return _createClass(MyModelRoot, [{
    key: "onChange",
    value: function onChange() {
      this.listeners.forEach(function (func) {
        return func();
      });
    }
  }, {
    key: "listen",
    value: function listen(func) {
      if (!this.listeners.includes(func)) {
        this.listeners.push(func);
      }
    }
  }, {
    key: "unlisten",
    value: function unlisten(func) {
      this.listeners = this.listeners.filter(function (f) {
        return f !== func;
      });
    }
  }]);
}(_ModelRoot2["default"]);
var MyModel = /*#__PURE__*/function (_Model) {
  function MyModel() {
    var _this2;
    _classCallCheck(this, MyModel);
    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }
    _this2 = _callSuper(this, MyModel, [].concat(args));
    _this2.onChange = _this2.onChange.bind(_this2);
    _this2.remove = _this2.remove.bind(_this2);
    _this2.chunk = _this2.chunk.bind(_this2);
    return _this2;
  }
  _inherits(MyModel, _Model);
  return _createClass(MyModel, [{
    key: "onChange",
    value: function onChange(listener, func) {
      this._root.listen(listener, func);
    }
  }, {
    key: "remove",
    value: function remove(listener) {
      this._root.unlisten(listener);
    }
  }, {
    key: "get",
    value: function get() {
      var _get2;
      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }
      return (_get2 = _get(_getPrototypeOf(MyModel.prototype), "get", this)).call.apply(_get2, [this].concat(args)).then(function (res) {
        return res;
      });
    }
  }, {
    key: "chunk",
    value: function chunk() {
      for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        args[_key5] = arguments[_key5];
      }
      var _getArgs3 = getArgs(args),
        _getArgs4 = _slicedToArray(_getArgs3, 2),
        requests = _getArgs4[0],
        options = _getArgs4[1];
      return falcorChunkerNice.apply(void 0, _toConsumableArray(requests).concat([_objectSpread({
        falcor: this
      }, options)]));
    }
  }]);
}(Model);
var falcorGraph = exports.falcorGraph = function falcorGraph(API_HOST) {
  return new MyModel({
    _root: new MyModelRoot(),
    source: new CustomSource(API_HOST + '/graph', {
      crossDomain: true,
      withCredentials: false,
      timeout: 120000
    }),
    errorSelector: function errorSelector(path, error) {
      console.log('errorSelector', path, error);
      return error;
    },
    cache: cacheFromStorage()
  });
}; //.batch()

var falcor = exports.falcor = falcorGraph('https://graph.availabs.org');