(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{86:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return b}));var r,o=n(3),a=n(7),i=(n(0),n(91)),c={id:"pysa-model-generators",title:"Dynamically Generating Models",sidebar_label:"Dynamically Generating Models"},s={unversionedId:"pysa-model-generators",id:"pysa-model-generators",isDocsHomePage:!1,title:"Dynamically Generating Models",description:"Some sources and sinks may be too numerous or too rapidly changing for defining",source:"@site/docs/pysa_precollectors.md",slug:"/pysa-model-generators",permalink:"/docs/pysa-model-generators",editUrl:"https://github.com/facebook/pyre-check/tree/master/documentation/website/docs/pysa_precollectors.md",version:"current",sidebar_label:"Dynamically Generating Models",sidebar:"pysa",previous:{title:"Advanced Topics",permalink:"/docs/pysa-advanced"},next:{title:"Model Domain Specific Language (DSL)",permalink:"/docs/pysa-model-dsl"}},l=[{value:"Running Model Generators",id:"running-model-generators",children:[]},{value:"Example Model Generators",id:"example-model-generators",children:[{value:"RESTApiSourceGenerator",id:"restapisourcegenerator",children:[]},{value:"ExitNodeGenerator",id:"exitnodegenerator",children:[]},{value:"GraphQLSourceGenerator",id:"graphqlsourcegenerator",children:[]},{value:"AnnotatedFreeFunctionWithDecoratorGenerator",id:"annotatedfreefunctionwithdecoratorgenerator",children:[]}]},{value:"Writing Model Generators",id:"writing-model-generators",children:[{value:"Adding a new model generator",id:"adding-a-new-model-generator",children:[]}]}],p=(r="InternalModelGenerators",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),Object(i.b)("div",e)}),d={rightToc:l};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Some sources and sinks may be too numerous or too rapidly changing for defining\nthem statically to be practical. For these scenarios, Pysa has the concept of\nmodel generators, which can generate taint models by reading the project's source code before static analysis is\nstarted. The current set of model generators is stored in\n",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/facebook/pyre-check/tree/master/tools/generate_taint_models"}),Object(i.b)("inlineCode",{parentName:"a"},"tools/generate_taint_models")),"\nwithin the pyre-check repository."),Object(i.b)("p",null,"Pysa now has the concept of a ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/pysa-model-dsl"}),"Model DSL"),", which supports\nsome model generation usecases which could previously only be done with model\ngenerators. You should prefer the Model DSL if it supports your usecase."),Object(i.b)("h2",{id:"running-model-generators"},"Running Model Generators"),Object(i.b)("p",null,"The majority of model generators require access to a running environment. For\nexample, the ",Object(i.b)("inlineCode",{parentName:"p"},"RESTApiSourceGenerator")," needs to be able to access ",Object(i.b)("inlineCode",{parentName:"p"},"urlpatterns"),"\nconfigured for Django, meaning it has to import (and implicitly run) the file\nyou use to configure routing. The recommended way to run model generators is to set\nup a small script within your repository that can run within the virtual\nenvironment for your project. ",Object(i.b)("strong",{parentName:"p"},Object(i.b)("a",Object(o.a)({parentName:"strong"},{href:"https://github.com/facebook/pyre-check/tree/master/documentation/pysa_tutorial/exercise5"}),"This tutorial\nexercise"),"\nprovides an example of how to setup and use model generators.")),Object(i.b)("h2",{id:"example-model-generators"},"Example Model Generators"),Object(i.b)("p",null,"The set of model generators is always changing, but below are some examples of\nmodel generators which are currently provided out of the box with Pysa."),Object(i.b)("h3",{id:"restapisourcegenerator"},Object(i.b)("a",Object(o.a)({parentName:"h3"},{href:"https://github.com/facebook/pyre-check/blob/master/tools/generate_taint_models/get_REST_api_sources.py"}),Object(i.b)("inlineCode",{parentName:"a"},"RESTApiSourceGenerator"))),Object(i.b)("p",null,"This model generator is intended to taint all arguments to ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://docs.djangoproject.com/en/2.2/topics/http/views/"}),"Django view\nfunctions")," as\n",Object(i.b)("inlineCode",{parentName:"p"},"UserControlled"),". This is useful when you have views that receive\nuser-controlled data as arguments separate from the ",Object(i.b)("inlineCode",{parentName:"p"},"HttpRequest")," parameter,\nsuch as when ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://docs.djangoproject.com/en/2.2/topics/http/urls/#example"}),"capturing values from the request\npath"),"."),Object(i.b)("h3",{id:"exitnodegenerator"},Object(i.b)("a",Object(o.a)({parentName:"h3"},{href:"https://github.com/facebook/pyre-check/blob/master/tools/generate_taint_models/get_exit_nodes.py"}),Object(i.b)("inlineCode",{parentName:"a"},"ExitNodeGenerator"))),Object(i.b)("p",null,"This generator is intended to taint all data returned from ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://docs.djangoproject.com/en/2.2/topics/http/views/"}),"Django view\nfunctions")," as\n",Object(i.b)("inlineCode",{parentName:"p"},"ReturnedToUser"),". This is useful when you have decorators which allow your view\nfunctions to return raw python types, rather than ",Object(i.b)("inlineCode",{parentName:"p"},"HttpResponse")," objects. Note\nthat you do not need this generator if you always construct ",Object(i.b)("inlineCode",{parentName:"p"},"HttpResponse"),"\nobjects, because they are already annotated as ",Object(i.b)("inlineCode",{parentName:"p"},"ReturnedToUser")," sinks."),Object(i.b)("h3",{id:"graphqlsourcegenerator"},Object(i.b)("a",Object(o.a)({parentName:"h3"},{href:"https://github.com/facebook/pyre-check/blob/master/tools/generate_taint_models/get_graphql_sources.py"}),Object(i.b)("inlineCode",{parentName:"a"},"GraphQLSourceGenerator"))),Object(i.b)("p",null,"This model generator is similar to the ",Object(i.b)("inlineCode",{parentName:"p"},"RESTApiSourceGenerator")," and\n",Object(i.b)("inlineCode",{parentName:"p"},"ExitNodeGenerator")," discussed above, but it is intended to generate models with\n",Object(i.b)("inlineCode",{parentName:"p"},"UserControlled")," and ",Object(i.b)("inlineCode",{parentName:"p"},"ReturnedToUser")," annotations for graphene-style GraphQL\n",Object(i.b)("inlineCode",{parentName:"p"},"resolver")," functions."),Object(i.b)("h3",{id:"annotatedfreefunctionwithdecoratorgenerator"},Object(i.b)("a",Object(o.a)({parentName:"h3"},{href:"https://github.com/facebook/pyre-check/blob/master/tools/generate_taint_models/get_annotated_free_functions_with_decorator.py"}),Object(i.b)("inlineCode",{parentName:"a"},"AnnotatedFreeFunctionWithDecoratorGenerator"))),Object(i.b)("p",null,"This model generator provides general purpose functionality to annotate all free\nfunctions which have a given decorator. The annotations can be used to mark any\nof the function's arguments or return types as sources, sinks, features, etc.\nThis is useful whenever you have a function which modifies taint analysis\nexpectations. For example, if you had a decorator which applies rate limiting to\nfunctions, you could use this model generator to add a feature to all flow passing\nthrough rate limited functions, to enable you to filter them out from a given\nrule."),Object(i.b)("h2",{id:"writing-model-generators"},"Writing Model Generators"),Object(i.b)("p",null,"All model generator code lives in\n",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/facebook/pyre-check/tree/master/tools/generate_taint_models"}),Object(i.b)("inlineCode",{parentName:"a"},"tools/generate_taint_models")),"\nwithin the pyre-check repository."),Object(i.b)("h3",{id:"adding-a-new-model-generator"},"Adding a new model generator"),Object(i.b)("p",null,Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/facebook/pyre-check/commit/ea900c5e77d4c6d951e9c42b7310613f7f6edf08#diff-9ef72470683730531933e74a50ea98a1"}),"This commit"),"\nprovides an example of how to add a new model generator."),Object(i.b)("p",null,"The basic workflow is:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Create a new file under ",Object(i.b)("inlineCode",{parentName:"li"},"generate_taint_models")," of the form ",Object(i.b)("inlineCode",{parentName:"li"},"get_<pattern of model>"),"."),Object(i.b)("li",{parentName:"ol"},"Write a class that inherits from ",Object(i.b)("a",Object(o.a)({parentName:"li"},{href:"https://github.com/facebook/pyre-check/blob/master/tools/generate_taint_models/model_generator.py"}),"ModelGenerator"),"."),Object(i.b)("li",{parentName:"ol"},"Collect all the callables you're interested in modeling via ",Object(i.b)("inlineCode",{parentName:"li"},"gather_functions_to_model"),"."),Object(i.b)("li",{parentName:"ol"},"Convert the callables you've collected into models. The ",Object(i.b)("a",Object(o.a)({parentName:"li"},{href:"https://github.com/facebook/pyre-check/blob/master/tools/generate_taint_models/model.py"}),"CallableModel")," class is a convenience that pretty prints things in the right way - you just need to specify what kind of taint the parameters and return value should have, specify the callable to model, and call generate()."),Object(i.b)("li",{parentName:"ol"},"Write unit tests (",Object(i.b)("a",Object(o.a)({parentName:"li"},{href:"https://github.com/facebook/pyre-check/blob/922410239404aa436691754402b0c3db68c5a46f/tools/generate_taint_models/tests/get_annotated_free_functions_with_decorator_test.py"}),"example"),")."),Object(i.b)("li",{parentName:"ol"},"Import your new class in the ",Object(i.b)("inlineCode",{parentName:"li"},"__init__")," file (",Object(i.b)("a",Object(o.a)({parentName:"li"},{href:"https://github.com/facebook/pyre-check/blob/922410239404aa436691754402b0c3db68c5a46f/tools/generate_taint_models/__init__.py#L7"}),"example"),").")),Object(i.b)(p,{mdxType:"InternalModelGenerators"}))}b.isMDXComponent=!0},91:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(n),u=r,m=d["".concat(i,".").concat(u)]||d[u]||b[u]||a;return n?o.a.createElement(m,c(c({ref:t},l),{},{components:n})):o.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);