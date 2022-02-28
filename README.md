# Path
An wrapper class for node's `path` module.

# Documentation
- I represent a filepath in system.
- You can import me by 
    - `const Path = require('@jarusll/path)`
    - `import Path from '@jarusll/path'`
- You can use me by
    - `new Path(PATH_STRING)`
    - `Path.fromString(PATH_STRING)`
    - `PATH_STRING.asPath()` (WIP)

I support
- `isAbsolute()`
- `isRelative()`
- `isDirectory()`
- `isFile()`
- `directory()`
- `file()`

### TODO
- [ ] Add `join` and `parse`
- [ ] Add `asPath` message for String in IIFE
### DONE
- [x] Add unit tests