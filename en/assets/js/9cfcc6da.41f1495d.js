"use strict";(self.webpackChunkdogsounds_til=self.webpackChunkdogsounds_til||[]).push([[3998],{7942:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var i=n(959);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},l=Object.keys(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=i.createContext({}),d=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=d(e.components);return i.createElement(p.Provider,{value:t},e.children)},c="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},k=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=d(n),k=r,m=c["".concat(p,".").concat(k)]||c[k]||s[k]||l;return n?i.createElement(m,a(a({ref:t},u),{},{components:n})):i.createElement(m,a({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,a=new Array(l);a[0]=k;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[c]="string"==typeof e?e:r,a[1]=o;for(var d=2;d<l;d++)a[d]=n[d];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}k.displayName="MDXCreateElement"},6645:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var i=n(1966),r=(n(959),n(7942));const l={},a="\uc6b4\uc601\uccb4\uc81c File System",o={unversionedId:"\uc774\ud559\ub9bc/23.05/05.28 \uc77c\uc9c0",id:"\uc774\ud559\ub9bc/23.05/05.28 \uc77c\uc9c0",title:"\uc6b4\uc601\uccb4\uc81c File System",description:"Directory \uad6c\ud604",source:"@site/docs/\uc774\ud559\ub9bc/23.05/05.28 \uc77c\uc9c0.md",sourceDirName:"\uc774\ud559\ub9bc/23.05",slug:"/\uc774\ud559\ub9bc/23.05/05.28 \uc77c\uc9c0",permalink:"/Dogsounds-TIL/en/TIL/\uc774\ud559\ub9bc/23.05/05.28 \uc77c\uc9c0",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\uc6b4\uc601\uccb4\uc81c File System",permalink:"/Dogsounds-TIL/en/TIL/\uc774\ud559\ub9bc/23.05/05.26 \uc77c\uc9c0"},next:{title:"(\uc6b4\uc601\uccb4\uc81c) File System",permalink:"/Dogsounds-TIL/en/TIL/\uc774\ud559\ub9bc/23.05/05.29 \uc77c\uc9c0"}},p={},d=[{value:"Directory \uad6c\ud604",id:"directory-\uad6c\ud604",level:2},{value:"Directory Entry",id:"directory-entry",level:3},{value:"Fat \ud30c\uc77c\uc2dc\uc2a4\ud15c",id:"fat-\ud30c\uc77c\uc2dc\uc2a4\ud15c",level:4},{value:"UNIX \ud30c\uc77c\uc2dc\uc2a4\ud15c",id:"unix-\ud30c\uc77c\uc2dc\uc2a4\ud15c",level:4},{value:"\ud30c\uc77c\uba85 \ud560\ub2f9",id:"\ud30c\uc77c\uba85-\ud560\ub2f9",level:4},{value:"File \uacf5\uc720",id:"file-\uacf5\uc720",level:3},{value:"entry\uc5d0\uc11c \ub3d9\uc77c\ud55c #inode\ub97c \uacf5\uc720 == Hard Link",id:"entry\uc5d0\uc11c-\ub3d9\uc77c\ud55c-inode\ub97c-\uacf5\uc720--hard-link",level:4},{value:"Symbolic Link == Soft Link",id:"symbolic-link--soft-link",level:4},{value:"Log-Structed File System(LFS)",id:"log-structed-file-systemlfs",level:2},{value:"vs Data \uc704\uce58 \ubd88\ubcc0(update in place)",id:"vs-data-\uc704\uce58-\ubd88\ubcc0update-in-place",level:3},{value:"Disk\ub97c sequential\ud558\uac8c \ubcf4\uae30",id:"disk\ub97c-sequential\ud558\uac8c-\ubcf4\uae30",level:3},{value:"inode \uc815\ubcf4 \uc704\uce58 \uac00\ubcc0",id:"inode-\uc815\ubcf4-\uc704\uce58-\uac00\ubcc0",level:3},{value:"Cleaning",id:"cleaning",level:3}],u={toc:d},c="wrapper";function s(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\uc6b4\uc601\uccb4\uc81c-file-system"},"\uc6b4\uc601\uccb4\uc81c File System"),(0,r.kt)("h2",{id:"directory-\uad6c\ud604"},"Directory \uad6c\ud604"),(0,r.kt)("h3",{id:"directory-entry"},"Directory Entry"),(0,r.kt)("h4",{id:"fat-\ud30c\uc77c\uc2dc\uc2a4\ud15c"},"Fat \ud30c\uc77c\uc2dc\uc2a4\ud15c"),(0,r.kt)("p",null,"\ud30c\uc77c\uba85 - \ud30c\uc77c\uc18d\uc131(\uba54\ud0c0\ub370\uc774\ud130)"),(0,r.kt)("h4",{id:"unix-\ud30c\uc77c\uc2dc\uc2a4\ud15c"},"UNIX \ud30c\uc77c\uc2dc\uc2a4\ud15c"),(0,r.kt)("p",null,"\ud30c\uc77c\uba85 - #inode\n#inode \uc8fc\uc18c \u2192 inode(\uba54\ud0c0\ub370\uc774\ud130)"),(0,r.kt)("h4",{id:"\ud30c\uc77c\uba85-\ud560\ub2f9"},"\ud30c\uc77c\uba85 \ud560\ub2f9"),(0,r.kt)("p",null,": \ud30c\uc77c\uba85\uc758 \ud06c\uae30\uac00 \ud074\uc218\ub3c4 \uc791\uc744\uc218\ub3c4 \uc788\ub2e4",(0,r.kt)("br",{parentName:"p"}),"\n","\u21d2 \ud6a8\uc728\uc131\uc744 \uc704\ud574 entry\ub97c \uac00\ubcc0\uc801\uc73c\ub85c, 4byte \ub2e8\uc704\ub85c \ucd94\uac00\ud560\ub2f9\ud558\uba70 \ud30c\uc77c\uba85\uc744 \uad6c\uc131"),(0,r.kt)("h3",{id:"file-\uacf5\uc720"},"File \uacf5\uc720"),(0,r.kt)("p",null,": link \uac1c\ub150 \uc0ac\uc6a9 in indexed FS"),(0,r.kt)("h4",{id:"entry\uc5d0\uc11c-\ub3d9\uc77c\ud55c-inode\ub97c-\uacf5\uc720--hard-link"},"entry\uc5d0\uc11c \ub3d9\uc77c\ud55c #inode\ub97c \uacf5\uc720 == Hard Link"),(0,r.kt)("p",null,"\ud2b9\uc9d5(\ubb38\uc81c\uc810","_",")"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uc0ad\uc81c\ub97c \ubcf4\uc7a5\ud558\uae30 \ud798\ub4e4\ub2e4(\ubcf4\uc548)"),(0,r.kt)("li",{parentName:"ul"},"Directory\ub97c \uacf5\uc720\ud558\ub294 \uacbd\uc6b0 \uc870\ud68c\ud560 \ub54c \ubb34\ud55c\ub8e8\ud504\uc5d0 \ube60\uc9c8 \uc218 \uc788\ub2e4")),(0,r.kt)("p",null,"\u21d2 Symbolic Link"),(0,r.kt)("br",null),(0,r.kt)("h4",{id:"symbolic-link--soft-link"},"Symbolic Link == Soft Link"),(0,r.kt)("p",null,": Link File \ud0c0\uc785\uc758 \ud30c\uc77c\uc744 \ub9cc\ub4e0\ub2e4. \uc774 \ud30c\uc77c\uc758 \ub370\uc774\ud130\ub294 target file\uc758 \uacbd\ub85c"),(0,r.kt)("p",null,"\ud30c\uc77c Access \ubc29\uc2dd",(0,r.kt)("br",{parentName:"p"}),"\n","\u21d2 \ubc14\ub85c\uac00\uae30(",(0,r.kt)("inlineCode",{parentName:"p"},"Link File"),"'s name) \u2192 ",(0,r.kt)("inlineCode",{parentName:"p"},"Link File"),"'s #inode \u2192 ",(0,r.kt)("inlineCode",{parentName:"p"},"Link File"),"'s ",(0,r.kt)("inlineCode",{parentName:"p"},"inode")," \u2192 ",(0,r.kt)("inlineCode",{parentName:"p"},"Link File"),"'s data #block & get \ud30c\uc77c\ub370\uc774\ud130(target file \uacbd\ub85c) \u2192 ",(0,r.kt)("inlineCode",{parentName:"p"},"Target File"),"'s #block \u2192 ",(0,r.kt)("inlineCode",{parentName:"p"},"Target File"),"'s \ud30c\uc77c\ub370\uc774\ud130"),(0,r.kt)("p",null,"\ud2b9\uc9d5"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uc6d0\ubcf8 \uc0ad\uc81c\uc2dc \ud30c\uc77c \uc0ad\uc81c\ubcf4\uc7a5(\ubcf4\uc548)"),(0,r.kt)("li",{parentName:"ul"},"\ud30c\uc77c\uc5d0 \uc811\uadfc\ud560 \ub54c \uc18d\ub3c4 \uce21\uba74\uc5d0\uc11c \ube44\ud6a8\uc728")),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"log-structed-file-systemlfs"},"Log-Structed File System(LFS)"),(0,r.kt)("p",null,": Disk seek time\uc744 \uc904\uc5ec\uc11c write \uc5f0\uc0b0\uc758 \ud6a8\uc728\uc744 \ub192\uc774\uae30 \uc704\ud55c File System",(0,r.kt)("br",{parentName:"p"}),"\n",": Data \uc704\uce58 \uac00\ubcc0\uc801"),(0,r.kt)("h3",{id:"vs-data-\uc704\uce58-\ubd88\ubcc0update-in-place"},"vs Data \uc704\uce58 \ubd88\ubcc0(update in place)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Aging == Fragmentation \ubc1c\uc0dd"),(0,r.kt)("li",{parentName:"ul"},"Random Access(\ubd88\ubcc0) \u2192 \uc811\uadfc\uc2dc Disk head\uc758 seek time\uc774 \ube44\uad50\uc801 \ud07c")),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"disk\ub97c-sequential\ud558\uac8c-\ubcf4\uae30"},"Disk\ub97c sequential\ud558\uac8c \ubcf4\uae30"),(0,r.kt)("p",null,": \ud30c\uc77c \uc218\uc815\uc2dc not ",(0,r.kt)("inlineCode",{parentName:"p"},"in place"),", but sequential \uc704\uce58\uc5d0",(0,r.kt)("br",{parentName:"p"}),"\n","\ud30c\uc77c \uc790\uccb4 \uc815\ubcf4\uac00 \uc218\uc815\ub428 \u2192 inode, \uc0c1\uc704 directory \uc815\ubcf4 \ub610\ud55c \uc218\uc815\ub428",(0,r.kt)("br",{parentName:"p"}),"\n","\u21d2 ",(0,r.kt)("inlineCode",{parentName:"p"},"segment"),"{ Data / inode / directory } \ub2e8\uc704\uac00 \uc0c8\ub85c\uc368\uc9c4\ub2e4."),(0,r.kt)("p",null,"\u2192 \uc811\uadfc\ud6a8\uc728\uc131\uc744 \uc704\ud574\uc11c Data\ub294 buffering \ub418\uc5c8\ub2e4\uac00 \ud55c \ubc88\uc5d0 Writing Point\ubd80\ud130 \uc368\uc9d0"),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"inode-\uc815\ubcf4-\uc704\uce58-\uac00\ubcc0"},"inode \uc815\ubcf4 \uc704\uce58 \uac00\ubcc0"),(0,r.kt)("p",null,": \ud30c\uc77c \uc811\uadfc\uc2dc \uc5b4\ub824\uc6c0 \u21d2 i-map \uc0ac\uc6a9",(0,r.kt)("br",{parentName:"p"}),"\n","inode\uac00 \ub514\uc2a4\ud06c\uc5d0 \ud37c\uc838\uc788\uc73c\ubbc0\ub85c inode\ub97c \uac00\ub9ac\ud0a4\ub294 \uc8fc\uc18c\uac00 \ud544\uc694\ud558\ub2e4.",(0,r.kt)("br",{parentName:"p"}),"\n","recent inode \uc8fc\uc18c\ub97c \uac00\ub9ac\ud0a4\ub294 inode-map"),(0,r.kt)("br",null),(0,r.kt)("h3",{id:"cleaning"},"Cleaning"),(0,r.kt)("p",null,": Update in place X, make New one \u2192 \uae30\uc874\uc758 \uc815\ubcf4\ub294 \uc758\ubbf8\uc5c6\ub294 ",(0,r.kt)("inlineCode",{parentName:"p"},"garbage"),(0,r.kt)("br",{parentName:"p"}),"\n","\u21d2 ",(0,r.kt)("inlineCode",{parentName:"p"},"cleaner"),": Obsolete blocks \ubc18\ub0a9, Live block copy & \uc0c8\ub85c\uc4f0\uae30",(0,r.kt)("br",{parentName:"p"}),"\n","\u2192 Live block\uc774 \ub9ce\uc744\uc218\ub85d copy \uc624\ubc84\ud5e4\ub4dc \uc218\ubc18"))}s.isMDXComponent=!0}}]);