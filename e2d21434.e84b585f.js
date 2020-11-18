(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{76:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(2),r=n(6),o=(n(0),n(81)),i={id:"pysa-model-generators",title:"Dynamically Generating Models",sidebar_label:"Dynamically Generating Models"},c={unversionedId:"pysa-model-generators",id:"pysa-model-generators",isDocsHomePage:!1,title:"Dynamically Generating Models",description:"Some sources and sinks may be too numerous or too rapidly changing for defining",source:"@site/docs/pysa_precollectors.md",permalink:"/docs/pysa-model-generators",sidebar_label:"Dynamically Generating Models",sidebar:"documentation",previous:{title:"Advanced Topics",permalink:"/docs/pysa-advanced"},next:{title:"Model Domain Specific Language (DSL)",permalink:"/docs/pysa-model-dsl"}},l=[{value:"Running Model Generators",id:"running-model-generators",children:[]},{value:"Example Model Generators",id:"example-model-generators",children:[{value:"RESTApiSourceGenerator",id:"restapisourcegenerator",children:[]},{value:"ExitNodeGenerator",id:"exitnodegenerator",children:[]},{value:"GraphQLSourceGenerator",id:"graphqlsourcegenerator",children:[]},{value:"AnnotatedFreeFunctionWithDecoratorGenerator",id:"annotatedfreefunctionwithdecoratorgenerator",children:[]}]},{value:"Writing Model Generators",id:"writing-model-generators",children:[{value:"Adding a new model generator",id:"adding-a-new-model-generator",children:[]}]}],s={rightToc:l};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Some sources and sinks may be too numerous or too rapidly changing for defining\nthem statically to be practical. For these scenarios, Pysa has the concept of\nmodel generators, which can generate taint models by reading the project's source code before static analysis is\nstarted. The current set of model generators is stored in\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/facebook/pyre-check/tree/master/tools/generate_taint_models"}),Object(o.b)("inlineCode",{parentName:"a"},"tools/generate_taint_models")),"\nwithin the pyre-check repository."),Object(o.b)("p",null,"Pysa now has the concept of a ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/pysa-model-dsl"}),"Model DSL"),", which supports\nsome model generation usecases which could previously only be done with model\ngenerators. You should prefer the Model DSL if it supports your usecase."),Object(o.b)("h2",{id:"running-model-generators"},"Running Model Generators"),Object(o.b)("p",null,"The majority of model generators require access to a running environment. For\nexample, the ",Object(o.b)("inlineCode",{parentName:"p"},"RESTApiSourceGenerator")," needs to be able to access ",Object(o.b)("inlineCode",{parentName:"p"},"urlpatterns"),"\nconfigured for Django, meaning it has to import (and implicitly run) the file\nyou use to configure routing. The recommended way to run model generators is to set\nup a small script within your repository that can run within the virtual\nenvironment for your project. ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",Object(a.a)({parentName:"strong"},{href:"https://github.com/facebook/pyre-check/tree/master/documentation/pysa_tutorial/exercise5"}),"This tutorial\nexercise"),"\nprovides an example of how to setup and use model generators.")),Object(o.b)("h2",{id:"example-model-generators"},"Example Model Generators"),Object(o.b)("p",null,"The set of model generators is always changing, but below are some examples of\nmodel generators which are currently provided out of the box with Pysa."),Object(o.b)("h3",{id:"restapisourcegenerator"},Object(o.b)("a",Object(a.a)({parentName:"h3"},{href:"https://github.com/facebook/pyre-check/blob/master/tools/generate_taint_models/get_REST_api_sources.py"}),Object(o.b)("inlineCode",{parentName:"a"},"RESTApiSourceGenerator"))),Object(o.b)("p",null,"This model generator is intended to taint all arguments to ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.djangoproject.com/en/2.2/topics/http/views/"}),"Django view\nfunctions")," as\n",Object(o.b)("inlineCode",{parentName:"p"},"UserControlled"),". This is useful when you have views that receive\nuser-controlled data as arguments separate from the ",Object(o.b)("inlineCode",{parentName:"p"},"HttpRequest")," parameter,\nsuch as when ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.djangoproject.com/en/2.2/topics/http/urls/#example"}),"capturing values from the request\npath"),"."),Object(o.b)("h3",{id:"exitnodegenerator"},Object(o.b)("a",Object(a.a)({parentName:"h3"},{href:"https://github.com/facebook/pyre-check/blob/master/tools/generate_taint_models/get_exit_nodes.py"}),Object(o.b)("inlineCode",{parentName:"a"},"ExitNodeGenerator"))),Object(o.b)("p",null,"This generator is intended to taint all data returned from ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.djangoproject.com/en/2.2/topics/http/views/"}),"Django view\nfunctions")," as\n",Object(o.b)("inlineCode",{parentName:"p"},"ReturnedToUser"),". This is useful when you have decorators which allow your view\nfunctions to return raw python types, rather than ",Object(o.b)("inlineCode",{parentName:"p"},"HttpResponse")," objects. Note\nthat you do not need this generator if you always construct ",Object(o.b)("inlineCode",{parentName:"p"},"HttpResponse"),"\nobjects, because they are already annotated as ",Object(o.b)("inlineCode",{parentName:"p"},"ReturnedToUser")," sinks."),Object(o.b)("h3",{id:"graphqlsourcegenerator"},Object(o.b)("a",Object(a.a)({parentName:"h3"},{href:"https://github.com/facebook/pyre-check/blob/master/tools/generate_taint_models/get_graphql_sources.py"}),Object(o.b)("inlineCode",{parentName:"a"},"GraphQLSourceGenerator"))),Object(o.b)("p",null,"This model generator is similar to the ",Object(o.b)("inlineCode",{parentName:"p"},"RESTApiSourceGenerator")," and\n",Object(o.b)("inlineCode",{parentName:"p"},"ExitNodeGenerator")," discussed above, but it is intended to generate models with\n",Object(o.b)("inlineCode",{parentName:"p"},"UserControlled")," and ",Object(o.b)("inlineCode",{parentName:"p"},"ReturnedToUser")," annotations for graphene-style GraphQL\n",Object(o.b)("inlineCode",{parentName:"p"},"resolver")," functions."),Object(o.b)("h3",{id:"annotatedfreefunctionwithdecoratorgenerator"},Object(o.b)("a",Object(a.a)({parentName:"h3"},{href:"https://github.com/facebook/pyre-check/blob/master/tools/generate_taint_models/get_annotated_free_functions_with_decorator.py"}),Object(o.b)("inlineCode",{parentName:"a"},"AnnotatedFreeFunctionWithDecoratorGenerator"))),Object(o.b)("p",null,"This model generator provides general purpose functionality to annotate all free\nfunctions which have a given decorator. The annotations can be used to mark any\nof the function's arguments or return types as sources, sinks, features, etc.\nThis is useful whenever you have a function which modifies taint analysis\nexpectations. For example, if you had a decorator which applies rate limiting to\nfunctions, you could use this model generator to add a feature to all flow passing\nthrough rate limited functions, to enable you to filter them out from a given\nrule."),Object(o.b)("h2",{id:"writing-model-generators"},"Writing Model Generators"),Object(o.b)("p",null,"All model generator code lives in\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/facebook/pyre-check/tree/master/tools/generate_taint_models"}),Object(o.b)("inlineCode",{parentName:"a"},"tools/generate_taint_models")),"\nwithin the pyre-check repository."),Object(o.b)("h3",{id:"adding-a-new-model-generator"},"Adding a new model generator"),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/facebook/pyre-check/commit/ea900c5e77d4c6d951e9c42b7310613f7f6edf08#diff-9ef72470683730531933e74a50ea98a1"}),"This commit"),"\nprovides an example of how to add a new model generator."),Object(o.b)("p",null,"The basic workflow is:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Create a new file under ",Object(o.b)("inlineCode",{parentName:"li"},"generate_taint_models")," of the form ",Object(o.b)("inlineCode",{parentName:"li"},"get_<pattern of model>"),"."),Object(o.b)("li",{parentName:"ol"},"Write a class that inherits from ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/facebook/pyre-check/blob/master/tools/generate_taint_models/model_generator.py"}),"ModelGenerator"),"."),Object(o.b)("li",{parentName:"ol"},"Collect all the callables you're interested in modeling via ",Object(o.b)("inlineCode",{parentName:"li"},"gather_functions_to_model"),"."),Object(o.b)("li",{parentName:"ol"},"Convert the callables you've collected into models. The ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/facebook/pyre-check/blob/master/tools/generate_taint_models/model.py"}),"CallableModel")," class is a convenience that pretty prints things in the right way - you just need to specify what kind of taint the parameters and return value should have, specify the callable to model, and call generate()."),Object(o.b)("li",{parentName:"ol"},"Register your class in the registry (",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/facebook/pyre-check/blob/922410239404aa436691754402b0c3db68c5a46f/tools/generate_taint_models/get_graphql_sources.py#L73-L75"}),"example"),")."),Object(o.b)("li",{parentName:"ol"},"Write unit tests (",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/facebook/pyre-check/blob/922410239404aa436691754402b0c3db68c5a46f/tools/generate_taint_models/tests/get_annotated_free_functions_with_decorator_test.py"}),"example"),")."),Object(o.b)("li",{parentName:"ol"},"Import your new class in the ",Object(o.b)("inlineCode",{parentName:"li"},"__init__")," file (",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/facebook/pyre-check/blob/922410239404aa436691754402b0c3db68c5a46f/tools/generate_taint_models/__init__.py#L7"}),"example"),").")))}p.isMDXComponent=!0},81:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(n),u=a,m=d["".concat(i,".").concat(u)]||d[u]||b[u]||o;return n?r.a.createElement(m,c(c({ref:t},s),{},{components:n})):r.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);