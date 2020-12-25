# markdown-it-codetabs

> Code tabs plugin for [markdown-it](https://github.com/markdown-it/markdown-it) markdown parser.

## Install

```bash
npm install markdown-it-codetabs --save
```

## Use

```js
var md = require('markdown-it')()
            .use(require('markdown-it-codetabs'));

md.render(markdownContent);
// Continuous code block with the same
// group markder (`[marker]`) will rendered to a tab.
```

## Example

1. Normal code block:

    ~~~md
    ```python
    print("hello")
    ```

    ```js
    console.log("hello");
    ```
    ~~~

2. Rendered to one block with two tabs (the tab name is language name):

    ~~~md
    ```python []
    print("hello")
    ```

    ```js []
    console.log("hello");
    ```
    ~~~

3. Rendered to two blocks with one tab separately (the content in square brackets doesn't matter as long as they are different):

    ~~~md
    ```python [1]
    print("hello")
    ```

    ```js [2]
    console.log("hello");
    ```
    ~~~
