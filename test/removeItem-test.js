/**
 * Created by azu on 2014/08/10.
 * LICENSE : MIT
 */
"use strict";
var assert = require("power-assert");
var MockLocalStorage = require("../lib/mock-localstorage");
describe("removeItem", function () {
    var localStorage;
    before(function () {
        localStorage = new MockLocalStorage();
    });
    // remove
    it("removeItem", function () {
        localStorage.clear();
        localStorage.setItem("name", "user1");
        assert.equal(localStorage.getItem("name"), "user1");
        localStorage.removeItem("name");
        localStorage.removeItem("unknown");
        assert.equal(localStorage.getItem("name"), null, "localStorage.getItem('name')")
    });
});