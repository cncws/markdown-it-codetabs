# markdown-it-codetabs

> Code tabs plugin for [markdown-it](https://github.com/markdown-it/markdown-it) markdown parser.

## Install

```bash
npm install markdown-it-codetabs --save
```

## Use

1. Render your file:

    ```js
    var md = require('markdown-it')()
                .use(require('markdown-it-codetabs'));
    // `group` and `tab` can only contain characters in [A-Za-z0-9_].
    md.render('```js [group:tab]\nconsole.log("hello");\n```');
    ```

2. Import your own styles, you can start from [codetabs.scss](https://github.com/cncws/markdown-it-codetabs/blob/main/assets/codetabs.scss).

## MD Example

~~~md
```js [g1:JavaScript]
console.log("hello");
```

```py [g1:Python3]
print("hello")
```
~~~

**Notice:** DON'T add anything except white space between two code blocks. 
