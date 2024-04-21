"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PromiseMap = PromiseMap;
exports.falcorGraph = exports.falcor = void 0;
var _falcor = require("falcor");
var _ModelRoot2 = _interopRequireDefault(require("falcor/lib/ModelRoot"));
var _falcorHttpDatasource = _interopRequireDefault(require("./falcor-http-datasource"));
var _throttle = _interopRequireDefault(require("lodash/throttle"));
var _excluded = ["falcor", "onProgress", "concurrency"],
  _excluded2 = ["index", "placeholder"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); } //import HttpDataSource from 'falcor-http-datasource'
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
      // if (window && window.localStorage) {
      //   const userToken = window.localStorage.getItem('userToken');
      //   if (userToken) {
      //     config.headers['Authorization'] = userToken;
      //   }
      // }
    }
  }]);
}(_falcorHttpDatasource["default"]);
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
  var throttledCB = (0, _throttle["default"])(onProgress, 50);
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
}(_falcor.Model);
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