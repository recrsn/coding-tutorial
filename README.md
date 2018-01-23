# Coding Tutorial

Template app in React for creating an interactive tutorial.

## Using this template to build your own

Start by installing the dependencies:

(If you do not use yarn, use their `npm` equivalents)

```
yarn
```

Start the development server:

```
yarn start
```

### Folder structure

Contents of your tutorial should go into `src/book` directory. It has an `index.js`, which is used to structure your lessons.
See the index.js file for more documentation regarding files for book.

The rest of the files in the repo deal with the look-and-feel or the viewer. If you want to customize the appearance of the
viewer, start with the `src/components/Book.js` and `src/components/Chapter.js`.


### Delpoying in a web server:

Generate a build for production use:

```
yarn build
```
