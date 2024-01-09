function k(d,x){for(var r=0;r<x.length;r++){const s=x[r];if(typeof s!="string"&&!Array.isArray(s)){for(const l in s)if(l!=="default"&&!(l in d)){const u=Object.getOwnPropertyDescriptor(s,l);u&&Object.defineProperty(d,l,u.get?u:{enumerable:!0,get:()=>s[l]})}}}return Object.freeze(Object.defineProperty(d,Symbol.toStringTag,{value:"Module"}))}var p={},y={get exports(){return p},set exports(d){p=d}};(function(d,x){ace.define("ace/mode/scheme_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(r,s,l){var u=r("../lib/oop"),f=r("./text_highlight_rules").TextHighlightRules,i=function(){var o="case|do|let|loop|if|else|when",g="eq?|eqv?|equal?|and|or|not|null?",e="#t|#f",t="cons|car|cdr|cond|lambda|lambda*|syntax-rules|format|set!|quote|eval|append|list|list?|member?|load",n=this.createKeywordMapper({"keyword.control":o,"keyword.operator":g,"constant.language":e,"support.function":t},"identifier",!0);this.$rules={start:[{token:"comment",regex:";.*$"},{token:["storage.type.function-type.scheme","text","entity.name.function.scheme"],regex:"(?:\\b(?:(define|define-syntax|define-macro))\\b)(\\s+)((?:\\w|\\-|\\!|\\?)*)"},{token:"punctuation.definition.constant.character.scheme",regex:"#:\\S+"},{token:["punctuation.definition.variable.scheme","variable.other.global.scheme","punctuation.definition.variable.scheme"],regex:"(\\*)(\\S*)(\\*)"},{token:"constant.numeric",regex:"#[xXoObB][0-9a-fA-F]+"},{token:"constant.numeric",regex:"[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?"},{token:n,regex:"[a-zA-Z_#][a-zA-Z0-9_\\-\\?\\!\\*]*"},{token:"string",regex:'"(?=.)',next:"qqstring"}],qqstring:[{token:"constant.character.escape.scheme",regex:"\\\\."},{token:"string",regex:'[^"\\\\]+',merge:!0},{token:"string",regex:"\\\\$",next:"qqstring",merge:!0},{token:"string",regex:'"|$',next:"start",merge:!0}]}};u.inherits(i,f),s.SchemeHighlightRules=i}),ace.define("ace/mode/matching_parens_outdent",["require","exports","module","ace/range"],function(r,s,l){var u=r("../range").Range,f=function(){};(function(){this.checkOutdent=function(i,o){return/^\s+$/.test(i)?/^\s*\)/.test(o):!1},this.autoOutdent=function(i,o){var g=i.getLine(o),e=g.match(/^(\s*\))/);if(!e)return 0;var t=e[1].length,n=i.findMatchingBracket({row:o,column:t});if(!n||n.row==o)return 0;var h=this.$getIndent(i.getLine(n.row));i.replace(new u(o,0,o,t-1),h)},this.$getIndent=function(i){var o=i.match(/^(\s+)/);return o?o[1]:""}}).call(f.prototype),s.MatchingParensOutdent=f}),ace.define("ace/mode/scheme",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/scheme_highlight_rules","ace/mode/matching_parens_outdent"],function(r,s,l){var u=r("../lib/oop"),f=r("./text").Mode,i=r("./scheme_highlight_rules").SchemeHighlightRules,o=r("./matching_parens_outdent").MatchingParensOutdent,g=function(){this.HighlightRules=i,this.$outdent=new o,this.$behaviour=this.$defaultBehaviour};u.inherits(g,f),function(){this.lineCommentStart=";",this.minorIndentFunctions=["define","lambda","define-macro","define-syntax","syntax-rules","define-record-type","define-structure"],this.$toIndent=function(e){return e.split("").map(function(t){return/\s/.exec(t)?t:" "}).join("")},this.$calculateIndent=function(e,t){for(var n=this.$getIndent(e),h=0,m,a,c=e.length-1;c>=0&&(a=e[c],a==="("?(h--,m=!0):a==="("||a==="["||a==="{"?(h--,m=!1):(a===")"||a==="]"||a==="}")&&h++,!(h<0));c--);if(h<0&&m){c+=1;for(var v=c,b="";;){if(a=e[c],a===" "||a==="	")return this.minorIndentFunctions.indexOf(b)!==-1?this.$toIndent(e.substring(0,v-1)+t):this.$toIndent(e.substring(0,c+1));if(a===void 0)return this.$toIndent(e.substring(0,v-1)+t);b+=e[c],c++}}else return h<0&&!m?this.$toIndent(e.substring(0,c+1)):(h>0&&(n=n.substring(0,n.length-t.length)),n)},this.getNextLineIndent=function(e,t,n){return this.$calculateIndent(t,n)},this.checkOutdent=function(e,t,n){return this.$outdent.checkOutdent(t,n)},this.autoOutdent=function(e,t,n){this.$outdent.autoOutdent(t,n)},this.$id="ace/mode/scheme"}.call(g.prototype),s.Mode=g}),function(){ace.require(["ace/mode/scheme"],function(r){d&&(d.exports=r)})}()})(y);const _=p,$=k({__proto__:null,default:_},[p]);export{$ as m};
