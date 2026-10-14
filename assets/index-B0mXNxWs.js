(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function t(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=t(s);fetch(s.href,o)}})();const Hm="data:text/xml;base64,PCEtLSBHRU5FUkFURUQgYnkgbW9kZWxzL2phY2thbC9jb252ZXJ0LnB5IGZyb20gamFja2FsL2phY2thbEA0ZGRmOWI1NzhiYjcgKEJTRC0zLUNsYXVzZSwgc2VlIExJQ0VOU0UpLiBEbyBub3QgZWRpdC4gLS0+CjxtdWpvY28gbW9kZWw9ImphY2thbCI+CiAgPGNvbXBpbGVyIGFuZ2xlPSJyYWRpYW4iIG1lc2hkaXI9Im1lc2hlcyIvPgogIDxkZWZhdWx0PgogICAgPGRlZmF1bHQgY2xhc3M9ImphY2thbF92aXN1YWwiPjxnZW9tIHR5cGU9Im1lc2giIGNvbnR5cGU9IjAiIGNvbmFmZmluaXR5PSIwIiBncm91cD0iMSIgZGVuc2l0eT0iMCIvPjwvZGVmYXVsdD4KICAgIDxkZWZhdWx0IGNsYXNzPSJqYWNrYWxfY29sbGlzaW9uIj48Z2VvbSBjb250eXBlPSIyIiBjb25hZmZpbml0eT0iMiIgZ3JvdXA9IjMiIHJnYmE9IjEgMCAwIDAuMjUiLz48L2RlZmF1bHQ+CiAgPC9kZWZhdWx0PgogIDxhc3NldD4KICAgIDxtZXNoIG5hbWU9ImphY2thbC1iYXNlIiBmaWxlPSJqYWNrYWwtYmFzZS5zdGwiLz4KICAgIDxtZXNoIG5hbWU9ImphY2thbC1mZW5kZXIiIGZpbGU9ImphY2thbC1mZW5kZXIuc3RsIi8+CiAgICA8bWVzaCBuYW1lPSJqYWNrYWwtd2hlZWwiIGZpbGU9ImphY2thbC13aGVlbC5zdGwiLz4KICA8L2Fzc2V0PgogIDx3b3JsZGJvZHk+CiAgICA8Ym9keSBuYW1lPSJiYXNlX2xpbmsiIHBvcz0iMCAwIDAuMDYzNSI+CiAgICAgIDxqb2ludCBuYW1lPSJzbGlkZV94IiB0eXBlPSJzbGlkZSIgYXhpcz0iMSAwIDAiLz4KICAgICAgPGpvaW50IG5hbWU9InNsaWRlX3kiIHR5cGU9InNsaWRlIiBheGlzPSIwIDEgMCIvPgogICAgICA8am9pbnQgbmFtZT0ieWF3IiB0eXBlPSJoaW5nZSIgYXhpcz0iMCAwIDEiLz4KICAgICAgPGluZXJ0aWFsIHBvcz0iMCAwIDAuMDU5MzM1IiBtYXNzPSIxNi41MjQiIGRpYWdpbmVydGlhPSIwLjM0MDIgMC40NDQ2IDAuNjEzNiIvPgogICAgICA8Z2VvbSBuYW1lPSJjaGFzc2lzIiBjbGFzcz0iamFja2FsX2NvbGxpc2lvbiIgdHlwZT0iYm94IiBwb3M9IjAgMCAwLjA1OTMzNSIgc2l6ZT0iMC4yNTUyOTkgMC4yMTUgMC4xMjQ2NjUiLz4KICAgICAgPGdlb20gbmFtZT0iY2hhc3Npc19saW5rX3Zpc3VhbCIgY2xhc3M9ImphY2thbF92aXN1YWwiIG1lc2g9ImphY2thbC1iYXNlIiBwb3M9IjAgMCAtMC4wNjU1IiBxdWF0PSIwLjUgMC41IDAuNSAwLjUiIHJnYmE9IjAuMiAwLjIgMC4yIDEuMCIvPgogICAgICA8Z2VvbSBuYW1lPSJmcm9udF9mZW5kZXJfbGlua192aXN1YWwiIGNsYXNzPSJqYWNrYWxfdmlzdWFsIiBtZXNoPSJqYWNrYWwtZmVuZGVyIiBwb3M9IjAgMCAwIiBxdWF0PSIxIDAgMCAwIiByZ2JhPSIwLjggMC44IDAuMCAxLjAiLz4KICAgICAgPGdlb20gbmFtZT0icmVhcl9mZW5kZXJfbGlua192aXN1YWwiIGNsYXNzPSJqYWNrYWxfdmlzdWFsIiBtZXNoPSJqYWNrYWwtZmVuZGVyIiBwb3M9IjAgMCAwIiBxdWF0PSIwIDAgMCAxIiByZ2JhPSIwLjggMC44IDAuMCAxLjAiLz4KICAgICAgPHNpdGUgbmFtZT0ibGlkYXIiIHBvcz0iMC4xMiAwIDAuMjA0IiBzaXplPSIwLjAzIi8+CiAgICAgIDxzaXRlIG5hbWU9ImZwdiIgcG9zPSIwLjIzNTI5OSAwIDAuMTU0IiBzaXplPSIwLjAyIi8+CiAgICAgIDxib2R5IG5hbWU9ImZyb250X2xlZnRfd2hlZWxfbGluayIgcG9zPSIwLjEzMSAwLjE4Nzc5NSAwLjAzNDUiPgogICAgICAgIDxqb2ludCBuYW1lPSJmcm9udF9sZWZ0X3doZWVsIiB0eXBlPSJoaW5nZSIgYXhpcz0iMCAxIDAiLz4KICAgICAgICA8aW5lcnRpYWwgcG9zPSIwIDAgMCIgbWFzcz0iMC40NzciIGRpYWdpbmVydGlhPSIwLjAwMTMgMC4wMDI0IDAuMDAxMyIvPgogICAgICAgIDxnZW9tIG5hbWU9ImZyb250X2xlZnRfd2hlZWxfbGlua192aXN1YWwiIGNsYXNzPSJqYWNrYWxfdmlzdWFsIiBtZXNoPSJqYWNrYWwtd2hlZWwiIHBvcz0iMCAwIDAiIHF1YXQ9IjAuNzA3MTA3IDAuNzA3MTA3IDAgMCIgcmdiYT0iMC4xNSAwLjE1IDAuMTUgMS4wIi8+CiAgICAgIDwvYm9keT4KICAgICAgPGJvZHkgbmFtZT0iZnJvbnRfcmlnaHRfd2hlZWxfbGluayIgcG9zPSIwLjEzMSAtMC4xODc3OTUgMC4wMzQ1Ij4KICAgICAgICA8am9pbnQgbmFtZT0iZnJvbnRfcmlnaHRfd2hlZWwiIHR5cGU9ImhpbmdlIiBheGlzPSIwIDEgMCIvPgogICAgICAgIDxpbmVydGlhbCBwb3M9IjAgMCAwIiBtYXNzPSIwLjQ3NyIgZGlhZ2luZXJ0aWE9IjAuMDAxMyAwLjAwMjQgMC4wMDEzIi8+CiAgICAgICAgPGdlb20gbmFtZT0iZnJvbnRfcmlnaHRfd2hlZWxfbGlua192aXN1YWwiIGNsYXNzPSJqYWNrYWxfdmlzdWFsIiBtZXNoPSJqYWNrYWwtd2hlZWwiIHBvcz0iMCAwIDAiIHF1YXQ9IjAuNzA3MTA3IDAuNzA3MTA3IDAgMCIgcmdiYT0iMC4xNSAwLjE1IDAuMTUgMS4wIi8+CiAgICAgIDwvYm9keT4KICAgICAgPGJvZHkgbmFtZT0icmVhcl9sZWZ0X3doZWVsX2xpbmsiIHBvcz0iLTAuMTMxIDAuMTg3Nzk1IDAuMDM0NSI+CiAgICAgICAgPGpvaW50IG5hbWU9InJlYXJfbGVmdF93aGVlbCIgdHlwZT0iaGluZ2UiIGF4aXM9IjAgMSAwIi8+CiAgICAgICAgPGluZXJ0aWFsIHBvcz0iMCAwIDAiIG1hc3M9IjAuNDc3IiBkaWFnaW5lcnRpYT0iMC4wMDEzIDAuMDAyNCAwLjAwMTMiLz4KICAgICAgICA8Z2VvbSBuYW1lPSJyZWFyX2xlZnRfd2hlZWxfbGlua192aXN1YWwiIGNsYXNzPSJqYWNrYWxfdmlzdWFsIiBtZXNoPSJqYWNrYWwtd2hlZWwiIHBvcz0iMCAwIDAiIHF1YXQ9IjAuNzA3MTA3IDAuNzA3MTA3IDAgMCIgcmdiYT0iMC4xNSAwLjE1IDAuMTUgMS4wIi8+CiAgICAgIDwvYm9keT4KICAgICAgPGJvZHkgbmFtZT0icmVhcl9yaWdodF93aGVlbF9saW5rIiBwb3M9Ii0wLjEzMSAtMC4xODc3OTUgMC4wMzQ1Ij4KICAgICAgICA8am9pbnQgbmFtZT0icmVhcl9yaWdodF93aGVlbCIgdHlwZT0iaGluZ2UiIGF4aXM9IjAgMSAwIi8+CiAgICAgICAgPGluZXJ0aWFsIHBvcz0iMCAwIDAiIG1hc3M9IjAuNDc3IiBkaWFnaW5lcnRpYT0iMC4wMDEzIDAuMDAyNCAwLjAwMTMiLz4KICAgICAgICA8Z2VvbSBuYW1lPSJyZWFyX3JpZ2h0X3doZWVsX2xpbmtfdmlzdWFsIiBjbGFzcz0iamFja2FsX3Zpc3VhbCIgbWVzaD0iamFja2FsLXdoZWVsIiBwb3M9IjAgMCAwIiBxdWF0PSIwLjcwNzEwNyAwLjcwNzEwNyAwIDAiIHJnYmE9IjAuMTUgMC4xNSAwLjE1IDEuMCIvPgogICAgICA8L2JvZHk+CiAgICA8L2JvZHk+CiAgPC93b3JsZGJvZHk+CiAgPGFjdHVhdG9yPgogICAgPHZlbG9jaXR5IG5hbWU9InZ4IiBqb2ludD0ic2xpZGVfeCIga3Y9IjYwMCIgZm9yY2VsaW1pdGVkPSJ0cnVlIiBmb3JjZXJhbmdlPSItNDAwIDQwMCIvPgogICAgPHZlbG9jaXR5IG5hbWU9InZ5IiBqb2ludD0ic2xpZGVfeSIga3Y9IjYwMCIgZm9yY2VsaW1pdGVkPSJ0cnVlIiBmb3JjZXJhbmdlPSItNDAwIDQwMCIvPgogICAgPHZlbG9jaXR5IG5hbWU9Ind6IiBqb2ludD0ieWF3IiBrdj0iMjAiIGZvcmNlbGltaXRlZD0idHJ1ZSIgZm9yY2VyYW5nZT0iLTYwIDYwIi8+CiAgPC9hY3R1YXRvcj4KPC9tdWpvY28+Cg==",Gm="/Hackathon/assets/jackal-base-Bh4FOo_z.stl",Vm="/Hackathon/assets/jackal-fender-CVf8_6Md.stl",Wm="/Hackathon/assets/jackal-wheel-CyqO0zQs.stl",Xm="modulepreload",$m=function(i){return"/Hackathon/"+i},Pc={},jm=function(e,t,n){let s=Promise.resolve();if(t&&t.length>0){let l=function(f){return Promise.all(f.map(m=>Promise.resolve(m).then(g=>({status:"fulfilled",value:g}),g=>({status:"rejected",reason:g}))))};document.getElementsByTagName("link");const u=document.querySelector("meta[property=csp-nonce]"),d=u?.nonce||u?.getAttribute("nonce");s=l(t.map(f=>{if(f=$m(f),f in Pc)return;Pc[f]=!0;const m=f.endsWith(".css"),g=m?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${f}"]${g}`))return;const x=document.createElement("link");if(x.rel=m?"stylesheet":Xm,m||(x.as="script"),x.crossOrigin="",x.href=f,d&&x.setAttribute("nonce",d),document.head.appendChild(x),m)return new Promise((y,T)=>{x.addEventListener("load",y),x.addEventListener("error",()=>T(new Error(`Unable to preload CSS for ${f}`)))})}))}function o(l){const u=new Event("vite:preloadError",{cancelable:!0});if(u.payload=l,window.dispatchEvent(u),!u.defaultPrevented)throw l}return s.then(l=>{for(const u of l||[])u.status==="rejected"&&o(u.reason);return e().catch(o)})};var Ym=(async function(i={}){var e,t=i,n=typeof window=="object",s=typeof WorkerGlobalScope<"u",o=typeof process=="object"&&process.versions?.node&&process.type!="renderer",l=!n&&!o&&!s;if(o){const{createRequire:r}=await jm(async()=>{const{createRequire:a}=await Promise.resolve().then(()=>wM);return{createRequire:a}},void 0);var u=r(import.meta.url)}var d="./this.program",f=(r,a)=>{throw a},m=import.meta.url,g="";function x(r){return t.locateFile?t.locateFile(r,g):g+r}var y,T;if(o){if(!(typeof process=="object"&&process.versions?.node&&process.type!="renderer"))throw new Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)");var C=process.versions.node,S=C.split(".").slice(0,3);if(S=S[0]*1e4+S[1]*100+S[2].split("-")[0]*1,S<16e4)throw new Error("This emscripten-generated code requires node v16.0.0 (detected v"+C+")");var _=u("fs");m.startsWith("file:")&&(g=u("path").dirname(u("url").fileURLToPath(m))+"/"),T=a=>{a=O(a)?new URL(a):a;var c=_.readFileSync(a);return P(Buffer.isBuffer(c)),c},y=async(a,c=!0)=>{a=O(a)?new URL(a):a;var h=_.readFileSync(a,c?void 0:"utf8");return P(c?Buffer.isBuffer(h):typeof h=="string"),h},process.argv.length>1&&(d=process.argv[1].replace(/\\/g,"/")),process.argv.slice(2),f=(a,c)=>{throw process.exitCode=a,c}}else if(l){if(typeof process=="object"&&process.versions?.node&&process.type!="renderer"||typeof window=="object"||typeof WorkerGlobalScope<"u")throw new Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)")}else if(n||s){try{g=new URL(".",m).href}catch{}if(!(typeof window=="object"||typeof WorkerGlobalScope<"u"))throw new Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)");s&&(T=r=>{var a=new XMLHttpRequest;return a.open("GET",r,!1),a.responseType="arraybuffer",a.send(null),new Uint8Array(a.response)}),y=async r=>{if(O(r))return new Promise((c,h)=>{var p=new XMLHttpRequest;p.open("GET",r,!0),p.responseType="arraybuffer",p.onload=()=>{if(p.status==200||p.status==0&&p.response){c(p.response);return}h(p.status)},p.onerror=h,p.send(null)});var a=await fetch(r,{credentials:"same-origin"});if(a.ok)return a.arrayBuffer();throw new Error(a.status+" : "+a.url)}}else throw new Error("environment detection error");var N=console.log.bind(console),L=console.error.bind(console);P(!l,"shell environment detected but not enabled at build time.  Add `shell` to `-sENVIRONMENT` to enable.");var I;typeof WebAssembly!="object"&&L("no native wasm support detected");var Z=!1;function P(r,a){r||le("Assertion failed"+(a?": "+a:""))}var O=r=>r.startsWith("file://");function X(){var r=Zs();P((r&3)==0),r==0&&(r+=4),Me[r>>2]=34821223,Me[r+4>>2]=2310721022,Me[0]=1668509029}function D(){if(!Z){var r=Zs();r==0&&(r+=4);var a=Me[r>>2],c=Me[r+4>>2];(a!=34821223||c!=2310721022)&&le(`Stack overflow! Stack cookie has been overwritten at ${he(r)}, expected hex dwords 0x89BACDFE and 0x2135467, but received ${he(c)} ${he(a)}`),Me[0]!=1668509029&&le("Runtime error: The application has corrupted its heap memory area (address zero)!")}}class E extends Error{}class k extends E{}class te extends E{constructor(a){super(a),this.excPtr=a;const c=mc(a);this.name=c[0],this.message=c[1]}}(()=>{var r=new Int16Array(1),a=new Int8Array(r.buffer);if(r[0]=25459,a[0]!==115||a[1]!==99)throw"Runtime error: expected the system to be little-endian! (Run with -sSUPPORT_BIG_ENDIAN to bypass)"})();function K(r){Object.getOwnPropertyDescriptor(t,r)||Object.defineProperty(t,r,{configurable:!0,set(){le(`Attempt to set \`Module.${r}\` after it has already been processed.  This can happen, for example, when code is injected via '--post-js' rather than '--pre-js'`)}})}function ee(r){return()=>P(!1,`call to '${r}' via reference taken before Wasm module initialization`)}function pe(r){Object.getOwnPropertyDescriptor(t,r)&&le(`\`Module.${r}\` was supplied but \`${r}\` not included in INCOMING_MODULE_JS_API`)}function ae(r){return r==="FS_createPath"||r==="FS_createDataFile"||r==="FS_createPreloadedFile"||r==="FS_unlink"||r==="addRunDependency"||r==="FS_createLazyFile"||r==="FS_createDevice"||r==="removeRunDependency"}function Se(r,a){typeof globalThis<"u"&&!Object.getOwnPropertyDescriptor(globalThis,r)&&Object.defineProperty(globalThis,r,{configurable:!0,get(){a()}})}function re(r,a){Se(r,()=>{$e(`\`${r}\` is not longer defined by emscripten. ${a}`)})}re("buffer","Please use HEAP8.buffer or wasmMemory.buffer"),re("asm","Please use wasmExports instead");function Ae(r){Se(r,()=>{var a=`\`${r}\` is a library symbol and not included by default; add it to your library.js __deps or to DEFAULT_LIBRARY_FUNCS_TO_INCLUDE on the command line`,c=r;c.startsWith("_")||(c="$"+r),a+=` (e.g. -sDEFAULT_LIBRARY_FUNCS_TO_INCLUDE='${c}')`,ae(r)&&(a+=". Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you"),$e(a)}),Pe(r)}function Pe(r){Object.getOwnPropertyDescriptor(t,r)||Object.defineProperty(t,r,{configurable:!0,get(){var a=`'${r}' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the Emscripten FAQ)`;ae(r)&&(a+=". Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you"),le(a)}})}var He,Ke,ft,ne,_e,De,Ee,fe,Me,et,Mt,qe,Ct,H=!1;function jt(){var r=ft.buffer;ne=new Int8Array(r),De=new Int16Array(r),_e=new Uint8Array(r),Ee=new Uint16Array(r),fe=new Int32Array(r),Me=new Uint32Array(r),et=new Float32Array(r),Mt=new Float64Array(r),qe=new BigInt64Array(r),Ct=new BigUint64Array(r)}P(typeof Int32Array<"u"&&typeof Float64Array<"u"&&Int32Array.prototype.subarray!=null&&Int32Array.prototype.set!=null,"JS engine does not provide full typed array support");function at(){if(t.preRun)for(typeof t.preRun=="function"&&(t.preRun=[t.preRun]);t.preRun.length;)be(t.preRun.shift());K("preRun"),rt(B)}function ot(){P(!H),H=!0,D(),!t.noFSInit&&!M.initialized&&M.init(),di.__wasm_call_ctors(),M.ignorePermissions=!1}function We(){if(D(),t.postRun)for(typeof t.postRun=="function"&&(t.postRun=[t.postRun]);t.postRun.length;)xt(t.postRun.shift());K("postRun"),rt(Ze)}var pt=0,Ge=null,F={},A=null;function J(r){pt++,t.monitorRunDependencies?.(pt),r?(P(!F[r]),F[r]=1,A===null&&typeof setInterval<"u"&&(A=setInterval(()=>{if(Z){clearInterval(A),A=null;return}var a=!1;for(var c in F)a||(a=!0,L("still waiting on run dependencies:")),L(`dependency: ${c}`);a&&L("(end of list)")},1e4))):L("warning: run dependency added without ID")}function de(r){if(pt--,t.monitorRunDependencies?.(pt),r?(P(F[r]),delete F[r]):L("warning: run dependency removed without ID"),pt==0&&(A!==null&&(clearInterval(A),A=null),Ge)){var a=Ge;Ge=null,a()}}function le(r){t.onAbort?.(r),r="Aborted("+r+")",L(r),Z=!0;var a=new WebAssembly.RuntimeError(r);throw Ke?.(a),a}function se(r,a){return(...c)=>{P(H,`native function \`${r}\` called before runtime initialization`);var h=di[r];return P(h,`exported native function \`${r}\` not found`),P(c.length<=a,`native function \`${r}\` called with ${c.length} args but expects ${a}`),h(...c)}}var Oe;function Ce(){return t.locateFile?x("mujoco.wasm"):new URL("/Hackathon/assets/mujoco-ChFpd822.wasm",import.meta.url).href}function Le(r){if(r==Oe&&I)return new Uint8Array(I);if(T)return T(r);throw"both async and sync fetching of the wasm failed"}async function lt(r){if(!I)try{var a=await y(r);return new Uint8Array(a)}catch{}return Le(r)}async function ye(r,a){try{var c=await lt(r),h=await WebAssembly.instantiate(c,a);return h}catch(p){L(`failed to asynchronously prepare wasm: ${p}`),O(Oe)&&L(`warning: Loading from a file URI (${Oe}) is not supported in most browsers. See https://emscripten.org/docs/getting_started/FAQ.html#how-do-i-run-a-local-webserver-for-testing-why-does-my-program-stall-in-downloading-or-preparing`),le(p)}}async function Fe(r,a,c){if(!r&&typeof WebAssembly.instantiateStreaming=="function"&&!O(a)&&!o)try{var h=fetch(a,{credentials:"same-origin"}),p=await WebAssembly.instantiateStreaming(h,c);return p}catch(v){L(`wasm streaming compile failed: ${v}`),L("falling back to ArrayBuffer instantiation")}return ye(a,c)}function Xe(){return{env:Ac,wasi_snapshot_preview1:Ac}}async function Ye(){function r(w,b){return di=w.exports,ft=di.memory,P(ft,"memory not found in wasm exports"),jt(),Hr=di.__indirect_function_table,P(Hr,"table not found in wasm exports"),Gd(di),de("wasm-instantiate"),di}J("wasm-instantiate");var a=t;function c(w){return P(t===a,"the Module object should not be replaced during async compilation - perhaps the order of HTML elements is wrong?"),a=null,r(w.instance)}var h=Xe();if(t.instantiateWasm)return new Promise((w,b)=>{try{t.instantiateWasm(h,(U,W)=>{w(r(U,W))})}catch(U){L(`Module.instantiateWasm callback failed with error: ${U}`),b(U)}});Oe??=Ce();var p=await Fe(I,Oe,h),v=c(p);return v}class Ue{name="ExitStatus";constructor(a){this.message=`Program terminated with exit(${a})`,this.status=a}}var rt=r=>{for(;r.length>0;)r.shift()(t)},Ze=[],xt=r=>Ze.push(r),B=[],be=r=>B.push(r),ie=!0,he=r=>(P(typeof r=="number"),r>>>=0,"0x"+r.toString(16).padStart(8,"0")),Y=r=>Sc(r),j=()=>Ec(),$e=r=>{$e.shown||={},$e.shown[r]||($e.shown[r]=1,o&&(r="warning: "+r),L(r))},Tt=typeof TextDecoder<"u"?new TextDecoder:void 0,Rt=(r,a=0,c=NaN)=>{for(var h=a+c,p=a;r[p]&&!(p>=h);)++p;if(p-a>16&&r.buffer&&Tt)return Tt.decode(r.subarray(a,p));for(var v="";a<p;){var w=r[a++];if(!(w&128)){v+=String.fromCharCode(w);continue}var b=r[a++]&63;if((w&224)==192){v+=String.fromCharCode((w&31)<<6|b);continue}var U=r[a++]&63;if((w&240)==224?w=(w&15)<<12|b<<6|U:((w&248)!=240&&$e("Invalid UTF-8 leading byte "+he(w)+" encountered when deserializing a UTF-8 string in wasm memory to a JS string!"),w=(w&7)<<18|b<<12|U<<6|r[a++]&63),w<65536)v+=String.fromCharCode(w);else{var W=w-65536;v+=String.fromCharCode(55296|W>>10,56320|W&1023)}}return v},it=(r,a)=>(P(typeof r=="number",`UTF8ToString expects a number (got ${typeof r})`),r?Rt(_e,r,a):""),nn=(r,a,c,h)=>le(`Assertion failed: ${it(r)}, at: `+[a?it(a):"unknown filename",c,h?it(h):"unknown function"]),Lt=[],si=0,Ar=r=>{var a=new ai(r);return a.get_caught()||(a.set_caught(!0),si--),a.set_rethrown(!1),Lt.push(a),Yr(r),Tc(r)},Ln=()=>{if(!Lt.length)return 0;var r=Lt[Lt.length-1];return Yr(r.excPtr),r.excPtr},rn=0,Cr=()=>{ge(0,0),P(Lt.length>0);var r=Lt.pop();Js(r.excPtr),rn=0};class ai{constructor(a){this.excPtr=a,this.ptr=a-24}set_type(a){Me[this.ptr+4>>2]=a}get_type(){return Me[this.ptr+4>>2]}set_destructor(a){Me[this.ptr+8>>2]=a}get_destructor(){return Me[this.ptr+8>>2]}set_caught(a){a=a?1:0,ne[this.ptr+12]=a}get_caught(){return ne[this.ptr+12]!=0}set_rethrown(a){a=a?1:0,ne[this.ptr+13]=a}get_rethrown(){return ne[this.ptr+13]!=0}init(a,c){this.set_adjusted_ptr(0),this.set_type(a),this.set_destructor(c)}set_adjusted_ptr(a){Me[this.ptr+16>>2]=a}get_adjusted_ptr(){return Me[this.ptr+16>>2]}}var Fn=r=>xc(r),Ri=r=>{var a=rn?.excPtr;if(!a)return Fn(0),0;var c=new ai(a);c.set_adjusted_ptr(a);var h=c.get_type();if(!h)return Fn(0),a;for(var p of r){if(p===0||p===h)break;var v=c.ptr+16;if(bc(p,h,v))return Fn(p),a}return Fn(h),a},Pi=()=>Ri([]),Rr=r=>Ri([r]),Pr=(r,a)=>Ri([r,a]),Ir=()=>{var r=Lt.pop();r||le("no exception to throw");var a=r.excPtr;throw r.get_rethrown()||(Lt.push(r),r.set_rethrown(!0),r.set_caught(!1),si++),rn=new te(a),rn},Os=r=>{if(r){var a=new ai(r);Lt.push(a),a.set_rethrown(!0),Ir()}},ks=(r,a,c)=>{var h=new ai(r);throw h.init(a,c),rn=new te(r),si++,rn},R=()=>si,G=r=>{throw rn||(rn=new te(r)),rn},$={isAbs:r=>r.charAt(0)==="/",splitPath:r=>{var a=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;return a.exec(r).slice(1)},normalizeArray:(r,a)=>{for(var c=0,h=r.length-1;h>=0;h--){var p=r[h];p==="."?r.splice(h,1):p===".."?(r.splice(h,1),c++):c&&(r.splice(h,1),c--)}if(a)for(;c;c--)r.unshift("..");return r},normalize:r=>{var a=$.isAbs(r),c=r.slice(-1)==="/";return r=$.normalizeArray(r.split("/").filter(h=>!!h),!a).join("/"),!r&&!a&&(r="."),r&&c&&(r+="/"),(a?"/":"")+r},dirname:r=>{var a=$.splitPath(r),c=a[0],h=a[1];return!c&&!h?".":(h&&(h=h.slice(0,-1)),c+h)},basename:r=>r&&r.match(/([^\/]+|\/)\/*$/)[1],join:(...r)=>$.normalize(r.join("/")),join2:(r,a)=>$.normalize(r+"/"+a)},Q=()=>{if(o){var r=u("crypto");return a=>r.randomFillSync(a)}return a=>crypto.getRandomValues(a)},V=r=>{(V=Q())(r)},xe={resolve:(...r)=>{for(var a="",c=!1,h=r.length-1;h>=-1&&!c;h--){var p=h>=0?r[h]:M.cwd();if(typeof p!="string")throw new TypeError("Arguments to path.resolve must be strings");if(!p)return"";a=p+"/"+a,c=$.isAbs(p)}return a=$.normalizeArray(a.split("/").filter(v=>!!v),!c).join("/"),(c?"/":"")+a||"."},relative:(r,a)=>{r=xe.resolve(r).slice(1),a=xe.resolve(a).slice(1);function c(W){for(var q=0;q<W.length&&W[q]==="";q++);for(var oe=W.length-1;oe>=0&&W[oe]==="";oe--);return q>oe?[]:W.slice(q,oe-q+1)}for(var h=c(r.split("/")),p=c(a.split("/")),v=Math.min(h.length,p.length),w=v,b=0;b<v;b++)if(h[b]!==p[b]){w=b;break}for(var U=[],b=w;b<h.length;b++)U.push("..");return U=U.concat(p.slice(w)),U.join("/")}},Te=[],Ne=r=>{for(var a=0,c=0;c<r.length;++c){var h=r.charCodeAt(c);h<=127?a++:h<=2047?a+=2:h>=55296&&h<=57343?(a+=4,++c):a+=3}return a},ke=(r,a,c,h)=>{if(P(typeof r=="string",`stringToUTF8Array expects a string (got ${typeof r})`),!(h>0))return 0;for(var p=c,v=c+h-1,w=0;w<r.length;++w){var b=r.codePointAt(w);if(b<=127){if(c>=v)break;a[c++]=b}else if(b<=2047){if(c+1>=v)break;a[c++]=192|b>>6,a[c++]=128|b&63}else if(b<=65535){if(c+2>=v)break;a[c++]=224|b>>12,a[c++]=128|b>>6&63,a[c++]=128|b&63}else{if(c+3>=v)break;b>1114111&&$e("Invalid Unicode code point "+he(b)+" encountered when serializing a JS string to a UTF-8 string in wasm memory! (Valid unicode code points should be in range 0-0x10FFFF)."),a[c++]=240|b>>18,a[c++]=128|b>>12&63,a[c++]=128|b>>6&63,a[c++]=128|b&63,w++}}return a[c]=0,c-p},je=(r,a,c)=>{var h=Ne(r)+1,p=new Array(h),v=ke(r,p,0,p.length);return p.length=v,p},Je=()=>{if(!Te.length){var r=null;if(o){var a=256,c=Buffer.alloc(a),h=0,p=process.stdin.fd;try{h=_.readSync(p,c,0,a)}catch(v){if(v.toString().includes("EOF"))h=0;else throw v}h>0&&(r=c.slice(0,h).toString("utf-8"))}else typeof window<"u"&&typeof window.prompt=="function"&&(r=window.prompt("Input: "),r!==null&&(r+=`
`));if(!r)return null;Te=je(r)}return Te.shift()},Ie={ttys:[],init(){},shutdown(){},register(r,a){Ie.ttys[r]={input:[],output:[],ops:a},M.registerDevice(r,Ie.stream_ops)},stream_ops:{open(r){var a=Ie.ttys[r.node.rdev];if(!a)throw new M.ErrnoError(43);r.tty=a,r.seekable=!1},close(r){r.tty.ops.fsync(r.tty)},fsync(r){r.tty.ops.fsync(r.tty)},read(r,a,c,h,p){if(!r.tty||!r.tty.ops.get_char)throw new M.ErrnoError(60);for(var v=0,w=0;w<h;w++){var b;try{b=r.tty.ops.get_char(r.tty)}catch{throw new M.ErrnoError(29)}if(b===void 0&&v===0)throw new M.ErrnoError(6);if(b==null)break;v++,a[c+w]=b}return v&&(r.node.atime=Date.now()),v},write(r,a,c,h,p){if(!r.tty||!r.tty.ops.put_char)throw new M.ErrnoError(60);try{for(var v=0;v<h;v++)r.tty.ops.put_char(r.tty,a[c+v])}catch{throw new M.ErrnoError(29)}return h&&(r.node.mtime=r.node.ctime=Date.now()),v}},default_tty_ops:{get_char(r){return Je()},put_char(r,a){a===null||a===10?(N(Rt(r.output)),r.output=[]):a!=0&&r.output.push(a)},fsync(r){r.output?.length>0&&(N(Rt(r.output)),r.output=[])},ioctl_tcgets(r){return{c_iflag:25856,c_oflag:5,c_cflag:191,c_lflag:35387,c_cc:[3,28,127,21,4,0,1,0,17,19,26,0,18,15,23,22,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}},ioctl_tcsets(r,a,c){return 0},ioctl_tiocgwinsz(r){return[24,80]}},default_tty1_ops:{put_char(r,a){a===null||a===10?(L(Rt(r.output)),r.output=[]):a!=0&&r.output.push(a)},fsync(r){r.output?.length>0&&(L(Rt(r.output)),r.output=[])}}},ut=r=>{le("internal error: mmapAlloc called but `emscripten_builtin_memalign` native symbol not exported")},Re={ops_table:null,mount(r){return Re.createNode(null,"/",16895,0)},createNode(r,a,c,h){if(M.isBlkdev(c)||M.isFIFO(c))throw new M.ErrnoError(63);Re.ops_table||={dir:{node:{getattr:Re.node_ops.getattr,setattr:Re.node_ops.setattr,lookup:Re.node_ops.lookup,mknod:Re.node_ops.mknod,rename:Re.node_ops.rename,unlink:Re.node_ops.unlink,rmdir:Re.node_ops.rmdir,readdir:Re.node_ops.readdir,symlink:Re.node_ops.symlink},stream:{llseek:Re.stream_ops.llseek}},file:{node:{getattr:Re.node_ops.getattr,setattr:Re.node_ops.setattr},stream:{llseek:Re.stream_ops.llseek,read:Re.stream_ops.read,write:Re.stream_ops.write,mmap:Re.stream_ops.mmap,msync:Re.stream_ops.msync}},link:{node:{getattr:Re.node_ops.getattr,setattr:Re.node_ops.setattr,readlink:Re.node_ops.readlink},stream:{}},chrdev:{node:{getattr:Re.node_ops.getattr,setattr:Re.node_ops.setattr},stream:M.chrdev_stream_ops}};var p=M.createNode(r,a,c,h);return M.isDir(p.mode)?(p.node_ops=Re.ops_table.dir.node,p.stream_ops=Re.ops_table.dir.stream,p.contents={}):M.isFile(p.mode)?(p.node_ops=Re.ops_table.file.node,p.stream_ops=Re.ops_table.file.stream,p.usedBytes=0,p.contents=null):M.isLink(p.mode)?(p.node_ops=Re.ops_table.link.node,p.stream_ops=Re.ops_table.link.stream):M.isChrdev(p.mode)&&(p.node_ops=Re.ops_table.chrdev.node,p.stream_ops=Re.ops_table.chrdev.stream),p.atime=p.mtime=p.ctime=Date.now(),r&&(r.contents[a]=p,r.atime=r.mtime=r.ctime=p.atime),p},getFileDataAsTypedArray(r){return r.contents?r.contents.subarray?r.contents.subarray(0,r.usedBytes):new Uint8Array(r.contents):new Uint8Array(0)},expandFileStorage(r,a){var c=r.contents?r.contents.length:0;if(!(c>=a)){var h=1024*1024;a=Math.max(a,c*(c<h?2:1.125)>>>0),c!=0&&(a=Math.max(a,256));var p=r.contents;r.contents=new Uint8Array(a),r.usedBytes>0&&r.contents.set(p.subarray(0,r.usedBytes),0)}},resizeFileStorage(r,a){if(r.usedBytes!=a)if(a==0)r.contents=null,r.usedBytes=0;else{var c=r.contents;r.contents=new Uint8Array(a),c&&r.contents.set(c.subarray(0,Math.min(a,r.usedBytes))),r.usedBytes=a}},node_ops:{getattr(r){var a={};return a.dev=M.isChrdev(r.mode)?r.id:1,a.ino=r.id,a.mode=r.mode,a.nlink=1,a.uid=0,a.gid=0,a.rdev=r.rdev,M.isDir(r.mode)?a.size=4096:M.isFile(r.mode)?a.size=r.usedBytes:M.isLink(r.mode)?a.size=r.link.length:a.size=0,a.atime=new Date(r.atime),a.mtime=new Date(r.mtime),a.ctime=new Date(r.ctime),a.blksize=4096,a.blocks=Math.ceil(a.size/a.blksize),a},setattr(r,a){for(const c of["mode","atime","mtime","ctime"])a[c]!=null&&(r[c]=a[c]);a.size!==void 0&&Re.resizeFileStorage(r,a.size)},lookup(r,a){throw new M.ErrnoError(44)},mknod(r,a,c,h){return Re.createNode(r,a,c,h)},rename(r,a,c){var h;try{h=M.lookupNode(a,c)}catch{}if(h){if(M.isDir(r.mode))for(var p in h.contents)throw new M.ErrnoError(55);M.hashRemoveNode(h)}delete r.parent.contents[r.name],a.contents[c]=r,r.name=c,a.ctime=a.mtime=r.parent.ctime=r.parent.mtime=Date.now()},unlink(r,a){delete r.contents[a],r.ctime=r.mtime=Date.now()},rmdir(r,a){var c=M.lookupNode(r,a);for(var h in c.contents)throw new M.ErrnoError(55);delete r.contents[a],r.ctime=r.mtime=Date.now()},readdir(r){return[".","..",...Object.keys(r.contents)]},symlink(r,a,c){var h=Re.createNode(r,a,41471,0);return h.link=c,h},readlink(r){if(!M.isLink(r.mode))throw new M.ErrnoError(28);return r.link}},stream_ops:{read(r,a,c,h,p){var v=r.node.contents;if(p>=r.node.usedBytes)return 0;var w=Math.min(r.node.usedBytes-p,h);if(P(w>=0),w>8&&v.subarray)a.set(v.subarray(p,p+w),c);else for(var b=0;b<w;b++)a[c+b]=v[p+b];return w},write(r,a,c,h,p,v){if(P(!(a instanceof ArrayBuffer)),a.buffer===ne.buffer&&(v=!1),!h)return 0;var w=r.node;if(w.mtime=w.ctime=Date.now(),a.subarray&&(!w.contents||w.contents.subarray)){if(v)return P(p===0,"canOwn must imply no weird position inside the file"),w.contents=a.subarray(c,c+h),w.usedBytes=h,h;if(w.usedBytes===0&&p===0)return w.contents=a.slice(c,c+h),w.usedBytes=h,h;if(p+h<=w.usedBytes)return w.contents.set(a.subarray(c,c+h),p),h}if(Re.expandFileStorage(w,p+h),w.contents.subarray&&a.subarray)w.contents.set(a.subarray(c,c+h),p);else for(var b=0;b<h;b++)w.contents[p+b]=a[c+b];return w.usedBytes=Math.max(w.usedBytes,p+h),h},llseek(r,a,c){var h=a;if(c===1?h+=r.position:c===2&&M.isFile(r.node.mode)&&(h+=r.node.usedBytes),h<0)throw new M.ErrnoError(28);return h},mmap(r,a,c,h,p){if(!M.isFile(r.node.mode))throw new M.ErrnoError(43);var v,w,b=r.node.contents;if(!(p&2)&&b&&b.buffer===ne.buffer)w=!1,v=b.byteOffset;else{if(w=!0,v=ut(),!v)throw new M.ErrnoError(48);b&&((c>0||c+a<b.length)&&(b.subarray?b=b.subarray(c,c+a):b=Array.prototype.slice.call(b,c,c+a)),ne.set(b,v))}return{ptr:v,allocated:w}},msync(r,a,c,h,p){return Re.stream_ops.write(r,a,0,h,c,!1),0}}},Et=async r=>{var a=await y(r);return P(a,`Loading data file "${r}" failed (no arrayBuffer).`),new Uint8Array(a)},Ht=(...r)=>M.createDataFile(...r),vt=r=>{for(var a=r;;){if(!F[r])return r;r=a+Math.random()}},Be=[],pn=(r,a,c,h)=>{typeof Browser<"u"&&Browser.init();var p=!1;return Be.forEach(v=>{p||v.canHandle(a)&&(v.handle(r,a,c,h),p=!0)}),p},mt=(r,a,c,h,p,v,w,b,U,W)=>{var q=a?xe.resolve($.join2(r,a)):r,oe=vt(`cp ${q}`);function ue(ce){function me(Ve){W?.(),b||Ht(r,a,Ve,h,p,U),v?.(),de(oe)}pn(ce,q,me,()=>{w?.(),de(oe)})||me(ce)}J(oe),typeof c=="string"?Et(c).then(ue,w):ue(c)},sn=r=>{var a={r:0,"r+":2,w:577,"w+":578,a:1089,"a+":1090},c=a[r];if(typeof c>"u")throw new Error(`Unknown file open mode: ${r}`);return c},Mn=(r,a)=>{var c=0;return r&&(c|=365),a&&(c|=146),c},Yt=r=>it(vc(r)),$n={EPERM:63,ENOENT:44,ESRCH:71,EINTR:27,EIO:29,ENXIO:60,E2BIG:1,ENOEXEC:45,EBADF:8,ECHILD:12,EAGAIN:6,EWOULDBLOCK:6,ENOMEM:48,EACCES:2,EFAULT:21,ENOTBLK:105,EBUSY:10,EEXIST:20,EXDEV:75,ENODEV:43,ENOTDIR:54,EISDIR:31,EINVAL:28,ENFILE:41,EMFILE:33,ENOTTY:59,ETXTBSY:74,EFBIG:22,ENOSPC:51,ESPIPE:70,EROFS:69,EMLINK:34,EPIPE:64,EDOM:18,ERANGE:68,ENOMSG:49,EIDRM:24,ECHRNG:106,EL2NSYNC:156,EL3HLT:107,EL3RST:108,ELNRNG:109,EUNATCH:110,ENOCSI:111,EL2HLT:112,EDEADLK:16,ENOLCK:46,EBADE:113,EBADR:114,EXFULL:115,ENOANO:104,EBADRQC:103,EBADSLT:102,EDEADLOCK:16,EBFONT:101,ENOSTR:100,ENODATA:116,ETIME:117,ENOSR:118,ENONET:119,ENOPKG:120,EREMOTE:121,ENOLINK:47,EADV:122,ESRMNT:123,ECOMM:124,EPROTO:65,EMULTIHOP:36,EDOTDOT:125,EBADMSG:9,ENOTUNIQ:126,EBADFD:127,EREMCHG:128,ELIBACC:129,ELIBBAD:130,ELIBSCN:131,ELIBMAX:132,ELIBEXEC:133,ENOSYS:52,ENOTEMPTY:55,ENAMETOOLONG:37,ELOOP:32,EOPNOTSUPP:138,EPFNOSUPPORT:139,ECONNRESET:15,ENOBUFS:42,EAFNOSUPPORT:5,EPROTOTYPE:67,ENOTSOCK:57,ENOPROTOOPT:50,ESHUTDOWN:140,ECONNREFUSED:14,EADDRINUSE:3,ECONNABORTED:13,ENETUNREACH:40,ENETDOWN:38,ETIMEDOUT:73,EHOSTDOWN:142,EHOSTUNREACH:23,EINPROGRESS:26,EALREADY:7,EDESTADDRREQ:17,EMSGSIZE:35,EPROTONOSUPPORT:66,ESOCKTNOSUPPORT:137,EADDRNOTAVAIL:4,ENETRESET:39,EISCONN:30,ENOTCONN:53,ETOOMANYREFS:141,EUSERS:136,EDQUOT:19,ESTALE:72,ENOTSUP:138,ENOMEDIUM:148,EILSEQ:25,EOVERFLOW:61,ECANCELED:11,ENOTRECOVERABLE:56,EOWNERDEAD:62,ESTRPIPE:135},M={root:null,mounts:[],devices:{},streams:[],nextInode:1,nameTable:null,currentPath:"/",initialized:!1,ignorePermissions:!0,filesystems:null,syncFSRequests:0,readFiles:{},ErrnoError:class extends Error{name="ErrnoError";constructor(r){super(H?Yt(r):""),this.errno=r;for(var a in $n)if($n[a]===r){this.code=a;break}}},FSStream:class{shared={};get object(){return this.node}set object(r){this.node=r}get isRead(){return(this.flags&2097155)!==1}get isWrite(){return(this.flags&2097155)!==0}get isAppend(){return this.flags&1024}get flags(){return this.shared.flags}set flags(r){this.shared.flags=r}get position(){return this.shared.position}set position(r){this.shared.position=r}},FSNode:class{node_ops={};stream_ops={};readMode=365;writeMode=146;mounted=null;constructor(r,a,c,h){r||(r=this),this.parent=r,this.mount=r.mount,this.id=M.nextInode++,this.name=a,this.mode=c,this.rdev=h,this.atime=this.mtime=this.ctime=Date.now()}get read(){return(this.mode&this.readMode)===this.readMode}set read(r){r?this.mode|=this.readMode:this.mode&=~this.readMode}get write(){return(this.mode&this.writeMode)===this.writeMode}set write(r){r?this.mode|=this.writeMode:this.mode&=~this.writeMode}get isFolder(){return M.isDir(this.mode)}get isDevice(){return M.isChrdev(this.mode)}},lookupPath(r,a={}){if(!r)throw new M.ErrnoError(44);a.follow_mount??=!0,$.isAbs(r)||(r=M.cwd()+"/"+r);e:for(var c=0;c<40;c++){for(var h=r.split("/").filter(W=>!!W),p=M.root,v="/",w=0;w<h.length;w++){var b=w===h.length-1;if(b&&a.parent)break;if(h[w]!=="."){if(h[w]===".."){if(v=$.dirname(v),M.isRoot(p)){r=v+"/"+h.slice(w+1).join("/");continue e}else p=p.parent;continue}v=$.join2(v,h[w]);try{p=M.lookupNode(p,h[w])}catch(W){if(W?.errno===44&&b&&a.noent_okay)return{path:v};throw W}if(M.isMountpoint(p)&&(!b||a.follow_mount)&&(p=p.mounted.root),M.isLink(p.mode)&&(!b||a.follow)){if(!p.node_ops.readlink)throw new M.ErrnoError(52);var U=p.node_ops.readlink(p);$.isAbs(U)||(U=$.dirname(v)+"/"+U),r=U+"/"+h.slice(w+1).join("/");continue e}}}return{path:v,node:p}}throw new M.ErrnoError(32)},getPath(r){for(var a;;){if(M.isRoot(r)){var c=r.mount.mountpoint;return a?c[c.length-1]!=="/"?`${c}/${a}`:c+a:c}a=a?`${r.name}/${a}`:r.name,r=r.parent}},hashName(r,a){for(var c=0,h=0;h<a.length;h++)c=(c<<5)-c+a.charCodeAt(h)|0;return(r+c>>>0)%M.nameTable.length},hashAddNode(r){var a=M.hashName(r.parent.id,r.name);r.name_next=M.nameTable[a],M.nameTable[a]=r},hashRemoveNode(r){var a=M.hashName(r.parent.id,r.name);if(M.nameTable[a]===r)M.nameTable[a]=r.name_next;else for(var c=M.nameTable[a];c;){if(c.name_next===r){c.name_next=r.name_next;break}c=c.name_next}},lookupNode(r,a){var c=M.mayLookup(r);if(c)throw new M.ErrnoError(c);for(var h=M.hashName(r.id,a),p=M.nameTable[h];p;p=p.name_next){var v=p.name;if(p.parent.id===r.id&&v===a)return p}return M.lookup(r,a)},createNode(r,a,c,h){P(typeof r=="object");var p=new M.FSNode(r,a,c,h);return M.hashAddNode(p),p},destroyNode(r){M.hashRemoveNode(r)},isRoot(r){return r===r.parent},isMountpoint(r){return!!r.mounted},isFile(r){return(r&61440)===32768},isDir(r){return(r&61440)===16384},isLink(r){return(r&61440)===40960},isChrdev(r){return(r&61440)===8192},isBlkdev(r){return(r&61440)===24576},isFIFO(r){return(r&61440)===4096},isSocket(r){return(r&49152)===49152},flagsToPermissionString(r){var a=["r","w","rw"][r&3];return r&512&&(a+="w"),a},nodePermissions(r,a){return M.ignorePermissions?0:a.includes("r")&&!(r.mode&292)||a.includes("w")&&!(r.mode&146)||a.includes("x")&&!(r.mode&73)?2:0},mayLookup(r){if(!M.isDir(r.mode))return 54;var a=M.nodePermissions(r,"x");return a||(r.node_ops.lookup?0:2)},mayCreate(r,a){if(!M.isDir(r.mode))return 54;try{var c=M.lookupNode(r,a);return 20}catch{}return M.nodePermissions(r,"wx")},mayDelete(r,a,c){var h;try{h=M.lookupNode(r,a)}catch(v){return v.errno}var p=M.nodePermissions(r,"wx");if(p)return p;if(c){if(!M.isDir(h.mode))return 54;if(M.isRoot(h)||M.getPath(h)===M.cwd())return 10}else if(M.isDir(h.mode))return 31;return 0},mayOpen(r,a){return r?M.isLink(r.mode)?32:M.isDir(r.mode)&&(M.flagsToPermissionString(a)!=="r"||a&576)?31:M.nodePermissions(r,M.flagsToPermissionString(a)):44},checkOpExists(r,a){if(!r)throw new M.ErrnoError(a);return r},MAX_OPEN_FDS:4096,nextfd(){for(var r=0;r<=M.MAX_OPEN_FDS;r++)if(!M.streams[r])return r;throw new M.ErrnoError(33)},getStreamChecked(r){var a=M.getStream(r);if(!a)throw new M.ErrnoError(8);return a},getStream:r=>M.streams[r],createStream(r,a=-1){return P(a>=-1),r=Object.assign(new M.FSStream,r),a==-1&&(a=M.nextfd()),r.fd=a,M.streams[a]=r,r},closeStream(r){M.streams[r]=null},dupStream(r,a=-1){var c=M.createStream(r,a);return c.stream_ops?.dup?.(c),c},doSetAttr(r,a,c){var h=r?.stream_ops.setattr,p=h?r:a;h??=a.node_ops.setattr,M.checkOpExists(h,63),h(p,c)},chrdev_stream_ops:{open(r){var a=M.getDevice(r.node.rdev);r.stream_ops=a.stream_ops,r.stream_ops.open?.(r)},llseek(){throw new M.ErrnoError(70)}},major:r=>r>>8,minor:r=>r&255,makedev:(r,a)=>r<<8|a,registerDevice(r,a){M.devices[r]={stream_ops:a}},getDevice:r=>M.devices[r],getMounts(r){for(var a=[],c=[r];c.length;){var h=c.pop();a.push(h),c.push(...h.mounts)}return a},syncfs(r,a){typeof r=="function"&&(a=r,r=!1),M.syncFSRequests++,M.syncFSRequests>1&&L(`warning: ${M.syncFSRequests} FS.syncfs operations in flight at once, probably just doing extra work`);var c=M.getMounts(M.root.mount),h=0;function p(w){return P(M.syncFSRequests>0),M.syncFSRequests--,a(w)}function v(w){if(w)return v.errored?void 0:(v.errored=!0,p(w));++h>=c.length&&p(null)}c.forEach(w=>{if(!w.type.syncfs)return v(null);w.type.syncfs(w,r,v)})},mount(r,a,c){if(typeof r=="string")throw r;var h=c==="/",p=!c,v;if(h&&M.root)throw new M.ErrnoError(10);if(!h&&!p){var w=M.lookupPath(c,{follow_mount:!1});if(c=w.path,v=w.node,M.isMountpoint(v))throw new M.ErrnoError(10);if(!M.isDir(v.mode))throw new M.ErrnoError(54)}var b={type:r,opts:a,mountpoint:c,mounts:[]},U=r.mount(b);return U.mount=b,b.root=U,h?M.root=U:v&&(v.mounted=b,v.mount&&v.mount.mounts.push(b)),U},unmount(r){var a=M.lookupPath(r,{follow_mount:!1});if(!M.isMountpoint(a.node))throw new M.ErrnoError(28);var c=a.node,h=c.mounted,p=M.getMounts(h);Object.keys(M.nameTable).forEach(w=>{for(var b=M.nameTable[w];b;){var U=b.name_next;p.includes(b.mount)&&M.destroyNode(b),b=U}}),c.mounted=null;var v=c.mount.mounts.indexOf(h);P(v!==-1),c.mount.mounts.splice(v,1)},lookup(r,a){return r.node_ops.lookup(r,a)},mknod(r,a,c){var h=M.lookupPath(r,{parent:!0}),p=h.node,v=$.basename(r);if(!v)throw new M.ErrnoError(28);if(v==="."||v==="..")throw new M.ErrnoError(20);var w=M.mayCreate(p,v);if(w)throw new M.ErrnoError(w);if(!p.node_ops.mknod)throw new M.ErrnoError(63);return p.node_ops.mknod(p,v,a,c)},statfs(r){return M.statfsNode(M.lookupPath(r,{follow:!0}).node)},statfsStream(r){return M.statfsNode(r.node)},statfsNode(r){var a={bsize:4096,frsize:4096,blocks:1e6,bfree:5e5,bavail:5e5,files:M.nextInode,ffree:M.nextInode-1,fsid:42,flags:2,namelen:255};return r.node_ops.statfs&&Object.assign(a,r.node_ops.statfs(r.mount.opts.root)),a},create(r,a=438){return a&=4095,a|=32768,M.mknod(r,a,0)},mkdir(r,a=511){return a&=1023,a|=16384,M.mknod(r,a,0)},mkdirTree(r,a){var c=r.split("/"),h="";for(var p of c)if(p){(h||$.isAbs(r))&&(h+="/"),h+=p;try{M.mkdir(h,a)}catch(v){if(v.errno!=20)throw v}}},mkdev(r,a,c){return typeof c>"u"&&(c=a,a=438),a|=8192,M.mknod(r,a,c)},symlink(r,a){if(!xe.resolve(r))throw new M.ErrnoError(44);var c=M.lookupPath(a,{parent:!0}),h=c.node;if(!h)throw new M.ErrnoError(44);var p=$.basename(a),v=M.mayCreate(h,p);if(v)throw new M.ErrnoError(v);if(!h.node_ops.symlink)throw new M.ErrnoError(63);return h.node_ops.symlink(h,p,r)},rename(r,a){var c=$.dirname(r),h=$.dirname(a),p=$.basename(r),v=$.basename(a),w,b,U;if(w=M.lookupPath(r,{parent:!0}),b=w.node,w=M.lookupPath(a,{parent:!0}),U=w.node,!b||!U)throw new M.ErrnoError(44);if(b.mount!==U.mount)throw new M.ErrnoError(75);var W=M.lookupNode(b,p),q=xe.relative(r,h);if(q.charAt(0)!==".")throw new M.ErrnoError(28);if(q=xe.relative(a,c),q.charAt(0)!==".")throw new M.ErrnoError(55);var oe;try{oe=M.lookupNode(U,v)}catch{}if(W!==oe){var ue=M.isDir(W.mode),ce=M.mayDelete(b,p,ue);if(ce)throw new M.ErrnoError(ce);if(ce=oe?M.mayDelete(U,v,ue):M.mayCreate(U,v),ce)throw new M.ErrnoError(ce);if(!b.node_ops.rename)throw new M.ErrnoError(63);if(M.isMountpoint(W)||oe&&M.isMountpoint(oe))throw new M.ErrnoError(10);if(U!==b&&(ce=M.nodePermissions(b,"w"),ce))throw new M.ErrnoError(ce);M.hashRemoveNode(W);try{b.node_ops.rename(W,U,v),W.parent=U}catch(me){throw me}finally{M.hashAddNode(W)}}},rmdir(r){var a=M.lookupPath(r,{parent:!0}),c=a.node,h=$.basename(r),p=M.lookupNode(c,h),v=M.mayDelete(c,h,!0);if(v)throw new M.ErrnoError(v);if(!c.node_ops.rmdir)throw new M.ErrnoError(63);if(M.isMountpoint(p))throw new M.ErrnoError(10);c.node_ops.rmdir(c,h),M.destroyNode(p)},readdir(r){var a=M.lookupPath(r,{follow:!0}),c=a.node,h=M.checkOpExists(c.node_ops.readdir,54);return h(c)},unlink(r){var a=M.lookupPath(r,{parent:!0}),c=a.node;if(!c)throw new M.ErrnoError(44);var h=$.basename(r),p=M.lookupNode(c,h),v=M.mayDelete(c,h,!1);if(v)throw new M.ErrnoError(v);if(!c.node_ops.unlink)throw new M.ErrnoError(63);if(M.isMountpoint(p))throw new M.ErrnoError(10);c.node_ops.unlink(c,h),M.destroyNode(p)},readlink(r){var a=M.lookupPath(r),c=a.node;if(!c)throw new M.ErrnoError(44);if(!c.node_ops.readlink)throw new M.ErrnoError(28);return c.node_ops.readlink(c)},stat(r,a){var c=M.lookupPath(r,{follow:!a}),h=c.node,p=M.checkOpExists(h.node_ops.getattr,63);return p(h)},fstat(r){var a=M.getStreamChecked(r),c=a.node,h=a.stream_ops.getattr,p=h?a:c;return h??=c.node_ops.getattr,M.checkOpExists(h,63),h(p)},lstat(r){return M.stat(r,!0)},doChmod(r,a,c,h){M.doSetAttr(r,a,{mode:c&4095|a.mode&-4096,ctime:Date.now(),dontFollow:h})},chmod(r,a,c){var h;if(typeof r=="string"){var p=M.lookupPath(r,{follow:!c});h=p.node}else h=r;M.doChmod(null,h,a,c)},lchmod(r,a){M.chmod(r,a,!0)},fchmod(r,a){var c=M.getStreamChecked(r);M.doChmod(c,c.node,a,!1)},doChown(r,a,c){M.doSetAttr(r,a,{timestamp:Date.now(),dontFollow:c})},chown(r,a,c,h){var p;if(typeof r=="string"){var v=M.lookupPath(r,{follow:!h});p=v.node}else p=r;M.doChown(null,p,h)},lchown(r,a,c){M.chown(r,a,c,!0)},fchown(r,a,c){var h=M.getStreamChecked(r);M.doChown(h,h.node,!1)},doTruncate(r,a,c){if(M.isDir(a.mode))throw new M.ErrnoError(31);if(!M.isFile(a.mode))throw new M.ErrnoError(28);var h=M.nodePermissions(a,"w");if(h)throw new M.ErrnoError(h);M.doSetAttr(r,a,{size:c,timestamp:Date.now()})},truncate(r,a){if(a<0)throw new M.ErrnoError(28);var c;if(typeof r=="string"){var h=M.lookupPath(r,{follow:!0});c=h.node}else c=r;M.doTruncate(null,c,a)},ftruncate(r,a){var c=M.getStreamChecked(r);if(a<0||(c.flags&2097155)===0)throw new M.ErrnoError(28);M.doTruncate(c,c.node,a)},utime(r,a,c){var h=M.lookupPath(r,{follow:!0}),p=h.node,v=M.checkOpExists(p.node_ops.setattr,63);v(p,{atime:a,mtime:c})},open(r,a,c=438){if(r==="")throw new M.ErrnoError(44);a=typeof a=="string"?sn(a):a,a&64?c=c&4095|32768:c=0;var h,p;if(typeof r=="object")h=r;else{p=r.endsWith("/");var v=M.lookupPath(r,{follow:!(a&131072),noent_okay:!0});h=v.node,r=v.path}var w=!1;if(a&64)if(h){if(a&128)throw new M.ErrnoError(20)}else{if(p)throw new M.ErrnoError(31);h=M.mknod(r,c|511,0),w=!0}if(!h)throw new M.ErrnoError(44);if(M.isChrdev(h.mode)&&(a&=-513),a&65536&&!M.isDir(h.mode))throw new M.ErrnoError(54);if(!w){var b=M.mayOpen(h,a);if(b)throw new M.ErrnoError(b)}a&512&&!w&&M.truncate(h,0),a&=-131713;var U=M.createStream({node:h,path:M.getPath(h),flags:a,seekable:!0,position:0,stream_ops:h.stream_ops,ungotten:[],error:!1});return U.stream_ops.open&&U.stream_ops.open(U),w&&M.chmod(h,c&511),t.logReadFiles&&!(a&1)&&(r in M.readFiles||(M.readFiles[r]=1)),U},close(r){if(M.isClosed(r))throw new M.ErrnoError(8);r.getdents&&(r.getdents=null);try{r.stream_ops.close&&r.stream_ops.close(r)}catch(a){throw a}finally{M.closeStream(r.fd)}r.fd=null},isClosed(r){return r.fd===null},llseek(r,a,c){if(M.isClosed(r))throw new M.ErrnoError(8);if(!r.seekable||!r.stream_ops.llseek)throw new M.ErrnoError(70);if(c!=0&&c!=1&&c!=2)throw new M.ErrnoError(28);return r.position=r.stream_ops.llseek(r,a,c),r.ungotten=[],r.position},read(r,a,c,h,p){if(P(c>=0),h<0||p<0)throw new M.ErrnoError(28);if(M.isClosed(r))throw new M.ErrnoError(8);if((r.flags&2097155)===1)throw new M.ErrnoError(8);if(M.isDir(r.node.mode))throw new M.ErrnoError(31);if(!r.stream_ops.read)throw new M.ErrnoError(28);var v=typeof p<"u";if(!v)p=r.position;else if(!r.seekable)throw new M.ErrnoError(70);var w=r.stream_ops.read(r,a,c,h,p);return v||(r.position+=w),w},write(r,a,c,h,p,v){if(P(c>=0),h<0||p<0)throw new M.ErrnoError(28);if(M.isClosed(r))throw new M.ErrnoError(8);if((r.flags&2097155)===0)throw new M.ErrnoError(8);if(M.isDir(r.node.mode))throw new M.ErrnoError(31);if(!r.stream_ops.write)throw new M.ErrnoError(28);r.seekable&&r.flags&1024&&M.llseek(r,0,2);var w=typeof p<"u";if(!w)p=r.position;else if(!r.seekable)throw new M.ErrnoError(70);var b=r.stream_ops.write(r,a,c,h,p,v);return w||(r.position+=b),b},mmap(r,a,c,h,p){if((h&2)!==0&&(p&2)===0&&(r.flags&2097155)!==2)throw new M.ErrnoError(2);if((r.flags&2097155)===1)throw new M.ErrnoError(2);if(!r.stream_ops.mmap)throw new M.ErrnoError(43);if(!a)throw new M.ErrnoError(28);return r.stream_ops.mmap(r,a,c,h,p)},msync(r,a,c,h,p){return P(c>=0),r.stream_ops.msync?r.stream_ops.msync(r,a,c,h,p):0},ioctl(r,a,c){if(!r.stream_ops.ioctl)throw new M.ErrnoError(59);return r.stream_ops.ioctl(r,a,c)},readFile(r,a={}){if(a.flags=a.flags||0,a.encoding=a.encoding||"binary",a.encoding!=="utf8"&&a.encoding!=="binary")throw new Error(`Invalid encoding type "${a.encoding}"`);var c=M.open(r,a.flags),h=M.stat(r),p=h.size,v=new Uint8Array(p);return M.read(c,v,0,p,0),a.encoding==="utf8"&&(v=Rt(v)),M.close(c),v},writeFile(r,a,c={}){c.flags=c.flags||577;var h=M.open(r,c.flags,c.mode);if(typeof a=="string"&&(a=new Uint8Array(je(a))),ArrayBuffer.isView(a))M.write(h,a,0,a.byteLength,void 0,c.canOwn);else throw new Error("Unsupported data type");M.close(h)},cwd:()=>M.currentPath,chdir(r){var a=M.lookupPath(r,{follow:!0});if(a.node===null)throw new M.ErrnoError(44);if(!M.isDir(a.node.mode))throw new M.ErrnoError(54);var c=M.nodePermissions(a.node,"x");if(c)throw new M.ErrnoError(c);M.currentPath=a.path},createDefaultDirectories(){M.mkdir("/tmp"),M.mkdir("/home"),M.mkdir("/home/web_user")},createDefaultDevices(){M.mkdir("/dev"),M.registerDevice(M.makedev(1,3),{read:()=>0,write:(h,p,v,w,b)=>w,llseek:()=>0}),M.mkdev("/dev/null",M.makedev(1,3)),Ie.register(M.makedev(5,0),Ie.default_tty_ops),Ie.register(M.makedev(6,0),Ie.default_tty1_ops),M.mkdev("/dev/tty",M.makedev(5,0)),M.mkdev("/dev/tty1",M.makedev(6,0));var r=new Uint8Array(1024),a=0,c=()=>(a===0&&(V(r),a=r.byteLength),r[--a]);M.createDevice("/dev","random",c),M.createDevice("/dev","urandom",c),M.mkdir("/dev/shm"),M.mkdir("/dev/shm/tmp")},createSpecialDirectories(){M.mkdir("/proc");var r=M.mkdir("/proc/self");M.mkdir("/proc/self/fd"),M.mount({mount(){var a=M.createNode(r,"fd",16895,73);return a.stream_ops={llseek:Re.stream_ops.llseek},a.node_ops={lookup(c,h){var p=+h,v=M.getStreamChecked(p),w={parent:null,mount:{mountpoint:"fake"},node_ops:{readlink:()=>v.path},id:p+1};return w.parent=w,w},readdir(){return Array.from(M.streams.entries()).filter(([c,h])=>h).map(([c,h])=>c.toString())}},a}},{},"/proc/self/fd")},createStandardStreams(r,a,c){r?M.createDevice("/dev","stdin",r):M.symlink("/dev/tty","/dev/stdin"),a?M.createDevice("/dev","stdout",null,a):M.symlink("/dev/tty","/dev/stdout"),c?M.createDevice("/dev","stderr",null,c):M.symlink("/dev/tty1","/dev/stderr");var h=M.open("/dev/stdin",0),p=M.open("/dev/stdout",1),v=M.open("/dev/stderr",1);P(h.fd===0,`invalid handle for stdin (${h.fd})`),P(p.fd===1,`invalid handle for stdout (${p.fd})`),P(v.fd===2,`invalid handle for stderr (${v.fd})`)},staticInit(){M.nameTable=new Array(4096),M.mount(Re,{},"/"),M.createDefaultDirectories(),M.createDefaultDevices(),M.createSpecialDirectories(),M.filesystems={MEMFS:Re}},init(r,a,c){P(!M.initialized,"FS.init was previously called. If you want to initialize later with custom parameters, remove any earlier calls (note that one is automatically added to the generated code)"),M.initialized=!0,r??=t.stdin,a??=t.stdout,c??=t.stderr,M.createStandardStreams(r,a,c)},quit(){M.initialized=!1,qs(0);for(var r of M.streams)r&&M.close(r)},findObject(r,a){var c=M.analyzePath(r,a);return c.exists?c.object:null},analyzePath(r,a){try{var c=M.lookupPath(r,{follow:!a});r=c.path}catch{}var h={isRoot:!1,exists:!1,error:0,name:null,path:null,object:null,parentExists:!1,parentPath:null,parentObject:null};try{var c=M.lookupPath(r,{parent:!0});h.parentExists=!0,h.parentPath=c.path,h.parentObject=c.node,h.name=$.basename(r),c=M.lookupPath(r,{follow:!a}),h.exists=!0,h.path=c.path,h.object=c.node,h.name=c.node.name,h.isRoot=c.path==="/"}catch(p){h.error=p.errno}return h},createPath(r,a,c,h){r=typeof r=="string"?r:M.getPath(r);for(var p=a.split("/").reverse();p.length;){var v=p.pop();if(v){var w=$.join2(r,v);try{M.mkdir(w)}catch(b){if(b.errno!=20)throw b}r=w}}return w},createFile(r,a,c,h,p){var v=$.join2(typeof r=="string"?r:M.getPath(r),a),w=Mn(h,p);return M.create(v,w)},createDataFile(r,a,c,h,p,v){var w=a;r&&(r=typeof r=="string"?r:M.getPath(r),w=a?$.join2(r,a):r);var b=Mn(h,p),U=M.create(w,b);if(c){if(typeof c=="string"){for(var W=new Array(c.length),q=0,oe=c.length;q<oe;++q)W[q]=c.charCodeAt(q);c=W}M.chmod(U,b|146);var ue=M.open(U,577);M.write(ue,c,0,c.length,0,v),M.close(ue),M.chmod(U,b)}},createDevice(r,a,c,h){var p=$.join2(typeof r=="string"?r:M.getPath(r),a),v=Mn(!!c,!!h);M.createDevice.major??=64;var w=M.makedev(M.createDevice.major++,0);return M.registerDevice(w,{open(b){b.seekable=!1},close(b){h?.buffer?.length&&h(10)},read(b,U,W,q,oe){for(var ue=0,ce=0;ce<q;ce++){var me;try{me=c()}catch{throw new M.ErrnoError(29)}if(me===void 0&&ue===0)throw new M.ErrnoError(6);if(me==null)break;ue++,U[W+ce]=me}return ue&&(b.node.atime=Date.now()),ue},write(b,U,W,q,oe){for(var ue=0;ue<q;ue++)try{h(U[W+ue])}catch{throw new M.ErrnoError(29)}return q&&(b.node.mtime=b.node.ctime=Date.now()),ue}}),M.mkdev(p,v,w)},forceLoadFile(r){if(r.isDevice||r.isFolder||r.link||r.contents)return!0;if(typeof XMLHttpRequest<"u")throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");try{r.contents=T(r.url),r.usedBytes=r.contents.length}catch{throw new M.ErrnoError(29)}},createLazyFile(r,a,c,h,p){class v{lengthKnown=!1;chunks=[];get(ce){if(!(ce>this.length-1||ce<0)){var me=ce%this.chunkSize,Ve=ce/this.chunkSize|0;return this.getter(Ve)[me]}}setDataGetter(ce){this.getter=ce}cacheLength(){var ce=new XMLHttpRequest;if(ce.open("HEAD",c,!1),ce.send(null),!(ce.status>=200&&ce.status<300||ce.status===304))throw new Error("Couldn't load "+c+". Status: "+ce.status);var me=Number(ce.getResponseHeader("Content-length")),Ve,ct=(Ve=ce.getResponseHeader("Accept-Ranges"))&&Ve==="bytes",tt=(Ve=ce.getResponseHeader("Content-Encoding"))&&Ve==="gzip",wt=1024*1024;ct||(wt=me);var _t=(Nt,Zt)=>{if(Nt>Zt)throw new Error("invalid range ("+Nt+", "+Zt+") or no bytes requested!");if(Zt>me-1)throw new Error("only "+me+" bytes available! programmer error!");var yt=new XMLHttpRequest;if(yt.open("GET",c,!1),me!==wt&&yt.setRequestHeader("Range","bytes="+Nt+"-"+Zt),yt.responseType="arraybuffer",yt.overrideMimeType&&yt.overrideMimeType("text/plain; charset=x-user-defined"),yt.send(null),!(yt.status>=200&&yt.status<300||yt.status===304))throw new Error("Couldn't load "+c+". Status: "+yt.status);return yt.response!==void 0?new Uint8Array(yt.response||[]):je(yt.responseText||"")},Wt=this;Wt.setDataGetter(Nt=>{var Zt=Nt*wt,yt=(Nt+1)*wt-1;if(yt=Math.min(yt,me-1),typeof Wt.chunks[Nt]>"u"&&(Wt.chunks[Nt]=_t(Zt,yt)),typeof Wt.chunks[Nt]>"u")throw new Error("doXHR failed!");return Wt.chunks[Nt]}),(tt||!me)&&(wt=me=1,me=this.getter(0).length,wt=me,N("LazyFiles on gzip forces download of the whole file when length is accessed")),this._length=me,this._chunkSize=wt,this.lengthKnown=!0}get length(){return this.lengthKnown||this.cacheLength(),this._length}get chunkSize(){return this.lengthKnown||this.cacheLength(),this._chunkSize}}if(typeof XMLHttpRequest<"u"){if(!s)throw"Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";var w=new v,b={isDevice:!1,contents:w}}else var b={isDevice:!1,url:c};var U=M.createFile(r,a,b,h,p);b.contents?U.contents=b.contents:b.url&&(U.contents=null,U.url=b.url),Object.defineProperties(U,{usedBytes:{get:function(){return this.contents.length}}});var W={},q=Object.keys(U.stream_ops);q.forEach(ue=>{var ce=U.stream_ops[ue];W[ue]=(...me)=>(M.forceLoadFile(U),ce(...me))});function oe(ue,ce,me,Ve,ct){var tt=ue.node.contents;if(ct>=tt.length)return 0;var wt=Math.min(tt.length-ct,Ve);if(P(wt>=0),tt.slice)for(var _t=0;_t<wt;_t++)ce[me+_t]=tt[ct+_t];else for(var _t=0;_t<wt;_t++)ce[me+_t]=tt.get(ct+_t);return wt}return W.read=(ue,ce,me,Ve,ct)=>(M.forceLoadFile(U),oe(ue,ce,me,Ve,ct)),W.mmap=(ue,ce,me,Ve,ct)=>{M.forceLoadFile(U);var tt=ut();if(!tt)throw new M.ErrnoError(48);return oe(ue,ne,tt,ce,me),{ptr:tt,allocated:!0}},U.stream_ops=W,U},absolutePath(){le("FS.absolutePath has been removed; use PATH_FS.resolve instead")},createFolder(){le("FS.createFolder has been removed; use FS.mkdir instead")},createLink(){le("FS.createLink has been removed; use FS.symlink instead")},joinPath(){le("FS.joinPath has been removed; use PATH.join instead")},mmapAlloc(){le("FS.mmapAlloc has been replaced by the top level function mmapAlloc")},standardizePath(){le("FS.standardizePath has been removed; use PATH.normalize instead")}},ht={DEFAULT_POLLMASK:5,calculateAt(r,a,c){if($.isAbs(a))return a;var h;if(r===-100)h=M.cwd();else{var p=ht.getStreamFromFD(r);h=p.path}if(a.length==0){if(!c)throw new M.ErrnoError(44);return h}return h+"/"+a},writeStat(r,a){fe[r>>2]=a.dev,fe[r+4>>2]=a.mode,Me[r+8>>2]=a.nlink,fe[r+12>>2]=a.uid,fe[r+16>>2]=a.gid,fe[r+20>>2]=a.rdev,qe[r+24>>3]=BigInt(a.size),fe[r+32>>2]=4096,fe[r+36>>2]=a.blocks;var c=a.atime.getTime(),h=a.mtime.getTime(),p=a.ctime.getTime();return qe[r+40>>3]=BigInt(Math.floor(c/1e3)),Me[r+48>>2]=c%1e3*1e3*1e3,qe[r+56>>3]=BigInt(Math.floor(h/1e3)),Me[r+64>>2]=h%1e3*1e3*1e3,qe[r+72>>3]=BigInt(Math.floor(p/1e3)),Me[r+80>>2]=p%1e3*1e3*1e3,qe[r+88>>3]=BigInt(a.ino),0},writeStatFs(r,a){fe[r+4>>2]=a.bsize,fe[r+40>>2]=a.bsize,fe[r+8>>2]=a.blocks,fe[r+12>>2]=a.bfree,fe[r+16>>2]=a.bavail,fe[r+20>>2]=a.files,fe[r+24>>2]=a.ffree,fe[r+28>>2]=a.fsid,fe[r+44>>2]=a.flags,fe[r+36>>2]=a.namelen},doMsync(r,a,c,h,p){if(!M.isFile(a.node.mode))throw new M.ErrnoError(43);if(h&2)return 0;var v=_e.slice(r,r+c);M.msync(a,v,p,c,h)},getStreamFromFD(r){var a=M.getStreamChecked(r);return a},varargs:void 0,getStr(r){var a=it(r);return a}};function oi(r,a,c){try{var h=ht.getStreamFromFD(r);if(P(!c),h.fd===a)return-28;if(a<0||a>=M.MAX_OPEN_FDS)return-8;var p=M.getStream(a);return p&&M.close(p),M.dupStream(h,a).fd}catch(v){if(typeof M>"u"||v.name!=="ErrnoError")throw v;return-v.errno}}var Gt=()=>{P(ht.varargs!=null);var r=fe[+ht.varargs>>2];return ht.varargs+=4,r},qt=Gt;function En(r,a,c){ht.varargs=c;try{var h=ht.getStreamFromFD(r);switch(a){case 0:{var p=Gt();if(p<0)return-28;for(;M.streams[p];)p++;var v;return v=M.dupStream(h,p),v.fd}case 1:case 2:return 0;case 3:return h.flags;case 4:{var p=Gt();return h.flags|=p,0}case 12:{var p=qt(),w=0;return De[p+w>>1]=2,0}case 13:case 14:return 0}return-28}catch(b){if(typeof M>"u"||b.name!=="ErrnoError")throw b;return-b.errno}}function Dr(r,a){try{return ht.writeStat(a,M.fstat(r))}catch(c){if(typeof M>"u"||c.name!=="ErrnoError")throw c;return-c.errno}}function Fu(r,a,c){ht.varargs=c;try{var h=ht.getStreamFromFD(r);switch(a){case 21509:return h.tty?0:-59;case 21505:{if(!h.tty)return-59;if(h.tty.ops.ioctl_tcgets){var p=h.tty.ops.ioctl_tcgets(h),v=qt();fe[v>>2]=p.c_iflag||0,fe[v+4>>2]=p.c_oflag||0,fe[v+8>>2]=p.c_cflag||0,fe[v+12>>2]=p.c_lflag||0;for(var w=0;w<32;w++)ne[v+w+17]=p.c_cc[w]||0;return 0}return 0}case 21510:case 21511:case 21512:return h.tty?0:-59;case 21506:case 21507:case 21508:{if(!h.tty)return-59;if(h.tty.ops.ioctl_tcsets){for(var v=qt(),b=fe[v>>2],U=fe[v+4>>2],W=fe[v+8>>2],q=fe[v+12>>2],oe=[],w=0;w<32;w++)oe.push(ne[v+w+17]);return h.tty.ops.ioctl_tcsets(h.tty,a,{c_iflag:b,c_oflag:U,c_cflag:W,c_lflag:q,c_cc:oe})}return 0}case 21519:{if(!h.tty)return-59;var v=qt();return fe[v>>2]=0,0}case 21520:return h.tty?-28:-59;case 21531:{var v=qt();return M.ioctl(h,a,v)}case 21523:{if(!h.tty)return-59;if(h.tty.ops.ioctl_tiocgwinsz){var ue=h.tty.ops.ioctl_tiocgwinsz(h.tty),v=qt();De[v>>1]=ue[0],De[v+2>>1]=ue[1]}return 0}case 21524:return h.tty?0:-59;case 21515:return h.tty?0:-59;default:return-28}}catch(ce){if(typeof M>"u"||ce.name!=="ErrnoError")throw ce;return-ce.errno}}function Uu(r,a){try{return r=ht.getStr(r),ht.writeStat(a,M.lstat(r))}catch(c){if(typeof M>"u"||c.name!=="ErrnoError")throw c;return-c.errno}}function Nu(r,a,c,h){try{a=ht.getStr(a);var p=h&256,v=h&4096;return h=h&-6401,P(!h,`unknown flags in __syscall_newfstatat: ${h}`),a=ht.calculateAt(r,a,v),ht.writeStat(c,p?M.lstat(a):M.stat(a))}catch(w){if(typeof M>"u"||w.name!=="ErrnoError")throw w;return-w.errno}}function Ou(r,a,c,h){ht.varargs=h;try{a=ht.getStr(a),a=ht.calculateAt(r,a);var p=h?Gt():0;return M.open(a,c,p).fd}catch(v){if(typeof M>"u"||v.name!=="ErrnoError")throw v;return-v.errno}}function ku(r,a){try{return r=ht.getStr(r),ht.writeStat(a,M.stat(r))}catch(c){if(typeof M>"u"||c.name!=="ErrnoError")throw c;return-c.errno}}var Bu=()=>le("native code called abort()"),Ft=r=>{for(var a="";;){var c=_e[r++];if(!c)return a;a+=String.fromCharCode(c)}},Ii={},ci={},Lr={},or=class extends Error{constructor(a){super(a),this.name="BindingError"}},dt=r=>{throw new or(r)};function zu(r,a,c={}){var h=a.name;if(r||dt(`type "${h}" must have a positive integer typeid pointer`),ci.hasOwnProperty(r)){if(c.ignoreDuplicateRegistrations)return;dt(`Cannot register type '${h}' twice`)}if(ci[r]=a,delete Lr[r],Ii.hasOwnProperty(r)){var p=Ii[r];delete Ii[r],p.forEach(v=>v())}}function ln(r,a,c={}){if(a.argPackAdvance===void 0)throw new TypeError("registerType registeredInstance requires argPackAdvance");return zu(r,a,c)}var Vo=(r,a,c)=>{switch(a){case 1:return c?h=>ne[h]:h=>_e[h];case 2:return c?h=>De[h>>1]:h=>Ee[h>>1];case 4:return c?h=>fe[h>>2]:h=>Me[h>>2];case 8:return c?h=>qe[h>>3]:h=>Ct[h>>3];default:throw new TypeError(`invalid integer width (${a}): ${r}`)}},li=r=>{if(r===null)return"null";var a=typeof r;return a==="object"||a==="array"||a==="function"?r.toString():""+r},Wo=(r,a,c,h)=>{if(a<c||a>h)throw new TypeError(`Passing a number "${li(a)}" from JS side to C/C++ side to an argument of type "${r}", which is outside the valid range [${c}, ${h}]!`)},Hu=(r,a,c,h,p)=>{a=Ft(a);const v=h===0n;let w=b=>b;if(v){const b=c*8;w=U=>BigInt.asUintN(b,U),p=w(p)}ln(r,{name:a,fromWireType:w,toWireType:(b,U)=>{if(typeof U=="number")U=BigInt(U);else if(typeof U!="bigint")throw new TypeError(`Cannot convert "${li(U)}" to ${this.name}`);return Wo(a,U,h,p),U},argPackAdvance:wn,readValueFromPointer:Vo(a,c,!v),destructorFunction:null})},wn=8,Gu=(r,a,c,h)=>{a=Ft(a),ln(r,{name:a,fromWireType:function(p){return!!p},toWireType:function(p,v){return v?c:h},argPackAdvance:wn,readValueFromPointer:function(p){return this.fromWireType(_e[p])},destructorFunction:null})},Vu=r=>({count:r.count,deleteScheduled:r.deleteScheduled,preservePointerOnDelete:r.preservePointerOnDelete,ptr:r.ptr,ptrType:r.ptrType,smartPtr:r.smartPtr,smartPtrType:r.smartPtrType}),Bs=r=>{function a(c){return c.$$.ptrType.registeredClass.name}dt(a(r)+" instance already deleted")},zs=!1,Xo=r=>{},Wu=r=>{r.smartPtr?r.smartPtrType.rawDestructor(r.smartPtr):r.ptrType.registeredClass.rawDestructor(r.ptr)},$o=r=>{r.count.value-=1;var a=r.count.value===0;a&&Wu(r)},jo=(r,a,c)=>{if(a===c)return r;if(c.baseClass===void 0)return null;var h=jo(r,a,c.baseClass);return h===null?null:c.downcast(h)},Yo={},Xu={},$u=(r,a)=>{for(a===void 0&&dt("ptr should not be undefined");r.baseClass;)a=r.upcast(a),r=r.baseClass;return a},ju=(r,a)=>(a=$u(r,a),Xu[a]),Yu=class extends Error{constructor(a){super(a),this.name="InternalError"}},Fr=r=>{throw new Yu(r)},Ur=(r,a)=>{(!a.ptrType||!a.ptr)&&Fr("makeClassHandle requires ptr and ptrType");var c=!!a.smartPtrType,h=!!a.smartPtr;return c!==h&&Fr("Both smartPtrType and smartPtr must be specified"),a.count={value:1},cr(Object.create(r,{$$:{value:a,writable:!0}}))};function qo(r){var a=this.getPointee(r);if(!a)return this.destructor(r),null;var c=ju(this.registeredClass,a);if(c!==void 0){if(c.$$.count.value===0)return c.$$.ptr=a,c.$$.smartPtr=r,c.clone();var h=c.clone();return this.destructor(r),h}function p(){return this.isSmartPointer?Ur(this.registeredClass.instancePrototype,{ptrType:this.pointeeType,ptr:a,smartPtrType:this,smartPtr:r}):Ur(this.registeredClass.instancePrototype,{ptrType:this,ptr:r})}var v=this.registeredClass.getActualType(a),w=Yo[v];if(!w)return p.call(this);var b;this.isConst?b=w.constPointerType:b=w.pointerType;var U=jo(a,this.registeredClass,b.registeredClass);return U===null?p.call(this):this.isSmartPointer?Ur(b.registeredClass.instancePrototype,{ptrType:b,ptr:U,smartPtrType:this,smartPtr:r}):Ur(b.registeredClass.instancePrototype,{ptrType:b,ptr:U})}var cr=r=>typeof FinalizationRegistry>"u"?(cr=a=>a,r):(zs=new FinalizationRegistry(a=>{console.warn(a.leakWarning),$o(a.$$)}),cr=a=>{var c=a.$$,h=!!c.smartPtr;if(h){var p={$$:c},v=c.ptrType.registeredClass,w=new Error(`Embind found a leaked C++ instance ${v.name} <${he(c.ptr)}>.
We'll free it automatically in this case, but this functionality is not reliable across various environments.
Make sure to invoke .delete() manually once you're done with the instance instead.
Originally allocated`);"captureStackTrace"in Error&&Error.captureStackTrace(w,qo),p.leakWarning=w.stack.replace(/^Error: /,""),zs.register(a,p,a)}return a},Xo=a=>zs.unregister(a),cr(r)),qu=()=>{let r=Nr.prototype;Object.assign(r,{isAliasOf(c){if(!(this instanceof Nr)||!(c instanceof Nr))return!1;var h=this.$$.ptrType.registeredClass,p=this.$$.ptr;c.$$=c.$$;for(var v=c.$$.ptrType.registeredClass,w=c.$$.ptr;h.baseClass;)p=h.upcast(p),h=h.baseClass;for(;v.baseClass;)w=v.upcast(w),v=v.baseClass;return h===v&&p===w},clone(){if(this.$$.ptr||Bs(this),this.$$.preservePointerOnDelete)return this.$$.count.value+=1,this;var c=cr(Object.create(Object.getPrototypeOf(this),{$$:{value:Vu(this.$$)}}));return c.$$.count.value+=1,c.$$.deleteScheduled=!1,c},delete(){this.$$.ptr||Bs(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&dt("Object already scheduled for deletion"),Xo(this),$o(this.$$),this.$$.preservePointerOnDelete||(this.$$.smartPtr=void 0,this.$$.ptr=void 0)},isDeleted(){return!this.$$.ptr},deleteLater(){return this.$$.ptr||Bs(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&dt("Object already scheduled for deletion"),this.$$.deleteScheduled=!0,this}});const a=Symbol.dispose;a&&(r[a]=r.delete)};function Nr(){}var Or=(r,a)=>Object.defineProperty(a,"name",{value:r}),Hs=(r,a,c)=>{if(r[a].overloadTable===void 0){var h=r[a];r[a]=function(...p){return r[a].overloadTable.hasOwnProperty(p.length)||dt(`Function '${c}' called with an invalid number of arguments (${p.length}) - expects one of (${r[a].overloadTable})!`),r[a].overloadTable[p.length].apply(this,p)},r[a].overloadTable=[],r[a].overloadTable[h.argCount]=h}},Gs=(r,a,c)=>{t.hasOwnProperty(r)?((c===void 0||t[r].overloadTable!==void 0&&t[r].overloadTable[c]!==void 0)&&dt(`Cannot register public name '${r}' twice`),Hs(t,r,r),t[r].overloadTable.hasOwnProperty(c)&&dt(`Cannot register multiple overloads of a function with the same number of arguments (${c})!`),t[r].overloadTable[c]=a):(t[r]=a,t[r].argCount=c)},Zu=48,Ju=57,Ku=r=>{P(typeof r=="string"),r=r.replace(/[^a-zA-Z0-9_]/g,"$");var a=r.charCodeAt(0);return a>=Zu&&a<=Ju?`_${r}`:r};function Qu(r,a,c,h,p,v,w,b){this.name=r,this.constructor=a,this.instancePrototype=c,this.rawDestructor=h,this.baseClass=p,this.getActualType=v,this.upcast=w,this.downcast=b,this.pureVirtualFunctions=[]}var kr=(r,a,c)=>{for(;a!==c;)a.upcast||dt(`Expected null or instance of ${c.name}, got an instance of ${a.name}`),r=a.upcast(r),a=a.baseClass;return r};function eh(r,a){if(a===null)return this.isReference&&dt(`null is not a valid ${this.name}`),0;a.$$||dt(`Cannot pass "${li(a)}" as a ${this.name}`),a.$$.ptr||dt(`Cannot pass deleted object as a pointer of type ${this.name}`);var c=a.$$.ptrType.registeredClass,h=kr(a.$$.ptr,c,this.registeredClass);return h}function th(r,a){var c;if(a===null)return this.isReference&&dt(`null is not a valid ${this.name}`),this.isSmartPointer?(c=this.rawConstructor(),r!==null&&r.push(this.rawDestructor,c),c):0;(!a||!a.$$)&&dt(`Cannot pass "${li(a)}" as a ${this.name}`),a.$$.ptr||dt(`Cannot pass deleted object as a pointer of type ${this.name}`),!this.isConst&&a.$$.ptrType.isConst&&dt(`Cannot convert argument of type ${a.$$.smartPtrType?a.$$.smartPtrType.name:a.$$.ptrType.name} to parameter type ${this.name}`);var h=a.$$.ptrType.registeredClass;if(c=kr(a.$$.ptr,h,this.registeredClass),this.isSmartPointer)switch(a.$$.smartPtr===void 0&&dt("Passing raw pointer to smart pointer is illegal"),this.sharingPolicy){case 0:a.$$.smartPtrType===this?c=a.$$.smartPtr:dt(`Cannot convert argument of type ${a.$$.smartPtrType?a.$$.smartPtrType.name:a.$$.ptrType.name} to parameter type ${this.name}`);break;case 1:c=a.$$.smartPtr;break;case 2:if(a.$$.smartPtrType===this)c=a.$$.smartPtr;else{var p=a.clone();c=this.rawShare(c,Ut.toHandle(()=>p.delete())),r!==null&&r.push(this.rawDestructor,c)}break;default:dt("Unsupporting sharing policy")}return c}function nh(r,a){if(a===null)return this.isReference&&dt(`null is not a valid ${this.name}`),0;a.$$||dt(`Cannot pass "${li(a)}" as a ${this.name}`),a.$$.ptr||dt(`Cannot pass deleted object as a pointer of type ${this.name}`),a.$$.ptrType.isConst&&dt(`Cannot convert argument of type ${a.$$.ptrType.name} to parameter type ${this.name}`);var c=a.$$.ptrType.registeredClass,h=kr(a.$$.ptr,c,this.registeredClass);return h}function Br(r){return this.fromWireType(Me[r>>2])}var ih=()=>{Object.assign(zr.prototype,{getPointee(r){return this.rawGetPointee&&(r=this.rawGetPointee(r)),r},destructor(r){this.rawDestructor?.(r)},argPackAdvance:wn,readValueFromPointer:Br,fromWireType:qo})};function zr(r,a,c,h,p,v,w,b,U,W,q){this.name=r,this.registeredClass=a,this.isReference=c,this.isConst=h,this.isSmartPointer=p,this.pointeeType=v,this.sharingPolicy=w,this.rawGetPointee=b,this.rawConstructor=U,this.rawShare=W,this.rawDestructor=q,!p&&a.baseClass===void 0?h?(this.toWireType=eh,this.destructorFunction=null):(this.toWireType=nh,this.destructorFunction=null):this.toWireType=th}var Zo=(r,a,c)=>{t.hasOwnProperty(r)||Fr("Replacing nonexistent public symbol"),t[r].overloadTable!==void 0&&c!==void 0?t[r].overloadTable[c]=a:(t[r]=a,t[r].argCount=c)},Jo=[],Hr,ve=r=>{var a=Jo[r];return a||(Jo[r]=a=Hr.get(r)),P(Hr.get(r)==a,"JavaScript-side Wasm function table mirror is out of date!"),a},bn=(r,a,c=!1)=>{P(!c,"Async bindings are only supported with JSPI."),r=Ft(r);function h(){var v=ve(a);return v}var p=h();return typeof p!="function"&&dt(`unknown function pointer with signature ${r}: ${a}`),p};class rh extends Error{}var Ko=r=>{var a=gc(r),c=Ft(a);return An(a),c},ui=(r,a)=>{var c=[],h={};function p(v){if(!h[v]&&!ci[v]){if(Lr[v]){Lr[v].forEach(p);return}c.push(v),h[v]=!0}}throw a.forEach(p),new rh(`${r}: `+c.map(Ko).join([", "]))},mn=(r,a,c)=>{r.forEach(b=>Lr[b]=a);function h(b){var U=c(b);U.length!==r.length&&Fr("Mismatched type converter count");for(var W=0;W<r.length;++W)ln(r[W],U[W])}var p=new Array(a.length),v=[],w=0;a.forEach((b,U)=>{ci.hasOwnProperty(b)?p[U]=ci[b]:(v.push(b),Ii.hasOwnProperty(b)||(Ii[b]=[]),Ii[b].push(()=>{p[U]=ci[b],++w,w===v.length&&h(p)}))}),v.length===0&&h(p)},sh=(r,a,c,h,p,v,w,b,U,W,q,oe,ue)=>{q=Ft(q),v=bn(p,v),b&&=bn(w,b),W&&=bn(U,W),ue=bn(oe,ue);var ce=Ku(q);Gs(ce,function(){ui(`Cannot construct ${q} due to unbound types`,[h])}),mn([r,a,c],h?[h]:[],me=>{me=me[0];var Ve,ct;h?(Ve=me.registeredClass,ct=Ve.instancePrototype):ct=Nr.prototype;var tt=Or(q,function(...yt){if(Object.getPrototypeOf(this)!==wt)throw new or(`Use 'new' to construct ${q}`);if(_t.constructor_body===void 0)throw new or(`${q} has no accessible constructor`);var fi=_t.constructor_body[yt.length];if(fi===void 0)throw new or(`Tried to invoke ctor of ${q} with invalid number of parameters (${yt.length}) - expected (${Object.keys(_t.constructor_body).toString()}) parameters instead!`);return fi.apply(this,yt)}),wt=Object.create(ct,{constructor:{value:tt}});tt.prototype=wt;var _t=new Qu(q,tt,wt,ue,Ve,v,b,W);_t.baseClass&&(_t.baseClass.__derivedClasses??=[],_t.baseClass.__derivedClasses.push(_t));var Wt=new zr(q,_t,!0,!1,!1),Nt=new zr(q+"*",_t,!1,!1,!1),Zt=new zr(q+" const*",_t,!1,!0,!1);return Yo[r]={pointerType:Nt,constPointerType:Zt},Zo(ce,tt),[Wt,Nt,Zt]})},Vs=r=>{for(;r.length;){var a=r.pop(),c=r.pop();c(a)}};function Qo(r){for(var a=1;a<r.length;++a)if(r[a]!==null&&r[a].destructorFunction===void 0)return!0;return!1}function ah(r,a,c,h,p){if(r<a||r>c){var v=a==c?a:`${a} to ${c}`;p(`function ${h} called with ${r} arguments, expected ${v}`)}}function oh(r,a,c,h){var p=Qo(r),v=r.length-2,w=[],b=["fn"];a&&b.push("thisWired");for(var U=0;U<v;++U)w.push(`arg${U}`),b.push(`arg${U}Wired`);w=w.join(","),b=b.join(",");var W=`return function (${w}) {
`;W+=`checkArgCount(arguments.length, minArgs, maxArgs, humanName, throwBindingError);
`,p&&(W+=`var destructors = [];
`);var q=p?"destructors":"null",oe=["humanName","throwBindingError","invoker","fn","runDestructors","retType","classParam"];a&&(W+=`var thisWired = classParam['toWireType'](${q}, this);
`);for(var U=0;U<v;++U)W+=`var arg${U}Wired = argType${U}['toWireType'](${q}, arg${U});
`,oe.push(`argType${U}`);if(W+=(c||h?"var rv = ":"")+`invoker(${b});
`,p)W+=`runDestructors(destructors);
`;else for(var U=a?1:2;U<r.length;++U){var ue=U===1?"thisWired":"arg"+(U-2)+"Wired";r[U].destructorFunction!==null&&(W+=`${ue}_dtor(${ue});
`,oe.push(`${ue}_dtor`))}return c&&(W+=`var ret = retType['fromWireType'](rv);
return ret;
`),W+=`}
`,oe.push("checkArgCount","minArgs","maxArgs"),W=`if (arguments.length !== ${oe.length}){ throw new Error(humanName + "Expected ${oe.length} closure arguments " + arguments.length + " given."); }
${W}`,[oe,W]}function ch(r){for(var a=r.length-2,c=r.length-1;c>=2&&r[c].optional;--c)a--;return a}function Gr(r,a,c,h,p,v){var w=a.length;w<2&&dt("argTypes array size mismatch! Must at least get return value and 'this' types!"),P(!v,"Async bindings are only supported with JSPI.");for(var b=a[1]!==null&&c!==null,U=Qo(a),W=a[0].name!=="void",q=w-2,oe=ch(a),ue=[r,dt,h,p,Vs,a[0],a[1]],ce=0;ce<w-2;++ce)ue.push(a[ce+2]);if(!U)for(var ce=b?1:2;ce<a.length;++ce)a[ce].destructorFunction!==null&&ue.push(a[ce].destructorFunction);ue.push(ah,oe,q);let[me,Ve]=oh(a,b,W,v);var ct=new Function(...me,Ve)(...ue);return Or(r,ct)}var Vr=(r,a)=>{for(var c=[],h=0;h<r;h++)c.push(Me[a+h*4>>2]);return c},Ws=r=>{r=r.trim();const a=r.indexOf("(");return a===-1?r:(P(r.endsWith(")"),"Parentheses for argument names should match."),r.slice(0,a))},lh=(r,a,c,h,p,v,w,b,U)=>{var W=Vr(c,h);a=Ft(a),a=Ws(a),v=bn(p,v,b),mn([],[r],q=>{q=q[0];var oe=`${q.name}.${a}`;function ue(){ui(`Cannot call ${oe} due to unbound types`,W)}a.startsWith("@@")&&(a=Symbol[a.substring(2)]);var ce=q.registeredClass.constructor;return ce[a]===void 0?(ue.argCount=c-1,ce[a]=ue):(Hs(ce,a,oe),ce[a].overloadTable[c-1]=ue),mn([],W,me=>{var Ve=[me[0],null].concat(me.slice(1)),ct=Gr(oe,Ve,null,v,w,b);if(ce[a].overloadTable===void 0?(ct.argCount=c-1,ce[a]=ct):ce[a].overloadTable[c-1]=ct,q.registeredClass.__derivedClasses)for(const tt of q.registeredClass.__derivedClasses)tt.constructor.hasOwnProperty(a)||(tt.constructor[a]=ct);return[]}),[]})},uh=(r,a,c,h,p,v)=>{P(a>0);var w=Vr(a,c);p=bn(h,p),mn([],[r],b=>{b=b[0];var U=`constructor ${b.name}`;if(b.registeredClass.constructor_body===void 0&&(b.registeredClass.constructor_body=[]),b.registeredClass.constructor_body[a-1]!==void 0)throw new or(`Cannot register multiple constructors with identical number of parameters (${a-1}) for class '${b.name}'! Overload resolution is currently only performed using the parameter count, not actual type info!`);return b.registeredClass.constructor_body[a-1]=()=>{ui(`Cannot construct ${b.name} due to unbound types`,w)},mn([],w,W=>(W.splice(1,0,null),b.registeredClass.constructor_body[a-1]=Gr(U,W,null,p,v),[])),[]})},hh=(r,a,c,h,p,v,w,b,U,W)=>{var q=Vr(c,h);a=Ft(a),a=Ws(a),v=bn(p,v,U),mn([],[r],oe=>{oe=oe[0];var ue=`${oe.name}.${a}`;a.startsWith("@@")&&(a=Symbol[a.substring(2)]),b&&oe.registeredClass.pureVirtualFunctions.push(a);function ce(){ui(`Cannot call ${ue} due to unbound types`,q)}var me=oe.registeredClass.instancePrototype,Ve=me[a];return Ve===void 0||Ve.overloadTable===void 0&&Ve.className!==oe.name&&Ve.argCount===c-2?(ce.argCount=c-2,ce.className=oe.name,me[a]=ce):(Hs(me,a,ue),me[a].overloadTable[c-2]=ce),mn([],q,ct=>{var tt=Gr(ue,ct,oe,v,w,U);return me[a].overloadTable===void 0?(tt.argCount=c-2,me[a]=tt):me[a].overloadTable[c-2]=tt,[]}),[]})},ec=(r,a,c)=>(r instanceof Object||dt(`${c} with invalid "this": ${r}`),r instanceof a.registeredClass.constructor||dt(`${c} incompatible with "this" of type ${r.constructor.name}`),r.$$.ptr||dt(`cannot call emscripten binding method ${c} on deleted object`),kr(r.$$.ptr,r.$$.ptrType.registeredClass,a.registeredClass)),dh=(r,a,c,h,p,v,w,b,U,W)=>{a=Ft(a),p=bn(h,p),mn([],[r],q=>{q=q[0];var oe=`${q.name}.${a}`,ue={get(){ui(`Cannot access ${oe} due to unbound types`,[c,w])},enumerable:!0,configurable:!0};return U?ue.set=()=>ui(`Cannot access ${oe} due to unbound types`,[c,w]):ue.set=ce=>dt(oe+" is a read-only property"),Object.defineProperty(q.registeredClass.instancePrototype,a,ue),mn([],U?[c,w]:[c],ce=>{var me=ce[0],Ve={get(){var tt=ec(this,q,oe+" getter");return me.fromWireType(p(v,tt))},enumerable:!0};if(U){U=bn(b,U);var ct=ce[1];Ve.set=function(tt){var wt=ec(this,q,oe+" setter"),_t=[];U(W,wt,ct.toWireType(_t,tt)),Vs(_t)}}return Object.defineProperty(q.registeredClass.instancePrototype,a,Ve),[]}),[]})},fh=(r,a,c)=>{r=Ft(r),mn([],[a],h=>(h=h[0],t[r]=h.fromWireType(c),[]))},tc=[],Tn=[0,1,,1,null,1,!0,1,!1,1],Xs=r=>{r>9&&--Tn[r+1]===0&&(P(Tn[r]!==void 0,"Decref for unallocated handle."),Tn[r]=void 0,tc.push(r))},Ut={toValue:r=>(r||dt(`Cannot use deleted val. handle = ${r}`),P(r===2||Tn[r]!==void 0&&r%2===0,`invalid handle: ${r}`),Tn[r]),toHandle:r=>{switch(r){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:{const a=tc.pop()||Tn.length;return Tn[a]=r,Tn[a+1]=1,a}}}},nc={name:"emscripten::val",fromWireType:r=>{var a=Ut.toValue(r);return Xs(r),a},toWireType:(r,a)=>Ut.toHandle(a),argPackAdvance:wn,readValueFromPointer:Br,destructorFunction:null},ic=r=>ln(r,nc),ph=(r,a,c)=>{switch(a){case 1:return c?function(h){return this.fromWireType(ne[h])}:function(h){return this.fromWireType(_e[h])};case 2:return c?function(h){return this.fromWireType(De[h>>1])}:function(h){return this.fromWireType(Ee[h>>1])};case 4:return c?function(h){return this.fromWireType(fe[h>>2])}:function(h){return this.fromWireType(Me[h>>2])};default:throw new TypeError(`invalid integer width (${a}): ${r}`)}},mh=(r,a,c,h)=>{a=Ft(a);function p(){}p.values={},ln(r,{name:a,constructor:p,fromWireType:function(v){return this.constructor.values[v]},toWireType:(v,w)=>w.value,argPackAdvance:wn,readValueFromPointer:ph(a,c,h),destructorFunction:null}),Gs(a,p)},Wr=(r,a)=>{var c=ci[r];return c===void 0&&dt(`${a} has unknown type ${Ko(r)}`),c},_h=(r,a,c)=>{var h=Wr(r,"enum");a=Ft(a);var p=h.constructor,v=Object.create(h.constructor.prototype,{value:{value:c},constructor:{value:Or(`${h.name}_${a}`,function(){})}});p.values[c]=v,p[a]=v},gh=(r,a)=>{switch(a){case 4:return function(c){return this.fromWireType(et[c>>2])};case 8:return function(c){return this.fromWireType(Mt[c>>3])};default:throw new TypeError(`invalid float width (${a}): ${r}`)}},vh=(r,a,c)=>{a=Ft(a),ln(r,{name:a,fromWireType:h=>h,toWireType:(h,p)=>{if(typeof p!="number"&&typeof p!="boolean")throw new TypeError(`Cannot convert ${li(p)} to ${this.name}`);return p},argPackAdvance:wn,readValueFromPointer:gh(a,c),destructorFunction:null})},xh=(r,a,c,h,p,v,w,b)=>{var U=Vr(a,c);r=Ft(r),r=Ws(r),p=bn(h,p,w),Gs(r,function(){ui(`Cannot call ${r} due to unbound types`,U)},a-1),mn([],U,W=>{var q=[W[0],null].concat(W.slice(1));return Zo(r,Gr(r,q,null,p,v,w),a-1),[]})},yh=(r,a,c,h,p)=>{a=Ft(a);const v=h===0;let w=U=>U;if(v){var b=32-8*c;w=U=>U<<b>>>b,p=w(p)}ln(r,{name:a,fromWireType:w,toWireType:(U,W)=>{if(typeof W!="number"&&typeof W!="boolean")throw new TypeError(`Cannot convert "${li(W)}" to ${a}`);return Wo(a,W,h,p),W},argPackAdvance:wn,readValueFromPointer:Vo(a,c,h!==0),destructorFunction:null})},Sh=(r,a,c)=>{var h=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array],p=h[a];function v(w){var b=Me[w>>2],U=Me[w+4>>2];return new p(ne.buffer,U,b)}c=Ft(c),ln(r,{name:c,fromWireType:v,argPackAdvance:wn,readValueFromPointer:v},{ignoreDuplicateRegistrations:!0})},Mh=Object.assign({optional:!0},nc),Eh=(r,a)=>{ln(r,Mh)},hi=(r,a,c)=>(P(typeof c=="number","stringToUTF8(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!"),ke(r,_e,a,c)),wh=(r,a)=>{a=Ft(a),ln(r,{name:a,fromWireType(c){for(var h=Me[c>>2],p=c+4,v,w,b=p,w=0;w<=h;++w){var U=p+w;if(w==h||_e[U]==0){var W=U-b,q=it(b,W);v===void 0?v=q:(v+="\0",v+=q),b=U+1}}return An(c),v},toWireType(c,h){h instanceof ArrayBuffer&&(h=new Uint8Array(h));var p,v=typeof h=="string";v||ArrayBuffer.isView(h)&&h.BYTES_PER_ELEMENT==1||dt("Cannot pass non-string to std::string"),v?p=Ne(h):p=h.length;var w=Ys(4+p+1),b=w+4;return Me[w>>2]=p,v?hi(h,b,p+1):_e.set(h,b),c!==null&&c.push(An,w),w},argPackAdvance:wn,readValueFromPointer:Br,destructorFunction(c){An(c)}})},rc=typeof TextDecoder<"u"?new TextDecoder("utf-16le"):void 0,bh=(r,a)=>{P(r%2==0,"Pointer passed to UTF16ToString must be aligned to two bytes!");for(var c=r>>1,h=c+a/2,p=c;!(p>=h)&&Ee[p];)++p;if(p-c>16&&rc)return rc.decode(Ee.subarray(c,p));for(var v="",w=c;!(w>=h);++w){var b=Ee[w];if(b==0)break;v+=String.fromCharCode(b)}return v},Th=(r,a,c)=>{if(P(a%2==0,"Pointer passed to stringToUTF16 must be aligned to two bytes!"),P(typeof c=="number","stringToUTF16(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!"),c??=2147483647,c<2)return 0;c-=2;for(var h=a,p=c<r.length*2?c/2:r.length,v=0;v<p;++v){var w=r.charCodeAt(v);De[a>>1]=w,a+=2}return De[a>>1]=0,a-h},Ah=r=>r.length*2,Ch=(r,a)=>{P(r%4==0,"Pointer passed to UTF32ToString must be aligned to four bytes!");for(var c="",h=0;!(h>=a/4);h++){var p=fe[r+h*4>>2];if(!p)break;c+=String.fromCodePoint(p)}return c},Rh=(r,a,c)=>{if(P(a%4==0,"Pointer passed to stringToUTF32 must be aligned to four bytes!"),P(typeof c=="number","stringToUTF32(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!"),c??=2147483647,c<4)return 0;for(var h=a,p=h+c-4,v=0;v<r.length;++v){var w=r.codePointAt(v);if(w>65535&&v++,fe[a>>2]=w,a+=4,a+4>p)break}return fe[a>>2]=0,a-h},Ph=r=>{for(var a=0,c=0;c<r.length;++c){var h=r.codePointAt(c);h>65535&&c++,a+=4}return a},Ih=(r,a,c)=>{c=Ft(c);var h,p,v,w;a===2?(h=bh,p=Th,w=Ah,v=b=>Ee[b>>1]):a===4&&(h=Ch,p=Rh,w=Ph,v=b=>Me[b>>2]),ln(r,{name:c,fromWireType:b=>{for(var U=Me[b>>2],W,q=b+4,oe=0;oe<=U;++oe){var ue=b+4+oe*a;if(oe==U||v(ue)==0){var ce=ue-q,me=h(q,ce);W===void 0?W=me:(W+="\0",W+=me),q=ue+a}}return An(b),W},toWireType:(b,U)=>{typeof U!="string"&&dt(`Cannot pass non-string to C++ string type ${c}`);var W=w(U),q=Ys(4+W+a);return Me[q>>2]=W/a,p(U,q+4,W+a),b!==null&&b.push(An,q),q},argPackAdvance:wn,readValueFromPointer:Br,destructorFunction(b){An(b)}})},Dh=(r,a)=>{ic(r)},Lh=(r,a)=>{a=Ft(a),ln(r,{isVoid:!0,name:a,argPackAdvance:0,fromWireType:()=>{},toWireType:(c,h)=>{}})},Fh=()=>{throw new k},sc=(r,a,c)=>{var h=[],p=r.toWireType(h,c);return h.length&&(Me[a>>2]=Ut.toHandle(h)),p},Uh=(r,a,c)=>(r=Ut.toValue(r),a=Wr(a,"emval::as"),sc(a,c,r)),Xr=[],Nh=(r,a,c,h)=>(r=Xr[r],a=Ut.toValue(a),r(null,a,c,h)),Oh={},$s=r=>{var a=Oh[r];return a===void 0?Ft(r):a},kh=(r,a,c,h,p)=>(r=Xr[r],a=Ut.toValue(a),c=$s(c),r(a,a[c],h,p)),ac=()=>globalThis,Bh=r=>r===0?Ut.toHandle(ac()):(r=$s(r),Ut.toHandle(ac()[r])),zh=r=>{var a=Xr.length;return Xr.push(r),a},Hh=(r,a)=>{for(var c=new Array(r),h=0;h<r;++h)c[h]=Wr(Me[a+h*4>>2],`parameter ${h}`);return c},Gh=(r,a,c)=>{var h=Hh(r,a),p=h.shift();r--;var v=`return function (obj, func, destructorsRef, args) {
`,w=0,b=[];c===0&&b.push("obj");for(var U=["retType"],W=[p],q=0;q<r;++q)b.push(`arg${q}`),U.push(`argType${q}`),W.push(h[q]),v+=`  var arg${q} = argType${q}.readValueFromPointer(args${w?"+"+w:""});
`,w+=h[q].argPackAdvance;var oe=c===1?"new func":"func.call";v+=`  var rv = ${oe}(${b.join(", ")});
`,p.isVoid||(U.push("emval_returnValue"),W.push(sc),v+=`  return emval_returnValue(retType, destructorsRef, rv);
`),v+=`};
`;var ue=new Function(...U,v)(...W),ce=`methodCaller<(${h.map(me=>me.name).join(", ")}) => ${p.name}>`;return zh(Or(ce,ue))},Vh=(r,a)=>(r=Ut.toValue(r),a=Ut.toValue(a),Ut.toHandle(r[a])),Wh=r=>{r>9&&(Tn[r+1]+=1)},Xh=r=>(r=Ut.toValue(r),typeof r=="number"),$h=r=>(r=Ut.toValue(r),typeof r=="string"),jh=()=>Ut.toHandle([]),Yh=r=>Ut.toHandle($s(r)),qh=r=>{var a=Ut.toValue(r);Vs(a),Xs(r)},Zh=(r,a)=>{r=Wr(r,"_emval_take_value");var c=r.readValueFromPointer(a);return Ut.toHandle(c)},Jh=r=>{throw r=Ut.toValue(r),r},Kh=r=>r%4===0&&(r%100!==0||r%400===0),Qh=[0,31,60,91,121,152,182,213,244,274,305,335],ed=[0,31,59,90,120,151,181,212,243,273,304,334],oc=r=>{var a=Kh(r.getFullYear()),c=a?Qh:ed,h=c[r.getMonth()]+r.getDate()-1;return h},td=9007199254740992,nd=-9007199254740992,cc=r=>r<nd||r>td?NaN:Number(r);function id(r,a){r=cc(r);var c=new Date(r*1e3);fe[a>>2]=c.getSeconds(),fe[a+4>>2]=c.getMinutes(),fe[a+8>>2]=c.getHours(),fe[a+12>>2]=c.getDate(),fe[a+16>>2]=c.getMonth(),fe[a+20>>2]=c.getFullYear()-1900,fe[a+24>>2]=c.getDay();var h=oc(c)|0;fe[a+28>>2]=h,fe[a+36>>2]=-(c.getTimezoneOffset()*60);var p=new Date(c.getFullYear(),0,1),v=new Date(c.getFullYear(),6,1).getTimezoneOffset(),w=p.getTimezoneOffset(),b=(v!=w&&c.getTimezoneOffset()==Math.min(w,v))|0;fe[a+32>>2]=b}var rd=function(r){var a=(()=>{var c=new Date(fe[r+20>>2]+1900,fe[r+16>>2],fe[r+12>>2],fe[r+8>>2],fe[r+4>>2],fe[r>>2],0),h=fe[r+32>>2],p=c.getTimezoneOffset(),v=new Date(c.getFullYear(),0,1),w=new Date(c.getFullYear(),6,1).getTimezoneOffset(),b=v.getTimezoneOffset(),U=Math.min(b,w);if(h<0)fe[r+32>>2]=+(w!=b&&U==p);else if(h>0!=(U==p)){var W=Math.max(b,w),q=h>0?U:W;c.setTime(c.getTime()+(q-p)*6e4)}fe[r+24>>2]=c.getDay();var oe=oc(c)|0;fe[r+28>>2]=oe,fe[r>>2]=c.getSeconds(),fe[r+4>>2]=c.getMinutes(),fe[r+8>>2]=c.getHours(),fe[r+12>>2]=c.getDate(),fe[r+16>>2]=c.getMonth(),fe[r+20>>2]=c.getYear();var ue=c.getTime();return isNaN(ue)?-1:ue/1e3})();return BigInt(a)},sd=(r,a,c,h)=>{var p=new Date().getFullYear(),v=new Date(p,0,1),w=new Date(p,6,1),b=v.getTimezoneOffset(),U=w.getTimezoneOffset(),W=Math.max(b,U);Me[r>>2]=W*60,fe[a>>2]=+(b!=U);var q=ce=>{var me=ce>=0?"-":"+",Ve=Math.abs(ce),ct=String(Math.floor(Ve/60)).padStart(2,"0"),tt=String(Ve%60).padStart(2,"0");return`UTC${me}${ct}${tt}`},oe=q(b),ue=q(U);P(oe),P(ue),P(Ne(oe)<=16,`timezone name truncated to fit in TZNAME_MAX (${oe})`),P(Ne(ue)<=16,`timezone name truncated to fit in TZNAME_MAX (${ue})`),U<b?(hi(oe,c,17),hi(ue,h,17)):(hi(oe,h,17),hi(ue,c,17))},lc=()=>performance.now(),uc=()=>Date.now(),ad=r=>r>=0&&r<=3;function od(r,a,c){if(!ad(r))return 28;var h;r===0?h=uc():h=lc();var p=Math.round(h*1e3*1e3);return qe[c>>3]=BigInt(p),0}var $r=[],cd=(r,a)=>{P(Array.isArray($r)),P(a%16==0),$r.length=0;for(var c;c=_e[r++];){var h=String.fromCharCode(c),p=["d","f","i","p"];p.push("j"),P(p.includes(h),`Invalid character ${c}("${h}") in readEmAsmArgs! Use only [${p}], and do not specify "v" for void return argument.`);var v=c!=105;v&=c!=112,a+=v&&a%8?4:0,$r.push(c==112?Me[a>>2]:c==106?qe[a>>3]:c==105?fe[a>>2]:Mt[a>>3]),a+=v?8:4}return $r},ld=(r,a,c)=>{var h=cd(a,c);return P(_c.hasOwnProperty(r),`No EM_ASM constant found at address ${r}.  The loaded WebAssembly file is likely out of sync with the generated JavaScript.`),_c[r](...h)},ud=(r,a,c)=>ld(r,a,c),hc=()=>2147483648,hd=()=>hc(),dd=(r,a)=>(P(a,"alignment argument is required"),Math.ceil(r/a)*a),fd=r=>{var a=ft.buffer,c=(r-a.byteLength+65535)/65536|0;try{return ft.grow(c),jt(),1}catch(h){L(`growMemory: Attempted to grow heap from ${a.byteLength} bytes to ${r} bytes, but got error: ${h}`)}},pd=r=>{var a=_e.length;r>>>=0,P(r>a);var c=hc();if(r>c)return L(`Cannot enlarge memory, requested ${r} bytes, but the limit is ${c} bytes!`),!1;for(var h=1;h<=4;h*=2){var p=a*(1+.2/h);p=Math.min(p,r+100663296);var v=Math.min(c,dd(Math.max(r,p),65536)),w=fd(v);if(w)return!0}return L(`Failed to grow the heap from ${a} bytes to ${v} bytes, not enough memory!`),!1},js={},md=()=>d||"./this.program",lr=()=>{if(!lr.strings){var r=(typeof navigator=="object"&&navigator.language||"C").replace("-","_")+".UTF-8",a={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:r,_:md()};for(var c in js)js[c]===void 0?delete a[c]:a[c]=js[c];var h=[];for(var c in a)h.push(`${c}=${a[c]}`);lr.strings=h}return lr.strings},_d=(r,a)=>{var c=0,h=0;for(var p of lr()){var v=a+c;Me[r+h>>2]=v,c+=hi(p,v,1/0)+1,h+=4}return 0},gd=(r,a)=>{var c=lr();Me[r>>2]=c.length;var h=0;for(var p of c)h+=Ne(p)+1;return Me[a>>2]=h,0},dc=0,fc=()=>ie||dc>0,vd=r=>{fc()||(t.onExit?.(r),Z=!0),f(r,new Ue(r))},xd=(r,a)=>{if(Ip(),fc()&&!a){var c=`program exited (with status: ${r}), but keepRuntimeAlive() is set (counter=${dc}) due to an async operation, so halting execution but not exiting the runtime or preventing further async execution (you can use emscripten_force_exit, if you want to force a true shutdown)`;Ke?.(c),L(c)}vd(r)},yd=xd;function Sd(r){try{var a=ht.getStreamFromFD(r);return M.close(a),0}catch(c){if(typeof M>"u"||c.name!=="ErrnoError")throw c;return c.errno}}var Md=(r,a,c,h)=>{for(var p=0,v=0;v<c;v++){var w=Me[a>>2],b=Me[a+4>>2];a+=8;var U=M.read(r,ne,w,b,h);if(U<0)return-1;if(p+=U,U<b)break}return p};function Ed(r,a,c,h){try{var p=ht.getStreamFromFD(r),v=Md(p,a,c);return Me[h>>2]=v,0}catch(w){if(typeof M>"u"||w.name!=="ErrnoError")throw w;return w.errno}}function wd(r,a,c,h){a=cc(a);try{if(isNaN(a))return 61;var p=ht.getStreamFromFD(r);return M.llseek(p,a,c),qe[h>>3]=BigInt(p.position),p.getdents&&a===0&&c===0&&(p.getdents=null),0}catch(v){if(typeof M>"u"||v.name!=="ErrnoError")throw v;return v.errno}}var bd=(r,a,c,h)=>{for(var p=0,v=0;v<c;v++){var w=Me[a>>2],b=Me[a+4>>2];a+=8;var U=M.write(r,ne,w,b,h);if(U<0)return-1;if(p+=U,U<b)break}return p};function Td(r,a,c,h){try{var p=ht.getStreamFromFD(r),v=bd(p,a,c);return Me[h>>2]=v,0}catch(w){if(typeof M>"u"||w.name!=="ErrnoError")throw w;return w.errno}}var Ad=r=>r,Cd=r=>{var a=t["_"+r];return P(a,"Cannot call unknown function "+r+", make sure it is exported"),a},Rd=(r,a)=>{P(r.length>=0,"writeArrayToMemory array must have a length (should be an array or typed array)"),ne.set(r,a)},jr=r=>Mc(r),Pd=r=>{var a=Ne(r)+1,c=jr(a);return hi(r,c,a),c},pc=(r,a,c,h,p)=>{var v={string:me=>{var Ve=0;return me!=null&&me!==0&&(Ve=Pd(me)),Ve},array:me=>{var Ve=jr(me.length);return Rd(me,Ve),Ve}};function w(me){return a==="string"?it(me):a==="boolean"?!!me:me}var b=Cd(r),U=[],W=0;if(P(a!=="array",'Return type should not be "array".'),h)for(var q=0;q<h.length;q++){var oe=v[c[q]];oe?(W===0&&(W=j()),U[q]=oe(h[q])):U[q]=h[q]}var ue=b(...U);function ce(me){return W!==0&&Y(W),w(me)}return ue=ce(ue),ue},Id=(r,a,c,h)=>(...p)=>pc(r,a,c,p),Dd=(...r)=>M.createPath(...r),Ld=(...r)=>M.unlink(...r),Fd=(...r)=>M.createLazyFile(...r),Ud=(...r)=>M.createDevice(...r),Nd=r=>Yr(r),Od=r=>Js(r),kd=r=>{var a=j(),c=jr(4),h=jr(4);wc(r,c,h);var p=Me[c>>2],v=Me[h>>2],w=it(p);An(p);var b;return v&&(b=it(v),An(v)),Y(a),[w,b]},mc=r=>kd(r);M.createPreloadedFile=mt,M.staticInit(),qu(),ih(),P(Tn.length===10),t.noExitRuntime&&(ie=t.noExitRuntime),t.preloadPlugins&&(Be=t.preloadPlugins),t.print&&(N=t.print),t.printErr&&(L=t.printErr),t.wasmBinary&&(I=t.wasmBinary),Hd(),t.arguments&&t.arguments,t.thisProgram&&(d=t.thisProgram),P(typeof t.memoryInitializerPrefixURL>"u","Module.memoryInitializerPrefixURL option was removed, use Module.locateFile instead"),P(typeof t.pthreadMainPrefixURL>"u","Module.pthreadMainPrefixURL option was removed, use Module.locateFile instead"),P(typeof t.cdInitializerPrefixURL>"u","Module.cdInitializerPrefixURL option was removed, use Module.locateFile instead"),P(typeof t.filePackagePrefixURL>"u","Module.filePackagePrefixURL option was removed, use Module.locateFile instead"),P(typeof t.read>"u","Module.read option was removed"),P(typeof t.readAsync>"u","Module.readAsync option was removed (modify readAsync in JS)"),P(typeof t.readBinary>"u","Module.readBinary option was removed (modify readBinary in JS)"),P(typeof t.setWindowTitle>"u","Module.setWindowTitle option was removed (modify emscripten_set_window_title in JS)"),P(typeof t.TOTAL_MEMORY>"u","Module.TOTAL_MEMORY has been renamed Module.INITIAL_MEMORY"),P(typeof t.ENVIRONMENT>"u","Module.ENVIRONMENT has been deprecated. To force the environment, use the ENVIRONMENT compile-time option (for example, -sENVIRONMENT=web or -sENVIRONMENT=node)"),P(typeof t.STACK_SIZE>"u","STACK_SIZE can no longer be set at runtime.  Use -sSTACK_SIZE at link time"),P(typeof t.wasmMemory>"u","Use of `wasmMemory` detected.  Use -sIMPORTED_MEMORY to define wasmMemory externally"),P(typeof t.INITIAL_MEMORY>"u","Detected runtime INITIAL_MEMORY setting.  Use -sIMPORTED_MEMORY to define wasmMemory dynamically"),t.addRunDependency=J,t.removeRunDependency=de,t.ccall=pc,t.cwrap=Id,t.FS_createPreloadedFile=mt,t.FS_unlink=Ld,t.FS_createPath=Dd,t.FS_createDevice=Ud,t.FS=M,t.FS_createDataFile=Ht,t.FS_createLazyFile=Fd,t.MEMFS=Re;var Bd=["writeI53ToI64","writeI53ToI64Clamped","writeI53ToI64Signaling","writeI53ToU64Clamped","writeI53ToU64Signaling","readI53FromI64","readI53FromU64","convertI32PairToI53","convertI32PairToI53Checked","convertU32PairToI53","getTempRet0","zeroMemory","withStackSave","inetPton4","inetNtop4","inetPton6","inetNtop6","readSockaddr","writeSockaddr","emscriptenLog","runMainThreadEmAsm","jstoi_q","autoResumeAudioContext","getDynCaller","dynCall","handleException","runtimeKeepalivePush","runtimeKeepalivePop","callUserCallback","maybeExit","asmjsMangle","HandleAllocator","getNativeTypeSize","addOnInit","addOnPostCtor","addOnPreMain","addOnExit","STACK_SIZE","STACK_ALIGN","POINTER_SIZE","ASSERTIONS","uleb128Encode","sigToWasmTypes","generateFuncType","convertJsFunctionToWasm","getEmptyTableSlot","updateTableMap","getFunctionAddress","addFunction","removeFunction","reallyNegative","unSign","strLen","reSign","formatString","intArrayToString","stringToAscii","stringToNewUTF8","registerKeyEventCallback","maybeCStringToJsString","findEventTarget","getBoundingClientRect","fillMouseEventData","registerMouseEventCallback","registerWheelEventCallback","registerUiEventCallback","registerFocusEventCallback","fillDeviceOrientationEventData","registerDeviceOrientationEventCallback","fillDeviceMotionEventData","registerDeviceMotionEventCallback","screenOrientation","fillOrientationChangeEventData","registerOrientationChangeEventCallback","fillFullscreenChangeEventData","registerFullscreenChangeEventCallback","JSEvents_requestFullscreen","JSEvents_resizeCanvasForFullscreen","registerRestoreOldStyle","hideEverythingExceptGivenElement","restoreHiddenElements","setLetterbox","softFullscreenResizeWebGLRenderTarget","doRequestFullscreen","fillPointerlockChangeEventData","registerPointerlockChangeEventCallback","registerPointerlockErrorEventCallback","requestPointerLock","fillVisibilityChangeEventData","registerVisibilityChangeEventCallback","registerTouchEventCallback","fillGamepadEventData","registerGamepadEventCallback","registerBeforeUnloadEventCallback","fillBatteryEventData","battery","registerBatteryEventCallback","setCanvasElementSize","getCanvasElementSize","jsStackTrace","getCallstack","convertPCtoSourceLocation","wasiRightsToMuslOFlags","wasiOFlagsToMuslOFlags","safeSetTimeout","setImmediateWrapped","safeRequestAnimationFrame","clearImmediateWrapped","registerPostMainLoop","registerPreMainLoop","getPromise","makePromise","idsToPromises","makePromiseCallback","Browser_asyncPrepareDataCounter","arraySum","addDays","getSocketFromFD","getSocketAddress","FS_mkdirTree","_setNetworkCallback","heapObjectForWebGLType","toTypedArrayIndex","webgl_enable_ANGLE_instanced_arrays","webgl_enable_OES_vertex_array_object","webgl_enable_WEBGL_draw_buffers","webgl_enable_WEBGL_multi_draw","webgl_enable_EXT_polygon_offset_clamp","webgl_enable_EXT_clip_control","webgl_enable_WEBGL_polygon_mode","emscriptenWebGLGet","computeUnpackAlignedImageSize","colorChannelsInGlTextureFormat","emscriptenWebGLGetTexPixelData","emscriptenWebGLGetUniform","webglGetUniformLocation","webglPrepareUniformLocationsBeforeFirstUse","webglGetLeftBracePos","emscriptenWebGLGetVertexAttrib","__glGetActiveAttribOrUniform","writeGLArray","registerWebGlEventCallback","runAndAbortIfError","ALLOC_NORMAL","ALLOC_STACK","allocate","writeStringToMemory","writeAsciiToMemory","demangle","stackTrace","getFunctionArgsName","createJsInvokerSignature","PureVirtualError","registerInheritedInstance","unregisterInheritedInstance","getInheritedInstanceCount","getLiveInheritedInstances","setDelayFunction","count_emval_handles"];Bd.forEach(Ae);var zd=["run","out","err","callMain","abort","wasmMemory","wasmExports","HEAPF32","HEAPF64","HEAP8","HEAPU8","HEAP16","HEAPU16","HEAP32","HEAPU32","HEAP64","HEAPU64","writeStackCookie","checkStackCookie","INT53_MAX","INT53_MIN","bigintToI53Checked","stackSave","stackRestore","stackAlloc","setTempRet0","ptrToString","exitJS","getHeapMax","growMemory","ENV","ERRNO_CODES","strError","DNS","Protocols","Sockets","timers","warnOnce","readEmAsmArgsArray","readEmAsmArgs","runEmAsmFunction","getExecutableName","keepRuntimeAlive","asyncLoad","alignMemory","mmapAlloc","wasmTable","getUniqueRunDependency","noExitRuntime","addOnPreRun","addOnPostRun","freeTableIndexes","functionsInTableMap","setValue","getValue","PATH","PATH_FS","UTF8Decoder","UTF8ArrayToString","UTF8ToString","stringToUTF8Array","stringToUTF8","lengthBytesUTF8","intArrayFromString","AsciiToString","UTF16Decoder","UTF16ToString","stringToUTF16","lengthBytesUTF16","UTF32ToString","stringToUTF32","lengthBytesUTF32","stringToUTF8OnStack","writeArrayToMemory","JSEvents","specialHTMLTargets","findCanvasEventTarget","currentFullscreenStrategy","restoreOldWindowedStyle","UNWIND_CACHE","ExitStatus","getEnvStrings","checkWasiClock","doReadv","doWritev","initRandomFill","randomFill","emSetImmediate","emClearImmediate_deps","emClearImmediate","promiseMap","uncaughtExceptionCount","exceptionLast","exceptionCaught","ExceptionInfo","findMatchingCatch","getExceptionMessageCommon","Browser","requestFullscreen","requestFullScreen","setCanvasSize","getUserMedia","createContext","getPreloadedImageData__data","wget","MONTH_DAYS_REGULAR","MONTH_DAYS_LEAP","MONTH_DAYS_REGULAR_CUMULATIVE","MONTH_DAYS_LEAP_CUMULATIVE","isLeapYear","ydayFromDate","SYSCALLS","preloadPlugins","FS_modeStringToFlags","FS_getMode","FS_stdin_getChar_buffer","FS_stdin_getChar","FS_readFile","FS_root","FS_mounts","FS_devices","FS_streams","FS_nextInode","FS_nameTable","FS_currentPath","FS_initialized","FS_ignorePermissions","FS_filesystems","FS_syncFSRequests","FS_readFiles","FS_lookupPath","FS_getPath","FS_hashName","FS_hashAddNode","FS_hashRemoveNode","FS_lookupNode","FS_createNode","FS_destroyNode","FS_isRoot","FS_isMountpoint","FS_isFile","FS_isDir","FS_isLink","FS_isChrdev","FS_isBlkdev","FS_isFIFO","FS_isSocket","FS_flagsToPermissionString","FS_nodePermissions","FS_mayLookup","FS_mayCreate","FS_mayDelete","FS_mayOpen","FS_checkOpExists","FS_nextfd","FS_getStreamChecked","FS_getStream","FS_createStream","FS_closeStream","FS_dupStream","FS_doSetAttr","FS_chrdev_stream_ops","FS_major","FS_minor","FS_makedev","FS_registerDevice","FS_getDevice","FS_getMounts","FS_syncfs","FS_mount","FS_unmount","FS_lookup","FS_mknod","FS_statfs","FS_statfsStream","FS_statfsNode","FS_create","FS_mkdir","FS_mkdev","FS_symlink","FS_rename","FS_rmdir","FS_readdir","FS_readlink","FS_stat","FS_fstat","FS_lstat","FS_doChmod","FS_chmod","FS_lchmod","FS_fchmod","FS_doChown","FS_chown","FS_lchown","FS_fchown","FS_doTruncate","FS_truncate","FS_ftruncate","FS_utime","FS_open","FS_close","FS_isClosed","FS_llseek","FS_read","FS_write","FS_mmap","FS_msync","FS_ioctl","FS_writeFile","FS_cwd","FS_chdir","FS_createDefaultDirectories","FS_createDefaultDevices","FS_createSpecialDirectories","FS_createStandardStreams","FS_staticInit","FS_init","FS_quit","FS_findObject","FS_analyzePath","FS_createFile","FS_forceLoadFile","FS_absolutePath","FS_createFolder","FS_createLink","FS_joinPath","FS_mmapAlloc","FS_standardizePath","TTY","PIPEFS","SOCKFS","tempFixedLengthArray","miniTempWebGLFloatBuffers","miniTempWebGLIntBuffers","GL","AL","GLUT","EGL","GLEW","IDBStore","SDL","SDL_gfx","allocateUTF8","allocateUTF8OnStack","print","printErr","jstoi_s","InternalError","BindingError","throwInternalError","throwBindingError","registeredTypes","awaitingDependencies","typeDependencies","tupleRegistrations","structRegistrations","sharedRegisterType","whenDependentTypesAreResolved","getTypeName","getFunctionName","heap32VectorToArray","requireRegisteredType","usesDestructorStack","checkArgCount","getRequiredArgCount","createJsInvoker","UnboundTypeError","GenericWireTypeSize","EmValType","EmValOptionalType","throwUnboundTypeError","ensureOverloadTable","exposePublicSymbol","replacePublicSymbol","createNamedFunction","embindRepr","registeredInstances","getBasestPointer","getInheritedInstance","registeredPointers","registerType","integerReadValueFromPointer","enumReadValueFromPointer","floatReadValueFromPointer","assertIntegerRange","readPointer","runDestructors","craftInvokerFunction","embind__requireFunction","genericPointerToWireType","constNoSmartPtrRawPointerToWireType","nonConstNoSmartPtrRawPointerToWireType","init_RegisteredPointer","RegisteredPointer","RegisteredPointer_fromWireType","runDestructor","releaseClassHandle","finalizationRegistry","detachFinalizer_deps","detachFinalizer","attachFinalizer","makeClassHandle","init_ClassHandle","ClassHandle","throwInstanceAlreadyDeleted","deletionQueue","flushPendingDeletes","delayFunction","RegisteredClass","shallowCopyInternalPointer","downcastPointer","upcastPointer","validateThis","char_0","char_9","makeLegalFunctionName","emval_freelist","emval_handles","emval_symbols","getStringOrSymbol","Emval","emval_get_global","emval_returnValue","emval_lookupTypes","emval_methodCallers","emval_addMethodCaller"];zd.forEach(Pe),t.incrementExceptionRefcount=Nd,t.decrementExceptionRefcount=Od,t.getExceptionMessage=mc;function Hd(){pe("fetchSettings")}var _c={679512:()=>{typeof t<"u"&&"mjDISABLESTRING mjENABLESTRING mjFRAMESTRING mjLABELSTRING mjRNDSTRING mjTIMERSTRING mjVISSTRING".split(" ").forEach(function(r){Object.defineProperty(t,r,{get:function(){return t["get_"+r]()},set:function(a){},enumerable:!0,configurable:!0})})}},gc=ee("___getTypeName"),Ys=ee("_malloc"),qs=ee("_fflush"),An=ee("_free"),Zs=ee("_emscripten_stack_get_end"),vc=ee("_strerror"),ge=ee("_setThrew"),xc=ee("__emscripten_tempret_set"),yc=ee("_emscripten_stack_init"),Sc=ee("__emscripten_stack_restore"),Mc=ee("__emscripten_stack_alloc"),Ec=ee("_emscripten_stack_get_current"),Js=ee("___cxa_decrement_exception_refcount"),Yr=ee("___cxa_increment_exception_refcount"),wc=ee("___get_exception_message"),bc=ee("___cxa_can_catch"),Tc=ee("___cxa_get_exception_ptr");function Gd(r){gc=se("__getTypeName",1),Ys=se("malloc",1),qs=se("fflush",1),An=se("free",1),Zs=r.emscripten_stack_get_end,r.emscripten_stack_get_base,vc=se("strerror",1),ge=se("setThrew",2),xc=se("_emscripten_tempret_set",1),yc=r.emscripten_stack_init,r.emscripten_stack_get_free,Sc=r._emscripten_stack_restore,Mc=r._emscripten_stack_alloc,Ec=r.emscripten_stack_get_current,Js=se("__cxa_decrement_exception_refcount",1),Yr=se("__cxa_increment_exception_refcount",1),wc=se("__get_exception_message",3),bc=se("__cxa_can_catch",3),Tc=se("__cxa_get_exception_ptr",1)}var Ac={__assert_fail:nn,__cxa_begin_catch:Ar,__cxa_current_primary_exception:Ln,__cxa_end_catch:Cr,__cxa_find_matching_catch_2:Pi,__cxa_find_matching_catch_3:Rr,__cxa_find_matching_catch_4:Pr,__cxa_rethrow:Ir,__cxa_rethrow_primary_exception:Os,__cxa_throw:ks,__cxa_uncaught_exceptions:R,__resumeException:G,__syscall_dup3:oi,__syscall_fcntl64:En,__syscall_fstat64:Dr,__syscall_ioctl:Fu,__syscall_lstat64:Uu,__syscall_newfstatat:Nu,__syscall_openat:Ou,__syscall_stat64:ku,_abort_js:Bu,_embind_register_bigint:Hu,_embind_register_bool:Gu,_embind_register_class:sh,_embind_register_class_class_function:lh,_embind_register_class_constructor:uh,_embind_register_class_function:hh,_embind_register_class_property:dh,_embind_register_constant:fh,_embind_register_emval:ic,_embind_register_enum:mh,_embind_register_enum_value:_h,_embind_register_float:vh,_embind_register_function:xh,_embind_register_integer:yh,_embind_register_memory_view:Sh,_embind_register_optional:Eh,_embind_register_std_string:wh,_embind_register_std_wstring:Ih,_embind_register_user_type:Dh,_embind_register_void:Lh,_emscripten_throw_longjmp:Fh,_emval_as:Uh,_emval_call:Nh,_emval_call_method:kh,_emval_decref:Xs,_emval_get_global:Bh,_emval_get_method_caller:Gh,_emval_get_property:Vh,_emval_incref:Wh,_emval_is_number:Xh,_emval_is_string:$h,_emval_new_array:jh,_emval_new_cstring:Yh,_emval_run_destructors:qh,_emval_take_value:Zh,_emval_throw:Jh,_localtime_js:id,_mktime_js:rd,_tzset_js:sd,clock_time_get:od,emscripten_asm_const_int:ud,emscripten_date_now:uc,emscripten_get_heap_max:hd,emscripten_get_now:lc,emscripten_resize_heap:pd,environ_get:_d,environ_sizes_get:gd,exit:yd,fd_close:Sd,fd_read:Ed,fd_seek:wd,fd_write:Td,invoke_ddd:_p,invoke_dddi:Lf,invoke_dddidi:Ff,invoke_ddidi:Df,invoke_di:Uf,invoke_dii:Ef,invoke_diii:nf,invoke_diiii:If,invoke_diiiidd:Rf,invoke_diiiidi:af,invoke_diiiii:Jd,invoke_diiiiii:df,invoke_diiiiiii:Nf,invoke_diiiiiiiii:uf,invoke_diiiiiiiiiiii:hf,invoke_fiii:Ap,invoke_i:Kd,invoke_id:tp,invoke_ii:Xd,invoke_iid:$f,invoke_iidddd:Sp,invoke_iidiii:yf,invoke_iidiiid:vf,invoke_iidiiiiidi:Sf,invoke_iif:yp,invoke_iii:Vd,invoke_iiid:Mf,invoke_iiididdddddd:xf,invoke_iiidiiiiiiii:gf,invoke_iiii:Yd,invoke_iiiidddiiiii:kf,invoke_iiiii:tf,invoke_iiiiid:ip,invoke_iiiiii:Jf,invoke_iiiiiii:Yf,invoke_iiiiiiii:Xf,invoke_iiiiiiiidd:rp,invoke_iiiiiiiii:Cf,invoke_iiiiiiiiii:qf,invoke_iiiiiiiiiidddiiiiiiiii:_f,invoke_iiiiiiiiiii:Tp,invoke_iiiiiiiiiiii:Cp,invoke_iiiiiiiiiiiii:lp,invoke_iiij:Zf,invoke_iiji:np,invoke_j:wp,invoke_ji:pp,invoke_jiiii:Kf,invoke_jij:mp,invoke_v:jd,invoke_vi:$d,invoke_vid:jf,invoke_viddd:Qf,invoke_vidddd:ep,invoke_vidi:Pf,invoke_vidiii:pf,invoke_vii:Zd,invoke_viid:Tf,invoke_viiddi:cp,invoke_viiddidi:op,invoke_viiddii:Of,invoke_viidi:bf,invoke_viidii:sf,invoke_viidiii:Vf,invoke_viidiiid:Hf,invoke_viidiiiii:mf,invoke_viidiiiiidi:Wf,invoke_viidiiiiiiii:ff,invoke_viii:Wd,invoke_viiid:cf,invoke_viiidd:ap,invoke_viiidi:wf,invoke_viiididdddddd:Gf,invoke_viiidiiiiiiii:zf,invoke_viiii:ef,invoke_viiiiddd:sp,invoke_viiiidi:gp,invoke_viiiifi:vp,invoke_viiiii:qd,invoke_viiiiid:of,invoke_viiiiii:Qd,invoke_viiiiiii:rf,invoke_viiiiiiii:Af,invoke_viiiiiiiiii:dp,invoke_viiiiiiiiiidddiiiiiiiii:Bf,invoke_viiiiiiiiiiid:lf,invoke_viiiiiiiiiiiii:hp,invoke_viiiiiiiiiiiiiii:Rp,invoke_viiiiiiiiiiiiiiiiii:fp,invoke_viiiij:Mp,invoke_viij:Ep,invoke_viijii:bp,invoke_vij:xp,invoke_vijjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj:up,llvm_eh_typeid_for:Ad},di=await Ye();function Vd(r,a,c){var h=j();try{return ve(r)(a,c)}catch(p){if(Y(h),!(p instanceof E))throw p;ge(1,0)}}function Wd(r,a,c,h){var p=j();try{ve(r)(a,c,h)}catch(v){if(Y(p),!(v instanceof E))throw v;ge(1,0)}}function Xd(r,a){var c=j();try{return ve(r)(a)}catch(h){if(Y(c),!(h instanceof E))throw h;ge(1,0)}}function $d(r,a){var c=j();try{ve(r)(a)}catch(h){if(Y(c),!(h instanceof E))throw h;ge(1,0)}}function jd(r){var a=j();try{ve(r)()}catch(c){if(Y(a),!(c instanceof E))throw c;ge(1,0)}}function Yd(r,a,c,h){var p=j();try{return ve(r)(a,c,h)}catch(v){if(Y(p),!(v instanceof E))throw v;ge(1,0)}}function qd(r,a,c,h,p,v){var w=j();try{ve(r)(a,c,h,p,v)}catch(b){if(Y(w),!(b instanceof E))throw b;ge(1,0)}}function Zd(r,a,c){var h=j();try{ve(r)(a,c)}catch(p){if(Y(h),!(p instanceof E))throw p;ge(1,0)}}function Jd(r,a,c,h,p,v){var w=j();try{return ve(r)(a,c,h,p,v)}catch(b){if(Y(w),!(b instanceof E))throw b;ge(1,0)}}function Kd(r){var a=j();try{return ve(r)()}catch(c){if(Y(a),!(c instanceof E))throw c;ge(1,0)}}function Qd(r,a,c,h,p,v,w){var b=j();try{ve(r)(a,c,h,p,v,w)}catch(U){if(Y(b),!(U instanceof E))throw U;ge(1,0)}}function ef(r,a,c,h,p){var v=j();try{ve(r)(a,c,h,p)}catch(w){if(Y(v),!(w instanceof E))throw w;ge(1,0)}}function tf(r,a,c,h,p){var v=j();try{return ve(r)(a,c,h,p)}catch(w){if(Y(v),!(w instanceof E))throw w;ge(1,0)}}function nf(r,a,c,h){var p=j();try{return ve(r)(a,c,h)}catch(v){if(Y(p),!(v instanceof E))throw v;ge(1,0)}}function rf(r,a,c,h,p,v,w,b){var U=j();try{ve(r)(a,c,h,p,v,w,b)}catch(W){if(Y(U),!(W instanceof E))throw W;ge(1,0)}}function sf(r,a,c,h,p,v){var w=j();try{ve(r)(a,c,h,p,v)}catch(b){if(Y(w),!(b instanceof E))throw b;ge(1,0)}}function af(r,a,c,h,p,v,w){var b=j();try{return ve(r)(a,c,h,p,v,w)}catch(U){if(Y(b),!(U instanceof E))throw U;ge(1,0)}}function of(r,a,c,h,p,v,w){var b=j();try{ve(r)(a,c,h,p,v,w)}catch(U){if(Y(b),!(U instanceof E))throw U;ge(1,0)}}function cf(r,a,c,h,p){var v=j();try{ve(r)(a,c,h,p)}catch(w){if(Y(v),!(w instanceof E))throw w;ge(1,0)}}function lf(r,a,c,h,p,v,w,b,U,W,q,oe,ue){var ce=j();try{ve(r)(a,c,h,p,v,w,b,U,W,q,oe,ue)}catch(me){if(Y(ce),!(me instanceof E))throw me;ge(1,0)}}function uf(r,a,c,h,p,v,w,b,U,W){var q=j();try{return ve(r)(a,c,h,p,v,w,b,U,W)}catch(oe){if(Y(q),!(oe instanceof E))throw oe;ge(1,0)}}function hf(r,a,c,h,p,v,w,b,U,W,q,oe,ue){var ce=j();try{return ve(r)(a,c,h,p,v,w,b,U,W,q,oe,ue)}catch(me){if(Y(ce),!(me instanceof E))throw me;ge(1,0)}}function df(r,a,c,h,p,v,w){var b=j();try{return ve(r)(a,c,h,p,v,w)}catch(U){if(Y(b),!(U instanceof E))throw U;ge(1,0)}}function ff(r,a,c,h,p,v,w,b,U,W,q,oe){var ue=j();try{ve(r)(a,c,h,p,v,w,b,U,W,q,oe)}catch(ce){if(Y(ue),!(ce instanceof E))throw ce;ge(1,0)}}function pf(r,a,c,h,p,v){var w=j();try{ve(r)(a,c,h,p,v)}catch(b){if(Y(w),!(b instanceof E))throw b;ge(1,0)}}function mf(r,a,c,h,p,v,w,b,U){var W=j();try{ve(r)(a,c,h,p,v,w,b,U)}catch(q){if(Y(W),!(q instanceof E))throw q;ge(1,0)}}function _f(r,a,c,h,p,v,w,b,U,W,q,oe,ue,ce,me,Ve,ct,tt,wt,_t,Wt,Nt){var Zt=j();try{return ve(r)(a,c,h,p,v,w,b,U,W,q,oe,ue,ce,me,Ve,ct,tt,wt,_t,Wt,Nt)}catch(yt){if(Y(Zt),!(yt instanceof E))throw yt;ge(1,0)}}function gf(r,a,c,h,p,v,w,b,U,W,q,oe){var ue=j();try{return ve(r)(a,c,h,p,v,w,b,U,W,q,oe)}catch(ce){if(Y(ue),!(ce instanceof E))throw ce;ge(1,0)}}function vf(r,a,c,h,p,v,w){var b=j();try{return ve(r)(a,c,h,p,v,w)}catch(U){if(Y(b),!(U instanceof E))throw U;ge(1,0)}}function xf(r,a,c,h,p,v,w,b,U,W,q,oe){var ue=j();try{return ve(r)(a,c,h,p,v,w,b,U,W,q,oe)}catch(ce){if(Y(ue),!(ce instanceof E))throw ce;ge(1,0)}}function yf(r,a,c,h,p,v){var w=j();try{return ve(r)(a,c,h,p,v)}catch(b){if(Y(w),!(b instanceof E))throw b;ge(1,0)}}function Sf(r,a,c,h,p,v,w,b,U,W){var q=j();try{return ve(r)(a,c,h,p,v,w,b,U,W)}catch(oe){if(Y(q),!(oe instanceof E))throw oe;ge(1,0)}}function Mf(r,a,c,h){var p=j();try{return ve(r)(a,c,h)}catch(v){if(Y(p),!(v instanceof E))throw v;ge(1,0)}}function Ef(r,a,c){var h=j();try{return ve(r)(a,c)}catch(p){if(Y(h),!(p instanceof E))throw p;ge(1,0)}}function wf(r,a,c,h,p,v){var w=j();try{ve(r)(a,c,h,p,v)}catch(b){if(Y(w),!(b instanceof E))throw b;ge(1,0)}}function bf(r,a,c,h,p){var v=j();try{ve(r)(a,c,h,p)}catch(w){if(Y(v),!(w instanceof E))throw w;ge(1,0)}}function Tf(r,a,c,h){var p=j();try{ve(r)(a,c,h)}catch(v){if(Y(p),!(v instanceof E))throw v;ge(1,0)}}function Af(r,a,c,h,p,v,w,b,U){var W=j();try{ve(r)(a,c,h,p,v,w,b,U)}catch(q){if(Y(W),!(q instanceof E))throw q;ge(1,0)}}function Cf(r,a,c,h,p,v,w,b,U){var W=j();try{return ve(r)(a,c,h,p,v,w,b,U)}catch(q){if(Y(W),!(q instanceof E))throw q;ge(1,0)}}function Rf(r,a,c,h,p,v,w){var b=j();try{return ve(r)(a,c,h,p,v,w)}catch(U){if(Y(b),!(U instanceof E))throw U;ge(1,0)}}function Pf(r,a,c,h){var p=j();try{ve(r)(a,c,h)}catch(v){if(Y(p),!(v instanceof E))throw v;ge(1,0)}}function If(r,a,c,h,p){var v=j();try{return ve(r)(a,c,h,p)}catch(w){if(Y(v),!(w instanceof E))throw w;ge(1,0)}}function Df(r,a,c,h,p){var v=j();try{return ve(r)(a,c,h,p)}catch(w){if(Y(v),!(w instanceof E))throw w;ge(1,0)}}function Lf(r,a,c,h){var p=j();try{return ve(r)(a,c,h)}catch(v){if(Y(p),!(v instanceof E))throw v;ge(1,0)}}function Ff(r,a,c,h,p,v){var w=j();try{return ve(r)(a,c,h,p,v)}catch(b){if(Y(w),!(b instanceof E))throw b;ge(1,0)}}function Uf(r,a){var c=j();try{return ve(r)(a)}catch(h){if(Y(c),!(h instanceof E))throw h;ge(1,0)}}function Nf(r,a,c,h,p,v,w,b){var U=j();try{return ve(r)(a,c,h,p,v,w,b)}catch(W){if(Y(U),!(W instanceof E))throw W;ge(1,0)}}function Of(r,a,c,h,p,v,w){var b=j();try{ve(r)(a,c,h,p,v,w)}catch(U){if(Y(b),!(U instanceof E))throw U;ge(1,0)}}function kf(r,a,c,h,p,v,w,b,U,W,q,oe){var ue=j();try{return ve(r)(a,c,h,p,v,w,b,U,W,q,oe)}catch(ce){if(Y(ue),!(ce instanceof E))throw ce;ge(1,0)}}function Bf(r,a,c,h,p,v,w,b,U,W,q,oe,ue,ce,me,Ve,ct,tt,wt,_t,Wt,Nt,Zt){var yt=j();try{ve(r)(a,c,h,p,v,w,b,U,W,q,oe,ue,ce,me,Ve,ct,tt,wt,_t,Wt,Nt,Zt)}catch(fi){if(Y(yt),!(fi instanceof E))throw fi;ge(1,0)}}function zf(r,a,c,h,p,v,w,b,U,W,q,oe,ue){var ce=j();try{ve(r)(a,c,h,p,v,w,b,U,W,q,oe,ue)}catch(me){if(Y(ce),!(me instanceof E))throw me;ge(1,0)}}function Hf(r,a,c,h,p,v,w,b){var U=j();try{ve(r)(a,c,h,p,v,w,b)}catch(W){if(Y(U),!(W instanceof E))throw W;ge(1,0)}}function Gf(r,a,c,h,p,v,w,b,U,W,q,oe,ue){var ce=j();try{ve(r)(a,c,h,p,v,w,b,U,W,q,oe,ue)}catch(me){if(Y(ce),!(me instanceof E))throw me;ge(1,0)}}function Vf(r,a,c,h,p,v,w){var b=j();try{ve(r)(a,c,h,p,v,w)}catch(U){if(Y(b),!(U instanceof E))throw U;ge(1,0)}}function Wf(r,a,c,h,p,v,w,b,U,W,q){var oe=j();try{ve(r)(a,c,h,p,v,w,b,U,W,q)}catch(ue){if(Y(oe),!(ue instanceof E))throw ue;ge(1,0)}}function Xf(r,a,c,h,p,v,w,b){var U=j();try{return ve(r)(a,c,h,p,v,w,b)}catch(W){if(Y(U),!(W instanceof E))throw W;ge(1,0)}}function $f(r,a,c){var h=j();try{return ve(r)(a,c)}catch(p){if(Y(h),!(p instanceof E))throw p;ge(1,0)}}function jf(r,a,c){var h=j();try{ve(r)(a,c)}catch(p){if(Y(h),!(p instanceof E))throw p;ge(1,0)}}function Yf(r,a,c,h,p,v,w){var b=j();try{return ve(r)(a,c,h,p,v,w)}catch(U){if(Y(b),!(U instanceof E))throw U;ge(1,0)}}function qf(r,a,c,h,p,v,w,b,U,W){var q=j();try{return ve(r)(a,c,h,p,v,w,b,U,W)}catch(oe){if(Y(q),!(oe instanceof E))throw oe;ge(1,0)}}function Zf(r,a,c,h){var p=j();try{return ve(r)(a,c,h)}catch(v){if(Y(p),!(v instanceof E))throw v;ge(1,0)}}function Jf(r,a,c,h,p,v){var w=j();try{return ve(r)(a,c,h,p,v)}catch(b){if(Y(w),!(b instanceof E))throw b;ge(1,0)}}function Kf(r,a,c,h,p){var v=j();try{return ve(r)(a,c,h,p)}catch(w){if(Y(v),!(w instanceof E))throw w;return ge(1,0),0n}}function Qf(r,a,c,h,p){var v=j();try{ve(r)(a,c,h,p)}catch(w){if(Y(v),!(w instanceof E))throw w;ge(1,0)}}function ep(r,a,c,h,p,v){var w=j();try{ve(r)(a,c,h,p,v)}catch(b){if(Y(w),!(b instanceof E))throw b;ge(1,0)}}function tp(r,a){var c=j();try{return ve(r)(a)}catch(h){if(Y(c),!(h instanceof E))throw h;ge(1,0)}}function np(r,a,c,h){var p=j();try{return ve(r)(a,c,h)}catch(v){if(Y(p),!(v instanceof E))throw v;ge(1,0)}}function ip(r,a,c,h,p,v){var w=j();try{return ve(r)(a,c,h,p,v)}catch(b){if(Y(w),!(b instanceof E))throw b;ge(1,0)}}function rp(r,a,c,h,p,v,w,b,U,W){var q=j();try{return ve(r)(a,c,h,p,v,w,b,U,W)}catch(oe){if(Y(q),!(oe instanceof E))throw oe;ge(1,0)}}function sp(r,a,c,h,p,v,w,b){var U=j();try{ve(r)(a,c,h,p,v,w,b)}catch(W){if(Y(U),!(W instanceof E))throw W;ge(1,0)}}function ap(r,a,c,h,p,v){var w=j();try{ve(r)(a,c,h,p,v)}catch(b){if(Y(w),!(b instanceof E))throw b;ge(1,0)}}function op(r,a,c,h,p,v,w,b){var U=j();try{ve(r)(a,c,h,p,v,w,b)}catch(W){if(Y(U),!(W instanceof E))throw W;ge(1,0)}}function cp(r,a,c,h,p,v){var w=j();try{ve(r)(a,c,h,p,v)}catch(b){if(Y(w),!(b instanceof E))throw b;ge(1,0)}}function lp(r,a,c,h,p,v,w,b,U,W,q,oe,ue){var ce=j();try{return ve(r)(a,c,h,p,v,w,b,U,W,q,oe,ue)}catch(me){if(Y(ce),!(me instanceof E))throw me;ge(1,0)}}function up(r,a,c,h,p,v,w,b,U,W,q,oe,ue,ce,me,Ve,ct,tt,wt,_t,Wt,Nt,Zt,yt,fi,Lp,Fp,Up,Np,Op,kp,Bp,zp,Hp,Gp,Vp,Wp,Xp,$p,jp,Yp,qp,Zp,Jp,Kp,Qp,em,tm,nm,im,rm,sm,am,om,cm,lm,um,hm,dm,fm,pm,mm,_m,gm,vm,xm,ym,Sm,Mm,Em,wm,bm,Tm,Am,Cm,Rm,Pm,Im,Dm,Lm,Fm,Um,Nm,Om,km,Bm){var zm=j();try{ve(r)(a,c,h,p,v,w,b,U,W,q,oe,ue,ce,me,Ve,ct,tt,wt,_t,Wt,Nt,Zt,yt,fi,Lp,Fp,Up,Np,Op,kp,Bp,zp,Hp,Gp,Vp,Wp,Xp,$p,jp,Yp,qp,Zp,Jp,Kp,Qp,em,tm,nm,im,rm,sm,am,om,cm,lm,um,hm,dm,fm,pm,mm,_m,gm,vm,xm,ym,Sm,Mm,Em,wm,bm,Tm,Am,Cm,Rm,Pm,Im,Dm,Lm,Fm,Um,Nm,Om,km,Bm)}catch(Rc){if(Y(zm),!(Rc instanceof E))throw Rc;ge(1,0)}}function hp(r,a,c,h,p,v,w,b,U,W,q,oe,ue,ce){var me=j();try{ve(r)(a,c,h,p,v,w,b,U,W,q,oe,ue,ce)}catch(Ve){if(Y(me),!(Ve instanceof E))throw Ve;ge(1,0)}}function dp(r,a,c,h,p,v,w,b,U,W,q){var oe=j();try{ve(r)(a,c,h,p,v,w,b,U,W,q)}catch(ue){if(Y(oe),!(ue instanceof E))throw ue;ge(1,0)}}function fp(r,a,c,h,p,v,w,b,U,W,q,oe,ue,ce,me,Ve,ct,tt,wt){var _t=j();try{ve(r)(a,c,h,p,v,w,b,U,W,q,oe,ue,ce,me,Ve,ct,tt,wt)}catch(Wt){if(Y(_t),!(Wt instanceof E))throw Wt;ge(1,0)}}function pp(r,a){var c=j();try{return ve(r)(a)}catch(h){if(Y(c),!(h instanceof E))throw h;return ge(1,0),0n}}function mp(r,a,c){var h=j();try{return ve(r)(a,c)}catch(p){if(Y(h),!(p instanceof E))throw p;return ge(1,0),0n}}function _p(r,a,c){var h=j();try{return ve(r)(a,c)}catch(p){if(Y(h),!(p instanceof E))throw p;ge(1,0)}}function gp(r,a,c,h,p,v,w){var b=j();try{ve(r)(a,c,h,p,v,w)}catch(U){if(Y(b),!(U instanceof E))throw U;ge(1,0)}}function vp(r,a,c,h,p,v,w){var b=j();try{ve(r)(a,c,h,p,v,w)}catch(U){if(Y(b),!(U instanceof E))throw U;ge(1,0)}}function xp(r,a,c){var h=j();try{ve(r)(a,c)}catch(p){if(Y(h),!(p instanceof E))throw p;ge(1,0)}}function yp(r,a,c){var h=j();try{return ve(r)(a,c)}catch(p){if(Y(h),!(p instanceof E))throw p;ge(1,0)}}function Sp(r,a,c,h,p,v){var w=j();try{return ve(r)(a,c,h,p,v)}catch(b){if(Y(w),!(b instanceof E))throw b;ge(1,0)}}function Mp(r,a,c,h,p,v){var w=j();try{ve(r)(a,c,h,p,v)}catch(b){if(Y(w),!(b instanceof E))throw b;ge(1,0)}}function Ep(r,a,c,h){var p=j();try{ve(r)(a,c,h)}catch(v){if(Y(p),!(v instanceof E))throw v;ge(1,0)}}function wp(r){var a=j();try{return ve(r)()}catch(c){if(Y(a),!(c instanceof E))throw c;return ge(1,0),0n}}function bp(r,a,c,h,p,v){var w=j();try{ve(r)(a,c,h,p,v)}catch(b){if(Y(w),!(b instanceof E))throw b;ge(1,0)}}function Tp(r,a,c,h,p,v,w,b,U,W,q){var oe=j();try{return ve(r)(a,c,h,p,v,w,b,U,W,q)}catch(ue){if(Y(oe),!(ue instanceof E))throw ue;ge(1,0)}}function Ap(r,a,c,h){var p=j();try{return ve(r)(a,c,h)}catch(v){if(Y(p),!(v instanceof E))throw v;ge(1,0)}}function Cp(r,a,c,h,p,v,w,b,U,W,q,oe){var ue=j();try{return ve(r)(a,c,h,p,v,w,b,U,W,q,oe)}catch(ce){if(Y(ue),!(ce instanceof E))throw ce;ge(1,0)}}function Rp(r,a,c,h,p,v,w,b,U,W,q,oe,ue,ce,me,Ve){var ct=j();try{ve(r)(a,c,h,p,v,w,b,U,W,q,oe,ue,ce,me,Ve)}catch(tt){if(Y(ct),!(tt instanceof E))throw tt;ge(1,0)}}var Cc;function Pp(){yc(),X()}function Ks(){if(pt>0){Ge=Ks;return}if(Pp(),at(),pt>0){Ge=Ks;return}function r(){P(!Cc),Cc=!0,t.calledRun=!0,!Z&&(ot(),He?.(t),t.onRuntimeInitialized?.(),K("onRuntimeInitialized"),P(!t._main,'compiled without a main, but one is present. if you added it from JS, use Module["onRuntimeInitialized"]'),We())}t.setStatus?(t.setStatus("Running..."),setTimeout(()=>{setTimeout(()=>t.setStatus(""),1),r()},1)):r(),D()}function Ip(){var r=N,a=L,c=!1;N=L=h=>{c=!0};try{qs(0),["stdout","stderr"].forEach(h=>{var p=M.analyzePath("/dev/"+h);if(p){var v=p.object,w=v.rdev,b=Ie.ttys[w];b?.output?.length&&(c=!0)}})}catch{}N=r,L=a,c&&$e("stdio streams had content in them that was not flushed. you should set EXIT_RUNTIME to 1 (see the Emscripten FAQ), or make sure to emit a newline when you printf etc.")}function Dp(){if(t.preInit)for(typeof t.preInit=="function"&&(t.preInit=[t.preInit]);t.preInit.length>0;)t.preInit.shift()();K("preInit")}Dp(),Ks(),H?e=t:e=new Promise((r,a)=>{He=r,Ke=a});for(const r of Object.keys(t))r in i||Object.defineProperty(i,r,{configurable:!0,get(){le(`Access to module property ('${r}') is no longer possible via the module constructor argument; Instead, use the result of the module constructor.`)}});return e});const qm="/Hackathon/assets/mujoco-ChFpd822.wasm",Zm="1.0",Jm=2,Km=4,Qm=2,e_=6,t_=4,n_=12,i_=250,r_=100,s_=50,a_=20,o_=1e3,c_={ws:8765,udp:9870},l_={sim:"/sim",cmd:"/cmd",state:"/state"},u_={cmd:{name:"JackalCmd",type:"Control",channels:2},action:{name:"JackalAction",type:"Markers"},state:{name:"JackalState",type:"State",channels:["x","y","yaw","v","w","v_cmd","w_cmd","collisions"]},scan:{name:"JackalScan",type:"Range",channels:180},events:{name:"JackalEvents",type:"Markers"}},Xl={protocol_version:Zm,V_MAX:Jm,W_MAX:Km,A_V_MAX:Qm,A_W_MAX:e_,A_V_BRAKE:t_,A_W_BRAKE:n_,DEADMAN_MS:i_,MAX_RATE_HZ:r_,CONTROL_HZ:s_,STATE_HZ:a_,SOURCE_SWITCH_SILENCE_MS:o_,ports:c_,paths:l_,lsl:u_},Qt=Xl,h_=Xl.protocol_version.split(".")[0],Qs=.12,Ic=.3;function Dc(i){const e=Math.abs(i);if(e<Qs)return 0;const t=(e-Qs)/(1-Qs);return Math.sign(i)*((1-Ic)*t+Ic*t*t*t)}function d_(){if(typeof navigator>"u"||!navigator.getGamepads)return null;for(const i of navigator.getGamepads()){if(!i||!i.connected)continue;if(i.buttons[0]?.pressed)return{v:0,w:0};const e=Dc(-(i.axes[1]??0)),t=Dc(-(i.axes[0]??0));if(e||t)return{v:e*Qt.V_MAX,w:t*Qt.W_MAX}}return null}const _r={};let Lc=!1;const f_=new Set(["w","a","s","d","arrowup","arrowdown","arrowleft","arrowright"," "]);function p_(i){const e=i.target;return e?e.tagName==="INPUT"||e.tagName==="TEXTAREA"||e.tagName==="SELECT"||e.isContentEditable:!1}function m_(){if(Lc||typeof window>"u")return;const i=e=>t=>{const n=t.key.toLowerCase();if(n==="shift"){_r.shift=e;return}p_(t)||!f_.has(n)||(_r[n]=e,t.preventDefault())};window.addEventListener("keydown",i(!0)),window.addEventListener("keyup",i(!1)),window.addEventListener("blur",()=>{for(const e of Object.keys(_r))_r[e]=!1}),Lc=!0}const qr=i=>_r[i]===!0,__=.6,g_=.6,v_=.3;function x_(){m_()}function y_(){if(qr(" "))return{v:0,w:0};const i=(s,o)=>qr(s)||qr(o)?1:0,e=i("w","arrowup")-i("s","arrowdown"),t=i("a","arrowleft")-i("d","arrowright");if(!e&&!t)return null;const n=qr("shift")?v_:1;return{v:e*__*Qt.V_MAX*n,w:t*g_*Qt.W_MAX*n}}class S_{constructor(e){this.gate=e}bridgeActive=!1;localSource=null;wasEngaged=!1;tick(e){if(this.bridgeActive){this.localSource=null,this.wasEngaged=!1;return}let t=d_(),n="gamepad";t||(t=y_(),n="keyboard"),t?(this.gate.ingest({type:"cmd",v:t.v,w:t.w,source:n},e),this.localSource=n,this.wasEngaged=!0):this.wasEngaged&&(this.gate.ingest({type:"cmd",v:0,w:0,source:this.localSource??"keyboard"},e),this.wasEngaged=!1)}}const M_=i=>typeof i=="object"&&i!==null&&!Array.isArray(i),ea=i=>typeof i=="number"&&Number.isFinite(i);function E_(i){return M_(i)?i.type==="reset"?{ok:!0,msg:i}:i.type!=="cmd"?{ok:!1,error:`unknown type ${JSON.stringify(i.type)}`}:ea(i.v)?ea(i.w)?i.estop!==void 0&&typeof i.estop!="boolean"?{ok:!1,error:"estop must be a boolean"}:i.action!==void 0&&i.action!==null&&!(typeof i.action=="string"&&i.action.length<=64)?{ok:!1,error:"action must be a string (<= 64 chars) or null"}:i.source!==void 0&&!(typeof i.source=="string"&&i.source.length<=64)?{ok:!1,error:"source must be a string (<= 64 chars)"}:i.seq!==void 0&&!(Number.isInteger(i.seq)&&i.seq>=0)?{ok:!1,error:"seq must be an integer >= 0"}:i.t!==void 0&&!ea(i.t)?{ok:!1,error:"t must be a finite number"}:{ok:!0,msg:i}:{ok:!1,error:"w must be a finite number"}:{ok:!1,error:"v must be a finite number"}:{ok:!1,error:"not a JSON object"}}function w_(i){let e;try{e=JSON.parse(i)}catch{return{ok:!1,error:"malformed JSON"}}return E_(e)}function b_(i,e,t){const n=Math.max(-e,Math.min(e,i.v)),s=Math.max(-t,Math.min(t,i.w));return n===i.v&&s===i.w?i:{...i,v:n,w:s}}const T_=4e3;class Fc{constructor(e,t){this.sim=t,this.url=e,t.onState(n=>this.sendState(n))}url;link="closed";status=null;versionWarning=null;rxCmds=0;dropsInvalid=0;lastCmdMs=-1/0;ws=null;backoff=500;timer=null;rateWindow=[];static defaultUrl(){return new URLSearchParams(location.search).get("bridge")||`ws://localhost:${Qt.ports.ws}${Qt.paths.sim}`}connect(e=this.url){this.url=e,this.close(),this.link="connecting";let t;try{t=new WebSocket(e)}catch{this.link="closed",this.versionWarning=`invalid bridge URL: ${e}`;return}this.ws=t,t.onopen=()=>{this.link="open",this.backoff=500},t.onmessage=n=>this.onMessage(String(n.data)),t.onclose=n=>{if(this.ws===t){if(this.ws=null,this.status=null,n.code===T_){this.link="replaced";return}this.link="closed",this.timer=setTimeout(()=>this.connect(),this.backoff),this.backoff=Math.min(5e3,this.backoff*2)}}}close(){this.timer&&(clearTimeout(this.timer),this.timer=null);const e=this.ws;this.ws=null,e&&(e.onclose=null,e.close()),this.link="closed",this.status=null}isActive(e){return this.link==="open"&&(this.status?.active_source!=null||e-this.lastCmdMs<Qt.DEADMAN_MS)}rateHz(e){return this.rateWindow=this.rateWindow.filter(t=>e-t<1e3),this.rateWindow.length}onMessage(e){let t;try{t=JSON.parse(e)}catch{this.dropsInvalid++;return}if(t&&typeof t=="object"&&t.type==="bridge_status"){const o=t;this.status=o;const l=String(o.protocol_version??"").split(".")[0];this.versionWarning=l===h_?null:`bridge speaks protocol ${o.protocol_version}, this page speaks ${Qt.protocol_version}`,typeof o.tb=="number"&&this.ws?.send(JSON.stringify({type:"pong",tb:o.tb}));return}const n=w_(e);if(!n.ok){this.dropsInvalid++;return}const s=performance.now();this.sim.gate.ingest(n.msg,s),n.msg.type==="cmd"&&(this.lastCmdMs=s,this.rxCmds++,this.rateWindow.push(s))}sendState(e){this.ws?.readyState===WebSocket.OPEN&&this.ws.send(JSON.stringify({...e,cmd_echo_tb:this.sim.gate.stats.lastEchoTb}))}}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const To="170",A_=0,Uc=1,C_=2,$l=1,R_=2,zn=3,ii=0,en=1,Hn=2,ti=0,ji=1,Nc=2,Oc=3,kc=4,P_=5,Ei=100,I_=101,D_=102,L_=103,F_=104,U_=200,N_=201,O_=202,k_=203,ka=204,Ba=205,B_=206,z_=207,H_=208,G_=209,V_=210,W_=211,X_=212,$_=213,j_=214,za=0,Ha=1,Ga=2,Zi=3,Va=4,Wa=5,Xa=6,$a=7,jl=0,Y_=1,q_=2,ni=0,Z_=1,J_=2,K_=3,Q_=4,eg=5,tg=6,ng=7,Yl=300,Ji=301,Ki=302,ja=303,Ya=304,Ls=306,qa=1e3,bi=1001,Za=1002,Sn=1003,ig=1004,Zr=1005,Rn=1006,ta=1007,Ti=1008,Xn=1009,ql=1010,Zl=1011,Sr=1012,Ao=1013,Ai=1014,Gn=1015,Mr=1016,Co=1017,Ro=1018,Qi=1020,Jl=35902,Kl=1021,Ql=1022,yn=1023,eu=1024,tu=1025,Yi=1026,er=1027,nu=1028,Po=1029,iu=1030,Io=1031,Do=1033,Ms=33776,Es=33777,ws=33778,bs=33779,Ja=35840,Ka=35841,Qa=35842,eo=35843,to=36196,no=37492,io=37496,ro=37808,so=37809,ao=37810,oo=37811,co=37812,lo=37813,uo=37814,ho=37815,fo=37816,po=37817,mo=37818,_o=37819,go=37820,vo=37821,Ts=36492,xo=36494,yo=36495,ru=36283,So=36284,Mo=36285,Eo=36286,rg=3200,sg=3201,su=0,ag=1,ei="",hn="srgb",nr="srgb-linear",Fs="linear",St="srgb",Di=7680,Bc=519,og=512,cg=513,lg=514,au=515,ug=516,hg=517,dg=518,fg=519,zc=35044,Hc="300 es",Vn=2e3,Rs=2001;class ir{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const o=s.indexOf(t);o!==-1&&s.splice(o,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let o=0,l=s.length;o<l;o++)s[o].call(this,e);e.target=null}}}const Xt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],na=Math.PI/180,wo=180/Math.PI;function Er(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Xt[i&255]+Xt[i>>8&255]+Xt[i>>16&255]+Xt[i>>24&255]+"-"+Xt[e&255]+Xt[e>>8&255]+"-"+Xt[e>>16&15|64]+Xt[e>>24&255]+"-"+Xt[t&63|128]+Xt[t>>8&255]+"-"+Xt[t>>16&255]+Xt[t>>24&255]+Xt[n&255]+Xt[n>>8&255]+Xt[n>>16&255]+Xt[n>>24&255]).toLowerCase()}function Vt(i,e,t){return Math.max(e,Math.min(t,i))}function pg(i,e){return(i%e+e)%e}function ia(i,e,t){return(1-t)*i+t*e}function ur(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Kt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class ze{constructor(e=0,t=0){ze.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Vt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),o=this.x-e.x,l=this.y-e.y;return this.x=o*n-l*s+e.x,this.y=o*s+l*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Qe{constructor(e,t,n,s,o,l,u,d,f){Qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,o,l,u,d,f)}set(e,t,n,s,o,l,u,d,f){const m=this.elements;return m[0]=e,m[1]=s,m[2]=u,m[3]=t,m[4]=o,m[5]=d,m[6]=n,m[7]=l,m[8]=f,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,o=this.elements,l=n[0],u=n[3],d=n[6],f=n[1],m=n[4],g=n[7],x=n[2],y=n[5],T=n[8],C=s[0],S=s[3],_=s[6],N=s[1],L=s[4],I=s[7],Z=s[2],P=s[5],O=s[8];return o[0]=l*C+u*N+d*Z,o[3]=l*S+u*L+d*P,o[6]=l*_+u*I+d*O,o[1]=f*C+m*N+g*Z,o[4]=f*S+m*L+g*P,o[7]=f*_+m*I+g*O,o[2]=x*C+y*N+T*Z,o[5]=x*S+y*L+T*P,o[8]=x*_+y*I+T*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],o=e[3],l=e[4],u=e[5],d=e[6],f=e[7],m=e[8];return t*l*m-t*u*f-n*o*m+n*u*d+s*o*f-s*l*d}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],o=e[3],l=e[4],u=e[5],d=e[6],f=e[7],m=e[8],g=m*l-u*f,x=u*d-m*o,y=f*o-l*d,T=t*g+n*x+s*y;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/T;return e[0]=g*C,e[1]=(s*f-m*n)*C,e[2]=(u*n-s*l)*C,e[3]=x*C,e[4]=(m*t-s*d)*C,e[5]=(s*o-u*t)*C,e[6]=y*C,e[7]=(n*d-f*t)*C,e[8]=(l*t-n*o)*C,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,o,l,u){const d=Math.cos(o),f=Math.sin(o);return this.set(n*d,n*f,-n*(d*l+f*u)+l+e,-s*f,s*d,-s*(-f*l+d*u)+u+t,0,0,1),this}scale(e,t){return this.premultiply(ra.makeScale(e,t)),this}rotate(e){return this.premultiply(ra.makeRotation(-e)),this}translate(e,t){return this.premultiply(ra.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ra=new Qe;function ou(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ps(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function mg(){const i=Ps("canvas");return i.style.display="block",i}const Gc={};function gr(i){i in Gc||(Gc[i]=!0,console.warn(i))}function _g(i,e,t){return new Promise(function(n,s){function o(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(o,t);break;default:n()}}setTimeout(o,t)})}function gg(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function vg(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const gt={enabled:!0,workingColorSpace:nr,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===St&&(i.r=Wn(i.r),i.g=Wn(i.g),i.b=Wn(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===St&&(i.r=qi(i.r),i.g=qi(i.g),i.b=qi(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ei?Fs:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Wn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function qi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Vc=[.64,.33,.3,.6,.15,.06],Wc=[.2126,.7152,.0722],Xc=[.3127,.329],$c=new Qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),jc=new Qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);gt.define({[nr]:{primaries:Vc,whitePoint:Xc,transfer:Fs,toXYZ:$c,fromXYZ:jc,luminanceCoefficients:Wc,workingColorSpaceConfig:{unpackColorSpace:hn},outputColorSpaceConfig:{drawingBufferColorSpace:hn}},[hn]:{primaries:Vc,whitePoint:Xc,transfer:St,toXYZ:$c,fromXYZ:jc,luminanceCoefficients:Wc,outputColorSpaceConfig:{drawingBufferColorSpace:hn}}});let Li;class xg{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Li===void 0&&(Li=Ps("canvas")),Li.width=e.width,Li.height=e.height;const n=Li.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Li}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ps("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),o=s.data;for(let l=0;l<o.length;l++)o[l]=Wn(o[l]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Wn(t[n]/255)*255):t[n]=Wn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let yg=0;class cu{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:yg++}),this.uuid=Er(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let o;if(Array.isArray(s)){o=[];for(let l=0,u=s.length;l<u;l++)s[l].isDataTexture?o.push(sa(s[l].image)):o.push(sa(s[l]))}else o=sa(s);n.url=o}return t||(e.images[this.uuid]=n),n}}function sa(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?xg.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Sg=0;class tn extends ir{constructor(e=tn.DEFAULT_IMAGE,t=tn.DEFAULT_MAPPING,n=bi,s=bi,o=Rn,l=Ti,u=yn,d=Xn,f=tn.DEFAULT_ANISOTROPY,m=ei){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Sg++}),this.uuid=Er(),this.name="",this.source=new cu(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=o,this.minFilter=l,this.anisotropy=f,this.format=u,this.internalFormat=null,this.type=d,this.offset=new ze(0,0),this.repeat=new ze(1,1),this.center=new ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Yl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case qa:e.x=e.x-Math.floor(e.x);break;case bi:e.x=e.x<0?0:1;break;case Za:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case qa:e.y=e.y-Math.floor(e.y);break;case bi:e.y=e.y<0?0:1;break;case Za:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}tn.DEFAULT_IMAGE=null;tn.DEFAULT_MAPPING=Yl;tn.DEFAULT_ANISOTROPY=1;class Pt{constructor(e=0,t=0,n=0,s=1){Pt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,o=this.w,l=e.elements;return this.x=l[0]*t+l[4]*n+l[8]*s+l[12]*o,this.y=l[1]*t+l[5]*n+l[9]*s+l[13]*o,this.z=l[2]*t+l[6]*n+l[10]*s+l[14]*o,this.w=l[3]*t+l[7]*n+l[11]*s+l[15]*o,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,o;const d=e.elements,f=d[0],m=d[4],g=d[8],x=d[1],y=d[5],T=d[9],C=d[2],S=d[6],_=d[10];if(Math.abs(m-x)<.01&&Math.abs(g-C)<.01&&Math.abs(T-S)<.01){if(Math.abs(m+x)<.1&&Math.abs(g+C)<.1&&Math.abs(T+S)<.1&&Math.abs(f+y+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const L=(f+1)/2,I=(y+1)/2,Z=(_+1)/2,P=(m+x)/4,O=(g+C)/4,X=(T+S)/4;return L>I&&L>Z?L<.01?(n=0,s=.707106781,o=.707106781):(n=Math.sqrt(L),s=P/n,o=O/n):I>Z?I<.01?(n=.707106781,s=0,o=.707106781):(s=Math.sqrt(I),n=P/s,o=X/s):Z<.01?(n=.707106781,s=.707106781,o=0):(o=Math.sqrt(Z),n=O/o,s=X/o),this.set(n,s,o,t),this}let N=Math.sqrt((S-T)*(S-T)+(g-C)*(g-C)+(x-m)*(x-m));return Math.abs(N)<.001&&(N=1),this.x=(S-T)/N,this.y=(g-C)/N,this.z=(x-m)/N,this.w=Math.acos((f+y+_-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Mg extends ir{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Pt(0,0,e,t),this.scissorTest=!1,this.viewport=new Pt(0,0,e,t);const s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Rn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const o=new tn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);o.flipY=!1,o.generateMipmaps=n.generateMipmaps,o.internalFormat=n.internalFormat,this.textures=[];const l=n.count;for(let u=0;u<l;u++)this.textures[u]=o.clone(),this.textures[u].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,o=this.textures.length;s<o;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new cu(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ci extends Mg{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class lu extends tn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Eg extends tn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Sn,this.minFilter=Sn,this.wrapR=bi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class wr{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,o,l,u){let d=n[s+0],f=n[s+1],m=n[s+2],g=n[s+3];const x=o[l+0],y=o[l+1],T=o[l+2],C=o[l+3];if(u===0){e[t+0]=d,e[t+1]=f,e[t+2]=m,e[t+3]=g;return}if(u===1){e[t+0]=x,e[t+1]=y,e[t+2]=T,e[t+3]=C;return}if(g!==C||d!==x||f!==y||m!==T){let S=1-u;const _=d*x+f*y+m*T+g*C,N=_>=0?1:-1,L=1-_*_;if(L>Number.EPSILON){const Z=Math.sqrt(L),P=Math.atan2(Z,_*N);S=Math.sin(S*P)/Z,u=Math.sin(u*P)/Z}const I=u*N;if(d=d*S+x*I,f=f*S+y*I,m=m*S+T*I,g=g*S+C*I,S===1-u){const Z=1/Math.sqrt(d*d+f*f+m*m+g*g);d*=Z,f*=Z,m*=Z,g*=Z}}e[t]=d,e[t+1]=f,e[t+2]=m,e[t+3]=g}static multiplyQuaternionsFlat(e,t,n,s,o,l){const u=n[s],d=n[s+1],f=n[s+2],m=n[s+3],g=o[l],x=o[l+1],y=o[l+2],T=o[l+3];return e[t]=u*T+m*g+d*y-f*x,e[t+1]=d*T+m*x+f*g-u*y,e[t+2]=f*T+m*y+u*x-d*g,e[t+3]=m*T-u*g-d*x-f*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,o=e._z,l=e._order,u=Math.cos,d=Math.sin,f=u(n/2),m=u(s/2),g=u(o/2),x=d(n/2),y=d(s/2),T=d(o/2);switch(l){case"XYZ":this._x=x*m*g+f*y*T,this._y=f*y*g-x*m*T,this._z=f*m*T+x*y*g,this._w=f*m*g-x*y*T;break;case"YXZ":this._x=x*m*g+f*y*T,this._y=f*y*g-x*m*T,this._z=f*m*T-x*y*g,this._w=f*m*g+x*y*T;break;case"ZXY":this._x=x*m*g-f*y*T,this._y=f*y*g+x*m*T,this._z=f*m*T+x*y*g,this._w=f*m*g-x*y*T;break;case"ZYX":this._x=x*m*g-f*y*T,this._y=f*y*g+x*m*T,this._z=f*m*T-x*y*g,this._w=f*m*g+x*y*T;break;case"YZX":this._x=x*m*g+f*y*T,this._y=f*y*g+x*m*T,this._z=f*m*T-x*y*g,this._w=f*m*g-x*y*T;break;case"XZY":this._x=x*m*g-f*y*T,this._y=f*y*g-x*m*T,this._z=f*m*T+x*y*g,this._w=f*m*g+x*y*T;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+l)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],o=t[8],l=t[1],u=t[5],d=t[9],f=t[2],m=t[6],g=t[10],x=n+u+g;if(x>0){const y=.5/Math.sqrt(x+1);this._w=.25/y,this._x=(m-d)*y,this._y=(o-f)*y,this._z=(l-s)*y}else if(n>u&&n>g){const y=2*Math.sqrt(1+n-u-g);this._w=(m-d)/y,this._x=.25*y,this._y=(s+l)/y,this._z=(o+f)/y}else if(u>g){const y=2*Math.sqrt(1+u-n-g);this._w=(o-f)/y,this._x=(s+l)/y,this._y=.25*y,this._z=(d+m)/y}else{const y=2*Math.sqrt(1+g-n-u);this._w=(l-s)/y,this._x=(o+f)/y,this._y=(d+m)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Vt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,o=e._z,l=e._w,u=t._x,d=t._y,f=t._z,m=t._w;return this._x=n*m+l*u+s*f-o*d,this._y=s*m+l*d+o*u-n*f,this._z=o*m+l*f+n*d-s*u,this._w=l*m-n*u-s*d-o*f,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,o=this._z,l=this._w;let u=l*e._w+n*e._x+s*e._y+o*e._z;if(u<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,u=-u):this.copy(e),u>=1)return this._w=l,this._x=n,this._y=s,this._z=o,this;const d=1-u*u;if(d<=Number.EPSILON){const y=1-t;return this._w=y*l+t*this._w,this._x=y*n+t*this._x,this._y=y*s+t*this._y,this._z=y*o+t*this._z,this.normalize(),this}const f=Math.sqrt(d),m=Math.atan2(f,u),g=Math.sin((1-t)*m)/f,x=Math.sin(t*m)/f;return this._w=l*g+this._w*x,this._x=n*g+this._x*x,this._y=s*g+this._y*x,this._z=o*g+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),o*Math.sin(t),o*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{constructor(e=0,t=0,n=0){z.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Yc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Yc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,o=e.elements;return this.x=o[0]*t+o[3]*n+o[6]*s,this.y=o[1]*t+o[4]*n+o[7]*s,this.z=o[2]*t+o[5]*n+o[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,o=e.elements,l=1/(o[3]*t+o[7]*n+o[11]*s+o[15]);return this.x=(o[0]*t+o[4]*n+o[8]*s+o[12])*l,this.y=(o[1]*t+o[5]*n+o[9]*s+o[13])*l,this.z=(o[2]*t+o[6]*n+o[10]*s+o[14])*l,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,o=e.x,l=e.y,u=e.z,d=e.w,f=2*(l*s-u*n),m=2*(u*t-o*s),g=2*(o*n-l*t);return this.x=t+d*f+l*g-u*m,this.y=n+d*m+u*f-o*g,this.z=s+d*g+o*m-l*f,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s,this.y=o[1]*t+o[5]*n+o[9]*s,this.z=o[2]*t+o[6]*n+o[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,o=e.z,l=t.x,u=t.y,d=t.z;return this.x=s*d-o*u,this.y=o*l-n*d,this.z=n*u-s*l,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return aa.copy(this).projectOnVector(e),this.sub(aa)}reflect(e){return this.sub(aa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Vt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const aa=new z,Yc=new wr;class br{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(_n.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(_n.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=_n.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const o=n.getAttribute("position");if(t===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let l=0,u=o.count;l<u;l++)e.isMesh===!0?e.getVertexPosition(l,_n):_n.fromBufferAttribute(o,l),_n.applyMatrix4(e.matrixWorld),this.expandByPoint(_n);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Jr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Jr.copy(n.boundingBox)),Jr.applyMatrix4(e.matrixWorld),this.union(Jr)}const s=e.children;for(let o=0,l=s.length;o<l;o++)this.expandByObject(s[o],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,_n),_n.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(hr),Kr.subVectors(this.max,hr),Fi.subVectors(e.a,hr),Ui.subVectors(e.b,hr),Ni.subVectors(e.c,hr),jn.subVectors(Ui,Fi),Yn.subVectors(Ni,Ui),pi.subVectors(Fi,Ni);let t=[0,-jn.z,jn.y,0,-Yn.z,Yn.y,0,-pi.z,pi.y,jn.z,0,-jn.x,Yn.z,0,-Yn.x,pi.z,0,-pi.x,-jn.y,jn.x,0,-Yn.y,Yn.x,0,-pi.y,pi.x,0];return!oa(t,Fi,Ui,Ni,Kr)||(t=[1,0,0,0,1,0,0,0,1],!oa(t,Fi,Ui,Ni,Kr))?!1:(Qr.crossVectors(jn,Yn),t=[Qr.x,Qr.y,Qr.z],oa(t,Fi,Ui,Ni,Kr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,_n).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(_n).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Un[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Un[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Un[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Un[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Un[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Un[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Un[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Un[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Un),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Un=[new z,new z,new z,new z,new z,new z,new z,new z],_n=new z,Jr=new br,Fi=new z,Ui=new z,Ni=new z,jn=new z,Yn=new z,pi=new z,hr=new z,Kr=new z,Qr=new z,mi=new z;function oa(i,e,t,n,s){for(let o=0,l=i.length-3;o<=l;o+=3){mi.fromArray(i,o);const u=s.x*Math.abs(mi.x)+s.y*Math.abs(mi.y)+s.z*Math.abs(mi.z),d=e.dot(mi),f=t.dot(mi),m=n.dot(mi);if(Math.max(-Math.max(d,f,m),Math.min(d,f,m))>u)return!1}return!0}const wg=new br,dr=new z,ca=new z;class Us{constructor(e=new z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):wg.setFromPoints(e).getCenter(n);let s=0;for(let o=0,l=e.length;o<l;o++)s=Math.max(s,n.distanceToSquared(e[o]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;dr.subVectors(e,this.center);const t=dr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(dr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ca.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(dr.copy(e.center).add(ca)),this.expandByPoint(dr.copy(e.center).sub(ca))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Nn=new z,la=new z,es=new z,qn=new z,ua=new z,ts=new z,ha=new z;class uu{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Nn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Nn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Nn.copy(this.origin).addScaledVector(this.direction,t),Nn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){la.copy(e).add(t).multiplyScalar(.5),es.copy(t).sub(e).normalize(),qn.copy(this.origin).sub(la);const o=e.distanceTo(t)*.5,l=-this.direction.dot(es),u=qn.dot(this.direction),d=-qn.dot(es),f=qn.lengthSq(),m=Math.abs(1-l*l);let g,x,y,T;if(m>0)if(g=l*d-u,x=l*u-d,T=o*m,g>=0)if(x>=-T)if(x<=T){const C=1/m;g*=C,x*=C,y=g*(g+l*x+2*u)+x*(l*g+x+2*d)+f}else x=o,g=Math.max(0,-(l*x+u)),y=-g*g+x*(x+2*d)+f;else x=-o,g=Math.max(0,-(l*x+u)),y=-g*g+x*(x+2*d)+f;else x<=-T?(g=Math.max(0,-(-l*o+u)),x=g>0?-o:Math.min(Math.max(-o,-d),o),y=-g*g+x*(x+2*d)+f):x<=T?(g=0,x=Math.min(Math.max(-o,-d),o),y=x*(x+2*d)+f):(g=Math.max(0,-(l*o+u)),x=g>0?o:Math.min(Math.max(-o,-d),o),y=-g*g+x*(x+2*d)+f);else x=l>0?-o:o,g=Math.max(0,-(l*x+u)),y=-g*g+x*(x+2*d)+f;return n&&n.copy(this.origin).addScaledVector(this.direction,g),s&&s.copy(la).addScaledVector(es,x),y}intersectSphere(e,t){Nn.subVectors(e.center,this.origin);const n=Nn.dot(this.direction),s=Nn.dot(Nn)-n*n,o=e.radius*e.radius;if(s>o)return null;const l=Math.sqrt(o-s),u=n-l,d=n+l;return d<0?null:u<0?this.at(d,t):this.at(u,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,o,l,u,d;const f=1/this.direction.x,m=1/this.direction.y,g=1/this.direction.z,x=this.origin;return f>=0?(n=(e.min.x-x.x)*f,s=(e.max.x-x.x)*f):(n=(e.max.x-x.x)*f,s=(e.min.x-x.x)*f),m>=0?(o=(e.min.y-x.y)*m,l=(e.max.y-x.y)*m):(o=(e.max.y-x.y)*m,l=(e.min.y-x.y)*m),n>l||o>s||((o>n||isNaN(n))&&(n=o),(l<s||isNaN(s))&&(s=l),g>=0?(u=(e.min.z-x.z)*g,d=(e.max.z-x.z)*g):(u=(e.max.z-x.z)*g,d=(e.min.z-x.z)*g),n>d||u>s)||((u>n||n!==n)&&(n=u),(d<s||s!==s)&&(s=d),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Nn)!==null}intersectTriangle(e,t,n,s,o){ua.subVectors(t,e),ts.subVectors(n,e),ha.crossVectors(ua,ts);let l=this.direction.dot(ha),u;if(l>0){if(s)return null;u=1}else if(l<0)u=-1,l=-l;else return null;qn.subVectors(this.origin,e);const d=u*this.direction.dot(ts.crossVectors(qn,ts));if(d<0)return null;const f=u*this.direction.dot(ua.cross(qn));if(f<0||d+f>l)return null;const m=-u*qn.dot(ha);return m<0?null:this.at(m/l,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class At{constructor(e,t,n,s,o,l,u,d,f,m,g,x,y,T,C,S){At.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,o,l,u,d,f,m,g,x,y,T,C,S)}set(e,t,n,s,o,l,u,d,f,m,g,x,y,T,C,S){const _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=s,_[1]=o,_[5]=l,_[9]=u,_[13]=d,_[2]=f,_[6]=m,_[10]=g,_[14]=x,_[3]=y,_[7]=T,_[11]=C,_[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new At().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/Oi.setFromMatrixColumn(e,0).length(),o=1/Oi.setFromMatrixColumn(e,1).length(),l=1/Oi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*o,t[5]=n[5]*o,t[6]=n[6]*o,t[7]=0,t[8]=n[8]*l,t[9]=n[9]*l,t[10]=n[10]*l,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,o=e.z,l=Math.cos(n),u=Math.sin(n),d=Math.cos(s),f=Math.sin(s),m=Math.cos(o),g=Math.sin(o);if(e.order==="XYZ"){const x=l*m,y=l*g,T=u*m,C=u*g;t[0]=d*m,t[4]=-d*g,t[8]=f,t[1]=y+T*f,t[5]=x-C*f,t[9]=-u*d,t[2]=C-x*f,t[6]=T+y*f,t[10]=l*d}else if(e.order==="YXZ"){const x=d*m,y=d*g,T=f*m,C=f*g;t[0]=x+C*u,t[4]=T*u-y,t[8]=l*f,t[1]=l*g,t[5]=l*m,t[9]=-u,t[2]=y*u-T,t[6]=C+x*u,t[10]=l*d}else if(e.order==="ZXY"){const x=d*m,y=d*g,T=f*m,C=f*g;t[0]=x-C*u,t[4]=-l*g,t[8]=T+y*u,t[1]=y+T*u,t[5]=l*m,t[9]=C-x*u,t[2]=-l*f,t[6]=u,t[10]=l*d}else if(e.order==="ZYX"){const x=l*m,y=l*g,T=u*m,C=u*g;t[0]=d*m,t[4]=T*f-y,t[8]=x*f+C,t[1]=d*g,t[5]=C*f+x,t[9]=y*f-T,t[2]=-f,t[6]=u*d,t[10]=l*d}else if(e.order==="YZX"){const x=l*d,y=l*f,T=u*d,C=u*f;t[0]=d*m,t[4]=C-x*g,t[8]=T*g+y,t[1]=g,t[5]=l*m,t[9]=-u*m,t[2]=-f*m,t[6]=y*g+T,t[10]=x-C*g}else if(e.order==="XZY"){const x=l*d,y=l*f,T=u*d,C=u*f;t[0]=d*m,t[4]=-g,t[8]=f*m,t[1]=x*g+C,t[5]=l*m,t[9]=y*g-T,t[2]=T*g-y,t[6]=u*m,t[10]=C*g+x}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(bg,e,Tg)}lookAt(e,t,n){const s=this.elements;return an.subVectors(e,t),an.lengthSq()===0&&(an.z=1),an.normalize(),Zn.crossVectors(n,an),Zn.lengthSq()===0&&(Math.abs(n.z)===1?an.x+=1e-4:an.z+=1e-4,an.normalize(),Zn.crossVectors(n,an)),Zn.normalize(),ns.crossVectors(an,Zn),s[0]=Zn.x,s[4]=ns.x,s[8]=an.x,s[1]=Zn.y,s[5]=ns.y,s[9]=an.y,s[2]=Zn.z,s[6]=ns.z,s[10]=an.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,o=this.elements,l=n[0],u=n[4],d=n[8],f=n[12],m=n[1],g=n[5],x=n[9],y=n[13],T=n[2],C=n[6],S=n[10],_=n[14],N=n[3],L=n[7],I=n[11],Z=n[15],P=s[0],O=s[4],X=s[8],D=s[12],E=s[1],k=s[5],te=s[9],K=s[13],ee=s[2],pe=s[6],ae=s[10],Se=s[14],re=s[3],Ae=s[7],Pe=s[11],He=s[15];return o[0]=l*P+u*E+d*ee+f*re,o[4]=l*O+u*k+d*pe+f*Ae,o[8]=l*X+u*te+d*ae+f*Pe,o[12]=l*D+u*K+d*Se+f*He,o[1]=m*P+g*E+x*ee+y*re,o[5]=m*O+g*k+x*pe+y*Ae,o[9]=m*X+g*te+x*ae+y*Pe,o[13]=m*D+g*K+x*Se+y*He,o[2]=T*P+C*E+S*ee+_*re,o[6]=T*O+C*k+S*pe+_*Ae,o[10]=T*X+C*te+S*ae+_*Pe,o[14]=T*D+C*K+S*Se+_*He,o[3]=N*P+L*E+I*ee+Z*re,o[7]=N*O+L*k+I*pe+Z*Ae,o[11]=N*X+L*te+I*ae+Z*Pe,o[15]=N*D+L*K+I*Se+Z*He,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],o=e[12],l=e[1],u=e[5],d=e[9],f=e[13],m=e[2],g=e[6],x=e[10],y=e[14],T=e[3],C=e[7],S=e[11],_=e[15];return T*(+o*d*g-s*f*g-o*u*x+n*f*x+s*u*y-n*d*y)+C*(+t*d*y-t*f*x+o*l*x-s*l*y+s*f*m-o*d*m)+S*(+t*f*g-t*u*y-o*l*g+n*l*y+o*u*m-n*f*m)+_*(-s*u*m-t*d*g+t*u*x+s*l*g-n*l*x+n*d*m)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],o=e[3],l=e[4],u=e[5],d=e[6],f=e[7],m=e[8],g=e[9],x=e[10],y=e[11],T=e[12],C=e[13],S=e[14],_=e[15],N=g*S*f-C*x*f+C*d*y-u*S*y-g*d*_+u*x*_,L=T*x*f-m*S*f-T*d*y+l*S*y+m*d*_-l*x*_,I=m*C*f-T*g*f+T*u*y-l*C*y-m*u*_+l*g*_,Z=T*g*d-m*C*d-T*u*x+l*C*x+m*u*S-l*g*S,P=t*N+n*L+s*I+o*Z;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/P;return e[0]=N*O,e[1]=(C*x*o-g*S*o-C*s*y+n*S*y+g*s*_-n*x*_)*O,e[2]=(u*S*o-C*d*o+C*s*f-n*S*f-u*s*_+n*d*_)*O,e[3]=(g*d*o-u*x*o-g*s*f+n*x*f+u*s*y-n*d*y)*O,e[4]=L*O,e[5]=(m*S*o-T*x*o+T*s*y-t*S*y-m*s*_+t*x*_)*O,e[6]=(T*d*o-l*S*o-T*s*f+t*S*f+l*s*_-t*d*_)*O,e[7]=(l*x*o-m*d*o+m*s*f-t*x*f-l*s*y+t*d*y)*O,e[8]=I*O,e[9]=(T*g*o-m*C*o-T*n*y+t*C*y+m*n*_-t*g*_)*O,e[10]=(l*C*o-T*u*o+T*n*f-t*C*f-l*n*_+t*u*_)*O,e[11]=(m*u*o-l*g*o-m*n*f+t*g*f+l*n*y-t*u*y)*O,e[12]=Z*O,e[13]=(m*C*s-T*g*s+T*n*x-t*C*x-m*n*S+t*g*S)*O,e[14]=(T*u*s-l*C*s-T*n*d+t*C*d+l*n*S-t*u*S)*O,e[15]=(l*g*s-m*u*s+m*n*d-t*g*d-l*n*x+t*u*x)*O,this}scale(e){const t=this.elements,n=e.x,s=e.y,o=e.z;return t[0]*=n,t[4]*=s,t[8]*=o,t[1]*=n,t[5]*=s,t[9]*=o,t[2]*=n,t[6]*=s,t[10]*=o,t[3]*=n,t[7]*=s,t[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),o=1-n,l=e.x,u=e.y,d=e.z,f=o*l,m=o*u;return this.set(f*l+n,f*u-s*d,f*d+s*u,0,f*u+s*d,m*u+n,m*d-s*l,0,f*d-s*u,m*d+s*l,o*d*d+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,o,l){return this.set(1,n,o,0,e,1,l,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,o=t._x,l=t._y,u=t._z,d=t._w,f=o+o,m=l+l,g=u+u,x=o*f,y=o*m,T=o*g,C=l*m,S=l*g,_=u*g,N=d*f,L=d*m,I=d*g,Z=n.x,P=n.y,O=n.z;return s[0]=(1-(C+_))*Z,s[1]=(y+I)*Z,s[2]=(T-L)*Z,s[3]=0,s[4]=(y-I)*P,s[5]=(1-(x+_))*P,s[6]=(S+N)*P,s[7]=0,s[8]=(T+L)*O,s[9]=(S-N)*O,s[10]=(1-(x+C))*O,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let o=Oi.set(s[0],s[1],s[2]).length();const l=Oi.set(s[4],s[5],s[6]).length(),u=Oi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(o=-o),e.x=s[12],e.y=s[13],e.z=s[14],gn.copy(this);const f=1/o,m=1/l,g=1/u;return gn.elements[0]*=f,gn.elements[1]*=f,gn.elements[2]*=f,gn.elements[4]*=m,gn.elements[5]*=m,gn.elements[6]*=m,gn.elements[8]*=g,gn.elements[9]*=g,gn.elements[10]*=g,t.setFromRotationMatrix(gn),n.x=o,n.y=l,n.z=u,this}makePerspective(e,t,n,s,o,l,u=Vn){const d=this.elements,f=2*o/(t-e),m=2*o/(n-s),g=(t+e)/(t-e),x=(n+s)/(n-s);let y,T;if(u===Vn)y=-(l+o)/(l-o),T=-2*l*o/(l-o);else if(u===Rs)y=-l/(l-o),T=-l*o/(l-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+u);return d[0]=f,d[4]=0,d[8]=g,d[12]=0,d[1]=0,d[5]=m,d[9]=x,d[13]=0,d[2]=0,d[6]=0,d[10]=y,d[14]=T,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,t,n,s,o,l,u=Vn){const d=this.elements,f=1/(t-e),m=1/(n-s),g=1/(l-o),x=(t+e)*f,y=(n+s)*m;let T,C;if(u===Vn)T=(l+o)*g,C=-2*g;else if(u===Rs)T=o*g,C=-1*g;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+u);return d[0]=2*f,d[4]=0,d[8]=0,d[12]=-x,d[1]=0,d[5]=2*m,d[9]=0,d[13]=-y,d[2]=0,d[6]=0,d[10]=C,d[14]=-T,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Oi=new z,gn=new At,bg=new z(0,0,0),Tg=new z(1,1,1),Zn=new z,ns=new z,an=new z,qc=new At,Zc=new wr;class In{constructor(e=0,t=0,n=0,s=In.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,o=s[0],l=s[4],u=s[8],d=s[1],f=s[5],m=s[9],g=s[2],x=s[6],y=s[10];switch(t){case"XYZ":this._y=Math.asin(Vt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-m,y),this._z=Math.atan2(-l,o)):(this._x=Math.atan2(x,f),this._z=0);break;case"YXZ":this._x=Math.asin(-Vt(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(u,y),this._z=Math.atan2(d,f)):(this._y=Math.atan2(-g,o),this._z=0);break;case"ZXY":this._x=Math.asin(Vt(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-g,y),this._z=Math.atan2(-l,f)):(this._y=0,this._z=Math.atan2(d,o));break;case"ZYX":this._y=Math.asin(-Vt(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(x,y),this._z=Math.atan2(d,o)):(this._x=0,this._z=Math.atan2(-l,f));break;case"YZX":this._z=Math.asin(Vt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-m,f),this._y=Math.atan2(-g,o)):(this._x=0,this._y=Math.atan2(u,y));break;case"XZY":this._z=Math.asin(-Vt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(x,f),this._y=Math.atan2(u,o)):(this._x=Math.atan2(-m,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return qc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(qc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Zc.setFromEuler(this),this.setFromQuaternion(Zc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}In.DEFAULT_ORDER="XYZ";class hu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ag=0;const Jc=new z,ki=new wr,On=new At,is=new z,fr=new z,Cg=new z,Rg=new wr,Kc=new z(1,0,0),Qc=new z(0,1,0),el=new z(0,0,1),tl={type:"added"},Pg={type:"removed"},Bi={type:"childadded",child:null},da={type:"childremoved",child:null};class zt extends ir{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ag++}),this.uuid=Er(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=zt.DEFAULT_UP.clone();const e=new z,t=new In,n=new wr,s=new z(1,1,1);function o(){n.setFromEuler(t,!1)}function l(){t.setFromQuaternion(n,void 0,!1)}t._onChange(o),n._onChange(l),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new At},normalMatrix:{value:new Qe}}),this.matrix=new At,this.matrixWorld=new At,this.matrixAutoUpdate=zt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new hu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ki.setFromAxisAngle(e,t),this.quaternion.multiply(ki),this}rotateOnWorldAxis(e,t){return ki.setFromAxisAngle(e,t),this.quaternion.premultiply(ki),this}rotateX(e){return this.rotateOnAxis(Kc,e)}rotateY(e){return this.rotateOnAxis(Qc,e)}rotateZ(e){return this.rotateOnAxis(el,e)}translateOnAxis(e,t){return Jc.copy(e).applyQuaternion(this.quaternion),this.position.add(Jc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Kc,e)}translateY(e){return this.translateOnAxis(Qc,e)}translateZ(e){return this.translateOnAxis(el,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(On.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?is.copy(e):is.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),fr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?On.lookAt(fr,is,this.up):On.lookAt(is,fr,this.up),this.quaternion.setFromRotationMatrix(On),s&&(On.extractRotation(s.matrixWorld),ki.setFromRotationMatrix(On),this.quaternion.premultiply(ki.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(tl),Bi.child=e,this.dispatchEvent(Bi),Bi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Pg),da.child=e,this.dispatchEvent(da),da.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),On.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),On.multiply(e.parent.matrixWorld)),e.applyMatrix4(On),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(tl),Bi.child=e,this.dispatchEvent(Bi),Bi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const l=this.children[n].getObjectByProperty(e,t);if(l!==void 0)return l}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let o=0,l=s.length;o<l;o++)s[o].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fr,e,Cg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fr,Rg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let o=0,l=s.length;o<l;o++)s[o].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(u=>({boxInitialized:u.boxInitialized,boxMin:u.box.min.toArray(),boxMax:u.box.max.toArray(),sphereInitialized:u.sphereInitialized,sphereRadius:u.sphere.radius,sphereCenter:u.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function o(u,d){return u[d.uuid]===void 0&&(u[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(e.geometries,this.geometry);const u=this.geometry.parameters;if(u!==void 0&&u.shapes!==void 0){const d=u.shapes;if(Array.isArray(d))for(let f=0,m=d.length;f<m;f++){const g=d[f];o(e.shapes,g)}else o(e.shapes,d)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const u=[];for(let d=0,f=this.material.length;d<f;d++)u.push(o(e.materials,this.material[d]));s.material=u}else s.material=o(e.materials,this.material);if(this.children.length>0){s.children=[];for(let u=0;u<this.children.length;u++)s.children.push(this.children[u].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let u=0;u<this.animations.length;u++){const d=this.animations[u];s.animations.push(o(e.animations,d))}}if(t){const u=l(e.geometries),d=l(e.materials),f=l(e.textures),m=l(e.images),g=l(e.shapes),x=l(e.skeletons),y=l(e.animations),T=l(e.nodes);u.length>0&&(n.geometries=u),d.length>0&&(n.materials=d),f.length>0&&(n.textures=f),m.length>0&&(n.images=m),g.length>0&&(n.shapes=g),x.length>0&&(n.skeletons=x),y.length>0&&(n.animations=y),T.length>0&&(n.nodes=T)}return n.object=s,n;function l(u){const d=[];for(const f in u){const m=u[f];delete m.metadata,d.push(m)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}zt.DEFAULT_UP=new z(0,1,0);zt.DEFAULT_MATRIX_AUTO_UPDATE=!0;zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const vn=new z,kn=new z,fa=new z,Bn=new z,zi=new z,Hi=new z,nl=new z,pa=new z,ma=new z,_a=new z,ga=new Pt,va=new Pt,xa=new Pt;class xn{constructor(e=new z,t=new z,n=new z){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),vn.subVectors(e,t),s.cross(vn);const o=s.lengthSq();return o>0?s.multiplyScalar(1/Math.sqrt(o)):s.set(0,0,0)}static getBarycoord(e,t,n,s,o){vn.subVectors(s,t),kn.subVectors(n,t),fa.subVectors(e,t);const l=vn.dot(vn),u=vn.dot(kn),d=vn.dot(fa),f=kn.dot(kn),m=kn.dot(fa),g=l*f-u*u;if(g===0)return o.set(0,0,0),null;const x=1/g,y=(f*d-u*m)*x,T=(l*m-u*d)*x;return o.set(1-y-T,T,y)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Bn)===null?!1:Bn.x>=0&&Bn.y>=0&&Bn.x+Bn.y<=1}static getInterpolation(e,t,n,s,o,l,u,d){return this.getBarycoord(e,t,n,s,Bn)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(o,Bn.x),d.addScaledVector(l,Bn.y),d.addScaledVector(u,Bn.z),d)}static getInterpolatedAttribute(e,t,n,s,o,l){return ga.setScalar(0),va.setScalar(0),xa.setScalar(0),ga.fromBufferAttribute(e,t),va.fromBufferAttribute(e,n),xa.fromBufferAttribute(e,s),l.setScalar(0),l.addScaledVector(ga,o.x),l.addScaledVector(va,o.y),l.addScaledVector(xa,o.z),l}static isFrontFacing(e,t,n,s){return vn.subVectors(n,t),kn.subVectors(e,t),vn.cross(kn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return vn.subVectors(this.c,this.b),kn.subVectors(this.a,this.b),vn.cross(kn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return xn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return xn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,o){return xn.getInterpolation(e,this.a,this.b,this.c,t,n,s,o)}containsPoint(e){return xn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return xn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,o=this.c;let l,u;zi.subVectors(s,n),Hi.subVectors(o,n),pa.subVectors(e,n);const d=zi.dot(pa),f=Hi.dot(pa);if(d<=0&&f<=0)return t.copy(n);ma.subVectors(e,s);const m=zi.dot(ma),g=Hi.dot(ma);if(m>=0&&g<=m)return t.copy(s);const x=d*g-m*f;if(x<=0&&d>=0&&m<=0)return l=d/(d-m),t.copy(n).addScaledVector(zi,l);_a.subVectors(e,o);const y=zi.dot(_a),T=Hi.dot(_a);if(T>=0&&y<=T)return t.copy(o);const C=y*f-d*T;if(C<=0&&f>=0&&T<=0)return u=f/(f-T),t.copy(n).addScaledVector(Hi,u);const S=m*T-y*g;if(S<=0&&g-m>=0&&y-T>=0)return nl.subVectors(o,s),u=(g-m)/(g-m+(y-T)),t.copy(s).addScaledVector(nl,u);const _=1/(S+C+x);return l=C*_,u=x*_,t.copy(n).addScaledVector(zi,l).addScaledVector(Hi,u)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const du={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Jn={h:0,s:0,l:0},rs={h:0,s:0,l:0};function ya(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class st{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=hn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,gt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=gt.workingColorSpace){return this.r=e,this.g=t,this.b=n,gt.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=gt.workingColorSpace){if(e=pg(e,1),t=Vt(t,0,1),n=Vt(n,0,1),t===0)this.r=this.g=this.b=n;else{const o=n<=.5?n*(1+t):n+t-n*t,l=2*n-o;this.r=ya(l,o,e+1/3),this.g=ya(l,o,e),this.b=ya(l,o,e-1/3)}return gt.toWorkingColorSpace(this,s),this}setStyle(e,t=hn){function n(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const l=s[1],u=s[2];switch(l){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,t);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=s[1],l=o.length;if(l===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,t);if(l===6)return this.setHex(parseInt(o,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=hn){const n=du[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Wn(e.r),this.g=Wn(e.g),this.b=Wn(e.b),this}copyLinearToSRGB(e){return this.r=qi(e.r),this.g=qi(e.g),this.b=qi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=hn){return gt.fromWorkingColorSpace($t.copy(this),e),Math.round(Vt($t.r*255,0,255))*65536+Math.round(Vt($t.g*255,0,255))*256+Math.round(Vt($t.b*255,0,255))}getHexString(e=hn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=gt.workingColorSpace){gt.fromWorkingColorSpace($t.copy(this),t);const n=$t.r,s=$t.g,o=$t.b,l=Math.max(n,s,o),u=Math.min(n,s,o);let d,f;const m=(u+l)/2;if(u===l)d=0,f=0;else{const g=l-u;switch(f=m<=.5?g/(l+u):g/(2-l-u),l){case n:d=(s-o)/g+(s<o?6:0);break;case s:d=(o-n)/g+2;break;case o:d=(n-s)/g+4;break}d/=6}return e.h=d,e.s=f,e.l=m,e}getRGB(e,t=gt.workingColorSpace){return gt.fromWorkingColorSpace($t.copy(this),t),e.r=$t.r,e.g=$t.g,e.b=$t.b,e}getStyle(e=hn){gt.fromWorkingColorSpace($t.copy(this),e);const t=$t.r,n=$t.g,s=$t.b;return e!==hn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Jn),this.setHSL(Jn.h+e,Jn.s+t,Jn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Jn),e.getHSL(rs);const n=ia(Jn.h,rs.h,t),s=ia(Jn.s,rs.s,t),o=ia(Jn.l,rs.l,t);return this.setHSL(n,s,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,o=e.elements;return this.r=o[0]*t+o[3]*n+o[6]*s,this.g=o[1]*t+o[4]*n+o[7]*s,this.b=o[2]*t+o[5]*n+o[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const $t=new st;st.NAMES=du;let Ig=0;class rr extends ir{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ig++}),this.uuid=Er(),this.name="",this.blending=ji,this.side=ii,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ka,this.blendDst=Ba,this.blendEquation=Ei,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new st(0,0,0),this.blendAlpha=0,this.depthFunc=Zi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Bc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Di,this.stencilZFail=Di,this.stencilZPass=Di,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ji&&(n.blending=this.blending),this.side!==ii&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ka&&(n.blendSrc=this.blendSrc),this.blendDst!==Ba&&(n.blendDst=this.blendDst),this.blendEquation!==Ei&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Zi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Bc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Di&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Di&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Di&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(o){const l=[];for(const u in o){const d=o[u];delete d.metadata,l.push(d)}return l}if(t){const o=s(e.textures),l=s(e.images);o.length>0&&(n.textures=o),l.length>0&&(n.images=l)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let o=0;o!==s;++o)n[o]=t[o].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class fu extends rr{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new st(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new In,this.combine=jl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const It=new z,ss=new ze;class fn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=zc,this.updateRanges=[],this.gpuType=Gn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,o=this.itemSize;s<o;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ss.fromBufferAttribute(this,t),ss.applyMatrix3(e),this.setXY(t,ss.x,ss.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyMatrix3(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyMatrix4(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyNormalMatrix(e),this.setXYZ(t,It.x,It.y,It.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.transformDirection(e),this.setXYZ(t,It.x,It.y,It.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ur(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Kt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ur(t,this.array)),t}setX(e,t){return this.normalized&&(t=Kt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ur(t,this.array)),t}setY(e,t){return this.normalized&&(t=Kt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ur(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Kt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ur(t,this.array)),t}setW(e,t){return this.normalized&&(t=Kt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Kt(t,this.array),n=Kt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Kt(t,this.array),n=Kt(n,this.array),s=Kt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,o){return e*=this.itemSize,this.normalized&&(t=Kt(t,this.array),n=Kt(n,this.array),s=Kt(s,this.array),o=Kt(o,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==zc&&(e.usage=this.usage),e}}class pu extends fn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class mu extends fn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Dt extends fn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Dg=0;const un=new At,Sa=new zt,Gi=new z,on=new br,pr=new br,Bt=new z;class cn extends ir{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Dg++}),this.uuid=Er(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ou(e)?mu:pu)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const o=new Qe().getNormalMatrix(e);n.applyNormalMatrix(o),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return un.makeRotationFromQuaternion(e),this.applyMatrix4(un),this}rotateX(e){return un.makeRotationX(e),this.applyMatrix4(un),this}rotateY(e){return un.makeRotationY(e),this.applyMatrix4(un),this}rotateZ(e){return un.makeRotationZ(e),this.applyMatrix4(un),this}translate(e,t,n){return un.makeTranslation(e,t,n),this.applyMatrix4(un),this}scale(e,t,n){return un.makeScale(e,t,n),this.applyMatrix4(un),this}lookAt(e){return Sa.lookAt(e),Sa.updateMatrix(),this.applyMatrix4(Sa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gi).negate(),this.translate(Gi.x,Gi.y,Gi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,o=e.length;s<o;s++){const l=e[s];n.push(l.x,l.y,l.z||0)}this.setAttribute("position",new Dt(n,3))}else{for(let n=0,s=t.count;n<s;n++){const o=e[n];t.setXYZ(n,o.x,o.y,o.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new br);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const o=t[n];on.setFromBufferAttribute(o),this.morphTargetsRelative?(Bt.addVectors(this.boundingBox.min,on.min),this.boundingBox.expandByPoint(Bt),Bt.addVectors(this.boundingBox.max,on.max),this.boundingBox.expandByPoint(Bt)):(this.boundingBox.expandByPoint(on.min),this.boundingBox.expandByPoint(on.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Us);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(e){const n=this.boundingSphere.center;if(on.setFromBufferAttribute(e),t)for(let o=0,l=t.length;o<l;o++){const u=t[o];pr.setFromBufferAttribute(u),this.morphTargetsRelative?(Bt.addVectors(on.min,pr.min),on.expandByPoint(Bt),Bt.addVectors(on.max,pr.max),on.expandByPoint(Bt)):(on.expandByPoint(pr.min),on.expandByPoint(pr.max))}on.getCenter(n);let s=0;for(let o=0,l=e.count;o<l;o++)Bt.fromBufferAttribute(e,o),s=Math.max(s,n.distanceToSquared(Bt));if(t)for(let o=0,l=t.length;o<l;o++){const u=t[o],d=this.morphTargetsRelative;for(let f=0,m=u.count;f<m;f++)Bt.fromBufferAttribute(u,f),d&&(Gi.fromBufferAttribute(e,f),Bt.add(Gi)),s=Math.max(s,n.distanceToSquared(Bt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,o=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new fn(new Float32Array(4*n.count),4));const l=this.getAttribute("tangent"),u=[],d=[];for(let X=0;X<n.count;X++)u[X]=new z,d[X]=new z;const f=new z,m=new z,g=new z,x=new ze,y=new ze,T=new ze,C=new z,S=new z;function _(X,D,E){f.fromBufferAttribute(n,X),m.fromBufferAttribute(n,D),g.fromBufferAttribute(n,E),x.fromBufferAttribute(o,X),y.fromBufferAttribute(o,D),T.fromBufferAttribute(o,E),m.sub(f),g.sub(f),y.sub(x),T.sub(x);const k=1/(y.x*T.y-T.x*y.y);isFinite(k)&&(C.copy(m).multiplyScalar(T.y).addScaledVector(g,-y.y).multiplyScalar(k),S.copy(g).multiplyScalar(y.x).addScaledVector(m,-T.x).multiplyScalar(k),u[X].add(C),u[D].add(C),u[E].add(C),d[X].add(S),d[D].add(S),d[E].add(S))}let N=this.groups;N.length===0&&(N=[{start:0,count:e.count}]);for(let X=0,D=N.length;X<D;++X){const E=N[X],k=E.start,te=E.count;for(let K=k,ee=k+te;K<ee;K+=3)_(e.getX(K+0),e.getX(K+1),e.getX(K+2))}const L=new z,I=new z,Z=new z,P=new z;function O(X){Z.fromBufferAttribute(s,X),P.copy(Z);const D=u[X];L.copy(D),L.sub(Z.multiplyScalar(Z.dot(D))).normalize(),I.crossVectors(P,D);const k=I.dot(d[X])<0?-1:1;l.setXYZW(X,L.x,L.y,L.z,k)}for(let X=0,D=N.length;X<D;++X){const E=N[X],k=E.start,te=E.count;for(let K=k,ee=k+te;K<ee;K+=3)O(e.getX(K+0)),O(e.getX(K+1)),O(e.getX(K+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new fn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let x=0,y=n.count;x<y;x++)n.setXYZ(x,0,0,0);const s=new z,o=new z,l=new z,u=new z,d=new z,f=new z,m=new z,g=new z;if(e)for(let x=0,y=e.count;x<y;x+=3){const T=e.getX(x+0),C=e.getX(x+1),S=e.getX(x+2);s.fromBufferAttribute(t,T),o.fromBufferAttribute(t,C),l.fromBufferAttribute(t,S),m.subVectors(l,o),g.subVectors(s,o),m.cross(g),u.fromBufferAttribute(n,T),d.fromBufferAttribute(n,C),f.fromBufferAttribute(n,S),u.add(m),d.add(m),f.add(m),n.setXYZ(T,u.x,u.y,u.z),n.setXYZ(C,d.x,d.y,d.z),n.setXYZ(S,f.x,f.y,f.z)}else for(let x=0,y=t.count;x<y;x+=3)s.fromBufferAttribute(t,x+0),o.fromBufferAttribute(t,x+1),l.fromBufferAttribute(t,x+2),m.subVectors(l,o),g.subVectors(s,o),m.cross(g),n.setXYZ(x+0,m.x,m.y,m.z),n.setXYZ(x+1,m.x,m.y,m.z),n.setXYZ(x+2,m.x,m.y,m.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Bt.fromBufferAttribute(e,t),Bt.normalize(),e.setXYZ(t,Bt.x,Bt.y,Bt.z)}toNonIndexed(){function e(u,d){const f=u.array,m=u.itemSize,g=u.normalized,x=new f.constructor(d.length*m);let y=0,T=0;for(let C=0,S=d.length;C<S;C++){u.isInterleavedBufferAttribute?y=d[C]*u.data.stride+u.offset:y=d[C]*m;for(let _=0;_<m;_++)x[T++]=f[y++]}return new fn(x,m,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new cn,n=this.index.array,s=this.attributes;for(const u in s){const d=s[u],f=e(d,n);t.setAttribute(u,f)}const o=this.morphAttributes;for(const u in o){const d=[],f=o[u];for(let m=0,g=f.length;m<g;m++){const x=f[m],y=e(x,n);d.push(y)}t.morphAttributes[u]=d}t.morphTargetsRelative=this.morphTargetsRelative;const l=this.groups;for(let u=0,d=l.length;u<d;u++){const f=l[u];t.addGroup(f.start,f.count,f.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const f in d)d[f]!==void 0&&(e[f]=d[f]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const d in n){const f=n[d];e.data.attributes[d]=f.toJSON(e.data)}const s={};let o=!1;for(const d in this.morphAttributes){const f=this.morphAttributes[d],m=[];for(let g=0,x=f.length;g<x;g++){const y=f[g];m.push(y.toJSON(e.data))}m.length>0&&(s[d]=m,o=!0)}o&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const l=this.groups;l.length>0&&(e.data.groups=JSON.parse(JSON.stringify(l)));const u=this.boundingSphere;return u!==null&&(e.data.boundingSphere={center:u.center.toArray(),radius:u.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const f in s){const m=s[f];this.setAttribute(f,m.clone(t))}const o=e.morphAttributes;for(const f in o){const m=[],g=o[f];for(let x=0,y=g.length;x<y;x++)m.push(g[x].clone(t));this.morphAttributes[f]=m}this.morphTargetsRelative=e.morphTargetsRelative;const l=e.groups;for(let f=0,m=l.length;f<m;f++){const g=l[f];this.addGroup(g.start,g.count,g.materialIndex)}const u=e.boundingBox;u!==null&&(this.boundingBox=u.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const il=new At,_i=new uu,as=new Us,rl=new z,os=new z,cs=new z,ls=new z,Ma=new z,us=new z,sl=new z,hs=new z;class Pn extends zt{constructor(e=new cn,t=new fu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,l=s.length;o<l;o++){const u=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=o}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,o=n.morphAttributes.position,l=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const u=this.morphTargetInfluences;if(o&&u){us.set(0,0,0);for(let d=0,f=o.length;d<f;d++){const m=u[d],g=o[d];m!==0&&(Ma.fromBufferAttribute(g,e),l?us.addScaledVector(Ma,m):us.addScaledVector(Ma.sub(t),m))}t.add(us)}return t}raycast(e,t){const n=this.geometry,s=this.material,o=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),as.copy(n.boundingSphere),as.applyMatrix4(o),_i.copy(e.ray).recast(e.near),!(as.containsPoint(_i.origin)===!1&&(_i.intersectSphere(as,rl)===null||_i.origin.distanceToSquared(rl)>(e.far-e.near)**2))&&(il.copy(o).invert(),_i.copy(e.ray).applyMatrix4(il),!(n.boundingBox!==null&&_i.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,_i)))}_computeIntersections(e,t,n){let s;const o=this.geometry,l=this.material,u=o.index,d=o.attributes.position,f=o.attributes.uv,m=o.attributes.uv1,g=o.attributes.normal,x=o.groups,y=o.drawRange;if(u!==null)if(Array.isArray(l))for(let T=0,C=x.length;T<C;T++){const S=x[T],_=l[S.materialIndex],N=Math.max(S.start,y.start),L=Math.min(u.count,Math.min(S.start+S.count,y.start+y.count));for(let I=N,Z=L;I<Z;I+=3){const P=u.getX(I),O=u.getX(I+1),X=u.getX(I+2);s=ds(this,_,e,n,f,m,g,P,O,X),s&&(s.faceIndex=Math.floor(I/3),s.face.materialIndex=S.materialIndex,t.push(s))}}else{const T=Math.max(0,y.start),C=Math.min(u.count,y.start+y.count);for(let S=T,_=C;S<_;S+=3){const N=u.getX(S),L=u.getX(S+1),I=u.getX(S+2);s=ds(this,l,e,n,f,m,g,N,L,I),s&&(s.faceIndex=Math.floor(S/3),t.push(s))}}else if(d!==void 0)if(Array.isArray(l))for(let T=0,C=x.length;T<C;T++){const S=x[T],_=l[S.materialIndex],N=Math.max(S.start,y.start),L=Math.min(d.count,Math.min(S.start+S.count,y.start+y.count));for(let I=N,Z=L;I<Z;I+=3){const P=I,O=I+1,X=I+2;s=ds(this,_,e,n,f,m,g,P,O,X),s&&(s.faceIndex=Math.floor(I/3),s.face.materialIndex=S.materialIndex,t.push(s))}}else{const T=Math.max(0,y.start),C=Math.min(d.count,y.start+y.count);for(let S=T,_=C;S<_;S+=3){const N=S,L=S+1,I=S+2;s=ds(this,l,e,n,f,m,g,N,L,I),s&&(s.faceIndex=Math.floor(S/3),t.push(s))}}}}function Lg(i,e,t,n,s,o,l,u){let d;if(e.side===en?d=n.intersectTriangle(l,o,s,!0,u):d=n.intersectTriangle(s,o,l,e.side===ii,u),d===null)return null;hs.copy(u),hs.applyMatrix4(i.matrixWorld);const f=t.ray.origin.distanceTo(hs);return f<t.near||f>t.far?null:{distance:f,point:hs.clone(),object:i}}function ds(i,e,t,n,s,o,l,u,d,f){i.getVertexPosition(u,os),i.getVertexPosition(d,cs),i.getVertexPosition(f,ls);const m=Lg(i,e,t,n,os,cs,ls,sl);if(m){const g=new z;xn.getBarycoord(sl,os,cs,ls,g),s&&(m.uv=xn.getInterpolatedAttribute(s,u,d,f,g,new ze)),o&&(m.uv1=xn.getInterpolatedAttribute(o,u,d,f,g,new ze)),l&&(m.normal=xn.getInterpolatedAttribute(l,u,d,f,g,new z),m.normal.dot(n.direction)>0&&m.normal.multiplyScalar(-1));const x={a:u,b:d,c:f,normal:new z,materialIndex:0};xn.getNormal(os,cs,ls,x.normal),m.face=x,m.barycoord=g}return m}class sr extends cn{constructor(e=1,t=1,n=1,s=1,o=1,l=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:o,depthSegments:l};const u=this;s=Math.floor(s),o=Math.floor(o),l=Math.floor(l);const d=[],f=[],m=[],g=[];let x=0,y=0;T("z","y","x",-1,-1,n,t,e,l,o,0),T("z","y","x",1,-1,n,t,-e,l,o,1),T("x","z","y",1,1,e,n,t,s,l,2),T("x","z","y",1,-1,e,n,-t,s,l,3),T("x","y","z",1,-1,e,t,n,s,o,4),T("x","y","z",-1,-1,e,t,-n,s,o,5),this.setIndex(d),this.setAttribute("position",new Dt(f,3)),this.setAttribute("normal",new Dt(m,3)),this.setAttribute("uv",new Dt(g,2));function T(C,S,_,N,L,I,Z,P,O,X,D){const E=I/O,k=Z/X,te=I/2,K=Z/2,ee=P/2,pe=O+1,ae=X+1;let Se=0,re=0;const Ae=new z;for(let Pe=0;Pe<ae;Pe++){const He=Pe*k-K;for(let Ke=0;Ke<pe;Ke++){const ft=Ke*E-te;Ae[C]=ft*N,Ae[S]=He*L,Ae[_]=ee,f.push(Ae.x,Ae.y,Ae.z),Ae[C]=0,Ae[S]=0,Ae[_]=P>0?1:-1,m.push(Ae.x,Ae.y,Ae.z),g.push(Ke/O),g.push(1-Pe/X),Se+=1}}for(let Pe=0;Pe<X;Pe++)for(let He=0;He<O;He++){const Ke=x+He+pe*Pe,ft=x+He+pe*(Pe+1),ne=x+(He+1)+pe*(Pe+1),_e=x+(He+1)+pe*Pe;d.push(Ke,ft,_e),d.push(ft,ne,_e),re+=6}u.addGroup(y,re,D),y+=re,x+=Se}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function tr(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Jt(i){const e={};for(let t=0;t<i.length;t++){const n=tr(i[t]);for(const s in n)e[s]=n[s]}return e}function Fg(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function _u(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:gt.workingColorSpace}const Ug={clone:tr,merge:Jt};var Ng=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Og=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ri extends rr{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ng,this.fragmentShader=Og,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=tr(e.uniforms),this.uniformsGroups=Fg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const l=this.uniforms[s].value;l&&l.isTexture?t.uniforms[s]={type:"t",value:l.toJSON(e).uuid}:l&&l.isColor?t.uniforms[s]={type:"c",value:l.getHex()}:l&&l.isVector2?t.uniforms[s]={type:"v2",value:l.toArray()}:l&&l.isVector3?t.uniforms[s]={type:"v3",value:l.toArray()}:l&&l.isVector4?t.uniforms[s]={type:"v4",value:l.toArray()}:l&&l.isMatrix3?t.uniforms[s]={type:"m3",value:l.toArray()}:l&&l.isMatrix4?t.uniforms[s]={type:"m4",value:l.toArray()}:t.uniforms[s]={value:l}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class gu extends zt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new At,this.projectionMatrix=new At,this.projectionMatrixInverse=new At,this.coordinateSystem=Vn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Kn=new z,al=new ze,ol=new ze;class dn extends gu{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=wo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(na*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return wo*2*Math.atan(Math.tan(na*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Kn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Kn.x,Kn.y).multiplyScalar(-e/Kn.z),Kn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Kn.x,Kn.y).multiplyScalar(-e/Kn.z)}getViewSize(e,t){return this.getViewBounds(e,al,ol),t.subVectors(ol,al)}setViewOffset(e,t,n,s,o,l){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(na*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,o=-.5*s;const l=this.view;if(this.view!==null&&this.view.enabled){const d=l.fullWidth,f=l.fullHeight;o+=l.offsetX*s/d,t-=l.offsetY*n/f,s*=l.width/d,n*=l.height/f}const u=this.filmOffset;u!==0&&(o+=e*u/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Vi=-90,Wi=1;class kg extends zt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new dn(Vi,Wi,e,t);s.layers=this.layers,this.add(s);const o=new dn(Vi,Wi,e,t);o.layers=this.layers,this.add(o);const l=new dn(Vi,Wi,e,t);l.layers=this.layers,this.add(l);const u=new dn(Vi,Wi,e,t);u.layers=this.layers,this.add(u);const d=new dn(Vi,Wi,e,t);d.layers=this.layers,this.add(d);const f=new dn(Vi,Wi,e,t);f.layers=this.layers,this.add(f)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,o,l,u,d]=t;for(const f of t)this.remove(f);if(e===Vn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),l.up.set(0,0,1),l.lookAt(0,-1,0),u.up.set(0,1,0),u.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(e===Rs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),l.up.set(0,0,-1),l.lookAt(0,-1,0),u.up.set(0,-1,0),u.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const f of t)this.add(f),f.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,l,u,d,f,m]=this.children,g=e.getRenderTarget(),x=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const C=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,o),e.setRenderTarget(n,1,s),e.render(t,l),e.setRenderTarget(n,2,s),e.render(t,u),e.setRenderTarget(n,3,s),e.render(t,d),e.setRenderTarget(n,4,s),e.render(t,f),n.texture.generateMipmaps=C,e.setRenderTarget(n,5,s),e.render(t,m),e.setRenderTarget(g,x,y),e.xr.enabled=T,n.texture.needsPMREMUpdate=!0}}class vu extends tn{constructor(e,t,n,s,o,l,u,d,f,m){e=e!==void 0?e:[],t=t!==void 0?t:Ji,super(e,t,n,s,o,l,u,d,f,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Bg extends Ci{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new vu(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Rn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new sr(5,5,5),o=new ri({name:"CubemapFromEquirect",uniforms:tr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:en,blending:ti});o.uniforms.tEquirect.value=t;const l=new Pn(s,o),u=t.minFilter;return t.minFilter===Ti&&(t.minFilter=Rn),new kg(1,10,this).update(e,l),t.minFilter=u,l.geometry.dispose(),l.material.dispose(),this}clear(e,t,n,s){const o=e.getRenderTarget();for(let l=0;l<6;l++)e.setRenderTarget(this,l),e.clear(t,n,s);e.setRenderTarget(o)}}const Ea=new z,zg=new z,Hg=new Qe;class Si{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Ea.subVectors(n,t).cross(zg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ea),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/s;return o<0||o>1?null:t.copy(e.start).addScaledVector(n,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Hg.getNormalMatrix(e),s=this.coplanarPoint(Ea).applyMatrix4(e),o=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const gi=new Us,fs=new z;class Lo{constructor(e=new Si,t=new Si,n=new Si,s=new Si,o=new Si,l=new Si){this.planes=[e,t,n,s,o,l]}set(e,t,n,s,o,l){const u=this.planes;return u[0].copy(e),u[1].copy(t),u[2].copy(n),u[3].copy(s),u[4].copy(o),u[5].copy(l),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Vn){const n=this.planes,s=e.elements,o=s[0],l=s[1],u=s[2],d=s[3],f=s[4],m=s[5],g=s[6],x=s[7],y=s[8],T=s[9],C=s[10],S=s[11],_=s[12],N=s[13],L=s[14],I=s[15];if(n[0].setComponents(d-o,x-f,S-y,I-_).normalize(),n[1].setComponents(d+o,x+f,S+y,I+_).normalize(),n[2].setComponents(d+l,x+m,S+T,I+N).normalize(),n[3].setComponents(d-l,x-m,S-T,I-N).normalize(),n[4].setComponents(d-u,x-g,S-C,I-L).normalize(),t===Vn)n[5].setComponents(d+u,x+g,S+C,I+L).normalize();else if(t===Rs)n[5].setComponents(u,g,C,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),gi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),gi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(gi)}intersectsSprite(e){return gi.center.set(0,0,0),gi.radius=.7071067811865476,gi.applyMatrix4(e.matrixWorld),this.intersectsSphere(gi)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(fs.x=s.normal.x>0?e.max.x:e.min.x,fs.y=s.normal.y>0?e.max.y:e.min.y,fs.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(fs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function xu(){let i=null,e=!1,t=null,n=null;function s(o,l){t(o,l),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){i=o}}}function Gg(i){const e=new WeakMap;function t(u,d){const f=u.array,m=u.usage,g=f.byteLength,x=i.createBuffer();i.bindBuffer(d,x),i.bufferData(d,f,m),u.onUploadCallback();let y;if(f instanceof Float32Array)y=i.FLOAT;else if(f instanceof Uint16Array)u.isFloat16BufferAttribute?y=i.HALF_FLOAT:y=i.UNSIGNED_SHORT;else if(f instanceof Int16Array)y=i.SHORT;else if(f instanceof Uint32Array)y=i.UNSIGNED_INT;else if(f instanceof Int32Array)y=i.INT;else if(f instanceof Int8Array)y=i.BYTE;else if(f instanceof Uint8Array)y=i.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)y=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:x,type:y,bytesPerElement:f.BYTES_PER_ELEMENT,version:u.version,size:g}}function n(u,d,f){const m=d.array,g=d.updateRanges;if(i.bindBuffer(f,u),g.length===0)i.bufferSubData(f,0,m);else{g.sort((y,T)=>y.start-T.start);let x=0;for(let y=1;y<g.length;y++){const T=g[x],C=g[y];C.start<=T.start+T.count+1?T.count=Math.max(T.count,C.start+C.count-T.start):(++x,g[x]=C)}g.length=x+1;for(let y=0,T=g.length;y<T;y++){const C=g[y];i.bufferSubData(f,C.start*m.BYTES_PER_ELEMENT,m,C.start,C.count)}d.clearUpdateRanges()}d.onUploadCallback()}function s(u){return u.isInterleavedBufferAttribute&&(u=u.data),e.get(u)}function o(u){u.isInterleavedBufferAttribute&&(u=u.data);const d=e.get(u);d&&(i.deleteBuffer(d.buffer),e.delete(u))}function l(u,d){if(u.isInterleavedBufferAttribute&&(u=u.data),u.isGLBufferAttribute){const m=e.get(u);(!m||m.version<u.version)&&e.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}const f=e.get(u);if(f===void 0)e.set(u,t(u,d));else if(f.version<u.version){if(f.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(f.buffer,u,d),f.version=u.version}}return{get:s,remove:o,update:l}}class Tr extends cn{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const o=e/2,l=t/2,u=Math.floor(n),d=Math.floor(s),f=u+1,m=d+1,g=e/u,x=t/d,y=[],T=[],C=[],S=[];for(let _=0;_<m;_++){const N=_*x-l;for(let L=0;L<f;L++){const I=L*g-o;T.push(I,-N,0),C.push(0,0,1),S.push(L/u),S.push(1-_/d)}}for(let _=0;_<d;_++)for(let N=0;N<u;N++){const L=N+f*_,I=N+f*(_+1),Z=N+1+f*(_+1),P=N+1+f*_;y.push(L,I,P),y.push(I,Z,P)}this.setIndex(y),this.setAttribute("position",new Dt(T,3)),this.setAttribute("normal",new Dt(C,3)),this.setAttribute("uv",new Dt(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Tr(e.width,e.height,e.widthSegments,e.heightSegments)}}var Vg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Wg=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Xg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$g=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Yg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,qg=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Zg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Jg=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Kg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Qg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ev=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,tv=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,nv=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,iv=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,rv=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,sv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,av=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ov=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,cv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,lv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,uv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,hv=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,dv=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,fv=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,pv=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,mv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_v=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,gv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,vv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,xv="gl_FragColor = linearToOutputTexel( gl_FragColor );",yv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Sv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Mv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ev=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,wv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,bv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Tv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Av=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Cv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Rv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Pv=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Iv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Dv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Lv=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Fv=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Uv=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Nv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ov=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,kv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Bv=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,zv=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Hv=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Gv=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Vv=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Wv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Xv=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$v=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jv=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yv=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,qv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Zv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Jv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Kv=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Qv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,e0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,t0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,n0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,i0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,r0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,s0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,a0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,o0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,c0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,l0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,u0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,h0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,d0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,f0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,p0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,m0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,g0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,v0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,x0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,y0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,S0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,M0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,E0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,w0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,b0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,T0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,A0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,C0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,R0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,P0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,I0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,D0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,L0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,F0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,U0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,N0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,O0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,k0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,B0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,z0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,H0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const G0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,V0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,W0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,X0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,j0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Y0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,q0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Z0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,J0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,K0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Q0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ex=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,tx=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,nx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,ix=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rx=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ax=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,ox=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cx=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,lx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ux=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hx=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dx=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,fx=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,px=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_x=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,gx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,vx=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xx=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,yx=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Sx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,nt={alphahash_fragment:Vg,alphahash_pars_fragment:Wg,alphamap_fragment:Xg,alphamap_pars_fragment:$g,alphatest_fragment:jg,alphatest_pars_fragment:Yg,aomap_fragment:qg,aomap_pars_fragment:Zg,batching_pars_vertex:Jg,batching_vertex:Kg,begin_vertex:Qg,beginnormal_vertex:ev,bsdfs:tv,iridescence_fragment:nv,bumpmap_pars_fragment:iv,clipping_planes_fragment:rv,clipping_planes_pars_fragment:sv,clipping_planes_pars_vertex:av,clipping_planes_vertex:ov,color_fragment:cv,color_pars_fragment:lv,color_pars_vertex:uv,color_vertex:hv,common:dv,cube_uv_reflection_fragment:fv,defaultnormal_vertex:pv,displacementmap_pars_vertex:mv,displacementmap_vertex:_v,emissivemap_fragment:gv,emissivemap_pars_fragment:vv,colorspace_fragment:xv,colorspace_pars_fragment:yv,envmap_fragment:Sv,envmap_common_pars_fragment:Mv,envmap_pars_fragment:Ev,envmap_pars_vertex:wv,envmap_physical_pars_fragment:Uv,envmap_vertex:bv,fog_vertex:Tv,fog_pars_vertex:Av,fog_fragment:Cv,fog_pars_fragment:Rv,gradientmap_pars_fragment:Pv,lightmap_pars_fragment:Iv,lights_lambert_fragment:Dv,lights_lambert_pars_fragment:Lv,lights_pars_begin:Fv,lights_toon_fragment:Nv,lights_toon_pars_fragment:Ov,lights_phong_fragment:kv,lights_phong_pars_fragment:Bv,lights_physical_fragment:zv,lights_physical_pars_fragment:Hv,lights_fragment_begin:Gv,lights_fragment_maps:Vv,lights_fragment_end:Wv,logdepthbuf_fragment:Xv,logdepthbuf_pars_fragment:$v,logdepthbuf_pars_vertex:jv,logdepthbuf_vertex:Yv,map_fragment:qv,map_pars_fragment:Zv,map_particle_fragment:Jv,map_particle_pars_fragment:Kv,metalnessmap_fragment:Qv,metalnessmap_pars_fragment:e0,morphinstance_vertex:t0,morphcolor_vertex:n0,morphnormal_vertex:i0,morphtarget_pars_vertex:r0,morphtarget_vertex:s0,normal_fragment_begin:a0,normal_fragment_maps:o0,normal_pars_fragment:c0,normal_pars_vertex:l0,normal_vertex:u0,normalmap_pars_fragment:h0,clearcoat_normal_fragment_begin:d0,clearcoat_normal_fragment_maps:f0,clearcoat_pars_fragment:p0,iridescence_pars_fragment:m0,opaque_fragment:_0,packing:g0,premultiplied_alpha_fragment:v0,project_vertex:x0,dithering_fragment:y0,dithering_pars_fragment:S0,roughnessmap_fragment:M0,roughnessmap_pars_fragment:E0,shadowmap_pars_fragment:w0,shadowmap_pars_vertex:b0,shadowmap_vertex:T0,shadowmask_pars_fragment:A0,skinbase_vertex:C0,skinning_pars_vertex:R0,skinning_vertex:P0,skinnormal_vertex:I0,specularmap_fragment:D0,specularmap_pars_fragment:L0,tonemapping_fragment:F0,tonemapping_pars_fragment:U0,transmission_fragment:N0,transmission_pars_fragment:O0,uv_pars_fragment:k0,uv_pars_vertex:B0,uv_vertex:z0,worldpos_vertex:H0,background_vert:G0,background_frag:V0,backgroundCube_vert:W0,backgroundCube_frag:X0,cube_vert:$0,cube_frag:j0,depth_vert:Y0,depth_frag:q0,distanceRGBA_vert:Z0,distanceRGBA_frag:J0,equirect_vert:K0,equirect_frag:Q0,linedashed_vert:ex,linedashed_frag:tx,meshbasic_vert:nx,meshbasic_frag:ix,meshlambert_vert:rx,meshlambert_frag:sx,meshmatcap_vert:ax,meshmatcap_frag:ox,meshnormal_vert:cx,meshnormal_frag:lx,meshphong_vert:ux,meshphong_frag:hx,meshphysical_vert:dx,meshphysical_frag:fx,meshtoon_vert:px,meshtoon_frag:mx,points_vert:_x,points_frag:gx,shadow_vert:vx,shadow_frag:xx,sprite_vert:yx,sprite_frag:Sx},we={common:{diffuse:{value:new st(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qe}},envmap:{envMap:{value:null},envMapRotation:{value:new Qe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qe},normalScale:{value:new ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new st(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new st(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0},uvTransform:{value:new Qe}},sprite:{diffuse:{value:new st(16777215)},opacity:{value:1},center:{value:new ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}}},Cn={basic:{uniforms:Jt([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.fog]),vertexShader:nt.meshbasic_vert,fragmentShader:nt.meshbasic_frag},lambert:{uniforms:Jt([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new st(0)}}]),vertexShader:nt.meshlambert_vert,fragmentShader:nt.meshlambert_frag},phong:{uniforms:Jt([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new st(0)},specular:{value:new st(1118481)},shininess:{value:30}}]),vertexShader:nt.meshphong_vert,fragmentShader:nt.meshphong_frag},standard:{uniforms:Jt([we.common,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.roughnessmap,we.metalnessmap,we.fog,we.lights,{emissive:{value:new st(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag},toon:{uniforms:Jt([we.common,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.gradientmap,we.fog,we.lights,{emissive:{value:new st(0)}}]),vertexShader:nt.meshtoon_vert,fragmentShader:nt.meshtoon_frag},matcap:{uniforms:Jt([we.common,we.bumpmap,we.normalmap,we.displacementmap,we.fog,{matcap:{value:null}}]),vertexShader:nt.meshmatcap_vert,fragmentShader:nt.meshmatcap_frag},points:{uniforms:Jt([we.points,we.fog]),vertexShader:nt.points_vert,fragmentShader:nt.points_frag},dashed:{uniforms:Jt([we.common,we.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:nt.linedashed_vert,fragmentShader:nt.linedashed_frag},depth:{uniforms:Jt([we.common,we.displacementmap]),vertexShader:nt.depth_vert,fragmentShader:nt.depth_frag},normal:{uniforms:Jt([we.common,we.bumpmap,we.normalmap,we.displacementmap,{opacity:{value:1}}]),vertexShader:nt.meshnormal_vert,fragmentShader:nt.meshnormal_frag},sprite:{uniforms:Jt([we.sprite,we.fog]),vertexShader:nt.sprite_vert,fragmentShader:nt.sprite_frag},background:{uniforms:{uvTransform:{value:new Qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:nt.background_vert,fragmentShader:nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qe}},vertexShader:nt.backgroundCube_vert,fragmentShader:nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:nt.cube_vert,fragmentShader:nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:nt.equirect_vert,fragmentShader:nt.equirect_frag},distanceRGBA:{uniforms:Jt([we.common,we.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:nt.distanceRGBA_vert,fragmentShader:nt.distanceRGBA_frag},shadow:{uniforms:Jt([we.lights,we.fog,{color:{value:new st(0)},opacity:{value:1}}]),vertexShader:nt.shadow_vert,fragmentShader:nt.shadow_frag}};Cn.physical={uniforms:Jt([Cn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qe},clearcoatNormalScale:{value:new ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qe},sheen:{value:0},sheenColor:{value:new st(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qe},transmissionSamplerSize:{value:new ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qe},attenuationDistance:{value:0},attenuationColor:{value:new st(0)},specularColor:{value:new st(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qe},anisotropyVector:{value:new ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qe}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag};const ps={r:0,b:0,g:0},vi=new In,Mx=new At;function Ex(i,e,t,n,s,o,l){const u=new st(0);let d=o===!0?0:1,f,m,g=null,x=0,y=null;function T(N){let L=N.isScene===!0?N.background:null;return L&&L.isTexture&&(L=(N.backgroundBlurriness>0?t:e).get(L)),L}function C(N){let L=!1;const I=T(N);I===null?_(u,d):I&&I.isColor&&(_(I,1),L=!0);const Z=i.xr.getEnvironmentBlendMode();Z==="additive"?n.buffers.color.setClear(0,0,0,1,l):Z==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,l),(i.autoClear||L)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function S(N,L){const I=T(L);I&&(I.isCubeTexture||I.mapping===Ls)?(m===void 0&&(m=new Pn(new sr(1,1,1),new ri({name:"BackgroundCubeMaterial",uniforms:tr(Cn.backgroundCube.uniforms),vertexShader:Cn.backgroundCube.vertexShader,fragmentShader:Cn.backgroundCube.fragmentShader,side:en,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(Z,P,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(m)),vi.copy(L.backgroundRotation),vi.x*=-1,vi.y*=-1,vi.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(vi.y*=-1,vi.z*=-1),m.material.uniforms.envMap.value=I,m.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,m.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(Mx.makeRotationFromEuler(vi)),m.material.toneMapped=gt.getTransfer(I.colorSpace)!==St,(g!==I||x!==I.version||y!==i.toneMapping)&&(m.material.needsUpdate=!0,g=I,x=I.version,y=i.toneMapping),m.layers.enableAll(),N.unshift(m,m.geometry,m.material,0,0,null)):I&&I.isTexture&&(f===void 0&&(f=new Pn(new Tr(2,2),new ri({name:"BackgroundMaterial",uniforms:tr(Cn.background.uniforms),vertexShader:Cn.background.vertexShader,fragmentShader:Cn.background.fragmentShader,side:ii,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),Object.defineProperty(f.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(f)),f.material.uniforms.t2D.value=I,f.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,f.material.toneMapped=gt.getTransfer(I.colorSpace)!==St,I.matrixAutoUpdate===!0&&I.updateMatrix(),f.material.uniforms.uvTransform.value.copy(I.matrix),(g!==I||x!==I.version||y!==i.toneMapping)&&(f.material.needsUpdate=!0,g=I,x=I.version,y=i.toneMapping),f.layers.enableAll(),N.unshift(f,f.geometry,f.material,0,0,null))}function _(N,L){N.getRGB(ps,_u(i)),n.buffers.color.setClear(ps.r,ps.g,ps.b,L,l)}return{getClearColor:function(){return u},setClearColor:function(N,L=1){u.set(N),d=L,_(u,d)},getClearAlpha:function(){return d},setClearAlpha:function(N){d=N,_(u,d)},render:C,addToRenderList:S}}function wx(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=x(null);let o=s,l=!1;function u(E,k,te,K,ee){let pe=!1;const ae=g(K,te,k);o!==ae&&(o=ae,f(o.object)),pe=y(E,K,te,ee),pe&&T(E,K,te,ee),ee!==null&&e.update(ee,i.ELEMENT_ARRAY_BUFFER),(pe||l)&&(l=!1,I(E,k,te,K),ee!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(ee).buffer))}function d(){return i.createVertexArray()}function f(E){return i.bindVertexArray(E)}function m(E){return i.deleteVertexArray(E)}function g(E,k,te){const K=te.wireframe===!0;let ee=n[E.id];ee===void 0&&(ee={},n[E.id]=ee);let pe=ee[k.id];pe===void 0&&(pe={},ee[k.id]=pe);let ae=pe[K];return ae===void 0&&(ae=x(d()),pe[K]=ae),ae}function x(E){const k=[],te=[],K=[];for(let ee=0;ee<t;ee++)k[ee]=0,te[ee]=0,K[ee]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:te,attributeDivisors:K,object:E,attributes:{},index:null}}function y(E,k,te,K){const ee=o.attributes,pe=k.attributes;let ae=0;const Se=te.getAttributes();for(const re in Se)if(Se[re].location>=0){const Pe=ee[re];let He=pe[re];if(He===void 0&&(re==="instanceMatrix"&&E.instanceMatrix&&(He=E.instanceMatrix),re==="instanceColor"&&E.instanceColor&&(He=E.instanceColor)),Pe===void 0||Pe.attribute!==He||He&&Pe.data!==He.data)return!0;ae++}return o.attributesNum!==ae||o.index!==K}function T(E,k,te,K){const ee={},pe=k.attributes;let ae=0;const Se=te.getAttributes();for(const re in Se)if(Se[re].location>=0){let Pe=pe[re];Pe===void 0&&(re==="instanceMatrix"&&E.instanceMatrix&&(Pe=E.instanceMatrix),re==="instanceColor"&&E.instanceColor&&(Pe=E.instanceColor));const He={};He.attribute=Pe,Pe&&Pe.data&&(He.data=Pe.data),ee[re]=He,ae++}o.attributes=ee,o.attributesNum=ae,o.index=K}function C(){const E=o.newAttributes;for(let k=0,te=E.length;k<te;k++)E[k]=0}function S(E){_(E,0)}function _(E,k){const te=o.newAttributes,K=o.enabledAttributes,ee=o.attributeDivisors;te[E]=1,K[E]===0&&(i.enableVertexAttribArray(E),K[E]=1),ee[E]!==k&&(i.vertexAttribDivisor(E,k),ee[E]=k)}function N(){const E=o.newAttributes,k=o.enabledAttributes;for(let te=0,K=k.length;te<K;te++)k[te]!==E[te]&&(i.disableVertexAttribArray(te),k[te]=0)}function L(E,k,te,K,ee,pe,ae){ae===!0?i.vertexAttribIPointer(E,k,te,ee,pe):i.vertexAttribPointer(E,k,te,K,ee,pe)}function I(E,k,te,K){C();const ee=K.attributes,pe=te.getAttributes(),ae=k.defaultAttributeValues;for(const Se in pe){const re=pe[Se];if(re.location>=0){let Ae=ee[Se];if(Ae===void 0&&(Se==="instanceMatrix"&&E.instanceMatrix&&(Ae=E.instanceMatrix),Se==="instanceColor"&&E.instanceColor&&(Ae=E.instanceColor)),Ae!==void 0){const Pe=Ae.normalized,He=Ae.itemSize,Ke=e.get(Ae);if(Ke===void 0)continue;const ft=Ke.buffer,ne=Ke.type,_e=Ke.bytesPerElement,De=ne===i.INT||ne===i.UNSIGNED_INT||Ae.gpuType===Ao;if(Ae.isInterleavedBufferAttribute){const Ee=Ae.data,fe=Ee.stride,Me=Ae.offset;if(Ee.isInstancedInterleavedBuffer){for(let et=0;et<re.locationSize;et++)_(re.location+et,Ee.meshPerAttribute);E.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=Ee.meshPerAttribute*Ee.count)}else for(let et=0;et<re.locationSize;et++)S(re.location+et);i.bindBuffer(i.ARRAY_BUFFER,ft);for(let et=0;et<re.locationSize;et++)L(re.location+et,He/re.locationSize,ne,Pe,fe*_e,(Me+He/re.locationSize*et)*_e,De)}else{if(Ae.isInstancedBufferAttribute){for(let Ee=0;Ee<re.locationSize;Ee++)_(re.location+Ee,Ae.meshPerAttribute);E.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=Ae.meshPerAttribute*Ae.count)}else for(let Ee=0;Ee<re.locationSize;Ee++)S(re.location+Ee);i.bindBuffer(i.ARRAY_BUFFER,ft);for(let Ee=0;Ee<re.locationSize;Ee++)L(re.location+Ee,He/re.locationSize,ne,Pe,He*_e,He/re.locationSize*Ee*_e,De)}}else if(ae!==void 0){const Pe=ae[Se];if(Pe!==void 0)switch(Pe.length){case 2:i.vertexAttrib2fv(re.location,Pe);break;case 3:i.vertexAttrib3fv(re.location,Pe);break;case 4:i.vertexAttrib4fv(re.location,Pe);break;default:i.vertexAttrib1fv(re.location,Pe)}}}}N()}function Z(){X();for(const E in n){const k=n[E];for(const te in k){const K=k[te];for(const ee in K)m(K[ee].object),delete K[ee];delete k[te]}delete n[E]}}function P(E){if(n[E.id]===void 0)return;const k=n[E.id];for(const te in k){const K=k[te];for(const ee in K)m(K[ee].object),delete K[ee];delete k[te]}delete n[E.id]}function O(E){for(const k in n){const te=n[k];if(te[E.id]===void 0)continue;const K=te[E.id];for(const ee in K)m(K[ee].object),delete K[ee];delete te[E.id]}}function X(){D(),l=!0,o!==s&&(o=s,f(o.object))}function D(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:u,reset:X,resetDefaultState:D,dispose:Z,releaseStatesOfGeometry:P,releaseStatesOfProgram:O,initAttributes:C,enableAttribute:S,disableUnusedAttributes:N}}function bx(i,e,t){let n;function s(f){n=f}function o(f,m){i.drawArrays(n,f,m),t.update(m,n,1)}function l(f,m,g){g!==0&&(i.drawArraysInstanced(n,f,m,g),t.update(m,n,g))}function u(f,m,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,f,0,m,0,g);let y=0;for(let T=0;T<g;T++)y+=m[T];t.update(y,n,1)}function d(f,m,g,x){if(g===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let T=0;T<f.length;T++)l(f[T],m[T],x[T]);else{y.multiDrawArraysInstancedWEBGL(n,f,0,m,0,x,0,g);let T=0;for(let C=0;C<g;C++)T+=m[C]*x[C];t.update(T,n,1)}}this.setMode=s,this.render=o,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function Tx(i,e,t,n){let s;function o(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function l(O){return!(O!==yn&&n.convert(O)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function u(O){const X=O===Mr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(O!==Xn&&n.convert(O)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==Gn&&!X)}function d(O){if(O==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let f=t.precision!==void 0?t.precision:"highp";const m=d(f);m!==f&&(console.warn("THREE.WebGLRenderer:",f,"not supported, using",m,"instead."),f=m);const g=t.logarithmicDepthBuffer===!0,x=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),y=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),T=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=i.getParameter(i.MAX_TEXTURE_SIZE),S=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),_=i.getParameter(i.MAX_VERTEX_ATTRIBS),N=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),L=i.getParameter(i.MAX_VARYING_VECTORS),I=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),Z=T>0,P=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:d,textureFormatReadable:l,textureTypeReadable:u,precision:f,logarithmicDepthBuffer:g,reverseDepthBuffer:x,maxTextures:y,maxVertexTextures:T,maxTextureSize:C,maxCubemapSize:S,maxAttributes:_,maxVertexUniforms:N,maxVaryings:L,maxFragmentUniforms:I,vertexTextures:Z,maxSamples:P}}function Ax(i){const e=this;let t=null,n=0,s=!1,o=!1;const l=new Si,u=new Qe,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(g,x){const y=g.length!==0||x||n!==0||s;return s=x,n=g.length,y},this.beginShadows=function(){o=!0,m(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(g,x){t=m(g,x,0)},this.setState=function(g,x,y){const T=g.clippingPlanes,C=g.clipIntersection,S=g.clipShadows,_=i.get(g);if(!s||T===null||T.length===0||o&&!S)o?m(null):f();else{const N=o?0:n,L=N*4;let I=_.clippingState||null;d.value=I,I=m(T,x,L,y);for(let Z=0;Z!==L;++Z)I[Z]=t[Z];_.clippingState=I,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=N}};function f(){d.value!==t&&(d.value=t,d.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function m(g,x,y,T){const C=g!==null?g.length:0;let S=null;if(C!==0){if(S=d.value,T!==!0||S===null){const _=y+C*4,N=x.matrixWorldInverse;u.getNormalMatrix(N),(S===null||S.length<_)&&(S=new Float32Array(_));for(let L=0,I=y;L!==C;++L,I+=4)l.copy(g[L]).applyMatrix4(N,u),l.normal.toArray(S,I),S[I+3]=l.constant}d.value=S,d.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,S}}function Cx(i){let e=new WeakMap;function t(l,u){return u===ja?l.mapping=Ji:u===Ya&&(l.mapping=Ki),l}function n(l){if(l&&l.isTexture){const u=l.mapping;if(u===ja||u===Ya)if(e.has(l)){const d=e.get(l).texture;return t(d,l.mapping)}else{const d=l.image;if(d&&d.height>0){const f=new Bg(d.height);return f.fromEquirectangularTexture(i,l),e.set(l,f),l.addEventListener("dispose",s),t(f.texture,l.mapping)}else return null}}return l}function s(l){const u=l.target;u.removeEventListener("dispose",s);const d=e.get(u);d!==void 0&&(e.delete(u),d.dispose())}function o(){e=new WeakMap}return{get:n,dispose:o}}class yu extends gu{constructor(e=-1,t=1,n=1,s=-1,o=.1,l=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=o,this.far=l,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,o,l){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let o=n-e,l=n+e,u=s+t,d=s-t;if(this.view!==null&&this.view.enabled){const f=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=f*this.view.offsetX,l=o+f*this.view.width,u-=m*this.view.offsetY,d=u-m*this.view.height}this.projectionMatrix.makeOrthographic(o,l,u,d,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const $i=4,cl=[.125,.215,.35,.446,.526,.582],wi=20,wa=new yu,ll=new st;let ba=null,Ta=0,Aa=0,Ca=!1;const Mi=(1+Math.sqrt(5))/2,Xi=1/Mi,ul=[new z(-Mi,Xi,0),new z(Mi,Xi,0),new z(-Xi,0,Mi),new z(Xi,0,Mi),new z(0,Mi,-Xi),new z(0,Mi,Xi),new z(-1,1,-1),new z(1,1,-1),new z(-1,1,1),new z(1,1,1)];class hl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){ba=this._renderer.getRenderTarget(),Ta=this._renderer.getActiveCubeFace(),Aa=this._renderer.getActiveMipmapLevel(),Ca=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,n,s,o),t>0&&this._blur(o,0,0,t),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=pl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ba,Ta,Aa),this._renderer.xr.enabled=Ca,e.scissorTest=!1,ms(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ji||e.mapping===Ki?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ba=this._renderer.getRenderTarget(),Ta=this._renderer.getActiveCubeFace(),Aa=this._renderer.getActiveMipmapLevel(),Ca=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Rn,minFilter:Rn,generateMipmaps:!1,type:Mr,format:yn,colorSpace:nr,depthBuffer:!1},s=dl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=dl(e,t,n);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Rx(o)),this._blurMaterial=Px(o,e,t)}return s}_compileMaterial(e){const t=new Pn(this._lodPlanes[0],e);this._renderer.compile(t,wa)}_sceneToCubeUV(e,t,n,s){const u=new dn(90,1,t,n),d=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],m=this._renderer,g=m.autoClear,x=m.toneMapping;m.getClearColor(ll),m.toneMapping=ni,m.autoClear=!1;const y=new fu({name:"PMREM.Background",side:en,depthWrite:!1,depthTest:!1}),T=new Pn(new sr,y);let C=!1;const S=e.background;S?S.isColor&&(y.color.copy(S),e.background=null,C=!0):(y.color.copy(ll),C=!0);for(let _=0;_<6;_++){const N=_%3;N===0?(u.up.set(0,d[_],0),u.lookAt(f[_],0,0)):N===1?(u.up.set(0,0,d[_]),u.lookAt(0,f[_],0)):(u.up.set(0,d[_],0),u.lookAt(0,0,f[_]));const L=this._cubeSize;ms(s,N*L,_>2?L:0,L,L),m.setRenderTarget(s),C&&m.render(T,u),m.render(e,u)}T.geometry.dispose(),T.material.dispose(),m.toneMapping=x,m.autoClear=g,e.background=S}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Ji||e.mapping===Ki;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=pl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=fl());const o=s?this._cubemapMaterial:this._equirectMaterial,l=new Pn(this._lodPlanes[0],o),u=o.uniforms;u.envMap.value=e;const d=this._cubeSize;ms(t,0,0,3*d,2*d),n.setRenderTarget(t),n.render(l,wa)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let o=1;o<s;o++){const l=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),u=ul[(s-o-1)%ul.length];this._blur(e,o-1,o,l,u)}t.autoClear=n}_blur(e,t,n,s,o){const l=this._pingPongRenderTarget;this._halfBlur(e,l,t,n,s,"latitudinal",o),this._halfBlur(l,e,n,n,s,"longitudinal",o)}_halfBlur(e,t,n,s,o,l,u){const d=this._renderer,f=this._blurMaterial;l!=="latitudinal"&&l!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const m=3,g=new Pn(this._lodPlanes[s],f),x=f.uniforms,y=this._sizeLods[n]-1,T=isFinite(o)?Math.PI/(2*y):2*Math.PI/(2*wi-1),C=o/T,S=isFinite(o)?1+Math.floor(m*C):wi;S>wi&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${wi}`);const _=[];let N=0;for(let O=0;O<wi;++O){const X=O/C,D=Math.exp(-X*X/2);_.push(D),O===0?N+=D:O<S&&(N+=2*D)}for(let O=0;O<_.length;O++)_[O]=_[O]/N;x.envMap.value=e.texture,x.samples.value=S,x.weights.value=_,x.latitudinal.value=l==="latitudinal",u&&(x.poleAxis.value=u);const{_lodMax:L}=this;x.dTheta.value=T,x.mipInt.value=L-n;const I=this._sizeLods[s],Z=3*I*(s>L-$i?s-L+$i:0),P=4*(this._cubeSize-I);ms(t,Z,P,3*I,2*I),d.setRenderTarget(t),d.render(g,wa)}}function Rx(i){const e=[],t=[],n=[];let s=i;const o=i-$i+1+cl.length;for(let l=0;l<o;l++){const u=Math.pow(2,s);t.push(u);let d=1/u;l>i-$i?d=cl[l-i+$i-1]:l===0&&(d=0),n.push(d);const f=1/(u-2),m=-f,g=1+f,x=[m,m,g,m,g,g,m,m,g,g,m,g],y=6,T=6,C=3,S=2,_=1,N=new Float32Array(C*T*y),L=new Float32Array(S*T*y),I=new Float32Array(_*T*y);for(let P=0;P<y;P++){const O=P%3*2/3-1,X=P>2?0:-1,D=[O,X,0,O+2/3,X,0,O+2/3,X+1,0,O,X,0,O+2/3,X+1,0,O,X+1,0];N.set(D,C*T*P),L.set(x,S*T*P);const E=[P,P,P,P,P,P];I.set(E,_*T*P)}const Z=new cn;Z.setAttribute("position",new fn(N,C)),Z.setAttribute("uv",new fn(L,S)),Z.setAttribute("faceIndex",new fn(I,_)),e.push(Z),s>$i&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function dl(i,e,t){const n=new Ci(i,e,t);return n.texture.mapping=Ls,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ms(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Px(i,e,t){const n=new Float32Array(wi),s=new z(0,1,0);return new ri({name:"SphericalGaussianBlur",defines:{n:wi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Fo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ti,depthTest:!1,depthWrite:!1})}function fl(){return new ri({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Fo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ti,depthTest:!1,depthWrite:!1})}function pl(){return new ri({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Fo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ti,depthTest:!1,depthWrite:!1})}function Fo(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Ix(i){let e=new WeakMap,t=null;function n(u){if(u&&u.isTexture){const d=u.mapping,f=d===ja||d===Ya,m=d===Ji||d===Ki;if(f||m){let g=e.get(u);const x=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==x)return t===null&&(t=new hl(i)),g=f?t.fromEquirectangular(u,g):t.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),g.texture;if(g!==void 0)return g.texture;{const y=u.image;return f&&y&&y.height>0||m&&y&&s(y)?(t===null&&(t=new hl(i)),g=f?t.fromEquirectangular(u):t.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),u.addEventListener("dispose",o),g.texture):null}}}return u}function s(u){let d=0;const f=6;for(let m=0;m<f;m++)u[m]!==void 0&&d++;return d===f}function o(u){const d=u.target;d.removeEventListener("dispose",o);const f=e.get(d);f!==void 0&&(e.delete(d),f.dispose())}function l(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:l}}function Dx(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&gr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Lx(i,e,t,n){const s={},o=new WeakMap;function l(g){const x=g.target;x.index!==null&&e.remove(x.index);for(const T in x.attributes)e.remove(x.attributes[T]);for(const T in x.morphAttributes){const C=x.morphAttributes[T];for(let S=0,_=C.length;S<_;S++)e.remove(C[S])}x.removeEventListener("dispose",l),delete s[x.id];const y=o.get(x);y&&(e.remove(y),o.delete(x)),n.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,t.memory.geometries--}function u(g,x){return s[x.id]===!0||(x.addEventListener("dispose",l),s[x.id]=!0,t.memory.geometries++),x}function d(g){const x=g.attributes;for(const T in x)e.update(x[T],i.ARRAY_BUFFER);const y=g.morphAttributes;for(const T in y){const C=y[T];for(let S=0,_=C.length;S<_;S++)e.update(C[S],i.ARRAY_BUFFER)}}function f(g){const x=[],y=g.index,T=g.attributes.position;let C=0;if(y!==null){const N=y.array;C=y.version;for(let L=0,I=N.length;L<I;L+=3){const Z=N[L+0],P=N[L+1],O=N[L+2];x.push(Z,P,P,O,O,Z)}}else if(T!==void 0){const N=T.array;C=T.version;for(let L=0,I=N.length/3-1;L<I;L+=3){const Z=L+0,P=L+1,O=L+2;x.push(Z,P,P,O,O,Z)}}else return;const S=new(ou(x)?mu:pu)(x,1);S.version=C;const _=o.get(g);_&&e.remove(_),o.set(g,S)}function m(g){const x=o.get(g);if(x){const y=g.index;y!==null&&x.version<y.version&&f(g)}else f(g);return o.get(g)}return{get:u,update:d,getWireframeAttribute:m}}function Fx(i,e,t){let n;function s(x){n=x}let o,l;function u(x){o=x.type,l=x.bytesPerElement}function d(x,y){i.drawElements(n,y,o,x*l),t.update(y,n,1)}function f(x,y,T){T!==0&&(i.drawElementsInstanced(n,y,o,x*l,T),t.update(y,n,T))}function m(x,y,T){if(T===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,y,0,o,x,0,T);let S=0;for(let _=0;_<T;_++)S+=y[_];t.update(S,n,1)}function g(x,y,T,C){if(T===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let _=0;_<x.length;_++)f(x[_]/l,y[_],C[_]);else{S.multiDrawElementsInstancedWEBGL(n,y,0,o,x,0,C,0,T);let _=0;for(let N=0;N<T;N++)_+=y[N]*C[N];t.update(_,n,1)}}this.setMode=s,this.setIndex=u,this.render=d,this.renderInstances=f,this.renderMultiDraw=m,this.renderMultiDrawInstances=g}function Ux(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,l,u){switch(t.calls++,l){case i.TRIANGLES:t.triangles+=u*(o/3);break;case i.LINES:t.lines+=u*(o/2);break;case i.LINE_STRIP:t.lines+=u*(o-1);break;case i.LINE_LOOP:t.lines+=u*o;break;case i.POINTS:t.points+=u*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",l);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Nx(i,e,t){const n=new WeakMap,s=new Pt;function o(l,u,d){const f=l.morphTargetInfluences,m=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=m!==void 0?m.length:0;let x=n.get(u);if(x===void 0||x.count!==g){let D=function(){O.dispose(),n.delete(u),u.removeEventListener("dispose",D)};x!==void 0&&x.texture.dispose();const y=u.morphAttributes.position!==void 0,T=u.morphAttributes.normal!==void 0,C=u.morphAttributes.color!==void 0,S=u.morphAttributes.position||[],_=u.morphAttributes.normal||[],N=u.morphAttributes.color||[];let L=0;y===!0&&(L=1),T===!0&&(L=2),C===!0&&(L=3);let I=u.attributes.position.count*L,Z=1;I>e.maxTextureSize&&(Z=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const P=new Float32Array(I*Z*4*g),O=new lu(P,I,Z,g);O.type=Gn,O.needsUpdate=!0;const X=L*4;for(let E=0;E<g;E++){const k=S[E],te=_[E],K=N[E],ee=I*Z*4*E;for(let pe=0;pe<k.count;pe++){const ae=pe*X;y===!0&&(s.fromBufferAttribute(k,pe),P[ee+ae+0]=s.x,P[ee+ae+1]=s.y,P[ee+ae+2]=s.z,P[ee+ae+3]=0),T===!0&&(s.fromBufferAttribute(te,pe),P[ee+ae+4]=s.x,P[ee+ae+5]=s.y,P[ee+ae+6]=s.z,P[ee+ae+7]=0),C===!0&&(s.fromBufferAttribute(K,pe),P[ee+ae+8]=s.x,P[ee+ae+9]=s.y,P[ee+ae+10]=s.z,P[ee+ae+11]=K.itemSize===4?s.w:1)}}x={count:g,texture:O,size:new ze(I,Z)},n.set(u,x),u.addEventListener("dispose",D)}if(l.isInstancedMesh===!0&&l.morphTexture!==null)d.getUniforms().setValue(i,"morphTexture",l.morphTexture,t);else{let y=0;for(let C=0;C<f.length;C++)y+=f[C];const T=u.morphTargetsRelative?1:1-y;d.getUniforms().setValue(i,"morphTargetBaseInfluence",T),d.getUniforms().setValue(i,"morphTargetInfluences",f)}d.getUniforms().setValue(i,"morphTargetsTexture",x.texture,t),d.getUniforms().setValue(i,"morphTargetsTextureSize",x.size)}return{update:o}}function Ox(i,e,t,n){let s=new WeakMap;function o(d){const f=n.render.frame,m=d.geometry,g=e.get(d,m);if(s.get(g)!==f&&(e.update(g),s.set(g,f)),d.isInstancedMesh&&(d.hasEventListener("dispose",u)===!1&&d.addEventListener("dispose",u),s.get(d)!==f&&(t.update(d.instanceMatrix,i.ARRAY_BUFFER),d.instanceColor!==null&&t.update(d.instanceColor,i.ARRAY_BUFFER),s.set(d,f))),d.isSkinnedMesh){const x=d.skeleton;s.get(x)!==f&&(x.update(),s.set(x,f))}return g}function l(){s=new WeakMap}function u(d){const f=d.target;f.removeEventListener("dispose",u),t.remove(f.instanceMatrix),f.instanceColor!==null&&t.remove(f.instanceColor)}return{update:o,dispose:l}}class Su extends tn{constructor(e,t,n,s,o,l,u,d,f,m=Yi){if(m!==Yi&&m!==er)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&m===Yi&&(n=Ai),n===void 0&&m===er&&(n=Qi),super(null,s,o,l,u,d,m,n,f),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=u!==void 0?u:Sn,this.minFilter=d!==void 0?d:Sn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Mu=new tn,ml=new Su(1,1),Eu=new lu,wu=new Eg,bu=new vu,_l=[],gl=[],vl=new Float32Array(16),xl=new Float32Array(9),yl=new Float32Array(4);function ar(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let o=_l[s];if(o===void 0&&(o=new Float32Array(s),_l[s]=o),e!==0){n.toArray(o,0);for(let l=1,u=0;l!==e;++l)u+=t,i[l].toArray(o,u)}return o}function Ot(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function kt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Ns(i,e){let t=gl[e];t===void 0&&(t=new Int32Array(e),gl[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function kx(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Bx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;i.uniform2fv(this.addr,e),kt(t,e)}}function zx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ot(t,e))return;i.uniform3fv(this.addr,e),kt(t,e)}}function Hx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;i.uniform4fv(this.addr,e),kt(t,e)}}function Gx(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ot(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),kt(t,e)}else{if(Ot(t,n))return;yl.set(n),i.uniformMatrix2fv(this.addr,!1,yl),kt(t,n)}}function Vx(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ot(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),kt(t,e)}else{if(Ot(t,n))return;xl.set(n),i.uniformMatrix3fv(this.addr,!1,xl),kt(t,n)}}function Wx(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ot(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),kt(t,e)}else{if(Ot(t,n))return;vl.set(n),i.uniformMatrix4fv(this.addr,!1,vl),kt(t,n)}}function Xx(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function $x(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;i.uniform2iv(this.addr,e),kt(t,e)}}function jx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ot(t,e))return;i.uniform3iv(this.addr,e),kt(t,e)}}function Yx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;i.uniform4iv(this.addr,e),kt(t,e)}}function qx(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Zx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;i.uniform2uiv(this.addr,e),kt(t,e)}}function Jx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ot(t,e))return;i.uniform3uiv(this.addr,e),kt(t,e)}}function Kx(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;i.uniform4uiv(this.addr,e),kt(t,e)}}function Qx(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let o;this.type===i.SAMPLER_2D_SHADOW?(ml.compareFunction=au,o=ml):o=Mu,t.setTexture2D(e||o,s)}function ey(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||wu,s)}function ty(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||bu,s)}function ny(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Eu,s)}function iy(i){switch(i){case 5126:return kx;case 35664:return Bx;case 35665:return zx;case 35666:return Hx;case 35674:return Gx;case 35675:return Vx;case 35676:return Wx;case 5124:case 35670:return Xx;case 35667:case 35671:return $x;case 35668:case 35672:return jx;case 35669:case 35673:return Yx;case 5125:return qx;case 36294:return Zx;case 36295:return Jx;case 36296:return Kx;case 35678:case 36198:case 36298:case 36306:case 35682:return Qx;case 35679:case 36299:case 36307:return ey;case 35680:case 36300:case 36308:case 36293:return ty;case 36289:case 36303:case 36311:case 36292:return ny}}function ry(i,e){i.uniform1fv(this.addr,e)}function sy(i,e){const t=ar(e,this.size,2);i.uniform2fv(this.addr,t)}function ay(i,e){const t=ar(e,this.size,3);i.uniform3fv(this.addr,t)}function oy(i,e){const t=ar(e,this.size,4);i.uniform4fv(this.addr,t)}function cy(i,e){const t=ar(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function ly(i,e){const t=ar(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function uy(i,e){const t=ar(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function hy(i,e){i.uniform1iv(this.addr,e)}function dy(i,e){i.uniform2iv(this.addr,e)}function fy(i,e){i.uniform3iv(this.addr,e)}function py(i,e){i.uniform4iv(this.addr,e)}function my(i,e){i.uniform1uiv(this.addr,e)}function _y(i,e){i.uniform2uiv(this.addr,e)}function gy(i,e){i.uniform3uiv(this.addr,e)}function vy(i,e){i.uniform4uiv(this.addr,e)}function xy(i,e,t){const n=this.cache,s=e.length,o=Ns(t,s);Ot(n,o)||(i.uniform1iv(this.addr,o),kt(n,o));for(let l=0;l!==s;++l)t.setTexture2D(e[l]||Mu,o[l])}function yy(i,e,t){const n=this.cache,s=e.length,o=Ns(t,s);Ot(n,o)||(i.uniform1iv(this.addr,o),kt(n,o));for(let l=0;l!==s;++l)t.setTexture3D(e[l]||wu,o[l])}function Sy(i,e,t){const n=this.cache,s=e.length,o=Ns(t,s);Ot(n,o)||(i.uniform1iv(this.addr,o),kt(n,o));for(let l=0;l!==s;++l)t.setTextureCube(e[l]||bu,o[l])}function My(i,e,t){const n=this.cache,s=e.length,o=Ns(t,s);Ot(n,o)||(i.uniform1iv(this.addr,o),kt(n,o));for(let l=0;l!==s;++l)t.setTexture2DArray(e[l]||Eu,o[l])}function Ey(i){switch(i){case 5126:return ry;case 35664:return sy;case 35665:return ay;case 35666:return oy;case 35674:return cy;case 35675:return ly;case 35676:return uy;case 5124:case 35670:return hy;case 35667:case 35671:return dy;case 35668:case 35672:return fy;case 35669:case 35673:return py;case 5125:return my;case 36294:return _y;case 36295:return gy;case 36296:return vy;case 35678:case 36198:case 36298:case 36306:case 35682:return xy;case 35679:case 36299:case 36307:return yy;case 35680:case 36300:case 36308:case 36293:return Sy;case 36289:case 36303:case 36311:case 36292:return My}}class wy{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=iy(t.type)}}class by{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ey(t.type)}}class Ty{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let o=0,l=s.length;o!==l;++o){const u=s[o];u.setValue(e,t[u.id],n)}}}const Ra=/(\w+)(\])?(\[|\.)?/g;function Sl(i,e){i.seq.push(e),i.map[e.id]=e}function Ay(i,e,t){const n=i.name,s=n.length;for(Ra.lastIndex=0;;){const o=Ra.exec(n),l=Ra.lastIndex;let u=o[1];const d=o[2]==="]",f=o[3];if(d&&(u=u|0),f===void 0||f==="["&&l+2===s){Sl(t,f===void 0?new wy(u,i,e):new by(u,i,e));break}else{let g=t.map[u];g===void 0&&(g=new Ty(u),Sl(t,g)),t=g}}}class As{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const o=e.getActiveUniform(t,s),l=e.getUniformLocation(t,o.name);Ay(o,l,this)}}setValue(e,t,n,s){const o=this.map[t];o!==void 0&&o.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let o=0,l=t.length;o!==l;++o){const u=t[o],d=n[u.id];d.needsUpdate!==!1&&u.setValue(e,d.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,o=e.length;s!==o;++s){const l=e[s];l.id in t&&n.push(l)}return n}}function Ml(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Cy=37297;let Ry=0;function Py(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let l=s;l<o;l++){const u=l+1;n.push(`${u===e?">":" "} ${u}: ${t[l]}`)}return n.join(`
`)}const El=new Qe;function Iy(i){gt._getMatrix(El,gt.workingColorSpace,i);const e=`mat3( ${El.elements.map(t=>t.toFixed(4))} )`;switch(gt.getTransfer(i)){case Fs:return[e,"LinearTransferOETF"];case St:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function wl(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const l=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+Py(i.getShaderSource(e),l)}else return s}function Dy(i,e){const t=Iy(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Ly(i,e){let t;switch(e){case Z_:t="Linear";break;case J_:t="Reinhard";break;case K_:t="Cineon";break;case Q_:t="ACESFilmic";break;case tg:t="AgX";break;case ng:t="Neutral";break;case eg:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const _s=new z;function Fy(){gt.getLuminanceCoefficients(_s);const i=_s.x.toFixed(4),e=_s.y.toFixed(4),t=_s.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Uy(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(vr).join(`
`)}function Ny(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Oy(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const o=i.getActiveAttrib(e,s),l=o.name;let u=1;o.type===i.FLOAT_MAT2&&(u=2),o.type===i.FLOAT_MAT3&&(u=3),o.type===i.FLOAT_MAT4&&(u=4),t[l]={type:o.type,location:i.getAttribLocation(e,l),locationSize:u}}return t}function vr(i){return i!==""}function bl(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Tl(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ky=/^[ \t]*#include +<([\w\d./]+)>/gm;function bo(i){return i.replace(ky,zy)}const By=new Map;function zy(i,e){let t=nt[e];if(t===void 0){const n=By.get(e);if(n!==void 0)t=nt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return bo(t)}const Hy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Al(i){return i.replace(Hy,Gy)}function Gy(i,e,t,n){let s="";for(let o=parseInt(e);o<parseInt(t);o++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return s}function Cl(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Vy(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===$l?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===R_?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===zn&&(e="SHADOWMAP_TYPE_VSM"),e}function Wy(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ji:case Ki:e="ENVMAP_TYPE_CUBE";break;case Ls:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Xy(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ki:e="ENVMAP_MODE_REFRACTION";break}return e}function $y(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case jl:e="ENVMAP_BLENDING_MULTIPLY";break;case Y_:e="ENVMAP_BLENDING_MIX";break;case q_:e="ENVMAP_BLENDING_ADD";break}return e}function jy(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Yy(i,e,t,n){const s=i.getContext(),o=t.defines;let l=t.vertexShader,u=t.fragmentShader;const d=Vy(t),f=Wy(t),m=Xy(t),g=$y(t),x=jy(t),y=Uy(t),T=Ny(o),C=s.createProgram();let S,_,N=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T].filter(vr).join(`
`),S.length>0&&(S+=`
`),_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T].filter(vr).join(`
`),_.length>0&&(_+=`
`)):(S=[Cl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(vr).join(`
`),_=[Cl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.envMap?"#define "+m:"",t.envMap?"#define "+g:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ni?"#define TONE_MAPPING":"",t.toneMapping!==ni?nt.tonemapping_pars_fragment:"",t.toneMapping!==ni?Ly("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",nt.colorspace_pars_fragment,Dy("linearToOutputTexel",t.outputColorSpace),Fy(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(vr).join(`
`)),l=bo(l),l=bl(l,t),l=Tl(l,t),u=bo(u),u=bl(u,t),u=Tl(u,t),l=Al(l),u=Al(u),t.isRawShaderMaterial!==!0&&(N=`#version 300 es
`,S=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,_=["#define varying in",t.glslVersion===Hc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Hc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const L=N+S+l,I=N+_+u,Z=Ml(s,s.VERTEX_SHADER,L),P=Ml(s,s.FRAGMENT_SHADER,I);s.attachShader(C,Z),s.attachShader(C,P),t.index0AttributeName!==void 0?s.bindAttribLocation(C,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(C,0,"position"),s.linkProgram(C);function O(k){if(i.debug.checkShaderErrors){const te=s.getProgramInfoLog(C).trim(),K=s.getShaderInfoLog(Z).trim(),ee=s.getShaderInfoLog(P).trim();let pe=!0,ae=!0;if(s.getProgramParameter(C,s.LINK_STATUS)===!1)if(pe=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,C,Z,P);else{const Se=wl(s,Z,"vertex"),re=wl(s,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(C,s.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+te+`
`+Se+`
`+re)}else te!==""?console.warn("THREE.WebGLProgram: Program Info Log:",te):(K===""||ee==="")&&(ae=!1);ae&&(k.diagnostics={runnable:pe,programLog:te,vertexShader:{log:K,prefix:S},fragmentShader:{log:ee,prefix:_}})}s.deleteShader(Z),s.deleteShader(P),X=new As(s,C),D=Oy(s,C)}let X;this.getUniforms=function(){return X===void 0&&O(this),X};let D;this.getAttributes=function(){return D===void 0&&O(this),D};let E=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=s.getProgramParameter(C,Cy)),E},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(C),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Ry++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=Z,this.fragmentShader=P,this}let qy=0;class Zy{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),o=this._getShaderStage(n),l=this._getShaderCacheForMaterial(e);return l.has(s)===!1&&(l.add(s),s.usedTimes++),l.has(o)===!1&&(l.add(o),o.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Jy(e),t.set(e,n)),n}}class Jy{constructor(e){this.id=qy++,this.code=e,this.usedTimes=0}}function Ky(i,e,t,n,s,o,l){const u=new hu,d=new Zy,f=new Set,m=[],g=s.logarithmicDepthBuffer,x=s.vertexTextures;let y=s.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function C(D){return f.add(D),D===0?"uv":`uv${D}`}function S(D,E,k,te,K){const ee=te.fog,pe=K.geometry,ae=D.isMeshStandardMaterial?te.environment:null,Se=(D.isMeshStandardMaterial?t:e).get(D.envMap||ae),re=Se&&Se.mapping===Ls?Se.image.height:null,Ae=T[D.type];D.precision!==null&&(y=s.getMaxPrecision(D.precision),y!==D.precision&&console.warn("THREE.WebGLProgram.getParameters:",D.precision,"not supported, using",y,"instead."));const Pe=pe.morphAttributes.position||pe.morphAttributes.normal||pe.morphAttributes.color,He=Pe!==void 0?Pe.length:0;let Ke=0;pe.morphAttributes.position!==void 0&&(Ke=1),pe.morphAttributes.normal!==void 0&&(Ke=2),pe.morphAttributes.color!==void 0&&(Ke=3);let ft,ne,_e,De;if(Ae){const it=Cn[Ae];ft=it.vertexShader,ne=it.fragmentShader}else ft=D.vertexShader,ne=D.fragmentShader,d.update(D),_e=d.getVertexShaderID(D),De=d.getFragmentShaderID(D);const Ee=i.getRenderTarget(),fe=i.state.buffers.depth.getReversed(),Me=K.isInstancedMesh===!0,et=K.isBatchedMesh===!0,Mt=!!D.map,qe=!!D.matcap,Ct=!!Se,H=!!D.aoMap,jt=!!D.lightMap,at=!!D.bumpMap,ot=!!D.normalMap,We=!!D.displacementMap,pt=!!D.emissiveMap,Ge=!!D.metalnessMap,F=!!D.roughnessMap,A=D.anisotropy>0,J=D.clearcoat>0,de=D.dispersion>0,le=D.iridescence>0,se=D.sheen>0,Oe=D.transmission>0,Ce=A&&!!D.anisotropyMap,Le=J&&!!D.clearcoatMap,lt=J&&!!D.clearcoatNormalMap,ye=J&&!!D.clearcoatRoughnessMap,Fe=le&&!!D.iridescenceMap,Xe=le&&!!D.iridescenceThicknessMap,Ye=se&&!!D.sheenColorMap,Ue=se&&!!D.sheenRoughnessMap,rt=!!D.specularMap,Ze=!!D.specularColorMap,xt=!!D.specularIntensityMap,B=Oe&&!!D.transmissionMap,be=Oe&&!!D.thicknessMap,ie=!!D.gradientMap,he=!!D.alphaMap,Y=D.alphaTest>0,j=!!D.alphaHash,$e=!!D.extensions;let Tt=ni;D.toneMapped&&(Ee===null||Ee.isXRRenderTarget===!0)&&(Tt=i.toneMapping);const Rt={shaderID:Ae,shaderType:D.type,shaderName:D.name,vertexShader:ft,fragmentShader:ne,defines:D.defines,customVertexShaderID:_e,customFragmentShaderID:De,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:y,batching:et,batchingColor:et&&K._colorsTexture!==null,instancing:Me,instancingColor:Me&&K.instanceColor!==null,instancingMorph:Me&&K.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:Ee===null?i.outputColorSpace:Ee.isXRRenderTarget===!0?Ee.texture.colorSpace:nr,alphaToCoverage:!!D.alphaToCoverage,map:Mt,matcap:qe,envMap:Ct,envMapMode:Ct&&Se.mapping,envMapCubeUVHeight:re,aoMap:H,lightMap:jt,bumpMap:at,normalMap:ot,displacementMap:x&&We,emissiveMap:pt,normalMapObjectSpace:ot&&D.normalMapType===ag,normalMapTangentSpace:ot&&D.normalMapType===su,metalnessMap:Ge,roughnessMap:F,anisotropy:A,anisotropyMap:Ce,clearcoat:J,clearcoatMap:Le,clearcoatNormalMap:lt,clearcoatRoughnessMap:ye,dispersion:de,iridescence:le,iridescenceMap:Fe,iridescenceThicknessMap:Xe,sheen:se,sheenColorMap:Ye,sheenRoughnessMap:Ue,specularMap:rt,specularColorMap:Ze,specularIntensityMap:xt,transmission:Oe,transmissionMap:B,thicknessMap:be,gradientMap:ie,opaque:D.transparent===!1&&D.blending===ji&&D.alphaToCoverage===!1,alphaMap:he,alphaTest:Y,alphaHash:j,combine:D.combine,mapUv:Mt&&C(D.map.channel),aoMapUv:H&&C(D.aoMap.channel),lightMapUv:jt&&C(D.lightMap.channel),bumpMapUv:at&&C(D.bumpMap.channel),normalMapUv:ot&&C(D.normalMap.channel),displacementMapUv:We&&C(D.displacementMap.channel),emissiveMapUv:pt&&C(D.emissiveMap.channel),metalnessMapUv:Ge&&C(D.metalnessMap.channel),roughnessMapUv:F&&C(D.roughnessMap.channel),anisotropyMapUv:Ce&&C(D.anisotropyMap.channel),clearcoatMapUv:Le&&C(D.clearcoatMap.channel),clearcoatNormalMapUv:lt&&C(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ye&&C(D.clearcoatRoughnessMap.channel),iridescenceMapUv:Fe&&C(D.iridescenceMap.channel),iridescenceThicknessMapUv:Xe&&C(D.iridescenceThicknessMap.channel),sheenColorMapUv:Ye&&C(D.sheenColorMap.channel),sheenRoughnessMapUv:Ue&&C(D.sheenRoughnessMap.channel),specularMapUv:rt&&C(D.specularMap.channel),specularColorMapUv:Ze&&C(D.specularColorMap.channel),specularIntensityMapUv:xt&&C(D.specularIntensityMap.channel),transmissionMapUv:B&&C(D.transmissionMap.channel),thicknessMapUv:be&&C(D.thicknessMap.channel),alphaMapUv:he&&C(D.alphaMap.channel),vertexTangents:!!pe.attributes.tangent&&(ot||A),vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!pe.attributes.color&&pe.attributes.color.itemSize===4,pointsUvs:K.isPoints===!0&&!!pe.attributes.uv&&(Mt||he),fog:!!ee,useFog:D.fog===!0,fogExp2:!!ee&&ee.isFogExp2,flatShading:D.flatShading===!0,sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:g,reverseDepthBuffer:fe,skinning:K.isSkinnedMesh===!0,morphTargets:pe.morphAttributes.position!==void 0,morphNormals:pe.morphAttributes.normal!==void 0,morphColors:pe.morphAttributes.color!==void 0,morphTargetsCount:He,morphTextureStride:Ke,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:D.dithering,shadowMapEnabled:i.shadowMap.enabled&&k.length>0,shadowMapType:i.shadowMap.type,toneMapping:Tt,decodeVideoTexture:Mt&&D.map.isVideoTexture===!0&&gt.getTransfer(D.map.colorSpace)===St,decodeVideoTextureEmissive:pt&&D.emissiveMap.isVideoTexture===!0&&gt.getTransfer(D.emissiveMap.colorSpace)===St,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===Hn,flipSided:D.side===en,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:$e&&D.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:($e&&D.extensions.multiDraw===!0||et)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return Rt.vertexUv1s=f.has(1),Rt.vertexUv2s=f.has(2),Rt.vertexUv3s=f.has(3),f.clear(),Rt}function _(D){const E=[];if(D.shaderID?E.push(D.shaderID):(E.push(D.customVertexShaderID),E.push(D.customFragmentShaderID)),D.defines!==void 0)for(const k in D.defines)E.push(k),E.push(D.defines[k]);return D.isRawShaderMaterial===!1&&(N(E,D),L(E,D),E.push(i.outputColorSpace)),E.push(D.customProgramCacheKey),E.join()}function N(D,E){D.push(E.precision),D.push(E.outputColorSpace),D.push(E.envMapMode),D.push(E.envMapCubeUVHeight),D.push(E.mapUv),D.push(E.alphaMapUv),D.push(E.lightMapUv),D.push(E.aoMapUv),D.push(E.bumpMapUv),D.push(E.normalMapUv),D.push(E.displacementMapUv),D.push(E.emissiveMapUv),D.push(E.metalnessMapUv),D.push(E.roughnessMapUv),D.push(E.anisotropyMapUv),D.push(E.clearcoatMapUv),D.push(E.clearcoatNormalMapUv),D.push(E.clearcoatRoughnessMapUv),D.push(E.iridescenceMapUv),D.push(E.iridescenceThicknessMapUv),D.push(E.sheenColorMapUv),D.push(E.sheenRoughnessMapUv),D.push(E.specularMapUv),D.push(E.specularColorMapUv),D.push(E.specularIntensityMapUv),D.push(E.transmissionMapUv),D.push(E.thicknessMapUv),D.push(E.combine),D.push(E.fogExp2),D.push(E.sizeAttenuation),D.push(E.morphTargetsCount),D.push(E.morphAttributeCount),D.push(E.numDirLights),D.push(E.numPointLights),D.push(E.numSpotLights),D.push(E.numSpotLightMaps),D.push(E.numHemiLights),D.push(E.numRectAreaLights),D.push(E.numDirLightShadows),D.push(E.numPointLightShadows),D.push(E.numSpotLightShadows),D.push(E.numSpotLightShadowsWithMaps),D.push(E.numLightProbes),D.push(E.shadowMapType),D.push(E.toneMapping),D.push(E.numClippingPlanes),D.push(E.numClipIntersection),D.push(E.depthPacking)}function L(D,E){u.disableAll(),E.supportsVertexTextures&&u.enable(0),E.instancing&&u.enable(1),E.instancingColor&&u.enable(2),E.instancingMorph&&u.enable(3),E.matcap&&u.enable(4),E.envMap&&u.enable(5),E.normalMapObjectSpace&&u.enable(6),E.normalMapTangentSpace&&u.enable(7),E.clearcoat&&u.enable(8),E.iridescence&&u.enable(9),E.alphaTest&&u.enable(10),E.vertexColors&&u.enable(11),E.vertexAlphas&&u.enable(12),E.vertexUv1s&&u.enable(13),E.vertexUv2s&&u.enable(14),E.vertexUv3s&&u.enable(15),E.vertexTangents&&u.enable(16),E.anisotropy&&u.enable(17),E.alphaHash&&u.enable(18),E.batching&&u.enable(19),E.dispersion&&u.enable(20),E.batchingColor&&u.enable(21),D.push(u.mask),u.disableAll(),E.fog&&u.enable(0),E.useFog&&u.enable(1),E.flatShading&&u.enable(2),E.logarithmicDepthBuffer&&u.enable(3),E.reverseDepthBuffer&&u.enable(4),E.skinning&&u.enable(5),E.morphTargets&&u.enable(6),E.morphNormals&&u.enable(7),E.morphColors&&u.enable(8),E.premultipliedAlpha&&u.enable(9),E.shadowMapEnabled&&u.enable(10),E.doubleSided&&u.enable(11),E.flipSided&&u.enable(12),E.useDepthPacking&&u.enable(13),E.dithering&&u.enable(14),E.transmission&&u.enable(15),E.sheen&&u.enable(16),E.opaque&&u.enable(17),E.pointsUvs&&u.enable(18),E.decodeVideoTexture&&u.enable(19),E.decodeVideoTextureEmissive&&u.enable(20),E.alphaToCoverage&&u.enable(21),D.push(u.mask)}function I(D){const E=T[D.type];let k;if(E){const te=Cn[E];k=Ug.clone(te.uniforms)}else k=D.uniforms;return k}function Z(D,E){let k;for(let te=0,K=m.length;te<K;te++){const ee=m[te];if(ee.cacheKey===E){k=ee,++k.usedTimes;break}}return k===void 0&&(k=new Yy(i,E,D,o),m.push(k)),k}function P(D){if(--D.usedTimes===0){const E=m.indexOf(D);m[E]=m[m.length-1],m.pop(),D.destroy()}}function O(D){d.remove(D)}function X(){d.dispose()}return{getParameters:S,getProgramCacheKey:_,getUniforms:I,acquireProgram:Z,releaseProgram:P,releaseShaderCache:O,programs:m,dispose:X}}function Qy(){let i=new WeakMap;function e(l){return i.has(l)}function t(l){let u=i.get(l);return u===void 0&&(u={},i.set(l,u)),u}function n(l){i.delete(l)}function s(l,u,d){i.get(l)[u]=d}function o(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:o}}function eS(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Rl(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Pl(){const i=[];let e=0;const t=[],n=[],s=[];function o(){e=0,t.length=0,n.length=0,s.length=0}function l(g,x,y,T,C,S){let _=i[e];return _===void 0?(_={id:g.id,object:g,geometry:x,material:y,groupOrder:T,renderOrder:g.renderOrder,z:C,group:S},i[e]=_):(_.id=g.id,_.object=g,_.geometry=x,_.material=y,_.groupOrder=T,_.renderOrder=g.renderOrder,_.z=C,_.group=S),e++,_}function u(g,x,y,T,C,S){const _=l(g,x,y,T,C,S);y.transmission>0?n.push(_):y.transparent===!0?s.push(_):t.push(_)}function d(g,x,y,T,C,S){const _=l(g,x,y,T,C,S);y.transmission>0?n.unshift(_):y.transparent===!0?s.unshift(_):t.unshift(_)}function f(g,x){t.length>1&&t.sort(g||eS),n.length>1&&n.sort(x||Rl),s.length>1&&s.sort(x||Rl)}function m(){for(let g=e,x=i.length;g<x;g++){const y=i[g];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:t,transmissive:n,transparent:s,init:o,push:u,unshift:d,finish:m,sort:f}}function tS(){let i=new WeakMap;function e(n,s){const o=i.get(n);let l;return o===void 0?(l=new Pl,i.set(n,[l])):s>=o.length?(l=new Pl,o.push(l)):l=o[s],l}function t(){i=new WeakMap}return{get:e,dispose:t}}function nS(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new z,color:new st};break;case"SpotLight":t={position:new z,direction:new z,color:new st,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new z,color:new st,distance:0,decay:0};break;case"HemisphereLight":t={direction:new z,skyColor:new st,groundColor:new st};break;case"RectAreaLight":t={color:new st,position:new z,halfWidth:new z,halfHeight:new z};break}return i[e.id]=t,t}}}function iS(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let rS=0;function sS(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function aS(i){const e=new nS,t=iS(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let f=0;f<9;f++)n.probe.push(new z);const s=new z,o=new At,l=new At;function u(f){let m=0,g=0,x=0;for(let D=0;D<9;D++)n.probe[D].set(0,0,0);let y=0,T=0,C=0,S=0,_=0,N=0,L=0,I=0,Z=0,P=0,O=0;f.sort(sS);for(let D=0,E=f.length;D<E;D++){const k=f[D],te=k.color,K=k.intensity,ee=k.distance,pe=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)m+=te.r*K,g+=te.g*K,x+=te.b*K;else if(k.isLightProbe){for(let ae=0;ae<9;ae++)n.probe[ae].addScaledVector(k.sh.coefficients[ae],K);O++}else if(k.isDirectionalLight){const ae=e.get(k);if(ae.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const Se=k.shadow,re=t.get(k);re.shadowIntensity=Se.intensity,re.shadowBias=Se.bias,re.shadowNormalBias=Se.normalBias,re.shadowRadius=Se.radius,re.shadowMapSize=Se.mapSize,n.directionalShadow[y]=re,n.directionalShadowMap[y]=pe,n.directionalShadowMatrix[y]=k.shadow.matrix,N++}n.directional[y]=ae,y++}else if(k.isSpotLight){const ae=e.get(k);ae.position.setFromMatrixPosition(k.matrixWorld),ae.color.copy(te).multiplyScalar(K),ae.distance=ee,ae.coneCos=Math.cos(k.angle),ae.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),ae.decay=k.decay,n.spot[C]=ae;const Se=k.shadow;if(k.map&&(n.spotLightMap[Z]=k.map,Z++,Se.updateMatrices(k),k.castShadow&&P++),n.spotLightMatrix[C]=Se.matrix,k.castShadow){const re=t.get(k);re.shadowIntensity=Se.intensity,re.shadowBias=Se.bias,re.shadowNormalBias=Se.normalBias,re.shadowRadius=Se.radius,re.shadowMapSize=Se.mapSize,n.spotShadow[C]=re,n.spotShadowMap[C]=pe,I++}C++}else if(k.isRectAreaLight){const ae=e.get(k);ae.color.copy(te).multiplyScalar(K),ae.halfWidth.set(k.width*.5,0,0),ae.halfHeight.set(0,k.height*.5,0),n.rectArea[S]=ae,S++}else if(k.isPointLight){const ae=e.get(k);if(ae.color.copy(k.color).multiplyScalar(k.intensity),ae.distance=k.distance,ae.decay=k.decay,k.castShadow){const Se=k.shadow,re=t.get(k);re.shadowIntensity=Se.intensity,re.shadowBias=Se.bias,re.shadowNormalBias=Se.normalBias,re.shadowRadius=Se.radius,re.shadowMapSize=Se.mapSize,re.shadowCameraNear=Se.camera.near,re.shadowCameraFar=Se.camera.far,n.pointShadow[T]=re,n.pointShadowMap[T]=pe,n.pointShadowMatrix[T]=k.shadow.matrix,L++}n.point[T]=ae,T++}else if(k.isHemisphereLight){const ae=e.get(k);ae.skyColor.copy(k.color).multiplyScalar(K),ae.groundColor.copy(k.groundColor).multiplyScalar(K),n.hemi[_]=ae,_++}}S>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=we.LTC_FLOAT_1,n.rectAreaLTC2=we.LTC_FLOAT_2):(n.rectAreaLTC1=we.LTC_HALF_1,n.rectAreaLTC2=we.LTC_HALF_2)),n.ambient[0]=m,n.ambient[1]=g,n.ambient[2]=x;const X=n.hash;(X.directionalLength!==y||X.pointLength!==T||X.spotLength!==C||X.rectAreaLength!==S||X.hemiLength!==_||X.numDirectionalShadows!==N||X.numPointShadows!==L||X.numSpotShadows!==I||X.numSpotMaps!==Z||X.numLightProbes!==O)&&(n.directional.length=y,n.spot.length=C,n.rectArea.length=S,n.point.length=T,n.hemi.length=_,n.directionalShadow.length=N,n.directionalShadowMap.length=N,n.pointShadow.length=L,n.pointShadowMap.length=L,n.spotShadow.length=I,n.spotShadowMap.length=I,n.directionalShadowMatrix.length=N,n.pointShadowMatrix.length=L,n.spotLightMatrix.length=I+Z-P,n.spotLightMap.length=Z,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=O,X.directionalLength=y,X.pointLength=T,X.spotLength=C,X.rectAreaLength=S,X.hemiLength=_,X.numDirectionalShadows=N,X.numPointShadows=L,X.numSpotShadows=I,X.numSpotMaps=Z,X.numLightProbes=O,n.version=rS++)}function d(f,m){let g=0,x=0,y=0,T=0,C=0;const S=m.matrixWorldInverse;for(let _=0,N=f.length;_<N;_++){const L=f[_];if(L.isDirectionalLight){const I=n.directional[g];I.direction.setFromMatrixPosition(L.matrixWorld),s.setFromMatrixPosition(L.target.matrixWorld),I.direction.sub(s),I.direction.transformDirection(S),g++}else if(L.isSpotLight){const I=n.spot[y];I.position.setFromMatrixPosition(L.matrixWorld),I.position.applyMatrix4(S),I.direction.setFromMatrixPosition(L.matrixWorld),s.setFromMatrixPosition(L.target.matrixWorld),I.direction.sub(s),I.direction.transformDirection(S),y++}else if(L.isRectAreaLight){const I=n.rectArea[T];I.position.setFromMatrixPosition(L.matrixWorld),I.position.applyMatrix4(S),l.identity(),o.copy(L.matrixWorld),o.premultiply(S),l.extractRotation(o),I.halfWidth.set(L.width*.5,0,0),I.halfHeight.set(0,L.height*.5,0),I.halfWidth.applyMatrix4(l),I.halfHeight.applyMatrix4(l),T++}else if(L.isPointLight){const I=n.point[x];I.position.setFromMatrixPosition(L.matrixWorld),I.position.applyMatrix4(S),x++}else if(L.isHemisphereLight){const I=n.hemi[C];I.direction.setFromMatrixPosition(L.matrixWorld),I.direction.transformDirection(S),C++}}}return{setup:u,setupView:d,state:n}}function Il(i){const e=new aS(i),t=[],n=[];function s(m){f.camera=m,t.length=0,n.length=0}function o(m){t.push(m)}function l(m){n.push(m)}function u(){e.setup(t)}function d(m){e.setupView(t,m)}const f={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:f,setupLights:u,setupLightsView:d,pushLight:o,pushShadow:l}}function oS(i){let e=new WeakMap;function t(s,o=0){const l=e.get(s);let u;return l===void 0?(u=new Il(i),e.set(s,[u])):o>=l.length?(u=new Il(i),l.push(u)):u=l[o],u}function n(){e=new WeakMap}return{get:t,dispose:n}}class cS extends rr{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=rg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class lS extends rr{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const uS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,hS=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function dS(i,e,t){let n=new Lo;const s=new ze,o=new ze,l=new Pt,u=new cS({depthPacking:sg}),d=new lS,f={},m=t.maxTextureSize,g={[ii]:en,[en]:ii,[Hn]:Hn},x=new ri({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ze},radius:{value:4}},vertexShader:uS,fragmentShader:hS}),y=x.clone();y.defines.HORIZONTAL_PASS=1;const T=new cn;T.setAttribute("position",new fn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new Pn(T,x),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=$l;let _=this.type;this.render=function(P,O,X){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||P.length===0)return;const D=i.getRenderTarget(),E=i.getActiveCubeFace(),k=i.getActiveMipmapLevel(),te=i.state;te.setBlending(ti),te.buffers.color.setClear(1,1,1,1),te.buffers.depth.setTest(!0),te.setScissorTest(!1);const K=_!==zn&&this.type===zn,ee=_===zn&&this.type!==zn;for(let pe=0,ae=P.length;pe<ae;pe++){const Se=P[pe],re=Se.shadow;if(re===void 0){console.warn("THREE.WebGLShadowMap:",Se,"has no shadow.");continue}if(re.autoUpdate===!1&&re.needsUpdate===!1)continue;s.copy(re.mapSize);const Ae=re.getFrameExtents();if(s.multiply(Ae),o.copy(re.mapSize),(s.x>m||s.y>m)&&(s.x>m&&(o.x=Math.floor(m/Ae.x),s.x=o.x*Ae.x,re.mapSize.x=o.x),s.y>m&&(o.y=Math.floor(m/Ae.y),s.y=o.y*Ae.y,re.mapSize.y=o.y)),re.map===null||K===!0||ee===!0){const He=this.type!==zn?{minFilter:Sn,magFilter:Sn}:{};re.map!==null&&re.map.dispose(),re.map=new Ci(s.x,s.y,He),re.map.texture.name=Se.name+".shadowMap",re.camera.updateProjectionMatrix()}i.setRenderTarget(re.map),i.clear();const Pe=re.getViewportCount();for(let He=0;He<Pe;He++){const Ke=re.getViewport(He);l.set(o.x*Ke.x,o.y*Ke.y,o.x*Ke.z,o.y*Ke.w),te.viewport(l),re.updateMatrices(Se,He),n=re.getFrustum(),I(O,X,re.camera,Se,this.type)}re.isPointLightShadow!==!0&&this.type===zn&&N(re,X),re.needsUpdate=!1}_=this.type,S.needsUpdate=!1,i.setRenderTarget(D,E,k)};function N(P,O){const X=e.update(C);x.defines.VSM_SAMPLES!==P.blurSamples&&(x.defines.VSM_SAMPLES=P.blurSamples,y.defines.VSM_SAMPLES=P.blurSamples,x.needsUpdate=!0,y.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Ci(s.x,s.y)),x.uniforms.shadow_pass.value=P.map.texture,x.uniforms.resolution.value=P.mapSize,x.uniforms.radius.value=P.radius,i.setRenderTarget(P.mapPass),i.clear(),i.renderBufferDirect(O,null,X,x,C,null),y.uniforms.shadow_pass.value=P.mapPass.texture,y.uniforms.resolution.value=P.mapSize,y.uniforms.radius.value=P.radius,i.setRenderTarget(P.map),i.clear(),i.renderBufferDirect(O,null,X,y,C,null)}function L(P,O,X,D){let E=null;const k=X.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(k!==void 0)E=k;else if(E=X.isPointLight===!0?d:u,i.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0){const te=E.uuid,K=O.uuid;let ee=f[te];ee===void 0&&(ee={},f[te]=ee);let pe=ee[K];pe===void 0&&(pe=E.clone(),ee[K]=pe,O.addEventListener("dispose",Z)),E=pe}if(E.visible=O.visible,E.wireframe=O.wireframe,D===zn?E.side=O.shadowSide!==null?O.shadowSide:O.side:E.side=O.shadowSide!==null?O.shadowSide:g[O.side],E.alphaMap=O.alphaMap,E.alphaTest=O.alphaTest,E.map=O.map,E.clipShadows=O.clipShadows,E.clippingPlanes=O.clippingPlanes,E.clipIntersection=O.clipIntersection,E.displacementMap=O.displacementMap,E.displacementScale=O.displacementScale,E.displacementBias=O.displacementBias,E.wireframeLinewidth=O.wireframeLinewidth,E.linewidth=O.linewidth,X.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const te=i.properties.get(E);te.light=X}return E}function I(P,O,X,D,E){if(P.visible===!1)return;if(P.layers.test(O.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&E===zn)&&(!P.frustumCulled||n.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,P.matrixWorld);const K=e.update(P),ee=P.material;if(Array.isArray(ee)){const pe=K.groups;for(let ae=0,Se=pe.length;ae<Se;ae++){const re=pe[ae],Ae=ee[re.materialIndex];if(Ae&&Ae.visible){const Pe=L(P,Ae,D,E);P.onBeforeShadow(i,P,O,X,K,Pe,re),i.renderBufferDirect(X,null,K,Pe,P,re),P.onAfterShadow(i,P,O,X,K,Pe,re)}}}else if(ee.visible){const pe=L(P,ee,D,E);P.onBeforeShadow(i,P,O,X,K,pe,null),i.renderBufferDirect(X,null,K,pe,P,null),P.onAfterShadow(i,P,O,X,K,pe,null)}}const te=P.children;for(let K=0,ee=te.length;K<ee;K++)I(te[K],O,X,D,E)}function Z(P){P.target.removeEventListener("dispose",Z);for(const X in f){const D=f[X],E=P.target.uuid;E in D&&(D[E].dispose(),delete D[E])}}}const fS={[za]:Ha,[Ga]:Xa,[Va]:$a,[Zi]:Wa,[Ha]:za,[Xa]:Ga,[$a]:Va,[Wa]:Zi};function pS(i,e){function t(){let B=!1;const be=new Pt;let ie=null;const he=new Pt(0,0,0,0);return{setMask:function(Y){ie!==Y&&!B&&(i.colorMask(Y,Y,Y,Y),ie=Y)},setLocked:function(Y){B=Y},setClear:function(Y,j,$e,Tt,Rt){Rt===!0&&(Y*=Tt,j*=Tt,$e*=Tt),be.set(Y,j,$e,Tt),he.equals(be)===!1&&(i.clearColor(Y,j,$e,Tt),he.copy(be))},reset:function(){B=!1,ie=null,he.set(-1,0,0,0)}}}function n(){let B=!1,be=!1,ie=null,he=null,Y=null;return{setReversed:function(j){if(be!==j){const $e=e.get("EXT_clip_control");be?$e.clipControlEXT($e.LOWER_LEFT_EXT,$e.ZERO_TO_ONE_EXT):$e.clipControlEXT($e.LOWER_LEFT_EXT,$e.NEGATIVE_ONE_TO_ONE_EXT);const Tt=Y;Y=null,this.setClear(Tt)}be=j},getReversed:function(){return be},setTest:function(j){j?Ee(i.DEPTH_TEST):fe(i.DEPTH_TEST)},setMask:function(j){ie!==j&&!B&&(i.depthMask(j),ie=j)},setFunc:function(j){if(be&&(j=fS[j]),he!==j){switch(j){case za:i.depthFunc(i.NEVER);break;case Ha:i.depthFunc(i.ALWAYS);break;case Ga:i.depthFunc(i.LESS);break;case Zi:i.depthFunc(i.LEQUAL);break;case Va:i.depthFunc(i.EQUAL);break;case Wa:i.depthFunc(i.GEQUAL);break;case Xa:i.depthFunc(i.GREATER);break;case $a:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}he=j}},setLocked:function(j){B=j},setClear:function(j){Y!==j&&(be&&(j=1-j),i.clearDepth(j),Y=j)},reset:function(){B=!1,ie=null,he=null,Y=null,be=!1}}}function s(){let B=!1,be=null,ie=null,he=null,Y=null,j=null,$e=null,Tt=null,Rt=null;return{setTest:function(it){B||(it?Ee(i.STENCIL_TEST):fe(i.STENCIL_TEST))},setMask:function(it){be!==it&&!B&&(i.stencilMask(it),be=it)},setFunc:function(it,nn,Lt){(ie!==it||he!==nn||Y!==Lt)&&(i.stencilFunc(it,nn,Lt),ie=it,he=nn,Y=Lt)},setOp:function(it,nn,Lt){(j!==it||$e!==nn||Tt!==Lt)&&(i.stencilOp(it,nn,Lt),j=it,$e=nn,Tt=Lt)},setLocked:function(it){B=it},setClear:function(it){Rt!==it&&(i.clearStencil(it),Rt=it)},reset:function(){B=!1,be=null,ie=null,he=null,Y=null,j=null,$e=null,Tt=null,Rt=null}}}const o=new t,l=new n,u=new s,d=new WeakMap,f=new WeakMap;let m={},g={},x=new WeakMap,y=[],T=null,C=!1,S=null,_=null,N=null,L=null,I=null,Z=null,P=null,O=new st(0,0,0),X=0,D=!1,E=null,k=null,te=null,K=null,ee=null;const pe=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ae=!1,Se=0;const re=i.getParameter(i.VERSION);re.indexOf("WebGL")!==-1?(Se=parseFloat(/^WebGL (\d)/.exec(re)[1]),ae=Se>=1):re.indexOf("OpenGL ES")!==-1&&(Se=parseFloat(/^OpenGL ES (\d)/.exec(re)[1]),ae=Se>=2);let Ae=null,Pe={};const He=i.getParameter(i.SCISSOR_BOX),Ke=i.getParameter(i.VIEWPORT),ft=new Pt().fromArray(He),ne=new Pt().fromArray(Ke);function _e(B,be,ie,he){const Y=new Uint8Array(4),j=i.createTexture();i.bindTexture(B,j),i.texParameteri(B,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(B,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let $e=0;$e<ie;$e++)B===i.TEXTURE_3D||B===i.TEXTURE_2D_ARRAY?i.texImage3D(be,0,i.RGBA,1,1,he,0,i.RGBA,i.UNSIGNED_BYTE,Y):i.texImage2D(be+$e,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Y);return j}const De={};De[i.TEXTURE_2D]=_e(i.TEXTURE_2D,i.TEXTURE_2D,1),De[i.TEXTURE_CUBE_MAP]=_e(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),De[i.TEXTURE_2D_ARRAY]=_e(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),De[i.TEXTURE_3D]=_e(i.TEXTURE_3D,i.TEXTURE_3D,1,1),o.setClear(0,0,0,1),l.setClear(1),u.setClear(0),Ee(i.DEPTH_TEST),l.setFunc(Zi),at(!1),ot(Uc),Ee(i.CULL_FACE),H(ti);function Ee(B){m[B]!==!0&&(i.enable(B),m[B]=!0)}function fe(B){m[B]!==!1&&(i.disable(B),m[B]=!1)}function Me(B,be){return g[B]!==be?(i.bindFramebuffer(B,be),g[B]=be,B===i.DRAW_FRAMEBUFFER&&(g[i.FRAMEBUFFER]=be),B===i.FRAMEBUFFER&&(g[i.DRAW_FRAMEBUFFER]=be),!0):!1}function et(B,be){let ie=y,he=!1;if(B){ie=x.get(be),ie===void 0&&(ie=[],x.set(be,ie));const Y=B.textures;if(ie.length!==Y.length||ie[0]!==i.COLOR_ATTACHMENT0){for(let j=0,$e=Y.length;j<$e;j++)ie[j]=i.COLOR_ATTACHMENT0+j;ie.length=Y.length,he=!0}}else ie[0]!==i.BACK&&(ie[0]=i.BACK,he=!0);he&&i.drawBuffers(ie)}function Mt(B){return T!==B?(i.useProgram(B),T=B,!0):!1}const qe={[Ei]:i.FUNC_ADD,[I_]:i.FUNC_SUBTRACT,[D_]:i.FUNC_REVERSE_SUBTRACT};qe[L_]=i.MIN,qe[F_]=i.MAX;const Ct={[U_]:i.ZERO,[N_]:i.ONE,[O_]:i.SRC_COLOR,[ka]:i.SRC_ALPHA,[V_]:i.SRC_ALPHA_SATURATE,[H_]:i.DST_COLOR,[B_]:i.DST_ALPHA,[k_]:i.ONE_MINUS_SRC_COLOR,[Ba]:i.ONE_MINUS_SRC_ALPHA,[G_]:i.ONE_MINUS_DST_COLOR,[z_]:i.ONE_MINUS_DST_ALPHA,[W_]:i.CONSTANT_COLOR,[X_]:i.ONE_MINUS_CONSTANT_COLOR,[$_]:i.CONSTANT_ALPHA,[j_]:i.ONE_MINUS_CONSTANT_ALPHA};function H(B,be,ie,he,Y,j,$e,Tt,Rt,it){if(B===ti){C===!0&&(fe(i.BLEND),C=!1);return}if(C===!1&&(Ee(i.BLEND),C=!0),B!==P_){if(B!==S||it!==D){if((_!==Ei||I!==Ei)&&(i.blendEquation(i.FUNC_ADD),_=Ei,I=Ei),it)switch(B){case ji:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Nc:i.blendFunc(i.ONE,i.ONE);break;case Oc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case kc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case ji:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Nc:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Oc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case kc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}N=null,L=null,Z=null,P=null,O.set(0,0,0),X=0,S=B,D=it}return}Y=Y||be,j=j||ie,$e=$e||he,(be!==_||Y!==I)&&(i.blendEquationSeparate(qe[be],qe[Y]),_=be,I=Y),(ie!==N||he!==L||j!==Z||$e!==P)&&(i.blendFuncSeparate(Ct[ie],Ct[he],Ct[j],Ct[$e]),N=ie,L=he,Z=j,P=$e),(Tt.equals(O)===!1||Rt!==X)&&(i.blendColor(Tt.r,Tt.g,Tt.b,Rt),O.copy(Tt),X=Rt),S=B,D=!1}function jt(B,be){B.side===Hn?fe(i.CULL_FACE):Ee(i.CULL_FACE);let ie=B.side===en;be&&(ie=!ie),at(ie),B.blending===ji&&B.transparent===!1?H(ti):H(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),l.setFunc(B.depthFunc),l.setTest(B.depthTest),l.setMask(B.depthWrite),o.setMask(B.colorWrite);const he=B.stencilWrite;u.setTest(he),he&&(u.setMask(B.stencilWriteMask),u.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),u.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),pt(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?Ee(i.SAMPLE_ALPHA_TO_COVERAGE):fe(i.SAMPLE_ALPHA_TO_COVERAGE)}function at(B){E!==B&&(B?i.frontFace(i.CW):i.frontFace(i.CCW),E=B)}function ot(B){B!==A_?(Ee(i.CULL_FACE),B!==k&&(B===Uc?i.cullFace(i.BACK):B===C_?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):fe(i.CULL_FACE),k=B}function We(B){B!==te&&(ae&&i.lineWidth(B),te=B)}function pt(B,be,ie){B?(Ee(i.POLYGON_OFFSET_FILL),(K!==be||ee!==ie)&&(i.polygonOffset(be,ie),K=be,ee=ie)):fe(i.POLYGON_OFFSET_FILL)}function Ge(B){B?Ee(i.SCISSOR_TEST):fe(i.SCISSOR_TEST)}function F(B){B===void 0&&(B=i.TEXTURE0+pe-1),Ae!==B&&(i.activeTexture(B),Ae=B)}function A(B,be,ie){ie===void 0&&(Ae===null?ie=i.TEXTURE0+pe-1:ie=Ae);let he=Pe[ie];he===void 0&&(he={type:void 0,texture:void 0},Pe[ie]=he),(he.type!==B||he.texture!==be)&&(Ae!==ie&&(i.activeTexture(ie),Ae=ie),i.bindTexture(B,be||De[B]),he.type=B,he.texture=be)}function J(){const B=Pe[Ae];B!==void 0&&B.type!==void 0&&(i.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function de(){try{i.compressedTexImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function le(){try{i.compressedTexImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function se(){try{i.texSubImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Oe(){try{i.texSubImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ce(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Le(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function lt(){try{i.texStorage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ye(){try{i.texStorage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Fe(){try{i.texImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Xe(){try{i.texImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ye(B){ft.equals(B)===!1&&(i.scissor(B.x,B.y,B.z,B.w),ft.copy(B))}function Ue(B){ne.equals(B)===!1&&(i.viewport(B.x,B.y,B.z,B.w),ne.copy(B))}function rt(B,be){let ie=f.get(be);ie===void 0&&(ie=new WeakMap,f.set(be,ie));let he=ie.get(B);he===void 0&&(he=i.getUniformBlockIndex(be,B.name),ie.set(B,he))}function Ze(B,be){const he=f.get(be).get(B);d.get(be)!==he&&(i.uniformBlockBinding(be,he,B.__bindingPointIndex),d.set(be,he))}function xt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),l.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),m={},Ae=null,Pe={},g={},x=new WeakMap,y=[],T=null,C=!1,S=null,_=null,N=null,L=null,I=null,Z=null,P=null,O=new st(0,0,0),X=0,D=!1,E=null,k=null,te=null,K=null,ee=null,ft.set(0,0,i.canvas.width,i.canvas.height),ne.set(0,0,i.canvas.width,i.canvas.height),o.reset(),l.reset(),u.reset()}return{buffers:{color:o,depth:l,stencil:u},enable:Ee,disable:fe,bindFramebuffer:Me,drawBuffers:et,useProgram:Mt,setBlending:H,setMaterial:jt,setFlipSided:at,setCullFace:ot,setLineWidth:We,setPolygonOffset:pt,setScissorTest:Ge,activeTexture:F,bindTexture:A,unbindTexture:J,compressedTexImage2D:de,compressedTexImage3D:le,texImage2D:Fe,texImage3D:Xe,updateUBOMapping:rt,uniformBlockBinding:Ze,texStorage2D:lt,texStorage3D:ye,texSubImage2D:se,texSubImage3D:Oe,compressedTexSubImage2D:Ce,compressedTexSubImage3D:Le,scissor:Ye,viewport:Ue,reset:xt}}function Dl(i,e,t,n){const s=mS(n);switch(t){case Kl:return i*e;case eu:return i*e;case tu:return i*e*2;case nu:return i*e/s.components*s.byteLength;case Po:return i*e/s.components*s.byteLength;case iu:return i*e*2/s.components*s.byteLength;case Io:return i*e*2/s.components*s.byteLength;case Ql:return i*e*3/s.components*s.byteLength;case yn:return i*e*4/s.components*s.byteLength;case Do:return i*e*4/s.components*s.byteLength;case Ms:case Es:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ws:case bs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ka:case eo:return Math.max(i,16)*Math.max(e,8)/4;case Ja:case Qa:return Math.max(i,8)*Math.max(e,8)/2;case to:case no:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case io:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ro:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case so:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case ao:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case oo:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case co:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case lo:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case uo:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case ho:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case fo:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case po:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case mo:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case _o:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case go:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case vo:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Ts:case xo:case yo:return Math.ceil(i/4)*Math.ceil(e/4)*16;case ru:case So:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Mo:case Eo:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function mS(i){switch(i){case Xn:case ql:return{byteLength:1,components:1};case Sr:case Zl:case Mr:return{byteLength:2,components:1};case Co:case Ro:return{byteLength:2,components:4};case Ai:case Ao:case Gn:return{byteLength:4,components:1};case Jl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function _S(i,e,t,n,s,o,l){const u=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),f=new ze,m=new WeakMap;let g;const x=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(F,A){return y?new OffscreenCanvas(F,A):Ps("canvas")}function C(F,A,J){let de=1;const le=Ge(F);if((le.width>J||le.height>J)&&(de=J/Math.max(le.width,le.height)),de<1)if(typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&F instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&F instanceof ImageBitmap||typeof VideoFrame<"u"&&F instanceof VideoFrame){const se=Math.floor(de*le.width),Oe=Math.floor(de*le.height);g===void 0&&(g=T(se,Oe));const Ce=A?T(se,Oe):g;return Ce.width=se,Ce.height=Oe,Ce.getContext("2d").drawImage(F,0,0,se,Oe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+le.width+"x"+le.height+") to ("+se+"x"+Oe+")."),Ce}else return"data"in F&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+le.width+"x"+le.height+")."),F;return F}function S(F){return F.generateMipmaps}function _(F){i.generateMipmap(F)}function N(F){return F.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:F.isWebGL3DRenderTarget?i.TEXTURE_3D:F.isWebGLArrayRenderTarget||F.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function L(F,A,J,de,le=!1){if(F!==null){if(i[F]!==void 0)return i[F];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let se=A;if(A===i.RED&&(J===i.FLOAT&&(se=i.R32F),J===i.HALF_FLOAT&&(se=i.R16F),J===i.UNSIGNED_BYTE&&(se=i.R8)),A===i.RED_INTEGER&&(J===i.UNSIGNED_BYTE&&(se=i.R8UI),J===i.UNSIGNED_SHORT&&(se=i.R16UI),J===i.UNSIGNED_INT&&(se=i.R32UI),J===i.BYTE&&(se=i.R8I),J===i.SHORT&&(se=i.R16I),J===i.INT&&(se=i.R32I)),A===i.RG&&(J===i.FLOAT&&(se=i.RG32F),J===i.HALF_FLOAT&&(se=i.RG16F),J===i.UNSIGNED_BYTE&&(se=i.RG8)),A===i.RG_INTEGER&&(J===i.UNSIGNED_BYTE&&(se=i.RG8UI),J===i.UNSIGNED_SHORT&&(se=i.RG16UI),J===i.UNSIGNED_INT&&(se=i.RG32UI),J===i.BYTE&&(se=i.RG8I),J===i.SHORT&&(se=i.RG16I),J===i.INT&&(se=i.RG32I)),A===i.RGB_INTEGER&&(J===i.UNSIGNED_BYTE&&(se=i.RGB8UI),J===i.UNSIGNED_SHORT&&(se=i.RGB16UI),J===i.UNSIGNED_INT&&(se=i.RGB32UI),J===i.BYTE&&(se=i.RGB8I),J===i.SHORT&&(se=i.RGB16I),J===i.INT&&(se=i.RGB32I)),A===i.RGBA_INTEGER&&(J===i.UNSIGNED_BYTE&&(se=i.RGBA8UI),J===i.UNSIGNED_SHORT&&(se=i.RGBA16UI),J===i.UNSIGNED_INT&&(se=i.RGBA32UI),J===i.BYTE&&(se=i.RGBA8I),J===i.SHORT&&(se=i.RGBA16I),J===i.INT&&(se=i.RGBA32I)),A===i.RGB&&J===i.UNSIGNED_INT_5_9_9_9_REV&&(se=i.RGB9_E5),A===i.RGBA){const Oe=le?Fs:gt.getTransfer(de);J===i.FLOAT&&(se=i.RGBA32F),J===i.HALF_FLOAT&&(se=i.RGBA16F),J===i.UNSIGNED_BYTE&&(se=Oe===St?i.SRGB8_ALPHA8:i.RGBA8),J===i.UNSIGNED_SHORT_4_4_4_4&&(se=i.RGBA4),J===i.UNSIGNED_SHORT_5_5_5_1&&(se=i.RGB5_A1)}return(se===i.R16F||se===i.R32F||se===i.RG16F||se===i.RG32F||se===i.RGBA16F||se===i.RGBA32F)&&e.get("EXT_color_buffer_float"),se}function I(F,A){let J;return F?A===null||A===Ai||A===Qi?J=i.DEPTH24_STENCIL8:A===Gn?J=i.DEPTH32F_STENCIL8:A===Sr&&(J=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===Ai||A===Qi?J=i.DEPTH_COMPONENT24:A===Gn?J=i.DEPTH_COMPONENT32F:A===Sr&&(J=i.DEPTH_COMPONENT16),J}function Z(F,A){return S(F)===!0||F.isFramebufferTexture&&F.minFilter!==Sn&&F.minFilter!==Rn?Math.log2(Math.max(A.width,A.height))+1:F.mipmaps!==void 0&&F.mipmaps.length>0?F.mipmaps.length:F.isCompressedTexture&&Array.isArray(F.image)?A.mipmaps.length:1}function P(F){const A=F.target;A.removeEventListener("dispose",P),X(A),A.isVideoTexture&&m.delete(A)}function O(F){const A=F.target;A.removeEventListener("dispose",O),E(A)}function X(F){const A=n.get(F);if(A.__webglInit===void 0)return;const J=F.source,de=x.get(J);if(de){const le=de[A.__cacheKey];le.usedTimes--,le.usedTimes===0&&D(F),Object.keys(de).length===0&&x.delete(J)}n.remove(F)}function D(F){const A=n.get(F);i.deleteTexture(A.__webglTexture);const J=F.source,de=x.get(J);delete de[A.__cacheKey],l.memory.textures--}function E(F){const A=n.get(F);if(F.depthTexture&&(F.depthTexture.dispose(),n.remove(F.depthTexture)),F.isWebGLCubeRenderTarget)for(let de=0;de<6;de++){if(Array.isArray(A.__webglFramebuffer[de]))for(let le=0;le<A.__webglFramebuffer[de].length;le++)i.deleteFramebuffer(A.__webglFramebuffer[de][le]);else i.deleteFramebuffer(A.__webglFramebuffer[de]);A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer[de])}else{if(Array.isArray(A.__webglFramebuffer))for(let de=0;de<A.__webglFramebuffer.length;de++)i.deleteFramebuffer(A.__webglFramebuffer[de]);else i.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&i.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let de=0;de<A.__webglColorRenderbuffer.length;de++)A.__webglColorRenderbuffer[de]&&i.deleteRenderbuffer(A.__webglColorRenderbuffer[de]);A.__webglDepthRenderbuffer&&i.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const J=F.textures;for(let de=0,le=J.length;de<le;de++){const se=n.get(J[de]);se.__webglTexture&&(i.deleteTexture(se.__webglTexture),l.memory.textures--),n.remove(J[de])}n.remove(F)}let k=0;function te(){k=0}function K(){const F=k;return F>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+F+" texture units while this GPU supports only "+s.maxTextures),k+=1,F}function ee(F){const A=[];return A.push(F.wrapS),A.push(F.wrapT),A.push(F.wrapR||0),A.push(F.magFilter),A.push(F.minFilter),A.push(F.anisotropy),A.push(F.internalFormat),A.push(F.format),A.push(F.type),A.push(F.generateMipmaps),A.push(F.premultiplyAlpha),A.push(F.flipY),A.push(F.unpackAlignment),A.push(F.colorSpace),A.join()}function pe(F,A){const J=n.get(F);if(F.isVideoTexture&&We(F),F.isRenderTargetTexture===!1&&F.version>0&&J.__version!==F.version){const de=F.image;if(de===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(de.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ne(J,F,A);return}}t.bindTexture(i.TEXTURE_2D,J.__webglTexture,i.TEXTURE0+A)}function ae(F,A){const J=n.get(F);if(F.version>0&&J.__version!==F.version){ne(J,F,A);return}t.bindTexture(i.TEXTURE_2D_ARRAY,J.__webglTexture,i.TEXTURE0+A)}function Se(F,A){const J=n.get(F);if(F.version>0&&J.__version!==F.version){ne(J,F,A);return}t.bindTexture(i.TEXTURE_3D,J.__webglTexture,i.TEXTURE0+A)}function re(F,A){const J=n.get(F);if(F.version>0&&J.__version!==F.version){_e(J,F,A);return}t.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture,i.TEXTURE0+A)}const Ae={[qa]:i.REPEAT,[bi]:i.CLAMP_TO_EDGE,[Za]:i.MIRRORED_REPEAT},Pe={[Sn]:i.NEAREST,[ig]:i.NEAREST_MIPMAP_NEAREST,[Zr]:i.NEAREST_MIPMAP_LINEAR,[Rn]:i.LINEAR,[ta]:i.LINEAR_MIPMAP_NEAREST,[Ti]:i.LINEAR_MIPMAP_LINEAR},He={[og]:i.NEVER,[fg]:i.ALWAYS,[cg]:i.LESS,[au]:i.LEQUAL,[lg]:i.EQUAL,[dg]:i.GEQUAL,[ug]:i.GREATER,[hg]:i.NOTEQUAL};function Ke(F,A){if(A.type===Gn&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===Rn||A.magFilter===ta||A.magFilter===Zr||A.magFilter===Ti||A.minFilter===Rn||A.minFilter===ta||A.minFilter===Zr||A.minFilter===Ti)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(F,i.TEXTURE_WRAP_S,Ae[A.wrapS]),i.texParameteri(F,i.TEXTURE_WRAP_T,Ae[A.wrapT]),(F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY)&&i.texParameteri(F,i.TEXTURE_WRAP_R,Ae[A.wrapR]),i.texParameteri(F,i.TEXTURE_MAG_FILTER,Pe[A.magFilter]),i.texParameteri(F,i.TEXTURE_MIN_FILTER,Pe[A.minFilter]),A.compareFunction&&(i.texParameteri(F,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(F,i.TEXTURE_COMPARE_FUNC,He[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===Sn||A.minFilter!==Zr&&A.minFilter!==Ti||A.type===Gn&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||n.get(A).__currentAnisotropy){const J=e.get("EXT_texture_filter_anisotropic");i.texParameterf(F,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,s.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy}}}function ft(F,A){let J=!1;F.__webglInit===void 0&&(F.__webglInit=!0,A.addEventListener("dispose",P));const de=A.source;let le=x.get(de);le===void 0&&(le={},x.set(de,le));const se=ee(A);if(se!==F.__cacheKey){le[se]===void 0&&(le[se]={texture:i.createTexture(),usedTimes:0},l.memory.textures++,J=!0),le[se].usedTimes++;const Oe=le[F.__cacheKey];Oe!==void 0&&(le[F.__cacheKey].usedTimes--,Oe.usedTimes===0&&D(A)),F.__cacheKey=se,F.__webglTexture=le[se].texture}return J}function ne(F,A,J){let de=i.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(de=i.TEXTURE_2D_ARRAY),A.isData3DTexture&&(de=i.TEXTURE_3D);const le=ft(F,A),se=A.source;t.bindTexture(de,F.__webglTexture,i.TEXTURE0+J);const Oe=n.get(se);if(se.version!==Oe.__version||le===!0){t.activeTexture(i.TEXTURE0+J);const Ce=gt.getPrimaries(gt.workingColorSpace),Le=A.colorSpace===ei?null:gt.getPrimaries(A.colorSpace),lt=A.colorSpace===ei||Ce===Le?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,lt);let ye=C(A.image,!1,s.maxTextureSize);ye=pt(A,ye);const Fe=o.convert(A.format,A.colorSpace),Xe=o.convert(A.type);let Ye=L(A.internalFormat,Fe,Xe,A.colorSpace,A.isVideoTexture);Ke(de,A);let Ue;const rt=A.mipmaps,Ze=A.isVideoTexture!==!0,xt=Oe.__version===void 0||le===!0,B=se.dataReady,be=Z(A,ye);if(A.isDepthTexture)Ye=I(A.format===er,A.type),xt&&(Ze?t.texStorage2D(i.TEXTURE_2D,1,Ye,ye.width,ye.height):t.texImage2D(i.TEXTURE_2D,0,Ye,ye.width,ye.height,0,Fe,Xe,null));else if(A.isDataTexture)if(rt.length>0){Ze&&xt&&t.texStorage2D(i.TEXTURE_2D,be,Ye,rt[0].width,rt[0].height);for(let ie=0,he=rt.length;ie<he;ie++)Ue=rt[ie],Ze?B&&t.texSubImage2D(i.TEXTURE_2D,ie,0,0,Ue.width,Ue.height,Fe,Xe,Ue.data):t.texImage2D(i.TEXTURE_2D,ie,Ye,Ue.width,Ue.height,0,Fe,Xe,Ue.data);A.generateMipmaps=!1}else Ze?(xt&&t.texStorage2D(i.TEXTURE_2D,be,Ye,ye.width,ye.height),B&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ye.width,ye.height,Fe,Xe,ye.data)):t.texImage2D(i.TEXTURE_2D,0,Ye,ye.width,ye.height,0,Fe,Xe,ye.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){Ze&&xt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,be,Ye,rt[0].width,rt[0].height,ye.depth);for(let ie=0,he=rt.length;ie<he;ie++)if(Ue=rt[ie],A.format!==yn)if(Fe!==null)if(Ze){if(B)if(A.layerUpdates.size>0){const Y=Dl(Ue.width,Ue.height,A.format,A.type);for(const j of A.layerUpdates){const $e=Ue.data.subarray(j*Y/Ue.data.BYTES_PER_ELEMENT,(j+1)*Y/Ue.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ie,0,0,j,Ue.width,Ue.height,1,Fe,$e)}A.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ie,0,0,0,Ue.width,Ue.height,ye.depth,Fe,Ue.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ie,Ye,Ue.width,Ue.height,ye.depth,0,Ue.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ze?B&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ie,0,0,0,Ue.width,Ue.height,ye.depth,Fe,Xe,Ue.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ie,Ye,Ue.width,Ue.height,ye.depth,0,Fe,Xe,Ue.data)}else{Ze&&xt&&t.texStorage2D(i.TEXTURE_2D,be,Ye,rt[0].width,rt[0].height);for(let ie=0,he=rt.length;ie<he;ie++)Ue=rt[ie],A.format!==yn?Fe!==null?Ze?B&&t.compressedTexSubImage2D(i.TEXTURE_2D,ie,0,0,Ue.width,Ue.height,Fe,Ue.data):t.compressedTexImage2D(i.TEXTURE_2D,ie,Ye,Ue.width,Ue.height,0,Ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ze?B&&t.texSubImage2D(i.TEXTURE_2D,ie,0,0,Ue.width,Ue.height,Fe,Xe,Ue.data):t.texImage2D(i.TEXTURE_2D,ie,Ye,Ue.width,Ue.height,0,Fe,Xe,Ue.data)}else if(A.isDataArrayTexture)if(Ze){if(xt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,be,Ye,ye.width,ye.height,ye.depth),B)if(A.layerUpdates.size>0){const ie=Dl(ye.width,ye.height,A.format,A.type);for(const he of A.layerUpdates){const Y=ye.data.subarray(he*ie/ye.data.BYTES_PER_ELEMENT,(he+1)*ie/ye.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,he,ye.width,ye.height,1,Fe,Xe,Y)}A.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ye.width,ye.height,ye.depth,Fe,Xe,ye.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ye,ye.width,ye.height,ye.depth,0,Fe,Xe,ye.data);else if(A.isData3DTexture)Ze?(xt&&t.texStorage3D(i.TEXTURE_3D,be,Ye,ye.width,ye.height,ye.depth),B&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ye.width,ye.height,ye.depth,Fe,Xe,ye.data)):t.texImage3D(i.TEXTURE_3D,0,Ye,ye.width,ye.height,ye.depth,0,Fe,Xe,ye.data);else if(A.isFramebufferTexture){if(xt)if(Ze)t.texStorage2D(i.TEXTURE_2D,be,Ye,ye.width,ye.height);else{let ie=ye.width,he=ye.height;for(let Y=0;Y<be;Y++)t.texImage2D(i.TEXTURE_2D,Y,Ye,ie,he,0,Fe,Xe,null),ie>>=1,he>>=1}}else if(rt.length>0){if(Ze&&xt){const ie=Ge(rt[0]);t.texStorage2D(i.TEXTURE_2D,be,Ye,ie.width,ie.height)}for(let ie=0,he=rt.length;ie<he;ie++)Ue=rt[ie],Ze?B&&t.texSubImage2D(i.TEXTURE_2D,ie,0,0,Fe,Xe,Ue):t.texImage2D(i.TEXTURE_2D,ie,Ye,Fe,Xe,Ue);A.generateMipmaps=!1}else if(Ze){if(xt){const ie=Ge(ye);t.texStorage2D(i.TEXTURE_2D,be,Ye,ie.width,ie.height)}B&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Fe,Xe,ye)}else t.texImage2D(i.TEXTURE_2D,0,Ye,Fe,Xe,ye);S(A)&&_(de),Oe.__version=se.version,A.onUpdate&&A.onUpdate(A)}F.__version=A.version}function _e(F,A,J){if(A.image.length!==6)return;const de=ft(F,A),le=A.source;t.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+J);const se=n.get(le);if(le.version!==se.__version||de===!0){t.activeTexture(i.TEXTURE0+J);const Oe=gt.getPrimaries(gt.workingColorSpace),Ce=A.colorSpace===ei?null:gt.getPrimaries(A.colorSpace),Le=A.colorSpace===ei||Oe===Ce?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le);const lt=A.isCompressedTexture||A.image[0].isCompressedTexture,ye=A.image[0]&&A.image[0].isDataTexture,Fe=[];for(let he=0;he<6;he++)!lt&&!ye?Fe[he]=C(A.image[he],!0,s.maxCubemapSize):Fe[he]=ye?A.image[he].image:A.image[he],Fe[he]=pt(A,Fe[he]);const Xe=Fe[0],Ye=o.convert(A.format,A.colorSpace),Ue=o.convert(A.type),rt=L(A.internalFormat,Ye,Ue,A.colorSpace),Ze=A.isVideoTexture!==!0,xt=se.__version===void 0||de===!0,B=le.dataReady;let be=Z(A,Xe);Ke(i.TEXTURE_CUBE_MAP,A);let ie;if(lt){Ze&&xt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,be,rt,Xe.width,Xe.height);for(let he=0;he<6;he++){ie=Fe[he].mipmaps;for(let Y=0;Y<ie.length;Y++){const j=ie[Y];A.format!==yn?Ye!==null?Ze?B&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,Y,0,0,j.width,j.height,Ye,j.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,Y,rt,j.width,j.height,0,j.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ze?B&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,Y,0,0,j.width,j.height,Ye,Ue,j.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,Y,rt,j.width,j.height,0,Ye,Ue,j.data)}}}else{if(ie=A.mipmaps,Ze&&xt){ie.length>0&&be++;const he=Ge(Fe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,be,rt,he.width,he.height)}for(let he=0;he<6;he++)if(ye){Ze?B&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,Fe[he].width,Fe[he].height,Ye,Ue,Fe[he].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,rt,Fe[he].width,Fe[he].height,0,Ye,Ue,Fe[he].data);for(let Y=0;Y<ie.length;Y++){const $e=ie[Y].image[he].image;Ze?B&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,Y+1,0,0,$e.width,$e.height,Ye,Ue,$e.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,Y+1,rt,$e.width,$e.height,0,Ye,Ue,$e.data)}}else{Ze?B&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,Ye,Ue,Fe[he]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,rt,Ye,Ue,Fe[he]);for(let Y=0;Y<ie.length;Y++){const j=ie[Y];Ze?B&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,Y+1,0,0,Ye,Ue,j.image[he]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,Y+1,rt,Ye,Ue,j.image[he])}}}S(A)&&_(i.TEXTURE_CUBE_MAP),se.__version=le.version,A.onUpdate&&A.onUpdate(A)}F.__version=A.version}function De(F,A,J,de,le,se){const Oe=o.convert(J.format,J.colorSpace),Ce=o.convert(J.type),Le=L(J.internalFormat,Oe,Ce,J.colorSpace),lt=n.get(A),ye=n.get(J);if(ye.__renderTarget=A,!lt.__hasExternalTextures){const Fe=Math.max(1,A.width>>se),Xe=Math.max(1,A.height>>se);le===i.TEXTURE_3D||le===i.TEXTURE_2D_ARRAY?t.texImage3D(le,se,Le,Fe,Xe,A.depth,0,Oe,Ce,null):t.texImage2D(le,se,Le,Fe,Xe,0,Oe,Ce,null)}t.bindFramebuffer(i.FRAMEBUFFER,F),ot(A)?u.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,de,le,ye.__webglTexture,0,at(A)):(le===i.TEXTURE_2D||le>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&le<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,de,le,ye.__webglTexture,se),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ee(F,A,J){if(i.bindRenderbuffer(i.RENDERBUFFER,F),A.depthBuffer){const de=A.depthTexture,le=de&&de.isDepthTexture?de.type:null,se=I(A.stencilBuffer,le),Oe=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ce=at(A);ot(A)?u.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ce,se,A.width,A.height):J?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ce,se,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,se,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Oe,i.RENDERBUFFER,F)}else{const de=A.textures;for(let le=0;le<de.length;le++){const se=de[le],Oe=o.convert(se.format,se.colorSpace),Ce=o.convert(se.type),Le=L(se.internalFormat,Oe,Ce,se.colorSpace),lt=at(A);J&&ot(A)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,lt,Le,A.width,A.height):ot(A)?u.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,lt,Le,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,Le,A.width,A.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function fe(F,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,F),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const de=n.get(A.depthTexture);de.__renderTarget=A,(!de.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),pe(A.depthTexture,0);const le=de.__webglTexture,se=at(A);if(A.depthTexture.format===Yi)ot(A)?u.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,le,0,se):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,le,0);else if(A.depthTexture.format===er)ot(A)?u.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,le,0,se):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,le,0);else throw new Error("Unknown depthTexture format")}function Me(F){const A=n.get(F),J=F.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==F.depthTexture){const de=F.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),de){const le=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,de.removeEventListener("dispose",le)};de.addEventListener("dispose",le),A.__depthDisposeCallback=le}A.__boundDepthTexture=de}if(F.depthTexture&&!A.__autoAllocateDepthBuffer){if(J)throw new Error("target.depthTexture not supported in Cube render targets");fe(A.__webglFramebuffer,F)}else if(J){A.__webglDepthbuffer=[];for(let de=0;de<6;de++)if(t.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer[de]),A.__webglDepthbuffer[de]===void 0)A.__webglDepthbuffer[de]=i.createRenderbuffer(),Ee(A.__webglDepthbuffer[de],F,!1);else{const le=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,se=A.__webglDepthbuffer[de];i.bindRenderbuffer(i.RENDERBUFFER,se),i.framebufferRenderbuffer(i.FRAMEBUFFER,le,i.RENDERBUFFER,se)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=i.createRenderbuffer(),Ee(A.__webglDepthbuffer,F,!1);else{const de=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,le=A.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,le),i.framebufferRenderbuffer(i.FRAMEBUFFER,de,i.RENDERBUFFER,le)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function et(F,A,J){const de=n.get(F);A!==void 0&&De(de.__webglFramebuffer,F,F.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),J!==void 0&&Me(F)}function Mt(F){const A=F.texture,J=n.get(F),de=n.get(A);F.addEventListener("dispose",O);const le=F.textures,se=F.isWebGLCubeRenderTarget===!0,Oe=le.length>1;if(Oe||(de.__webglTexture===void 0&&(de.__webglTexture=i.createTexture()),de.__version=A.version,l.memory.textures++),se){J.__webglFramebuffer=[];for(let Ce=0;Ce<6;Ce++)if(A.mipmaps&&A.mipmaps.length>0){J.__webglFramebuffer[Ce]=[];for(let Le=0;Le<A.mipmaps.length;Le++)J.__webglFramebuffer[Ce][Le]=i.createFramebuffer()}else J.__webglFramebuffer[Ce]=i.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){J.__webglFramebuffer=[];for(let Ce=0;Ce<A.mipmaps.length;Ce++)J.__webglFramebuffer[Ce]=i.createFramebuffer()}else J.__webglFramebuffer=i.createFramebuffer();if(Oe)for(let Ce=0,Le=le.length;Ce<Le;Ce++){const lt=n.get(le[Ce]);lt.__webglTexture===void 0&&(lt.__webglTexture=i.createTexture(),l.memory.textures++)}if(F.samples>0&&ot(F)===!1){J.__webglMultisampledFramebuffer=i.createFramebuffer(),J.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let Ce=0;Ce<le.length;Ce++){const Le=le[Ce];J.__webglColorRenderbuffer[Ce]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,J.__webglColorRenderbuffer[Ce]);const lt=o.convert(Le.format,Le.colorSpace),ye=o.convert(Le.type),Fe=L(Le.internalFormat,lt,ye,Le.colorSpace,F.isXRRenderTarget===!0),Xe=at(F);i.renderbufferStorageMultisample(i.RENDERBUFFER,Xe,Fe,F.width,F.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ce,i.RENDERBUFFER,J.__webglColorRenderbuffer[Ce])}i.bindRenderbuffer(i.RENDERBUFFER,null),F.depthBuffer&&(J.__webglDepthRenderbuffer=i.createRenderbuffer(),Ee(J.__webglDepthRenderbuffer,F,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(se){t.bindTexture(i.TEXTURE_CUBE_MAP,de.__webglTexture),Ke(i.TEXTURE_CUBE_MAP,A);for(let Ce=0;Ce<6;Ce++)if(A.mipmaps&&A.mipmaps.length>0)for(let Le=0;Le<A.mipmaps.length;Le++)De(J.__webglFramebuffer[Ce][Le],F,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,Le);else De(J.__webglFramebuffer[Ce],F,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0);S(A)&&_(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Oe){for(let Ce=0,Le=le.length;Ce<Le;Ce++){const lt=le[Ce],ye=n.get(lt);t.bindTexture(i.TEXTURE_2D,ye.__webglTexture),Ke(i.TEXTURE_2D,lt),De(J.__webglFramebuffer,F,lt,i.COLOR_ATTACHMENT0+Ce,i.TEXTURE_2D,0),S(lt)&&_(i.TEXTURE_2D)}t.unbindTexture()}else{let Ce=i.TEXTURE_2D;if((F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(Ce=F.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Ce,de.__webglTexture),Ke(Ce,A),A.mipmaps&&A.mipmaps.length>0)for(let Le=0;Le<A.mipmaps.length;Le++)De(J.__webglFramebuffer[Le],F,A,i.COLOR_ATTACHMENT0,Ce,Le);else De(J.__webglFramebuffer,F,A,i.COLOR_ATTACHMENT0,Ce,0);S(A)&&_(Ce),t.unbindTexture()}F.depthBuffer&&Me(F)}function qe(F){const A=F.textures;for(let J=0,de=A.length;J<de;J++){const le=A[J];if(S(le)){const se=N(F),Oe=n.get(le).__webglTexture;t.bindTexture(se,Oe),_(se),t.unbindTexture()}}}const Ct=[],H=[];function jt(F){if(F.samples>0){if(ot(F)===!1){const A=F.textures,J=F.width,de=F.height;let le=i.COLOR_BUFFER_BIT;const se=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Oe=n.get(F),Ce=A.length>1;if(Ce)for(let Le=0;Le<A.length;Le++)t.bindFramebuffer(i.FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Le,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Oe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Le,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Oe.__webglFramebuffer);for(let Le=0;Le<A.length;Le++){if(F.resolveDepthBuffer&&(F.depthBuffer&&(le|=i.DEPTH_BUFFER_BIT),F.stencilBuffer&&F.resolveStencilBuffer&&(le|=i.STENCIL_BUFFER_BIT)),Ce){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Oe.__webglColorRenderbuffer[Le]);const lt=n.get(A[Le]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,lt,0)}i.blitFramebuffer(0,0,J,de,0,0,J,de,le,i.NEAREST),d===!0&&(Ct.length=0,H.length=0,Ct.push(i.COLOR_ATTACHMENT0+Le),F.depthBuffer&&F.resolveDepthBuffer===!1&&(Ct.push(se),H.push(se),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,H)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ct))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Ce)for(let Le=0;Le<A.length;Le++){t.bindFramebuffer(i.FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Le,i.RENDERBUFFER,Oe.__webglColorRenderbuffer[Le]);const lt=n.get(A[Le]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Oe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Le,i.TEXTURE_2D,lt,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Oe.__webglMultisampledFramebuffer)}else if(F.depthBuffer&&F.resolveDepthBuffer===!1&&d){const A=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[A])}}}function at(F){return Math.min(s.maxSamples,F.samples)}function ot(F){const A=n.get(F);return F.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function We(F){const A=l.render.frame;m.get(F)!==A&&(m.set(F,A),F.update())}function pt(F,A){const J=F.colorSpace,de=F.format,le=F.type;return F.isCompressedTexture===!0||F.isVideoTexture===!0||J!==nr&&J!==ei&&(gt.getTransfer(J)===St?(de!==yn||le!==Xn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",J)),A}function Ge(F){return typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement?(f.width=F.naturalWidth||F.width,f.height=F.naturalHeight||F.height):typeof VideoFrame<"u"&&F instanceof VideoFrame?(f.width=F.displayWidth,f.height=F.displayHeight):(f.width=F.width,f.height=F.height),f}this.allocateTextureUnit=K,this.resetTextureUnits=te,this.setTexture2D=pe,this.setTexture2DArray=ae,this.setTexture3D=Se,this.setTextureCube=re,this.rebindTextures=et,this.setupRenderTarget=Mt,this.updateRenderTargetMipmap=qe,this.updateMultisampleRenderTarget=jt,this.setupDepthRenderbuffer=Me,this.setupFrameBufferTexture=De,this.useMultisampledRTT=ot}function gS(i,e){function t(n,s=ei){let o;const l=gt.getTransfer(s);if(n===Xn)return i.UNSIGNED_BYTE;if(n===Co)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ro)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Jl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ql)return i.BYTE;if(n===Zl)return i.SHORT;if(n===Sr)return i.UNSIGNED_SHORT;if(n===Ao)return i.INT;if(n===Ai)return i.UNSIGNED_INT;if(n===Gn)return i.FLOAT;if(n===Mr)return i.HALF_FLOAT;if(n===Kl)return i.ALPHA;if(n===Ql)return i.RGB;if(n===yn)return i.RGBA;if(n===eu)return i.LUMINANCE;if(n===tu)return i.LUMINANCE_ALPHA;if(n===Yi)return i.DEPTH_COMPONENT;if(n===er)return i.DEPTH_STENCIL;if(n===nu)return i.RED;if(n===Po)return i.RED_INTEGER;if(n===iu)return i.RG;if(n===Io)return i.RG_INTEGER;if(n===Do)return i.RGBA_INTEGER;if(n===Ms||n===Es||n===ws||n===bs)if(l===St)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===Ms)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Es)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ws)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===bs)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===Ms)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Es)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ws)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===bs)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ja||n===Ka||n===Qa||n===eo)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===Ja)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ka)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Qa)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===eo)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===to||n===no||n===io)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(n===to||n===no)return l===St?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===io)return l===St?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ro||n===so||n===ao||n===oo||n===co||n===lo||n===uo||n===ho||n===fo||n===po||n===mo||n===_o||n===go||n===vo)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(n===ro)return l===St?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===so)return l===St?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ao)return l===St?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===oo)return l===St?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===co)return l===St?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===lo)return l===St?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===uo)return l===St?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ho)return l===St?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===fo)return l===St?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===po)return l===St?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===mo)return l===St?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===_o)return l===St?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===go)return l===St?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===vo)return l===St?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ts||n===xo||n===yo)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(n===Ts)return l===St?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===xo)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===yo)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ru||n===So||n===Mo||n===Eo)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(n===Ts)return o.COMPRESSED_RED_RGTC1_EXT;if(n===So)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Mo)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Eo)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Qi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class vS extends dn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class gs extends zt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const xS={type:"move"};class Pa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new gs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new gs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new gs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,o=null,l=null;const u=this._targetRay,d=this._grip,f=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(f&&e.hand){l=!0;for(const C of e.hand.values()){const S=t.getJointPose(C,n),_=this._getHandJoint(f,C);S!==null&&(_.matrix.fromArray(S.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=S.radius),_.visible=S!==null}const m=f.joints["index-finger-tip"],g=f.joints["thumb-tip"],x=m.position.distanceTo(g.position),y=.02,T=.005;f.inputState.pinching&&x>y+T?(f.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!f.inputState.pinching&&x<=y-T&&(f.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,n),o!==null&&(d.matrix.fromArray(o.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,o.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(o.linearVelocity)):d.hasLinearVelocity=!1,o.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(o.angularVelocity)):d.hasAngularVelocity=!1));u!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&o!==null&&(s=o),s!==null&&(u.matrix.fromArray(s.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,s.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(s.linearVelocity)):u.hasLinearVelocity=!1,s.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(s.angularVelocity)):u.hasAngularVelocity=!1,this.dispatchEvent(xS)))}return u!==null&&(u.visible=s!==null),d!==null&&(d.visible=o!==null),f!==null&&(f.visible=l!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new gs;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const yS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,SS=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class MS{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const s=new tn,o=e.properties.get(s);o.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new ri({vertexShader:yS,fragmentShader:SS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Pn(new Tr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ES extends ir{constructor(e,t){super();const n=this;let s=null,o=1,l=null,u="local-floor",d=1,f=null,m=null,g=null,x=null,y=null,T=null;const C=new MS,S=t.getContextAttributes();let _=null,N=null;const L=[],I=[],Z=new ze;let P=null;const O=new dn;O.viewport=new Pt;const X=new dn;X.viewport=new Pt;const D=[O,X],E=new vS;let k=null,te=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let _e=L[ne];return _e===void 0&&(_e=new Pa,L[ne]=_e),_e.getTargetRaySpace()},this.getControllerGrip=function(ne){let _e=L[ne];return _e===void 0&&(_e=new Pa,L[ne]=_e),_e.getGripSpace()},this.getHand=function(ne){let _e=L[ne];return _e===void 0&&(_e=new Pa,L[ne]=_e),_e.getHandSpace()};function K(ne){const _e=I.indexOf(ne.inputSource);if(_e===-1)return;const De=L[_e];De!==void 0&&(De.update(ne.inputSource,ne.frame,f||l),De.dispatchEvent({type:ne.type,data:ne.inputSource}))}function ee(){s.removeEventListener("select",K),s.removeEventListener("selectstart",K),s.removeEventListener("selectend",K),s.removeEventListener("squeeze",K),s.removeEventListener("squeezestart",K),s.removeEventListener("squeezeend",K),s.removeEventListener("end",ee),s.removeEventListener("inputsourceschange",pe);for(let ne=0;ne<L.length;ne++){const _e=I[ne];_e!==null&&(I[ne]=null,L[ne].disconnect(_e))}k=null,te=null,C.reset(),e.setRenderTarget(_),y=null,x=null,g=null,s=null,N=null,ft.stop(),n.isPresenting=!1,e.setPixelRatio(P),e.setSize(Z.width,Z.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){o=ne,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){u=ne,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return f||l},this.setReferenceSpace=function(ne){f=ne},this.getBaseLayer=function(){return x!==null?x:y},this.getBinding=function(){return g},this.getFrame=function(){return T},this.getSession=function(){return s},this.setSession=async function(ne){if(s=ne,s!==null){if(_=e.getRenderTarget(),s.addEventListener("select",K),s.addEventListener("selectstart",K),s.addEventListener("selectend",K),s.addEventListener("squeeze",K),s.addEventListener("squeezestart",K),s.addEventListener("squeezeend",K),s.addEventListener("end",ee),s.addEventListener("inputsourceschange",pe),S.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(Z),s.renderState.layers===void 0){const _e={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:o};y=new XRWebGLLayer(s,t,_e),s.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),N=new Ci(y.framebufferWidth,y.framebufferHeight,{format:yn,type:Xn,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil})}else{let _e=null,De=null,Ee=null;S.depth&&(Ee=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,_e=S.stencil?er:Yi,De=S.stencil?Qi:Ai);const fe={colorFormat:t.RGBA8,depthFormat:Ee,scaleFactor:o};g=new XRWebGLBinding(s,t),x=g.createProjectionLayer(fe),s.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),N=new Ci(x.textureWidth,x.textureHeight,{format:yn,type:Xn,depthTexture:new Su(x.textureWidth,x.textureHeight,De,void 0,void 0,void 0,void 0,void 0,void 0,_e),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1})}N.isXRRenderTarget=!0,this.setFoveation(d),f=null,l=await s.requestReferenceSpace(u),ft.setContext(s),ft.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return C.getDepthTexture()};function pe(ne){for(let _e=0;_e<ne.removed.length;_e++){const De=ne.removed[_e],Ee=I.indexOf(De);Ee>=0&&(I[Ee]=null,L[Ee].disconnect(De))}for(let _e=0;_e<ne.added.length;_e++){const De=ne.added[_e];let Ee=I.indexOf(De);if(Ee===-1){for(let Me=0;Me<L.length;Me++)if(Me>=I.length){I.push(De),Ee=Me;break}else if(I[Me]===null){I[Me]=De,Ee=Me;break}if(Ee===-1)break}const fe=L[Ee];fe&&fe.connect(De)}}const ae=new z,Se=new z;function re(ne,_e,De){ae.setFromMatrixPosition(_e.matrixWorld),Se.setFromMatrixPosition(De.matrixWorld);const Ee=ae.distanceTo(Se),fe=_e.projectionMatrix.elements,Me=De.projectionMatrix.elements,et=fe[14]/(fe[10]-1),Mt=fe[14]/(fe[10]+1),qe=(fe[9]+1)/fe[5],Ct=(fe[9]-1)/fe[5],H=(fe[8]-1)/fe[0],jt=(Me[8]+1)/Me[0],at=et*H,ot=et*jt,We=Ee/(-H+jt),pt=We*-H;if(_e.matrixWorld.decompose(ne.position,ne.quaternion,ne.scale),ne.translateX(pt),ne.translateZ(We),ne.matrixWorld.compose(ne.position,ne.quaternion,ne.scale),ne.matrixWorldInverse.copy(ne.matrixWorld).invert(),fe[10]===-1)ne.projectionMatrix.copy(_e.projectionMatrix),ne.projectionMatrixInverse.copy(_e.projectionMatrixInverse);else{const Ge=et+We,F=Mt+We,A=at-pt,J=ot+(Ee-pt),de=qe*Mt/F*Ge,le=Ct*Mt/F*Ge;ne.projectionMatrix.makePerspective(A,J,de,le,Ge,F),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert()}}function Ae(ne,_e){_e===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(_e.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(s===null)return;let _e=ne.near,De=ne.far;C.texture!==null&&(C.depthNear>0&&(_e=C.depthNear),C.depthFar>0&&(De=C.depthFar)),E.near=X.near=O.near=_e,E.far=X.far=O.far=De,(k!==E.near||te!==E.far)&&(s.updateRenderState({depthNear:E.near,depthFar:E.far}),k=E.near,te=E.far),O.layers.mask=ne.layers.mask|2,X.layers.mask=ne.layers.mask|4,E.layers.mask=O.layers.mask|X.layers.mask;const Ee=ne.parent,fe=E.cameras;Ae(E,Ee);for(let Me=0;Me<fe.length;Me++)Ae(fe[Me],Ee);fe.length===2?re(E,O,X):E.projectionMatrix.copy(O.projectionMatrix),Pe(ne,E,Ee)};function Pe(ne,_e,De){De===null?ne.matrix.copy(_e.matrixWorld):(ne.matrix.copy(De.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(_e.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0),ne.projectionMatrix.copy(_e.projectionMatrix),ne.projectionMatrixInverse.copy(_e.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=wo*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(x===null&&y===null))return d},this.setFoveation=function(ne){d=ne,x!==null&&(x.fixedFoveation=ne),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=ne)},this.hasDepthSensing=function(){return C.texture!==null},this.getDepthSensingMesh=function(){return C.getMesh(E)};let He=null;function Ke(ne,_e){if(m=_e.getViewerPose(f||l),T=_e,m!==null){const De=m.views;y!==null&&(e.setRenderTargetFramebuffer(N,y.framebuffer),e.setRenderTarget(N));let Ee=!1;De.length!==E.cameras.length&&(E.cameras.length=0,Ee=!0);for(let Me=0;Me<De.length;Me++){const et=De[Me];let Mt=null;if(y!==null)Mt=y.getViewport(et);else{const Ct=g.getViewSubImage(x,et);Mt=Ct.viewport,Me===0&&(e.setRenderTargetTextures(N,Ct.colorTexture,x.ignoreDepthValues?void 0:Ct.depthStencilTexture),e.setRenderTarget(N))}let qe=D[Me];qe===void 0&&(qe=new dn,qe.layers.enable(Me),qe.viewport=new Pt,D[Me]=qe),qe.matrix.fromArray(et.transform.matrix),qe.matrix.decompose(qe.position,qe.quaternion,qe.scale),qe.projectionMatrix.fromArray(et.projectionMatrix),qe.projectionMatrixInverse.copy(qe.projectionMatrix).invert(),qe.viewport.set(Mt.x,Mt.y,Mt.width,Mt.height),Me===0&&(E.matrix.copy(qe.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),Ee===!0&&E.cameras.push(qe)}const fe=s.enabledFeatures;if(fe&&fe.includes("depth-sensing")){const Me=g.getDepthInformation(De[0]);Me&&Me.isValid&&Me.texture&&C.init(e,Me,s.renderState)}}for(let De=0;De<L.length;De++){const Ee=I[De],fe=L[De];Ee!==null&&fe!==void 0&&fe.update(Ee,_e,f||l)}He&&He(ne,_e),_e.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:_e}),T=null}const ft=new xu;ft.setAnimationLoop(Ke),this.setAnimationLoop=function(ne){He=ne},this.dispose=function(){}}}const xi=new In,wS=new At;function bS(i,e){function t(S,_){S.matrixAutoUpdate===!0&&S.updateMatrix(),_.value.copy(S.matrix)}function n(S,_){_.color.getRGB(S.fogColor.value,_u(i)),_.isFog?(S.fogNear.value=_.near,S.fogFar.value=_.far):_.isFogExp2&&(S.fogDensity.value=_.density)}function s(S,_,N,L,I){_.isMeshBasicMaterial||_.isMeshLambertMaterial?o(S,_):_.isMeshToonMaterial?(o(S,_),g(S,_)):_.isMeshPhongMaterial?(o(S,_),m(S,_)):_.isMeshStandardMaterial?(o(S,_),x(S,_),_.isMeshPhysicalMaterial&&y(S,_,I)):_.isMeshMatcapMaterial?(o(S,_),T(S,_)):_.isMeshDepthMaterial?o(S,_):_.isMeshDistanceMaterial?(o(S,_),C(S,_)):_.isMeshNormalMaterial?o(S,_):_.isLineBasicMaterial?(l(S,_),_.isLineDashedMaterial&&u(S,_)):_.isPointsMaterial?d(S,_,N,L):_.isSpriteMaterial?f(S,_):_.isShadowMaterial?(S.color.value.copy(_.color),S.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function o(S,_){S.opacity.value=_.opacity,_.color&&S.diffuse.value.copy(_.color),_.emissive&&S.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(S.map.value=_.map,t(_.map,S.mapTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,t(_.alphaMap,S.alphaMapTransform)),_.bumpMap&&(S.bumpMap.value=_.bumpMap,t(_.bumpMap,S.bumpMapTransform),S.bumpScale.value=_.bumpScale,_.side===en&&(S.bumpScale.value*=-1)),_.normalMap&&(S.normalMap.value=_.normalMap,t(_.normalMap,S.normalMapTransform),S.normalScale.value.copy(_.normalScale),_.side===en&&S.normalScale.value.negate()),_.displacementMap&&(S.displacementMap.value=_.displacementMap,t(_.displacementMap,S.displacementMapTransform),S.displacementScale.value=_.displacementScale,S.displacementBias.value=_.displacementBias),_.emissiveMap&&(S.emissiveMap.value=_.emissiveMap,t(_.emissiveMap,S.emissiveMapTransform)),_.specularMap&&(S.specularMap.value=_.specularMap,t(_.specularMap,S.specularMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest);const N=e.get(_),L=N.envMap,I=N.envMapRotation;L&&(S.envMap.value=L,xi.copy(I),xi.x*=-1,xi.y*=-1,xi.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(xi.y*=-1,xi.z*=-1),S.envMapRotation.value.setFromMatrix4(wS.makeRotationFromEuler(xi)),S.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=_.reflectivity,S.ior.value=_.ior,S.refractionRatio.value=_.refractionRatio),_.lightMap&&(S.lightMap.value=_.lightMap,S.lightMapIntensity.value=_.lightMapIntensity,t(_.lightMap,S.lightMapTransform)),_.aoMap&&(S.aoMap.value=_.aoMap,S.aoMapIntensity.value=_.aoMapIntensity,t(_.aoMap,S.aoMapTransform))}function l(S,_){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,_.map&&(S.map.value=_.map,t(_.map,S.mapTransform))}function u(S,_){S.dashSize.value=_.dashSize,S.totalSize.value=_.dashSize+_.gapSize,S.scale.value=_.scale}function d(S,_,N,L){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,S.size.value=_.size*N,S.scale.value=L*.5,_.map&&(S.map.value=_.map,t(_.map,S.uvTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,t(_.alphaMap,S.alphaMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest)}function f(S,_){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,S.rotation.value=_.rotation,_.map&&(S.map.value=_.map,t(_.map,S.mapTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,t(_.alphaMap,S.alphaMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest)}function m(S,_){S.specular.value.copy(_.specular),S.shininess.value=Math.max(_.shininess,1e-4)}function g(S,_){_.gradientMap&&(S.gradientMap.value=_.gradientMap)}function x(S,_){S.metalness.value=_.metalness,_.metalnessMap&&(S.metalnessMap.value=_.metalnessMap,t(_.metalnessMap,S.metalnessMapTransform)),S.roughness.value=_.roughness,_.roughnessMap&&(S.roughnessMap.value=_.roughnessMap,t(_.roughnessMap,S.roughnessMapTransform)),_.envMap&&(S.envMapIntensity.value=_.envMapIntensity)}function y(S,_,N){S.ior.value=_.ior,_.sheen>0&&(S.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),S.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(S.sheenColorMap.value=_.sheenColorMap,t(_.sheenColorMap,S.sheenColorMapTransform)),_.sheenRoughnessMap&&(S.sheenRoughnessMap.value=_.sheenRoughnessMap,t(_.sheenRoughnessMap,S.sheenRoughnessMapTransform))),_.clearcoat>0&&(S.clearcoat.value=_.clearcoat,S.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(S.clearcoatMap.value=_.clearcoatMap,t(_.clearcoatMap,S.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,t(_.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(S.clearcoatNormalMap.value=_.clearcoatNormalMap,t(_.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===en&&S.clearcoatNormalScale.value.negate())),_.dispersion>0&&(S.dispersion.value=_.dispersion),_.iridescence>0&&(S.iridescence.value=_.iridescence,S.iridescenceIOR.value=_.iridescenceIOR,S.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(S.iridescenceMap.value=_.iridescenceMap,t(_.iridescenceMap,S.iridescenceMapTransform)),_.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=_.iridescenceThicknessMap,t(_.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),_.transmission>0&&(S.transmission.value=_.transmission,S.transmissionSamplerMap.value=N.texture,S.transmissionSamplerSize.value.set(N.width,N.height),_.transmissionMap&&(S.transmissionMap.value=_.transmissionMap,t(_.transmissionMap,S.transmissionMapTransform)),S.thickness.value=_.thickness,_.thicknessMap&&(S.thicknessMap.value=_.thicknessMap,t(_.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=_.attenuationDistance,S.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(S.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(S.anisotropyMap.value=_.anisotropyMap,t(_.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=_.specularIntensity,S.specularColor.value.copy(_.specularColor),_.specularColorMap&&(S.specularColorMap.value=_.specularColorMap,t(_.specularColorMap,S.specularColorMapTransform)),_.specularIntensityMap&&(S.specularIntensityMap.value=_.specularIntensityMap,t(_.specularIntensityMap,S.specularIntensityMapTransform))}function T(S,_){_.matcap&&(S.matcap.value=_.matcap)}function C(S,_){const N=e.get(_).light;S.referencePosition.value.setFromMatrixPosition(N.matrixWorld),S.nearDistance.value=N.shadow.camera.near,S.farDistance.value=N.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function TS(i,e,t,n){let s={},o={},l=[];const u=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function d(N,L){const I=L.program;n.uniformBlockBinding(N,I)}function f(N,L){let I=s[N.id];I===void 0&&(T(N),I=m(N),s[N.id]=I,N.addEventListener("dispose",S));const Z=L.program;n.updateUBOMapping(N,Z);const P=e.render.frame;o[N.id]!==P&&(x(N),o[N.id]=P)}function m(N){const L=g();N.__bindingPointIndex=L;const I=i.createBuffer(),Z=N.__size,P=N.usage;return i.bindBuffer(i.UNIFORM_BUFFER,I),i.bufferData(i.UNIFORM_BUFFER,Z,P),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,L,I),I}function g(){for(let N=0;N<u;N++)if(l.indexOf(N)===-1)return l.push(N),N;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(N){const L=s[N.id],I=N.uniforms,Z=N.__cache;i.bindBuffer(i.UNIFORM_BUFFER,L);for(let P=0,O=I.length;P<O;P++){const X=Array.isArray(I[P])?I[P]:[I[P]];for(let D=0,E=X.length;D<E;D++){const k=X[D];if(y(k,P,D,Z)===!0){const te=k.__offset,K=Array.isArray(k.value)?k.value:[k.value];let ee=0;for(let pe=0;pe<K.length;pe++){const ae=K[pe],Se=C(ae);typeof ae=="number"||typeof ae=="boolean"?(k.__data[0]=ae,i.bufferSubData(i.UNIFORM_BUFFER,te+ee,k.__data)):ae.isMatrix3?(k.__data[0]=ae.elements[0],k.__data[1]=ae.elements[1],k.__data[2]=ae.elements[2],k.__data[3]=0,k.__data[4]=ae.elements[3],k.__data[5]=ae.elements[4],k.__data[6]=ae.elements[5],k.__data[7]=0,k.__data[8]=ae.elements[6],k.__data[9]=ae.elements[7],k.__data[10]=ae.elements[8],k.__data[11]=0):(ae.toArray(k.__data,ee),ee+=Se.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,te,k.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function y(N,L,I,Z){const P=N.value,O=L+"_"+I;if(Z[O]===void 0)return typeof P=="number"||typeof P=="boolean"?Z[O]=P:Z[O]=P.clone(),!0;{const X=Z[O];if(typeof P=="number"||typeof P=="boolean"){if(X!==P)return Z[O]=P,!0}else if(X.equals(P)===!1)return X.copy(P),!0}return!1}function T(N){const L=N.uniforms;let I=0;const Z=16;for(let O=0,X=L.length;O<X;O++){const D=Array.isArray(L[O])?L[O]:[L[O]];for(let E=0,k=D.length;E<k;E++){const te=D[E],K=Array.isArray(te.value)?te.value:[te.value];for(let ee=0,pe=K.length;ee<pe;ee++){const ae=K[ee],Se=C(ae),re=I%Z,Ae=re%Se.boundary,Pe=re+Ae;I+=Ae,Pe!==0&&Z-Pe<Se.storage&&(I+=Z-Pe),te.__data=new Float32Array(Se.storage/Float32Array.BYTES_PER_ELEMENT),te.__offset=I,I+=Se.storage}}}const P=I%Z;return P>0&&(I+=Z-P),N.__size=I,N.__cache={},this}function C(N){const L={boundary:0,storage:0};return typeof N=="number"||typeof N=="boolean"?(L.boundary=4,L.storage=4):N.isVector2?(L.boundary=8,L.storage=8):N.isVector3||N.isColor?(L.boundary=16,L.storage=12):N.isVector4?(L.boundary=16,L.storage=16):N.isMatrix3?(L.boundary=48,L.storage=48):N.isMatrix4?(L.boundary=64,L.storage=64):N.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",N),L}function S(N){const L=N.target;L.removeEventListener("dispose",S);const I=l.indexOf(L.__bindingPointIndex);l.splice(I,1),i.deleteBuffer(s[L.id]),delete s[L.id],delete o[L.id]}function _(){for(const N in s)i.deleteBuffer(s[N]);l=[],s={},o={}}return{bind:d,update:f,dispose:_}}class AS{constructor(e={}){const{canvas:t=mg(),context:n=null,depth:s=!0,stencil:o=!1,alpha:l=!1,antialias:u=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:f=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:g=!1,reverseDepthBuffer:x=!1}=e;this.isWebGLRenderer=!0;let y;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=n.getContextAttributes().alpha}else y=l;const T=new Uint32Array(4),C=new Int32Array(4);let S=null,_=null;const N=[],L=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=hn,this.toneMapping=ni,this.toneMappingExposure=1;const I=this;let Z=!1,P=0,O=0,X=null,D=-1,E=null;const k=new Pt,te=new Pt;let K=null;const ee=new st(0);let pe=0,ae=t.width,Se=t.height,re=1,Ae=null,Pe=null;const He=new Pt(0,0,ae,Se),Ke=new Pt(0,0,ae,Se);let ft=!1;const ne=new Lo;let _e=!1,De=!1;const Ee=new At,fe=new At,Me=new z,et=new Pt,Mt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let qe=!1;function Ct(){return X===null?re:1}let H=n;function jt(R,G){return t.getContext(R,G)}try{const R={alpha:!0,depth:s,stencil:o,antialias:u,premultipliedAlpha:d,preserveDrawingBuffer:f,powerPreference:m,failIfMajorPerformanceCaveat:g};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${To}`),t.addEventListener("webglcontextlost",he,!1),t.addEventListener("webglcontextrestored",Y,!1),t.addEventListener("webglcontextcreationerror",j,!1),H===null){const G="webgl2";if(H=jt(G,R),H===null)throw jt(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let at,ot,We,pt,Ge,F,A,J,de,le,se,Oe,Ce,Le,lt,ye,Fe,Xe,Ye,Ue,rt,Ze,xt,B;function be(){at=new Dx(H),at.init(),Ze=new gS(H,at),ot=new Tx(H,at,e,Ze),We=new pS(H,at),ot.reverseDepthBuffer&&x&&We.buffers.depth.setReversed(!0),pt=new Ux(H),Ge=new Qy,F=new _S(H,at,We,Ge,ot,Ze,pt),A=new Cx(I),J=new Ix(I),de=new Gg(H),xt=new wx(H,de),le=new Lx(H,de,pt,xt),se=new Ox(H,le,de,pt),Ye=new Nx(H,ot,F),ye=new Ax(Ge),Oe=new Ky(I,A,J,at,ot,xt,ye),Ce=new bS(I,Ge),Le=new tS,lt=new oS(at),Xe=new Ex(I,A,J,We,se,y,d),Fe=new dS(I,se,ot),B=new TS(H,pt,ot,We),Ue=new bx(H,at,pt),rt=new Fx(H,at,pt),pt.programs=Oe.programs,I.capabilities=ot,I.extensions=at,I.properties=Ge,I.renderLists=Le,I.shadowMap=Fe,I.state=We,I.info=pt}be();const ie=new ES(I,H);this.xr=ie,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const R=at.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=at.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return re},this.setPixelRatio=function(R){R!==void 0&&(re=R,this.setSize(ae,Se,!1))},this.getSize=function(R){return R.set(ae,Se)},this.setSize=function(R,G,$=!0){if(ie.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ae=R,Se=G,t.width=Math.floor(R*re),t.height=Math.floor(G*re),$===!0&&(t.style.width=R+"px",t.style.height=G+"px"),this.setViewport(0,0,R,G)},this.getDrawingBufferSize=function(R){return R.set(ae*re,Se*re).floor()},this.setDrawingBufferSize=function(R,G,$){ae=R,Se=G,re=$,t.width=Math.floor(R*$),t.height=Math.floor(G*$),this.setViewport(0,0,R,G)},this.getCurrentViewport=function(R){return R.copy(k)},this.getViewport=function(R){return R.copy(He)},this.setViewport=function(R,G,$,Q){R.isVector4?He.set(R.x,R.y,R.z,R.w):He.set(R,G,$,Q),We.viewport(k.copy(He).multiplyScalar(re).round())},this.getScissor=function(R){return R.copy(Ke)},this.setScissor=function(R,G,$,Q){R.isVector4?Ke.set(R.x,R.y,R.z,R.w):Ke.set(R,G,$,Q),We.scissor(te.copy(Ke).multiplyScalar(re).round())},this.getScissorTest=function(){return ft},this.setScissorTest=function(R){We.setScissorTest(ft=R)},this.setOpaqueSort=function(R){Ae=R},this.setTransparentSort=function(R){Pe=R},this.getClearColor=function(R){return R.copy(Xe.getClearColor())},this.setClearColor=function(){Xe.setClearColor.apply(Xe,arguments)},this.getClearAlpha=function(){return Xe.getClearAlpha()},this.setClearAlpha=function(){Xe.setClearAlpha.apply(Xe,arguments)},this.clear=function(R=!0,G=!0,$=!0){let Q=0;if(R){let V=!1;if(X!==null){const xe=X.texture.format;V=xe===Do||xe===Io||xe===Po}if(V){const xe=X.texture.type,Te=xe===Xn||xe===Ai||xe===Sr||xe===Qi||xe===Co||xe===Ro,Ne=Xe.getClearColor(),ke=Xe.getClearAlpha(),je=Ne.r,Je=Ne.g,Ie=Ne.b;Te?(T[0]=je,T[1]=Je,T[2]=Ie,T[3]=ke,H.clearBufferuiv(H.COLOR,0,T)):(C[0]=je,C[1]=Je,C[2]=Ie,C[3]=ke,H.clearBufferiv(H.COLOR,0,C))}else Q|=H.COLOR_BUFFER_BIT}G&&(Q|=H.DEPTH_BUFFER_BIT),$&&(Q|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",he,!1),t.removeEventListener("webglcontextrestored",Y,!1),t.removeEventListener("webglcontextcreationerror",j,!1),Le.dispose(),lt.dispose(),Ge.dispose(),A.dispose(),J.dispose(),se.dispose(),xt.dispose(),B.dispose(),Oe.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",si),ie.removeEventListener("sessionend",Ar),Ln.stop()};function he(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),Z=!0}function Y(){console.log("THREE.WebGLRenderer: Context Restored."),Z=!1;const R=pt.autoReset,G=Fe.enabled,$=Fe.autoUpdate,Q=Fe.needsUpdate,V=Fe.type;be(),pt.autoReset=R,Fe.enabled=G,Fe.autoUpdate=$,Fe.needsUpdate=Q,Fe.type=V}function j(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function $e(R){const G=R.target;G.removeEventListener("dispose",$e),Tt(G)}function Tt(R){Rt(R),Ge.remove(R)}function Rt(R){const G=Ge.get(R).programs;G!==void 0&&(G.forEach(function($){Oe.releaseProgram($)}),R.isShaderMaterial&&Oe.releaseShaderCache(R))}this.renderBufferDirect=function(R,G,$,Q,V,xe){G===null&&(G=Mt);const Te=V.isMesh&&V.matrixWorld.determinant()<0,Ne=Ir(R,G,$,Q,V);We.setMaterial(Q,Te);let ke=$.index,je=1;if(Q.wireframe===!0){if(ke=le.getWireframeAttribute($),ke===void 0)return;je=2}const Je=$.drawRange,Ie=$.attributes.position;let ut=Je.start*je,Re=(Je.start+Je.count)*je;xe!==null&&(ut=Math.max(ut,xe.start*je),Re=Math.min(Re,(xe.start+xe.count)*je)),ke!==null?(ut=Math.max(ut,0),Re=Math.min(Re,ke.count)):Ie!=null&&(ut=Math.max(ut,0),Re=Math.min(Re,Ie.count));const Et=Re-ut;if(Et<0||Et===1/0)return;xt.setup(V,Q,Ne,$,ke);let Ht,vt=Ue;if(ke!==null&&(Ht=de.get(ke),vt=rt,vt.setIndex(Ht)),V.isMesh)Q.wireframe===!0?(We.setLineWidth(Q.wireframeLinewidth*Ct()),vt.setMode(H.LINES)):vt.setMode(H.TRIANGLES);else if(V.isLine){let Be=Q.linewidth;Be===void 0&&(Be=1),We.setLineWidth(Be*Ct()),V.isLineSegments?vt.setMode(H.LINES):V.isLineLoop?vt.setMode(H.LINE_LOOP):vt.setMode(H.LINE_STRIP)}else V.isPoints?vt.setMode(H.POINTS):V.isSprite&&vt.setMode(H.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)vt.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(at.get("WEBGL_multi_draw"))vt.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const Be=V._multiDrawStarts,pn=V._multiDrawCounts,mt=V._multiDrawCount,sn=ke?de.get(ke).bytesPerElement:1,Mn=Ge.get(Q).currentProgram.getUniforms();for(let Yt=0;Yt<mt;Yt++)Mn.setValue(H,"_gl_DrawID",Yt),vt.render(Be[Yt]/sn,pn[Yt])}else if(V.isInstancedMesh)vt.renderInstances(ut,Et,V.count);else if($.isInstancedBufferGeometry){const Be=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,pn=Math.min($.instanceCount,Be);vt.renderInstances(ut,Et,pn)}else vt.render(ut,Et)};function it(R,G,$){R.transparent===!0&&R.side===Hn&&R.forceSinglePass===!1?(R.side=en,R.needsUpdate=!0,Pi(R,G,$),R.side=ii,R.needsUpdate=!0,Pi(R,G,$),R.side=Hn):Pi(R,G,$)}this.compile=function(R,G,$=null){$===null&&($=R),_=lt.get($),_.init(G),L.push(_),$.traverseVisible(function(V){V.isLight&&V.layers.test(G.layers)&&(_.pushLight(V),V.castShadow&&_.pushShadow(V))}),R!==$&&R.traverseVisible(function(V){V.isLight&&V.layers.test(G.layers)&&(_.pushLight(V),V.castShadow&&_.pushShadow(V))}),_.setupLights();const Q=new Set;return R.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const xe=V.material;if(xe)if(Array.isArray(xe))for(let Te=0;Te<xe.length;Te++){const Ne=xe[Te];it(Ne,$,V),Q.add(Ne)}else it(xe,$,V),Q.add(xe)}),L.pop(),_=null,Q},this.compileAsync=function(R,G,$=null){const Q=this.compile(R,G,$);return new Promise(V=>{function xe(){if(Q.forEach(function(Te){Ge.get(Te).currentProgram.isReady()&&Q.delete(Te)}),Q.size===0){V(R);return}setTimeout(xe,10)}at.get("KHR_parallel_shader_compile")!==null?xe():setTimeout(xe,10)})};let nn=null;function Lt(R){nn&&nn(R)}function si(){Ln.stop()}function Ar(){Ln.start()}const Ln=new xu;Ln.setAnimationLoop(Lt),typeof self<"u"&&Ln.setContext(self),this.setAnimationLoop=function(R){nn=R,ie.setAnimationLoop(R),R===null?Ln.stop():Ln.start()},ie.addEventListener("sessionstart",si),ie.addEventListener("sessionend",Ar),this.render=function(R,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(Z===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),ie.enabled===!0&&ie.isPresenting===!0&&(ie.cameraAutoUpdate===!0&&ie.updateCamera(G),G=ie.getCamera()),R.isScene===!0&&R.onBeforeRender(I,R,G,X),_=lt.get(R,L.length),_.init(G),L.push(_),fe.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),ne.setFromProjectionMatrix(fe),De=this.localClippingEnabled,_e=ye.init(this.clippingPlanes,De),S=Le.get(R,N.length),S.init(),N.push(S),ie.enabled===!0&&ie.isPresenting===!0){const xe=I.xr.getDepthSensingMesh();xe!==null&&rn(xe,G,-1/0,I.sortObjects)}rn(R,G,0,I.sortObjects),S.finish(),I.sortObjects===!0&&S.sort(Ae,Pe),qe=ie.enabled===!1||ie.isPresenting===!1||ie.hasDepthSensing()===!1,qe&&Xe.addToRenderList(S,R),this.info.render.frame++,_e===!0&&ye.beginShadows();const $=_.state.shadowsArray;Fe.render($,R,G),_e===!0&&ye.endShadows(),this.info.autoReset===!0&&this.info.reset();const Q=S.opaque,V=S.transmissive;if(_.setupLights(),G.isArrayCamera){const xe=G.cameras;if(V.length>0)for(let Te=0,Ne=xe.length;Te<Ne;Te++){const ke=xe[Te];ai(Q,V,R,ke)}qe&&Xe.render(R);for(let Te=0,Ne=xe.length;Te<Ne;Te++){const ke=xe[Te];Cr(S,R,ke,ke.viewport)}}else V.length>0&&ai(Q,V,R,G),qe&&Xe.render(R),Cr(S,R,G);X!==null&&(F.updateMultisampleRenderTarget(X),F.updateRenderTargetMipmap(X)),R.isScene===!0&&R.onAfterRender(I,R,G),xt.resetDefaultState(),D=-1,E=null,L.pop(),L.length>0?(_=L[L.length-1],_e===!0&&ye.setGlobalState(I.clippingPlanes,_.state.camera)):_=null,N.pop(),N.length>0?S=N[N.length-1]:S=null};function rn(R,G,$,Q){if(R.visible===!1)return;if(R.layers.test(G.layers)){if(R.isGroup)$=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(G);else if(R.isLight)_.pushLight(R),R.castShadow&&_.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||ne.intersectsSprite(R)){Q&&et.setFromMatrixPosition(R.matrixWorld).applyMatrix4(fe);const Te=se.update(R),Ne=R.material;Ne.visible&&S.push(R,Te,Ne,$,et.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||ne.intersectsObject(R))){const Te=se.update(R),Ne=R.material;if(Q&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),et.copy(R.boundingSphere.center)):(Te.boundingSphere===null&&Te.computeBoundingSphere(),et.copy(Te.boundingSphere.center)),et.applyMatrix4(R.matrixWorld).applyMatrix4(fe)),Array.isArray(Ne)){const ke=Te.groups;for(let je=0,Je=ke.length;je<Je;je++){const Ie=ke[je],ut=Ne[Ie.materialIndex];ut&&ut.visible&&S.push(R,Te,ut,$,et.z,Ie)}}else Ne.visible&&S.push(R,Te,Ne,$,et.z,null)}}const xe=R.children;for(let Te=0,Ne=xe.length;Te<Ne;Te++)rn(xe[Te],G,$,Q)}function Cr(R,G,$,Q){const V=R.opaque,xe=R.transmissive,Te=R.transparent;_.setupLightsView($),_e===!0&&ye.setGlobalState(I.clippingPlanes,$),Q&&We.viewport(k.copy(Q)),V.length>0&&Fn(V,G,$),xe.length>0&&Fn(xe,G,$),Te.length>0&&Fn(Te,G,$),We.buffers.depth.setTest(!0),We.buffers.depth.setMask(!0),We.buffers.color.setMask(!0),We.setPolygonOffset(!1)}function ai(R,G,$,Q){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[Q.id]===void 0&&(_.state.transmissionRenderTarget[Q.id]=new Ci(1,1,{generateMipmaps:!0,type:at.has("EXT_color_buffer_half_float")||at.has("EXT_color_buffer_float")?Mr:Xn,minFilter:Ti,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:gt.workingColorSpace}));const xe=_.state.transmissionRenderTarget[Q.id],Te=Q.viewport||k;xe.setSize(Te.z,Te.w);const Ne=I.getRenderTarget();I.setRenderTarget(xe),I.getClearColor(ee),pe=I.getClearAlpha(),pe<1&&I.setClearColor(16777215,.5),I.clear(),qe&&Xe.render($);const ke=I.toneMapping;I.toneMapping=ni;const je=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),_.setupLightsView(Q),_e===!0&&ye.setGlobalState(I.clippingPlanes,Q),Fn(R,$,Q),F.updateMultisampleRenderTarget(xe),F.updateRenderTargetMipmap(xe),at.has("WEBGL_multisampled_render_to_texture")===!1){let Je=!1;for(let Ie=0,ut=G.length;Ie<ut;Ie++){const Re=G[Ie],Et=Re.object,Ht=Re.geometry,vt=Re.material,Be=Re.group;if(vt.side===Hn&&Et.layers.test(Q.layers)){const pn=vt.side;vt.side=en,vt.needsUpdate=!0,Ri(Et,$,Q,Ht,vt,Be),vt.side=pn,vt.needsUpdate=!0,Je=!0}}Je===!0&&(F.updateMultisampleRenderTarget(xe),F.updateRenderTargetMipmap(xe))}I.setRenderTarget(Ne),I.setClearColor(ee,pe),je!==void 0&&(Q.viewport=je),I.toneMapping=ke}function Fn(R,G,$){const Q=G.isScene===!0?G.overrideMaterial:null;for(let V=0,xe=R.length;V<xe;V++){const Te=R[V],Ne=Te.object,ke=Te.geometry,je=Q===null?Te.material:Q,Je=Te.group;Ne.layers.test($.layers)&&Ri(Ne,G,$,ke,je,Je)}}function Ri(R,G,$,Q,V,xe){R.onBeforeRender(I,G,$,Q,V,xe),R.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),V.onBeforeRender(I,G,$,Q,R,xe),V.transparent===!0&&V.side===Hn&&V.forceSinglePass===!1?(V.side=en,V.needsUpdate=!0,I.renderBufferDirect($,G,Q,V,R,xe),V.side=ii,V.needsUpdate=!0,I.renderBufferDirect($,G,Q,V,R,xe),V.side=Hn):I.renderBufferDirect($,G,Q,V,R,xe),R.onAfterRender(I,G,$,Q,V,xe)}function Pi(R,G,$){G.isScene!==!0&&(G=Mt);const Q=Ge.get(R),V=_.state.lights,xe=_.state.shadowsArray,Te=V.state.version,Ne=Oe.getParameters(R,V.state,xe,G,$),ke=Oe.getProgramCacheKey(Ne);let je=Q.programs;Q.environment=R.isMeshStandardMaterial?G.environment:null,Q.fog=G.fog,Q.envMap=(R.isMeshStandardMaterial?J:A).get(R.envMap||Q.environment),Q.envMapRotation=Q.environment!==null&&R.envMap===null?G.environmentRotation:R.envMapRotation,je===void 0&&(R.addEventListener("dispose",$e),je=new Map,Q.programs=je);let Je=je.get(ke);if(Je!==void 0){if(Q.currentProgram===Je&&Q.lightsStateVersion===Te)return Pr(R,Ne),Je}else Ne.uniforms=Oe.getUniforms(R),R.onBeforeCompile(Ne,I),Je=Oe.acquireProgram(Ne,ke),je.set(ke,Je),Q.uniforms=Ne.uniforms;const Ie=Q.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ie.clippingPlanes=ye.uniform),Pr(R,Ne),Q.needsLights=ks(R),Q.lightsStateVersion=Te,Q.needsLights&&(Ie.ambientLightColor.value=V.state.ambient,Ie.lightProbe.value=V.state.probe,Ie.directionalLights.value=V.state.directional,Ie.directionalLightShadows.value=V.state.directionalShadow,Ie.spotLights.value=V.state.spot,Ie.spotLightShadows.value=V.state.spotShadow,Ie.rectAreaLights.value=V.state.rectArea,Ie.ltc_1.value=V.state.rectAreaLTC1,Ie.ltc_2.value=V.state.rectAreaLTC2,Ie.pointLights.value=V.state.point,Ie.pointLightShadows.value=V.state.pointShadow,Ie.hemisphereLights.value=V.state.hemi,Ie.directionalShadowMap.value=V.state.directionalShadowMap,Ie.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Ie.spotShadowMap.value=V.state.spotShadowMap,Ie.spotLightMatrix.value=V.state.spotLightMatrix,Ie.spotLightMap.value=V.state.spotLightMap,Ie.pointShadowMap.value=V.state.pointShadowMap,Ie.pointShadowMatrix.value=V.state.pointShadowMatrix),Q.currentProgram=Je,Q.uniformsList=null,Je}function Rr(R){if(R.uniformsList===null){const G=R.currentProgram.getUniforms();R.uniformsList=As.seqWithValue(G.seq,R.uniforms)}return R.uniformsList}function Pr(R,G){const $=Ge.get(R);$.outputColorSpace=G.outputColorSpace,$.batching=G.batching,$.batchingColor=G.batchingColor,$.instancing=G.instancing,$.instancingColor=G.instancingColor,$.instancingMorph=G.instancingMorph,$.skinning=G.skinning,$.morphTargets=G.morphTargets,$.morphNormals=G.morphNormals,$.morphColors=G.morphColors,$.morphTargetsCount=G.morphTargetsCount,$.numClippingPlanes=G.numClippingPlanes,$.numIntersection=G.numClipIntersection,$.vertexAlphas=G.vertexAlphas,$.vertexTangents=G.vertexTangents,$.toneMapping=G.toneMapping}function Ir(R,G,$,Q,V){G.isScene!==!0&&(G=Mt),F.resetTextureUnits();const xe=G.fog,Te=Q.isMeshStandardMaterial?G.environment:null,Ne=X===null?I.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:nr,ke=(Q.isMeshStandardMaterial?J:A).get(Q.envMap||Te),je=Q.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,Je=!!$.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),Ie=!!$.morphAttributes.position,ut=!!$.morphAttributes.normal,Re=!!$.morphAttributes.color;let Et=ni;Q.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(Et=I.toneMapping);const Ht=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,vt=Ht!==void 0?Ht.length:0,Be=Ge.get(Q),pn=_.state.lights;if(_e===!0&&(De===!0||R!==E)){const Gt=R===E&&Q.id===D;ye.setState(Q,R,Gt)}let mt=!1;Q.version===Be.__version?(Be.needsLights&&Be.lightsStateVersion!==pn.state.version||Be.outputColorSpace!==Ne||V.isBatchedMesh&&Be.batching===!1||!V.isBatchedMesh&&Be.batching===!0||V.isBatchedMesh&&Be.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&Be.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&Be.instancing===!1||!V.isInstancedMesh&&Be.instancing===!0||V.isSkinnedMesh&&Be.skinning===!1||!V.isSkinnedMesh&&Be.skinning===!0||V.isInstancedMesh&&Be.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Be.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Be.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Be.instancingMorph===!1&&V.morphTexture!==null||Be.envMap!==ke||Q.fog===!0&&Be.fog!==xe||Be.numClippingPlanes!==void 0&&(Be.numClippingPlanes!==ye.numPlanes||Be.numIntersection!==ye.numIntersection)||Be.vertexAlphas!==je||Be.vertexTangents!==Je||Be.morphTargets!==Ie||Be.morphNormals!==ut||Be.morphColors!==Re||Be.toneMapping!==Et||Be.morphTargetsCount!==vt)&&(mt=!0):(mt=!0,Be.__version=Q.version);let sn=Be.currentProgram;mt===!0&&(sn=Pi(Q,G,V));let Mn=!1,Yt=!1,$n=!1;const M=sn.getUniforms(),ht=Be.uniforms;if(We.useProgram(sn.program)&&(Mn=!0,Yt=!0,$n=!0),Q.id!==D&&(D=Q.id,Yt=!0),Mn||E!==R){We.buffers.depth.getReversed()?(Ee.copy(R.projectionMatrix),gg(Ee),vg(Ee),M.setValue(H,"projectionMatrix",Ee)):M.setValue(H,"projectionMatrix",R.projectionMatrix),M.setValue(H,"viewMatrix",R.matrixWorldInverse);const qt=M.map.cameraPosition;qt!==void 0&&qt.setValue(H,Me.setFromMatrixPosition(R.matrixWorld)),ot.logarithmicDepthBuffer&&M.setValue(H,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&M.setValue(H,"isOrthographic",R.isOrthographicCamera===!0),E!==R&&(E=R,Yt=!0,$n=!0)}if(V.isSkinnedMesh){M.setOptional(H,V,"bindMatrix"),M.setOptional(H,V,"bindMatrixInverse");const Gt=V.skeleton;Gt&&(Gt.boneTexture===null&&Gt.computeBoneTexture(),M.setValue(H,"boneTexture",Gt.boneTexture,F))}V.isBatchedMesh&&(M.setOptional(H,V,"batchingTexture"),M.setValue(H,"batchingTexture",V._matricesTexture,F),M.setOptional(H,V,"batchingIdTexture"),M.setValue(H,"batchingIdTexture",V._indirectTexture,F),M.setOptional(H,V,"batchingColorTexture"),V._colorsTexture!==null&&M.setValue(H,"batchingColorTexture",V._colorsTexture,F));const oi=$.morphAttributes;if((oi.position!==void 0||oi.normal!==void 0||oi.color!==void 0)&&Ye.update(V,$,sn),(Yt||Be.receiveShadow!==V.receiveShadow)&&(Be.receiveShadow=V.receiveShadow,M.setValue(H,"receiveShadow",V.receiveShadow)),Q.isMeshGouraudMaterial&&Q.envMap!==null&&(ht.envMap.value=ke,ht.flipEnvMap.value=ke.isCubeTexture&&ke.isRenderTargetTexture===!1?-1:1),Q.isMeshStandardMaterial&&Q.envMap===null&&G.environment!==null&&(ht.envMapIntensity.value=G.environmentIntensity),Yt&&(M.setValue(H,"toneMappingExposure",I.toneMappingExposure),Be.needsLights&&Os(ht,$n),xe&&Q.fog===!0&&Ce.refreshFogUniforms(ht,xe),Ce.refreshMaterialUniforms(ht,Q,re,Se,_.state.transmissionRenderTarget[R.id]),As.upload(H,Rr(Be),ht,F)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(As.upload(H,Rr(Be),ht,F),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&M.setValue(H,"center",V.center),M.setValue(H,"modelViewMatrix",V.modelViewMatrix),M.setValue(H,"normalMatrix",V.normalMatrix),M.setValue(H,"modelMatrix",V.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){const Gt=Q.uniformsGroups;for(let qt=0,En=Gt.length;qt<En;qt++){const Dr=Gt[qt];B.update(Dr,sn),B.bind(Dr,sn)}}return sn}function Os(R,G){R.ambientLightColor.needsUpdate=G,R.lightProbe.needsUpdate=G,R.directionalLights.needsUpdate=G,R.directionalLightShadows.needsUpdate=G,R.pointLights.needsUpdate=G,R.pointLightShadows.needsUpdate=G,R.spotLights.needsUpdate=G,R.spotLightShadows.needsUpdate=G,R.rectAreaLights.needsUpdate=G,R.hemisphereLights.needsUpdate=G}function ks(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(R,G,$){Ge.get(R.texture).__webglTexture=G,Ge.get(R.depthTexture).__webglTexture=$;const Q=Ge.get(R);Q.__hasExternalTextures=!0,Q.__autoAllocateDepthBuffer=$===void 0,Q.__autoAllocateDepthBuffer||at.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,G){const $=Ge.get(R);$.__webglFramebuffer=G,$.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(R,G=0,$=0){X=R,P=G,O=$;let Q=!0,V=null,xe=!1,Te=!1;if(R){const ke=Ge.get(R);if(ke.__useDefaultFramebuffer!==void 0)We.bindFramebuffer(H.FRAMEBUFFER,null),Q=!1;else if(ke.__webglFramebuffer===void 0)F.setupRenderTarget(R);else if(ke.__hasExternalTextures)F.rebindTextures(R,Ge.get(R.texture).__webglTexture,Ge.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const Ie=R.depthTexture;if(ke.__boundDepthTexture!==Ie){if(Ie!==null&&Ge.has(Ie)&&(R.width!==Ie.image.width||R.height!==Ie.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");F.setupDepthRenderbuffer(R)}}const je=R.texture;(je.isData3DTexture||je.isDataArrayTexture||je.isCompressedArrayTexture)&&(Te=!0);const Je=Ge.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Je[G])?V=Je[G][$]:V=Je[G],xe=!0):R.samples>0&&F.useMultisampledRTT(R)===!1?V=Ge.get(R).__webglMultisampledFramebuffer:Array.isArray(Je)?V=Je[$]:V=Je,k.copy(R.viewport),te.copy(R.scissor),K=R.scissorTest}else k.copy(He).multiplyScalar(re).floor(),te.copy(Ke).multiplyScalar(re).floor(),K=ft;if(We.bindFramebuffer(H.FRAMEBUFFER,V)&&Q&&We.drawBuffers(R,V),We.viewport(k),We.scissor(te),We.setScissorTest(K),xe){const ke=Ge.get(R.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+G,ke.__webglTexture,$)}else if(Te){const ke=Ge.get(R.texture),je=G||0;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,ke.__webglTexture,$||0,je)}D=-1},this.readRenderTargetPixels=function(R,G,$,Q,V,xe,Te){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=Ge.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Te!==void 0&&(Ne=Ne[Te]),Ne){We.bindFramebuffer(H.FRAMEBUFFER,Ne);try{const ke=R.texture,je=ke.format,Je=ke.type;if(!ot.textureFormatReadable(je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ot.textureTypeReadable(Je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=R.width-Q&&$>=0&&$<=R.height-V&&H.readPixels(G,$,Q,V,Ze.convert(je),Ze.convert(Je),xe)}finally{const ke=X!==null?Ge.get(X).__webglFramebuffer:null;We.bindFramebuffer(H.FRAMEBUFFER,ke)}}},this.readRenderTargetPixelsAsync=async function(R,G,$,Q,V,xe,Te){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ne=Ge.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Te!==void 0&&(Ne=Ne[Te]),Ne){const ke=R.texture,je=ke.format,Je=ke.type;if(!ot.textureFormatReadable(je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ot.textureTypeReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(G>=0&&G<=R.width-Q&&$>=0&&$<=R.height-V){We.bindFramebuffer(H.FRAMEBUFFER,Ne);const Ie=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,Ie),H.bufferData(H.PIXEL_PACK_BUFFER,xe.byteLength,H.STREAM_READ),H.readPixels(G,$,Q,V,Ze.convert(je),Ze.convert(Je),0);const ut=X!==null?Ge.get(X).__webglFramebuffer:null;We.bindFramebuffer(H.FRAMEBUFFER,ut);const Re=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await _g(H,Re,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,Ie),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,xe),H.deleteBuffer(Ie),H.deleteSync(Re),xe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,G=null,$=0){R.isTexture!==!0&&(gr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),G=arguments[0]||null,R=arguments[1]);const Q=Math.pow(2,-$),V=Math.floor(R.image.width*Q),xe=Math.floor(R.image.height*Q),Te=G!==null?G.x:0,Ne=G!==null?G.y:0;F.setTexture2D(R,0),H.copyTexSubImage2D(H.TEXTURE_2D,$,0,0,Te,Ne,V,xe),We.unbindTexture()},this.copyTextureToTexture=function(R,G,$=null,Q=null,V=0){R.isTexture!==!0&&(gr("WebGLRenderer: copyTextureToTexture function signature has changed."),Q=arguments[0]||null,R=arguments[1],G=arguments[2],V=arguments[3]||0,$=null);let xe,Te,Ne,ke,je,Je,Ie,ut,Re;const Et=R.isCompressedTexture?R.mipmaps[V]:R.image;$!==null?(xe=$.max.x-$.min.x,Te=$.max.y-$.min.y,Ne=$.isBox3?$.max.z-$.min.z:1,ke=$.min.x,je=$.min.y,Je=$.isBox3?$.min.z:0):(xe=Et.width,Te=Et.height,Ne=Et.depth||1,ke=0,je=0,Je=0),Q!==null?(Ie=Q.x,ut=Q.y,Re=Q.z):(Ie=0,ut=0,Re=0);const Ht=Ze.convert(G.format),vt=Ze.convert(G.type);let Be;G.isData3DTexture?(F.setTexture3D(G,0),Be=H.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(F.setTexture2DArray(G,0),Be=H.TEXTURE_2D_ARRAY):(F.setTexture2D(G,0),Be=H.TEXTURE_2D),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,G.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,G.unpackAlignment);const pn=H.getParameter(H.UNPACK_ROW_LENGTH),mt=H.getParameter(H.UNPACK_IMAGE_HEIGHT),sn=H.getParameter(H.UNPACK_SKIP_PIXELS),Mn=H.getParameter(H.UNPACK_SKIP_ROWS),Yt=H.getParameter(H.UNPACK_SKIP_IMAGES);H.pixelStorei(H.UNPACK_ROW_LENGTH,Et.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Et.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,ke),H.pixelStorei(H.UNPACK_SKIP_ROWS,je),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Je);const $n=R.isDataArrayTexture||R.isData3DTexture,M=G.isDataArrayTexture||G.isData3DTexture;if(R.isRenderTargetTexture||R.isDepthTexture){const ht=Ge.get(R),oi=Ge.get(G),Gt=Ge.get(ht.__renderTarget),qt=Ge.get(oi.__renderTarget);We.bindFramebuffer(H.READ_FRAMEBUFFER,Gt.__webglFramebuffer),We.bindFramebuffer(H.DRAW_FRAMEBUFFER,qt.__webglFramebuffer);for(let En=0;En<Ne;En++)$n&&H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Ge.get(R).__webglTexture,V,Je+En),R.isDepthTexture?(M&&H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Ge.get(G).__webglTexture,V,Re+En),H.blitFramebuffer(ke,je,xe,Te,Ie,ut,xe,Te,H.DEPTH_BUFFER_BIT,H.NEAREST)):M?H.copyTexSubImage3D(Be,V,Ie,ut,Re+En,ke,je,xe,Te):H.copyTexSubImage2D(Be,V,Ie,ut,Re+En,ke,je,xe,Te);We.bindFramebuffer(H.READ_FRAMEBUFFER,null),We.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else M?R.isDataTexture||R.isData3DTexture?H.texSubImage3D(Be,V,Ie,ut,Re,xe,Te,Ne,Ht,vt,Et.data):G.isCompressedArrayTexture?H.compressedTexSubImage3D(Be,V,Ie,ut,Re,xe,Te,Ne,Ht,Et.data):H.texSubImage3D(Be,V,Ie,ut,Re,xe,Te,Ne,Ht,vt,Et):R.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,V,Ie,ut,xe,Te,Ht,vt,Et.data):R.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,V,Ie,ut,Et.width,Et.height,Ht,Et.data):H.texSubImage2D(H.TEXTURE_2D,V,Ie,ut,xe,Te,Ht,vt,Et);H.pixelStorei(H.UNPACK_ROW_LENGTH,pn),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,mt),H.pixelStorei(H.UNPACK_SKIP_PIXELS,sn),H.pixelStorei(H.UNPACK_SKIP_ROWS,Mn),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Yt),V===0&&G.generateMipmaps&&H.generateMipmap(Be),We.unbindTexture()},this.copyTextureToTexture3D=function(R,G,$=null,Q=null,V=0){return R.isTexture!==!0&&(gr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),$=arguments[0]||null,Q=arguments[1]||null,R=arguments[2],G=arguments[3],V=arguments[4]||0),gr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,G,$,Q,V)},this.initRenderTarget=function(R){Ge.get(R).__webglFramebuffer===void 0&&F.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?F.setTextureCube(R,0):R.isData3DTexture?F.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?F.setTexture2DArray(R,0):F.setTexture2D(R,0),We.unbindTexture()},this.resetState=function(){P=0,O=0,X=null,We.reset(),xt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=gt._getDrawingBufferColorSpace(e),t.unpackColorSpace=gt._getUnpackColorSpace()}}class CS extends zt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new In,this.environmentIntensity=1,this.environmentRotation=new In,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Tu extends rr{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new st(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Is=new z,Ds=new z,Ll=new At,mr=new uu,vs=new Us,Ia=new z,Fl=new z;class RS extends zt{constructor(e=new cn,t=new Tu){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,o=t.count;s<o;s++)Is.fromBufferAttribute(t,s-1),Ds.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Is.distanceTo(Ds);e.setAttribute("lineDistance",new Dt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,o=e.params.Line.threshold,l=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),vs.copy(n.boundingSphere),vs.applyMatrix4(s),vs.radius+=o,e.ray.intersectsSphere(vs)===!1)return;Ll.copy(s).invert(),mr.copy(e.ray).applyMatrix4(Ll);const u=o/((this.scale.x+this.scale.y+this.scale.z)/3),d=u*u,f=this.isLineSegments?2:1,m=n.index,x=n.attributes.position;if(m!==null){const y=Math.max(0,l.start),T=Math.min(m.count,l.start+l.count);for(let C=y,S=T-1;C<S;C+=f){const _=m.getX(C),N=m.getX(C+1),L=xs(this,e,mr,d,_,N);L&&t.push(L)}if(this.isLineLoop){const C=m.getX(T-1),S=m.getX(y),_=xs(this,e,mr,d,C,S);_&&t.push(_)}}else{const y=Math.max(0,l.start),T=Math.min(x.count,l.start+l.count);for(let C=y,S=T-1;C<S;C+=f){const _=xs(this,e,mr,d,C,C+1);_&&t.push(_)}if(this.isLineLoop){const C=xs(this,e,mr,d,T-1,y);C&&t.push(C)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,l=s.length;o<l;o++){const u=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=o}}}}}function xs(i,e,t,n,s,o){const l=i.geometry.attributes.position;if(Is.fromBufferAttribute(l,s),Ds.fromBufferAttribute(l,o),t.distanceSqToSegment(Is,Ds,Ia,Fl)>n)return;Ia.applyMatrix4(i.matrixWorld);const d=e.ray.origin.distanceTo(Ia);if(!(d<e.near||d>e.far))return{distance:d,point:Fl.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const Ul=new z,Nl=new z;class PS extends RS{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,o=t.count;s<o;s+=2)Ul.fromBufferAttribute(t,s),Nl.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Ul.distanceTo(Nl);e.setAttribute("lineDistance",new Dt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Dn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,s=this.getPoint(0),o=0;t.push(0);for(let l=1;l<=e;l++)n=this.getPoint(l/e),o+=n.distanceTo(s),t.push(o),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let s=0;const o=n.length;let l;t?l=t:l=e*n[o-1];let u=0,d=o-1,f;for(;u<=d;)if(s=Math.floor(u+(d-u)/2),f=n[s]-l,f<0)u=s+1;else if(f>0)d=s-1;else{d=s;break}if(s=d,n[s]===l)return s/(o-1);const m=n[s],x=n[s+1]-m,y=(l-m)/x;return(s+y)/(o-1)}getTangent(e,t){let s=e-1e-4,o=e+1e-4;s<0&&(s=0),o>1&&(o=1);const l=this.getPoint(s),u=this.getPoint(o),d=t||(l.isVector2?new ze:new z);return d.copy(u).sub(l).normalize(),d}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new z,s=[],o=[],l=[],u=new z,d=new At;for(let y=0;y<=e;y++){const T=y/e;s[y]=this.getTangentAt(T,new z)}o[0]=new z,l[0]=new z;let f=Number.MAX_VALUE;const m=Math.abs(s[0].x),g=Math.abs(s[0].y),x=Math.abs(s[0].z);m<=f&&(f=m,n.set(1,0,0)),g<=f&&(f=g,n.set(0,1,0)),x<=f&&n.set(0,0,1),u.crossVectors(s[0],n).normalize(),o[0].crossVectors(s[0],u),l[0].crossVectors(s[0],o[0]);for(let y=1;y<=e;y++){if(o[y]=o[y-1].clone(),l[y]=l[y-1].clone(),u.crossVectors(s[y-1],s[y]),u.length()>Number.EPSILON){u.normalize();const T=Math.acos(Vt(s[y-1].dot(s[y]),-1,1));o[y].applyMatrix4(d.makeRotationAxis(u,T))}l[y].crossVectors(s[y],o[y])}if(t===!0){let y=Math.acos(Vt(o[0].dot(o[e]),-1,1));y/=e,s[0].dot(u.crossVectors(o[0],o[e]))>0&&(y=-y);for(let T=1;T<=e;T++)o[T].applyMatrix4(d.makeRotationAxis(s[T],y*T)),l[T].crossVectors(s[T],o[T])}return{tangents:s,normals:o,binormals:l}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Uo extends Dn{constructor(e=0,t=0,n=1,s=1,o=0,l=Math.PI*2,u=!1,d=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=o,this.aEndAngle=l,this.aClockwise=u,this.aRotation=d}getPoint(e,t=new ze){const n=t,s=Math.PI*2;let o=this.aEndAngle-this.aStartAngle;const l=Math.abs(o)<Number.EPSILON;for(;o<0;)o+=s;for(;o>s;)o-=s;o<Number.EPSILON&&(l?o=0:o=s),this.aClockwise===!0&&!l&&(o===s?o=-s:o=o-s);const u=this.aStartAngle+e*o;let d=this.aX+this.xRadius*Math.cos(u),f=this.aY+this.yRadius*Math.sin(u);if(this.aRotation!==0){const m=Math.cos(this.aRotation),g=Math.sin(this.aRotation),x=d-this.aX,y=f-this.aY;d=x*m-y*g+this.aX,f=x*g+y*m+this.aY}return n.set(d,f)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class IS extends Uo{constructor(e,t,n,s,o,l){super(e,t,n,n,s,o,l),this.isArcCurve=!0,this.type="ArcCurve"}}function No(){let i=0,e=0,t=0,n=0;function s(o,l,u,d){i=o,e=u,t=-3*o+3*l-2*u-d,n=2*o-2*l+u+d}return{initCatmullRom:function(o,l,u,d,f){s(l,u,f*(u-o),f*(d-l))},initNonuniformCatmullRom:function(o,l,u,d,f,m,g){let x=(l-o)/f-(u-o)/(f+m)+(u-l)/m,y=(u-l)/m-(d-l)/(m+g)+(d-u)/g;x*=m,y*=m,s(l,u,x,y)},calc:function(o){const l=o*o,u=l*o;return i+e*o+t*l+n*u}}}const ys=new z,Da=new No,La=new No,Fa=new No;class DS extends Dn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new z){const n=t,s=this.points,o=s.length,l=(o-(this.closed?0:1))*e;let u=Math.floor(l),d=l-u;this.closed?u+=u>0?0:(Math.floor(Math.abs(u)/o)+1)*o:d===0&&u===o-1&&(u=o-2,d=1);let f,m;this.closed||u>0?f=s[(u-1)%o]:(ys.subVectors(s[0],s[1]).add(s[0]),f=ys);const g=s[u%o],x=s[(u+1)%o];if(this.closed||u+2<o?m=s[(u+2)%o]:(ys.subVectors(s[o-1],s[o-2]).add(s[o-1]),m=ys),this.curveType==="centripetal"||this.curveType==="chordal"){const y=this.curveType==="chordal"?.5:.25;let T=Math.pow(f.distanceToSquared(g),y),C=Math.pow(g.distanceToSquared(x),y),S=Math.pow(x.distanceToSquared(m),y);C<1e-4&&(C=1),T<1e-4&&(T=C),S<1e-4&&(S=C),Da.initNonuniformCatmullRom(f.x,g.x,x.x,m.x,T,C,S),La.initNonuniformCatmullRom(f.y,g.y,x.y,m.y,T,C,S),Fa.initNonuniformCatmullRom(f.z,g.z,x.z,m.z,T,C,S)}else this.curveType==="catmullrom"&&(Da.initCatmullRom(f.x,g.x,x.x,m.x,this.tension),La.initCatmullRom(f.y,g.y,x.y,m.y,this.tension),Fa.initCatmullRom(f.z,g.z,x.z,m.z,this.tension));return n.set(Da.calc(d),La.calc(d),Fa.calc(d)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new z().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Ol(i,e,t,n,s){const o=(n-e)*.5,l=(s-t)*.5,u=i*i,d=i*u;return(2*t-2*n+o+l)*d+(-3*t+3*n-2*o-l)*u+o*i+t}function LS(i,e){const t=1-i;return t*t*e}function FS(i,e){return 2*(1-i)*i*e}function US(i,e){return i*i*e}function xr(i,e,t,n){return LS(i,e)+FS(i,t)+US(i,n)}function NS(i,e){const t=1-i;return t*t*t*e}function OS(i,e){const t=1-i;return 3*t*t*i*e}function kS(i,e){return 3*(1-i)*i*i*e}function BS(i,e){return i*i*i*e}function yr(i,e,t,n,s){return NS(i,e)+OS(i,t)+kS(i,n)+BS(i,s)}class Au extends Dn{constructor(e=new ze,t=new ze,n=new ze,s=new ze){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new ze){const n=t,s=this.v0,o=this.v1,l=this.v2,u=this.v3;return n.set(yr(e,s.x,o.x,l.x,u.x),yr(e,s.y,o.y,l.y,u.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class zS extends Dn{constructor(e=new z,t=new z,n=new z,s=new z){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new z){const n=t,s=this.v0,o=this.v1,l=this.v2,u=this.v3;return n.set(yr(e,s.x,o.x,l.x,u.x),yr(e,s.y,o.y,l.y,u.y),yr(e,s.z,o.z,l.z,u.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Cu extends Dn{constructor(e=new ze,t=new ze){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ze){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ze){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class HS extends Dn{constructor(e=new z,t=new z){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new z){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new z){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ru extends Dn{constructor(e=new ze,t=new ze,n=new ze){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ze){const n=t,s=this.v0,o=this.v1,l=this.v2;return n.set(xr(e,s.x,o.x,l.x),xr(e,s.y,o.y,l.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class GS extends Dn{constructor(e=new z,t=new z,n=new z){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new z){const n=t,s=this.v0,o=this.v1,l=this.v2;return n.set(xr(e,s.x,o.x,l.x),xr(e,s.y,o.y,l.y),xr(e,s.z,o.z,l.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Pu extends Dn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ze){const n=t,s=this.points,o=(s.length-1)*e,l=Math.floor(o),u=o-l,d=s[l===0?l:l-1],f=s[l],m=s[l>s.length-2?s.length-1:l+1],g=s[l>s.length-3?s.length-1:l+2];return n.set(Ol(u,d.x,f.x,m.x,g.x),Ol(u,d.y,f.y,m.y,g.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new ze().fromArray(s))}return this}}var kl=Object.freeze({__proto__:null,ArcCurve:IS,CatmullRomCurve3:DS,CubicBezierCurve:Au,CubicBezierCurve3:zS,EllipseCurve:Uo,LineCurve:Cu,LineCurve3:HS,QuadraticBezierCurve:Ru,QuadraticBezierCurve3:GS,SplineCurve:Pu});class VS extends Dn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new kl[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),s=this.getCurveLengths();let o=0;for(;o<s.length;){if(s[o]>=n){const l=s[o]-n,u=this.curves[o],d=u.getLength(),f=d===0?0:1-l/d;return u.getPointAt(f,t)}o++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let s=0,o=this.curves;s<o.length;s++){const l=o[s],u=l.isEllipseCurve?e*2:l.isLineCurve||l.isLineCurve3?1:l.isSplineCurve?e*l.points.length:e,d=l.getPoints(u);for(let f=0;f<d.length;f++){const m=d[f];n&&n.equals(m)||(t.push(m),n=m)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(new kl[s.type]().fromJSON(s))}return this}}class WS extends VS{constructor(e){super(),this.type="Path",this.currentPoint=new ze,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new Cu(this.currentPoint.clone(),new ze(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){const o=new Ru(this.currentPoint.clone(),new ze(e,t),new ze(n,s));return this.curves.push(o),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,o,l){const u=new Au(this.currentPoint.clone(),new ze(e,t),new ze(n,s),new ze(o,l));return this.curves.push(u),this.currentPoint.set(o,l),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new Pu(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,o,l){const u=this.currentPoint.x,d=this.currentPoint.y;return this.absarc(e+u,t+d,n,s,o,l),this}absarc(e,t,n,s,o,l){return this.absellipse(e,t,n,n,s,o,l),this}ellipse(e,t,n,s,o,l,u,d){const f=this.currentPoint.x,m=this.currentPoint.y;return this.absellipse(e+f,t+m,n,s,o,l,u,d),this}absellipse(e,t,n,s,o,l,u,d){const f=new Uo(e,t,n,s,o,l,u,d);if(this.curves.length>0){const g=f.getPoint(0);g.equals(this.currentPoint)||this.lineTo(g.x,g.y)}this.curves.push(f);const m=f.getPoint(1);return this.currentPoint.copy(m),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Oo extends cn{constructor(e=[new ze(0,-.5),new ze(.5,0),new ze(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=Vt(s,0,Math.PI*2);const o=[],l=[],u=[],d=[],f=[],m=1/t,g=new z,x=new ze,y=new z,T=new z,C=new z;let S=0,_=0;for(let N=0;N<=e.length-1;N++)switch(N){case 0:S=e[N+1].x-e[N].x,_=e[N+1].y-e[N].y,y.x=_*1,y.y=-S,y.z=_*0,C.copy(y),y.normalize(),d.push(y.x,y.y,y.z);break;case e.length-1:d.push(C.x,C.y,C.z);break;default:S=e[N+1].x-e[N].x,_=e[N+1].y-e[N].y,y.x=_*1,y.y=-S,y.z=_*0,T.copy(y),y.x+=C.x,y.y+=C.y,y.z+=C.z,y.normalize(),d.push(y.x,y.y,y.z),C.copy(T)}for(let N=0;N<=t;N++){const L=n+N*m*s,I=Math.sin(L),Z=Math.cos(L);for(let P=0;P<=e.length-1;P++){g.x=e[P].x*I,g.y=e[P].y,g.z=e[P].x*Z,l.push(g.x,g.y,g.z),x.x=N/t,x.y=P/(e.length-1),u.push(x.x,x.y);const O=d[3*P+0]*I,X=d[3*P+1],D=d[3*P+0]*Z;f.push(O,X,D)}}for(let N=0;N<t;N++)for(let L=0;L<e.length-1;L++){const I=L+N*e.length,Z=I,P=I+e.length,O=I+e.length+1,X=I+1;o.push(Z,P,X),o.push(O,X,P)}this.setIndex(o),this.setAttribute("position",new Dt(l,3)),this.setAttribute("uv",new Dt(u,2)),this.setAttribute("normal",new Dt(f,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Oo(e.points,e.segments,e.phiStart,e.phiLength)}}class ko extends Oo{constructor(e=1,t=1,n=4,s=8){const o=new WS;o.absarc(0,-t/2,e,Math.PI*1.5,0),o.absarc(0,t/2,e,0,Math.PI*.5),super(o.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:s}}static fromJSON(e){return new ko(e.radius,e.length,e.capSegments,e.radialSegments)}}class Bo extends cn{constructor(e=1,t=1,n=1,s=32,o=1,l=!1,u=0,d=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:o,openEnded:l,thetaStart:u,thetaLength:d};const f=this;s=Math.floor(s),o=Math.floor(o);const m=[],g=[],x=[],y=[];let T=0;const C=[],S=n/2;let _=0;N(),l===!1&&(e>0&&L(!0),t>0&&L(!1)),this.setIndex(m),this.setAttribute("position",new Dt(g,3)),this.setAttribute("normal",new Dt(x,3)),this.setAttribute("uv",new Dt(y,2));function N(){const I=new z,Z=new z;let P=0;const O=(t-e)/n;for(let X=0;X<=o;X++){const D=[],E=X/o,k=E*(t-e)+e;for(let te=0;te<=s;te++){const K=te/s,ee=K*d+u,pe=Math.sin(ee),ae=Math.cos(ee);Z.x=k*pe,Z.y=-E*n+S,Z.z=k*ae,g.push(Z.x,Z.y,Z.z),I.set(pe,O,ae).normalize(),x.push(I.x,I.y,I.z),y.push(K,1-E),D.push(T++)}C.push(D)}for(let X=0;X<s;X++)for(let D=0;D<o;D++){const E=C[D][X],k=C[D+1][X],te=C[D+1][X+1],K=C[D][X+1];(e>0||D!==0)&&(m.push(E,k,K),P+=3),(t>0||D!==o-1)&&(m.push(k,te,K),P+=3)}f.addGroup(_,P,0),_+=P}function L(I){const Z=T,P=new ze,O=new z;let X=0;const D=I===!0?e:t,E=I===!0?1:-1;for(let te=1;te<=s;te++)g.push(0,S*E,0),x.push(0,E,0),y.push(.5,.5),T++;const k=T;for(let te=0;te<=s;te++){const ee=te/s*d+u,pe=Math.cos(ee),ae=Math.sin(ee);O.x=D*ae,O.y=S*E,O.z=D*pe,g.push(O.x,O.y,O.z),x.push(0,E,0),P.x=pe*.5+.5,P.y=ae*.5*E+.5,y.push(P.x,P.y),T++}for(let te=0;te<s;te++){const K=Z+te,ee=k+te;I===!0?m.push(ee,ee+1,K):m.push(ee+1,ee,K),X+=3}f.addGroup(_,X,I===!0?1:2),_+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bo(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class zo extends cn{constructor(e=1,t=32,n=16,s=0,o=Math.PI*2,l=0,u=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:o,thetaStart:l,thetaLength:u},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const d=Math.min(l+u,Math.PI);let f=0;const m=[],g=new z,x=new z,y=[],T=[],C=[],S=[];for(let _=0;_<=n;_++){const N=[],L=_/n;let I=0;_===0&&l===0?I=.5/t:_===n&&d===Math.PI&&(I=-.5/t);for(let Z=0;Z<=t;Z++){const P=Z/t;g.x=-e*Math.cos(s+P*o)*Math.sin(l+L*u),g.y=e*Math.cos(l+L*u),g.z=e*Math.sin(s+P*o)*Math.sin(l+L*u),T.push(g.x,g.y,g.z),x.copy(g).normalize(),C.push(x.x,x.y,x.z),S.push(P+I,1-L),N.push(f++)}m.push(N)}for(let _=0;_<n;_++)for(let N=0;N<t;N++){const L=m[_][N+1],I=m[_][N],Z=m[_+1][N],P=m[_+1][N+1];(_!==0||l>0)&&y.push(L,I,P),(_!==n-1||d<Math.PI)&&y.push(I,Z,P)}this.setIndex(y),this.setAttribute("position",new Dt(T,3)),this.setAttribute("normal",new Dt(C,3)),this.setAttribute("uv",new Dt(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zo(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class XS extends rr{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new st(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new st(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=su,this.normalScale=new ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new In,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Iu extends zt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new st(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class $S extends Iu{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(zt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new st(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Ua=new At,Bl=new z,zl=new z;class jS{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ze(512,512),this.map=null,this.mapPass=null,this.matrix=new At,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Lo,this._frameExtents=new ze(1,1),this._viewportCount=1,this._viewports=[new Pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Bl.setFromMatrixPosition(e.matrixWorld),t.position.copy(Bl),zl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(zl),t.updateMatrixWorld(),Ua.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ua),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ua)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class YS extends jS{constructor(){super(new yu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class qS extends Iu{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(zt.DEFAULT_UP),this.updateMatrix(),this.target=new zt,this.shadow=new YS}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class ZS extends PS{constructor(e=10,t=10,n=4473924,s=8947848){n=new st(n),s=new st(s);const o=t/2,l=e/t,u=e/2,d=[],f=[];for(let x=0,y=0,T=-u;x<=t;x++,T+=l){d.push(-u,0,T,u,0,T),d.push(T,0,-u,T,0,u);const C=x===o?n:s;C.toArray(f,y),y+=3,C.toArray(f,y),y+=3,C.toArray(f,y),y+=3,C.toArray(f,y),y+=3}const m=new cn;m.setAttribute("position",new Dt(d,3)),m.setAttribute("color",new Dt(f,3));const g=new Tu({vertexColors:!0,toneMapped:!1});super(m,g),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:To}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=To);class JS{constructor(e,t=2.4,n=1.5,s=4){this.cam=e,this.back=t,this.height=n,this.stiffness=s}pos=new z;look=new z;init=!1;update(e,t){const n=new z(e.x-this.back*Math.cos(e.yaw),e.y-this.back*Math.sin(e.yaw),this.height),s=new z(e.x+.8*Math.cos(e.yaw),e.y+.8*Math.sin(e.yaw),.15),o=this.init?1-Math.exp(-this.stiffness*t):1;this.pos.lerp(n,o),this.look.lerp(s,o),this.init=!0,this.cam.position.copy(this.pos),this.cam.lookAt(this.look)}}const Ss=0,Na=2,KS=3,QS=4,eM=5,tM=6,Hl=7,nM=3;class iM{constructor(e,t){this.model=t,this.renderer=new AS({canvas:e,antialias:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.scene.background=new st(1777445),this.camera.up.set(0,0,1),this.scene.add(new $S(14674175,3159098,1.6));const n=new qS(16777215,1.8);n.position.set(4,-3,8),n.castShadow=!0,n.shadow.mapSize.set(2048,2048),Object.assign(n.shadow.camera,{left:-8,right:8,top:8,bottom:-8,near:.5,far:30}),this.scene.add(n),this.build(),this.resize(),window.addEventListener("resize",()=>this.resize())}renderer;scene=new CS;camera=new dn(60,1,.05,200);geoms=[];collisionObjs=[];m4=new At;build(){const e=this.model;for(let t=0;t<e.ngeom;t++){const n=e.geom_type[t],s=[e.geom_size[3*t],e.geom_size[3*t+1],e.geom_size[3*t+2]],o=[0,1,2,3].map(m=>e.geom_rgba[4*t+m]);let l=null;if(n===Ss?l=new Tr(2*s[0],2*s[1]):n===tM?l=new sr(2*s[0],2*s[1],2*s[2]):n===eM?l=new Bo(s[0],s[0],2*s[1],32).rotateX(Math.PI/2):n===Na||n===QS?l=new zo(1,24,16).scale(s[0],n===Na?s[0]:s[1],n===Na?s[0]:s[2]):n===KS?l=new ko(s[0],2*s[1],8,16).rotateX(Math.PI/2):n===Hl&&(l=this.meshGeometry(e.geom_dataid[t])),!l)continue;const u=e.geom_group[t]===nM,d=new XS({color:new st(o[0],o[1],o[2]),transparent:o[3]<1,opacity:o[3],roughness:n===Ss?.95:.6,metalness:.05,flatShading:n===Hl}),f=new Pn(l,d);f.castShadow=n!==Ss&&!u,f.receiveShadow=!0,f.matrixAutoUpdate=!1,u&&(f.visible=!1,this.collisionObjs.push(f)),this.scene.add(f),this.geoms.push({id:t,obj:f}),n===Ss&&this.addGrid(s[0],s[1])}}addGrid(e,t){const n=new ZS(2*Math.max(e,t),2*Math.round(Math.max(e,t)),5923440,3817544);n.rotateX(Math.PI/2),n.position.z=.002,this.scene.add(n)}meshGeometry(e){const t=this.model,n=t.mesh_vertadr[e],s=t.mesh_vertnum[e],o=t.mesh_faceadr[e],l=t.mesh_facenum[e],u=new Float32Array(t.mesh_vert.subarray(3*n,3*(n+s))),d=new Uint32Array(t.mesh_face.subarray(3*o,3*(o+l))),f=new cn;return f.setAttribute("position",new fn(u,3)),f.setIndex(new fn(d,1)),f.computeVertexNormals(),f}showCollision(e){for(const t of this.collisionObjs)t.visible=e}sync(e){const t=e.geom_xpos,n=e.geom_xmat;for(const{id:s,obj:o}of this.geoms){const l=9*s,u=3*s;this.m4.set(n[l],n[l+1],n[l+2],t[u],n[l+3],n[l+4],n[l+5],t[u+1],n[l+6],n[l+7],n[l+8],t[u+2],0,0,0,1),o.matrix.copy(this.m4),o.matrixWorldNeedsUpdate=!0}}render(){this.renderer.render(this.scene,this.camera)}resize(){const e=this.renderer.domElement,t=e.clientWidth||window.innerWidth,n=e.clientHeight||window.innerHeight;this.renderer.setSize(t,n,!1),this.camera.aspect=t/n,this.camera.updateProjectionMatrix()}}class rM{constructor(e,t=200){this.chassisGeom=e,this.debounceMs=t}count=0;lastTouch=new Map;touching=new Set;update(e,t){const n=[],s=new Set,o=e.ncon;if(o>0){const l=e.contact;try{for(let u=0;u<o;u++){const d=l.get(u);if(!d)continue;const f=d.geom1===this.chassisGeom?d.geom2:d.geom2===this.chassisGeom?d.geom1:-1;d.delete(),f>=0&&s.add(f)}}finally{l.delete()}}for(const l of s)!this.touching.has(l)&&t-(this.lastTouch.get(l)??-1/0)>=this.debounceMs&&(this.count++,n.push(l)),this.lastTouch.set(l,t);return this.touching=s,n}isTouching(){return this.touching.size>0}reset(){this.count=0,this.lastTouch.clear(),this.touching.clear()}}function Gl(i,e,t,n,s){if(i!==0&&Math.sign(e)!==Math.sign(i)){const l=i-Math.sign(i)*n*s;return Math.sign(l)!==Math.sign(i)?0:l}const o=(Math.abs(e)<Math.abs(i)?n:t)*s;return i+Math.max(-o,Math.min(o,e-i))}class sM{limits;vMax;wMax;latest=null;lastValidMs=-1/0;estopped=!1;applied={v:0,w:0};everCommanded=!1;stats={received:0,lastSource:null,lastIngress:null,lastAction:null,lastEchoT:null,lastEchoTb:null};constructor(e=Qt,t){this.limits=e,this.vMax=e.V_MAX,this.wMax=e.W_MAX,this.setCaps(t)}setCaps(e){this.vMax=Math.min(this.limits.V_MAX,e?.v??1/0),this.wMax=Math.min(this.limits.W_MAX,e?.w??1/0)}ingest(e,t){if(e.type==="reset"){this.estopped=!1;return}const n=b_(e,this.vMax,this.wMax);this.latest=n,this.lastValidMs=t,this.everCommanded=!0,this.stats.received++,this.stats.lastSource=n.source??n.ingress??null,this.stats.lastIngress=n.ingress??null,n.action&&(this.stats.lastAction=n.action),n.t!==void 0&&(this.stats.lastEchoT=n.t),n.tb!==void 0&&(this.stats.lastEchoTb=n.tb),n.estop&&(this.estopped=!0)}estop(){this.estopped=!0}reset(){this.estopped=!1}isEstopped(){return this.estopped}msSinceLastCmd(e){return e-this.lastValidMs}resetMotion(){this.latest=null,this.lastValidMs=-1/0,this.applied={v:0,w:0},this.everCommanded=!1}tick(e,t){const n=this.limits,s=this.latest!==null&&e-this.lastValidMs<=n.DEADMAN_MS;let o=s?{v:this.latest.v,w:this.latest.w}:{v:0,w:0},l;return this.estopped?(o={v:0,w:0},this.applied={v:0,w:0},{target:o,applied:{...this.applied},status:"estop"}):(this.applied={v:Gl(this.applied.v,o.v,n.A_V_MAX,n.A_V_BRAKE,t),w:Gl(this.applied.w,o.w,n.A_W_MAX,n.A_W_BRAKE,t)},s?l="ok":this.everCommanded?this.latest&&(this.latest.v!==0||this.latest.w!==0)?l="deadman":l=this.applied.v!==0||this.applied.w!==0?"deadman":"idle":l="idle",{target:o,applied:{...this.applied},status:l})}}const Du=i=>(Math.round(i*1e6)/1e6).toString(),Qn=i=>i.map(Du).join(" "),Oa='contype="2" conaffinity="2" group="0"';function aM(i,e="jackal.xml"){const[t,n]=i.arena.size,s=i.arena.wall_height??.4,o=i.arena.wall_thickness??.1,u=[["wall_n",[0,n/2+o/2,s/2],[t/2+o,o/2,s/2]],["wall_s",[0,-n/2-o/2,s/2],[t/2+o,o/2,s/2]],["wall_e",[t/2+o/2,0,s/2],[o/2,n/2,s/2]],["wall_w",[-t/2-o/2,0,s/2],[o/2,n/2,s/2]]].map(([f,m,g])=>`    <geom name="${f}" type="box" pos="${Qn([...m])}" size="${Qn([...g])}" rgba="0.55 0.58 0.62 1" ${Oa}/>`),d=i.obstacles.map((f,m)=>{const g=Qn(f.rgba??[.85,.45,.2,1]);if(f.type==="box"){const[x,y,T]=f.size,C=f.yaw??0;return`    <geom name="obs_${m}" type="box" pos="${Qn([f.pos[0],f.pos[1],T/2])}" size="${Qn([x/2,y/2,T/2])}" euler="0 0 ${Du(C)}" rgba="${g}" ${Oa}/>`}return`    <geom name="obs_${m}" type="cylinder" pos="${Qn([f.pos[0],f.pos[1],f.height/2])}" size="${Qn([f.radius,f.height/2])}" rgba="${g}" ${Oa}/>`});return`<mujoco model="jackal_${i.id}">
  <compiler angle="radian"/>
  <option timestep="0.002" integrator="implicitfast"/>
  <include file="${e}"/>
  <worldbody>
    <light name="sun" pos="0 0 6" dir="0 0 -1" directional="true"/>
    <geom name="floor" type="plane" size="${Qn([t/2+o,n/2+o,.1])}" rgba="0.24 0.26 0.29 1" contype="1" conaffinity="1"/>
${u.join(`
`)}
${d.join(`
`)}
  </worldbody>
</mujoco>
`}function oM(i,e,t){const n=new i.MjVFS;try{for(const[u,d]of Object.entries(e))n.addBuffer(u,d);const s=aM(t),o=i.MjModel.from_xml_string(s,n),l=new i.MjData(o);return{model:o,data:l,xml:s}}finally{n.delete()}}function yi(i,e,t,n){const s={body:i.mjtObj.mjOBJ_BODY,joint:i.mjtObj.mjOBJ_JOINT,geom:i.mjtObj.mjOBJ_GEOM,actuator:i.mjtObj.mjOBJ_ACTUATOR,site:i.mjtObj.mjOBJ_SITE}[t].value,o=i.mj_name2id(e,s,n);if(o<0)throw new Error(`MuJoCo ${t} "${n}" not found`);return o}function cM(i,e,t){const n=l=>e.jnt_qposadr[yi(i,e,"joint",l)],s=l=>e.jnt_dofadr[yi(i,e,"joint",l)],o=(l,u)=>({dof:s(l),side:u});return{qx:n("slide_x"),qy:n("slide_y"),qyaw:n("yaw"),dx:s("slide_x"),dy:s("slide_y"),dyaw:s("yaw"),ax:yi(i,e,"actuator","vx"),ay:yi(i,e,"actuator","vy"),aw:yi(i,e,"actuator","wz"),wheels:[o("front_left_wheel",1),o("rear_left_wheel",1),o("front_right_wheel",-1),o("rear_right_wheel",-1)],chassisGeom:yi(i,e,"geom","chassis"),baseBody:yi(i,e,"body","base_link"),wheelRadius:t.wheel_radius_m,track:t.track_m}}function lM(i,e,t){const n=i.qpos[e.qyaw];i.ctrl[e.ax]=t.v*Math.cos(n),i.ctrl[e.ay]=t.v*Math.sin(n),i.ctrl[e.aw]=t.w;for(const s of e.wheels)i.qvel[s.dof]=(t.v-s.side*t.w*e.track/2)/e.wheelRadius}function uM(i,e){const t=i.qpos[e.qyaw];return{x:i.qpos[e.qx],y:i.qpos[e.qy],yaw:Math.atan2(Math.sin(t),Math.cos(t))}}function hM(i,e){const t=i.qpos[e.qyaw],n=i.qvel[e.dx],s=i.qvel[e.dy];return{v:n*Math.cos(t)+s*Math.sin(t),w:i.qvel[e.dyaw]}}function dM(i,e,t){i.qpos[e.qx]=t.x,i.qpos[e.qy]=t.y,i.qpos[e.qyaw]=t.yaw}class Ho{constructor(e,t,n,s,o,l){this.mj=e,this.model=t,this.data=n,this.course=s,this.clock=o.clock??(()=>performance.now()),this.maxSteps=o.maxStepsPerAdvance??100,this.physicsDt=t.opt.timestep,this.stepsPerControl=Math.max(1,Math.round(this.controlDt/this.physicsDt)),this.gate=new sM(Qt,s.speed_caps),this.ids=cM(e,t,l),this.collisions=new rM(this.ids.chassisGeom),this.reset()}gate;ids;collisions;controlDt=1/Qt.CONTROL_HZ;stateDt=1/Qt.STATE_HZ;status="idle";applied={v:0,w:0};target={v:0,w:0};time=0;clock;physicsDt;stepsPerControl;controlAcc=0;stateAcc=0;maxSteps;tickHooks=[];stateListeners=[];static create(e,t,n,s,o={}){const{model:l,data:u}=oM(e,t,n);return new Ho(e,l,u,n,o,s)}reset(){this.mj.mj_resetData(this.model,this.data),dM(this.data,this.ids,this.course.start),this.mj.mj_forward(this.model,this.data),this.gate.resetMotion(),this.collisions.reset(),this.applied={v:0,w:0},this.target={v:0,w:0},this.status=this.gate.isEstopped()?"estop":"idle",this.time=0,this.controlAcc=0,this.stateAcc=0}onTick(e){this.tickHooks.push(e)}onState(e){this.stateListeners.push(e)}advance(e){this.controlAcc+=e;let t=this.maxSteps;for(;this.controlAcc>=this.controlDt&&t>=this.stepsPerControl;){this.controlAcc-=this.controlDt,this.controlTick();for(let n=0;n<this.stepsPerControl;n++)this.mj.mj_step(this.model,this.data);if(t-=this.stepsPerControl,this.time+=this.controlDt,this.collisions.update(this.data,this.time*1e3),this.stateAcc+=this.controlDt,this.stateAcc>=this.stateDt-1e-9){this.stateAcc-=this.stateDt;const n=this.state();for(const s of this.stateListeners)s(n)}}t<this.stepsPerControl&&(this.controlAcc=Math.min(this.controlAcc,this.controlDt))}controlTick(){const e=this.clock();for(const n of this.tickHooks)n(e);const t=this.gate.tick(e,this.controlDt);this.applied=t.applied,this.target=t.target,this.status=t.status,lM(this.data,this.ids,this.applied)}state(){return{type:"state",t:+this.time.toFixed(3),pose:uM(this.data,this.ids),vel:hM(this.data,this.ids),cmd_applied:{...this.applied},cmd_echo_t:this.gate.stats.lastEchoT,status:this.status,collisions:this.collisions.count,course:null}}}function fM(i,e=10){const t=`setInterval(() => postMessage(0), ${e});`;try{const n=URL.createObjectURL(new Blob([t],{type:"text/javascript"})),s=new Worker(n);return s.onmessage=()=>i(),()=>{s.terminate(),URL.revokeObjectURL(n)}}catch{const n=setInterval(i,e);return()=>clearInterval(n)}}function bt(i,e={},t){const n=document.createElement(i);return Object.assign(n.style,e),t!==void 0&&(n.textContent=t),n}function Go(i,e){const t=bt("div",{position:"fixed",zIndex:"10",padding:"10px 12px",borderRadius:"10px",background:"rgba(20,23,28,0.82)",border:"1px solid rgba(255,255,255,0.08)",backdropFilter:"blur(6px)",minWidth:"200px",userSelect:"none",...i});return t.id=e,document.body.appendChild(t),t}function Cs(i,e,t="#2d333c"){const n=bt("button",{background:t,color:"#e8eaed",border:"1px solid rgba(255,255,255,0.12)",borderRadius:"6px",padding:"5px 10px",font:"inherit",cursor:"pointer"},i);return n.addEventListener("click",e),n.addEventListener("keydown",s=>{s.key===" "&&s.preventDefault()}),n}class pM{constructor(e){this.client=e;const t=Go({left:"12px",top:"12px",width:"300px"},"connection"),n=bt("div",{display:"flex",alignItems:"center",gap:"8px"});this.light=bt("span",{width:"10px",height:"10px",borderRadius:"50%",display:"inline-block"}),this.light.id="bridge-light",this.label=bt("b",{}),this.label.id="bridge-label",n.append(this.light,this.label);const s=bt("div",{display:"flex",gap:"6px",margin:"6px 0"});this.url=bt("input",{flex:"1",background:"#2d333c",color:"#e8eaed",border:"1px solid #444",borderRadius:"6px",padding:"4px 6px",font:"12px ui-monospace, monospace"}),this.url.value=e.url,this.url.id="bridge-url",this.url.addEventListener("keydown",l=>{l.key==="Enter"&&e.connect(this.url.value.trim())}),s.append(this.url,Cs("Connect",()=>e.connect(this.url.value.trim()))),this.details=bt("div",{lineHeight:"1.5",opacity:"0.85",fontVariantNumeric:"tabular-nums"}),this.details.id="bridge-details",this.warn=bt("div",{color:"#ffb74d",marginTop:"4px"});const o=bt("div",{opacity:".55",fontSize:"11px",marginTop:"6px"},"Run jackal-bridge on this laptop. If Chrome asks to allow local network access, click Allow.");t.append(n,s,this.details,this.warn,o)}light;label;details;warn;url;update(e){const t=this.client,n=t.status,[s,o]=t.link==="replaced"?["#5f6368","Another sim tab is using the bridge"]:t.link!=="open"?["#5f6368",t.link==="connecting"?"Bridge: connecting…":"No bridge (keyboard / gamepad)"]:n?.active_source?n.deadman?["#ff9800","Bridge: source silent (deadman)"]:["#4caf50","Bridge: driving"]:["#ffca28","Bridge connected, no source"];if(this.light.style.background=s,this.light.dataset.state=t.link==="replaced"?"replaced":t.link!=="open"?"none":n?.active_source?"active":"idle",this.label.textContent=o,t.link==="open"&&n){const l=n.rtt_ms==null?"–":`${n.rtt_ms.toFixed(0)} ms`;this.details.innerHTML=`source <b>${n.active_source??"—"}</b>${n.ingress?` via ${n.ingress}`:""}<br>rate ${t.rateHz(e)} Hz · rtt ${l}<br>drops: invalid <b id="drops-invalid">${(n.drops_invalid??0)+t.dropsInvalid}</b> · rate ${n.drops_rate??0} · other source ${n.drops_inactive??0}<br>LSL ${n.lsl??"?"} · ${n.lsl_peers??0} peer(s)`}else t.link==="replaced"?this.details.textContent="Only one sim tab can be connected. Close the other tab, or click Connect to take over here.":this.details.textContent="";this.warn.textContent=t.versionWarning??""}}class mM{teamInput;constructor(e,t,n,s){const o=Go({right:"12px",bottom:"12px"},"controls"),l=(...d)=>{const f=bt("div",{display:"flex",gap:"6px",alignItems:"center",margin:"4px 0"});f.append(...d),o.appendChild(f)},u=bt("select",{flex:"1",background:"#2d333c",color:"#e8eaed",border:"1px solid #444",borderRadius:"6px",padding:"4px"});for(const d of t)u.add(new Option(d.name,d.id,d.id===n,d.id===n));u.addEventListener("change",()=>s(u.value)),l(bt("span",{opacity:".7"},"course"),u),l(Cs("Reset",()=>e.reset()),Cs("E-stop",()=>e.gate.estop(),"#8e1c1c"),Cs("Clear E-stop",()=>e.gate.reset())),this.teamInput=bt("input",{flex:"1",background:"#2d333c",color:"#e8eaed",border:"1px solid #444",borderRadius:"6px",padding:"4px 6px"}),this.teamInput.placeholder="team id",this.teamInput.id="team-id",l(bt("span",{opacity:".7"},"team"),this.teamInput),o.appendChild(bt("div",{opacity:".55",marginTop:"4px",fontSize:"11px"},"Keyboard: W/S drive · A/D turn · Shift fine · Space stop"))}}const _M={ok:["OK","#2e7d32"],idle:["IDLE","#455a64"],deadman:["DEADMAN","#e65100"],estop:["E-STOP","#c62828"],finished:["FINISHED","#1565c0"]};function Vl(i){const e=bt("div",{display:"flex",alignItems:"center",gap:"8px",margin:"4px 0"}),t=bt("div",{position:"relative",flex:"1",height:"10px",borderRadius:"5px",background:"#2a2e35",overflow:"hidden"}),n=bt("div",{position:"absolute",left:"50%",top:"0",bottom:"0",width:"1px",background:"#596070"}),s=bt("div",{position:"absolute",top:"0",bottom:"0",background:"#4f8cff"});t.append(n,s);const o=bt("span",{width:"64px",textAlign:"right",fontVariantNumeric:"tabular-nums"});return e.append(bt("b",{width:"14px"},i),t,o),{row:e,fill:s,val:o}}class gM{pill;v=Vl("v");w=Vl("w");info;constructor(){const e=Go({left:"12px",bottom:"12px",width:"260px"},"hud"),t=bt("div",{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"4px"});this.pill=bt("span",{padding:"2px 10px",borderRadius:"10px",fontWeight:"700",letterSpacing:".04em"}),this.pill.id="hud-status",t.append(bt("b",{},"Jackal"),this.pill),this.info=bt("div",{opacity:"0.85",marginTop:"6px",lineHeight:"1.5",fontVariantNumeric:"tabular-nums"}),e.append(t,this.v.row,this.w.row,this.info)}update(e,t){const[n,s]=_M[e.status];this.pill.textContent=n,this.pill.style.background=s;const o=(u,d,f,m)=>{const g=Math.max(-1,Math.min(1,d/f))/2;Object.assign(u.fill.style,g>=0?{left:"50%",width:`${g*100}%`}:{left:`${(.5+g)*100}%`,width:`${-g*100}%`}),u.val.textContent=`${d>=0?"+":""}${d.toFixed(2)} ${m}`};o(this.v,e.applied.v,Qt.V_MAX,"m/s"),o(this.w,e.applied.w,Qt.W_MAX,"r/s");const l=e.state();this.info.innerHTML=`source <b>${t??"—"}</b><br>collisions <b id="hud-collisions">${l.collisions}</b> · t ${l.t.toFixed(1)} s<br>action ${e.gate.stats.lastAction??"—"} · pose (${l.pose.x.toFixed(2)}, ${l.pose.y.toFixed(2)}, ${(l.pose.yaw*180/Math.PI).toFixed(0)}°)`}}const vM=["jackal.xml","meshes/jackal-base.stl","meshes/jackal-fender.stl","meshes/jackal-wheel.stl"],xM={footprint_lwh_m:[.511,.43,.248],mass_kg:18.43,wheel_radius_m:.098,track_m:.3756,wheelbase_m:.262,base_z_m:.0635,wheels:["front_left_wheel","front_right_wheel","rear_left_wheel","rear_right_wheel"]},Lu={files:vM,dims:xM},yM=Object.assign({"../../models/jackal/jackal.xml":Hm,"../../models/jackal/meshes/jackal-base.stl":Gm,"../../models/jackal/meshes/jackal-fender.stl":Vm,"../../models/jackal/meshes/jackal-wheel.stl":Wm});async function SM(){const i={};return await Promise.all(Lu.files.map(async e=>{const t=yM[`../../models/jackal/${e}`];if(!t)throw new Error(`model file missing from bundle: ${e}`);i[e]=new Uint8Array(await(await fetch(t)).arrayBuffer())})),i}const MM="/Hackathon/",Wl=async i=>{const e=await fetch(`${MM}${i}`);if(!e.ok)throw new Error(`${i}: HTTP ${e.status}`);return e.json()};async function EM(){const i=new URLSearchParams(location.search),[e,t,n]=await Promise.all([Ym({locateFile:_=>_.endsWith(".wasm")?qm:_}),SM(),Wl("courses/index.json")]),s=i.get("course")??n.default,o=await Wl(`courses/${s}.json`),l=Ho.create(e,t,o,Lu.dims),u=new S_(l.gate),d=new Fc(Fc.defaultUrl(),l);l.onTick(_=>{u.bridgeActive=d.isActive(_),u.tick(_)}),d.connect(),x_();const f=document.getElementById("view"),m=new iM(f,l.model),g=new JS(m.camera),x=new gM,y=new pM(d);new mM(l,n.courses,s,_=>{i.set("course",_),location.search=i.toString()}),i.has("debug")&&m.showCollision(!0),document.getElementById("loading")?.remove(),Object.assign(window,{__sim:l,__arbiter:u,__view:m,__bridge:d});let T=performance.now();fM(()=>{const _=performance.now();l.advance(Math.min(.1,(_-T)/1e3)),T=_});let C=performance.now();const S=_=>{const N=Math.min(.1,(_-C)/1e3);C=_,m.sync(l.data),g.update(l.state().pose,N),x.update(l,u.localSource??l.gate.stats.lastSource),y.update(performance.now()),m.render(),requestAnimationFrame(S)};requestAnimationFrame(S)}EM().catch(i=>{console.error(i);const e=document.getElementById("loading");e&&(e.textContent=`Failed to start: ${i instanceof Error?i.message:i}`)});const wM=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));
