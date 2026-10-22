(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function t(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=t(s);fetch(s.href,o)}})();const l_="data:text/xml;base64,PCEtLSBHRU5FUkFURUQgYnkgbW9kZWxzL2phY2thbC9jb252ZXJ0LnB5IGZyb20gamFja2FsL2phY2thbEA0ZGRmOWI1NzhiYjcgKEJTRC0zLUNsYXVzZSwgc2VlIExJQ0VOU0UpLiBEbyBub3QgZWRpdC4gLS0+CjxtdWpvY28gbW9kZWw9ImphY2thbCI+CiAgPGNvbXBpbGVyIGFuZ2xlPSJyYWRpYW4iIG1lc2hkaXI9Im1lc2hlcyIvPgogIDxkZWZhdWx0PgogICAgPGRlZmF1bHQgY2xhc3M9ImphY2thbF92aXN1YWwiPjxnZW9tIHR5cGU9Im1lc2giIGNvbnR5cGU9IjAiIGNvbmFmZmluaXR5PSIwIiBncm91cD0iMSIgZGVuc2l0eT0iMCIvPjwvZGVmYXVsdD4KICAgIDxkZWZhdWx0IGNsYXNzPSJqYWNrYWxfY29sbGlzaW9uIj48Z2VvbSBjb250eXBlPSIyIiBjb25hZmZpbml0eT0iMiIgZ3JvdXA9IjMiIHJnYmE9IjEgMCAwIDAuMjUiLz48L2RlZmF1bHQ+CiAgPC9kZWZhdWx0PgogIDxhc3NldD4KICAgIDxtZXNoIG5hbWU9ImphY2thbC1iYXNlIiBmaWxlPSJqYWNrYWwtYmFzZS5zdGwiLz4KICAgIDxtZXNoIG5hbWU9ImphY2thbC1mZW5kZXIiIGZpbGU9ImphY2thbC1mZW5kZXIuc3RsIi8+CiAgICA8bWVzaCBuYW1lPSJqYWNrYWwtd2hlZWwiIGZpbGU9ImphY2thbC13aGVlbC5zdGwiLz4KICA8L2Fzc2V0PgogIDx3b3JsZGJvZHk+CiAgICA8Ym9keSBuYW1lPSJiYXNlX2xpbmsiIHBvcz0iMCAwIDAuMDYzNSI+CiAgICAgIDxqb2ludCBuYW1lPSJzbGlkZV94IiB0eXBlPSJzbGlkZSIgYXhpcz0iMSAwIDAiLz4KICAgICAgPGpvaW50IG5hbWU9InNsaWRlX3kiIHR5cGU9InNsaWRlIiBheGlzPSIwIDEgMCIvPgogICAgICA8am9pbnQgbmFtZT0ieWF3IiB0eXBlPSJoaW5nZSIgYXhpcz0iMCAwIDEiLz4KICAgICAgPGluZXJ0aWFsIHBvcz0iMCAwIDAuMDU5MzM1IiBtYXNzPSIxNi41MjQiIGRpYWdpbmVydGlhPSIwLjM0MDIgMC40NDQ2IDAuNjEzNiIvPgogICAgICA8Z2VvbSBuYW1lPSJjaGFzc2lzIiBjbGFzcz0iamFja2FsX2NvbGxpc2lvbiIgdHlwZT0iYm94IiBwb3M9IjAgMCAwLjA1OTMzNSIgc2l6ZT0iMC4yNTUyOTkgMC4yMTUgMC4xMjQ2NjUiLz4KICAgICAgPGdlb20gbmFtZT0iY2hhc3Npc19saW5rX3Zpc3VhbCIgY2xhc3M9ImphY2thbF92aXN1YWwiIG1lc2g9ImphY2thbC1iYXNlIiBwb3M9IjAgMCAtMC4wNjU1IiBxdWF0PSIwLjUgMC41IDAuNSAwLjUiIHJnYmE9IjAuMiAwLjIgMC4yIDEuMCIvPgogICAgICA8Z2VvbSBuYW1lPSJmcm9udF9mZW5kZXJfbGlua192aXN1YWwiIGNsYXNzPSJqYWNrYWxfdmlzdWFsIiBtZXNoPSJqYWNrYWwtZmVuZGVyIiBwb3M9IjAgMCAwIiBxdWF0PSIxIDAgMCAwIiByZ2JhPSIwLjggMC44IDAuMCAxLjAiLz4KICAgICAgPGdlb20gbmFtZT0icmVhcl9mZW5kZXJfbGlua192aXN1YWwiIGNsYXNzPSJqYWNrYWxfdmlzdWFsIiBtZXNoPSJqYWNrYWwtZmVuZGVyIiBwb3M9IjAgMCAwIiBxdWF0PSIwIDAgMCAxIiByZ2JhPSIwLjggMC44IDAuMCAxLjAiLz4KICAgICAgPHNpdGUgbmFtZT0ibGlkYXIiIHBvcz0iMC4xMiAwIDAuMjA0IiBzaXplPSIwLjAzIi8+CiAgICAgIDxzaXRlIG5hbWU9ImZwdiIgcG9zPSIwLjIzNTI5OSAwIDAuMTU0IiBzaXplPSIwLjAyIi8+CiAgICAgIDxib2R5IG5hbWU9ImZyb250X2xlZnRfd2hlZWxfbGluayIgcG9zPSIwLjEzMSAwLjE4Nzc5NSAwLjAzNDUiPgogICAgICAgIDxqb2ludCBuYW1lPSJmcm9udF9sZWZ0X3doZWVsIiB0eXBlPSJoaW5nZSIgYXhpcz0iMCAxIDAiLz4KICAgICAgICA8aW5lcnRpYWwgcG9zPSIwIDAgMCIgbWFzcz0iMC40NzciIGRpYWdpbmVydGlhPSIwLjAwMTMgMC4wMDI0IDAuMDAxMyIvPgogICAgICAgIDxnZW9tIG5hbWU9ImZyb250X2xlZnRfd2hlZWxfbGlua192aXN1YWwiIGNsYXNzPSJqYWNrYWxfdmlzdWFsIiBtZXNoPSJqYWNrYWwtd2hlZWwiIHBvcz0iMCAwIDAiIHF1YXQ9IjAuNzA3MTA3IDAuNzA3MTA3IDAgMCIgcmdiYT0iMC4xNSAwLjE1IDAuMTUgMS4wIi8+CiAgICAgIDwvYm9keT4KICAgICAgPGJvZHkgbmFtZT0iZnJvbnRfcmlnaHRfd2hlZWxfbGluayIgcG9zPSIwLjEzMSAtMC4xODc3OTUgMC4wMzQ1Ij4KICAgICAgICA8am9pbnQgbmFtZT0iZnJvbnRfcmlnaHRfd2hlZWwiIHR5cGU9ImhpbmdlIiBheGlzPSIwIDEgMCIvPgogICAgICAgIDxpbmVydGlhbCBwb3M9IjAgMCAwIiBtYXNzPSIwLjQ3NyIgZGlhZ2luZXJ0aWE9IjAuMDAxMyAwLjAwMjQgMC4wMDEzIi8+CiAgICAgICAgPGdlb20gbmFtZT0iZnJvbnRfcmlnaHRfd2hlZWxfbGlua192aXN1YWwiIGNsYXNzPSJqYWNrYWxfdmlzdWFsIiBtZXNoPSJqYWNrYWwtd2hlZWwiIHBvcz0iMCAwIDAiIHF1YXQ9IjAuNzA3MTA3IDAuNzA3MTA3IDAgMCIgcmdiYT0iMC4xNSAwLjE1IDAuMTUgMS4wIi8+CiAgICAgIDwvYm9keT4KICAgICAgPGJvZHkgbmFtZT0icmVhcl9sZWZ0X3doZWVsX2xpbmsiIHBvcz0iLTAuMTMxIDAuMTg3Nzk1IDAuMDM0NSI+CiAgICAgICAgPGpvaW50IG5hbWU9InJlYXJfbGVmdF93aGVlbCIgdHlwZT0iaGluZ2UiIGF4aXM9IjAgMSAwIi8+CiAgICAgICAgPGluZXJ0aWFsIHBvcz0iMCAwIDAiIG1hc3M9IjAuNDc3IiBkaWFnaW5lcnRpYT0iMC4wMDEzIDAuMDAyNCAwLjAwMTMiLz4KICAgICAgICA8Z2VvbSBuYW1lPSJyZWFyX2xlZnRfd2hlZWxfbGlua192aXN1YWwiIGNsYXNzPSJqYWNrYWxfdmlzdWFsIiBtZXNoPSJqYWNrYWwtd2hlZWwiIHBvcz0iMCAwIDAiIHF1YXQ9IjAuNzA3MTA3IDAuNzA3MTA3IDAgMCIgcmdiYT0iMC4xNSAwLjE1IDAuMTUgMS4wIi8+CiAgICAgIDwvYm9keT4KICAgICAgPGJvZHkgbmFtZT0icmVhcl9yaWdodF93aGVlbF9saW5rIiBwb3M9Ii0wLjEzMSAtMC4xODc3OTUgMC4wMzQ1Ij4KICAgICAgICA8am9pbnQgbmFtZT0icmVhcl9yaWdodF93aGVlbCIgdHlwZT0iaGluZ2UiIGF4aXM9IjAgMSAwIi8+CiAgICAgICAgPGluZXJ0aWFsIHBvcz0iMCAwIDAiIG1hc3M9IjAuNDc3IiBkaWFnaW5lcnRpYT0iMC4wMDEzIDAuMDAyNCAwLjAwMTMiLz4KICAgICAgICA8Z2VvbSBuYW1lPSJyZWFyX3JpZ2h0X3doZWVsX2xpbmtfdmlzdWFsIiBjbGFzcz0iamFja2FsX3Zpc3VhbCIgbWVzaD0iamFja2FsLXdoZWVsIiBwb3M9IjAgMCAwIiBxdWF0PSIwLjcwNzEwNyAwLjcwNzEwNyAwIDAiIHJnYmE9IjAuMTUgMC4xNSAwLjE1IDEuMCIvPgogICAgICA8L2JvZHk+CiAgICA8L2JvZHk+CiAgPC93b3JsZGJvZHk+CiAgPGFjdHVhdG9yPgogICAgPHZlbG9jaXR5IG5hbWU9InZ4IiBqb2ludD0ic2xpZGVfeCIga3Y9IjYwMCIgZm9yY2VsaW1pdGVkPSJ0cnVlIiBmb3JjZXJhbmdlPSItNDAwIDQwMCIvPgogICAgPHZlbG9jaXR5IG5hbWU9InZ5IiBqb2ludD0ic2xpZGVfeSIga3Y9IjYwMCIgZm9yY2VsaW1pdGVkPSJ0cnVlIiBmb3JjZXJhbmdlPSItNDAwIDQwMCIvPgogICAgPHZlbG9jaXR5IG5hbWU9Ind6IiBqb2ludD0ieWF3IiBrdj0iMjAiIGZvcmNlbGltaXRlZD0idHJ1ZSIgZm9yY2VyYW5nZT0iLTYwIDYwIi8+CiAgPC9hY3R1YXRvcj4KPC9tdWpvY28+Cg==",u_="/Hackathon/assets/jackal-base-Bh4FOo_z.stl",h_="/Hackathon/assets/jackal-fender-CVf8_6Md.stl",d_="/Hackathon/assets/jackal-wheel-CyqO0zQs.stl",f_="modulepreload",p_=function(i){return"/Hackathon/"+i},Bc={},m_=function(e,t,n){let s=Promise.resolve();if(t&&t.length>0){let l=function(f){return Promise.all(f.map(m=>Promise.resolve(m).then(g=>({status:"fulfilled",value:g}),g=>({status:"rejected",reason:g}))))};document.getElementsByTagName("link");const u=document.querySelector("meta[property=csp-nonce]"),d=u?.nonce||u?.getAttribute("nonce");s=l(t.map(f=>{if(f=p_(f),f in Bc)return;Bc[f]=!0;const m=f.endsWith(".css"),g=m?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${f}"]${g}`))return;const v=document.createElement("link");if(v.rel=m?"stylesheet":f_,m||(v.as="script"),v.crossOrigin="",v.href=f,d&&v.setAttribute("nonce",d),document.head.appendChild(v),m)return new Promise((y,T)=>{v.addEventListener("load",y),v.addEventListener("error",()=>T(new Error(`Unable to preload CSS for ${f}`)))})}))}function o(l){const u=new Event("vite:preloadError",{cancelable:!0});if(u.payload=l,window.dispatchEvent(u),!u.defaultPrevented)throw l}return s.then(l=>{for(const u of l||[])u.status==="rejected"&&o(u.reason);return e().catch(o)})};var __=(async function(i={}){var e,t=i,n=typeof window=="object",s=typeof WorkerGlobalScope<"u",o=typeof process=="object"&&process.versions?.node&&process.type!="renderer",l=!n&&!o&&!s;if(o){const{createRequire:r}=await m_(async()=>{const{createRequire:a}=await Promise.resolve().then(()=>aE);return{createRequire:a}},void 0);var u=r(import.meta.url)}var d="./this.program",f=(r,a)=>{throw a},m=import.meta.url,g="";function v(r){return t.locateFile?t.locateFile(r,g):g+r}var y,T;if(o){if(!(typeof process=="object"&&process.versions?.node&&process.type!="renderer"))throw new Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)");var C=process.versions.node,S=C.split(".").slice(0,3);if(S=S[0]*1e4+S[1]*100+S[2].split("-")[0]*1,S<16e4)throw new Error("This emscripten-generated code requires node v16.0.0 (detected v"+C+")");var _=u("fs");m.startsWith("file:")&&(g=u("path").dirname(u("url").fileURLToPath(m))+"/"),T=a=>{a=O(a)?new URL(a):a;var c=_.readFileSync(a);return R(Buffer.isBuffer(c)),c},y=async(a,c=!0)=>{a=O(a)?new URL(a):a;var h=_.readFileSync(a,c?void 0:"utf8");return R(c?Buffer.isBuffer(h):typeof h=="string"),h},process.argv.length>1&&(d=process.argv[1].replace(/\\/g,"/")),process.argv.slice(2),f=(a,c)=>{throw process.exitCode=a,c}}else if(l){if(typeof process=="object"&&process.versions?.node&&process.type!="renderer"||typeof window=="object"||typeof WorkerGlobalScope<"u")throw new Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)")}else if(n||s){try{g=new URL(".",m).href}catch{}if(!(typeof window=="object"||typeof WorkerGlobalScope<"u"))throw new Error("not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)");s&&(T=r=>{var a=new XMLHttpRequest;return a.open("GET",r,!1),a.responseType="arraybuffer",a.send(null),new Uint8Array(a.response)}),y=async r=>{if(O(r))return new Promise((c,h)=>{var p=new XMLHttpRequest;p.open("GET",r,!0),p.responseType="arraybuffer",p.onload=()=>{if(p.status==200||p.status==0&&p.response){c(p.response);return}h(p.status)},p.onerror=h,p.send(null)});var a=await fetch(r,{credentials:"same-origin"});if(a.ok)return a.arrayBuffer();throw new Error(a.status+" : "+a.url)}}else throw new Error("environment detection error");var N=console.log.bind(console),L=console.error.bind(console);R(!l,"shell environment detected but not enabled at build time.  Add `shell` to `-sENVIRONMENT` to enable.");var I;typeof WebAssembly!="object"&&L("no native wasm support detected");var G=!1;function R(r,a){r||le("Assertion failed"+(a?": "+a:""))}var O=r=>r.startsWith("file://");function $(){var r=ia();R((r&3)==0),r==0&&(r+=4),Me[r>>2]=34821223,Me[r+4>>2]=2310721022,Me[0]=1668509029}function D(){if(!G){var r=ia();r==0&&(r+=4);var a=Me[r>>2],c=Me[r+4>>2];(a!=34821223||c!=2310721022)&&le(`Stack overflow! Stack cookie has been overwritten at ${he(r)}, expected hex dwords 0x89BACDFE and 0x2135467, but received ${he(c)} ${he(a)}`),Me[0]!=1668509029&&le("Runtime error: The application has corrupted its heap memory area (address zero)!")}}class E extends Error{}class k extends E{}class te extends E{constructor(a){super(a),this.excPtr=a;const c=wc(a);this.name=c[0],this.message=c[1]}}(()=>{var r=new Int16Array(1),a=new Int8Array(r.buffer);if(r[0]=25459,a[0]!==115||a[1]!==99)throw"Runtime error: expected the system to be little-endian! (Run with -sSUPPORT_BIG_ENDIAN to bypass)"})();function K(r){Object.getOwnPropertyDescriptor(t,r)||Object.defineProperty(t,r,{configurable:!0,set(){le(`Attempt to set \`Module.${r}\` after it has already been processed.  This can happen, for example, when code is injected via '--post-js' rather than '--pre-js'`)}})}function ee(r){return()=>R(!1,`call to '${r}' via reference taken before Wasm module initialization`)}function pe(r){Object.getOwnPropertyDescriptor(t,r)&&le(`\`Module.${r}\` was supplied but \`${r}\` not included in INCOMING_MODULE_JS_API`)}function ae(r){return r==="FS_createPath"||r==="FS_createDataFile"||r==="FS_createPreloadedFile"||r==="FS_unlink"||r==="addRunDependency"||r==="FS_createLazyFile"||r==="FS_createDevice"||r==="removeRunDependency"}function Se(r,a){typeof globalThis<"u"&&!Object.getOwnPropertyDescriptor(globalThis,r)&&Object.defineProperty(globalThis,r,{configurable:!0,get(){a()}})}function re(r,a){Se(r,()=>{je(`\`${r}\` is not longer defined by emscripten. ${a}`)})}re("buffer","Please use HEAP8.buffer or wasmMemory.buffer"),re("asm","Please use wasmExports instead");function Ae(r){Se(r,()=>{var a=`\`${r}\` is a library symbol and not included by default; add it to your library.js __deps or to DEFAULT_LIBRARY_FUNCS_TO_INCLUDE on the command line`,c=r;c.startsWith("_")||(c="$"+r),a+=` (e.g. -sDEFAULT_LIBRARY_FUNCS_TO_INCLUDE='${c}')`,ae(r)&&(a+=". Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you"),je(a)}),Pe(r)}function Pe(r){Object.getOwnPropertyDescriptor(t,r)||Object.defineProperty(t,r,{configurable:!0,get(){var a=`'${r}' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the Emscripten FAQ)`;ae(r)&&(a+=". Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you"),le(a)}})}var Ge,Qe,pt,ne,_e,De,Ee,fe,Me,tt,Et,Ze,Ct,H=!1;function qt(){var r=pt.buffer;ne=new Int8Array(r),De=new Int16Array(r),_e=new Uint8Array(r),Ee=new Uint16Array(r),fe=new Int32Array(r),Me=new Uint32Array(r),tt=new Float32Array(r),Et=new Float64Array(r),Ze=new BigInt64Array(r),Ct=new BigUint64Array(r)}R(typeof Int32Array<"u"&&typeof Float64Array<"u"&&Int32Array.prototype.subarray!=null&&Int32Array.prototype.set!=null,"JS engine does not provide full typed array support");function ot(){if(t.preRun)for(typeof t.preRun=="function"&&(t.preRun=[t.preRun]);t.preRun.length;)be(t.preRun.shift());K("preRun"),st(B)}function ct(){R(!H),H=!0,D(),!t.noFSInit&&!M.initialized&&M.init(),mi.__wasm_call_ctors(),M.ignorePermissions=!1}function We(){if(D(),t.postRun)for(typeof t.postRun=="function"&&(t.postRun=[t.postRun]);t.postRun.length;)yt(t.postRun.shift());K("postRun"),st(Je)}var mt=0,He=null,F={},A=null;function J(r){mt++,t.monitorRunDependencies?.(mt),r?(R(!F[r]),F[r]=1,A===null&&typeof setInterval<"u"&&(A=setInterval(()=>{if(G){clearInterval(A),A=null;return}var a=!1;for(var c in F)a||(a=!0,L("still waiting on run dependencies:")),L(`dependency: ${c}`);a&&L("(end of list)")},1e4))):L("warning: run dependency added without ID")}function de(r){if(mt--,t.monitorRunDependencies?.(mt),r?(R(F[r]),delete F[r]):L("warning: run dependency removed without ID"),mt==0&&(A!==null&&(clearInterval(A),A=null),He)){var a=He;He=null,a()}}function le(r){t.onAbort?.(r),r="Aborted("+r+")",L(r),G=!0;var a=new WebAssembly.RuntimeError(r);throw Qe?.(a),a}function se(r,a){return(...c)=>{R(H,`native function \`${r}\` called before runtime initialization`);var h=mi[r];return R(h,`exported native function \`${r}\` not found`),R(c.length<=a,`native function \`${r}\` called with ${c.length} args but expects ${a}`),h(...c)}}var Oe;function Ce(){return t.locateFile?v("mujoco.wasm"):new URL("/Hackathon/assets/mujoco-ChFpd822.wasm",import.meta.url).href}function Le(r){if(r==Oe&&I)return new Uint8Array(I);if(T)return T(r);throw"both async and sync fetching of the wasm failed"}async function ut(r){if(!I)try{var a=await y(r);return new Uint8Array(a)}catch{}return Le(r)}async function ye(r,a){try{var c=await ut(r),h=await WebAssembly.instantiate(c,a);return h}catch(p){L(`failed to asynchronously prepare wasm: ${p}`),O(Oe)&&L(`warning: Loading from a file URI (${Oe}) is not supported in most browsers. See https://emscripten.org/docs/getting_started/FAQ.html#how-do-i-run-a-local-webserver-for-testing-why-does-my-program-stall-in-downloading-or-preparing`),le(p)}}async function Fe(r,a,c){if(!r&&typeof WebAssembly.instantiateStreaming=="function"&&!O(a)&&!o)try{var h=fetch(a,{credentials:"same-origin"}),p=await WebAssembly.instantiateStreaming(h,c);return p}catch(x){L(`wasm streaming compile failed: ${x}`),L("falling back to ArrayBuffer instantiation")}return ye(a,c)}function $e(){return{env:Nc,wasi_snapshot_preview1:Nc}}async function qe(){function r(w,b){return mi=w.exports,pt=mi.memory,R(pt,"memory not found in wasm exports"),qt(),Wr=mi.__indirect_function_table,R(Wr,"table not found in wasm exports"),hf(mi),de("wasm-instantiate"),mi}J("wasm-instantiate");var a=t;function c(w){return R(t===a,"the Module object should not be replaced during async compilation - perhaps the order of HTML elements is wrong?"),a=null,r(w.instance)}var h=$e();if(t.instantiateWasm)return new Promise((w,b)=>{try{t.instantiateWasm(h,(U,X)=>{w(r(U,X))})}catch(U){L(`Module.instantiateWasm callback failed with error: ${U}`),b(U)}});Oe??=Ce();var p=await Fe(I,Oe,h),x=c(p);return x}class Ue{name="ExitStatus";constructor(a){this.message=`Program terminated with exit(${a})`,this.status=a}}var st=r=>{for(;r.length>0;)r.shift()(t)},Je=[],yt=r=>Je.push(r),B=[],be=r=>B.push(r),ie=!0,he=r=>(R(typeof r=="number"),r>>>=0,"0x"+r.toString(16).padStart(8,"0")),q=r=>Pc(r),Y=()=>Dc(),je=r=>{je.shown||={},je.shown[r]||(je.shown[r]=1,o&&(r="warning: "+r),L(r))},Tt=typeof TextDecoder<"u"?new TextDecoder:void 0,Rt=(r,a=0,c=NaN)=>{for(var h=a+c,p=a;r[p]&&!(p>=h);)++p;if(p-a>16&&r.buffer&&Tt)return Tt.decode(r.subarray(a,p));for(var x="";a<p;){var w=r[a++];if(!(w&128)){x+=String.fromCharCode(w);continue}var b=r[a++]&63;if((w&224)==192){x+=String.fromCharCode((w&31)<<6|b);continue}var U=r[a++]&63;if((w&240)==224?w=(w&15)<<12|b<<6|U:((w&248)!=240&&je("Invalid UTF-8 leading byte "+he(w)+" encountered when deserializing a UTF-8 string in wasm memory to a JS string!"),w=(w&7)<<18|b<<12|U<<6|r[a++]&63),w<65536)x+=String.fromCharCode(w);else{var X=w-65536;x+=String.fromCharCode(55296|X>>10,56320|X&1023)}}return x},rt=(r,a)=>(R(typeof r=="number",`UTF8ToString expects a number (got ${typeof r})`),r?Rt(_e,r,a):""),an=(r,a,c,h)=>le(`Assertion failed: ${rt(r)}, at: `+[a?rt(a):"unknown filename",c,h?rt(h):"unknown function"]),Lt=[],ci=0,Pr=r=>{var a=new li(r);return a.get_caught()||(a.set_caught(!0),ci--),a.set_rethrown(!1),Lt.push(a),Jr(r),Uc(r)},Nn=()=>{if(!Lt.length)return 0;var r=Lt[Lt.length-1];return Jr(r.excPtr),r.excPtr},on=0,Ir=()=>{ge(0,0),R(Lt.length>0);var r=Lt.pop();ra(r.excPtr),on=0};class li{constructor(a){this.excPtr=a,this.ptr=a-24}set_type(a){Me[this.ptr+4>>2]=a}get_type(){return Me[this.ptr+4>>2]}set_destructor(a){Me[this.ptr+8>>2]=a}get_destructor(){return Me[this.ptr+8>>2]}set_caught(a){a=a?1:0,ne[this.ptr+12]=a}get_caught(){return ne[this.ptr+12]!=0}set_rethrown(a){a=a?1:0,ne[this.ptr+13]=a}get_rethrown(){return ne[this.ptr+13]!=0}init(a,c){this.set_adjusted_ptr(0),this.set_type(a),this.set_destructor(c)}set_adjusted_ptr(a){Me[this.ptr+16>>2]=a}get_adjusted_ptr(){return Me[this.ptr+16>>2]}}var On=r=>Cc(r),Ii=r=>{var a=on?.excPtr;if(!a)return On(0),0;var c=new li(a);c.set_adjusted_ptr(a);var h=c.get_type();if(!h)return On(0),a;for(var p of r){if(p===0||p===h)break;var x=c.ptr+16;if(Fc(p,h,x))return On(p),a}return On(h),a},Di=()=>Ii([]),Dr=r=>Ii([r]),Lr=(r,a)=>Ii([r,a]),Fr=()=>{var r=Lt.pop();r||le("no exception to throw");var a=r.excPtr;throw r.get_rethrown()||(Lt.push(r),r.set_rethrown(!0),r.set_caught(!1),ci++),on=new te(a),on},Ws=r=>{if(r){var a=new li(r);Lt.push(a),a.set_rethrown(!0),Fr()}},Xs=(r,a,c)=>{var h=new li(r);throw h.init(a,c),on=new te(r),ci++,on},P=()=>ci,V=r=>{throw on||(on=new te(r)),on},j={isAbs:r=>r.charAt(0)==="/",splitPath:r=>{var a=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;return a.exec(r).slice(1)},normalizeArray:(r,a)=>{for(var c=0,h=r.length-1;h>=0;h--){var p=r[h];p==="."?r.splice(h,1):p===".."?(r.splice(h,1),c++):c&&(r.splice(h,1),c--)}if(a)for(;c;c--)r.unshift("..");return r},normalize:r=>{var a=j.isAbs(r),c=r.slice(-1)==="/";return r=j.normalizeArray(r.split("/").filter(h=>!!h),!a).join("/"),!r&&!a&&(r="."),r&&c&&(r+="/"),(a?"/":"")+r},dirname:r=>{var a=j.splitPath(r),c=a[0],h=a[1];return!c&&!h?".":(h&&(h=h.slice(0,-1)),c+h)},basename:r=>r&&r.match(/([^\/]+|\/)\/*$/)[1],join:(...r)=>j.normalize(r.join("/")),join2:(r,a)=>j.normalize(r+"/"+a)},Q=()=>{if(o){var r=u("crypto");return a=>r.randomFillSync(a)}return a=>crypto.getRandomValues(a)},W=r=>{(W=Q())(r)},xe={resolve:(...r)=>{for(var a="",c=!1,h=r.length-1;h>=-1&&!c;h--){var p=h>=0?r[h]:M.cwd();if(typeof p!="string")throw new TypeError("Arguments to path.resolve must be strings");if(!p)return"";a=p+"/"+a,c=j.isAbs(p)}return a=j.normalizeArray(a.split("/").filter(x=>!!x),!c).join("/"),(c?"/":"")+a||"."},relative:(r,a)=>{r=xe.resolve(r).slice(1),a=xe.resolve(a).slice(1);function c(X){for(var Z=0;Z<X.length&&X[Z]==="";Z++);for(var oe=X.length-1;oe>=0&&X[oe]==="";oe--);return Z>oe?[]:X.slice(Z,oe-Z+1)}for(var h=c(r.split("/")),p=c(a.split("/")),x=Math.min(h.length,p.length),w=x,b=0;b<x;b++)if(h[b]!==p[b]){w=b;break}for(var U=[],b=w;b<h.length;b++)U.push("..");return U=U.concat(p.slice(w)),U.join("/")}},Te=[],Ne=r=>{for(var a=0,c=0;c<r.length;++c){var h=r.charCodeAt(c);h<=127?a++:h<=2047?a+=2:h>=55296&&h<=57343?(a+=4,++c):a+=3}return a},ke=(r,a,c,h)=>{if(R(typeof r=="string",`stringToUTF8Array expects a string (got ${typeof r})`),!(h>0))return 0;for(var p=c,x=c+h-1,w=0;w<r.length;++w){var b=r.codePointAt(w);if(b<=127){if(c>=x)break;a[c++]=b}else if(b<=2047){if(c+1>=x)break;a[c++]=192|b>>6,a[c++]=128|b&63}else if(b<=65535){if(c+2>=x)break;a[c++]=224|b>>12,a[c++]=128|b>>6&63,a[c++]=128|b&63}else{if(c+3>=x)break;b>1114111&&je("Invalid Unicode code point "+he(b)+" encountered when serializing a JS string to a UTF-8 string in wasm memory! (Valid unicode code points should be in range 0-0x10FFFF)."),a[c++]=240|b>>18,a[c++]=128|b>>12&63,a[c++]=128|b>>6&63,a[c++]=128|b&63,w++}}return a[c]=0,c-p},Ye=(r,a,c)=>{var h=Ne(r)+1,p=new Array(h),x=ke(r,p,0,p.length);return p.length=x,p},Ke=()=>{if(!Te.length){var r=null;if(o){var a=256,c=Buffer.alloc(a),h=0,p=process.stdin.fd;try{h=_.readSync(p,c,0,a)}catch(x){if(x.toString().includes("EOF"))h=0;else throw x}h>0&&(r=c.slice(0,h).toString("utf-8"))}else typeof window<"u"&&typeof window.prompt=="function"&&(r=window.prompt("Input: "),r!==null&&(r+=`
`));if(!r)return null;Te=Ye(r)}return Te.shift()},Ie={ttys:[],init(){},shutdown(){},register(r,a){Ie.ttys[r]={input:[],output:[],ops:a},M.registerDevice(r,Ie.stream_ops)},stream_ops:{open(r){var a=Ie.ttys[r.node.rdev];if(!a)throw new M.ErrnoError(43);r.tty=a,r.seekable=!1},close(r){r.tty.ops.fsync(r.tty)},fsync(r){r.tty.ops.fsync(r.tty)},read(r,a,c,h,p){if(!r.tty||!r.tty.ops.get_char)throw new M.ErrnoError(60);for(var x=0,w=0;w<h;w++){var b;try{b=r.tty.ops.get_char(r.tty)}catch{throw new M.ErrnoError(29)}if(b===void 0&&x===0)throw new M.ErrnoError(6);if(b==null)break;x++,a[c+w]=b}return x&&(r.node.atime=Date.now()),x},write(r,a,c,h,p){if(!r.tty||!r.tty.ops.put_char)throw new M.ErrnoError(60);try{for(var x=0;x<h;x++)r.tty.ops.put_char(r.tty,a[c+x])}catch{throw new M.ErrnoError(29)}return h&&(r.node.mtime=r.node.ctime=Date.now()),x}},default_tty_ops:{get_char(r){return Ke()},put_char(r,a){a===null||a===10?(N(Rt(r.output)),r.output=[]):a!=0&&r.output.push(a)},fsync(r){r.output?.length>0&&(N(Rt(r.output)),r.output=[])},ioctl_tcgets(r){return{c_iflag:25856,c_oflag:5,c_cflag:191,c_lflag:35387,c_cc:[3,28,127,21,4,0,1,0,17,19,26,0,18,15,23,22,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}},ioctl_tcsets(r,a,c){return 0},ioctl_tiocgwinsz(r){return[24,80]}},default_tty1_ops:{put_char(r,a){a===null||a===10?(L(Rt(r.output)),r.output=[]):a!=0&&r.output.push(a)},fsync(r){r.output?.length>0&&(L(Rt(r.output)),r.output=[])}}},ht=r=>{le("internal error: mmapAlloc called but `emscripten_builtin_memalign` native symbol not exported")},Re={ops_table:null,mount(r){return Re.createNode(null,"/",16895,0)},createNode(r,a,c,h){if(M.isBlkdev(c)||M.isFIFO(c))throw new M.ErrnoError(63);Re.ops_table||={dir:{node:{getattr:Re.node_ops.getattr,setattr:Re.node_ops.setattr,lookup:Re.node_ops.lookup,mknod:Re.node_ops.mknod,rename:Re.node_ops.rename,unlink:Re.node_ops.unlink,rmdir:Re.node_ops.rmdir,readdir:Re.node_ops.readdir,symlink:Re.node_ops.symlink},stream:{llseek:Re.stream_ops.llseek}},file:{node:{getattr:Re.node_ops.getattr,setattr:Re.node_ops.setattr},stream:{llseek:Re.stream_ops.llseek,read:Re.stream_ops.read,write:Re.stream_ops.write,mmap:Re.stream_ops.mmap,msync:Re.stream_ops.msync}},link:{node:{getattr:Re.node_ops.getattr,setattr:Re.node_ops.setattr,readlink:Re.node_ops.readlink},stream:{}},chrdev:{node:{getattr:Re.node_ops.getattr,setattr:Re.node_ops.setattr},stream:M.chrdev_stream_ops}};var p=M.createNode(r,a,c,h);return M.isDir(p.mode)?(p.node_ops=Re.ops_table.dir.node,p.stream_ops=Re.ops_table.dir.stream,p.contents={}):M.isFile(p.mode)?(p.node_ops=Re.ops_table.file.node,p.stream_ops=Re.ops_table.file.stream,p.usedBytes=0,p.contents=null):M.isLink(p.mode)?(p.node_ops=Re.ops_table.link.node,p.stream_ops=Re.ops_table.link.stream):M.isChrdev(p.mode)&&(p.node_ops=Re.ops_table.chrdev.node,p.stream_ops=Re.ops_table.chrdev.stream),p.atime=p.mtime=p.ctime=Date.now(),r&&(r.contents[a]=p,r.atime=r.mtime=r.ctime=p.atime),p},getFileDataAsTypedArray(r){return r.contents?r.contents.subarray?r.contents.subarray(0,r.usedBytes):new Uint8Array(r.contents):new Uint8Array(0)},expandFileStorage(r,a){var c=r.contents?r.contents.length:0;if(!(c>=a)){var h=1024*1024;a=Math.max(a,c*(c<h?2:1.125)>>>0),c!=0&&(a=Math.max(a,256));var p=r.contents;r.contents=new Uint8Array(a),r.usedBytes>0&&r.contents.set(p.subarray(0,r.usedBytes),0)}},resizeFileStorage(r,a){if(r.usedBytes!=a)if(a==0)r.contents=null,r.usedBytes=0;else{var c=r.contents;r.contents=new Uint8Array(a),c&&r.contents.set(c.subarray(0,Math.min(a,r.usedBytes))),r.usedBytes=a}},node_ops:{getattr(r){var a={};return a.dev=M.isChrdev(r.mode)?r.id:1,a.ino=r.id,a.mode=r.mode,a.nlink=1,a.uid=0,a.gid=0,a.rdev=r.rdev,M.isDir(r.mode)?a.size=4096:M.isFile(r.mode)?a.size=r.usedBytes:M.isLink(r.mode)?a.size=r.link.length:a.size=0,a.atime=new Date(r.atime),a.mtime=new Date(r.mtime),a.ctime=new Date(r.ctime),a.blksize=4096,a.blocks=Math.ceil(a.size/a.blksize),a},setattr(r,a){for(const c of["mode","atime","mtime","ctime"])a[c]!=null&&(r[c]=a[c]);a.size!==void 0&&Re.resizeFileStorage(r,a.size)},lookup(r,a){throw new M.ErrnoError(44)},mknod(r,a,c,h){return Re.createNode(r,a,c,h)},rename(r,a,c){var h;try{h=M.lookupNode(a,c)}catch{}if(h){if(M.isDir(r.mode))for(var p in h.contents)throw new M.ErrnoError(55);M.hashRemoveNode(h)}delete r.parent.contents[r.name],a.contents[c]=r,r.name=c,a.ctime=a.mtime=r.parent.ctime=r.parent.mtime=Date.now()},unlink(r,a){delete r.contents[a],r.ctime=r.mtime=Date.now()},rmdir(r,a){var c=M.lookupNode(r,a);for(var h in c.contents)throw new M.ErrnoError(55);delete r.contents[a],r.ctime=r.mtime=Date.now()},readdir(r){return[".","..",...Object.keys(r.contents)]},symlink(r,a,c){var h=Re.createNode(r,a,41471,0);return h.link=c,h},readlink(r){if(!M.isLink(r.mode))throw new M.ErrnoError(28);return r.link}},stream_ops:{read(r,a,c,h,p){var x=r.node.contents;if(p>=r.node.usedBytes)return 0;var w=Math.min(r.node.usedBytes-p,h);if(R(w>=0),w>8&&x.subarray)a.set(x.subarray(p,p+w),c);else for(var b=0;b<w;b++)a[c+b]=x[p+b];return w},write(r,a,c,h,p,x){if(R(!(a instanceof ArrayBuffer)),a.buffer===ne.buffer&&(x=!1),!h)return 0;var w=r.node;if(w.mtime=w.ctime=Date.now(),a.subarray&&(!w.contents||w.contents.subarray)){if(x)return R(p===0,"canOwn must imply no weird position inside the file"),w.contents=a.subarray(c,c+h),w.usedBytes=h,h;if(w.usedBytes===0&&p===0)return w.contents=a.slice(c,c+h),w.usedBytes=h,h;if(p+h<=w.usedBytes)return w.contents.set(a.subarray(c,c+h),p),h}if(Re.expandFileStorage(w,p+h),w.contents.subarray&&a.subarray)w.contents.set(a.subarray(c,c+h),p);else for(var b=0;b<h;b++)w.contents[p+b]=a[c+b];return w.usedBytes=Math.max(w.usedBytes,p+h),h},llseek(r,a,c){var h=a;if(c===1?h+=r.position:c===2&&M.isFile(r.node.mode)&&(h+=r.node.usedBytes),h<0)throw new M.ErrnoError(28);return h},mmap(r,a,c,h,p){if(!M.isFile(r.node.mode))throw new M.ErrnoError(43);var x,w,b=r.node.contents;if(!(p&2)&&b&&b.buffer===ne.buffer)w=!1,x=b.byteOffset;else{if(w=!0,x=ht(),!x)throw new M.ErrnoError(48);b&&((c>0||c+a<b.length)&&(b.subarray?b=b.subarray(c,c+a):b=Array.prototype.slice.call(b,c,c+a)),ne.set(b,x))}return{ptr:x,allocated:w}},msync(r,a,c,h,p){return Re.stream_ops.write(r,a,0,h,c,!1),0}}},wt=async r=>{var a=await y(r);return R(a,`Loading data file "${r}" failed (no arrayBuffer).`),new Uint8Array(a)},Ht=(...r)=>M.createDataFile(...r),xt=r=>{for(var a=r;;){if(!F[r])return r;r=a+Math.random()}},Be=[],gn=(r,a,c,h)=>{typeof Browser<"u"&&Browser.init();var p=!1;return Be.forEach(x=>{p||x.canHandle(a)&&(x.handle(r,a,c,h),p=!0)}),p},_t=(r,a,c,h,p,x,w,b,U,X)=>{var Z=a?xe.resolve(j.join2(r,a)):r,oe=xt(`cp ${Z}`);function ue(ce){function me(Ve){X?.(),b||Ht(r,a,Ve,h,p,U),x?.(),de(oe)}gn(ce,Z,me,()=>{w?.(),de(oe)})||me(ce)}J(oe),typeof c=="string"?wt(c).then(ue,w):ue(c)},cn=r=>{var a={r:0,"r+":2,w:577,"w+":578,a:1089,"a+":1090},c=a[r];if(typeof c>"u")throw new Error(`Unknown file open mode: ${r}`);return c},bn=(r,a)=>{var c=0;return r&&(c|=365),a&&(c|=146),c},Zt=r=>rt(Ac(r)),Zn={EPERM:63,ENOENT:44,ESRCH:71,EINTR:27,EIO:29,ENXIO:60,E2BIG:1,ENOEXEC:45,EBADF:8,ECHILD:12,EAGAIN:6,EWOULDBLOCK:6,ENOMEM:48,EACCES:2,EFAULT:21,ENOTBLK:105,EBUSY:10,EEXIST:20,EXDEV:75,ENODEV:43,ENOTDIR:54,EISDIR:31,EINVAL:28,ENFILE:41,EMFILE:33,ENOTTY:59,ETXTBSY:74,EFBIG:22,ENOSPC:51,ESPIPE:70,EROFS:69,EMLINK:34,EPIPE:64,EDOM:18,ERANGE:68,ENOMSG:49,EIDRM:24,ECHRNG:106,EL2NSYNC:156,EL3HLT:107,EL3RST:108,ELNRNG:109,EUNATCH:110,ENOCSI:111,EL2HLT:112,EDEADLK:16,ENOLCK:46,EBADE:113,EBADR:114,EXFULL:115,ENOANO:104,EBADRQC:103,EBADSLT:102,EDEADLOCK:16,EBFONT:101,ENOSTR:100,ENODATA:116,ETIME:117,ENOSR:118,ENONET:119,ENOPKG:120,EREMOTE:121,ENOLINK:47,EADV:122,ESRMNT:123,ECOMM:124,EPROTO:65,EMULTIHOP:36,EDOTDOT:125,EBADMSG:9,ENOTUNIQ:126,EBADFD:127,EREMCHG:128,ELIBACC:129,ELIBBAD:130,ELIBSCN:131,ELIBMAX:132,ELIBEXEC:133,ENOSYS:52,ENOTEMPTY:55,ENAMETOOLONG:37,ELOOP:32,EOPNOTSUPP:138,EPFNOSUPPORT:139,ECONNRESET:15,ENOBUFS:42,EAFNOSUPPORT:5,EPROTOTYPE:67,ENOTSOCK:57,ENOPROTOOPT:50,ESHUTDOWN:140,ECONNREFUSED:14,EADDRINUSE:3,ECONNABORTED:13,ENETUNREACH:40,ENETDOWN:38,ETIMEDOUT:73,EHOSTDOWN:142,EHOSTUNREACH:23,EINPROGRESS:26,EALREADY:7,EDESTADDRREQ:17,EMSGSIZE:35,EPROTONOSUPPORT:66,ESOCKTNOSUPPORT:137,EADDRNOTAVAIL:4,ENETRESET:39,EISCONN:30,ENOTCONN:53,ETOOMANYREFS:141,EUSERS:136,EDQUOT:19,ESTALE:72,ENOTSUP:138,ENOMEDIUM:148,EILSEQ:25,EOVERFLOW:61,ECANCELED:11,ENOTRECOVERABLE:56,EOWNERDEAD:62,ESTRPIPE:135},M={root:null,mounts:[],devices:{},streams:[],nextInode:1,nameTable:null,currentPath:"/",initialized:!1,ignorePermissions:!0,filesystems:null,syncFSRequests:0,readFiles:{},ErrnoError:class extends Error{name="ErrnoError";constructor(r){super(H?Zt(r):""),this.errno=r;for(var a in Zn)if(Zn[a]===r){this.code=a;break}}},FSStream:class{shared={};get object(){return this.node}set object(r){this.node=r}get isRead(){return(this.flags&2097155)!==1}get isWrite(){return(this.flags&2097155)!==0}get isAppend(){return this.flags&1024}get flags(){return this.shared.flags}set flags(r){this.shared.flags=r}get position(){return this.shared.position}set position(r){this.shared.position=r}},FSNode:class{node_ops={};stream_ops={};readMode=365;writeMode=146;mounted=null;constructor(r,a,c,h){r||(r=this),this.parent=r,this.mount=r.mount,this.id=M.nextInode++,this.name=a,this.mode=c,this.rdev=h,this.atime=this.mtime=this.ctime=Date.now()}get read(){return(this.mode&this.readMode)===this.readMode}set read(r){r?this.mode|=this.readMode:this.mode&=~this.readMode}get write(){return(this.mode&this.writeMode)===this.writeMode}set write(r){r?this.mode|=this.writeMode:this.mode&=~this.writeMode}get isFolder(){return M.isDir(this.mode)}get isDevice(){return M.isChrdev(this.mode)}},lookupPath(r,a={}){if(!r)throw new M.ErrnoError(44);a.follow_mount??=!0,j.isAbs(r)||(r=M.cwd()+"/"+r);e:for(var c=0;c<40;c++){for(var h=r.split("/").filter(X=>!!X),p=M.root,x="/",w=0;w<h.length;w++){var b=w===h.length-1;if(b&&a.parent)break;if(h[w]!=="."){if(h[w]===".."){if(x=j.dirname(x),M.isRoot(p)){r=x+"/"+h.slice(w+1).join("/");continue e}else p=p.parent;continue}x=j.join2(x,h[w]);try{p=M.lookupNode(p,h[w])}catch(X){if(X?.errno===44&&b&&a.noent_okay)return{path:x};throw X}if(M.isMountpoint(p)&&(!b||a.follow_mount)&&(p=p.mounted.root),M.isLink(p.mode)&&(!b||a.follow)){if(!p.node_ops.readlink)throw new M.ErrnoError(52);var U=p.node_ops.readlink(p);j.isAbs(U)||(U=j.dirname(x)+"/"+U),r=U+"/"+h.slice(w+1).join("/");continue e}}}return{path:x,node:p}}throw new M.ErrnoError(32)},getPath(r){for(var a;;){if(M.isRoot(r)){var c=r.mount.mountpoint;return a?c[c.length-1]!=="/"?`${c}/${a}`:c+a:c}a=a?`${r.name}/${a}`:r.name,r=r.parent}},hashName(r,a){for(var c=0,h=0;h<a.length;h++)c=(c<<5)-c+a.charCodeAt(h)|0;return(r+c>>>0)%M.nameTable.length},hashAddNode(r){var a=M.hashName(r.parent.id,r.name);r.name_next=M.nameTable[a],M.nameTable[a]=r},hashRemoveNode(r){var a=M.hashName(r.parent.id,r.name);if(M.nameTable[a]===r)M.nameTable[a]=r.name_next;else for(var c=M.nameTable[a];c;){if(c.name_next===r){c.name_next=r.name_next;break}c=c.name_next}},lookupNode(r,a){var c=M.mayLookup(r);if(c)throw new M.ErrnoError(c);for(var h=M.hashName(r.id,a),p=M.nameTable[h];p;p=p.name_next){var x=p.name;if(p.parent.id===r.id&&x===a)return p}return M.lookup(r,a)},createNode(r,a,c,h){R(typeof r=="object");var p=new M.FSNode(r,a,c,h);return M.hashAddNode(p),p},destroyNode(r){M.hashRemoveNode(r)},isRoot(r){return r===r.parent},isMountpoint(r){return!!r.mounted},isFile(r){return(r&61440)===32768},isDir(r){return(r&61440)===16384},isLink(r){return(r&61440)===40960},isChrdev(r){return(r&61440)===8192},isBlkdev(r){return(r&61440)===24576},isFIFO(r){return(r&61440)===4096},isSocket(r){return(r&49152)===49152},flagsToPermissionString(r){var a=["r","w","rw"][r&3];return r&512&&(a+="w"),a},nodePermissions(r,a){return M.ignorePermissions?0:a.includes("r")&&!(r.mode&292)||a.includes("w")&&!(r.mode&146)||a.includes("x")&&!(r.mode&73)?2:0},mayLookup(r){if(!M.isDir(r.mode))return 54;var a=M.nodePermissions(r,"x");return a||(r.node_ops.lookup?0:2)},mayCreate(r,a){if(!M.isDir(r.mode))return 54;try{var c=M.lookupNode(r,a);return 20}catch{}return M.nodePermissions(r,"wx")},mayDelete(r,a,c){var h;try{h=M.lookupNode(r,a)}catch(x){return x.errno}var p=M.nodePermissions(r,"wx");if(p)return p;if(c){if(!M.isDir(h.mode))return 54;if(M.isRoot(h)||M.getPath(h)===M.cwd())return 10}else if(M.isDir(h.mode))return 31;return 0},mayOpen(r,a){return r?M.isLink(r.mode)?32:M.isDir(r.mode)&&(M.flagsToPermissionString(a)!=="r"||a&576)?31:M.nodePermissions(r,M.flagsToPermissionString(a)):44},checkOpExists(r,a){if(!r)throw new M.ErrnoError(a);return r},MAX_OPEN_FDS:4096,nextfd(){for(var r=0;r<=M.MAX_OPEN_FDS;r++)if(!M.streams[r])return r;throw new M.ErrnoError(33)},getStreamChecked(r){var a=M.getStream(r);if(!a)throw new M.ErrnoError(8);return a},getStream:r=>M.streams[r],createStream(r,a=-1){return R(a>=-1),r=Object.assign(new M.FSStream,r),a==-1&&(a=M.nextfd()),r.fd=a,M.streams[a]=r,r},closeStream(r){M.streams[r]=null},dupStream(r,a=-1){var c=M.createStream(r,a);return c.stream_ops?.dup?.(c),c},doSetAttr(r,a,c){var h=r?.stream_ops.setattr,p=h?r:a;h??=a.node_ops.setattr,M.checkOpExists(h,63),h(p,c)},chrdev_stream_ops:{open(r){var a=M.getDevice(r.node.rdev);r.stream_ops=a.stream_ops,r.stream_ops.open?.(r)},llseek(){throw new M.ErrnoError(70)}},major:r=>r>>8,minor:r=>r&255,makedev:(r,a)=>r<<8|a,registerDevice(r,a){M.devices[r]={stream_ops:a}},getDevice:r=>M.devices[r],getMounts(r){for(var a=[],c=[r];c.length;){var h=c.pop();a.push(h),c.push(...h.mounts)}return a},syncfs(r,a){typeof r=="function"&&(a=r,r=!1),M.syncFSRequests++,M.syncFSRequests>1&&L(`warning: ${M.syncFSRequests} FS.syncfs operations in flight at once, probably just doing extra work`);var c=M.getMounts(M.root.mount),h=0;function p(w){return R(M.syncFSRequests>0),M.syncFSRequests--,a(w)}function x(w){if(w)return x.errored?void 0:(x.errored=!0,p(w));++h>=c.length&&p(null)}c.forEach(w=>{if(!w.type.syncfs)return x(null);w.type.syncfs(w,r,x)})},mount(r,a,c){if(typeof r=="string")throw r;var h=c==="/",p=!c,x;if(h&&M.root)throw new M.ErrnoError(10);if(!h&&!p){var w=M.lookupPath(c,{follow_mount:!1});if(c=w.path,x=w.node,M.isMountpoint(x))throw new M.ErrnoError(10);if(!M.isDir(x.mode))throw new M.ErrnoError(54)}var b={type:r,opts:a,mountpoint:c,mounts:[]},U=r.mount(b);return U.mount=b,b.root=U,h?M.root=U:x&&(x.mounted=b,x.mount&&x.mount.mounts.push(b)),U},unmount(r){var a=M.lookupPath(r,{follow_mount:!1});if(!M.isMountpoint(a.node))throw new M.ErrnoError(28);var c=a.node,h=c.mounted,p=M.getMounts(h);Object.keys(M.nameTable).forEach(w=>{for(var b=M.nameTable[w];b;){var U=b.name_next;p.includes(b.mount)&&M.destroyNode(b),b=U}}),c.mounted=null;var x=c.mount.mounts.indexOf(h);R(x!==-1),c.mount.mounts.splice(x,1)},lookup(r,a){return r.node_ops.lookup(r,a)},mknod(r,a,c){var h=M.lookupPath(r,{parent:!0}),p=h.node,x=j.basename(r);if(!x)throw new M.ErrnoError(28);if(x==="."||x==="..")throw new M.ErrnoError(20);var w=M.mayCreate(p,x);if(w)throw new M.ErrnoError(w);if(!p.node_ops.mknod)throw new M.ErrnoError(63);return p.node_ops.mknod(p,x,a,c)},statfs(r){return M.statfsNode(M.lookupPath(r,{follow:!0}).node)},statfsStream(r){return M.statfsNode(r.node)},statfsNode(r){var a={bsize:4096,frsize:4096,blocks:1e6,bfree:5e5,bavail:5e5,files:M.nextInode,ffree:M.nextInode-1,fsid:42,flags:2,namelen:255};return r.node_ops.statfs&&Object.assign(a,r.node_ops.statfs(r.mount.opts.root)),a},create(r,a=438){return a&=4095,a|=32768,M.mknod(r,a,0)},mkdir(r,a=511){return a&=1023,a|=16384,M.mknod(r,a,0)},mkdirTree(r,a){var c=r.split("/"),h="";for(var p of c)if(p){(h||j.isAbs(r))&&(h+="/"),h+=p;try{M.mkdir(h,a)}catch(x){if(x.errno!=20)throw x}}},mkdev(r,a,c){return typeof c>"u"&&(c=a,a=438),a|=8192,M.mknod(r,a,c)},symlink(r,a){if(!xe.resolve(r))throw new M.ErrnoError(44);var c=M.lookupPath(a,{parent:!0}),h=c.node;if(!h)throw new M.ErrnoError(44);var p=j.basename(a),x=M.mayCreate(h,p);if(x)throw new M.ErrnoError(x);if(!h.node_ops.symlink)throw new M.ErrnoError(63);return h.node_ops.symlink(h,p,r)},rename(r,a){var c=j.dirname(r),h=j.dirname(a),p=j.basename(r),x=j.basename(a),w,b,U;if(w=M.lookupPath(r,{parent:!0}),b=w.node,w=M.lookupPath(a,{parent:!0}),U=w.node,!b||!U)throw new M.ErrnoError(44);if(b.mount!==U.mount)throw new M.ErrnoError(75);var X=M.lookupNode(b,p),Z=xe.relative(r,h);if(Z.charAt(0)!==".")throw new M.ErrnoError(28);if(Z=xe.relative(a,c),Z.charAt(0)!==".")throw new M.ErrnoError(55);var oe;try{oe=M.lookupNode(U,x)}catch{}if(X!==oe){var ue=M.isDir(X.mode),ce=M.mayDelete(b,p,ue);if(ce)throw new M.ErrnoError(ce);if(ce=oe?M.mayDelete(U,x,ue):M.mayCreate(U,x),ce)throw new M.ErrnoError(ce);if(!b.node_ops.rename)throw new M.ErrnoError(63);if(M.isMountpoint(X)||oe&&M.isMountpoint(oe))throw new M.ErrnoError(10);if(U!==b&&(ce=M.nodePermissions(b,"w"),ce))throw new M.ErrnoError(ce);M.hashRemoveNode(X);try{b.node_ops.rename(X,U,x),X.parent=U}catch(me){throw me}finally{M.hashAddNode(X)}}},rmdir(r){var a=M.lookupPath(r,{parent:!0}),c=a.node,h=j.basename(r),p=M.lookupNode(c,h),x=M.mayDelete(c,h,!0);if(x)throw new M.ErrnoError(x);if(!c.node_ops.rmdir)throw new M.ErrnoError(63);if(M.isMountpoint(p))throw new M.ErrnoError(10);c.node_ops.rmdir(c,h),M.destroyNode(p)},readdir(r){var a=M.lookupPath(r,{follow:!0}),c=a.node,h=M.checkOpExists(c.node_ops.readdir,54);return h(c)},unlink(r){var a=M.lookupPath(r,{parent:!0}),c=a.node;if(!c)throw new M.ErrnoError(44);var h=j.basename(r),p=M.lookupNode(c,h),x=M.mayDelete(c,h,!1);if(x)throw new M.ErrnoError(x);if(!c.node_ops.unlink)throw new M.ErrnoError(63);if(M.isMountpoint(p))throw new M.ErrnoError(10);c.node_ops.unlink(c,h),M.destroyNode(p)},readlink(r){var a=M.lookupPath(r),c=a.node;if(!c)throw new M.ErrnoError(44);if(!c.node_ops.readlink)throw new M.ErrnoError(28);return c.node_ops.readlink(c)},stat(r,a){var c=M.lookupPath(r,{follow:!a}),h=c.node,p=M.checkOpExists(h.node_ops.getattr,63);return p(h)},fstat(r){var a=M.getStreamChecked(r),c=a.node,h=a.stream_ops.getattr,p=h?a:c;return h??=c.node_ops.getattr,M.checkOpExists(h,63),h(p)},lstat(r){return M.stat(r,!0)},doChmod(r,a,c,h){M.doSetAttr(r,a,{mode:c&4095|a.mode&-4096,ctime:Date.now(),dontFollow:h})},chmod(r,a,c){var h;if(typeof r=="string"){var p=M.lookupPath(r,{follow:!c});h=p.node}else h=r;M.doChmod(null,h,a,c)},lchmod(r,a){M.chmod(r,a,!0)},fchmod(r,a){var c=M.getStreamChecked(r);M.doChmod(c,c.node,a,!1)},doChown(r,a,c){M.doSetAttr(r,a,{timestamp:Date.now(),dontFollow:c})},chown(r,a,c,h){var p;if(typeof r=="string"){var x=M.lookupPath(r,{follow:!h});p=x.node}else p=r;M.doChown(null,p,h)},lchown(r,a,c){M.chown(r,a,c,!0)},fchown(r,a,c){var h=M.getStreamChecked(r);M.doChown(h,h.node,!1)},doTruncate(r,a,c){if(M.isDir(a.mode))throw new M.ErrnoError(31);if(!M.isFile(a.mode))throw new M.ErrnoError(28);var h=M.nodePermissions(a,"w");if(h)throw new M.ErrnoError(h);M.doSetAttr(r,a,{size:c,timestamp:Date.now()})},truncate(r,a){if(a<0)throw new M.ErrnoError(28);var c;if(typeof r=="string"){var h=M.lookupPath(r,{follow:!0});c=h.node}else c=r;M.doTruncate(null,c,a)},ftruncate(r,a){var c=M.getStreamChecked(r);if(a<0||(c.flags&2097155)===0)throw new M.ErrnoError(28);M.doTruncate(c,c.node,a)},utime(r,a,c){var h=M.lookupPath(r,{follow:!0}),p=h.node,x=M.checkOpExists(p.node_ops.setattr,63);x(p,{atime:a,mtime:c})},open(r,a,c=438){if(r==="")throw new M.ErrnoError(44);a=typeof a=="string"?cn(a):a,a&64?c=c&4095|32768:c=0;var h,p;if(typeof r=="object")h=r;else{p=r.endsWith("/");var x=M.lookupPath(r,{follow:!(a&131072),noent_okay:!0});h=x.node,r=x.path}var w=!1;if(a&64)if(h){if(a&128)throw new M.ErrnoError(20)}else{if(p)throw new M.ErrnoError(31);h=M.mknod(r,c|511,0),w=!0}if(!h)throw new M.ErrnoError(44);if(M.isChrdev(h.mode)&&(a&=-513),a&65536&&!M.isDir(h.mode))throw new M.ErrnoError(54);if(!w){var b=M.mayOpen(h,a);if(b)throw new M.ErrnoError(b)}a&512&&!w&&M.truncate(h,0),a&=-131713;var U=M.createStream({node:h,path:M.getPath(h),flags:a,seekable:!0,position:0,stream_ops:h.stream_ops,ungotten:[],error:!1});return U.stream_ops.open&&U.stream_ops.open(U),w&&M.chmod(h,c&511),t.logReadFiles&&!(a&1)&&(r in M.readFiles||(M.readFiles[r]=1)),U},close(r){if(M.isClosed(r))throw new M.ErrnoError(8);r.getdents&&(r.getdents=null);try{r.stream_ops.close&&r.stream_ops.close(r)}catch(a){throw a}finally{M.closeStream(r.fd)}r.fd=null},isClosed(r){return r.fd===null},llseek(r,a,c){if(M.isClosed(r))throw new M.ErrnoError(8);if(!r.seekable||!r.stream_ops.llseek)throw new M.ErrnoError(70);if(c!=0&&c!=1&&c!=2)throw new M.ErrnoError(28);return r.position=r.stream_ops.llseek(r,a,c),r.ungotten=[],r.position},read(r,a,c,h,p){if(R(c>=0),h<0||p<0)throw new M.ErrnoError(28);if(M.isClosed(r))throw new M.ErrnoError(8);if((r.flags&2097155)===1)throw new M.ErrnoError(8);if(M.isDir(r.node.mode))throw new M.ErrnoError(31);if(!r.stream_ops.read)throw new M.ErrnoError(28);var x=typeof p<"u";if(!x)p=r.position;else if(!r.seekable)throw new M.ErrnoError(70);var w=r.stream_ops.read(r,a,c,h,p);return x||(r.position+=w),w},write(r,a,c,h,p,x){if(R(c>=0),h<0||p<0)throw new M.ErrnoError(28);if(M.isClosed(r))throw new M.ErrnoError(8);if((r.flags&2097155)===0)throw new M.ErrnoError(8);if(M.isDir(r.node.mode))throw new M.ErrnoError(31);if(!r.stream_ops.write)throw new M.ErrnoError(28);r.seekable&&r.flags&1024&&M.llseek(r,0,2);var w=typeof p<"u";if(!w)p=r.position;else if(!r.seekable)throw new M.ErrnoError(70);var b=r.stream_ops.write(r,a,c,h,p,x);return w||(r.position+=b),b},mmap(r,a,c,h,p){if((h&2)!==0&&(p&2)===0&&(r.flags&2097155)!==2)throw new M.ErrnoError(2);if((r.flags&2097155)===1)throw new M.ErrnoError(2);if(!r.stream_ops.mmap)throw new M.ErrnoError(43);if(!a)throw new M.ErrnoError(28);return r.stream_ops.mmap(r,a,c,h,p)},msync(r,a,c,h,p){return R(c>=0),r.stream_ops.msync?r.stream_ops.msync(r,a,c,h,p):0},ioctl(r,a,c){if(!r.stream_ops.ioctl)throw new M.ErrnoError(59);return r.stream_ops.ioctl(r,a,c)},readFile(r,a={}){if(a.flags=a.flags||0,a.encoding=a.encoding||"binary",a.encoding!=="utf8"&&a.encoding!=="binary")throw new Error(`Invalid encoding type "${a.encoding}"`);var c=M.open(r,a.flags),h=M.stat(r),p=h.size,x=new Uint8Array(p);return M.read(c,x,0,p,0),a.encoding==="utf8"&&(x=Rt(x)),M.close(c),x},writeFile(r,a,c={}){c.flags=c.flags||577;var h=M.open(r,c.flags,c.mode);if(typeof a=="string"&&(a=new Uint8Array(Ye(a))),ArrayBuffer.isView(a))M.write(h,a,0,a.byteLength,void 0,c.canOwn);else throw new Error("Unsupported data type");M.close(h)},cwd:()=>M.currentPath,chdir(r){var a=M.lookupPath(r,{follow:!0});if(a.node===null)throw new M.ErrnoError(44);if(!M.isDir(a.node.mode))throw new M.ErrnoError(54);var c=M.nodePermissions(a.node,"x");if(c)throw new M.ErrnoError(c);M.currentPath=a.path},createDefaultDirectories(){M.mkdir("/tmp"),M.mkdir("/home"),M.mkdir("/home/web_user")},createDefaultDevices(){M.mkdir("/dev"),M.registerDevice(M.makedev(1,3),{read:()=>0,write:(h,p,x,w,b)=>w,llseek:()=>0}),M.mkdev("/dev/null",M.makedev(1,3)),Ie.register(M.makedev(5,0),Ie.default_tty_ops),Ie.register(M.makedev(6,0),Ie.default_tty1_ops),M.mkdev("/dev/tty",M.makedev(5,0)),M.mkdev("/dev/tty1",M.makedev(6,0));var r=new Uint8Array(1024),a=0,c=()=>(a===0&&(W(r),a=r.byteLength),r[--a]);M.createDevice("/dev","random",c),M.createDevice("/dev","urandom",c),M.mkdir("/dev/shm"),M.mkdir("/dev/shm/tmp")},createSpecialDirectories(){M.mkdir("/proc");var r=M.mkdir("/proc/self");M.mkdir("/proc/self/fd"),M.mount({mount(){var a=M.createNode(r,"fd",16895,73);return a.stream_ops={llseek:Re.stream_ops.llseek},a.node_ops={lookup(c,h){var p=+h,x=M.getStreamChecked(p),w={parent:null,mount:{mountpoint:"fake"},node_ops:{readlink:()=>x.path},id:p+1};return w.parent=w,w},readdir(){return Array.from(M.streams.entries()).filter(([c,h])=>h).map(([c,h])=>c.toString())}},a}},{},"/proc/self/fd")},createStandardStreams(r,a,c){r?M.createDevice("/dev","stdin",r):M.symlink("/dev/tty","/dev/stdin"),a?M.createDevice("/dev","stdout",null,a):M.symlink("/dev/tty","/dev/stdout"),c?M.createDevice("/dev","stderr",null,c):M.symlink("/dev/tty1","/dev/stderr");var h=M.open("/dev/stdin",0),p=M.open("/dev/stdout",1),x=M.open("/dev/stderr",1);R(h.fd===0,`invalid handle for stdin (${h.fd})`),R(p.fd===1,`invalid handle for stdout (${p.fd})`),R(x.fd===2,`invalid handle for stderr (${x.fd})`)},staticInit(){M.nameTable=new Array(4096),M.mount(Re,{},"/"),M.createDefaultDirectories(),M.createDefaultDevices(),M.createSpecialDirectories(),M.filesystems={MEMFS:Re}},init(r,a,c){R(!M.initialized,"FS.init was previously called. If you want to initialize later with custom parameters, remove any earlier calls (note that one is automatically added to the generated code)"),M.initialized=!0,r??=t.stdin,a??=t.stdout,c??=t.stderr,M.createStandardStreams(r,a,c)},quit(){M.initialized=!1,na(0);for(var r of M.streams)r&&M.close(r)},findObject(r,a){var c=M.analyzePath(r,a);return c.exists?c.object:null},analyzePath(r,a){try{var c=M.lookupPath(r,{follow:!a});r=c.path}catch{}var h={isRoot:!1,exists:!1,error:0,name:null,path:null,object:null,parentExists:!1,parentPath:null,parentObject:null};try{var c=M.lookupPath(r,{parent:!0});h.parentExists=!0,h.parentPath=c.path,h.parentObject=c.node,h.name=j.basename(r),c=M.lookupPath(r,{follow:!a}),h.exists=!0,h.path=c.path,h.object=c.node,h.name=c.node.name,h.isRoot=c.path==="/"}catch(p){h.error=p.errno}return h},createPath(r,a,c,h){r=typeof r=="string"?r:M.getPath(r);for(var p=a.split("/").reverse();p.length;){var x=p.pop();if(x){var w=j.join2(r,x);try{M.mkdir(w)}catch(b){if(b.errno!=20)throw b}r=w}}return w},createFile(r,a,c,h,p){var x=j.join2(typeof r=="string"?r:M.getPath(r),a),w=bn(h,p);return M.create(x,w)},createDataFile(r,a,c,h,p,x){var w=a;r&&(r=typeof r=="string"?r:M.getPath(r),w=a?j.join2(r,a):r);var b=bn(h,p),U=M.create(w,b);if(c){if(typeof c=="string"){for(var X=new Array(c.length),Z=0,oe=c.length;Z<oe;++Z)X[Z]=c.charCodeAt(Z);c=X}M.chmod(U,b|146);var ue=M.open(U,577);M.write(ue,c,0,c.length,0,x),M.close(ue),M.chmod(U,b)}},createDevice(r,a,c,h){var p=j.join2(typeof r=="string"?r:M.getPath(r),a),x=bn(!!c,!!h);M.createDevice.major??=64;var w=M.makedev(M.createDevice.major++,0);return M.registerDevice(w,{open(b){b.seekable=!1},close(b){h?.buffer?.length&&h(10)},read(b,U,X,Z,oe){for(var ue=0,ce=0;ce<Z;ce++){var me;try{me=c()}catch{throw new M.ErrnoError(29)}if(me===void 0&&ue===0)throw new M.ErrnoError(6);if(me==null)break;ue++,U[X+ce]=me}return ue&&(b.node.atime=Date.now()),ue},write(b,U,X,Z,oe){for(var ue=0;ue<Z;ue++)try{h(U[X+ue])}catch{throw new M.ErrnoError(29)}return Z&&(b.node.mtime=b.node.ctime=Date.now()),ue}}),M.mkdev(p,x,w)},forceLoadFile(r){if(r.isDevice||r.isFolder||r.link||r.contents)return!0;if(typeof XMLHttpRequest<"u")throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");try{r.contents=T(r.url),r.usedBytes=r.contents.length}catch{throw new M.ErrnoError(29)}},createLazyFile(r,a,c,h,p){class x{lengthKnown=!1;chunks=[];get(ce){if(!(ce>this.length-1||ce<0)){var me=ce%this.chunkSize,Ve=ce/this.chunkSize|0;return this.getter(Ve)[me]}}setDataGetter(ce){this.getter=ce}cacheLength(){var ce=new XMLHttpRequest;if(ce.open("HEAD",c,!1),ce.send(null),!(ce.status>=200&&ce.status<300||ce.status===304))throw new Error("Couldn't load "+c+". Status: "+ce.status);var me=Number(ce.getResponseHeader("Content-length")),Ve,lt=(Ve=ce.getResponseHeader("Accept-Ranges"))&&Ve==="bytes",nt=(Ve=ce.getResponseHeader("Content-Encoding"))&&Ve==="gzip",bt=1024*1024;lt||(bt=me);var gt=(Nt,Kt)=>{if(Nt>Kt)throw new Error("invalid range ("+Nt+", "+Kt+") or no bytes requested!");if(Kt>me-1)throw new Error("only "+me+" bytes available! programmer error!");var St=new XMLHttpRequest;if(St.open("GET",c,!1),me!==bt&&St.setRequestHeader("Range","bytes="+Nt+"-"+Kt),St.responseType="arraybuffer",St.overrideMimeType&&St.overrideMimeType("text/plain; charset=x-user-defined"),St.send(null),!(St.status>=200&&St.status<300||St.status===304))throw new Error("Couldn't load "+c+". Status: "+St.status);return St.response!==void 0?new Uint8Array(St.response||[]):Ye(St.responseText||"")},Xt=this;Xt.setDataGetter(Nt=>{var Kt=Nt*bt,St=(Nt+1)*bt-1;if(St=Math.min(St,me-1),typeof Xt.chunks[Nt]>"u"&&(Xt.chunks[Nt]=gt(Kt,St)),typeof Xt.chunks[Nt]>"u")throw new Error("doXHR failed!");return Xt.chunks[Nt]}),(nt||!me)&&(bt=me=1,me=this.getter(0).length,bt=me,N("LazyFiles on gzip forces download of the whole file when length is accessed")),this._length=me,this._chunkSize=bt,this.lengthKnown=!0}get length(){return this.lengthKnown||this.cacheLength(),this._length}get chunkSize(){return this.lengthKnown||this.cacheLength(),this._chunkSize}}if(typeof XMLHttpRequest<"u"){if(!s)throw"Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";var w=new x,b={isDevice:!1,contents:w}}else var b={isDevice:!1,url:c};var U=M.createFile(r,a,b,h,p);b.contents?U.contents=b.contents:b.url&&(U.contents=null,U.url=b.url),Object.defineProperties(U,{usedBytes:{get:function(){return this.contents.length}}});var X={},Z=Object.keys(U.stream_ops);Z.forEach(ue=>{var ce=U.stream_ops[ue];X[ue]=(...me)=>(M.forceLoadFile(U),ce(...me))});function oe(ue,ce,me,Ve,lt){var nt=ue.node.contents;if(lt>=nt.length)return 0;var bt=Math.min(nt.length-lt,Ve);if(R(bt>=0),nt.slice)for(var gt=0;gt<bt;gt++)ce[me+gt]=nt[lt+gt];else for(var gt=0;gt<bt;gt++)ce[me+gt]=nt.get(lt+gt);return bt}return X.read=(ue,ce,me,Ve,lt)=>(M.forceLoadFile(U),oe(ue,ce,me,Ve,lt)),X.mmap=(ue,ce,me,Ve,lt)=>{M.forceLoadFile(U);var nt=ht();if(!nt)throw new M.ErrnoError(48);return oe(ue,ne,nt,ce,me),{ptr:nt,allocated:!0}},U.stream_ops=X,U},absolutePath(){le("FS.absolutePath has been removed; use PATH_FS.resolve instead")},createFolder(){le("FS.createFolder has been removed; use FS.mkdir instead")},createLink(){le("FS.createLink has been removed; use FS.symlink instead")},joinPath(){le("FS.joinPath has been removed; use PATH.join instead")},mmapAlloc(){le("FS.mmapAlloc has been replaced by the top level function mmapAlloc")},standardizePath(){le("FS.standardizePath has been removed; use PATH.normalize instead")}},dt={DEFAULT_POLLMASK:5,calculateAt(r,a,c){if(j.isAbs(a))return a;var h;if(r===-100)h=M.cwd();else{var p=dt.getStreamFromFD(r);h=p.path}if(a.length==0){if(!c)throw new M.ErrnoError(44);return h}return h+"/"+a},writeStat(r,a){fe[r>>2]=a.dev,fe[r+4>>2]=a.mode,Me[r+8>>2]=a.nlink,fe[r+12>>2]=a.uid,fe[r+16>>2]=a.gid,fe[r+20>>2]=a.rdev,Ze[r+24>>3]=BigInt(a.size),fe[r+32>>2]=4096,fe[r+36>>2]=a.blocks;var c=a.atime.getTime(),h=a.mtime.getTime(),p=a.ctime.getTime();return Ze[r+40>>3]=BigInt(Math.floor(c/1e3)),Me[r+48>>2]=c%1e3*1e3*1e3,Ze[r+56>>3]=BigInt(Math.floor(h/1e3)),Me[r+64>>2]=h%1e3*1e3*1e3,Ze[r+72>>3]=BigInt(Math.floor(p/1e3)),Me[r+80>>2]=p%1e3*1e3*1e3,Ze[r+88>>3]=BigInt(a.ino),0},writeStatFs(r,a){fe[r+4>>2]=a.bsize,fe[r+40>>2]=a.bsize,fe[r+8>>2]=a.blocks,fe[r+12>>2]=a.bfree,fe[r+16>>2]=a.bavail,fe[r+20>>2]=a.files,fe[r+24>>2]=a.ffree,fe[r+28>>2]=a.fsid,fe[r+44>>2]=a.flags,fe[r+36>>2]=a.namelen},doMsync(r,a,c,h,p){if(!M.isFile(a.node.mode))throw new M.ErrnoError(43);if(h&2)return 0;var x=_e.slice(r,r+c);M.msync(a,x,p,c,h)},getStreamFromFD(r){var a=M.getStreamChecked(r);return a},varargs:void 0,getStr(r){var a=rt(r);return a}};function ui(r,a,c){try{var h=dt.getStreamFromFD(r);if(R(!c),h.fd===a)return-28;if(a<0||a>=M.MAX_OPEN_FDS)return-8;var p=M.getStream(a);return p&&M.close(p),M.dupStream(h,a).fd}catch(x){if(typeof M>"u"||x.name!=="ErrnoError")throw x;return-x.errno}}var Vt=()=>{R(dt.varargs!=null);var r=fe[+dt.varargs>>2];return dt.varargs+=4,r},Jt=Vt;function Tn(r,a,c){dt.varargs=c;try{var h=dt.getStreamFromFD(r);switch(a){case 0:{var p=Vt();if(p<0)return-28;for(;M.streams[p];)p++;var x;return x=M.dupStream(h,p),x.fd}case 1:case 2:return 0;case 3:return h.flags;case 4:{var p=Vt();return h.flags|=p,0}case 12:{var p=Jt(),w=0;return De[p+w>>1]=2,0}case 13:case 14:return 0}return-28}catch(b){if(typeof M>"u"||b.name!=="ErrnoError")throw b;return-b.errno}}function Ur(r,a){try{return dt.writeStat(a,M.fstat(r))}catch(c){if(typeof M>"u"||c.name!=="ErrnoError")throw c;return-c.errno}}function nh(r,a,c){dt.varargs=c;try{var h=dt.getStreamFromFD(r);switch(a){case 21509:return h.tty?0:-59;case 21505:{if(!h.tty)return-59;if(h.tty.ops.ioctl_tcgets){var p=h.tty.ops.ioctl_tcgets(h),x=Jt();fe[x>>2]=p.c_iflag||0,fe[x+4>>2]=p.c_oflag||0,fe[x+8>>2]=p.c_cflag||0,fe[x+12>>2]=p.c_lflag||0;for(var w=0;w<32;w++)ne[x+w+17]=p.c_cc[w]||0;return 0}return 0}case 21510:case 21511:case 21512:return h.tty?0:-59;case 21506:case 21507:case 21508:{if(!h.tty)return-59;if(h.tty.ops.ioctl_tcsets){for(var x=Jt(),b=fe[x>>2],U=fe[x+4>>2],X=fe[x+8>>2],Z=fe[x+12>>2],oe=[],w=0;w<32;w++)oe.push(ne[x+w+17]);return h.tty.ops.ioctl_tcsets(h.tty,a,{c_iflag:b,c_oflag:U,c_cflag:X,c_lflag:Z,c_cc:oe})}return 0}case 21519:{if(!h.tty)return-59;var x=Jt();return fe[x>>2]=0,0}case 21520:return h.tty?-28:-59;case 21531:{var x=Jt();return M.ioctl(h,a,x)}case 21523:{if(!h.tty)return-59;if(h.tty.ops.ioctl_tiocgwinsz){var ue=h.tty.ops.ioctl_tiocgwinsz(h.tty),x=Jt();De[x>>1]=ue[0],De[x+2>>1]=ue[1]}return 0}case 21524:return h.tty?0:-59;case 21515:return h.tty?0:-59;default:return-28}}catch(ce){if(typeof M>"u"||ce.name!=="ErrnoError")throw ce;return-ce.errno}}function ih(r,a){try{return r=dt.getStr(r),dt.writeStat(a,M.lstat(r))}catch(c){if(typeof M>"u"||c.name!=="ErrnoError")throw c;return-c.errno}}function rh(r,a,c,h){try{a=dt.getStr(a);var p=h&256,x=h&4096;return h=h&-6401,R(!h,`unknown flags in __syscall_newfstatat: ${h}`),a=dt.calculateAt(r,a,x),dt.writeStat(c,p?M.lstat(a):M.stat(a))}catch(w){if(typeof M>"u"||w.name!=="ErrnoError")throw w;return-w.errno}}function sh(r,a,c,h){dt.varargs=h;try{a=dt.getStr(a),a=dt.calculateAt(r,a);var p=h?Vt():0;return M.open(a,c,p).fd}catch(x){if(typeof M>"u"||x.name!=="ErrnoError")throw x;return-x.errno}}function ah(r,a){try{return r=dt.getStr(r),dt.writeStat(a,M.stat(r))}catch(c){if(typeof M>"u"||c.name!=="ErrnoError")throw c;return-c.errno}}var oh=()=>le("native code called abort()"),Ft=r=>{for(var a="";;){var c=_e[r++];if(!c)return a;a+=String.fromCharCode(c)}},Li={},hi={},Nr={},lr=class extends Error{constructor(a){super(a),this.name="BindingError"}},ft=r=>{throw new lr(r)};function ch(r,a,c={}){var h=a.name;if(r||ft(`type "${h}" must have a positive integer typeid pointer`),hi.hasOwnProperty(r)){if(c.ignoreDuplicateRegistrations)return;ft(`Cannot register type '${h}' twice`)}if(hi[r]=a,delete Nr[r],Li.hasOwnProperty(r)){var p=Li[r];delete Li[r],p.forEach(x=>x())}}function pn(r,a,c={}){if(a.argPackAdvance===void 0)throw new TypeError("registerType registeredInstance requires argPackAdvance");return ch(r,a,c)}var Ko=(r,a,c)=>{switch(a){case 1:return c?h=>ne[h]:h=>_e[h];case 2:return c?h=>De[h>>1]:h=>Ee[h>>1];case 4:return c?h=>fe[h>>2]:h=>Me[h>>2];case 8:return c?h=>Ze[h>>3]:h=>Ct[h>>3];default:throw new TypeError(`invalid integer width (${a}): ${r}`)}},di=r=>{if(r===null)return"null";var a=typeof r;return a==="object"||a==="array"||a==="function"?r.toString():""+r},Qo=(r,a,c,h)=>{if(a<c||a>h)throw new TypeError(`Passing a number "${di(a)}" from JS side to C/C++ side to an argument of type "${r}", which is outside the valid range [${c}, ${h}]!`)},lh=(r,a,c,h,p)=>{a=Ft(a);const x=h===0n;let w=b=>b;if(x){const b=c*8;w=U=>BigInt.asUintN(b,U),p=w(p)}pn(r,{name:a,fromWireType:w,toWireType:(b,U)=>{if(typeof U=="number")U=BigInt(U);else if(typeof U!="bigint")throw new TypeError(`Cannot convert "${di(U)}" to ${this.name}`);return Qo(a,U,h,p),U},argPackAdvance:An,readValueFromPointer:Ko(a,c,!x),destructorFunction:null})},An=8,uh=(r,a,c,h)=>{a=Ft(a),pn(r,{name:a,fromWireType:function(p){return!!p},toWireType:function(p,x){return x?c:h},argPackAdvance:An,readValueFromPointer:function(p){return this.fromWireType(_e[p])},destructorFunction:null})},hh=r=>({count:r.count,deleteScheduled:r.deleteScheduled,preservePointerOnDelete:r.preservePointerOnDelete,ptr:r.ptr,ptrType:r.ptrType,smartPtr:r.smartPtr,smartPtrType:r.smartPtrType}),$s=r=>{function a(c){return c.$$.ptrType.registeredClass.name}ft(a(r)+" instance already deleted")},js=!1,ec=r=>{},dh=r=>{r.smartPtr?r.smartPtrType.rawDestructor(r.smartPtr):r.ptrType.registeredClass.rawDestructor(r.ptr)},tc=r=>{r.count.value-=1;var a=r.count.value===0;a&&dh(r)},nc=(r,a,c)=>{if(a===c)return r;if(c.baseClass===void 0)return null;var h=nc(r,a,c.baseClass);return h===null?null:c.downcast(h)},ic={},fh={},ph=(r,a)=>{for(a===void 0&&ft("ptr should not be undefined");r.baseClass;)a=r.upcast(a),r=r.baseClass;return a},mh=(r,a)=>(a=ph(r,a),fh[a]),_h=class extends Error{constructor(a){super(a),this.name="InternalError"}},Or=r=>{throw new _h(r)},kr=(r,a)=>{(!a.ptrType||!a.ptr)&&Or("makeClassHandle requires ptr and ptrType");var c=!!a.smartPtrType,h=!!a.smartPtr;return c!==h&&Or("Both smartPtrType and smartPtr must be specified"),a.count={value:1},ur(Object.create(r,{$$:{value:a,writable:!0}}))};function rc(r){var a=this.getPointee(r);if(!a)return this.destructor(r),null;var c=mh(this.registeredClass,a);if(c!==void 0){if(c.$$.count.value===0)return c.$$.ptr=a,c.$$.smartPtr=r,c.clone();var h=c.clone();return this.destructor(r),h}function p(){return this.isSmartPointer?kr(this.registeredClass.instancePrototype,{ptrType:this.pointeeType,ptr:a,smartPtrType:this,smartPtr:r}):kr(this.registeredClass.instancePrototype,{ptrType:this,ptr:r})}var x=this.registeredClass.getActualType(a),w=ic[x];if(!w)return p.call(this);var b;this.isConst?b=w.constPointerType:b=w.pointerType;var U=nc(a,this.registeredClass,b.registeredClass);return U===null?p.call(this):this.isSmartPointer?kr(b.registeredClass.instancePrototype,{ptrType:b,ptr:U,smartPtrType:this,smartPtr:r}):kr(b.registeredClass.instancePrototype,{ptrType:b,ptr:U})}var ur=r=>typeof FinalizationRegistry>"u"?(ur=a=>a,r):(js=new FinalizationRegistry(a=>{console.warn(a.leakWarning),tc(a.$$)}),ur=a=>{var c=a.$$,h=!!c.smartPtr;if(h){var p={$$:c},x=c.ptrType.registeredClass,w=new Error(`Embind found a leaked C++ instance ${x.name} <${he(c.ptr)}>.
We'll free it automatically in this case, but this functionality is not reliable across various environments.
Make sure to invoke .delete() manually once you're done with the instance instead.
Originally allocated`);"captureStackTrace"in Error&&Error.captureStackTrace(w,rc),p.leakWarning=w.stack.replace(/^Error: /,""),js.register(a,p,a)}return a},ec=a=>js.unregister(a),ur(r)),gh=()=>{let r=Br.prototype;Object.assign(r,{isAliasOf(c){if(!(this instanceof Br)||!(c instanceof Br))return!1;var h=this.$$.ptrType.registeredClass,p=this.$$.ptr;c.$$=c.$$;for(var x=c.$$.ptrType.registeredClass,w=c.$$.ptr;h.baseClass;)p=h.upcast(p),h=h.baseClass;for(;x.baseClass;)w=x.upcast(w),x=x.baseClass;return h===x&&p===w},clone(){if(this.$$.ptr||$s(this),this.$$.preservePointerOnDelete)return this.$$.count.value+=1,this;var c=ur(Object.create(Object.getPrototypeOf(this),{$$:{value:hh(this.$$)}}));return c.$$.count.value+=1,c.$$.deleteScheduled=!1,c},delete(){this.$$.ptr||$s(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&ft("Object already scheduled for deletion"),ec(this),tc(this.$$),this.$$.preservePointerOnDelete||(this.$$.smartPtr=void 0,this.$$.ptr=void 0)},isDeleted(){return!this.$$.ptr},deleteLater(){return this.$$.ptr||$s(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&ft("Object already scheduled for deletion"),this.$$.deleteScheduled=!0,this}});const a=Symbol.dispose;a&&(r[a]=r.delete)};function Br(){}var zr=(r,a)=>Object.defineProperty(a,"name",{value:r}),Ys=(r,a,c)=>{if(r[a].overloadTable===void 0){var h=r[a];r[a]=function(...p){return r[a].overloadTable.hasOwnProperty(p.length)||ft(`Function '${c}' called with an invalid number of arguments (${p.length}) - expects one of (${r[a].overloadTable})!`),r[a].overloadTable[p.length].apply(this,p)},r[a].overloadTable=[],r[a].overloadTable[h.argCount]=h}},qs=(r,a,c)=>{t.hasOwnProperty(r)?((c===void 0||t[r].overloadTable!==void 0&&t[r].overloadTable[c]!==void 0)&&ft(`Cannot register public name '${r}' twice`),Ys(t,r,r),t[r].overloadTable.hasOwnProperty(c)&&ft(`Cannot register multiple overloads of a function with the same number of arguments (${c})!`),t[r].overloadTable[c]=a):(t[r]=a,t[r].argCount=c)},vh=48,xh=57,yh=r=>{R(typeof r=="string"),r=r.replace(/[^a-zA-Z0-9_]/g,"$");var a=r.charCodeAt(0);return a>=vh&&a<=xh?`_${r}`:r};function Sh(r,a,c,h,p,x,w,b){this.name=r,this.constructor=a,this.instancePrototype=c,this.rawDestructor=h,this.baseClass=p,this.getActualType=x,this.upcast=w,this.downcast=b,this.pureVirtualFunctions=[]}var Gr=(r,a,c)=>{for(;a!==c;)a.upcast||ft(`Expected null or instance of ${c.name}, got an instance of ${a.name}`),r=a.upcast(r),a=a.baseClass;return r};function Mh(r,a){if(a===null)return this.isReference&&ft(`null is not a valid ${this.name}`),0;a.$$||ft(`Cannot pass "${di(a)}" as a ${this.name}`),a.$$.ptr||ft(`Cannot pass deleted object as a pointer of type ${this.name}`);var c=a.$$.ptrType.registeredClass,h=Gr(a.$$.ptr,c,this.registeredClass);return h}function Eh(r,a){var c;if(a===null)return this.isReference&&ft(`null is not a valid ${this.name}`),this.isSmartPointer?(c=this.rawConstructor(),r!==null&&r.push(this.rawDestructor,c),c):0;(!a||!a.$$)&&ft(`Cannot pass "${di(a)}" as a ${this.name}`),a.$$.ptr||ft(`Cannot pass deleted object as a pointer of type ${this.name}`),!this.isConst&&a.$$.ptrType.isConst&&ft(`Cannot convert argument of type ${a.$$.smartPtrType?a.$$.smartPtrType.name:a.$$.ptrType.name} to parameter type ${this.name}`);var h=a.$$.ptrType.registeredClass;if(c=Gr(a.$$.ptr,h,this.registeredClass),this.isSmartPointer)switch(a.$$.smartPtr===void 0&&ft("Passing raw pointer to smart pointer is illegal"),this.sharingPolicy){case 0:a.$$.smartPtrType===this?c=a.$$.smartPtr:ft(`Cannot convert argument of type ${a.$$.smartPtrType?a.$$.smartPtrType.name:a.$$.ptrType.name} to parameter type ${this.name}`);break;case 1:c=a.$$.smartPtr;break;case 2:if(a.$$.smartPtrType===this)c=a.$$.smartPtr;else{var p=a.clone();c=this.rawShare(c,Ut.toHandle(()=>p.delete())),r!==null&&r.push(this.rawDestructor,c)}break;default:ft("Unsupporting sharing policy")}return c}function wh(r,a){if(a===null)return this.isReference&&ft(`null is not a valid ${this.name}`),0;a.$$||ft(`Cannot pass "${di(a)}" as a ${this.name}`),a.$$.ptr||ft(`Cannot pass deleted object as a pointer of type ${this.name}`),a.$$.ptrType.isConst&&ft(`Cannot convert argument of type ${a.$$.ptrType.name} to parameter type ${this.name}`);var c=a.$$.ptrType.registeredClass,h=Gr(a.$$.ptr,c,this.registeredClass);return h}function Hr(r){return this.fromWireType(Me[r>>2])}var bh=()=>{Object.assign(Vr.prototype,{getPointee(r){return this.rawGetPointee&&(r=this.rawGetPointee(r)),r},destructor(r){this.rawDestructor?.(r)},argPackAdvance:An,readValueFromPointer:Hr,fromWireType:rc})};function Vr(r,a,c,h,p,x,w,b,U,X,Z){this.name=r,this.registeredClass=a,this.isReference=c,this.isConst=h,this.isSmartPointer=p,this.pointeeType=x,this.sharingPolicy=w,this.rawGetPointee=b,this.rawConstructor=U,this.rawShare=X,this.rawDestructor=Z,!p&&a.baseClass===void 0?h?(this.toWireType=Mh,this.destructorFunction=null):(this.toWireType=wh,this.destructorFunction=null):this.toWireType=Eh}var sc=(r,a,c)=>{t.hasOwnProperty(r)||Or("Replacing nonexistent public symbol"),t[r].overloadTable!==void 0&&c!==void 0?t[r].overloadTable[c]=a:(t[r]=a,t[r].argCount=c)},ac=[],Wr,ve=r=>{var a=ac[r];return a||(ac[r]=a=Wr.get(r)),R(Wr.get(r)==a,"JavaScript-side Wasm function table mirror is out of date!"),a},Cn=(r,a,c=!1)=>{R(!c,"Async bindings are only supported with JSPI."),r=Ft(r);function h(){var x=ve(a);return x}var p=h();return typeof p!="function"&&ft(`unknown function pointer with signature ${r}: ${a}`),p};class Th extends Error{}var oc=r=>{var a=Tc(r),c=Ft(a);return Pn(a),c},fi=(r,a)=>{var c=[],h={};function p(x){if(!h[x]&&!hi[x]){if(Nr[x]){Nr[x].forEach(p);return}c.push(x),h[x]=!0}}throw a.forEach(p),new Th(`${r}: `+c.map(oc).join([", "]))},vn=(r,a,c)=>{r.forEach(b=>Nr[b]=a);function h(b){var U=c(b);U.length!==r.length&&Or("Mismatched type converter count");for(var X=0;X<r.length;++X)pn(r[X],U[X])}var p=new Array(a.length),x=[],w=0;a.forEach((b,U)=>{hi.hasOwnProperty(b)?p[U]=hi[b]:(x.push(b),Li.hasOwnProperty(b)||(Li[b]=[]),Li[b].push(()=>{p[U]=hi[b],++w,w===x.length&&h(p)}))}),x.length===0&&h(p)},Ah=(r,a,c,h,p,x,w,b,U,X,Z,oe,ue)=>{Z=Ft(Z),x=Cn(p,x),b&&=Cn(w,b),X&&=Cn(U,X),ue=Cn(oe,ue);var ce=yh(Z);qs(ce,function(){fi(`Cannot construct ${Z} due to unbound types`,[h])}),vn([r,a,c],h?[h]:[],me=>{me=me[0];var Ve,lt;h?(Ve=me.registeredClass,lt=Ve.instancePrototype):lt=Br.prototype;var nt=zr(Z,function(...St){if(Object.getPrototypeOf(this)!==bt)throw new lr(`Use 'new' to construct ${Z}`);if(gt.constructor_body===void 0)throw new lr(`${Z} has no accessible constructor`);var _i=gt.constructor_body[St.length];if(_i===void 0)throw new lr(`Tried to invoke ctor of ${Z} with invalid number of parameters (${St.length}) - expected (${Object.keys(gt.constructor_body).toString()}) parameters instead!`);return _i.apply(this,St)}),bt=Object.create(lt,{constructor:{value:nt}});nt.prototype=bt;var gt=new Sh(Z,nt,bt,ue,Ve,x,b,X);gt.baseClass&&(gt.baseClass.__derivedClasses??=[],gt.baseClass.__derivedClasses.push(gt));var Xt=new Vr(Z,gt,!0,!1,!1),Nt=new Vr(Z+"*",gt,!1,!1,!1),Kt=new Vr(Z+" const*",gt,!1,!0,!1);return ic[r]={pointerType:Nt,constPointerType:Kt},sc(ce,nt),[Xt,Nt,Kt]})},Zs=r=>{for(;r.length;){var a=r.pop(),c=r.pop();c(a)}};function cc(r){for(var a=1;a<r.length;++a)if(r[a]!==null&&r[a].destructorFunction===void 0)return!0;return!1}function Ch(r,a,c,h,p){if(r<a||r>c){var x=a==c?a:`${a} to ${c}`;p(`function ${h} called with ${r} arguments, expected ${x}`)}}function Rh(r,a,c,h){var p=cc(r),x=r.length-2,w=[],b=["fn"];a&&b.push("thisWired");for(var U=0;U<x;++U)w.push(`arg${U}`),b.push(`arg${U}Wired`);w=w.join(","),b=b.join(",");var X=`return function (${w}) {
`;X+=`checkArgCount(arguments.length, minArgs, maxArgs, humanName, throwBindingError);
`,p&&(X+=`var destructors = [];
`);var Z=p?"destructors":"null",oe=["humanName","throwBindingError","invoker","fn","runDestructors","retType","classParam"];a&&(X+=`var thisWired = classParam['toWireType'](${Z}, this);
`);for(var U=0;U<x;++U)X+=`var arg${U}Wired = argType${U}['toWireType'](${Z}, arg${U});
`,oe.push(`argType${U}`);if(X+=(c||h?"var rv = ":"")+`invoker(${b});
`,p)X+=`runDestructors(destructors);
`;else for(var U=a?1:2;U<r.length;++U){var ue=U===1?"thisWired":"arg"+(U-2)+"Wired";r[U].destructorFunction!==null&&(X+=`${ue}_dtor(${ue});
`,oe.push(`${ue}_dtor`))}return c&&(X+=`var ret = retType['fromWireType'](rv);
return ret;
`),X+=`}
`,oe.push("checkArgCount","minArgs","maxArgs"),X=`if (arguments.length !== ${oe.length}){ throw new Error(humanName + "Expected ${oe.length} closure arguments " + arguments.length + " given."); }
${X}`,[oe,X]}function Ph(r){for(var a=r.length-2,c=r.length-1;c>=2&&r[c].optional;--c)a--;return a}function Xr(r,a,c,h,p,x){var w=a.length;w<2&&ft("argTypes array size mismatch! Must at least get return value and 'this' types!"),R(!x,"Async bindings are only supported with JSPI.");for(var b=a[1]!==null&&c!==null,U=cc(a),X=a[0].name!=="void",Z=w-2,oe=Ph(a),ue=[r,ft,h,p,Zs,a[0],a[1]],ce=0;ce<w-2;++ce)ue.push(a[ce+2]);if(!U)for(var ce=b?1:2;ce<a.length;++ce)a[ce].destructorFunction!==null&&ue.push(a[ce].destructorFunction);ue.push(Ch,oe,Z);let[me,Ve]=Rh(a,b,X,x);var lt=new Function(...me,Ve)(...ue);return zr(r,lt)}var $r=(r,a)=>{for(var c=[],h=0;h<r;h++)c.push(Me[a+h*4>>2]);return c},Js=r=>{r=r.trim();const a=r.indexOf("(");return a===-1?r:(R(r.endsWith(")"),"Parentheses for argument names should match."),r.slice(0,a))},Ih=(r,a,c,h,p,x,w,b,U)=>{var X=$r(c,h);a=Ft(a),a=Js(a),x=Cn(p,x,b),vn([],[r],Z=>{Z=Z[0];var oe=`${Z.name}.${a}`;function ue(){fi(`Cannot call ${oe} due to unbound types`,X)}a.startsWith("@@")&&(a=Symbol[a.substring(2)]);var ce=Z.registeredClass.constructor;return ce[a]===void 0?(ue.argCount=c-1,ce[a]=ue):(Ys(ce,a,oe),ce[a].overloadTable[c-1]=ue),vn([],X,me=>{var Ve=[me[0],null].concat(me.slice(1)),lt=Xr(oe,Ve,null,x,w,b);if(ce[a].overloadTable===void 0?(lt.argCount=c-1,ce[a]=lt):ce[a].overloadTable[c-1]=lt,Z.registeredClass.__derivedClasses)for(const nt of Z.registeredClass.__derivedClasses)nt.constructor.hasOwnProperty(a)||(nt.constructor[a]=lt);return[]}),[]})},Dh=(r,a,c,h,p,x)=>{R(a>0);var w=$r(a,c);p=Cn(h,p),vn([],[r],b=>{b=b[0];var U=`constructor ${b.name}`;if(b.registeredClass.constructor_body===void 0&&(b.registeredClass.constructor_body=[]),b.registeredClass.constructor_body[a-1]!==void 0)throw new lr(`Cannot register multiple constructors with identical number of parameters (${a-1}) for class '${b.name}'! Overload resolution is currently only performed using the parameter count, not actual type info!`);return b.registeredClass.constructor_body[a-1]=()=>{fi(`Cannot construct ${b.name} due to unbound types`,w)},vn([],w,X=>(X.splice(1,0,null),b.registeredClass.constructor_body[a-1]=Xr(U,X,null,p,x),[])),[]})},Lh=(r,a,c,h,p,x,w,b,U,X)=>{var Z=$r(c,h);a=Ft(a),a=Js(a),x=Cn(p,x,U),vn([],[r],oe=>{oe=oe[0];var ue=`${oe.name}.${a}`;a.startsWith("@@")&&(a=Symbol[a.substring(2)]),b&&oe.registeredClass.pureVirtualFunctions.push(a);function ce(){fi(`Cannot call ${ue} due to unbound types`,Z)}var me=oe.registeredClass.instancePrototype,Ve=me[a];return Ve===void 0||Ve.overloadTable===void 0&&Ve.className!==oe.name&&Ve.argCount===c-2?(ce.argCount=c-2,ce.className=oe.name,me[a]=ce):(Ys(me,a,ue),me[a].overloadTable[c-2]=ce),vn([],Z,lt=>{var nt=Xr(ue,lt,oe,x,w,U);return me[a].overloadTable===void 0?(nt.argCount=c-2,me[a]=nt):me[a].overloadTable[c-2]=nt,[]}),[]})},lc=(r,a,c)=>(r instanceof Object||ft(`${c} with invalid "this": ${r}`),r instanceof a.registeredClass.constructor||ft(`${c} incompatible with "this" of type ${r.constructor.name}`),r.$$.ptr||ft(`cannot call emscripten binding method ${c} on deleted object`),Gr(r.$$.ptr,r.$$.ptrType.registeredClass,a.registeredClass)),Fh=(r,a,c,h,p,x,w,b,U,X)=>{a=Ft(a),p=Cn(h,p),vn([],[r],Z=>{Z=Z[0];var oe=`${Z.name}.${a}`,ue={get(){fi(`Cannot access ${oe} due to unbound types`,[c,w])},enumerable:!0,configurable:!0};return U?ue.set=()=>fi(`Cannot access ${oe} due to unbound types`,[c,w]):ue.set=ce=>ft(oe+" is a read-only property"),Object.defineProperty(Z.registeredClass.instancePrototype,a,ue),vn([],U?[c,w]:[c],ce=>{var me=ce[0],Ve={get(){var nt=lc(this,Z,oe+" getter");return me.fromWireType(p(x,nt))},enumerable:!0};if(U){U=Cn(b,U);var lt=ce[1];Ve.set=function(nt){var bt=lc(this,Z,oe+" setter"),gt=[];U(X,bt,lt.toWireType(gt,nt)),Zs(gt)}}return Object.defineProperty(Z.registeredClass.instancePrototype,a,Ve),[]}),[]})},Uh=(r,a,c)=>{r=Ft(r),vn([],[a],h=>(h=h[0],t[r]=h.fromWireType(c),[]))},uc=[],Rn=[0,1,,1,null,1,!0,1,!1,1],Ks=r=>{r>9&&--Rn[r+1]===0&&(R(Rn[r]!==void 0,"Decref for unallocated handle."),Rn[r]=void 0,uc.push(r))},Ut={toValue:r=>(r||ft(`Cannot use deleted val. handle = ${r}`),R(r===2||Rn[r]!==void 0&&r%2===0,`invalid handle: ${r}`),Rn[r]),toHandle:r=>{switch(r){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:{const a=uc.pop()||Rn.length;return Rn[a]=r,Rn[a+1]=1,a}}}},hc={name:"emscripten::val",fromWireType:r=>{var a=Ut.toValue(r);return Ks(r),a},toWireType:(r,a)=>Ut.toHandle(a),argPackAdvance:An,readValueFromPointer:Hr,destructorFunction:null},dc=r=>pn(r,hc),Nh=(r,a,c)=>{switch(a){case 1:return c?function(h){return this.fromWireType(ne[h])}:function(h){return this.fromWireType(_e[h])};case 2:return c?function(h){return this.fromWireType(De[h>>1])}:function(h){return this.fromWireType(Ee[h>>1])};case 4:return c?function(h){return this.fromWireType(fe[h>>2])}:function(h){return this.fromWireType(Me[h>>2])};default:throw new TypeError(`invalid integer width (${a}): ${r}`)}},Oh=(r,a,c,h)=>{a=Ft(a);function p(){}p.values={},pn(r,{name:a,constructor:p,fromWireType:function(x){return this.constructor.values[x]},toWireType:(x,w)=>w.value,argPackAdvance:An,readValueFromPointer:Nh(a,c,h),destructorFunction:null}),qs(a,p)},jr=(r,a)=>{var c=hi[r];return c===void 0&&ft(`${a} has unknown type ${oc(r)}`),c},kh=(r,a,c)=>{var h=jr(r,"enum");a=Ft(a);var p=h.constructor,x=Object.create(h.constructor.prototype,{value:{value:c},constructor:{value:zr(`${h.name}_${a}`,function(){})}});p.values[c]=x,p[a]=x},Bh=(r,a)=>{switch(a){case 4:return function(c){return this.fromWireType(tt[c>>2])};case 8:return function(c){return this.fromWireType(Et[c>>3])};default:throw new TypeError(`invalid float width (${a}): ${r}`)}},zh=(r,a,c)=>{a=Ft(a),pn(r,{name:a,fromWireType:h=>h,toWireType:(h,p)=>{if(typeof p!="number"&&typeof p!="boolean")throw new TypeError(`Cannot convert ${di(p)} to ${this.name}`);return p},argPackAdvance:An,readValueFromPointer:Bh(a,c),destructorFunction:null})},Gh=(r,a,c,h,p,x,w,b)=>{var U=$r(a,c);r=Ft(r),r=Js(r),p=Cn(h,p,w),qs(r,function(){fi(`Cannot call ${r} due to unbound types`,U)},a-1),vn([],U,X=>{var Z=[X[0],null].concat(X.slice(1));return sc(r,Xr(r,Z,null,p,x,w),a-1),[]})},Hh=(r,a,c,h,p)=>{a=Ft(a);const x=h===0;let w=U=>U;if(x){var b=32-8*c;w=U=>U<<b>>>b,p=w(p)}pn(r,{name:a,fromWireType:w,toWireType:(U,X)=>{if(typeof X!="number"&&typeof X!="boolean")throw new TypeError(`Cannot convert "${di(X)}" to ${a}`);return Qo(a,X,h,p),X},argPackAdvance:An,readValueFromPointer:Ko(a,c,h!==0),destructorFunction:null})},Vh=(r,a,c)=>{var h=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array],p=h[a];function x(w){var b=Me[w>>2],U=Me[w+4>>2];return new p(ne.buffer,U,b)}c=Ft(c),pn(r,{name:c,fromWireType:x,argPackAdvance:An,readValueFromPointer:x},{ignoreDuplicateRegistrations:!0})},Wh=Object.assign({optional:!0},hc),Xh=(r,a)=>{pn(r,Wh)},pi=(r,a,c)=>(R(typeof c=="number","stringToUTF8(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!"),ke(r,_e,a,c)),$h=(r,a)=>{a=Ft(a),pn(r,{name:a,fromWireType(c){for(var h=Me[c>>2],p=c+4,x,w,b=p,w=0;w<=h;++w){var U=p+w;if(w==h||_e[U]==0){var X=U-b,Z=rt(b,X);x===void 0?x=Z:(x+="\0",x+=Z),b=U+1}}return Pn(c),x},toWireType(c,h){h instanceof ArrayBuffer&&(h=new Uint8Array(h));var p,x=typeof h=="string";x||ArrayBuffer.isView(h)&&h.BYTES_PER_ELEMENT==1||ft("Cannot pass non-string to std::string"),x?p=Ne(h):p=h.length;var w=ta(4+p+1),b=w+4;return Me[w>>2]=p,x?pi(h,b,p+1):_e.set(h,b),c!==null&&c.push(Pn,w),w},argPackAdvance:An,readValueFromPointer:Hr,destructorFunction(c){Pn(c)}})},fc=typeof TextDecoder<"u"?new TextDecoder("utf-16le"):void 0,jh=(r,a)=>{R(r%2==0,"Pointer passed to UTF16ToString must be aligned to two bytes!");for(var c=r>>1,h=c+a/2,p=c;!(p>=h)&&Ee[p];)++p;if(p-c>16&&fc)return fc.decode(Ee.subarray(c,p));for(var x="",w=c;!(w>=h);++w){var b=Ee[w];if(b==0)break;x+=String.fromCharCode(b)}return x},Yh=(r,a,c)=>{if(R(a%2==0,"Pointer passed to stringToUTF16 must be aligned to two bytes!"),R(typeof c=="number","stringToUTF16(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!"),c??=2147483647,c<2)return 0;c-=2;for(var h=a,p=c<r.length*2?c/2:r.length,x=0;x<p;++x){var w=r.charCodeAt(x);De[a>>1]=w,a+=2}return De[a>>1]=0,a-h},qh=r=>r.length*2,Zh=(r,a)=>{R(r%4==0,"Pointer passed to UTF32ToString must be aligned to four bytes!");for(var c="",h=0;!(h>=a/4);h++){var p=fe[r+h*4>>2];if(!p)break;c+=String.fromCodePoint(p)}return c},Jh=(r,a,c)=>{if(R(a%4==0,"Pointer passed to stringToUTF32 must be aligned to four bytes!"),R(typeof c=="number","stringToUTF32(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!"),c??=2147483647,c<4)return 0;for(var h=a,p=h+c-4,x=0;x<r.length;++x){var w=r.codePointAt(x);if(w>65535&&x++,fe[a>>2]=w,a+=4,a+4>p)break}return fe[a>>2]=0,a-h},Kh=r=>{for(var a=0,c=0;c<r.length;++c){var h=r.codePointAt(c);h>65535&&c++,a+=4}return a},Qh=(r,a,c)=>{c=Ft(c);var h,p,x,w;a===2?(h=jh,p=Yh,w=qh,x=b=>Ee[b>>1]):a===4&&(h=Zh,p=Jh,w=Kh,x=b=>Me[b>>2]),pn(r,{name:c,fromWireType:b=>{for(var U=Me[b>>2],X,Z=b+4,oe=0;oe<=U;++oe){var ue=b+4+oe*a;if(oe==U||x(ue)==0){var ce=ue-Z,me=h(Z,ce);X===void 0?X=me:(X+="\0",X+=me),Z=ue+a}}return Pn(b),X},toWireType:(b,U)=>{typeof U!="string"&&ft(`Cannot pass non-string to C++ string type ${c}`);var X=w(U),Z=ta(4+X+a);return Me[Z>>2]=X/a,p(U,Z+4,X+a),b!==null&&b.push(Pn,Z),Z},argPackAdvance:An,readValueFromPointer:Hr,destructorFunction(b){Pn(b)}})},ed=(r,a)=>{dc(r)},td=(r,a)=>{a=Ft(a),pn(r,{isVoid:!0,name:a,argPackAdvance:0,fromWireType:()=>{},toWireType:(c,h)=>{}})},nd=()=>{throw new k},pc=(r,a,c)=>{var h=[],p=r.toWireType(h,c);return h.length&&(Me[a>>2]=Ut.toHandle(h)),p},id=(r,a,c)=>(r=Ut.toValue(r),a=jr(a,"emval::as"),pc(a,c,r)),Yr=[],rd=(r,a,c,h)=>(r=Yr[r],a=Ut.toValue(a),r(null,a,c,h)),sd={},Qs=r=>{var a=sd[r];return a===void 0?Ft(r):a},ad=(r,a,c,h,p)=>(r=Yr[r],a=Ut.toValue(a),c=Qs(c),r(a,a[c],h,p)),mc=()=>globalThis,od=r=>r===0?Ut.toHandle(mc()):(r=Qs(r),Ut.toHandle(mc()[r])),cd=r=>{var a=Yr.length;return Yr.push(r),a},ld=(r,a)=>{for(var c=new Array(r),h=0;h<r;++h)c[h]=jr(Me[a+h*4>>2],`parameter ${h}`);return c},ud=(r,a,c)=>{var h=ld(r,a),p=h.shift();r--;var x=`return function (obj, func, destructorsRef, args) {
`,w=0,b=[];c===0&&b.push("obj");for(var U=["retType"],X=[p],Z=0;Z<r;++Z)b.push(`arg${Z}`),U.push(`argType${Z}`),X.push(h[Z]),x+=`  var arg${Z} = argType${Z}.readValueFromPointer(args${w?"+"+w:""});
`,w+=h[Z].argPackAdvance;var oe=c===1?"new func":"func.call";x+=`  var rv = ${oe}(${b.join(", ")});
`,p.isVoid||(U.push("emval_returnValue"),X.push(pc),x+=`  return emval_returnValue(retType, destructorsRef, rv);
`),x+=`};
`;var ue=new Function(...U,x)(...X),ce=`methodCaller<(${h.map(me=>me.name).join(", ")}) => ${p.name}>`;return cd(zr(ce,ue))},hd=(r,a)=>(r=Ut.toValue(r),a=Ut.toValue(a),Ut.toHandle(r[a])),dd=r=>{r>9&&(Rn[r+1]+=1)},fd=r=>(r=Ut.toValue(r),typeof r=="number"),pd=r=>(r=Ut.toValue(r),typeof r=="string"),md=()=>Ut.toHandle([]),_d=r=>Ut.toHandle(Qs(r)),gd=r=>{var a=Ut.toValue(r);Zs(a),Ks(r)},vd=(r,a)=>{r=jr(r,"_emval_take_value");var c=r.readValueFromPointer(a);return Ut.toHandle(c)},xd=r=>{throw r=Ut.toValue(r),r},yd=r=>r%4===0&&(r%100!==0||r%400===0),Sd=[0,31,60,91,121,152,182,213,244,274,305,335],Md=[0,31,59,90,120,151,181,212,243,273,304,334],_c=r=>{var a=yd(r.getFullYear()),c=a?Sd:Md,h=c[r.getMonth()]+r.getDate()-1;return h},Ed=9007199254740992,wd=-9007199254740992,gc=r=>r<wd||r>Ed?NaN:Number(r);function bd(r,a){r=gc(r);var c=new Date(r*1e3);fe[a>>2]=c.getSeconds(),fe[a+4>>2]=c.getMinutes(),fe[a+8>>2]=c.getHours(),fe[a+12>>2]=c.getDate(),fe[a+16>>2]=c.getMonth(),fe[a+20>>2]=c.getFullYear()-1900,fe[a+24>>2]=c.getDay();var h=_c(c)|0;fe[a+28>>2]=h,fe[a+36>>2]=-(c.getTimezoneOffset()*60);var p=new Date(c.getFullYear(),0,1),x=new Date(c.getFullYear(),6,1).getTimezoneOffset(),w=p.getTimezoneOffset(),b=(x!=w&&c.getTimezoneOffset()==Math.min(w,x))|0;fe[a+32>>2]=b}var Td=function(r){var a=(()=>{var c=new Date(fe[r+20>>2]+1900,fe[r+16>>2],fe[r+12>>2],fe[r+8>>2],fe[r+4>>2],fe[r>>2],0),h=fe[r+32>>2],p=c.getTimezoneOffset(),x=new Date(c.getFullYear(),0,1),w=new Date(c.getFullYear(),6,1).getTimezoneOffset(),b=x.getTimezoneOffset(),U=Math.min(b,w);if(h<0)fe[r+32>>2]=+(w!=b&&U==p);else if(h>0!=(U==p)){var X=Math.max(b,w),Z=h>0?U:X;c.setTime(c.getTime()+(Z-p)*6e4)}fe[r+24>>2]=c.getDay();var oe=_c(c)|0;fe[r+28>>2]=oe,fe[r>>2]=c.getSeconds(),fe[r+4>>2]=c.getMinutes(),fe[r+8>>2]=c.getHours(),fe[r+12>>2]=c.getDate(),fe[r+16>>2]=c.getMonth(),fe[r+20>>2]=c.getYear();var ue=c.getTime();return isNaN(ue)?-1:ue/1e3})();return BigInt(a)},Ad=(r,a,c,h)=>{var p=new Date().getFullYear(),x=new Date(p,0,1),w=new Date(p,6,1),b=x.getTimezoneOffset(),U=w.getTimezoneOffset(),X=Math.max(b,U);Me[r>>2]=X*60,fe[a>>2]=+(b!=U);var Z=ce=>{var me=ce>=0?"-":"+",Ve=Math.abs(ce),lt=String(Math.floor(Ve/60)).padStart(2,"0"),nt=String(Ve%60).padStart(2,"0");return`UTC${me}${lt}${nt}`},oe=Z(b),ue=Z(U);R(oe),R(ue),R(Ne(oe)<=16,`timezone name truncated to fit in TZNAME_MAX (${oe})`),R(Ne(ue)<=16,`timezone name truncated to fit in TZNAME_MAX (${ue})`),U<b?(pi(oe,c,17),pi(ue,h,17)):(pi(oe,h,17),pi(ue,c,17))},vc=()=>performance.now(),xc=()=>Date.now(),Cd=r=>r>=0&&r<=3;function Rd(r,a,c){if(!Cd(r))return 28;var h;r===0?h=xc():h=vc();var p=Math.round(h*1e3*1e3);return Ze[c>>3]=BigInt(p),0}var qr=[],Pd=(r,a)=>{R(Array.isArray(qr)),R(a%16==0),qr.length=0;for(var c;c=_e[r++];){var h=String.fromCharCode(c),p=["d","f","i","p"];p.push("j"),R(p.includes(h),`Invalid character ${c}("${h}") in readEmAsmArgs! Use only [${p}], and do not specify "v" for void return argument.`);var x=c!=105;x&=c!=112,a+=x&&a%8?4:0,qr.push(c==112?Me[a>>2]:c==106?Ze[a>>3]:c==105?fe[a>>2]:Et[a>>3]),a+=x?8:4}return qr},Id=(r,a,c)=>{var h=Pd(a,c);return R(bc.hasOwnProperty(r),`No EM_ASM constant found at address ${r}.  The loaded WebAssembly file is likely out of sync with the generated JavaScript.`),bc[r](...h)},Dd=(r,a,c)=>Id(r,a,c),yc=()=>2147483648,Ld=()=>yc(),Fd=(r,a)=>(R(a,"alignment argument is required"),Math.ceil(r/a)*a),Ud=r=>{var a=pt.buffer,c=(r-a.byteLength+65535)/65536|0;try{return pt.grow(c),qt(),1}catch(h){L(`growMemory: Attempted to grow heap from ${a.byteLength} bytes to ${r} bytes, but got error: ${h}`)}},Nd=r=>{var a=_e.length;r>>>=0,R(r>a);var c=yc();if(r>c)return L(`Cannot enlarge memory, requested ${r} bytes, but the limit is ${c} bytes!`),!1;for(var h=1;h<=4;h*=2){var p=a*(1+.2/h);p=Math.min(p,r+100663296);var x=Math.min(c,Fd(Math.max(r,p),65536)),w=Ud(x);if(w)return!0}return L(`Failed to grow the heap from ${a} bytes to ${x} bytes, not enough memory!`),!1},ea={},Od=()=>d||"./this.program",hr=()=>{if(!hr.strings){var r=(typeof navigator=="object"&&navigator.language||"C").replace("-","_")+".UTF-8",a={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:r,_:Od()};for(var c in ea)ea[c]===void 0?delete a[c]:a[c]=ea[c];var h=[];for(var c in a)h.push(`${c}=${a[c]}`);hr.strings=h}return hr.strings},kd=(r,a)=>{var c=0,h=0;for(var p of hr()){var x=a+c;Me[r+h>>2]=x,c+=pi(p,x,1/0)+1,h+=4}return 0},Bd=(r,a)=>{var c=hr();Me[r>>2]=c.length;var h=0;for(var p of c)h+=Ne(p)+1;return Me[a>>2]=h,0},Sc=0,Mc=()=>ie||Sc>0,zd=r=>{Mc()||(t.onExit?.(r),G=!0),f(r,new Ue(r))},Gd=(r,a)=>{if(Qp(),Mc()&&!a){var c=`program exited (with status: ${r}), but keepRuntimeAlive() is set (counter=${Sc}) due to an async operation, so halting execution but not exiting the runtime or preventing further async execution (you can use emscripten_force_exit, if you want to force a true shutdown)`;Qe?.(c),L(c)}zd(r)},Hd=Gd;function Vd(r){try{var a=dt.getStreamFromFD(r);return M.close(a),0}catch(c){if(typeof M>"u"||c.name!=="ErrnoError")throw c;return c.errno}}var Wd=(r,a,c,h)=>{for(var p=0,x=0;x<c;x++){var w=Me[a>>2],b=Me[a+4>>2];a+=8;var U=M.read(r,ne,w,b,h);if(U<0)return-1;if(p+=U,U<b)break}return p};function Xd(r,a,c,h){try{var p=dt.getStreamFromFD(r),x=Wd(p,a,c);return Me[h>>2]=x,0}catch(w){if(typeof M>"u"||w.name!=="ErrnoError")throw w;return w.errno}}function $d(r,a,c,h){a=gc(a);try{if(isNaN(a))return 61;var p=dt.getStreamFromFD(r);return M.llseek(p,a,c),Ze[h>>3]=BigInt(p.position),p.getdents&&a===0&&c===0&&(p.getdents=null),0}catch(x){if(typeof M>"u"||x.name!=="ErrnoError")throw x;return x.errno}}var jd=(r,a,c,h)=>{for(var p=0,x=0;x<c;x++){var w=Me[a>>2],b=Me[a+4>>2];a+=8;var U=M.write(r,ne,w,b,h);if(U<0)return-1;if(p+=U,U<b)break}return p};function Yd(r,a,c,h){try{var p=dt.getStreamFromFD(r),x=jd(p,a,c);return Me[h>>2]=x,0}catch(w){if(typeof M>"u"||w.name!=="ErrnoError")throw w;return w.errno}}var qd=r=>r,Zd=r=>{var a=t["_"+r];return R(a,"Cannot call unknown function "+r+", make sure it is exported"),a},Jd=(r,a)=>{R(r.length>=0,"writeArrayToMemory array must have a length (should be an array or typed array)"),ne.set(r,a)},Zr=r=>Ic(r),Kd=r=>{var a=Ne(r)+1,c=Zr(a);return pi(r,c,a),c},Ec=(r,a,c,h,p)=>{var x={string:me=>{var Ve=0;return me!=null&&me!==0&&(Ve=Kd(me)),Ve},array:me=>{var Ve=Zr(me.length);return Jd(me,Ve),Ve}};function w(me){return a==="string"?rt(me):a==="boolean"?!!me:me}var b=Zd(r),U=[],X=0;if(R(a!=="array",'Return type should not be "array".'),h)for(var Z=0;Z<h.length;Z++){var oe=x[c[Z]];oe?(X===0&&(X=Y()),U[Z]=oe(h[Z])):U[Z]=h[Z]}var ue=b(...U);function ce(me){return X!==0&&q(X),w(me)}return ue=ce(ue),ue},Qd=(r,a,c,h)=>(...p)=>Ec(r,a,c,p),ef=(...r)=>M.createPath(...r),tf=(...r)=>M.unlink(...r),nf=(...r)=>M.createLazyFile(...r),rf=(...r)=>M.createDevice(...r),sf=r=>Jr(r),af=r=>ra(r),of=r=>{var a=Y(),c=Zr(4),h=Zr(4);Lc(r,c,h);var p=Me[c>>2],x=Me[h>>2],w=rt(p);Pn(p);var b;return x&&(b=rt(x),Pn(x)),q(a),[w,b]},wc=r=>of(r);M.createPreloadedFile=_t,M.staticInit(),gh(),bh(),R(Rn.length===10),t.noExitRuntime&&(ie=t.noExitRuntime),t.preloadPlugins&&(Be=t.preloadPlugins),t.print&&(N=t.print),t.printErr&&(L=t.printErr),t.wasmBinary&&(I=t.wasmBinary),uf(),t.arguments&&t.arguments,t.thisProgram&&(d=t.thisProgram),R(typeof t.memoryInitializerPrefixURL>"u","Module.memoryInitializerPrefixURL option was removed, use Module.locateFile instead"),R(typeof t.pthreadMainPrefixURL>"u","Module.pthreadMainPrefixURL option was removed, use Module.locateFile instead"),R(typeof t.cdInitializerPrefixURL>"u","Module.cdInitializerPrefixURL option was removed, use Module.locateFile instead"),R(typeof t.filePackagePrefixURL>"u","Module.filePackagePrefixURL option was removed, use Module.locateFile instead"),R(typeof t.read>"u","Module.read option was removed"),R(typeof t.readAsync>"u","Module.readAsync option was removed (modify readAsync in JS)"),R(typeof t.readBinary>"u","Module.readBinary option was removed (modify readBinary in JS)"),R(typeof t.setWindowTitle>"u","Module.setWindowTitle option was removed (modify emscripten_set_window_title in JS)"),R(typeof t.TOTAL_MEMORY>"u","Module.TOTAL_MEMORY has been renamed Module.INITIAL_MEMORY"),R(typeof t.ENVIRONMENT>"u","Module.ENVIRONMENT has been deprecated. To force the environment, use the ENVIRONMENT compile-time option (for example, -sENVIRONMENT=web or -sENVIRONMENT=node)"),R(typeof t.STACK_SIZE>"u","STACK_SIZE can no longer be set at runtime.  Use -sSTACK_SIZE at link time"),R(typeof t.wasmMemory>"u","Use of `wasmMemory` detected.  Use -sIMPORTED_MEMORY to define wasmMemory externally"),R(typeof t.INITIAL_MEMORY>"u","Detected runtime INITIAL_MEMORY setting.  Use -sIMPORTED_MEMORY to define wasmMemory dynamically"),t.addRunDependency=J,t.removeRunDependency=de,t.ccall=Ec,t.cwrap=Qd,t.FS_createPreloadedFile=_t,t.FS_unlink=tf,t.FS_createPath=ef,t.FS_createDevice=rf,t.FS=M,t.FS_createDataFile=Ht,t.FS_createLazyFile=nf,t.MEMFS=Re;var cf=["writeI53ToI64","writeI53ToI64Clamped","writeI53ToI64Signaling","writeI53ToU64Clamped","writeI53ToU64Signaling","readI53FromI64","readI53FromU64","convertI32PairToI53","convertI32PairToI53Checked","convertU32PairToI53","getTempRet0","zeroMemory","withStackSave","inetPton4","inetNtop4","inetPton6","inetNtop6","readSockaddr","writeSockaddr","emscriptenLog","runMainThreadEmAsm","jstoi_q","autoResumeAudioContext","getDynCaller","dynCall","handleException","runtimeKeepalivePush","runtimeKeepalivePop","callUserCallback","maybeExit","asmjsMangle","HandleAllocator","getNativeTypeSize","addOnInit","addOnPostCtor","addOnPreMain","addOnExit","STACK_SIZE","STACK_ALIGN","POINTER_SIZE","ASSERTIONS","uleb128Encode","sigToWasmTypes","generateFuncType","convertJsFunctionToWasm","getEmptyTableSlot","updateTableMap","getFunctionAddress","addFunction","removeFunction","reallyNegative","unSign","strLen","reSign","formatString","intArrayToString","stringToAscii","stringToNewUTF8","registerKeyEventCallback","maybeCStringToJsString","findEventTarget","getBoundingClientRect","fillMouseEventData","registerMouseEventCallback","registerWheelEventCallback","registerUiEventCallback","registerFocusEventCallback","fillDeviceOrientationEventData","registerDeviceOrientationEventCallback","fillDeviceMotionEventData","registerDeviceMotionEventCallback","screenOrientation","fillOrientationChangeEventData","registerOrientationChangeEventCallback","fillFullscreenChangeEventData","registerFullscreenChangeEventCallback","JSEvents_requestFullscreen","JSEvents_resizeCanvasForFullscreen","registerRestoreOldStyle","hideEverythingExceptGivenElement","restoreHiddenElements","setLetterbox","softFullscreenResizeWebGLRenderTarget","doRequestFullscreen","fillPointerlockChangeEventData","registerPointerlockChangeEventCallback","registerPointerlockErrorEventCallback","requestPointerLock","fillVisibilityChangeEventData","registerVisibilityChangeEventCallback","registerTouchEventCallback","fillGamepadEventData","registerGamepadEventCallback","registerBeforeUnloadEventCallback","fillBatteryEventData","battery","registerBatteryEventCallback","setCanvasElementSize","getCanvasElementSize","jsStackTrace","getCallstack","convertPCtoSourceLocation","wasiRightsToMuslOFlags","wasiOFlagsToMuslOFlags","safeSetTimeout","setImmediateWrapped","safeRequestAnimationFrame","clearImmediateWrapped","registerPostMainLoop","registerPreMainLoop","getPromise","makePromise","idsToPromises","makePromiseCallback","Browser_asyncPrepareDataCounter","arraySum","addDays","getSocketFromFD","getSocketAddress","FS_mkdirTree","_setNetworkCallback","heapObjectForWebGLType","toTypedArrayIndex","webgl_enable_ANGLE_instanced_arrays","webgl_enable_OES_vertex_array_object","webgl_enable_WEBGL_draw_buffers","webgl_enable_WEBGL_multi_draw","webgl_enable_EXT_polygon_offset_clamp","webgl_enable_EXT_clip_control","webgl_enable_WEBGL_polygon_mode","emscriptenWebGLGet","computeUnpackAlignedImageSize","colorChannelsInGlTextureFormat","emscriptenWebGLGetTexPixelData","emscriptenWebGLGetUniform","webglGetUniformLocation","webglPrepareUniformLocationsBeforeFirstUse","webglGetLeftBracePos","emscriptenWebGLGetVertexAttrib","__glGetActiveAttribOrUniform","writeGLArray","registerWebGlEventCallback","runAndAbortIfError","ALLOC_NORMAL","ALLOC_STACK","allocate","writeStringToMemory","writeAsciiToMemory","demangle","stackTrace","getFunctionArgsName","createJsInvokerSignature","PureVirtualError","registerInheritedInstance","unregisterInheritedInstance","getInheritedInstanceCount","getLiveInheritedInstances","setDelayFunction","count_emval_handles"];cf.forEach(Ae);var lf=["run","out","err","callMain","abort","wasmMemory","wasmExports","HEAPF32","HEAPF64","HEAP8","HEAPU8","HEAP16","HEAPU16","HEAP32","HEAPU32","HEAP64","HEAPU64","writeStackCookie","checkStackCookie","INT53_MAX","INT53_MIN","bigintToI53Checked","stackSave","stackRestore","stackAlloc","setTempRet0","ptrToString","exitJS","getHeapMax","growMemory","ENV","ERRNO_CODES","strError","DNS","Protocols","Sockets","timers","warnOnce","readEmAsmArgsArray","readEmAsmArgs","runEmAsmFunction","getExecutableName","keepRuntimeAlive","asyncLoad","alignMemory","mmapAlloc","wasmTable","getUniqueRunDependency","noExitRuntime","addOnPreRun","addOnPostRun","freeTableIndexes","functionsInTableMap","setValue","getValue","PATH","PATH_FS","UTF8Decoder","UTF8ArrayToString","UTF8ToString","stringToUTF8Array","stringToUTF8","lengthBytesUTF8","intArrayFromString","AsciiToString","UTF16Decoder","UTF16ToString","stringToUTF16","lengthBytesUTF16","UTF32ToString","stringToUTF32","lengthBytesUTF32","stringToUTF8OnStack","writeArrayToMemory","JSEvents","specialHTMLTargets","findCanvasEventTarget","currentFullscreenStrategy","restoreOldWindowedStyle","UNWIND_CACHE","ExitStatus","getEnvStrings","checkWasiClock","doReadv","doWritev","initRandomFill","randomFill","emSetImmediate","emClearImmediate_deps","emClearImmediate","promiseMap","uncaughtExceptionCount","exceptionLast","exceptionCaught","ExceptionInfo","findMatchingCatch","getExceptionMessageCommon","Browser","requestFullscreen","requestFullScreen","setCanvasSize","getUserMedia","createContext","getPreloadedImageData__data","wget","MONTH_DAYS_REGULAR","MONTH_DAYS_LEAP","MONTH_DAYS_REGULAR_CUMULATIVE","MONTH_DAYS_LEAP_CUMULATIVE","isLeapYear","ydayFromDate","SYSCALLS","preloadPlugins","FS_modeStringToFlags","FS_getMode","FS_stdin_getChar_buffer","FS_stdin_getChar","FS_readFile","FS_root","FS_mounts","FS_devices","FS_streams","FS_nextInode","FS_nameTable","FS_currentPath","FS_initialized","FS_ignorePermissions","FS_filesystems","FS_syncFSRequests","FS_readFiles","FS_lookupPath","FS_getPath","FS_hashName","FS_hashAddNode","FS_hashRemoveNode","FS_lookupNode","FS_createNode","FS_destroyNode","FS_isRoot","FS_isMountpoint","FS_isFile","FS_isDir","FS_isLink","FS_isChrdev","FS_isBlkdev","FS_isFIFO","FS_isSocket","FS_flagsToPermissionString","FS_nodePermissions","FS_mayLookup","FS_mayCreate","FS_mayDelete","FS_mayOpen","FS_checkOpExists","FS_nextfd","FS_getStreamChecked","FS_getStream","FS_createStream","FS_closeStream","FS_dupStream","FS_doSetAttr","FS_chrdev_stream_ops","FS_major","FS_minor","FS_makedev","FS_registerDevice","FS_getDevice","FS_getMounts","FS_syncfs","FS_mount","FS_unmount","FS_lookup","FS_mknod","FS_statfs","FS_statfsStream","FS_statfsNode","FS_create","FS_mkdir","FS_mkdev","FS_symlink","FS_rename","FS_rmdir","FS_readdir","FS_readlink","FS_stat","FS_fstat","FS_lstat","FS_doChmod","FS_chmod","FS_lchmod","FS_fchmod","FS_doChown","FS_chown","FS_lchown","FS_fchown","FS_doTruncate","FS_truncate","FS_ftruncate","FS_utime","FS_open","FS_close","FS_isClosed","FS_llseek","FS_read","FS_write","FS_mmap","FS_msync","FS_ioctl","FS_writeFile","FS_cwd","FS_chdir","FS_createDefaultDirectories","FS_createDefaultDevices","FS_createSpecialDirectories","FS_createStandardStreams","FS_staticInit","FS_init","FS_quit","FS_findObject","FS_analyzePath","FS_createFile","FS_forceLoadFile","FS_absolutePath","FS_createFolder","FS_createLink","FS_joinPath","FS_mmapAlloc","FS_standardizePath","TTY","PIPEFS","SOCKFS","tempFixedLengthArray","miniTempWebGLFloatBuffers","miniTempWebGLIntBuffers","GL","AL","GLUT","EGL","GLEW","IDBStore","SDL","SDL_gfx","allocateUTF8","allocateUTF8OnStack","print","printErr","jstoi_s","InternalError","BindingError","throwInternalError","throwBindingError","registeredTypes","awaitingDependencies","typeDependencies","tupleRegistrations","structRegistrations","sharedRegisterType","whenDependentTypesAreResolved","getTypeName","getFunctionName","heap32VectorToArray","requireRegisteredType","usesDestructorStack","checkArgCount","getRequiredArgCount","createJsInvoker","UnboundTypeError","GenericWireTypeSize","EmValType","EmValOptionalType","throwUnboundTypeError","ensureOverloadTable","exposePublicSymbol","replacePublicSymbol","createNamedFunction","embindRepr","registeredInstances","getBasestPointer","getInheritedInstance","registeredPointers","registerType","integerReadValueFromPointer","enumReadValueFromPointer","floatReadValueFromPointer","assertIntegerRange","readPointer","runDestructors","craftInvokerFunction","embind__requireFunction","genericPointerToWireType","constNoSmartPtrRawPointerToWireType","nonConstNoSmartPtrRawPointerToWireType","init_RegisteredPointer","RegisteredPointer","RegisteredPointer_fromWireType","runDestructor","releaseClassHandle","finalizationRegistry","detachFinalizer_deps","detachFinalizer","attachFinalizer","makeClassHandle","init_ClassHandle","ClassHandle","throwInstanceAlreadyDeleted","deletionQueue","flushPendingDeletes","delayFunction","RegisteredClass","shallowCopyInternalPointer","downcastPointer","upcastPointer","validateThis","char_0","char_9","makeLegalFunctionName","emval_freelist","emval_handles","emval_symbols","getStringOrSymbol","Emval","emval_get_global","emval_returnValue","emval_lookupTypes","emval_methodCallers","emval_addMethodCaller"];lf.forEach(Pe),t.incrementExceptionRefcount=sf,t.decrementExceptionRefcount=af,t.getExceptionMessage=wc;function uf(){pe("fetchSettings")}var bc={679512:()=>{typeof t<"u"&&"mjDISABLESTRING mjENABLESTRING mjFRAMESTRING mjLABELSTRING mjRNDSTRING mjTIMERSTRING mjVISSTRING".split(" ").forEach(function(r){Object.defineProperty(t,r,{get:function(){return t["get_"+r]()},set:function(a){},enumerable:!0,configurable:!0})})}},Tc=ee("___getTypeName"),ta=ee("_malloc"),na=ee("_fflush"),Pn=ee("_free"),ia=ee("_emscripten_stack_get_end"),Ac=ee("_strerror"),ge=ee("_setThrew"),Cc=ee("__emscripten_tempret_set"),Rc=ee("_emscripten_stack_init"),Pc=ee("__emscripten_stack_restore"),Ic=ee("__emscripten_stack_alloc"),Dc=ee("_emscripten_stack_get_current"),ra=ee("___cxa_decrement_exception_refcount"),Jr=ee("___cxa_increment_exception_refcount"),Lc=ee("___get_exception_message"),Fc=ee("___cxa_can_catch"),Uc=ee("___cxa_get_exception_ptr");function hf(r){Tc=se("__getTypeName",1),ta=se("malloc",1),na=se("fflush",1),Pn=se("free",1),ia=r.emscripten_stack_get_end,r.emscripten_stack_get_base,Ac=se("strerror",1),ge=se("setThrew",2),Cc=se("_emscripten_tempret_set",1),Rc=r.emscripten_stack_init,r.emscripten_stack_get_free,Pc=r._emscripten_stack_restore,Ic=r._emscripten_stack_alloc,Dc=r.emscripten_stack_get_current,ra=se("__cxa_decrement_exception_refcount",1),Jr=se("__cxa_increment_exception_refcount",1),Lc=se("__get_exception_message",3),Fc=se("__cxa_can_catch",3),Uc=se("__cxa_get_exception_ptr",1)}var Nc={__assert_fail:an,__cxa_begin_catch:Pr,__cxa_current_primary_exception:Nn,__cxa_end_catch:Ir,__cxa_find_matching_catch_2:Di,__cxa_find_matching_catch_3:Dr,__cxa_find_matching_catch_4:Lr,__cxa_rethrow:Fr,__cxa_rethrow_primary_exception:Ws,__cxa_throw:Xs,__cxa_uncaught_exceptions:P,__resumeException:V,__syscall_dup3:ui,__syscall_fcntl64:Tn,__syscall_fstat64:Ur,__syscall_ioctl:nh,__syscall_lstat64:ih,__syscall_newfstatat:rh,__syscall_openat:sh,__syscall_stat64:ah,_abort_js:oh,_embind_register_bigint:lh,_embind_register_bool:uh,_embind_register_class:Ah,_embind_register_class_class_function:Ih,_embind_register_class_constructor:Dh,_embind_register_class_function:Lh,_embind_register_class_property:Fh,_embind_register_constant:Uh,_embind_register_emval:dc,_embind_register_enum:Oh,_embind_register_enum_value:kh,_embind_register_float:zh,_embind_register_function:Gh,_embind_register_integer:Hh,_embind_register_memory_view:Vh,_embind_register_optional:Xh,_embind_register_std_string:$h,_embind_register_std_wstring:Qh,_embind_register_user_type:ed,_embind_register_void:td,_emscripten_throw_longjmp:nd,_emval_as:id,_emval_call:rd,_emval_call_method:ad,_emval_decref:Ks,_emval_get_global:od,_emval_get_method_caller:ud,_emval_get_property:hd,_emval_incref:dd,_emval_is_number:fd,_emval_is_string:pd,_emval_new_array:md,_emval_new_cstring:_d,_emval_run_destructors:gd,_emval_take_value:vd,_emval_throw:xd,_localtime_js:bd,_mktime_js:Td,_tzset_js:Ad,clock_time_get:Rd,emscripten_asm_const_int:Dd,emscripten_date_now:xc,emscripten_get_heap_max:Ld,emscripten_get_now:vc,emscripten_resize_heap:Nd,environ_get:kd,environ_sizes_get:Bd,exit:Hd,fd_close:Vd,fd_read:Xd,fd_seek:$d,fd_write:Yd,invoke_ddd:kp,invoke_dddi:tp,invoke_dddidi:np,invoke_ddidi:ep,invoke_di:ip,invoke_dii:Xf,invoke_diii:bf,invoke_diiii:Qf,invoke_diiiidd:Jf,invoke_diiiidi:Cf,invoke_diiiii:yf,invoke_diiiiii:Ff,invoke_diiiiiii:rp,invoke_diiiiiiiii:Df,invoke_diiiiiiiiiiii:Lf,invoke_fiii:qp,invoke_i:Sf,invoke_id:Ep,invoke_ii:pf,invoke_iid:pp,invoke_iidddd:Vp,invoke_iidiii:Hf,invoke_iidiiid:zf,invoke_iidiiiiidi:Vf,invoke_iif:Hp,invoke_iii:df,invoke_iiid:Wf,invoke_iiididdddddd:Gf,invoke_iiidiiiiiiii:Bf,invoke_iiii:gf,invoke_iiiidddiiiii:ap,invoke_iiiii:wf,invoke_iiiiid:bp,invoke_iiiiii:xp,invoke_iiiiiii:_p,invoke_iiiiiiii:fp,invoke_iiiiiiiidd:Tp,invoke_iiiiiiiii:Zf,invoke_iiiiiiiiii:gp,invoke_iiiiiiiiiidddiiiiiiiii:kf,invoke_iiiiiiiiiii:Yp,invoke_iiiiiiiiiiii:Zp,invoke_iiiiiiiiiiiii:Ip,invoke_iiij:vp,invoke_iiji:wp,invoke_j:$p,invoke_ji:Np,invoke_jiiii:yp,invoke_jij:Op,invoke_v:_f,invoke_vi:mf,invoke_vid:mp,invoke_viddd:Sp,invoke_vidddd:Mp,invoke_vidi:Kf,invoke_vidiii:Nf,invoke_vii:xf,invoke_viid:Yf,invoke_viiddi:Pp,invoke_viiddidi:Rp,invoke_viiddii:sp,invoke_viidi:jf,invoke_viidii:Af,invoke_viidiii:hp,invoke_viidiiid:lp,invoke_viidiiiii:Of,invoke_viidiiiiidi:dp,invoke_viidiiiiiiii:Uf,invoke_viii:ff,invoke_viiid:Pf,invoke_viiidd:Cp,invoke_viiidi:$f,invoke_viiididdddddd:up,invoke_viiidiiiiiiii:cp,invoke_viiii:Ef,invoke_viiiiddd:Ap,invoke_viiiidi:Bp,invoke_viiiifi:zp,invoke_viiiii:vf,invoke_viiiiid:Rf,invoke_viiiiii:Mf,invoke_viiiiiii:Tf,invoke_viiiiiiii:qf,invoke_viiiiiiiiii:Fp,invoke_viiiiiiiiiidddiiiiiiiii:op,invoke_viiiiiiiiiiid:If,invoke_viiiiiiiiiiiii:Lp,invoke_viiiiiiiiiiiiiii:Jp,invoke_viiiiiiiiiiiiiiiiii:Up,invoke_viiiij:Wp,invoke_viij:Xp,invoke_viijii:jp,invoke_vij:Gp,invoke_vijjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj:Dp,llvm_eh_typeid_for:qd},mi=await qe();function df(r,a,c){var h=Y();try{return ve(r)(a,c)}catch(p){if(q(h),!(p instanceof E))throw p;ge(1,0)}}function ff(r,a,c,h){var p=Y();try{ve(r)(a,c,h)}catch(x){if(q(p),!(x instanceof E))throw x;ge(1,0)}}function pf(r,a){var c=Y();try{return ve(r)(a)}catch(h){if(q(c),!(h instanceof E))throw h;ge(1,0)}}function mf(r,a){var c=Y();try{ve(r)(a)}catch(h){if(q(c),!(h instanceof E))throw h;ge(1,0)}}function _f(r){var a=Y();try{ve(r)()}catch(c){if(q(a),!(c instanceof E))throw c;ge(1,0)}}function gf(r,a,c,h){var p=Y();try{return ve(r)(a,c,h)}catch(x){if(q(p),!(x instanceof E))throw x;ge(1,0)}}function vf(r,a,c,h,p,x){var w=Y();try{ve(r)(a,c,h,p,x)}catch(b){if(q(w),!(b instanceof E))throw b;ge(1,0)}}function xf(r,a,c){var h=Y();try{ve(r)(a,c)}catch(p){if(q(h),!(p instanceof E))throw p;ge(1,0)}}function yf(r,a,c,h,p,x){var w=Y();try{return ve(r)(a,c,h,p,x)}catch(b){if(q(w),!(b instanceof E))throw b;ge(1,0)}}function Sf(r){var a=Y();try{return ve(r)()}catch(c){if(q(a),!(c instanceof E))throw c;ge(1,0)}}function Mf(r,a,c,h,p,x,w){var b=Y();try{ve(r)(a,c,h,p,x,w)}catch(U){if(q(b),!(U instanceof E))throw U;ge(1,0)}}function Ef(r,a,c,h,p){var x=Y();try{ve(r)(a,c,h,p)}catch(w){if(q(x),!(w instanceof E))throw w;ge(1,0)}}function wf(r,a,c,h,p){var x=Y();try{return ve(r)(a,c,h,p)}catch(w){if(q(x),!(w instanceof E))throw w;ge(1,0)}}function bf(r,a,c,h){var p=Y();try{return ve(r)(a,c,h)}catch(x){if(q(p),!(x instanceof E))throw x;ge(1,0)}}function Tf(r,a,c,h,p,x,w,b){var U=Y();try{ve(r)(a,c,h,p,x,w,b)}catch(X){if(q(U),!(X instanceof E))throw X;ge(1,0)}}function Af(r,a,c,h,p,x){var w=Y();try{ve(r)(a,c,h,p,x)}catch(b){if(q(w),!(b instanceof E))throw b;ge(1,0)}}function Cf(r,a,c,h,p,x,w){var b=Y();try{return ve(r)(a,c,h,p,x,w)}catch(U){if(q(b),!(U instanceof E))throw U;ge(1,0)}}function Rf(r,a,c,h,p,x,w){var b=Y();try{ve(r)(a,c,h,p,x,w)}catch(U){if(q(b),!(U instanceof E))throw U;ge(1,0)}}function Pf(r,a,c,h,p){var x=Y();try{ve(r)(a,c,h,p)}catch(w){if(q(x),!(w instanceof E))throw w;ge(1,0)}}function If(r,a,c,h,p,x,w,b,U,X,Z,oe,ue){var ce=Y();try{ve(r)(a,c,h,p,x,w,b,U,X,Z,oe,ue)}catch(me){if(q(ce),!(me instanceof E))throw me;ge(1,0)}}function Df(r,a,c,h,p,x,w,b,U,X){var Z=Y();try{return ve(r)(a,c,h,p,x,w,b,U,X)}catch(oe){if(q(Z),!(oe instanceof E))throw oe;ge(1,0)}}function Lf(r,a,c,h,p,x,w,b,U,X,Z,oe,ue){var ce=Y();try{return ve(r)(a,c,h,p,x,w,b,U,X,Z,oe,ue)}catch(me){if(q(ce),!(me instanceof E))throw me;ge(1,0)}}function Ff(r,a,c,h,p,x,w){var b=Y();try{return ve(r)(a,c,h,p,x,w)}catch(U){if(q(b),!(U instanceof E))throw U;ge(1,0)}}function Uf(r,a,c,h,p,x,w,b,U,X,Z,oe){var ue=Y();try{ve(r)(a,c,h,p,x,w,b,U,X,Z,oe)}catch(ce){if(q(ue),!(ce instanceof E))throw ce;ge(1,0)}}function Nf(r,a,c,h,p,x){var w=Y();try{ve(r)(a,c,h,p,x)}catch(b){if(q(w),!(b instanceof E))throw b;ge(1,0)}}function Of(r,a,c,h,p,x,w,b,U){var X=Y();try{ve(r)(a,c,h,p,x,w,b,U)}catch(Z){if(q(X),!(Z instanceof E))throw Z;ge(1,0)}}function kf(r,a,c,h,p,x,w,b,U,X,Z,oe,ue,ce,me,Ve,lt,nt,bt,gt,Xt,Nt){var Kt=Y();try{return ve(r)(a,c,h,p,x,w,b,U,X,Z,oe,ue,ce,me,Ve,lt,nt,bt,gt,Xt,Nt)}catch(St){if(q(Kt),!(St instanceof E))throw St;ge(1,0)}}function Bf(r,a,c,h,p,x,w,b,U,X,Z,oe){var ue=Y();try{return ve(r)(a,c,h,p,x,w,b,U,X,Z,oe)}catch(ce){if(q(ue),!(ce instanceof E))throw ce;ge(1,0)}}function zf(r,a,c,h,p,x,w){var b=Y();try{return ve(r)(a,c,h,p,x,w)}catch(U){if(q(b),!(U instanceof E))throw U;ge(1,0)}}function Gf(r,a,c,h,p,x,w,b,U,X,Z,oe){var ue=Y();try{return ve(r)(a,c,h,p,x,w,b,U,X,Z,oe)}catch(ce){if(q(ue),!(ce instanceof E))throw ce;ge(1,0)}}function Hf(r,a,c,h,p,x){var w=Y();try{return ve(r)(a,c,h,p,x)}catch(b){if(q(w),!(b instanceof E))throw b;ge(1,0)}}function Vf(r,a,c,h,p,x,w,b,U,X){var Z=Y();try{return ve(r)(a,c,h,p,x,w,b,U,X)}catch(oe){if(q(Z),!(oe instanceof E))throw oe;ge(1,0)}}function Wf(r,a,c,h){var p=Y();try{return ve(r)(a,c,h)}catch(x){if(q(p),!(x instanceof E))throw x;ge(1,0)}}function Xf(r,a,c){var h=Y();try{return ve(r)(a,c)}catch(p){if(q(h),!(p instanceof E))throw p;ge(1,0)}}function $f(r,a,c,h,p,x){var w=Y();try{ve(r)(a,c,h,p,x)}catch(b){if(q(w),!(b instanceof E))throw b;ge(1,0)}}function jf(r,a,c,h,p){var x=Y();try{ve(r)(a,c,h,p)}catch(w){if(q(x),!(w instanceof E))throw w;ge(1,0)}}function Yf(r,a,c,h){var p=Y();try{ve(r)(a,c,h)}catch(x){if(q(p),!(x instanceof E))throw x;ge(1,0)}}function qf(r,a,c,h,p,x,w,b,U){var X=Y();try{ve(r)(a,c,h,p,x,w,b,U)}catch(Z){if(q(X),!(Z instanceof E))throw Z;ge(1,0)}}function Zf(r,a,c,h,p,x,w,b,U){var X=Y();try{return ve(r)(a,c,h,p,x,w,b,U)}catch(Z){if(q(X),!(Z instanceof E))throw Z;ge(1,0)}}function Jf(r,a,c,h,p,x,w){var b=Y();try{return ve(r)(a,c,h,p,x,w)}catch(U){if(q(b),!(U instanceof E))throw U;ge(1,0)}}function Kf(r,a,c,h){var p=Y();try{ve(r)(a,c,h)}catch(x){if(q(p),!(x instanceof E))throw x;ge(1,0)}}function Qf(r,a,c,h,p){var x=Y();try{return ve(r)(a,c,h,p)}catch(w){if(q(x),!(w instanceof E))throw w;ge(1,0)}}function ep(r,a,c,h,p){var x=Y();try{return ve(r)(a,c,h,p)}catch(w){if(q(x),!(w instanceof E))throw w;ge(1,0)}}function tp(r,a,c,h){var p=Y();try{return ve(r)(a,c,h)}catch(x){if(q(p),!(x instanceof E))throw x;ge(1,0)}}function np(r,a,c,h,p,x){var w=Y();try{return ve(r)(a,c,h,p,x)}catch(b){if(q(w),!(b instanceof E))throw b;ge(1,0)}}function ip(r,a){var c=Y();try{return ve(r)(a)}catch(h){if(q(c),!(h instanceof E))throw h;ge(1,0)}}function rp(r,a,c,h,p,x,w,b){var U=Y();try{return ve(r)(a,c,h,p,x,w,b)}catch(X){if(q(U),!(X instanceof E))throw X;ge(1,0)}}function sp(r,a,c,h,p,x,w){var b=Y();try{ve(r)(a,c,h,p,x,w)}catch(U){if(q(b),!(U instanceof E))throw U;ge(1,0)}}function ap(r,a,c,h,p,x,w,b,U,X,Z,oe){var ue=Y();try{return ve(r)(a,c,h,p,x,w,b,U,X,Z,oe)}catch(ce){if(q(ue),!(ce instanceof E))throw ce;ge(1,0)}}function op(r,a,c,h,p,x,w,b,U,X,Z,oe,ue,ce,me,Ve,lt,nt,bt,gt,Xt,Nt,Kt){var St=Y();try{ve(r)(a,c,h,p,x,w,b,U,X,Z,oe,ue,ce,me,Ve,lt,nt,bt,gt,Xt,Nt,Kt)}catch(_i){if(q(St),!(_i instanceof E))throw _i;ge(1,0)}}function cp(r,a,c,h,p,x,w,b,U,X,Z,oe,ue){var ce=Y();try{ve(r)(a,c,h,p,x,w,b,U,X,Z,oe,ue)}catch(me){if(q(ce),!(me instanceof E))throw me;ge(1,0)}}function lp(r,a,c,h,p,x,w,b){var U=Y();try{ve(r)(a,c,h,p,x,w,b)}catch(X){if(q(U),!(X instanceof E))throw X;ge(1,0)}}function up(r,a,c,h,p,x,w,b,U,X,Z,oe,ue){var ce=Y();try{ve(r)(a,c,h,p,x,w,b,U,X,Z,oe,ue)}catch(me){if(q(ce),!(me instanceof E))throw me;ge(1,0)}}function hp(r,a,c,h,p,x,w){var b=Y();try{ve(r)(a,c,h,p,x,w)}catch(U){if(q(b),!(U instanceof E))throw U;ge(1,0)}}function dp(r,a,c,h,p,x,w,b,U,X,Z){var oe=Y();try{ve(r)(a,c,h,p,x,w,b,U,X,Z)}catch(ue){if(q(oe),!(ue instanceof E))throw ue;ge(1,0)}}function fp(r,a,c,h,p,x,w,b){var U=Y();try{return ve(r)(a,c,h,p,x,w,b)}catch(X){if(q(U),!(X instanceof E))throw X;ge(1,0)}}function pp(r,a,c){var h=Y();try{return ve(r)(a,c)}catch(p){if(q(h),!(p instanceof E))throw p;ge(1,0)}}function mp(r,a,c){var h=Y();try{ve(r)(a,c)}catch(p){if(q(h),!(p instanceof E))throw p;ge(1,0)}}function _p(r,a,c,h,p,x,w){var b=Y();try{return ve(r)(a,c,h,p,x,w)}catch(U){if(q(b),!(U instanceof E))throw U;ge(1,0)}}function gp(r,a,c,h,p,x,w,b,U,X){var Z=Y();try{return ve(r)(a,c,h,p,x,w,b,U,X)}catch(oe){if(q(Z),!(oe instanceof E))throw oe;ge(1,0)}}function vp(r,a,c,h){var p=Y();try{return ve(r)(a,c,h)}catch(x){if(q(p),!(x instanceof E))throw x;ge(1,0)}}function xp(r,a,c,h,p,x){var w=Y();try{return ve(r)(a,c,h,p,x)}catch(b){if(q(w),!(b instanceof E))throw b;ge(1,0)}}function yp(r,a,c,h,p){var x=Y();try{return ve(r)(a,c,h,p)}catch(w){if(q(x),!(w instanceof E))throw w;return ge(1,0),0n}}function Sp(r,a,c,h,p){var x=Y();try{ve(r)(a,c,h,p)}catch(w){if(q(x),!(w instanceof E))throw w;ge(1,0)}}function Mp(r,a,c,h,p,x){var w=Y();try{ve(r)(a,c,h,p,x)}catch(b){if(q(w),!(b instanceof E))throw b;ge(1,0)}}function Ep(r,a){var c=Y();try{return ve(r)(a)}catch(h){if(q(c),!(h instanceof E))throw h;ge(1,0)}}function wp(r,a,c,h){var p=Y();try{return ve(r)(a,c,h)}catch(x){if(q(p),!(x instanceof E))throw x;ge(1,0)}}function bp(r,a,c,h,p,x){var w=Y();try{return ve(r)(a,c,h,p,x)}catch(b){if(q(w),!(b instanceof E))throw b;ge(1,0)}}function Tp(r,a,c,h,p,x,w,b,U,X){var Z=Y();try{return ve(r)(a,c,h,p,x,w,b,U,X)}catch(oe){if(q(Z),!(oe instanceof E))throw oe;ge(1,0)}}function Ap(r,a,c,h,p,x,w,b){var U=Y();try{ve(r)(a,c,h,p,x,w,b)}catch(X){if(q(U),!(X instanceof E))throw X;ge(1,0)}}function Cp(r,a,c,h,p,x){var w=Y();try{ve(r)(a,c,h,p,x)}catch(b){if(q(w),!(b instanceof E))throw b;ge(1,0)}}function Rp(r,a,c,h,p,x,w,b){var U=Y();try{ve(r)(a,c,h,p,x,w,b)}catch(X){if(q(U),!(X instanceof E))throw X;ge(1,0)}}function Pp(r,a,c,h,p,x){var w=Y();try{ve(r)(a,c,h,p,x)}catch(b){if(q(w),!(b instanceof E))throw b;ge(1,0)}}function Ip(r,a,c,h,p,x,w,b,U,X,Z,oe,ue){var ce=Y();try{return ve(r)(a,c,h,p,x,w,b,U,X,Z,oe,ue)}catch(me){if(q(ce),!(me instanceof E))throw me;ge(1,0)}}function Dp(r,a,c,h,p,x,w,b,U,X,Z,oe,ue,ce,me,Ve,lt,nt,bt,gt,Xt,Nt,Kt,St,_i,tm,nm,im,rm,sm,am,om,cm,lm,um,hm,dm,fm,pm,mm,_m,gm,vm,xm,ym,Sm,Mm,Em,wm,bm,Tm,Am,Cm,Rm,Pm,Im,Dm,Lm,Fm,Um,Nm,Om,km,Bm,zm,Gm,Hm,Vm,Wm,Xm,$m,jm,Ym,qm,Zm,Jm,Km,Qm,e_,t_,n_,i_,r_,s_,a_,o_){var c_=Y();try{ve(r)(a,c,h,p,x,w,b,U,X,Z,oe,ue,ce,me,Ve,lt,nt,bt,gt,Xt,Nt,Kt,St,_i,tm,nm,im,rm,sm,am,om,cm,lm,um,hm,dm,fm,pm,mm,_m,gm,vm,xm,ym,Sm,Mm,Em,wm,bm,Tm,Am,Cm,Rm,Pm,Im,Dm,Lm,Fm,Um,Nm,Om,km,Bm,zm,Gm,Hm,Vm,Wm,Xm,$m,jm,Ym,qm,Zm,Jm,Km,Qm,e_,t_,n_,i_,r_,s_,a_,o_)}catch(kc){if(q(c_),!(kc instanceof E))throw kc;ge(1,0)}}function Lp(r,a,c,h,p,x,w,b,U,X,Z,oe,ue,ce){var me=Y();try{ve(r)(a,c,h,p,x,w,b,U,X,Z,oe,ue,ce)}catch(Ve){if(q(me),!(Ve instanceof E))throw Ve;ge(1,0)}}function Fp(r,a,c,h,p,x,w,b,U,X,Z){var oe=Y();try{ve(r)(a,c,h,p,x,w,b,U,X,Z)}catch(ue){if(q(oe),!(ue instanceof E))throw ue;ge(1,0)}}function Up(r,a,c,h,p,x,w,b,U,X,Z,oe,ue,ce,me,Ve,lt,nt,bt){var gt=Y();try{ve(r)(a,c,h,p,x,w,b,U,X,Z,oe,ue,ce,me,Ve,lt,nt,bt)}catch(Xt){if(q(gt),!(Xt instanceof E))throw Xt;ge(1,0)}}function Np(r,a){var c=Y();try{return ve(r)(a)}catch(h){if(q(c),!(h instanceof E))throw h;return ge(1,0),0n}}function Op(r,a,c){var h=Y();try{return ve(r)(a,c)}catch(p){if(q(h),!(p instanceof E))throw p;return ge(1,0),0n}}function kp(r,a,c){var h=Y();try{return ve(r)(a,c)}catch(p){if(q(h),!(p instanceof E))throw p;ge(1,0)}}function Bp(r,a,c,h,p,x,w){var b=Y();try{ve(r)(a,c,h,p,x,w)}catch(U){if(q(b),!(U instanceof E))throw U;ge(1,0)}}function zp(r,a,c,h,p,x,w){var b=Y();try{ve(r)(a,c,h,p,x,w)}catch(U){if(q(b),!(U instanceof E))throw U;ge(1,0)}}function Gp(r,a,c){var h=Y();try{ve(r)(a,c)}catch(p){if(q(h),!(p instanceof E))throw p;ge(1,0)}}function Hp(r,a,c){var h=Y();try{return ve(r)(a,c)}catch(p){if(q(h),!(p instanceof E))throw p;ge(1,0)}}function Vp(r,a,c,h,p,x){var w=Y();try{return ve(r)(a,c,h,p,x)}catch(b){if(q(w),!(b instanceof E))throw b;ge(1,0)}}function Wp(r,a,c,h,p,x){var w=Y();try{ve(r)(a,c,h,p,x)}catch(b){if(q(w),!(b instanceof E))throw b;ge(1,0)}}function Xp(r,a,c,h){var p=Y();try{ve(r)(a,c,h)}catch(x){if(q(p),!(x instanceof E))throw x;ge(1,0)}}function $p(r){var a=Y();try{return ve(r)()}catch(c){if(q(a),!(c instanceof E))throw c;return ge(1,0),0n}}function jp(r,a,c,h,p,x){var w=Y();try{ve(r)(a,c,h,p,x)}catch(b){if(q(w),!(b instanceof E))throw b;ge(1,0)}}function Yp(r,a,c,h,p,x,w,b,U,X,Z){var oe=Y();try{return ve(r)(a,c,h,p,x,w,b,U,X,Z)}catch(ue){if(q(oe),!(ue instanceof E))throw ue;ge(1,0)}}function qp(r,a,c,h){var p=Y();try{return ve(r)(a,c,h)}catch(x){if(q(p),!(x instanceof E))throw x;ge(1,0)}}function Zp(r,a,c,h,p,x,w,b,U,X,Z,oe){var ue=Y();try{return ve(r)(a,c,h,p,x,w,b,U,X,Z,oe)}catch(ce){if(q(ue),!(ce instanceof E))throw ce;ge(1,0)}}function Jp(r,a,c,h,p,x,w,b,U,X,Z,oe,ue,ce,me,Ve){var lt=Y();try{ve(r)(a,c,h,p,x,w,b,U,X,Z,oe,ue,ce,me,Ve)}catch(nt){if(q(lt),!(nt instanceof E))throw nt;ge(1,0)}}var Oc;function Kp(){Rc(),$()}function sa(){if(mt>0){He=sa;return}if(Kp(),ot(),mt>0){He=sa;return}function r(){R(!Oc),Oc=!0,t.calledRun=!0,!G&&(ct(),Ge?.(t),t.onRuntimeInitialized?.(),K("onRuntimeInitialized"),R(!t._main,'compiled without a main, but one is present. if you added it from JS, use Module["onRuntimeInitialized"]'),We())}t.setStatus?(t.setStatus("Running..."),setTimeout(()=>{setTimeout(()=>t.setStatus(""),1),r()},1)):r(),D()}function Qp(){var r=N,a=L,c=!1;N=L=h=>{c=!0};try{na(0),["stdout","stderr"].forEach(h=>{var p=M.analyzePath("/dev/"+h);if(p){var x=p.object,w=x.rdev,b=Ie.ttys[w];b?.output?.length&&(c=!0)}})}catch{}N=r,L=a,c&&je("stdio streams had content in them that was not flushed. you should set EXIT_RUNTIME to 1 (see the Emscripten FAQ), or make sure to emit a newline when you printf etc.")}function em(){if(t.preInit)for(typeof t.preInit=="function"&&(t.preInit=[t.preInit]);t.preInit.length>0;)t.preInit.shift()();K("preInit")}em(),sa(),H?e=t:e=new Promise((r,a)=>{Ge=r,Qe=a});for(const r of Object.keys(t))r in i||Object.defineProperty(i,r,{configurable:!0,get(){le(`Access to module property ('${r}') is no longer possible via the module constructor argument; Instead, use the result of the module constructor.`)}});return e});const g_="/Hackathon/assets/mujoco-ChFpd822.wasm",v_="1.0",x_=2,y_=4,S_=2,M_=6,E_=4,w_=12,b_=250,T_=100,A_=50,C_=20,R_=1e3,P_={ws:8765,udp:9870},I_={sim:"/sim",cmd:"/cmd",state:"/state"},D_=["https://ahrtlab.github.io"],L_={cmd:{name:"JackalCmd",type:"Control",channels:2},action:{name:"JackalAction",type:"Markers"},state:{name:"JackalState",type:"State",channels:["x","y","yaw","v","w","v_cmd","w_cmd","collisions"]},scan:{name:"JackalScan",type:"Range",channels:180},events:{name:"JackalEvents",type:"Markers"}},uu={protocol_version:v_,V_MAX:x_,W_MAX:y_,A_V_MAX:S_,A_W_MAX:M_,A_V_BRAKE:E_,A_W_BRAKE:w_,DEADMAN_MS:b_,MAX_RATE_HZ:T_,CONTROL_HZ:A_,STATE_HZ:C_,SOURCE_SWITCH_SILENCE_MS:R_,ports:P_,paths:I_,allowed_origins:D_,lsl:L_},en=uu,F_=uu.protocol_version.split(".")[0],aa=.12,zc=.3;function Gc(i){const e=Math.abs(i);if(e<aa)return 0;const t=(e-aa)/(1-aa);return Math.sign(i)*((1-zc)*t+zc*t*t*t)}function U_(){if(typeof navigator>"u"||!navigator.getGamepads)return null;for(const i of navigator.getGamepads()){if(!i||!i.connected)continue;if(i.buttons[0]?.pressed)return{v:0,w:0};const e=Gc(-(i.axes[1]??0)),t=Gc(-(i.axes[0]??0));if(e||t)return{v:e*en.V_MAX,w:t*en.W_MAX}}return null}const vr={};let Hc=!1;const N_=new Set(["w","a","s","d","arrowup","arrowdown","arrowleft","arrowright"," "]);function hu(i){const e=i.target;return e?e.tagName==="INPUT"||e.tagName==="TEXTAREA"||e.tagName==="SELECT"||e.isContentEditable:!1}function O_(){if(Hc||typeof window>"u")return;const i=e=>t=>{const n=t.key.toLowerCase();if(n==="shift"){vr.shift=e;return}hu(t)||!N_.has(n)||(vr[n]=e,t.preventDefault())};window.addEventListener("keydown",i(!0)),window.addEventListener("keyup",i(!1)),window.addEventListener("blur",()=>{for(const e of Object.keys(vr))vr[e]=!1}),Hc=!0}const Kr=i=>vr[i]===!0,k_=.6,B_=.6,z_=.3;function G_(){O_()}function H_(){if(Kr(" "))return{v:0,w:0};const i=(s,o)=>Kr(s)||Kr(o)?1:0,e=i("w","arrowup")-i("s","arrowdown"),t=i("a","arrowleft")-i("d","arrowright");if(!e&&!t)return null;const n=Kr("shift")?z_:1;return{v:e*k_*en.V_MAX*n,w:t*B_*en.W_MAX*n}}class V_{constructor(e){this.deliver=e}bridgeActive=!1;paused=!1;localSource=null;wasEngaged=!1;tick(e){if(this.bridgeActive||this.paused){this.localSource=null,this.wasEngaged=!1;return}let t=U_(),n="gamepad";t||(t=H_(),n="keyboard"),t?(this.deliver({type:"cmd",v:t.v,w:t.w,source:n},e),this.localSource=n,this.wasEngaged=!0):this.wasEngaged&&(this.deliver({type:"cmd",v:0,w:0,source:this.localSource??"keyboard"},e),this.wasEngaged=!1)}}const W_=i=>typeof i=="object"&&i!==null&&!Array.isArray(i),oa=i=>typeof i=="number"&&Number.isFinite(i);function X_(i){return W_(i)?i.type==="reset"?{ok:!0,msg:i}:i.type!=="cmd"?{ok:!1,error:`unknown type ${JSON.stringify(i.type)}`}:oa(i.v)?oa(i.w)?i.estop!==void 0&&typeof i.estop!="boolean"?{ok:!1,error:"estop must be a boolean"}:i.action!==void 0&&i.action!==null&&!(typeof i.action=="string"&&i.action.length<=64)?{ok:!1,error:"action must be a string (<= 64 chars) or null"}:i.source!==void 0&&!(typeof i.source=="string"&&i.source.length<=64)?{ok:!1,error:"source must be a string (<= 64 chars)"}:i.seq!==void 0&&!(Number.isInteger(i.seq)&&i.seq>=0)?{ok:!1,error:"seq must be an integer >= 0"}:i.t!==void 0&&!oa(i.t)?{ok:!1,error:"t must be a finite number"}:{ok:!0,msg:i}:{ok:!1,error:"w must be a finite number"}:{ok:!1,error:"v must be a finite number"}:{ok:!1,error:"not a JSON object"}}function $_(i){let e;try{e=JSON.parse(i)}catch{return{ok:!1,error:"malformed JSON"}}return X_(e)}function j_(i,e,t){const n=Math.max(-e,Math.min(e,i.v)),s=Math.max(-t,Math.min(t,i.w));return n===i.v&&s===i.w?i:{...i,v:n,w:s}}const Y_=4e3;class Vc{constructor(e,t){this.sim=t,this.url=e,t.onState(n=>this.sendState(n)),t.onEvent((n,s)=>{this.ws?.readyState===WebSocket.OPEN&&this.ws.send(JSON.stringify({type:"event",name:n,t:s}))})}url;link="closed";status=null;versionWarning=null;rxCmds=0;dropsInvalid=0;lastCmdMs=-1/0;ws=null;backoff=500;timer=null;rateWindow=[];static defaultUrl(){const e=new URLSearchParams(location.search).get("bridge");return e||(document.querySelector('meta[name="jackal-bridge"][content="same-origin"]')?`ws://${location.host}${en.paths.sim}`:`ws://localhost:${en.ports.ws}${en.paths.sim}`)}connect(e=this.url){this.url=e,this.close(),this.link="connecting";let t;try{t=new WebSocket(e)}catch{this.link="closed",this.versionWarning=`invalid bridge URL: ${e}`;return}this.ws=t,t.onopen=()=>{this.link="open",this.backoff=500},t.onmessage=n=>this.onMessage(String(n.data)),t.onclose=n=>{if(this.ws===t){if(this.ws=null,this.status=null,n.code===Y_){this.link="replaced";return}this.link="closed",this.timer=setTimeout(()=>this.connect(),this.backoff),this.backoff=Math.min(5e3,this.backoff*2)}}}close(){this.timer&&(clearTimeout(this.timer),this.timer=null);const e=this.ws;this.ws=null,e&&(e.onclose=null,e.close()),this.link="closed",this.status=null}isActive(e){return this.link==="open"&&(this.status?.active_source!=null||e-this.lastCmdMs<en.DEADMAN_MS)}rateHz(e){return this.rateWindow=this.rateWindow.filter(t=>e-t<1e3),this.rateWindow.length}onMessage(e){let t;try{t=JSON.parse(e)}catch{this.dropsInvalid++;return}if(t&&typeof t=="object"&&t.type==="bridge_status"){const o=t;this.status=o;const l=String(o.protocol_version??"").split(".")[0];this.versionWarning=l===F_?null:`bridge speaks protocol ${o.protocol_version}, this page speaks ${en.protocol_version}`,typeof o.tb=="number"&&this.ws?.send(JSON.stringify({type:"pong",tb:o.tb}));return}const n=$_(e);if(!n.ok){this.dropsInvalid++;return}const s=performance.now();this.sim.deliver(n.msg,s),n.msg.type==="cmd"&&(this.lastCmdMs=s,this.rxCmds++,this.rateWindow.push(s))}sendState(e){this.ws?.readyState===WebSocket.OPEN&&this.ws.send(JSON.stringify({...e,cmd_echo_tb:this.sim.gate.stats.lastEchoTb}))}}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Fo="170",q_=0,Wc=1,Z_=2,du=1,J_=2,Vn=3,ai=0,nn=1,Xn=2,ri=0,qi=1,Xc=2,$c=3,jc=4,K_=5,bi=100,Q_=101,eg=102,tg=103,ng=104,ig=200,rg=201,sg=202,ag=203,Xa=204,$a=205,og=206,cg=207,lg=208,ug=209,hg=210,dg=211,fg=212,pg=213,mg=214,ja=0,Ya=1,qa=2,Ki=3,Za=4,Ja=5,Ka=6,Qa=7,fu=0,_g=1,gg=2,si=0,vg=1,xg=2,yg=3,Sg=4,Mg=5,Eg=6,wg=7,pu=300,Qi=301,er=302,eo=303,to=304,Bs=306,no=1e3,Ai=1001,io=1002,wn=1003,bg=1004,Qr=1005,Dn=1006,ca=1007,Ci=1008,qn=1009,mu=1010,_u=1011,wr=1012,Uo=1013,Ri=1014,$n=1015,br=1016,No=1017,Oo=1018,tr=1020,gu=35902,vu=1021,xu=1022,En=1023,yu=1024,Su=1025,Zi=1026,nr=1027,Mu=1028,ko=1029,Eu=1030,Bo=1031,zo=1033,Cs=33776,Rs=33777,Ps=33778,Is=33779,ro=35840,so=35841,ao=35842,oo=35843,co=36196,lo=37492,uo=37496,ho=37808,fo=37809,po=37810,mo=37811,_o=37812,go=37813,vo=37814,xo=37815,yo=37816,So=37817,Mo=37818,Eo=37819,wo=37820,bo=37821,Ds=36492,To=36494,Ao=36495,wu=36283,Co=36284,Ro=36285,Po=36286,Tg=3200,Ag=3201,bu=0,Cg=1,ii="",_n="srgb",rr="srgb-linear",zs="linear",Mt="srgb",Fi=7680,Yc=519,Rg=512,Pg=513,Ig=514,Tu=515,Dg=516,Lg=517,Fg=518,Ug=519,qc=35044,Zc="300 es",jn=2e3,Fs=2001;class sr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const o=s.indexOf(t);o!==-1&&s.splice(o,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let o=0,l=s.length;o<l;o++)s[o].call(this,e);e.target=null}}}const $t=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],la=Math.PI/180,Io=180/Math.PI;function Tr(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return($t[i&255]+$t[i>>8&255]+$t[i>>16&255]+$t[i>>24&255]+"-"+$t[e&255]+$t[e>>8&255]+"-"+$t[e>>16&15|64]+$t[e>>24&255]+"-"+$t[t&63|128]+$t[t>>8&255]+"-"+$t[t>>16&255]+$t[t>>24&255]+$t[n&255]+$t[n>>8&255]+$t[n>>16&255]+$t[n>>24&255]).toLowerCase()}function Wt(i,e,t){return Math.max(e,Math.min(t,i))}function Ng(i,e){return(i%e+e)%e}function ua(i,e,t){return(1-t)*i+t*e}function dr(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function tn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class ze{constructor(e=0,t=0){ze.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Wt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),o=this.x-e.x,l=this.y-e.y;return this.x=o*n-l*s+e.x,this.y=o*s+l*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class et{constructor(e,t,n,s,o,l,u,d,f){et.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,o,l,u,d,f)}set(e,t,n,s,o,l,u,d,f){const m=this.elements;return m[0]=e,m[1]=s,m[2]=u,m[3]=t,m[4]=o,m[5]=d,m[6]=n,m[7]=l,m[8]=f,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,o=this.elements,l=n[0],u=n[3],d=n[6],f=n[1],m=n[4],g=n[7],v=n[2],y=n[5],T=n[8],C=s[0],S=s[3],_=s[6],N=s[1],L=s[4],I=s[7],G=s[2],R=s[5],O=s[8];return o[0]=l*C+u*N+d*G,o[3]=l*S+u*L+d*R,o[6]=l*_+u*I+d*O,o[1]=f*C+m*N+g*G,o[4]=f*S+m*L+g*R,o[7]=f*_+m*I+g*O,o[2]=v*C+y*N+T*G,o[5]=v*S+y*L+T*R,o[8]=v*_+y*I+T*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],o=e[3],l=e[4],u=e[5],d=e[6],f=e[7],m=e[8];return t*l*m-t*u*f-n*o*m+n*u*d+s*o*f-s*l*d}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],o=e[3],l=e[4],u=e[5],d=e[6],f=e[7],m=e[8],g=m*l-u*f,v=u*d-m*o,y=f*o-l*d,T=t*g+n*v+s*y;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/T;return e[0]=g*C,e[1]=(s*f-m*n)*C,e[2]=(u*n-s*l)*C,e[3]=v*C,e[4]=(m*t-s*d)*C,e[5]=(s*o-u*t)*C,e[6]=y*C,e[7]=(n*d-f*t)*C,e[8]=(l*t-n*o)*C,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,o,l,u){const d=Math.cos(o),f=Math.sin(o);return this.set(n*d,n*f,-n*(d*l+f*u)+l+e,-s*f,s*d,-s*(-f*l+d*u)+u+t,0,0,1),this}scale(e,t){return this.premultiply(ha.makeScale(e,t)),this}rotate(e){return this.premultiply(ha.makeRotation(-e)),this}translate(e,t){return this.premultiply(ha.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ha=new et;function Au(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Us(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Og(){const i=Us("canvas");return i.style.display="block",i}const Jc={};function xr(i){i in Jc||(Jc[i]=!0,console.warn(i))}function kg(i,e,t){return new Promise(function(n,s){function o(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(o,t);break;default:n()}}setTimeout(o,t)})}function Bg(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function zg(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const vt={enabled:!0,workingColorSpace:rr,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===Mt&&(i.r=Yn(i.r),i.g=Yn(i.g),i.b=Yn(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===Mt&&(i.r=Ji(i.r),i.g=Ji(i.g),i.b=Ji(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===ii?zs:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Yn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ji(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Kc=[.64,.33,.3,.6,.15,.06],Qc=[.2126,.7152,.0722],el=[.3127,.329],tl=new et().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),nl=new et().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);vt.define({[rr]:{primaries:Kc,whitePoint:el,transfer:zs,toXYZ:tl,fromXYZ:nl,luminanceCoefficients:Qc,workingColorSpaceConfig:{unpackColorSpace:_n},outputColorSpaceConfig:{drawingBufferColorSpace:_n}},[_n]:{primaries:Kc,whitePoint:el,transfer:Mt,toXYZ:tl,fromXYZ:nl,luminanceCoefficients:Qc,outputColorSpaceConfig:{drawingBufferColorSpace:_n}}});let Ui;class Gg{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ui===void 0&&(Ui=Us("canvas")),Ui.width=e.width,Ui.height=e.height;const n=Ui.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ui}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Us("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),o=s.data;for(let l=0;l<o.length;l++)o[l]=Yn(o[l]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Yn(t[n]/255)*255):t[n]=Yn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Hg=0;class Cu{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Hg++}),this.uuid=Tr(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let o;if(Array.isArray(s)){o=[];for(let l=0,u=s.length;l<u;l++)s[l].isDataTexture?o.push(da(s[l].image)):o.push(da(s[l]))}else o=da(s);n.url=o}return t||(e.images[this.uuid]=n),n}}function da(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Gg.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Vg=0;class rn extends sr{constructor(e=rn.DEFAULT_IMAGE,t=rn.DEFAULT_MAPPING,n=Ai,s=Ai,o=Dn,l=Ci,u=En,d=qn,f=rn.DEFAULT_ANISOTROPY,m=ii){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Vg++}),this.uuid=Tr(),this.name="",this.source=new Cu(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=o,this.minFilter=l,this.anisotropy=f,this.format=u,this.internalFormat=null,this.type=d,this.offset=new ze(0,0),this.repeat=new ze(1,1),this.center=new ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new et,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==pu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case no:e.x=e.x-Math.floor(e.x);break;case Ai:e.x=e.x<0?0:1;break;case io:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case no:e.y=e.y-Math.floor(e.y);break;case Ai:e.y=e.y<0?0:1;break;case io:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}rn.DEFAULT_IMAGE=null;rn.DEFAULT_MAPPING=pu;rn.DEFAULT_ANISOTROPY=1;class Pt{constructor(e=0,t=0,n=0,s=1){Pt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,o=this.w,l=e.elements;return this.x=l[0]*t+l[4]*n+l[8]*s+l[12]*o,this.y=l[1]*t+l[5]*n+l[9]*s+l[13]*o,this.z=l[2]*t+l[6]*n+l[10]*s+l[14]*o,this.w=l[3]*t+l[7]*n+l[11]*s+l[15]*o,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,o;const d=e.elements,f=d[0],m=d[4],g=d[8],v=d[1],y=d[5],T=d[9],C=d[2],S=d[6],_=d[10];if(Math.abs(m-v)<.01&&Math.abs(g-C)<.01&&Math.abs(T-S)<.01){if(Math.abs(m+v)<.1&&Math.abs(g+C)<.1&&Math.abs(T+S)<.1&&Math.abs(f+y+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const L=(f+1)/2,I=(y+1)/2,G=(_+1)/2,R=(m+v)/4,O=(g+C)/4,$=(T+S)/4;return L>I&&L>G?L<.01?(n=0,s=.707106781,o=.707106781):(n=Math.sqrt(L),s=R/n,o=O/n):I>G?I<.01?(n=.707106781,s=0,o=.707106781):(s=Math.sqrt(I),n=R/s,o=$/s):G<.01?(n=.707106781,s=.707106781,o=0):(o=Math.sqrt(G),n=O/o,s=$/o),this.set(n,s,o,t),this}let N=Math.sqrt((S-T)*(S-T)+(g-C)*(g-C)+(v-m)*(v-m));return Math.abs(N)<.001&&(N=1),this.x=(S-T)/N,this.y=(g-C)/N,this.z=(v-m)/N,this.w=Math.acos((f+y+_-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Wg extends sr{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Pt(0,0,e,t),this.scissorTest=!1,this.viewport=new Pt(0,0,e,t);const s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Dn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const o=new rn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);o.flipY=!1,o.generateMipmaps=n.generateMipmaps,o.internalFormat=n.internalFormat,this.textures=[];const l=n.count;for(let u=0;u<l;u++)this.textures[u]=o.clone(),this.textures[u].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,o=this.textures.length;s<o;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Cu(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Pi extends Wg{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Ru extends rn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=wn,this.minFilter=wn,this.wrapR=Ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Xg extends rn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=wn,this.minFilter=wn,this.wrapR=Ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ar{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,o,l,u){let d=n[s+0],f=n[s+1],m=n[s+2],g=n[s+3];const v=o[l+0],y=o[l+1],T=o[l+2],C=o[l+3];if(u===0){e[t+0]=d,e[t+1]=f,e[t+2]=m,e[t+3]=g;return}if(u===1){e[t+0]=v,e[t+1]=y,e[t+2]=T,e[t+3]=C;return}if(g!==C||d!==v||f!==y||m!==T){let S=1-u;const _=d*v+f*y+m*T+g*C,N=_>=0?1:-1,L=1-_*_;if(L>Number.EPSILON){const G=Math.sqrt(L),R=Math.atan2(G,_*N);S=Math.sin(S*R)/G,u=Math.sin(u*R)/G}const I=u*N;if(d=d*S+v*I,f=f*S+y*I,m=m*S+T*I,g=g*S+C*I,S===1-u){const G=1/Math.sqrt(d*d+f*f+m*m+g*g);d*=G,f*=G,m*=G,g*=G}}e[t]=d,e[t+1]=f,e[t+2]=m,e[t+3]=g}static multiplyQuaternionsFlat(e,t,n,s,o,l){const u=n[s],d=n[s+1],f=n[s+2],m=n[s+3],g=o[l],v=o[l+1],y=o[l+2],T=o[l+3];return e[t]=u*T+m*g+d*y-f*v,e[t+1]=d*T+m*v+f*g-u*y,e[t+2]=f*T+m*y+u*v-d*g,e[t+3]=m*T-u*g-d*v-f*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,o=e._z,l=e._order,u=Math.cos,d=Math.sin,f=u(n/2),m=u(s/2),g=u(o/2),v=d(n/2),y=d(s/2),T=d(o/2);switch(l){case"XYZ":this._x=v*m*g+f*y*T,this._y=f*y*g-v*m*T,this._z=f*m*T+v*y*g,this._w=f*m*g-v*y*T;break;case"YXZ":this._x=v*m*g+f*y*T,this._y=f*y*g-v*m*T,this._z=f*m*T-v*y*g,this._w=f*m*g+v*y*T;break;case"ZXY":this._x=v*m*g-f*y*T,this._y=f*y*g+v*m*T,this._z=f*m*T+v*y*g,this._w=f*m*g-v*y*T;break;case"ZYX":this._x=v*m*g-f*y*T,this._y=f*y*g+v*m*T,this._z=f*m*T-v*y*g,this._w=f*m*g+v*y*T;break;case"YZX":this._x=v*m*g+f*y*T,this._y=f*y*g+v*m*T,this._z=f*m*T-v*y*g,this._w=f*m*g-v*y*T;break;case"XZY":this._x=v*m*g-f*y*T,this._y=f*y*g-v*m*T,this._z=f*m*T+v*y*g,this._w=f*m*g+v*y*T;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+l)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],o=t[8],l=t[1],u=t[5],d=t[9],f=t[2],m=t[6],g=t[10],v=n+u+g;if(v>0){const y=.5/Math.sqrt(v+1);this._w=.25/y,this._x=(m-d)*y,this._y=(o-f)*y,this._z=(l-s)*y}else if(n>u&&n>g){const y=2*Math.sqrt(1+n-u-g);this._w=(m-d)/y,this._x=.25*y,this._y=(s+l)/y,this._z=(o+f)/y}else if(u>g){const y=2*Math.sqrt(1+u-n-g);this._w=(o-f)/y,this._x=(s+l)/y,this._y=.25*y,this._z=(d+m)/y}else{const y=2*Math.sqrt(1+g-n-u);this._w=(l-s)/y,this._x=(o+f)/y,this._y=(d+m)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Wt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,o=e._z,l=e._w,u=t._x,d=t._y,f=t._z,m=t._w;return this._x=n*m+l*u+s*f-o*d,this._y=s*m+l*d+o*u-n*f,this._z=o*m+l*f+n*d-s*u,this._w=l*m-n*u-s*d-o*f,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,o=this._z,l=this._w;let u=l*e._w+n*e._x+s*e._y+o*e._z;if(u<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,u=-u):this.copy(e),u>=1)return this._w=l,this._x=n,this._y=s,this._z=o,this;const d=1-u*u;if(d<=Number.EPSILON){const y=1-t;return this._w=y*l+t*this._w,this._x=y*n+t*this._x,this._y=y*s+t*this._y,this._z=y*o+t*this._z,this.normalize(),this}const f=Math.sqrt(d),m=Math.atan2(f,u),g=Math.sin((1-t)*m)/f,v=Math.sin(t*m)/f;return this._w=l*g+this._w*v,this._x=n*g+this._x*v,this._y=s*g+this._y*v,this._z=o*g+this._z*v,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),o*Math.sin(t),o*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{constructor(e=0,t=0,n=0){z.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(il.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(il.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,o=e.elements;return this.x=o[0]*t+o[3]*n+o[6]*s,this.y=o[1]*t+o[4]*n+o[7]*s,this.z=o[2]*t+o[5]*n+o[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,o=e.elements,l=1/(o[3]*t+o[7]*n+o[11]*s+o[15]);return this.x=(o[0]*t+o[4]*n+o[8]*s+o[12])*l,this.y=(o[1]*t+o[5]*n+o[9]*s+o[13])*l,this.z=(o[2]*t+o[6]*n+o[10]*s+o[14])*l,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,o=e.x,l=e.y,u=e.z,d=e.w,f=2*(l*s-u*n),m=2*(u*t-o*s),g=2*(o*n-l*t);return this.x=t+d*f+l*g-u*m,this.y=n+d*m+u*f-o*g,this.z=s+d*g+o*m-l*f,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s,this.y=o[1]*t+o[5]*n+o[9]*s,this.z=o[2]*t+o[6]*n+o[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,o=e.z,l=t.x,u=t.y,d=t.z;return this.x=s*d-o*u,this.y=o*l-n*d,this.z=n*u-s*l,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return fa.copy(this).projectOnVector(e),this.sub(fa)}reflect(e){return this.sub(fa.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Wt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const fa=new z,il=new Ar;class Cr{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(xn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(xn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=xn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const o=n.getAttribute("position");if(t===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let l=0,u=o.count;l<u;l++)e.isMesh===!0?e.getVertexPosition(l,xn):xn.fromBufferAttribute(o,l),xn.applyMatrix4(e.matrixWorld),this.expandByPoint(xn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),es.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),es.copy(n.boundingBox)),es.applyMatrix4(e.matrixWorld),this.union(es)}const s=e.children;for(let o=0,l=s.length;o<l;o++)this.expandByObject(s[o],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,xn),xn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(fr),ts.subVectors(this.max,fr),Ni.subVectors(e.a,fr),Oi.subVectors(e.b,fr),ki.subVectors(e.c,fr),Jn.subVectors(Oi,Ni),Kn.subVectors(ki,Oi),gi.subVectors(Ni,ki);let t=[0,-Jn.z,Jn.y,0,-Kn.z,Kn.y,0,-gi.z,gi.y,Jn.z,0,-Jn.x,Kn.z,0,-Kn.x,gi.z,0,-gi.x,-Jn.y,Jn.x,0,-Kn.y,Kn.x,0,-gi.y,gi.x,0];return!pa(t,Ni,Oi,ki,ts)||(t=[1,0,0,0,1,0,0,0,1],!pa(t,Ni,Oi,ki,ts))?!1:(ns.crossVectors(Jn,Kn),t=[ns.x,ns.y,ns.z],pa(t,Ni,Oi,ki,ts))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,xn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(xn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(kn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const kn=[new z,new z,new z,new z,new z,new z,new z,new z],xn=new z,es=new Cr,Ni=new z,Oi=new z,ki=new z,Jn=new z,Kn=new z,gi=new z,fr=new z,ts=new z,ns=new z,vi=new z;function pa(i,e,t,n,s){for(let o=0,l=i.length-3;o<=l;o+=3){vi.fromArray(i,o);const u=s.x*Math.abs(vi.x)+s.y*Math.abs(vi.y)+s.z*Math.abs(vi.z),d=e.dot(vi),f=t.dot(vi),m=n.dot(vi);if(Math.max(-Math.max(d,f,m),Math.min(d,f,m))>u)return!1}return!0}const $g=new Cr,pr=new z,ma=new z;class Gs{constructor(e=new z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):$g.setFromPoints(e).getCenter(n);let s=0;for(let o=0,l=e.length;o<l;o++)s=Math.max(s,n.distanceToSquared(e[o]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;pr.subVectors(e,this.center);const t=pr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(pr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ma.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(pr.copy(e.center).add(ma)),this.expandByPoint(pr.copy(e.center).sub(ma))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Bn=new z,_a=new z,is=new z,Qn=new z,ga=new z,rs=new z,va=new z;class Pu{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Bn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Bn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Bn.copy(this.origin).addScaledVector(this.direction,t),Bn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){_a.copy(e).add(t).multiplyScalar(.5),is.copy(t).sub(e).normalize(),Qn.copy(this.origin).sub(_a);const o=e.distanceTo(t)*.5,l=-this.direction.dot(is),u=Qn.dot(this.direction),d=-Qn.dot(is),f=Qn.lengthSq(),m=Math.abs(1-l*l);let g,v,y,T;if(m>0)if(g=l*d-u,v=l*u-d,T=o*m,g>=0)if(v>=-T)if(v<=T){const C=1/m;g*=C,v*=C,y=g*(g+l*v+2*u)+v*(l*g+v+2*d)+f}else v=o,g=Math.max(0,-(l*v+u)),y=-g*g+v*(v+2*d)+f;else v=-o,g=Math.max(0,-(l*v+u)),y=-g*g+v*(v+2*d)+f;else v<=-T?(g=Math.max(0,-(-l*o+u)),v=g>0?-o:Math.min(Math.max(-o,-d),o),y=-g*g+v*(v+2*d)+f):v<=T?(g=0,v=Math.min(Math.max(-o,-d),o),y=v*(v+2*d)+f):(g=Math.max(0,-(l*o+u)),v=g>0?o:Math.min(Math.max(-o,-d),o),y=-g*g+v*(v+2*d)+f);else v=l>0?-o:o,g=Math.max(0,-(l*v+u)),y=-g*g+v*(v+2*d)+f;return n&&n.copy(this.origin).addScaledVector(this.direction,g),s&&s.copy(_a).addScaledVector(is,v),y}intersectSphere(e,t){Bn.subVectors(e.center,this.origin);const n=Bn.dot(this.direction),s=Bn.dot(Bn)-n*n,o=e.radius*e.radius;if(s>o)return null;const l=Math.sqrt(o-s),u=n-l,d=n+l;return d<0?null:u<0?this.at(d,t):this.at(u,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,o,l,u,d;const f=1/this.direction.x,m=1/this.direction.y,g=1/this.direction.z,v=this.origin;return f>=0?(n=(e.min.x-v.x)*f,s=(e.max.x-v.x)*f):(n=(e.max.x-v.x)*f,s=(e.min.x-v.x)*f),m>=0?(o=(e.min.y-v.y)*m,l=(e.max.y-v.y)*m):(o=(e.max.y-v.y)*m,l=(e.min.y-v.y)*m),n>l||o>s||((o>n||isNaN(n))&&(n=o),(l<s||isNaN(s))&&(s=l),g>=0?(u=(e.min.z-v.z)*g,d=(e.max.z-v.z)*g):(u=(e.max.z-v.z)*g,d=(e.min.z-v.z)*g),n>d||u>s)||((u>n||n!==n)&&(n=u),(d<s||s!==s)&&(s=d),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Bn)!==null}intersectTriangle(e,t,n,s,o){ga.subVectors(t,e),rs.subVectors(n,e),va.crossVectors(ga,rs);let l=this.direction.dot(va),u;if(l>0){if(s)return null;u=1}else if(l<0)u=-1,l=-l;else return null;Qn.subVectors(this.origin,e);const d=u*this.direction.dot(rs.crossVectors(Qn,rs));if(d<0)return null;const f=u*this.direction.dot(ga.cross(Qn));if(f<0||d+f>l)return null;const m=-u*Qn.dot(va);return m<0?null:this.at(m/l,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class At{constructor(e,t,n,s,o,l,u,d,f,m,g,v,y,T,C,S){At.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,o,l,u,d,f,m,g,v,y,T,C,S)}set(e,t,n,s,o,l,u,d,f,m,g,v,y,T,C,S){const _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=s,_[1]=o,_[5]=l,_[9]=u,_[13]=d,_[2]=f,_[6]=m,_[10]=g,_[14]=v,_[3]=y,_[7]=T,_[11]=C,_[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new At().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/Bi.setFromMatrixColumn(e,0).length(),o=1/Bi.setFromMatrixColumn(e,1).length(),l=1/Bi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*o,t[5]=n[5]*o,t[6]=n[6]*o,t[7]=0,t[8]=n[8]*l,t[9]=n[9]*l,t[10]=n[10]*l,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,o=e.z,l=Math.cos(n),u=Math.sin(n),d=Math.cos(s),f=Math.sin(s),m=Math.cos(o),g=Math.sin(o);if(e.order==="XYZ"){const v=l*m,y=l*g,T=u*m,C=u*g;t[0]=d*m,t[4]=-d*g,t[8]=f,t[1]=y+T*f,t[5]=v-C*f,t[9]=-u*d,t[2]=C-v*f,t[6]=T+y*f,t[10]=l*d}else if(e.order==="YXZ"){const v=d*m,y=d*g,T=f*m,C=f*g;t[0]=v+C*u,t[4]=T*u-y,t[8]=l*f,t[1]=l*g,t[5]=l*m,t[9]=-u,t[2]=y*u-T,t[6]=C+v*u,t[10]=l*d}else if(e.order==="ZXY"){const v=d*m,y=d*g,T=f*m,C=f*g;t[0]=v-C*u,t[4]=-l*g,t[8]=T+y*u,t[1]=y+T*u,t[5]=l*m,t[9]=C-v*u,t[2]=-l*f,t[6]=u,t[10]=l*d}else if(e.order==="ZYX"){const v=l*m,y=l*g,T=u*m,C=u*g;t[0]=d*m,t[4]=T*f-y,t[8]=v*f+C,t[1]=d*g,t[5]=C*f+v,t[9]=y*f-T,t[2]=-f,t[6]=u*d,t[10]=l*d}else if(e.order==="YZX"){const v=l*d,y=l*f,T=u*d,C=u*f;t[0]=d*m,t[4]=C-v*g,t[8]=T*g+y,t[1]=g,t[5]=l*m,t[9]=-u*m,t[2]=-f*m,t[6]=y*g+T,t[10]=v-C*g}else if(e.order==="XZY"){const v=l*d,y=l*f,T=u*d,C=u*f;t[0]=d*m,t[4]=-g,t[8]=f*m,t[1]=v*g+C,t[5]=l*m,t[9]=y*g-T,t[2]=T*g-y,t[6]=u*m,t[10]=C*g+v}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(jg,e,Yg)}lookAt(e,t,n){const s=this.elements;return ln.subVectors(e,t),ln.lengthSq()===0&&(ln.z=1),ln.normalize(),ei.crossVectors(n,ln),ei.lengthSq()===0&&(Math.abs(n.z)===1?ln.x+=1e-4:ln.z+=1e-4,ln.normalize(),ei.crossVectors(n,ln)),ei.normalize(),ss.crossVectors(ln,ei),s[0]=ei.x,s[4]=ss.x,s[8]=ln.x,s[1]=ei.y,s[5]=ss.y,s[9]=ln.y,s[2]=ei.z,s[6]=ss.z,s[10]=ln.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,o=this.elements,l=n[0],u=n[4],d=n[8],f=n[12],m=n[1],g=n[5],v=n[9],y=n[13],T=n[2],C=n[6],S=n[10],_=n[14],N=n[3],L=n[7],I=n[11],G=n[15],R=s[0],O=s[4],$=s[8],D=s[12],E=s[1],k=s[5],te=s[9],K=s[13],ee=s[2],pe=s[6],ae=s[10],Se=s[14],re=s[3],Ae=s[7],Pe=s[11],Ge=s[15];return o[0]=l*R+u*E+d*ee+f*re,o[4]=l*O+u*k+d*pe+f*Ae,o[8]=l*$+u*te+d*ae+f*Pe,o[12]=l*D+u*K+d*Se+f*Ge,o[1]=m*R+g*E+v*ee+y*re,o[5]=m*O+g*k+v*pe+y*Ae,o[9]=m*$+g*te+v*ae+y*Pe,o[13]=m*D+g*K+v*Se+y*Ge,o[2]=T*R+C*E+S*ee+_*re,o[6]=T*O+C*k+S*pe+_*Ae,o[10]=T*$+C*te+S*ae+_*Pe,o[14]=T*D+C*K+S*Se+_*Ge,o[3]=N*R+L*E+I*ee+G*re,o[7]=N*O+L*k+I*pe+G*Ae,o[11]=N*$+L*te+I*ae+G*Pe,o[15]=N*D+L*K+I*Se+G*Ge,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],o=e[12],l=e[1],u=e[5],d=e[9],f=e[13],m=e[2],g=e[6],v=e[10],y=e[14],T=e[3],C=e[7],S=e[11],_=e[15];return T*(+o*d*g-s*f*g-o*u*v+n*f*v+s*u*y-n*d*y)+C*(+t*d*y-t*f*v+o*l*v-s*l*y+s*f*m-o*d*m)+S*(+t*f*g-t*u*y-o*l*g+n*l*y+o*u*m-n*f*m)+_*(-s*u*m-t*d*g+t*u*v+s*l*g-n*l*v+n*d*m)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],o=e[3],l=e[4],u=e[5],d=e[6],f=e[7],m=e[8],g=e[9],v=e[10],y=e[11],T=e[12],C=e[13],S=e[14],_=e[15],N=g*S*f-C*v*f+C*d*y-u*S*y-g*d*_+u*v*_,L=T*v*f-m*S*f-T*d*y+l*S*y+m*d*_-l*v*_,I=m*C*f-T*g*f+T*u*y-l*C*y-m*u*_+l*g*_,G=T*g*d-m*C*d-T*u*v+l*C*v+m*u*S-l*g*S,R=t*N+n*L+s*I+o*G;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/R;return e[0]=N*O,e[1]=(C*v*o-g*S*o-C*s*y+n*S*y+g*s*_-n*v*_)*O,e[2]=(u*S*o-C*d*o+C*s*f-n*S*f-u*s*_+n*d*_)*O,e[3]=(g*d*o-u*v*o-g*s*f+n*v*f+u*s*y-n*d*y)*O,e[4]=L*O,e[5]=(m*S*o-T*v*o+T*s*y-t*S*y-m*s*_+t*v*_)*O,e[6]=(T*d*o-l*S*o-T*s*f+t*S*f+l*s*_-t*d*_)*O,e[7]=(l*v*o-m*d*o+m*s*f-t*v*f-l*s*y+t*d*y)*O,e[8]=I*O,e[9]=(T*g*o-m*C*o-T*n*y+t*C*y+m*n*_-t*g*_)*O,e[10]=(l*C*o-T*u*o+T*n*f-t*C*f-l*n*_+t*u*_)*O,e[11]=(m*u*o-l*g*o-m*n*f+t*g*f+l*n*y-t*u*y)*O,e[12]=G*O,e[13]=(m*C*s-T*g*s+T*n*v-t*C*v-m*n*S+t*g*S)*O,e[14]=(T*u*s-l*C*s-T*n*d+t*C*d+l*n*S-t*u*S)*O,e[15]=(l*g*s-m*u*s+m*n*d-t*g*d-l*n*v+t*u*v)*O,this}scale(e){const t=this.elements,n=e.x,s=e.y,o=e.z;return t[0]*=n,t[4]*=s,t[8]*=o,t[1]*=n,t[5]*=s,t[9]*=o,t[2]*=n,t[6]*=s,t[10]*=o,t[3]*=n,t[7]*=s,t[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),o=1-n,l=e.x,u=e.y,d=e.z,f=o*l,m=o*u;return this.set(f*l+n,f*u-s*d,f*d+s*u,0,f*u+s*d,m*u+n,m*d-s*l,0,f*d-s*u,m*d+s*l,o*d*d+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,o,l){return this.set(1,n,o,0,e,1,l,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,o=t._x,l=t._y,u=t._z,d=t._w,f=o+o,m=l+l,g=u+u,v=o*f,y=o*m,T=o*g,C=l*m,S=l*g,_=u*g,N=d*f,L=d*m,I=d*g,G=n.x,R=n.y,O=n.z;return s[0]=(1-(C+_))*G,s[1]=(y+I)*G,s[2]=(T-L)*G,s[3]=0,s[4]=(y-I)*R,s[5]=(1-(v+_))*R,s[6]=(S+N)*R,s[7]=0,s[8]=(T+L)*O,s[9]=(S-N)*O,s[10]=(1-(v+C))*O,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let o=Bi.set(s[0],s[1],s[2]).length();const l=Bi.set(s[4],s[5],s[6]).length(),u=Bi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(o=-o),e.x=s[12],e.y=s[13],e.z=s[14],yn.copy(this);const f=1/o,m=1/l,g=1/u;return yn.elements[0]*=f,yn.elements[1]*=f,yn.elements[2]*=f,yn.elements[4]*=m,yn.elements[5]*=m,yn.elements[6]*=m,yn.elements[8]*=g,yn.elements[9]*=g,yn.elements[10]*=g,t.setFromRotationMatrix(yn),n.x=o,n.y=l,n.z=u,this}makePerspective(e,t,n,s,o,l,u=jn){const d=this.elements,f=2*o/(t-e),m=2*o/(n-s),g=(t+e)/(t-e),v=(n+s)/(n-s);let y,T;if(u===jn)y=-(l+o)/(l-o),T=-2*l*o/(l-o);else if(u===Fs)y=-l/(l-o),T=-l*o/(l-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+u);return d[0]=f,d[4]=0,d[8]=g,d[12]=0,d[1]=0,d[5]=m,d[9]=v,d[13]=0,d[2]=0,d[6]=0,d[10]=y,d[14]=T,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,t,n,s,o,l,u=jn){const d=this.elements,f=1/(t-e),m=1/(n-s),g=1/(l-o),v=(t+e)*f,y=(n+s)*m;let T,C;if(u===jn)T=(l+o)*g,C=-2*g;else if(u===Fs)T=o*g,C=-1*g;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+u);return d[0]=2*f,d[4]=0,d[8]=0,d[12]=-v,d[1]=0,d[5]=2*m,d[9]=0,d[13]=-y,d[2]=0,d[6]=0,d[10]=C,d[14]=-T,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Bi=new z,yn=new At,jg=new z(0,0,0),Yg=new z(1,1,1),ei=new z,ss=new z,ln=new z,rl=new At,sl=new Ar;class Fn{constructor(e=0,t=0,n=0,s=Fn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,o=s[0],l=s[4],u=s[8],d=s[1],f=s[5],m=s[9],g=s[2],v=s[6],y=s[10];switch(t){case"XYZ":this._y=Math.asin(Wt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-m,y),this._z=Math.atan2(-l,o)):(this._x=Math.atan2(v,f),this._z=0);break;case"YXZ":this._x=Math.asin(-Wt(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(u,y),this._z=Math.atan2(d,f)):(this._y=Math.atan2(-g,o),this._z=0);break;case"ZXY":this._x=Math.asin(Wt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-g,y),this._z=Math.atan2(-l,f)):(this._y=0,this._z=Math.atan2(d,o));break;case"ZYX":this._y=Math.asin(-Wt(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(v,y),this._z=Math.atan2(d,o)):(this._x=0,this._z=Math.atan2(-l,f));break;case"YZX":this._z=Math.asin(Wt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-m,f),this._y=Math.atan2(-g,o)):(this._x=0,this._y=Math.atan2(u,y));break;case"XZY":this._z=Math.asin(-Wt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(v,f),this._y=Math.atan2(u,o)):(this._x=Math.atan2(-m,y),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return rl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(rl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return sl.setFromEuler(this),this.setFromQuaternion(sl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Fn.DEFAULT_ORDER="XYZ";class Iu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let qg=0;const al=new z,zi=new Ar,zn=new At,as=new z,mr=new z,Zg=new z,Jg=new Ar,ol=new z(1,0,0),cl=new z(0,1,0),ll=new z(0,0,1),ul={type:"added"},Kg={type:"removed"},Gi={type:"childadded",child:null},xa={type:"childremoved",child:null};class Gt extends sr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:qg++}),this.uuid=Tr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Gt.DEFAULT_UP.clone();const e=new z,t=new Fn,n=new Ar,s=new z(1,1,1);function o(){n.setFromEuler(t,!1)}function l(){t.setFromQuaternion(n,void 0,!1)}t._onChange(o),n._onChange(l),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new At},normalMatrix:{value:new et}}),this.matrix=new At,this.matrixWorld=new At,this.matrixAutoUpdate=Gt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Iu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return zi.setFromAxisAngle(e,t),this.quaternion.multiply(zi),this}rotateOnWorldAxis(e,t){return zi.setFromAxisAngle(e,t),this.quaternion.premultiply(zi),this}rotateX(e){return this.rotateOnAxis(ol,e)}rotateY(e){return this.rotateOnAxis(cl,e)}rotateZ(e){return this.rotateOnAxis(ll,e)}translateOnAxis(e,t){return al.copy(e).applyQuaternion(this.quaternion),this.position.add(al.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ol,e)}translateY(e){return this.translateOnAxis(cl,e)}translateZ(e){return this.translateOnAxis(ll,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(zn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?as.copy(e):as.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),mr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?zn.lookAt(mr,as,this.up):zn.lookAt(as,mr,this.up),this.quaternion.setFromRotationMatrix(zn),s&&(zn.extractRotation(s.matrixWorld),zi.setFromRotationMatrix(zn),this.quaternion.premultiply(zi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ul),Gi.child=e,this.dispatchEvent(Gi),Gi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Kg),xa.child=e,this.dispatchEvent(xa),xa.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),zn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),zn.multiply(e.parent.matrixWorld)),e.applyMatrix4(zn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ul),Gi.child=e,this.dispatchEvent(Gi),Gi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const l=this.children[n].getObjectByProperty(e,t);if(l!==void 0)return l}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let o=0,l=s.length;o<l;o++)s[o].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mr,e,Zg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mr,Jg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let o=0,l=s.length;o<l;o++)s[o].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(u=>({boxInitialized:u.boxInitialized,boxMin:u.box.min.toArray(),boxMax:u.box.max.toArray(),sphereInitialized:u.sphereInitialized,sphereRadius:u.sphere.radius,sphereCenter:u.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function o(u,d){return u[d.uuid]===void 0&&(u[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(e.geometries,this.geometry);const u=this.geometry.parameters;if(u!==void 0&&u.shapes!==void 0){const d=u.shapes;if(Array.isArray(d))for(let f=0,m=d.length;f<m;f++){const g=d[f];o(e.shapes,g)}else o(e.shapes,d)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const u=[];for(let d=0,f=this.material.length;d<f;d++)u.push(o(e.materials,this.material[d]));s.material=u}else s.material=o(e.materials,this.material);if(this.children.length>0){s.children=[];for(let u=0;u<this.children.length;u++)s.children.push(this.children[u].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let u=0;u<this.animations.length;u++){const d=this.animations[u];s.animations.push(o(e.animations,d))}}if(t){const u=l(e.geometries),d=l(e.materials),f=l(e.textures),m=l(e.images),g=l(e.shapes),v=l(e.skeletons),y=l(e.animations),T=l(e.nodes);u.length>0&&(n.geometries=u),d.length>0&&(n.materials=d),f.length>0&&(n.textures=f),m.length>0&&(n.images=m),g.length>0&&(n.shapes=g),v.length>0&&(n.skeletons=v),y.length>0&&(n.animations=y),T.length>0&&(n.nodes=T)}return n.object=s,n;function l(u){const d=[];for(const f in u){const m=u[f];delete m.metadata,d.push(m)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}Gt.DEFAULT_UP=new z(0,1,0);Gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Sn=new z,Gn=new z,ya=new z,Hn=new z,Hi=new z,Vi=new z,hl=new z,Sa=new z,Ma=new z,Ea=new z,wa=new Pt,ba=new Pt,Ta=new Pt;class Mn{constructor(e=new z,t=new z,n=new z){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Sn.subVectors(e,t),s.cross(Sn);const o=s.lengthSq();return o>0?s.multiplyScalar(1/Math.sqrt(o)):s.set(0,0,0)}static getBarycoord(e,t,n,s,o){Sn.subVectors(s,t),Gn.subVectors(n,t),ya.subVectors(e,t);const l=Sn.dot(Sn),u=Sn.dot(Gn),d=Sn.dot(ya),f=Gn.dot(Gn),m=Gn.dot(ya),g=l*f-u*u;if(g===0)return o.set(0,0,0),null;const v=1/g,y=(f*d-u*m)*v,T=(l*m-u*d)*v;return o.set(1-y-T,T,y)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Hn)===null?!1:Hn.x>=0&&Hn.y>=0&&Hn.x+Hn.y<=1}static getInterpolation(e,t,n,s,o,l,u,d){return this.getBarycoord(e,t,n,s,Hn)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(o,Hn.x),d.addScaledVector(l,Hn.y),d.addScaledVector(u,Hn.z),d)}static getInterpolatedAttribute(e,t,n,s,o,l){return wa.setScalar(0),ba.setScalar(0),Ta.setScalar(0),wa.fromBufferAttribute(e,t),ba.fromBufferAttribute(e,n),Ta.fromBufferAttribute(e,s),l.setScalar(0),l.addScaledVector(wa,o.x),l.addScaledVector(ba,o.y),l.addScaledVector(Ta,o.z),l}static isFrontFacing(e,t,n,s){return Sn.subVectors(n,t),Gn.subVectors(e,t),Sn.cross(Gn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Sn.subVectors(this.c,this.b),Gn.subVectors(this.a,this.b),Sn.cross(Gn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Mn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Mn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,o){return Mn.getInterpolation(e,this.a,this.b,this.c,t,n,s,o)}containsPoint(e){return Mn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Mn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,o=this.c;let l,u;Hi.subVectors(s,n),Vi.subVectors(o,n),Sa.subVectors(e,n);const d=Hi.dot(Sa),f=Vi.dot(Sa);if(d<=0&&f<=0)return t.copy(n);Ma.subVectors(e,s);const m=Hi.dot(Ma),g=Vi.dot(Ma);if(m>=0&&g<=m)return t.copy(s);const v=d*g-m*f;if(v<=0&&d>=0&&m<=0)return l=d/(d-m),t.copy(n).addScaledVector(Hi,l);Ea.subVectors(e,o);const y=Hi.dot(Ea),T=Vi.dot(Ea);if(T>=0&&y<=T)return t.copy(o);const C=y*f-d*T;if(C<=0&&f>=0&&T<=0)return u=f/(f-T),t.copy(n).addScaledVector(Vi,u);const S=m*T-y*g;if(S<=0&&g-m>=0&&y-T>=0)return hl.subVectors(o,s),u=(g-m)/(g-m+(y-T)),t.copy(s).addScaledVector(hl,u);const _=1/(S+C+v);return l=C*_,u=v*_,t.copy(n).addScaledVector(Hi,l).addScaledVector(Vi,u)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Du={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ti={h:0,s:0,l:0},os={h:0,s:0,l:0};function Aa(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class at{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=_n){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,vt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=vt.workingColorSpace){return this.r=e,this.g=t,this.b=n,vt.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=vt.workingColorSpace){if(e=Ng(e,1),t=Wt(t,0,1),n=Wt(n,0,1),t===0)this.r=this.g=this.b=n;else{const o=n<=.5?n*(1+t):n+t-n*t,l=2*n-o;this.r=Aa(l,o,e+1/3),this.g=Aa(l,o,e),this.b=Aa(l,o,e-1/3)}return vt.toWorkingColorSpace(this,s),this}setStyle(e,t=_n){function n(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const l=s[1],u=s[2];switch(l){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,t);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=s[1],l=o.length;if(l===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,t);if(l===6)return this.setHex(parseInt(o,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=_n){const n=Du[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Yn(e.r),this.g=Yn(e.g),this.b=Yn(e.b),this}copyLinearToSRGB(e){return this.r=Ji(e.r),this.g=Ji(e.g),this.b=Ji(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=_n){return vt.fromWorkingColorSpace(jt.copy(this),e),Math.round(Wt(jt.r*255,0,255))*65536+Math.round(Wt(jt.g*255,0,255))*256+Math.round(Wt(jt.b*255,0,255))}getHexString(e=_n){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=vt.workingColorSpace){vt.fromWorkingColorSpace(jt.copy(this),t);const n=jt.r,s=jt.g,o=jt.b,l=Math.max(n,s,o),u=Math.min(n,s,o);let d,f;const m=(u+l)/2;if(u===l)d=0,f=0;else{const g=l-u;switch(f=m<=.5?g/(l+u):g/(2-l-u),l){case n:d=(s-o)/g+(s<o?6:0);break;case s:d=(o-n)/g+2;break;case o:d=(n-s)/g+4;break}d/=6}return e.h=d,e.s=f,e.l=m,e}getRGB(e,t=vt.workingColorSpace){return vt.fromWorkingColorSpace(jt.copy(this),t),e.r=jt.r,e.g=jt.g,e.b=jt.b,e}getStyle(e=_n){vt.fromWorkingColorSpace(jt.copy(this),e);const t=jt.r,n=jt.g,s=jt.b;return e!==_n?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(ti),this.setHSL(ti.h+e,ti.s+t,ti.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ti),e.getHSL(os);const n=ua(ti.h,os.h,t),s=ua(ti.s,os.s,t),o=ua(ti.l,os.l,t);return this.setHSL(n,s,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,o=e.elements;return this.r=o[0]*t+o[3]*n+o[6]*s,this.g=o[1]*t+o[4]*n+o[7]*s,this.b=o[2]*t+o[5]*n+o[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const jt=new at;at.NAMES=Du;let Qg=0;class ar extends sr{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Qg++}),this.uuid=Tr(),this.name="",this.blending=qi,this.side=ai,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Xa,this.blendDst=$a,this.blendEquation=bi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new at(0,0,0),this.blendAlpha=0,this.depthFunc=Ki,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Yc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Fi,this.stencilZFail=Fi,this.stencilZPass=Fi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==qi&&(n.blending=this.blending),this.side!==ai&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Xa&&(n.blendSrc=this.blendSrc),this.blendDst!==$a&&(n.blendDst=this.blendDst),this.blendEquation!==bi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ki&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Yc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Fi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Fi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Fi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(o){const l=[];for(const u in o){const d=o[u];delete d.metadata,l.push(d)}return l}if(t){const o=s(e.textures),l=s(e.images);o.length>0&&(n.textures=o),l.length>0&&(n.images=l)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let o=0;o!==s;++o)n[o]=t[o].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Lu extends ar{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new at(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fn,this.combine=fu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const It=new z,cs=new ze;class fn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=qc,this.updateRanges=[],this.gpuType=$n,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,o=this.itemSize;s<o;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)cs.fromBufferAttribute(this,t),cs.applyMatrix3(e),this.setXY(t,cs.x,cs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyMatrix3(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyMatrix4(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyNormalMatrix(e),this.setXYZ(t,It.x,It.y,It.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.transformDirection(e),this.setXYZ(t,It.x,It.y,It.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=dr(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=tn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=dr(t,this.array)),t}setX(e,t){return this.normalized&&(t=tn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=dr(t,this.array)),t}setY(e,t){return this.normalized&&(t=tn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=dr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=tn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=dr(t,this.array)),t}setW(e,t){return this.normalized&&(t=tn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=tn(t,this.array),n=tn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=tn(t,this.array),n=tn(n,this.array),s=tn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,o){return e*=this.itemSize,this.normalized&&(t=tn(t,this.array),n=tn(n,this.array),s=tn(s,this.array),o=tn(o,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==qc&&(e.usage=this.usage),e}}class Fu extends fn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Uu extends fn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Dt extends fn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let ev=0;const mn=new At,Ca=new Gt,Wi=new z,un=new Cr,_r=new Cr,Bt=new z;class sn extends sr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ev++}),this.uuid=Tr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Au(e)?Uu:Fu)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const o=new et().getNormalMatrix(e);n.applyNormalMatrix(o),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return mn.makeRotationFromQuaternion(e),this.applyMatrix4(mn),this}rotateX(e){return mn.makeRotationX(e),this.applyMatrix4(mn),this}rotateY(e){return mn.makeRotationY(e),this.applyMatrix4(mn),this}rotateZ(e){return mn.makeRotationZ(e),this.applyMatrix4(mn),this}translate(e,t,n){return mn.makeTranslation(e,t,n),this.applyMatrix4(mn),this}scale(e,t,n){return mn.makeScale(e,t,n),this.applyMatrix4(mn),this}lookAt(e){return Ca.lookAt(e),Ca.updateMatrix(),this.applyMatrix4(Ca.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Wi).negate(),this.translate(Wi.x,Wi.y,Wi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,o=e.length;s<o;s++){const l=e[s];n.push(l.x,l.y,l.z||0)}this.setAttribute("position",new Dt(n,3))}else{for(let n=0,s=t.count;n<s;n++){const o=e[n];t.setXYZ(n,o.x,o.y,o.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Cr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const o=t[n];un.setFromBufferAttribute(o),this.morphTargetsRelative?(Bt.addVectors(this.boundingBox.min,un.min),this.boundingBox.expandByPoint(Bt),Bt.addVectors(this.boundingBox.max,un.max),this.boundingBox.expandByPoint(Bt)):(this.boundingBox.expandByPoint(un.min),this.boundingBox.expandByPoint(un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(e){const n=this.boundingSphere.center;if(un.setFromBufferAttribute(e),t)for(let o=0,l=t.length;o<l;o++){const u=t[o];_r.setFromBufferAttribute(u),this.morphTargetsRelative?(Bt.addVectors(un.min,_r.min),un.expandByPoint(Bt),Bt.addVectors(un.max,_r.max),un.expandByPoint(Bt)):(un.expandByPoint(_r.min),un.expandByPoint(_r.max))}un.getCenter(n);let s=0;for(let o=0,l=e.count;o<l;o++)Bt.fromBufferAttribute(e,o),s=Math.max(s,n.distanceToSquared(Bt));if(t)for(let o=0,l=t.length;o<l;o++){const u=t[o],d=this.morphTargetsRelative;for(let f=0,m=u.count;f<m;f++)Bt.fromBufferAttribute(u,f),d&&(Wi.fromBufferAttribute(e,f),Bt.add(Wi)),s=Math.max(s,n.distanceToSquared(Bt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,o=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new fn(new Float32Array(4*n.count),4));const l=this.getAttribute("tangent"),u=[],d=[];for(let $=0;$<n.count;$++)u[$]=new z,d[$]=new z;const f=new z,m=new z,g=new z,v=new ze,y=new ze,T=new ze,C=new z,S=new z;function _($,D,E){f.fromBufferAttribute(n,$),m.fromBufferAttribute(n,D),g.fromBufferAttribute(n,E),v.fromBufferAttribute(o,$),y.fromBufferAttribute(o,D),T.fromBufferAttribute(o,E),m.sub(f),g.sub(f),y.sub(v),T.sub(v);const k=1/(y.x*T.y-T.x*y.y);isFinite(k)&&(C.copy(m).multiplyScalar(T.y).addScaledVector(g,-y.y).multiplyScalar(k),S.copy(g).multiplyScalar(y.x).addScaledVector(m,-T.x).multiplyScalar(k),u[$].add(C),u[D].add(C),u[E].add(C),d[$].add(S),d[D].add(S),d[E].add(S))}let N=this.groups;N.length===0&&(N=[{start:0,count:e.count}]);for(let $=0,D=N.length;$<D;++$){const E=N[$],k=E.start,te=E.count;for(let K=k,ee=k+te;K<ee;K+=3)_(e.getX(K+0),e.getX(K+1),e.getX(K+2))}const L=new z,I=new z,G=new z,R=new z;function O($){G.fromBufferAttribute(s,$),R.copy(G);const D=u[$];L.copy(D),L.sub(G.multiplyScalar(G.dot(D))).normalize(),I.crossVectors(R,D);const k=I.dot(d[$])<0?-1:1;l.setXYZW($,L.x,L.y,L.z,k)}for(let $=0,D=N.length;$<D;++$){const E=N[$],k=E.start,te=E.count;for(let K=k,ee=k+te;K<ee;K+=3)O(e.getX(K+0)),O(e.getX(K+1)),O(e.getX(K+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new fn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let v=0,y=n.count;v<y;v++)n.setXYZ(v,0,0,0);const s=new z,o=new z,l=new z,u=new z,d=new z,f=new z,m=new z,g=new z;if(e)for(let v=0,y=e.count;v<y;v+=3){const T=e.getX(v+0),C=e.getX(v+1),S=e.getX(v+2);s.fromBufferAttribute(t,T),o.fromBufferAttribute(t,C),l.fromBufferAttribute(t,S),m.subVectors(l,o),g.subVectors(s,o),m.cross(g),u.fromBufferAttribute(n,T),d.fromBufferAttribute(n,C),f.fromBufferAttribute(n,S),u.add(m),d.add(m),f.add(m),n.setXYZ(T,u.x,u.y,u.z),n.setXYZ(C,d.x,d.y,d.z),n.setXYZ(S,f.x,f.y,f.z)}else for(let v=0,y=t.count;v<y;v+=3)s.fromBufferAttribute(t,v+0),o.fromBufferAttribute(t,v+1),l.fromBufferAttribute(t,v+2),m.subVectors(l,o),g.subVectors(s,o),m.cross(g),n.setXYZ(v+0,m.x,m.y,m.z),n.setXYZ(v+1,m.x,m.y,m.z),n.setXYZ(v+2,m.x,m.y,m.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Bt.fromBufferAttribute(e,t),Bt.normalize(),e.setXYZ(t,Bt.x,Bt.y,Bt.z)}toNonIndexed(){function e(u,d){const f=u.array,m=u.itemSize,g=u.normalized,v=new f.constructor(d.length*m);let y=0,T=0;for(let C=0,S=d.length;C<S;C++){u.isInterleavedBufferAttribute?y=d[C]*u.data.stride+u.offset:y=d[C]*m;for(let _=0;_<m;_++)v[T++]=f[y++]}return new fn(v,m,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new sn,n=this.index.array,s=this.attributes;for(const u in s){const d=s[u],f=e(d,n);t.setAttribute(u,f)}const o=this.morphAttributes;for(const u in o){const d=[],f=o[u];for(let m=0,g=f.length;m<g;m++){const v=f[m],y=e(v,n);d.push(y)}t.morphAttributes[u]=d}t.morphTargetsRelative=this.morphTargetsRelative;const l=this.groups;for(let u=0,d=l.length;u<d;u++){const f=l[u];t.addGroup(f.start,f.count,f.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const f in d)d[f]!==void 0&&(e[f]=d[f]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const d in n){const f=n[d];e.data.attributes[d]=f.toJSON(e.data)}const s={};let o=!1;for(const d in this.morphAttributes){const f=this.morphAttributes[d],m=[];for(let g=0,v=f.length;g<v;g++){const y=f[g];m.push(y.toJSON(e.data))}m.length>0&&(s[d]=m,o=!0)}o&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const l=this.groups;l.length>0&&(e.data.groups=JSON.parse(JSON.stringify(l)));const u=this.boundingSphere;return u!==null&&(e.data.boundingSphere={center:u.center.toArray(),radius:u.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const f in s){const m=s[f];this.setAttribute(f,m.clone(t))}const o=e.morphAttributes;for(const f in o){const m=[],g=o[f];for(let v=0,y=g.length;v<y;v++)m.push(g[v].clone(t));this.morphAttributes[f]=m}this.morphTargetsRelative=e.morphTargetsRelative;const l=e.groups;for(let f=0,m=l.length;f<m;f++){const g=l[f];this.addGroup(g.start,g.count,g.materialIndex)}const u=e.boundingBox;u!==null&&(this.boundingBox=u.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const dl=new At,xi=new Pu,ls=new Gs,fl=new z,us=new z,hs=new z,ds=new z,Ra=new z,fs=new z,pl=new z,ps=new z;class Ln extends Gt{constructor(e=new sn,t=new Lu){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,l=s.length;o<l;o++){const u=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=o}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,o=n.morphAttributes.position,l=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const u=this.morphTargetInfluences;if(o&&u){fs.set(0,0,0);for(let d=0,f=o.length;d<f;d++){const m=u[d],g=o[d];m!==0&&(Ra.fromBufferAttribute(g,e),l?fs.addScaledVector(Ra,m):fs.addScaledVector(Ra.sub(t),m))}t.add(fs)}return t}raycast(e,t){const n=this.geometry,s=this.material,o=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ls.copy(n.boundingSphere),ls.applyMatrix4(o),xi.copy(e.ray).recast(e.near),!(ls.containsPoint(xi.origin)===!1&&(xi.intersectSphere(ls,fl)===null||xi.origin.distanceToSquared(fl)>(e.far-e.near)**2))&&(dl.copy(o).invert(),xi.copy(e.ray).applyMatrix4(dl),!(n.boundingBox!==null&&xi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,xi)))}_computeIntersections(e,t,n){let s;const o=this.geometry,l=this.material,u=o.index,d=o.attributes.position,f=o.attributes.uv,m=o.attributes.uv1,g=o.attributes.normal,v=o.groups,y=o.drawRange;if(u!==null)if(Array.isArray(l))for(let T=0,C=v.length;T<C;T++){const S=v[T],_=l[S.materialIndex],N=Math.max(S.start,y.start),L=Math.min(u.count,Math.min(S.start+S.count,y.start+y.count));for(let I=N,G=L;I<G;I+=3){const R=u.getX(I),O=u.getX(I+1),$=u.getX(I+2);s=ms(this,_,e,n,f,m,g,R,O,$),s&&(s.faceIndex=Math.floor(I/3),s.face.materialIndex=S.materialIndex,t.push(s))}}else{const T=Math.max(0,y.start),C=Math.min(u.count,y.start+y.count);for(let S=T,_=C;S<_;S+=3){const N=u.getX(S),L=u.getX(S+1),I=u.getX(S+2);s=ms(this,l,e,n,f,m,g,N,L,I),s&&(s.faceIndex=Math.floor(S/3),t.push(s))}}else if(d!==void 0)if(Array.isArray(l))for(let T=0,C=v.length;T<C;T++){const S=v[T],_=l[S.materialIndex],N=Math.max(S.start,y.start),L=Math.min(d.count,Math.min(S.start+S.count,y.start+y.count));for(let I=N,G=L;I<G;I+=3){const R=I,O=I+1,$=I+2;s=ms(this,_,e,n,f,m,g,R,O,$),s&&(s.faceIndex=Math.floor(I/3),s.face.materialIndex=S.materialIndex,t.push(s))}}else{const T=Math.max(0,y.start),C=Math.min(d.count,y.start+y.count);for(let S=T,_=C;S<_;S+=3){const N=S,L=S+1,I=S+2;s=ms(this,l,e,n,f,m,g,N,L,I),s&&(s.faceIndex=Math.floor(S/3),t.push(s))}}}}function tv(i,e,t,n,s,o,l,u){let d;if(e.side===nn?d=n.intersectTriangle(l,o,s,!0,u):d=n.intersectTriangle(s,o,l,e.side===ai,u),d===null)return null;ps.copy(u),ps.applyMatrix4(i.matrixWorld);const f=t.ray.origin.distanceTo(ps);return f<t.near||f>t.far?null:{distance:f,point:ps.clone(),object:i}}function ms(i,e,t,n,s,o,l,u,d,f){i.getVertexPosition(u,us),i.getVertexPosition(d,hs),i.getVertexPosition(f,ds);const m=tv(i,e,t,n,us,hs,ds,pl);if(m){const g=new z;Mn.getBarycoord(pl,us,hs,ds,g),s&&(m.uv=Mn.getInterpolatedAttribute(s,u,d,f,g,new ze)),o&&(m.uv1=Mn.getInterpolatedAttribute(o,u,d,f,g,new ze)),l&&(m.normal=Mn.getInterpolatedAttribute(l,u,d,f,g,new z),m.normal.dot(n.direction)>0&&m.normal.multiplyScalar(-1));const v={a:u,b:d,c:f,normal:new z,materialIndex:0};Mn.getNormal(us,hs,ds,v.normal),m.face=v,m.barycoord=g}return m}class or extends sn{constructor(e=1,t=1,n=1,s=1,o=1,l=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:o,depthSegments:l};const u=this;s=Math.floor(s),o=Math.floor(o),l=Math.floor(l);const d=[],f=[],m=[],g=[];let v=0,y=0;T("z","y","x",-1,-1,n,t,e,l,o,0),T("z","y","x",1,-1,n,t,-e,l,o,1),T("x","z","y",1,1,e,n,t,s,l,2),T("x","z","y",1,-1,e,n,-t,s,l,3),T("x","y","z",1,-1,e,t,n,s,o,4),T("x","y","z",-1,-1,e,t,-n,s,o,5),this.setIndex(d),this.setAttribute("position",new Dt(f,3)),this.setAttribute("normal",new Dt(m,3)),this.setAttribute("uv",new Dt(g,2));function T(C,S,_,N,L,I,G,R,O,$,D){const E=I/O,k=G/$,te=I/2,K=G/2,ee=R/2,pe=O+1,ae=$+1;let Se=0,re=0;const Ae=new z;for(let Pe=0;Pe<ae;Pe++){const Ge=Pe*k-K;for(let Qe=0;Qe<pe;Qe++){const pt=Qe*E-te;Ae[C]=pt*N,Ae[S]=Ge*L,Ae[_]=ee,f.push(Ae.x,Ae.y,Ae.z),Ae[C]=0,Ae[S]=0,Ae[_]=R>0?1:-1,m.push(Ae.x,Ae.y,Ae.z),g.push(Qe/O),g.push(1-Pe/$),Se+=1}}for(let Pe=0;Pe<$;Pe++)for(let Ge=0;Ge<O;Ge++){const Qe=v+Ge+pe*Pe,pt=v+Ge+pe*(Pe+1),ne=v+(Ge+1)+pe*(Pe+1),_e=v+(Ge+1)+pe*Pe;d.push(Qe,pt,_e),d.push(pt,ne,_e),re+=6}u.addGroup(y,re,D),y+=re,v+=Se}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new or(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ir(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Qt(i){const e={};for(let t=0;t<i.length;t++){const n=ir(i[t]);for(const s in n)e[s]=n[s]}return e}function nv(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Nu(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:vt.workingColorSpace}const iv={clone:ir,merge:Qt};var rv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,sv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class oi extends ar{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=rv,this.fragmentShader=sv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ir(e.uniforms),this.uniformsGroups=nv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const l=this.uniforms[s].value;l&&l.isTexture?t.uniforms[s]={type:"t",value:l.toJSON(e).uuid}:l&&l.isColor?t.uniforms[s]={type:"c",value:l.getHex()}:l&&l.isVector2?t.uniforms[s]={type:"v2",value:l.toArray()}:l&&l.isVector3?t.uniforms[s]={type:"v3",value:l.toArray()}:l&&l.isVector4?t.uniforms[s]={type:"v4",value:l.toArray()}:l&&l.isMatrix3?t.uniforms[s]={type:"m3",value:l.toArray()}:l&&l.isMatrix4?t.uniforms[s]={type:"m4",value:l.toArray()}:t.uniforms[s]={value:l}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Ou extends Gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new At,this.projectionMatrix=new At,this.projectionMatrixInverse=new At,this.coordinateSystem=jn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ni=new z,ml=new ze,_l=new ze;class dn extends Ou{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Io*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(la*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Io*2*Math.atan(Math.tan(la*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ni.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ni.x,ni.y).multiplyScalar(-e/ni.z),ni.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ni.x,ni.y).multiplyScalar(-e/ni.z)}getViewSize(e,t){return this.getViewBounds(e,ml,_l),t.subVectors(_l,ml)}setViewOffset(e,t,n,s,o,l){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(la*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,o=-.5*s;const l=this.view;if(this.view!==null&&this.view.enabled){const d=l.fullWidth,f=l.fullHeight;o+=l.offsetX*s/d,t-=l.offsetY*n/f,s*=l.width/d,n*=l.height/f}const u=this.filmOffset;u!==0&&(o+=e*u/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Xi=-90,$i=1;class av extends Gt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new dn(Xi,$i,e,t);s.layers=this.layers,this.add(s);const o=new dn(Xi,$i,e,t);o.layers=this.layers,this.add(o);const l=new dn(Xi,$i,e,t);l.layers=this.layers,this.add(l);const u=new dn(Xi,$i,e,t);u.layers=this.layers,this.add(u);const d=new dn(Xi,$i,e,t);d.layers=this.layers,this.add(d);const f=new dn(Xi,$i,e,t);f.layers=this.layers,this.add(f)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,o,l,u,d]=t;for(const f of t)this.remove(f);if(e===jn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),l.up.set(0,0,1),l.lookAt(0,-1,0),u.up.set(0,1,0),u.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(e===Fs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),l.up.set(0,0,-1),l.lookAt(0,-1,0),u.up.set(0,-1,0),u.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const f of t)this.add(f),f.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,l,u,d,f,m]=this.children,g=e.getRenderTarget(),v=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const C=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,o),e.setRenderTarget(n,1,s),e.render(t,l),e.setRenderTarget(n,2,s),e.render(t,u),e.setRenderTarget(n,3,s),e.render(t,d),e.setRenderTarget(n,4,s),e.render(t,f),n.texture.generateMipmaps=C,e.setRenderTarget(n,5,s),e.render(t,m),e.setRenderTarget(g,v,y),e.xr.enabled=T,n.texture.needsPMREMUpdate=!0}}class ku extends rn{constructor(e,t,n,s,o,l,u,d,f,m){e=e!==void 0?e:[],t=t!==void 0?t:Qi,super(e,t,n,s,o,l,u,d,f,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ov extends Pi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new ku(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Dn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new or(5,5,5),o=new oi({name:"CubemapFromEquirect",uniforms:ir(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:nn,blending:ri});o.uniforms.tEquirect.value=t;const l=new Ln(s,o),u=t.minFilter;return t.minFilter===Ci&&(t.minFilter=Dn),new av(1,10,this).update(e,l),t.minFilter=u,l.geometry.dispose(),l.material.dispose(),this}clear(e,t,n,s){const o=e.getRenderTarget();for(let l=0;l<6;l++)e.setRenderTarget(this,l),e.clear(t,n,s);e.setRenderTarget(o)}}const Pa=new z,cv=new z,lv=new et;class Ei{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Pa.subVectors(n,t).cross(cv.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Pa),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/s;return o<0||o>1?null:t.copy(e.start).addScaledVector(n,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||lv.getNormalMatrix(e),s=this.coplanarPoint(Pa).applyMatrix4(e),o=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const yi=new Gs,_s=new z;class Go{constructor(e=new Ei,t=new Ei,n=new Ei,s=new Ei,o=new Ei,l=new Ei){this.planes=[e,t,n,s,o,l]}set(e,t,n,s,o,l){const u=this.planes;return u[0].copy(e),u[1].copy(t),u[2].copy(n),u[3].copy(s),u[4].copy(o),u[5].copy(l),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=jn){const n=this.planes,s=e.elements,o=s[0],l=s[1],u=s[2],d=s[3],f=s[4],m=s[5],g=s[6],v=s[7],y=s[8],T=s[9],C=s[10],S=s[11],_=s[12],N=s[13],L=s[14],I=s[15];if(n[0].setComponents(d-o,v-f,S-y,I-_).normalize(),n[1].setComponents(d+o,v+f,S+y,I+_).normalize(),n[2].setComponents(d+l,v+m,S+T,I+N).normalize(),n[3].setComponents(d-l,v-m,S-T,I-N).normalize(),n[4].setComponents(d-u,v-g,S-C,I-L).normalize(),t===jn)n[5].setComponents(d+u,v+g,S+C,I+L).normalize();else if(t===Fs)n[5].setComponents(u,g,C,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),yi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),yi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(yi)}intersectsSprite(e){return yi.center.set(0,0,0),yi.radius=.7071067811865476,yi.applyMatrix4(e.matrixWorld),this.intersectsSphere(yi)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(_s.x=s.normal.x>0?e.max.x:e.min.x,_s.y=s.normal.y>0?e.max.y:e.min.y,_s.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(_s)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Bu(){let i=null,e=!1,t=null,n=null;function s(o,l){t(o,l),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){i=o}}}function uv(i){const e=new WeakMap;function t(u,d){const f=u.array,m=u.usage,g=f.byteLength,v=i.createBuffer();i.bindBuffer(d,v),i.bufferData(d,f,m),u.onUploadCallback();let y;if(f instanceof Float32Array)y=i.FLOAT;else if(f instanceof Uint16Array)u.isFloat16BufferAttribute?y=i.HALF_FLOAT:y=i.UNSIGNED_SHORT;else if(f instanceof Int16Array)y=i.SHORT;else if(f instanceof Uint32Array)y=i.UNSIGNED_INT;else if(f instanceof Int32Array)y=i.INT;else if(f instanceof Int8Array)y=i.BYTE;else if(f instanceof Uint8Array)y=i.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)y=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:v,type:y,bytesPerElement:f.BYTES_PER_ELEMENT,version:u.version,size:g}}function n(u,d,f){const m=d.array,g=d.updateRanges;if(i.bindBuffer(f,u),g.length===0)i.bufferSubData(f,0,m);else{g.sort((y,T)=>y.start-T.start);let v=0;for(let y=1;y<g.length;y++){const T=g[v],C=g[y];C.start<=T.start+T.count+1?T.count=Math.max(T.count,C.start+C.count-T.start):(++v,g[v]=C)}g.length=v+1;for(let y=0,T=g.length;y<T;y++){const C=g[y];i.bufferSubData(f,C.start*m.BYTES_PER_ELEMENT,m,C.start,C.count)}d.clearUpdateRanges()}d.onUploadCallback()}function s(u){return u.isInterleavedBufferAttribute&&(u=u.data),e.get(u)}function o(u){u.isInterleavedBufferAttribute&&(u=u.data);const d=e.get(u);d&&(i.deleteBuffer(d.buffer),e.delete(u))}function l(u,d){if(u.isInterleavedBufferAttribute&&(u=u.data),u.isGLBufferAttribute){const m=e.get(u);(!m||m.version<u.version)&&e.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}const f=e.get(u);if(f===void 0)e.set(u,t(u,d));else if(f.version<u.version){if(f.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(f.buffer,u,d),f.version=u.version}}return{get:s,remove:o,update:l}}class Rr extends sn{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const o=e/2,l=t/2,u=Math.floor(n),d=Math.floor(s),f=u+1,m=d+1,g=e/u,v=t/d,y=[],T=[],C=[],S=[];for(let _=0;_<m;_++){const N=_*v-l;for(let L=0;L<f;L++){const I=L*g-o;T.push(I,-N,0),C.push(0,0,1),S.push(L/u),S.push(1-_/d)}}for(let _=0;_<d;_++)for(let N=0;N<u;N++){const L=N+f*_,I=N+f*(_+1),G=N+1+f*(_+1),R=N+1+f*_;y.push(L,I,R),y.push(I,G,R)}this.setIndex(y),this.setAttribute("position",new Dt(T,3)),this.setAttribute("normal",new Dt(C,3)),this.setAttribute("uv",new Dt(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rr(e.width,e.height,e.widthSegments,e.heightSegments)}}var hv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,dv=`#ifdef USE_ALPHAHASH
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
#endif`,fv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,pv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,_v=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,gv=`#ifdef USE_AOMAP
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
#endif`,vv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,xv=`#ifdef USE_BATCHING
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
#endif`,yv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Sv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Mv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ev=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,wv=`#ifdef USE_IRIDESCENCE
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
#endif`,bv=`#ifdef USE_BUMPMAP
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
#endif`,Tv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Av=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Cv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Rv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Pv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Iv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Dv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Lv=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Fv=`#define PI 3.141592653589793
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
} // validated`,Uv=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Nv=`vec3 transformedNormal = objectNormal;
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
#endif`,Ov=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,kv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Bv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,zv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Gv="gl_FragColor = linearToOutputTexel( gl_FragColor );",Hv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Vv=`#ifdef USE_ENVMAP
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
#endif`,Wv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Xv=`#ifdef USE_ENVMAP
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
#endif`,$v=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,jv=`#ifdef USE_ENVMAP
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
#endif`,Yv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,qv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Zv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Jv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Kv=`#ifdef USE_GRADIENTMAP
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
}`,Qv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,e0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,t0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,n0=`uniform bool receiveShadow;
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
#endif`,i0=`#ifdef USE_ENVMAP
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
#endif`,r0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,s0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,a0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,o0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,c0=`PhysicalMaterial material;
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
#endif`,l0=`struct PhysicalMaterial {
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
}`,u0=`
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
#endif`,h0=`#if defined( RE_IndirectDiffuse )
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
#endif`,d0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,f0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,p0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,m0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,g0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,v0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,x0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,y0=`#if defined( USE_POINTS_UV )
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
#endif`,S0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,M0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,E0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,w0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,b0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,T0=`#ifdef USE_MORPHTARGETS
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
#endif`,A0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,C0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,R0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,P0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,I0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,D0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,L0=`#ifdef USE_NORMALMAP
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
#endif`,F0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,U0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,N0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,O0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,k0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,B0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,z0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,G0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,H0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,V0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,W0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,X0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,$0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,j0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Y0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,q0=`float getShadowMask() {
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
}`,Z0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,J0=`#ifdef USE_SKINNING
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
#endif`,K0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Q0=`#ifdef USE_SKINNING
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
#endif`,ex=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,tx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,nx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ix=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,rx=`#ifdef USE_TRANSMISSION
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
#endif`,sx=`#ifdef USE_TRANSMISSION
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
#endif`,ax=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ox=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ux=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,hx=`uniform sampler2D t2D;
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
}`,dx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,px=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_x=`#include <common>
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
}`,gx=`#if DEPTH_PACKING == 3200
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
}`,vx=`#define DISTANCE
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
}`,xx=`#define DISTANCE
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
}`,yx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Sx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mx=`uniform float scale;
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
}`,Ex=`uniform vec3 diffuse;
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
}`,wx=`#include <common>
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
}`,bx=`uniform vec3 diffuse;
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
}`,Tx=`#define LAMBERT
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
}`,Ax=`#define LAMBERT
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
}`,Cx=`#define MATCAP
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
}`,Rx=`#define MATCAP
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
}`,Px=`#define NORMAL
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
}`,Ix=`#define NORMAL
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
}`,Dx=`#define PHONG
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
}`,Lx=`#define PHONG
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
}`,Fx=`#define STANDARD
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
}`,Ux=`#define STANDARD
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
}`,Nx=`#define TOON
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
}`,Ox=`#define TOON
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
}`,kx=`uniform float size;
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
}`,Bx=`uniform vec3 diffuse;
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
}`,zx=`#include <common>
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
}`,Gx=`uniform vec3 color;
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
}`,Hx=`uniform float rotation;
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
}`,Vx=`uniform vec3 diffuse;
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
}`,it={alphahash_fragment:hv,alphahash_pars_fragment:dv,alphamap_fragment:fv,alphamap_pars_fragment:pv,alphatest_fragment:mv,alphatest_pars_fragment:_v,aomap_fragment:gv,aomap_pars_fragment:vv,batching_pars_vertex:xv,batching_vertex:yv,begin_vertex:Sv,beginnormal_vertex:Mv,bsdfs:Ev,iridescence_fragment:wv,bumpmap_pars_fragment:bv,clipping_planes_fragment:Tv,clipping_planes_pars_fragment:Av,clipping_planes_pars_vertex:Cv,clipping_planes_vertex:Rv,color_fragment:Pv,color_pars_fragment:Iv,color_pars_vertex:Dv,color_vertex:Lv,common:Fv,cube_uv_reflection_fragment:Uv,defaultnormal_vertex:Nv,displacementmap_pars_vertex:Ov,displacementmap_vertex:kv,emissivemap_fragment:Bv,emissivemap_pars_fragment:zv,colorspace_fragment:Gv,colorspace_pars_fragment:Hv,envmap_fragment:Vv,envmap_common_pars_fragment:Wv,envmap_pars_fragment:Xv,envmap_pars_vertex:$v,envmap_physical_pars_fragment:i0,envmap_vertex:jv,fog_vertex:Yv,fog_pars_vertex:qv,fog_fragment:Zv,fog_pars_fragment:Jv,gradientmap_pars_fragment:Kv,lightmap_pars_fragment:Qv,lights_lambert_fragment:e0,lights_lambert_pars_fragment:t0,lights_pars_begin:n0,lights_toon_fragment:r0,lights_toon_pars_fragment:s0,lights_phong_fragment:a0,lights_phong_pars_fragment:o0,lights_physical_fragment:c0,lights_physical_pars_fragment:l0,lights_fragment_begin:u0,lights_fragment_maps:h0,lights_fragment_end:d0,logdepthbuf_fragment:f0,logdepthbuf_pars_fragment:p0,logdepthbuf_pars_vertex:m0,logdepthbuf_vertex:_0,map_fragment:g0,map_pars_fragment:v0,map_particle_fragment:x0,map_particle_pars_fragment:y0,metalnessmap_fragment:S0,metalnessmap_pars_fragment:M0,morphinstance_vertex:E0,morphcolor_vertex:w0,morphnormal_vertex:b0,morphtarget_pars_vertex:T0,morphtarget_vertex:A0,normal_fragment_begin:C0,normal_fragment_maps:R0,normal_pars_fragment:P0,normal_pars_vertex:I0,normal_vertex:D0,normalmap_pars_fragment:L0,clearcoat_normal_fragment_begin:F0,clearcoat_normal_fragment_maps:U0,clearcoat_pars_fragment:N0,iridescence_pars_fragment:O0,opaque_fragment:k0,packing:B0,premultiplied_alpha_fragment:z0,project_vertex:G0,dithering_fragment:H0,dithering_pars_fragment:V0,roughnessmap_fragment:W0,roughnessmap_pars_fragment:X0,shadowmap_pars_fragment:$0,shadowmap_pars_vertex:j0,shadowmap_vertex:Y0,shadowmask_pars_fragment:q0,skinbase_vertex:Z0,skinning_pars_vertex:J0,skinning_vertex:K0,skinnormal_vertex:Q0,specularmap_fragment:ex,specularmap_pars_fragment:tx,tonemapping_fragment:nx,tonemapping_pars_fragment:ix,transmission_fragment:rx,transmission_pars_fragment:sx,uv_pars_fragment:ax,uv_pars_vertex:ox,uv_vertex:cx,worldpos_vertex:lx,background_vert:ux,background_frag:hx,backgroundCube_vert:dx,backgroundCube_frag:fx,cube_vert:px,cube_frag:mx,depth_vert:_x,depth_frag:gx,distanceRGBA_vert:vx,distanceRGBA_frag:xx,equirect_vert:yx,equirect_frag:Sx,linedashed_vert:Mx,linedashed_frag:Ex,meshbasic_vert:wx,meshbasic_frag:bx,meshlambert_vert:Tx,meshlambert_frag:Ax,meshmatcap_vert:Cx,meshmatcap_frag:Rx,meshnormal_vert:Px,meshnormal_frag:Ix,meshphong_vert:Dx,meshphong_frag:Lx,meshphysical_vert:Fx,meshphysical_frag:Ux,meshtoon_vert:Nx,meshtoon_frag:Ox,points_vert:kx,points_frag:Bx,shadow_vert:zx,shadow_frag:Gx,sprite_vert:Hx,sprite_frag:Vx},we={common:{diffuse:{value:new at(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new et}},envmap:{envMap:{value:null},envMapRotation:{value:new et},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new et}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new et}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new et},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new et},normalScale:{value:new ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new et},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new et}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new et}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new et}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new at(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new at(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0},uvTransform:{value:new et}},sprite:{diffuse:{value:new at(16777215)},opacity:{value:1},center:{value:new ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}}},In={basic:{uniforms:Qt([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.fog]),vertexShader:it.meshbasic_vert,fragmentShader:it.meshbasic_frag},lambert:{uniforms:Qt([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new at(0)}}]),vertexShader:it.meshlambert_vert,fragmentShader:it.meshlambert_frag},phong:{uniforms:Qt([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new at(0)},specular:{value:new at(1118481)},shininess:{value:30}}]),vertexShader:it.meshphong_vert,fragmentShader:it.meshphong_frag},standard:{uniforms:Qt([we.common,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.roughnessmap,we.metalnessmap,we.fog,we.lights,{emissive:{value:new at(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag},toon:{uniforms:Qt([we.common,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.gradientmap,we.fog,we.lights,{emissive:{value:new at(0)}}]),vertexShader:it.meshtoon_vert,fragmentShader:it.meshtoon_frag},matcap:{uniforms:Qt([we.common,we.bumpmap,we.normalmap,we.displacementmap,we.fog,{matcap:{value:null}}]),vertexShader:it.meshmatcap_vert,fragmentShader:it.meshmatcap_frag},points:{uniforms:Qt([we.points,we.fog]),vertexShader:it.points_vert,fragmentShader:it.points_frag},dashed:{uniforms:Qt([we.common,we.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:it.linedashed_vert,fragmentShader:it.linedashed_frag},depth:{uniforms:Qt([we.common,we.displacementmap]),vertexShader:it.depth_vert,fragmentShader:it.depth_frag},normal:{uniforms:Qt([we.common,we.bumpmap,we.normalmap,we.displacementmap,{opacity:{value:1}}]),vertexShader:it.meshnormal_vert,fragmentShader:it.meshnormal_frag},sprite:{uniforms:Qt([we.sprite,we.fog]),vertexShader:it.sprite_vert,fragmentShader:it.sprite_frag},background:{uniforms:{uvTransform:{value:new et},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:it.background_vert,fragmentShader:it.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new et}},vertexShader:it.backgroundCube_vert,fragmentShader:it.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:it.cube_vert,fragmentShader:it.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:it.equirect_vert,fragmentShader:it.equirect_frag},distanceRGBA:{uniforms:Qt([we.common,we.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:it.distanceRGBA_vert,fragmentShader:it.distanceRGBA_frag},shadow:{uniforms:Qt([we.lights,we.fog,{color:{value:new at(0)},opacity:{value:1}}]),vertexShader:it.shadow_vert,fragmentShader:it.shadow_frag}};In.physical={uniforms:Qt([In.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new et},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new et},clearcoatNormalScale:{value:new ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new et},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new et},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new et},sheen:{value:0},sheenColor:{value:new at(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new et},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new et},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new et},transmissionSamplerSize:{value:new ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new et},attenuationDistance:{value:0},attenuationColor:{value:new at(0)},specularColor:{value:new at(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new et},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new et},anisotropyVector:{value:new ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new et}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag};const gs={r:0,b:0,g:0},Si=new Fn,Wx=new At;function Xx(i,e,t,n,s,o,l){const u=new at(0);let d=o===!0?0:1,f,m,g=null,v=0,y=null;function T(N){let L=N.isScene===!0?N.background:null;return L&&L.isTexture&&(L=(N.backgroundBlurriness>0?t:e).get(L)),L}function C(N){let L=!1;const I=T(N);I===null?_(u,d):I&&I.isColor&&(_(I,1),L=!0);const G=i.xr.getEnvironmentBlendMode();G==="additive"?n.buffers.color.setClear(0,0,0,1,l):G==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,l),(i.autoClear||L)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function S(N,L){const I=T(L);I&&(I.isCubeTexture||I.mapping===Bs)?(m===void 0&&(m=new Ln(new or(1,1,1),new oi({name:"BackgroundCubeMaterial",uniforms:ir(In.backgroundCube.uniforms),vertexShader:In.backgroundCube.vertexShader,fragmentShader:In.backgroundCube.fragmentShader,side:nn,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(G,R,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(m)),Si.copy(L.backgroundRotation),Si.x*=-1,Si.y*=-1,Si.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(Si.y*=-1,Si.z*=-1),m.material.uniforms.envMap.value=I,m.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,m.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(Wx.makeRotationFromEuler(Si)),m.material.toneMapped=vt.getTransfer(I.colorSpace)!==Mt,(g!==I||v!==I.version||y!==i.toneMapping)&&(m.material.needsUpdate=!0,g=I,v=I.version,y=i.toneMapping),m.layers.enableAll(),N.unshift(m,m.geometry,m.material,0,0,null)):I&&I.isTexture&&(f===void 0&&(f=new Ln(new Rr(2,2),new oi({name:"BackgroundMaterial",uniforms:ir(In.background.uniforms),vertexShader:In.background.vertexShader,fragmentShader:In.background.fragmentShader,side:ai,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),Object.defineProperty(f.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(f)),f.material.uniforms.t2D.value=I,f.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,f.material.toneMapped=vt.getTransfer(I.colorSpace)!==Mt,I.matrixAutoUpdate===!0&&I.updateMatrix(),f.material.uniforms.uvTransform.value.copy(I.matrix),(g!==I||v!==I.version||y!==i.toneMapping)&&(f.material.needsUpdate=!0,g=I,v=I.version,y=i.toneMapping),f.layers.enableAll(),N.unshift(f,f.geometry,f.material,0,0,null))}function _(N,L){N.getRGB(gs,Nu(i)),n.buffers.color.setClear(gs.r,gs.g,gs.b,L,l)}return{getClearColor:function(){return u},setClearColor:function(N,L=1){u.set(N),d=L,_(u,d)},getClearAlpha:function(){return d},setClearAlpha:function(N){d=N,_(u,d)},render:C,addToRenderList:S}}function $x(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=v(null);let o=s,l=!1;function u(E,k,te,K,ee){let pe=!1;const ae=g(K,te,k);o!==ae&&(o=ae,f(o.object)),pe=y(E,K,te,ee),pe&&T(E,K,te,ee),ee!==null&&e.update(ee,i.ELEMENT_ARRAY_BUFFER),(pe||l)&&(l=!1,I(E,k,te,K),ee!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(ee).buffer))}function d(){return i.createVertexArray()}function f(E){return i.bindVertexArray(E)}function m(E){return i.deleteVertexArray(E)}function g(E,k,te){const K=te.wireframe===!0;let ee=n[E.id];ee===void 0&&(ee={},n[E.id]=ee);let pe=ee[k.id];pe===void 0&&(pe={},ee[k.id]=pe);let ae=pe[K];return ae===void 0&&(ae=v(d()),pe[K]=ae),ae}function v(E){const k=[],te=[],K=[];for(let ee=0;ee<t;ee++)k[ee]=0,te[ee]=0,K[ee]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:te,attributeDivisors:K,object:E,attributes:{},index:null}}function y(E,k,te,K){const ee=o.attributes,pe=k.attributes;let ae=0;const Se=te.getAttributes();for(const re in Se)if(Se[re].location>=0){const Pe=ee[re];let Ge=pe[re];if(Ge===void 0&&(re==="instanceMatrix"&&E.instanceMatrix&&(Ge=E.instanceMatrix),re==="instanceColor"&&E.instanceColor&&(Ge=E.instanceColor)),Pe===void 0||Pe.attribute!==Ge||Ge&&Pe.data!==Ge.data)return!0;ae++}return o.attributesNum!==ae||o.index!==K}function T(E,k,te,K){const ee={},pe=k.attributes;let ae=0;const Se=te.getAttributes();for(const re in Se)if(Se[re].location>=0){let Pe=pe[re];Pe===void 0&&(re==="instanceMatrix"&&E.instanceMatrix&&(Pe=E.instanceMatrix),re==="instanceColor"&&E.instanceColor&&(Pe=E.instanceColor));const Ge={};Ge.attribute=Pe,Pe&&Pe.data&&(Ge.data=Pe.data),ee[re]=Ge,ae++}o.attributes=ee,o.attributesNum=ae,o.index=K}function C(){const E=o.newAttributes;for(let k=0,te=E.length;k<te;k++)E[k]=0}function S(E){_(E,0)}function _(E,k){const te=o.newAttributes,K=o.enabledAttributes,ee=o.attributeDivisors;te[E]=1,K[E]===0&&(i.enableVertexAttribArray(E),K[E]=1),ee[E]!==k&&(i.vertexAttribDivisor(E,k),ee[E]=k)}function N(){const E=o.newAttributes,k=o.enabledAttributes;for(let te=0,K=k.length;te<K;te++)k[te]!==E[te]&&(i.disableVertexAttribArray(te),k[te]=0)}function L(E,k,te,K,ee,pe,ae){ae===!0?i.vertexAttribIPointer(E,k,te,ee,pe):i.vertexAttribPointer(E,k,te,K,ee,pe)}function I(E,k,te,K){C();const ee=K.attributes,pe=te.getAttributes(),ae=k.defaultAttributeValues;for(const Se in pe){const re=pe[Se];if(re.location>=0){let Ae=ee[Se];if(Ae===void 0&&(Se==="instanceMatrix"&&E.instanceMatrix&&(Ae=E.instanceMatrix),Se==="instanceColor"&&E.instanceColor&&(Ae=E.instanceColor)),Ae!==void 0){const Pe=Ae.normalized,Ge=Ae.itemSize,Qe=e.get(Ae);if(Qe===void 0)continue;const pt=Qe.buffer,ne=Qe.type,_e=Qe.bytesPerElement,De=ne===i.INT||ne===i.UNSIGNED_INT||Ae.gpuType===Uo;if(Ae.isInterleavedBufferAttribute){const Ee=Ae.data,fe=Ee.stride,Me=Ae.offset;if(Ee.isInstancedInterleavedBuffer){for(let tt=0;tt<re.locationSize;tt++)_(re.location+tt,Ee.meshPerAttribute);E.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=Ee.meshPerAttribute*Ee.count)}else for(let tt=0;tt<re.locationSize;tt++)S(re.location+tt);i.bindBuffer(i.ARRAY_BUFFER,pt);for(let tt=0;tt<re.locationSize;tt++)L(re.location+tt,Ge/re.locationSize,ne,Pe,fe*_e,(Me+Ge/re.locationSize*tt)*_e,De)}else{if(Ae.isInstancedBufferAttribute){for(let Ee=0;Ee<re.locationSize;Ee++)_(re.location+Ee,Ae.meshPerAttribute);E.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=Ae.meshPerAttribute*Ae.count)}else for(let Ee=0;Ee<re.locationSize;Ee++)S(re.location+Ee);i.bindBuffer(i.ARRAY_BUFFER,pt);for(let Ee=0;Ee<re.locationSize;Ee++)L(re.location+Ee,Ge/re.locationSize,ne,Pe,Ge*_e,Ge/re.locationSize*Ee*_e,De)}}else if(ae!==void 0){const Pe=ae[Se];if(Pe!==void 0)switch(Pe.length){case 2:i.vertexAttrib2fv(re.location,Pe);break;case 3:i.vertexAttrib3fv(re.location,Pe);break;case 4:i.vertexAttrib4fv(re.location,Pe);break;default:i.vertexAttrib1fv(re.location,Pe)}}}}N()}function G(){$();for(const E in n){const k=n[E];for(const te in k){const K=k[te];for(const ee in K)m(K[ee].object),delete K[ee];delete k[te]}delete n[E]}}function R(E){if(n[E.id]===void 0)return;const k=n[E.id];for(const te in k){const K=k[te];for(const ee in K)m(K[ee].object),delete K[ee];delete k[te]}delete n[E.id]}function O(E){for(const k in n){const te=n[k];if(te[E.id]===void 0)continue;const K=te[E.id];for(const ee in K)m(K[ee].object),delete K[ee];delete te[E.id]}}function $(){D(),l=!0,o!==s&&(o=s,f(o.object))}function D(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:u,reset:$,resetDefaultState:D,dispose:G,releaseStatesOfGeometry:R,releaseStatesOfProgram:O,initAttributes:C,enableAttribute:S,disableUnusedAttributes:N}}function jx(i,e,t){let n;function s(f){n=f}function o(f,m){i.drawArrays(n,f,m),t.update(m,n,1)}function l(f,m,g){g!==0&&(i.drawArraysInstanced(n,f,m,g),t.update(m,n,g))}function u(f,m,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,f,0,m,0,g);let y=0;for(let T=0;T<g;T++)y+=m[T];t.update(y,n,1)}function d(f,m,g,v){if(g===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let T=0;T<f.length;T++)l(f[T],m[T],v[T]);else{y.multiDrawArraysInstancedWEBGL(n,f,0,m,0,v,0,g);let T=0;for(let C=0;C<g;C++)T+=m[C]*v[C];t.update(T,n,1)}}this.setMode=s,this.render=o,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function Yx(i,e,t,n){let s;function o(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function l(O){return!(O!==En&&n.convert(O)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function u(O){const $=O===br&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(O!==qn&&n.convert(O)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==$n&&!$)}function d(O){if(O==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let f=t.precision!==void 0?t.precision:"highp";const m=d(f);m!==f&&(console.warn("THREE.WebGLRenderer:",f,"not supported, using",m,"instead."),f=m);const g=t.logarithmicDepthBuffer===!0,v=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),y=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),T=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=i.getParameter(i.MAX_TEXTURE_SIZE),S=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),_=i.getParameter(i.MAX_VERTEX_ATTRIBS),N=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),L=i.getParameter(i.MAX_VARYING_VECTORS),I=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),G=T>0,R=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:d,textureFormatReadable:l,textureTypeReadable:u,precision:f,logarithmicDepthBuffer:g,reverseDepthBuffer:v,maxTextures:y,maxVertexTextures:T,maxTextureSize:C,maxCubemapSize:S,maxAttributes:_,maxVertexUniforms:N,maxVaryings:L,maxFragmentUniforms:I,vertexTextures:G,maxSamples:R}}function qx(i){const e=this;let t=null,n=0,s=!1,o=!1;const l=new Ei,u=new et,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(g,v){const y=g.length!==0||v||n!==0||s;return s=v,n=g.length,y},this.beginShadows=function(){o=!0,m(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(g,v){t=m(g,v,0)},this.setState=function(g,v,y){const T=g.clippingPlanes,C=g.clipIntersection,S=g.clipShadows,_=i.get(g);if(!s||T===null||T.length===0||o&&!S)o?m(null):f();else{const N=o?0:n,L=N*4;let I=_.clippingState||null;d.value=I,I=m(T,v,L,y);for(let G=0;G!==L;++G)I[G]=t[G];_.clippingState=I,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=N}};function f(){d.value!==t&&(d.value=t,d.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function m(g,v,y,T){const C=g!==null?g.length:0;let S=null;if(C!==0){if(S=d.value,T!==!0||S===null){const _=y+C*4,N=v.matrixWorldInverse;u.getNormalMatrix(N),(S===null||S.length<_)&&(S=new Float32Array(_));for(let L=0,I=y;L!==C;++L,I+=4)l.copy(g[L]).applyMatrix4(N,u),l.normal.toArray(S,I),S[I+3]=l.constant}d.value=S,d.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,S}}function Zx(i){let e=new WeakMap;function t(l,u){return u===eo?l.mapping=Qi:u===to&&(l.mapping=er),l}function n(l){if(l&&l.isTexture){const u=l.mapping;if(u===eo||u===to)if(e.has(l)){const d=e.get(l).texture;return t(d,l.mapping)}else{const d=l.image;if(d&&d.height>0){const f=new ov(d.height);return f.fromEquirectangularTexture(i,l),e.set(l,f),l.addEventListener("dispose",s),t(f.texture,l.mapping)}else return null}}return l}function s(l){const u=l.target;u.removeEventListener("dispose",s);const d=e.get(u);d!==void 0&&(e.delete(u),d.dispose())}function o(){e=new WeakMap}return{get:n,dispose:o}}class Ho extends Ou{constructor(e=-1,t=1,n=1,s=-1,o=.1,l=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=o,this.far=l,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,o,l){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let o=n-e,l=n+e,u=s+t,d=s-t;if(this.view!==null&&this.view.enabled){const f=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=f*this.view.offsetX,l=o+f*this.view.width,u-=m*this.view.offsetY,d=u-m*this.view.height}this.projectionMatrix.makeOrthographic(o,l,u,d,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Yi=4,gl=[.125,.215,.35,.446,.526,.582],Ti=20,Ia=new Ho,vl=new at;let Da=null,La=0,Fa=0,Ua=!1;const wi=(1+Math.sqrt(5))/2,ji=1/wi,xl=[new z(-wi,ji,0),new z(wi,ji,0),new z(-ji,0,wi),new z(ji,0,wi),new z(0,wi,-ji),new z(0,wi,ji),new z(-1,1,-1),new z(1,1,-1),new z(-1,1,1),new z(1,1,1)];class yl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){Da=this._renderer.getRenderTarget(),La=this._renderer.getActiveCubeFace(),Fa=this._renderer.getActiveMipmapLevel(),Ua=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,n,s,o),t>0&&this._blur(o,0,0,t),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=El(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ml(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Da,La,Fa),this._renderer.xr.enabled=Ua,e.scissorTest=!1,vs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Qi||e.mapping===er?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Da=this._renderer.getRenderTarget(),La=this._renderer.getActiveCubeFace(),Fa=this._renderer.getActiveMipmapLevel(),Ua=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Dn,minFilter:Dn,generateMipmaps:!1,type:br,format:En,colorSpace:rr,depthBuffer:!1},s=Sl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Sl(e,t,n);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Jx(o)),this._blurMaterial=Kx(o,e,t)}return s}_compileMaterial(e){const t=new Ln(this._lodPlanes[0],e);this._renderer.compile(t,Ia)}_sceneToCubeUV(e,t,n,s){const u=new dn(90,1,t,n),d=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],m=this._renderer,g=m.autoClear,v=m.toneMapping;m.getClearColor(vl),m.toneMapping=si,m.autoClear=!1;const y=new Lu({name:"PMREM.Background",side:nn,depthWrite:!1,depthTest:!1}),T=new Ln(new or,y);let C=!1;const S=e.background;S?S.isColor&&(y.color.copy(S),e.background=null,C=!0):(y.color.copy(vl),C=!0);for(let _=0;_<6;_++){const N=_%3;N===0?(u.up.set(0,d[_],0),u.lookAt(f[_],0,0)):N===1?(u.up.set(0,0,d[_]),u.lookAt(0,f[_],0)):(u.up.set(0,d[_],0),u.lookAt(0,0,f[_]));const L=this._cubeSize;vs(s,N*L,_>2?L:0,L,L),m.setRenderTarget(s),C&&m.render(T,u),m.render(e,u)}T.geometry.dispose(),T.material.dispose(),m.toneMapping=v,m.autoClear=g,e.background=S}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Qi||e.mapping===er;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=El()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ml());const o=s?this._cubemapMaterial:this._equirectMaterial,l=new Ln(this._lodPlanes[0],o),u=o.uniforms;u.envMap.value=e;const d=this._cubeSize;vs(t,0,0,3*d,2*d),n.setRenderTarget(t),n.render(l,Ia)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let o=1;o<s;o++){const l=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),u=xl[(s-o-1)%xl.length];this._blur(e,o-1,o,l,u)}t.autoClear=n}_blur(e,t,n,s,o){const l=this._pingPongRenderTarget;this._halfBlur(e,l,t,n,s,"latitudinal",o),this._halfBlur(l,e,n,n,s,"longitudinal",o)}_halfBlur(e,t,n,s,o,l,u){const d=this._renderer,f=this._blurMaterial;l!=="latitudinal"&&l!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const m=3,g=new Ln(this._lodPlanes[s],f),v=f.uniforms,y=this._sizeLods[n]-1,T=isFinite(o)?Math.PI/(2*y):2*Math.PI/(2*Ti-1),C=o/T,S=isFinite(o)?1+Math.floor(m*C):Ti;S>Ti&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Ti}`);const _=[];let N=0;for(let O=0;O<Ti;++O){const $=O/C,D=Math.exp(-$*$/2);_.push(D),O===0?N+=D:O<S&&(N+=2*D)}for(let O=0;O<_.length;O++)_[O]=_[O]/N;v.envMap.value=e.texture,v.samples.value=S,v.weights.value=_,v.latitudinal.value=l==="latitudinal",u&&(v.poleAxis.value=u);const{_lodMax:L}=this;v.dTheta.value=T,v.mipInt.value=L-n;const I=this._sizeLods[s],G=3*I*(s>L-Yi?s-L+Yi:0),R=4*(this._cubeSize-I);vs(t,G,R,3*I,2*I),d.setRenderTarget(t),d.render(g,Ia)}}function Jx(i){const e=[],t=[],n=[];let s=i;const o=i-Yi+1+gl.length;for(let l=0;l<o;l++){const u=Math.pow(2,s);t.push(u);let d=1/u;l>i-Yi?d=gl[l-i+Yi-1]:l===0&&(d=0),n.push(d);const f=1/(u-2),m=-f,g=1+f,v=[m,m,g,m,g,g,m,m,g,g,m,g],y=6,T=6,C=3,S=2,_=1,N=new Float32Array(C*T*y),L=new Float32Array(S*T*y),I=new Float32Array(_*T*y);for(let R=0;R<y;R++){const O=R%3*2/3-1,$=R>2?0:-1,D=[O,$,0,O+2/3,$,0,O+2/3,$+1,0,O,$,0,O+2/3,$+1,0,O,$+1,0];N.set(D,C*T*R),L.set(v,S*T*R);const E=[R,R,R,R,R,R];I.set(E,_*T*R)}const G=new sn;G.setAttribute("position",new fn(N,C)),G.setAttribute("uv",new fn(L,S)),G.setAttribute("faceIndex",new fn(I,_)),e.push(G),s>Yi&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Sl(i,e,t){const n=new Pi(i,e,t);return n.texture.mapping=Bs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function vs(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Kx(i,e,t){const n=new Float32Array(Ti),s=new z(0,1,0);return new oi({name:"SphericalGaussianBlur",defines:{n:Ti,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Vo(),fragmentShader:`

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
		`,blending:ri,depthTest:!1,depthWrite:!1})}function Ml(){return new oi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Vo(),fragmentShader:`

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
		`,blending:ri,depthTest:!1,depthWrite:!1})}function El(){return new oi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Vo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ri,depthTest:!1,depthWrite:!1})}function Vo(){return`

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
	`}function Qx(i){let e=new WeakMap,t=null;function n(u){if(u&&u.isTexture){const d=u.mapping,f=d===eo||d===to,m=d===Qi||d===er;if(f||m){let g=e.get(u);const v=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==v)return t===null&&(t=new yl(i)),g=f?t.fromEquirectangular(u,g):t.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),g.texture;if(g!==void 0)return g.texture;{const y=u.image;return f&&y&&y.height>0||m&&y&&s(y)?(t===null&&(t=new yl(i)),g=f?t.fromEquirectangular(u):t.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),u.addEventListener("dispose",o),g.texture):null}}}return u}function s(u){let d=0;const f=6;for(let m=0;m<f;m++)u[m]!==void 0&&d++;return d===f}function o(u){const d=u.target;d.removeEventListener("dispose",o);const f=e.get(d);f!==void 0&&(e.delete(d),f.dispose())}function l(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:l}}function ey(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&xr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function ty(i,e,t,n){const s={},o=new WeakMap;function l(g){const v=g.target;v.index!==null&&e.remove(v.index);for(const T in v.attributes)e.remove(v.attributes[T]);for(const T in v.morphAttributes){const C=v.morphAttributes[T];for(let S=0,_=C.length;S<_;S++)e.remove(C[S])}v.removeEventListener("dispose",l),delete s[v.id];const y=o.get(v);y&&(e.remove(y),o.delete(v)),n.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,t.memory.geometries--}function u(g,v){return s[v.id]===!0||(v.addEventListener("dispose",l),s[v.id]=!0,t.memory.geometries++),v}function d(g){const v=g.attributes;for(const T in v)e.update(v[T],i.ARRAY_BUFFER);const y=g.morphAttributes;for(const T in y){const C=y[T];for(let S=0,_=C.length;S<_;S++)e.update(C[S],i.ARRAY_BUFFER)}}function f(g){const v=[],y=g.index,T=g.attributes.position;let C=0;if(y!==null){const N=y.array;C=y.version;for(let L=0,I=N.length;L<I;L+=3){const G=N[L+0],R=N[L+1],O=N[L+2];v.push(G,R,R,O,O,G)}}else if(T!==void 0){const N=T.array;C=T.version;for(let L=0,I=N.length/3-1;L<I;L+=3){const G=L+0,R=L+1,O=L+2;v.push(G,R,R,O,O,G)}}else return;const S=new(Au(v)?Uu:Fu)(v,1);S.version=C;const _=o.get(g);_&&e.remove(_),o.set(g,S)}function m(g){const v=o.get(g);if(v){const y=g.index;y!==null&&v.version<y.version&&f(g)}else f(g);return o.get(g)}return{get:u,update:d,getWireframeAttribute:m}}function ny(i,e,t){let n;function s(v){n=v}let o,l;function u(v){o=v.type,l=v.bytesPerElement}function d(v,y){i.drawElements(n,y,o,v*l),t.update(y,n,1)}function f(v,y,T){T!==0&&(i.drawElementsInstanced(n,y,o,v*l,T),t.update(y,n,T))}function m(v,y,T){if(T===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,y,0,o,v,0,T);let S=0;for(let _=0;_<T;_++)S+=y[_];t.update(S,n,1)}function g(v,y,T,C){if(T===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let _=0;_<v.length;_++)f(v[_]/l,y[_],C[_]);else{S.multiDrawElementsInstancedWEBGL(n,y,0,o,v,0,C,0,T);let _=0;for(let N=0;N<T;N++)_+=y[N]*C[N];t.update(_,n,1)}}this.setMode=s,this.setIndex=u,this.render=d,this.renderInstances=f,this.renderMultiDraw=m,this.renderMultiDrawInstances=g}function iy(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,l,u){switch(t.calls++,l){case i.TRIANGLES:t.triangles+=u*(o/3);break;case i.LINES:t.lines+=u*(o/2);break;case i.LINE_STRIP:t.lines+=u*(o-1);break;case i.LINE_LOOP:t.lines+=u*o;break;case i.POINTS:t.points+=u*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",l);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function ry(i,e,t){const n=new WeakMap,s=new Pt;function o(l,u,d){const f=l.morphTargetInfluences,m=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=m!==void 0?m.length:0;let v=n.get(u);if(v===void 0||v.count!==g){let D=function(){O.dispose(),n.delete(u),u.removeEventListener("dispose",D)};v!==void 0&&v.texture.dispose();const y=u.morphAttributes.position!==void 0,T=u.morphAttributes.normal!==void 0,C=u.morphAttributes.color!==void 0,S=u.morphAttributes.position||[],_=u.morphAttributes.normal||[],N=u.morphAttributes.color||[];let L=0;y===!0&&(L=1),T===!0&&(L=2),C===!0&&(L=3);let I=u.attributes.position.count*L,G=1;I>e.maxTextureSize&&(G=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const R=new Float32Array(I*G*4*g),O=new Ru(R,I,G,g);O.type=$n,O.needsUpdate=!0;const $=L*4;for(let E=0;E<g;E++){const k=S[E],te=_[E],K=N[E],ee=I*G*4*E;for(let pe=0;pe<k.count;pe++){const ae=pe*$;y===!0&&(s.fromBufferAttribute(k,pe),R[ee+ae+0]=s.x,R[ee+ae+1]=s.y,R[ee+ae+2]=s.z,R[ee+ae+3]=0),T===!0&&(s.fromBufferAttribute(te,pe),R[ee+ae+4]=s.x,R[ee+ae+5]=s.y,R[ee+ae+6]=s.z,R[ee+ae+7]=0),C===!0&&(s.fromBufferAttribute(K,pe),R[ee+ae+8]=s.x,R[ee+ae+9]=s.y,R[ee+ae+10]=s.z,R[ee+ae+11]=K.itemSize===4?s.w:1)}}v={count:g,texture:O,size:new ze(I,G)},n.set(u,v),u.addEventListener("dispose",D)}if(l.isInstancedMesh===!0&&l.morphTexture!==null)d.getUniforms().setValue(i,"morphTexture",l.morphTexture,t);else{let y=0;for(let C=0;C<f.length;C++)y+=f[C];const T=u.morphTargetsRelative?1:1-y;d.getUniforms().setValue(i,"morphTargetBaseInfluence",T),d.getUniforms().setValue(i,"morphTargetInfluences",f)}d.getUniforms().setValue(i,"morphTargetsTexture",v.texture,t),d.getUniforms().setValue(i,"morphTargetsTextureSize",v.size)}return{update:o}}function sy(i,e,t,n){let s=new WeakMap;function o(d){const f=n.render.frame,m=d.geometry,g=e.get(d,m);if(s.get(g)!==f&&(e.update(g),s.set(g,f)),d.isInstancedMesh&&(d.hasEventListener("dispose",u)===!1&&d.addEventListener("dispose",u),s.get(d)!==f&&(t.update(d.instanceMatrix,i.ARRAY_BUFFER),d.instanceColor!==null&&t.update(d.instanceColor,i.ARRAY_BUFFER),s.set(d,f))),d.isSkinnedMesh){const v=d.skeleton;s.get(v)!==f&&(v.update(),s.set(v,f))}return g}function l(){s=new WeakMap}function u(d){const f=d.target;f.removeEventListener("dispose",u),t.remove(f.instanceMatrix),f.instanceColor!==null&&t.remove(f.instanceColor)}return{update:o,dispose:l}}class zu extends rn{constructor(e,t,n,s,o,l,u,d,f,m=Zi){if(m!==Zi&&m!==nr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&m===Zi&&(n=Ri),n===void 0&&m===nr&&(n=tr),super(null,s,o,l,u,d,m,n,f),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=u!==void 0?u:wn,this.minFilter=d!==void 0?d:wn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Gu=new rn,wl=new zu(1,1),Hu=new Ru,Vu=new Xg,Wu=new ku,bl=[],Tl=[],Al=new Float32Array(16),Cl=new Float32Array(9),Rl=new Float32Array(4);function cr(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let o=bl[s];if(o===void 0&&(o=new Float32Array(s),bl[s]=o),e!==0){n.toArray(o,0);for(let l=1,u=0;l!==e;++l)u+=t,i[l].toArray(o,u)}return o}function Ot(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function kt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Hs(i,e){let t=Tl[e];t===void 0&&(t=new Int32Array(e),Tl[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function ay(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function oy(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;i.uniform2fv(this.addr,e),kt(t,e)}}function cy(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ot(t,e))return;i.uniform3fv(this.addr,e),kt(t,e)}}function ly(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;i.uniform4fv(this.addr,e),kt(t,e)}}function uy(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ot(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),kt(t,e)}else{if(Ot(t,n))return;Rl.set(n),i.uniformMatrix2fv(this.addr,!1,Rl),kt(t,n)}}function hy(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ot(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),kt(t,e)}else{if(Ot(t,n))return;Cl.set(n),i.uniformMatrix3fv(this.addr,!1,Cl),kt(t,n)}}function dy(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Ot(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),kt(t,e)}else{if(Ot(t,n))return;Al.set(n),i.uniformMatrix4fv(this.addr,!1,Al),kt(t,n)}}function fy(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function py(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;i.uniform2iv(this.addr,e),kt(t,e)}}function my(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ot(t,e))return;i.uniform3iv(this.addr,e),kt(t,e)}}function _y(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;i.uniform4iv(this.addr,e),kt(t,e)}}function gy(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function vy(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ot(t,e))return;i.uniform2uiv(this.addr,e),kt(t,e)}}function xy(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ot(t,e))return;i.uniform3uiv(this.addr,e),kt(t,e)}}function yy(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ot(t,e))return;i.uniform4uiv(this.addr,e),kt(t,e)}}function Sy(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let o;this.type===i.SAMPLER_2D_SHADOW?(wl.compareFunction=Tu,o=wl):o=Gu,t.setTexture2D(e||o,s)}function My(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Vu,s)}function Ey(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Wu,s)}function wy(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Hu,s)}function by(i){switch(i){case 5126:return ay;case 35664:return oy;case 35665:return cy;case 35666:return ly;case 35674:return uy;case 35675:return hy;case 35676:return dy;case 5124:case 35670:return fy;case 35667:case 35671:return py;case 35668:case 35672:return my;case 35669:case 35673:return _y;case 5125:return gy;case 36294:return vy;case 36295:return xy;case 36296:return yy;case 35678:case 36198:case 36298:case 36306:case 35682:return Sy;case 35679:case 36299:case 36307:return My;case 35680:case 36300:case 36308:case 36293:return Ey;case 36289:case 36303:case 36311:case 36292:return wy}}function Ty(i,e){i.uniform1fv(this.addr,e)}function Ay(i,e){const t=cr(e,this.size,2);i.uniform2fv(this.addr,t)}function Cy(i,e){const t=cr(e,this.size,3);i.uniform3fv(this.addr,t)}function Ry(i,e){const t=cr(e,this.size,4);i.uniform4fv(this.addr,t)}function Py(i,e){const t=cr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Iy(i,e){const t=cr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Dy(i,e){const t=cr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Ly(i,e){i.uniform1iv(this.addr,e)}function Fy(i,e){i.uniform2iv(this.addr,e)}function Uy(i,e){i.uniform3iv(this.addr,e)}function Ny(i,e){i.uniform4iv(this.addr,e)}function Oy(i,e){i.uniform1uiv(this.addr,e)}function ky(i,e){i.uniform2uiv(this.addr,e)}function By(i,e){i.uniform3uiv(this.addr,e)}function zy(i,e){i.uniform4uiv(this.addr,e)}function Gy(i,e,t){const n=this.cache,s=e.length,o=Hs(t,s);Ot(n,o)||(i.uniform1iv(this.addr,o),kt(n,o));for(let l=0;l!==s;++l)t.setTexture2D(e[l]||Gu,o[l])}function Hy(i,e,t){const n=this.cache,s=e.length,o=Hs(t,s);Ot(n,o)||(i.uniform1iv(this.addr,o),kt(n,o));for(let l=0;l!==s;++l)t.setTexture3D(e[l]||Vu,o[l])}function Vy(i,e,t){const n=this.cache,s=e.length,o=Hs(t,s);Ot(n,o)||(i.uniform1iv(this.addr,o),kt(n,o));for(let l=0;l!==s;++l)t.setTextureCube(e[l]||Wu,o[l])}function Wy(i,e,t){const n=this.cache,s=e.length,o=Hs(t,s);Ot(n,o)||(i.uniform1iv(this.addr,o),kt(n,o));for(let l=0;l!==s;++l)t.setTexture2DArray(e[l]||Hu,o[l])}function Xy(i){switch(i){case 5126:return Ty;case 35664:return Ay;case 35665:return Cy;case 35666:return Ry;case 35674:return Py;case 35675:return Iy;case 35676:return Dy;case 5124:case 35670:return Ly;case 35667:case 35671:return Fy;case 35668:case 35672:return Uy;case 35669:case 35673:return Ny;case 5125:return Oy;case 36294:return ky;case 36295:return By;case 36296:return zy;case 35678:case 36198:case 36298:case 36306:case 35682:return Gy;case 35679:case 36299:case 36307:return Hy;case 35680:case 36300:case 36308:case 36293:return Vy;case 36289:case 36303:case 36311:case 36292:return Wy}}class $y{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=by(t.type)}}class jy{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Xy(t.type)}}class Yy{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let o=0,l=s.length;o!==l;++o){const u=s[o];u.setValue(e,t[u.id],n)}}}const Na=/(\w+)(\])?(\[|\.)?/g;function Pl(i,e){i.seq.push(e),i.map[e.id]=e}function qy(i,e,t){const n=i.name,s=n.length;for(Na.lastIndex=0;;){const o=Na.exec(n),l=Na.lastIndex;let u=o[1];const d=o[2]==="]",f=o[3];if(d&&(u=u|0),f===void 0||f==="["&&l+2===s){Pl(t,f===void 0?new $y(u,i,e):new jy(u,i,e));break}else{let g=t.map[u];g===void 0&&(g=new Yy(u),Pl(t,g)),t=g}}}class Ls{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const o=e.getActiveUniform(t,s),l=e.getUniformLocation(t,o.name);qy(o,l,this)}}setValue(e,t,n,s){const o=this.map[t];o!==void 0&&o.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let o=0,l=t.length;o!==l;++o){const u=t[o],d=n[u.id];d.needsUpdate!==!1&&u.setValue(e,d.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,o=e.length;s!==o;++s){const l=e[s];l.id in t&&n.push(l)}return n}}function Il(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Zy=37297;let Jy=0;function Ky(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let l=s;l<o;l++){const u=l+1;n.push(`${u===e?">":" "} ${u}: ${t[l]}`)}return n.join(`
`)}const Dl=new et;function Qy(i){vt._getMatrix(Dl,vt.workingColorSpace,i);const e=`mat3( ${Dl.elements.map(t=>t.toFixed(4))} )`;switch(vt.getTransfer(i)){case zs:return[e,"LinearTransferOETF"];case Mt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Ll(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const l=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+Ky(i.getShaderSource(e),l)}else return s}function eS(i,e){const t=Qy(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function tS(i,e){let t;switch(e){case vg:t="Linear";break;case xg:t="Reinhard";break;case yg:t="Cineon";break;case Sg:t="ACESFilmic";break;case Eg:t="AgX";break;case wg:t="Neutral";break;case Mg:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const xs=new z;function nS(){vt.getLuminanceCoefficients(xs);const i=xs.x.toFixed(4),e=xs.y.toFixed(4),t=xs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function iS(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(yr).join(`
`)}function rS(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function sS(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const o=i.getActiveAttrib(e,s),l=o.name;let u=1;o.type===i.FLOAT_MAT2&&(u=2),o.type===i.FLOAT_MAT3&&(u=3),o.type===i.FLOAT_MAT4&&(u=4),t[l]={type:o.type,location:i.getAttribLocation(e,l),locationSize:u}}return t}function yr(i){return i!==""}function Fl(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ul(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const aS=/^[ \t]*#include +<([\w\d./]+)>/gm;function Do(i){return i.replace(aS,cS)}const oS=new Map;function cS(i,e){let t=it[e];if(t===void 0){const n=oS.get(e);if(n!==void 0)t=it[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Do(t)}const lS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Nl(i){return i.replace(lS,uS)}function uS(i,e,t,n){let s="";for(let o=parseInt(e);o<parseInt(t);o++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return s}function Ol(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function hS(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===du?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===J_?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Vn&&(e="SHADOWMAP_TYPE_VSM"),e}function dS(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Qi:case er:e="ENVMAP_TYPE_CUBE";break;case Bs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function fS(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case er:e="ENVMAP_MODE_REFRACTION";break}return e}function pS(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case fu:e="ENVMAP_BLENDING_MULTIPLY";break;case _g:e="ENVMAP_BLENDING_MIX";break;case gg:e="ENVMAP_BLENDING_ADD";break}return e}function mS(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function _S(i,e,t,n){const s=i.getContext(),o=t.defines;let l=t.vertexShader,u=t.fragmentShader;const d=hS(t),f=dS(t),m=fS(t),g=pS(t),v=mS(t),y=iS(t),T=rS(o),C=s.createProgram();let S,_,N=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T].filter(yr).join(`
`),S.length>0&&(S+=`
`),_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T].filter(yr).join(`
`),_.length>0&&(_+=`
`)):(S=[Ol(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(yr).join(`
`),_=[Ol(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.envMap?"#define "+m:"",t.envMap?"#define "+g:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==si?"#define TONE_MAPPING":"",t.toneMapping!==si?it.tonemapping_pars_fragment:"",t.toneMapping!==si?tS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",it.colorspace_pars_fragment,eS("linearToOutputTexel",t.outputColorSpace),nS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(yr).join(`
`)),l=Do(l),l=Fl(l,t),l=Ul(l,t),u=Do(u),u=Fl(u,t),u=Ul(u,t),l=Nl(l),u=Nl(u),t.isRawShaderMaterial!==!0&&(N=`#version 300 es
`,S=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,_=["#define varying in",t.glslVersion===Zc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Zc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const L=N+S+l,I=N+_+u,G=Il(s,s.VERTEX_SHADER,L),R=Il(s,s.FRAGMENT_SHADER,I);s.attachShader(C,G),s.attachShader(C,R),t.index0AttributeName!==void 0?s.bindAttribLocation(C,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(C,0,"position"),s.linkProgram(C);function O(k){if(i.debug.checkShaderErrors){const te=s.getProgramInfoLog(C).trim(),K=s.getShaderInfoLog(G).trim(),ee=s.getShaderInfoLog(R).trim();let pe=!0,ae=!0;if(s.getProgramParameter(C,s.LINK_STATUS)===!1)if(pe=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,C,G,R);else{const Se=Ll(s,G,"vertex"),re=Ll(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(C,s.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+te+`
`+Se+`
`+re)}else te!==""?console.warn("THREE.WebGLProgram: Program Info Log:",te):(K===""||ee==="")&&(ae=!1);ae&&(k.diagnostics={runnable:pe,programLog:te,vertexShader:{log:K,prefix:S},fragmentShader:{log:ee,prefix:_}})}s.deleteShader(G),s.deleteShader(R),$=new Ls(s,C),D=sS(s,C)}let $;this.getUniforms=function(){return $===void 0&&O(this),$};let D;this.getAttributes=function(){return D===void 0&&O(this),D};let E=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=s.getProgramParameter(C,Zy)),E},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(C),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Jy++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=G,this.fragmentShader=R,this}let gS=0;class vS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),o=this._getShaderStage(n),l=this._getShaderCacheForMaterial(e);return l.has(s)===!1&&(l.add(s),s.usedTimes++),l.has(o)===!1&&(l.add(o),o.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new xS(e),t.set(e,n)),n}}class xS{constructor(e){this.id=gS++,this.code=e,this.usedTimes=0}}function yS(i,e,t,n,s,o,l){const u=new Iu,d=new vS,f=new Set,m=[],g=s.logarithmicDepthBuffer,v=s.vertexTextures;let y=s.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function C(D){return f.add(D),D===0?"uv":`uv${D}`}function S(D,E,k,te,K){const ee=te.fog,pe=K.geometry,ae=D.isMeshStandardMaterial?te.environment:null,Se=(D.isMeshStandardMaterial?t:e).get(D.envMap||ae),re=Se&&Se.mapping===Bs?Se.image.height:null,Ae=T[D.type];D.precision!==null&&(y=s.getMaxPrecision(D.precision),y!==D.precision&&console.warn("THREE.WebGLProgram.getParameters:",D.precision,"not supported, using",y,"instead."));const Pe=pe.morphAttributes.position||pe.morphAttributes.normal||pe.morphAttributes.color,Ge=Pe!==void 0?Pe.length:0;let Qe=0;pe.morphAttributes.position!==void 0&&(Qe=1),pe.morphAttributes.normal!==void 0&&(Qe=2),pe.morphAttributes.color!==void 0&&(Qe=3);let pt,ne,_e,De;if(Ae){const rt=In[Ae];pt=rt.vertexShader,ne=rt.fragmentShader}else pt=D.vertexShader,ne=D.fragmentShader,d.update(D),_e=d.getVertexShaderID(D),De=d.getFragmentShaderID(D);const Ee=i.getRenderTarget(),fe=i.state.buffers.depth.getReversed(),Me=K.isInstancedMesh===!0,tt=K.isBatchedMesh===!0,Et=!!D.map,Ze=!!D.matcap,Ct=!!Se,H=!!D.aoMap,qt=!!D.lightMap,ot=!!D.bumpMap,ct=!!D.normalMap,We=!!D.displacementMap,mt=!!D.emissiveMap,He=!!D.metalnessMap,F=!!D.roughnessMap,A=D.anisotropy>0,J=D.clearcoat>0,de=D.dispersion>0,le=D.iridescence>0,se=D.sheen>0,Oe=D.transmission>0,Ce=A&&!!D.anisotropyMap,Le=J&&!!D.clearcoatMap,ut=J&&!!D.clearcoatNormalMap,ye=J&&!!D.clearcoatRoughnessMap,Fe=le&&!!D.iridescenceMap,$e=le&&!!D.iridescenceThicknessMap,qe=se&&!!D.sheenColorMap,Ue=se&&!!D.sheenRoughnessMap,st=!!D.specularMap,Je=!!D.specularColorMap,yt=!!D.specularIntensityMap,B=Oe&&!!D.transmissionMap,be=Oe&&!!D.thicknessMap,ie=!!D.gradientMap,he=!!D.alphaMap,q=D.alphaTest>0,Y=!!D.alphaHash,je=!!D.extensions;let Tt=si;D.toneMapped&&(Ee===null||Ee.isXRRenderTarget===!0)&&(Tt=i.toneMapping);const Rt={shaderID:Ae,shaderType:D.type,shaderName:D.name,vertexShader:pt,fragmentShader:ne,defines:D.defines,customVertexShaderID:_e,customFragmentShaderID:De,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:y,batching:tt,batchingColor:tt&&K._colorsTexture!==null,instancing:Me,instancingColor:Me&&K.instanceColor!==null,instancingMorph:Me&&K.morphTexture!==null,supportsVertexTextures:v,outputColorSpace:Ee===null?i.outputColorSpace:Ee.isXRRenderTarget===!0?Ee.texture.colorSpace:rr,alphaToCoverage:!!D.alphaToCoverage,map:Et,matcap:Ze,envMap:Ct,envMapMode:Ct&&Se.mapping,envMapCubeUVHeight:re,aoMap:H,lightMap:qt,bumpMap:ot,normalMap:ct,displacementMap:v&&We,emissiveMap:mt,normalMapObjectSpace:ct&&D.normalMapType===Cg,normalMapTangentSpace:ct&&D.normalMapType===bu,metalnessMap:He,roughnessMap:F,anisotropy:A,anisotropyMap:Ce,clearcoat:J,clearcoatMap:Le,clearcoatNormalMap:ut,clearcoatRoughnessMap:ye,dispersion:de,iridescence:le,iridescenceMap:Fe,iridescenceThicknessMap:$e,sheen:se,sheenColorMap:qe,sheenRoughnessMap:Ue,specularMap:st,specularColorMap:Je,specularIntensityMap:yt,transmission:Oe,transmissionMap:B,thicknessMap:be,gradientMap:ie,opaque:D.transparent===!1&&D.blending===qi&&D.alphaToCoverage===!1,alphaMap:he,alphaTest:q,alphaHash:Y,combine:D.combine,mapUv:Et&&C(D.map.channel),aoMapUv:H&&C(D.aoMap.channel),lightMapUv:qt&&C(D.lightMap.channel),bumpMapUv:ot&&C(D.bumpMap.channel),normalMapUv:ct&&C(D.normalMap.channel),displacementMapUv:We&&C(D.displacementMap.channel),emissiveMapUv:mt&&C(D.emissiveMap.channel),metalnessMapUv:He&&C(D.metalnessMap.channel),roughnessMapUv:F&&C(D.roughnessMap.channel),anisotropyMapUv:Ce&&C(D.anisotropyMap.channel),clearcoatMapUv:Le&&C(D.clearcoatMap.channel),clearcoatNormalMapUv:ut&&C(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ye&&C(D.clearcoatRoughnessMap.channel),iridescenceMapUv:Fe&&C(D.iridescenceMap.channel),iridescenceThicknessMapUv:$e&&C(D.iridescenceThicknessMap.channel),sheenColorMapUv:qe&&C(D.sheenColorMap.channel),sheenRoughnessMapUv:Ue&&C(D.sheenRoughnessMap.channel),specularMapUv:st&&C(D.specularMap.channel),specularColorMapUv:Je&&C(D.specularColorMap.channel),specularIntensityMapUv:yt&&C(D.specularIntensityMap.channel),transmissionMapUv:B&&C(D.transmissionMap.channel),thicknessMapUv:be&&C(D.thicknessMap.channel),alphaMapUv:he&&C(D.alphaMap.channel),vertexTangents:!!pe.attributes.tangent&&(ct||A),vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!pe.attributes.color&&pe.attributes.color.itemSize===4,pointsUvs:K.isPoints===!0&&!!pe.attributes.uv&&(Et||he),fog:!!ee,useFog:D.fog===!0,fogExp2:!!ee&&ee.isFogExp2,flatShading:D.flatShading===!0,sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:g,reverseDepthBuffer:fe,skinning:K.isSkinnedMesh===!0,morphTargets:pe.morphAttributes.position!==void 0,morphNormals:pe.morphAttributes.normal!==void 0,morphColors:pe.morphAttributes.color!==void 0,morphTargetsCount:Ge,morphTextureStride:Qe,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:D.dithering,shadowMapEnabled:i.shadowMap.enabled&&k.length>0,shadowMapType:i.shadowMap.type,toneMapping:Tt,decodeVideoTexture:Et&&D.map.isVideoTexture===!0&&vt.getTransfer(D.map.colorSpace)===Mt,decodeVideoTextureEmissive:mt&&D.emissiveMap.isVideoTexture===!0&&vt.getTransfer(D.emissiveMap.colorSpace)===Mt,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===Xn,flipSided:D.side===nn,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:je&&D.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(je&&D.extensions.multiDraw===!0||tt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return Rt.vertexUv1s=f.has(1),Rt.vertexUv2s=f.has(2),Rt.vertexUv3s=f.has(3),f.clear(),Rt}function _(D){const E=[];if(D.shaderID?E.push(D.shaderID):(E.push(D.customVertexShaderID),E.push(D.customFragmentShaderID)),D.defines!==void 0)for(const k in D.defines)E.push(k),E.push(D.defines[k]);return D.isRawShaderMaterial===!1&&(N(E,D),L(E,D),E.push(i.outputColorSpace)),E.push(D.customProgramCacheKey),E.join()}function N(D,E){D.push(E.precision),D.push(E.outputColorSpace),D.push(E.envMapMode),D.push(E.envMapCubeUVHeight),D.push(E.mapUv),D.push(E.alphaMapUv),D.push(E.lightMapUv),D.push(E.aoMapUv),D.push(E.bumpMapUv),D.push(E.normalMapUv),D.push(E.displacementMapUv),D.push(E.emissiveMapUv),D.push(E.metalnessMapUv),D.push(E.roughnessMapUv),D.push(E.anisotropyMapUv),D.push(E.clearcoatMapUv),D.push(E.clearcoatNormalMapUv),D.push(E.clearcoatRoughnessMapUv),D.push(E.iridescenceMapUv),D.push(E.iridescenceThicknessMapUv),D.push(E.sheenColorMapUv),D.push(E.sheenRoughnessMapUv),D.push(E.specularMapUv),D.push(E.specularColorMapUv),D.push(E.specularIntensityMapUv),D.push(E.transmissionMapUv),D.push(E.thicknessMapUv),D.push(E.combine),D.push(E.fogExp2),D.push(E.sizeAttenuation),D.push(E.morphTargetsCount),D.push(E.morphAttributeCount),D.push(E.numDirLights),D.push(E.numPointLights),D.push(E.numSpotLights),D.push(E.numSpotLightMaps),D.push(E.numHemiLights),D.push(E.numRectAreaLights),D.push(E.numDirLightShadows),D.push(E.numPointLightShadows),D.push(E.numSpotLightShadows),D.push(E.numSpotLightShadowsWithMaps),D.push(E.numLightProbes),D.push(E.shadowMapType),D.push(E.toneMapping),D.push(E.numClippingPlanes),D.push(E.numClipIntersection),D.push(E.depthPacking)}function L(D,E){u.disableAll(),E.supportsVertexTextures&&u.enable(0),E.instancing&&u.enable(1),E.instancingColor&&u.enable(2),E.instancingMorph&&u.enable(3),E.matcap&&u.enable(4),E.envMap&&u.enable(5),E.normalMapObjectSpace&&u.enable(6),E.normalMapTangentSpace&&u.enable(7),E.clearcoat&&u.enable(8),E.iridescence&&u.enable(9),E.alphaTest&&u.enable(10),E.vertexColors&&u.enable(11),E.vertexAlphas&&u.enable(12),E.vertexUv1s&&u.enable(13),E.vertexUv2s&&u.enable(14),E.vertexUv3s&&u.enable(15),E.vertexTangents&&u.enable(16),E.anisotropy&&u.enable(17),E.alphaHash&&u.enable(18),E.batching&&u.enable(19),E.dispersion&&u.enable(20),E.batchingColor&&u.enable(21),D.push(u.mask),u.disableAll(),E.fog&&u.enable(0),E.useFog&&u.enable(1),E.flatShading&&u.enable(2),E.logarithmicDepthBuffer&&u.enable(3),E.reverseDepthBuffer&&u.enable(4),E.skinning&&u.enable(5),E.morphTargets&&u.enable(6),E.morphNormals&&u.enable(7),E.morphColors&&u.enable(8),E.premultipliedAlpha&&u.enable(9),E.shadowMapEnabled&&u.enable(10),E.doubleSided&&u.enable(11),E.flipSided&&u.enable(12),E.useDepthPacking&&u.enable(13),E.dithering&&u.enable(14),E.transmission&&u.enable(15),E.sheen&&u.enable(16),E.opaque&&u.enable(17),E.pointsUvs&&u.enable(18),E.decodeVideoTexture&&u.enable(19),E.decodeVideoTextureEmissive&&u.enable(20),E.alphaToCoverage&&u.enable(21),D.push(u.mask)}function I(D){const E=T[D.type];let k;if(E){const te=In[E];k=iv.clone(te.uniforms)}else k=D.uniforms;return k}function G(D,E){let k;for(let te=0,K=m.length;te<K;te++){const ee=m[te];if(ee.cacheKey===E){k=ee,++k.usedTimes;break}}return k===void 0&&(k=new _S(i,E,D,o),m.push(k)),k}function R(D){if(--D.usedTimes===0){const E=m.indexOf(D);m[E]=m[m.length-1],m.pop(),D.destroy()}}function O(D){d.remove(D)}function $(){d.dispose()}return{getParameters:S,getProgramCacheKey:_,getUniforms:I,acquireProgram:G,releaseProgram:R,releaseShaderCache:O,programs:m,dispose:$}}function SS(){let i=new WeakMap;function e(l){return i.has(l)}function t(l){let u=i.get(l);return u===void 0&&(u={},i.set(l,u)),u}function n(l){i.delete(l)}function s(l,u,d){i.get(l)[u]=d}function o(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:o}}function MS(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function kl(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Bl(){const i=[];let e=0;const t=[],n=[],s=[];function o(){e=0,t.length=0,n.length=0,s.length=0}function l(g,v,y,T,C,S){let _=i[e];return _===void 0?(_={id:g.id,object:g,geometry:v,material:y,groupOrder:T,renderOrder:g.renderOrder,z:C,group:S},i[e]=_):(_.id=g.id,_.object=g,_.geometry=v,_.material=y,_.groupOrder=T,_.renderOrder=g.renderOrder,_.z=C,_.group=S),e++,_}function u(g,v,y,T,C,S){const _=l(g,v,y,T,C,S);y.transmission>0?n.push(_):y.transparent===!0?s.push(_):t.push(_)}function d(g,v,y,T,C,S){const _=l(g,v,y,T,C,S);y.transmission>0?n.unshift(_):y.transparent===!0?s.unshift(_):t.unshift(_)}function f(g,v){t.length>1&&t.sort(g||MS),n.length>1&&n.sort(v||kl),s.length>1&&s.sort(v||kl)}function m(){for(let g=e,v=i.length;g<v;g++){const y=i[g];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:t,transmissive:n,transparent:s,init:o,push:u,unshift:d,finish:m,sort:f}}function ES(){let i=new WeakMap;function e(n,s){const o=i.get(n);let l;return o===void 0?(l=new Bl,i.set(n,[l])):s>=o.length?(l=new Bl,o.push(l)):l=o[s],l}function t(){i=new WeakMap}return{get:e,dispose:t}}function wS(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new z,color:new at};break;case"SpotLight":t={position:new z,direction:new z,color:new at,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new z,color:new at,distance:0,decay:0};break;case"HemisphereLight":t={direction:new z,skyColor:new at,groundColor:new at};break;case"RectAreaLight":t={color:new at,position:new z,halfWidth:new z,halfHeight:new z};break}return i[e.id]=t,t}}}function bS(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let TS=0;function AS(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function CS(i){const e=new wS,t=bS(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let f=0;f<9;f++)n.probe.push(new z);const s=new z,o=new At,l=new At;function u(f){let m=0,g=0,v=0;for(let D=0;D<9;D++)n.probe[D].set(0,0,0);let y=0,T=0,C=0,S=0,_=0,N=0,L=0,I=0,G=0,R=0,O=0;f.sort(AS);for(let D=0,E=f.length;D<E;D++){const k=f[D],te=k.color,K=k.intensity,ee=k.distance,pe=k.shadow&&k.shadow.map?k.shadow.map.texture:null;if(k.isAmbientLight)m+=te.r*K,g+=te.g*K,v+=te.b*K;else if(k.isLightProbe){for(let ae=0;ae<9;ae++)n.probe[ae].addScaledVector(k.sh.coefficients[ae],K);O++}else if(k.isDirectionalLight){const ae=e.get(k);if(ae.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const Se=k.shadow,re=t.get(k);re.shadowIntensity=Se.intensity,re.shadowBias=Se.bias,re.shadowNormalBias=Se.normalBias,re.shadowRadius=Se.radius,re.shadowMapSize=Se.mapSize,n.directionalShadow[y]=re,n.directionalShadowMap[y]=pe,n.directionalShadowMatrix[y]=k.shadow.matrix,N++}n.directional[y]=ae,y++}else if(k.isSpotLight){const ae=e.get(k);ae.position.setFromMatrixPosition(k.matrixWorld),ae.color.copy(te).multiplyScalar(K),ae.distance=ee,ae.coneCos=Math.cos(k.angle),ae.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),ae.decay=k.decay,n.spot[C]=ae;const Se=k.shadow;if(k.map&&(n.spotLightMap[G]=k.map,G++,Se.updateMatrices(k),k.castShadow&&R++),n.spotLightMatrix[C]=Se.matrix,k.castShadow){const re=t.get(k);re.shadowIntensity=Se.intensity,re.shadowBias=Se.bias,re.shadowNormalBias=Se.normalBias,re.shadowRadius=Se.radius,re.shadowMapSize=Se.mapSize,n.spotShadow[C]=re,n.spotShadowMap[C]=pe,I++}C++}else if(k.isRectAreaLight){const ae=e.get(k);ae.color.copy(te).multiplyScalar(K),ae.halfWidth.set(k.width*.5,0,0),ae.halfHeight.set(0,k.height*.5,0),n.rectArea[S]=ae,S++}else if(k.isPointLight){const ae=e.get(k);if(ae.color.copy(k.color).multiplyScalar(k.intensity),ae.distance=k.distance,ae.decay=k.decay,k.castShadow){const Se=k.shadow,re=t.get(k);re.shadowIntensity=Se.intensity,re.shadowBias=Se.bias,re.shadowNormalBias=Se.normalBias,re.shadowRadius=Se.radius,re.shadowMapSize=Se.mapSize,re.shadowCameraNear=Se.camera.near,re.shadowCameraFar=Se.camera.far,n.pointShadow[T]=re,n.pointShadowMap[T]=pe,n.pointShadowMatrix[T]=k.shadow.matrix,L++}n.point[T]=ae,T++}else if(k.isHemisphereLight){const ae=e.get(k);ae.skyColor.copy(k.color).multiplyScalar(K),ae.groundColor.copy(k.groundColor).multiplyScalar(K),n.hemi[_]=ae,_++}}S>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=we.LTC_FLOAT_1,n.rectAreaLTC2=we.LTC_FLOAT_2):(n.rectAreaLTC1=we.LTC_HALF_1,n.rectAreaLTC2=we.LTC_HALF_2)),n.ambient[0]=m,n.ambient[1]=g,n.ambient[2]=v;const $=n.hash;($.directionalLength!==y||$.pointLength!==T||$.spotLength!==C||$.rectAreaLength!==S||$.hemiLength!==_||$.numDirectionalShadows!==N||$.numPointShadows!==L||$.numSpotShadows!==I||$.numSpotMaps!==G||$.numLightProbes!==O)&&(n.directional.length=y,n.spot.length=C,n.rectArea.length=S,n.point.length=T,n.hemi.length=_,n.directionalShadow.length=N,n.directionalShadowMap.length=N,n.pointShadow.length=L,n.pointShadowMap.length=L,n.spotShadow.length=I,n.spotShadowMap.length=I,n.directionalShadowMatrix.length=N,n.pointShadowMatrix.length=L,n.spotLightMatrix.length=I+G-R,n.spotLightMap.length=G,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=O,$.directionalLength=y,$.pointLength=T,$.spotLength=C,$.rectAreaLength=S,$.hemiLength=_,$.numDirectionalShadows=N,$.numPointShadows=L,$.numSpotShadows=I,$.numSpotMaps=G,$.numLightProbes=O,n.version=TS++)}function d(f,m){let g=0,v=0,y=0,T=0,C=0;const S=m.matrixWorldInverse;for(let _=0,N=f.length;_<N;_++){const L=f[_];if(L.isDirectionalLight){const I=n.directional[g];I.direction.setFromMatrixPosition(L.matrixWorld),s.setFromMatrixPosition(L.target.matrixWorld),I.direction.sub(s),I.direction.transformDirection(S),g++}else if(L.isSpotLight){const I=n.spot[y];I.position.setFromMatrixPosition(L.matrixWorld),I.position.applyMatrix4(S),I.direction.setFromMatrixPosition(L.matrixWorld),s.setFromMatrixPosition(L.target.matrixWorld),I.direction.sub(s),I.direction.transformDirection(S),y++}else if(L.isRectAreaLight){const I=n.rectArea[T];I.position.setFromMatrixPosition(L.matrixWorld),I.position.applyMatrix4(S),l.identity(),o.copy(L.matrixWorld),o.premultiply(S),l.extractRotation(o),I.halfWidth.set(L.width*.5,0,0),I.halfHeight.set(0,L.height*.5,0),I.halfWidth.applyMatrix4(l),I.halfHeight.applyMatrix4(l),T++}else if(L.isPointLight){const I=n.point[v];I.position.setFromMatrixPosition(L.matrixWorld),I.position.applyMatrix4(S),v++}else if(L.isHemisphereLight){const I=n.hemi[C];I.direction.setFromMatrixPosition(L.matrixWorld),I.direction.transformDirection(S),C++}}}return{setup:u,setupView:d,state:n}}function zl(i){const e=new CS(i),t=[],n=[];function s(m){f.camera=m,t.length=0,n.length=0}function o(m){t.push(m)}function l(m){n.push(m)}function u(){e.setup(t)}function d(m){e.setupView(t,m)}const f={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:f,setupLights:u,setupLightsView:d,pushLight:o,pushShadow:l}}function RS(i){let e=new WeakMap;function t(s,o=0){const l=e.get(s);let u;return l===void 0?(u=new zl(i),e.set(s,[u])):o>=l.length?(u=new zl(i),l.push(u)):u=l[o],u}function n(){e=new WeakMap}return{get:t,dispose:n}}class PS extends ar{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Tg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class IS extends ar{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const DS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,LS=`uniform sampler2D shadow_pass;
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
}`;function FS(i,e,t){let n=new Go;const s=new ze,o=new ze,l=new Pt,u=new PS({depthPacking:Ag}),d=new IS,f={},m=t.maxTextureSize,g={[ai]:nn,[nn]:ai,[Xn]:Xn},v=new oi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ze},radius:{value:4}},vertexShader:DS,fragmentShader:LS}),y=v.clone();y.defines.HORIZONTAL_PASS=1;const T=new sn;T.setAttribute("position",new fn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new Ln(T,v),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=du;let _=this.type;this.render=function(R,O,$){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||R.length===0)return;const D=i.getRenderTarget(),E=i.getActiveCubeFace(),k=i.getActiveMipmapLevel(),te=i.state;te.setBlending(ri),te.buffers.color.setClear(1,1,1,1),te.buffers.depth.setTest(!0),te.setScissorTest(!1);const K=_!==Vn&&this.type===Vn,ee=_===Vn&&this.type!==Vn;for(let pe=0,ae=R.length;pe<ae;pe++){const Se=R[pe],re=Se.shadow;if(re===void 0){console.warn("THREE.WebGLShadowMap:",Se,"has no shadow.");continue}if(re.autoUpdate===!1&&re.needsUpdate===!1)continue;s.copy(re.mapSize);const Ae=re.getFrameExtents();if(s.multiply(Ae),o.copy(re.mapSize),(s.x>m||s.y>m)&&(s.x>m&&(o.x=Math.floor(m/Ae.x),s.x=o.x*Ae.x,re.mapSize.x=o.x),s.y>m&&(o.y=Math.floor(m/Ae.y),s.y=o.y*Ae.y,re.mapSize.y=o.y)),re.map===null||K===!0||ee===!0){const Ge=this.type!==Vn?{minFilter:wn,magFilter:wn}:{};re.map!==null&&re.map.dispose(),re.map=new Pi(s.x,s.y,Ge),re.map.texture.name=Se.name+".shadowMap",re.camera.updateProjectionMatrix()}i.setRenderTarget(re.map),i.clear();const Pe=re.getViewportCount();for(let Ge=0;Ge<Pe;Ge++){const Qe=re.getViewport(Ge);l.set(o.x*Qe.x,o.y*Qe.y,o.x*Qe.z,o.y*Qe.w),te.viewport(l),re.updateMatrices(Se,Ge),n=re.getFrustum(),I(O,$,re.camera,Se,this.type)}re.isPointLightShadow!==!0&&this.type===Vn&&N(re,$),re.needsUpdate=!1}_=this.type,S.needsUpdate=!1,i.setRenderTarget(D,E,k)};function N(R,O){const $=e.update(C);v.defines.VSM_SAMPLES!==R.blurSamples&&(v.defines.VSM_SAMPLES=R.blurSamples,y.defines.VSM_SAMPLES=R.blurSamples,v.needsUpdate=!0,y.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Pi(s.x,s.y)),v.uniforms.shadow_pass.value=R.map.texture,v.uniforms.resolution.value=R.mapSize,v.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(O,null,$,v,C,null),y.uniforms.shadow_pass.value=R.mapPass.texture,y.uniforms.resolution.value=R.mapSize,y.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(O,null,$,y,C,null)}function L(R,O,$,D){let E=null;const k=$.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(k!==void 0)E=k;else if(E=$.isPointLight===!0?d:u,i.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0){const te=E.uuid,K=O.uuid;let ee=f[te];ee===void 0&&(ee={},f[te]=ee);let pe=ee[K];pe===void 0&&(pe=E.clone(),ee[K]=pe,O.addEventListener("dispose",G)),E=pe}if(E.visible=O.visible,E.wireframe=O.wireframe,D===Vn?E.side=O.shadowSide!==null?O.shadowSide:O.side:E.side=O.shadowSide!==null?O.shadowSide:g[O.side],E.alphaMap=O.alphaMap,E.alphaTest=O.alphaTest,E.map=O.map,E.clipShadows=O.clipShadows,E.clippingPlanes=O.clippingPlanes,E.clipIntersection=O.clipIntersection,E.displacementMap=O.displacementMap,E.displacementScale=O.displacementScale,E.displacementBias=O.displacementBias,E.wireframeLinewidth=O.wireframeLinewidth,E.linewidth=O.linewidth,$.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const te=i.properties.get(E);te.light=$}return E}function I(R,O,$,D,E){if(R.visible===!1)return;if(R.layers.test(O.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&E===Vn)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,R.matrixWorld);const K=e.update(R),ee=R.material;if(Array.isArray(ee)){const pe=K.groups;for(let ae=0,Se=pe.length;ae<Se;ae++){const re=pe[ae],Ae=ee[re.materialIndex];if(Ae&&Ae.visible){const Pe=L(R,Ae,D,E);R.onBeforeShadow(i,R,O,$,K,Pe,re),i.renderBufferDirect($,null,K,Pe,R,re),R.onAfterShadow(i,R,O,$,K,Pe,re)}}}else if(ee.visible){const pe=L(R,ee,D,E);R.onBeforeShadow(i,R,O,$,K,pe,null),i.renderBufferDirect($,null,K,pe,R,null),R.onAfterShadow(i,R,O,$,K,pe,null)}}const te=R.children;for(let K=0,ee=te.length;K<ee;K++)I(te[K],O,$,D,E)}function G(R){R.target.removeEventListener("dispose",G);for(const $ in f){const D=f[$],E=R.target.uuid;E in D&&(D[E].dispose(),delete D[E])}}}const US={[ja]:Ya,[qa]:Ka,[Za]:Qa,[Ki]:Ja,[Ya]:ja,[Ka]:qa,[Qa]:Za,[Ja]:Ki};function NS(i,e){function t(){let B=!1;const be=new Pt;let ie=null;const he=new Pt(0,0,0,0);return{setMask:function(q){ie!==q&&!B&&(i.colorMask(q,q,q,q),ie=q)},setLocked:function(q){B=q},setClear:function(q,Y,je,Tt,Rt){Rt===!0&&(q*=Tt,Y*=Tt,je*=Tt),be.set(q,Y,je,Tt),he.equals(be)===!1&&(i.clearColor(q,Y,je,Tt),he.copy(be))},reset:function(){B=!1,ie=null,he.set(-1,0,0,0)}}}function n(){let B=!1,be=!1,ie=null,he=null,q=null;return{setReversed:function(Y){if(be!==Y){const je=e.get("EXT_clip_control");be?je.clipControlEXT(je.LOWER_LEFT_EXT,je.ZERO_TO_ONE_EXT):je.clipControlEXT(je.LOWER_LEFT_EXT,je.NEGATIVE_ONE_TO_ONE_EXT);const Tt=q;q=null,this.setClear(Tt)}be=Y},getReversed:function(){return be},setTest:function(Y){Y?Ee(i.DEPTH_TEST):fe(i.DEPTH_TEST)},setMask:function(Y){ie!==Y&&!B&&(i.depthMask(Y),ie=Y)},setFunc:function(Y){if(be&&(Y=US[Y]),he!==Y){switch(Y){case ja:i.depthFunc(i.NEVER);break;case Ya:i.depthFunc(i.ALWAYS);break;case qa:i.depthFunc(i.LESS);break;case Ki:i.depthFunc(i.LEQUAL);break;case Za:i.depthFunc(i.EQUAL);break;case Ja:i.depthFunc(i.GEQUAL);break;case Ka:i.depthFunc(i.GREATER);break;case Qa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}he=Y}},setLocked:function(Y){B=Y},setClear:function(Y){q!==Y&&(be&&(Y=1-Y),i.clearDepth(Y),q=Y)},reset:function(){B=!1,ie=null,he=null,q=null,be=!1}}}function s(){let B=!1,be=null,ie=null,he=null,q=null,Y=null,je=null,Tt=null,Rt=null;return{setTest:function(rt){B||(rt?Ee(i.STENCIL_TEST):fe(i.STENCIL_TEST))},setMask:function(rt){be!==rt&&!B&&(i.stencilMask(rt),be=rt)},setFunc:function(rt,an,Lt){(ie!==rt||he!==an||q!==Lt)&&(i.stencilFunc(rt,an,Lt),ie=rt,he=an,q=Lt)},setOp:function(rt,an,Lt){(Y!==rt||je!==an||Tt!==Lt)&&(i.stencilOp(rt,an,Lt),Y=rt,je=an,Tt=Lt)},setLocked:function(rt){B=rt},setClear:function(rt){Rt!==rt&&(i.clearStencil(rt),Rt=rt)},reset:function(){B=!1,be=null,ie=null,he=null,q=null,Y=null,je=null,Tt=null,Rt=null}}}const o=new t,l=new n,u=new s,d=new WeakMap,f=new WeakMap;let m={},g={},v=new WeakMap,y=[],T=null,C=!1,S=null,_=null,N=null,L=null,I=null,G=null,R=null,O=new at(0,0,0),$=0,D=!1,E=null,k=null,te=null,K=null,ee=null;const pe=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ae=!1,Se=0;const re=i.getParameter(i.VERSION);re.indexOf("WebGL")!==-1?(Se=parseFloat(/^WebGL (\d)/.exec(re)[1]),ae=Se>=1):re.indexOf("OpenGL ES")!==-1&&(Se=parseFloat(/^OpenGL ES (\d)/.exec(re)[1]),ae=Se>=2);let Ae=null,Pe={};const Ge=i.getParameter(i.SCISSOR_BOX),Qe=i.getParameter(i.VIEWPORT),pt=new Pt().fromArray(Ge),ne=new Pt().fromArray(Qe);function _e(B,be,ie,he){const q=new Uint8Array(4),Y=i.createTexture();i.bindTexture(B,Y),i.texParameteri(B,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(B,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let je=0;je<ie;je++)B===i.TEXTURE_3D||B===i.TEXTURE_2D_ARRAY?i.texImage3D(be,0,i.RGBA,1,1,he,0,i.RGBA,i.UNSIGNED_BYTE,q):i.texImage2D(be+je,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,q);return Y}const De={};De[i.TEXTURE_2D]=_e(i.TEXTURE_2D,i.TEXTURE_2D,1),De[i.TEXTURE_CUBE_MAP]=_e(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),De[i.TEXTURE_2D_ARRAY]=_e(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),De[i.TEXTURE_3D]=_e(i.TEXTURE_3D,i.TEXTURE_3D,1,1),o.setClear(0,0,0,1),l.setClear(1),u.setClear(0),Ee(i.DEPTH_TEST),l.setFunc(Ki),ot(!1),ct(Wc),Ee(i.CULL_FACE),H(ri);function Ee(B){m[B]!==!0&&(i.enable(B),m[B]=!0)}function fe(B){m[B]!==!1&&(i.disable(B),m[B]=!1)}function Me(B,be){return g[B]!==be?(i.bindFramebuffer(B,be),g[B]=be,B===i.DRAW_FRAMEBUFFER&&(g[i.FRAMEBUFFER]=be),B===i.FRAMEBUFFER&&(g[i.DRAW_FRAMEBUFFER]=be),!0):!1}function tt(B,be){let ie=y,he=!1;if(B){ie=v.get(be),ie===void 0&&(ie=[],v.set(be,ie));const q=B.textures;if(ie.length!==q.length||ie[0]!==i.COLOR_ATTACHMENT0){for(let Y=0,je=q.length;Y<je;Y++)ie[Y]=i.COLOR_ATTACHMENT0+Y;ie.length=q.length,he=!0}}else ie[0]!==i.BACK&&(ie[0]=i.BACK,he=!0);he&&i.drawBuffers(ie)}function Et(B){return T!==B?(i.useProgram(B),T=B,!0):!1}const Ze={[bi]:i.FUNC_ADD,[Q_]:i.FUNC_SUBTRACT,[eg]:i.FUNC_REVERSE_SUBTRACT};Ze[tg]=i.MIN,Ze[ng]=i.MAX;const Ct={[ig]:i.ZERO,[rg]:i.ONE,[sg]:i.SRC_COLOR,[Xa]:i.SRC_ALPHA,[hg]:i.SRC_ALPHA_SATURATE,[lg]:i.DST_COLOR,[og]:i.DST_ALPHA,[ag]:i.ONE_MINUS_SRC_COLOR,[$a]:i.ONE_MINUS_SRC_ALPHA,[ug]:i.ONE_MINUS_DST_COLOR,[cg]:i.ONE_MINUS_DST_ALPHA,[dg]:i.CONSTANT_COLOR,[fg]:i.ONE_MINUS_CONSTANT_COLOR,[pg]:i.CONSTANT_ALPHA,[mg]:i.ONE_MINUS_CONSTANT_ALPHA};function H(B,be,ie,he,q,Y,je,Tt,Rt,rt){if(B===ri){C===!0&&(fe(i.BLEND),C=!1);return}if(C===!1&&(Ee(i.BLEND),C=!0),B!==K_){if(B!==S||rt!==D){if((_!==bi||I!==bi)&&(i.blendEquation(i.FUNC_ADD),_=bi,I=bi),rt)switch(B){case qi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Xc:i.blendFunc(i.ONE,i.ONE);break;case $c:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case jc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case qi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Xc:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case $c:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case jc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}N=null,L=null,G=null,R=null,O.set(0,0,0),$=0,S=B,D=rt}return}q=q||be,Y=Y||ie,je=je||he,(be!==_||q!==I)&&(i.blendEquationSeparate(Ze[be],Ze[q]),_=be,I=q),(ie!==N||he!==L||Y!==G||je!==R)&&(i.blendFuncSeparate(Ct[ie],Ct[he],Ct[Y],Ct[je]),N=ie,L=he,G=Y,R=je),(Tt.equals(O)===!1||Rt!==$)&&(i.blendColor(Tt.r,Tt.g,Tt.b,Rt),O.copy(Tt),$=Rt),S=B,D=!1}function qt(B,be){B.side===Xn?fe(i.CULL_FACE):Ee(i.CULL_FACE);let ie=B.side===nn;be&&(ie=!ie),ot(ie),B.blending===qi&&B.transparent===!1?H(ri):H(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),l.setFunc(B.depthFunc),l.setTest(B.depthTest),l.setMask(B.depthWrite),o.setMask(B.colorWrite);const he=B.stencilWrite;u.setTest(he),he&&(u.setMask(B.stencilWriteMask),u.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),u.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),mt(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?Ee(i.SAMPLE_ALPHA_TO_COVERAGE):fe(i.SAMPLE_ALPHA_TO_COVERAGE)}function ot(B){E!==B&&(B?i.frontFace(i.CW):i.frontFace(i.CCW),E=B)}function ct(B){B!==q_?(Ee(i.CULL_FACE),B!==k&&(B===Wc?i.cullFace(i.BACK):B===Z_?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):fe(i.CULL_FACE),k=B}function We(B){B!==te&&(ae&&i.lineWidth(B),te=B)}function mt(B,be,ie){B?(Ee(i.POLYGON_OFFSET_FILL),(K!==be||ee!==ie)&&(i.polygonOffset(be,ie),K=be,ee=ie)):fe(i.POLYGON_OFFSET_FILL)}function He(B){B?Ee(i.SCISSOR_TEST):fe(i.SCISSOR_TEST)}function F(B){B===void 0&&(B=i.TEXTURE0+pe-1),Ae!==B&&(i.activeTexture(B),Ae=B)}function A(B,be,ie){ie===void 0&&(Ae===null?ie=i.TEXTURE0+pe-1:ie=Ae);let he=Pe[ie];he===void 0&&(he={type:void 0,texture:void 0},Pe[ie]=he),(he.type!==B||he.texture!==be)&&(Ae!==ie&&(i.activeTexture(ie),Ae=ie),i.bindTexture(B,be||De[B]),he.type=B,he.texture=be)}function J(){const B=Pe[Ae];B!==void 0&&B.type!==void 0&&(i.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function de(){try{i.compressedTexImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function le(){try{i.compressedTexImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function se(){try{i.texSubImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Oe(){try{i.texSubImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ce(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Le(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ut(){try{i.texStorage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ye(){try{i.texStorage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Fe(){try{i.texImage2D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function $e(){try{i.texImage3D.apply(i,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function qe(B){pt.equals(B)===!1&&(i.scissor(B.x,B.y,B.z,B.w),pt.copy(B))}function Ue(B){ne.equals(B)===!1&&(i.viewport(B.x,B.y,B.z,B.w),ne.copy(B))}function st(B,be){let ie=f.get(be);ie===void 0&&(ie=new WeakMap,f.set(be,ie));let he=ie.get(B);he===void 0&&(he=i.getUniformBlockIndex(be,B.name),ie.set(B,he))}function Je(B,be){const he=f.get(be).get(B);d.get(be)!==he&&(i.uniformBlockBinding(be,he,B.__bindingPointIndex),d.set(be,he))}function yt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),l.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),m={},Ae=null,Pe={},g={},v=new WeakMap,y=[],T=null,C=!1,S=null,_=null,N=null,L=null,I=null,G=null,R=null,O=new at(0,0,0),$=0,D=!1,E=null,k=null,te=null,K=null,ee=null,pt.set(0,0,i.canvas.width,i.canvas.height),ne.set(0,0,i.canvas.width,i.canvas.height),o.reset(),l.reset(),u.reset()}return{buffers:{color:o,depth:l,stencil:u},enable:Ee,disable:fe,bindFramebuffer:Me,drawBuffers:tt,useProgram:Et,setBlending:H,setMaterial:qt,setFlipSided:ot,setCullFace:ct,setLineWidth:We,setPolygonOffset:mt,setScissorTest:He,activeTexture:F,bindTexture:A,unbindTexture:J,compressedTexImage2D:de,compressedTexImage3D:le,texImage2D:Fe,texImage3D:$e,updateUBOMapping:st,uniformBlockBinding:Je,texStorage2D:ut,texStorage3D:ye,texSubImage2D:se,texSubImage3D:Oe,compressedTexSubImage2D:Ce,compressedTexSubImage3D:Le,scissor:qe,viewport:Ue,reset:yt}}function Gl(i,e,t,n){const s=OS(n);switch(t){case vu:return i*e;case yu:return i*e;case Su:return i*e*2;case Mu:return i*e/s.components*s.byteLength;case ko:return i*e/s.components*s.byteLength;case Eu:return i*e*2/s.components*s.byteLength;case Bo:return i*e*2/s.components*s.byteLength;case xu:return i*e*3/s.components*s.byteLength;case En:return i*e*4/s.components*s.byteLength;case zo:return i*e*4/s.components*s.byteLength;case Cs:case Rs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ps:case Is:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case so:case oo:return Math.max(i,16)*Math.max(e,8)/4;case ro:case ao:return Math.max(i,8)*Math.max(e,8)/2;case co:case lo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case uo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ho:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case fo:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case po:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case mo:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case _o:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case go:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case vo:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case xo:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case yo:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case So:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Mo:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Eo:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case wo:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case bo:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Ds:case To:case Ao:return Math.ceil(i/4)*Math.ceil(e/4)*16;case wu:case Co:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Ro:case Po:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function OS(i){switch(i){case qn:case mu:return{byteLength:1,components:1};case wr:case _u:case br:return{byteLength:2,components:1};case No:case Oo:return{byteLength:2,components:4};case Ri:case Uo:case $n:return{byteLength:4,components:1};case gu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function kS(i,e,t,n,s,o,l){const u=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),f=new ze,m=new WeakMap;let g;const v=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(F,A){return y?new OffscreenCanvas(F,A):Us("canvas")}function C(F,A,J){let de=1;const le=He(F);if((le.width>J||le.height>J)&&(de=J/Math.max(le.width,le.height)),de<1)if(typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&F instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&F instanceof ImageBitmap||typeof VideoFrame<"u"&&F instanceof VideoFrame){const se=Math.floor(de*le.width),Oe=Math.floor(de*le.height);g===void 0&&(g=T(se,Oe));const Ce=A?T(se,Oe):g;return Ce.width=se,Ce.height=Oe,Ce.getContext("2d").drawImage(F,0,0,se,Oe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+le.width+"x"+le.height+") to ("+se+"x"+Oe+")."),Ce}else return"data"in F&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+le.width+"x"+le.height+")."),F;return F}function S(F){return F.generateMipmaps}function _(F){i.generateMipmap(F)}function N(F){return F.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:F.isWebGL3DRenderTarget?i.TEXTURE_3D:F.isWebGLArrayRenderTarget||F.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function L(F,A,J,de,le=!1){if(F!==null){if(i[F]!==void 0)return i[F];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let se=A;if(A===i.RED&&(J===i.FLOAT&&(se=i.R32F),J===i.HALF_FLOAT&&(se=i.R16F),J===i.UNSIGNED_BYTE&&(se=i.R8)),A===i.RED_INTEGER&&(J===i.UNSIGNED_BYTE&&(se=i.R8UI),J===i.UNSIGNED_SHORT&&(se=i.R16UI),J===i.UNSIGNED_INT&&(se=i.R32UI),J===i.BYTE&&(se=i.R8I),J===i.SHORT&&(se=i.R16I),J===i.INT&&(se=i.R32I)),A===i.RG&&(J===i.FLOAT&&(se=i.RG32F),J===i.HALF_FLOAT&&(se=i.RG16F),J===i.UNSIGNED_BYTE&&(se=i.RG8)),A===i.RG_INTEGER&&(J===i.UNSIGNED_BYTE&&(se=i.RG8UI),J===i.UNSIGNED_SHORT&&(se=i.RG16UI),J===i.UNSIGNED_INT&&(se=i.RG32UI),J===i.BYTE&&(se=i.RG8I),J===i.SHORT&&(se=i.RG16I),J===i.INT&&(se=i.RG32I)),A===i.RGB_INTEGER&&(J===i.UNSIGNED_BYTE&&(se=i.RGB8UI),J===i.UNSIGNED_SHORT&&(se=i.RGB16UI),J===i.UNSIGNED_INT&&(se=i.RGB32UI),J===i.BYTE&&(se=i.RGB8I),J===i.SHORT&&(se=i.RGB16I),J===i.INT&&(se=i.RGB32I)),A===i.RGBA_INTEGER&&(J===i.UNSIGNED_BYTE&&(se=i.RGBA8UI),J===i.UNSIGNED_SHORT&&(se=i.RGBA16UI),J===i.UNSIGNED_INT&&(se=i.RGBA32UI),J===i.BYTE&&(se=i.RGBA8I),J===i.SHORT&&(se=i.RGBA16I),J===i.INT&&(se=i.RGBA32I)),A===i.RGB&&J===i.UNSIGNED_INT_5_9_9_9_REV&&(se=i.RGB9_E5),A===i.RGBA){const Oe=le?zs:vt.getTransfer(de);J===i.FLOAT&&(se=i.RGBA32F),J===i.HALF_FLOAT&&(se=i.RGBA16F),J===i.UNSIGNED_BYTE&&(se=Oe===Mt?i.SRGB8_ALPHA8:i.RGBA8),J===i.UNSIGNED_SHORT_4_4_4_4&&(se=i.RGBA4),J===i.UNSIGNED_SHORT_5_5_5_1&&(se=i.RGB5_A1)}return(se===i.R16F||se===i.R32F||se===i.RG16F||se===i.RG32F||se===i.RGBA16F||se===i.RGBA32F)&&e.get("EXT_color_buffer_float"),se}function I(F,A){let J;return F?A===null||A===Ri||A===tr?J=i.DEPTH24_STENCIL8:A===$n?J=i.DEPTH32F_STENCIL8:A===wr&&(J=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===Ri||A===tr?J=i.DEPTH_COMPONENT24:A===$n?J=i.DEPTH_COMPONENT32F:A===wr&&(J=i.DEPTH_COMPONENT16),J}function G(F,A){return S(F)===!0||F.isFramebufferTexture&&F.minFilter!==wn&&F.minFilter!==Dn?Math.log2(Math.max(A.width,A.height))+1:F.mipmaps!==void 0&&F.mipmaps.length>0?F.mipmaps.length:F.isCompressedTexture&&Array.isArray(F.image)?A.mipmaps.length:1}function R(F){const A=F.target;A.removeEventListener("dispose",R),$(A),A.isVideoTexture&&m.delete(A)}function O(F){const A=F.target;A.removeEventListener("dispose",O),E(A)}function $(F){const A=n.get(F);if(A.__webglInit===void 0)return;const J=F.source,de=v.get(J);if(de){const le=de[A.__cacheKey];le.usedTimes--,le.usedTimes===0&&D(F),Object.keys(de).length===0&&v.delete(J)}n.remove(F)}function D(F){const A=n.get(F);i.deleteTexture(A.__webglTexture);const J=F.source,de=v.get(J);delete de[A.__cacheKey],l.memory.textures--}function E(F){const A=n.get(F);if(F.depthTexture&&(F.depthTexture.dispose(),n.remove(F.depthTexture)),F.isWebGLCubeRenderTarget)for(let de=0;de<6;de++){if(Array.isArray(A.__webglFramebuffer[de]))for(let le=0;le<A.__webglFramebuffer[de].length;le++)i.deleteFramebuffer(A.__webglFramebuffer[de][le]);else i.deleteFramebuffer(A.__webglFramebuffer[de]);A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer[de])}else{if(Array.isArray(A.__webglFramebuffer))for(let de=0;de<A.__webglFramebuffer.length;de++)i.deleteFramebuffer(A.__webglFramebuffer[de]);else i.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&i.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&i.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let de=0;de<A.__webglColorRenderbuffer.length;de++)A.__webglColorRenderbuffer[de]&&i.deleteRenderbuffer(A.__webglColorRenderbuffer[de]);A.__webglDepthRenderbuffer&&i.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const J=F.textures;for(let de=0,le=J.length;de<le;de++){const se=n.get(J[de]);se.__webglTexture&&(i.deleteTexture(se.__webglTexture),l.memory.textures--),n.remove(J[de])}n.remove(F)}let k=0;function te(){k=0}function K(){const F=k;return F>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+F+" texture units while this GPU supports only "+s.maxTextures),k+=1,F}function ee(F){const A=[];return A.push(F.wrapS),A.push(F.wrapT),A.push(F.wrapR||0),A.push(F.magFilter),A.push(F.minFilter),A.push(F.anisotropy),A.push(F.internalFormat),A.push(F.format),A.push(F.type),A.push(F.generateMipmaps),A.push(F.premultiplyAlpha),A.push(F.flipY),A.push(F.unpackAlignment),A.push(F.colorSpace),A.join()}function pe(F,A){const J=n.get(F);if(F.isVideoTexture&&We(F),F.isRenderTargetTexture===!1&&F.version>0&&J.__version!==F.version){const de=F.image;if(de===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(de.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ne(J,F,A);return}}t.bindTexture(i.TEXTURE_2D,J.__webglTexture,i.TEXTURE0+A)}function ae(F,A){const J=n.get(F);if(F.version>0&&J.__version!==F.version){ne(J,F,A);return}t.bindTexture(i.TEXTURE_2D_ARRAY,J.__webglTexture,i.TEXTURE0+A)}function Se(F,A){const J=n.get(F);if(F.version>0&&J.__version!==F.version){ne(J,F,A);return}t.bindTexture(i.TEXTURE_3D,J.__webglTexture,i.TEXTURE0+A)}function re(F,A){const J=n.get(F);if(F.version>0&&J.__version!==F.version){_e(J,F,A);return}t.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture,i.TEXTURE0+A)}const Ae={[no]:i.REPEAT,[Ai]:i.CLAMP_TO_EDGE,[io]:i.MIRRORED_REPEAT},Pe={[wn]:i.NEAREST,[bg]:i.NEAREST_MIPMAP_NEAREST,[Qr]:i.NEAREST_MIPMAP_LINEAR,[Dn]:i.LINEAR,[ca]:i.LINEAR_MIPMAP_NEAREST,[Ci]:i.LINEAR_MIPMAP_LINEAR},Ge={[Rg]:i.NEVER,[Ug]:i.ALWAYS,[Pg]:i.LESS,[Tu]:i.LEQUAL,[Ig]:i.EQUAL,[Fg]:i.GEQUAL,[Dg]:i.GREATER,[Lg]:i.NOTEQUAL};function Qe(F,A){if(A.type===$n&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===Dn||A.magFilter===ca||A.magFilter===Qr||A.magFilter===Ci||A.minFilter===Dn||A.minFilter===ca||A.minFilter===Qr||A.minFilter===Ci)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(F,i.TEXTURE_WRAP_S,Ae[A.wrapS]),i.texParameteri(F,i.TEXTURE_WRAP_T,Ae[A.wrapT]),(F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY)&&i.texParameteri(F,i.TEXTURE_WRAP_R,Ae[A.wrapR]),i.texParameteri(F,i.TEXTURE_MAG_FILTER,Pe[A.magFilter]),i.texParameteri(F,i.TEXTURE_MIN_FILTER,Pe[A.minFilter]),A.compareFunction&&(i.texParameteri(F,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(F,i.TEXTURE_COMPARE_FUNC,Ge[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===wn||A.minFilter!==Qr&&A.minFilter!==Ci||A.type===$n&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||n.get(A).__currentAnisotropy){const J=e.get("EXT_texture_filter_anisotropic");i.texParameterf(F,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,s.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy}}}function pt(F,A){let J=!1;F.__webglInit===void 0&&(F.__webglInit=!0,A.addEventListener("dispose",R));const de=A.source;let le=v.get(de);le===void 0&&(le={},v.set(de,le));const se=ee(A);if(se!==F.__cacheKey){le[se]===void 0&&(le[se]={texture:i.createTexture(),usedTimes:0},l.memory.textures++,J=!0),le[se].usedTimes++;const Oe=le[F.__cacheKey];Oe!==void 0&&(le[F.__cacheKey].usedTimes--,Oe.usedTimes===0&&D(A)),F.__cacheKey=se,F.__webglTexture=le[se].texture}return J}function ne(F,A,J){let de=i.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(de=i.TEXTURE_2D_ARRAY),A.isData3DTexture&&(de=i.TEXTURE_3D);const le=pt(F,A),se=A.source;t.bindTexture(de,F.__webglTexture,i.TEXTURE0+J);const Oe=n.get(se);if(se.version!==Oe.__version||le===!0){t.activeTexture(i.TEXTURE0+J);const Ce=vt.getPrimaries(vt.workingColorSpace),Le=A.colorSpace===ii?null:vt.getPrimaries(A.colorSpace),ut=A.colorSpace===ii||Ce===Le?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ut);let ye=C(A.image,!1,s.maxTextureSize);ye=mt(A,ye);const Fe=o.convert(A.format,A.colorSpace),$e=o.convert(A.type);let qe=L(A.internalFormat,Fe,$e,A.colorSpace,A.isVideoTexture);Qe(de,A);let Ue;const st=A.mipmaps,Je=A.isVideoTexture!==!0,yt=Oe.__version===void 0||le===!0,B=se.dataReady,be=G(A,ye);if(A.isDepthTexture)qe=I(A.format===nr,A.type),yt&&(Je?t.texStorage2D(i.TEXTURE_2D,1,qe,ye.width,ye.height):t.texImage2D(i.TEXTURE_2D,0,qe,ye.width,ye.height,0,Fe,$e,null));else if(A.isDataTexture)if(st.length>0){Je&&yt&&t.texStorage2D(i.TEXTURE_2D,be,qe,st[0].width,st[0].height);for(let ie=0,he=st.length;ie<he;ie++)Ue=st[ie],Je?B&&t.texSubImage2D(i.TEXTURE_2D,ie,0,0,Ue.width,Ue.height,Fe,$e,Ue.data):t.texImage2D(i.TEXTURE_2D,ie,qe,Ue.width,Ue.height,0,Fe,$e,Ue.data);A.generateMipmaps=!1}else Je?(yt&&t.texStorage2D(i.TEXTURE_2D,be,qe,ye.width,ye.height),B&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ye.width,ye.height,Fe,$e,ye.data)):t.texImage2D(i.TEXTURE_2D,0,qe,ye.width,ye.height,0,Fe,$e,ye.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){Je&&yt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,be,qe,st[0].width,st[0].height,ye.depth);for(let ie=0,he=st.length;ie<he;ie++)if(Ue=st[ie],A.format!==En)if(Fe!==null)if(Je){if(B)if(A.layerUpdates.size>0){const q=Gl(Ue.width,Ue.height,A.format,A.type);for(const Y of A.layerUpdates){const je=Ue.data.subarray(Y*q/Ue.data.BYTES_PER_ELEMENT,(Y+1)*q/Ue.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ie,0,0,Y,Ue.width,Ue.height,1,Fe,je)}A.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ie,0,0,0,Ue.width,Ue.height,ye.depth,Fe,Ue.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ie,qe,Ue.width,Ue.height,ye.depth,0,Ue.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Je?B&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ie,0,0,0,Ue.width,Ue.height,ye.depth,Fe,$e,Ue.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ie,qe,Ue.width,Ue.height,ye.depth,0,Fe,$e,Ue.data)}else{Je&&yt&&t.texStorage2D(i.TEXTURE_2D,be,qe,st[0].width,st[0].height);for(let ie=0,he=st.length;ie<he;ie++)Ue=st[ie],A.format!==En?Fe!==null?Je?B&&t.compressedTexSubImage2D(i.TEXTURE_2D,ie,0,0,Ue.width,Ue.height,Fe,Ue.data):t.compressedTexImage2D(i.TEXTURE_2D,ie,qe,Ue.width,Ue.height,0,Ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Je?B&&t.texSubImage2D(i.TEXTURE_2D,ie,0,0,Ue.width,Ue.height,Fe,$e,Ue.data):t.texImage2D(i.TEXTURE_2D,ie,qe,Ue.width,Ue.height,0,Fe,$e,Ue.data)}else if(A.isDataArrayTexture)if(Je){if(yt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,be,qe,ye.width,ye.height,ye.depth),B)if(A.layerUpdates.size>0){const ie=Gl(ye.width,ye.height,A.format,A.type);for(const he of A.layerUpdates){const q=ye.data.subarray(he*ie/ye.data.BYTES_PER_ELEMENT,(he+1)*ie/ye.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,he,ye.width,ye.height,1,Fe,$e,q)}A.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ye.width,ye.height,ye.depth,Fe,$e,ye.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,qe,ye.width,ye.height,ye.depth,0,Fe,$e,ye.data);else if(A.isData3DTexture)Je?(yt&&t.texStorage3D(i.TEXTURE_3D,be,qe,ye.width,ye.height,ye.depth),B&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ye.width,ye.height,ye.depth,Fe,$e,ye.data)):t.texImage3D(i.TEXTURE_3D,0,qe,ye.width,ye.height,ye.depth,0,Fe,$e,ye.data);else if(A.isFramebufferTexture){if(yt)if(Je)t.texStorage2D(i.TEXTURE_2D,be,qe,ye.width,ye.height);else{let ie=ye.width,he=ye.height;for(let q=0;q<be;q++)t.texImage2D(i.TEXTURE_2D,q,qe,ie,he,0,Fe,$e,null),ie>>=1,he>>=1}}else if(st.length>0){if(Je&&yt){const ie=He(st[0]);t.texStorage2D(i.TEXTURE_2D,be,qe,ie.width,ie.height)}for(let ie=0,he=st.length;ie<he;ie++)Ue=st[ie],Je?B&&t.texSubImage2D(i.TEXTURE_2D,ie,0,0,Fe,$e,Ue):t.texImage2D(i.TEXTURE_2D,ie,qe,Fe,$e,Ue);A.generateMipmaps=!1}else if(Je){if(yt){const ie=He(ye);t.texStorage2D(i.TEXTURE_2D,be,qe,ie.width,ie.height)}B&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Fe,$e,ye)}else t.texImage2D(i.TEXTURE_2D,0,qe,Fe,$e,ye);S(A)&&_(de),Oe.__version=se.version,A.onUpdate&&A.onUpdate(A)}F.__version=A.version}function _e(F,A,J){if(A.image.length!==6)return;const de=pt(F,A),le=A.source;t.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+J);const se=n.get(le);if(le.version!==se.__version||de===!0){t.activeTexture(i.TEXTURE0+J);const Oe=vt.getPrimaries(vt.workingColorSpace),Ce=A.colorSpace===ii?null:vt.getPrimaries(A.colorSpace),Le=A.colorSpace===ii||Oe===Ce?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,A.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,A.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le);const ut=A.isCompressedTexture||A.image[0].isCompressedTexture,ye=A.image[0]&&A.image[0].isDataTexture,Fe=[];for(let he=0;he<6;he++)!ut&&!ye?Fe[he]=C(A.image[he],!0,s.maxCubemapSize):Fe[he]=ye?A.image[he].image:A.image[he],Fe[he]=mt(A,Fe[he]);const $e=Fe[0],qe=o.convert(A.format,A.colorSpace),Ue=o.convert(A.type),st=L(A.internalFormat,qe,Ue,A.colorSpace),Je=A.isVideoTexture!==!0,yt=se.__version===void 0||de===!0,B=le.dataReady;let be=G(A,$e);Qe(i.TEXTURE_CUBE_MAP,A);let ie;if(ut){Je&&yt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,be,st,$e.width,$e.height);for(let he=0;he<6;he++){ie=Fe[he].mipmaps;for(let q=0;q<ie.length;q++){const Y=ie[q];A.format!==En?qe!==null?Je?B&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,q,0,0,Y.width,Y.height,qe,Y.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,q,st,Y.width,Y.height,0,Y.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Je?B&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,q,0,0,Y.width,Y.height,qe,Ue,Y.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,q,st,Y.width,Y.height,0,qe,Ue,Y.data)}}}else{if(ie=A.mipmaps,Je&&yt){ie.length>0&&be++;const he=He(Fe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,be,st,he.width,he.height)}for(let he=0;he<6;he++)if(ye){Je?B&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,Fe[he].width,Fe[he].height,qe,Ue,Fe[he].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,st,Fe[he].width,Fe[he].height,0,qe,Ue,Fe[he].data);for(let q=0;q<ie.length;q++){const je=ie[q].image[he].image;Je?B&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,q+1,0,0,je.width,je.height,qe,Ue,je.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,q+1,st,je.width,je.height,0,qe,Ue,je.data)}}else{Je?B&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,qe,Ue,Fe[he]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,st,qe,Ue,Fe[he]);for(let q=0;q<ie.length;q++){const Y=ie[q];Je?B&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,q+1,0,0,qe,Ue,Y.image[he]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+he,q+1,st,qe,Ue,Y.image[he])}}}S(A)&&_(i.TEXTURE_CUBE_MAP),se.__version=le.version,A.onUpdate&&A.onUpdate(A)}F.__version=A.version}function De(F,A,J,de,le,se){const Oe=o.convert(J.format,J.colorSpace),Ce=o.convert(J.type),Le=L(J.internalFormat,Oe,Ce,J.colorSpace),ut=n.get(A),ye=n.get(J);if(ye.__renderTarget=A,!ut.__hasExternalTextures){const Fe=Math.max(1,A.width>>se),$e=Math.max(1,A.height>>se);le===i.TEXTURE_3D||le===i.TEXTURE_2D_ARRAY?t.texImage3D(le,se,Le,Fe,$e,A.depth,0,Oe,Ce,null):t.texImage2D(le,se,Le,Fe,$e,0,Oe,Ce,null)}t.bindFramebuffer(i.FRAMEBUFFER,F),ct(A)?u.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,de,le,ye.__webglTexture,0,ot(A)):(le===i.TEXTURE_2D||le>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&le<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,de,le,ye.__webglTexture,se),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ee(F,A,J){if(i.bindRenderbuffer(i.RENDERBUFFER,F),A.depthBuffer){const de=A.depthTexture,le=de&&de.isDepthTexture?de.type:null,se=I(A.stencilBuffer,le),Oe=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ce=ot(A);ct(A)?u.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ce,se,A.width,A.height):J?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ce,se,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,se,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Oe,i.RENDERBUFFER,F)}else{const de=A.textures;for(let le=0;le<de.length;le++){const se=de[le],Oe=o.convert(se.format,se.colorSpace),Ce=o.convert(se.type),Le=L(se.internalFormat,Oe,Ce,se.colorSpace),ut=ot(A);J&&ct(A)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ut,Le,A.width,A.height):ct(A)?u.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ut,Le,A.width,A.height):i.renderbufferStorage(i.RENDERBUFFER,Le,A.width,A.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function fe(F,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,F),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const de=n.get(A.depthTexture);de.__renderTarget=A,(!de.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),pe(A.depthTexture,0);const le=de.__webglTexture,se=ot(A);if(A.depthTexture.format===Zi)ct(A)?u.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,le,0,se):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,le,0);else if(A.depthTexture.format===nr)ct(A)?u.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,le,0,se):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,le,0);else throw new Error("Unknown depthTexture format")}function Me(F){const A=n.get(F),J=F.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==F.depthTexture){const de=F.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),de){const le=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,de.removeEventListener("dispose",le)};de.addEventListener("dispose",le),A.__depthDisposeCallback=le}A.__boundDepthTexture=de}if(F.depthTexture&&!A.__autoAllocateDepthBuffer){if(J)throw new Error("target.depthTexture not supported in Cube render targets");fe(A.__webglFramebuffer,F)}else if(J){A.__webglDepthbuffer=[];for(let de=0;de<6;de++)if(t.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer[de]),A.__webglDepthbuffer[de]===void 0)A.__webglDepthbuffer[de]=i.createRenderbuffer(),Ee(A.__webglDepthbuffer[de],F,!1);else{const le=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,se=A.__webglDepthbuffer[de];i.bindRenderbuffer(i.RENDERBUFFER,se),i.framebufferRenderbuffer(i.FRAMEBUFFER,le,i.RENDERBUFFER,se)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=i.createRenderbuffer(),Ee(A.__webglDepthbuffer,F,!1);else{const de=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,le=A.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,le),i.framebufferRenderbuffer(i.FRAMEBUFFER,de,i.RENDERBUFFER,le)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function tt(F,A,J){const de=n.get(F);A!==void 0&&De(de.__webglFramebuffer,F,F.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),J!==void 0&&Me(F)}function Et(F){const A=F.texture,J=n.get(F),de=n.get(A);F.addEventListener("dispose",O);const le=F.textures,se=F.isWebGLCubeRenderTarget===!0,Oe=le.length>1;if(Oe||(de.__webglTexture===void 0&&(de.__webglTexture=i.createTexture()),de.__version=A.version,l.memory.textures++),se){J.__webglFramebuffer=[];for(let Ce=0;Ce<6;Ce++)if(A.mipmaps&&A.mipmaps.length>0){J.__webglFramebuffer[Ce]=[];for(let Le=0;Le<A.mipmaps.length;Le++)J.__webglFramebuffer[Ce][Le]=i.createFramebuffer()}else J.__webglFramebuffer[Ce]=i.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){J.__webglFramebuffer=[];for(let Ce=0;Ce<A.mipmaps.length;Ce++)J.__webglFramebuffer[Ce]=i.createFramebuffer()}else J.__webglFramebuffer=i.createFramebuffer();if(Oe)for(let Ce=0,Le=le.length;Ce<Le;Ce++){const ut=n.get(le[Ce]);ut.__webglTexture===void 0&&(ut.__webglTexture=i.createTexture(),l.memory.textures++)}if(F.samples>0&&ct(F)===!1){J.__webglMultisampledFramebuffer=i.createFramebuffer(),J.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let Ce=0;Ce<le.length;Ce++){const Le=le[Ce];J.__webglColorRenderbuffer[Ce]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,J.__webglColorRenderbuffer[Ce]);const ut=o.convert(Le.format,Le.colorSpace),ye=o.convert(Le.type),Fe=L(Le.internalFormat,ut,ye,Le.colorSpace,F.isXRRenderTarget===!0),$e=ot(F);i.renderbufferStorageMultisample(i.RENDERBUFFER,$e,Fe,F.width,F.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ce,i.RENDERBUFFER,J.__webglColorRenderbuffer[Ce])}i.bindRenderbuffer(i.RENDERBUFFER,null),F.depthBuffer&&(J.__webglDepthRenderbuffer=i.createRenderbuffer(),Ee(J.__webglDepthRenderbuffer,F,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(se){t.bindTexture(i.TEXTURE_CUBE_MAP,de.__webglTexture),Qe(i.TEXTURE_CUBE_MAP,A);for(let Ce=0;Ce<6;Ce++)if(A.mipmaps&&A.mipmaps.length>0)for(let Le=0;Le<A.mipmaps.length;Le++)De(J.__webglFramebuffer[Ce][Le],F,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,Le);else De(J.__webglFramebuffer[Ce],F,A,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0);S(A)&&_(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Oe){for(let Ce=0,Le=le.length;Ce<Le;Ce++){const ut=le[Ce],ye=n.get(ut);t.bindTexture(i.TEXTURE_2D,ye.__webglTexture),Qe(i.TEXTURE_2D,ut),De(J.__webglFramebuffer,F,ut,i.COLOR_ATTACHMENT0+Ce,i.TEXTURE_2D,0),S(ut)&&_(i.TEXTURE_2D)}t.unbindTexture()}else{let Ce=i.TEXTURE_2D;if((F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(Ce=F.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Ce,de.__webglTexture),Qe(Ce,A),A.mipmaps&&A.mipmaps.length>0)for(let Le=0;Le<A.mipmaps.length;Le++)De(J.__webglFramebuffer[Le],F,A,i.COLOR_ATTACHMENT0,Ce,Le);else De(J.__webglFramebuffer,F,A,i.COLOR_ATTACHMENT0,Ce,0);S(A)&&_(Ce),t.unbindTexture()}F.depthBuffer&&Me(F)}function Ze(F){const A=F.textures;for(let J=0,de=A.length;J<de;J++){const le=A[J];if(S(le)){const se=N(F),Oe=n.get(le).__webglTexture;t.bindTexture(se,Oe),_(se),t.unbindTexture()}}}const Ct=[],H=[];function qt(F){if(F.samples>0){if(ct(F)===!1){const A=F.textures,J=F.width,de=F.height;let le=i.COLOR_BUFFER_BIT;const se=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Oe=n.get(F),Ce=A.length>1;if(Ce)for(let Le=0;Le<A.length;Le++)t.bindFramebuffer(i.FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Le,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Oe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Le,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Oe.__webglFramebuffer);for(let Le=0;Le<A.length;Le++){if(F.resolveDepthBuffer&&(F.depthBuffer&&(le|=i.DEPTH_BUFFER_BIT),F.stencilBuffer&&F.resolveStencilBuffer&&(le|=i.STENCIL_BUFFER_BIT)),Ce){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Oe.__webglColorRenderbuffer[Le]);const ut=n.get(A[Le]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ut,0)}i.blitFramebuffer(0,0,J,de,0,0,J,de,le,i.NEAREST),d===!0&&(Ct.length=0,H.length=0,Ct.push(i.COLOR_ATTACHMENT0+Le),F.depthBuffer&&F.resolveDepthBuffer===!1&&(Ct.push(se),H.push(se),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,H)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ct))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Ce)for(let Le=0;Le<A.length;Le++){t.bindFramebuffer(i.FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Le,i.RENDERBUFFER,Oe.__webglColorRenderbuffer[Le]);const ut=n.get(A[Le]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Oe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Le,i.TEXTURE_2D,ut,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Oe.__webglMultisampledFramebuffer)}else if(F.depthBuffer&&F.resolveDepthBuffer===!1&&d){const A=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[A])}}}function ot(F){return Math.min(s.maxSamples,F.samples)}function ct(F){const A=n.get(F);return F.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function We(F){const A=l.render.frame;m.get(F)!==A&&(m.set(F,A),F.update())}function mt(F,A){const J=F.colorSpace,de=F.format,le=F.type;return F.isCompressedTexture===!0||F.isVideoTexture===!0||J!==rr&&J!==ii&&(vt.getTransfer(J)===Mt?(de!==En||le!==qn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",J)),A}function He(F){return typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement?(f.width=F.naturalWidth||F.width,f.height=F.naturalHeight||F.height):typeof VideoFrame<"u"&&F instanceof VideoFrame?(f.width=F.displayWidth,f.height=F.displayHeight):(f.width=F.width,f.height=F.height),f}this.allocateTextureUnit=K,this.resetTextureUnits=te,this.setTexture2D=pe,this.setTexture2DArray=ae,this.setTexture3D=Se,this.setTextureCube=re,this.rebindTextures=tt,this.setupRenderTarget=Et,this.updateRenderTargetMipmap=Ze,this.updateMultisampleRenderTarget=qt,this.setupDepthRenderbuffer=Me,this.setupFrameBufferTexture=De,this.useMultisampledRTT=ct}function BS(i,e){function t(n,s=ii){let o;const l=vt.getTransfer(s);if(n===qn)return i.UNSIGNED_BYTE;if(n===No)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Oo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===gu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===mu)return i.BYTE;if(n===_u)return i.SHORT;if(n===wr)return i.UNSIGNED_SHORT;if(n===Uo)return i.INT;if(n===Ri)return i.UNSIGNED_INT;if(n===$n)return i.FLOAT;if(n===br)return i.HALF_FLOAT;if(n===vu)return i.ALPHA;if(n===xu)return i.RGB;if(n===En)return i.RGBA;if(n===yu)return i.LUMINANCE;if(n===Su)return i.LUMINANCE_ALPHA;if(n===Zi)return i.DEPTH_COMPONENT;if(n===nr)return i.DEPTH_STENCIL;if(n===Mu)return i.RED;if(n===ko)return i.RED_INTEGER;if(n===Eu)return i.RG;if(n===Bo)return i.RG_INTEGER;if(n===zo)return i.RGBA_INTEGER;if(n===Cs||n===Rs||n===Ps||n===Is)if(l===Mt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===Cs)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Rs)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ps)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Is)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===Cs)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Rs)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ps)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Is)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ro||n===so||n===ao||n===oo)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===ro)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===so)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ao)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===oo)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===co||n===lo||n===uo)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(n===co||n===lo)return l===Mt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===uo)return l===Mt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ho||n===fo||n===po||n===mo||n===_o||n===go||n===vo||n===xo||n===yo||n===So||n===Mo||n===Eo||n===wo||n===bo)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(n===ho)return l===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===fo)return l===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===po)return l===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===mo)return l===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===_o)return l===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===go)return l===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===vo)return l===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===xo)return l===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===yo)return l===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===So)return l===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Mo)return l===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Eo)return l===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===wo)return l===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===bo)return l===Mt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ds||n===To||n===Ao)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(n===Ds)return l===Mt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===To)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ao)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===wu||n===Co||n===Ro||n===Po)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(n===Ds)return o.COMPRESSED_RED_RGTC1_EXT;if(n===Co)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ro)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Po)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===tr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class zS extends dn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ys extends Gt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const GS={type:"move"};class Oa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ys,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ys,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ys,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,o=null,l=null;const u=this._targetRay,d=this._grip,f=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(f&&e.hand){l=!0;for(const C of e.hand.values()){const S=t.getJointPose(C,n),_=this._getHandJoint(f,C);S!==null&&(_.matrix.fromArray(S.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=S.radius),_.visible=S!==null}const m=f.joints["index-finger-tip"],g=f.joints["thumb-tip"],v=m.position.distanceTo(g.position),y=.02,T=.005;f.inputState.pinching&&v>y+T?(f.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!f.inputState.pinching&&v<=y-T&&(f.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,n),o!==null&&(d.matrix.fromArray(o.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,o.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(o.linearVelocity)):d.hasLinearVelocity=!1,o.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(o.angularVelocity)):d.hasAngularVelocity=!1));u!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&o!==null&&(s=o),s!==null&&(u.matrix.fromArray(s.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,s.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(s.linearVelocity)):u.hasLinearVelocity=!1,s.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(s.angularVelocity)):u.hasAngularVelocity=!1,this.dispatchEvent(GS)))}return u!==null&&(u.visible=s!==null),d!==null&&(d.visible=o!==null),f!==null&&(f.visible=l!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ys;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const HS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,VS=`
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

}`;class WS{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const s=new rn,o=e.properties.get(s);o.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new oi({vertexShader:HS,fragmentShader:VS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ln(new Rr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class XS extends sr{constructor(e,t){super();const n=this;let s=null,o=1,l=null,u="local-floor",d=1,f=null,m=null,g=null,v=null,y=null,T=null;const C=new WS,S=t.getContextAttributes();let _=null,N=null;const L=[],I=[],G=new ze;let R=null;const O=new dn;O.viewport=new Pt;const $=new dn;$.viewport=new Pt;const D=[O,$],E=new zS;let k=null,te=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let _e=L[ne];return _e===void 0&&(_e=new Oa,L[ne]=_e),_e.getTargetRaySpace()},this.getControllerGrip=function(ne){let _e=L[ne];return _e===void 0&&(_e=new Oa,L[ne]=_e),_e.getGripSpace()},this.getHand=function(ne){let _e=L[ne];return _e===void 0&&(_e=new Oa,L[ne]=_e),_e.getHandSpace()};function K(ne){const _e=I.indexOf(ne.inputSource);if(_e===-1)return;const De=L[_e];De!==void 0&&(De.update(ne.inputSource,ne.frame,f||l),De.dispatchEvent({type:ne.type,data:ne.inputSource}))}function ee(){s.removeEventListener("select",K),s.removeEventListener("selectstart",K),s.removeEventListener("selectend",K),s.removeEventListener("squeeze",K),s.removeEventListener("squeezestart",K),s.removeEventListener("squeezeend",K),s.removeEventListener("end",ee),s.removeEventListener("inputsourceschange",pe);for(let ne=0;ne<L.length;ne++){const _e=I[ne];_e!==null&&(I[ne]=null,L[ne].disconnect(_e))}k=null,te=null,C.reset(),e.setRenderTarget(_),y=null,v=null,g=null,s=null,N=null,pt.stop(),n.isPresenting=!1,e.setPixelRatio(R),e.setSize(G.width,G.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){o=ne,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){u=ne,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return f||l},this.setReferenceSpace=function(ne){f=ne},this.getBaseLayer=function(){return v!==null?v:y},this.getBinding=function(){return g},this.getFrame=function(){return T},this.getSession=function(){return s},this.setSession=async function(ne){if(s=ne,s!==null){if(_=e.getRenderTarget(),s.addEventListener("select",K),s.addEventListener("selectstart",K),s.addEventListener("selectend",K),s.addEventListener("squeeze",K),s.addEventListener("squeezestart",K),s.addEventListener("squeezeend",K),s.addEventListener("end",ee),s.addEventListener("inputsourceschange",pe),S.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(G),s.renderState.layers===void 0){const _e={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:o};y=new XRWebGLLayer(s,t,_e),s.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),N=new Pi(y.framebufferWidth,y.framebufferHeight,{format:En,type:qn,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil})}else{let _e=null,De=null,Ee=null;S.depth&&(Ee=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,_e=S.stencil?nr:Zi,De=S.stencil?tr:Ri);const fe={colorFormat:t.RGBA8,depthFormat:Ee,scaleFactor:o};g=new XRWebGLBinding(s,t),v=g.createProjectionLayer(fe),s.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),N=new Pi(v.textureWidth,v.textureHeight,{format:En,type:qn,depthTexture:new zu(v.textureWidth,v.textureHeight,De,void 0,void 0,void 0,void 0,void 0,void 0,_e),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1})}N.isXRRenderTarget=!0,this.setFoveation(d),f=null,l=await s.requestReferenceSpace(u),pt.setContext(s),pt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return C.getDepthTexture()};function pe(ne){for(let _e=0;_e<ne.removed.length;_e++){const De=ne.removed[_e],Ee=I.indexOf(De);Ee>=0&&(I[Ee]=null,L[Ee].disconnect(De))}for(let _e=0;_e<ne.added.length;_e++){const De=ne.added[_e];let Ee=I.indexOf(De);if(Ee===-1){for(let Me=0;Me<L.length;Me++)if(Me>=I.length){I.push(De),Ee=Me;break}else if(I[Me]===null){I[Me]=De,Ee=Me;break}if(Ee===-1)break}const fe=L[Ee];fe&&fe.connect(De)}}const ae=new z,Se=new z;function re(ne,_e,De){ae.setFromMatrixPosition(_e.matrixWorld),Se.setFromMatrixPosition(De.matrixWorld);const Ee=ae.distanceTo(Se),fe=_e.projectionMatrix.elements,Me=De.projectionMatrix.elements,tt=fe[14]/(fe[10]-1),Et=fe[14]/(fe[10]+1),Ze=(fe[9]+1)/fe[5],Ct=(fe[9]-1)/fe[5],H=(fe[8]-1)/fe[0],qt=(Me[8]+1)/Me[0],ot=tt*H,ct=tt*qt,We=Ee/(-H+qt),mt=We*-H;if(_e.matrixWorld.decompose(ne.position,ne.quaternion,ne.scale),ne.translateX(mt),ne.translateZ(We),ne.matrixWorld.compose(ne.position,ne.quaternion,ne.scale),ne.matrixWorldInverse.copy(ne.matrixWorld).invert(),fe[10]===-1)ne.projectionMatrix.copy(_e.projectionMatrix),ne.projectionMatrixInverse.copy(_e.projectionMatrixInverse);else{const He=tt+We,F=Et+We,A=ot-mt,J=ct+(Ee-mt),de=Ze*Et/F*He,le=Ct*Et/F*He;ne.projectionMatrix.makePerspective(A,J,de,le,He,F),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert()}}function Ae(ne,_e){_e===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(_e.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(s===null)return;let _e=ne.near,De=ne.far;C.texture!==null&&(C.depthNear>0&&(_e=C.depthNear),C.depthFar>0&&(De=C.depthFar)),E.near=$.near=O.near=_e,E.far=$.far=O.far=De,(k!==E.near||te!==E.far)&&(s.updateRenderState({depthNear:E.near,depthFar:E.far}),k=E.near,te=E.far),O.layers.mask=ne.layers.mask|2,$.layers.mask=ne.layers.mask|4,E.layers.mask=O.layers.mask|$.layers.mask;const Ee=ne.parent,fe=E.cameras;Ae(E,Ee);for(let Me=0;Me<fe.length;Me++)Ae(fe[Me],Ee);fe.length===2?re(E,O,$):E.projectionMatrix.copy(O.projectionMatrix),Pe(ne,E,Ee)};function Pe(ne,_e,De){De===null?ne.matrix.copy(_e.matrixWorld):(ne.matrix.copy(De.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(_e.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0),ne.projectionMatrix.copy(_e.projectionMatrix),ne.projectionMatrixInverse.copy(_e.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=Io*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(v===null&&y===null))return d},this.setFoveation=function(ne){d=ne,v!==null&&(v.fixedFoveation=ne),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=ne)},this.hasDepthSensing=function(){return C.texture!==null},this.getDepthSensingMesh=function(){return C.getMesh(E)};let Ge=null;function Qe(ne,_e){if(m=_e.getViewerPose(f||l),T=_e,m!==null){const De=m.views;y!==null&&(e.setRenderTargetFramebuffer(N,y.framebuffer),e.setRenderTarget(N));let Ee=!1;De.length!==E.cameras.length&&(E.cameras.length=0,Ee=!0);for(let Me=0;Me<De.length;Me++){const tt=De[Me];let Et=null;if(y!==null)Et=y.getViewport(tt);else{const Ct=g.getViewSubImage(v,tt);Et=Ct.viewport,Me===0&&(e.setRenderTargetTextures(N,Ct.colorTexture,v.ignoreDepthValues?void 0:Ct.depthStencilTexture),e.setRenderTarget(N))}let Ze=D[Me];Ze===void 0&&(Ze=new dn,Ze.layers.enable(Me),Ze.viewport=new Pt,D[Me]=Ze),Ze.matrix.fromArray(tt.transform.matrix),Ze.matrix.decompose(Ze.position,Ze.quaternion,Ze.scale),Ze.projectionMatrix.fromArray(tt.projectionMatrix),Ze.projectionMatrixInverse.copy(Ze.projectionMatrix).invert(),Ze.viewport.set(Et.x,Et.y,Et.width,Et.height),Me===0&&(E.matrix.copy(Ze.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),Ee===!0&&E.cameras.push(Ze)}const fe=s.enabledFeatures;if(fe&&fe.includes("depth-sensing")){const Me=g.getDepthInformation(De[0]);Me&&Me.isValid&&Me.texture&&C.init(e,Me,s.renderState)}}for(let De=0;De<L.length;De++){const Ee=I[De],fe=L[De];Ee!==null&&fe!==void 0&&fe.update(Ee,_e,f||l)}Ge&&Ge(ne,_e),_e.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:_e}),T=null}const pt=new Bu;pt.setAnimationLoop(Qe),this.setAnimationLoop=function(ne){Ge=ne},this.dispose=function(){}}}const Mi=new Fn,$S=new At;function jS(i,e){function t(S,_){S.matrixAutoUpdate===!0&&S.updateMatrix(),_.value.copy(S.matrix)}function n(S,_){_.color.getRGB(S.fogColor.value,Nu(i)),_.isFog?(S.fogNear.value=_.near,S.fogFar.value=_.far):_.isFogExp2&&(S.fogDensity.value=_.density)}function s(S,_,N,L,I){_.isMeshBasicMaterial||_.isMeshLambertMaterial?o(S,_):_.isMeshToonMaterial?(o(S,_),g(S,_)):_.isMeshPhongMaterial?(o(S,_),m(S,_)):_.isMeshStandardMaterial?(o(S,_),v(S,_),_.isMeshPhysicalMaterial&&y(S,_,I)):_.isMeshMatcapMaterial?(o(S,_),T(S,_)):_.isMeshDepthMaterial?o(S,_):_.isMeshDistanceMaterial?(o(S,_),C(S,_)):_.isMeshNormalMaterial?o(S,_):_.isLineBasicMaterial?(l(S,_),_.isLineDashedMaterial&&u(S,_)):_.isPointsMaterial?d(S,_,N,L):_.isSpriteMaterial?f(S,_):_.isShadowMaterial?(S.color.value.copy(_.color),S.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function o(S,_){S.opacity.value=_.opacity,_.color&&S.diffuse.value.copy(_.color),_.emissive&&S.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(S.map.value=_.map,t(_.map,S.mapTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,t(_.alphaMap,S.alphaMapTransform)),_.bumpMap&&(S.bumpMap.value=_.bumpMap,t(_.bumpMap,S.bumpMapTransform),S.bumpScale.value=_.bumpScale,_.side===nn&&(S.bumpScale.value*=-1)),_.normalMap&&(S.normalMap.value=_.normalMap,t(_.normalMap,S.normalMapTransform),S.normalScale.value.copy(_.normalScale),_.side===nn&&S.normalScale.value.negate()),_.displacementMap&&(S.displacementMap.value=_.displacementMap,t(_.displacementMap,S.displacementMapTransform),S.displacementScale.value=_.displacementScale,S.displacementBias.value=_.displacementBias),_.emissiveMap&&(S.emissiveMap.value=_.emissiveMap,t(_.emissiveMap,S.emissiveMapTransform)),_.specularMap&&(S.specularMap.value=_.specularMap,t(_.specularMap,S.specularMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest);const N=e.get(_),L=N.envMap,I=N.envMapRotation;L&&(S.envMap.value=L,Mi.copy(I),Mi.x*=-1,Mi.y*=-1,Mi.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Mi.y*=-1,Mi.z*=-1),S.envMapRotation.value.setFromMatrix4($S.makeRotationFromEuler(Mi)),S.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=_.reflectivity,S.ior.value=_.ior,S.refractionRatio.value=_.refractionRatio),_.lightMap&&(S.lightMap.value=_.lightMap,S.lightMapIntensity.value=_.lightMapIntensity,t(_.lightMap,S.lightMapTransform)),_.aoMap&&(S.aoMap.value=_.aoMap,S.aoMapIntensity.value=_.aoMapIntensity,t(_.aoMap,S.aoMapTransform))}function l(S,_){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,_.map&&(S.map.value=_.map,t(_.map,S.mapTransform))}function u(S,_){S.dashSize.value=_.dashSize,S.totalSize.value=_.dashSize+_.gapSize,S.scale.value=_.scale}function d(S,_,N,L){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,S.size.value=_.size*N,S.scale.value=L*.5,_.map&&(S.map.value=_.map,t(_.map,S.uvTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,t(_.alphaMap,S.alphaMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest)}function f(S,_){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,S.rotation.value=_.rotation,_.map&&(S.map.value=_.map,t(_.map,S.mapTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,t(_.alphaMap,S.alphaMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest)}function m(S,_){S.specular.value.copy(_.specular),S.shininess.value=Math.max(_.shininess,1e-4)}function g(S,_){_.gradientMap&&(S.gradientMap.value=_.gradientMap)}function v(S,_){S.metalness.value=_.metalness,_.metalnessMap&&(S.metalnessMap.value=_.metalnessMap,t(_.metalnessMap,S.metalnessMapTransform)),S.roughness.value=_.roughness,_.roughnessMap&&(S.roughnessMap.value=_.roughnessMap,t(_.roughnessMap,S.roughnessMapTransform)),_.envMap&&(S.envMapIntensity.value=_.envMapIntensity)}function y(S,_,N){S.ior.value=_.ior,_.sheen>0&&(S.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),S.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(S.sheenColorMap.value=_.sheenColorMap,t(_.sheenColorMap,S.sheenColorMapTransform)),_.sheenRoughnessMap&&(S.sheenRoughnessMap.value=_.sheenRoughnessMap,t(_.sheenRoughnessMap,S.sheenRoughnessMapTransform))),_.clearcoat>0&&(S.clearcoat.value=_.clearcoat,S.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(S.clearcoatMap.value=_.clearcoatMap,t(_.clearcoatMap,S.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,t(_.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(S.clearcoatNormalMap.value=_.clearcoatNormalMap,t(_.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===nn&&S.clearcoatNormalScale.value.negate())),_.dispersion>0&&(S.dispersion.value=_.dispersion),_.iridescence>0&&(S.iridescence.value=_.iridescence,S.iridescenceIOR.value=_.iridescenceIOR,S.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(S.iridescenceMap.value=_.iridescenceMap,t(_.iridescenceMap,S.iridescenceMapTransform)),_.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=_.iridescenceThicknessMap,t(_.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),_.transmission>0&&(S.transmission.value=_.transmission,S.transmissionSamplerMap.value=N.texture,S.transmissionSamplerSize.value.set(N.width,N.height),_.transmissionMap&&(S.transmissionMap.value=_.transmissionMap,t(_.transmissionMap,S.transmissionMapTransform)),S.thickness.value=_.thickness,_.thicknessMap&&(S.thicknessMap.value=_.thicknessMap,t(_.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=_.attenuationDistance,S.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(S.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(S.anisotropyMap.value=_.anisotropyMap,t(_.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=_.specularIntensity,S.specularColor.value.copy(_.specularColor),_.specularColorMap&&(S.specularColorMap.value=_.specularColorMap,t(_.specularColorMap,S.specularColorMapTransform)),_.specularIntensityMap&&(S.specularIntensityMap.value=_.specularIntensityMap,t(_.specularIntensityMap,S.specularIntensityMapTransform))}function T(S,_){_.matcap&&(S.matcap.value=_.matcap)}function C(S,_){const N=e.get(_).light;S.referencePosition.value.setFromMatrixPosition(N.matrixWorld),S.nearDistance.value=N.shadow.camera.near,S.farDistance.value=N.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function YS(i,e,t,n){let s={},o={},l=[];const u=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function d(N,L){const I=L.program;n.uniformBlockBinding(N,I)}function f(N,L){let I=s[N.id];I===void 0&&(T(N),I=m(N),s[N.id]=I,N.addEventListener("dispose",S));const G=L.program;n.updateUBOMapping(N,G);const R=e.render.frame;o[N.id]!==R&&(v(N),o[N.id]=R)}function m(N){const L=g();N.__bindingPointIndex=L;const I=i.createBuffer(),G=N.__size,R=N.usage;return i.bindBuffer(i.UNIFORM_BUFFER,I),i.bufferData(i.UNIFORM_BUFFER,G,R),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,L,I),I}function g(){for(let N=0;N<u;N++)if(l.indexOf(N)===-1)return l.push(N),N;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(N){const L=s[N.id],I=N.uniforms,G=N.__cache;i.bindBuffer(i.UNIFORM_BUFFER,L);for(let R=0,O=I.length;R<O;R++){const $=Array.isArray(I[R])?I[R]:[I[R]];for(let D=0,E=$.length;D<E;D++){const k=$[D];if(y(k,R,D,G)===!0){const te=k.__offset,K=Array.isArray(k.value)?k.value:[k.value];let ee=0;for(let pe=0;pe<K.length;pe++){const ae=K[pe],Se=C(ae);typeof ae=="number"||typeof ae=="boolean"?(k.__data[0]=ae,i.bufferSubData(i.UNIFORM_BUFFER,te+ee,k.__data)):ae.isMatrix3?(k.__data[0]=ae.elements[0],k.__data[1]=ae.elements[1],k.__data[2]=ae.elements[2],k.__data[3]=0,k.__data[4]=ae.elements[3],k.__data[5]=ae.elements[4],k.__data[6]=ae.elements[5],k.__data[7]=0,k.__data[8]=ae.elements[6],k.__data[9]=ae.elements[7],k.__data[10]=ae.elements[8],k.__data[11]=0):(ae.toArray(k.__data,ee),ee+=Se.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,te,k.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function y(N,L,I,G){const R=N.value,O=L+"_"+I;if(G[O]===void 0)return typeof R=="number"||typeof R=="boolean"?G[O]=R:G[O]=R.clone(),!0;{const $=G[O];if(typeof R=="number"||typeof R=="boolean"){if($!==R)return G[O]=R,!0}else if($.equals(R)===!1)return $.copy(R),!0}return!1}function T(N){const L=N.uniforms;let I=0;const G=16;for(let O=0,$=L.length;O<$;O++){const D=Array.isArray(L[O])?L[O]:[L[O]];for(let E=0,k=D.length;E<k;E++){const te=D[E],K=Array.isArray(te.value)?te.value:[te.value];for(let ee=0,pe=K.length;ee<pe;ee++){const ae=K[ee],Se=C(ae),re=I%G,Ae=re%Se.boundary,Pe=re+Ae;I+=Ae,Pe!==0&&G-Pe<Se.storage&&(I+=G-Pe),te.__data=new Float32Array(Se.storage/Float32Array.BYTES_PER_ELEMENT),te.__offset=I,I+=Se.storage}}}const R=I%G;return R>0&&(I+=G-R),N.__size=I,N.__cache={},this}function C(N){const L={boundary:0,storage:0};return typeof N=="number"||typeof N=="boolean"?(L.boundary=4,L.storage=4):N.isVector2?(L.boundary=8,L.storage=8):N.isVector3||N.isColor?(L.boundary=16,L.storage=12):N.isVector4?(L.boundary=16,L.storage=16):N.isMatrix3?(L.boundary=48,L.storage=48):N.isMatrix4?(L.boundary=64,L.storage=64):N.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",N),L}function S(N){const L=N.target;L.removeEventListener("dispose",S);const I=l.indexOf(L.__bindingPointIndex);l.splice(I,1),i.deleteBuffer(s[L.id]),delete s[L.id],delete o[L.id]}function _(){for(const N in s)i.deleteBuffer(s[N]);l=[],s={},o={}}return{bind:d,update:f,dispose:_}}class qS{constructor(e={}){const{canvas:t=Og(),context:n=null,depth:s=!0,stencil:o=!1,alpha:l=!1,antialias:u=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:f=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:g=!1,reverseDepthBuffer:v=!1}=e;this.isWebGLRenderer=!0;let y;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=n.getContextAttributes().alpha}else y=l;const T=new Uint32Array(4),C=new Int32Array(4);let S=null,_=null;const N=[],L=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=_n,this.toneMapping=si,this.toneMappingExposure=1;const I=this;let G=!1,R=0,O=0,$=null,D=-1,E=null;const k=new Pt,te=new Pt;let K=null;const ee=new at(0);let pe=0,ae=t.width,Se=t.height,re=1,Ae=null,Pe=null;const Ge=new Pt(0,0,ae,Se),Qe=new Pt(0,0,ae,Se);let pt=!1;const ne=new Go;let _e=!1,De=!1;const Ee=new At,fe=new At,Me=new z,tt=new Pt,Et={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ze=!1;function Ct(){return $===null?re:1}let H=n;function qt(P,V){return t.getContext(P,V)}try{const P={alpha:!0,depth:s,stencil:o,antialias:u,premultipliedAlpha:d,preserveDrawingBuffer:f,powerPreference:m,failIfMajorPerformanceCaveat:g};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Fo}`),t.addEventListener("webglcontextlost",he,!1),t.addEventListener("webglcontextrestored",q,!1),t.addEventListener("webglcontextcreationerror",Y,!1),H===null){const V="webgl2";if(H=qt(V,P),H===null)throw qt(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let ot,ct,We,mt,He,F,A,J,de,le,se,Oe,Ce,Le,ut,ye,Fe,$e,qe,Ue,st,Je,yt,B;function be(){ot=new ey(H),ot.init(),Je=new BS(H,ot),ct=new Yx(H,ot,e,Je),We=new NS(H,ot),ct.reverseDepthBuffer&&v&&We.buffers.depth.setReversed(!0),mt=new iy(H),He=new SS,F=new kS(H,ot,We,He,ct,Je,mt),A=new Zx(I),J=new Qx(I),de=new uv(H),yt=new $x(H,de),le=new ty(H,de,mt,yt),se=new sy(H,le,de,mt),qe=new ry(H,ct,F),ye=new qx(He),Oe=new yS(I,A,J,ot,ct,yt,ye),Ce=new jS(I,He),Le=new ES,ut=new RS(ot),$e=new Xx(I,A,J,We,se,y,d),Fe=new FS(I,se,ct),B=new YS(H,mt,ct,We),Ue=new jx(H,ot,mt),st=new ny(H,ot,mt),mt.programs=Oe.programs,I.capabilities=ct,I.extensions=ot,I.properties=He,I.renderLists=Le,I.shadowMap=Fe,I.state=We,I.info=mt}be();const ie=new XS(I,H);this.xr=ie,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const P=ot.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=ot.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return re},this.setPixelRatio=function(P){P!==void 0&&(re=P,this.setSize(ae,Se,!1))},this.getSize=function(P){return P.set(ae,Se)},this.setSize=function(P,V,j=!0){if(ie.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ae=P,Se=V,t.width=Math.floor(P*re),t.height=Math.floor(V*re),j===!0&&(t.style.width=P+"px",t.style.height=V+"px"),this.setViewport(0,0,P,V)},this.getDrawingBufferSize=function(P){return P.set(ae*re,Se*re).floor()},this.setDrawingBufferSize=function(P,V,j){ae=P,Se=V,re=j,t.width=Math.floor(P*j),t.height=Math.floor(V*j),this.setViewport(0,0,P,V)},this.getCurrentViewport=function(P){return P.copy(k)},this.getViewport=function(P){return P.copy(Ge)},this.setViewport=function(P,V,j,Q){P.isVector4?Ge.set(P.x,P.y,P.z,P.w):Ge.set(P,V,j,Q),We.viewport(k.copy(Ge).multiplyScalar(re).round())},this.getScissor=function(P){return P.copy(Qe)},this.setScissor=function(P,V,j,Q){P.isVector4?Qe.set(P.x,P.y,P.z,P.w):Qe.set(P,V,j,Q),We.scissor(te.copy(Qe).multiplyScalar(re).round())},this.getScissorTest=function(){return pt},this.setScissorTest=function(P){We.setScissorTest(pt=P)},this.setOpaqueSort=function(P){Ae=P},this.setTransparentSort=function(P){Pe=P},this.getClearColor=function(P){return P.copy($e.getClearColor())},this.setClearColor=function(){$e.setClearColor.apply($e,arguments)},this.getClearAlpha=function(){return $e.getClearAlpha()},this.setClearAlpha=function(){$e.setClearAlpha.apply($e,arguments)},this.clear=function(P=!0,V=!0,j=!0){let Q=0;if(P){let W=!1;if($!==null){const xe=$.texture.format;W=xe===zo||xe===Bo||xe===ko}if(W){const xe=$.texture.type,Te=xe===qn||xe===Ri||xe===wr||xe===tr||xe===No||xe===Oo,Ne=$e.getClearColor(),ke=$e.getClearAlpha(),Ye=Ne.r,Ke=Ne.g,Ie=Ne.b;Te?(T[0]=Ye,T[1]=Ke,T[2]=Ie,T[3]=ke,H.clearBufferuiv(H.COLOR,0,T)):(C[0]=Ye,C[1]=Ke,C[2]=Ie,C[3]=ke,H.clearBufferiv(H.COLOR,0,C))}else Q|=H.COLOR_BUFFER_BIT}V&&(Q|=H.DEPTH_BUFFER_BIT),j&&(Q|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",he,!1),t.removeEventListener("webglcontextrestored",q,!1),t.removeEventListener("webglcontextcreationerror",Y,!1),Le.dispose(),ut.dispose(),He.dispose(),A.dispose(),J.dispose(),se.dispose(),yt.dispose(),B.dispose(),Oe.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",ci),ie.removeEventListener("sessionend",Pr),Nn.stop()};function he(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),G=!0}function q(){console.log("THREE.WebGLRenderer: Context Restored."),G=!1;const P=mt.autoReset,V=Fe.enabled,j=Fe.autoUpdate,Q=Fe.needsUpdate,W=Fe.type;be(),mt.autoReset=P,Fe.enabled=V,Fe.autoUpdate=j,Fe.needsUpdate=Q,Fe.type=W}function Y(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function je(P){const V=P.target;V.removeEventListener("dispose",je),Tt(V)}function Tt(P){Rt(P),He.remove(P)}function Rt(P){const V=He.get(P).programs;V!==void 0&&(V.forEach(function(j){Oe.releaseProgram(j)}),P.isShaderMaterial&&Oe.releaseShaderCache(P))}this.renderBufferDirect=function(P,V,j,Q,W,xe){V===null&&(V=Et);const Te=W.isMesh&&W.matrixWorld.determinant()<0,Ne=Fr(P,V,j,Q,W);We.setMaterial(Q,Te);let ke=j.index,Ye=1;if(Q.wireframe===!0){if(ke=le.getWireframeAttribute(j),ke===void 0)return;Ye=2}const Ke=j.drawRange,Ie=j.attributes.position;let ht=Ke.start*Ye,Re=(Ke.start+Ke.count)*Ye;xe!==null&&(ht=Math.max(ht,xe.start*Ye),Re=Math.min(Re,(xe.start+xe.count)*Ye)),ke!==null?(ht=Math.max(ht,0),Re=Math.min(Re,ke.count)):Ie!=null&&(ht=Math.max(ht,0),Re=Math.min(Re,Ie.count));const wt=Re-ht;if(wt<0||wt===1/0)return;yt.setup(W,Q,Ne,j,ke);let Ht,xt=Ue;if(ke!==null&&(Ht=de.get(ke),xt=st,xt.setIndex(Ht)),W.isMesh)Q.wireframe===!0?(We.setLineWidth(Q.wireframeLinewidth*Ct()),xt.setMode(H.LINES)):xt.setMode(H.TRIANGLES);else if(W.isLine){let Be=Q.linewidth;Be===void 0&&(Be=1),We.setLineWidth(Be*Ct()),W.isLineSegments?xt.setMode(H.LINES):W.isLineLoop?xt.setMode(H.LINE_LOOP):xt.setMode(H.LINE_STRIP)}else W.isPoints?xt.setMode(H.POINTS):W.isSprite&&xt.setMode(H.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)xt.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(ot.get("WEBGL_multi_draw"))xt.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const Be=W._multiDrawStarts,gn=W._multiDrawCounts,_t=W._multiDrawCount,cn=ke?de.get(ke).bytesPerElement:1,bn=He.get(Q).currentProgram.getUniforms();for(let Zt=0;Zt<_t;Zt++)bn.setValue(H,"_gl_DrawID",Zt),xt.render(Be[Zt]/cn,gn[Zt])}else if(W.isInstancedMesh)xt.renderInstances(ht,wt,W.count);else if(j.isInstancedBufferGeometry){const Be=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,gn=Math.min(j.instanceCount,Be);xt.renderInstances(ht,wt,gn)}else xt.render(ht,wt)};function rt(P,V,j){P.transparent===!0&&P.side===Xn&&P.forceSinglePass===!1?(P.side=nn,P.needsUpdate=!0,Di(P,V,j),P.side=ai,P.needsUpdate=!0,Di(P,V,j),P.side=Xn):Di(P,V,j)}this.compile=function(P,V,j=null){j===null&&(j=P),_=ut.get(j),_.init(V),L.push(_),j.traverseVisible(function(W){W.isLight&&W.layers.test(V.layers)&&(_.pushLight(W),W.castShadow&&_.pushShadow(W))}),P!==j&&P.traverseVisible(function(W){W.isLight&&W.layers.test(V.layers)&&(_.pushLight(W),W.castShadow&&_.pushShadow(W))}),_.setupLights();const Q=new Set;return P.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const xe=W.material;if(xe)if(Array.isArray(xe))for(let Te=0;Te<xe.length;Te++){const Ne=xe[Te];rt(Ne,j,W),Q.add(Ne)}else rt(xe,j,W),Q.add(xe)}),L.pop(),_=null,Q},this.compileAsync=function(P,V,j=null){const Q=this.compile(P,V,j);return new Promise(W=>{function xe(){if(Q.forEach(function(Te){He.get(Te).currentProgram.isReady()&&Q.delete(Te)}),Q.size===0){W(P);return}setTimeout(xe,10)}ot.get("KHR_parallel_shader_compile")!==null?xe():setTimeout(xe,10)})};let an=null;function Lt(P){an&&an(P)}function ci(){Nn.stop()}function Pr(){Nn.start()}const Nn=new Bu;Nn.setAnimationLoop(Lt),typeof self<"u"&&Nn.setContext(self),this.setAnimationLoop=function(P){an=P,ie.setAnimationLoop(P),P===null?Nn.stop():Nn.start()},ie.addEventListener("sessionstart",ci),ie.addEventListener("sessionend",Pr),this.render=function(P,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),ie.enabled===!0&&ie.isPresenting===!0&&(ie.cameraAutoUpdate===!0&&ie.updateCamera(V),V=ie.getCamera()),P.isScene===!0&&P.onBeforeRender(I,P,V,$),_=ut.get(P,L.length),_.init(V),L.push(_),fe.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),ne.setFromProjectionMatrix(fe),De=this.localClippingEnabled,_e=ye.init(this.clippingPlanes,De),S=Le.get(P,N.length),S.init(),N.push(S),ie.enabled===!0&&ie.isPresenting===!0){const xe=I.xr.getDepthSensingMesh();xe!==null&&on(xe,V,-1/0,I.sortObjects)}on(P,V,0,I.sortObjects),S.finish(),I.sortObjects===!0&&S.sort(Ae,Pe),Ze=ie.enabled===!1||ie.isPresenting===!1||ie.hasDepthSensing()===!1,Ze&&$e.addToRenderList(S,P),this.info.render.frame++,_e===!0&&ye.beginShadows();const j=_.state.shadowsArray;Fe.render(j,P,V),_e===!0&&ye.endShadows(),this.info.autoReset===!0&&this.info.reset();const Q=S.opaque,W=S.transmissive;if(_.setupLights(),V.isArrayCamera){const xe=V.cameras;if(W.length>0)for(let Te=0,Ne=xe.length;Te<Ne;Te++){const ke=xe[Te];li(Q,W,P,ke)}Ze&&$e.render(P);for(let Te=0,Ne=xe.length;Te<Ne;Te++){const ke=xe[Te];Ir(S,P,ke,ke.viewport)}}else W.length>0&&li(Q,W,P,V),Ze&&$e.render(P),Ir(S,P,V);$!==null&&(F.updateMultisampleRenderTarget($),F.updateRenderTargetMipmap($)),P.isScene===!0&&P.onAfterRender(I,P,V),yt.resetDefaultState(),D=-1,E=null,L.pop(),L.length>0?(_=L[L.length-1],_e===!0&&ye.setGlobalState(I.clippingPlanes,_.state.camera)):_=null,N.pop(),N.length>0?S=N[N.length-1]:S=null};function on(P,V,j,Q){if(P.visible===!1)return;if(P.layers.test(V.layers)){if(P.isGroup)j=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(V);else if(P.isLight)_.pushLight(P),P.castShadow&&_.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||ne.intersectsSprite(P)){Q&&tt.setFromMatrixPosition(P.matrixWorld).applyMatrix4(fe);const Te=se.update(P),Ne=P.material;Ne.visible&&S.push(P,Te,Ne,j,tt.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||ne.intersectsObject(P))){const Te=se.update(P),Ne=P.material;if(Q&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),tt.copy(P.boundingSphere.center)):(Te.boundingSphere===null&&Te.computeBoundingSphere(),tt.copy(Te.boundingSphere.center)),tt.applyMatrix4(P.matrixWorld).applyMatrix4(fe)),Array.isArray(Ne)){const ke=Te.groups;for(let Ye=0,Ke=ke.length;Ye<Ke;Ye++){const Ie=ke[Ye],ht=Ne[Ie.materialIndex];ht&&ht.visible&&S.push(P,Te,ht,j,tt.z,Ie)}}else Ne.visible&&S.push(P,Te,Ne,j,tt.z,null)}}const xe=P.children;for(let Te=0,Ne=xe.length;Te<Ne;Te++)on(xe[Te],V,j,Q)}function Ir(P,V,j,Q){const W=P.opaque,xe=P.transmissive,Te=P.transparent;_.setupLightsView(j),_e===!0&&ye.setGlobalState(I.clippingPlanes,j),Q&&We.viewport(k.copy(Q)),W.length>0&&On(W,V,j),xe.length>0&&On(xe,V,j),Te.length>0&&On(Te,V,j),We.buffers.depth.setTest(!0),We.buffers.depth.setMask(!0),We.buffers.color.setMask(!0),We.setPolygonOffset(!1)}function li(P,V,j,Q){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[Q.id]===void 0&&(_.state.transmissionRenderTarget[Q.id]=new Pi(1,1,{generateMipmaps:!0,type:ot.has("EXT_color_buffer_half_float")||ot.has("EXT_color_buffer_float")?br:qn,minFilter:Ci,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:vt.workingColorSpace}));const xe=_.state.transmissionRenderTarget[Q.id],Te=Q.viewport||k;xe.setSize(Te.z,Te.w);const Ne=I.getRenderTarget();I.setRenderTarget(xe),I.getClearColor(ee),pe=I.getClearAlpha(),pe<1&&I.setClearColor(16777215,.5),I.clear(),Ze&&$e.render(j);const ke=I.toneMapping;I.toneMapping=si;const Ye=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),_.setupLightsView(Q),_e===!0&&ye.setGlobalState(I.clippingPlanes,Q),On(P,j,Q),F.updateMultisampleRenderTarget(xe),F.updateRenderTargetMipmap(xe),ot.has("WEBGL_multisampled_render_to_texture")===!1){let Ke=!1;for(let Ie=0,ht=V.length;Ie<ht;Ie++){const Re=V[Ie],wt=Re.object,Ht=Re.geometry,xt=Re.material,Be=Re.group;if(xt.side===Xn&&wt.layers.test(Q.layers)){const gn=xt.side;xt.side=nn,xt.needsUpdate=!0,Ii(wt,j,Q,Ht,xt,Be),xt.side=gn,xt.needsUpdate=!0,Ke=!0}}Ke===!0&&(F.updateMultisampleRenderTarget(xe),F.updateRenderTargetMipmap(xe))}I.setRenderTarget(Ne),I.setClearColor(ee,pe),Ye!==void 0&&(Q.viewport=Ye),I.toneMapping=ke}function On(P,V,j){const Q=V.isScene===!0?V.overrideMaterial:null;for(let W=0,xe=P.length;W<xe;W++){const Te=P[W],Ne=Te.object,ke=Te.geometry,Ye=Q===null?Te.material:Q,Ke=Te.group;Ne.layers.test(j.layers)&&Ii(Ne,V,j,ke,Ye,Ke)}}function Ii(P,V,j,Q,W,xe){P.onBeforeRender(I,V,j,Q,W,xe),P.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),W.onBeforeRender(I,V,j,Q,P,xe),W.transparent===!0&&W.side===Xn&&W.forceSinglePass===!1?(W.side=nn,W.needsUpdate=!0,I.renderBufferDirect(j,V,Q,W,P,xe),W.side=ai,W.needsUpdate=!0,I.renderBufferDirect(j,V,Q,W,P,xe),W.side=Xn):I.renderBufferDirect(j,V,Q,W,P,xe),P.onAfterRender(I,V,j,Q,W,xe)}function Di(P,V,j){V.isScene!==!0&&(V=Et);const Q=He.get(P),W=_.state.lights,xe=_.state.shadowsArray,Te=W.state.version,Ne=Oe.getParameters(P,W.state,xe,V,j),ke=Oe.getProgramCacheKey(Ne);let Ye=Q.programs;Q.environment=P.isMeshStandardMaterial?V.environment:null,Q.fog=V.fog,Q.envMap=(P.isMeshStandardMaterial?J:A).get(P.envMap||Q.environment),Q.envMapRotation=Q.environment!==null&&P.envMap===null?V.environmentRotation:P.envMapRotation,Ye===void 0&&(P.addEventListener("dispose",je),Ye=new Map,Q.programs=Ye);let Ke=Ye.get(ke);if(Ke!==void 0){if(Q.currentProgram===Ke&&Q.lightsStateVersion===Te)return Lr(P,Ne),Ke}else Ne.uniforms=Oe.getUniforms(P),P.onBeforeCompile(Ne,I),Ke=Oe.acquireProgram(Ne,ke),Ye.set(ke,Ke),Q.uniforms=Ne.uniforms;const Ie=Q.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(Ie.clippingPlanes=ye.uniform),Lr(P,Ne),Q.needsLights=Xs(P),Q.lightsStateVersion=Te,Q.needsLights&&(Ie.ambientLightColor.value=W.state.ambient,Ie.lightProbe.value=W.state.probe,Ie.directionalLights.value=W.state.directional,Ie.directionalLightShadows.value=W.state.directionalShadow,Ie.spotLights.value=W.state.spot,Ie.spotLightShadows.value=W.state.spotShadow,Ie.rectAreaLights.value=W.state.rectArea,Ie.ltc_1.value=W.state.rectAreaLTC1,Ie.ltc_2.value=W.state.rectAreaLTC2,Ie.pointLights.value=W.state.point,Ie.pointLightShadows.value=W.state.pointShadow,Ie.hemisphereLights.value=W.state.hemi,Ie.directionalShadowMap.value=W.state.directionalShadowMap,Ie.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Ie.spotShadowMap.value=W.state.spotShadowMap,Ie.spotLightMatrix.value=W.state.spotLightMatrix,Ie.spotLightMap.value=W.state.spotLightMap,Ie.pointShadowMap.value=W.state.pointShadowMap,Ie.pointShadowMatrix.value=W.state.pointShadowMatrix),Q.currentProgram=Ke,Q.uniformsList=null,Ke}function Dr(P){if(P.uniformsList===null){const V=P.currentProgram.getUniforms();P.uniformsList=Ls.seqWithValue(V.seq,P.uniforms)}return P.uniformsList}function Lr(P,V){const j=He.get(P);j.outputColorSpace=V.outputColorSpace,j.batching=V.batching,j.batchingColor=V.batchingColor,j.instancing=V.instancing,j.instancingColor=V.instancingColor,j.instancingMorph=V.instancingMorph,j.skinning=V.skinning,j.morphTargets=V.morphTargets,j.morphNormals=V.morphNormals,j.morphColors=V.morphColors,j.morphTargetsCount=V.morphTargetsCount,j.numClippingPlanes=V.numClippingPlanes,j.numIntersection=V.numClipIntersection,j.vertexAlphas=V.vertexAlphas,j.vertexTangents=V.vertexTangents,j.toneMapping=V.toneMapping}function Fr(P,V,j,Q,W){V.isScene!==!0&&(V=Et),F.resetTextureUnits();const xe=V.fog,Te=Q.isMeshStandardMaterial?V.environment:null,Ne=$===null?I.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:rr,ke=(Q.isMeshStandardMaterial?J:A).get(Q.envMap||Te),Ye=Q.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,Ke=!!j.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),Ie=!!j.morphAttributes.position,ht=!!j.morphAttributes.normal,Re=!!j.morphAttributes.color;let wt=si;Q.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(wt=I.toneMapping);const Ht=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,xt=Ht!==void 0?Ht.length:0,Be=He.get(Q),gn=_.state.lights;if(_e===!0&&(De===!0||P!==E)){const Vt=P===E&&Q.id===D;ye.setState(Q,P,Vt)}let _t=!1;Q.version===Be.__version?(Be.needsLights&&Be.lightsStateVersion!==gn.state.version||Be.outputColorSpace!==Ne||W.isBatchedMesh&&Be.batching===!1||!W.isBatchedMesh&&Be.batching===!0||W.isBatchedMesh&&Be.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&Be.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&Be.instancing===!1||!W.isInstancedMesh&&Be.instancing===!0||W.isSkinnedMesh&&Be.skinning===!1||!W.isSkinnedMesh&&Be.skinning===!0||W.isInstancedMesh&&Be.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Be.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Be.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Be.instancingMorph===!1&&W.morphTexture!==null||Be.envMap!==ke||Q.fog===!0&&Be.fog!==xe||Be.numClippingPlanes!==void 0&&(Be.numClippingPlanes!==ye.numPlanes||Be.numIntersection!==ye.numIntersection)||Be.vertexAlphas!==Ye||Be.vertexTangents!==Ke||Be.morphTargets!==Ie||Be.morphNormals!==ht||Be.morphColors!==Re||Be.toneMapping!==wt||Be.morphTargetsCount!==xt)&&(_t=!0):(_t=!0,Be.__version=Q.version);let cn=Be.currentProgram;_t===!0&&(cn=Di(Q,V,W));let bn=!1,Zt=!1,Zn=!1;const M=cn.getUniforms(),dt=Be.uniforms;if(We.useProgram(cn.program)&&(bn=!0,Zt=!0,Zn=!0),Q.id!==D&&(D=Q.id,Zt=!0),bn||E!==P){We.buffers.depth.getReversed()?(Ee.copy(P.projectionMatrix),Bg(Ee),zg(Ee),M.setValue(H,"projectionMatrix",Ee)):M.setValue(H,"projectionMatrix",P.projectionMatrix),M.setValue(H,"viewMatrix",P.matrixWorldInverse);const Jt=M.map.cameraPosition;Jt!==void 0&&Jt.setValue(H,Me.setFromMatrixPosition(P.matrixWorld)),ct.logarithmicDepthBuffer&&M.setValue(H,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&M.setValue(H,"isOrthographic",P.isOrthographicCamera===!0),E!==P&&(E=P,Zt=!0,Zn=!0)}if(W.isSkinnedMesh){M.setOptional(H,W,"bindMatrix"),M.setOptional(H,W,"bindMatrixInverse");const Vt=W.skeleton;Vt&&(Vt.boneTexture===null&&Vt.computeBoneTexture(),M.setValue(H,"boneTexture",Vt.boneTexture,F))}W.isBatchedMesh&&(M.setOptional(H,W,"batchingTexture"),M.setValue(H,"batchingTexture",W._matricesTexture,F),M.setOptional(H,W,"batchingIdTexture"),M.setValue(H,"batchingIdTexture",W._indirectTexture,F),M.setOptional(H,W,"batchingColorTexture"),W._colorsTexture!==null&&M.setValue(H,"batchingColorTexture",W._colorsTexture,F));const ui=j.morphAttributes;if((ui.position!==void 0||ui.normal!==void 0||ui.color!==void 0)&&qe.update(W,j,cn),(Zt||Be.receiveShadow!==W.receiveShadow)&&(Be.receiveShadow=W.receiveShadow,M.setValue(H,"receiveShadow",W.receiveShadow)),Q.isMeshGouraudMaterial&&Q.envMap!==null&&(dt.envMap.value=ke,dt.flipEnvMap.value=ke.isCubeTexture&&ke.isRenderTargetTexture===!1?-1:1),Q.isMeshStandardMaterial&&Q.envMap===null&&V.environment!==null&&(dt.envMapIntensity.value=V.environmentIntensity),Zt&&(M.setValue(H,"toneMappingExposure",I.toneMappingExposure),Be.needsLights&&Ws(dt,Zn),xe&&Q.fog===!0&&Ce.refreshFogUniforms(dt,xe),Ce.refreshMaterialUniforms(dt,Q,re,Se,_.state.transmissionRenderTarget[P.id]),Ls.upload(H,Dr(Be),dt,F)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(Ls.upload(H,Dr(Be),dt,F),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&M.setValue(H,"center",W.center),M.setValue(H,"modelViewMatrix",W.modelViewMatrix),M.setValue(H,"normalMatrix",W.normalMatrix),M.setValue(H,"modelMatrix",W.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){const Vt=Q.uniformsGroups;for(let Jt=0,Tn=Vt.length;Jt<Tn;Jt++){const Ur=Vt[Jt];B.update(Ur,cn),B.bind(Ur,cn)}}return cn}function Ws(P,V){P.ambientLightColor.needsUpdate=V,P.lightProbe.needsUpdate=V,P.directionalLights.needsUpdate=V,P.directionalLightShadows.needsUpdate=V,P.pointLights.needsUpdate=V,P.pointLightShadows.needsUpdate=V,P.spotLights.needsUpdate=V,P.spotLightShadows.needsUpdate=V,P.rectAreaLights.needsUpdate=V,P.hemisphereLights.needsUpdate=V}function Xs(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return $},this.setRenderTargetTextures=function(P,V,j){He.get(P.texture).__webglTexture=V,He.get(P.depthTexture).__webglTexture=j;const Q=He.get(P);Q.__hasExternalTextures=!0,Q.__autoAllocateDepthBuffer=j===void 0,Q.__autoAllocateDepthBuffer||ot.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(P,V){const j=He.get(P);j.__webglFramebuffer=V,j.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(P,V=0,j=0){$=P,R=V,O=j;let Q=!0,W=null,xe=!1,Te=!1;if(P){const ke=He.get(P);if(ke.__useDefaultFramebuffer!==void 0)We.bindFramebuffer(H.FRAMEBUFFER,null),Q=!1;else if(ke.__webglFramebuffer===void 0)F.setupRenderTarget(P);else if(ke.__hasExternalTextures)F.rebindTextures(P,He.get(P.texture).__webglTexture,He.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){const Ie=P.depthTexture;if(ke.__boundDepthTexture!==Ie){if(Ie!==null&&He.has(Ie)&&(P.width!==Ie.image.width||P.height!==Ie.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");F.setupDepthRenderbuffer(P)}}const Ye=P.texture;(Ye.isData3DTexture||Ye.isDataArrayTexture||Ye.isCompressedArrayTexture)&&(Te=!0);const Ke=He.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(Ke[V])?W=Ke[V][j]:W=Ke[V],xe=!0):P.samples>0&&F.useMultisampledRTT(P)===!1?W=He.get(P).__webglMultisampledFramebuffer:Array.isArray(Ke)?W=Ke[j]:W=Ke,k.copy(P.viewport),te.copy(P.scissor),K=P.scissorTest}else k.copy(Ge).multiplyScalar(re).floor(),te.copy(Qe).multiplyScalar(re).floor(),K=pt;if(We.bindFramebuffer(H.FRAMEBUFFER,W)&&Q&&We.drawBuffers(P,W),We.viewport(k),We.scissor(te),We.setScissorTest(K),xe){const ke=He.get(P.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+V,ke.__webglTexture,j)}else if(Te){const ke=He.get(P.texture),Ye=V||0;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,ke.__webglTexture,j||0,Ye)}D=-1},this.readRenderTargetPixels=function(P,V,j,Q,W,xe,Te){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=He.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Te!==void 0&&(Ne=Ne[Te]),Ne){We.bindFramebuffer(H.FRAMEBUFFER,Ne);try{const ke=P.texture,Ye=ke.format,Ke=ke.type;if(!ct.textureFormatReadable(Ye)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ct.textureTypeReadable(Ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=P.width-Q&&j>=0&&j<=P.height-W&&H.readPixels(V,j,Q,W,Je.convert(Ye),Je.convert(Ke),xe)}finally{const ke=$!==null?He.get($).__webglFramebuffer:null;We.bindFramebuffer(H.FRAMEBUFFER,ke)}}},this.readRenderTargetPixelsAsync=async function(P,V,j,Q,W,xe,Te){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ne=He.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Te!==void 0&&(Ne=Ne[Te]),Ne){const ke=P.texture,Ye=ke.format,Ke=ke.type;if(!ct.textureFormatReadable(Ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ct.textureTypeReadable(Ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(V>=0&&V<=P.width-Q&&j>=0&&j<=P.height-W){We.bindFramebuffer(H.FRAMEBUFFER,Ne);const Ie=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,Ie),H.bufferData(H.PIXEL_PACK_BUFFER,xe.byteLength,H.STREAM_READ),H.readPixels(V,j,Q,W,Je.convert(Ye),Je.convert(Ke),0);const ht=$!==null?He.get($).__webglFramebuffer:null;We.bindFramebuffer(H.FRAMEBUFFER,ht);const Re=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await kg(H,Re,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,Ie),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,xe),H.deleteBuffer(Ie),H.deleteSync(Re),xe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(P,V=null,j=0){P.isTexture!==!0&&(xr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),V=arguments[0]||null,P=arguments[1]);const Q=Math.pow(2,-j),W=Math.floor(P.image.width*Q),xe=Math.floor(P.image.height*Q),Te=V!==null?V.x:0,Ne=V!==null?V.y:0;F.setTexture2D(P,0),H.copyTexSubImage2D(H.TEXTURE_2D,j,0,0,Te,Ne,W,xe),We.unbindTexture()},this.copyTextureToTexture=function(P,V,j=null,Q=null,W=0){P.isTexture!==!0&&(xr("WebGLRenderer: copyTextureToTexture function signature has changed."),Q=arguments[0]||null,P=arguments[1],V=arguments[2],W=arguments[3]||0,j=null);let xe,Te,Ne,ke,Ye,Ke,Ie,ht,Re;const wt=P.isCompressedTexture?P.mipmaps[W]:P.image;j!==null?(xe=j.max.x-j.min.x,Te=j.max.y-j.min.y,Ne=j.isBox3?j.max.z-j.min.z:1,ke=j.min.x,Ye=j.min.y,Ke=j.isBox3?j.min.z:0):(xe=wt.width,Te=wt.height,Ne=wt.depth||1,ke=0,Ye=0,Ke=0),Q!==null?(Ie=Q.x,ht=Q.y,Re=Q.z):(Ie=0,ht=0,Re=0);const Ht=Je.convert(V.format),xt=Je.convert(V.type);let Be;V.isData3DTexture?(F.setTexture3D(V,0),Be=H.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(F.setTexture2DArray(V,0),Be=H.TEXTURE_2D_ARRAY):(F.setTexture2D(V,0),Be=H.TEXTURE_2D),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,V.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,V.unpackAlignment);const gn=H.getParameter(H.UNPACK_ROW_LENGTH),_t=H.getParameter(H.UNPACK_IMAGE_HEIGHT),cn=H.getParameter(H.UNPACK_SKIP_PIXELS),bn=H.getParameter(H.UNPACK_SKIP_ROWS),Zt=H.getParameter(H.UNPACK_SKIP_IMAGES);H.pixelStorei(H.UNPACK_ROW_LENGTH,wt.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,wt.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,ke),H.pixelStorei(H.UNPACK_SKIP_ROWS,Ye),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Ke);const Zn=P.isDataArrayTexture||P.isData3DTexture,M=V.isDataArrayTexture||V.isData3DTexture;if(P.isRenderTargetTexture||P.isDepthTexture){const dt=He.get(P),ui=He.get(V),Vt=He.get(dt.__renderTarget),Jt=He.get(ui.__renderTarget);We.bindFramebuffer(H.READ_FRAMEBUFFER,Vt.__webglFramebuffer),We.bindFramebuffer(H.DRAW_FRAMEBUFFER,Jt.__webglFramebuffer);for(let Tn=0;Tn<Ne;Tn++)Zn&&H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,He.get(P).__webglTexture,W,Ke+Tn),P.isDepthTexture?(M&&H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,He.get(V).__webglTexture,W,Re+Tn),H.blitFramebuffer(ke,Ye,xe,Te,Ie,ht,xe,Te,H.DEPTH_BUFFER_BIT,H.NEAREST)):M?H.copyTexSubImage3D(Be,W,Ie,ht,Re+Tn,ke,Ye,xe,Te):H.copyTexSubImage2D(Be,W,Ie,ht,Re+Tn,ke,Ye,xe,Te);We.bindFramebuffer(H.READ_FRAMEBUFFER,null),We.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else M?P.isDataTexture||P.isData3DTexture?H.texSubImage3D(Be,W,Ie,ht,Re,xe,Te,Ne,Ht,xt,wt.data):V.isCompressedArrayTexture?H.compressedTexSubImage3D(Be,W,Ie,ht,Re,xe,Te,Ne,Ht,wt.data):H.texSubImage3D(Be,W,Ie,ht,Re,xe,Te,Ne,Ht,xt,wt):P.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,W,Ie,ht,xe,Te,Ht,xt,wt.data):P.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,W,Ie,ht,wt.width,wt.height,Ht,wt.data):H.texSubImage2D(H.TEXTURE_2D,W,Ie,ht,xe,Te,Ht,xt,wt);H.pixelStorei(H.UNPACK_ROW_LENGTH,gn),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,_t),H.pixelStorei(H.UNPACK_SKIP_PIXELS,cn),H.pixelStorei(H.UNPACK_SKIP_ROWS,bn),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Zt),W===0&&V.generateMipmaps&&H.generateMipmap(Be),We.unbindTexture()},this.copyTextureToTexture3D=function(P,V,j=null,Q=null,W=0){return P.isTexture!==!0&&(xr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),j=arguments[0]||null,Q=arguments[1]||null,P=arguments[2],V=arguments[3],W=arguments[4]||0),xr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(P,V,j,Q,W)},this.initRenderTarget=function(P){He.get(P).__webglFramebuffer===void 0&&F.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?F.setTextureCube(P,0):P.isData3DTexture?F.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?F.setTexture2DArray(P,0):F.setTexture2D(P,0),We.unbindTexture()},this.resetState=function(){R=0,O=0,$=null,We.reset(),yt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return jn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=vt._getDrawingBufferColorSpace(e),t.unpackColorSpace=vt._getUnpackColorSpace()}}class ZS extends Gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Fn,this.environmentIntensity=1,this.environmentRotation=new Fn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Wo extends ar{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new at(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ns=new z,Os=new z,Hl=new At,gr=new Pu,Ss=new Gs,ka=new z,Vl=new z;class JS extends Gt{constructor(e=new sn,t=new Wo){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,o=t.count;s<o;s++)Ns.fromBufferAttribute(t,s-1),Os.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Ns.distanceTo(Os);e.setAttribute("lineDistance",new Dt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,o=e.params.Line.threshold,l=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ss.copy(n.boundingSphere),Ss.applyMatrix4(s),Ss.radius+=o,e.ray.intersectsSphere(Ss)===!1)return;Hl.copy(s).invert(),gr.copy(e.ray).applyMatrix4(Hl);const u=o/((this.scale.x+this.scale.y+this.scale.z)/3),d=u*u,f=this.isLineSegments?2:1,m=n.index,v=n.attributes.position;if(m!==null){const y=Math.max(0,l.start),T=Math.min(m.count,l.start+l.count);for(let C=y,S=T-1;C<S;C+=f){const _=m.getX(C),N=m.getX(C+1),L=Ms(this,e,gr,d,_,N);L&&t.push(L)}if(this.isLineLoop){const C=m.getX(T-1),S=m.getX(y),_=Ms(this,e,gr,d,C,S);_&&t.push(_)}}else{const y=Math.max(0,l.start),T=Math.min(v.count,l.start+l.count);for(let C=y,S=T-1;C<S;C+=f){const _=Ms(this,e,gr,d,C,C+1);_&&t.push(_)}if(this.isLineLoop){const C=Ms(this,e,gr,d,T-1,y);C&&t.push(C)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,l=s.length;o<l;o++){const u=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=o}}}}}function Ms(i,e,t,n,s,o){const l=i.geometry.attributes.position;if(Ns.fromBufferAttribute(l,s),Os.fromBufferAttribute(l,o),t.distanceSqToSegment(Ns,Os,ka,Vl)>n)return;ka.applyMatrix4(i.matrixWorld);const d=e.ray.origin.distanceTo(ka);if(!(d<e.near||d>e.far))return{distance:d,point:Vl.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const Wl=new z,Xl=new z;class Xu extends JS{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,o=t.count;s<o;s+=2)Wl.fromBufferAttribute(t,s),Xl.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Wl.distanceTo(Xl);e.setAttribute("lineDistance",new Dt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Un{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,s=this.getPoint(0),o=0;t.push(0);for(let l=1;l<=e;l++)n=this.getPoint(l/e),o+=n.distanceTo(s),t.push(o),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let s=0;const o=n.length;let l;t?l=t:l=e*n[o-1];let u=0,d=o-1,f;for(;u<=d;)if(s=Math.floor(u+(d-u)/2),f=n[s]-l,f<0)u=s+1;else if(f>0)d=s-1;else{d=s;break}if(s=d,n[s]===l)return s/(o-1);const m=n[s],v=n[s+1]-m,y=(l-m)/v;return(s+y)/(o-1)}getTangent(e,t){let s=e-1e-4,o=e+1e-4;s<0&&(s=0),o>1&&(o=1);const l=this.getPoint(s),u=this.getPoint(o),d=t||(l.isVector2?new ze:new z);return d.copy(u).sub(l).normalize(),d}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new z,s=[],o=[],l=[],u=new z,d=new At;for(let y=0;y<=e;y++){const T=y/e;s[y]=this.getTangentAt(T,new z)}o[0]=new z,l[0]=new z;let f=Number.MAX_VALUE;const m=Math.abs(s[0].x),g=Math.abs(s[0].y),v=Math.abs(s[0].z);m<=f&&(f=m,n.set(1,0,0)),g<=f&&(f=g,n.set(0,1,0)),v<=f&&n.set(0,0,1),u.crossVectors(s[0],n).normalize(),o[0].crossVectors(s[0],u),l[0].crossVectors(s[0],o[0]);for(let y=1;y<=e;y++){if(o[y]=o[y-1].clone(),l[y]=l[y-1].clone(),u.crossVectors(s[y-1],s[y]),u.length()>Number.EPSILON){u.normalize();const T=Math.acos(Wt(s[y-1].dot(s[y]),-1,1));o[y].applyMatrix4(d.makeRotationAxis(u,T))}l[y].crossVectors(s[y],o[y])}if(t===!0){let y=Math.acos(Wt(o[0].dot(o[e]),-1,1));y/=e,s[0].dot(u.crossVectors(o[0],o[e]))>0&&(y=-y);for(let T=1;T<=e;T++)o[T].applyMatrix4(d.makeRotationAxis(s[T],y*T)),l[T].crossVectors(s[T],o[T])}return{tangents:s,normals:o,binormals:l}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Xo extends Un{constructor(e=0,t=0,n=1,s=1,o=0,l=Math.PI*2,u=!1,d=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=o,this.aEndAngle=l,this.aClockwise=u,this.aRotation=d}getPoint(e,t=new ze){const n=t,s=Math.PI*2;let o=this.aEndAngle-this.aStartAngle;const l=Math.abs(o)<Number.EPSILON;for(;o<0;)o+=s;for(;o>s;)o-=s;o<Number.EPSILON&&(l?o=0:o=s),this.aClockwise===!0&&!l&&(o===s?o=-s:o=o-s);const u=this.aStartAngle+e*o;let d=this.aX+this.xRadius*Math.cos(u),f=this.aY+this.yRadius*Math.sin(u);if(this.aRotation!==0){const m=Math.cos(this.aRotation),g=Math.sin(this.aRotation),v=d-this.aX,y=f-this.aY;d=v*m-y*g+this.aX,f=v*g+y*m+this.aY}return n.set(d,f)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class KS extends Xo{constructor(e,t,n,s,o,l){super(e,t,n,n,s,o,l),this.isArcCurve=!0,this.type="ArcCurve"}}function $o(){let i=0,e=0,t=0,n=0;function s(o,l,u,d){i=o,e=u,t=-3*o+3*l-2*u-d,n=2*o-2*l+u+d}return{initCatmullRom:function(o,l,u,d,f){s(l,u,f*(u-o),f*(d-l))},initNonuniformCatmullRom:function(o,l,u,d,f,m,g){let v=(l-o)/f-(u-o)/(f+m)+(u-l)/m,y=(u-l)/m-(d-l)/(m+g)+(d-u)/g;v*=m,y*=m,s(l,u,v,y)},calc:function(o){const l=o*o,u=l*o;return i+e*o+t*l+n*u}}}const Es=new z,Ba=new $o,za=new $o,Ga=new $o;class QS extends Un{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new z){const n=t,s=this.points,o=s.length,l=(o-(this.closed?0:1))*e;let u=Math.floor(l),d=l-u;this.closed?u+=u>0?0:(Math.floor(Math.abs(u)/o)+1)*o:d===0&&u===o-1&&(u=o-2,d=1);let f,m;this.closed||u>0?f=s[(u-1)%o]:(Es.subVectors(s[0],s[1]).add(s[0]),f=Es);const g=s[u%o],v=s[(u+1)%o];if(this.closed||u+2<o?m=s[(u+2)%o]:(Es.subVectors(s[o-1],s[o-2]).add(s[o-1]),m=Es),this.curveType==="centripetal"||this.curveType==="chordal"){const y=this.curveType==="chordal"?.5:.25;let T=Math.pow(f.distanceToSquared(g),y),C=Math.pow(g.distanceToSquared(v),y),S=Math.pow(v.distanceToSquared(m),y);C<1e-4&&(C=1),T<1e-4&&(T=C),S<1e-4&&(S=C),Ba.initNonuniformCatmullRom(f.x,g.x,v.x,m.x,T,C,S),za.initNonuniformCatmullRom(f.y,g.y,v.y,m.y,T,C,S),Ga.initNonuniformCatmullRom(f.z,g.z,v.z,m.z,T,C,S)}else this.curveType==="catmullrom"&&(Ba.initCatmullRom(f.x,g.x,v.x,m.x,this.tension),za.initCatmullRom(f.y,g.y,v.y,m.y,this.tension),Ga.initCatmullRom(f.z,g.z,v.z,m.z,this.tension));return n.set(Ba.calc(d),za.calc(d),Ga.calc(d)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new z().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function $l(i,e,t,n,s){const o=(n-e)*.5,l=(s-t)*.5,u=i*i,d=i*u;return(2*t-2*n+o+l)*d+(-3*t+3*n-2*o-l)*u+o*i+t}function eM(i,e){const t=1-i;return t*t*e}function tM(i,e){return 2*(1-i)*i*e}function nM(i,e){return i*i*e}function Sr(i,e,t,n){return eM(i,e)+tM(i,t)+nM(i,n)}function iM(i,e){const t=1-i;return t*t*t*e}function rM(i,e){const t=1-i;return 3*t*t*i*e}function sM(i,e){return 3*(1-i)*i*i*e}function aM(i,e){return i*i*i*e}function Mr(i,e,t,n,s){return iM(i,e)+rM(i,t)+sM(i,n)+aM(i,s)}class $u extends Un{constructor(e=new ze,t=new ze,n=new ze,s=new ze){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new ze){const n=t,s=this.v0,o=this.v1,l=this.v2,u=this.v3;return n.set(Mr(e,s.x,o.x,l.x,u.x),Mr(e,s.y,o.y,l.y,u.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class oM extends Un{constructor(e=new z,t=new z,n=new z,s=new z){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new z){const n=t,s=this.v0,o=this.v1,l=this.v2,u=this.v3;return n.set(Mr(e,s.x,o.x,l.x,u.x),Mr(e,s.y,o.y,l.y,u.y),Mr(e,s.z,o.z,l.z,u.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class ju extends Un{constructor(e=new ze,t=new ze){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ze){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ze){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class cM extends Un{constructor(e=new z,t=new z){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new z){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new z){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Yu extends Un{constructor(e=new ze,t=new ze,n=new ze){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ze){const n=t,s=this.v0,o=this.v1,l=this.v2;return n.set(Sr(e,s.x,o.x,l.x),Sr(e,s.y,o.y,l.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class lM extends Un{constructor(e=new z,t=new z,n=new z){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new z){const n=t,s=this.v0,o=this.v1,l=this.v2;return n.set(Sr(e,s.x,o.x,l.x),Sr(e,s.y,o.y,l.y),Sr(e,s.z,o.z,l.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class qu extends Un{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ze){const n=t,s=this.points,o=(s.length-1)*e,l=Math.floor(o),u=o-l,d=s[l===0?l:l-1],f=s[l],m=s[l>s.length-2?s.length-1:l+1],g=s[l>s.length-3?s.length-1:l+2];return n.set($l(u,d.x,f.x,m.x,g.x),$l(u,d.y,f.y,m.y,g.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(s.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const s=e.points[t];this.points.push(new ze().fromArray(s))}return this}}var jl=Object.freeze({__proto__:null,ArcCurve:KS,CatmullRomCurve3:QS,CubicBezierCurve:$u,CubicBezierCurve3:oM,EllipseCurve:Xo,LineCurve:ju,LineCurve3:cM,QuadraticBezierCurve:Yu,QuadraticBezierCurve3:lM,SplineCurve:qu});class uM extends Un{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new jl[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),s=this.getCurveLengths();let o=0;for(;o<s.length;){if(s[o]>=n){const l=s[o]-n,u=this.curves[o],d=u.getLength(),f=d===0?0:1-l/d;return u.getPointAt(f,t)}o++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let s=0,o=this.curves;s<o.length;s++){const l=o[s],u=l.isEllipseCurve?e*2:l.isLineCurve||l.isLineCurve3?1:l.isSplineCurve?e*l.points.length:e,d=l.getPoints(u);for(let f=0;f<d.length;f++){const m=d[f];n&&n.equals(m)||(t.push(m),n=m)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const s=e.curves[t];this.curves.push(new jl[s.type]().fromJSON(s))}return this}}class hM extends uM{constructor(e){super(),this.type="Path",this.currentPoint=new ze,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new ju(this.currentPoint.clone(),new ze(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){const o=new Yu(this.currentPoint.clone(),new ze(e,t),new ze(n,s));return this.curves.push(o),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,o,l){const u=new $u(this.currentPoint.clone(),new ze(e,t),new ze(n,s),new ze(o,l));return this.curves.push(u),this.currentPoint.set(o,l),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new qu(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,o,l){const u=this.currentPoint.x,d=this.currentPoint.y;return this.absarc(e+u,t+d,n,s,o,l),this}absarc(e,t,n,s,o,l){return this.absellipse(e,t,n,n,s,o,l),this}ellipse(e,t,n,s,o,l,u,d){const f=this.currentPoint.x,m=this.currentPoint.y;return this.absellipse(e+f,t+m,n,s,o,l,u,d),this}absellipse(e,t,n,s,o,l,u,d){const f=new Xo(e,t,n,s,o,l,u,d);if(this.curves.length>0){const g=f.getPoint(0);g.equals(this.currentPoint)||this.lineTo(g.x,g.y)}this.curves.push(f);const m=f.getPoint(1);return this.currentPoint.copy(m),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class jo extends sn{constructor(e=[new ze(0,-.5),new ze(.5,0),new ze(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=Wt(s,0,Math.PI*2);const o=[],l=[],u=[],d=[],f=[],m=1/t,g=new z,v=new ze,y=new z,T=new z,C=new z;let S=0,_=0;for(let N=0;N<=e.length-1;N++)switch(N){case 0:S=e[N+1].x-e[N].x,_=e[N+1].y-e[N].y,y.x=_*1,y.y=-S,y.z=_*0,C.copy(y),y.normalize(),d.push(y.x,y.y,y.z);break;case e.length-1:d.push(C.x,C.y,C.z);break;default:S=e[N+1].x-e[N].x,_=e[N+1].y-e[N].y,y.x=_*1,y.y=-S,y.z=_*0,T.copy(y),y.x+=C.x,y.y+=C.y,y.z+=C.z,y.normalize(),d.push(y.x,y.y,y.z),C.copy(T)}for(let N=0;N<=t;N++){const L=n+N*m*s,I=Math.sin(L),G=Math.cos(L);for(let R=0;R<=e.length-1;R++){g.x=e[R].x*I,g.y=e[R].y,g.z=e[R].x*G,l.push(g.x,g.y,g.z),v.x=N/t,v.y=R/(e.length-1),u.push(v.x,v.y);const O=d[3*R+0]*I,$=d[3*R+1],D=d[3*R+0]*G;f.push(O,$,D)}}for(let N=0;N<t;N++)for(let L=0;L<e.length-1;L++){const I=L+N*e.length,G=I,R=I+e.length,O=I+e.length+1,$=I+1;o.push(G,R,$),o.push(O,$,R)}this.setIndex(o),this.setAttribute("position",new Dt(l,3)),this.setAttribute("uv",new Dt(u,2)),this.setAttribute("normal",new Dt(f,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jo(e.points,e.segments,e.phiStart,e.phiLength)}}class Yo extends jo{constructor(e=1,t=1,n=4,s=8){const o=new hM;o.absarc(0,-t/2,e,Math.PI*1.5,0),o.absarc(0,t/2,e,0,Math.PI*.5),super(o.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:s}}static fromJSON(e){return new Yo(e.radius,e.length,e.capSegments,e.radialSegments)}}class qo extends sn{constructor(e=1,t=1,n=1,s=32,o=1,l=!1,u=0,d=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:o,openEnded:l,thetaStart:u,thetaLength:d};const f=this;s=Math.floor(s),o=Math.floor(o);const m=[],g=[],v=[],y=[];let T=0;const C=[],S=n/2;let _=0;N(),l===!1&&(e>0&&L(!0),t>0&&L(!1)),this.setIndex(m),this.setAttribute("position",new Dt(g,3)),this.setAttribute("normal",new Dt(v,3)),this.setAttribute("uv",new Dt(y,2));function N(){const I=new z,G=new z;let R=0;const O=(t-e)/n;for(let $=0;$<=o;$++){const D=[],E=$/o,k=E*(t-e)+e;for(let te=0;te<=s;te++){const K=te/s,ee=K*d+u,pe=Math.sin(ee),ae=Math.cos(ee);G.x=k*pe,G.y=-E*n+S,G.z=k*ae,g.push(G.x,G.y,G.z),I.set(pe,O,ae).normalize(),v.push(I.x,I.y,I.z),y.push(K,1-E),D.push(T++)}C.push(D)}for(let $=0;$<s;$++)for(let D=0;D<o;D++){const E=C[D][$],k=C[D+1][$],te=C[D+1][$+1],K=C[D][$+1];(e>0||D!==0)&&(m.push(E,k,K),R+=3),(t>0||D!==o-1)&&(m.push(k,te,K),R+=3)}f.addGroup(_,R,0),_+=R}function L(I){const G=T,R=new ze,O=new z;let $=0;const D=I===!0?e:t,E=I===!0?1:-1;for(let te=1;te<=s;te++)g.push(0,S*E,0),v.push(0,E,0),y.push(.5,.5),T++;const k=T;for(let te=0;te<=s;te++){const ee=te/s*d+u,pe=Math.cos(ee),ae=Math.sin(ee);O.x=D*ae,O.y=S*E,O.z=D*pe,g.push(O.x,O.y,O.z),v.push(0,E,0),R.x=pe*.5+.5,R.y=ae*.5*E+.5,y.push(R.x,R.y),T++}for(let te=0;te<s;te++){const K=G+te,ee=k+te;I===!0?m.push(ee,ee+1,K):m.push(ee+1,ee,K),$+=3}f.addGroup(_,$,I===!0?1:2),_+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qo(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Zo extends sn{constructor(e=1,t=32,n=16,s=0,o=Math.PI*2,l=0,u=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:o,thetaStart:l,thetaLength:u},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const d=Math.min(l+u,Math.PI);let f=0;const m=[],g=new z,v=new z,y=[],T=[],C=[],S=[];for(let _=0;_<=n;_++){const N=[],L=_/n;let I=0;_===0&&l===0?I=.5/t:_===n&&d===Math.PI&&(I=-.5/t);for(let G=0;G<=t;G++){const R=G/t;g.x=-e*Math.cos(s+R*o)*Math.sin(l+L*u),g.y=e*Math.cos(l+L*u),g.z=e*Math.sin(s+R*o)*Math.sin(l+L*u),T.push(g.x,g.y,g.z),v.copy(g).normalize(),C.push(v.x,v.y,v.z),S.push(R+I,1-L),N.push(f++)}m.push(N)}for(let _=0;_<n;_++)for(let N=0;N<t;N++){const L=m[_][N+1],I=m[_][N],G=m[_+1][N],R=m[_+1][N+1];(_!==0||l>0)&&y.push(L,I,R),(_!==n-1||d<Math.PI)&&y.push(I,G,R)}this.setIndex(y),this.setAttribute("position",new Dt(T,3)),this.setAttribute("normal",new Dt(C,3)),this.setAttribute("uv",new Dt(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zo(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class dM extends ar{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new at(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new at(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=bu,this.normalScale=new ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Zu extends Gt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new at(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class fM extends Zu{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new at(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Ha=new At,Yl=new z,ql=new z;class pM{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ze(512,512),this.map=null,this.mapPass=null,this.matrix=new At,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Go,this._frameExtents=new ze(1,1),this._viewportCount=1,this._viewports=[new Pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Yl.setFromMatrixPosition(e.matrixWorld),t.position.copy(Yl),ql.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ql),t.updateMatrixWorld(),Ha.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ha),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ha)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class mM extends pM{constructor(){super(new Ho(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class _M extends Zu{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.target=new Gt,this.shadow=new mM}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class gM extends Xu{constructor(e=10,t=10,n=4473924,s=8947848){n=new at(n),s=new at(s);const o=t/2,l=e/t,u=e/2,d=[],f=[];for(let v=0,y=0,T=-u;v<=t;v++,T+=l){d.push(-u,0,T,u,0,T),d.push(T,0,-u,T,0,u);const C=v===o?n:s;C.toArray(f,y),y+=3,C.toArray(f,y),y+=3,C.toArray(f,y),y+=3,C.toArray(f,y),y+=3}const m=new sn;m.setAttribute("position",new Dt(d,3)),m.setAttribute("color",new Dt(f,3));const g=new Wo({vertexColors:!0,toneMapped:!1});super(m,g),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Fo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Fo);const ws=["chase","top","fpv"],Zl="jackal.camera";class vM{constructor(e,t=2.4,n=1.5,s=4){this.cam=e,this.back=t,this.height=n,this.stiffness=s}pos=new z;look=new z;init=!1;update(e,t){const n=new z(e.x-this.back*Math.cos(e.yaw),e.y-this.back*Math.sin(e.yaw),this.height),s=new z(e.x+.8*Math.cos(e.yaw),e.y+.8*Math.sin(e.yaw),.15),o=this.init?1-Math.exp(-this.stiffness*t):1;this.pos.lerp(n,o),this.look.lerp(s,o),this.init=!0,this.cam.position.copy(this.pos),this.cam.lookAt(this.look)}snap(){this.init=!1}}class xM{constructor(e,t){this.persp=e,this.arena=t,this.chase=new vM(e),this.top=new Ho(-1,1,1,-1,.1,50),this.top.position.set(0,0,20),this.top.up.set(0,1,0),this.top.lookAt(0,0,0),this.fpv.up.set(0,0,1);let n=null;try{n=localStorage.getItem(Zl)}catch{}this.mode=ws.includes(n)?n:"chase"}mode;top;fpv=new dn(80,1,.03,100);chase;listeners=[];onChange(e){this.listeners.push(e)}set(e){this.mode=e,e==="chase"&&this.chase.snap();try{localStorage.setItem(Zl,e)}catch{}for(const t of this.listeners)t(e)}cycle(){this.set(ws[(ws.indexOf(this.mode)+1)%ws.length])}get camera(){return this.mode==="top"?this.top:this.mode==="fpv"?this.fpv:this.persp}update(e,t,n,s){if(this.mode==="chase")this.chase.update(e,n);else if(this.mode==="top"){const[o,l]=this.arena,u=Math.max(o/2/s,l/2)*1.08;Object.assign(this.top,{left:-u*s,right:u*s,top:u,bottom:-u}),this.top.updateProjectionMatrix()}else this.fpv.aspect=s,this.fpv.updateProjectionMatrix(),this.fpv.position.set(t[0],t[1],t[2]),this.fpv.lookAt(t[0]+Math.cos(e.yaw),t[1]+Math.sin(e.yaw),t[2]+Math.tan(-.12))}}const bs=0,Va=2,yM=3,SM=4,MM=5,EM=6,Jl=7,wM=3;class bM{constructor(e,t){this.model=t,this.renderer=new qS({canvas:e,antialias:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.scene.background=new at(1777445),this.camera.up.set(0,0,1),this.scene.add(new fM(14674175,3159098,1.6));const n=new _M(16777215,1.8);n.position.set(4,-3,8),n.castShadow=!0,n.shadow.mapSize.set(2048,2048),Object.assign(n.shadow.camera,{left:-8,right:8,top:8,bottom:-8,near:.5,far:30}),this.scene.add(n),this.build(),this.scanLines=new Xu(new sn().setAttribute("position",new fn(new Float32Array(1080),3)),new Wo({color:16732754,transparent:!0,opacity:.55})),this.scanLines.frustumCulled=!1,this.scanLines.visible=!1,this.scene.add(this.scanLines),this.resize(),window.addEventListener("resize",()=>this.resize())}renderer;scene=new ZS;camera=new dn(60,1,.05,200);geoms=[];byId=new Map;robotObjs=[];scanLines;collisionObjs=[];m4=new At;build(){const e=this.model;for(let t=0;t<e.ngeom;t++){const n=e.geom_type[t],s=[e.geom_size[3*t],e.geom_size[3*t+1],e.geom_size[3*t+2]],o=[0,1,2,3].map(m=>e.geom_rgba[4*t+m]);let l=null;if(n===bs?l=new Rr(2*s[0],2*s[1]):n===EM?l=new or(2*s[0],2*s[1],2*s[2]):n===MM?l=new qo(s[0],s[0],2*s[1],32).rotateX(Math.PI/2):n===Va||n===SM?l=new Zo(1,24,16).scale(s[0],n===Va?s[0]:s[1],n===Va?s[0]:s[2]):n===yM?l=new Yo(s[0],2*s[1],8,16).rotateX(Math.PI/2):n===Jl&&(l=this.meshGeometry(e.geom_dataid[t])),!l)continue;const u=e.geom_group[t]===wM,d=new dM({color:new at(o[0],o[1],o[2]),transparent:o[3]<1,opacity:o[3],roughness:n===bs?.95:.6,metalness:.05,flatShading:n===Jl}),f=new Ln(l,d);f.castShadow=n!==bs&&!u,f.receiveShadow=!0,f.matrixAutoUpdate=!1,u&&(f.visible=!1,this.collisionObjs.push(f)),this.scene.add(f),this.geoms.push({id:t,obj:f}),this.byId.set(t,f),e.geom_bodyid[t]>0&&this.robotObjs.push(f),n===bs&&this.addGrid(s[0],s[1])}}addGrid(e,t){const n=new gM(2*Math.max(e,t),2*Math.round(Math.max(e,t)),5923440,3817544);n.rotateX(Math.PI/2),n.position.z=.002,this.scene.add(n)}meshGeometry(e){const t=this.model,n=t.mesh_vertadr[e],s=t.mesh_vertnum[e],o=t.mesh_faceadr[e],l=t.mesh_facenum[e],u=new Float32Array(t.mesh_vert.subarray(3*n,3*(n+s))),d=new Uint32Array(t.mesh_face.subarray(3*o,3*(o+l))),f=new sn;return f.setAttribute("position",new fn(u,3)),f.setIndex(new fn(d,1)),f.computeVertexNormals(),f}showCollision(e){for(const t of this.collisionObjs)t.visible=e}setRobotVisible(e){for(const t of this.robotObjs)this.collisionObjs.includes(t)||(t.visible=e)}setGeomColor(e,t,n){const s=this.byId.get(e);if(!s)return;const o=s.material;o.color.setHex(t),n!==void 0&&(o.opacity=n,o.transparent=n<1)}setScan(e,t,n){if(this.scanLines.visible=!!e,!e)return;const s=this.scanLines.geometry.getAttribute("position"),o=s.array;for(let l=0;l<e.ranges.length&&l<180;l++){const u=n+e.angle_min+l*e.angle_inc,d=e.ranges[l];o.set([t[0],t[1],t[2],t[0]+d*Math.cos(u),t[1]+d*Math.sin(u),t[2]],6*l)}s.needsUpdate=!0}get aspect(){return this.camera.aspect}sync(e){const t=e.geom_xpos,n=e.geom_xmat;for(const{id:s,obj:o}of this.geoms){const l=9*s,u=3*s;this.m4.set(n[l],n[l+1],n[l+2],t[u],n[l+3],n[l+4],n[l+5],t[u+1],n[l+6],n[l+7],n[l+8],t[u+2],0,0,0,1),o.matrix.copy(this.m4),o.matrixWorldNeedsUpdate=!0}}render(e=this.camera){this.renderer.render(this.scene,e)}resize(){const e=this.renderer.domElement,t=e.clientWidth||window.innerWidth,n=e.clientHeight||window.innerHeight;this.renderer.setSize(t,n,!1),this.camera.aspect=t/n,this.camera.updateProjectionMatrix()}}class TM{constructor(e,t=200){this.chassisGeom=e,this.debounceMs=t}count=0;lastTouch=new Map;touching=new Set;update(e,t){const n=[],s=new Set,o=e.ncon;if(o>0){const l=e.contact;try{for(let u=0;u<o;u++){const d=l.get(u);if(!d)continue;const f=d.geom1===this.chassisGeom?d.geom2:d.geom2===this.chassisGeom?d.geom1:-1;d.delete(),f>=0&&s.add(f)}}finally{l.delete()}}for(const l of s)!this.touching.has(l)&&t-(this.lastTouch.get(l)??-1/0)>=this.debounceMs&&(this.count++,n.push(l)),this.lastTouch.set(l,t);return this.touching=s,n}isTouching(){return this.touching.size>0}reset(){this.count=0,this.lastTouch.clear(),this.touching.clear()}}function Kl(i,e,t,n,s){if(i!==0&&Math.sign(e)!==Math.sign(i)){const l=i-Math.sign(i)*n*s;return Math.sign(l)!==Math.sign(i)?0:l}const o=(Math.abs(e)<Math.abs(i)?n:t)*s;return i+Math.max(-o,Math.min(o,e-i))}class AM{limits;vMax;wMax;latest=null;lastValidMs=-1/0;estopped=!1;applied={v:0,w:0};everCommanded=!1;lastSeq=new Map;stats={received:0,lastSource:null,lastIngress:null,lastAction:null,actionCount:0,seqDrops:0,lastEchoT:null,lastEchoTb:null};constructor(e=en,t){this.limits=e,this.vMax=e.V_MAX,this.wMax=e.W_MAX,this.setCaps(t)}setCaps(e){this.vMax=Math.min(this.limits.V_MAX,e?.v??1/0),this.wMax=Math.min(this.limits.W_MAX,e?.w??1/0)}ingest(e,t){if(e.type==="reset"){this.estopped=!1;return}const n=j_(e,this.vMax,this.wMax);if(this.latest=n,this.lastValidMs=t,this.everCommanded=!0,this.stats.received++,this.stats.lastSource=n.source??n.ingress??null,this.stats.lastIngress=n.ingress??null,n.action&&(this.stats.lastAction=n.action,this.stats.actionCount++),n.t!==void 0&&(this.stats.lastEchoT=n.t),n.tb!==void 0&&(this.stats.lastEchoTb=n.tb),n.seq!==void 0){const s=n.source??n.ingress??"?",o=this.lastSeq.get(s);o!==void 0&&n.seq>o+1&&n.seq-o<1e4&&(this.stats.seqDrops+=n.seq-o-1),this.lastSeq.set(s,n.seq)}n.estop&&(this.estopped=!0)}estop(){this.estopped=!0}reset(){this.estopped=!1}isEstopped(){return this.estopped}msSinceLastCmd(e){return e-this.lastValidMs}resetMotion(){this.latest=null,this.lastValidMs=-1/0,this.applied={v:0,w:0},this.everCommanded=!1}tick(e,t){const n=this.limits,s=this.latest!==null&&e-this.lastValidMs<=n.DEADMAN_MS;let o=s?{v:this.latest.v,w:this.latest.w}:{v:0,w:0},l;return this.estopped?(o={v:0,w:0},this.applied={v:0,w:0},{target:o,applied:{...this.applied},status:"estop"}):(this.applied={v:Kl(this.applied.v,o.v,n.A_V_MAX,n.A_V_BRAKE,t),w:Kl(this.applied.w,o.w,n.A_W_MAX,n.A_W_BRAKE,t)},s?l="ok":this.everCommanded?this.latest&&(this.latest.v!==0||this.latest.w!==0)?l="deadman":l=this.applied.v!==0||this.applied.w!==0?"deadman":"idle":l="idle",{target:o,applied:{...this.applied},status:l})}}function Ql(i){let e=i>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}class CM{latencyMs=0;dropPct=0;seed=1;offered=0;dropped=0;rand=Ql(1);queue=[];get active(){return this.latencyMs>0||this.dropPct>0}configure(e){this.latencyMs=Math.max(0,Math.min(5e3,e.latencyMs??this.latencyMs)),this.dropPct=Math.max(0,Math.min(100,e.dropPct??this.dropPct)),e.seed!==void 0&&(this.seed=e.seed>>>0),this.restart()}restart(){this.rand=Ql(this.seed),this.queue=[],this.offered=this.dropped=0}offer(e,t){return this.offered++,this.dropPct>0&&this.rand()*100<this.dropPct?(this.dropped++,!1):(this.queue.push({due:t+this.latencyMs,msg:e}),!0)}release(e){let t=0;for(;t<this.queue.length&&this.queue[t].due<=e;)t++;return this.queue.splice(0,t).map(n=>({msg:n.msg,at:n.due}))}settings(){return{latencyMs:this.latencyMs,dropPct:this.dropPct,seed:this.seed}}}const RM=.05,eu=.6,PM=i=>(i.gates?.length??0)>0||!!i.finish;function Ju(i){return{size:[.8,.6],tol_m:.15,tol_deg:10,hold_s:1,...i}}const ks=i=>(Math.round(i*1e6)/1e6).toString(),zt=i=>i.map(ks).join(" "),Ts='contype="2" conaffinity="2" group="0"',Lo='contype="0" conaffinity="0" group="2"';function tu(i,e,t,n,s){const o=(e[0]+t[0])/2,l=(e[1]+t[1])/2,u=Math.hypot(t[0]-e[0],t[1]-e[1]),d=Math.atan2(t[1]-e[1],t[0]-e[0]);return`    <geom name="${i}" type="box" pos="${zt([o,l,.003])}" size="${zt([u/2,n/2,.002])}" euler="0 0 ${ks(d)}" rgba="${zt(s)}" ${Lo}/>`}function IM(i,e="jackal.xml"){const[t,n]=i.arena.size,s=i.arena.wall_height??.4,o=i.arena.wall_thickness??.1,u=[["wall_n",[0,n/2+o/2,s/2],[t/2+o,o/2,s/2]],["wall_s",[0,-n/2-o/2,s/2],[t/2+o,o/2,s/2]],["wall_e",[t/2+o/2,0,s/2],[o/2,n/2,s/2]],["wall_w",[-t/2-o/2,0,s/2],[o/2,n/2,s/2]]].map(([f,m,g])=>`    <geom name="${f}" type="box" pos="${zt([...m])}" size="${zt([...g])}" rgba="0.55 0.58 0.62 1" ${Ts}/>`);i.obstacles.forEach((f,m)=>{const g=zt(f.rgba??[.85,.45,.2,1]);if(f.type==="box"){const[v,y,T]=f.size;u.push(`    <geom name="obs_${m}" type="box" pos="${zt([f.pos[0],f.pos[1],T/2])}" size="${zt([v/2,y/2,T/2])}" euler="0 0 ${ks(f.yaw??0)}" rgba="${g}" ${Ts}/>`)}else u.push(`    <geom name="obs_${m}" type="cylinder" pos="${zt([f.pos[0],f.pos[1],f.height/2])}" size="${zt([f.radius,f.height/2])}" rgba="${g}" ${Ts}/>`)}),(i.gates??[]).forEach((f,m)=>{for(const[g,v,y]of[["l",f.left,[.9,.25,.2,1]],["r",f.right,[.2,.45,.9,1]]])u.push(`    <geom name="gate${m}_${g}" type="cylinder" pos="${zt([v[0],v[1],eu/2])}" size="${zt([RM,eu/2])}" rgba="${zt([...y])}" ${Ts}/>`);u.push(tu(`gate${m}_line`,f.left,f.right,.04,[1,1,1,.35]))});const d=i.finish;if(d?.type==="line")u.push(tu("finish_line",d.left,d.right,.12,[1,1,1,.9]));else if(d?.type==="dock"){const f=Ju(d);u.push(`    <geom name="dock_zone" type="box" pos="${zt([f.center[0],f.center[1],.003])}" size="${zt([f.size[0]/2,f.size[1]/2,.002])}" euler="0 0 ${ks(f.yaw)}" rgba="0.2 0.8 0.35 0.35" ${Lo}/>`),u.push(`    <geom name="dock_target" type="cylinder" pos="${zt([f.center[0],f.center[1],.004])}" size="${zt([f.tol_m,.002])}" rgba="0.2 0.9 0.4 0.6" ${Lo}/>`)}return`<mujoco model="jackal_${i.id}">
  <compiler angle="radian"/>
  <option timestep="0.002" integrator="implicitfast"/>
  <include file="${e}"/>
  <worldbody>
    <light name="sun" pos="0 0 6" dir="0 0 -1" directional="true"/>
    <geom name="floor" type="plane" size="${zt([t/2+o,n/2+o,.1])}" rgba="0.24 0.26 0.29 1" contype="1" conaffinity="1"/>
${u.join(`
`)}
  </worldbody>
</mujoco>
`}function DM(i,e,t){const n=new i.MjVFS;try{for(const[u,d]of Object.entries(e))n.addBuffer(u,d);const s=IM(t),o=i.MjModel.from_xml_string(s,n),l=new i.MjData(o);return{model:o,data:l,xml:s}}finally{n.delete()}}function hn(i,e,t,n){const s={body:i.mjtObj.mjOBJ_BODY,joint:i.mjtObj.mjOBJ_JOINT,geom:i.mjtObj.mjOBJ_GEOM,actuator:i.mjtObj.mjOBJ_ACTUATOR,site:i.mjtObj.mjOBJ_SITE}[t].value,o=i.mj_name2id(e,s,n);if(o<0)throw new Error(`MuJoCo ${t} "${n}" not found`);return o}const Yt={beams:180,angle_min:-2.356,angle_inc:.02618,range_max:10};class LM{constructor(e,t,n){this.mj=e,this.model=t,this.data=n,this.site=hn(e,t,"site","lidar"),this.body=hn(e,t,"body","base_link"),this.geomid=new e.IntBuffer(Yt.beams),this.dist=new e.DoubleBuffer(Yt.beams),this.normal=new e.DoubleBuffer(3*Yt.beams)}site;body;geomid;dist;normal;vec=new Array(3*Yt.beams).fill(0);groups=[1,0,0,0,0,0];scan(){const e=this.data,t=this.site,n=e.site_xpos,s=e.site_xmat,o=Math.atan2(s[9*t+3],s[9*t+0]);for(let f=0;f<Yt.beams;f++){const m=o+Yt.angle_min+f*Yt.angle_inc;this.vec[3*f]=Math.cos(m),this.vec[3*f+1]=Math.sin(m),this.vec[3*f+2]=0}const l=[n[3*t],n[3*t+1],n[3*t+2]];this.mj.mj_multiRay(this.model,e,l,this.vec,this.groups,!0,this.body,this.geomid,this.dist,this.normal,Yt.beams,Yt.range_max);const u=this.dist.GetView(),d=new Array(Yt.beams);for(let f=0;f<Yt.beams;f++){const m=u[f];d[f]=m<0||m>Yt.range_max?Yt.range_max:Math.round(m*1e3)/1e3}return{angle_min:Yt.angle_min,angle_inc:Yt.angle_inc,range_max:Yt.range_max,ranges:d}}dispose(){this.geomid.delete(),this.dist.delete(),this.normal.delete()}}const Ku=5,Qu=10,As=.02,FM=.05,Wa=(i,e,t,n)=>i*n-e*t;function UM(i,e,t,n){const s=[e[0]-i[0],e[1]-i[1]],o=[n[0]-t[0],n[1]-t[1]],l=Wa(s[0],s[1],o[0],o[1]);if(Math.abs(l)<1e-12)return!1;const u=[t[0]-i[0],t[1]-i[1]],d=Wa(u[0],u[1],o[0],o[1])/l,f=Wa(u[0],u[1],s[0],s[1])/l;return d>=0&&d<=1&&f>=0&&f<=1}function NM(i){const e=i.left[0]-i.right[0],t=i.left[1]-i.right[1],n=Math.hypot(e,t)||1;return[t/n,-e/n]}function nu(i,e,t){if(!UM(i,e,t.left,t.right))return!1;const n=NM(t);return(e[0]-i[0])*n[0]+(e[1]-i[1])*n[1]>0}const OM=i=>Math.atan2(Math.sin(i),Math.cos(i));class kM{constructor(e){this.course=e,this.gates=e.gates??[]}phase="ready";nextGate=0;gatesPassed=0;missed=new Set;elapsed=0;result=null;startT=0;startCollisions=0;collisions=0;prev=null;pathLength=0;dwSum=0;prevW=0;ticks=0;deadmanTicks=0;dockHold=0;gates;get scored(){return PM(this.course)}reset(){Object.assign(this,{phase:"ready",nextGate:0,gatesPassed:0,missed:new Set,elapsed:0,result:null,startT:0,startCollisions:0,collisions:0,prev:null,pathLength:0,dwSum:0,prevW:0,ticks:0,deadmanTicks:0,dockHold:0})}update(e){const t=[],n=[e.pose.x,e.pose.y];if(!this.scored||this.phase==="finished"||this.phase==="dnf")return this.prev=n,t;if(this.phase==="ready"){if(!(Math.abs(e.vel.v)>As||Math.abs(e.vel.w)>As||Math.abs(e.applied.v)>As||Math.abs(e.applied.w)>As))return this.prev=n,t;this.phase="running",this.startT=e.t-e.dt,this.startCollisions=e.collisions,this.prevW=e.applied.w,t.push("run_start")}this.elapsed=e.t-this.startT,this.collisions=e.collisions-this.startCollisions,this.ticks++,e.status==="deadman"&&this.deadmanTicks++,this.dwSum+=Math.abs(e.applied.w-this.prevW)/Math.max(e.dt,1e-6),this.prevW=e.applied.w;const s=this.prev??n;this.pathLength+=Math.hypot(n[0]-s[0],n[1]-s[1]);for(let u=this.nextGate;u<this.gates.length;u++)if(nu(s,n,this.gates[u])){for(let d=this.nextGate;d<u;d++)this.missed.add(d),t.push(`gate_missed:${d}`);this.gatesPassed++,this.nextGate=u+1,t.push(`gate:${u}`);break}const o=this.course.finish;let l=!1;if(o?.type==="line")l=nu(s,n,o);else if(o?.type==="dock"){const u=Ju(o),d=Math.hypot(n[0]-u.center[0],n[1]-u.center[1])<=u.tol_m&&Math.abs(OM(e.pose.yaw-u.yaw))<=u.tol_deg*Math.PI/180&&Math.abs(e.vel.v)<FM;this.dockHold=d?this.dockHold+e.dt:0,l=this.dockHold>=u.hold_s-1e-9}else!o&&this.gates.length&&this.nextGate>=this.gates.length&&(l=!0);if(this.prev=n,l){for(let u=this.nextGate;u<this.gates.length;u++)this.missed.add(u),t.push(`gate_missed:${u}`);this.nextGate=this.gates.length,this.phase="finished",this.result=this.makeResult(!0),t.push("finish")}else this.course.time_limit&&this.elapsed>=this.course.time_limit&&(this.phase="dnf",this.result=this.makeResult(!1),t.push("dnf"));return t}scoreTime(){return this.elapsed+Ku*this.collisions+Qu*this.missed.size}makeResult(e){const t=n=>Math.round(n*1e3)/1e3;return{course:this.course.id,completed:e,elapsed:t(this.elapsed),score_time:e?t(this.scoreTime()):null,collisions:this.collisions,missed_gates:this.missed.size,gates_passed:this.gatesPassed,path_length:t(this.pathLength),smoothness:t(this.ticks?this.dwSum/this.ticks:0),deadman_pct:t(this.ticks?100*this.deadmanTicks/this.ticks:0)}}stateBlock(){return this.scored?{id:this.course.id,next_gate:this.nextGate,gates_passed:this.gatesPassed,elapsed:Math.round(this.elapsed*1e3)/1e3,done:this.phase==="finished"||this.phase==="dnf"}:null}}function BM(i,e,t){const n=l=>e.jnt_qposadr[hn(i,e,"joint",l)],s=l=>e.jnt_dofadr[hn(i,e,"joint",l)],o=(l,u)=>({dof:s(l),side:u});return{qx:n("slide_x"),qy:n("slide_y"),qyaw:n("yaw"),dx:s("slide_x"),dy:s("slide_y"),dyaw:s("yaw"),ax:hn(i,e,"actuator","vx"),ay:hn(i,e,"actuator","vy"),aw:hn(i,e,"actuator","wz"),wheels:[o("front_left_wheel",1),o("rear_left_wheel",1),o("front_right_wheel",-1),o("rear_right_wheel",-1)],chassisGeom:hn(i,e,"geom","chassis"),baseBody:hn(i,e,"body","base_link"),wheelRadius:t.wheel_radius_m,track:t.track_m}}function zM(i,e,t){const n=i.qpos[e.qyaw];i.ctrl[e.ax]=t.v*Math.cos(n),i.ctrl[e.ay]=t.v*Math.sin(n),i.ctrl[e.aw]=t.w;for(const s of e.wheels)i.qvel[s.dof]=(t.v-s.side*t.w*e.track/2)/e.wheelRadius}function iu(i,e){const t=i.qpos[e.qyaw];return{x:i.qpos[e.qx],y:i.qpos[e.qy],yaw:Math.atan2(Math.sin(t),Math.cos(t))}}function ru(i,e){const t=i.qpos[e.qyaw],n=i.qvel[e.dx],s=i.qvel[e.dy];return{v:n*Math.cos(t)+s*Math.sin(t),w:i.qvel[e.dyaw]}}function GM(i,e,t){i.qpos[e.qx]=t.x,i.qpos[e.qy]=t.y,i.qpos[e.qyaw]=t.yaw}class Jo{constructor(e,t,n,s,o,l){this.mj=e,this.model=t,this.data=n,this.course=s,this.clock=o.clock??(()=>performance.now()),this.maxSteps=o.maxStepsPerAdvance??100,this.physicsDt=t.opt.timestep,this.stepsPerControl=Math.max(1,Math.round(this.controlDt/this.physicsDt)),this.gate=new AM(en,s.speed_caps),this.ids=BM(e,t,l),this.collisions=new TM(this.ids.chassisGeom),this.run=new kM(s),this.lidar=new LM(e,t,n),this.fpvSite=hn(e,t,"site","fpv"),this.lidarSite=hn(e,t,"site","lidar"),this.reset()}gate;ids;collisions;run;impairment=new CM;pendingImpairment=null;lidar;lastScan=null;fpvSite;lidarSite;controlDt=1/en.CONTROL_HZ;stateDt=1/en.STATE_HZ;status="idle";applied={v:0,w:0};target={v:0,w:0};time=0;clock;physicsDt;stepsPerControl;controlAcc=0;stateAcc=0;maxSteps;tickHooks=[];stateListeners=[];eventListeners=[];lastStatus="idle";lastActionCount=0;static create(e,t,n,s,o={}){const{model:l,data:u}=DM(e,t,n);return new Jo(e,l,u,n,o,s)}reset(){this.mj.mj_resetData(this.model,this.data),GM(this.data,this.ids,this.course.start),this.mj.mj_forward(this.model,this.data),this.gate.resetMotion(),this.collisions.reset(),this.run.reset(),this.pendingImpairment?(this.impairment.configure(this.pendingImpairment),this.pendingImpairment=null):this.impairment.restart(),this.lastScan=null,this.lastActionCount=this.gate.stats.actionCount,this.applied={v:0,w:0},this.target={v:0,w:0},this.status=this.gate.isEstopped()?"estop":"idle",this.time=0,this.controlAcc=0,this.stateAcc=0}onTick(e){this.tickHooks.push(e)}deliver(e,t=this.clock()){if(!this.impairment.active){this.gate.ingest(e,t);return}this.impairment.offer(e,t)}setImpairment(e){return this.run.phase==="running"?(this.pendingImpairment={...this.pendingImpairment,...e},!1):(this.impairment.configure(e),this.pendingImpairment=null,!0)}onState(e){this.stateListeners.push(e)}onEvent(e){this.eventListeners.push(e)}emit(e){for(const t of this.eventListeners)t(e,+this.time.toFixed(3))}advance(e){this.controlAcc+=e;let t=this.maxSteps;for(;this.controlAcc>=this.controlDt&&t>=this.stepsPerControl;){this.controlAcc-=this.controlDt,this.controlTick();for(let s=0;s<this.stepsPerControl;s++)this.mj.mj_step(this.model,this.data);t-=this.stepsPerControl,this.time+=this.controlDt;const n=this.collisions.update(this.data,this.time*1e3);for(let s=0;s<n.length;s++)this.emit("collision");for(const s of this.run.update({t:this.time,dt:this.controlDt,pose:iu(this.data,this.ids),vel:ru(this.data,this.ids),applied:this.applied,status:this.status,collisions:this.collisions.count}))this.emit(s);if(this.stateAcc+=this.controlDt,this.stateAcc>=this.stateDt-1e-9){this.stateAcc-=this.stateDt,this.lastScan=this.lidar.scan();const s=this.state();for(const o of this.stateListeners)o(s)}}t<this.stepsPerControl&&(this.controlAcc=Math.min(this.controlAcc,this.controlDt))}controlTick(){const e=this.clock();for(const s of this.tickHooks)s(e);for(const{msg:s,at:o}of this.impairment.release(e))this.gate.ingest(s,o);const t=this.gate.tick(e,this.controlDt);this.applied=t.applied,this.target=t.target,this.status=t.status,this.status!==this.lastStatus&&(this.status==="deadman"||this.status==="estop")&&this.emit(this.status),this.lastStatus=this.status;const n=this.gate.stats;if(n.actionCount!==this.lastActionCount&&(this.lastActionCount=n.actionCount,this.emit(`action:${n.lastAction}`),n.lastAction==="restart"||n.lastAction==="start")){this.reset();return}zM(this.data,this.ids,this.applied)}state(){return{type:"state",t:+this.time.toFixed(3),pose:iu(this.data,this.ids),vel:ru(this.data,this.ids),cmd_applied:{...this.applied},cmd_echo_t:this.gate.stats.lastEchoT,status:this.run.phase==="finished"?"finished":this.status,collisions:this.collisions.count,...this.lastScan?{scan:this.lastScan}:{},course:this.run.stateBlock()}}}function HM(i,e=10){const t=`setInterval(() => postMessage(0), ${e});`;try{const n=URL.createObjectURL(new Blob([t],{type:"text/javascript"})),s=new Worker(n);return s.onmessage=()=>i(),()=>{s.terminate(),URL.revokeObjectURL(n)}}catch{const n=setInterval(i,e);return()=>clearInterval(n)}}function Xe(i,e={},t){const n=document.createElement(i);return Object.assign(n.style,e),t!==void 0&&(n.textContent=t),n}function Vs(i,e){const t=Xe("div",{position:"fixed",zIndex:"10",padding:"10px 12px",borderRadius:"10px",background:"rgba(20,23,28,0.82)",border:"1px solid rgba(255,255,255,0.08)",backdropFilter:"blur(6px)",minWidth:"200px",userSelect:"none",...i});return t.id=e,document.body.appendChild(t),t}function Wn(i,e,t="#2d333c"){const n=Xe("button",{background:t,color:"#e8eaed",border:"1px solid rgba(255,255,255,0.12)",borderRadius:"6px",padding:"5px 10px",font:"inherit",cursor:"pointer"},i);return n.addEventListener("click",e),n.addEventListener("keydown",s=>{s.key===" "&&s.preventDefault()}),n}function Er(i){return String(i??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}class VM{constructor(e){this.client=e;const t=Vs({left:"12px",top:"12px",width:"300px"},"connection"),n=Xe("div",{display:"flex",alignItems:"center",gap:"8px"});this.light=Xe("span",{width:"10px",height:"10px",borderRadius:"50%",display:"inline-block"}),this.light.id="bridge-light",this.label=Xe("b",{}),this.label.id="bridge-label",n.append(this.light,this.label);const s=Xe("div",{display:"flex",gap:"6px",margin:"6px 0"});this.url=Xe("input",{flex:"1",background:"#2d333c",color:"#e8eaed",border:"1px solid #444",borderRadius:"6px",padding:"4px 6px",font:"12px ui-monospace, monospace"}),this.url.value=e.url,this.url.id="bridge-url",this.url.addEventListener("keydown",l=>{l.key==="Enter"&&e.connect(this.url.value.trim())}),s.append(this.url,Wn("Connect",()=>e.connect(this.url.value.trim()))),this.details=Xe("div",{lineHeight:"1.5",opacity:"0.85",fontVariantNumeric:"tabular-nums"}),this.details.id="bridge-details",this.warn=Xe("div",{color:"#ffb74d",marginTop:"4px"});const o=Xe("div",{opacity:".55",fontSize:"11px",marginTop:"6px"},"Run jackal-bridge on this laptop. If Chrome asks to allow local network access, click Allow.");t.append(n,s,this.details,this.warn,o)}light;label;details;warn;url;update(e){const t=this.client,n=t.status,[s,o]=t.link==="replaced"?["#5f6368","Another sim tab is using the bridge"]:t.link!=="open"?["#5f6368",t.link==="connecting"?"Bridge: connecting…":"No bridge (keyboard / gamepad)"]:n?.active_source?n.deadman?["#ff9800","Bridge: source silent (deadman)"]:["#4caf50","Bridge: driving"]:["#ffca28","Bridge connected, no source"];if(this.light.style.background=s,this.light.dataset.state=t.link==="replaced"?"replaced":t.link!=="open"?"none":n?.active_source?"active":"idle",this.label.textContent=o,t.link==="open"&&n){const l=n.rtt_ms==null?"–":`${n.rtt_ms.toFixed(0)} ms`;this.details.innerHTML=`source <b>${Er(n.active_source??"—")}</b>${n.ingress?` via ${Er(n.ingress)}`:""}<br>rate ${t.rateHz(e)} Hz · rtt ${l}<br>drops: invalid <b id="drops-invalid">${(n.drops_invalid??0)+t.dropsInvalid}</b> · rate ${n.drops_rate??0} · other source ${n.drops_inactive??0}<br>LSL ${Er(n.lsl??"?")} · ${Number(n.lsl_peers??0)} peer(s)<br><a href="http://localhost:8770/" target="_blank" rel="noopener" style="color:#8ab4f8">Signals viewer ↗</a> <span style="opacity:.55">(lsl-web-viewer --open)</span>`}else t.link==="replaced"?this.details.textContent="Only one sim tab can be connected. Close the other tab, or click Connect to take over here.":this.details.textContent="";this.warn.textContent=t.versionWarning??""}}const WM=["run","timestamp","team","source","course","completed","elapsed","score_time","collisions","missed_gates","gates_passed","path_length","smoothness","deadman_pct","drops","mean_latency_ms","latency_knob_ms","drop_knob_pct","drop_seed","rtlx","rtlx_mental","rtlx_physical","rtlx_temporal","rtlx_performance","rtlx_effort","rtlx_frustration"],XM=["t","x","y","yaw","v","w","v_cmd","w_cmd","status","next_gate"],$M=i=>{const e=i==null?"":String(i);return/[",\n]/.test(e)?`"${e.replace(/"/g,'""')}"`:e};function su(i,e){return[i.join(","),...e.map(t=>i.map(n=>$M(t[n])).join(","))].join(`
`)+`
`}function au(i,e){const t=URL.createObjectURL(new Blob([e],{type:"text/csv"})),n=document.createElement("a");n.href=t,n.download=i,n.click(),setTimeout(()=>URL.revokeObjectURL(t),1e3)}class jM{constructor(e,t,n){this.sim=e,this.bridge=t,this.team=n,e.onEvent(s=>{s==="run_start"?(this.trace=[],this.rtt=[],this.dropsAtStart=this.drops()):(s==="finish"||s==="dnf")&&e.run.result&&this.record(e.run.result)}),e.onState(s=>this.sample(s))}rows=[];traces=[];trace=[];rtt=[];dropsAtStart=0;listeners=[];onRow(e){this.listeners.push(e)}drops(){const e=this.bridge.status;return this.sim.gate.stats.seqDrops+(e?.drops_invalid??0)+(e?.drops_rate??0)+this.bridge.dropsInvalid}sample(e){if(this.sim.run.phase!=="running")return;const t=this.bridge.status?.rtt_ms;typeof t=="number"&&this.rtt.push(t),this.trace.push({t:e.t,x:e.pose.x.toFixed(4),y:e.pose.y.toFixed(4),yaw:e.pose.yaw.toFixed(4),v:e.cmd_applied.v.toFixed(3),w:e.cmd_applied.w.toFixed(3),v_cmd:this.sim.target.v.toFixed(3),w_cmd:this.sim.target.w.toFixed(3),status:e.status,next_gate:e.course?.next_gate??""})}record(e){const t={run:this.rows.length+1,timestamp:new Date().toISOString(),team:this.team(),source:this.sim.gate.stats.lastSource??"",course:e.course,completed:e.completed?1:0,elapsed:e.elapsed,score_time:e.score_time??"",collisions:e.collisions,missed_gates:e.missed_gates,gates_passed:e.gates_passed,path_length:e.path_length,smoothness:e.smoothness,deadman_pct:e.deadman_pct,drops:this.drops()-this.dropsAtStart,mean_latency_ms:this.rtt.length?+(this.rtt.reduce((n,s)=>n+s,0)/this.rtt.length).toFixed(1):"",latency_knob_ms:this.sim.impairment.latencyMs,drop_knob_pct:this.sim.impairment.dropPct,drop_seed:this.sim.impairment.seed,rtlx:"",rtlx_mental:"",rtlx_physical:"",rtlx_temporal:"",rtlx_performance:"",rtlx_effort:"",rtlx_frustration:""};this.rows.push(t),this.traces.push({run:t.run,course:e.course,rows:this.trace});for(const n of this.listeners)n(t)}setRtlx(e,t){const n=this.rows.find(s=>s.run===e);if(n){n.rtlx=t.rtlx;for(const s of["mental","physical","temporal","performance","effort","frustration"])n[`rtlx_${s}`]=t[s]}}runsCsv(){return su(WM,this.rows)}lastTraceCsv(){const e=this.traces.at(-1);return e?su(XM,e.rows):null}}class YM{teamInput;runsLabel;askRtlx;constructor(e,t,n,s,o,l){const u=Vs({right:"12px",bottom:"12px"},"controls"),d=(...G)=>{const R=Xe("div",{display:"flex",gap:"6px",alignItems:"center",margin:"4px 0"});R.append(...G),u.appendChild(R)},f=Xe("select",{flex:"1",background:"#2d333c",color:"#e8eaed",border:"1px solid #444",borderRadius:"6px",padding:"4px"});for(const G of t)f.add(new Option(G.name,G.id,G.id===n,G.id===n));f.addEventListener("change",()=>s(f.value)),d(Xe("span",{opacity:".7"},"course"),f),d(Wn("Reset",()=>e.reset()),Wn("E-stop",()=>e.gate.estop(),"#8e1c1c"),Wn("Clear E-stop",()=>e.gate.reset()));const m=new Map;for(const[G,R]of[["chase","Chase"],["top","Top"],["fpv","FPV"]]){const O=Wn(R,()=>o.set(G));O.dataset.cam=G,m.set(G,O)}const g=G=>m.forEach((R,O)=>{R.style.background=O===G?"#3d5afe":"#2d333c"});o.onChange(g),g(o.mode),d(Xe("span",{opacity:".7"},"camera"),...m.values()),this.teamInput=Xe("input",{flex:"1",background:"#2d333c",color:"#e8eaed",border:"1px solid #444",borderRadius:"6px",padding:"4px 6px"}),this.teamInput.placeholder="team id",this.teamInput.id="team-id",d(Xe("span",{opacity:".7"},"team"),this.teamInput);const v=(G,R,O,$,D,E)=>{const k=Xe("input",{flex:"1"});Object.assign(k,{type:"range",min:"0",max:String(O),step:String($),value:String(E),id:R});const te=Xe("span",{width:"58px",textAlign:"right",fontVariantNumeric:"tabular-nums"},`${E} ${D}`);return k.addEventListener("input",()=>{te.textContent=`${k.value} ${D}`}),d(Xe("span",{opacity:".7",width:"52px"},G),k,te),k};u.appendChild(Xe("div",{opacity:".55",fontSize:"11px",marginTop:"6px"},"telepresence"));const y=v("latency","knob-latency",1e3,50,"ms",e.impairment.latencyMs),T=v("drop","knob-drop",50,5,"%",e.impairment.dropPct),C=Xe("div",{fontSize:"11px",color:"#ffb74d",minHeight:"0"});C.id="knob-note",u.appendChild(C);const S=()=>{const G=e.setImpairment({latencyMs:Number(y.value),dropPct:Number(T.value)});C.textContent=G?"":"applies after this run (press Reset)"};y.addEventListener("change",S),T.addEventListener("change",S),e.onEvent(G=>{G==="run_start"&&(C.textContent="")}),this.askRtlx=Xe("input"),Object.assign(this.askRtlx,{type:"checkbox",id:"ask-rtlx"});let _=null;try{_=localStorage.getItem("jackal.askRtlx")}catch{}this.askRtlx.checked=new URLSearchParams(location.search).get("rtlx")==="1"||_==="1",this.askRtlx.addEventListener("change",()=>{try{localStorage.setItem("jackal.askRtlx",this.askRtlx.checked?"1":"0")}catch{}});const N=Xe("label",{display:"flex",gap:"6px",alignItems:"center",cursor:"pointer"});N.append(this.askRtlx,Xe("span",{},"Ask workload (NASA-RTLX) after each run")),d(N),this.runsLabel=Xe("span",{opacity:".7"},"runs 0"),this.runsLabel.id="runs-count";const L=Wn("Runs CSV",()=>au(`jackal_runs_${ou()}.csv`,l.runsCsv()));L.id="dl-runs";const I=Wn("Last trace",()=>{const G=l.lastTraceCsv();G&&au(`jackal_trace_${ou()}.csv`,G)});I.id="dl-trace",l.onRow(()=>{this.runsLabel.textContent=`runs ${l.rows.length}`}),d(this.runsLabel,L,I),u.appendChild(Xe("div",{opacity:".55",marginTop:"4px",fontSize:"11px"},"Keyboard: W/S drive · A/D turn · Shift fine · Space stop · C camera"))}}const ou=()=>new Date().toISOString().replace(/[:.]/g,"-").slice(0,19);class qM{constructor(e,t){this.sim=e,this.view=t;const n=Vs({left:"50%",top:"12px",transform:"translateX(-50%)",textAlign:"center",minWidth:"320px"},"course");this.line=Xe("div",{fontVariantNumeric:"tabular-nums",lineHeight:"1.5"}),this.line.id="course-line",n.appendChild(this.line),e.run.scored||(n.style.display="none"),this.banner=Xe("div",{position:"fixed",left:"50%",top:"38%",transform:"translate(-50%,-50%)",zIndex:"20",display:"none",padding:"18px 26px",borderRadius:"14px",background:"rgba(20,23,28,0.92)",border:"1px solid rgba(255,255,255,0.15)",textAlign:"center",fontSize:"15px",lineHeight:"1.6"}),this.banner.id="finish-banner",document.body.appendChild(this.banner),(e.course.gates??[]).forEach((s,o)=>{this.posts.push([hn(e.mj,e.model,"geom",`gate${o}_l`),hn(e.mj,e.model,"geom",`gate${o}_r`)])})}line;banner;posts=[];lastNext=-1;update(){const e=this.sim.run;if(!e.scored)return;const t=this.sim.course.gates?.length??0,n={ready:"ready (the clock starts when you move)",running:"running",finished:"finished",dnf:"DNF (time limit)"}[e.phase],s=e.scoreTime(),o=this.sim.course.time_limit?` / ${this.sim.course.time_limit} s`:"";this.line.innerHTML=`<b>${this.sim.course.name}</b> · ${n}<br>time <b>${e.elapsed.toFixed(1)} s</b>${o} · gates <b>${e.gatesPassed}/${t}</b>${e.missed.size?` · missed <b style="color:#ffb74d">${e.missed.size}</b>`:""} · score <b>${s.toFixed(1)} s</b>`,e.nextGate!==this.lastNext&&(this.posts.forEach(([u,d],f)=>{const m=f===e.nextGate,g=f<e.nextGate;this.view.setGeomColor(u,m?16771899:g?5593696:15022389,g?.5:1),this.view.setGeomColor(d,m?16771899:g?5593696:4157414,g?.5:1)}),this.lastNext=e.nextGate);const l=e.result;l&&this.banner.style.display==="none"?(this.banner.innerHTML=l.completed?`<div style="font-size:22px;font-weight:700">Finished</div>score <b style="font-size:20px">${l.score_time.toFixed(2)} s</b><br><span style="opacity:.75">time ${l.elapsed.toFixed(2)} s + ${Ku} s × ${l.collisions} collisions + ${Qu} s × ${l.missed_gates} missed gates</span><br>`:`<div style="font-size:22px;font-weight:700;color:#ffb74d">DNF</div>time limit reached · ${l.gates_passed}/${t} gates<br>`,this.banner.innerHTML+='<span style="opacity:.6">Press Reset (or send action "restart") to run again</span>',this.banner.style.display="block"):!l&&this.banner.style.display!=="none"&&(this.banner.style.display="none")}}const eh=[{key:"mental",label:"Mental demand",lo:"Very low",hi:"Very high"},{key:"physical",label:"Physical demand",lo:"Very low",hi:"Very high"},{key:"temporal",label:"Temporal demand (time pressure)",lo:"Very low",hi:"Very high"},{key:"performance",label:"Performance (how well you did)",lo:"Perfect",hi:"Failure"},{key:"effort",label:"Effort",lo:"Very low",hi:"Very high"},{key:"frustration",label:"Frustration",lo:"Very low",hi:"Very high"}];function ZM(i){const e=eh.map(t=>i[t.key]);return{...i,rtlx:Math.round(e.reduce((t,n)=>t+n,0)/e.length*10)/10}}class JM{overlay;title;sliders=new Map;done=null;constructor(){this.overlay=Xe("div",{position:"fixed",inset:"0",zIndex:"30",display:"none",alignItems:"center",justifyContent:"center",background:"rgba(0,0,0,0.55)"}),this.overlay.id="rtlx";const e=Xe("div",{width:"440px",maxWidth:"92vw",maxHeight:"88vh",overflowY:"auto",padding:"20px",borderRadius:"12px",background:"#1b1e24",boxShadow:"0 10px 40px rgba(0,0,0,0.5)"});this.title=Xe("div",{fontSize:"15px",fontWeight:"600",marginBottom:"4px"},"Workload (NASA-RTLX)"),e.append(this.title,Xe("div",{opacity:"0.6",marginBottom:"14px"},"Rate the run you just finished."));for(const o of eh){const l=Xe("div",{display:"flex",justifyContent:"space-between",marginBottom:"3px"}),u=Xe("span",{opacity:"0.7",fontVariantNumeric:"tabular-nums"},"50");l.append(Xe("span",{},o.label),u);const d=Xe("input",{width:"100%"});Object.assign(d,{type:"range",min:"0",max:"100",step:"5",value:"50"}),d.dataset.key=o.key,d.addEventListener("input",()=>{u.textContent=d.value});const f=Xe("div",{display:"flex",justifyContent:"space-between",fontSize:"10px",opacity:"0.5"});f.append(Xe("span",{},o.lo),Xe("span",{},o.hi));const m=Xe("div",{marginBottom:"12px"});m.append(l,d,f),e.appendChild(m),this.sliders.set(o.key,d)}const t=Xe("div",{display:"flex",gap:"8px",marginTop:"8px"}),n=Wn("Submit",()=>this.finish(!0),"#2e7d32");n.id="rtlx-submit",Object.assign(n.style,{flex:"1",padding:"9px"});const s=Wn("Skip",()=>this.finish(!1));s.id="rtlx-skip",t.append(n,s),e.appendChild(t),this.overlay.appendChild(e),document.body.appendChild(this.overlay)}get open(){return this.overlay.style.display!=="none"}ask(e){this.title.textContent=`Workload (NASA-RTLX): ${e}`;for(const t of this.sliders.values())t.value="50",t.dispatchEvent(new Event("input"));return this.overlay.style.display="flex",new Promise(t=>{this.done=t})}finish(e){this.overlay.style.display="none";const t=Object.fromEntries([...this.sliders].map(([s,o])=>[s,Number(o.value)])),n=this.done;this.done=null,n?.(e?ZM(t):null)}setAll(e){for(const t of this.sliders.values())t.value=String(e),t.dispatchEvent(new Event("input"))}}const KM={ok:["OK","#2e7d32"],idle:["IDLE","#455a64"],deadman:["DEADMAN","#e65100"],estop:["E-STOP","#c62828"],finished:["FINISHED","#1565c0"]};function cu(i){const e=Xe("div",{display:"flex",alignItems:"center",gap:"8px",margin:"4px 0"}),t=Xe("div",{position:"relative",flex:"1",height:"10px",borderRadius:"5px",background:"#2a2e35",overflow:"hidden"}),n=Xe("div",{position:"absolute",left:"50%",top:"0",bottom:"0",width:"1px",background:"#596070"}),s=Xe("div",{position:"absolute",top:"0",bottom:"0",background:"#4f8cff"});t.append(n,s);const o=Xe("span",{width:"64px",textAlign:"right",fontVariantNumeric:"tabular-nums"});return e.append(Xe("b",{width:"14px"},i),t,o),{row:e,fill:s,val:o}}class QM{pill;v=cu("v");w=cu("w");info;constructor(){const e=Vs({left:"12px",bottom:"12px",width:"260px"},"hud"),t=Xe("div",{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"4px"});this.pill=Xe("span",{padding:"2px 10px",borderRadius:"10px",fontWeight:"700",letterSpacing:".04em"}),this.pill.id="hud-status",t.append(Xe("b",{},"Jackal"),this.pill),this.info=Xe("div",{opacity:"0.85",marginTop:"6px",lineHeight:"1.5",fontVariantNumeric:"tabular-nums"}),e.append(t,this.v.row,this.w.row,this.info)}update(e,t){const[n,s]=KM[e.status];this.pill.textContent=n,this.pill.style.background=s;const o=(f,m,g,v)=>{const y=Math.max(-1,Math.min(1,m/g))/2;Object.assign(f.fill.style,y>=0?{left:"50%",width:`${y*100}%`}:{left:`${(.5+y)*100}%`,width:`${-y*100}%`}),f.val.textContent=`${m>=0?"+":""}${m.toFixed(2)} ${v}`};o(this.v,e.applied.v,en.V_MAX,"m/s"),o(this.w,e.applied.w,en.W_MAX,"r/s");const l=e.state(),u=e.impairment,d=u.active?`<span id="hud-impairment" style="background:#5d4037;padding:1px 6px;border-radius:8px">⏱ ${u.latencyMs} ms · ${u.dropPct} % drop</span><br>`:"";this.info.innerHTML=d+`source <b>${Er(t??"—")}</b><br>collisions <b id="hud-collisions">${l.collisions}</b> · t ${l.t.toFixed(1)} s<br>action ${Er(e.gate.stats.lastAction??"—")} · pose (${l.pose.x.toFixed(2)}, ${l.pose.y.toFixed(2)}, ${(l.pose.yaw*180/Math.PI).toFixed(0)}°)`}}const eE=["jackal.xml","meshes/jackal-base.stl","meshes/jackal-fender.stl","meshes/jackal-wheel.stl"],tE={footprint_lwh_m:[.511,.43,.248],mass_kg:18.43,wheel_radius_m:.098,track_m:.3756,wheelbase_m:.262,base_z_m:.0635,wheels:["front_left_wheel","front_right_wheel","rear_left_wheel","rear_right_wheel"]},th={files:eE,dims:tE},nE=Object.assign({"../../models/jackal/jackal.xml":l_,"../../models/jackal/meshes/jackal-base.stl":u_,"../../models/jackal/meshes/jackal-fender.stl":h_,"../../models/jackal/meshes/jackal-wheel.stl":d_});async function iE(){const i={};return await Promise.all(th.files.map(async e=>{const t=nE[`../../models/jackal/${e}`];if(!t)throw new Error(`model file missing from bundle: ${e}`);i[e]=new Uint8Array(await(await fetch(t)).arrayBuffer())})),i}const rE="/Hackathon/",lu=async i=>{const e=await fetch(`${rE}${i}`,{cache:"no-cache"});if(!e.ok)throw new Error(`${i}: HTTP ${e.status}`);return e.json()};async function sE(){const i=new URLSearchParams(location.search),[e,t,n]=await Promise.all([__({locateFile:R=>R.endsWith(".wasm")?g_:R}),iE(),lu("courses/index.json")]),s=i.get("course")??n.default,o=await lu(`courses/${s}.json`),l=Jo.create(e,t,o,th.dims),u=R=>i.has(R)&&Number.isFinite(Number(i.get(R)))?Number(i.get(R)):void 0;l.setImpairment({latencyMs:u("latency"),dropPct:u("drop"),seed:u("seed")});const d=new V_((R,O)=>l.deliver(R,O)),f=new Vc(Vc.defaultUrl(),l);l.onTick(R=>{d.bridgeActive=f.isActive(R),d.tick(R)}),f.connect(),G_();const m=document.getElementById("view"),g=new bM(m,l.model),v=new xM(g.camera,o.arena.size);v.onChange(R=>g.setRobotVisible(R!=="fpv")),g.setRobotVisible(v.mode!=="fpv"),window.addEventListener("keydown",R=>{!hu(R)&&R.key.toLowerCase()==="c"&&!R.metaKey&&!R.ctrlKey&&v.cycle()});const y=new QM,T=new VM(f),C=new qM(l,g);let S=null;const _=new jM(l,f,()=>S?.teamInput.value.trim()??"");S=new YM(l,n.courses,s,R=>{i.set("course",R),location.search=i.toString()},v,_);const N=new JM;_.onRow(async R=>{if(!S?.askRtlx.checked)return;d.paused=!0;const O=await N.ask(`run ${R.run}, ${R.course}`);d.paused=!1,O&&_.setRtlx(R.run,O)}),i.has("debug")&&g.showCollision(!0),document.getElementById("loading")?.remove(),Object.assign(window,{__sim:l,__arbiter:d,__view:g,__bridge:f,__cams:v,__log:_,__rtlx:N});let L=performance.now();HM(()=>{const R=performance.now();l.advance(Math.min(.1,(R-L)/1e3)),L=R});let I=performance.now();const G=R=>{const O=Math.min(.1,(R-I)/1e3);I=R,g.sync(l.data);const $=l.state().pose,D=l.data.site_xpos,E=l.fpvSite,k=l.lidarSite;v.update($,[D[3*E],D[3*E+1],D[3*E+2]],O,g.aspect),g.setScan(v.mode==="top"?l.lastScan:null,[D[3*k],D[3*k+1],D[3*k+2]],$.yaw),C.update(),y.update(l,d.localSource??l.gate.stats.lastSource),T.update(performance.now()),g.render(v.camera),requestAnimationFrame(G)};requestAnimationFrame(G)}sE().catch(i=>{console.error(i);const e=document.getElementById("loading");e&&(e.textContent=`Failed to start: ${i instanceof Error?i.message:i}`)});const aE=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));
