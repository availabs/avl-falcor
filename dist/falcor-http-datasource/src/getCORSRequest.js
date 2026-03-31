"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _xhr = _interopRequireDefault(require("xhr2"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
//import xhr from 'xmlhttprequest'

'use strict';
function getXMLHttpRequest() {
  return new _xhr["default"]();
}
;
var _default = exports["default"] = getXMLHttpRequest;
/*'use strict';
// Get CORS support even for older IE
function getCORSRequest() {
    var request = null; 
    if(global.XMLHttpRequest) {
        //browser
        request =  new XMLHttpRequest()
    } else {
        // server
        request = new xhr.XMLHttpRequest()
    }   
    if ('withCredentials' in request) {
        return request;
    } else if (!!global.XDomainRequest) {
        return new XDomainRequest();
    } else {
        throw new Error('CORS is not supported by your browser');
    }
}

export default getCORSRequest*/