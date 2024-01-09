function v(s,b){for(var n=0;n<b.length;n++){const i=b[n];if(typeof i!="string"&&!Array.isArray(i)){for(const u in i)if(u!=="default"&&!(u in s)){const c=Object.getOwnPropertyDescriptor(i,u);c&&Object.defineProperty(s,u,c.get?c:{enumerable:!0,get:()=>i[u]})}}}return Object.freeze(Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}))}var x={},_={get exports(){return x},set exports(s){x=s}};(function(s,b){ace.define("ace/mode/prolog_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(n,i,u){var c=n("../lib/oop"),f=n("./text_highlight_rules").TextHighlightRules,d=function(){this.$rules={start:[{include:"#comment"},{include:"#basic_fact"},{include:"#rule"},{include:"#directive"},{include:"#fact"}],"#atom":[{token:"constant.other.atom.prolog",regex:"\\b[a-z][a-zA-Z0-9_]*\\b"},{token:"constant.numeric.prolog",regex:"-?\\d+(?:\\.\\d+)?"},{include:"#string"}],"#basic_elem":[{include:"#comment"},{include:"#statement"},{include:"#constants"},{include:"#operators"},{include:"#builtins"},{include:"#list"},{include:"#atom"},{include:"#variable"}],"#basic_fact":[{token:["entity.name.function.fact.basic.prolog","punctuation.end.fact.basic.prolog"],regex:"([a-z]\\w*)(\\.)"}],"#builtins":[{token:"support.function.builtin.prolog",regex:"\\b(?:abolish|abort|ancestors|arg|ascii|assert[az]|atom(?:ic)?|body|char|close|conc|concat|consult|define|definition|dynamic|dump|fail|file|free|free_proc|functor|getc|goal|halt|head|head|integer|length|listing|match_args|member|next_clause|nl|nonvar|nth|number|cvars|nvars|offset|op|print?|prompt|putc|quoted|ratom|read|redefine|rename|retract(?:all)?|see|seeing|seen|skip|spy|statistics|system|tab|tell|telling|term|time|told|univ|unlink_clause|unspy_predicate|var|write)\\b"}],"#comment":[{token:["punctuation.definition.comment.prolog","comment.line.percentage.prolog"],regex:"(%)(.*$)"},{token:"punctuation.definition.comment.prolog",regex:"/\\*",push:[{token:"punctuation.definition.comment.prolog",regex:"\\*/",next:"pop"},{defaultToken:"comment.block.prolog"}]}],"#constants":[{token:"constant.language.prolog",regex:"\\b(?:true|false|yes|no)\\b"}],"#directive":[{token:"keyword.operator.directive.prolog",regex:":-",push:[{token:"meta.directive.prolog",regex:"\\.",next:"pop"},{include:"#comment"},{include:"#statement"},{defaultToken:"meta.directive.prolog"}]}],"#expr":[{include:"#comments"},{token:"meta.expression.prolog",regex:"\\(",push:[{token:"meta.expression.prolog",regex:"\\)",next:"pop"},{include:"#expr"},{defaultToken:"meta.expression.prolog"}]},{token:"keyword.control.cutoff.prolog",regex:"!"},{token:"punctuation.control.and.prolog",regex:","},{token:"punctuation.control.or.prolog",regex:";"},{include:"#basic_elem"}],"#fact":[{token:["entity.name.function.fact.prolog","punctuation.begin.fact.parameters.prolog"],regex:"([a-z]\\w*)(\\()(?!.*:-)",push:[{token:["punctuation.end.fact.parameters.prolog","punctuation.end.fact.prolog"],regex:"(\\))(\\.?)",next:"pop"},{include:"#parameter"},{defaultToken:"meta.fact.prolog"}]}],"#list":[{token:"punctuation.begin.list.prolog",regex:"\\[(?=.*\\])",push:[{token:"punctuation.end.list.prolog",regex:"\\]",next:"pop"},{include:"#comment"},{token:"punctuation.separator.list.prolog",regex:","},{token:"punctuation.concat.list.prolog",regex:"\\|",push:[{token:"meta.list.concat.prolog",regex:"(?=\\s*\\])",next:"pop"},{include:"#basic_elem"},{defaultToken:"meta.list.concat.prolog"}]},{include:"#basic_elem"},{defaultToken:"meta.list.prolog"}]}],"#operators":[{token:"keyword.operator.prolog",regex:"\\\\\\+|\\bnot\\b|\\bis\\b|->|[><]|[><\\\\:=]?=|(?:=\\\\|\\\\=)="}],"#parameter":[{token:"variable.language.anonymous.prolog",regex:"\\b_\\b"},{token:"variable.parameter.prolog",regex:"\\b[A-Z_]\\w*\\b"},{token:"punctuation.separator.parameters.prolog",regex:","},{include:"#basic_elem"},{token:"text",regex:"[^\\s]"}],"#rule":[{token:"meta.rule.prolog",regex:"(?=[a-z]\\w*.*:-)",push:[{token:"punctuation.rule.end.prolog",regex:"\\.",next:"pop"},{token:"meta.rule.signature.prolog",regex:"(?=[a-z]\\w*.*:-)",push:[{token:"meta.rule.signature.prolog",regex:"(?=:-)",next:"pop"},{token:"entity.name.function.rule.prolog",regex:"[a-z]\\w*(?=\\(|\\s*:-)"},{token:"punctuation.rule.parameters.begin.prolog",regex:"\\(",push:[{token:"punctuation.rule.parameters.end.prolog",regex:"\\)",next:"pop"},{include:"#parameter"},{defaultToken:"meta.rule.parameters.prolog"}]},{defaultToken:"meta.rule.signature.prolog"}]},{token:"keyword.operator.definition.prolog",regex:":-",push:[{token:"meta.rule.definition.prolog",regex:"(?=\\.)",next:"pop"},{include:"#comment"},{include:"#expr"},{defaultToken:"meta.rule.definition.prolog"}]},{defaultToken:"meta.rule.prolog"}]}],"#statement":[{token:"meta.statement.prolog",regex:"(?=[a-z]\\w*\\()",push:[{token:"punctuation.end.statement.parameters.prolog",regex:"\\)",next:"pop"},{include:"#builtins"},{include:"#atom"},{token:"punctuation.begin.statement.parameters.prolog",regex:"\\(",push:[{token:"meta.statement.parameters.prolog",regex:"(?=\\))",next:"pop"},{token:"punctuation.separator.statement.prolog",regex:","},{include:"#basic_elem"},{defaultToken:"meta.statement.parameters.prolog"}]},{defaultToken:"meta.statement.prolog"}]}],"#string":[{token:"punctuation.definition.string.begin.prolog",regex:"'",push:[{token:"punctuation.definition.string.end.prolog",regex:"'",next:"pop"},{token:"constant.character.escape.prolog",regex:"\\\\."},{token:"constant.character.escape.quote.prolog",regex:"''"},{defaultToken:"string.quoted.single.prolog"}]}],"#variable":[{token:"variable.language.anonymous.prolog",regex:"\\b_\\b"},{token:"variable.other.prolog",regex:"\\b[A-Z_][a-zA-Z0-9_]*\\b"}]},this.normalizeRules()};d.metaData={fileTypes:["plg","prolog"],foldingStartMarker:"(%\\s*region \\w*)|([a-z]\\w*.*:- ?)",foldingStopMarker:"(%\\s*end(\\s*region)?)|(?=\\.)",keyEquivalent:"^~P",name:"Prolog",scopeName:"source.prolog"},c.inherits(d,f),i.PrologHighlightRules=d}),ace.define("ace/mode/folding/cstyle",["require","exports","module","ace/lib/oop","ace/range","ace/mode/folding/fold_mode"],function(n,i,u){var c=n("../../lib/oop"),f=n("../../range").Range,d=n("./fold_mode").FoldMode,k=i.FoldMode=function(e){e&&(this.foldingStartMarker=new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/,"|"+e.start)),this.foldingStopMarker=new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/,"|"+e.end)))};c.inherits(k,d),function(){this.foldingStartMarker=/([\{\[\(])[^\}\]\)]*$|^\s*(\/\*)/,this.foldingStopMarker=/^[^\[\{\(]*([\}\]\)])|^[\s\*]*(\*\/)/,this.singleLineBlockCommentRe=/^\s*(\/\*).*\*\/\s*$/,this.tripleStarBlockCommentRe=/^\s*(\/\*\*\*).*\*\/\s*$/,this.startRegionRe=/^\s*(\/\*|\/\/)#?region\b/,this._getFoldWidgetBase=this.getFoldWidget,this.getFoldWidget=function(e,t,o){var l=e.getLine(o);if(this.singleLineBlockCommentRe.test(l)&&!this.startRegionRe.test(l)&&!this.tripleStarBlockCommentRe.test(l))return"";var a=this._getFoldWidgetBase(e,t,o);return!a&&this.startRegionRe.test(l)?"start":a},this.getFoldWidgetRange=function(e,t,o,l){var a=e.getLine(o);if(this.startRegionRe.test(a))return this.getCommentRegionBlock(e,a,o);var r=a.match(this.foldingStartMarker);if(r){var p=r.index;if(r[1])return this.openingBracketBlock(e,r[1],o,p);var g=e.getCommentFoldRange(o,p+r[0].length,1);return g&&!g.isMultiLine()&&(l?g=this.getSectionRange(e,o):t!="all"&&(g=null)),g}if(t!=="markbegin"){var r=a.match(this.foldingStopMarker);if(r){var p=r.index+r[0].length;return r[1]?this.closingBracketBlock(e,r[1],o,p):e.getCommentFoldRange(o,p,-1)}}},this.getSectionRange=function(e,t){var o=e.getLine(t),l=o.search(/\S/),a=t,p=o.length;t=t+1;for(var g=t,r=e.getLength();++t<r;){o=e.getLine(t);var h=o.search(/\S/);if(h!==-1){if(l>h)break;var m=this.getFoldWidgetRange(e,"all",t);if(m){if(m.start.row<=a)break;if(m.isMultiLine())t=m.end.row;else if(l==h)break}g=t}}return new f(a,p,g,e.getLine(g).length)},this.getCommentRegionBlock=function(e,t,o){for(var l=t.search(/\s*$/),a=e.getLength(),p=o,g=/^\s*(?:\/\*|\/\/|--)#?(end)?region\b/,r=1;++o<a;){t=e.getLine(o);var h=g.exec(t);if(h&&(h[1]?r--:r++,!r))break}var m=o;if(m>p)return new f(p,l,m,t.length)}}.call(k.prototype)}),ace.define("ace/mode/prolog",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/prolog_highlight_rules","ace/mode/folding/cstyle"],function(n,i,u){var c=n("../lib/oop"),f=n("./text").Mode,d=n("./prolog_highlight_rules").PrologHighlightRules,k=n("./folding/cstyle").FoldMode,e=function(){this.HighlightRules=d,this.foldingRules=new k,this.$behaviour=this.$defaultBehaviour};c.inherits(e,f),function(){this.lineCommentStart="%",this.blockComment={start:"/*",end:"*/"},this.$id="ace/mode/prolog"}.call(e.prototype),i.Mode=e}),function(){ace.require(["ace/mode/prolog"],function(n){s&&(s.exports=n)})}()})(_);const R=x,y=v({__proto__:null,default:R},[x]);export{y as m};
