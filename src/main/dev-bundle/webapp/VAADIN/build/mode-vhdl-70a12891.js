function f(r,l){for(var e=0;e<l.length;e++){const t=l[e];if(typeof t!="string"&&!Array.isArray(t)){for(const o in t)if(o!=="default"&&!(o in r)){const i=Object.getOwnPropertyDescriptor(t,o);i&&Object.defineProperty(r,o,i.get?i:{enumerable:!0,get:()=>t[o]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}var s={},x={get exports(){return s},set exports(r){s=r}};(function(r,l){ace.define("ace/mode/vhdl_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(e,t,o){var i=e("../lib/oop"),d=e("./text_highlight_rules").TextHighlightRules,a=function(){var n="access|after|alias|all|architecture|assert|attribute|begin|block|body|buffer|bus|case|component|configuration|context|disconnect|downto|else|elsif|end|entity|exit|file|for|force|function|generate|generic|group|guarded|if|impure|in|inertial|inout|is|label|library|linkage|literal|loop|map|new|next|of|on|or|open|others|out|package|parameter|port|postponed|procedure|process|protected|pure|range|record|register|reject|release|report|return|select|severity|shared|signal|subtype|then|to|transport|type|unaffected|units|until|use|variable|wait|when|while|with",g="bit|bit_vector|boolean|character|integer|line|natural|positive|real|register|signed|std_logic|std_logic_vector|string||text|time|unsigned",c="array|constant",u="abs|and|mod|nand|nor|not|rem|rol|ror|sla|sll|srasrl|xnor|xor",h="true|false|null",p=this.createKeywordMapper({"keyword.operator":u,keyword:n,"constant.language":h,"storage.modifier":c,"storage.type":g},"identifier",!0);this.$rules={start:[{token:"comment",regex:"--.*$"},{token:"string",regex:'".*?"'},{token:"string",regex:"'.*?'"},{token:"constant.numeric",regex:"[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?\\b"},{token:"keyword",regex:"\\s*(?:library|package|use)\\b"},{token:p,regex:"[a-zA-Z_$][a-zA-Z0-9_$]*\\b"},{token:"keyword.operator",regex:"&|\\*|\\+|\\-|\\/|<|=|>|\\||=>|\\*\\*|:=|\\/=|>=|<=|<>"},{token:"punctuation.operator",regex:"\\'|\\:|\\,|\\;|\\."},{token:"paren.lparen",regex:"[[(]"},{token:"paren.rparen",regex:"[\\])]"},{token:"text",regex:"\\s+"}]}};i.inherits(a,d),t.VHDLHighlightRules=a}),ace.define("ace/mode/vhdl",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/vhdl_highlight_rules"],function(e,t,o){var i=e("../lib/oop"),d=e("./text").Mode,a=e("./vhdl_highlight_rules").VHDLHighlightRules,n=function(){this.HighlightRules=a,this.$behaviour=this.$defaultBehaviour};i.inherits(n,d),function(){this.lineCommentStart="--",this.$id="ace/mode/vhdl"}.call(n.prototype),t.Mode=n}),function(){ace.require(["ace/mode/vhdl"],function(e){r&&(r.exports=e)})}()})(x);const m=s,b=f({__proto__:null,default:m},[s]);export{b as m};
