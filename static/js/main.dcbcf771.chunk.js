(this["webpackJsonppersonal-website-client"]=this["webpackJsonppersonal-website-client"]||[]).push([[0],{37:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){var r={"./fourier.js":47,"./test-sketch.js":48};function c(e){var t=s(e);return n(t)}function s(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}c.keys=function(){return Object.keys(r)},c.resolve=s,e.exports=c,c.id=46},47:function(e,t,n){"use strict";n.r(t);t.default=function(e){var t=[],n=null,r=0,c=[],s=[];function a(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];e&&(s=[]),c=[],r=0}e.mouseDragged=function(){s.push(e.createVector(e.mouseX-e.width/2,e.mouseY-e.height/2))},e.mouseReleased=function(){(n=i(s)).sort((function(e,t){return t.amp-e.amp})),a(!0)},e.setup=function(){e.createCanvas(600,600);for(var r=0;r<50;r++){var c=e.map(r,0,50,0,e.TWO_PI);t[r]=e.createVector(100*e.noise(c),100*e.noise(c+1e3))}(n=i(t)).sort((function(e,t){return t.amp-e.amp}))},e.draw=function(){if(e.background(250),e.mouseIsPressed)e.beginShape(),s.forEach((function(t){return e.vertex(t.x+e.width/2,t.y+e.width/2)})),e.endShape();else{var t=function(t,n,c,s){for(var a=0;a<c.length;a++){var i=t,o=n,u=c[a].freq,j=c[a].amp,l=c[a].phase;t+=j*e.cos(u*r+l+s),n+=j*e.sin(u*r+l+s),e.stroke(0,80),e.noFill(),e.circle(i,o,2*j),e.stroke(0,160),e.line(i,o,t,n)}return e.createVector(t,n)}(e.width/2,e.height/2,n,0);c.unshift(t),e.stroke(0),e.noFill(),e.beginShape(),c.forEach((function(t){return e.vertex(t.x,t.y)})),e.endShape();var i=e.TWO_PI/n.length;e.frameCount%2===0&&(r+=i),r>e.TWO_PI&&a()}};var i=function(t){for(var n=[],r=t.length,c=0;c<r;c++){for(var s=e.createVector(0,0),a=0;a<r;a++){var i=e.TWO_PI*c*a/r,u=e.createVector(e.cos(i),-e.sin(i));s.add(o(t[a],u))}s.div(r);var j=c,l=s.mag(),h=e.atan2(s.y,s.x);n[c]={r:s.x,i:s.y,freq:j,amp:l,phase:h}}return console.log("epicycles count :: ",n.length),n};function o(t,n){var r=t.x*n.x-t.y*n.y,c=t.x*n.y+t.y*n.x;return e.createVector(r,c)}}},48:function(e,t,n){"use strict";n.r(t);t.default=function(e){e.setup=function(){e.createCanvas(200,200),e.createP("testing p tag")},e.draw=function(){e.background(0),e.fill(255),e.rect(100,20,50,50)}}},54:function(e,t,n){"use strict";n.r(t);var r=n(2),c=(n(36),n(37),n(0)),s=n(15),a=n.n(s),i=n(16);var o=function(){return Object(r.jsx)("div",{children:Object(r.jsx)("h1",{children:"Home"})})};var u=function(){return Object(r.jsx)("div",{children:Object(r.jsx)("h1",{children:"Contacts"})})},j=n(33),l=n(11);var h=function(e){var t=e.selected,n=e.handleSelected;return console.log("sketches nav props :: ",e),Object(r.jsxs)(l.a,{activeKey:t,onSelect:function(e){return n(e)},className:"flex-column",children:[Object(r.jsx)(l.a.Link,{eventKey:"fourier",children:"Fourier drawing"}),Object(r.jsx)(l.a.Link,{eventKey:"test-sketch",children:"Test"})]})},d=n(24),f=n.n(d),b=n(30),x=n(31),v=n.n(x),O=(n(45),function(e){var t=Object(c.useRef)(),s=Object(c.useRef)(),a=e.sketchName;return Object(c.useEffect)((function(){var e=t.current;e.innerHTML="";var r=n(46)("./".concat(a,".js")).default;return new v.a(r,e),function(){e.innerHTML=""}})),Object(c.useEffect)((function(){var e=s.current;function t(){return(t=Object(b.a)(f.a.mark((function t(){var n,r;return f.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("".concat(window.location.origin,"/css/sketches/").concat(a,".css"));case 3:return n=t.sent,t.next=6,n.text();case 6:r=t.sent,e.innerHTML=r,t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.error(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})))).apply(this,arguments)}return function(){t.apply(this,arguments)}(),function(){e.innerHTML=""}})),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{ref:t,className:"sketch-container"}),Object(r.jsx)("style",{ref:s})]})});var p=function(){var e=Object(c.useState)("test-sketch"),t=Object(j.a)(e,2),n=t[0],s=t[1];return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(h,{selected:n,handleSelected:s}),Object(r.jsx)(O,{sketchName:n})]})};var k=function(){return Object(r.jsx)("div",{children:Object(r.jsx)("h1",{children:"404"})})},g=n(17),m=n(20);var w=function(){return Object(r.jsxs)(g.a,{bg:"light",expand:"lg",children:[Object(r.jsx)(g.a.Brand,{children:"Lasko"}),Object(r.jsx)(g.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(r.jsx)(g.a.Collapse,{id:"basic-navbar-nav",children:Object(r.jsxs)(l.a,{children:[Object(r.jsx)(m.IndexLinkContainer,{to:"/",children:Object(r.jsx)(l.a.Link,{children:"Home"})}),Object(r.jsx)(m.IndexLinkContainer,{to:"/sketches",children:Object(r.jsx)(l.a.Link,{children:"Sketches"})}),Object(r.jsx)(m.IndexLinkContainer,{to:"/contacts",children:Object(r.jsx)(l.a.Link,{children:"Contacts"})})]})})]})},y=n(4);var L=function(){return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(w,{}),Object(r.jsxs)(y.g,{children:[Object(r.jsx)(y.d,{path:"/contacts",children:Object(r.jsx)(u,{})}),Object(r.jsx)(y.d,{path:"/sketches",children:Object(r.jsx)(p,{})}),Object(r.jsx)(y.d,{exact:!0,path:"/",children:Object(r.jsx)(o,{})}),Object(r.jsx)(y.d,{path:"/",children:Object(r.jsx)(k,{})})]})]})};a.a.render(Object(r.jsx)(i.BrowserRouter,{children:Object(r.jsx)(L,{})}),document.getElementById("root"))}},[[54,1,2]]]);
//# sourceMappingURL=main.dcbcf771.chunk.js.map