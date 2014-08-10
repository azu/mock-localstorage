/**
 * Created by azu on 2014/08/10.
 * LICENSE : MIT
 */
"use strict";
var assert = require("power-assert");
var MockLocalStorage = require("../");
// getItem
describe("getItem", function () {
    var localStorage;
    before(function () {
        localStorage = new MockLocalStorage();
    });
    it("0", function () {
        localStorage.clear();
        localStorage.setItem("undefined", "foo");
        localStorage.setItem("null", "bar");
        localStorage.setItem("", "baz");
    });
    it("1", function () {
        assert.equal(localStorage.length, 3);
    }, "All 3 items should be added.");
    it("2", function () {
        assert.equal(localStorage["unknown"], undefined, "localStorage['unknown']")
        assert.equal(localStorage["undefined"], "foo", "localStorage['undefined']")
        assert.equal(localStorage["null"], "bar", "localStorage['null']")
        assert.equal(localStorage[undefined], "foo", "localStorage[undefined]")
        assert.equal(localStorage[null], "bar", "localStorage[null]")
        assert.equal(localStorage[""], "baz", "localStorage['']")
    }, "array access should be correct");
    it("3", function () {
        assert.equal(localStorage.getItem("undefined"), "foo", "localStorage.getItem('undefined')")
        assert.equal(localStorage.getItem("null"), "bar", "localStorage.getItem('null')")
        assert.equal(localStorage.getItem(undefined), "foo", "localStorage.getItem(undefined)")
        assert.equal(localStorage.getItem(null), "bar", "localStorage.getItem(null)")
        assert.equal(localStorage.getItem(""), "baz", "localStorage.getItem('')")
    }, "getItem should be correct")
});
