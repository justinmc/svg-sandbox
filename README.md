# SVG Sandbox

This project is something simple that you can check out, run, and use to experiment with drawing shapes in SVG.  It consists of a blank Yeoman project and a simple class that abstracts SVG element creation.

## Getting Started

Install dependencies:

    npm install
    bower install

Start the project:

    grunt serve

Take a look at `app/scripts/main.js` to see what's happening.

## Drawing

Notice that a single red square is drawn at the origin.  It is created in the method `createShapes` and pushed to the `shapes` array.  You can create any other SVG element in the same way and it will be automatically rendered in the SVG.

## LICENSE

MIT
