define("amber_core/Compiler-Semantic", ["amber/boot", "amber_core/Kernel-Objects", "amber_core/Compiler-AST", "amber_core/Compiler-Core"], function($boot){"use strict";
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
$core.addPackage('Compiler-Semantic');
$core.packages["Compiler-Semantic"].innerEval = function (expr) { return eval(expr); };
$core.packages["Compiler-Semantic"].transport = {"type":"amd","amdNamespace":"amber_core"};

$core.addClass('LexicalScope', $globals.Object, ['node', 'instruction', 'temps', 'args', 'outerScope', 'blockIndex'], 'Compiler-Semantic');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.LexicalScope.comment="I represent a lexical scope where variable names are associated with ScopeVars\x0aInstances are used for block scopes. Method scopes are instances of MethodLexicalScope.\x0a\x0aI am attached to a ScopeVar and method/block nodes.\x0aEach context (method/closure) get a fresh scope that inherits from its outer scope.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "addArg:",
protocol: 'adding',
fn: function (aString){
var self=this;
function $ArgVar(){return $globals.ArgVar||(typeof ArgVar=="undefined"?nil:ArgVar)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._args();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["args"]=1;
//>>excludeEnd("ctx");
$recv($1)._at_put_(aString,$recv($ArgVar())._on_(aString));
$recv($recv(self._args())._at_(aString))._scope_(self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"addArg:",{aString:aString},$globals.LexicalScope)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "addArg: aString\x0a\x09self args at: aString put: (ArgVar on: aString).\x0a\x09(self args at: aString) scope: self",
referencedClasses: ["ArgVar"],
//>>excludeEnd("ide");
messageSends: ["at:put:", "args", "on:", "scope:", "at:"]
}),
$globals.LexicalScope);

$core.addMethod(
$core.method({
selector: "addTemp:",
protocol: 'adding',
fn: function (aString){
var self=this;
function $TempVar(){return $globals.TempVar||(typeof TempVar=="undefined"?nil:TempVar)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._temps();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["temps"]=1;
//>>excludeEnd("ctx");
$recv($1)._at_put_(aString,$recv($TempVar())._on_(aString));
$recv($recv(self._temps())._at_(aString))._scope_(self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"addTemp:",{aString:aString},$globals.LexicalScope)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "addTemp: aString\x0a\x09self temps at: aString put: (TempVar on: aString).\x0a\x09(self temps at: aString) scope: self",
referencedClasses: ["TempVar"],
//>>excludeEnd("ide");
messageSends: ["at:put:", "temps", "on:", "scope:", "at:"]
}),
$globals.LexicalScope);

$core.addMethod(
$core.method({
selector: "alias",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return "$ctx".__comma($recv(self._scopeLevel())._asString());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"alias",{},$globals.LexicalScope)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "alias\x0a\x09^ '$ctx', self scopeLevel asString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: [",", "asString", "scopeLevel"]
}),
$globals.LexicalScope);

$core.addMethod(
$core.method({
selector: "allVariableNames",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._args())._keys();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["keys"]=1;
//>>excludeEnd("ctx");
return $recv($1).__comma($recv(self._temps())._keys());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"allVariableNames",{},$globals.LexicalScope)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "allVariableNames\x0a\x09^ self args keys, self temps keys",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: [",", "keys", "args", "temps"]
}),
$globals.LexicalScope);

$core.addMethod(
$core.method({
selector: "args",
protocol: 'accessing',
fn: function (){
var self=this;
function $Dictionary(){return $globals.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$receiver;
$1=self["@args"];
if(($receiver = $1) == null || $receiver.isNil){
self["@args"]=$recv($Dictionary())._new();
return self["@args"];
} else {
return $1;
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"args",{},$globals.LexicalScope)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "args\x0a\x09^ args ifNil: [ args := Dictionary new ]",
referencedClasses: ["Dictionary"],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "new"]
}),
$globals.LexicalScope);

$core.addMethod(
$core.method({
selector: "bindingFor:",
protocol: 'accessing',
fn: function (aStringOrNode){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$3,$4,$5,$1;
$2=self._pseudoVars();
$3=$recv(aStringOrNode)._value();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["value"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._at_ifAbsent_($3,(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$4=self._args();
$5=$recv(aStringOrNode)._value();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["value"]=2;
//>>excludeEnd("ctx");
return $recv($4)._at_ifAbsent_($5,(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv(self._temps())._at_ifAbsent_($recv(aStringOrNode)._value(),(function(){
return nil;

}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["at:ifAbsent:"]=2;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:ifAbsent:"]=1;
//>>excludeEnd("ctx");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"bindingFor:",{aStringOrNode:aStringOrNode},$globals.LexicalScope)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aStringOrNode"],
source: "bindingFor: aStringOrNode\x0a\x09^ self pseudoVars at: aStringOrNode value ifAbsent: [\x0a\x09\x09self args at: aStringOrNode value ifAbsent: [\x0a\x09\x09\x09self temps at: aStringOrNode value ifAbsent: [ nil ]]]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:ifAbsent:", "pseudoVars", "value", "args", "temps"]
}),
$globals.LexicalScope);

$core.addMethod(
$core.method({
selector: "blockIndex",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$receiver;
$1=self["@blockIndex"];
if(($receiver = $1) == null || $receiver.isNil){
return (0);
} else {
return $1;
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"blockIndex",{},$globals.LexicalScope)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "blockIndex\x0a\x09^ blockIndex ifNil: [ 0 ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:"]
}),
$globals.LexicalScope);

$core.addMethod(
$core.method({
selector: "blockIndex:",
protocol: 'accessing',
fn: function (anInteger){
var self=this;
self["@blockIndex"]=anInteger;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anInteger"],
source: "blockIndex: anInteger \x0a\x09blockIndex := anInteger",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.LexicalScope);

$core.addMethod(
$core.method({
selector: "canInlineNonLocalReturns",
protocol: 'testing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv(self._isInlined())._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(self._outerScope())._canInlineNonLocalReturns();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"canInlineNonLocalReturns",{},$globals.LexicalScope)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "canInlineNonLocalReturns\x0a\x09^ self isInlined and: [ self outerScope canInlineNonLocalReturns ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["and:", "isInlined", "canInlineNonLocalReturns", "outerScope"]
}),
$globals.LexicalScope);

$core.addMethod(
$core.method({
selector: "instruction",
protocol: 'accessing',
fn: function (){
var self=this;
return self["@instruction"];

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "instruction\x0a\x09^ instruction",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.LexicalScope);

$core.addMethod(
$core.method({
selector: "instruction:",
protocol: 'accessing',
fn: function (anIRInstruction){
var self=this;
self["@instruction"]=anIRInstruction;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIRInstruction"],
source: "instruction: anIRInstruction\x0a\x09instruction := anIRInstruction",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.LexicalScope);

$core.addMethod(
$core.method({
selector: "isBlockScope",
protocol: 'testing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv(self._isMethodScope())._not();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isBlockScope",{},$globals.LexicalScope)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isBlockScope\x0a\x09^ self isMethodScope not",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["not", "isMethodScope"]
}),
$globals.LexicalScope);

$core.addMethod(
$core.method({
selector: "isInlined",
protocol: 'testing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1;
$2=self._instruction();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["instruction"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._notNil();
return $recv($1)._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(self._instruction())._isInlined();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isInlined",{},$globals.LexicalScope)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isInlined\x0a\x09^ self instruction notNil and: [\x0a\x09\x09self instruction isInlined ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["and:", "notNil", "instruction", "isInlined"]
}),
$globals.LexicalScope);

$core.addMethod(
$core.method({
selector: "isMethodScope",
protocol: 'testing',
fn: function (){
var self=this;
return false;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isMethodScope\x0a\x09^ false",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.LexicalScope);

$core.addMethod(
$core.method({
selector: "lookupVariable:",
protocol: 'accessing',
fn: function (aNode){
var self=this;
var lookup;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$receiver;
lookup=self._bindingFor_(aNode);
$1=lookup;
if(($receiver = $1) == null || $receiver.isNil){
$2=self._outerScope();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["outerScope"]=1;
//>>excludeEnd("ctx");
if(($receiver = $2) == null || $receiver.isNil){
lookup=$2;
} else {
lookup=$recv(self._outerScope())._lookupVariable_(aNode);
};
lookup;
} else {
$1;
};
return lookup;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"lookupVariable:",{aNode:aNode,lookup:lookup},$globals.LexicalScope)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode"],
source: "lookupVariable: aNode\x0a\x09| lookup |\x0a\x09lookup := (self bindingFor: aNode).\x0a\x09lookup ifNil: [\x0a\x09\x09lookup := self outerScope ifNotNil: [\x0a\x09\x09\x09(self outerScope lookupVariable: aNode) ]].\x0a\x09^ lookup",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["bindingFor:", "ifNil:", "ifNotNil:", "outerScope", "lookupVariable:"]
}),
$globals.LexicalScope);

$core.addMethod(
$core.method({
selector: "methodScope",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$receiver;
$1=self._outerScope();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["outerScope"]=1;
//>>excludeEnd("ctx");
if(($receiver = $1) == null || $receiver.isNil){
return $1;
} else {
return $recv(self._outerScope())._methodScope();
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"methodScope",{},$globals.LexicalScope)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "methodScope\x0a\x09^ self outerScope ifNotNil: [\x0a\x09\x09self outerScope methodScope ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNotNil:", "outerScope", "methodScope"]
}),
$globals.LexicalScope);

$core.addMethod(
$core.method({
selector: "node",
protocol: 'accessing',
fn: function (){
var self=this;
return self["@node"];

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "node\x0a\x09\x22Answer the node in which I am defined\x22\x0a\x09\x0a\x09^ node",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.LexicalScope);

$core.addMethod(
$core.method({
selector: "node:",
protocol: 'accessing',
fn: function (aNode){
var self=this;
self["@node"]=aNode;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode"],
source: "node: aNode\x0a\x09node := aNode",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.LexicalScope);

$core.addMethod(
$core.method({
selector: "outerScope",
protocol: 'accessing',
fn: function (){
var self=this;
return self["@outerScope"];

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "outerScope\x0a\x09^ outerScope",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.LexicalScope);

$core.addMethod(
$core.method({
selector: "outerScope:",
protocol: 'accessing',
fn: function (aLexicalScope){
var self=this;
self["@outerScope"]=aLexicalScope;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aLexicalScope"],
source: "outerScope: aLexicalScope\x0a\x09outerScope := aLexicalScope",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.LexicalScope);

$core.addMethod(
$core.method({
selector: "pseudoVars",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv(self._methodScope())._pseudoVars();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"pseudoVars",{},$globals.LexicalScope)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "pseudoVars\x0a\x09^ self methodScope pseudoVars",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["pseudoVars", "methodScope"]
}),
$globals.LexicalScope);

$core.addMethod(
$core.method({
selector: "scopeLevel",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$4,$3,$receiver;
$1=self._outerScope();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["outerScope"]=1;
//>>excludeEnd("ctx");
if(($receiver = $1) == null || $receiver.isNil){
return (1);
} else {
$1;
};
$2=self._isInlined();
if($core.assert($2)){
$4=self._outerScope();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["outerScope"]=2;
//>>excludeEnd("ctx");
$3=$recv($4)._scopeLevel();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["scopeLevel"]=1;
//>>excludeEnd("ctx");
return $3;
};
return $recv($recv(self._outerScope())._scopeLevel()).__plus((1));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"scopeLevel",{},$globals.LexicalScope)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "scopeLevel\x0a\x09self outerScope ifNil: [ ^ 1 ].\x0a\x09self isInlined ifTrue: [ ^ self outerScope scopeLevel ].\x0a\x09\x0a\x09^ self outerScope scopeLevel + 1",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "outerScope", "ifTrue:", "isInlined", "scopeLevel", "+"]
}),
$globals.LexicalScope);

$core.addMethod(
$core.method({
selector: "temps",
protocol: 'accessing',
fn: function (){
var self=this;
function $Dictionary(){return $globals.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$receiver;
$1=self["@temps"];
if(($receiver = $1) == null || $receiver.isNil){
self["@temps"]=$recv($Dictionary())._new();
return self["@temps"];
} else {
return $1;
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"temps",{},$globals.LexicalScope)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "temps\x0a\x09^ temps ifNil: [ temps := Dictionary new ]",
referencedClasses: ["Dictionary"],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "new"]
}),
$globals.LexicalScope);



$core.addClass('MethodLexicalScope', $globals.LexicalScope, ['iVars', 'pseudoVars', 'unknownVariables', 'localReturn', 'nonLocalReturns'], 'Compiler-Semantic');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.MethodLexicalScope.comment="I represent a method scope.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "addIVar:",
protocol: 'adding',
fn: function (aString){
var self=this;
function $InstanceVar(){return $globals.InstanceVar||(typeof InstanceVar=="undefined"?nil:InstanceVar)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._iVars();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["iVars"]=1;
//>>excludeEnd("ctx");
$recv($1)._at_put_(aString,$recv($InstanceVar())._on_(aString));
$recv($recv(self._iVars())._at_(aString))._scope_(self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"addIVar:",{aString:aString},$globals.MethodLexicalScope)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "addIVar: aString\x0a\x09self iVars at: aString put: (InstanceVar on: aString).\x0a\x09(self iVars at: aString) scope: self",
referencedClasses: ["InstanceVar"],
//>>excludeEnd("ide");
messageSends: ["at:put:", "iVars", "on:", "scope:", "at:"]
}),
$globals.MethodLexicalScope);

$core.addMethod(
$core.method({
selector: "addNonLocalReturn:",
protocol: 'adding',
fn: function (aScope){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._nonLocalReturns())._add_(aScope);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"addNonLocalReturn:",{aScope:aScope},$globals.MethodLexicalScope)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aScope"],
source: "addNonLocalReturn: aScope\x0a\x09self nonLocalReturns add: aScope",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["add:", "nonLocalReturns"]
}),
$globals.MethodLexicalScope);

$core.addMethod(
$core.method({
selector: "allVariableNames",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true,
//>>excludeEnd("ctx");
($globals.MethodLexicalScope.superclass||$boot.dnu).fn.prototype._allVariableNames.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
return $recv($1).__comma($recv(self._iVars())._keys());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"allVariableNames",{},$globals.MethodLexicalScope)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "allVariableNames\x0a\x09^ super allVariableNames, self iVars keys",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: [",", "allVariableNames", "keys", "iVars"]
}),
$globals.MethodLexicalScope);

$core.addMethod(
$core.method({
selector: "bindingFor:",
protocol: 'accessing',
fn: function (aNode){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$receiver;
$1=(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true,
//>>excludeEnd("ctx");
($globals.MethodLexicalScope.superclass||$boot.dnu).fn.prototype._bindingFor_.apply($recv(self), [aNode]));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
if(($receiver = $1) == null || $receiver.isNil){
return $recv(self._iVars())._at_ifAbsent_($recv(aNode)._value(),(function(){
return nil;

}));
} else {
return $1;
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"bindingFor:",{aNode:aNode},$globals.MethodLexicalScope)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode"],
source: "bindingFor: aNode\x0a\x09^ (super bindingFor: aNode) ifNil: [\x0a\x09\x09self iVars at: aNode value ifAbsent: [ nil ]]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "bindingFor:", "at:ifAbsent:", "iVars", "value"]
}),
$globals.MethodLexicalScope);

$core.addMethod(
$core.method({
selector: "canInlineNonLocalReturns",
protocol: 'testing',
fn: function (){
var self=this;
return true;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "canInlineNonLocalReturns\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.MethodLexicalScope);

$core.addMethod(
$core.method({
selector: "hasLocalReturn",
protocol: 'testing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return self._localReturn();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"hasLocalReturn",{},$globals.MethodLexicalScope)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "hasLocalReturn\x0a\x09^ self localReturn",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["localReturn"]
}),
$globals.MethodLexicalScope);

$core.addMethod(
$core.method({
selector: "hasNonLocalReturn",
protocol: 'testing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv(self._nonLocalReturns())._notEmpty();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"hasNonLocalReturn",{},$globals.MethodLexicalScope)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "hasNonLocalReturn\x0a\x09^ self nonLocalReturns notEmpty",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["notEmpty", "nonLocalReturns"]
}),
$globals.MethodLexicalScope);

$core.addMethod(
$core.method({
selector: "iVars",
protocol: 'accessing',
fn: function (){
var self=this;
function $Dictionary(){return $globals.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$receiver;
$1=self["@iVars"];
if(($receiver = $1) == null || $receiver.isNil){
self["@iVars"]=$recv($Dictionary())._new();
return self["@iVars"];
} else {
return $1;
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"iVars",{},$globals.MethodLexicalScope)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "iVars\x0a\x09^ iVars ifNil: [ iVars := Dictionary new ]",
referencedClasses: ["Dictionary"],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "new"]
}),
$globals.MethodLexicalScope);

$core.addMethod(
$core.method({
selector: "isMethodScope",
protocol: 'testing',
fn: function (){
var self=this;
return true;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isMethodScope\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.MethodLexicalScope);

$core.addMethod(
$core.method({
selector: "localReturn",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$receiver;
$1=self["@localReturn"];
if(($receiver = $1) == null || $receiver.isNil){
return false;
} else {
return $1;
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"localReturn",{},$globals.MethodLexicalScope)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "localReturn\x0a\x09^ localReturn ifNil: [ false ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:"]
}),
$globals.MethodLexicalScope);

$core.addMethod(
$core.method({
selector: "localReturn:",
protocol: 'accessing',
fn: function (aBoolean){
var self=this;
self["@localReturn"]=aBoolean;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBoolean"],
source: "localReturn: aBoolean\x0a\x09localReturn := aBoolean",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.MethodLexicalScope);

$core.addMethod(
$core.method({
selector: "methodScope",
protocol: 'accessing',
fn: function (){
var self=this;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "methodScope\x0a\x09^ self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.MethodLexicalScope);

$core.addMethod(
$core.method({
selector: "nonLocalReturns",
protocol: 'accessing',
fn: function (){
var self=this;
function $OrderedCollection(){return $globals.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$receiver;
$1=self["@nonLocalReturns"];
if(($receiver = $1) == null || $receiver.isNil){
self["@nonLocalReturns"]=$recv($OrderedCollection())._new();
return self["@nonLocalReturns"];
} else {
return $1;
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"nonLocalReturns",{},$globals.MethodLexicalScope)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "nonLocalReturns\x0a\x09^ nonLocalReturns ifNil: [ nonLocalReturns := OrderedCollection new ]",
referencedClasses: ["OrderedCollection"],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "new"]
}),
$globals.MethodLexicalScope);

$core.addMethod(
$core.method({
selector: "pseudoVars",
protocol: 'accessing',
fn: function (){
var self=this;
function $Dictionary(){return $globals.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
function $Smalltalk(){return $globals.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
function $PseudoVar(){return $globals.PseudoVar||(typeof PseudoVar=="undefined"?nil:PseudoVar)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$4,$3,$receiver;
$1=self["@pseudoVars"];
if(($receiver = $1) == null || $receiver.isNil){
self["@pseudoVars"]=$recv($Dictionary())._new();
self["@pseudoVars"];
$recv($recv($Smalltalk())._pseudoVariableNames())._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$2=self["@pseudoVars"];
$4=$recv($PseudoVar())._on_(each);
$recv($4)._scope_(self._methodScope());
$3=$recv($4)._yourself();
return $recv($2)._at_put_(each,$3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,2)});
//>>excludeEnd("ctx");
}));
} else {
$1;
};
return self["@pseudoVars"];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"pseudoVars",{},$globals.MethodLexicalScope)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "pseudoVars\x0a\x09pseudoVars ifNil: [\x0a\x09\x09pseudoVars := Dictionary new.\x0a\x09\x09Smalltalk pseudoVariableNames do: [ :each |\x0a\x09\x09\x09pseudoVars at: each put: ((PseudoVar on: each)\x0a\x09\x09\x09\x09scope: self methodScope;\x0a\x09\x09\x09\x09yourself) ]].\x0a\x09^ pseudoVars",
referencedClasses: ["Dictionary", "Smalltalk", "PseudoVar"],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "new", "do:", "pseudoVariableNames", "at:put:", "scope:", "on:", "methodScope", "yourself"]
}),
$globals.MethodLexicalScope);

$core.addMethod(
$core.method({
selector: "removeNonLocalReturn:",
protocol: 'adding',
fn: function (aScope){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._nonLocalReturns())._remove_ifAbsent_(aScope,(function(){

}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"removeNonLocalReturn:",{aScope:aScope},$globals.MethodLexicalScope)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aScope"],
source: "removeNonLocalReturn: aScope\x0a\x09self nonLocalReturns remove: aScope ifAbsent: []",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["remove:ifAbsent:", "nonLocalReturns"]
}),
$globals.MethodLexicalScope);

$core.addMethod(
$core.method({
selector: "unknownVariables",
protocol: 'accessing',
fn: function (){
var self=this;
function $OrderedCollection(){return $globals.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$receiver;
$1=self["@unknownVariables"];
if(($receiver = $1) == null || $receiver.isNil){
self["@unknownVariables"]=$recv($OrderedCollection())._new();
return self["@unknownVariables"];
} else {
return $1;
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"unknownVariables",{},$globals.MethodLexicalScope)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "unknownVariables\x0a\x09^ unknownVariables ifNil: [ unknownVariables := OrderedCollection new ]",
referencedClasses: ["OrderedCollection"],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "new"]
}),
$globals.MethodLexicalScope);



$core.addClass('ScopeVar', $globals.Object, ['scope', 'name'], 'Compiler-Semantic');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.ScopeVar.comment="I am an entry in a LexicalScope that gets associated with variable nodes of the same name.\x0aThere are 4 different subclasses of vars: temp vars, local vars, args, and unknown/global vars.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "alias",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv(self._name())._asVariableName();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"alias",{},$globals.ScopeVar)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "alias\x0a\x09^ self name asVariableName",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["asVariableName", "name"]
}),
$globals.ScopeVar);

$core.addMethod(
$core.method({
selector: "isArgVar",
protocol: 'testing',
fn: function (){
var self=this;
return false;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isArgVar\x0a\x09^ false",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ScopeVar);

$core.addMethod(
$core.method({
selector: "isClassRefVar",
protocol: 'testing',
fn: function (){
var self=this;
return false;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isClassRefVar\x0a\x09^ false",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ScopeVar);

$core.addMethod(
$core.method({
selector: "isImmutable",
protocol: 'testing',
fn: function (){
var self=this;
return false;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isImmutable\x0a\x09^ false",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ScopeVar);

$core.addMethod(
$core.method({
selector: "isInstanceVar",
protocol: 'testing',
fn: function (){
var self=this;
return false;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isInstanceVar\x0a\x09^ false",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ScopeVar);

$core.addMethod(
$core.method({
selector: "isPseudoVar",
protocol: 'testing',
fn: function (){
var self=this;
return false;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isPseudoVar\x0a\x09^ false",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ScopeVar);

$core.addMethod(
$core.method({
selector: "isTempVar",
protocol: 'testing',
fn: function (){
var self=this;
return false;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isTempVar\x0a\x09^ false",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ScopeVar);

$core.addMethod(
$core.method({
selector: "isUnknownVar",
protocol: 'testing',
fn: function (){
var self=this;
return false;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isUnknownVar\x0a\x09^ false",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ScopeVar);

$core.addMethod(
$core.method({
selector: "name",
protocol: 'accessing',
fn: function (){
var self=this;
return self["@name"];

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "name\x0a\x09^ name",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ScopeVar);

$core.addMethod(
$core.method({
selector: "name:",
protocol: 'accessing',
fn: function (aString){
var self=this;
self["@name"]=aString;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "name: aString\x0a\x09name := aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ScopeVar);

$core.addMethod(
$core.method({
selector: "scope",
protocol: 'accessing',
fn: function (){
var self=this;
return self["@scope"];

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "scope\x0a\x09^ scope",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ScopeVar);

$core.addMethod(
$core.method({
selector: "scope:",
protocol: 'accessing',
fn: function (aScope){
var self=this;
self["@scope"]=aScope;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aScope"],
source: "scope: aScope\x0a\x09scope := aScope",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ScopeVar);

$core.addMethod(
$core.method({
selector: "validateAssignment",
protocol: 'testing',
fn: function (){
var self=this;
function $InvalidAssignmentError(){return $globals.InvalidAssignmentError||(typeof InvalidAssignmentError=="undefined"?nil:InvalidAssignmentError)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
$1=$recv(self._isArgVar())._or_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._isPseudoVar();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
if($core.assert($1)){
$2=$recv($InvalidAssignmentError())._new();
$recv($2)._variableName_(self._name());
$recv($2)._signal();
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"validateAssignment",{},$globals.ScopeVar)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "validateAssignment\x0a\x09(self isArgVar or: [ self isPseudoVar ]) ifTrue: [\x0a\x09\x09InvalidAssignmentError new\x0a\x09\x09\x09variableName: self name;\x0a\x09\x09\x09signal]",
referencedClasses: ["InvalidAssignmentError"],
//>>excludeEnd("ide");
messageSends: ["ifTrue:", "or:", "isArgVar", "isPseudoVar", "variableName:", "new", "name", "signal"]
}),
$globals.ScopeVar);


$core.addMethod(
$core.method({
selector: "on:",
protocol: 'instance creation',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._new();
$recv($1)._name_(aString);
return $recv($1)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"on:",{aString:aString},$globals.ScopeVar.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "on: aString\x0a\x09^ self new\x0a\x09\x09name: aString;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["name:", "new", "yourself"]
}),
$globals.ScopeVar.klass);


$core.addClass('AliasVar', $globals.ScopeVar, ['node'], 'Compiler-Semantic');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.AliasVar.comment="I am an internally defined variable by the compiler";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "isImmutable",
protocol: 'testing',
fn: function (){
var self=this;
return true;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isImmutable\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AliasVar);

$core.addMethod(
$core.method({
selector: "node",
protocol: 'accessing',
fn: function (){
var self=this;
return self["@node"];

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "node\x0a\x09^ node",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AliasVar);

$core.addMethod(
$core.method({
selector: "node:",
protocol: 'accessing',
fn: function (aNode){
var self=this;
self["@node"]=aNode;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode"],
source: "node: aNode\x0a\x09node := aNode",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AliasVar);



$core.addClass('ArgVar', $globals.ScopeVar, [], 'Compiler-Semantic');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.ArgVar.comment="I am an argument of a method or block.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "isArgVar",
protocol: 'testing',
fn: function (){
var self=this;
return true;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isArgVar\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ArgVar);

$core.addMethod(
$core.method({
selector: "isImmutable",
protocol: 'testing',
fn: function (){
var self=this;
return true;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isImmutable\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ArgVar);



$core.addClass('ClassRefVar', $globals.ScopeVar, [], 'Compiler-Semantic');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.ClassRefVar.comment="I am an class reference variable";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "alias",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv("$".__comma(self._name())).__comma("()");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"alias",{},$globals.ClassRefVar)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "alias\x0a\x09\x22Fixes issue #190.\x0a\x09A function is created in the method definition, answering the class or nil.\x0a\x09See JSStream >> #nextPutClassRefFunction:\x22\x0a\x09\x0a\x09^ '$', self name, '()'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: [",", "name"]
}),
$globals.ClassRefVar);

$core.addMethod(
$core.method({
selector: "isClassRefVar",
protocol: 'testing',
fn: function (){
var self=this;
return true;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isClassRefVar\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ClassRefVar);

$core.addMethod(
$core.method({
selector: "isImmutable",
protocol: 'testing',
fn: function (){
var self=this;
return true;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isImmutable\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ClassRefVar);



$core.addClass('InstanceVar', $globals.ScopeVar, [], 'Compiler-Semantic');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.InstanceVar.comment="I am an instance variable of a method or block.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "alias",
protocol: 'testing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv("self[\x22@".__comma(self._name())).__comma("\x22]");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"alias",{},$globals.InstanceVar)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "alias\x0a\x09^ 'self[\x22@', self name, '\x22]'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: [",", "name"]
}),
$globals.InstanceVar);

$core.addMethod(
$core.method({
selector: "isInstanceVar",
protocol: 'testing',
fn: function (){
var self=this;
return true;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isInstanceVar\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.InstanceVar);



$core.addClass('PseudoVar', $globals.ScopeVar, [], 'Compiler-Semantic');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.PseudoVar.comment="I am an pseudo variable.\x0a\x0aThe five Smalltalk pseudo variables are: 'self', 'super', 'nil', 'true' and 'false'";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "alias",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return self._name();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"alias",{},$globals.PseudoVar)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "alias\x0a\x09^ self name",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["name"]
}),
$globals.PseudoVar);

$core.addMethod(
$core.method({
selector: "isImmutable",
protocol: 'testing',
fn: function (){
var self=this;
return true;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isImmutable\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.PseudoVar);

$core.addMethod(
$core.method({
selector: "isPseudoVar",
protocol: 'testing',
fn: function (){
var self=this;
return true;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isPseudoVar\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.PseudoVar);



$core.addClass('TempVar', $globals.ScopeVar, [], 'Compiler-Semantic');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.TempVar.comment="I am an temporary variable of a method or block.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "isTempVar",
protocol: 'testing',
fn: function (){
var self=this;
return true;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isTempVar\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.TempVar);



$core.addClass('UnknownVar', $globals.ScopeVar, [], 'Compiler-Semantic');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.UnknownVar.comment="I am an unknown variable. Amber uses unknown variables as JavaScript globals";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "isUnknownVar",
protocol: 'testing',
fn: function (){
var self=this;
return true;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isUnknownVar\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.UnknownVar);



$core.addClass('SemanticAnalyzer', $globals.NodeVisitor, ['currentScope', 'blockIndex', 'thePackage', 'theClass', 'classReferences', 'messageSends'], 'Compiler-Semantic');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.SemanticAnalyzer.comment="I semantically analyze the abstract syntax tree and annotate it with informations such as non local returns and variable scopes.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "classReferences",
protocol: 'accessing',
fn: function (){
var self=this;
function $Set(){return $globals.Set||(typeof Set=="undefined"?nil:Set)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$receiver;
$1=self["@classReferences"];
if(($receiver = $1) == null || $receiver.isNil){
self["@classReferences"]=$recv($Set())._new();
return self["@classReferences"];
} else {
return $1;
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"classReferences",{},$globals.SemanticAnalyzer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "classReferences\x0a\x09^ classReferences ifNil: [ classReferences := Set new ]",
referencedClasses: ["Set"],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "new"]
}),
$globals.SemanticAnalyzer);

$core.addMethod(
$core.method({
selector: "errorShadowingVariable:",
protocol: 'error handling',
fn: function (aString){
var self=this;
function $ShadowingVariableError(){return $globals.ShadowingVariableError||(typeof ShadowingVariableError=="undefined"?nil:ShadowingVariableError)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($ShadowingVariableError())._new();
$recv($1)._variableName_(aString);
$recv($1)._signal();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"errorShadowingVariable:",{aString:aString},$globals.SemanticAnalyzer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "errorShadowingVariable: aString\x0a\x09ShadowingVariableError new\x0a\x09\x09variableName: aString;\x0a\x09\x09signal",
referencedClasses: ["ShadowingVariableError"],
//>>excludeEnd("ide");
messageSends: ["variableName:", "new", "signal"]
}),
$globals.SemanticAnalyzer);

$core.addMethod(
$core.method({
selector: "errorUnknownVariable:",
protocol: 'error handling',
fn: function (aNode){
var self=this;
var identifier;
function $Smalltalk(){return $globals.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
function $UnknownVariableError(){return $globals.UnknownVariableError||(typeof UnknownVariableError=="undefined"?nil:UnknownVariableError)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3;
identifier=$recv(aNode)._value();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["value"]=1;
//>>excludeEnd("ctx");
$1=$recv($recv($recv($recv($Smalltalk())._globalJsVariables())._includes_(identifier))._not())._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._isVariableUndefined_inPackage_(identifier,self._thePackage());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
if($core.assert($1)){
$2=$recv($UnknownVariableError())._new();
$3=$recv(aNode)._value();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["value"]=2;
//>>excludeEnd("ctx");
$recv($2)._variableName_($3);
$recv($2)._signal();
} else {
$recv($recv($recv(self["@currentScope"])._methodScope())._unknownVariables())._add_($recv(aNode)._value());
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"errorUnknownVariable:",{aNode:aNode,identifier:identifier},$globals.SemanticAnalyzer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode"],
source: "errorUnknownVariable: aNode\x0a\x09\x22Throw an error if the variable is undeclared in the global JS scope (i.e. window).\x0a\x09We allow all variables listed by Smalltalk>>#globalJsVariables.\x0a\x09This list includes: `window`, `document`,  `process` and `global`\x0a\x09for nodejs and browser environments.\x0a\x09\x0a\x09This is only to make sure compilation works on both browser-based and nodejs environments.\x0a\x09The ideal solution would be to use a pragma instead\x22\x0a\x0a\x09| identifier |\x0a\x09identifier := aNode value.\x0a\x09\x0a\x09((Smalltalk globalJsVariables includes: identifier) not\x0a\x09\x09and: [ self isVariableUndefined: identifier inPackage: self thePackage ])\x0a\x09\x09\x09ifTrue: [\x0a\x09\x09\x09\x09UnknownVariableError new\x0a\x09\x09\x09\x09\x09variableName: aNode value;\x0a\x09\x09\x09\x09\x09signal ]\x0a\x09\x09\x09ifFalse: [\x0a\x09\x09\x09\x09currentScope methodScope unknownVariables add: aNode value ]",
referencedClasses: ["Smalltalk", "UnknownVariableError"],
//>>excludeEnd("ide");
messageSends: ["value", "ifTrue:ifFalse:", "and:", "not", "includes:", "globalJsVariables", "isVariableUndefined:inPackage:", "thePackage", "variableName:", "new", "signal", "add:", "unknownVariables", "methodScope"]
}),
$globals.SemanticAnalyzer);

$core.addMethod(
$core.method({
selector: "isVariableUndefined:inPackage:",
protocol: 'testing',
fn: function (aString,aPackage){
var self=this;
function $Compiler(){return $globals.Compiler||(typeof Compiler=="undefined"?nil:Compiler)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3,$receiver;
if(($receiver = aPackage) == null || $receiver.isNil){
aPackage;
} else {
var packageKnownVars;
packageKnownVars=$recv($recv($recv(aPackage)._imports())._reject_("isString"))._collect_("key");
packageKnownVars;
$1=$recv(packageKnownVars)._includes_(aString);
if($core.assert($1)){
return false;
};
};
$2=$recv($Compiler())._new();
$3=$recv("typeof ".__comma(aString)).__comma(" == \x22undefined\x22");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
return $recv($2)._eval_($3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isVariableUndefined:inPackage:",{aString:aString,aPackage:aPackage},$globals.SemanticAnalyzer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "aPackage"],
source: "isVariableUndefined: aString inPackage: aPackage\x0a\x09aPackage ifNotNil: [\x0a\x09\x09| packageKnownVars |\x0a\x09\x09packageKnownVars := (aPackage imports\x0a\x09\x09\x09reject: #isString)\x0a\x09\x09\x09collect: #key.\x0a\x09\x09(packageKnownVars includes: aString) ifTrue: [ ^ false ]].\x0a\x09^ Compiler new\x0a\x09\x09eval: 'typeof ', aString, ' == \x22undefined\x22'",
referencedClasses: ["Compiler"],
//>>excludeEnd("ide");
messageSends: ["ifNotNil:", "collect:", "reject:", "imports", "ifTrue:", "includes:", "eval:", "new", ","]
}),
$globals.SemanticAnalyzer);

$core.addMethod(
$core.method({
selector: "messageSends",
protocol: 'accessing',
fn: function (){
var self=this;
function $Dictionary(){return $globals.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$receiver;
$1=self["@messageSends"];
if(($receiver = $1) == null || $receiver.isNil){
self["@messageSends"]=$recv($Dictionary())._new();
return self["@messageSends"];
} else {
return $1;
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"messageSends",{},$globals.SemanticAnalyzer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "messageSends\x0a\x09^ messageSends ifNil: [ messageSends := Dictionary new ]",
referencedClasses: ["Dictionary"],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "new"]
}),
$globals.SemanticAnalyzer);

$core.addMethod(
$core.method({
selector: "newBlockScope",
protocol: 'factory',
fn: function (){
var self=this;
function $LexicalScope(){return $globals.LexicalScope||(typeof LexicalScope=="undefined"?nil:LexicalScope)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return self._newScopeOfClass_($LexicalScope());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"newBlockScope",{},$globals.SemanticAnalyzer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "newBlockScope\x0a\x09^ self newScopeOfClass: LexicalScope",
referencedClasses: ["LexicalScope"],
//>>excludeEnd("ide");
messageSends: ["newScopeOfClass:"]
}),
$globals.SemanticAnalyzer);

$core.addMethod(
$core.method({
selector: "newMethodScope",
protocol: 'factory',
fn: function (){
var self=this;
function $MethodLexicalScope(){return $globals.MethodLexicalScope||(typeof MethodLexicalScope=="undefined"?nil:MethodLexicalScope)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return self._newScopeOfClass_($MethodLexicalScope());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"newMethodScope",{},$globals.SemanticAnalyzer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "newMethodScope\x0a\x09^ self newScopeOfClass: MethodLexicalScope",
referencedClasses: ["MethodLexicalScope"],
//>>excludeEnd("ide");
messageSends: ["newScopeOfClass:"]
}),
$globals.SemanticAnalyzer);

$core.addMethod(
$core.method({
selector: "newScopeOfClass:",
protocol: 'factory',
fn: function (aLexicalScopeClass){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(aLexicalScopeClass)._new();
$recv($1)._outerScope_(self["@currentScope"]);
return $recv($1)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"newScopeOfClass:",{aLexicalScopeClass:aLexicalScopeClass},$globals.SemanticAnalyzer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aLexicalScopeClass"],
source: "newScopeOfClass: aLexicalScopeClass\x0a\x09^ aLexicalScopeClass new\x0a\x09\x09outerScope: currentScope;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["outerScope:", "new", "yourself"]
}),
$globals.SemanticAnalyzer);

$core.addMethod(
$core.method({
selector: "nextBlockIndex",
protocol: 'private',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$receiver;
$1=self["@blockIndex"];
if(($receiver = $1) == null || $receiver.isNil){
self["@blockIndex"]=(0);
self["@blockIndex"];
} else {
$1;
};
self["@blockIndex"]=$recv(self["@blockIndex"]).__plus((1));
return self["@blockIndex"];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"nextBlockIndex",{},$globals.SemanticAnalyzer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "nextBlockIndex\x0a\x09blockIndex ifNil: [ blockIndex := 0 ].\x0a\x09\x0a\x09blockIndex := blockIndex + 1.\x0a\x09^ blockIndex",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "+"]
}),
$globals.SemanticAnalyzer);

$core.addMethod(
$core.method({
selector: "popScope",
protocol: 'scope',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$receiver;
$1=self["@currentScope"];
if(($receiver = $1) == null || $receiver.isNil){
$1;
} else {
self["@currentScope"]=$recv(self["@currentScope"])._outerScope();
self["@currentScope"];
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"popScope",{},$globals.SemanticAnalyzer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "popScope\x0a\x09currentScope ifNotNil: [\x0a\x09\x09currentScope := currentScope outerScope ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNotNil:", "outerScope"]
}),
$globals.SemanticAnalyzer);

$core.addMethod(
$core.method({
selector: "pushScope:",
protocol: 'scope',
fn: function (aScope){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(aScope)._outerScope_(self["@currentScope"]);
self["@currentScope"]=aScope;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"pushScope:",{aScope:aScope},$globals.SemanticAnalyzer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aScope"],
source: "pushScope: aScope\x0a\x09aScope outerScope: currentScope.\x0a\x09currentScope := aScope",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["outerScope:"]
}),
$globals.SemanticAnalyzer);

$core.addMethod(
$core.method({
selector: "theClass",
protocol: 'accessing',
fn: function (){
var self=this;
return self["@theClass"];

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "theClass\x0a\x09^ theClass",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SemanticAnalyzer);

$core.addMethod(
$core.method({
selector: "theClass:",
protocol: 'accessing',
fn: function (aClass){
var self=this;
self["@theClass"]=aClass;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass"],
source: "theClass: aClass\x0a\x09theClass := aClass",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SemanticAnalyzer);

$core.addMethod(
$core.method({
selector: "thePackage",
protocol: 'accessing',
fn: function (){
var self=this;
return self["@thePackage"];

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "thePackage\x0a\x09^ thePackage",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SemanticAnalyzer);

$core.addMethod(
$core.method({
selector: "thePackage:",
protocol: 'accessing',
fn: function (aPackage){
var self=this;
self["@thePackage"]=aPackage;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPackage"],
source: "thePackage: aPackage\x0a\x09thePackage := aPackage",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SemanticAnalyzer);

$core.addMethod(
$core.method({
selector: "validateVariableScope:",
protocol: 'scope',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$receiver;
$1=$recv(self["@currentScope"])._lookupVariable_(aString);
if(($receiver = $1) == null || $receiver.isNil){
$1;
} else {
self._errorShadowingVariable_(aString);
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"validateVariableScope:",{aString:aString},$globals.SemanticAnalyzer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "validateVariableScope: aString\x0a\x09\x22Validate the variable scope in by doing a recursive lookup, up to the method scope\x22\x0a\x0a\x09(currentScope lookupVariable: aString) ifNotNil: [\x0a\x09\x09self errorShadowingVariable: aString ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNotNil:", "lookupVariable:", "errorShadowingVariable:"]
}),
$globals.SemanticAnalyzer);

$core.addMethod(
$core.method({
selector: "visitAssignmentNode:",
protocol: 'visiting',
fn: function (aNode){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true,
//>>excludeEnd("ctx");
($globals.SemanticAnalyzer.superclass||$boot.dnu).fn.prototype._visitAssignmentNode_.apply($recv(self), [aNode]));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$recv($recv(aNode)._left())._beAssigned();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitAssignmentNode:",{aNode:aNode},$globals.SemanticAnalyzer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode"],
source: "visitAssignmentNode: aNode\x0a\x09super visitAssignmentNode: aNode.\x0a\x09aNode left beAssigned",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["visitAssignmentNode:", "beAssigned", "left"]
}),
$globals.SemanticAnalyzer);

$core.addMethod(
$core.method({
selector: "visitBlockNode:",
protocol: 'visiting',
fn: function (aNode){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._pushScope_(self._newBlockScope());
$recv(aNode)._scope_(self["@currentScope"]);
$recv(self["@currentScope"])._node_(aNode);
$recv(self["@currentScope"])._blockIndex_(self._nextBlockIndex());
$recv($recv(aNode)._parameters())._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
self._validateVariableScope_(each);
return $recv(self["@currentScope"])._addArg_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true,
//>>excludeEnd("ctx");
($globals.SemanticAnalyzer.superclass||$boot.dnu).fn.prototype._visitBlockNode_.apply($recv(self), [aNode]));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
self._popScope();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitBlockNode:",{aNode:aNode},$globals.SemanticAnalyzer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode"],
source: "visitBlockNode: aNode\x0a\x09self pushScope: self newBlockScope.\x0a\x09aNode scope: currentScope.\x0a\x09currentScope node: aNode.\x0a\x09currentScope blockIndex: self nextBlockIndex.\x0a\x0a\x09aNode parameters do: [ :each |\x0a\x09\x09self validateVariableScope: each.\x0a\x09\x09currentScope addArg: each ].\x0a\x0a\x09super visitBlockNode: aNode.\x0a\x09self popScope",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["pushScope:", "newBlockScope", "scope:", "node:", "blockIndex:", "nextBlockIndex", "do:", "parameters", "validateVariableScope:", "addArg:", "visitBlockNode:", "popScope"]
}),
$globals.SemanticAnalyzer);

$core.addMethod(
$core.method({
selector: "visitCascadeNode:",
protocol: 'visiting',
fn: function (aNode){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(aNode)._receiver_($recv($recv($recv(aNode)._nodes())._first())._receiver());
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true,
//>>excludeEnd("ctx");
($globals.SemanticAnalyzer.superclass||$boot.dnu).fn.prototype._visitCascadeNode_.apply($recv(self), [aNode]));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitCascadeNode:",{aNode:aNode},$globals.SemanticAnalyzer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode"],
source: "visitCascadeNode: aNode\x0a\x09aNode receiver: aNode nodes first receiver.\x0a\x09super visitCascadeNode: aNode",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["receiver:", "receiver", "first", "nodes", "visitCascadeNode:"]
}),
$globals.SemanticAnalyzer);

$core.addMethod(
$core.method({
selector: "visitMethodNode:",
protocol: 'visiting',
fn: function (aNode){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._pushScope_(self._newMethodScope());
$recv(aNode)._scope_(self["@currentScope"]);
$recv(self["@currentScope"])._node_(aNode);
$recv($recv(self._theClass())._allInstanceVariableNames())._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(self["@currentScope"])._addIVar_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["do:"]=1;
//>>excludeEnd("ctx");
$recv($recv(aNode)._arguments())._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
self._validateVariableScope_(each);
return $recv(self["@currentScope"])._addArg_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,2)});
//>>excludeEnd("ctx");
}));
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true,
//>>excludeEnd("ctx");
($globals.SemanticAnalyzer.superclass||$boot.dnu).fn.prototype._visitMethodNode_.apply($recv(self), [aNode]));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$recv(aNode)._classReferences_(self._classReferences());
$recv(aNode)._sendIndexes_(self._messageSends());
self._popScope();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitMethodNode:",{aNode:aNode},$globals.SemanticAnalyzer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode"],
source: "visitMethodNode: aNode\x0a\x09self pushScope: self newMethodScope.\x0a\x09aNode scope: currentScope.\x0a\x09currentScope node: aNode.\x0a\x0a\x09self theClass allInstanceVariableNames do: [ :each |\x0a\x09\x09currentScope addIVar: each ].\x0a\x09aNode arguments do: [ :each |\x0a\x09\x09self validateVariableScope: each.\x0a\x09\x09currentScope addArg: each ].\x0a\x0a\x09super visitMethodNode: aNode.\x0a\x0a\x09aNode\x0a\x09\x09classReferences: self classReferences;\x0a\x09\x09sendIndexes: self messageSends.\x0a\x09self popScope",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["pushScope:", "newMethodScope", "scope:", "node:", "do:", "allInstanceVariableNames", "theClass", "addIVar:", "arguments", "validateVariableScope:", "addArg:", "visitMethodNode:", "classReferences:", "classReferences", "sendIndexes:", "messageSends", "popScope"]
}),
$globals.SemanticAnalyzer);

$core.addMethod(
$core.method({
selector: "visitReturnNode:",
protocol: 'visiting',
fn: function (aNode){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$recv(aNode)._scope_(self["@currentScope"]);
$1=$recv(self["@currentScope"])._isMethodScope();
if($core.assert($1)){
$recv(self["@currentScope"])._localReturn_(true);
} else {
$recv($recv(self["@currentScope"])._methodScope())._addNonLocalReturn_(self["@currentScope"]);
};
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true,
//>>excludeEnd("ctx");
($globals.SemanticAnalyzer.superclass||$boot.dnu).fn.prototype._visitReturnNode_.apply($recv(self), [aNode]));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitReturnNode:",{aNode:aNode},$globals.SemanticAnalyzer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode"],
source: "visitReturnNode: aNode\x0a\x09aNode scope: currentScope.\x0a\x09currentScope isMethodScope\x0a\x09\x09ifTrue: [ currentScope localReturn: true ]\x0a\x09\x09ifFalse: [ currentScope methodScope addNonLocalReturn: currentScope ].\x0a\x09super visitReturnNode: aNode",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["scope:", "ifTrue:ifFalse:", "isMethodScope", "localReturn:", "addNonLocalReturn:", "methodScope", "visitReturnNode:"]
}),
$globals.SemanticAnalyzer);

$core.addMethod(
$core.method({
selector: "visitSendNode:",
protocol: 'visiting',
fn: function (aNode){
var self=this;
function $IRSendInliner(){return $globals.IRSendInliner||(typeof IRSendInliner=="undefined"?nil:IRSendInliner)}
function $Set(){return $globals.Set||(typeof Set=="undefined"?nil:Set)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $3,$2,$1,$5,$6,$4,$7,$8,$9,$11,$12,$10,$receiver;
$3=$recv(aNode)._receiver();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["receiver"]=1;
//>>excludeEnd("ctx");
$2=$recv($3)._value();
$1=$recv($2).__eq("super");
if(!$core.assert($1)){
$5=$recv($IRSendInliner())._inlinedSelectors();
$6=$recv(aNode)._selector();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["selector"]=1;
//>>excludeEnd("ctx");
$4=$recv($5)._includes_($6);
if($core.assert($4)){
$recv(aNode)._shouldBeInlined_(true);
$7=$recv(aNode)._receiver();
if(($receiver = $7) == null || $receiver.isNil){
$7;
} else {
var receiver;
receiver=$receiver;
$recv(receiver)._shouldBeAliased_(true);
};
};
};
$8=self._messageSends();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["messageSends"]=1;
//>>excludeEnd("ctx");
$9=$recv(aNode)._selector();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["selector"]=2;
//>>excludeEnd("ctx");
$recv($8)._at_ifAbsentPut_($9,(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($Set())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,4)});
//>>excludeEnd("ctx");
}));
$11=self._messageSends();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["messageSends"]=2;
//>>excludeEnd("ctx");
$12=$recv(aNode)._selector();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["selector"]=3;
//>>excludeEnd("ctx");
$10=$recv($11)._at_($12);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:"]=1;
//>>excludeEnd("ctx");
$recv($10)._add_(aNode);
$recv(aNode)._index_($recv($recv(self._messageSends())._at_($recv(aNode)._selector()))._size());
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true,
//>>excludeEnd("ctx");
($globals.SemanticAnalyzer.superclass||$boot.dnu).fn.prototype._visitSendNode_.apply($recv(self), [aNode]));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitSendNode:",{aNode:aNode},$globals.SemanticAnalyzer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode"],
source: "visitSendNode: aNode\x0a\x0a\x09aNode receiver value = 'super'\x0a\x09\x09ifFalse: [ (IRSendInliner inlinedSelectors includes: aNode selector) ifTrue: [\x0a\x09\x09\x09aNode shouldBeInlined: true.\x0a\x09\x09\x09aNode receiver ifNotNil: [ :receiver |\x0a\x09\x09\x09\x09receiver shouldBeAliased: true ] ] ].\x0a\x0a\x09self messageSends at: aNode selector ifAbsentPut: [ Set new ].\x0a\x09(self messageSends at: aNode selector) add: aNode.\x0a\x0a\x09aNode index: (self messageSends at: aNode selector) size.\x0a\x0a\x09super visitSendNode: aNode",
referencedClasses: ["IRSendInliner", "Set"],
//>>excludeEnd("ide");
messageSends: ["ifFalse:", "=", "value", "receiver", "ifTrue:", "includes:", "inlinedSelectors", "selector", "shouldBeInlined:", "ifNotNil:", "shouldBeAliased:", "at:ifAbsentPut:", "messageSends", "new", "add:", "at:", "index:", "size", "visitSendNode:"]
}),
$globals.SemanticAnalyzer);

$core.addMethod(
$core.method({
selector: "visitSequenceNode:",
protocol: 'visiting',
fn: function (aNode){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($recv(aNode)._temps())._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
self._validateVariableScope_(each);
return $recv(self["@currentScope"])._addTemp_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true,
//>>excludeEnd("ctx");
($globals.SemanticAnalyzer.superclass||$boot.dnu).fn.prototype._visitSequenceNode_.apply($recv(self), [aNode]));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitSequenceNode:",{aNode:aNode},$globals.SemanticAnalyzer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode"],
source: "visitSequenceNode: aNode\x0a\x09aNode temps do: [ :each |\x0a\x09\x09self validateVariableScope: each.\x0a\x09\x09currentScope addTemp: each ].\x0a\x0a\x09super visitSequenceNode: aNode",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["do:", "temps", "validateVariableScope:", "addTemp:", "visitSequenceNode:"]
}),
$globals.SemanticAnalyzer);

$core.addMethod(
$core.method({
selector: "visitVariableNode:",
protocol: 'visiting',
fn: function (aNode){
var self=this;
var binding;
function $ClassRefVar(){return $globals.ClassRefVar||(typeof ClassRefVar=="undefined"?nil:ClassRefVar)}
function $UnknownVar(){return $globals.UnknownVar||(typeof UnknownVar=="undefined"?nil:UnknownVar)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$3,$2,$4,$5,$6,$7,$8,$9,$receiver;
binding=$recv(self["@currentScope"])._lookupVariable_(aNode);
$1=binding;
if(($receiver = $1) == null || $receiver.isNil){
$3=$recv(aNode)._value();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["value"]=1;
//>>excludeEnd("ctx");
$2=$recv($3)._isCapitalized();
if($core.assert($2)){
$4=$recv($ClassRefVar())._new();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["new"]=1;
//>>excludeEnd("ctx");
$5=$recv(aNode)._value();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["value"]=2;
//>>excludeEnd("ctx");
$recv($4)._name_($5);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["name:"]=1;
//>>excludeEnd("ctx");
$6=$recv($4)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["yourself"]=1;
//>>excludeEnd("ctx");
binding=$6;
binding;
$7=self._classReferences();
$8=$recv(aNode)._value();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["value"]=3;
//>>excludeEnd("ctx");
$recv($7)._add_($8);
} else {
self._errorUnknownVariable_(aNode);
$9=$recv($UnknownVar())._new();
$recv($9)._name_($recv(aNode)._value());
binding=$recv($9)._yourself();
binding;
};
} else {
$1;
};
$recv(aNode)._binding_(binding);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitVariableNode:",{aNode:aNode,binding:binding},$globals.SemanticAnalyzer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode"],
source: "visitVariableNode: aNode\x0a\x09\x22Bind a ScopeVar to aNode by doing a lookup in the current scope.\x0a\x09If no ScopeVar is found, bind a UnknowVar and throw an error.\x22\x0a\x0a\x09| binding |\x0a\x09binding := currentScope lookupVariable: aNode.\x0a\x09\x0a\x09binding ifNil: [\x0a\x09\x09aNode value isCapitalized\x0a\x09\x09\x09ifTrue: [ \x22Capital letter variables might be globals.\x22\x0a\x09\x09\x09\x09binding := ClassRefVar new name: aNode value; yourself.\x0a\x09\x09\x09\x09self classReferences add: aNode value]\x0a\x09\x09\x09ifFalse: [\x0a\x09\x09\x09\x09self errorUnknownVariable: aNode.\x0a\x09\x09\x09\x09binding := UnknownVar new name: aNode value; yourself ] ].\x0a\x09\x09\x0a\x09aNode binding: binding.",
referencedClasses: ["ClassRefVar", "UnknownVar"],
//>>excludeEnd("ide");
messageSends: ["lookupVariable:", "ifNil:", "ifTrue:ifFalse:", "isCapitalized", "value", "name:", "new", "yourself", "add:", "classReferences", "errorUnknownVariable:", "binding:"]
}),
$globals.SemanticAnalyzer);


$core.addMethod(
$core.method({
selector: "on:",
protocol: 'instance creation',
fn: function (aClass){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._new();
$recv($1)._theClass_(aClass);
return $recv($1)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"on:",{aClass:aClass},$globals.SemanticAnalyzer.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aClass"],
source: "on: aClass\x0a\x09^ self new\x0a\x09\x09theClass: aClass;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["theClass:", "new", "yourself"]
}),
$globals.SemanticAnalyzer.klass);


$core.addClass('SemanticError', $globals.CompilerError, [], 'Compiler-Semantic');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.SemanticError.comment="I represent an abstract semantic error thrown by the SemanticAnalyzer.\x0aSemantic errors can be unknown variable errors, etc.\x0aSee my subclasses for concrete errors.\x0a\x0aThe IDE should catch instances of Semantic error to deal with them when compiling";
//>>excludeEnd("ide");


$core.addClass('InvalidAssignmentError', $globals.SemanticError, ['variableName'], 'Compiler-Semantic');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.InvalidAssignmentError.comment="I get signaled when a pseudo variable gets assigned.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "messageText",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return " Invalid assignment to variable: ".__comma(self._variableName());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"messageText",{},$globals.InvalidAssignmentError)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "messageText\x0a\x09^ ' Invalid assignment to variable: ', self variableName",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: [",", "variableName"]
}),
$globals.InvalidAssignmentError);

$core.addMethod(
$core.method({
selector: "variableName",
protocol: 'accessing',
fn: function (){
var self=this;
return self["@variableName"];

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "variableName\x0a\x09^ variableName",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.InvalidAssignmentError);

$core.addMethod(
$core.method({
selector: "variableName:",
protocol: 'accessing',
fn: function (aString){
var self=this;
self["@variableName"]=aString;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "variableName: aString\x0a\x09variableName := aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.InvalidAssignmentError);



$core.addClass('ShadowingVariableError', $globals.SemanticError, ['variableName'], 'Compiler-Semantic');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.ShadowingVariableError.comment="I get signaled when a variable in a block or method scope shadows a variable of the same name in an outer scope.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "messageText",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv("Variable shadowing error: ".__comma(self._variableName())).__comma(" is already defined");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"messageText",{},$globals.ShadowingVariableError)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "messageText\x0a\x09^ 'Variable shadowing error: ', self variableName, ' is already defined'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: [",", "variableName"]
}),
$globals.ShadowingVariableError);

$core.addMethod(
$core.method({
selector: "variableName",
protocol: 'accessing',
fn: function (){
var self=this;
return self["@variableName"];

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "variableName\x0a\x09^ variableName",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ShadowingVariableError);

$core.addMethod(
$core.method({
selector: "variableName:",
protocol: 'accessing',
fn: function (aString){
var self=this;
self["@variableName"]=aString;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "variableName: aString\x0a\x09variableName := aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ShadowingVariableError);



$core.addClass('UnknownVariableError', $globals.SemanticError, ['variableName'], 'Compiler-Semantic');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.UnknownVariableError.comment="I get signaled when a variable is not defined.\x0aThe default behavior is to allow it, as this is how Amber currently is able to seamlessly send messages to JavaScript objects.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "messageText",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv("Unknown Variable error: ".__comma(self._variableName())).__comma(" is not defined");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"messageText",{},$globals.UnknownVariableError)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "messageText\x0a\x09^ 'Unknown Variable error: ', self variableName, ' is not defined'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: [",", "variableName"]
}),
$globals.UnknownVariableError);

$core.addMethod(
$core.method({
selector: "variableName",
protocol: 'accessing',
fn: function (){
var self=this;
return self["@variableName"];

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "variableName\x0a\x09^ variableName",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.UnknownVariableError);

$core.addMethod(
$core.method({
selector: "variableName:",
protocol: 'accessing',
fn: function (aString){
var self=this;
self["@variableName"]=aString;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "variableName: aString\x0a\x09variableName := aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.UnknownVariableError);


});
