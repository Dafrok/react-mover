!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define(["react"],t):"object"==typeof exports?exports["react-mover"]=t(require("react")):e["react-mover"]=t(e.React)}(this,function(e){return function(e){function t(o){if(r[o])return r[o].exports;var n=r[o]={exports:{},id:o,loaded:!1};return e[o].call(n.exports,n,n.exports,t),n.loaded=!0,n.exports}var r={};return t.m=e,t.c=r,t.p="",t(0)}([function(e,t,r){e.exports=r(1)},function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function f(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},i=function(){function e(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,r,o){return r&&e(t.prototype,r),o&&e(t,o),t}}(),p=r(2),u=o(p),c={originX:0,originY:0,offsetX:0,offsetY:0},l=function(e){function t(e){n(this,t);var r=a(this,Object.getPrototypeOf(t).call(this,e));return r.state={x:0,y:0},r.setOffsets=r.setOffsets.bind(r),r.move=r.move.bind(r),r}return f(t,e),i(t,[{key:"setOffsets",value:function(e){e.stopPropagation(),this.props.dragImage&&e.dataTransfer.setDragImage(this.props.dragImage,0,0);var t=getComputedStyle(e.target),r=parseInt(t.top,10),o=parseInt(t.left,10);c.originX=e.target.offsetLeft-o,c.originY=e.target.offsetTop-r,c.offsetX=e.pageX-e.target.offsetLeft,c.offsetY=e.pageY-e.target.offsetTop}},{key:"move",value:function(e){e.stopPropagation(),e.pageX&&e.pageY&&this.setState({x:e.pageX-c.offsetX-c.originX,y:e.pageY-c.offsetY-c.originY})}},{key:"render",value:function(){return u["default"].cloneElement(u["default"].createElement("span",s({},this.props,{onDrag:this.move,draggable:!0,onDragStart:this.setOffsets}),this.props.children),{style:Object.assign({top:this.state.y,left:this.state.x},this.props.style)})}}]),t}(p.Component);t["default"]=l},function(t,r){t.exports=e}])});