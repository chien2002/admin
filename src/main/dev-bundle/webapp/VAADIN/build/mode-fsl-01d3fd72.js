function x(f,v){for(var o=0;o<v.length;o++){const r=v[o];if(typeof r!="string"&&!Array.isArray(r)){for(const d in r)if(d!=="default"&&!(d in f)){const g=Object.getOwnPropertyDescriptor(r,d);g&&Object.defineProperty(f,d,g.get?g:{enumerable:!0,get:()=>r[d]})}}}return Object.freeze(Object.defineProperty(f,Symbol.toStringTag,{value:"Module"}))}var k={},R={get exports(){return k},set exports(f){k=f}};(function(f,v){ace.define("ace/mode/fsl_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(o,r,d){var g=o("../lib/oop"),u=o("./text_highlight_rules").TextHighlightRules,h=function(){this.$rules={start:[{token:"punctuation.definition.comment.mn",regex:/\/\*/,push:[{token:"punctuation.definition.comment.mn",regex:/\*\//,next:"pop"},{defaultToken:"comment.block.fsl"}]},{token:"comment.line.fsl",regex:/\/\//,push:[{token:"comment.line.fsl",regex:/$/,next:"pop"},{defaultToken:"comment.line.fsl"}]},{token:"entity.name.function",regex:/\${/,push:[{token:"entity.name.function",regex:/}/,next:"pop"},{defaultToken:"keyword.other"}],comment:"js outcalls"},{token:"constant.numeric",regex:/[0-9]*\.[0-9]*\.[0-9]*/,comment:"semver"},{token:"constant.language.fslLanguage",regex:"(?:graph_layout|machine_name|machine_author|machine_license|machine_comment|machine_language|machine_version|machine_reference|npm_name|graph_layout|on_init|on_halt|on_end|on_terminate|on_finalize|on_transition|on_action|on_stochastic_action|on_legal|on_main|on_forced|on_validation|on_validation_failure|on_transition_refused|on_forced_transition_refused|on_action_refused|on_enter|on_exit|start_states|end_states|terminal_states|final_states|fsl_version)\\s*:"},{token:"keyword.control.transition.fslArrow",regex:/<->|<-|->|<=>|=>|<=|<~>|~>|<~|<-=>|<=->|<-~>|<~->|<=~>|<~=>/},{token:"constant.numeric.fslProbability",regex:/[0-9]+%/,comment:"edge probability annotation"},{token:"constant.character.fslAction",regex:/\'[^']*\'/,comment:"action annotation"},{token:"string.quoted.double.fslLabel.doublequoted",regex:/\"[^"]*\"/,comment:"fsl label annotation"},{token:"entity.name.tag.fslLabel.atom",regex:/[a-zA-Z0-9_.+&()#@!?,]/,comment:"fsl label annotation"}]},this.normalizeRules()};h.metaData={fileTypes:["fsl","fsl_state"],name:"FSL",scopeName:"source.fsl"},g.inherits(h,u),r.FSLHighlightRules=h}),ace.define("ace/mode/folding/cstyle",["require","exports","module","ace/lib/oop","ace/range","ace/mode/folding/fold_mode"],function(o,r,d){var g=o("../../lib/oop"),u=o("../../range").Range,h=o("./fold_mode").FoldMode,_=r.FoldMode=function(e){e&&(this.foldingStartMarker=new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/,"|"+e.start)),this.foldingStopMarker=new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/,"|"+e.end)))};g.inherits(_,h),function(){this.foldingStartMarker=/([\{\[\(])[^\}\]\)]*$|^\s*(\/\*)/,this.foldingStopMarker=/^[^\[\{\(]*([\}\]\)])|^[\s\*]*(\*\/)/,this.singleLineBlockCommentRe=/^\s*(\/\*).*\*\/\s*$/,this.tripleStarBlockCommentRe=/^\s*(\/\*\*\*).*\*\/\s*$/,this.startRegionRe=/^\s*(\/\*|\/\/)#?region\b/,this._getFoldWidgetBase=this.getFoldWidget,this.getFoldWidget=function(e,t,n){var l=e.getLine(n);if(this.singleLineBlockCommentRe.test(l)&&!this.startRegionRe.test(l)&&!this.tripleStarBlockCommentRe.test(l))return"";var a=this._getFoldWidgetBase(e,t,n);return!a&&this.startRegionRe.test(l)?"start":a},this.getFoldWidgetRange=function(e,t,n,l){var a=e.getLine(n);if(this.startRegionRe.test(a))return this.getCommentRegionBlock(e,a,n);var i=a.match(this.foldingStartMarker);if(i){var c=i.index;if(i[1])return this.openingBracketBlock(e,i[1],n,c);var s=e.getCommentFoldRange(n,c+i[0].length,1);return s&&!s.isMultiLine()&&(l?s=this.getSectionRange(e,n):t!="all"&&(s=null)),s}if(t!=="markbegin"){var i=a.match(this.foldingStopMarker);if(i){var c=i.index+i[0].length;return i[1]?this.closingBracketBlock(e,i[1],n,c):e.getCommentFoldRange(n,c,-1)}}},this.getSectionRange=function(e,t){var n=e.getLine(t),l=n.search(/\S/),a=t,c=n.length;t=t+1;for(var s=t,i=e.getLength();++t<i;){n=e.getLine(t);var p=n.search(/\S/);if(p!==-1){if(l>p)break;var m=this.getFoldWidgetRange(e,"all",t);if(m){if(m.start.row<=a)break;if(m.isMultiLine())t=m.end.row;else if(l==p)break}s=t}}return new u(a,c,s,e.getLine(s).length)},this.getCommentRegionBlock=function(e,t,n){for(var l=t.search(/\s*$/),a=e.getLength(),c=n,s=/^\s*(?:\/\*|\/\/|--)#?(end)?region\b/,i=1;++n<a;){t=e.getLine(n);var p=s.exec(t);if(p&&(p[1]?i--:i++,!i))break}var m=n;if(m>c)return new u(c,l,m,t.length)}}.call(_.prototype)}),ace.define("ace/mode/fsl",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/fsl_highlight_rules","ace/mode/folding/cstyle"],function(o,r,d){var g=o("../lib/oop"),u=o("./text").Mode,h=o("./fsl_highlight_rules").FSLHighlightRules,_=o("./folding/cstyle").FoldMode,e=function(){this.HighlightRules=h,this.foldingRules=new _};g.inherits(e,u),function(){this.lineCommentStart="//",this.blockComment={start:"/*",end:"*/"},this.$id="ace/mode/fsl",this.snippetFileId="ace/snippets/fsl"}.call(e.prototype),r.Mode=e}),function(){ace.require(["ace/mode/fsl"],function(o){f&&(f.exports=o)})}()})(R);const b=k,F=x({__proto__:null,default:b},[k]);export{F as m};
