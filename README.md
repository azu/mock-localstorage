# mock-localstorage

Mock object of `localStorage`.

## Installation

``` 
npm install mock-localstorage
```

## Usage

This library provide same interface as [DOM Storage guide - Web developer guide | MDN](https://developer.mozilla.org/en-US/docs/Web/Guide/API/DOM/Storage "DOM Storage guide - Web developer guide | MDN").

``` js
var mockStorage = new MockLocalStorage();
// Save data to the current session's store
mockStorage.setItem("username", "John");

// Access some stored data
console.log( "username = " + mockStorage.getItem("username"));
```

## Known Issue

Not support these spec.

###  `localStorage#setItem` call `toString()`

I don't know this behavior.

``` js
assert_throws(test_error, function() {
localStorage.setItem("age",
{ toString: function() { throw test_error; } });
});
```

###  dot access then convert to string.

Not support (please help)

``` js
localStorage["foo"] = null
localStorage["foo"];// "null"
```

## Test

Test code is taken form [w3c/web-platform-tests](https://github.com/w3c/web-platform-tests "w3c/web-platform-tests").

* [web-platform-tests/storage_local_setitem_js.html at master · w3c/web-platform-tests](https://github.com/w3c/web-platform-tests/blob/master/webstorage/storage_local_setitem_js.html "web-platform-tests/storage_local_setitem_js.html at master · w3c/web-platform-tests")

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License

MIT