# urls.js: URL Library

A library of useful functions to ease working with URL query parameters.

Try the <a href="http://www.woollymittens.nl/default.php?url=useful-urls">tests</a>.

## How to include the script

This include can be added to the header or placed inline before the script is invoked.

```html
<script src="js/urls.js"></script>
```

Or use [Require.js](https://requirejs.org/).

```js
requirejs([
	'js/urls.js'
], function(urls) {
	...
});
```

Or import into an MVC framework.

```js
var urls = require('js/urls.js');
```

## How to control the script

### load

```javascript
data = urls.load(url);
```

Converts the query parameters from a URL into an object of name-value pairs.

**data : {object}** - An object filled with name-value pairs. e.g. {foo:bar}

**url : {string}** - An URL with query parameters. *e.g. http://domain.com/?foo=bar*

### save

```javascript
url = urls.save(path, data);
```

Saves an object of name-value pairs as the query parameters of a URL.

**url : {string}** - An URL with query parameters. *e.g. http://domain.com/?foo=bar*

**path : {string}** - An URL without query parameters. *e.g. http://domain.com/*

**data : {object}** - An object filled with name-value pairs. *e.g. {foo:bar}*

### replace

```javascript
url = urls.replace(url, name, value);
```

Replaces the value of a query parameter in a URL.

**url : {string}** - An URL with query parameters. e.g. http://domain.com/?foo=bar

**name : {string}** - Name of a parameter stored as a query parameter.

**value : {string}** - Value to be stored as a query parameter.

## How to build the script

This project uses node.js from http://nodejs.org/

This project uses gulp.js from http://gulpjs.com/

The following commands are available for development:
+ `npm install` - Installs the prerequisites.
+ `gulp import` - Re-imports libraries from supporting projects to `./src/libs/` if available under the same folder tree.
+ `gulp dev` - Builds the project for development purposes.
+ `gulp dist` - Builds the project for deployment purposes.
+ `gulp watch` - Continuously recompiles updated files during development sessions.
+ `gulp serve` - Serves the project on a temporary web server at http://localhost:8500/.
+ `gulp php` - Serves the project on a temporary php server at http://localhost:8500/.

## License

This work is licensed under a [MIT License](https://opensource.org/licenses/MIT). The latest version of this and other scripts by the same author can be found on [Github](https://github.com/WoollyMittens) and at [WoollyMittens.nl](https://www.woollymittens.nl/).
