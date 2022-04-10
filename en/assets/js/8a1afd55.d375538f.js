"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[572],{3905:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return f}});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),c=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=c(e.components);return n.createElement(l.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(t),f=a,m=d["".concat(l,".").concat(f)]||d[f]||p[f]||o;return t?n.createElement(m,i(i({ref:r},u),{},{components:t})):n.createElement(m,i({ref:r},u))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},191:function(e,r,t){t.r(r),t.d(r,{assets:function(){return u},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var n=t(3117),a=t(102),o=(t(7294),t(3905)),i=["components"],s={},l=void 0,c={unversionedId:"Python/ETL Tarragona",id:"Python/ETL Tarragona",title:"ETL Tarragona",description:"Plataforma: Windows Server con Python 3.9 y SQL Server",source:"@site/proyects/Python/ETL Tarragona.md",sourceDirName:"Python",slug:"/Python/ETL Tarragona",permalink:"/en/proyects/Python/ETL Tarragona",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"DataframeToDB",permalink:"/en/proyects/Python/DataframeToDB"}},u={},p=[{value:"Detalles",id:"detalles",level:2}],d={toc:p};function f(e){var r=e.components,s=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,s,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"etl-tarragona"},"ETL Tarragona"),(0,o.kt)("p",null,"Plataforma: Windows Server con Python 3.9 y SQL Server"),(0,o.kt)("p",null,"Tipo: Proyecto Cerrado"),(0,o.kt)("p",null,"Enlace: ",(0,o.kt)("strong",{parentName:"p"},"No disponible")),(0,o.kt)("h2",{id:"detalles"},"Detalles"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"tarragona_ETL",src:t(8039).Z,width:"1009",height:"411"})),(0,o.kt)("p",null,"Este proyecto consiste en extraer data desde m\xfaltiples fuentes para validar que locales tienen problemas de cuadraturas para corregir la situaci\xf3n."),(0,o.kt)("p",null,"El proyecto se puede dividir en tres partes:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Extraer informaci\xf3n de medios de pago"),(0,o.kt)("li",{parentName:"ol"},"Extraer informaci\xf3n de las cuentas bancarias"),(0,o.kt)("li",{parentName:"ol"},"Extraer informaci\xf3n de otras fuentes"),(0,o.kt)("li",{parentName:"ol"},"Generar reportes")),(0,o.kt)("p",null,"Cada parte cumple una funci\xf3n importante, principalmente existen dos categor\xedas, los inputs y los outputs."),(0,o.kt)("p",null,"Mientras que los inputs son los ingresos de registros, se le asocia un local mediante muchas reglas establecidas."),(0,o.kt)("p",null,"Los outputs son los resultados de las vistas, los cuales sirven para generar vistas, ya que al tener la data en detalle, se puede tomar cualquier generador de dashboard como Power BI (o excel) revisar las transacciones, adem\xe1s se agruparon los inputs para validar diariamente si el ingreso de los locales reportados corresponde a los ingresos reportados en los diversos medios, teniendo adem\xe1s, detalles de la cantidad de ingresos en efectivo u otro medio."))}f.isMDXComponent=!0},8039:function(e,r,t){r.Z=t.p+"assets/images/tarragona_ETL.drawio-49b5329069a12240c79f44981e5759d6.png"}}]);