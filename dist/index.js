"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  useFalcor: true,
  FalcorConsumer: true,
  FalcorProvider: true,
  avlFalcor: true
};
exports.useFalcor = exports.avlFalcor = exports.FalcorProvider = exports.FalcorConsumer = void 0;
var _react = _interopRequireDefault(require("react"));
var _debounce = _interopRequireDefault(require("./debounce"));
var _falcorGraph = require("./falcorGraph");
Object.keys(_falcorGraph).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _falcorGraph[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _falcorGraph[key];
    }
  });
});
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var FalcorContext = /*#__PURE__*/_react["default"].createContext();
var useFalcor = exports.useFalcor = function useFalcor() {
  return _react["default"].useContext(FalcorContext);
};
var FalcorConsumer = exports.FalcorConsumer = FalcorContext.Consumer;
var FalcorProvider = exports.FalcorProvider = function FalcorProvider(_ref) {
  var falcor = _ref.falcor,
    children = _ref.children;
  var _React$useState = _react["default"].useState({}),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    falcorCache = _React$useState2[0],
    setFalcorCache = _React$useState2[1];
  var updateCache = _react["default"].useMemo(function () {
    return (0, _debounce["default"])(function () {
      var cache = falcor.getCache();
      setFalcorCache(cache);
    }, 250);
  }, [falcor]);
  _react["default"].useEffect(function () {
    falcor.onChange(updateCache);
    return function () {
      falcor.remove(updateCache);
    };
  }, [falcor, updateCache]);
  var falcorValue = _react["default"].useMemo(function () {
    return {
      falcor: falcor,
      falcorCache: falcorCache
    };
  }, [falcor, falcorCache]);
  return /*#__PURE__*/_react["default"].createElement(FalcorContext.Provider, {
    value: falcorValue
  }, children);
};
var noMap = function noMap() {
  return {};
};
var avlFalcor = exports.avlFalcor = function avlFalcor(Component) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _options$mapCacheToPr = options.mapCacheToProps,
    mapCacheToProps = _options$mapCacheToPr === void 0 ? noMap : _options$mapCacheToPr;
  return function (props) {
    return /*#__PURE__*/_react["default"].createElement(FalcorContext.Consumer, null, function (falcor) {
      return /*#__PURE__*/_react["default"].createElement(Component, _extends({}, props, falcor, mapCacheToProps(falcor.falcorCache, props)));
    });
  };
};