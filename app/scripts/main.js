'use strict';

(function() {

  var Scene = function() {
    // Create the svg
    this.svg = document.createElementNS(this.svgns, 'svg');
    this.svg.classList.add('canvas');
    this.svg.setAttribute('width', this.width);
    this.svg.setAttribute('height', this.height);
    document.querySelector('.container').appendChild(this.svg);

    this.createShapes();

    this.render();
  };

  Scene.prototype = {
    svgns: 'http://www.w3.org/2000/svg',

    width: 600,
    height: 400,

    svg: null,

    shapes: [],

    // Render shapes into the dom
    render: function() {
      this.svg.innerHTML = '';

      this.shapes.forEach((function(shape) {
        var el = document.createElementNS(this.svgns, shape.name);

        Object.keys(shape.attrs).forEach(function(key) {
          el.setAttribute(key, shape.attrs[key]);
        });

        this.svg.appendChild(el);
      }).bind(this));
    },

    // Decide what to draw here
    createShapes: function() {
      var size = 64;
      var color = '#cc1111';

      var square = {
        name: 'rect',
        attrs: {
          x: 0,
          y: 0,
          width: size,
          height: size,
          fill: color
        }
      };

      this.shapes.push(square);
    }
  };

  window.onload = function() {
    new Scene();
  };
})();
