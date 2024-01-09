function x(h,b){for(var n=0;n<b.length;n++){const s=b[n];if(typeof s!="string"&&!Array.isArray(s)){for(const f in s)if(f!=="default"&&!(f in h)){const g=Object.getOwnPropertyDescriptor(s,f);g&&Object.defineProperty(h,f,g.get?g:{enumerable:!0,get:()=>s[f]})}}}return Object.freeze(Object.defineProperty(h,Symbol.toStringTag,{value:"Module"}))}var v={},R={get exports(){return v},set exports(h){v=h}};(function(h,b){ace.define("ace/mode/terraform_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(n,s,f){var g=n("../lib/oop"),d=n("./text_highlight_rules").TextHighlightRules,a=function(){this.$rules={start:[{token:["storage.function.terraform"],regex:"\\b(output|resource|data|variable|module|export)\\b"},{token:"variable.terraform",regex:"\\$\\s",push:[{token:"keyword.terraform",regex:"(-var-file|-var)"},{token:"variable.terraform",regex:"\\n|$",next:"pop"},{include:"strings"},{include:"variables"},{include:"operators"},{defaultToken:"text"}]},{token:"language.support.class",regex:"\\b(timeouts|provider|connection|provisioner|lifecycleprovider|atlas)\\b"},{token:"singleline.comment.terraform",regex:"#.*$"},{token:"singleline.comment.terraform",regex:"//.*$"},{token:"multiline.comment.begin.terraform",regex:/\/\*/,push:"blockComment"},{token:"storage.function.terraform",regex:"^\\s*(locals|terraform)\\s*{"},{token:"paren.lparen",regex:"[[({]"},{token:"paren.rparen",regex:"[\\])}]"},{include:"constants"},{include:"strings"},{include:"operators"},{include:"variables"}],blockComment:[{regex:/\*\//,token:"multiline.comment.end.terraform",next:"pop"},{defaultToken:"comment"}],constants:[{token:"constant.language.terraform",regex:"\\b(true|false|yes|no|on|off|EOF)\\b"},{token:"constant.numeric.terraform",regex:"(\\b([0-9]+)([kKmMgG]b?)?\\b)|(\\b(0x[0-9A-Fa-f]+)([kKmMgG]b?)?\\b)"}],variables:[{token:["variable.assignment.terraform","keyword.operator"],regex:"\\b([a-zA-Z_]+)(\\s*=)"}],interpolated_variables:[{token:"variable.terraform",regex:"\\b(var|self|count|path|local)\\b(?:\\.*[a-zA-Z_-]*)?"}],strings:[{token:"punctuation.quote.terraform",regex:"'",push:[{token:"punctuation.quote.terraform",regex:"'",next:"pop"},{include:"escaped_chars"},{defaultToken:"string"}]},{token:"punctuation.quote.terraform",regex:'"',push:[{token:"punctuation.quote.terraform",regex:'"',next:"pop"},{include:"interpolation"},{include:"escaped_chars"},{defaultToken:"string"}]}],escaped_chars:[{token:"constant.escaped_char.terraform",regex:"\\\\."}],operators:[{token:"keyword.operator",regex:"\\?|:|==|!=|>|<|>=|<=|&&|\\|\\||!|%|&|\\*|\\+|\\-|/|="}],interpolation:[{token:"punctuation.interpolated.begin.terraform",regex:"\\$?\\$\\{",push:[{token:"punctuation.interpolated.end.terraform",regex:"\\}",next:"pop"},{include:"interpolated_variables"},{include:"operators"},{include:"constants"},{include:"strings"},{include:"functions"},{include:"parenthesis"},{defaultToken:"punctuation"}]}],functions:[{token:"keyword.function.terraform",regex:"\\b(abs|basename|base64decode|base64encode|base64gzip|base64sha256|base64sha512|bcrypt|ceil|chomp|chunklist|cidrhost|cidrnetmask|cidrsubnet|coalesce|coalescelist|compact|concat|contains|dirname|distinct|element|file|floor|flatten|format|formatlist|indent|index|join|jsonencode|keys|length|list|log|lookup|lower|map|matchkeys|max|merge|min|md5|pathexpand|pow|replace|rsadecrypt|sha1|sha256|sha512|signum|slice|sort|split|substr|timestamp|timeadd|title|transpose|trimspace|upper|urlencode|uuid|values|zipmap)\\b"}],parenthesis:[{token:"paren.lparen",regex:"\\["},{token:"paren.rparen",regex:"\\]"}]},this.normalizeRules()};g.inherits(a,d),s.TerraformHighlightRules=a}),ace.define("ace/mode/folding/cstyle",["require","exports","module","ace/lib/oop","ace/range","ace/mode/folding/fold_mode"],function(n,s,f){var g=n("../../lib/oop"),d=n("../../range").Range,a=n("./fold_mode").FoldMode,c=s.FoldMode=function(e){e&&(this.foldingStartMarker=new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/,"|"+e.start)),this.foldingStopMarker=new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/,"|"+e.end)))};g.inherits(c,a),function(){this.foldingStartMarker=/([\{\[\(])[^\}\]\)]*$|^\s*(\/\*)/,this.foldingStopMarker=/^[^\[\{\(]*([\}\]\)])|^[\s\*]*(\*\/)/,this.singleLineBlockCommentRe=/^\s*(\/\*).*\*\/\s*$/,this.tripleStarBlockCommentRe=/^\s*(\/\*\*\*).*\*\/\s*$/,this.startRegionRe=/^\s*(\/\*|\/\/)#?region\b/,this._getFoldWidgetBase=this.getFoldWidget,this.getFoldWidget=function(e,r,t){var i=e.getLine(t);if(this.singleLineBlockCommentRe.test(i)&&!this.startRegionRe.test(i)&&!this.tripleStarBlockCommentRe.test(i))return"";var l=this._getFoldWidgetBase(e,r,t);return!l&&this.startRegionRe.test(i)?"start":l},this.getFoldWidgetRange=function(e,r,t,i){var l=e.getLine(t);if(this.startRegionRe.test(l))return this.getCommentRegionBlock(e,l,t);var o=l.match(this.foldingStartMarker);if(o){var m=o.index;if(o[1])return this.openingBracketBlock(e,o[1],t,m);var u=e.getCommentFoldRange(t,m+o[0].length,1);return u&&!u.isMultiLine()&&(i?u=this.getSectionRange(e,t):r!="all"&&(u=null)),u}if(r!=="markbegin"){var o=l.match(this.foldingStopMarker);if(o){var m=o.index+o[0].length;return o[1]?this.closingBracketBlock(e,o[1],t,m):e.getCommentFoldRange(t,m,-1)}}},this.getSectionRange=function(e,r){var t=e.getLine(r),i=t.search(/\S/),l=r,m=t.length;r=r+1;for(var u=r,o=e.getLength();++r<o;){t=e.getLine(r);var k=t.search(/\S/);if(k!==-1){if(i>k)break;var p=this.getFoldWidgetRange(e,"all",r);if(p){if(p.start.row<=l)break;if(p.isMultiLine())r=p.end.row;else if(i==k)break}u=r}}return new d(l,m,u,e.getLine(u).length)},this.getCommentRegionBlock=function(e,r,t){for(var i=r.search(/\s*$/),l=e.getLength(),m=t,u=/^\s*(?:\/\*|\/\/|--)#?(end)?region\b/,o=1;++t<l;){r=e.getLine(t);var k=u.exec(r);if(k&&(k[1]?o--:o++,!o))break}var p=t;if(p>m)return new d(m,i,p,r.length)}}.call(c.prototype)}),ace.define("ace/mode/matching_brace_outdent",["require","exports","module","ace/range"],function(n,s,f){var g=n("../range").Range,d=function(){};(function(){this.checkOutdent=function(a,c){return/^\s+$/.test(a)?/^\s*\}/.test(c):!1},this.autoOutdent=function(a,c){var e=a.getLine(c),r=e.match(/^(\s*\})/);if(!r)return 0;var t=r[1].length,i=a.findMatchingBracket({row:c,column:t});if(!i||i.row==c)return 0;var l=this.$getIndent(a.getLine(i.row));a.replace(new g(c,0,c,t-1),l)},this.$getIndent=function(a){return a.match(/^\s*/)[0]}}).call(d.prototype),s.MatchingBraceOutdent=d}),ace.define("ace/mode/terraform",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/terraform_highlight_rules","ace/mode/behaviour/cstyle","ace/mode/folding/cstyle","ace/mode/matching_brace_outdent"],function(n,s,f){var g=n("../lib/oop"),d=n("./text").Mode,a=n("./terraform_highlight_rules").TerraformHighlightRules,c=n("./behaviour/cstyle").CstyleBehaviour,e=n("./folding/cstyle").FoldMode,r=n("./matching_brace_outdent").MatchingBraceOutdent,t=function(){d.call(this),this.HighlightRules=a,this.$outdent=new r,this.$behaviour=new c,this.foldingRules=new e};g.inherits(t,d),function(){this.lineCommentStart=["#","//"],this.blockComment={start:"/*",end:"*/"},this.$id="ace/mode/terraform"}.call(t.prototype),s.Mode=t}),function(){ace.require(["ace/mode/terraform"],function(n){h&&(h.exports=n)})}()})(R);const _=v,M=x({__proto__:null,default:_},[v]);export{M as m};
