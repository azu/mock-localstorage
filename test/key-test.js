/**
 * Created by kjirou on 2015/04/08.
 * LICENSE : MIT
 */
"use strict";
var assert = require("power-assert");
var MockLocalStorage = require("../");
// key
describe("key", function () {
    var localStorage;
    before(function () {
        localStorage = new MockLocalStorage();
    });
    it("0", function () {
        localStorage.clear();
        localStorage.setItem("foo", 1);
        localStorage.setItem("escaped:key", 1);
        var keys = [];
        for (var i = 0; i < localStorage.length; i++) {
          keys.push(localStorage.key(i));
        }
        keys.sort();
        assert.deepEqual(keys, ["escaped:key", "foo"]);
    });
    it("1", function () {
        localStorage.clear();
        assert.equal(localStorage.length, 0);
        assert.strictEqual(localStorage.key(1), null);
    }, 'key should return null if it does not exist');
});
