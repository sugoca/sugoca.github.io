(function(e){function t(t){for(var n,a,i=t[0],c=t[1],l=t[2],u=0,p=[];u<i.length;u++)a=i[u],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&p.push(s[a][0]),s[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);d&&d(t);while(p.length)p.shift()();return r.push.apply(r,l||[]),o()}function o(){for(var e,t=0;t<r.length;t++){for(var o=r[t],n=!0,i=1;i<o.length;i++){var c=o[i];0!==s[c]&&(n=!1)}n&&(r.splice(t--,1),e=a(a.s=o[0]))}return e}var n={},s={app:0},r=[];function a(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.m=e,a.c=n,a.d=function(e,t,o){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(o,n,function(t){return e[t]}.bind(null,n));return o},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var d=c;r.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"034f":function(e,t,o){"use strict";var n=o("85ec"),s=o.n(n);s.a},"104b":function(e,t,o){"use strict";var n=o("d624"),s=o.n(n);s.a},"56d7":function(e,t,o){"use strict";o.r(t);o("7db0"),o("d3b7"),o("4d63"),o("ac1f"),o("25f0"),o("3ca3"),o("5319"),o("841c"),o("1276"),o("ddb0"),o("2b3d"),o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("2b0e"),s=function(){var e=this,t=e.$createElement,o=e._self._c||t;return e.loaded?o("div",{staticClass:"app",attrs:{id:"app"}},[o("div",{staticClass:"timer"},[o("div",{staticClass:"timer_line",style:{width:e.tw}})]),o("header",[e._m(0),o("input",{directives:[{name:"model",rawName:"v-model",value:e.q,expression:"q"}],staticClass:"appq",attrs:{type:"text"},domProps:{value:e.q},on:{input:function(t){t.target.composing||(e.q=t.target.value)}}})]),o("main",[o("draggable",{staticClass:"codeboxes",class:{insort:e.insort},attrs:{group:"codes",tag:"div",sort:!e.q,draggable:".codeitem",handle:".setup"},on:{change:e.sorted,start:function(t){e.insort=!0},end:function(t){e.insort=!1}},model:{value:e.secrets,callback:function(t){e.secrets=t},expression:"secrets"}},[e._l(e.secretsShow,(function(t,n){return o("div",{key:"c"+n,staticClass:"codeitem"},[o("div",{staticClass:"code"},[o("span",{staticClass:"click",attrs:{title:e.sys.lang.k.copy},on:{click:function(o){o.preventDefault(),e.copy(t.totp,e.tpl(e.sys.lang.m.codeCopied,t))}}},[e._v(e._s(t.totp))])]),o("div",{staticClass:"name"},[e._v(e._s(t.name))]),t.color?o("div",{staticClass:"color",style:{backgroundColor:t.color}}):e._e(),o("div",{staticClass:"setup click",attrs:{title:e.sys.lang.k.configandsort},on:{click:function(o){return o.preventDefault(),e.formEdit(t)}}},[o("i-config")],1)])})),o("div",{staticClass:"click adder",attrs:{slot:"footer",title:e.sys.lang.k.add},on:{click:function(t){return t.preventDefault(),e.formAdd()}},slot:"footer"},[o("iAdd")],1)],2),o("div",{staticClass:"about",domProps:{innerHTML:e._s(e.sys.lang.t.about)}})],1),o("footer",[o("nav",[e.download?o("a",{attrs:{href:e.download,download:"totp-app-backup-"+e.updated+".json"}},[e._v(e._s(e.sys.lang.k.backup))]):e._e(),o("a",{attrs:{href:"/"},on:{click:function(t){return t.preventDefault(),e.restoreSecrets(t)}}},[e._v(e._s(e.sys.lang.k.restore))])]),o("div",{staticClass:"copy"},[e._v("TOTP.APP © 2018-"+e._s(e.year))]),o("langsel",{staticClass:"langs"})],1),o("z-dialogs",{attrs:{multi:!1,closer:!1,"closer-outside":!0}}),o("z-notices",{attrs:{reverse:!0,timeout:3e3}})],1):e._e()},r=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("a",{staticClass:"logo",attrs:{href:"/"}},[o("img",{staticClass:"icon",attrs:{src:"/img/logo.svg"}}),o("div",{staticClass:"abbr"},[e._v("TOTP"),o("sup",[e._v(".APP")])])])}],a=(o("4de4"),o("4160"),o("caad"),o("c975"),o("fb6a"),o("b0c0"),o("159b"),o("53ca")),i=o("362d"),c=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 92.833 92.833",fill:"currentColor"}},[o("path",{attrs:{d:"M89.834,1.75H3c-1.654,0-3,1.346-3,3v13.334c0,1.654,1.346,3,3,3h86.833c1.653,0,3-1.346,3-3V4.75C92.834,3.096,91.488,1.75,89.834,1.75z"}}),o("path",{attrs:{d:"M89.834,36.75H3c-1.654,0-3,1.346-3,3v13.334c0,1.654,1.346,3,3,3h86.833c1.653,0,3-1.346,3-3V39.75C92.834,38.096,91.488,36.75,89.834,36.75z"}}),o("path",{attrs:{d:"M89.834,71.75H3c-1.654,0-3,1.346-3,3v13.334c0,1.654,1.346,3,3,3h86.833c1.653,0,3-1.346,3-3V74.75C92.834,73.095,91.488,71.75,89.834,71.75z"}})])},l=[],d=o("2877"),u={},p=Object(d["a"])(u,c,l,!1,null,null,null),f=p.exports,h=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 330 330",fill:"currentColor"}},[o("path",{attrs:{d:"M315,120H210V15c0-8.284-6.716-15-15-15h-60c-8.284,0-15,6.716-15,15v105H15c-8.284,0-15,6.716-15,15v60c0,8.284,6.716,15,15,15h105v105c0,8.284,6.716,15,15,15h60c8.284,0,15-6.716,15-15V210h105c8.284,0,15-6.716,15-15v-60C330,126.716,323.284,120,315,120z"}})])},m=[],g={},v=Object(d["a"])(g,h,m,!1,null,null,null),b=v.exports,y=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"dialog"},[o("div",{staticClass:"fhead"},[o("div",{staticClass:"title"},[e._v(e._s(e.sys.lang.t.add))]),o("a",{staticClass:"closer",attrs:{href:"/"},on:{click:function(t){return t.preventDefault(),e.close(t)}}},[o("i-close")],1)]),o("form",{staticClass:"tpad",on:{submit:function(t){return t.preventDefault(),e.add(t)}}},[o("div",[o("input",{directives:[{name:"model",rawName:"v-model",value:e.f.secret,expression:"f.secret"}],attrs:{required:"",title:e.sys.lang.f.appSecret,placeholder:e.sys.lang.f.appSecret},domProps:{value:e.f.secret},on:{input:function(t){t.target.composing||e.$set(e.f,"secret",t.target.value)}}})]),o("div",[o("input",{directives:[{name:"model",rawName:"v-model",value:e.f.name,expression:"f.name"}],attrs:{required:"",title:e.sys.lang.f.appName,placeholder:e.sys.lang.f.appName},domProps:{value:e.f.name},on:{input:function(t){t.target.composing||e.$set(e.f,"name",t.target.value)}}})]),o("div",[o("div",{staticClass:"colors"},e._l(e.colors,(function(t,n){return o("div",{key:"color"+n,class:{c:t==e.f.color},on:{click:function(o){o.preventDefault(),e.f.color=t}}},[o("div",{style:{backgroundColor:t}})])})),0)]),o("div",[o("div",{staticClass:"buttons"},[o("button",{attrs:{type:"submit"}},[e._v(e._s(e.sys.lang.k.add))])])])]),o("div",{staticClass:"tpad"},[o("a",{attrs:{href:"#"},on:{click:function(t){t.preventDefault(),e.scanner=!e.scanner}}},[e._v(e._s(e.sys.lang.k.scanqr))])]),e.scanner?o("div",{staticClass:"tpad"},[o("qrscan",{attrs:{checker:e.otpStringParser},on:{scanned:e.scanned}})],1):e._e()])},w=[],P=["","#111111","#f44336","#e91e63","#9c27b0","#673ab7","#3f51b5","#2196f3","#03a9f4","#00bcd4","#009688","#4caf50","#8bc34a","#cddc39","#ffeb3b","#ffc107","#ff9800","#ff5722","#795548","#9e9e9e","#607d8b"],T=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("svg",{attrs:{viewBox:"0 0 386.667 386.667",xmlns:"http://www.w3.org/2000/svg"}},[o("path",{attrs:{fill:"currentColor",d:"m386.667 45.564-45.564-45.564-147.77 147.769-147.769-147.769-45.564 45.564 147.769 147.769-147.769 147.77 45.564 45.564 147.769-147.769 147.769 147.769 45.564-45.564-147.768-147.77z"}})])},S=[],C={},k=Object(d["a"])(C,T,S,!1,null,null,null),O=k.exports,_=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("video",{staticStyle:{width:"100%",height:"auto"}})},x=[],A=o("7959"),j={props:{checker:null},data:function(){return{scanner:null}},mounted:function(){var e=this;this.scanner=new A["a"](this.$el,(function(t){"function"==typeof e.checker?e.checker(t)&&(e.scanner.stop(),e.$emit("scanned",t)):(e.scanner.stop(),e.$emit("scanned",t))})),this.scanner.start()},beforeDestroy:function(){this.scanner&&this.scanner.destroy(),this.scanner=null}},$=j,D=Object(d["a"])($,_,x,!1,null,null,null),E=D.exports,L={components:{iClose:O,qrscan:E},props:{name:String,secret:String,color:String,secretToCode:null,otpStringParser:null},data:function(){return{scanner:!1,colors:P,f:{secret:"",name:"",color:""}}},methods:{scanned:function(e){this.scanner=!1;var t=this.otpStringParser(e);t&&Object.assign(this.f,t)},close:function(){this.$emit("close")},add:function(){if(this.f.secret&&this.f.name){if(!this.secretToCode(this.f.secret))return this.$n.add({html:this.sys.lang.e.invalidSecret,c:"error"});this.$emit("add",this.f),this.close()}}},created:function(){this.f={secret:this.secret||"",name:this.name||"",color:this.color||""}}},I=L,B=Object(d["a"])(I,y,w,!1,null,null,null),M=B.exports,q=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"dialog"},[o("div",{staticClass:"fhead"},[o("div",{staticClass:"title"},[e._v(e._s(e.sys.lang.t.edit))]),o("a",{staticClass:"closer",attrs:{href:"/"},on:{click:function(t){return t.preventDefault(),e.close(t)}}},[o("i-close")],1)]),o("form",{staticClass:"tpad",on:{submit:function(t){return t.preventDefault(),e.save(t)}}},[o("div",[o("input",{directives:[{name:"model",rawName:"v-model",value:e.f.name,expression:"f.name"}],attrs:{required:"",title:e.sys.lang.f.appName,placeholder:e.sys.lang.f.appName},domProps:{value:e.f.name},on:{input:function(t){t.target.composing||e.$set(e.f,"name",t.target.value)}}})]),o("div",[o("div",{staticClass:"colors"},e._l(e.colors,(function(t,n){return o("div",{key:"color"+n,class:{c:t==e.f.color},on:{click:function(o){o.preventDefault(),e.f.color=t}}},[o("div",{style:{backgroundColor:t}})])})),0)]),o("div",[o("div",{staticClass:"buttons"},[o("button",{attrs:{type:"submit"}},[e._v(e._s(e.sys.lang.k.save))]),o("button",{staticClass:"red",on:{click:function(t){return t.preventDefault(),e.del(t)}}},[e._v(e._s(e.sys.lang.k.delete))])])])]),o("div",{staticClass:"tpad"},[o("a",{attrs:{href:"#"},on:{click:function(t){t.preventDefault(),e.showSecret=!e.showSecret}}},[e._v(e._s(e.sys.lang.k[e.showSecret?"hideSecret":"showSecret"]))])]),e.showSecret?o("div",{staticClass:"tpad"},[o("div",[o("b",{staticClass:"click",attrs:{title:e.sys.lang.k.copy},on:{click:function(t){t.preventDefault(),e.copy(e.f.secret,e.tpl(e.sys.lang.m.secretCopied,{name:e.f.name}))}}},[e._v(e._s(e.f.secret))])]),o("br"),o("div",[o("qrcode",{staticClass:"qrcode",attrs:{content:e.qrcode,padding:0}})],1)]):e._e()])},N=[],R=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"dialog"},[o("div",{domProps:{innerHTML:e._s(e.q)}}),o("div",{staticClass:"tpad"},[o("div",{staticClass:"buttons"},[o("button",{on:{click:function(t){return t.preventDefault(),e.yes(t)}}},[e._v(e._s(e.sys.lang.k.yes))]),o("button",{on:{click:function(t){return t.preventDefault(),e.no(t)}}},[e._v(e._s(e.sys.lang.k.no))])])])])},H=[],F={props:{q:String},methods:{no:function(){this.$emit("no"),this.$emit("close")},yes:function(){this.$emit("yes"),this.$emit("close")}}},U=F,z=Object(d["a"])(U,R,H,!1,null,null,null),G=z.exports,J=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{domProps:{innerHTML:e._s(e.qr)}})},V=[],X=(o("a9e3"),o("be4e")),W=o.n(X),Q={props:{content:String,ecl:{type:String,default:"M"},padding:{type:Number,default:4},width:{type:Number,default:200},height:{type:Number,default:200}},computed:{qr:function(){return new W.a({xmlDeclaration:!1,container:"svg-viewbox",pretty:!1,join:!0,content:this.content,padding:this.padding,ecl:this.ecl,width:this.width,height:this.height}).svg()}}},Y=Q,K=Object(d["a"])(Y,J,V,!1,null,null,null),Z=K.exports,ee={components:{iClose:O,qrcode:Z},props:{name:String,secret:String,color:String},data:function(){return{showSecret:!1,colors:P,f:{secret:"",name:"",color:""}}},watch:{secret:function(){this.f={secret:this.secret,name:this.name,color:this.color}}},computed:{qrcode:function(){return"otpauth://totp/"+encodeURIComponent(this.f.name)+"?secret="+encodeURIComponent(this.f.secret)}},methods:{close:function(){this.$emit("close")},save:function(){this.f.name&&(this.$emit("save",this.f),this.close())},del:function(){var e=this;this.f.name&&this.$d.add(G,{componentProps:{q:this.tpl(this.sys.lang.q.appDel,{name:this.f.name})},on:{yes:function(){e.$emit("delete",e.f),e.close()}}})}},created:function(){this.f={secret:this.secret,name:this.name,color:this.color}}},te=ee,oe=(o("104b"),Object(d["a"])(te,q,N,!1,null,null,null)),ne=oe.exports,se=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("div",{staticClass:"tabs"},e._l(e.sys.langs,(function(t){return o("a",{key:"lang-"+t.code,class:{c:t.code==e.sys.lang.code},attrs:{title:t.title,href:"?lang="+t.code},on:{click:function(o){return o.preventDefault(),e.sys.langSet(t.code)}}},[e._v(e._s(t.abbr))])})),0)])},re=[],ae={},ie=Object(d["a"])(ae,se,re,!1,null,null,null),ce=ie.exports,le=o("b76a"),de=o.n(le),ue={components:{iConfig:f,iAdd:b,langsel:ce,draggable:de.a},data:function(){return{insort:!1,updated:0,year:(new Date).getFullYear(),tw:"0%",q:"",loaded:!1,secrets:[]}},computed:{download:function(){return this.secrets.length?"data:application/json;base64,"+window.btoa(unescape(encodeURIComponent(this.dataToSave()))):null},secretsShow:function(){var e=this;return this.secrets.slice().filter((function(t){return!!t.totp&&(!e.q||t.name.toLowerCase().indexOf(e.q.toLowerCase())>=0)}))}},methods:{sorted:function(e){e.moved&&this.saveSecrets()},formAdd:function(e){var t=this;this.$d.add(M,{componentProps:Object.assign({},e||{},{secretToCode:this.secretToCode,otpStringParser:this.otpStringParser}),on:{add:function(e){var o=t.secrets.find((function(t){return t.secret==e.secret}));if(o)return t.$n.add({html:t.tpl(t.sys.lang.e.appExists,{name:o.name}),c:"error"});t.secrets.push({secret:e.secret,name:e.name,color:e.color||"",totp:t.secretToCode(e.secret)}),t.saveSecrets(),t.$n.add({html:t.tpl(t.sys.lang.m.appAdded,{name:e.name})})}}})},formEdit:function(e){var t=this;this.$d.add(ne,{componentProps:{color:e.color,name:e.name,secret:e.secret},on:{save:function(o){o&&e.secret==o.secret&&(e.name=o.name,e.color=o.color,t.saveSecrets(),t.$n.add(t.tpl(t.sys.lang.m.appSaved,{name:o.name})))},delete:function(o){e.secret==o.secret&&(t.secrets=t.secrets.filter((function(e){return e.secret!=o.secret})),t.saveSecrets(),t.$n.add(t.tpl(t.sys.lang.m.appDeleted,{name:e.name})))}}})},secretToCode:function(e){try{var t=new i["TOTP"]({algorithm:"SHA1",digits:6,period:30,secret:i["Secret"].fromB32(e)}).generate();return t||null}catch(o){return null}},processSecrets:function(){var e=this;this.secrets.length&&this.secrets.forEach((function(t){t.totp=e.secretToCode(t.secret)}))},loadSecretsOLD:function(){var e=this;if(!window.localStorage.getItem("totp:upgraded:v2")&&window.indexedDB)try{var t=window.indexedDB.open("totp",1);t.onupgradeneeded=function(e){var t=e.target.result.createObjectStore("totp",{keyPath:"secret"});t.createIndex("name","name",{unique:!1})},t.onsuccess=function(t){var o=t.target.result;o.transaction("totp").objectStore("totp").index("name").openCursor().onsuccess=function(t){var o=t.target.result;o?(o.value&&o.value.secret&&o.value.name&&e.secrets.push({secret:o.value.secret,name:o.value.name,color:"",totp:e.secretToCode(o.value.secret)}),o.continue()):(window.localStorage.setItem("totp:upgraded:v2",2),e.saveSecrets())}},t.onerror=function(e){console.error(e)}}catch(o){console.error(o)}},loadSecrets:function(e){var t=this;try{var o=e||window.localStorage.getItem("totp:data");if(o){var n="object"==Object(a["a"])(o)?o:JSON.parse(o);return Array.isArray(n)?this.updated=Date.now():(this.updated=e?Date.now():n.ts,n=n.d),void n.forEach((function(e){if(e.secret&&e.name){var o=t.secrets.find((function(t){return t.secret==e.secret}));o?o.name=e.name:t.secrets.push({secret:e.secret,name:e.name,color:e.color||"",totp:t.secretToCode(e.secret)})}}))}}catch(s){console.error(s)}},dataToSave:function(){var e={v:2,ts:this.updated,d:[]};return this.secrets.forEach((function(t){e.d.push({secret:t.secret,name:t.name,color:t.color||""})})),JSON.stringify(e)},saveSecrets:function(){this.updated=Date.now(),window.localStorage.setItem("totp:data",this.dataToSave())},restoreSecrets:function(){var e=this,t=document.createElement("input");t.type="file",t.accept="application/json",t.onchange=function(){if(t.files[0]){var o=t.files[0],n=new window.FileReader;n.onload=function(t){try{var o=JSON.parse(t.target.result);return e.loadSecrets(o),e.saveSecrets(),e.$n.add({html:e.sys.lang.m.backupRestored})}catch(n){return console.error(n),e.$n.add({html:e.sys.lang.e.backupBadFile,c:"error"})}},n.onerror=function(t){console.error(t),e.$n.add({html:e.sys.lang.e.backupBadFile,c:"error"})},n.readAsText(o)}},t.click()},otpStringParser:function(e){try{var t=new URL(e,document.baseURI);if(["totp:","web+totp:"].includes(t.protocol)){var o=t.hash.substring(1);if(!o)return null;var n=t.pathname.split("/")[2];return{secret:o,name:decodeURIComponent(n||"")}}if(["otpauth:","web+otpauth:"].includes(t.protocol)){var s=t.searchParams.get("secret");if(!s)return null;var r=t.pathname.split("/")[2];if("totp"!=r)return null;var a=t.pathname.split("/")[3];return{secret:s,name:decodeURIComponent(a||"")}}}catch(i){return console.error(i),null}},checkAdd:function(){var e=new URL(document.baseURI).searchParams;if(e.get("addproto")){var t=this.otpStringParser(e.get("addproto"));if(!t)return;if(ex)return this.$n.add({html:this.tpl(this.sys.lang.e.appExists,{name:ex.name}),c:"error"});this.formAdd({secret:sec,name:name||""})}else if(e.get("secret")){var o=e.get("secret"),n=e.get("name"),s=this.secrets.find((function(e){return e.secret==o}));if(s)return this.$n.add({html:this.tpl(this.sys.lang.e.appExists,{name:s.name}),c:"error"});this.formAdd({secret:o,name:n||""})}}},mounted:function(){var e=window.location.origin+"/?addproto=%s";try{window.navigator.registerProtocolHandler("totp",e,"TOTP.APP")}catch(t){console.log('Protocol handler "totp" unsupported')}try{window.navigator.registerProtocolHandler("web+totp",e,"TOTP.APP")}catch(t){console.log('Protocol handler "web+totp" unsupported')}try{window.navigator.registerProtocolHandler("otpauth",e,"TOTP.APP")}catch(t){console.log('Protocol handler "otpauth" unsupported')}try{window.navigator.registerProtocolHandler("web+otpauth",e,"TOTP.APP")}catch(t){console.log('Protocol handler "web+otpauth" unsupported')}this.checkAdd(),this.sys.licount()},created:function(){var e=this;this.loadSecrets(),this.loadSecretsOLD(),this.loaded=!0;var t=Math.floor(Date.now()/3e4);setInterval((function(){var o=Math.floor(Date.now()/3e4);o!=t&&(e.processSecrets(),t=o),e.tw=100/3e4*(Date.now()-3e4*t)+"%"}),250)}},pe=ue,fe=(o("034f"),Object(d["a"])(pe,s,r,!1,null,null,null)),he=fe.exports,me=o("9483");Object(me["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});o("2ee8"),o("9180"),o("dacd"),o("52c4"),o("e08b"),o("8098"),o("3339"),o("ef8f"),o("3647"),o("aee9");var ge={lastId:0,items:[],groups:{},add:function(e,t){if(!e)return null;if(t||(t={}),"string"==typeof e?t.html=e:e.render&&e._compiled?t.component=e:"object"==Object(a["a"])(e)&&Object.assign(t,e),t.g||(t.g="main"),!t.html&&!t.component||!this.groups[t.g])return null;this.lastId>=Number.MAX_SAFE_INTEGER&&(this.lastId=0);var o={id:++this.lastId,needClose:!1,g:t.g,c:t.c||null,html:t.html||null,component:t.component||null,componentProps:t.componentProps||t.props||null,timeout:Number.isInteger(t.timeout)?t.timeout:this.groups[t.g].timeout,repeat:"boolean"==typeof t.repeat?t.repeat:this.groups[t.g].repeat,reverse:"boolean"==typeof t.reverse?t.reverse:this.groups[t.g].reverse,closer:"boolean"==typeof t.closer?t.closer:this.groups[t.g].closer,closerSwipe:"boolean"==typeof t.closerSwipe?t.closerSwipe:this.groups[t.g].closerSwipe,isText:"boolean"==typeof t.isText?t.isText:this.groups[t.g].isText,on:"object"==Object(a["a"])(t.on)&&Object.isExtensible(t.on)?t.on:{}};if(null===o.closerSwipe&&(o.closerSwipe=o.closer),!o.repeat){var n=this.items.find((function(e){return e.g===o.g&&e.html===o.html&&e.c===o.c}));n&&(n.needClose=!0)}return o.reverse?this.items.unshift(o):this.items.push(o),o.id},del:function(e){this.items=this.items.filter((function(t){return t.id!==e}))},clear:function(){this.items=[]}},ve={install:function(e,t){t=Object.assign({name:"z-notices",glob:"n"},t||{}),e.prototype["$"+t.glob]={add:ge.add.bind(ge),del:ge.del.bind(ge),clear:ge.clear.bind(ge)};var o={};o[t.name+"-item"]={data:function(){return{touchStartPos:0,touchEndDelta:0,active:!0,timer:null,t:0,w:100,step:200}},props:{component:{},componentProps:{type:Object,default:null},html:{},needClose:{type:Boolean,default:!1},on:{type:Object,default:{}},isText:{type:Boolean,default:!1},id:{type:Number},c:{type:String,default:null},timeout:{type:Number},closer:{type:Boolean,default:!0},closerSwipe:{type:Boolean,default:null},closerHTML:{type:String}},watch:{needClose:function(){this.del()}},methods:{del:function(){this.active=!1,this.timer&&clearInterval(this.timer),this.on&&"function"==typeof this.on.closed&&this.on.closed(this.id),this.$emit("closed",this.id)},reset:function(){this.timeout&&this.active&&(this.timer&&clearInterval(this.timer),this.t=this.timeout,this.w=100)},resume:function(){var e=this;this.timeout&&this.active&&(this.reset(),this.timer=setInterval((function(){e.t-=e.step,e.w=100/e.timeout*e.t,e.t<0&&e.del()}),this.step))}},mounted:function(){this.timeout&&this.resume()},render:function(e){var o=this;return e("div",{class:this.c?[t.name+"-item",this.c]:t.name+"-item",on:Object.assign({},this.timeout?{mouseenter:this.reset,mouseleave:this.resume}:{},this.closerSwipe?{touchstart:function(e){o.touchStartPos=e.changedTouches[0].clientX,o.touchEndDelta=0,o.timeout&&o.reset()},touchend:function(e){o.touchStartPos!=e.changedTouches[0].clientX&&(Math.abs(o.touchEndDelta)>100?o.del():(o.$el.style.opacity="",o.$el.style.left="",o.timeout&&o.resume()))},touchcancel:function(){o.$el.style.left="",o.$el.style.opacity="",o.timeout&&o.resume()},touchmove:function(e){e.preventDefault(),o.touchEndDelta=e.changedTouches[0].clientX-o.touchStartPos;var t=Math.min(100,Math.max(-100,o.touchEndDelta));o.$el.style.opacity=1-Math.abs(.01*t),o.$el.style.left=t+"px"}}:{})},[this.component?e("div",{class:t.name+"-content"},[e(this.component,{props:this.componentProps||{},on:Object.assign({},this.on||{},{close:function(e){o.del(e),o.on.close&&o.on.close(e)}})})]):e("div",{class:t.name+"-content",domProps:this.isText?{innerText:this.html}:{innerHTML:this.html}}),this.closer?e("div",{class:t.name+"-closer",on:{click:this.del},domProps:{innerHTML:this.closerHTML}}):null,this.timeout?e("div",{class:t.name+"-timer"},[e("div",{class:t.name+"-timer-line",style:{transition:"width "+this.step+"ms linear",width:this.w+"%"}})]):null])}},e.component(t.name,{components:o,data:function(){return{notices:ge}},props:{g:{type:String,default:"main"},timeout:{type:Number,default:5e3},reverse:{type:Boolean,default:!1},repeat:{type:Boolean,default:!1},closer:{type:Boolean,default:!0},closerSwipe:{type:Boolean,default:null},isText:{type:Boolean,default:!1},closerHTML:{type:String,default:'<svg viewBox="0 0 386.667 386.667" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="m386.667 45.564-45.564-45.564-147.77 147.769-147.769-147.769-45.564 45.564 147.769 147.769-147.769 147.77 45.564 45.564 147.769-147.769 147.769 147.769 45.564-45.564-147.768-147.77z"/></svg>'}},computed:{itms:function(){var e=this;return this.notices.items.slice().filter((function(t){return t.g==e.g}))}},methods:{del:function(e){this.notices.del(e)}},created:function(){this.notices.groups[this.g]=Object.assign(this.notices.groups[this.g]||{},{timeout:this.timeout,repeat:this.repeat,closer:this.closer,closerSwipe:this.closerSwipe,reverse:this.reverse,isText:this.isText})},render:function(e){var o=this;return e("transition-group",{class:t.name,props:{tag:"div",name:t.name}},this.itms.map((function(n){return e(t.name+"-item",{props:Object.assign({closerHTML:o.closerHTML},n),key:n.id,on:{closed:o.del}})})))}})}},be=ve,ye={lastId:0,items:[],groups:{},add:function(e,t){if(!e)return null;if(t||(t={}),"string"==typeof e?t.html=e:e.render&&e._compiled?t.component=e:"object"==Object(a["a"])(e)&&Object.assign(t,e),t.g||(t.g="main"),!t.html&&!t.component||!this.groups[t.g])return null;this.lastId>=Number.MAX_SAFE_INTEGER&&(this.lastId=0);var o={id:++this.lastId,g:t.g,c:t.c||null,html:t.html||null,component:t.component||null,componentProps:t.componentProps||t.props||null,only:"boolean"==typeof t.only?t.only:this.groups[t.g].only,closer:"boolean"==typeof t.closer?t.closer:this.groups[t.g].closer,closerOutside:"boolean"==typeof t.closerOutside?t.closerOutside:this.groups[t.g].closerOutside,isText:"boolean"==typeof t.isText?t.isText:this.groups[t.g].isText,on:"object"==Object(a["a"])(t.on)&&Object.isExtensible(t.on)?t.on:{}};return null===o.closerOutside&&(o.closerOutside=o.closer),o.only&&(this.items=this.items.filter((function(e){return e.g!==o.g}))),this.items.push(o),o.id},del:function(e){this.items=this.items.filter((function(t){return t.id!==e}))},clear:function(){this.items=[]}},we={install:function(e,t){t=Object.assign({name:"z-dialogs",glob:"d"},t||{}),e.prototype["$"+t.glob]={add:ye.add.bind(ye),del:ye.del.bind(ye),clear:ye.clear.bind(ye)};var o={};o[t.name+"-item"]={props:{component:{},componentProps:{type:Object,default:null},html:{},needClose:{type:Boolean,default:!1},on:{type:Object,default:{}},isText:{type:Boolean,default:!1},id:{type:Number},c:{type:String,default:null},only:{type:Boolean,default:!0},closer:{type:Boolean,default:!0},closerOutside:{type:Boolean,default:null},closerHTML:{type:String}},watch:{needClose:function(){this.del()}},methods:{del:function(){this.on&&"function"==typeof this.on.closed&&this.on.closed(this.id),this.$emit("closed",this.id)}},data:function(){return{mouseClickStart:null}},render:function(e){var o=this;return e("div",{class:this.c?[t.name+"-item",this.c]:t.name+"-item",on:this.closerOutside?{mousedown:function(e){e.stopPropagation(),o.mouseClickStart={x:e.x,y:e.y}},mouseup:function(e){o.mouseClickStart&&o.mouseClickStart.x==e.x&&o.mouseClickStart.y==e.y&&(e.stopPropagation(),o.del()),o.mouseClickStart=null}}:{}},[e("div",{class:t.name+"-wrap"},[e("div",{class:t.name+"-dialog",on:{mousedown:function(e){e.stopPropagation()}}},[this.component?e("div",{class:t.name+"-content"},[e(this.component,{props:this.componentProps||{},on:Object.assign({},this.on||{},{close:function(e){o.del(e),o.on.close&&o.on.close(e)}})})]):e("div",{class:t.name+"-content",domProps:this.isText?{innerText:this.html}:{innerHTML:this.html}}),this.closer?e("div",{class:t.name+"-closer",on:{click:this.del},domProps:{innerHTML:this.closerHTML}}):null])])])}},e.component(t.name,{components:o,data:function(){return{dialogs:ye}},props:{g:{type:String,default:"main"},only:{type:Boolean,default:!1},multi:{type:Boolean,default:!1},closer:{type:Boolean,default:!0},closerOutside:{type:Boolean,default:null},isText:{type:Boolean,default:!1},bodyScroll:{type:Boolean,default:!1},closerHTML:{type:String,default:'<svg viewBox="0 0 386.667 386.667" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="m386.667 45.564-45.564-45.564-147.77 147.769-147.769-147.769-45.564 45.564 147.769 147.769-147.769 147.77 45.564 45.564 147.769-147.769 147.769 147.769 45.564-45.564-147.768-147.77z"/></svg>'}},computed:{itms:function(){var e=this;return this.dialogs.items.slice().filter((function(t){return t.g==e.g}))}},methods:{del:function(e){this.dialogs.del(e)}},created:function(){this.dialogs.groups[this.g]=Object.assign(this.dialogs.groups[this.g]||{},{only:this.only,closer:this.closer,closerOutside:this.closerOutside,isText:this.isText})},watch:{itms:function(){this.bodyScroll||(this.itms.length?document.body.classList.add(t.name+"-body-have-dialogs"):document.body.classList.remove(t.name+"-body-have-dialogs"))}},render:function(e){var o=this;return e("div",{class:t.name},this.itms.map((function(n,s){return e("transition",{props:{name:t.name}},[e("keep-alive",[o.multi||s==o.itms.length-1?e(t.name+"-item",{props:Object.assign({closerHTML:o.closerHTML},n),key:n.id,on:{closed:o.del}}):null])])})))}})}},Pe=we,Te=(o("3e5f"),{_copy_v1:function(e,t,o){return new Promise((function(n,s){try{navigator.clipboard.writeText(e).then((function(){n(!0),"function"===typeof t&&t(!0)})).catch((function(){Te._copy_v2(e,t,o).then(n).catch(s)}))}catch(r){Te._copy_v2(e,t,o).then(n).catch(s)}}))},_copy_v2:function(e,t,o){return new Promise((function(n,s){window.getSelection().removeAllRanges();var r=document.createElement("div");r.style.position="fixed",r.style.opacity=0,r.innerHTML=e,document.body.appendChild(r);try{var a=document.createRange();a.selectNode(r),window.getSelection().addRange(a);var i=document.execCommand("copy");n(i),"function"===typeof t&&t(i)}catch(c){s(c),"function"===typeof o&&o(c)}window.getSelection().removeAllRanges(),document.body.removeChild(r)}))},copy:function(e,t,o){return navigator.clipboard&&"function"===typeof navigator.clipboard.writeText?Te._copy_v1(e,t,o):Te._copy_v2(e,t,o)},install:function(e,t){t=Object.assign({glob:"copy"},t||{}),e.prototype["$"+t.glob]=Te.copy}}),Se=Te,Ce=[{abbr:"EN",code:"en",title:"English",meta:{title:"",desc:""},e:{invalidSecret:"Invalid secret key",invalidName:"Invalid application name",appExists:"Existing application <b>{{name}}</b> has same secret",backupBadFile:"Error in backup file"},m:{copiedToBuffer:"Copied to buffer",appAdded:"Application <b>{{name}}</b> added",appDeleted:"Application <b>{{name}}</b> deleted",appSaved:"Application <b>{{name}}</b> saved",codeCopied:"Code for <b>{{name}}</b> is copied to clipboard",secretCopied:"Secret code for <b>{{name}}</b> is copied to clipboard",backupRestored:"Backup is restored"},q:{appDel:"Are you sure to delete <b>{{name}}</b>?"},k:{yes:"Yes",no:"No",add:"Add",save:"Save",delete:"Delete",config:"Configure",configandsort:"Configure or move",copy:"Copy to buffer",backup:"Download backup",restore:"Restore backup",showSecret:"Show secret",hideSecret:"Hide secret",scanqr:"Scan QR"},f:{appSecret:"Secret key",appName:"Application name",appSearch:"Search"},t:{add:"New application",edit:"Configure",about:""}}];n["a"].config.productionTip=!1,n["a"].use(be),n["a"].use(Pe),n["a"].use(Se);var ke=navigator.languages||["en"],Oe={licount:function(){var e="t999ru",t="15.1",o="//www.google.com/hit"+(e?";"+e:"")+"?t"+t+";r"+encodeURIComponent(document.referrer)+("undefined"==typeof screen?"":";s"+screen.width+"*"+screen.height+"*"+(screen.colorDepth?screen.colorDepth:screen.pixelDepth))+";u"+encodeURIComponent(document.URL)+";"+Math.random();(new Image).src=o},langSet:function(e){var t=this,o=null;if(e)o=this.langs.find((function(t){return t.code.toLowerCase()==e.toLowerCase()}));else{if(!o){var n=new URLSearchParams(window.location.search).get("lang");n&&(o=this.langs.find((function(e){return e.code.toLowerCase()==n.toLowerCase()})))}if(!o){var s=window.localStorage.getItem("totp:lang");s&&(o=this.langs.find((function(e){return e.code.toLowerCase()==s.toLowerCase()})))}if(!o){var r=function(e){var n=ke[e];if(o=t.langs.find((function(e){return e.code.toLowerCase()==n.toLowerCase()})),o)return"break"};for(var a in ke){var i=r(a);if("break"===i)break}}if(!o){var c=function(e){var n=ke[e];if(o=t.langs.find((function(e){return e.code.split("-")[0].toLowerCase()==n.split("-")[0].toLowerCase()})),o)return"break"};for(var l in ke){var d=c(l);if("break"===d)break}}o||(o=this.langs[0])}o&&(this.lang=o,document.documentElement.lang=o.code,document.title=o.meta.title,document.querySelector('meta[name="description"]').setAttribute("content",o.meta.desc),document.querySelector('meta[name="keywords"]').setAttribute("content",o.meta.keys),e&&window.localStorage.setItem("totp:lang",o.code))},langs:Ce,lang:null};Oe.langSet(),n["a"].mixin({data:function(){return{sys:Oe}},methods:{tpl:function(e,t){for(var o in t)e=e.replace(new RegExp("{{"+o+"}}","ig"),t[o]);return e},copy:function(e,t){var o=this;this.$copy(e).then((function(){o.$n.add({html:t})}))}}}),new n["a"]({render:function(e){return e(he)}}).$mount("#app")},"85ec":function(e,t,o){},d624:function(e,t,o){}});