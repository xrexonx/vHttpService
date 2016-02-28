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

    var _private = {
        get : function () {
             $http.get(_sUrl, _oData, _oOptions).then(_fnSuccessCallback, _fnErrorCallback);
         },
        post : function () {
             $http.post(_sUrl, _oData, _oOptions).then(_fnSuccessCallback, _fnErrorCallback);
         },
        put : function () {
             $http.put(_sUrl, _oData, _oOptions).then(_fnSuccessCallback, _fnErrorCallback);
         },
        patch : function () {
             $http.patch(_sUrl, _oData, _oOptions).then(_fnSuccessCallback, _fnErrorCallback);
         },
        delete : function () {
             $http.delete(_sUrl, _oData, _oOptions).then(_fnSuccessCallback, _fnErrorCallback);
         },
        jsonp : function () {
             $http.jsonp(_sUrl, _oData, _oOptions).then(_fnSuccessCallback, _fnErrorCallback);
         },
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
                    _private.get();
                    break;
                case 'put':
                    _private.put();
                    break;
                case 'patch':
                    _private.patch();
                    break;
                case 'delete':
                    _private.delete();
                    break;
                case 'jsonp':
                    _private.jsonp();
                    break;
                default:
                     _private.post();
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