const { it, before, after } = require("mocha")
const Path = require("../src/main.cjs")
const assert = require("chai").assert

describe("Path", function(){
    let testJsPath = new Path("/home/jarusll/test.js")
    it("inits", function(){
        assert.instanceOf(testJsPath, Path)
    })
    it("inits with correct path", function(){
        assert.equal(testJsPath.path, "/home/jarusll/test.js")
    })
    it("gives absolute path", function(){
        assert.equal(testJsPath.directory().path, new Path('/home/jarusll').path)
    })
    it("gives file name", function(){
        assert.equal(testJsPath.file(), 'test.js')
    })
    it("tests absolute path", function(){
        assert.isTrue(testJsPath.isAbsolute())
        assert.isFalse(testJsPath.isRelative())
    })
    it("tests relative path", function(){
        assert.isTrue(new Path("home/jarusll").isRelative())
        assert.isFalse(new Path("home/jarusll").isAbsolute())
    })
    it("tests file", function(){
        assert.isTrue(testJsPath.isFile())
        assert.isFalse(testJsPath.isDirectory())
    })
})