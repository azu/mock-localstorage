/**
 * Created by kjirou on 2015/04/08.
 * LICENSE : MIT
 */
"use strict";
var assert = require("power-assert");
var MockLocalStorage = require("../");
describe("clear", function () {
    var localStorage;
    before(function () {
        localStorage = new MockLocalStorage();
    });
    // clear
    it("clear", function () {
        assert.equal(localStorage.length, 0);
        localStorage.setItem("name", "user1");
        assert.equal(localStorage.getItem("name"), "user1");
        localStorage.setItem("escapedkey:name", "user2");
        assert.equal(localStorage.getItem("escapedkey:name"), "user2");
        assert.equal(localStorage.length, 2);
        localStorage.clear()
        assert.equal(localStorage.length, 0);
        assert.equal(localStorage.getItem("name"), null, "localStorage.getItem('name')")
        assert.equal(localStorage.getItem("escapedkey:name"), null, "localStorage.getItem('escapedkey:name')")
    });
});
