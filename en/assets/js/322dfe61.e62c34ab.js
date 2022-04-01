"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[252],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return m}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),u=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(a),m=n,f=d["".concat(c,".").concat(m)]||d[m]||s[m]||o;return a?r.createElement(f,l(l({ref:t},p),{},{components:a})):r.createElement(f,l({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var u=2;u<o;u++)l[u]=a[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},3179:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return u},assets:function(){return p},toc:function(){return s},default:function(){return m}});var r=a(7462),n=a(3366),o=(a(7294),a(3905)),l=["components"],i={},c="DataframeToDB",u={unversionedId:"Python/DataframeToDB",id:"Python/DataframeToDB",title:"DataframeToDB",description:"Plataforma: -",source:"@site/proyects/Python/DataframeToDB.md",sourceDirName:"Python",slug:"/Python/DataframeToDB",permalink:"/en/proyects/Python/DataframeToDB",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Historial de proyectos",permalink:"/en/proyects/intro"},next:{title:"ETL Tarragona",permalink:"/en/proyects/Python/ETL Tarragona"}},p={},s=[{value:"Detalles",id:"detalles",level:2}],d={toc:s};function m(e){var t=e.components,i=(0,n.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"dataframetodb"},"DataframeToDB"),(0,o.kt)("p",null,"Plataforma: -"),(0,o.kt)("p",null,"Tipo: Proyecto Abierto"),(0,o.kt)("p",null,"Enlace: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/juanretamales/DataframeToDB"},"https://github.com/juanretamales/DataframeToDB")),(0,o.kt)("h2",{id:"detalles"},"Detalles"),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"dataframetodb",src:a(6297).Z,width:"606",height:"171"})),(0,o.kt)("p",null,"Para instalarlo tu puedes copiar la carpeta de dataframetodb en proyecto, o usar"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"pip install dataframetodb\n")),(0,o.kt)("p",null,"Tambi\xe9n puedes ver la publicaci\xf3n en: ",(0,o.kt)("a",{parentName:"p",href:"https://pypi.org/project/dataframetodb/"},"https://pypi.org/project/dataframetodb/")),(0,o.kt)("p",null,"Este proyecto consiste en la creaci\xf3n de una biblioteca que subiera r\xe1pidamente la informaci\xf3n de un dataframe a una base de datos, creando en el proceso la estructura y de ser posible, el mejor tipo de datos al momento de crear la tabla para la inserci\xf3n."),(0,o.kt)("p",null,"DataframeToDB es una forma mejorada de cargar dataframes de pandas a Microsoft SQL Server, MySQL, PostgreDB u otros tipos de base de datos."),(0,o.kt)("p",null,"DataframeToDB aprovecha SQLAlchemy. Esto permite una importaci\xf3n mucho m\xe1s ligera para escribir dataframes de pandas en el servidor de base de datos."),(0,o.kt)("p",null,"Cu\xe1ndo usar:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Cuando necesite guardar marcos de datos, por ejemplo, al raspar muchas tablas"),(0,o.kt)("li",{parentName:"ul"},"Necesita una estructura de base de datos compartida para usar en proyectos"),(0,o.kt)("li",{parentName:"ul"},"Cuando necesites guardar varios excels (portados a dataframe) en una base de datos"),(0,o.kt)("li",{parentName:"ul"},"Cuando considere usar FastAPI (Con la compatibilidad con SQLAlchemy) (Trabajo en progreso)"),(0,o.kt)("li",{parentName:"ul"},"Cuando necesite crear una estructura de tabla por cualquier motivo")))}m.isMDXComponent=!0},6297:function(e,t,a){t.Z=a.p+"assets/images/dataframetodb-85a9e4474f1cbb3a4e2ee1018483ce97.png"}}]);