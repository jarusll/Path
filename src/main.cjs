const path = require("path")

class Path {
    /*
        I am a filepath(files & directories)
        You can use me by 
            `Path.fromString(FILE_PATH)`
            `new Path(FILE_PATH)`
            `FILE_PATH_IN_STRING.asPath()`
    */
    constructor(filePath){
        this.path = filePath
    }

    static fromString(filePath){
        return new this(filePath)
    }

    isAbsolute(){
        return path.isAbsolute(this.path) 
    }

    isRelative(){
        return !this.isAbsolute()
    }

    isDirectory(){
        return path.parse(this.path).ext == ''
    }

    isFile(){
        return !this.isDirectory()    
    }

    directory(){
        return Path.fromString(path.dirname(this.path))
    }

    file(){
        if (this.isDirectory()){
            throw Error("Should be a file")
        }

        return Path.fromString(path.basename(this.path))
    }

    join(aPath){
        // overloading aPath and String
        if (aPath instanceof Path){
            this.path = path.join(this.path, aPath.path)
        } else {
            this.path = path.join(this.path, aPath)
        }
        return this
    }

    parse(){
        /*
        Path.fromString('/home/jarusll/test.js').parse() -> {
            root: '/',
            dir: '/home/jarusll',
            base: 'test.js',
            name: 'test',
            ext: 'js'
        }
        */
        return path.parse(this.path)
    }
}

module.exports = Path

String.prototype.asPath = function(){
    return Path.fromString(this)
}