parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"ixmL":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Vector2=void 0;var t=function(){function t(t,e){this.x=t,this.y=e}return Object.defineProperty(t,"zero",{get:function(){return new t(0,0)},enumerable:!1,configurable:!0}),t.random=function(e,n){return new t(e*Math.random(),n*Math.random())},t.prototype.clone=function(){return new t(this.x,this.y)},t.prototype.distance=function(t){return this.subtract(t).magnitude()},t.prototype.add=function(e){return new t(this.x+e.x,this.y+e.y)},t.prototype.subtract=function(e){return new t(this.x-e.x,this.y-e.y)},t.prototype.magnitude=function(){return Math.sqrt(Math.pow(this.x,2)+Math.pow(this.y,2))},t.prototype.multiply=function(e){return new t(this.x*e,this.y*e)},t.prototype.negative=function(){return this.multiply(-1)},t.prototype.normalize=function(){var e=this.magnitude();return new t(this.x/e,this.y/e)},t.angle=function(e){return new t(Math.cos(e),Math.sin(e))},t.prototype.perpendicularClockwise=function(){return new t(this.y,-this.x)},t.prototype.perpendicularCounterClockwise=function(){return new t(-this.y,this.x)},t}();exports.Vector2=t;
},{}],"dgAm":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.GameObject=exports.Game=exports.Camera=void 0;var e=require("./vector"),t=function(){function t(t){void 0===t&&(t=1),this.position=new e.Vector2(0,0),this.zoom=t}return t.prototype.setScene=function(e){this.scene=e},t.prototype.worldToScreen=function(e){return e.add(this.position).multiply(this.zoom).add(this.scene.center)},t.prototype.inScreen=function(e){return e.x>=0&&e.x<=this.scene.width&&e.y>=0&&e.y<=this.scene.height},t.prototype.screenToWorld=function(e){return e.subtract(this.scene.center).multiply(1/this.zoom).subtract(this.position)},t}();exports.Camera=t;var i=function(){function e(e,t,i){void 0===i&&(i=60),this.objects=[],this.scene=e,this.camera=t,this.fixedDeltaTime=1/i,t.setScene(e)}return Object.defineProperty(e.prototype,"children",{get:function(){return this.objects},enumerable:!1,configurable:!0}),e.prototype.add=function(e){this.objects.push(e),e.setGame(this)},e.prototype.remove=function(e){this.objects=this.objects.filter(function(t){return t!==e})},e.prototype.start=function(){this.lastTick=Date.now(),this.fixedUpdateAll=this.fixedUpdateAll.bind(this),this.render=this.render.bind(this),setInterval(this.fixedUpdateAll,this.fixedDeltaTime),this.objects.forEach(function(e){e.active&&e.start&&e.start()}),this.render()},e.prototype.render=function(){var e=this,t=Date.now(),i=t-this.lastTick;this.lastTick=t,this.deltaTime=i/1e3,this.scene.clear(),this.objects.forEach(function(t){t.active&&(t.update&&t.update(),t.inScene&&!t.inScene(e.camera)||t.render&&t.render(e.scene.ctx))}),requestAnimationFrame(this.render)},e.prototype.fixedUpdateAll=function(){this.objects.forEach(function(e){e.active&&e.fixedUpdate&&e.fixedUpdate()})},e}();exports.Game=i;var n=function(){function e(){this.active=!0}return Object.defineProperty(e.prototype,"deltaTime",{get:function(){return this.game.deltaTime},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"fixedDeltaTime",{get:function(){return this.game.fixedDeltaTime},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"camera",{get:function(){return this.game.camera},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"ctx",{get:function(){return this.game.scene.ctx},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"scene",{get:function(){return this.game.scene},enumerable:!1,configurable:!0}),e.prototype.setGame=function(e){this.game=e},e}();exports.GameObject=n;
},{"./vector":"ixmL"}],"sMw1":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Scene=void 0;var t=require("./vector"),e=function(){function e(t){"string"==typeof t&&(t=document.querySelector(t)),this.canvas=t,this.ctx=this.canvas.getContext("2d"),this.resized=this.resized.bind(this),this.resized(),window.addEventListener("resize",this.resized)}return e.prototype.resized=function(){this.canvas.width=this.width=window.innerWidth,this.canvas.height=this.height=window.innerHeight,this.center=new t.Vector2(this.width/2,this.height/2)},e.prototype.clear=function(){this.ctx.clearRect(0,0,this.width,this.height)},e}();exports.Scene=e;
},{"./vector":"ixmL"}],"uzD5":[function(require,module,exports) {
"use strict";var t=this&&this.__extends||function(){var t=function(e,r){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])})(e,r)};return function(e,r){function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}();Object.defineProperty(exports,"__esModule",{value:!0}),exports.FPSMeter=void 0;var e=require("./game"),r=function(e){function r(){return null!==e&&e.apply(this,arguments)||this}return t(r,e),r.prototype.render=function(t){t.textAlign="start",t.fillStyle="#fff",t.font="20px Arial",t.fillText(Math.round(1/this.deltaTime)+" FPS",100,100)},r}(e.GameObject);exports.FPSMeter=r;
},{"./game":"dgAm"}],"ZCfc":[function(require,module,exports) {
"use strict";var t=this&&this.__extends||function(){var t=function(e,o){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(e,o)};return function(e,o){function i(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(i.prototype=o.prototype,new i)}}();Object.defineProperty(exports,"__esModule",{value:!0});var e=require("./src/vector"),o=require("./src/game"),i=require("./src/scene"),n=require("./src/meter"),r=50,s=function(o){function i(t,i,n,r){var s=o.call(this)||this;return s.position=t,s.radius=i,s.mass=n,s.velocity=r||new e.Vector2(0,0),s}return t(i,o),i.prototype.attract=function(t){var e=this.position.distance(t.position),o=r*this.mass*t.mass/Math.pow(e,2)/this.mass*this.fixedDeltaTime,i=t.position.subtract(this.position);this.velocity=this.velocity.add(i.normalize().multiply(o))},i.prototype.inside=function(t){return t.distance(this.position)<this.radius},i.prototype.fixedUpdate=function(){for(var t=this,e=0,o=this.game.children.filter(function(e){return e!==t&&"attract"in e}).map(function(t){return t});e<o.length;e++){o[e].attract(this)}},i.prototype.applyCollision=function(){for(var t=this,e=0,o=this.game.children.filter(function(e){return e!==t&&e instanceof i}).map(function(t){return t});e<o.length;e++){var n=o[e];if(n.mass<this.mass){var r=n.position.subtract(this.position),s=r.magnitude()-(n.radius+this.radius);if(s<0){var a=r.normalize().multiply(-s);n.position=n.position.add(a)}}}},i.prototype.update=function(){this.position=this.position.add(this.velocity.multiply(this.deltaTime)),this.applyCollision()},i.prototype.render=function(t){var e=this.camera.worldToScreen(this.position);t.strokeStyle="#fff",t.beginPath(),t.arc(e.x,e.y,this.radius*this.camera.zoom,0,2*Math.PI),t.stroke(),t.textAlign="center",t.fillStyle="#fff",t.font=15*this.camera.zoom+"px Arial",t.fillText(""+Math.round(100*this.velocity.magnitude())/100,e.x,e.y);var o=this.camera.worldToScreen(this.position.add(this.velocity));t.strokeStyle="rgba(255,0,0,.5)",t.beginPath(),t.moveTo(e.x,e.y),t.lineTo(o.x,o.y),t.stroke()},i.prototype.inScene=function(t){return t.inScreen(t.worldToScreen(this.position))},i}(o.GameObject);function a(t,e){return t+(e-t)*Math.random()}var c=new i.Scene("#canvas"),u=new o.Camera(.003),p=new o.Game(c,u);c.ctx.imageSmoothingEnabled=!1,p.add(new n.FPSMeter);for(var h,l=1e6,f=1e3,d=function(){return a(50,500)},m=function(){return 1e5*a(50,500)},y=0;y<f;y++)p.add(new s(new e.Vector2(a(-l,l),a(-l,l)),d(),m()));p.start(),document.onkeypress=function(t){switch(t.key){case"q":u.zoom/=1.2;break;case"e":u.zoom*=1.2;break;case"w":u.position.y+=5/u.zoom;break;case"a":u.position.x-=5/u.zoom;break;case"s":u.position.y-=5/u.zoom;break;case"d":u.position.x+=5/u.zoom}},document.onmousedown=function(t){h=Date.now()},document.onmouseup=function(t){var o=Math.max(20,Math.min(500,(Date.now()-h)/10));p.add(new s(u.screenToWorld(new e.Vector2(t.pageX,t.pageY)),o,1e4*o))};
},{"./src/vector":"ixmL","./src/game":"dgAm","./src/scene":"sMw1","./src/meter":"uzD5"}]},{},["ZCfc"], null)
//# sourceMappingURL=main.d8335e93.js.map