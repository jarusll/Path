import { it } from "mocha"
import Path from "../src/main.js"
import { expect } from "chai"

describe("Path", function () {
    let testJsPath = new Path("/home/jarusll/test.js")
    describe("constructor", function () {
        it("should init", function () {
            expect(testJsPath).to.be.instanceOf(Path)
        })
        it("inits with correct path", function () {
            expect(testJsPath.asString()).to.equal("/home/jarusll/test.js")
        })
    })
    describe("directory", function () {
        it("should give directory path", function () {
            expect(testJsPath.directory()).to.be.instanceOf(Path)
            expect(testJsPath.directory().asString()).to.equal('/home/jarusll')
        })
    })
    describe("file", function () {
        it("should give file path", function () {
            expect(testJsPath.file()).to.be.instanceOf(Path)
            expect(testJsPath.file().asString()).to.equal('test.js')
        })
    })
    describe("isAbsolute", function () {
        it("should be true for absolute path", function () {
            expect(testJsPath.isAbsolute()).to.be.true
        })
        it("should be false for relative path", function () {
            expect(Path.fromString("home/jarusll").isAbsolute()).to.be.false
        })
    })
    describe("isRelative", function () {
        it("should be false for absolute paths", function () {
            expect(testJsPath.isRelative()).to.be.false
        })
        it("should be true for relative path", function () {
            expect(Path.fromString("home/jarusll").isRelative()).to.be.true
        })
    })
    describe("isFile", function () {
        it("should return true for file paths", function () {
            expect(testJsPath.isFile()).to.be.true
        })
        it("should return false for dir paths", function () {
            expect(testJsPath.isDirectory()).to.be.false
        })
    })
    describe("join", function () {
        it("should join path when given a Path instance", function () {
            expect(testJsPath.directory().join(new Path("yolo.js")).asString()).to.equal("/home/jarusll/yolo.js")
        })
        it("should join path when given as a string", function () {
            expect(testJsPath.directory().join("yolo.js").asString()).to.equal("/home/jarusll/yolo.js")
        })
    })
    describe("parse", function () {
        it("should parse a path into root, dir, base, name and ext components", function () {
            expect(testJsPath.parse()).to.deep.equal({
                root: '/',
                dir: '/home/jarusll',
                base: 'test.js',
                name: 'test',
                ext: '.js'
            })
        })
    })
    describe("relativeTo", function () {
        it("should return relative path for path given as string", function () {
            expect(testJsPath.relativeTo('/home/jarusll/abc/xyz').asString()).to.equal(Path.fromString('../abc/xyz').asString())
        })
        it("should return relative path for path given as Path", function () {
            expect(testJsPath.relativeTo(Path.fromString('/home/jarusll/abc/xyz')).asString()).to.equal(Path.fromString('../abc/xyz').asString())
        })
    })
    describe("extension", function () {
        it("should return extension", function () {
            expect(testJsPath.extension()).to.equal('.js')
            expect(Path.fromString('abc.index.md').extension()).to.equal('.md')
            expect(Path.fromString('.index').extension()).to.equal('')
        })
    })
})

describe("String", function () {
    describe("asPath", function () {
        it("should init from string", function () {
            const pathString = "/home/jarusll/test.js"
            let path = Path.fromString(pathString)
            expect(path).to.be.instanceOf(Path)
            expect(path.asString()).to.equal("/home/jarusll/test.js")
        })
    })
})