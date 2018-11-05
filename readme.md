# Installation instructions

Clone this repository and run NPM install:

```npm install```

# SASS files

Make your changes and build the CSS file using Gulp:

```gulp sass```

or Ruby Sass:

```sass css/style.scss css/style.css --sourcemap```

Watch for changes using Ruby Sass:

```sass css/style.scss --sourcemap --watch```

# Javascript files

The single javascript file is compiled from the index in the ```js/index.json``` file. By default it looks like this:

```json
{
    "includes": [
        "./js/partials/**/*.js"
    ]
}
```

You can run the build using the following Gulp task:

```gulp concat_js```

Watch for changes using the following Gulp task:

```gulp watch```

Running ```gulp``` will run this task by default.