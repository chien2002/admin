function P(b,w){for(var f=0;f<w.length;f++){const g=w[f];if(typeof g!="string"&&!Array.isArray(g)){for(const M in g)if(M!=="default"&&!(M in b)){const C=Object.getOwnPropertyDescriptor(g,M);C&&Object.defineProperty(b,M,C.get?C:{enumerable:!0,get:()=>g[M]})}}}return Object.freeze(Object.defineProperty(b,Symbol.toStringTag,{value:"Module"}))}var x={},H={get exports(){return x},set exports(b){x=b}};(function(b,w){ace.define("ace/occur",["require","exports","module","ace/lib/oop","ace/search","ace/edit_session","ace/search_highlight","ace/lib/dom"],function(f,g,M){var C=this&&this.__extends||function(){var u=function(h,l){return u=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,e){d.__proto__=e}||function(d,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(d[n]=e[n])},u(h,l)};return function(h,l){if(typeof l!="function"&&l!==null)throw new TypeError("Class extends value "+String(l)+" is not a constructor or null");u(h,l);function d(){this.constructor=h}h.prototype=l===null?Object.create(l):(d.prototype=l.prototype,new d)}}(),$=f("./lib/oop"),v=f("./search").Search,k=f("./edit_session").EditSession,y=f("./search_highlight").SearchHighlight,s=function(u){C(h,u);function h(){return u!==null&&u.apply(this,arguments)||this}return h.prototype.enter=function(l,d){if(!d.needle)return!1;var e=l.getCursorPosition();this.displayOccurContent(l,d);var n=this.originalToOccurPosition(l.session,e);return l.moveCursorToPosition(n),!0},h.prototype.exit=function(l,d){var e=d.translatePosition&&l.getCursorPosition(),n=e&&this.occurToOriginalPosition(l.session,e);return this.displayOriginalContent(l),n&&l.moveCursorToPosition(n),!0},h.prototype.highlight=function(l,d){var e=l.$occurHighlight=l.$occurHighlight||l.addDynamicMarker(new y(null,"ace_occur-highlight","text"));e.setRegexp(d),l._emit("changeBackMarker")},h.prototype.displayOccurContent=function(l,d){this.$originalSession=l.session;var e=this.matchingLines(l.session,d),n=e.map(function(c){return c.content}),a=new k(n.join(`
`));a.$occur=this,a.$occurMatchingLines=e,l.setSession(a),this.$useEmacsStyleLineStart=this.$originalSession.$useEmacsStyleLineStart,a.$useEmacsStyleLineStart=this.$useEmacsStyleLineStart,this.highlight(a,d.re),a._emit("changeBackMarker")},h.prototype.displayOriginalContent=function(l){l.setSession(this.$originalSession),this.$originalSession.$useEmacsStyleLineStart=this.$useEmacsStyleLineStart},h.prototype.originalToOccurPosition=function(l,d){var e=l.$occurMatchingLines,n={row:0,column:0};if(!e)return n;for(var a=0;a<e.length;a++)if(e[a].row===d.row)return{row:a,column:d.column};return n},h.prototype.occurToOriginalPosition=function(l,d){var e=l.$occurMatchingLines;return!e||!e[d.row]?d:{row:e[d.row].row,column:d.column}},h.prototype.matchingLines=function(l,d){if(d=$.mixin({},d),!l||!d.needle)return[];var e=new v;return e.set(d),e.findAll(l).reduce(function(n,a){var c=a.start.row,r=n[n.length-1];return r&&r.row===c?n:n.concat({row:c,content:l.getLine(c)})},[])},h}(v),o=f("./lib/dom");o.importCssString(`.ace_occur-highlight {
	    border-radius: 4px;
	    background-color: rgba(87, 255, 8, 0.25);
	    position: absolute;
	    z-index: 4;
	    box-sizing: border-box;
	    box-shadow: 0 0 4px rgb(91, 255, 50);
	}
	.ace_dark .ace_occur-highlight {
	    background-color: rgb(80, 140, 85);
	    box-shadow: 0 0 4px rgb(60, 120, 70);
	}
`,"incremental-occur-highlighting",!1),g.Occur=s}),ace.define("ace/commands/occur_commands",["require","exports","module","ace/config","ace/occur","ace/keyboard/hash_handler","ace/lib/oop"],function(f,g,M){f("../config");var C=f("../occur").Occur,$={name:"occur",exec:function(o,u){var h=!!o.session.$occur,l=new C().enter(o,u);l&&!h&&s.installIn(o)},readOnly:!0},v=[{name:"occurexit",bindKey:"esc|Ctrl-G",exec:function(o){var u=o.session.$occur;u&&(u.exit(o,{}),o.session.$occur||s.uninstallFrom(o))},readOnly:!0},{name:"occuraccept",bindKey:"enter",exec:function(o){var u=o.session.$occur;u&&(u.exit(o,{translatePosition:!0}),o.session.$occur||s.uninstallFrom(o))},readOnly:!0}],k=f("../keyboard/hash_handler").HashHandler,y=f("../lib/oop");function s(){}y.inherits(s,k),function(){this.isOccurHandler=!0,this.attach=function(u){k.call(this,v,u.commands.platform),this.$editor=u};var o=this.handleKeyboard;this.handleKeyboard=function(u,h,l,d){var e=o.call(this,u,h,l,d);return e&&e.command?e:void 0}}.call(s.prototype),s.installIn=function(o){var u=new this;o.keyBinding.addKeyboardHandler(u),o.commands.addCommands(v)},s.uninstallFrom=function(o){o.commands.removeCommands(v);var u=o.getKeyboardHandler();u.isOccurHandler&&o.keyBinding.removeKeyboardHandler(u)},g.occurStartCommand=$}),ace.define("ace/commands/incremental_search_commands",["require","exports","module","ace/config","ace/lib/oop","ace/keyboard/hash_handler","ace/commands/occur_commands"],function(f,g,M){var C=f("../config"),$=f("../lib/oop"),v=f("../keyboard/hash_handler").HashHandler,k=f("./occur_commands").occurStartCommand;g.iSearchStartCommands=[{name:"iSearch",bindKey:{win:"Ctrl-F",mac:"Command-F"},exec:function(s,o){C.loadModule(["core","ace/incremental_search"],function(u){var h=u.iSearch=u.iSearch||new u.IncrementalSearch;h.activate(s,o.backwards),o.jumpToFirstMatch&&h.next(o)})},readOnly:!0},{name:"iSearchBackwards",exec:function(s,o){s.execCommand("iSearch",{backwards:!0})},readOnly:!0},{name:"iSearchAndGo",bindKey:{win:"Ctrl-K",mac:"Command-G"},exec:function(s,o){s.execCommand("iSearch",{jumpToFirstMatch:!0,useCurrentOrPrevSearch:!0})},readOnly:!0},{name:"iSearchBackwardsAndGo",bindKey:{win:"Ctrl-Shift-K",mac:"Command-Shift-G"},exec:function(s){s.execCommand("iSearch",{jumpToFirstMatch:!0,backwards:!0,useCurrentOrPrevSearch:!0})},readOnly:!0}],g.iSearchCommands=[{name:"restartSearch",bindKey:{win:"Ctrl-F",mac:"Command-F"},exec:function(s){s.cancelSearch(!0)}},{name:"searchForward",bindKey:{win:"Ctrl-S|Ctrl-K",mac:"Ctrl-S|Command-G"},exec:function(s,o){o.useCurrentOrPrevSearch=!0,s.next(o)}},{name:"searchBackward",bindKey:{win:"Ctrl-R|Ctrl-Shift-K",mac:"Ctrl-R|Command-Shift-G"},exec:function(s,o){o.useCurrentOrPrevSearch=!0,o.backwards=!0,s.next(o)}},{name:"extendSearchTerm",exec:function(s,o){s.addString(o)}},{name:"extendSearchTermSpace",bindKey:"space",exec:function(s){s.addString(" ")}},{name:"shrinkSearchTerm",bindKey:"backspace",exec:function(s){s.removeChar()}},{name:"confirmSearch",bindKey:"return",exec:function(s){s.deactivate()}},{name:"cancelSearch",bindKey:"esc|Ctrl-G",exec:function(s){s.deactivate(!0)}},{name:"occurisearch",bindKey:"Ctrl-O",exec:function(s){var o=$.mixin({},s.$options);s.deactivate(),k.exec(s.$editor,o)}},{name:"yankNextWord",bindKey:"Ctrl-w",exec:function(s){var o=s.$editor,u=o.selection.getRangeOfMovements(function(l){l.moveCursorWordRight()}),h=o.session.getTextRange(u);s.addString(h)}},{name:"yankNextChar",bindKey:"Ctrl-Alt-y",exec:function(s){var o=s.$editor,u=o.selection.getRangeOfMovements(function(l){l.moveCursorRight()}),h=o.session.getTextRange(u);s.addString(h)}},{name:"recenterTopBottom",bindKey:"Ctrl-l",exec:function(s){s.$editor.execCommand("recenterTopBottom")}},{name:"selectAllMatches",bindKey:"Ctrl-space",exec:function(s){var o=s.$editor,u=o.session.$isearchHighlight,h=u&&u.cache?u.cache.reduce(function(l,d){return l.concat(d||[])},[]):[];s.deactivate(!1),h.forEach(o.selection.addRange.bind(o.selection))}},{name:"searchAsRegExp",bindKey:"Alt-r",exec:function(s){s.convertNeedleToRegExp()}}].map(function(s){return s.readOnly=!0,s.isIncrementalSearchCommand=!0,s.scrollIntoView="animate-cursor",s});function y(s){this.$iSearch=s}$.inherits(y,v),function(){this.attach=function(o){var u=this.$iSearch;v.call(this,g.iSearchCommands,o.commands.platform),this.$commandExecHandler=o.commands.on("exec",function(h){if(!h.command.isIncrementalSearchCommand)return u.deactivate();h.stopPropagation(),h.preventDefault();var l=o.session.getScrollTop(),d=h.command.exec(u,h.args||{});return o.renderer.scrollCursorIntoView(null,.5),o.renderer.animateScrolling(l),d})},this.detach=function(o){this.$commandExecHandler&&(o.commands.off("exec",this.$commandExecHandler),delete this.$commandExecHandler)};var s=this.handleKeyboard;this.handleKeyboard=function(o,u,h,l){if((u===1||u===8)&&h==="v"||u===1&&h==="y")return null;var d=s.call(this,o,u,h,l);if(d&&d.command)return d;if(u==-1){var e=this.commands.extendSearchTerm;if(e)return{command:e,args:h}}return!1}}.call(y.prototype),g.IncrementalSearchKeyboardHandler=y}),ace.define("ace/incremental_search",["require","exports","module","ace/range","ace/search","ace/search_highlight","ace/commands/incremental_search_commands","ace/lib/dom","ace/commands/command_manager","ace/editor","ace/config"],function(f,g,M){var C=this&&this.__extends||function(){var c=function(r,t){return c=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(i,m){i.__proto__=m}||function(i,m){for(var p in m)Object.prototype.hasOwnProperty.call(m,p)&&(i[p]=m[p])},c(r,t)};return function(r,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");c(r,t);function i(){this.constructor=r}r.prototype=t===null?Object.create(t):(i.prototype=t.prototype,new i)}}(),$=f("./range").Range,v=f("./search").Search,k=f("./search_highlight").SearchHighlight,y=f("./commands/incremental_search_commands"),s=y.IncrementalSearchKeyboardHandler;function o(c){return c instanceof RegExp}function u(c){var r=String(c),t=r.indexOf("/"),i=r.lastIndexOf("/");return{expression:r.slice(t+1,i),flags:r.slice(i+1)}}function h(c,r){try{return new RegExp(c,r)}catch{return c}}function l(c){return h(c.expression,c.flags)}var d=function(c){C(r,c);function r(){var t=c.call(this)||this;return t.$options={wrap:!1,skipCurrent:!1},t.$keyboardHandler=new s(t),t}return r.prototype.activate=function(t,i){this.$editor=t,this.$startPos=this.$currentPos=t.getCursorPosition(),this.$options.needle="",this.$options.backwards=i,t.keyBinding.addKeyboardHandler(this.$keyboardHandler),this.$originalEditorOnPaste=t.onPaste,t.onPaste=this.onPaste.bind(this),this.$mousedownHandler=t.on("mousedown",this.onMouseDown.bind(this)),this.selectionFix(t),this.statusMessage(!0)},r.prototype.deactivate=function(t){this.cancelSearch(t);var i=this.$editor;i.keyBinding.removeKeyboardHandler(this.$keyboardHandler),this.$mousedownHandler&&(i.off("mousedown",this.$mousedownHandler),delete this.$mousedownHandler),i.onPaste=this.$originalEditorOnPaste,this.message("")},r.prototype.selectionFix=function(t){t.selection.isEmpty()&&!t.session.$emacsMark&&t.clearSelection()},r.prototype.highlight=function(t){var i=this.$editor.session,m=i.$isearchHighlight=i.$isearchHighlight||i.addDynamicMarker(new k(null,"ace_isearch-result","text"));m.setRegexp(t),i._emit("changeBackMarker")},r.prototype.cancelSearch=function(t){var i=this.$editor;return this.$prevNeedle=this.$options.needle,this.$options.needle="",t?(i.moveCursorToPosition(this.$startPos),this.$currentPos=this.$startPos):i.pushEmacsMark&&i.pushEmacsMark(this.$startPos,!1),this.highlight(null),$.fromPoints(this.$currentPos,this.$currentPos)},r.prototype.highlightAndFindWithNeedle=function(t,i){if(!this.$editor)return null;var m=this.$options;if(i&&(m.needle=i.call(this,m.needle||"")||""),m.needle.length===0)return this.statusMessage(!0),this.cancelSearch(!0);m.start=this.$currentPos;var p=this.$editor.session,S=this.find(p),_=this.$editor.emacsMark?!!this.$editor.emacsMark():!this.$editor.selection.isEmpty();return S&&(m.backwards&&(S=$.fromPoints(S.end,S.start)),this.$editor.selection.setRange($.fromPoints(_?this.$startPos:S.end,S.end)),t&&(this.$currentPos=S.end),this.highlight(m.re)),this.statusMessage(S),S},r.prototype.addString=function(t){return this.highlightAndFindWithNeedle(!1,function(i){if(!o(i))return i+t;var m=u(i);return m.expression+=t,l(m)})},r.prototype.removeChar=function(t){return this.highlightAndFindWithNeedle(!1,function(i){if(!o(i))return i.substring(0,i.length-1);var m=u(i);return m.expression=m.expression.substring(0,m.expression.length-1),l(m)})},r.prototype.next=function(t){return t=t||{},this.$options.backwards=!!t.backwards,this.$currentPos=this.$editor.getCursorPosition(),this.highlightAndFindWithNeedle(!0,function(i){return t.useCurrentOrPrevSearch&&i.length===0?this.$prevNeedle||"":i})},r.prototype.onMouseDown=function(t){return this.deactivate(),!0},r.prototype.onPaste=function(t){this.addString(t)},r.prototype.convertNeedleToRegExp=function(){return this.highlightAndFindWithNeedle(!1,function(t){return o(t)?t:h(t,"ig")})},r.prototype.convertNeedleToString=function(){return this.highlightAndFindWithNeedle(!1,function(t){return o(t)?u(t).expression:t})},r.prototype.statusMessage=function(t){var i=this.$options,m="";m+=i.backwards?"reverse-":"",m+="isearch: "+i.needle,m+=t?"":" (not found)",this.message(m)},r.prototype.message=function(t){this.$editor.showCommandLine&&(this.$editor.showCommandLine(t),this.$editor.focus())},r}(v);g.IncrementalSearch=d;var e=f("./lib/dom");e.importCssString(`
.ace_marker-layer .ace_isearch-result {
  position: absolute;
  z-index: 6;
  box-sizing: border-box;
}
div.ace_isearch-result {
  border-radius: 4px;
  background-color: rgba(255, 200, 0, 0.5);
  box-shadow: 0 0 4px rgb(255, 200, 0);
}
.ace_dark div.ace_isearch-result {
  background-color: rgb(100, 110, 160);
  box-shadow: 0 0 4px rgb(80, 90, 140);
}`,"incremental-search-highlighting",!1);var n=f("./commands/command_manager");(function(){this.setupIncrementalSearch=function(c,r){if(this.usesIncrementalSearch!=r){this.usesIncrementalSearch=r;var t=y.iSearchStartCommands,i=r?"addCommands":"removeCommands";this[i](t)}}}).call(n.CommandManager.prototype);var a=f("./editor").Editor;f("./config").defineOptions(a.prototype,"editor",{useIncrementalSearch:{set:function(c){this.keyBinding.$handlers.forEach(function(r){r.setupIncrementalSearch&&r.setupIncrementalSearch(this,c)}),this._emit("incrementalSearchSettingChanged",{isEnabled:c})}}})}),ace.define("ace/keyboard/emacs",["require","exports","module","ace/lib/dom","ace/incremental_search","ace/commands/incremental_search_commands","ace/keyboard/hash_handler","ace/lib/keys"],function(f,g,M){var C=f("../lib/dom");f("../incremental_search");var $=f("../commands/incremental_search_commands"),v=f("./hash_handler").HashHandler;g.handler=new v,g.handler.isEmacs=!0,g.handler.$id="ace/keyboard/emacs",C.importCssString(`
.emacs-mode .ace_cursor{
    border: 1px rgba(50,250,50,0.8) solid!important;
    box-sizing: border-box!important;
    background-color: rgba(0,250,0,0.9);
    opacity: 0.5;
}
.emacs-mode .ace_hidden-cursors .ace_cursor{
    opacity: 1;
    background-color: transparent;
}
.emacs-mode .ace_overwrite-cursors .ace_cursor {
    opacity: 1;
    background-color: transparent;
    border-width: 0 0 2px 2px !important;
}
.emacs-mode .ace_text-layer {
    z-index: 4
}
.emacs-mode .ace_cursor-layer {
    z-index: 2
}`,"emacsMode");var k,y;g.handler.attach=function(e){k=e.session.$selectLongWords,e.session.$selectLongWords=!0,y=e.session.$useEmacsStyleLineStart,e.session.$useEmacsStyleLineStart=!0,e.session.$emacsMark=null,e.session.$emacsMarkRing=e.session.$emacsMarkRing||[],e.emacsMark=function(){return this.session.$emacsMark},e.setEmacsMark=function(n){this.session.$emacsMark=n},e.pushEmacsMark=function(n,a){var c=this.session.$emacsMark;c&&this.session.$emacsMarkRing.push(c),!n||a?this.setEmacsMark(n):this.session.$emacsMarkRing.push(n)},e.popEmacsMark=function(){var n=this.emacsMark();return n?(this.setEmacsMark(null),n):this.session.$emacsMarkRing.pop()},e.getLastEmacsMark=function(n){return this.session.$emacsMark||this.session.$emacsMarkRing.slice(-1)[0]},e.emacsMarkForSelection=function(n){var a=this.selection,c=this.multiSelect?this.multiSelect.getAllRanges().length:1,r=a.index||0,t=this.session.$emacsMarkRing,i=t.length-(c-r),m=t[i]||a.anchor;return n&&t.splice(i,1,"row"in n&&"column"in n?n:void 0),m},e.on("click",o),e.on("changeSession",s),e.renderer.$blockCursor=!0,e.setStyle("emacs-mode"),e.commands.addCommands(d),g.handler.platform=e.commands.platform,e.$emacsModeHandler=this,e.on("copy",this.onCopy),e.on("paste",this.onPaste)},g.handler.detach=function(e){e.renderer.$blockCursor=!1,e.session.$selectLongWords=k,e.session.$useEmacsStyleLineStart=y,e.off("click",o),e.off("changeSession",s),e.unsetStyle("emacs-mode"),e.commands.removeCommands(d),e.off("copy",this.onCopy),e.off("paste",this.onPaste),e.$emacsModeHandler=null};var s=function(e){e.oldSession&&(e.oldSession.$selectLongWords=k,e.oldSession.$useEmacsStyleLineStart=y),k=e.session.$selectLongWords,e.session.$selectLongWords=!0,y=e.session.$useEmacsStyleLineStart,e.session.$useEmacsStyleLineStart=!0,e.session.hasOwnProperty("$emacsMark")||(e.session.$emacsMark=null),e.session.hasOwnProperty("$emacsMarkRing")||(e.session.$emacsMarkRing=[])},o=function(e){e.editor.session.$emacsMark=null},u=f("../lib/keys").KEY_MODS,h={C:"ctrl",S:"shift",M:"alt",CMD:"command"},l=["C-S-M-CMD","S-M-CMD","C-M-CMD","C-S-CMD","C-S-M","M-CMD","S-CMD","S-M","C-CMD","C-M","C-S","CMD","M","S","C"];l.forEach(function(e){var n=0;e.split("-").forEach(function(a){n=n|u[h[a]]}),h[n]=e.toLowerCase()+"-"}),g.handler.onCopy=function(e,n){n.$handlesEmacsOnCopy||(n.$handlesEmacsOnCopy=!0,g.handler.commands.killRingSave.exec(n),n.$handlesEmacsOnCopy=!1)},g.handler.onPaste=function(e,n){n.pushEmacsMark(n.getCursorPosition())},g.handler.bindKey=function(e,n){if(typeof e=="object"&&(e=e[this.platform]),!!e){var a=this.commandKeyBinding;e.split("|").forEach(function(c){c=c.toLowerCase(),a[c]=n;var r=c.split(" ").slice(0,-1);r.reduce(function(t,i,m){var p=t[m-1]?t[m-1]+" ":"";return t.concat([p+i])},[]).forEach(function(t){a[t]||(a[t]="null")})},this)}},g.handler.getStatusText=function(e,n){var a="";return n.count&&(a+=n.count),n.keyChain&&(a+=" "+n.keyChain),a},g.handler.handleKeyboard=function(e,n,a,c){if(c!==-1){var r=e.editor;if(r._signal("changeStatus"),n==-1&&(r.pushEmacsMark(),e.count)){var t=new Array(e.count+1).join(a);return e.count=null,{command:"insertstring",args:t}}var i=h[n];if(i=="c-"||e.count){var m=parseInt(a[a.length-1]);if(typeof m=="number"&&!isNaN(m))return e.count=Math.max(e.count,0)||0,e.count=10*e.count+m,{command:"null"}}i&&(a=i+a),e.keyChain&&(a=e.keyChain+=" "+a);var p=this.commandKeyBinding[a];if(e.keyChain=p=="null"?a:"",!!p){if(p==="null")return{command:"null"};if(p==="universalArgument")return e.count=-4,{command:"null"};var S;if(typeof p!="string"&&(S=p.args,p.command&&(p=p.command),p==="goorselect"&&(p=r.emacsMark()?S[1]:S[0],S=null)),!(typeof p=="string"&&((p==="insertstring"||p==="splitline"||p==="togglecomment")&&r.pushEmacsMark(),p=this.commands[p]||r.commands.commands[p],!p))){if(!p.readOnly&&!p.isYank&&(e.lastCommand=null),!p.readOnly&&r.emacsMark()&&r.setEmacsMark(null),e.count){var m=e.count;if(e.count=0,!p||!p.handlesCount)return{args:S,command:{exec:function(O,R){for(var E=0;E<m;E++)p.exec(O,R)},multiSelectAction:p.multiSelectAction}};S||(S={}),typeof S=="object"&&(S.count=m)}return{command:p,args:S}}}}},g.emacsKeys={"Up|C-p":{command:"goorselect",args:["golineup","selectup"]},"Down|C-n":{command:"goorselect",args:["golinedown","selectdown"]},"Left|C-b":{command:"goorselect",args:["gotoleft","selectleft"]},"Right|C-f":{command:"goorselect",args:["gotoright","selectright"]},"C-Left|M-b":{command:"goorselect",args:["gotowordleft","selectwordleft"]},"C-Right|M-f":{command:"goorselect",args:["gotowordright","selectwordright"]},"Home|C-a":{command:"goorselect",args:["gotolinestart","selecttolinestart"]},"End|C-e":{command:"goorselect",args:["gotolineend","selecttolineend"]},"C-Home|S-M-,":{command:"goorselect",args:["gotostart","selecttostart"]},"C-End|S-M-.":{command:"goorselect",args:["gotoend","selecttoend"]},"S-Up|S-C-p":"selectup","S-Down|S-C-n":"selectdown","S-Left|S-C-b":"selectleft","S-Right|S-C-f":"selectright","S-C-Left|S-M-b":"selectwordleft","S-C-Right|S-M-f":"selectwordright","S-Home|S-C-a":"selecttolinestart","S-End|S-C-e":"selecttolineend","S-C-Home":"selecttostart","S-C-End":"selecttoend","C-l":"recenterTopBottom","M-s":"centerselection","M-g":"gotoline","C-x C-p":"selectall","C-Down":{command:"goorselect",args:["gotopagedown","selectpagedown"]},"C-Up":{command:"goorselect",args:["gotopageup","selectpageup"]},"PageDown|C-v":{command:"goorselect",args:["gotopagedown","selectpagedown"]},"PageUp|M-v":{command:"goorselect",args:["gotopageup","selectpageup"]},"S-C-Down":"selectpagedown","S-C-Up":"selectpageup","C-s":"iSearch","C-r":"iSearchBackwards","M-C-s":"findnext","M-C-r":"findprevious","S-M-5":"replace",Backspace:"backspace","Delete|C-d":"del","Return|C-m":{command:"insertstring",args:`
`},"C-o":"splitline","M-d|C-Delete":{command:"killWord",args:"right"},"C-Backspace|M-Backspace|M-Delete":{command:"killWord",args:"left"},"C-k":"killLine","C-y|S-Delete":"yank","M-y":"yankRotate","C-g":"keyboardQuit","C-w|C-S-W":"killRegion","M-w":"killRingSave","C-Space":"setMark","C-x C-x":"exchangePointAndMark","C-t":"transposeletters","M-u":"touppercase","M-l":"tolowercase","M-/":"autocomplete","C-u":"universalArgument","M-;":"togglecomment","C-/|C-x u|S-C--|C-z":"undo","S-C-/|S-C-x u|C--|S-C-z":"redo","C-x r":"selectRectangularRegion","M-x":{command:"focusCommandLine",args:"M-x "}},g.handler.bindKeys(g.emacsKeys),g.handler.addCommands({recenterTopBottom:function(e){var n=e.renderer,a=n.$cursorLayer.getPixelPosition(),c=n.$size.scrollerHeight-n.lineHeight,r=n.scrollTop;Math.abs(a.top-r)<2?r=a.top-c:Math.abs(a.top-r-c*.5)<2?r=a.top:r=a.top-c*.5,e.session.setScrollTop(r)},selectRectangularRegion:function(e){e.multiSelect.toggleBlockSelection()},setMark:{exec:function(e,n){if(n&&n.count){e.inMultiSelectMode?e.forEachSelection(i):i(),i();return}var a=e.emacsMark(),c=e.selection.getAllRanges(),r=c.map(function(m){return{row:m.start.row,column:m.start.column}}),t=c.every(function(m){return m.isEmpty()});if(a||!t){e.inMultiSelectMode?e.forEachSelection({exec:e.clearSelection.bind(e)}):e.clearSelection(),a&&e.pushEmacsMark(null);return}if(!a){r.forEach(function(m){e.pushEmacsMark(m)}),e.setEmacsMark(r[r.length-1]);return}function i(){var m=e.popEmacsMark();m&&e.moveCursorToPosition(m)}},readOnly:!0,handlesCount:!0},exchangePointAndMark:{exec:function(n,a){var c=n.selection;if(!a.count&&!c.isEmpty()){c.setSelectionRange(c.getRange(),!c.isBackwards());return}if(a.count){var r={row:c.lead.row,column:c.lead.column};c.clearSelection(),c.moveCursorToPosition(n.emacsMarkForSelection(r))}else c.selectToPosition(n.emacsMarkForSelection())},readOnly:!0,handlesCount:!0,multiSelectAction:"forEach"},killWord:{exec:function(e,n){e.clearSelection(),n=="left"?e.selection.selectWordLeft():e.selection.selectWordRight();var a=e.getSelectionRange(),c=e.session.getTextRange(a);g.killRing.add(c),e.session.remove(a),e.clearSelection()},multiSelectAction:"forEach"},killLine:function(e){e.pushEmacsMark(null),e.clearSelection();var n=e.getSelectionRange(),a=e.session.getLine(n.start.row);n.end.column=a.length,a=a.substr(n.start.column);var c=e.session.getFoldLine(n.start.row);c&&n.end.row!=c.end.row&&(n.end.row=c.end.row,a="x"),/^\s*$/.test(a)&&(n.end.row++,a=e.session.getLine(n.end.row),n.end.column=/^\s*$/.test(a)?a.length:0);var r=e.session.getTextRange(n);e.prevOp.command==this?g.killRing.append(r):g.killRing.add(r),e.session.remove(n),e.clearSelection()},yank:function(e){e.onPaste(g.killRing.get()||""),e.keyBinding.$data.lastCommand="yank"},yankRotate:function(e){e.keyBinding.$data.lastCommand=="yank"&&(e.undo(),e.session.$emacsMarkRing.pop(),e.onPaste(g.killRing.rotate()),e.keyBinding.$data.lastCommand="yank")},killRegion:{exec:function(e){g.killRing.add(e.getCopyText()),e.commands.byName.cut.exec(e),e.setEmacsMark(null)},readOnly:!0,multiSelectAction:"forEach"},killRingSave:{exec:function(e){e.$handlesEmacsOnCopy=!0;var n=e.session.$emacsMarkRing.slice(),a=[];g.killRing.add(e.getCopyText()),setTimeout(function(){function c(){var r=e.selection,t=r.getRange(),i=r.isBackwards()?t.end:t.start;a.push({row:i.row,column:i.column}),r.clearSelection()}e.$handlesEmacsOnCopy=!1,e.inMultiSelectMode?e.forEachSelection({exec:c}):c(),e.setEmacsMark(null),e.session.$emacsMarkRing=n.concat(a.reverse())},0)},readOnly:!0},keyboardQuit:function(e){e.selection.clearSelection(),e.setEmacsMark(null),e.keyBinding.$data.count=null},focusCommandLine:function(e,n){e.showCommandLine&&e.showCommandLine(n)}}),g.handler.addCommands($.iSearchStartCommands);var d=g.handler.commands;d.yank.isYank=!0,d.yankRotate.isYank=!0,g.killRing={$data:[],add:function(e){e&&this.$data.push(e),this.$data.length>30&&this.$data.shift()},append:function(e){var n=this.$data.length-1,a=this.$data[n]||"";e&&(a+=e),a&&(this.$data[n]=a)},get:function(e){return e=e||1,this.$data.slice(this.$data.length-e,this.$data.length).reverse().join(`
`)},pop:function(){return this.$data.length>1&&this.$data.pop(),this.get()},rotate:function(){return this.$data.unshift(this.$data.pop()),this.get()}}}),function(){ace.require(["ace/keyboard/emacs"],function(f){b&&(b.exports=f)})}()})(H);const L=x,T=P({__proto__:null,default:L},[x]);export{T as k};
