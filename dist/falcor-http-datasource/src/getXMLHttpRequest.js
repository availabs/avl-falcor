'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _xhr = _interopRequireDefault(require("xhr2"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
'use strict';
function getXMLHttpRequest() {
  return new _xhr["default"]();
}
;
var _default = exports["default"] = getXMLHttpRequest; // 'use strict';
// import xhr from 'xmlhttprequest';
// function getXMLHttpRequest() {
//   var request = new xhr.XMLHttpRequest();
//   request.setDisableHeaderCheck(true);
//   return request;
// };
// export default getXMLHttpRequest