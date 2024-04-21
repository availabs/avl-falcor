"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _xhr = _interopRequireDefault(require("xhr2"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
'use strict';
function getXMLHttpRequest() {
  return new _xhr["default"]();
}
;
var _default = exports["default"] = getXMLHttpRequest;