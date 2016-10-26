!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e(jQuery)}(function(e){var t="ui-effects-",i=e;return e.effects={effect:{}},function(e,t){function i(e,t,i){var n=f[t.type]||{};return null==e?i||!t.def?null:t.def:(e=n.floor?~~e:parseFloat(e),isNaN(e)?t.def:n.mod?(e+n.mod)%n.mod:0>e?0:n.max<e?n.max:e)}function n(t){var i=l(),n=i._rgba=[];return t=t.toLowerCase(),p(u,function(e,o){var r,s=o.re.exec(t),a=s&&o.parse(s),u=o.space||"rgba";if(a)return r=i[u](a),i[c[u].cache]=r[c[u].cache],n=i._rgba=r._rgba,!1}),n.length?("0,0,0,0"===n.join()&&e.extend(n,r.transparent),i):r[t]}function o(e,t,i){return i=(i+1)%1,6*i<1?e+(t-e)*i*6:2*i<1?t:3*i<2?e+(t-e)*(2/3-i)*6:e}var r,s="backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",a=/^([\-+])=\s*(\d+\.?\d*)/,u=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(e){return[e[1],e[2],e[3],e[4]]}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(e){return[2.55*e[1],2.55*e[2],2.55*e[3],e[4]]}},{re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,parse:function(e){return[parseInt(e[1],16),parseInt(e[2],16),parseInt(e[3],16)]}},{re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,parse:function(e){return[parseInt(e[1]+e[1],16),parseInt(e[2]+e[2],16),parseInt(e[3]+e[3],16)]}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(e){return[e[1],e[2]/100,e[3]/100,e[4]]}}],l=e.Color=function(t,i,n,o){return new e.Color.fn.parse(t,i,n,o)},c={rgba:{props:{red:{idx:0,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,type:"byte"}}},hsla:{props:{hue:{idx:0,type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"}}}},f={"byte":{floor:!0,max:255},percent:{max:1},degrees:{mod:360,floor:!0}},h=l.support={},d=e("<p>")[0],p=e.each;d.style.cssText="background-color:rgba(1,1,1,.5)",h.rgba=d.style.backgroundColor.indexOf("rgba")>-1,p(c,function(e,t){t.cache="_"+e,t.props.alpha={idx:3,type:"percent",def:1}}),l.fn=e.extend(l.prototype,{parse:function(o,s,a,u){if(o===t)return this._rgba=[null,null,null,null],this;(o.jquery||o.nodeType)&&(o=e(o).css(s),s=t);var f=this,h=e.type(o),d=this._rgba=[];return s!==t&&(o=[o,s,a,u],h="array"),"string"===h?this.parse(n(o)||r._default):"array"===h?(p(c.rgba.props,function(e,t){d[t.idx]=i(o[t.idx],t)}),this):"object"===h?(o instanceof l?p(c,function(e,t){o[t.cache]&&(f[t.cache]=o[t.cache].slice())}):p(c,function(t,n){var r=n.cache;p(n.props,function(e,t){if(!f[r]&&n.to){if("alpha"===e||null==o[e])return;f[r]=n.to(f._rgba)}f[r][t.idx]=i(o[e],t,!0)}),f[r]&&e.inArray(null,f[r].slice(0,3))<0&&(f[r][3]=1,n.from&&(f._rgba=n.from(f[r])))}),this):void 0},is:function(e){var t=l(e),i=!0,n=this;return p(c,function(e,o){var r,s=t[o.cache];return s&&(r=n[o.cache]||o.to&&o.to(n._rgba)||[],p(o.props,function(e,t){if(null!=s[t.idx])return i=s[t.idx]===r[t.idx]})),i}),i},_space:function(){var e=[],t=this;return p(c,function(i,n){t[n.cache]&&e.push(i)}),e.pop()},transition:function(e,t){var n=l(e),o=n._space(),r=c[o],s=0===this.alpha()?l("transparent"):this,a=s[r.cache]||r.to(s._rgba),u=a.slice();return n=n[r.cache],p(r.props,function(e,o){var r=o.idx,s=a[r],l=n[r],c=f[o.type]||{};null!==l&&(null===s?u[r]=l:(c.mod&&(l-s>c.mod/2?s+=c.mod:s-l>c.mod/2&&(s-=c.mod)),u[r]=i((l-s)*t+s,o)))}),this[o](u)},blend:function(t){if(1===this._rgba[3])return this;var i=this._rgba.slice(),n=i.pop(),o=l(t)._rgba;return l(e.map(i,function(e,t){return(1-n)*o[t]+n*e}))},toRgbaString:function(){var t="rgba(",i=e.map(this._rgba,function(e,t){return null==e?t>2?1:0:e});return 1===i[3]&&(i.pop(),t="rgb("),t+i.join()+")"},toHslaString:function(){var t="hsla(",i=e.map(this.hsla(),function(e,t){return null==e&&(e=t>2?1:0),t&&t<3&&(e=Math.round(100*e)+"%"),e});return 1===i[3]&&(i.pop(),t="hsl("),t+i.join()+")"},toHexString:function(t){var i=this._rgba.slice(),n=i.pop();return t&&i.push(~~(255*n)),"#"+e.map(i,function(e){return e=(e||0).toString(16),1===e.length?"0"+e:e}).join("")},toString:function(){return 0===this._rgba[3]?"transparent":this.toRgbaString()}}),l.fn.parse.prototype=l.fn,c.hsla.to=function(e){if(null==e[0]||null==e[1]||null==e[2])return[null,null,null,e[3]];var t,i,n=e[0]/255,o=e[1]/255,r=e[2]/255,s=e[3],a=Math.max(n,o,r),u=Math.min(n,o,r),l=a-u,c=a+u,f=.5*c;return t=u===a?0:n===a?60*(o-r)/l+360:o===a?60*(r-n)/l+120:60*(n-o)/l+240,i=0===l?0:f<=.5?l/c:l/(2-c),[Math.round(t)%360,i,f,null==s?1:s]},c.hsla.from=function(e){if(null==e[0]||null==e[1]||null==e[2])return[null,null,null,e[3]];var t=e[0]/360,i=e[1],n=e[2],r=e[3],s=n<=.5?n*(1+i):n+i-n*i,a=2*n-s;return[Math.round(255*o(a,s,t+1/3)),Math.round(255*o(a,s,t)),Math.round(255*o(a,s,t-1/3)),r]},p(c,function(n,o){var r=o.props,s=o.cache,u=o.to,c=o.from;l.fn[n]=function(n){if(u&&!this[s]&&(this[s]=u(this._rgba)),n===t)return this[s].slice();var o,a=e.type(n),f="array"===a||"object"===a?n:arguments,h=this[s].slice();return p(r,function(e,t){var n=f["object"===a?e:t.idx];null==n&&(n=h[t.idx]),h[t.idx]=i(n,t)}),c?(o=l(c(h)),o[s]=h,o):l(h)},p(r,function(t,i){l.fn[t]||(l.fn[t]=function(o){var r,s=e.type(o),u="alpha"===t?this._hsla?"hsla":"rgba":n,l=this[u](),c=l[i.idx];return"undefined"===s?c:("function"===s&&(o=o.call(this,c),s=e.type(o)),null==o&&i.empty?this:("string"===s&&(r=a.exec(o),r&&(o=c+parseFloat(r[2])*("+"===r[1]?1:-1))),l[i.idx]=o,this[u](l)))})})}),l.hook=function(t){var i=t.split(" ");p(i,function(t,i){e.cssHooks[i]={set:function(t,o){var r,s,a="";if("transparent"!==o&&("string"!==e.type(o)||(r=n(o)))){if(o=l(r||o),!h.rgba&&1!==o._rgba[3]){for(s="backgroundColor"===i?t.parentNode:t;(""===a||"transparent"===a)&&s&&s.style;)try{a=e.css(s,"backgroundColor"),s=s.parentNode}catch(e){}o=o.blend(a&&"transparent"!==a?a:"_default")}o=o.toRgbaString()}try{t.style[i]=o}catch(e){}}},e.fx.step[i]=function(t){t.colorInit||(t.start=l(t.elem,i),t.end=l(t.end),t.colorInit=!0),e.cssHooks[i].set(t.elem,t.start.transition(t.end,t.pos))}})},l.hook(s),e.cssHooks.borderColor={expand:function(e){var t={};return p(["Top","Right","Bottom","Left"],function(i,n){t["border"+n+"Color"]=e}),t}},r=e.Color.names={aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00",transparent:[null,null,null,0],_default:"#ffffff"}}(i),function(){function t(t){var i,n,o=t.ownerDocument.defaultView?t.ownerDocument.defaultView.getComputedStyle(t,null):t.currentStyle,r={};if(o&&o.length&&o[0]&&o[o[0]])for(n=o.length;n--;)i=o[n],"string"==typeof o[i]&&(r[e.camelCase(i)]=o[i]);else for(i in o)"string"==typeof o[i]&&(r[i]=o[i]);return r}function n(t,i){var n,o,s={};for(n in i)o=i[n],t[n]!==o&&(r[n]||!e.fx.step[n]&&isNaN(parseFloat(o))||(s[n]=o));return s}var o=["add","remove","toggle"],r={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};e.each(["borderLeftStyle","borderRightStyle","borderBottomStyle","borderTopStyle"],function(t,n){e.fx.step[n]=function(e){("none"!==e.end&&!e.setAttr||1===e.pos&&!e.setAttr)&&(i.style(e.elem,n,e.end),e.setAttr=!0)}}),e.fn.addBack||(e.fn.addBack=function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}),e.effects.animateClass=function(i,r,s,a){var u=e.speed(r,s,a);return this.queue(function(){var r,s=e(this),a=s.attr("class")||"",l=u.children?s.find("*").addBack():s;l=l.map(function(){var i=e(this);return{el:i,start:t(this)}}),r=function(){e.each(o,function(e,t){i[t]&&s[t+"Class"](i[t])})},r(),l=l.map(function(){return this.end=t(this.el[0]),this.diff=n(this.start,this.end),this}),s.attr("class",a),l=l.map(function(){var t=this,i=e.Deferred(),n=e.extend({},u,{queue:!1,complete:function(){i.resolve(t)}});return this.el.animate(this.diff,n),i.promise()}),e.when.apply(e,l.get()).done(function(){r(),e.each(arguments,function(){var t=this.el;e.each(this.diff,function(e){t.css(e,"")})}),u.complete.call(s[0])})})},e.fn.extend({addClass:function(t){return function(i,n,o,r){return n?e.effects.animateClass.call(this,{add:i},n,o,r):t.apply(this,arguments)}}(e.fn.addClass),removeClass:function(t){return function(i,n,o,r){return arguments.length>1?e.effects.animateClass.call(this,{remove:i},n,o,r):t.apply(this,arguments)}}(e.fn.removeClass),toggleClass:function(t){return function(i,n,o,r,s){return"boolean"==typeof n||void 0===n?o?e.effects.animateClass.call(this,n?{add:i}:{remove:i},o,r,s):t.apply(this,arguments):e.effects.animateClass.call(this,{toggle:i},n,o,r)}}(e.fn.toggleClass),switchClass:function(t,i,n,o,r){return e.effects.animateClass.call(this,{add:i,remove:t},n,o,r)}})}(),function(){function i(t,i,n,o){return e.isPlainObject(t)&&(i=t,t=t.effect),t={effect:t},null==i&&(i={}),e.isFunction(i)&&(o=i,n=null,i={}),("number"==typeof i||e.fx.speeds[i])&&(o=n,n=i,i={}),e.isFunction(n)&&(o=n,n=null),i&&e.extend(t,i),n=n||i.duration,t.duration=e.fx.off?0:"number"==typeof n?n:n in e.fx.speeds?e.fx.speeds[n]:e.fx.speeds._default,t.complete=o||i.complete,t}function n(t){return!(t&&"number"!=typeof t&&!e.fx.speeds[t])||("string"==typeof t&&!e.effects.effect[t]||(!!e.isFunction(t)||"object"==typeof t&&!t.effect))}e.extend(e.effects,{version:"1.11.4",save:function(e,i){for(var n=0;n<i.length;n++)null!==i[n]&&e.data(t+i[n],e[0].style[i[n]])},restore:function(e,i){var n,o;for(o=0;o<i.length;o++)null!==i[o]&&(n=e.data(t+i[o]),void 0===n&&(n=""),e.css(i[o],n))},setMode:function(e,t){return"toggle"===t&&(t=e.is(":hidden")?"show":"hide"),t},getBaseline:function(e,t){var i,n;switch(e[0]){case"top":i=0;break;case"middle":i=.5;break;case"bottom":i=1;break;default:i=e[0]/t.height}switch(e[1]){case"left":n=0;break;case"center":n=.5;break;case"right":n=1;break;default:n=e[1]/t.width}return{x:n,y:i}},createWrapper:function(t){if(t.parent().is(".ui-effects-wrapper"))return t.parent();var i={width:t.outerWidth(!0),height:t.outerHeight(!0),"float":t.css("float")},n=e("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),o={width:t.width(),height:t.height()},r=document.activeElement;try{r.id}catch(e){r=document.body}return t.wrap(n),(t[0]===r||e.contains(t[0],r))&&e(r).focus(),n=t.parent(),"static"===t.css("position")?(n.css({position:"relative"}),t.css({position:"relative"})):(e.extend(i,{position:t.css("position"),zIndex:t.css("z-index")}),e.each(["top","left","bottom","right"],function(e,n){i[n]=t.css(n),isNaN(parseInt(i[n],10))&&(i[n]="auto")}),t.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})),t.css(o),n.css(i).show()},removeWrapper:function(t){var i=document.activeElement;return t.parent().is(".ui-effects-wrapper")&&(t.parent().replaceWith(t),(t[0]===i||e.contains(t[0],i))&&e(i).focus()),t},setTransition:function(t,i,n,o){return o=o||{},e.each(i,function(e,i){var r=t.cssUnit(i);r[0]>0&&(o[i]=r[0]*n+r[1])}),o}}),e.fn.extend({effect:function(){function t(t){function i(){e.isFunction(r)&&r.call(o[0]),e.isFunction(t)&&t()}var o=e(this),r=n.complete,a=n.mode;(o.is(":hidden")?"hide"===a:"show"===a)?(o[a](),i()):s.call(o[0],n,i)}var n=i.apply(this,arguments),o=n.mode,r=n.queue,s=e.effects.effect[n.effect];return e.fx.off||!s?o?this[o](n.duration,n.complete):this.each(function(){n.complete&&n.complete.call(this)}):r===!1?this.each(t):this.queue(r||"fx",t)},show:function(e){return function(t){if(n(t))return e.apply(this,arguments);var o=i.apply(this,arguments);return o.mode="show",this.effect.call(this,o)}}(e.fn.show),hide:function(e){return function(t){if(n(t))return e.apply(this,arguments);var o=i.apply(this,arguments);return o.mode="hide",this.effect.call(this,o)}}(e.fn.hide),toggle:function(e){return function(t){if(n(t)||"boolean"==typeof t)return e.apply(this,arguments);var o=i.apply(this,arguments);return o.mode="toggle",this.effect.call(this,o)}}(e.fn.toggle),cssUnit:function(t){var i=this.css(t),n=[];return e.each(["em","px","%","pt"],function(e,t){i.indexOf(t)>0&&(n=[parseFloat(i),t])}),n}})}(),function(){var t={};e.each(["Quad","Cubic","Quart","Quint","Expo"],function(e,i){t[i]=function(t){return Math.pow(t,e+2)}}),e.extend(t,{Sine:function(e){return 1-Math.cos(e*Math.PI/2)},Circ:function(e){return 1-Math.sqrt(1-e*e)},Elastic:function(e){return 0===e||1===e?e:-Math.pow(2,8*(e-1))*Math.sin((80*(e-1)-7.5)*Math.PI/15)},Back:function(e){return e*e*(3*e-2)},Bounce:function(e){for(var t,i=4;e<((t=Math.pow(2,--i))-1)/11;);return 1/Math.pow(4,3-i)-7.5625*Math.pow((3*t-2)/22-e,2)}}),e.each(t,function(t,i){e.easing["easeIn"+t]=i,e.easing["easeOut"+t]=function(e){return 1-i(1-e)},e.easing["easeInOut"+t]=function(e){return e<.5?i(2*e)/2:1-i(e*-2+2)/2}})}(),e.effects}),function(e){"function"==typeof define&&define.amd?define(["jquery","./effect"],e):e(jQuery)}(function(e){return e.effects.effect.blind=function(t,i){var n,o,r,s=e(this),a=/up|down|vertical/,u=/up|left|vertical|horizontal/,l=["position","top","bottom","left","right","height","width"],c=e.effects.setMode(s,t.mode||"hide"),f=t.direction||"up",h=a.test(f),d=h?"height":"width",p=h?"top":"left",m=u.test(f),g={},v="show"===c;s.parent().is(".ui-effects-wrapper")?e.effects.save(s.parent(),l):e.effects.save(s,l),s.show(),n=e.effects.createWrapper(s).css({overflow:"hidden"}),o=n[d](),r=parseFloat(n.css(p))||0,g[d]=v?o:0,m||(s.css(h?"bottom":"right",0).css(h?"top":"left","auto").css({position:"absolute"}),g[p]=v?r:o+r),v&&(n.css(d,0),m||n.css(p,r+o)),n.animate(g,{duration:t.duration,easing:t.easing,queue:!1,complete:function(){"hide"===c&&s.hide(),e.effects.restore(s,l),e.effects.removeWrapper(s),i()}})}}),function(e){"function"==typeof define&&define.amd?define(["jquery","./effect"],e):e(jQuery)}(function(e){return e.effects.effect.bounce=function(t,i){var n,o,r,s=e(this),a=["position","top","bottom","left","right","height","width"],u=e.effects.setMode(s,t.mode||"effect"),l="hide"===u,c="show"===u,f=t.direction||"up",h=t.distance,d=t.times||5,p=2*d+(c||l?1:0),m=t.duration/p,g=t.easing,v="up"===f||"down"===f?"top":"left",b="up"===f||"left"===f,y=s.queue(),x=y.length;for((c||l)&&a.push("opacity"),e.effects.save(s,a),s.show(),e.effects.createWrapper(s),h||(h=s["top"===v?"outerHeight":"outerWidth"]()/3),c&&(r={opacity:1},r[v]=0,s.css("opacity",0).css(v,b?2*-h:2*h).animate(r,m,g)),l&&(h/=Math.pow(2,d-1)),r={},r[v]=0,n=0;n<d;n++)o={},o[v]=(b?"-=":"+=")+h,s.animate(o,m,g).animate(r,m,g),h=l?2*h:h/2;l&&(o={opacity:0},o[v]=(b?"-=":"+=")+h,s.animate(o,m,g)),s.queue(function(){l&&s.hide(),e.effects.restore(s,a),e.effects.removeWrapper(s),i()}),x>1&&y.splice.apply(y,[1,0].concat(y.splice(x,p+1))),s.dequeue()}}),function(e){"function"==typeof define&&define.amd?define(["jquery","./effect"],e):e(jQuery)}(function(e){return e.effects.effect.clip=function(t,i){var n,o,r,s=e(this),a=["position","top","bottom","left","right","height","width"],u=e.effects.setMode(s,t.mode||"hide"),l="show"===u,c=t.direction||"vertical",f="vertical"===c,h=f?"height":"width",d=f?"top":"left",p={};e.effects.save(s,a),s.show(),n=e.effects.createWrapper(s).css({overflow:"hidden"}),o="IMG"===s[0].tagName?n:s,r=o[h](),l&&(o.css(h,0),o.css(d,r/2)),p[h]=l?r:0,p[d]=l?0:r/2,o.animate(p,{queue:!1,duration:t.duration,easing:t.easing,complete:function(){l||s.hide(),e.effects.restore(s,a),e.effects.removeWrapper(s),i()}})}}),function(e){"function"==typeof define&&define.amd?define(["jquery","./effect"],e):e(jQuery)}(function(e){return e.effects.effect.drop=function(t,i){var n,o=e(this),r=["position","top","bottom","left","right","opacity","height","width"],s=e.effects.setMode(o,t.mode||"hide"),a="show"===s,u=t.direction||"left",l="up"===u||"down"===u?"top":"left",c="up"===u||"left"===u?"pos":"neg",f={opacity:a?1:0};e.effects.save(o,r),o.show(),e.effects.createWrapper(o),n=t.distance||o["top"===l?"outerHeight":"outerWidth"](!0)/2,a&&o.css("opacity",0).css(l,"pos"===c?-n:n),f[l]=(a?"pos"===c?"+=":"-=":"pos"===c?"-=":"+=")+n,o.animate(f,{queue:!1,duration:t.duration,easing:t.easing,complete:function(){"hide"===s&&o.hide(),e.effects.restore(o,r),e.effects.removeWrapper(o),i()}})}}),function(e){"function"==typeof define&&define.amd?define(["jquery","./effect"],e):e(jQuery)}(function(e){return e.effects.effect.explode=function(t,i){function n(){y.push(this),y.length===f*h&&o()}function o(){d.css({visibility:"visible"}),e(y).remove(),m||d.hide(),i()}var r,s,a,u,l,c,f=t.pieces?Math.round(Math.sqrt(t.pieces)):3,h=f,d=e(this),p=e.effects.setMode(d,t.mode||"hide"),m="show"===p,g=d.show().css("visibility","hidden").offset(),v=Math.ceil(d.outerWidth()/h),b=Math.ceil(d.outerHeight()/f),y=[];for(r=0;r<f;r++)for(u=g.top+r*b,c=r-(f-1)/2,s=0;s<h;s++)a=g.left+s*v,l=s-(h-1)/2,d.clone().appendTo("body").wrap("<div></div>").css({position:"absolute",visibility:"visible",left:-s*v,top:-r*b}).parent().addClass("ui-effects-explode").css({position:"absolute",overflow:"hidden",width:v,height:b,left:a+(m?l*v:0),top:u+(m?c*b:0),opacity:m?0:1}).animate({left:a+(m?0:l*v),top:u+(m?0:c*b),opacity:m?1:0},t.duration||500,t.easing,n)}}),function(e){"function"==typeof define&&define.amd?define(["jquery","./effect"],e):e(jQuery)}(function(e){return e.effects.effect.fade=function(t,i){var n=e(this),o=e.effects.setMode(n,t.mode||"toggle");n.animate({opacity:o},{queue:!1,duration:t.duration,easing:t.easing,complete:i})}}),function(e){"function"==typeof define&&define.amd?define(["jquery","./effect"],e):e(jQuery)}(function(e){return e.effects.effect.fold=function(t,i){var n,o,r=e(this),s=["position","top","bottom","left","right","height","width"],a=e.effects.setMode(r,t.mode||"hide"),u="show"===a,l="hide"===a,c=t.size||15,f=/([0-9]+)%/.exec(c),h=!!t.horizFirst,d=u!==h,p=d?["width","height"]:["height","width"],m=t.duration/2,g={},v={};e.effects.save(r,s),r.show(),n=e.effects.createWrapper(r).css({overflow:"hidden"}),o=d?[n.width(),n.height()]:[n.height(),n.width()],f&&(c=parseInt(f[1],10)/100*o[l?0:1]),u&&n.css(h?{height:0,width:c}:{height:c,width:0}),g[p[0]]=u?o[0]:c,v[p[1]]=u?o[1]:0,n.animate(g,m,t.easing).animate(v,m,t.easing,function(){l&&r.hide(),e.effects.restore(r,s),e.effects.removeWrapper(r),i()})}}),function(e){"function"==typeof define&&define.amd?define(["jquery","./effect"],e):e(jQuery)}(function(e){return e.effects.effect.highlight=function(t,i){var n=e(this),o=["backgroundImage","backgroundColor","opacity"],r=e.effects.setMode(n,t.mode||"show"),s={backgroundColor:n.css("backgroundColor")};"hide"===r&&(s.opacity=0),e.effects.save(n,o),n.show().css({backgroundImage:"none",backgroundColor:t.color||"#ffff99"}).animate(s,{queue:!1,duration:t.duration,easing:t.easing,complete:function(){"hide"===r&&n.hide(),e.effects.restore(n,o),i()}})}}),function(e){"function"==typeof define&&define.amd?define(["jquery","./effect"],e):e(jQuery)}(function(e){return e.effects.effect.size=function(t,i){var n,o,r,s=e(this),a=["position","top","bottom","left","right","width","height","overflow","opacity"],u=["position","top","bottom","left","right","overflow","opacity"],l=["width","height","overflow"],c=["fontSize"],f=["borderTopWidth","borderBottomWidth","paddingTop","paddingBottom"],h=["borderLeftWidth","borderRightWidth","paddingLeft","paddingRight"],d=e.effects.setMode(s,t.mode||"effect"),p=t.restore||"effect"!==d,m=t.scale||"both",g=t.origin||["middle","center"],v=s.css("position"),b=p?a:u,y={height:0,width:0,outerHeight:0,outerWidth:0};"show"===d&&s.show(),n={height:s.height(),width:s.width(),outerHeight:s.outerHeight(),outerWidth:s.outerWidth()},"toggle"===t.mode&&"show"===d?(s.from=t.to||y,s.to=t.from||n):(s.from=t.from||("show"===d?y:n),s.to=t.to||("hide"===d?y:n)),r={from:{y:s.from.height/n.height,x:s.from.width/n.width},to:{y:s.to.height/n.height,x:s.to.width/n.width}},"box"!==m&&"both"!==m||(r.from.y!==r.to.y&&(b=b.concat(f),s.from=e.effects.setTransition(s,f,r.from.y,s.from),s.to=e.effects.setTransition(s,f,r.to.y,s.to)),r.from.x!==r.to.x&&(b=b.concat(h),s.from=e.effects.setTransition(s,h,r.from.x,s.from),s.to=e.effects.setTransition(s,h,r.to.x,s.to))),"content"!==m&&"both"!==m||r.from.y!==r.to.y&&(b=b.concat(c).concat(l),s.from=e.effects.setTransition(s,c,r.from.y,s.from),s.to=e.effects.setTransition(s,c,r.to.y,s.to)),e.effects.save(s,b),s.show(),e.effects.createWrapper(s),s.css("overflow","hidden").css(s.from),g&&(o=e.effects.getBaseline(g,n),s.from.top=(n.outerHeight-s.outerHeight())*o.y,s.from.left=(n.outerWidth-s.outerWidth())*o.x,s.to.top=(n.outerHeight-s.to.outerHeight)*o.y,s.to.left=(n.outerWidth-s.to.outerWidth)*o.x),s.css(s.from),"content"!==m&&"both"!==m||(f=f.concat(["marginTop","marginBottom"]).concat(c),h=h.concat(["marginLeft","marginRight"]),l=a.concat(f).concat(h),s.find("*[width]").each(function(){var i=e(this),n={height:i.height(),width:i.width(),outerHeight:i.outerHeight(),outerWidth:i.outerWidth()};p&&e.effects.save(i,l),i.from={height:n.height*r.from.y,width:n.width*r.from.x,outerHeight:n.outerHeight*r.from.y,outerWidth:n.outerWidth*r.from.x},i.to={height:n.height*r.to.y,width:n.width*r.to.x,outerHeight:n.height*r.to.y,outerWidth:n.width*r.to.x},r.from.y!==r.to.y&&(i.from=e.effects.setTransition(i,f,r.from.y,i.from),i.to=e.effects.setTransition(i,f,r.to.y,i.to)),r.from.x!==r.to.x&&(i.from=e.effects.setTransition(i,h,r.from.x,i.from),i.to=e.effects.setTransition(i,h,r.to.x,i.to)),i.css(i.from),i.animate(i.to,t.duration,t.easing,function(){p&&e.effects.restore(i,l)})})),s.animate(s.to,{queue:!1,duration:t.duration,easing:t.easing,complete:function(){0===s.to.opacity&&s.css("opacity",s.from.opacity),"hide"===d&&s.hide(),e.effects.restore(s,b),p||("static"===v?s.css({position:"relative",top:s.to.top,left:s.to.left}):e.each(["top","left"],function(e,t){s.css(t,function(t,i){var n=parseInt(i,10),o=e?s.to.left:s.to.top;return"auto"===i?o+"px":n+o+"px"})})),e.effects.removeWrapper(s),i()}})}}),function(e){"function"==typeof define&&define.amd?define(["jquery","./effect","./effect-size"],e):e(jQuery)}(function(e){return e.effects.effect.scale=function(t,i){var n=e(this),o=e.extend(!0,{},t),r=e.effects.setMode(n,t.mode||"effect"),s=parseInt(t.percent,10)||(0===parseInt(t.percent,10)?0:"hide"===r?0:100),a=t.direction||"both",u=t.origin,l={height:n.height(),width:n.width(),outerHeight:n.outerHeight(),outerWidth:n.outerWidth()},c={y:"horizontal"!==a?s/100:1,x:"vertical"!==a?s/100:1};o.effect="size",o.queue=!1,o.complete=i,"effect"!==r&&(o.origin=u||["middle","center"],o.restore=!0),o.from=t.from||("show"===r?{height:0,width:0,outerHeight:0,outerWidth:0}:l),o.to={height:l.height*c.y,width:l.width*c.x,outerHeight:l.outerHeight*c.y,outerWidth:l.outerWidth*c.x},o.fade&&("show"===r&&(o.from.opacity=0,o.to.opacity=1),"hide"===r&&(o.from.opacity=1,o.to.opacity=0)),n.effect(o)}}),function(e){"function"==typeof define&&define.amd?define(["jquery","./effect","./effect-scale"],e):e(jQuery)}(function(e){return e.effects.effect.puff=function(t,i){var n=e(this),o=e.effects.setMode(n,t.mode||"hide"),r="hide"===o,s=parseInt(t.percent,10)||150,a=s/100,u={height:n.height(),width:n.width(),outerHeight:n.outerHeight(),outerWidth:n.outerWidth()};e.extend(t,{effect:"scale",queue:!1,fade:!0,mode:o,complete:i,percent:r?s:100,from:r?u:{height:u.height*a,width:u.width*a,outerHeight:u.outerHeight*a,outerWidth:u.outerWidth*a}}),n.effect(t)}}),function(e){"function"==typeof define&&define.amd?define(["jquery","./effect"],e):e(jQuery)}(function(e){return e.effects.effect.pulsate=function(t,i){var n,o=e(this),r=e.effects.setMode(o,t.mode||"show"),s="show"===r,a="hide"===r,u=s||"hide"===r,l=2*(t.times||5)+(u?1:0),c=t.duration/l,f=0,h=o.queue(),d=h.length;for(!s&&o.is(":visible")||(o.css("opacity",0).show(),f=1),n=1;n<l;n++)o.animate({opacity:f},c,t.easing),f=1-f;o.animate({opacity:f},c,t.easing),o.queue(function(){a&&o.hide(),i()}),d>1&&h.splice.apply(h,[1,0].concat(h.splice(d,l+1))),o.dequeue()}}),function(e){"function"==typeof define&&define.amd?define(["jquery","./effect"],e):e(jQuery)}(function(e){return e.effects.effect.shake=function(t,i){var n,o=e(this),r=["position","top","bottom","left","right","height","width"],s=e.effects.setMode(o,t.mode||"effect"),a=t.direction||"left",u=t.distance||20,l=t.times||3,c=2*l+1,f=Math.round(t.duration/c),h="up"===a||"down"===a?"top":"left",d="up"===a||"left"===a,p={},m={},g={},v=o.queue(),b=v.length;for(e.effects.save(o,r),o.show(),e.effects.createWrapper(o),p[h]=(d?"-=":"+=")+u,m[h]=(d?"+=":"-=")+2*u,g[h]=(d?"-=":"+=")+2*u,o.animate(p,f,t.easing),n=1;n<l;n++)o.animate(m,f,t.easing).animate(g,f,t.easing);o.animate(m,f,t.easing).animate(p,f/2,t.easing).queue(function(){"hide"===s&&o.hide(),e.effects.restore(o,r),e.effects.removeWrapper(o),i()}),b>1&&v.splice.apply(v,[1,0].concat(v.splice(b,c+1))),o.dequeue()}}),function(e){"function"==typeof define&&define.amd?define(["jquery","./effect"],e):e(jQuery)}(function(e){return e.effects.effect.slide=function(t,i){var n,o=e(this),r=["position","top","bottom","left","right","width","height"],s=e.effects.setMode(o,t.mode||"show"),a="show"===s,u=t.direction||"left",l="up"===u||"down"===u?"top":"left",c="up"===u||"left"===u,f={};e.effects.save(o,r),o.show(),n=t.distance||o["top"===l?"outerHeight":"outerWidth"](!0),e.effects.createWrapper(o).css({overflow:"hidden"}),a&&o.css(l,c?isNaN(n)?"-"+n:-n:n),f[l]=(a?c?"+=":"-=":c?"-=":"+=")+n,o.animate(f,{queue:!1,duration:t.duration,easing:t.easing,complete:function(){"hide"===s&&o.hide(),e.effects.restore(o,r),e.effects.removeWrapper(o),i()}})}}),function(e){"function"==typeof define&&define.amd?define(["jquery","./effect"],e):e(jQuery)}(function(e){return e.effects.effect.transfer=function(t,i){var n=e(this),o=e(t.to),r="fixed"===o.css("position"),s=e("body"),a=r?s.scrollTop():0,u=r?s.scrollLeft():0,l=o.offset(),c={top:l.top-a,left:l.left-u,height:o.innerHeight(),width:o.innerWidth()},f=n.offset(),h=e("<div class='ui-effects-transfer'></div>").appendTo(document.body).addClass(t.className).css({top:f.top-a,left:f.left-u,height:n.innerHeight(),width:n.innerWidth(),position:r?"fixed":"absolute"}).animate(c,t.duration,t.easing,function(){h.remove(),i()})}});