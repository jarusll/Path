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
- [ ] Add `relative`,`resolve` and `extension` messages
- [ ] Add `asPath` message for String in IIFE
- [ ] Add UML diagram
- [ ] Bundling? for fun
### DONE
- [x] Add unit tests
- [x] Add `join` and `parse`