# Path
A wrapper class for node's `path` module.

# Documentation
- I represent a filepath in system.
- You can import me by 
    - `const Path = require('@jarusll/path)`
    - `import Path from '@jarusll/path'`
- You can use me by
    - `new Path(PATH_STRING)`
    - `Path.fromString(PATH_STRING)`
    - `PATH_STRING.asPath()` (WIP)

![Class Diagram](https://www.plantuml.com/plantuml/proxy?src=https://raw.githubusercontent.com/jarusll/Path/master/Path.puml?)

### TODO
- [ ] Add `asPath` message for String in IIFE
- [ ] Bundling? for fun
### DONE
- [x] Add `relativeTo` and `extension` messages. Did not add `resolve`, too confusing
- [x] Add unit tests
- [x] Add `join` and `parse`
- [x] Add UML diagram