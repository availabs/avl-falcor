'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function buildQueryObject(url, method, queryData) {
  var qData = [];
  var keys;
  var data = {
    url: url
  };
  var isQueryParamUrl = url.indexOf('?') !== -1;
  var startUrl = isQueryParamUrl ? '&' : '?';
  if (typeof queryData === 'string') {
    qData.push(queryData);
  } else {
    keys = Object.keys(queryData);
    keys.forEach(function (k) {
      var value = _typeof(queryData[k]) === 'object' ? JSON.stringify(queryData[k]) : queryData[k];
      qData.push(k + '=' + encodeURIComponent(value));
    });
  }
  if (method === 'GET') {
    data.url += startUrl + qData.join('&');
  } else {
    data.data = qData.join('&');
  }
  return data;
}
;
var _default = exports["default"] = buildQueryObject;