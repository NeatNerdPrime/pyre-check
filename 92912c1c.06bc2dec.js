(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{162:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return r})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(2),i=n(10),s=(n(0),n(171)),o={id:"pysa-basics",title:"Overview",sidebar_label:"Overview"},r={id:"pysa-basics",title:"Overview",description:"Pyre has applications beyond type checking python code; it can also run static",source:"@site/../docs/pysa_basics.md",permalink:"/docs/pysa-basics",sidebar_label:"Overview",sidebar:"overview",previous:{title:"Querying Pyre",permalink:"/docs/querying-pyre"},next:{title:"Running Pysa",permalink:"/docs/pysa-running"}},l=[{value:"Taint Analysis",id:"taint-analysis",children:[]},{value:"Configuration",id:"configuration",children:[]},{value:"Sources",id:"sources",children:[]},{value:"Sinks",id:"sinks",children:[{value:"Implicit Sinks",id:"implicit-sinks",children:[]}]},{value:"Rules",id:"rules",children:[]},{value:"Sanitizers",id:"sanitizers",children:[]},{value:"Taint Propagation",id:"taint-propagation",children:[]},{value:"Features",id:"features",children:[]},{value:"Stub files",id:"stub-files",children:[{value:"Usage",id:"usage",children:[]},{value:"Requirements and Features",id:"requirements-and-features",children:[]}]}],c={rightToc:l};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(s.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"Pyre has applications beyond type checking python code; it can also run static\nanalysis to identify potential security issues. These security issues are\nidentified with what is called a ",Object(s.b)("strong",{parentName:"p"},"Taint Analysis"),". The Python Static Analyzer\nfeature of Pyre is usually abbreviated to Pysa (pronounced like the Leaning tower\nof Pisa)."),Object(s.b)("h2",{id:"taint-analysis"},"Taint Analysis"),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Tainted data")," is data that must be treated carefully. Pysa works by tracking\nflows of data from where they originate (sources) to where they terminate in a\ndangerous location (sinks). For example, we might use it to track flows where\nuser-controllable request data flows into an ",Object(s.b)("inlineCode",{parentName:"p"},"eval")," call, leading to a remote\ncode execution vulnerability. This analysis is made possible by user-created\nstubs which provide annotations on source code, as well as Rules that define\nwhich sources are dangerous for which sinks. Pysa comes with many pre-written\nstubs and rules for builtin and common python libraries."),Object(s.b)("p",null,"Pysa propagates taint as operations are performed on tainted data. For example,\nif we start with a tainted integer and perform a number of operations on it, the\nend results will still be tainted:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"x = some_function_that_returns_a_tainted_value() # 'x' is marked as tainted\ny = x + 10\ns = str(x)\nf = f\"Value = {s}\" # 'f' is marked with the same taint 'x' had\n")),Object(s.b)("p",null,"Pysa will only analyze the code in the repo that it runs on, as well as code in\ndirectories listed in the ",Object(s.b)("inlineCode",{parentName:"p"},"search_path")," of your\n",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/configuration"}),Object(s.b)("inlineCode",{parentName:"a"},".pyre_configuration"))," file. It does not see the source of\nyour dependencies. ",Object(s.b)("strong",{parentName:"p"},"Just because")," ",Object(s.b)("strong",{parentName:"p"},Object(s.b)("em",{parentName:"strong"},"you"))," ",Object(s.b)("strong",{parentName:"p"},"can see code in your editor, it\ndoes not mean Pysa has access to that code during analysis.")," Because of this\nlimitation, Pysa makes some simplifying assumptions during static analysis. If\ntaint flows into a function Pysa doesn't have the source for, it will assume\nthat the return type of that function has the same taint. This helps prevents\nfalse negatives, but can also lead to false positives."),Object(s.b)("p",null,"When an object is tainted, that means that all attributes of that object are\nalso tainted. Note that this can lead to false positives, such as taint flows\nthat include ",Object(s.b)("inlineCode",{parentName:"p"},"some_obj.__class__"),". This means that Pysa will detect all the\nfollowing flows:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"x = some_source() # 'x' is marked as tainted\n\nsome_sink(x) # This is detected\nsome_sink(x.some_attribute) # This is also detected\nsome_sink(x.__class__) # This is (unfortunately) also detected\n")),Object(s.b)("h2",{id:"configuration"},"Configuration"),Object(s.b)("p",null,"Pysa uses two types of files for configuration: a single ",Object(s.b)("inlineCode",{parentName:"p"},"taint.config")," file,\nand an unlimited number of files with a ",Object(s.b)("inlineCode",{parentName:"p"},".pysa")," extension. The ",Object(s.b)("inlineCode",{parentName:"p"},"taint.config"),"\nfile is a JSON document which stores definitions for Sources, Sinks, Features,\nand Rules (discussed below). The ",Object(s.b)("inlineCode",{parentName:"p"},".pysa")," files are stub files (elaborated on\nbelow) which annotate your code with the Sources, Sinks, and Features defined in\nyour ",Object(s.b)("inlineCode",{parentName:"p"},"taint.config")," file. Examples of these files can be found in the ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/facebook/pyre-check/tree/master/stubs/taint"}),"pyre\nrepository"),"."),Object(s.b)("p",null,"These files live in the directory configured by ",Object(s.b)("inlineCode",{parentName:"p"},"taint_models_path")," in your\n",Object(s.b)("inlineCode",{parentName:"p"},".pyre_configuration")," file. Any ",Object(s.b)("inlineCode",{parentName:"p"},".pysa")," file found in this folder will be parsed\nby Pysa and the stubs will be used during the analysis."),Object(s.b)("h2",{id:"sources"},"Sources"),Object(s.b)("p",null,"Sources are where tainted data originates. They are declared in your\n",Object(s.b)("inlineCode",{parentName:"p"},"taint.config")," file like this:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),'sources: [\n    {\n        name: "Cookies",\n        comment: "used to annotate cookie sources"\n    },\n]\n')),Object(s.b)("p",null,"Stubs that indicate what is a source are then defined in ",Object(s.b)("inlineCode",{parentName:"p"},".pysa")," files. Sources\nare declared in the same places that ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.python.org/3/library/typing.html"}),"types are declared in Python\n3"),". Function return types,\nclass/model attributes, and even entire classes can be declared as sources by\nadding ",Object(s.b)("inlineCode",{parentName:"p"},"TaintSource[SOURCE_NAME]")," wherever you would add a python type:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"# Function return source\ndef django.http.request.HttpRequest.get_signed_cookie(\n    self,\n    key,\n    default=...,\n    salt=...,\n    max_age=...\n) -> TaintSource[Cookies]: ...\n\n# Class attribute source:\ndjango.http.request.HttpRequest.COOKIES: TaintSource[Cookies] = ...\n")),Object(s.b)("p",null,"When tainting an entire class, any return from a method or access of an\nattribute of the class will count as a returning tainted data. The specifics of\nthese stub files are discussed further in the Stubs section."),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"# Class source:\nclass BaseException(TaintSource[Exception]): ...\n")),Object(s.b)("p",null,"When tainting indexable return types such as ",Object(s.b)("inlineCode",{parentName:"p"},"Dict"),"s, ",Object(s.b)("inlineCode",{parentName:"p"},"List"),"s, and ",Object(s.b)("inlineCode",{parentName:"p"},"Tuple"),"s, the\n",Object(s.b)("inlineCode",{parentName:"p"},"AppliesTo")," syntax can be used to only mark a portion of the return type as\ntainted:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),'def applies_to_index.only_applies_to_nested() -> AppliesTo[0, AppliesTo[1, TaintSource[Test]]]: ...\ndef applies_to_index.only_applies_to_a_key() -> AppliesTo["a", TaintSource[Test]]: ...\n')),Object(s.b)("h2",{id:"sinks"},"Sinks"),Object(s.b)("p",null,"Sinks are where tainted data terminates. They are declared in your\n",Object(s.b)("inlineCode",{parentName:"p"},"taint.config")," file like this:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),'sinks: [\n  {\n    name: "SQL",\n    comment: "use to annotate places of SQL injection risk"\n  }\n]\n')),Object(s.b)("p",null,"Stubs that indicate what is a sink are then defined in ",Object(s.b)("inlineCode",{parentName:"p"},".pysa")," files. Sinks can\nbe added to the same files as sources. Sinks are declared in the same places\nthat ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.python.org/3/library/typing.html"}),"types are declared in Python\n3"),". Function parameters and even\nwhole classes can be declared as sinks by adding ",Object(s.b)("inlineCode",{parentName:"p"},"TaintSink[SINK_NAME]")," where\nyou would add a python type:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"# Function parameter sink\ndef sqlite3.dbapi2.Cursor.execute(self, sql: TaintSink[SQL], parameters): ...\n")),Object(s.b)("p",null,"When tainting an entire class, any flow into a method or attribute of the class\nwill count as a flow to a taint sink. The specifics of these stub files are\ndiscussed further in the Stubs section."),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"# Entire class sink\nclass BaseException(TaintSink[Logging]): ...\n")),Object(s.b)("h3",{id:"implicit-sinks"},"Implicit Sinks"),Object(s.b)("p",null,"Implicit sinks are program expressions that we want to act as sinks, but that\ncannot be specified via taint signatures in ",Object(s.b)("inlineCode",{parentName:"p"},".pysa")," files.  Currently, only\nconditional tests are supported as implicit sinks. This allows writing rules\nthat track whether a particular source is used in a conditional test\nexpression."),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"implicit_sinks: {\n  conditional_test: [ <your kind> ]\n}\n")),Object(s.b)("h2",{id:"rules"},"Rules"),Object(s.b)("p",null,"Rules declare which flows from source to sink we are concerned about. They are\ndeclared in your ",Object(s.b)("inlineCode",{parentName:"p"},"taint.config")," file like this:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),'rules: [\n  {\n    name: "SQL injection.",\n    code: 1,\n    sources: [ "UserControlled" ],\n    sinks: [ "SQL" ],\n    message_format: "Data from [{$sources}] source(s) may reach [{$sinks}] sink(s)"\n  }\n]\n')),Object(s.b)("p",null,"Each rule needs a brief ",Object(s.b)("inlineCode",{parentName:"p"},"name")," that explains its purpose and a ",Object(s.b)("em",{parentName:"p"},"unique")," ",Object(s.b)("inlineCode",{parentName:"p"},"code"),".\nThe rule must define a list of one or more ",Object(s.b)("inlineCode",{parentName:"p"},"sources"),", which we are concerned\nabout flowing into one or more ",Object(s.b)("inlineCode",{parentName:"p"},"sinks"),". ",Object(s.b)("inlineCode",{parentName:"p"},"message_format")," can further explain the\nissue. When a flow is detected the ",Object(s.b)("inlineCode",{parentName:"p"},"{$sources}")," and ",Object(s.b)("inlineCode",{parentName:"p"},"{$sinks}")," variables will be\nreplaced with the name of the specific source(s) and sink(s) that were involved\nin the detected flow."),Object(s.b)("h2",{id:"sanitizers"},"Sanitizers"),Object(s.b)("p",null,"Sanitizers break a taint flow by removing taint from data. Stubs that indicate\nsanitizing functions are defined in ",Object(s.b)("inlineCode",{parentName:"p"},".pysa")," files. Sanitizers can be added to\nthe same files as sources and sinks. Functions are declared as sanitizers by\nmarking their return type as ",Object(s.b)("inlineCode",{parentName:"p"},"Sanitize"),":"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"# Sanitizer function\ndef django.utils.html.escape(text) -> Sanitize: ...\n")),Object(s.b)("p",null,"This annotation is useful in the case of explicit sanitizers such as ",Object(s.b)("inlineCode",{parentName:"p"},"escape"),",\nwhich helps prevent cross site scripting (XSS) by escaping HTML characters. The\nannotation is also useful, however, in cases where a function is not intended to\nsanitize inputs, but is known to always return safe data despite touching\ntainted data. One such example could be ",Object(s.b)("inlineCode",{parentName:"p"},"hmac.digest(key, msg, digest)"),", which\nreturns sufficiently unpredictable data that the data should no longer be\nconsidered attacker-controlled after passing through."),Object(s.b)("p",null,"Class attributes can also be marked as sanitizers with the ",Object(s.b)("inlineCode",{parentName:"p"},"Sanitize"),"\nannotation. This will prevent the propagation of any taint assigned to that\nattribute on an instance of the class. For example, this sanitizer could remove\na false positive flow through an obviously benign attribute like ",Object(s.b)("inlineCode",{parentName:"p"},"__doc__"),":"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"object.__doc__: Sanitize = ...\n")),Object(s.b)("p",null,"Note that sanitizers are currently universal, meaning that they remove all taint\nand can't be restricted to a specific rule or individual source to sink flows.\nThis means you need to ensure you aren't potentially affecting other flows when\nyou add a sanitizer for a flow you care about. For this reason, the above\nsanitizer examples might not be a good idea to use. If you are trying to track\nflows where SQL injection occurs, the ",Object(s.b)("inlineCode",{parentName:"p"},"escape")," sanitizer would prevent you\nfrom seeing any flows where data going into your SQL query happened to be html\nescaped."),Object(s.b)("h2",{id:"taint-propagation"},"Taint Propagation"),Object(s.b)("p",null,"Sometimes the features discussed in the Taint Analysis section are not enough to\ndetect all taint flows. In particular, Pysa relies on additional annotations to\nhelp it understand when an object is tainted via a function call or when a\nfunction call on a tainted object returns tainted data. Taint propagation is\ndefined by adding ",Object(s.b)("inlineCode",{parentName:"p"},"TaintInTaintOut")," annotations to stubs in ",Object(s.b)("inlineCode",{parentName:"p"},".pysa")," files."),Object(s.b)("p",null,"When a function call taints an object, such as when you update a dictionary with\na tainted value, Pysa needs a ",Object(s.b)("inlineCode",{parentName:"p"},"TaintInTaintOut")," annotation that indicates\n",Object(s.b)("inlineCode",{parentName:"p"},"Updates[self]"),":"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"def dict.update(self, __m: TaintInTaintOut[Updates[self]]): ...\n")),Object(s.b)("p",null,"When a function call on a tainted object returns taint, such as when you\nretrieve a value from a dictionary, Pysa needs a ",Object(s.b)("inlineCode",{parentName:"p"},"TaintInTaintOut")," annotation\nthat indicates ",Object(s.b)("inlineCode",{parentName:"p"},"LocalReturn"),":"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"def dict.get(self: TaintInTaintOut[LocalReturn], key, default = ...): ...\n")),Object(s.b)("h2",{id:"features"},"Features"),Object(s.b)("p",null,"Features annotations are also placed in your ",Object(s.b)("inlineCode",{parentName:"p"},"taint.config")," and ",Object(s.b)("inlineCode",{parentName:"p"},".pysa")," files.\nThis is a larger topic and will be covered in detail on ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/pysa-features"}),"its own page"),"."),Object(s.b)("h2",{id:"stub-files"},"Stub files"),Object(s.b)("h3",{id:"usage"},"Usage"),Object(s.b)("p",null,"By default, Pysa computes an inferred model for each function and combines it\nwith any declared models in ",Object(s.b)("inlineCode",{parentName:"p"},".pysa")," files (of which there can be more than one).\nThe union of these models and their annotations will be used. For example,\ncookies are both user controlled and potentially sensitive to log, and Pysa\nallows us apply two different annotations to them:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"django.http.request.HttpRequest.COOKIES: TaintSource[UserControlled] = ...\ndjango.http.request.HttpRequest.COOKIES: TaintSource[Cookies] = ...\n")),Object(s.b)("p",null,"There are other stub files with the ",Object(s.b)("inlineCode",{parentName:"p"},".pyi")," extension which can also exist in\nyour codebase. These ",Object(s.b)("inlineCode",{parentName:"p"},".pyi")," stubs are similar and use ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.python.org/dev/peps/pep-0484/#stub-files"}),"the same\nsyntax")," as the ",Object(s.b)("inlineCode",{parentName:"p"},".pysa"),'\nstubs, but are not the stubs that are referred to in this document (though they\nare relevant to static analysis). See the "Stubs" section of the ',Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/gradual-typing"}),"Gradual Typing\npage")," for more info."),Object(s.b)("h3",{id:"requirements-and-features"},"Requirements and Features"),Object(s.b)("h4",{id:"fully-qualified-names"},"Fully qualified names"),Object(s.b)("p",null,"Any declarations in ",Object(s.b)("inlineCode",{parentName:"p"},".pysa")," files must use the fully qualified name for the\nfunction/attribute they are attempting to annotate. You can usually find the\nfully qualified name for a type by looking at how it is imported, however, it's\nimportant to note that fully qualified names correspond to where something is\ndeclared, not necessarily where it is imported from. For example, you can import\n",Object(s.b)("inlineCode",{parentName:"p"},"HttpRequest")," directly from the ",Object(s.b)("inlineCode",{parentName:"p"},"django.http")," module, even though it is defined in\n",Object(s.b)("inlineCode",{parentName:"p"},"django.http.request"),". If you wanted to taint an attribute of ",Object(s.b)("inlineCode",{parentName:"p"},"HttpRequest"),",\nyou would need to use the module in which it was defined:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"django.http.request.HttpRequest.GET: TaintSource[UserControlled] = ...\n")),Object(s.b)("h4",{id:"exact-signatures"},"Exact Signatures"),Object(s.b)("p",null,"The signatures of any stub functions need to exactly match the the signature of\nthe function definition. This means that all parameters, including optional\nparameters, ",Object(s.b)("inlineCode",{parentName:"p"},"*args"),", and ",Object(s.b)("inlineCode",{parentName:"p"},"**kwargs")," must be present. The default value of\noptional parameters, however, can be elided (see below). Additionally, if a\nfunction includes an asterisk that indicates ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.python.org/dev/peps/pep-3102/"}),"keyword only\narguments"),", then that should be\npresent too. So for example, ",Object(s.b)("inlineCode",{parentName:"p"},"urllib.request.urlopen")," has the following\nsignature:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"def urlopen(url, data=None, timeout=socket._GLOBAL_DEFAULT_TIMEOUT, *, cafile=None,\n            capath=None, cadefault=False, context=None):\n")),Object(s.b)("p",null,"That function would be annotated like this:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),"def urllib.request.urlopen(url: TaintSink[RequestSend], data = ...,\n                           timeout = ..., *, cafile = ..., capath = ...,\n                           cadefault = ..., context = ...): ...\n")),Object(s.b)("p",null,"Pysa will complain if the signature of your stub doesn't exactly match the\nimplementation. When working with functions defined outside your project, where\nyou don't directly see the source. You can use ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/querying-pyre"}),Object(s.b)("inlineCode",{parentName:"a"},"pyre query")),"\nwith the ",Object(s.b)("inlineCode",{parentName:"p"},"signature")," argument to have Pysa dump it's internal model of a\nfunction, so you know exactly how to write your model."),Object(s.b)("h4",{id:"eliding"},"Eliding"),Object(s.b)("p",null,"As you can see from the above examples, defaulted values and function bodies can\nboth be elided with ",Object(s.b)("inlineCode",{parentName:"p"},"..."),". Additionally, type annotations ",Object(s.b)("em",{parentName:"p"},"must")," be entirely\nomitted (not replaced with ",Object(s.b)("inlineCode",{parentName:"p"},"..."),"), even when present on the declaration of the\nfunction. This is done to make parsing taint annotations unambiguous."))}p.isMDXComponent=!0},171:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var a=n(0),i=n.n(a);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),p=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=p(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),b=a,h=u["".concat(o,".").concat(b)]||u[b]||d[b]||s;return n?i.a.createElement(h,r(r({ref:t},c),{},{components:n})):i.a.createElement(h,r({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=b;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:a,o[1]=r;for(var c=2;c<s;c++)o[c]=n[c];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);