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
}

// temp test code
// console.log((new Path("/home/jarusll")).isDirectory())
// console.log((new Path("/home/jarusll/test.js")).isDirectory())
// console.log((new Path("/home/jarusll/test.js")).file())
// console.log((new Path("/home/jarusll/test.js")).directory())
// console.log((new Path("/")).directory())
module.exports = Path

String.prototype.asPath = function(){
    return Path.fromString(this)
}