import { isAbsolute, parse, dirname, basename, join, relative, extname } from "path"

class Path {
    /*
        I am a filepath(files & directories)
        You can use me by 
            `Path.fromString(FILE_PATH)`
            `new Path(FILE_PATH)`
            `FILE_PATH_IN_STRING.asPath()`
    */
    constructor(pathString) {
        this.path = pathString
    }

    static fromString(pathString) {
        return new this(pathString)
    }

    isAbsolute() {
        return isAbsolute(this.path)
    }

    isRelative() {
        return !this.isAbsolute()
    }

    isDirectory() {
        return parse(this.path).ext == ''
    }

    isFile() {
        return !this.isDirectory()
    }

    directory() {
        return Path.fromString(dirname(this.path))
    }

    file() {
        if (this.isDirectory()) {
            throw Error("Should be a file")
        }

        return Path.fromString(basename(this.path))
    }

    join(aPathOrString) {
        // overloading aPath and String
        if (aPathOrString instanceof Path) {
            this.path = join(this.path, aPathOrString.path)
        } else {
            this.path = join(this.path, aPathOrString)
        }
        return this
    }

    parse() {
        /*
        Path.fromString('/home/jarusll/test.js').parse() -> {
            root: '/',
            dir: '/home/jarusll',
            base: 'test.js',
            name: 'test',
            ext: 'js'
        }
        */
        return parse(this.path)
    }
    relativeTo(aPathOrString) {
        if (aPathOrString instanceof Path) {
            return Path.fromString(relative(this.path, aPathOrString.path))
        }
        return Path.fromString(relative(this.path, aPathOrString))
    }
    extension() {
        return extname(this.path)
    }

    asString(){
        return this.path
    }
}

export default Path

String.prototype.asPath = function () {
    return Path.fromString(this.valueOf())
}