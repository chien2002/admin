function l(e,s){for(var t=0;t<s.length;t++){const r=s[t];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const p=Object.getOwnPropertyDescriptor(r,o);p&&Object.defineProperty(e,o,p.get?p:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var n={},c={get exports(){return n},set exports(e){n=e}};(function(e,s){(function(){ace.require(["ace/snippets/plsql"],function(t){e&&(e.exports=t)})})()})(c);const f=n,i=l({__proto__:null,default:f},[n]);export{i as p};