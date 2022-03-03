import { it } from "mocha"
import Path from "../src/main.js"
import { expect } from "chai"

describe("Path", function () {
    let testJsPath = new Path("/home/jarusll/test.js")
    it("inits", function () {
        expect(testJsPath).to.be.instanceOf(Path)
    })
    it("inits with correct path", function () {
        expect(testJsPath.asString()).to.equal("/home/jarusll/test.js")
    })
    it("should give directory path", function () {
        expect(testJsPath.directory()).to.be.instanceOf(Path)
        expect(testJsPath.directory().asString()).to.equal('/home/jarusll')
    })
    it("should give file path", function () {
        expect(testJsPath.file()).to.be.instanceOf(Path)
        expect(testJsPath.file().asString()).to.equal('test.js')
    })
    it("should be true for absolute and false for relative", function () {
        expect(testJsPath.isAbsolute()).to.be.true
        expect(testJsPath.isRelative()).to.be.false
    })
    it("should be true for relative and false for absolute", function () {
        expect(new Path("home/jarusll").isRelative()).to.be.true
        expect(new Path("home/jarusll").isAbsolute()).to.be.false
    })
    it("should be true as file and false as directory", function () {
        expect(testJsPath.isFile()).to.be.true
        expect(testJsPath.isDirectory()).to.be.false
    })
    it("should join path when given as a Path instance", function () {
        expect(testJsPath.directory().join(new Path("yolo.js")).asString()).to.equal("/home/jarusll/yolo.js")
    })
    it("should join path when given as a string", function () {
        expect(testJsPath.directory().join("yolo.js").asString()).to.equal("/home/jarusll/yolo.js")
    })
    it("should parse given path", function () {
        expect(testJsPath.parse()).to.deep.equal({
            root: '/',
            dir: '/home/jarusll',
            base: 'test.js',
            name: 'test',
            ext: '.js'
        })
    })
    it("should return relative path for path given as string", function () {
        expect(testJsPath.relativeTo('/home/jarusll/abc/xyz').asString()).to.equal(Path.fromString('../abc/xyz').asString())
    })
    it("should return relative path for path given as Path", function () {
        expect(testJsPath.relativeTo(Path.fromString('/home/jarusll/abc/xyz')).asString()).to.equal(Path.fromString('../abc/xyz').asString())
    })
    it("should return extension", function () {
        expect(testJsPath.extension()).to.equal('.js')
        expect(Path.fromString('abc.index.md').extension()).to.equal('.md')
        expect(Path.fromString('.index').extension()).to.equal('')
    })
    it("should init from string", function () {
        const pathString = "/home/jarusll/test.js"
        let path = Path.fromString(pathString)
        expect(path).to.be.instanceOf(Path)
        expect(path.asString()).to.equal("/home/jarusll/test.js")
    })
})