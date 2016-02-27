/* Simple HTTP Service for Vue.js
 * Rexon A. De los Reyes
 * 02262016
 * MIT Licensed.
 */
var vHttp = (function () {

    // Global Vue Http Object; won't be available w/o vue-resource.
    var $http = Vue.http;

    // Property var
    var _sUrl = '',
        _sMethods = 'POST',
        _oData = {},
        _fnSuccessCallback = function () {},
        _fnErrorCallback = function () {},
        _oOptions = {};

    function _get () {
         $http.get(_sUrl, _oData, _oOptions).then(_fnSuccessCallback, _fnErrorCallback);
    }

    function _post () {
         $http.post(_sUrl, _oData, _oOptions).then(_fnSuccessCallback, _fnErrorCallback);
    }

    function _put () {
         $http.put(_sUrl, _oData, _oOptions).then(_fnSuccessCallback, _fnErrorCallback);
    }

    function _patch () {
         $http.patch(_sUrl, _oData, _oOptions).then(_fnSuccessCallback, _fnErrorCallback);
    }

    function _delete () {
         $http.delete(_sUrl, _oData, _oOptions).then(_fnSuccessCallback, _fnErrorCallback);
    }

    function _jsonp () {
         $http.jsonp(_sUrl, _oData, _oOptions).then(_fnSuccessCallback, _fnErrorCallback);
    }

    function _send (url, methods, data, sCb, eCb, opts) {

            _sUrl = url;
            _sMethods = methods;
            _oData = JSON.stringify(data);
            _fnSuccessCallback = sCb;
            _fnErrorCallback = eCb;
            _oOptions = opts;

            var sType = _sMethods.toLowerCase();

            switch (sType) {
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