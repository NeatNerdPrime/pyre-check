(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{70:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return s})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return d}));var n=a(2),i=a(6),r=(a(0),a(80)),o={id:"pysa-features",title:"Feature Annotations",sidebar_label:"Feature Annotations"},s={unversionedId:"pysa-features",id:"pysa-features",isDocsHomePage:!1,title:"Feature Annotations",description:"Features (sometimes called breadcrumbs) are additional metadata that are",source:"@site/../docs/pysa_features.md",permalink:"/docs/pysa-features",sidebar_label:"Feature Annotations",sidebar:"overview",previous:{title:"Running Pysa",permalink:"/docs/pysa-running"},next:{title:"Advanced Topics",permalink:"/docs/pysa-advanced"}},l=[{value:"Manually Added Features",id:"manually-added-features",children:[{value:"<code>via</code> Feature Using <code>Via[]</code>",id:"via-feature-using-via",children:[]},{value:"<code>via-value</code> Feature Using <code>ViaValueOf[]</code>",id:"via-value-feature-using-viavalueof",children:[]}]},{value:"Automatic Features",id:"automatic-features",children:[{value:"<code>via</code> Feature",id:"via-feature",children:[]},{value:"<code>type</code> Feature",id:"type-feature",children:[]},{value:"<code>first-field</code> Feature",id:"first-field-feature",children:[]},{value:"<code>first-index</code> Feature",id:"first-index-feature",children:[]},{value:"<code>has</code> Feature",id:"has-feature",children:[]},{value:"<code>always-</code> Modifier on Features",id:"always--modifier-on-features",children:[]}]}],c={rightToc:l};function d(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Features (sometimes called breadcrumbs) are additional metadata that are\nassociated with taint flows. They can be useful for helping to filter out false\npositives, or for zeroing in on high-signal subsets of a rule. Some are\nautomatically added during the analysis process, and there is a rich system for\nmanually specifying additional features."),Object(r.b)("h2",{id:"manually-added-features"},"Manually Added Features"),Object(r.b)("h3",{id:"via-feature-using-via"},Object(r.b)("inlineCode",{parentName:"h3"},"via")," Feature Using ",Object(r.b)("inlineCode",{parentName:"h3"},"Via[]")),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"via")," feature indicates that a flow passed through a point in the code, such\nas a function parameter, that was annotated with the specified feature name. For\nexample, ",Object(r.b)("inlineCode",{parentName:"p"},"via:getattr")," might indicate that the flow passed through a call to\n",Object(r.b)("inlineCode",{parentName:"p"},"getattr")),Object(r.b)("p",null,"Feature names are declared in your ",Object(r.b)("inlineCode",{parentName:"p"},"taint.config")," file (the same file as\nsources/sinks/rules) like this:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),'features: [\n    {\n        name: "getattr",\n        comment: "via getattr first parameter"\n    },\n    {\n        name: "request_files",\n        comment: "via django request.FILES"\n    }\n]\n')),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"via")," feature can be appended to ",Object(r.b)("inlineCode",{parentName:"p"},"TaintSource"),", ",Object(r.b)("inlineCode",{parentName:"p"},"TaintSink")," and\n",Object(r.b)("inlineCode",{parentName:"p"},"TaintInTaintOut")," annotations, to add extra metadata to any flow that goes\nthrough that annotated function/parameter/attribute. This is done by adding\n",Object(r.b)("inlineCode",{parentName:"p"},"Via[FEATURE_NAME]")," within square brackets after the ",Object(r.b)("inlineCode",{parentName:"p"},"TaintXXXX")," annotation in a\nstubs file:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),"# Augmenting TaintSource\ndjango.http.request.HttpRequest.FILES: TaintSource[UserControlled, Via[request_files]] = ...\n\n# Augmenting TaintInTaintOut\ndef getattr(\n    o: TaintInTaintOut[Via[getattr]],\n    name: TaintSink[GetAttr],\n    default: TaintInTaintOut[LocalReturn],\n): ...\n")),Object(r.b)("p",null,"Pysa also supports attaching features to inferred flows, which allows you to\nfilter flows passing through a function without having to annotate the taint\nyourself explicitly, and having the feature attached to all taint flowing\nthrough the function. This is done by adding the ",Object(r.b)("inlineCode",{parentName:"p"},"AttachToSource"),",\n",Object(r.b)("inlineCode",{parentName:"p"},"AttachToSink"),", and ",Object(r.b)("inlineCode",{parentName:"p"},"AttachToTito")," annotations in a stubs file:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),"# Attaching taint to sources.\ndef get_signed_cookie() -> AttachToSource[Via[signed]]: ...\n\n# Attaching taint to sinks.\ndef HttpResponseRedirect.__init__(self, redirect_to: AttachToSink[Via[redirect]], *args, **kwargs): ...\n\n# Attaching taint to taint-in-taint-out models.\ndef attach_features.tito_and_sink(arg: AttachToTito[Via[some_feature_name]]): ...\n")),Object(r.b)("p",null,"Pysa additionally supports attaching features to flows irrespective of sources,\nsinks, and TITO, using the ",Object(r.b)("inlineCode",{parentName:"p"},"AddFeatureToArgument")," annotation:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),"def add_feature_to_argument.add_feature_to_first(\n  first: AddFeatureToArgument[Via[string_concat_lhs]],\n  second\n): ...\n")),Object(r.b)("p",null,"Note that ",Object(r.b)("strong",{parentName:"p"},"Pysa automatically adds some ",Object(r.b)("inlineCode",{parentName:"strong"},"via")," features with special meaning"),".\nSee the Automatic Features section for details."),Object(r.b)("h3",{id:"via-value-feature-using-viavalueof"},Object(r.b)("inlineCode",{parentName:"h3"},"via-value")," Feature Using ",Object(r.b)("inlineCode",{parentName:"h3"},"ViaValueOf[]")),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"via-value")," feature is similar to the ",Object(r.b)("inlineCode",{parentName:"p"},"via")," feature, however, it captures\n",Object(r.b)("em",{parentName:"p"},"the value of the specified argument, rather than a feature name"),". Note that\nthis only works for string literals and enums. For example,\n",Object(r.b)("inlineCode",{parentName:"p"},"via-value:Access-Control-Allow-Origin")," might indicate that the string literal\n",Object(r.b)("inlineCode",{parentName:"p"},"Access-Control-Allow-Origin")," was used to set a header in a Django response."),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"via-value")," feature can be added anywhere that the ",Object(r.b)("inlineCode",{parentName:"p"},"via")," feature can be\nadded. It is added by specifying ",Object(r.b)("inlineCode",{parentName:"p"},"ViaValueOf[PARAMETER_NAME]"),", where\n",Object(r.b)("inlineCode",{parentName:"p"},"PARAMETER_NAME")," is the name of the function parameter for which you would like\nto capture the argument value. To continue the above example, this is how you\nwould capture the name of a header being set on a Django ",Object(r.b)("inlineCode",{parentName:"p"},"HttpResponse"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),"def django.http.response.HttpResponse.__setitem__(\n    self,\n    header: TaintSink[ResponseHeaderName],\n    value: TaintSink[ResponseHeaderValue, ViaValueOf[header]]\n): ...\n")),Object(r.b)("h2",{id:"automatic-features"},"Automatic Features"),Object(r.b)("h3",{id:"via-feature"},Object(r.b)("inlineCode",{parentName:"h3"},"via")," Feature"),Object(r.b)("p",null,"In addition to the manually specified ",Object(r.b)("inlineCode",{parentName:"p"},"via")," features, Pysa automatically adds\nsome ",Object(r.b)("inlineCode",{parentName:"p"},"via")," features with special meaning such as ",Object(r.b)("inlineCode",{parentName:"p"},"via:obscure"),",\n",Object(r.b)("inlineCode",{parentName:"p"},"via:format-string"),", and ",Object(r.b)("inlineCode",{parentName:"p"},"via:tito"),". ",Object(r.b)("inlineCode",{parentName:"p"},"via:obscure")," means that the flow passed\nthrough code that Pysa does not have access to analyze, and thus some taint flow\nassumptions were made. This can be a useful to filter out flows that may be more\nnoisy. ",Object(r.b)("inlineCode",{parentName:"p"},"via:format-string")," means that a flow passed through a ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.python.org/dev/peps/pep-0498/"}),"python\nf-string")," (",Object(r.b)("inlineCode",{parentName:"p"},'f"Variable:\n{variable_name}"'),"). Tito stands for taint-in-taint-out which refers to taint\nflows that enter a function via a parameter and then exit it in some form via\nthe return value. The ",Object(r.b)("inlineCode",{parentName:"p"},"via:tito")," feature is attached automatically to all such\nflows."),Object(r.b)("h3",{id:"type-feature"},Object(r.b)("inlineCode",{parentName:"h3"},"type")," Feature"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"type")," feature is an automatically added feature which indicates that the\nflow passes through a conversion to the specified type. This feature currently\nonly tracks conversion to numeric values (ie. ",Object(r.b)("inlineCode",{parentName:"p"},"type:scalar"),"). This can be useful\nfor filtering out flows when numeric values are highly unlikely to result in an\nexploitable flow, such as SQL injection or RCE."),Object(r.b)("h3",{id:"first-field-feature"},Object(r.b)("inlineCode",{parentName:"h3"},"first-field")," Feature"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"first-field")," feature is automatically added to flows for the first field\naccess on the flow. E.g., if ",Object(r.b)("inlineCode",{parentName:"p"},"request")," is a source, and the flow starts with\n",Object(r.b)("inlineCode",{parentName:"p"},"request.f"),", then ",Object(r.b)("inlineCode",{parentName:"p"},"first-field:f")," should be attached to the flow."),Object(r.b)("h3",{id:"first-index-feature"},Object(r.b)("inlineCode",{parentName:"h3"},"first-index")," Feature"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"first-index")," feature is an automatically added feature which indicates that\na flow starts with a dictionary access using the specified constant as the key.\nThis is useful in cases such as Django's ",Object(r.b)("inlineCode",{parentName:"p"},"GET"),"/",Object(r.b)("inlineCode",{parentName:"p"},"POST"),"/",Object(r.b)("inlineCode",{parentName:"p"},"META")," dictionaries on the\n",Object(r.b)("inlineCode",{parentName:"p"},"HttpRequest")," object. A flow that started with as access of the ",Object(r.b)("inlineCode",{parentName:"p"},"HTTP_REFERER"),"\nheader from the ",Object(r.b)("inlineCode",{parentName:"p"},"META")," object would result in the ",Object(r.b)("inlineCode",{parentName:"p"},"first-index:HTTP_REFERER"),"\nfeature being added."),Object(r.b)("h3",{id:"has-feature"},Object(r.b)("inlineCode",{parentName:"h3"},"has")," Feature"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"has")," features is a summary feature for ",Object(r.b)("inlineCode",{parentName:"p"},"first-field")," and ",Object(r.b)("inlineCode",{parentName:"p"},"first-index"),".\nThus, ",Object(r.b)("inlineCode",{parentName:"p"},"has:first-index")," simply indicates that there is at least one\n",Object(r.b)("inlineCode",{parentName:"p"},"first-index:<name>")," feature present, and similarly for ",Object(r.b)("inlineCode",{parentName:"p"},"has:first-field"),"."),Object(r.b)("h3",{id:"always--modifier-on-features"},Object(r.b)("inlineCode",{parentName:"h3"},"always-")," Modifier on Features"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"always-")," modifier will automatically be added to any of the above features,\nwhen every single flow within an issue has the feature. For example, if an issue\ncaptures flows from three different sources of user input into a SQL sink, the\n",Object(r.b)("inlineCode",{parentName:"p"},"always-type:scalar")," modifier would be added if all three of those flows pass\nthrough a conversion to ",Object(r.b)("inlineCode",{parentName:"p"},"int")," before reaching the sink. Note that ",Object(r.b)("strong",{parentName:"p"},"the\n",Object(r.b)("inlineCode",{parentName:"strong"},"always-")," version of a feature is ",Object(r.b)("em",{parentName:"strong"},"exclusive")," with the non-",Object(r.b)("inlineCode",{parentName:"strong"},"always-")," version"),";\nif ",Object(r.b)("inlineCode",{parentName:"p"},"always-type:scalar")," is present, ",Object(r.b)("inlineCode",{parentName:"p"},"type:scalar")," will not be present."))}d.isMDXComponent=!0},80:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return f}));var n=a(0),i=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var c=i.a.createContext({}),d=function(e){var t=i.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=d(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(a),b=n,f=u["".concat(o,".").concat(b)]||u[b]||p[b]||r;return a?i.a.createElement(f,s(s({ref:t},c),{},{components:a})):i.a.createElement(f,s({ref:t},c))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=b;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var c=2;c<r;c++)o[c]=a[c];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"}}]);