function m(t,v){for(var n=0;n<v.length;n++){const e=v[n];if(typeof e!="string"&&!Array.isArray(e)){for(const r in e)if(r!=="default"&&!(r in t)){const s=Object.getOwnPropertyDescriptor(e,r);s&&Object.defineProperty(t,r,s.get?s:{enumerable:!0,get:()=>e[r]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}var f={},d={get exports(){return f},set exports(t){f=t}};(function(t,v){ace.define("ace/ext/linking",["require","exports","module","ace/editor","ace/config"],function(n,e,r){var s=n("../editor").Editor;n("../config").defineOptions(s.prototype,"editor",{enableLinking:{set:function(i){i?(this.on("click",k),this.on("mousemove",g)):(this.off("click",k),this.off("mousemove",g))},value:!1}}),e.previousLinkingHover=!1;function g(i){var o=i.editor,l=i.getAccelKey();if(l){var o=i.editor,c=i.getDocumentPosition(),a=o.session,u=a.getTokenAt(c.row,c.column);e.previousLinkingHover&&e.previousLinkingHover!=u&&o._emit("linkHoverOut"),o._emit("linkHover",{position:c,token:u}),e.previousLinkingHover=u}else e.previousLinkingHover&&(o._emit("linkHoverOut"),e.previousLinkingHover=!1)}function k(i){var o=i.getAccelKey(),l=i.getButton();if(l==0&&o){var c=i.editor,a=i.getDocumentPosition(),u=c.session,p=u.getTokenAt(a.row,a.column);c._emit("linkClick",{position:a,token:p})}}}),function(){ace.require(["ace/ext/linking"],function(n){t&&(t.exports=n)})}()})(d);const L=f,y=m({__proto__:null,default:L},[f]);export{y as e};