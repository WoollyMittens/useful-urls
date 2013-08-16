# useful.urls.js: URL Library

A library of useful functions to ease working with URL query parameters.

Try the <a href="http://www.woollymittens.nl/useful/default.php?url=urls">tests</a>.

## How to use the script

This include can be added to the header or placed inline before the script is invoked.

```html
<script src="./js/useful.urls.js"></script>
```

## Functions

### load

```javascript
data = useful.urls.load(url);
```

Converts the query parameters from a URL into an object of name-value pairs.

**data : {object}** - An object filled with name-value pairs. e.g. {foo:bar}

**url : {string}** - An URL with query parameters. *e.g. http://domain.com/?foo=bar*

### save

```javascript
url = useful.urls.save(path, data);
```

Saves an object of name-value pairs as the query parameters of a URL.

**url : {string}** - An URL with query parameters. *e.g. http://domain.com/?foo=bar*

**path : {string}** - An URL without query parameters. *e.g. http://domain.com/*

**data : {object}** - An object filled with name-value pairs. *e.g. {foo:bar}*

### replace

```javascript
url = useful.urls.replace(url, name, value);
```

Replaces the value of a query parameter in a URL.

**url : {string}** - An URL with query parameters. e.g. http://domain.com/?foo=bar

**name : {string}** - Name of a parameter stored as a query parameter.

**value : {string}** - Value to be stored as a query parameter.

## License
This work is licensed under a Creative Commons Attribution 3.0 Unported License. The latest version of this and other scripts by the same author can be found at http://www.woollymittens.nl/
