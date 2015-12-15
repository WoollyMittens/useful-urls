# useful.urls.js: URL Library

A library of useful functions to ease working with URL query parameters.

Try the <a href="http://www.woollymittens.nl/useful/default.php?url=useful-urls">tests</a>.

## How to include the script

This include can be added to the header or placed inline before the script is invoked.

```html
<script src="./js/useful-urls.js"></script>
```

To enable the use of HTML5 tags in Internet Explorer 8 and lower, include *html5.js*.

```html
<!--[if lte IE 9]>
	<script src="//html5shiv.googlecode.com/svn/trunk/html5.js"></script>
<![endif]-->
```

## How to control the script

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

## How to build the script

This project uses node.js from http://nodejs.org/

This project uses gulp.js from http://gulpjs.com/

The following commands are available for development:
+ `npm install` - Installs the prerequisites.
+ `gulp import` - Re-imports libraries from supporting projects to `./src/libs/` if available under the same folder tree.
+ `gulp dev` - Builds the project for development purposes.
+ `gulp prod` - Builds the project for deployment purposes.
+ `gulp watch` - Continuously recompiles updated files during development sessions.
+ `gulp serve` - Serves the project on a temporary web server at http://localhost:8000/ .

## How to test the script

These test uses Selenium from http://docs.seleniumhq.org/

+ `npm install webdriverjs` - Installs the webdriver prerequisite.
+ `npm install mocha -g` - Installs the prerequisite test framework.
+ `java -jar /Applications/Selenium/selenium-server-standalone-2.42.2.jar` - Starts Selenium.
+ `mocha` - Runs the automated tests.

## License

This work is licensed under a Creative Commons Attribution 3.0 Unported License. The latest version of this and other scripts by the same author can be found at http://www.woollymittens.nl/
