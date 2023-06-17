"use strict";(self.webpackChunkdogsounds_til=self.webpackChunkdogsounds_til||[]).push([[4620],{7942:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var r=n(959);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),c=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,k=m["".concat(o,".").concat(d)]||m[d]||s[d]||l;return n?r.createElement(k,i(i({ref:t},u),{},{components:n})):r.createElement(k,i({ref:t},u))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[m]="string"==typeof e?e:a,i[1]=p;for(var c=2;c<l;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1128:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var r=n(1966),a=(n(959),n(7942));const l={},i=void 0,p={unversionedId:"\uc774\ud559\ub9bc/23.05/05.16 \uc77c\uc9c0",id:"\uc774\ud559\ub9bc/23.05/05.16 \uc77c\uc9c0",title:"05.16 \uc77c\uc9c0",description:"\ud83c\udfaf Fragment LifeCycle \uacf5\ubd80 2",source:"@site/docs/\uc774\ud559\ub9bc/23.05/05.16 \uc77c\uc9c0.md",sourceDirName:"\uc774\ud559\ub9bc/23.05",slug:"/\uc774\ud559\ub9bc/23.05/05.16 \uc77c\uc9c0",permalink:"/en/TIL/\uc774\ud559\ub9bc/23.05/05.16 \uc77c\uc9c0",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"05.15 \uc77c\uc9c0",permalink:"/en/TIL/\uc774\ud559\ub9bc/23.05/05.15 \uc77c\uc9c0"},next:{title:"05.17 \uc77c\uc9c0",permalink:"/en/TIL/\uc774\ud559\ub9bc/23.05/05.17 \uc77c\uc9c0"}},o={},c=[{value:"\ud83c\udfaf Fragment LifeCycle \uacf5\ubd80 2",id:"-fragment-lifecycle-\uacf5\ubd80-2",level:2},{value:"State &amp; callback Flow",id:"state--callback-flow",level:3},{value:"\ubc31 \uc2a4\ud0dd",id:"\ubc31-\uc2a4\ud0dd",level:3},{value:"\ud83c\udfaf \uc0c8\ub85c\uc6b4 \ubb38\uc81c",id:"-\uc0c8\ub85c\uc6b4-\ubb38\uc81c",level:2}],u={toc:c},m="wrapper";function s(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"-fragment-lifecycle-\uacf5\ubd80-2"},"\ud83c\udfaf Fragment LifeCycle \uacf5\ubd80 2"),(0,a.kt)("p",null,": \ub2e4\ub978 Fragment\ub85c \ubcc0\uacbd\ub418\ub294 \uc0c1\ud669\uc5d0\uc11c \uae30\uc874 Fragment View\uac00 \uc720\uc9c0\ub3fc\uc11c \ub3cc\uc544\uc654\uc744 \ub54c View\uac00 \uacb9\uccd0\uc11c \ubcf4\uc774\ub294 \ubb38\uc81c\ud578\ub4e4\ub9c1\uc744 \uc704\ud574\uc11c  "),(0,a.kt)("p",null,"\ucc38\uace0: ",(0,a.kt)("a",{parentName:"p",href:"https://developer.android.com/guide/fragments/lifecycle"},"https://developer.android.com/guide/fragments/lifecycle"),"  "),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"state--callback-flow"},"State & callback Flow"),(0,a.kt)("p",null,"[","[ ",(0,a.kt)("inlineCode",{parentName:"p"},"STATE")," - (",(0,a.kt)("inlineCode",{parentName:"p"},"callback")," ) \u2192 ",(0,a.kt)("inlineCode",{parentName:"p"},"STATE")," ]","]  "),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"INITIALIZED")," - ( ",(0,a.kt)("inlineCode",{parentName:"p"},"onCreate()")," ) \u2192 ",(0,a.kt)("inlineCode",{parentName:"p"},"CREATE")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"\ubc31-\uc2a4\ud0dd"},"\ubc31 \uc2a4\ud0dd"),(0,a.kt)("p",null,": LifeCycle\uc744 \uc774\ud574\ud558\uae30 \uc704\ud574 \ud544\uc694\ud55c \uac1c\ub150",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"\uc791\uc5c5")," \uc0ac\uc6a9\uc790\uac00 \ud2b9\uc815 \uc791\uc5c5\uc744 \ud560 \ub54c \uc0c1\ud638\uc791\uc6a9\ud558\ub294 \ud65c\ub3d9\uc758 \uceec\ub809\uc158",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"\ud65c\ub3d9")," \ubc31 \uc2a4\ud0dd\uc5d0 \uc21c\uc11c\ub300\ub85c \uc815\ub82c\ub418\ub294 \ub2e8\uc704  "),(0,a.kt)("p",null,"keypoint: \uc2a4\ud0dd\uc758 \ub9e8 \uc717 \ud65c\ub3d9\uc774 \ud3ec\ucee4\uc2f1 == \uac00\uc7a5 \ucd5c\uadfc\uc758 \ud65c\ub3d9 1\uac1c\ub9cc \ucc98\ub9ac",(0,a.kt)("br",{parentName:"p"}),"\n","\ub098\uba38\uc9c0 \ud65c\ub3d9\ub4e4\uc740 \ub9e5\ub77d\uc744 \uc720\uc9c0\ud55c\ucc44 \uc911\uc9c0, \ub2e4\uc2dc \ud3ec\ucee4\uc2f1\uc744 \ubc1b\uc73c\uba74 \uc2e4\ud589  "),(0,a.kt)("p",null,"*"," ",(0,a.kt)("strong",{parentName:"p"},"\ud65c\ub3d9\uc774 \uc5ec\ub7ec \ubc88 \uc778\uc2a4\ud134\uc2a4\ud654\ub420 \uc218 \uc788\ub2e4"),"\n: \ub458 \uc774\uc0c1\uc758 \ud65c\ub3d9\uc73c\ub85c\ubd80\ud130 \ud2b9\uc815 \ud65c\ub3d9\uc744 \uc2dc\uc791\ud558\ub3c4\ub85d \ud5c8\uc6a9\ud558\uba74",(0,a.kt)("br",{parentName:"p"}),"\n","\ud83d\ude00 \u21d2 \ubb38\uc81c\ud574\uacb0\uc744 \uc704\ud55c \ud3ec\uc778\ud2b8!  "),(0,a.kt)("p",null,"\ud604\uc7ac \uc0c1\ud669",(0,a.kt)("br",{parentName:"p"}),"\n","Navigating \ud558\uace0 \ub3cc\uc544\uc62c \ub54c \uc2a4\ud0dd\uc758 \uad6c\uc870 - ","[ Fragment New | \ub2e4\ub978 \ud398\uc774\uc9c0 | Fragment Old ]","\ub85c \uc720\uc9c0\uac00 \ub418\uc5b4 \uc911\ucca9\ub418\uc5b4 \ud654\uba74\uc5d0 \ub728\uac8c \ub418\ub294 \uac83  "),(0,a.kt)("p",null,"\ud83d\ude00 \u21d2 Navigating \ud560 \ub54c, Fragment Old\ub97c pop\ud55c \ud6c4 Navigate\ud558\uae30  "),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"\uc791\uc5c5\uad00\ub9ac")," \ubc29\uc2dd\uc744 \uc774\uc6a9\ud574\uc11c, \ud65c\ub3d9\uc774 \uc2dc\uc791\ub420 \ub54c \ubc31 \uc2a4\ud0dd\uc758 \ub9e8 \uc704\uc5d0 \uc0c8 \uc778\uc2a4\ud134\uc2a4\uac00 \uc0dd\uc131\ub418\ub294 \ub300\uc2e0 \ud65c\ub3d9\uc758 \uae30\uc874 \uc778\uc2a4\ud134\uc2a4\uac00 \uc55e\uc73c\ub85c \ub098\uc624\ub3c4\ub85d \ud560 \uc218 \uc788\ub2e4\uace0 \ud55c\ub2e4..  "),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://developer.android.com/guide/components/activities/tasks-and-back-stack?hl=ko#ManagingTasks"},"https://developer.android.com/guide/components/activities/tasks-and-back-stack?hl=ko#ManagingTasks")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"-\uc0c8\ub85c\uc6b4-\ubb38\uc81c"},"\ud83c\udfaf \uc0c8\ub85c\uc6b4 \ubb38\uc81c"),(0,a.kt)("p",null,": Navigation\uc73c\ub85c \ub2e4\ub978 Fragment\ub85c \ud654\uba74\uc774\ub3d9\uc744 \ud588\ub2e4\uac00 \ub2e4\uc2dc \ub3cc\uc544\uc62c \ub54c, \ubc31 \uc2a4\ud0dd\uc5d0 \uc0c8  Fragment \uc778\uc2a4\ud134\uc2a4\ub97c \uc0dd\uc131\ud558\ub294 \ub300\uc2e0 \uae30\uc874\uc5d0 \uc788\ub358 \uc778\uc2a4\ud134\uc2a4\ub97c \ubc31 \uc2a4\ud0dd\uc758 \uc55e\uc73c\ub85c \ub098\uc62c \uc218 \uc788\uac8c \ud558\uae30  "),(0,a.kt)("hr",null),(0,a.kt)("p",null,"\u21d2 \uad6c\uccb4\ud654\ub41c \uc9c8\ubb38\uc744 chatGPT\uc5d0 \ubb3c\uc5b4\ubd24\ub2e4.",(0,a.kt)("br",{parentName:"p"}),"\n","in ",(0,a.kt)("inlineCode",{parentName:"p"},"navigation graph XML")," ",(0,a.kt)("inlineCode",{parentName:"p"},"<action />")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Kotlin"},'app:popUpTo="@id/homeFragment"\napp:popUpToInclusive="true"\n')),(0,a.kt)("p",null,"\ub97c \ud1b5\ud574\uc11c \ubc31 \uc2a4\ud0dd \uc55e\uc73c\ub85c \ub098\uc624\uac8c \uc815\uc758  "),(0,a.kt)("p",null,"\ud83d\ude1e \u21d2 \uc2e4\ud328"),(0,a.kt)("hr",null))}s.isMDXComponent=!0}}]);