function p(e,n){for(var t=0;t<n.length;t++){const r=n[t];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const a=Object.getOwnPropertyDescriptor(r,o);a&&Object.defineProperty(e,o,a.get?a:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var s={},c={get exports(){return s},set exports(e){s=e}};(function(e,n){(function(){ace.require(["ace/snippets/soy_template"],function(t){e&&(e.exports=t)})})()})(c);const f=s,i=p({__proto__:null,default:f},[s]);export{i as s};