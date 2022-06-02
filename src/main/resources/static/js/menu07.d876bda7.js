(self["webpackChunkfront_end_vue"]=self["webpackChunkfront_end_vue"]||[]).push([[291],{2884:function(t){t.exports=function(t,e,a,n){var l="undefined"!==typeof n?[n,t]:[t],s=new Blob(l,{type:a||"application/octet-stream"});if("undefined"!==typeof window.navigator.msSaveBlob)window.navigator.msSaveBlob(s,e);else{var o=window.URL&&window.URL.createObjectURL?window.URL.createObjectURL(s):window.webkitURL.createObjectURL(s),r=document.createElement("a");r.style.display="none",r.href=o,r.setAttribute("download",e),"undefined"===typeof r.download&&r.setAttribute("target","_blank"),document.body.appendChild(r),r.click(),setTimeout((function(){document.body.removeChild(r),window.URL.revokeObjectURL(o)}),200)}}},1333:function(t,e,a){"use strict";var n=a(6265),l=a.n(n),s=a(8675);async function o(t=1){let e=null;try{return e=await l().get("/board/list",{params:{pageNo:t}}),{result:"success",data:e.data}}catch(a){if(!a.response)return{result:"fail-network"};if(403===a.response.status&&await s.Z.refreshToken())return e=await l().get("/board/list",{params:{pageNo:t}}),{result:"success",data:e.data}}}async function r(t){let e=null;try{const a=await l().post("/board/",t);e=a.data}catch(a){if(a.response&&403===a.response.status&&await s.Z.refreshToken()){const a=await l().post("/board/",t);e=a.data}}return e}async function c(t,e){let a=null;try{const n=await l().get(`/board/${t}?hit=${e}`);a=n.data}catch(n){if(n.response&&403===n.response.status&&await s.Z.refreshToken()){const n=await l().get(`/board/${t}?hit=${e}`);a=n.data}}return a}async function u(t){let e=null;try{const a=await l().get(`/board/battach/${t}`,{responseType:"blob"});e=a.data}catch(a){if(a.response&&403===a.response.status&&await s.Z.refreshToken()){const a=await l().get(`/board/battach/${t}`,{responseType:"blob"});e=a.data}}return e}async function i(t){let e=null;try{const a=await l()["delete"](`/board/${t}`);e=a.data.result}catch(a){if(a.response&&403===a.response.status&&await s.Z.refreshToken()){const a=await l()["delete"](`/board/${t}`);e=a.data.result}}return e}async function d(t){let e=null;try{const a=await l().put("/board/",t);e=a.data}catch(a){if(a.response&&403===a.response.status&&await s.Z.refreshToken()){const a=await l().put("/board/",t);e=a.data}}return e}e["Z"]={getBoardList:o,createBoard:r,readBoard:c,downloadBoardAttach:u,deleteBoard:i,updateBoard:d}},1496:function(t,e,a){"use strict";a.d(e,{Z:function(){return _}});var n=a(3396),l=a(9242),s=a(7139);const o={class:"modal-mask"},r={class:"modal-wrapper"},c={class:"modal-header"},u=(0,n.Uk)("default header"),i={class:"modal-body"},d=(0,n.Uk)("default body"),b={class:"modal-footer"},p=(0,n.Uk)(" default footer ");function m(t,e,a,m,v,f){return(0,n.wg)(),(0,n.j4)(l.uT,{name:"modal"},{default:(0,n.w5)((()=>[(0,n._)("div",o,[(0,n._)("div",r,[(0,n._)("div",{class:"modal-container",style:(0,s.j5)(t.$attrs.style)},[(0,n._)("div",c,[(0,n.WI)(t.$slots,"header",{},(()=>[u]),!0)]),(0,n._)("div",i,[(0,n.WI)(t.$slots,"body",{},(()=>[d]),!0)]),(0,n._)("div",b,[(0,n.WI)(t.$slots,"footer",{},(()=>[p,(0,n._)("button",{class:"modal-default-button",onClick:e[0]||(e[0]=e=>t.$emit("close"))},"OK")]),!0)])],4)])])])),_:3})}var v={inheritAttrs:!1},f=a(89);const w=(0,f.Z)(v,[["render",m],["__scopeId","data-v-524acbbf"]]);var _=w},8777:function(t,e,a){"use strict";a.d(e,{Z:function(){return p}});var n=a(3396),l=a(7139),s=a(1496);const o=(0,n.Uk)(" 알림 "),r={key:0,class:"mt-3"},c=(0,n._)("div",{class:"spinner-border text-danger",role:"status"},[(0,n._)("span",{class:"sr-only"},"Loading...")],-1),u=[c],i={key:1};var d={props:["message","loading"],setup(t){return(e,a)=>((0,n.wg)(),(0,n.j4)(s.Z,{style:{width:"400px"}},{header:(0,n.w5)((()=>[o])),body:(0,n.w5)((()=>[t.loading?((0,n.wg)(),(0,n.iD)("div",r,u)):(0,n.kq)("",!0),t.loading?(0,n.kq)("",!0):((0,n.wg)(),(0,n.iD)("div",i,(0,l.zw)(t.message),1))])),footer:(0,n.w5)((()=>[(0,n._)("button",{class:"btn btn-info btn-sm",onClick:a[0]||(a[0]=t=>e.$emit("close"))},"닫기")])),_:1}))}};const b=d;var p=b},5274:function(t,e,a){"use strict";a.r(e),a.d(e,{default:function(){return v}});var n=a(3396),l=a(7139),s=a(4870);const o={class:"card"},r=(0,n._)("div",{class:"card-header"}," Exam01AsyncControl ",-1),c={class:"card-body"},u={key:0,class:"mt-3"},i={key:1,class:"mt-3 spinner-border text-info",role:"status"},d=(0,n._)("span",{class:"sr-only"},"Loading...",-1),b=[d];var p={setup(t){const e=(0,s.iH)(""),a=(0,s.iH)(!1);function d(){a.value=!0,m().then((t=>{e.value=t})).catch((t=>{console.log(t)})).finally((()=>{a.value=!1}))}async function p(){try{a.value=!0;const t=await m();e.value=t}catch(t){console.log(t)}finally{a.value=!1}}function m(){const t=new Promise(((t,e)=>{setTimeout((()=>{t("value")}),3e3)}));return t}return(t,s)=>((0,n.wg)(),(0,n.iD)("div",o,[r,(0,n._)("div",c,[(0,n._)("div",null,[(0,n._)("button",{onClick:d,class:"btn btn-info btn-sm mr-2"},"비동기 작업1"),(0,n._)("button",{onClick:p,class:"btn btn-info btn-sm mr-2"},"비동기 작업2")]),a.value?(0,n.kq)("",!0):((0,n.wg)(),(0,n.iD)("div",u,[(0,n._)("div",null,"result: "+(0,l.zw)(e.value),1)])),a.value?((0,n.wg)(),(0,n.iD)("div",i,b)):(0,n.kq)("",!0)])]))}};const m=p;var v=m},9995:function(t,e,a){"use strict";a.r(e),a.d(e,{default:function(){return R}});var n=a(3396),l=a(4870),s=a(9242),o=a(8675),r=a(8777);const c={class:"card"},u=(0,n._)("div",{class:"card-header"}," Join ",-1),i={class:"card-body"},d={class:"form-group"},b=(0,n._)("label",{class:"form-label"},"User ID",-1),p={class:"form-group"},m=(0,n._)("label",{class:"form-label"},"User Name",-1),v={class:"form-group"},f=(0,n._)("label",{class:"col-form-label"},"User Password",-1),w={class:"form-group"},_=(0,n._)("label",{class:"col-form-label"},"User Role",-1),y=(0,n._)("option",{value:"ROLE_ADMIN"},"ROLE_ADMIN",-1),g=(0,n._)("option",{value:"ROLE_MANAGER"},"ROLE_MANAGER",-1),h=(0,n._)("option",{value:"ROLE_USER",selected:""},"ROLE_USER",-1),k=[y,g,h],U={class:"form-group"},D=(0,n._)("label",{class:"col-form-label"},"User Email",-1);var S={setup(t){const e=(0,l.iH)(!1),a=(0,l.iH)(""),y=(0,l.iH)(!1),g=(0,l.qj)({id:"user",name:"사용자",password:"12345",role:"ROLE_USER",email:"user@mycompany.com"});async function h(){e.value=!0,y.value=!0;const t=await o.Z.join(g);a.value="success"===t?"회원 가입 성공":"duplicated"===t?"회원 가입 실패: 아이디 중복":"fail"===t?"회원 가입 실패: 서버측 오류":"회원 가입 실패: 네트워크 오류",y.value=!1}return(t,o)=>((0,n.wg)(),(0,n.iD)("div",c,[u,(0,n._)("div",i,[(0,n._)("div",d,[b,(0,n.wy)((0,n._)("input",{type:"text",class:"form-control","onUpdate:modelValue":o[0]||(o[0]=t=>(0,l.SU)(g).id=t)},null,512),[[s.nr,(0,l.SU)(g).id]])]),(0,n._)("div",p,[m,(0,n.wy)((0,n._)("input",{type:"text",class:"form-control","onUpdate:modelValue":o[1]||(o[1]=t=>(0,l.SU)(g).name=t)},null,512),[[s.nr,(0,l.SU)(g).name]])]),(0,n._)("div",v,[f,(0,n.wy)((0,n._)("input",{type:"text",class:"form-control","onUpdate:modelValue":o[2]||(o[2]=t=>(0,l.SU)(g).password=t)},null,512),[[s.nr,(0,l.SU)(g).password]])]),(0,n._)("div",w,[_,(0,n.wy)((0,n._)("select",{class:"form-control",name:"mrole","onUpdate:modelValue":o[3]||(o[3]=t=>(0,l.SU)(g).role=t)},k,512),[[s.bM,(0,l.SU)(g).role]])]),(0,n._)("div",U,[D,(0,n.wy)((0,n._)("input",{type:"text",class:"form-control","onUpdate:modelValue":o[4]||(o[4]=t=>(0,l.SU)(g).email=t)},null,512),[[s.nr,(0,l.SU)(g).email]])]),(0,n._)("button",{class:"btn btn-info btn-sm",onClick:h},"가입")]),e.value?((0,n.wg)(),(0,n.j4)(r.Z,{key:0,message:a.value,loading:y.value,onClose:o[5]||(o[5]=t=>e.value=!1)},null,8,["message","loading"])):(0,n.kq)("",!0)]))}};const x=S;var R=x},5333:function(t,e,a){"use strict";a.r(e),a.d(e,{default:function(){return h}});var n=a(3396),l=a(4870),s=a(9242),o=a(65),r=a(8675),c=a(8777),u=a(678);const i={class:"card"},d=(0,n._)("div",{class:"card-header"}," 로그인 ",-1),b={class:"card-body"},p={key:0},m={class:"form-group"},v=(0,n._)("label",{class:"form-label"},"User ID",-1),f={class:"form-group"},w=(0,n._)("label",{for:"userPassword",class:"col-form-label"},"User Password",-1),_={key:1};var y={setup(t){const e=(0,o.oR)(),a=((0,u.tv)(),(0,l.iH)(!1)),y=(0,l.iH)(""),g=(0,l.iH)(!1),h=(0,l.qj)({id:"user",password:"12345"});async function k(){a.value=!0,g.value=!0;const t=await r.Z.login(h);"success"===t?a.value=!1:y.value="fail-401"===t?"로그인 실패: 아이디 또는 패스워드가 틀림":"로그인 실패: 네트워크 에러",g.value=!1}async function U(){await r.Z.logout()}return(t,o)=>((0,n.wg)(),(0,n.iD)("div",i,[d,(0,n._)("div",b,[""===(0,l.SU)(e).state.userId?((0,n.wg)(),(0,n.iD)("div",p,[(0,n._)("div",m,[v,(0,n.wy)((0,n._)("input",{type:"text",class:"form-control",id:"userId","onUpdate:modelValue":o[0]||(o[0]=t=>(0,l.SU)(h).id=t)},null,512),[[s.nr,(0,l.SU)(h).id]])]),(0,n._)("div",f,[w,(0,n.wy)((0,n._)("input",{type:"text",class:"form-control","onUpdate:modelValue":o[1]||(o[1]=t=>(0,l.SU)(h).password=t)},null,512),[[s.nr,(0,l.SU)(h).password]])]),(0,n._)("button",{class:"btn btn-info btn-sm",onClick:k},"로그인")])):(0,n.kq)("",!0),""!==(0,l.SU)(e).state.userId?((0,n.wg)(),(0,n.iD)("div",_,[(0,n._)("button",{class:"btn btn-info btn-sm mr-2",onClick:U},"로그아웃")])):(0,n.kq)("",!0)]),a.value?((0,n.wg)(),(0,n.j4)(c.Z,{key:0,message:y.value,loading:g.value,onClose:o[2]||(o[2]=t=>a.value=!1)},null,8,["message","loading"])):(0,n.kq)("",!0)]))}};const g=y;var h=g},2166:function(t,e,a){"use strict";a.r(e),a.d(e,{default:function(){return S}});var n=a(3396),l=a(7139),s=a(1333),o=a(4870),r=a(678),c=a(65);const u={class:"card"},i=(0,n._)("div",{class:"card-header"}," List ",-1),d={class:"card-body"},b={key:0},p={class:"mb-3"},m=(0,n.Uk)("생성"),v={class:"table table-sm table-striped table-bordered"},f=(0,n._)("thead",null,[(0,n._)("tr",null,[(0,n._)("th",{class:"text-center",style:{width:"70px"}},"번호"),(0,n._)("th",{class:"text-center"},"제목"),(0,n._)("th",{class:"text-center",style:{width:"90px"}},"글쓴이"),(0,n._)("th",{class:"text-center",style:{width:"120px"}},"날짜"),(0,n._)("th",{class:"text-center",style:{width:"70px"}},"조회수")])],-1),w={class:"text-center"},_={class:"text-center"},y={class:"text-center"},g={class:"text-center"},h={colspan:"5",class:"text-center"},k=["onClick"];var U={setup(t){const e=(0,r.yj)(),a=(0,r.tv)(),U=(0,c.oR)();""===U.state.userId&&a.push("/menu07/auth/login");const D=(0,o.iH)(null);let S=e.query.pageNo;async function x(t){const e=await s.Z.getBoardList(t);"success"===e.result?D.value=e.data:a.push("/menu07/auth/login")}function R(t,e){const a=[];for(var n=t;n<=e;n++)a.push(n);return a}function L(t){a.push(`/menu07/board/list?pageNo=${t}`)}return"undefined"===S&&(S=1),x(S),(0,n.YP)(e,((t,e)=>{"/menu07/board/list"===t.path&&(t.query.pageNo?x(t.query.pageNo):x(1))})),(t,e)=>{const a=(0,n.up)("router-link");return(0,n.wg)(),(0,n.iD)("div",u,[i,(0,n._)("div",d,[null!=D.value?((0,n.wg)(),(0,n.iD)("div",b,[(0,n._)("div",p,[(0,n.Wm)(a,{to:"/menu07/board/writeform",class:"btn btn-info btn-sm"},{default:(0,n.w5)((()=>[m])),_:1})]),(0,n._)("table",v,[f,(0,n._)("tbody",null,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(D.value.boards,(t=>((0,n.wg)(),(0,n.iD)("tr",{key:t.bno},[(0,n._)("td",w,(0,l.zw)(t.bno),1),(0,n._)("td",null,[(0,n.Wm)(a,{to:`/menu07/board/read?bno=${t.bno}&pageNo=${D.value.pager.pageNo}&hit=true`},{default:(0,n.w5)((()=>[(0,n.Uk)((0,l.zw)(t.btitle),1)])),_:2},1032,["to"])]),(0,n._)("td",_,(0,l.zw)(t.mid),1),(0,n._)("td",y,(0,l.zw)(new Date(t.bdate).toLocaleDateString()),1),(0,n._)("td",g,(0,l.zw)(t.bhitcount),1)])))),128)),(0,n._)("tr",null,[(0,n._)("td",h,[(0,n._)("button",{onClick:e[0]||(e[0]=t=>L(1)),class:"btn btn-outline-primary btn-sm mr-1"},"처음"),D.value.pager.groupNo>1?((0,n.wg)(),(0,n.iD)("button",{key:0,onClick:e[1]||(e[1]=t=>L(D.value.pager.startPageNo-1)),class:"btn btn-outline-info btn-sm mr-1"},"이전")):(0,n.kq)("",!0),((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(R(D.value.pager.startPageNo,D.value.pager.endPageNo),(t=>((0,n.wg)(),(0,n.iD)("button",{key:t,onClick:e=>L(t),class:(0,l.C_)(["btn btn-sm mr-1",D.value.pager.pageNo==t?"btn-danger":"btn-outline-success"])},(0,l.zw)(t),11,k)))),128)),D.value.pager.groupNo<D.value.pager.totalGroupNo?((0,n.wg)(),(0,n.iD)("button",{key:1,onClick:e[2]||(e[2]=t=>L(D.value.pager.endPageNo+1)),class:"btn btn-outline-info btn-sm mr-1"},"다음")):(0,n.kq)("",!0),(0,n._)("button",{onClick:e[3]||(e[3]=t=>L(D.value.pager.totalPageNo)),class:"btn btn-outline-primary btn-sm mr-1"},"맨끝")])])])])])):(0,n.kq)("",!0)])])}}};const D=U;var S=D},2072:function(t,e,a){"use strict";a.r(e),a.d(e,{default:function(){return k}});var n=a(3396),l=a(7139),s=a(4870),o=a(678),r=a(1333),c=a(2884),u=a.n(c);const i={class:"card"},d=(0,n._)("div",{class:"card-header"}," Read ",-1),b={class:"card-body"},p={key:0},m={class:"d-flex"},v={key:0},f={class:"ml-5"},w=["src"],_=(0,n.Uk)("목록"),y=(0,n.Uk)("수정");var g={setup(t){const e=(0,o.yj)(),a=(0,o.tv)(),c=e.query.bno,g=e.query.pageNo,h=e.query.hit,k=(0,s.iH)(null),U=(0,s.iH)(null);async function D(){r.Z.readBoard(c,h).then((t=>{k.value=t}));const t=await r.Z.downloadBoardAttach(c);null!=t&&(U.value=URL.createObjectURL(t))}async function S(){const t=await r.Z.downloadBoardAttach(c);null!=t&&u()(t,k.value.battachoname)}async function x(){const t=await r.Z.deleteBoard(c);"success"===t&&a.push(`/menu07/board/list?pageNo=${g}`)}return D(),(t,e)=>{const a=(0,n.up)("router-link");return(0,n.wg)(),(0,n.iD)("div",i,[d,(0,n._)("div",b,[null!=k.value?((0,n.wg)(),(0,n.iD)("div",p,[(0,n._)("div",m,[(0,n._)("div",null,[(0,n._)("p",null,"bno: "+(0,l.zw)(k.value.bno),1),(0,n._)("p",null,"btitle: "+(0,l.zw)(k.value.btitle),1),(0,n._)("p",null,"bcontent: "+(0,l.zw)(k.value.bcontent),1),(0,n._)("p",null,"mid: "+(0,l.zw)(k.value.mid),1),(0,n._)("p",null,"bdate: "+(0,l.zw)(new Date(k.value.bdate).toLocaleDateString()),1),(0,n._)("p",null,"bhitcount: "+(0,l.zw)(k.value.bhitcount),1),null!=k.value.battachoname?((0,n.wg)(),(0,n.iD)("p",v,[(0,n.Uk)(" battachoname: "+(0,l.zw)(k.value.battachoname)+" ",1),(0,n._)("button",{onClick:S,class:"btn btn-info btn-sm ml-2"},"다운로드")])):(0,n.kq)("",!0)]),(0,n._)("div",f,[null!=k.value.battachoname?((0,n.wg)(),(0,n.iD)("img",{key:0,src:U.value,width:"300"},null,8,w)):(0,n.kq)("",!0)])]),(0,n._)("div",null,[(0,n.Wm)(a,{to:`/menu07/board/list?pageNo=${(0,s.SU)(g)}`,class:"btn btn-info btn-sm mr-2"},{default:(0,n.w5)((()=>[_])),_:1},8,["to"]),(0,n.Wm)(a,{to:`/menu07/board/updateform?bno=${(0,s.SU)(c)}&pageNo=${(0,s.SU)(g)}`,class:"btn btn-info btn-sm mr-2"},{default:(0,n.w5)((()=>[y])),_:1},8,["to"]),(0,n._)("button",{class:"btn btn-info btn-sm mr-2",onClick:x},"삭제")])])):(0,n.kq)("",!0)])])}}};const h=g;var k=h},4461:function(t,e,a){"use strict";a.r(e),a.d(e,{default:function(){return S}});var n=a(3396),l=a(9242),s=a(4870),o=a(678),r=a(1333);const c={class:"card"},u=(0,n._)("div",{class:"card-header"}," WriteForm ",-1),i={class:"card-body"},d=["onSubmit"],b={class:"form-group row"},p=(0,n._)("label",{class:"col-sm-2 col-form-label"},"제목",-1),m={class:"col-sm-10"},v={class:"form-group row"},f=(0,n._)("label",{class:"col-sm-2 col-form-label"},"내용",-1),w={class:"col-sm-10"},_={class:"form-group row"},y=(0,n._)("label",{class:"col-sm-2 col-form-label"},"첨부그림",-1),g={class:"col-sm-10"},h=["src"],k=(0,n._)("input",{type:"submit",class:"btn btn-primary btn-sm mr-2",value:"수정"},null,-1);var U={setup(t){const e=(0,o.yj)(),a=(0,o.tv)(),U=(0,s.iH)(null),D=e.query.bno,S=e.query.pageNo,x=(0,s.iH)(null),R=(0,s.iH)(null);async function L(){const t=await r.Z.readBoard(D,!1);U.value=t;const e=await r.Z.downloadBoardAttach(D);null!=e&&(R.value=URL.createObjectURL(e))}async function N(){const t=new FormData;t.append("btitle",U.value.btitle),t.append("bcontent",U.value.bcontent),t.append("bno",U.value.bno),0!=x.value.files.length&&t.append("battach",x.value.files[0]),await r.Z.updateBoard(t),a.push(`/menu07/board/read?bno=${D}&pageNo=${S}&hit=false`)}function q(){a.push(`/menu07/board/read?bno=${D}&pageNo=${S}&hit=false`)}function C(){0!=x.value.files.length?R.value=URL.createObjectURL(x.value.files[0]):R.value=null}return L(),(t,e)=>((0,n.wg)(),(0,n.iD)("div",c,[u,(0,n._)("div",i,[U.value?((0,n.wg)(),(0,n.iD)("form",{key:0,onSubmit:(0,l.iM)(N,["prevent"])},[(0,n._)("div",b,[p,(0,n._)("div",m,[(0,n.wy)((0,n._)("input",{type:"text",class:"form-control","onUpdate:modelValue":e[0]||(e[0]=t=>U.value.btitle=t)},null,512),[[l.nr,U.value.btitle]])])]),(0,n._)("div",v,[f,(0,n._)("div",w,[(0,n.wy)((0,n._)("input",{type:"text",class:"form-control","onUpdate:modelValue":e[1]||(e[1]=t=>U.value.bcontent=t)},null,512),[[l.nr,U.value.bcontent]])])]),(0,n._)("div",_,[y,(0,n._)("div",g,[(0,n._)("input",{type:"file",class:"form-control-file",ref_key:"newBattach",ref:x,onChange:C},null,544)])]),(0,n._)("div",null,[(0,n._)("img",{src:R.value,width:"200"},null,8,h)]),(0,n._)("div",{class:"form-group row mt-3"},[(0,n._)("div",{class:"col-sm-12 d-flex justify-content-center"},[k,(0,n._)("input",{type:"button",class:"btn btn-primary btn-sm",value:"취소",onClick:q})])])],40,d)):(0,n.kq)("",!0)])]))}};const D=U;var S=D},2141:function(t,e,a){"use strict";a.r(e),a.d(e,{default:function(){return D}});var n=a(3396),l=a(9242),s=a(4870),o=a(678),r=a(1333);const c={class:"card"},u=(0,n._)("div",{class:"card-header"}," WriteForm ",-1),i={class:"card-body"},d=["onSubmit"],b={class:"form-group row"},p=(0,n._)("label",{class:"col-sm-2 col-form-label"},"제목",-1),m={class:"col-sm-10"},v={class:"form-group row"},f=(0,n._)("label",{class:"col-sm-2 col-form-label"},"내용",-1),w={class:"col-sm-10"},_={class:"form-group row"},y=(0,n._)("label",{class:"col-sm-2 col-form-label"},"첨부그림",-1),g={class:"col-sm-10"},h=(0,n._)("input",{type:"submit",class:"btn btn-primary btn-sm mr-2",value:"추가"},null,-1);var k={setup(t){const e=(0,o.tv)(),a=(0,s.qj)({btitle:"",bcontent:""}),k=(0,s.iH)(null);async function U(){const t=new FormData;t.append("btitle",a.btitle),t.append("bcontent",a.bcontent),t.append("mid","user"),0!=k.value.files.length&&t.append("battach",k.value.files[0]),await r.Z.createBoard(t),e.push("/menu07/board/list")}function D(){e.push("/menu07/board/list")}return(t,e)=>((0,n.wg)(),(0,n.iD)("div",c,[u,(0,n._)("div",i,[(0,n._)("form",{onSubmit:(0,l.iM)(U,["prevent"])},[(0,n._)("div",b,[p,(0,n._)("div",m,[(0,n.wy)((0,n._)("input",{type:"text",class:"form-control","onUpdate:modelValue":e[0]||(e[0]=t=>(0,s.SU)(a).btitle=t)},null,512),[[l.nr,(0,s.SU)(a).btitle]])])]),(0,n._)("div",v,[f,(0,n._)("div",w,[(0,n.wy)((0,n._)("input",{type:"text",class:"form-control","onUpdate:modelValue":e[1]||(e[1]=t=>(0,s.SU)(a).bcontent=t)},null,512),[[l.nr,(0,s.SU)(a).bcontent]])])]),(0,n._)("div",_,[y,(0,n._)("div",g,[(0,n._)("input",{type:"file",class:"form-control-file",ref_key:"battach",ref:k},null,512)])]),(0,n._)("div",{class:"form-group row"},[(0,n._)("div",{class:"col-sm-12 d-flex justify-content-center"},[h,(0,n._)("input",{type:"button",class:"btn btn-primary btn-sm",value:"취소",onClick:D})])])],40,d)])]))}};const U=k;var D=U}}]);
//# sourceMappingURL=menu07.d876bda7.js.map