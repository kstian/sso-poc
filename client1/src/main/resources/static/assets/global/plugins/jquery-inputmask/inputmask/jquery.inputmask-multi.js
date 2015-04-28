/*
 Input Mask plugin for jquery
 http://github.com/RobinHerbots/jquery.inputmask
 Copyright (c) 2010 - 2014 Robin Herbots
 Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
 Version: 3.0.62

  THIS IS A TEMPORARY HACK TO BE COMPATIBLE WITH MULTIPLE MASKS LIKE IN VERSION 2.X - WHEN THE ALTERNATOR SYNTAX IS IMPLEMENTED inputmask-multi WILL BE DELETED!!


*/
(function(b){"function"===typeof define&&define.amd?define(["jquery","./jquery.inputmask"],b):b(jQuery)})(function(b){if(void 0!=b.fn.inputmask){var s=function(d,n,k){function s(a){var b=document.createElement("input");a="on"+a;var c=a in b;c||(b.setAttribute(a,"return;"),c="function"==typeof b[a]);return c}function u(a){if(void 0==b.valHooks[a]||!0!=b.valHooks[a].inputmaskmultipatch){var e=b.valHooks[a]&&b.valHooks[a].get?b.valHooks[a].get:function(b){return b.value},c=b.valHooks[a]&&b.valHooks[a].set?
b.valHooks[a].set:function(b,a){b.value=a;return b};b.valHooks[a]={get:function(a){var c=b(a);return c.data("_inputmask-multi")?(a=c.data("_inputmask-multi"),e(a.elmasks[a.activeMasksetIndex])):e(a)},set:function(a,e){var d=b(a),h=c(a,e);d.data("_inputmask-multi")&&d.triggerHandler("setvalue");return h},inputmaskmultipatch:!0}}}function p(a,e,c){a=a.jquery&&0<a.length?a[0]:a;if("number"==typeof e){e=q(e);c=q(c);c="number"==typeof c?c:e;if(a!=l){var f=b(a).data("_inputmask")||{};f.caret={begin:e,end:c};
b(a).data("_inputmask",f)}b(a).is(":visible")&&(a.scrollLeft=a.scrollWidth,!1==k.insertMode&&e==c&&c++,a.setSelectionRange?(a.selectionStart=e,a.selectionEnd=c):a.createTextRange&&(a=a.createTextRange(),a.collapse(!0),a.moveEnd("character",c),a.moveStart("character",e),a.select()))}else return f=b(a).data("_inputmask"),!b(a).is(":visible")&&f&&void 0!=f.caret?(e=f.caret.begin,c=f.caret.end):a.setSelectionRange?(e=a.selectionStart,c=a.selectionEnd):document.selection&&document.selection.createRange&&
(a=document.selection.createRange(),e=0-a.duplicate().moveStart("character",-1E5),c=e+a.text.length),e=q(e),c=q(c),{begin:e,end:c}}function q(a){!t||"number"!=typeof a||k.greedy&&""==k.placeholder||(a=l.value.length-a);return a}function r(a,e){if("multiMaskScope"!=a){if(b.isFunction(k.determineActiveMasksetIndex))m=k.determineActiveMasksetIndex.call(h,a,e);else{var c=-1,f=-1,d=-1;b.each(e,function(a,e){var h=b(e).data("_inputmask").maskset,g=-1,k=0,l=p(e).begin,n;for(n in h.validPositions)h=parseInt(n),
h>g&&(g=h),k++;if(k>c||k==c&&f>l&&d>g||k==c&&f==l&&d<g)c=k,f=l,m=a,d=g})}var g=h.data("_inputmask-multi")||{activeMasksetIndex:0,elmasks:e};g.activeMasksetIndex=m;h.data("_inputmask-multi",g)}-1==b.inArray(a,["focus"])&&l.value!=e[m]._valueGet()&&(g=""==b(e[m]).val()?e[m]._valueGet():b(e[m]).val(),l.value=g);-1==b.inArray(a,["blur","focus"])&&b(e[m]).hasClass("focus-inputmask")&&(g=p(e[m]),p(l,g.begin,g.end))}function v(a){l=a;h=b(l);t="rtl"==l.dir||k.numericInput;m=0;g=b.map(n,function(a,c){if(isFinite(c)){var f=
'<input type="text" ';h.attr("value")&&(f+='value="'+h.attr("value")+'" ');h.attr("dir")&&(f+='dir="'+h.attr("dir")+'" ');f=b(f+"/>")[0];b(f).inputmask(b.extend({},k,{mask:a.mask}));return f}});h.data("_inputmask-multi",{activeMasksetIndex:0,elmasks:g});("rtl"==l.dir||k.rightAlign)&&h.css("text-align","right");l.dir="ltr";h.removeAttr("dir");""!=h.attr("value")&&r("init",g);h.bind("mouseenter blur focus mouseleave click dblclick keydown keypress keypress",function(a){var c=p(l),f,d=!0;if("keydown"==
a.type){f=a.keyCode;if(f==k.keyCode.DOWN&&m<g.length-1)return m++,r("multiMaskScope",g),!1;if(f==k.keyCode.UP&&0<m)return m--,r("multiMaskScope",g),!1;if(a.ctrlKey||f==k.keyCode.SHIFT||a.altKey)return!0}else if("keypress"==a.type&&(a.ctrlKey||f==k.keyCode.SHIFT||a.altKey))return!0;b.each(g,function(h,g){if("keydown"==a.type){f=a.keyCode;if(f==k.keyCode.BACKSPACE&&g._valueGet().length<c.begin)return;if(f==k.keyCode.TAB)d=!1;else{if(f==k.keyCode.RIGHT){p(g,c.begin+1,c.end+1);d=!1;return}if(f==k.keyCode.LEFT){p(g,
c.begin-1,c.end-1);d=!1;return}}}if(-1!=b.inArray(a.type,["click"])&&(p(g,q(c.begin),q(c.end)),c.begin!=c.end)){d=!1;return}-1!=b.inArray(a.type,["keydown"])&&c.begin!=c.end&&p(g,c.begin,c.end);b(g).triggerHandler(a)});d&&setTimeout(function(){r(a.type,g)},0)});h.bind(w+" dragdrop drop setvalue",function(a){p(l);setTimeout(function(){b.each(g,function(c,d){d._valueSet(l.value);b(d).triggerHandler(a)});setTimeout(function(){r(a.type,g)},0)},0)});u(l.type)}var w=s("paste")?"paste":s("input")?"input":
"propertychange",t,l,h,g,m;k.multi=!0;if(void 0!=d)switch(d.action){case "isComplete":return h=b(d.el),d=h.data("_inputmask-multi"),d=d.elmasks[d.activeMasksetIndex],b(d).inputmask("isComplete");case "unmaskedvalue":return h=d.$input,d=h.data("_inputmask-multi"),d=d.elmasks[d.activeMasksetIndex],b(d).inputmask("unmaskedvalue");case "mask":v(d.el)}};b.extend(b.inputmask.defaults,{multi:!1,determineActiveMasksetIndex:void 0});b.inputmask._fn=b.fn.inputmask;b.fn.inputmask=function(d,n){if("string"===
typeof d)return b.inputmask._fn("_detectScope",n,void 0,void 0,d)?b.inputmask._fn.call(this,d,n,s,"_inputmask-multi"):b.inputmask._fn.call(this,d,n);if("object"==typeof d)return b.inputmask._fn("_detectScope",d)?b.inputmask._fn.call(this,d,n,s,"_inputmask-multi"):b.inputmask._fn.call(this,d,n);if(void 0==d)return b.inputmask._fn.call(this,d,n)}}});
