function v(r,m){for(var a=0;a<m.length;a++){const l=m[a];if(typeof l!="string"&&!Array.isArray(l)){for(const g in l)if(g!=="default"&&!(g in r)){const n=Object.getOwnPropertyDescriptor(l,g);n&&Object.defineProperty(r,g,n.get?n:{enumerable:!0,get:()=>l[g]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}var f={},k={get exports(){return f},set exports(r){f=r}};(function(r,m){ace.define("ace/mode/haskell_cabal_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(a,l,g){var n=a("../lib/oop"),c=a("./text_highlight_rules").TextHighlightRules,d=function(){this.$rules={start:[{token:"comment",regex:"^\\s*--.*$"},{token:["keyword"],regex:/^(\s*\w.*?)(:(?:\s+|$))/},{token:"constant.numeric",regex:/[\d_]+(?:(?:[\.\d_]*)?)/},{token:"constant.language.boolean",regex:"(?:true|false|TRUE|FALSE|True|False|yes|no)\\b"},{token:"markup.heading",regex:/^(\w.*)$/}]}};n.inherits(d,c),l.CabalHighlightRules=d}),ace.define("ace/mode/folding/haskell_cabal",["require","exports","module","ace/lib/oop","ace/mode/folding/fold_mode","ace/range"],function(a,l,g){var n=a("../../lib/oop"),c=a("./fold_mode").FoldMode,d=a("../../range").Range,u=l.FoldMode=function(){};n.inherits(u,c),function(){this.isHeading=function(t,h){var e="markup.heading",o=t.getTokens(h)[0];return h==0||o&&o.type.lastIndexOf(e,0)===0},this.getFoldWidget=function(t,h,e){if(this.isHeading(t,e))return"start";if(h==="markbeginend"&&!/^\s*$/.test(t.getLine(e))){for(var o=t.getLength();++e<o&&/^\s*$/.test(t.getLine(e)););if(e==o||this.isHeading(t,e))return"end"}return""},this.getFoldWidgetRange=function(t,h,e){var o=t.getLine(e),b=o.length,_=t.getLength(),s=e,i=e;if(this.isHeading(t,e)){for(;++e<_;)if(this.isHeading(t,e)){e--;break}if(i=e,i>s)for(;i>s&&/^\s*$/.test(t.getLine(i));)i--;if(i>s){var p=t.getLine(i).length;return new d(s,b,i,p)}}else if(this.getFoldWidget(t,h,e)==="end"){for(var i=e,p=t.getLine(i).length;--e>=0&&!this.isHeading(t,e););var o=t.getLine(e),b=o.length;return new d(e,b,i,p)}}}.call(u.prototype)}),ace.define("ace/mode/haskell_cabal",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/haskell_cabal_highlight_rules","ace/mode/folding/haskell_cabal"],function(a,l,g){var n=a("../lib/oop"),c=a("./text").Mode,d=a("./haskell_cabal_highlight_rules").CabalHighlightRules,u=a("./folding/haskell_cabal").FoldMode,t=function(){this.HighlightRules=d,this.foldingRules=new u,this.$behaviour=this.$defaultBehaviour};n.inherits(t,c),function(){this.lineCommentStart="--",this.blockComment=null,this.$id="ace/mode/haskell_cabal"}.call(t.prototype),l.Mode=t}),function(){ace.require(["ace/mode/haskell_cabal"],function(a){r&&(r.exports=a)})}()})(k);const x=f,H=v({__proto__:null,default:x},[f]);export{H as m};
