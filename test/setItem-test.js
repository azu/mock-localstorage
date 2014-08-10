/**
 * Created by azu on 2014/08/10.
 * LICENSE : MIT
 */
"use strict";
var assert = require("power-assert");
var MockLocalStorage = require("../lib/mock-localstorage");
describe("setItem", function () {
    var localStorage;
    before(function () {
        localStorage = new MockLocalStorage();
    });
    // setItem
    it("setItem", function () {
        localStorage.clear();
        localStorage.setItem("name", "user1");
        assert.equal(localStorage.length, 1, "localStorage.setItem")
    });
});