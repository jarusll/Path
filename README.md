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
    - `PATH_STRING.asPath()`

![Class Diagram](https://www.plantuml.com/plantuml/proxy?src=https://raw.githubusercontent.com/jarusll/Path/master/Path.puml?)
![Class Diagram](https://www.plantuml.com/plantuml/png/PP3H3i8W34NV-GeUsL_CnFYgKN-WCgOO1alR6Otntns5QQ8lDt3lkMdJbXYGfo4e6u187nXzF3-LrXfe1tmnZNffLTDiI5OvFSw6_4LiYiGuMKveI81SQ2GZ1lPMzvY6qlqZH3ojJfJ2nCuqrTYxC5TlNsFjqUKPZu-pyI77ykj-qbuoURexkqW-nOMz9XyDv1MsMBOgu0X8Imdh-6EgXWXGuVDvLEjYDv_m3G00)

### TODO
### DONE
- [x] Add `relativeTo` and `extension` messages. Did not add `resolve`, too confusing
- [x] Add unit tests
- [x] Add `join` and `parse`
- [x] Add UML diagram
- [x] Add `asPath` message for String in IIFE. Dint had to, it automatically imported itself
- [x] Bundling? for fun. Added with `rollup`