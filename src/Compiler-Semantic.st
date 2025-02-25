Smalltalk createPackage: 'Compiler-Semantic'!
Object subclass: #LexicalScope
	instanceVariableNames: 'node instruction temps args outerScope blockIndex'
	package: 'Compiler-Semantic'!
!LexicalScope commentStamp!
I represent a lexical scope where variable names are associated with ScopeVars
Instances are used for block scopes. Method scopes are instances of MethodLexicalScope.

I am attached to a ScopeVar and method/block nodes.
Each context (method/closure) get a fresh scope that inherits from its outer scope.!

!LexicalScope methodsFor: 'accessing'!

alias
	^ '$ctx', self scopeLevel asString
!

allVariableNames
	^ self args keys, self temps keys
!

args
	^ args ifNil: [ args := Dictionary new ]
!

bindingFor: aStringOrNode
	^ self pseudoVars at: aStringOrNode value ifAbsent: [
		self args at: aStringOrNode value ifAbsent: [
			self temps at: aStringOrNode value ifAbsent: [ nil ]]]
!

blockIndex
	^ blockIndex ifNil: [ 0 ]
!

blockIndex: anInteger 
	blockIndex := anInteger
!

instruction
	^ instruction
!

instruction: anIRInstruction
	instruction := anIRInstruction
!

lookupVariable: aNode
	| lookup |
	lookup := (self bindingFor: aNode).
	lookup ifNil: [
		lookup := self outerScope ifNotNil: [
			(self outerScope lookupVariable: aNode) ]].
	^ lookup
!

methodScope
	^ self outerScope ifNotNil: [
		self outerScope methodScope ]
!

node
	"Answer the node in which I am defined"
	
	^ node
!

node: aNode
	node := aNode
!

outerScope
	^ outerScope
!

outerScope: aLexicalScope
	outerScope := aLexicalScope
!

pseudoVars
	^ self methodScope pseudoVars
!

scopeLevel
	self outerScope ifNil: [ ^ 1 ].
	self isInlined ifTrue: [ ^ self outerScope scopeLevel ].
	
	^ self outerScope scopeLevel + 1
!

temps
	^ temps ifNil: [ temps := Dictionary new ]
! !

!LexicalScope methodsFor: 'adding'!

addArg: aString
	self args at: aString put: (ArgVar on: aString).
	(self args at: aString) scope: self
!

addTemp: aString
	self temps at: aString put: (TempVar on: aString).
	(self temps at: aString) scope: self
! !

!LexicalScope methodsFor: 'testing'!

canInlineNonLocalReturns
	^ self isInlined and: [ self outerScope canInlineNonLocalReturns ]
!

isBlockScope
	^ self isMethodScope not
!

isInlined
	^ self instruction notNil and: [
		self instruction isInlined ]
!

isMethodScope
	^ false
! !

LexicalScope subclass: #MethodLexicalScope
	instanceVariableNames: 'iVars pseudoVars unknownVariables localReturn nonLocalReturns'
	package: 'Compiler-Semantic'!
!MethodLexicalScope commentStamp!
I represent a method scope.!

!MethodLexicalScope methodsFor: 'accessing'!

allVariableNames
	^ super allVariableNames, self iVars keys
!

bindingFor: aNode
	^ (super bindingFor: aNode) ifNil: [
		self iVars at: aNode value ifAbsent: [ nil ]]
!

iVars
	^ iVars ifNil: [ iVars := Dictionary new ]
!

localReturn
	^ localReturn ifNil: [ false ]
!

localReturn: aBoolean
	localReturn := aBoolean
!

methodScope
	^ self
!

nonLocalReturns
	^ nonLocalReturns ifNil: [ nonLocalReturns := OrderedCollection new ]
!

pseudoVars
	pseudoVars ifNil: [
		pseudoVars := Dictionary new.
		Smalltalk pseudoVariableNames do: [ :each |
			pseudoVars at: each put: ((PseudoVar on: each)
				scope: self methodScope;
				yourself) ]].
	^ pseudoVars
!

unknownVariables
	^ unknownVariables ifNil: [ unknownVariables := OrderedCollection new ]
! !

!MethodLexicalScope methodsFor: 'adding'!

addIVar: aString
	self iVars at: aString put: (InstanceVar on: aString).
	(self iVars at: aString) scope: self
!

addNonLocalReturn: aScope
	self nonLocalReturns add: aScope
!

removeNonLocalReturn: aScope
	self nonLocalReturns remove: aScope ifAbsent: []
! !

!MethodLexicalScope methodsFor: 'testing'!

canInlineNonLocalReturns
	^ true
!

hasLocalReturn
	^ self localReturn
!

hasNonLocalReturn
	^ self nonLocalReturns notEmpty
!

isMethodScope
	^ true
! !

Object subclass: #ScopeVar
	instanceVariableNames: 'scope name'
	package: 'Compiler-Semantic'!
!ScopeVar commentStamp!
I am an entry in a LexicalScope that gets associated with variable nodes of the same name.
There are 4 different subclasses of vars: temp vars, local vars, args, and unknown/global vars.!

!ScopeVar methodsFor: 'accessing'!

alias
	^ self name asVariableName
!

name
	^ name
!

name: aString
	name := aString
!

scope
	^ scope
!

scope: aScope
	scope := aScope
! !

!ScopeVar methodsFor: 'testing'!

isArgVar
	^ false
!

isClassRefVar
	^ false
!

isImmutable
	^ false
!

isInstanceVar
	^ false
!

isPseudoVar
	^ false
!

isTempVar
	^ false
!

isUnknownVar
	^ false
!

validateAssignment
	(self isArgVar or: [ self isPseudoVar ]) ifTrue: [
		InvalidAssignmentError new
			variableName: self name;
			signal]
! !

!ScopeVar class methodsFor: 'instance creation'!

on: aString
	^ self new
		name: aString;
		yourself
! !

ScopeVar subclass: #AliasVar
	instanceVariableNames: 'node'
	package: 'Compiler-Semantic'!
!AliasVar commentStamp!
I am an internally defined variable by the compiler!

!AliasVar methodsFor: 'accessing'!

node
	^ node
!

node: aNode
	node := aNode
! !

!AliasVar methodsFor: 'testing'!

isImmutable
	^ true
! !

ScopeVar subclass: #ArgVar
	instanceVariableNames: ''
	package: 'Compiler-Semantic'!
!ArgVar commentStamp!
I am an argument of a method or block.!

!ArgVar methodsFor: 'testing'!

isArgVar
	^ true
!

isImmutable
	^ true
! !

ScopeVar subclass: #ClassRefVar
	instanceVariableNames: ''
	package: 'Compiler-Semantic'!
!ClassRefVar commentStamp!
I am an class reference variable!

!ClassRefVar methodsFor: 'accessing'!

alias
	"Fixes issue #190.
	A function is created in the method definition, answering the class or nil.
	See JSStream >> #nextPutClassRefFunction:"
	
	^ '$', self name, '()'
! !

!ClassRefVar methodsFor: 'testing'!

isClassRefVar
	^ true
!

isImmutable
	^ true
! !

ScopeVar subclass: #InstanceVar
	instanceVariableNames: ''
	package: 'Compiler-Semantic'!
!InstanceVar commentStamp!
I am an instance variable of a method or block.!

!InstanceVar methodsFor: 'testing'!

alias
	^ 'self["@', self name, '"]'
!

isInstanceVar
	^ true
! !

ScopeVar subclass: #PseudoVar
	instanceVariableNames: ''
	package: 'Compiler-Semantic'!
!PseudoVar commentStamp!
I am an pseudo variable.

The five Smalltalk pseudo variables are: 'self', 'super', 'nil', 'true' and 'false'!

!PseudoVar methodsFor: 'accessing'!

alias
	^ self name
! !

!PseudoVar methodsFor: 'testing'!

isImmutable
	^ true
!

isPseudoVar
	^ true
! !

ScopeVar subclass: #TempVar
	instanceVariableNames: ''
	package: 'Compiler-Semantic'!
!TempVar commentStamp!
I am an temporary variable of a method or block.!

!TempVar methodsFor: 'testing'!

isTempVar
	^ true
! !

ScopeVar subclass: #UnknownVar
	instanceVariableNames: ''
	package: 'Compiler-Semantic'!
!UnknownVar commentStamp!
I am an unknown variable. Amber uses unknown variables as JavaScript globals!

!UnknownVar methodsFor: 'testing'!

isUnknownVar
	^ true
! !

NodeVisitor subclass: #SemanticAnalyzer
	instanceVariableNames: 'currentScope blockIndex thePackage theClass classReferences messageSends'
	package: 'Compiler-Semantic'!
!SemanticAnalyzer commentStamp!
I semantically analyze the abstract syntax tree and annotate it with informations such as non local returns and variable scopes.!

!SemanticAnalyzer methodsFor: 'accessing'!

classReferences
	^ classReferences ifNil: [ classReferences := Set new ]
!

messageSends
	^ messageSends ifNil: [ messageSends := Dictionary new ]
!

theClass
	^ theClass
!

theClass: aClass
	theClass := aClass
!

thePackage
	^ thePackage
!

thePackage: aPackage
	thePackage := aPackage
! !

!SemanticAnalyzer methodsFor: 'error handling'!

errorShadowingVariable: aString
	ShadowingVariableError new
		variableName: aString;
		signal
!

errorUnknownVariable: aNode
	"Throw an error if the variable is undeclared in the global JS scope (i.e. window).
	We allow all variables listed by Smalltalk>>#globalJsVariables.
	This list includes: `window`, `document`,  `process` and `global`
	for nodejs and browser environments.
	
	This is only to make sure compilation works on both browser-based and nodejs environments.
	The ideal solution would be to use a pragma instead"

	| identifier |
	identifier := aNode value.
	
	((Smalltalk globalJsVariables includes: identifier) not
		and: [ self isVariableUndefined: identifier inPackage: self thePackage ])
			ifTrue: [
				UnknownVariableError new
					variableName: aNode value;
					signal ]
			ifFalse: [
				currentScope methodScope unknownVariables add: aNode value ]
! !

!SemanticAnalyzer methodsFor: 'factory'!

newBlockScope
	^ self newScopeOfClass: LexicalScope
!

newMethodScope
	^ self newScopeOfClass: MethodLexicalScope
!

newScopeOfClass: aLexicalScopeClass
	^ aLexicalScopeClass new
		outerScope: currentScope;
		yourself
! !

!SemanticAnalyzer methodsFor: 'private'!

nextBlockIndex
	blockIndex ifNil: [ blockIndex := 0 ].
	
	blockIndex := blockIndex + 1.
	^ blockIndex
! !

!SemanticAnalyzer methodsFor: 'scope'!

popScope
	currentScope ifNotNil: [
		currentScope := currentScope outerScope ]
!

pushScope: aScope
	aScope outerScope: currentScope.
	currentScope := aScope
!

validateVariableScope: aString
	"Validate the variable scope in by doing a recursive lookup, up to the method scope"

	(currentScope lookupVariable: aString) ifNotNil: [
		self errorShadowingVariable: aString ]
! !

!SemanticAnalyzer methodsFor: 'testing'!

isVariableUndefined: aString inPackage: aPackage
	aPackage ifNotNil: [
		| packageKnownVars |
		packageKnownVars := (aPackage imports
			reject: #isString)
			collect: #key.
		(packageKnownVars includes: aString) ifTrue: [ ^ false ]].
	^ Compiler new
		eval: 'typeof ', aString, ' == "undefined"'
! !

!SemanticAnalyzer methodsFor: 'visiting'!

visitAssignmentNode: aNode
	super visitAssignmentNode: aNode.
	aNode left beAssigned
!

visitBlockNode: aNode
	self pushScope: self newBlockScope.
	aNode scope: currentScope.
	currentScope node: aNode.
	currentScope blockIndex: self nextBlockIndex.

	aNode parameters do: [ :each |
		self validateVariableScope: each.
		currentScope addArg: each ].

	super visitBlockNode: aNode.
	self popScope
!

visitCascadeNode: aNode
	aNode receiver: aNode nodes first receiver.
	super visitCascadeNode: aNode
!

visitMethodNode: aNode
	self pushScope: self newMethodScope.
	aNode scope: currentScope.
	currentScope node: aNode.

	self theClass allInstanceVariableNames do: [ :each |
		currentScope addIVar: each ].
	aNode arguments do: [ :each |
		self validateVariableScope: each.
		currentScope addArg: each ].

	super visitMethodNode: aNode.

	aNode
		classReferences: self classReferences;
		sendIndexes: self messageSends.
	self popScope
!

visitReturnNode: aNode
	aNode scope: currentScope.
	currentScope isMethodScope
		ifTrue: [ currentScope localReturn: true ]
		ifFalse: [ currentScope methodScope addNonLocalReturn: currentScope ].
	super visitReturnNode: aNode
!

visitSendNode: aNode

	aNode receiver value = 'super'
		ifFalse: [ (IRSendInliner inlinedSelectors includes: aNode selector) ifTrue: [
			aNode shouldBeInlined: true.
			aNode receiver ifNotNil: [ :receiver |
				receiver shouldBeAliased: true ] ] ].

	self messageSends at: aNode selector ifAbsentPut: [ Set new ].
	(self messageSends at: aNode selector) add: aNode.

	aNode index: (self messageSends at: aNode selector) size.

	super visitSendNode: aNode
!

visitSequenceNode: aNode
	aNode temps do: [ :each |
		self validateVariableScope: each.
		currentScope addTemp: each ].

	super visitSequenceNode: aNode
!

visitVariableNode: aNode
	"Bind a ScopeVar to aNode by doing a lookup in the current scope.
	If no ScopeVar is found, bind a UnknowVar and throw an error."

	| binding |
	binding := currentScope lookupVariable: aNode.
	
	binding ifNil: [
		aNode value isCapitalized
			ifTrue: [ "Capital letter variables might be globals."
				binding := ClassRefVar new name: aNode value; yourself.
				self classReferences add: aNode value]
			ifFalse: [
				self errorUnknownVariable: aNode.
				binding := UnknownVar new name: aNode value; yourself ] ].
		
	aNode binding: binding.
! !

!SemanticAnalyzer class methodsFor: 'instance creation'!

on: aClass
	^ self new
		theClass: aClass;
		yourself
! !

CompilerError subclass: #SemanticError
	instanceVariableNames: ''
	package: 'Compiler-Semantic'!
!SemanticError commentStamp!
I represent an abstract semantic error thrown by the SemanticAnalyzer.
Semantic errors can be unknown variable errors, etc.
See my subclasses for concrete errors.

The IDE should catch instances of Semantic error to deal with them when compiling!

SemanticError subclass: #InvalidAssignmentError
	instanceVariableNames: 'variableName'
	package: 'Compiler-Semantic'!
!InvalidAssignmentError commentStamp!
I get signaled when a pseudo variable gets assigned.!

!InvalidAssignmentError methodsFor: 'accessing'!

messageText
	^ ' Invalid assignment to variable: ', self variableName
!

variableName
	^ variableName
!

variableName: aString
	variableName := aString
! !

SemanticError subclass: #ShadowingVariableError
	instanceVariableNames: 'variableName'
	package: 'Compiler-Semantic'!
!ShadowingVariableError commentStamp!
I get signaled when a variable in a block or method scope shadows a variable of the same name in an outer scope.!

!ShadowingVariableError methodsFor: 'accessing'!

messageText
	^ 'Variable shadowing error: ', self variableName, ' is already defined'
!

variableName
	^ variableName
!

variableName: aString
	variableName := aString
! !

SemanticError subclass: #UnknownVariableError
	instanceVariableNames: 'variableName'
	package: 'Compiler-Semantic'!
!UnknownVariableError commentStamp!
I get signaled when a variable is not defined.
The default behavior is to allow it, as this is how Amber currently is able to seamlessly send messages to JavaScript objects.!

!UnknownVariableError methodsFor: 'accessing'!

messageText
	^ 'Unknown Variable error: ', self variableName, ' is not defined'
!

variableName
	^ variableName
!

variableName: aString
	variableName := aString
! !

