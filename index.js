/* Simple HTTP Service for Vue.js
 * By Rexon A. De los Reyes
 * MIT Licensed.
 */
var vHttp = (function () {

    var _url = '',
        _methods = 'POST',
        _data = {},
        _successCallback = function () {},
        _errorCallback = function () {},
        _options = {};

    function _get () {
         Vue.http.get(_url, _oData, _options).then(_successCallback, _errorCallback);
    }

    function _post () {
         Vue.http.post(_url, _oData, _options).then(_successCallback, _errorCallback);
    }

    function _put () {
         Vue.http.put(_url, _oData, _options).then(_successCallback, _errorCallback);
    }

    function _patch () {
         Vue.http.patch(_url, _oData, _options).then(_successCallback, _errorCallback);
    }

    function _delete () {
         Vue.http.delete(_url, _oData, _options).then(_successCallback, _errorCallback);
    }

    function _jsonp () {
         Vue.http.jsonp(_url, _oData, _options).then(_successCallback, _errorCallback);
    }

    function _send (url, methods, data, sCb, eCb, opts) {

            _url = url;
            _methods = methods;
            _oData = JSON.stringify(data);
            _successCallback = sCb;
            _errorCallback = eCb;
            _options = opts;

            var type = _methods.toLowerCase();

            switch (type) {
                case 'get':
                    _get();
                    break;
                case 'put':
                    _put();
                    break;
                case 'patch':
                    _patch();
                    break;
                case 'delete':
                    _delete();
                    break;
                case 'jsonp':
                    _jsonp();
                    break;
                default:
                     _post();
                break;
            }
    }

    return {
        send : _send
    }


})();

if (typeof module !== "undefined") {
	module.exports = vHttp;
}