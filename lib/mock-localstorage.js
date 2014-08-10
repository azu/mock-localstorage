/**
 * Created by azu on 2014/08/10.
 * LICENSE : MIT
 */
"use strict";
function MockLocalStorage() {
    return createNewMock();
}
function createNewMock() {
    var oStorage = {
    };
    Object.defineProperty(oStorage, "key", {
        value: function (nKeyId) {
            return Object.keys(oStorage)[nKeyId];
        },
        writable: false,
        configurable: false,
        enumerable: false
    });
    Object.defineProperty(oStorage, "getItem", {
        value: function (sKey) {
            var key = sKey + "";
            return (oStorage[key] === null) ? "null" : oStorage[key]
        },
        writable: false,
        configurable: false,
        enumerable: false
    });
    Object.defineProperty(oStorage, "setItem", {
        value: function (sKey, sValue) {
            if (typeof sValue !== "object") {
                oStorage[escape(sKey)] = sValue + "";
            } else {
                oStorage[escape(sKey)] = sValue;
            }
        },
        writable: false,
        configurable: false,
        enumerable: false
    });
    Object.defineProperty(oStorage, "removeItem", {
        value: function (sKey) {
            if (!sKey) {
                return;
            }
            delete oStorage[escape(sKey)]
        },
        writable: false,
        configurable: false,
        enumerable: false
    });
    Object.defineProperty(oStorage, "length", {
        get: function () {
            return  Object.keys(oStorage).length;
        },
        configurable: false,
        enumerable: false
    });
    Object.defineProperty(oStorage, "clear", {
        value: function () {
            Object.keys(oStorage).forEach(function (key) {

                delete oStorage[escape(key)];
            });
        },
        writable: false,
        configurable: false,
        enumerable: false
    });
    return oStorage;
}


module.exports = MockLocalStorage;
