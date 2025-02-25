define("amber_core/Compiler-Interpreter", ["amber/boot", "amber_core/Kernel-Methods", "amber_core/Compiler-Semantic", "amber_core/Kernel-Objects", "amber_core/Compiler-AST", "amber_core/Kernel-Exceptions"], function($boot){"use strict";
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
$core.addPackage('Compiler-Interpreter');
$core.packages["Compiler-Interpreter"].innerEval = function (expr) { return eval(expr); };
$core.packages["Compiler-Interpreter"].transport = {"type":"amd","amdNamespace":"amber_core"};

$core.addClass('AIBlockClosure', $globals.BlockClosure, ['node', 'outerContext'], 'Compiler-Interpreter');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.AIBlockClosure.comment="I am a special `BlockClosure` subclass used by an interpreter to interpret a block node.\x0a\x0aWhile I am polymorphic with `BlockClosure`, some methods such as `#new` will raise interpretation errors. Unlike a `BlockClosure`, my instance are not JavaScript functions.\x0a\x0aEvaluating an instance will result in interpreting the `node` instance variable (instance of `BlockNode`).";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "applyTo:arguments:",
protocol: 'evaluating',
fn: function (anObject,aCollection){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._interpreterError();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"applyTo:arguments:",{anObject:anObject,aCollection:aCollection},$globals.AIBlockClosure)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject", "aCollection"],
source: "applyTo: anObject arguments: aCollection\x0a\x09self interpreterError",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["interpreterError"]
}),
$globals.AIBlockClosure);

$core.addMethod(
$core.method({
selector: "compiledSource",
protocol: 'accessing',
fn: function (){
var self=this;
return "[ AST Block closure ]";

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "compiledSource\x0a\x09\x22Unlike blocks, the receiver doesn't represent a JS function\x22\x0a\x09\x0a\x09^ '[ AST Block closure ]'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AIBlockClosure);

$core.addMethod(
$core.method({
selector: "currySelf",
protocol: 'converting',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._interpreterError();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"currySelf",{},$globals.AIBlockClosure)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "currySelf\x0a\x09self interpreterError",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["interpreterError"]
}),
$globals.AIBlockClosure);

$core.addMethod(
$core.method({
selector: "initializeWithContext:node:",
protocol: 'initialization',
fn: function (aContext,aNode){
var self=this;
self["@node"]=aNode;
self["@outerContext"]=aContext;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aContext", "aNode"],
source: "initializeWithContext: aContext node: aNode\x0a\x09node := aNode.\x0a\x09outerContext := aContext",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AIBlockClosure);

$core.addMethod(
$core.method({
selector: "interpreterError",
protocol: 'error handling',
fn: function (){
var self=this;
function $ASTInterpreterError(){return $globals.ASTInterpreterError||(typeof ASTInterpreterError=="undefined"?nil:ASTInterpreterError)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($ASTInterpreterError())._signal_("Method cannot be interpreted by the interpreter.");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"interpreterError",{},$globals.AIBlockClosure)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "interpreterError\x0a\x09ASTInterpreterError signal: 'Method cannot be interpreted by the interpreter.'",
referencedClasses: ["ASTInterpreterError"],
//>>excludeEnd("ide");
messageSends: ["signal:"]
}),
$globals.AIBlockClosure);

$core.addMethod(
$core.method({
selector: "numArgs",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($recv(self["@node"])._temps())._size();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"numArgs",{},$globals.AIBlockClosure)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "numArgs\x0a\x09^ node temps size",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["size", "temps"]
}),
$globals.AIBlockClosure);

$core.addMethod(
$core.method({
selector: "value",
protocol: 'evaluating',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return self._valueWithPossibleArguments_([]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"value",{},$globals.AIBlockClosure)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "value\x0a\x09^ self valueWithPossibleArguments: #()",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["valueWithPossibleArguments:"]
}),
$globals.AIBlockClosure);

$core.addMethod(
$core.method({
selector: "value:",
protocol: 'evaluating',
fn: function (anArgument){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return self._valueWithPossibleArguments_([anArgument]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"value:",{anArgument:anArgument},$globals.AIBlockClosure)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anArgument"],
source: "value: anArgument\x0a\x09^ self valueWithPossibleArguments: {anArgument}",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["valueWithPossibleArguments:"]
}),
$globals.AIBlockClosure);

$core.addMethod(
$core.method({
selector: "value:value:",
protocol: 'evaluating',
fn: function (firstArgument,secondArgument){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return self._valueWithPossibleArguments_([firstArgument,secondArgument]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"value:value:",{firstArgument:firstArgument,secondArgument:secondArgument},$globals.AIBlockClosure)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["firstArgument", "secondArgument"],
source: "value: firstArgument value: secondArgument\x0a\x09^ self valueWithPossibleArguments: {firstArgument . secondArgument}",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["valueWithPossibleArguments:"]
}),
$globals.AIBlockClosure);

$core.addMethod(
$core.method({
selector: "value:value:value:",
protocol: 'evaluating',
fn: function (firstArgument,secondArgument,thirdArgument){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return self._valueWithPossibleArguments_([firstArgument,secondArgument,thirdArgument]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"value:value:value:",{firstArgument:firstArgument,secondArgument:secondArgument,thirdArgument:thirdArgument},$globals.AIBlockClosure)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["firstArgument", "secondArgument", "thirdArgument"],
source: "value: firstArgument value: secondArgument value: thirdArgument\x0a\x09^ self valueWithPossibleArguments: {firstArgument . secondArgument . thirdArgument}",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["valueWithPossibleArguments:"]
}),
$globals.AIBlockClosure);

$core.addMethod(
$core.method({
selector: "valueWithPossibleArguments:",
protocol: 'evaluating',
fn: function (aCollection){
var self=this;
var context,sequenceNode;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3;
context=$recv(self["@outerContext"])._newInnerContext();
$1=$recv($recv($recv(self["@node"])._nodes())._first())._copy();
$recv($1)._parent_(nil);
sequenceNode=$recv($1)._yourself();
$recv($recv(sequenceNode)._temps())._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(context)._defineLocal_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["defineLocal:"]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$recv($recv(self["@node"])._parameters())._withIndexDo_((function(each,index){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv(context)._defineLocal_(each);
return $recv(context)._localAt_put_(each,$recv(aCollection)._at_ifAbsent_(index,(function(){
return nil;

})));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each,index:index},$ctx1,2)});
//>>excludeEnd("ctx");
}));
$2=$recv(context)._interpreter();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["interpreter"]=1;
//>>excludeEnd("ctx");
$recv($2)._node_(sequenceNode);
$recv($2)._enterNode();
$recv($2)._proceed();
$3=$recv(self["@outerContext"])._interpreter();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["interpreter"]=2;
//>>excludeEnd("ctx");
$recv($3)._setNonLocalReturnFromContext_(context);
return $recv($recv(context)._interpreter())._pop();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"valueWithPossibleArguments:",{aCollection:aCollection,context:context,sequenceNode:sequenceNode},$globals.AIBlockClosure)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCollection"],
source: "valueWithPossibleArguments: aCollection\x0a\x09| context sequenceNode |\x0a\x09context := outerContext newInnerContext.\x0a\x0a\x09\x22Interpret a copy of the sequence node to avoid creating a new AIBlockClosure\x22\x0a\x09sequenceNode := node nodes first copy\x0a\x09\x09parent: nil;\x0a\x09\x09yourself.\x0a\x09\x09\x0a\x09\x22Define locals in the context\x22\x0a\x09sequenceNode temps do: [ :each |\x0a\x09\x09context defineLocal: each ].\x0a\x09\x09\x0a\x09\x22Populate the arguments into the context locals\x22\x09\x0a\x09node parameters withIndexDo: [ :each :index |\x0a\x09\x09context defineLocal: each.\x0a\x09\x09context localAt: each put: (aCollection at: index ifAbsent: [ nil ]) ].\x0a\x0a\x09\x22Interpret the first node of the BlockSequenceNode\x22\x0a\x09context interpreter\x0a\x09\x09node: sequenceNode;\x0a\x09\x09enterNode;\x0a\x09\x09proceed.\x0a\x09\x09\x0a\x09outerContext interpreter\x0a\x09\x09setNonLocalReturnFromContext: context.\x0a\x09\x09\x0a\x09^ context interpreter pop",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["newInnerContext", "parent:", "copy", "first", "nodes", "yourself", "do:", "temps", "defineLocal:", "withIndexDo:", "parameters", "localAt:put:", "at:ifAbsent:", "node:", "interpreter", "enterNode", "proceed", "setNonLocalReturnFromContext:", "pop"]
}),
$globals.AIBlockClosure);


$core.addMethod(
$core.method({
selector: "forContext:node:",
protocol: 'instance creation',
fn: function (aContext,aNode){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._new();
$recv($1)._initializeWithContext_node_(aContext,aNode);
return $recv($1)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"forContext:node:",{aContext:aContext,aNode:aNode},$globals.AIBlockClosure.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aContext", "aNode"],
source: "forContext: aContext node: aNode\x0a\x09^ self new\x0a\x09\x09initializeWithContext: aContext node: aNode;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initializeWithContext:node:", "new", "yourself"]
}),
$globals.AIBlockClosure.klass);


$core.addClass('AIContext', $globals.MethodContext, ['outerContext', 'innerContext', 'pc', 'locals', 'selector', 'index', 'sendIndexes', 'evaluatedSelector', 'ast', 'interpreter', 'supercall'], 'Compiler-Interpreter');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.AIContext.comment="I am like a `MethodContext`, used by the `ASTInterpreter`.\x0aUnlike a `MethodContext`, my instances are not read-only.\x0a\x0aWhen debugging, my instances are created by copying the current `MethodContext` (thisContext)";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "arguments",
protocol: 'interpreting',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv($recv(self._ast())._arguments())._collect_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._localAt_ifAbsent_(each,(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return self._error_("Argument not in context");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"arguments",{},$globals.AIContext)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "arguments\x0a\x09^ self ast arguments collect: [ :each |\x0a\x09\x09self localAt: each ifAbsent: [ self error: 'Argument not in context' ] ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["collect:", "arguments", "ast", "localAt:ifAbsent:", "error:"]
}),
$globals.AIContext);

$core.addMethod(
$core.method({
selector: "ast",
protocol: 'interpreting',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3,$receiver;
$1=self._isBlockContext();
if($core.assert($1)){
$2=self._outerContext();
return $recv($2)._ifNotNil_((function(context){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(context)._ast();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({context:context},$ctx1,2)});
//>>excludeEnd("ctx");
}));
};
$3=self["@ast"];
if(($receiver = $3) == null || $receiver.isNil){
self._initializeAST();
} else {
$3;
};
return self["@ast"];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"ast",{},$globals.AIContext)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "ast\x0a\x09self isBlockContext ifTrue: [ \x0a\x09\x09^ self outerContext ifNotNil: [ :context | context ast ] ].\x0a\x0a\x09ast ifNil: [ self initializeAST ].\x0a\x09^ ast",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:", "isBlockContext", "ifNotNil:", "outerContext", "ast", "ifNil:", "initializeAST"]
}),
$globals.AIContext);

$core.addMethod(
$core.method({
selector: "basicLocalAt:",
protocol: 'private',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv(self._locals())._at_(aString);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"basicLocalAt:",{aString:aString},$globals.AIContext)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "basicLocalAt: aString\x0a\x09^ self locals at: aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:", "locals"]
}),
$globals.AIContext);

$core.addMethod(
$core.method({
selector: "basicLocalAt:put:",
protocol: 'private',
fn: function (aString,anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._locals())._at_put_(aString,anObject);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"basicLocalAt:put:",{aString:aString,anObject:anObject},$globals.AIContext)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "anObject"],
source: "basicLocalAt: aString put: anObject\x0a\x09self locals at: aString put: anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:", "locals"]
}),
$globals.AIContext);

$core.addMethod(
$core.method({
selector: "basicReceiver",
protocol: 'interpreting',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return self._localAt_("self");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"basicReceiver",{},$globals.AIContext)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "basicReceiver\x0a\x09^ self localAt: 'self'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["localAt:"]
}),
$globals.AIContext);

$core.addMethod(
$core.method({
selector: "defineLocal:",
protocol: 'accessing',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._locals())._at_put_(aString,nil);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"defineLocal:",{aString:aString},$globals.AIContext)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "defineLocal: aString\x0a\x09self locals at: aString put: nil",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:", "locals"]
}),
$globals.AIContext);

$core.addMethod(
$core.method({
selector: "evaluate:on:",
protocol: 'evaluating',
fn: function (aString,anEvaluator){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv(anEvaluator)._evaluate_context_(aString,self);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"evaluate:on:",{aString:aString,anEvaluator:anEvaluator},$globals.AIContext)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "anEvaluator"],
source: "evaluate: aString on: anEvaluator\x0a\x09^ anEvaluator evaluate: aString context: self",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["evaluate:context:"]
}),
$globals.AIContext);

$core.addMethod(
$core.method({
selector: "evaluateNode:",
protocol: 'evaluating',
fn: function (aNode){
var self=this;
function $ASTInterpreter(){return $globals.ASTInterpreter||(typeof ASTInterpreter=="undefined"?nil:ASTInterpreter)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($ASTInterpreter())._new();
$recv($1)._context_(self);
$recv($1)._node_(aNode);
$recv($1)._enterNode();
$recv($1)._proceed();
return $recv($1)._result();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"evaluateNode:",{aNode:aNode},$globals.AIContext)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode"],
source: "evaluateNode: aNode\x0a\x09^ ASTInterpreter new\x0a\x09\x09context: self;\x0a\x09\x09node: aNode;\x0a\x09\x09enterNode;\x0a\x09\x09proceed;\x0a\x09\x09result",
referencedClasses: ["ASTInterpreter"],
//>>excludeEnd("ide");
messageSends: ["context:", "new", "node:", "enterNode", "proceed", "result"]
}),
$globals.AIContext);

$core.addMethod(
$core.method({
selector: "evaluatedSelector",
protocol: 'accessing',
fn: function (){
var self=this;
return self["@evaluatedSelector"];

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "evaluatedSelector\x0a\x09^ evaluatedSelector",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AIContext);

$core.addMethod(
$core.method({
selector: "evaluatedSelector:",
protocol: 'accessing',
fn: function (aString){
var self=this;
self["@evaluatedSelector"]=aString;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "evaluatedSelector: aString\x0a\x09evaluatedSelector := aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AIContext);

$core.addMethod(
$core.method({
selector: "index",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$receiver;
$1=self["@index"];
if(($receiver = $1) == null || $receiver.isNil){
return (0);
} else {
return $1;
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"index",{},$globals.AIContext)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "index\x0a\x09^ index ifNil: [ 0 ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:"]
}),
$globals.AIContext);

$core.addMethod(
$core.method({
selector: "index:",
protocol: 'accessing',
fn: function (anInteger){
var self=this;
self["@index"]=anInteger;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anInteger"],
source: "index: anInteger\x0a\x09index := anInteger",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AIContext);

$core.addMethod(
$core.method({
selector: "initializeAST",
protocol: 'initialization',
fn: function (){
var self=this;
function $SemanticAnalyzer(){return $globals.SemanticAnalyzer||(typeof SemanticAnalyzer=="undefined"?nil:SemanticAnalyzer)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._method();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["method"]=1;
//>>excludeEnd("ctx");
self["@ast"]=$recv($1)._ast();
$recv($recv($SemanticAnalyzer())._on_($recv(self._method())._methodClass()))._visit_(self["@ast"]);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initializeAST",{},$globals.AIContext)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initializeAST\x0a\x09ast := self method ast.\x0a\x09(SemanticAnalyzer on: self method methodClass)\x0a\x09\x09visit: ast",
referencedClasses: ["SemanticAnalyzer"],
//>>excludeEnd("ide");
messageSends: ["ast", "method", "visit:", "on:", "methodClass"]
}),
$globals.AIContext);

$core.addMethod(
$core.method({
selector: "initializeFromMethodContext:",
protocol: 'initialization',
fn: function (aMethodContext){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3,$receiver;
self._evaluatedSelector_($recv(aMethodContext)._evaluatedSelector());
self._index_($recv(aMethodContext)._index());
self._sendIndexes_($recv(aMethodContext)._sendIndexes());
self._receiver_($recv(aMethodContext)._receiver());
self._supercall_($recv(aMethodContext)._supercall());
self._selector_($recv(aMethodContext)._selector());
$1=$recv(aMethodContext)._outerContext();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["outerContext"]=1;
//>>excludeEnd("ctx");
if(($receiver = $1) == null || $receiver.isNil){
$1;
} else {
var outer;
outer=$receiver;
$2=$recv(outer)._methodContext();
if(($receiver = $2) == null || $receiver.isNil){
$2;
} else {
self._outerContext_($recv(self._class())._fromMethodContext_($recv(aMethodContext)._outerContext()));
};
$3=$recv(aMethodContext)._locals();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["locals"]=1;
//>>excludeEnd("ctx");
$recv($3)._keysAndValuesDo_((function(key,value){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(self._locals())._at_put_(key,value);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({key:key,value:value},$ctx1,3)});
//>>excludeEnd("ctx");
}));
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initializeFromMethodContext:",{aMethodContext:aMethodContext},$globals.AIContext)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aMethodContext"],
source: "initializeFromMethodContext: aMethodContext\x0a\x0a\x09self\x0a\x09\x09evaluatedSelector: aMethodContext evaluatedSelector;\x0a\x09\x09index: aMethodContext index;\x0a\x09\x09sendIndexes: aMethodContext sendIndexes;\x0a\x09\x09receiver: aMethodContext receiver;\x0a\x09\x09supercall: aMethodContext supercall;\x0a\x09\x09selector: aMethodContext selector.\x0a\x09\x09\x0a\x09aMethodContext outerContext ifNotNil: [ :outer |\x0a\x09\x09\x22If the method context is nil, the block was defined in JS, so ignore it\x22\x0a\x09\x09outer methodContext ifNotNil: [\x0a\x09\x09\x09self outerContext: (self class fromMethodContext: aMethodContext outerContext) ].\x0a\x09\x09\x09aMethodContext locals keysAndValuesDo: [ :key :value |\x0a\x09\x09\x09\x09self locals at: key put: value ] ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["evaluatedSelector:", "evaluatedSelector", "index:", "index", "sendIndexes:", "sendIndexes", "receiver:", "receiver", "supercall:", "supercall", "selector:", "selector", "ifNotNil:", "outerContext", "methodContext", "outerContext:", "fromMethodContext:", "class", "keysAndValuesDo:", "locals", "at:put:"]
}),
$globals.AIContext);

$core.addMethod(
$core.method({
selector: "initializeInterpreter",
protocol: 'initialization',
fn: function (){
var self=this;
function $ASTInterpreter(){return $globals.ASTInterpreter||(typeof ASTInterpreter=="undefined"?nil:ASTInterpreter)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$receiver;
$1=$recv($ASTInterpreter())._new();
$recv($1)._context_(self);
self["@interpreter"]=$recv($1)._yourself();
$2=self._innerContext();
if(($receiver = $2) == null || $receiver.isNil){
$2;
} else {
self._setupInterpreter_(self["@interpreter"]);
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initializeInterpreter",{},$globals.AIContext)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initializeInterpreter\x0a\x09interpreter := ASTInterpreter new\x0a\x09\x09context: self;\x0a\x09\x09yourself.\x0a\x09\x0a\x09self innerContext ifNotNil: [\x0a\x09\x09self setupInterpreter: interpreter ]",
referencedClasses: ["ASTInterpreter"],
//>>excludeEnd("ide");
messageSends: ["context:", "new", "yourself", "ifNotNil:", "innerContext", "setupInterpreter:"]
}),
$globals.AIContext);

$core.addMethod(
$core.method({
selector: "initializeLocals",
protocol: 'initialization',
fn: function (){
var self=this;
function $Dictionary(){return $globals.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self["@locals"]=$recv($Dictionary())._new();
$recv(self["@locals"])._at_put_("thisContext",self);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initializeLocals",{},$globals.AIContext)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initializeLocals\x0a\x09locals := Dictionary new.\x0a\x09locals at: 'thisContext' put: self.",
referencedClasses: ["Dictionary"],
//>>excludeEnd("ide");
messageSends: ["new", "at:put:"]
}),
$globals.AIContext);

$core.addMethod(
$core.method({
selector: "innerContext",
protocol: 'accessing',
fn: function (){
var self=this;
return self["@innerContext"];

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "innerContext\x0a\x09^ innerContext",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AIContext);

$core.addMethod(
$core.method({
selector: "innerContext:",
protocol: 'accessing',
fn: function (anAIContext){
var self=this;
self["@innerContext"]=anAIContext;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anAIContext"],
source: "innerContext: anAIContext\x0a\x09innerContext := anAIContext",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AIContext);

$core.addMethod(
$core.method({
selector: "interpreter",
protocol: 'interpreting',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$receiver;
$1=self["@interpreter"];
if(($receiver = $1) == null || $receiver.isNil){
self._initializeInterpreter();
} else {
$1;
};
return self["@interpreter"];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"interpreter",{},$globals.AIContext)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "interpreter\x0a\x09interpreter ifNil: [ self initializeInterpreter ].\x0a\x09^ interpreter",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "initializeInterpreter"]
}),
$globals.AIContext);

$core.addMethod(
$core.method({
selector: "interpreter:",
protocol: 'interpreting',
fn: function (anInterpreter){
var self=this;
self["@interpreter"]=anInterpreter;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anInterpreter"],
source: "interpreter: anInterpreter\x0a\x09interpreter := anInterpreter",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AIContext);

$core.addMethod(
$core.method({
selector: "isTopContext",
protocol: 'testing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv(self._innerContext())._isNil();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isTopContext",{},$globals.AIContext)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isTopContext\x0a\x09^ self innerContext isNil",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["isNil", "innerContext"]
}),
$globals.AIContext);

$core.addMethod(
$core.method({
selector: "localAt:",
protocol: 'accessing',
fn: function (aString){
var self=this;
var context;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
context=self._lookupContextForLocal_(aString);
return $recv(context)._basicLocalAt_(aString);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"localAt:",{aString:aString,context:context},$globals.AIContext)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "localAt: aString\x0a\x09\x22Lookup the local value up to the method context\x22\x0a\x0a\x09| context |\x0a\x09\x0a\x09context := self lookupContextForLocal: aString.\x0a\x09^ context basicLocalAt: aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["lookupContextForLocal:", "basicLocalAt:"]
}),
$globals.AIContext);

$core.addMethod(
$core.method({
selector: "localAt:ifAbsent:",
protocol: 'accessing',
fn: function (aString,aBlock){
var self=this;
var context;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $early={};
try {
context=self._lookupContextForLocal_ifNone_(aString,(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
throw $early=[$recv(aBlock)._value()];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return $recv(context)._basicLocalAt_(aString);
}
catch(e) {if(e===$early)return e[0]; throw e}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"localAt:ifAbsent:",{aString:aString,aBlock:aBlock,context:context},$globals.AIContext)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "aBlock"],
source: "localAt: aString ifAbsent: aBlock\x0a\x09\x22Lookup the local value up to the method context\x22\x0a\x0a\x09| context |\x0a\x09\x0a\x09context := self \x09\x0a\x09\x09lookupContextForLocal: aString \x0a\x09\x09ifNone: [ ^ aBlock value ].\x0a\x09\x0a\x09^ context basicLocalAt: aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["lookupContextForLocal:ifNone:", "value", "basicLocalAt:"]
}),
$globals.AIContext);

$core.addMethod(
$core.method({
selector: "localAt:put:",
protocol: 'accessing',
fn: function (aString,anObject){
var self=this;
var context;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
context=self._lookupContextForLocal_(aString);
$recv(context)._basicLocalAt_put_(aString,anObject);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"localAt:put:",{aString:aString,anObject:anObject,context:context},$globals.AIContext)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "anObject"],
source: "localAt: aString put: anObject\x0a\x09| context |\x0a\x09\x0a\x09context := self lookupContextForLocal: aString.\x0a\x09context basicLocalAt: aString put: anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["lookupContextForLocal:", "basicLocalAt:put:"]
}),
$globals.AIContext);

$core.addMethod(
$core.method({
selector: "locals",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$receiver;
$1=self["@locals"];
if(($receiver = $1) == null || $receiver.isNil){
self._initializeLocals();
} else {
$1;
};
return self["@locals"];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"locals",{},$globals.AIContext)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "locals\x0a\x09locals ifNil: [ self initializeLocals ].\x0a\x09\x0a\x09^ locals",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "initializeLocals"]
}),
$globals.AIContext);

$core.addMethod(
$core.method({
selector: "lookupContextForLocal:",
protocol: 'private',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return self._lookupContextForLocal_ifNone_(aString,(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._variableNotFound();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"lookupContextForLocal:",{aString:aString},$globals.AIContext)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "lookupContextForLocal: aString\x0a\x09\x22Lookup the context defining the local named `aString` \x0a\x09up to the method context\x22\x0a\x0a\x09^ self \x0a\x09\x09lookupContextForLocal: aString \x0a\x09\x09ifNone: [ self variableNotFound ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["lookupContextForLocal:ifNone:", "variableNotFound"]
}),
$globals.AIContext);

$core.addMethod(
$core.method({
selector: "lookupContextForLocal:ifNone:",
protocol: 'private',
fn: function (aString,aBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
return $recv(self._locals())._at_ifPresent_ifAbsent_(aString,(function(){
return self;

}),(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=self._outerContext();
return $recv($1)._ifNil_ifNotNil_(aBlock,(function(context){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv(context)._lookupContextForLocal_(aString);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({context:context},$ctx2,3)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"lookupContextForLocal:ifNone:",{aString:aString,aBlock:aBlock},$globals.AIContext)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString", "aBlock"],
source: "lookupContextForLocal: aString ifNone: aBlock\x0a\x09\x22Lookup the context defining the local named `aString` \x0a\x09up to the method context\x22\x0a\x0a\x09^ self locals \x0a\x09\x09at: aString\x0a\x09\x09ifPresent: [ self ]\x0a\x09\x09ifAbsent: [ \x0a\x09\x09\x09self outerContext \x0a\x09\x09\x09\x09ifNil: aBlock\x0a\x09\x09\x09\x09ifNotNil: [ :context | \x0a\x09\x09\x09\x09\x09context lookupContextForLocal: aString ] ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:ifPresent:ifAbsent:", "locals", "ifNil:ifNotNil:", "outerContext", "lookupContextForLocal:"]
}),
$globals.AIContext);

$core.addMethod(
$core.method({
selector: "newInnerContext",
protocol: 'factory',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._class())._new();
$recv($1)._outerContext_(self);
return $recv($1)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"newInnerContext",{},$globals.AIContext)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "newInnerContext\x0a\x09^ self class new\x0a\x09\x09outerContext: self;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["outerContext:", "new", "class", "yourself"]
}),
$globals.AIContext);

$core.addMethod(
$core.method({
selector: "outerContext",
protocol: 'accessing',
fn: function (){
var self=this;
return self["@outerContext"];

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "outerContext\x0a\x09^ outerContext",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AIContext);

$core.addMethod(
$core.method({
selector: "outerContext:",
protocol: 'accessing',
fn: function (anAIContext){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$receiver;
self["@outerContext"]=anAIContext;
$1=self["@outerContext"];
if(($receiver = $1) == null || $receiver.isNil){
$1;
} else {
var context;
context=$receiver;
$recv(context)._innerContext_(self);
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"outerContext:",{anAIContext:anAIContext},$globals.AIContext)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anAIContext"],
source: "outerContext: anAIContext\x0a\x09outerContext := anAIContext.\x0a\x09outerContext ifNotNil: [ :context | \x0a\x09\x09context innerContext: self ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNotNil:", "innerContext:"]
}),
$globals.AIContext);

$core.addMethod(
$core.method({
selector: "receiver:",
protocol: 'interpreting',
fn: function (anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._locals())._at_put_("self",anObject);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"receiver:",{anObject:anObject},$globals.AIContext)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "receiver: anObject\x0a\x09self locals at: 'self' put: anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:", "locals"]
}),
$globals.AIContext);

$core.addMethod(
$core.method({
selector: "selector",
protocol: 'accessing',
fn: function (){
var self=this;
return self["@selector"];

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "selector\x0a\x09^ selector",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AIContext);

$core.addMethod(
$core.method({
selector: "selector:",
protocol: 'accessing',
fn: function (aString){
var self=this;
self["@selector"]=aString;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "selector: aString\x0a\x09selector := aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AIContext);

$core.addMethod(
$core.method({
selector: "sendIndexAt:",
protocol: 'accessing',
fn: function (aString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv(self._sendIndexes())._at_ifAbsent_(aString,(function(){
return (0);

}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"sendIndexAt:",{aString:aString},$globals.AIContext)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "sendIndexAt: aString\x0a\x09^ self sendIndexes at: aString ifAbsent: [ 0 ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:ifAbsent:", "sendIndexes"]
}),
$globals.AIContext);

$core.addMethod(
$core.method({
selector: "sendIndexes",
protocol: 'accessing',
fn: function (){
var self=this;
function $Dictionary(){return $globals.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$receiver;
$1=self["@sendIndexes"];
if(($receiver = $1) == null || $receiver.isNil){
return $recv($Dictionary())._new();
} else {
return $1;
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"sendIndexes",{},$globals.AIContext)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "sendIndexes\x0a\x09^ sendIndexes ifNil: [ Dictionary new ]",
referencedClasses: ["Dictionary"],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "new"]
}),
$globals.AIContext);

$core.addMethod(
$core.method({
selector: "sendIndexes:",
protocol: 'accessing',
fn: function (aDictionary){
var self=this;
self["@sendIndexes"]=aDictionary;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aDictionary"],
source: "sendIndexes: aDictionary\x0a\x09sendIndexes := aDictionary",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AIContext);

$core.addMethod(
$core.method({
selector: "setupInterpreter:",
protocol: 'interpreting',
fn: function (anInterpreter){
var self=this;
var currentNode;
function $ASTPCNodeVisitor(){return $globals.ASTPCNodeVisitor||(typeof ASTPCNodeVisitor=="undefined"?nil:ASTPCNodeVisitor)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3,$6,$5,$4,$receiver;
$1=$recv($ASTPCNodeVisitor())._new();
$recv($1)._selector_(self._evaluatedSelector());
$recv($1)._context_(self);
$2=self._ast();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["ast"]=1;
//>>excludeEnd("ctx");
$recv($1)._visit_($2);
currentNode=$recv($1)._currentNode();
$3=$recv(self._ast())._sequenceNode();
if(($receiver = $3) == null || $receiver.isNil){
$3;
} else {
var sequence;
sequence=$receiver;
$recv($recv(sequence)._temps())._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._defineLocal_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["do:"]=1;
//>>excludeEnd("ctx");
};
$recv(anInterpreter)._node_(currentNode);
$6=self._innerContext();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["innerContext"]=1;
//>>excludeEnd("ctx");
$5=$recv($6)._arguments();
$4=$recv($5)._reversed();
$recv($4)._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(anInterpreter)._push_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["push:"]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,3)});
//>>excludeEnd("ctx");
}));
$recv(anInterpreter)._push_($recv(self._innerContext())._receiver());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setupInterpreter:",{anInterpreter:anInterpreter,currentNode:currentNode},$globals.AIContext)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anInterpreter"],
source: "setupInterpreter: anInterpreter\x0a\x09| currentNode |\x0a\x09\x0a\x09\x22Retrieve the current node\x22\x0a\x09currentNode := ASTPCNodeVisitor new\x0a\x09\x09\x09selector: self evaluatedSelector;\x0a\x09\x09\x09context: self;\x0a\x09\x09\x09visit: self ast;\x0a\x09\x09\x09currentNode.\x0a\x09\x0a\x09\x22Define locals for the context\x22\x0a\x09self ast sequenceNode ifNotNil: [ :sequence |\x0a\x09\x09sequence temps do: [ :each |\x0a\x09\x09\x09self defineLocal: each ] ].\x0a\x09\x0a\x09anInterpreter node: currentNode.\x0a\x0a\x09\x22Push the send args and receiver to the interpreter stack\x22\x09\x0a\x09self innerContext arguments reversed do: [ :each | \x0a\x09\x09anInterpreter push: each ].\x0a\x09\x09\x0a\x09anInterpreter push: (self innerContext receiver)",
referencedClasses: ["ASTPCNodeVisitor"],
//>>excludeEnd("ide");
messageSends: ["selector:", "new", "evaluatedSelector", "context:", "visit:", "ast", "currentNode", "ifNotNil:", "sequenceNode", "do:", "temps", "defineLocal:", "node:", "reversed", "arguments", "innerContext", "push:", "receiver"]
}),
$globals.AIContext);

$core.addMethod(
$core.method({
selector: "supercall",
protocol: 'interpreting',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$receiver;
$1=self["@supercall"];
if(($receiver = $1) == null || $receiver.isNil){
return false;
} else {
return $1;
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"supercall",{},$globals.AIContext)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "supercall\x0a\x09^ supercall ifNil: [ false ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:"]
}),
$globals.AIContext);

$core.addMethod(
$core.method({
selector: "supercall:",
protocol: 'interpreting',
fn: function (aBoolean){
var self=this;
self["@supercall"]=aBoolean;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBoolean"],
source: "supercall: aBoolean\x0a\x09supercall := aBoolean",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AIContext);

$core.addMethod(
$core.method({
selector: "variableNotFound",
protocol: 'error handling',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._error_("Variable missing");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"variableNotFound",{},$globals.AIContext)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "variableNotFound\x0a\x09\x22Error thrown whenever a variable lookup fails\x22\x0a\x09\x0a\x09self error: 'Variable missing'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["error:"]
}),
$globals.AIContext);


$core.addMethod(
$core.method({
selector: "fromMethodContext:",
protocol: 'instance creation',
fn: function (aMethodContext){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._new();
$recv($1)._initializeFromMethodContext_(aMethodContext);
return $recv($1)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"fromMethodContext:",{aMethodContext:aMethodContext},$globals.AIContext.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aMethodContext"],
source: "fromMethodContext: aMethodContext\x0a\x09^ self new\x0a\x09\x09initializeFromMethodContext: aMethodContext;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initializeFromMethodContext:", "new", "yourself"]
}),
$globals.AIContext.klass);


$core.addClass('AISemanticAnalyzer', $globals.SemanticAnalyzer, ['context'], 'Compiler-Interpreter');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.AISemanticAnalyzer.comment="I perform the same semantic analysis than `SemanticAnalyzer`, with the difference that provided an `AIContext` context, variables are bound with the context variables.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "context",
protocol: 'accessing',
fn: function (){
var self=this;
return self["@context"];

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "context\x0a\x09^ context",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AISemanticAnalyzer);

$core.addMethod(
$core.method({
selector: "context:",
protocol: 'accessing',
fn: function (anAIContext){
var self=this;
self["@context"]=anAIContext;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anAIContext"],
source: "context: anAIContext\x0a\x09context := anAIContext",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AISemanticAnalyzer);

$core.addMethod(
$core.method({
selector: "visitVariableNode:",
protocol: 'visiting',
fn: function (aNode){
var self=this;
function $ASTContextVar(){return $globals.ASTContextVar||(typeof ASTContextVar=="undefined"?nil:ASTContextVar)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
var $early={};
try {
$recv(self._context())._localAt_ifAbsent_($recv(aNode)._value(),(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1=(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.supercall = true,
//>>excludeEnd("ctx");
($globals.AISemanticAnalyzer.superclass||$boot.dnu).fn.prototype._visitVariableNode_.apply($recv(self), [aNode]));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.supercall = false;
//>>excludeEnd("ctx");;
throw $early=[$1];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$recv(aNode)._binding_($recv($ASTContextVar())._new());
return self;
}
catch(e) {if(e===$early)return e[0]; throw e}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitVariableNode:",{aNode:aNode},$globals.AISemanticAnalyzer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode"],
source: "visitVariableNode: aNode\x0a\x09self context \x0a\x09\x09localAt: aNode value \x0a\x09\x09ifAbsent: [ ^ super visitVariableNode: aNode ].\x0a\x0a\x09aNode binding: ASTContextVar new",
referencedClasses: ["ASTContextVar"],
//>>excludeEnd("ide");
messageSends: ["localAt:ifAbsent:", "context", "value", "visitVariableNode:", "binding:", "new"]
}),
$globals.AISemanticAnalyzer);



$core.addClass('ASTContextVar', $globals.ScopeVar, ['context'], 'Compiler-Interpreter');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.ASTContextVar.comment="I am a variable defined in a `context`.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "context",
protocol: 'accessing',
fn: function (){
var self=this;
return self["@context"];

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "context\x0a\x09^ context",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ASTContextVar);

$core.addMethod(
$core.method({
selector: "context:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
self["@context"]=anObject;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "context: anObject\x0a\x09context := anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ASTContextVar);



$core.addClass('ASTDebugger', $globals.Object, ['interpreter', 'context', 'result'], 'Compiler-Interpreter');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.ASTDebugger.comment="I am a stepping debugger interface for Amber code.\x0aI internally use an instance of `ASTInterpreter` to actually step through node and interpret them.\x0a\x0aMy instances are created from an `AIContext` with `ASTDebugger class >> context:`.\x0aThey hold an `AIContext` instance internally, recursive copy of the `MethodContext`.\x0a\x0a## API\x0a\x0aUse the methods of the `'stepping'` protocol to do stepping.";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "atEnd",
protocol: 'testing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$receiver;
$1=self._context();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["context"]=1;
//>>excludeEnd("ctx");
if(($receiver = $1) == null || $receiver.isNil){
return true;
} else {
$1;
};
return $recv($recv(self._interpreter())._atEnd())._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(self._context())._isTopContext();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"atEnd",{},$globals.ASTDebugger)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "atEnd\x09\x0a\x09self context ifNil: [ ^ true ].\x0a\x09\x0a\x09^ self interpreter atEnd and: [ \x0a\x09\x09self context isTopContext ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "context", "and:", "atEnd", "interpreter", "isTopContext"]
}),
$globals.ASTDebugger);

$core.addMethod(
$core.method({
selector: "context",
protocol: 'accessing',
fn: function (){
var self=this;
return self["@context"];

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "context\x0a\x09^ context",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ASTDebugger);

$core.addMethod(
$core.method({
selector: "context:",
protocol: 'accessing',
fn: function (aContext){
var self=this;
self["@context"]=aContext;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aContext"],
source: "context: aContext\x0a\x09context := aContext",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ASTDebugger);

$core.addMethod(
$core.method({
selector: "flushInnerContexts",
protocol: 'actions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$receiver;
$1=self._context();
if(($receiver = $1) == null || $receiver.isNil){
$1;
} else {
var cxt;
cxt=$receiver;
$recv(cxt)._innerContext_(nil);
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"flushInnerContexts",{},$globals.ASTDebugger)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "flushInnerContexts\x0a\x09\x22When stepping, the inner contexts are not relevent anymore,\x0a\x09and can be flushed\x22\x0a\x09\x0a\x09self context ifNotNil: [ :cxt | \x0a\x09\x09cxt innerContext: nil ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNotNil:", "context", "innerContext:"]
}),
$globals.ASTDebugger);

$core.addMethod(
$core.method({
selector: "interpreter",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$receiver;
$1=self._context();
if(($receiver = $1) == null || $receiver.isNil){
return $1;
} else {
var ctx;
ctx=$receiver;
return $recv(ctx)._interpreter();
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"interpreter",{},$globals.ASTDebugger)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "interpreter\x0a\x09^ self context ifNotNil: [ :ctx | \x0a\x09\x09ctx interpreter ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNotNil:", "context", "interpreter"]
}),
$globals.ASTDebugger);

$core.addMethod(
$core.method({
selector: "method",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv(self._context())._method();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"method",{},$globals.ASTDebugger)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "method\x0a\x09^ self context method",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["method", "context"]
}),
$globals.ASTDebugger);

$core.addMethod(
$core.method({
selector: "node",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$receiver;
$1=self._interpreter();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["interpreter"]=1;
//>>excludeEnd("ctx");
if(($receiver = $1) == null || $receiver.isNil){
return $1;
} else {
return $recv(self._interpreter())._node();
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"node",{},$globals.ASTDebugger)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "node\x0a\x09^ self interpreter ifNotNil: [\x0a\x09\x09self interpreter node ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNotNil:", "interpreter", "node"]
}),
$globals.ASTDebugger);

$core.addMethod(
$core.method({
selector: "onStep",
protocol: 'private',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$3,$2,$4,$6,$5,$receiver;
$1=self._interpreter();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["interpreter"]=1;
//>>excludeEnd("ctx");
self["@result"]=$recv($1)._result();
$3=self._interpreter();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["interpreter"]=2;
//>>excludeEnd("ctx");
$2=$recv($3)._atEnd();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["atEnd"]=1;
//>>excludeEnd("ctx");
if($core.assert($2)){
$4=$recv(self._context())._outerContext();
if(($receiver = $4) == null || $receiver.isNil){
$4;
} else {
var outerContext;
outerContext=$receiver;
self._context_(outerContext);
};
$6=self._interpreter();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["interpreter"]=3;
//>>excludeEnd("ctx");
$5=$recv($6)._atEnd();
if(!$core.assert($5)){
$recv(self._interpreter())._skip();
};
};
self._flushInnerContexts();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"onStep",{},$globals.ASTDebugger)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "onStep\x0a\x09\x22After each step, check if the interpreter is at the end,\x0a\x09and if it is move to its outer context if any, skipping its \x0a\x09current node (which was just evaluated by the current \x0a\x09interpreter).\x0a\x09\x0a\x09After each step we also flush inner contexts.\x22\x0a\x09\x0a\x09result := self interpreter result.\x0a\x09\x0a\x09self interpreter atEnd ifTrue: [\x0a\x09\x09self context outerContext ifNotNil: [ :outerContext | \x0a\x09\x09\x09self context: outerContext ].\x0a\x09\x09self interpreter atEnd ifFalse: [ self interpreter skip ] ].\x0a\x09\x09\x0a\x09self flushInnerContexts",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["result", "interpreter", "ifTrue:", "atEnd", "ifNotNil:", "outerContext", "context", "context:", "ifFalse:", "skip", "flushInnerContexts"]
}),
$globals.ASTDebugger);

$core.addMethod(
$core.method({
selector: "proceed",
protocol: 'stepping',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._atEnd();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}))._whileFalse_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._stepOver();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"proceed",{},$globals.ASTDebugger)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "proceed\x0a\x09[ self atEnd ] whileFalse: [ self stepOver ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["whileFalse:", "atEnd", "stepOver"]
}),
$globals.ASTDebugger);

$core.addMethod(
$core.method({
selector: "restart",
protocol: 'stepping',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._interpreter())._restart();
self._flushInnerContexts();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"restart",{},$globals.ASTDebugger)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "restart\x0a\x09self interpreter restart.\x0a\x09self flushInnerContexts",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["restart", "interpreter", "flushInnerContexts"]
}),
$globals.ASTDebugger);

$core.addMethod(
$core.method({
selector: "result",
protocol: 'accessing',
fn: function (){
var self=this;
return self["@result"];

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "result\x0a\x09^ result",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ASTDebugger);

$core.addMethod(
$core.method({
selector: "stepInto",
protocol: 'stepping',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._shouldBeImplemented();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"stepInto",{},$globals.ASTDebugger)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "stepInto\x0a\x09self shouldBeImplemented",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["shouldBeImplemented"]
}),
$globals.ASTDebugger);

$core.addMethod(
$core.method({
selector: "stepOver",
protocol: 'stepping',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
$1=$recv(self._context())._isTopContext();
if($core.assert($1)){
$recv(self._interpreter())._stepOver();
} else {
$2=self._interpreter();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["interpreter"]=1;
//>>excludeEnd("ctx");
$recv($2)._skip();
};
self._onStep();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"stepOver",{},$globals.ASTDebugger)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "stepOver\x0a\x09self context isTopContext \x0a\x09\x09ifFalse: [ self interpreter skip ]\x0a\x09\x09ifTrue: [ self interpreter stepOver ].\x0a\x09self onStep",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifFalse:ifTrue:", "isTopContext", "context", "skip", "interpreter", "stepOver", "onStep"]
}),
$globals.ASTDebugger);


$core.addMethod(
$core.method({
selector: "context:",
protocol: 'instance creation',
fn: function (aContext){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._new();
$recv($1)._context_(aContext);
return $recv($1)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"context:",{aContext:aContext},$globals.ASTDebugger.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aContext"],
source: "context: aContext\x0a\x09^ self new\x0a\x09\x09context: aContext;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["context:", "new", "yourself"]
}),
$globals.ASTDebugger.klass);


$core.addClass('ASTEnterNode', $globals.NodeVisitor, ['interpreter'], 'Compiler-Interpreter');
$core.addMethod(
$core.method({
selector: "interpreter",
protocol: 'accessing',
fn: function (){
var self=this;
return self["@interpreter"];

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "interpreter\x0a\x09^ interpreter",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ASTEnterNode);

$core.addMethod(
$core.method({
selector: "interpreter:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
self["@interpreter"]=anObject;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "interpreter: anObject\x0a\x09interpreter := anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ASTEnterNode);

$core.addMethod(
$core.method({
selector: "visitBlockNode:",
protocol: 'visiting',
fn: function (aNode){
var self=this;
return aNode;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode"],
source: "visitBlockNode: aNode\x0a\x09\x22Answer the node as we want to avoid eager evaluation\x22\x0a\x09\x0a\x09^ aNode",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ASTEnterNode);

$core.addMethod(
$core.method({
selector: "visitNode:",
protocol: 'visiting',
fn: function (aNode){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $early={};
try {
$recv($recv(aNode)._nodes())._ifEmpty_ifNotEmpty_((function(){
throw $early=[aNode];

}),(function(nodes){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
throw $early=[self._visit_($recv(nodes)._first())];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({nodes:nodes},$ctx1,2)});
//>>excludeEnd("ctx");
}));
return self;
}
catch(e) {if(e===$early)return e[0]; throw e}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitNode:",{aNode:aNode},$globals.ASTEnterNode)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode"],
source: "visitNode: aNode\x0a\x09aNode nodes\x0a\x09\x09ifEmpty: [ ^ aNode ]\x0a\x09\x09ifNotEmpty: [ :nodes | ^ self visit: nodes first ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifEmpty:ifNotEmpty:", "nodes", "visit:", "first"]
}),
$globals.ASTEnterNode);

$core.addMethod(
$core.method({
selector: "visitSequenceNode:",
protocol: 'visiting',
fn: function (aNode){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$recv($recv(aNode)._temps())._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv(self._interpreter())._context())._defineLocal_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$1=(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true,
//>>excludeEnd("ctx");
($globals.ASTEnterNode.superclass||$boot.dnu).fn.prototype._visitSequenceNode_.apply($recv(self), [aNode]));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitSequenceNode:",{aNode:aNode},$globals.ASTEnterNode)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode"],
source: "visitSequenceNode: aNode\x0a\x09aNode temps do: [ :each |\x0a\x09\x09self interpreter context defineLocal: each ].\x0a\x09^ super visitSequenceNode: aNode",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["do:", "temps", "defineLocal:", "context", "interpreter", "visitSequenceNode:"]
}),
$globals.ASTEnterNode);


$core.addMethod(
$core.method({
selector: "on:",
protocol: 'instance creation',
fn: function (anInterpreter){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._new();
$recv($1)._interpreter_(anInterpreter);
return $recv($1)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"on:",{anInterpreter:anInterpreter},$globals.ASTEnterNode.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anInterpreter"],
source: "on: anInterpreter\x0a\x09^ self new\x0a\x09\x09interpreter: anInterpreter;\x0a\x09\x09yourself",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["interpreter:", "new", "yourself"]
}),
$globals.ASTEnterNode.klass);


$core.addClass('ASTInterpreter', $globals.NodeVisitor, ['node', 'context', 'stack', 'returnValue', 'returned', 'forceAtEnd'], 'Compiler-Interpreter');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.ASTInterpreter.comment="I visit an AST, interpreting (evaluating) nodes one after the other, using a small stack machine.\x0a\x0a## API\x0a\x0aWhile my instances should be used from within an `ASTDebugger`, which provides a more high level interface,\x0ayou can use methods from the `interpreting` protocol:\x0a\x0a- `#step` evaluates the current `node` only\x0a- `#stepOver` evaluates the AST from the current `node` up to the next stepping node (most likely the next send node)\x0a- `#proceed` evaluates eagerly the AST\x0a- `#restart` select the first node of the AST\x0a- `#skip` skips the current node, moving to the next one if any";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "assign:to:",
protocol: 'private',
fn: function (aNode,anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$3,$2,$4;
$1=$recv($recv(aNode)._binding())._isInstanceVar();
if($core.assert($1)){
$3=self._context();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["context"]=1;
//>>excludeEnd("ctx");
$2=$recv($3)._receiver();
$4=$recv(aNode)._value();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["value"]=1;
//>>excludeEnd("ctx");
$recv($2)._instVarAt_put_($4,anObject);
} else {
$recv(self._context())._localAt_put_($recv(aNode)._value(),anObject);
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"assign:to:",{aNode:aNode,anObject:anObject},$globals.ASTInterpreter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode", "anObject"],
source: "assign: aNode to: anObject\x0a\x09aNode binding isInstanceVar\x0a\x09\x09ifTrue: [ self context receiver instVarAt: aNode value put: anObject ]\x0a\x09\x09ifFalse: [ self context localAt: aNode value put: anObject ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:ifFalse:", "isInstanceVar", "binding", "instVarAt:put:", "receiver", "context", "value", "localAt:put:"]
}),
$globals.ASTInterpreter);

$core.addMethod(
$core.method({
selector: "atEnd",
protocol: 'testing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self["@forceAtEnd"];
if($core.assert($1)){
return true;
};
return $recv(self._hasReturned())._or_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(self._node())._isNil();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"atEnd",{},$globals.ASTInterpreter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "atEnd\x0a\x09forceAtEnd ifTrue: [ ^ true ].\x0a\x09\x0a\x09^ self hasReturned or: [ self node isNil ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:", "or:", "hasReturned", "isNil", "node"]
}),
$globals.ASTInterpreter);

$core.addMethod(
$core.method({
selector: "context",
protocol: 'accessing',
fn: function (){
var self=this;
return self["@context"];

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "context\x0a\x09^ context",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ASTInterpreter);

$core.addMethod(
$core.method({
selector: "context:",
protocol: 'accessing',
fn: function (aContext){
var self=this;
self["@context"]=aContext;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aContext"],
source: "context: aContext\x0a\x09context := aContext",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ASTInterpreter);

$core.addMethod(
$core.method({
selector: "enterNode",
protocol: 'interpreting',
fn: function (){
var self=this;
function $ASTEnterNode(){return $globals.ASTEnterNode||(typeof ASTEnterNode=="undefined"?nil:ASTEnterNode)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._node_($recv($recv($ASTEnterNode())._on_(self))._visit_(self._node()));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"enterNode",{},$globals.ASTInterpreter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "enterNode\x0a\x09self node: ((ASTEnterNode on: self) visit: self node)",
referencedClasses: ["ASTEnterNode"],
//>>excludeEnd("ide");
messageSends: ["node:", "visit:", "on:", "node"]
}),
$globals.ASTInterpreter);

$core.addMethod(
$core.method({
selector: "eval:",
protocol: 'private',
fn: function (aString){
var self=this;
var source,function_;
function $String(){return $globals.String||(typeof String=="undefined"?nil:String)}
function $Compiler(){return $globals.Compiler||(typeof Compiler=="undefined"?nil:Compiler)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $3,$2,$1;
source=$recv($String())._streamContents_((function(str){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv(str)._nextPutAll_("0,(function(");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["nextPutAll:"]=1;
//>>excludeEnd("ctx");
$3=self._context();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["context"]=1;
//>>excludeEnd("ctx");
$2=$recv($3)._locals();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["locals"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._keys();
$recv($1)._do_separatedBy_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv(str)._nextPutAll_(each);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["nextPutAll:"]=2;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({each:each},$ctx2,2)});
//>>excludeEnd("ctx");
}),(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv(str)._nextPutAll_(",");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["nextPutAll:"]=3;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,3)});
//>>excludeEnd("ctx");
}));
$recv(str)._nextPutAll_("){ return (function() {");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["nextPutAll:"]=4;
//>>excludeEnd("ctx");
$recv(str)._nextPutAll_(aString);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["nextPutAll:"]=5;
//>>excludeEnd("ctx");
return $recv(str)._nextPutAll_("})()})");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({str:str},$ctx1,1)});
//>>excludeEnd("ctx");
}));
function_=$recv($recv($Compiler())._new())._eval_(source);
return $recv(function_)._valueWithPossibleArguments_($recv($recv(self._context())._locals())._values());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"eval:",{aString:aString,source:source,function_:function_},$globals.ASTInterpreter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "eval: aString\x0a\x09\x22Evaluate aString as JS source inside an JS function.\x0a\x09aString is not sandboxed.\x22\x0a\x09\x0a\x09| source function |\x0a\x09\x0a\x09source := String streamContents: [ :str |\x0a\x09\x09str nextPutAll: '0,(function('.\x0a\x09\x09self context locals keys\x0a\x09\x09\x09do: [ :each | str nextPutAll: each ]\x0a\x09\x09\x09separatedBy: [ str nextPutAll: ',' ].\x0a\x09\x09str\x0a\x09\x09\x09nextPutAll: '){ return (function() {';\x0a\x09\x09\x09nextPutAll: aString;\x0a\x09\x09\x09nextPutAll: '})()})' ].\x0a\x09\x09\x09\x0a\x09function := Compiler new eval: source.\x0a\x09\x0a\x09^ function valueWithPossibleArguments: self context locals values",
referencedClasses: ["String", "Compiler"],
//>>excludeEnd("ide");
messageSends: ["streamContents:", "nextPutAll:", "do:separatedBy:", "keys", "locals", "context", "eval:", "new", "valueWithPossibleArguments:", "values"]
}),
$globals.ASTInterpreter);

$core.addMethod(
$core.method({
selector: "hasReturned",
protocol: 'testing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$receiver;
$1=self["@returned"];
if(($receiver = $1) == null || $receiver.isNil){
return false;
} else {
return $1;
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"hasReturned",{},$globals.ASTInterpreter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "hasReturned\x0a\x09^ returned ifNil: [ false ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:"]
}),
$globals.ASTInterpreter);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true,
//>>excludeEnd("ctx");
($globals.ASTInterpreter.superclass||$boot.dnu).fn.prototype._initialize.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
self["@forceAtEnd"]=false;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.ASTInterpreter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x0a\x09forceAtEnd := false",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initialize"]
}),
$globals.ASTInterpreter);

$core.addMethod(
$core.method({
selector: "interpret",
protocol: 'interpreting',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._visit_(self._node());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"interpret",{},$globals.ASTInterpreter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "interpret\x0a\x09\x22Interpret the next node to be evaluated\x22\x0a\x09\x0a\x09self visit: self node",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["visit:", "node"]
}),
$globals.ASTInterpreter);

$core.addMethod(
$core.method({
selector: "messageFromSendNode:arguments:",
protocol: 'private',
fn: function (aSendNode,aCollection){
var self=this;
function $Message(){return $globals.Message||(typeof Message=="undefined"?nil:Message)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($Message())._new();
$recv($1)._selector_($recv(aSendNode)._selector());
$recv($1)._arguments_(aCollection);
return $recv($1)._yourself();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"messageFromSendNode:arguments:",{aSendNode:aSendNode,aCollection:aCollection},$globals.ASTInterpreter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aSendNode", "aCollection"],
source: "messageFromSendNode: aSendNode arguments: aCollection\x0a\x09^ Message new\x0a\x09\x09selector: aSendNode selector;\x0a\x09\x09arguments: aCollection;\x0a\x09\x09yourself",
referencedClasses: ["Message"],
//>>excludeEnd("ide");
messageSends: ["selector:", "new", "selector", "arguments:", "yourself"]
}),
$globals.ASTInterpreter);

$core.addMethod(
$core.method({
selector: "messageNotUnderstood:receiver:",
protocol: 'private',
fn: function (aMessage,anObject){
var self=this;
function $MessageNotUnderstood(){return $globals.MessageNotUnderstood||(typeof MessageNotUnderstood=="undefined"?nil:MessageNotUnderstood)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=$recv($MessageNotUnderstood())._new();
$recv($1)._message_(aMessage);
$recv($1)._receiver_(anObject);
$recv($1)._signal();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"messageNotUnderstood:receiver:",{aMessage:aMessage,anObject:anObject},$globals.ASTInterpreter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aMessage", "anObject"],
source: "messageNotUnderstood: aMessage receiver: anObject\x0a\x09MessageNotUnderstood new\x0a\x09\x09message: aMessage;\x0a\x09\x09receiver: anObject;\x0a\x09\x09signal",
referencedClasses: ["MessageNotUnderstood"],
//>>excludeEnd("ide");
messageSends: ["message:", "new", "receiver:", "signal"]
}),
$globals.ASTInterpreter);

$core.addMethod(
$core.method({
selector: "next",
protocol: 'interpreting',
fn: function (){
var self=this;
var nd,nextNode;
function $ASTEnterNode(){return $globals.ASTEnterNode||(typeof ASTEnterNode=="undefined"?nil:ASTEnterNode)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$receiver;
nd=self._node();
$1=$recv(nd)._parent();
if(($receiver = $1) == null || $receiver.isNil){
nextNode=$1;
} else {
var parent;
parent=$receiver;
$2=$recv(parent)._nextSiblingNode_(nd);
if(($receiver = $2) == null || $receiver.isNil){
nextNode=parent;
} else {
var sibling;
sibling=$receiver;
nextNode=$recv($recv($ASTEnterNode())._on_(self))._visit_(sibling);
};
};
self._node_(nextNode);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"next",{nd:nd,nextNode:nextNode},$globals.ASTInterpreter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "next\x0a\x09| nd nextNode |\x0a\x09nd := self node.\x0a\x09nextNode := nd parent ifNotNil: [ :parent |\x0a\x09\x09(parent nextSiblingNode: nd)\x0a\x09\x09\x09ifNil: [ parent ]\x0a\x09\x09\x09ifNotNil: [ :sibling | (ASTEnterNode on: self) visit: sibling ] ].\x0a\x09self node: nextNode",
referencedClasses: ["ASTEnterNode"],
//>>excludeEnd("ide");
messageSends: ["node", "ifNotNil:", "parent", "ifNil:ifNotNil:", "nextSiblingNode:", "visit:", "on:", "node:"]
}),
$globals.ASTInterpreter);

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
source: "node\x0a\x09\x22Answer the next node, ie the node to be evaluated in the next step\x22\x0a\x09\x0a\x09^ node",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ASTInterpreter);

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
$globals.ASTInterpreter);

$core.addMethod(
$core.method({
selector: "peek",
protocol: 'stack',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
var $early={};
try {
$1=self._stack();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["stack"]=1;
//>>excludeEnd("ctx");
$recv($1)._ifEmpty_((function(){
throw $early=[nil];

}));
return $recv(self._stack())._last();
}
catch(e) {if(e===$early)return e[0]; throw e}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"peek",{},$globals.ASTInterpreter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "peek\x0a\x09\x22Peek the top object of the context stack\x22\x0a\x09\x0a\x09self stack ifEmpty: [ ^ nil ].\x0a\x09\x0a\x09^ self stack last",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifEmpty:", "stack", "last"]
}),
$globals.ASTInterpreter);

$core.addMethod(
$core.method({
selector: "pop",
protocol: 'stack',
fn: function (){
var self=this;
var peekedValue;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
peekedValue=self._peek();
$recv(self._stack())._removeLast();
return peekedValue;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"pop",{peekedValue:peekedValue},$globals.ASTInterpreter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "pop\x0a\x09\x22Pop an object from the context stack\x22\x0a\x09\x0a\x09| peekedValue |\x0a\x09\x0a\x09peekedValue := self peek.\x0a\x09self stack removeLast.\x0a\x09^ peekedValue",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["peek", "removeLast", "stack"]
}),
$globals.ASTInterpreter);

$core.addMethod(
$core.method({
selector: "proceed",
protocol: 'interpreting',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._atEnd();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}))._whileFalse_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._step();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"proceed",{},$globals.ASTInterpreter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "proceed\x0a\x09\x22Eagerly evaluate the ast\x22\x0a\x09\x0a\x09[ self atEnd ] \x0a\x09\x09whileFalse: [ self step ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["whileFalse:", "atEnd", "step"]
}),
$globals.ASTInterpreter);

$core.addMethod(
$core.method({
selector: "push:",
protocol: 'stack',
fn: function (anObject){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv(self._stack())._add_(anObject);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"push:",{anObject:anObject},$globals.ASTInterpreter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "push: anObject\x0a\x09\x22Push an object to the context stack\x22\x0a\x09\x0a\x09^ self stack add: anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["add:", "stack"]
}),
$globals.ASTInterpreter);

$core.addMethod(
$core.method({
selector: "restart",
protocol: 'interpreting',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._node_($recv(self._context())._ast());
self._enterNode();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"restart",{},$globals.ASTInterpreter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "restart\x0a\x09self node: self context ast; enterNode",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["node:", "ast", "context", "enterNode"]
}),
$globals.ASTInterpreter);

$core.addMethod(
$core.method({
selector: "result",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._hasReturned();
if($core.assert($1)){
return self._returnValue();
} else {
return $recv(self._context())._receiver();
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"result",{},$globals.ASTInterpreter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "result\x0a\x09^ self hasReturned \x0a\x09\x09ifTrue: [ self returnValue ] \x0a\x09\x09ifFalse: [ self context receiver ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:ifFalse:", "hasReturned", "returnValue", "receiver", "context"]
}),
$globals.ASTInterpreter);

$core.addMethod(
$core.method({
selector: "returnValue",
protocol: 'accessing',
fn: function (){
var self=this;
return self["@returnValue"];

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "returnValue\x0a\x09^ returnValue",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ASTInterpreter);

$core.addMethod(
$core.method({
selector: "returnValue:",
protocol: 'accessing',
fn: function (anObject){
var self=this;
self["@returnValue"]=anObject;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anObject"],
source: "returnValue: anObject\x0a\x09returnValue := anObject",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ASTInterpreter);

$core.addMethod(
$core.method({
selector: "sendMessage:to:superSend:",
protocol: 'private',
fn: function (aMessage,anObject,aBoolean){
var self=this;
var method;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1,$3,$receiver;
var $early={};
try {
if(!$core.assert(aBoolean)){
return $recv(aMessage)._sendTo_(anObject);
};
$2=$recv(anObject)._class();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["class"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._superclass();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["superclass"]=1;
//>>excludeEnd("ctx");
if(($receiver = $1) == null || $receiver.isNil){
$3=self._messageNotUnderstood_receiver_(aMessage,anObject);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["messageNotUnderstood:receiver:"]=1;
//>>excludeEnd("ctx");
return $3;
} else {
$1;
};
method=$recv($recv($recv($recv(anObject)._class())._superclass())._methodDictionary())._at_ifAbsent_($recv(aMessage)._selector(),(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
throw $early=[self._messageNotUnderstood_receiver_(aMessage,anObject)];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)});
//>>excludeEnd("ctx");
}));
return $recv(method)._sendTo_arguments_(anObject,$recv(aMessage)._arguments());
}
catch(e) {if(e===$early)return e[0]; throw e}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"sendMessage:to:superSend:",{aMessage:aMessage,anObject:anObject,aBoolean:aBoolean,method:method},$globals.ASTInterpreter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aMessage", "anObject", "aBoolean"],
source: "sendMessage: aMessage to: anObject superSend: aBoolean\x0a\x09| method |\x0a\x09\x0a\x09aBoolean ifFalse: [ ^ aMessage sendTo: anObject ].\x0a\x09anObject class superclass ifNil: [ ^ self messageNotUnderstood: aMessage receiver: anObject ].\x0a\x09\x0a\x09method := anObject class superclass methodDictionary\x0a\x09\x09at: aMessage selector\x0a\x09\x09ifAbsent: [ ^ self messageNotUnderstood: aMessage receiver: anObject ].\x0a\x09\x09\x0a\x09^ method sendTo: anObject arguments: aMessage arguments",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifFalse:", "sendTo:", "ifNil:", "superclass", "class", "messageNotUnderstood:receiver:", "at:ifAbsent:", "methodDictionary", "selector", "sendTo:arguments:", "arguments"]
}),
$globals.ASTInterpreter);

$core.addMethod(
$core.method({
selector: "setNonLocalReturnFromContext:",
protocol: 'interpreting',
fn: function (aContext){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1;
$2=$recv(aContext)._interpreter();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["interpreter"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._hasReturned();
if($core.assert($1)){
self["@returned"]=true;
self["@returned"];
self._returnValue_($recv($recv(aContext)._interpreter())._returnValue());
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setNonLocalReturnFromContext:",{aContext:aContext},$globals.ASTInterpreter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aContext"],
source: "setNonLocalReturnFromContext: aContext\x0a\x09aContext interpreter hasReturned ifTrue: [\x0a\x09\x09returned := true.\x0a\x09\x09self returnValue: aContext interpreter returnValue ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:", "hasReturned", "interpreter", "returnValue:", "returnValue"]
}),
$globals.ASTInterpreter);

$core.addMethod(
$core.method({
selector: "skip",
protocol: 'interpreting',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._next();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"skip",{},$globals.ASTInterpreter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "skip\x0a\x09self next",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["next"]
}),
$globals.ASTInterpreter);

$core.addMethod(
$core.method({
selector: "stack",
protocol: 'accessing',
fn: function (){
var self=this;
function $OrderedCollection(){return $globals.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$receiver;
$1=self["@stack"];
if(($receiver = $1) == null || $receiver.isNil){
self["@stack"]=$recv($OrderedCollection())._new();
return self["@stack"];
} else {
return $1;
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"stack",{},$globals.ASTInterpreter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "stack\x0a\x09^ stack ifNil: [ stack := OrderedCollection new ]",
referencedClasses: ["OrderedCollection"],
//>>excludeEnd("ide");
messageSends: ["ifNil:", "new"]
}),
$globals.ASTInterpreter);

$core.addMethod(
$core.method({
selector: "step",
protocol: 'interpreting',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._interpret();
self._next();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"step",{},$globals.ASTInterpreter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "step\x0a\x09self \x0a\x09\x09interpret; \x0a\x09\x09next",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["interpret", "next"]
}),
$globals.ASTInterpreter);

$core.addMethod(
$core.method({
selector: "stepOver",
protocol: 'interpreting',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1;
self._step();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["step"]=1;
//>>excludeEnd("ctx");
$recv((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$2=self._node();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["node"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._isNil();
return $recv($1)._or_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv(self._node())._isSteppingNode();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}))._whileFalse_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._step();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"stepOver",{},$globals.ASTInterpreter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "stepOver\x0a\x09self step.\x0a\x09\x0a\x09[ self node isNil or: [ self node isSteppingNode ] ] whileFalse: [ \x0a\x09\x09self step ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["step", "whileFalse:", "or:", "isNil", "node", "isSteppingNode"]
}),
$globals.ASTInterpreter);

$core.addMethod(
$core.method({
selector: "visit:",
protocol: 'visiting',
fn: function (aNode){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1=self._hasReturned();
if(!$core.assert($1)){
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true,
//>>excludeEnd("ctx");
($globals.ASTInterpreter.superclass||$boot.dnu).fn.prototype._visit_.apply($recv(self), [aNode]));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visit:",{aNode:aNode},$globals.ASTInterpreter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode"],
source: "visit: aNode\x0a\x09self hasReturned ifFalse: [ super visit: aNode ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifFalse:", "hasReturned", "visit:"]
}),
$globals.ASTInterpreter);

$core.addMethod(
$core.method({
selector: "visitAssignmentNode:",
protocol: 'visiting',
fn: function (aNode){
var self=this;
var poppedValue;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
poppedValue=self._pop();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["pop"]=1;
//>>excludeEnd("ctx");
self._pop();
self._push_(poppedValue);
self._assign_to_($recv(aNode)._left(),poppedValue);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitAssignmentNode:",{aNode:aNode,poppedValue:poppedValue},$globals.ASTInterpreter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode"],
source: "visitAssignmentNode: aNode\x0a\x09| poppedValue |\x0a\x09\x0a\x09poppedValue := self pop.\x0a\x09\x0a\x09\x22Pop the left side of the assignment.\x0a\x09It already has been visited, and we don't need its value.\x22\x0a\x09self pop.\x0a\x09\x0a\x09self push: poppedValue.\x0a\x09self assign: aNode left to: poppedValue",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["pop", "push:", "assign:to:", "left"]
}),
$globals.ASTInterpreter);

$core.addMethod(
$core.method({
selector: "visitBlockNode:",
protocol: 'visiting',
fn: function (aNode){
var self=this;
var block;
function $AIBlockClosure(){return $globals.AIBlockClosure||(typeof AIBlockClosure=="undefined"?nil:AIBlockClosure)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
block=$recv($AIBlockClosure())._forContext_node_(self._context(),aNode);
self._push_(block);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitBlockNode:",{aNode:aNode,block:block},$globals.ASTInterpreter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode"],
source: "visitBlockNode: aNode\x0a\x09\x22Do not evaluate the block node.\x0a\x09Instead, put all instructions into a block that we push to the stack for later evaluation\x22\x0a\x09\x0a\x09| block |\x0a\x09\x0a\x09block := AIBlockClosure forContext: self context node: aNode.\x0a\x09\x0a\x09self push: block",
referencedClasses: ["AIBlockClosure"],
//>>excludeEnd("ide");
messageSends: ["forContext:node:", "context", "push:"]
}),
$globals.ASTInterpreter);

$core.addMethod(
$core.method({
selector: "visitBlockSequenceNode:",
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
($globals.ASTInterpreter.superclass||$boot.dnu).fn.prototype._visitBlockSequenceNode_.apply($recv(self), [aNode]));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
self["@forceAtEnd"]=true;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitBlockSequenceNode:",{aNode:aNode},$globals.ASTInterpreter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode"],
source: "visitBlockSequenceNode: aNode\x0a\x09\x22If the receiver is actually visiting a BlockSequenceNode,\x0a\x09it means the the context is a block context. Evaluation should \x0a\x09stop right after evaluating the block sequence and the outer\x0a\x09context's interpreter should take over. \x0a\x09Therefore we force #atEnd.\x22\x0a\x09\x0a\x09super visitBlockSequenceNode: aNode.\x0a\x09forceAtEnd := true",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["visitBlockSequenceNode:"]
}),
$globals.ASTInterpreter);

$core.addMethod(
$core.method({
selector: "visitDynamicArrayNode:",
protocol: 'visiting',
fn: function (aNode){
var self=this;
var array;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
array=[];
$recv($recv(aNode)._nodes())._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(array)._addFirst_(self._pop());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
self._push_(array);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitDynamicArrayNode:",{aNode:aNode,array:array},$globals.ASTInterpreter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode"],
source: "visitDynamicArrayNode: aNode\x0a\x09| array |\x0a\x09\x0a\x09array := #().\x0a\x09aNode nodes do: [ :each |\x0a\x09\x09array addFirst: self pop ].\x0a\x09\x0a\x09self push: array",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["do:", "nodes", "addFirst:", "pop", "push:"]
}),
$globals.ASTInterpreter);

$core.addMethod(
$core.method({
selector: "visitDynamicDictionaryNode:",
protocol: 'visiting',
fn: function (aNode){
var self=this;
var keyValueList;
function $OrderedCollection(){return $globals.OrderedCollection||(typeof OrderedCollection=="undefined"?nil:OrderedCollection)}
function $HashedCollection(){return $globals.HashedCollection||(typeof HashedCollection=="undefined"?nil:HashedCollection)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
keyValueList=$recv($OrderedCollection())._new();
$recv($recv(aNode)._nodes())._do_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv(keyValueList)._add_(self._pop());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
self._push_($recv($HashedCollection())._newFromPairs_($recv(keyValueList)._reversed()));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitDynamicDictionaryNode:",{aNode:aNode,keyValueList:keyValueList},$globals.ASTInterpreter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode"],
source: "visitDynamicDictionaryNode: aNode\x0a\x09| keyValueList |\x0a\x09\x0a\x09keyValueList := OrderedCollection new.\x0a\x09\x0a\x09aNode nodes do: [ :each | \x0a\x09\x09keyValueList add: self pop ].\x0a\x09\x0a\x09self push: (HashedCollection newFromPairs: keyValueList reversed)",
referencedClasses: ["OrderedCollection", "HashedCollection"],
//>>excludeEnd("ide");
messageSends: ["new", "do:", "nodes", "add:", "pop", "push:", "newFromPairs:", "reversed"]
}),
$globals.ASTInterpreter);

$core.addMethod(
$core.method({
selector: "visitJSStatementNode:",
protocol: 'visiting',
fn: function (aNode){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self["@returned"]=true;
self._returnValue_(self._eval_($recv(aNode)._source()));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitJSStatementNode:",{aNode:aNode},$globals.ASTInterpreter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode"],
source: "visitJSStatementNode: aNode\x0a\x09returned := true.\x0a\x09self returnValue: (self eval: aNode source)",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["returnValue:", "eval:", "source"]
}),
$globals.ASTInterpreter);

$core.addMethod(
$core.method({
selector: "visitNode:",
protocol: 'visiting',
fn: function (aNode){
var self=this;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode"],
source: "visitNode: aNode\x0a\x09\x22Do nothing by default. Especially, do not visit children recursively.\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ASTInterpreter);

$core.addMethod(
$core.method({
selector: "visitReturnNode:",
protocol: 'visiting',
fn: function (aNode){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self["@returned"]=true;
self._returnValue_(self._pop());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitReturnNode:",{aNode:aNode},$globals.ASTInterpreter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode"],
source: "visitReturnNode: aNode\x0a\x09returned := true.\x0a\x09self returnValue: self pop",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["returnValue:", "pop"]
}),
$globals.ASTInterpreter);

$core.addMethod(
$core.method({
selector: "visitSendNode:",
protocol: 'visiting',
fn: function (aNode){
var self=this;
var receiver,args,message,result;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
args=$recv($recv(aNode)._arguments())._collect_((function(each){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._pop();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["pop"]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)});
//>>excludeEnd("ctx");
}));
receiver=self._peek();
message=self._messageFromSendNode_arguments_(aNode,$recv(args)._reversed());
result=self._sendMessage_to_superSend_(message,receiver,$recv(aNode)._superSend());
$1=$recv($recv(aNode)._isCascadeSendNode())._and_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv(aNode)._isLastChild())._not();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
if(!$core.assert($1)){
self._pop();
self._push_(result);
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitSendNode:",{aNode:aNode,receiver:receiver,args:args,message:message,result:result},$globals.ASTInterpreter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode"],
source: "visitSendNode: aNode\x0a\x09| receiver args message result |\x0a\x09\x0a\x09args := aNode arguments collect: [ :each | self pop ].\x0a\x09receiver := self peek.\x0a\x09\x0a\x09message := self\x0a\x09\x09messageFromSendNode: aNode\x0a\x09\x09arguments: args reversed.\x0a\x09\x0a\x09result := self sendMessage: message to: receiver superSend: aNode superSend.\x0a\x09\x0a\x09\x22For cascade sends, push the reciever if the send is not the last one\x22\x0a\x09(aNode isCascadeSendNode and: [ aNode isLastChild not ])\x0a\x09\x09ifFalse: [ self pop; push: result ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["collect:", "arguments", "pop", "peek", "messageFromSendNode:arguments:", "reversed", "sendMessage:to:superSend:", "superSend", "ifFalse:", "and:", "isCascadeSendNode", "not", "isLastChild", "push:"]
}),
$globals.ASTInterpreter);

$core.addMethod(
$core.method({
selector: "visitValueNode:",
protocol: 'visiting',
fn: function (aNode){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._push_($recv(aNode)._value());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitValueNode:",{aNode:aNode},$globals.ASTInterpreter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode"],
source: "visitValueNode: aNode\x0a\x09self push: aNode value",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["push:", "value"]
}),
$globals.ASTInterpreter);

$core.addMethod(
$core.method({
selector: "visitVariableNode:",
protocol: 'visiting',
fn: function (aNode){
var self=this;
function $Platform(){return $globals.Platform||(typeof Platform=="undefined"?nil:Platform)}
function $Smalltalk(){return $globals.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$1,$5,$6,$4,$3,$8,$10,$9,$11,$12,$13,$15,$14,$16,$17,$7;
$2=$recv(aNode)._binding();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["binding"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._isUnknownVar();
if($core.assert($1)){
$5=$recv($Platform())._globals();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["globals"]=1;
//>>excludeEnd("ctx");
$6=$recv(aNode)._value();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["value"]=1;
//>>excludeEnd("ctx");
$4=$recv($5)._at_ifAbsent_($6,(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._error_("Unknown variable");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:ifAbsent:"]=1;
//>>excludeEnd("ctx");
$3=self._push_($4);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["push:"]=1;
//>>excludeEnd("ctx");
return $3;
};
$8=$recv($recv(aNode)._binding())._isInstanceVar();
if($core.assert($8)){
$10=self._context();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["context"]=1;
//>>excludeEnd("ctx");
$9=$recv($10)._receiver();
$11=$recv(aNode)._value();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["value"]=2;
//>>excludeEnd("ctx");
$7=$recv($9)._instVarAt_($11);
} else {
$12=self._context();
$13=$recv(aNode)._value();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["value"]=3;
//>>excludeEnd("ctx");
$7=$recv($12)._localAt_ifAbsent_($13,(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$15=$recv(aNode)._value();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["value"]=4;
//>>excludeEnd("ctx");
$14=$recv($15)._isCapitalized();
if($core.assert($14)){
$16=$recv($Smalltalk())._globals();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["globals"]=2;
//>>excludeEnd("ctx");
$17=$recv(aNode)._value();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["value"]=5;
//>>excludeEnd("ctx");
return $recv($16)._at_ifAbsent_($17,(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
return $recv($recv($Platform())._globals())._at_($recv(aNode)._value());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,7)});
//>>excludeEnd("ctx");
}));
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,5)});
//>>excludeEnd("ctx");
}));
};
self._push_($7);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitVariableNode:",{aNode:aNode},$globals.ASTInterpreter)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode"],
source: "visitVariableNode: aNode\x0a\x09aNode binding isUnknownVar ifTrue: [\x0a\x09\x09^ self push: (Platform globals at: aNode value ifAbsent: [ self error: 'Unknown variable' ]) ].\x0a\x09\x09\x0a\x09self push: (aNode binding isInstanceVar\x0a\x09\x09ifTrue: [ self context receiver instVarAt: aNode value ]\x0a\x09\x09ifFalse: [ self context \x0a\x09\x09\x09localAt: aNode value\x0a\x09\x09\x09ifAbsent: [\x0a\x09\x09\x09\x09aNode value isCapitalized\x0a\x09\x09\x09\x09\x09ifTrue: [\x0a\x09\x09\x09\x09\x09\x09Smalltalk globals \x0a\x09\x09\x09\x09\x09\x09\x09at: aNode value \x0a\x09\x09\x09\x09\x09\x09\x09ifAbsent: [ Platform globals at: aNode value ] ] ] ])",
referencedClasses: ["Platform", "Smalltalk"],
//>>excludeEnd("ide");
messageSends: ["ifTrue:", "isUnknownVar", "binding", "push:", "at:ifAbsent:", "globals", "value", "error:", "ifTrue:ifFalse:", "isInstanceVar", "instVarAt:", "receiver", "context", "localAt:ifAbsent:", "isCapitalized", "at:"]
}),
$globals.ASTInterpreter);



$core.addClass('ASTInterpreterError', $globals.Error, [], 'Compiler-Interpreter');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.ASTInterpreterError.comment="I get signaled when an AST interpreter is unable to interpret a node.";
//>>excludeEnd("ide");


$core.addClass('ASTPCNodeVisitor', $globals.NodeVisitor, ['context', 'index', 'selector', 'currentNode'], 'Compiler-Interpreter');
//>>excludeStart("ide", pragmas.excludeIdeData);
$globals.ASTPCNodeVisitor.comment="I visit an AST until I get to the current node for the `context` and answer it.\x0a\x0a## API\x0a\x0aMy instances must be filled with a context object using `#context:`.\x0a\x0aAfter visiting the AST the current node is answered by `#currentNode`";
//>>excludeEnd("ide");
$core.addMethod(
$core.method({
selector: "context",
protocol: 'accessing',
fn: function (){
var self=this;
return self["@context"];

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "context\x0a\x09^ context",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ASTPCNodeVisitor);

$core.addMethod(
$core.method({
selector: "context:",
protocol: 'accessing',
fn: function (aContext){
var self=this;
self["@context"]=aContext;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aContext"],
source: "context: aContext\x0a\x09context := aContext",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ASTPCNodeVisitor);

$core.addMethod(
$core.method({
selector: "currentNode",
protocol: 'accessing',
fn: function (){
var self=this;
return self["@currentNode"];

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "currentNode\x0a\x09^ currentNode",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ASTPCNodeVisitor);

$core.addMethod(
$core.method({
selector: "increaseIndex",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self["@index"]=$recv(self._index()).__plus((1));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"increaseIndex",{},$globals.ASTPCNodeVisitor)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "increaseIndex\x0a\x09index := self index + 1",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["+", "index"]
}),
$globals.ASTPCNodeVisitor);

$core.addMethod(
$core.method({
selector: "index",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$receiver;
$1=self["@index"];
if(($receiver = $1) == null || $receiver.isNil){
self["@index"]=(0);
return self["@index"];
} else {
return $1;
};
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"index",{},$globals.ASTPCNodeVisitor)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "index\x0a\x09^ index ifNil: [ index := 0 ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifNil:"]
}),
$globals.ASTPCNodeVisitor);

$core.addMethod(
$core.method({
selector: "selector",
protocol: 'accessing',
fn: function (){
var self=this;
return self["@selector"];

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "selector\x0a\x09^ selector",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ASTPCNodeVisitor);

$core.addMethod(
$core.method({
selector: "selector:",
protocol: 'accessing',
fn: function (aString){
var self=this;
self["@selector"]=aString;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aString"],
source: "selector: aString\x0a\x09selector := aString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ASTPCNodeVisitor);

$core.addMethod(
$core.method({
selector: "visitJSStatementNode:",
protocol: 'visiting',
fn: function (aNode){
var self=this;
self["@currentNode"]=aNode;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode"],
source: "visitJSStatementNode: aNode\x0a\x09\x22If a JSStatementNode is encountered, it always is the current node.\x0a\x09Stop visiting the AST there\x22\x0a\x09\x0a\x09currentNode := aNode",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ASTPCNodeVisitor);

$core.addMethod(
$core.method({
selector: "visitSendNode:",
protocol: 'visiting',
fn: function (aNode){
var self=this;
var sendIndex;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$4,$3,$5;
$1=self._context();
$2=self._selector();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["selector"]=1;
//>>excludeEnd("ctx");
sendIndex=$recv($1)._sendIndexAt_($2);
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true,
//>>excludeEnd("ctx");
($globals.ASTPCNodeVisitor.superclass||$boot.dnu).fn.prototype._visitSendNode_.apply($recv(self), [aNode]));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$4=self._selector();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["selector"]=2;
//>>excludeEnd("ctx");
$3=$recv($4).__eq($recv(aNode)._selector());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["="]=1;
//>>excludeEnd("ctx");
if($core.assert($3)){
$5=$recv(self._index()).__eq(sendIndex);
if($core.assert($5)){
self["@currentNode"]=aNode;
self["@currentNode"];
};
self._increaseIndex();
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"visitSendNode:",{aNode:aNode,sendIndex:sendIndex},$globals.ASTPCNodeVisitor)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode"],
source: "visitSendNode: aNode\x0a\x09| sendIndex |\x0a\x09sendIndex := self context sendIndexAt: self selector.\x0a\x09\x0a\x09super visitSendNode: aNode.\x0a\x09\x0a\x09self selector = aNode selector ifTrue: [\x0a\x09\x09self index = sendIndex ifTrue: [ currentNode := aNode ].\x0a\x09\x09self increaseIndex ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["sendIndexAt:", "context", "selector", "visitSendNode:", "ifTrue:", "=", "index", "increaseIndex"]
}),
$globals.ASTPCNodeVisitor);


$core.addMethod(
$core.method({
selector: "isSteppingNode",
protocol: '*Compiler-Interpreter',
fn: function (){
var self=this;
return true;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isSteppingNode\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AssignmentNode);

$core.addMethod(
$core.method({
selector: "isSteppingNode",
protocol: '*Compiler-Interpreter',
fn: function (){
var self=this;
return true;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isSteppingNode\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.BlockNode);

$core.addMethod(
$core.method({
selector: "nextSiblingNode:",
protocol: '*Compiler-Interpreter',
fn: function (aNode){
var self=this;
return nil;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode"],
source: "nextSiblingNode: aNode\x0a\x09\x22Answer nil as we want to avoid eager evaluation\x22\x0a\x09\x0a\x09\x22In fact, this should not have been called, ever. IMO. -- herby\x22\x0a\x09\x0a\x09^ nil",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.BlockNode);

$core.addMethod(
$core.method({
selector: "isSteppingNode",
protocol: '*Compiler-Interpreter',
fn: function (){
var self=this;
return true;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isSteppingNode\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.DynamicArrayNode);

$core.addMethod(
$core.method({
selector: "isSteppingNode",
protocol: '*Compiler-Interpreter',
fn: function (){
var self=this;
return true;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isSteppingNode\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.DynamicDictionaryNode);

$core.addMethod(
$core.method({
selector: "isSteppingNode",
protocol: '*Compiler-Interpreter',
fn: function (){
var self=this;
return true;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isSteppingNode\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.JSStatementNode);

$core.addMethod(
$core.method({
selector: "isSteppingNode",
protocol: '*Compiler-Interpreter',
fn: function (){
var self=this;
return false;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isSteppingNode\x0a\x09^ false",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.Node);

$core.addMethod(
$core.method({
selector: "nextSiblingNode:",
protocol: '*Compiler-Interpreter',
fn: function (aNode){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
var $early={};
try {
$1=self._nodes();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["nodes"]=1;
//>>excludeEnd("ctx");
return $recv($1)._at_ifAbsent_($recv($recv(self._nodes())._indexOf_(aNode)).__plus((1)),(function(){
throw $early=[nil];

}));
}
catch(e) {if(e===$early)return e[0]; throw e}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"nextSiblingNode:",{aNode:aNode},$globals.Node)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aNode"],
source: "nextSiblingNode: aNode\x0a\x09\x22Answer the next node after aNode or nil\x22\x0a\x09\x0a\x09^ self nodes \x0a\x09\x09at: (self nodes indexOf: aNode) + 1\x0a\x09\x09ifAbsent: [ ^ nil ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:ifAbsent:", "nodes", "+", "indexOf:"]
}),
$globals.Node);

$core.addMethod(
$core.method({
selector: "isSteppingNode",
protocol: '*Compiler-Interpreter',
fn: function (){
var self=this;
return true;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isSteppingNode\x0a\x09^ true",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.SendNode);

});
