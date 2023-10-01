## Install

```bash
# Switch to <directory>
$ cd <directory>

# Install all dependencies
$ npm install

# [optional] Check and update all dependencies
$ npm outdated
$ npm update
```

## Usage

```bash
# Build and minify both resources
$ npm run build

# Build and minify main.js file
$ npm run build:js

# Watch for changes in main.js file
$ npm run watch:js

# Build and minify main.scss file
$ npm run build:css

# Watch for changes in main.scss file
$ npm run watch:css

```bash
.                           # root
├── dist                    # directory for distributables
│   ├── css                 # directory for minified css files
│   └── js                  # directory for minified js files
├── src                     # directory for source code
│   ├── js                  # directory for js files
│   │   └── main.js         # main js file
│   └── scss                # directory for scss files
│       ├── abstracts       # scss file for variables
│       ├── base            # scss file for base
│       ├── components      # scss file for components
│       ├── layouts         # scss file for layouts
│       ├── utilities       # scss file for utilities
│       └── main.scss       # main scss file
├── index.html              # index file for web app
├── package.json            # pnpm configuration file
└── postcss.config.js       # postcss configuration file
```

## License

[MIT][mit]

[mit]: https://opensource.org/licenses/MIT