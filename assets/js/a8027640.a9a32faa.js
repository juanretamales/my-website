"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[921],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),s=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=s(r),m=n,b=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return r?a.createElement(b,i(i({ref:t},c),{},{components:r})):a.createElement(b,i({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:n,i[1]=u;for(var s=2;s<o;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5707:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return u},contentTitle:function(){return l},metadata:function(){return s},assets:function(){return c},toc:function(){return p},default:function(){return m}});var a=r(7462),n=r(3366),o=(r(7294),r(3905)),i=["components"],u={},l="Web en Github (con dominio)",s={unversionedId:"Otros/Web en GitHub",id:"Otros/Web en GitHub",title:"Web en Github (con dominio)",description:"Requisitos:",source:"@site/docs/Otros/Web en GitHub.md",sourceDirName:"Otros",slug:"/Otros/Web en GitHub",permalink:"/docs/Otros/Web en GitHub",editUrl:"https://github.com/juanretamales/my-website/tree/main/packages/create-docusaurus/templates/shared/docs/Otros/Web en GitHub.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ETL Tarragona",permalink:"/docs/Python/ETL Tarragona"}},c={},p=[{value:"Detalles",id:"detalles",level:2}],d={toc:p};function m(e){var t=e.components,r=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"web-en-github-con-dominio"},"Web en Github (con dominio)"),(0,o.kt)("p",null,"Requisitos:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Docusaurus u jekill"),(0,o.kt)("li",{parentName:"ul"},"Cuenta Cloudflare"),(0,o.kt)("li",{parentName:"ul"},"Cuenta Github"),(0,o.kt)("li",{parentName:"ul"},"Dominio personalizado")),(0,o.kt)("p",null,"Enlace: ",(0,o.kt)("a",{parentName:"p",href:"https://www.juanretamales.cl"},"https://www.juanretamales.cl")),(0,o.kt)("h2",{id:"detalles"},"Detalles"),(0,o.kt)("p",null,"Para instalarlo tu puedes copiar la carpeta de dataframetodb en proyecto, o usar"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"pip install dataframetodb\n")),(0,o.kt)("p",null,"Tambi\xe9n puedes ver la publicaci\xf3n en: ",(0,o.kt)("a",{parentName:"p",href:"https://pypi.org/project/dataframetodb/"},"https://pypi.org/project/dataframetodb/")),(0,o.kt)("p",null,"Este proyecto consiste en la creaci\xf3n de una biblioteca que subiera r\xe1pidamente la informaci\xf3n de un dataframe a una base de datos, creando en el proceso la estructura y de ser posible, el mejor tipo de datos al momento de crear la tabla para la inserci\xf3n."),(0,o.kt)("p",null,"DataframeToDB es una forma mejorada de cargar dataframes de pandas a Microsoft SQL Server, MySQL, PostgreDB u otros tipos de base de datos."),(0,o.kt)("p",null,"DataframeToDB aprovecha SQLAlchemy. Esto permite una importaci\xf3n mucho m\xe1s ligera para escribir dataframes de pandas en el servidor de base de datos."),(0,o.kt)("p",null,"Cu\xe1ndo usar:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Cuando necesite guardar marcos de datos, por ejemplo, al raspar muchas tablas"),(0,o.kt)("li",{parentName:"ul"},"Necesita una estructura de base de datos compartida para usar en proyectos"),(0,o.kt)("li",{parentName:"ul"},"Cuando necesites guardar varios excels (portados a dataframe) en una base de datos"),(0,o.kt)("li",{parentName:"ul"},"Cuando considere usar FastAPI (Con la compatibilidad con SQLAlchemy) (Trabajo en progreso)"),(0,o.kt)("li",{parentName:"ul"},"Cuando necesite crear una estructura de tabla por cualquier motivo")))}m.isMDXComponent=!0}}]);