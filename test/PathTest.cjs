const { it } = require("mocha")
const Path = require("../src/main.cjs")
const expect = require("chai").expect

describe("Path", function(){
    let testJsPath = new Path("/home/jarusll/test.js")
    it("inits", function(){
        expect(testJsPath).to.be.instanceOf(Path)
    })
    it("inits with correct path", function(){
        expect(testJsPath.path).to.equal("/home/jarusll/test.js")
    })
    it("should give directory path", function(){
        expect(testJsPath.directory()).to.be.instanceOf(Path)
        expect(testJsPath.directory().path).to.equal('/home/jarusll')
    })
    it("should give file path", function(){
        expect(testJsPath.file()).to.be.instanceOf(Path)
        expect(testJsPath.file().path).to.equal('test.js')
    })
    it("should be true for absolute and false for relative", function(){
        expect(testJsPath.isAbsolute()).to.be.true
        expect(testJsPath.isRelative()).to.be.false
    })
    it("should be true for relative and false for absolute", function(){
        expect(new Path("home/jarusll").isRelative()).to.be.true
        expect(new Path("home/jarusll").isAbsolute()).to.be.false
    })
    it("should be true as file and false as directory", function(){
        expect(testJsPath.isFile()).to.be.true
        expect(testJsPath.isDirectory()).to.be.false
    })
})