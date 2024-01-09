function x(i,u){for(var e=0;e<u.length;e++){const r=u[e];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in i)){const n=Object.getOwnPropertyDescriptor(r,o);n&&Object.defineProperty(i,o,n.get?n:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}))}var p={},m={get exports(){return p},set exports(i){p=i}};(function(i,u){ace.define("ace/mode/latex_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(e,r,o){var n=e("../lib/oop"),g=e("./text_highlight_rules").TextHighlightRules,t=function(){this.$rules={start:[{token:"comment",regex:"%.*$"},{token:["keyword","lparen","variable.parameter","rparen","lparen","storage.type","rparen"],regex:"(\\\\(?:documentclass|usepackage|input))(?:(\\[)([^\\]]*)(\\]))?({)([^}]*)(})"},{token:["keyword","lparen","variable.parameter","rparen"],regex:"(\\\\(?:label|v?ref|cite(?:[^{]*)))(?:({)([^}]*)(}))?"},{token:["storage.type","lparen","variable.parameter","rparen"],regex:"(\\\\begin)({)(verbatim)(})",next:"verbatim"},{token:["storage.type","lparen","variable.parameter","rparen"],regex:"(\\\\begin)({)(lstlisting)(})",next:"lstlisting"},{token:["storage.type","lparen","variable.parameter","rparen"],regex:"(\\\\(?:begin|end))({)([\\w*]*)(})"},{token:"storage.type",regex:/\\verb\b\*?/,next:[{token:["keyword.operator","string","keyword.operator"],regex:"(.)(.*?)(\\1|$)|",next:"start"}]},{token:"storage.type",regex:"\\\\[a-zA-Z]+"},{token:"lparen",regex:"[[({]"},{token:"rparen",regex:"[\\])}]"},{token:"constant.character.escape",regex:"\\\\[^a-zA-Z]?"},{token:"string",regex:"\\${1,2}",next:"equation"}],equation:[{token:"comment",regex:"%.*$"},{token:"string",regex:"\\${1,2}",next:"start"},{token:"constant.character.escape",regex:"\\\\(?:[^a-zA-Z]|[a-zA-Z]+)"},{token:"error",regex:"^\\s*$",next:"start"},{defaultToken:"string"}],verbatim:[{token:["storage.type","lparen","variable.parameter","rparen"],regex:"(\\\\end)({)(verbatim)(})",next:"start"},{defaultToken:"text"}],lstlisting:[{token:["storage.type","lparen","variable.parameter","rparen"],regex:"(\\\\end)({)(lstlisting)(})",next:"start"},{defaultToken:"text"}]},this.normalizeRules()};n.inherits(t,g),r.LatexHighlightRules=t}),ace.define("ace/mode/rdoc_highlight_rules",["require","exports","module","ace/lib/oop","ace/lib/lang","ace/mode/text_highlight_rules","ace/mode/latex_highlight_rules"],function(e,r,o){var n=e("../lib/oop");e("../lib/lang");var g=e("./text_highlight_rules").TextHighlightRules;e("./latex_highlight_rules");var t=function(){this.$rules={start:[{token:"comment",regex:"%.*$"},{token:"text",regex:"\\\\[$&%#\\{\\}]"},{token:"keyword",regex:"\\\\(?:name|alias|method|S3method|S4method|item|code|preformatted|kbd|pkg|var|env|option|command|author|email|url|source|cite|acronym|href|code|preformatted|link|eqn|deqn|keyword|usage|examples|dontrun|dontshow|figure|if|ifelse|Sexpr|RdOpts|inputencoding|usepackage)\\b",next:"nospell"},{token:"keyword",regex:"\\\\(?:[a-zA-Z0-9]+|[^a-zA-Z0-9])"},{token:"paren.keyword.operator",regex:"[[({]"},{token:"paren.keyword.operator",regex:"[\\])}]"},{token:"text",regex:"\\s+"}],nospell:[{token:"comment",regex:"%.*$",next:"start"},{token:"nospell.text",regex:"\\\\[$&%#\\{\\}]"},{token:"keyword",regex:"\\\\(?:name|alias|method|S3method|S4method|item|code|preformatted|kbd|pkg|var|env|option|command|author|email|url|source|cite|acronym|href|code|preformatted|link|eqn|deqn|keyword|usage|examples|dontrun|dontshow|figure|if|ifelse|Sexpr|RdOpts|inputencoding|usepackage)\\b"},{token:"keyword",regex:"\\\\(?:[a-zA-Z0-9]+|[^a-zA-Z0-9])",next:"start"},{token:"paren.keyword.operator",regex:"[[({]"},{token:"paren.keyword.operator",regex:"[\\])]"},{token:"paren.keyword.operator",regex:"}",next:"start"},{token:"nospell.text",regex:"\\s+"},{token:"nospell.text",regex:"\\w+"}]}};n.inherits(t,g),r.RDocHighlightRules=t}),ace.define("ace/mode/matching_brace_outdent",["require","exports","module","ace/range"],function(e,r,o){var n=e("../range").Range,g=function(){};(function(){this.checkOutdent=function(t,a){return/^\s+$/.test(t)?/^\s*\}/.test(a):!1},this.autoOutdent=function(t,a){var l=t.getLine(a),s=l.match(/^(\s*\})/);if(!s)return 0;var c=s[1].length,d=t.findMatchingBracket({row:a,column:c});if(!d||d.row==a)return 0;var h=this.$getIndent(t.getLine(d.row));t.replace(new n(a,0,a,c-1),h)},this.$getIndent=function(t){return t.match(/^\s*/)[0]}}).call(g.prototype),r.MatchingBraceOutdent=g}),ace.define("ace/mode/rdoc",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/rdoc_highlight_rules","ace/mode/matching_brace_outdent"],function(e,r,o){var n=e("../lib/oop"),g=e("./text").Mode,t=e("./rdoc_highlight_rules").RDocHighlightRules,a=e("./matching_brace_outdent").MatchingBraceOutdent,l=function(s){this.HighlightRules=t,this.$outdent=new a,this.$behaviour=this.$defaultBehaviour};n.inherits(l,g),function(){this.getNextLineIndent=function(s,c,d){return this.$getIndent(c)},this.$id="ace/mode/rdoc"}.call(l.prototype),r.Mode=l}),function(){ace.require(["ace/mode/rdoc"],function(e){i&&(i.exports=e)})}()})(m);const k=p,f=x({__proto__:null,default:k},[p]);export{f as m};
