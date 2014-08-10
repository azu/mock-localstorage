"use strict";
var test_error = { name: "test" };
var assert = require("power-assert");
var MockLocalStorage = require("../lib/mock-localstorage");
describe("mock-localstorage", function () {
    var localStorage;
    before(function () {
        localStorage = new MockLocalStorage();
    });
    it("1", function () {
        assert(!("name" in localStorage));
        assert(!("age" in localStorage));
    });
    it("2", function () {
        localStorage["name"] = "user1";
        assert("name" in localStorage);
        assert.equal(localStorage.length, 1, "localStorage.length")
        assert.equal(localStorage.getItem("name"), "user1");
        assert.equal(localStorage["name"], "user1");
    });
    it("3", function () {
        localStorage["name"] = "user2";
        assert("name" in localStorage);
        assert.equal(localStorage.length, 1, "localStorage.length")
        assert.equal(localStorage.getItem("name"), "user2");
        assert.equal(localStorage["name"], "user2");
    });
    it("4", function () {
        localStorage.setItem("name", "user3");
        assert("name" in localStorage);
        assert.equal(localStorage.length, 1, "localStorage.length")
        assert.equal(localStorage.getItem("name"), "user3");
        assert.equal(localStorage["name"], "user3");
    });
    it("5", function () {
        localStorage.setItem("age", null);
        assert("age" in localStorage);
        assert.equal(localStorage.length, 2, "localStorage.length")
        assert.equal(localStorage.getItem("age"), "null");
    });
    it("6", function () {
        localStorage["age"] = null;
        assert("age" in localStorage);
        assert.equal(localStorage.length, 2, "localStorage.length")
        assert.equal(localStorage.getItem("age"), "null");
    });
    it("7", function () {
        localStorage.setItem("age", undefined);
        assert("age" in localStorage);
        assert.equal(localStorage.length, 2, "localStorage.length")
        assert.equal(localStorage.getItem("age"), "undefined");
    });
    it("8", function () {
        localStorage["age"] = undefined;
        assert("age" in localStorage);
        assert.equal(localStorage.length, 2, "localStorage.length")
    });
    it("9", function () {
        //        assert.throws(function () {
        //            localStorage.setItem("age",
        //                { toString: function () {
        //                    throw test_error;
        //                } });
        //        },test_error);
        assert("age" in localStorage);
        assert.equal(localStorage.length, 2, "localStorage.length")
    });
    it("10", function () {
        //        assert.throws(function () {
        //            localStorage["age"] =
        //            { toString: function () {
        //                throw test_error;
        //            } };
        //        }, test_error);
        assert("age" in localStorage);
        assert.equal(localStorage.length, 2, "localStorage.length")
    });
    it("11", function () {
        localStorage.setItem(undefined, "test");
        assert("undefined" in localStorage);
        assert.equal(localStorage.length, 3, "localStorage.length")
        assert.equal(localStorage.getItem("undefined"), "test");
        assert.equal(localStorage["undefined"], "test");
    });
    it("12", function () {
        localStorage[undefined] = "test2";
        assert("undefined" in localStorage);
        assert.equal(localStorage.length, 3, "localStorage.length")
        assert.equal(localStorage.getItem("undefined"), "test2");
        assert.equal(localStorage["undefined"], "test2");
    });
    it("13", function () {
        localStorage.setItem(null, "test");
        assert("null" in localStorage);
        assert.equal(localStorage.length, 4, "localStorage.length")
        assert.equal(localStorage.getItem("null"), "test");
        assert.equal(localStorage["null"], "test");
    });
    it("14", function () {
        localStorage[null] = "test2";
        assert("null" in localStorage);
        assert.equal(localStorage.length, 4, "localStorage.length")
        assert.equal(localStorage.getItem("null"), "test2");
        assert.equal(localStorage["null"], "test2");
    });
});