function a(e,s){for(var r=0;r<s.length;r++){const t=s[r];if(typeof t!="string"&&!Array.isArray(t)){for(const o in t)if(o!=="default"&&!(o in e)){const f=Object.getOwnPropertyDescriptor(t,o);f&&Object.defineProperty(e,o,f.get?f:{enumerable:!0,get:()=>t[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var n={},p={get exports(){return n},set exports(e){n=e}};(function(e,s){(function(){ace.require(["ace/snippets/fsharp"],function(r){e&&(e.exports=r)})})()})(p);const c=n,i=a({__proto__:null,default:c},[n]);export{i as f};