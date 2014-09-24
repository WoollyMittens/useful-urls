var webdriverjs = require('webdriverjs'),
    assert = require('assert'),
    usefulUrls = require('../src/js/useful-urls.js'),
    path = 'http://local.woollymittens.nl/useful-urls/';

describe('Expected behaviours of "useful-urls"', function(){

    this.timeout(99999999);
    var client = {};

    before(function(){
        client = webdriverjs.remote({ desiredCapabilities: {browserName: 'phantomjs'} });
        client.init();
    });

    it('should import values using "load()" (browser)', function(done){
        client
            .url(path)
            .execute(function () {

                return useful.urls.load('http://www.foo.bar/index.html?mystring=a&mynumber=1.5');

            }, [], function (err, result) {

                assert(err === null);
                assert(result.value.mystring === 'a');
                assert(result.value.mynumber === 1.5);

            })
            .call(done);
    });

    it('should import values using "load()"', function(done){

        var result = usefulUrls.load('http://www.foo.bar/index.html?mystring=a&mynumber=1.5');
        assert(result.mystring === 'a');
        assert(result.mynumber === 1.5);

        done();
    });

    it('should export values using "save()"', function(done){

        var result = usefulUrls.save('http://www.foo.bar/index.html', { mystring : 'a', mynumber : 1.5 });
        assert(result === 'http://www.foo.bar/index.html?mystring=a&mynumber=1.5');

        done();
    });

    it('should replace a value using "replace()"', function(done){

        var result = usefulUrls.replace('http://www.foo.bar/index.html?mystring=a&mynumber=1.5', 'mystring', 'b');
        assert(result === 'http://www.foo.bar/index.html?mystring=b&mynumber=1.5');

        result = usefulUrls.replace('http://www.foo.bar/index.html?mystring=a&mynumber=1.5', 'mynumber', 2.0);
        assert(result === 'http://www.foo.bar/index.html?mystring=a&mynumber=2');

        done();
    });

    after(function(done) {
        client.end(done);
    });
});
