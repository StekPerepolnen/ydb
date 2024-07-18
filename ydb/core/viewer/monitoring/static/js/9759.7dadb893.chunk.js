"use strict";(self.webpackChunkydb_embedded_ui=self.webpackChunkydb_embedded_ui||[]).push([[9759],{50422:(e,a,o)=>{o.d(a,{q:()=>h});var t=o(84317),r=o(17176),n=o(2418),l=o(905),s=o(24362),i=o(34051),d=o(30817);const c=JSON.parse('{"None":"None","15 sec":"15 sec","1 min":"1 min","2 min":"2 min","5 min":"5 min","Refresh":"Refresh"}'),u=(0,d.wZ)("ydb-diagnostics-autorefresh-control",{en:c});var m=o(75859);const v=(0,s.cn)("auto-refresh-control");function h(e){let{className:a}=e;const o=(0,i.zL)(),[s,d]=(0,i.Rj)();return(0,m.jsxs)("div",{className:v(null,a),children:[(0,m.jsx)(r.z,{view:"flat",onClick:()=>{o(l.h.util.invalidateTags(["All"]))},extraProps:{"aria-label":u("Refresh")},children:(0,m.jsx)(r.z.Icon,{children:(0,m.jsx)(t.Z,{})})}),(0,m.jsxs)(n.P,{value:[String(s)],onUpdate:e=>{d(Number(e))},width:85,children:[(0,m.jsx)(n.P.Option,{value:"0",children:u("None")}),(0,m.jsx)(n.P.Option,{value:"15000",children:u("15 sec")}),(0,m.jsx)(n.P.Option,{value:"60000",children:u("1 min")}),(0,m.jsx)(n.P.Option,{value:"120000",children:u("2 min")}),(0,m.jsx)(n.P.Option,{value:"300000",children:u("5 min")})]})]})}},90861:(e,a,o)=>{o.d(a,{m:()=>u});var t=o(27320),r=o(17176),n=o(11050),l=o(81434),s=o(24362),i=o(75859);const d=(0,s.cn)("clipboard-button");function c(e){let{className:a,status:o,title:l,...s}=e;return(0,i.jsx)(t.u,{content:"success"===o?"Copied!":l||"Copy",placement:"bottom-start",children:(0,i.jsx)(r.z,{...s,className:d(null,a),children:(0,i.jsx)(r.z.Icon,{children:(0,i.jsx)(n.K,{status:o,size:16})})})})}function u(e){let{text:a,...o}=e;return(0,i.jsx)(l.h,{text:a,timeout:1e3,children:e=>(0,i.jsx)(c,{...o,status:e})})}},1796:(e,a,o)=>{o.d(a,{p:()=>c});var t=o(68963),r=o(24362),n=o(52317),l=o(92666),s=o(34051),i=o(75859);const d=(0,r.cn)("storage-disk-progress-bar");function c(e){let{diskAllocatedPercent:a=-1,severity:o,compact:r}=e;const[c]=(0,s.yu)(n.yT),u={inverted:c,compact:r},m=void 0!==o&&(0,l.b)(o);return m&&(u[m.toLocaleLowerCase()]=!0),(0,i.jsx)("div",{className:d(u),role:"meter","aria-label":"Disk allocated space","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":a,children:r?(0,i.jsx)("div",{className:d("filled"),style:{width:"100%"}}):a>=0&&(0,i.jsxs)(t.Fragment,{children:[(0,i.jsx)("div",{className:d("filled"),style:{width:"".concat(c?100-a:a,"%")}}),(0,i.jsx)("div",{className:d("filled-title"),children:"".concat(Math.round(a),"%")})]})})}},69214:(e,a,o)=>{o.d(a,{A:()=>u});var t=o(86017),r=o(75850),n=o(24362),l=o(90861),s=o(68036),i=o(98366),d=o(75859);const c=(0,n.cn)("entity-status");function u(e){let{status:a=r.K.Grey,name:o="",label:n,path:u,iconPath:m,size:v="s",mode:h="color",showStatus:p=!0,externalLink:N=!1,withLeftTrim:b=!1,hasClipboardButton:g,clipboardButtonAlwaysVisible:k=!1,className:D,additionalControls:I}=e;const S=()=>p?(0,d.jsx)(i.J,{className:c("icon"),status:a,size:v,mode:h}):null;return(0,d.jsxs)("div",{className:c(null,D),title:o,children:[m?(R=m,(0,d.jsx)(t.r,{target:"_blank",href:R,children:S()})):S(),n&&(0,d.jsx)("span",{title:n,className:c("label",{size:v,state:a.toLowerCase()}),children:n}),(0,d.jsx)("span",{className:c("link",{"with-left-trim":b}),children:u?N?(0,d.jsx)(t.r,{className:c("name"),href:u,children:o}):(0,d.jsx)(s.h,{className:c("name"),to:u,children:o}):o&&(0,d.jsx)("span",{className:c("name"),children:o})}),g&&(0,d.jsx)(l.m,{text:o,size:"s",className:c("clipboard-button",{visible:k})}),I]});var R}},40073:(e,a,o)=>{o.d(a,{J:()=>p,b:()=>h});var t=o(68963),r=o(44920),n=o(75850),l=o(24362),s=o(52317),i=o(4119),d=o(47651),c=o(62206),u=o(75859);const m=(0,l.cn)("pdisk-storage-popup"),v=[n.K.Orange,n.K.Red,n.K.Yellow],h=(e,a)=>{const{AvailableSize:o,TotalSize:t,State:r,PDiskId:n,NodeId:l,Path:c,Realtime:u,Type:m,Device:h}=e,p=[{label:"PDisk",value:(0,i.CH)({NodeId:l,PDiskId:n})||s.jX},{label:"State",value:r||"not available"},{label:"Type",value:m||"unknown"}];return l&&p.push({label:"Node Id",value:l}),a&&l&&a.get(l)&&p.push({label:"Host",value:a.get(l)}),c&&p.push({label:"Path",value:c}),p.push({label:"Available",value:"".concat((0,d.Uz)(o)," of ").concat((0,d.Uz)(t))}),u&&v.includes(u)&&p.push({label:"Realtime",value:u}),h&&v.includes(h)&&p.push({label:"Device",value:h}),p},p=e=>{let{data:a,nodes:o,...n}=e;const l=t.useMemo((()=>h(a,o)),[a,o]);return(0,u.jsx)(r.G,{contentClassName:m(),placement:["top","bottom"],offset:[0,12],...n,children:(0,u.jsx)(c._P,{title:"PDisk",info:l,size:"s"})})}},67359:(e,a,o)=>{o.d(a,{y:()=>u});var t=o(56829),r=o(24362),n=o(4119),l=o(47651),s=o(75859);const i=(0,r.cn)("progress-viewer"),d=e=>(0,n.uf)((0,n.W0)(Number(e),2)),c=(e,a)=>[d(e),d(a)];function u(e){let{value:a,capacity:o,formatValues:r=c,percents:n,className:d,size:u="xs",colorizeProgress:m,inverseColorize:v,warningThreshold:h=60,dangerThreshold:p=80}=e;const N=(0,t.F)();let b=Math.round(parseFloat(String(a))/parseFloat(String(o))*100)||0;b=b>100?100:b;let g=a,k=o,D="/";n?(g=b+"%",k="",D=""):r&&([g,k]=r(Number(a),Number(o)));let I=v?"danger":"good";m&&(b>h&&b<=p?I="warning":b>p&&(I=v?"good":"danger"));const S={width:b+"%"};return(0,l.kE)(a)?(0,s.jsxs)("div",{className:i({size:u,theme:N,status:I},d),children:[(0,s.jsx)("div",{className:i("line"),style:S}),(0,s.jsx)("span",{className:i("text"),children:(0,l.kE)(o)?"".concat(g," ").concat(D," ").concat(k):g})]}):(0,s.jsx)("div",{className:"".concat(i({size:u})," ").concat(d," error"),children:"no data"})}},98366:(e,a,o)=>{o.d(a,{J:()=>m});var t=o(67585),r=o(57225),n=o(71586),l=o(88776),s=o(75850),i=o(24362),d=o(75859);const c=(0,i.cn)("ydb-status-icon"),u={[s.K.Blue]:t.Z,[s.K.Yellow]:r.Z,[s.K.Orange]:n.Z,[s.K.Red]:r.Z};function m(e){let{status:a=s.K.Grey,size:o="s",mode:t="color",className:r}=e;const n={state:a.toLowerCase(),size:o};return"icons"===t&&a in u?(0,d.jsx)(l.J,{className:c("status-icon",n,r),data:u[a]}):(0,d.jsx)("div",{className:c("status-color",n,r)})}},79255:(e,a,o)=>{o.d(a,{c:()=>P});var t=o(4119),r=o(92666),n=o(68963),l=o(24362),s=o(75859);const i=(0,l.cn)("stack"),d=e=>{let{children:a,className:o}=e;return(0,s.jsx)("div",{className:i(null,o),children:n.Children.map(a,((e,a)=>n.isValidElement(e)?(0,s.jsx)("div",{className:i("layer"),style:{"--ydb-stack-level":a},children:e}):null))})};var c=o(92398),u=o(54665),m=o(5922),v=o(52317),h=o(34051),p=o(1796),N=o(74170),b=o(44920),g=o(14979),k=o(75850),D=o(47651),I=o(62206),S=o(40073);const R=(0,l.cn)("vdisk-storage-popup"),y=e=>{let{data:a,nodes:o,...l}=e;const i=(0,r.I)(a),d=n.useMemo((()=>i?(e=>{var a,o,r,n;const{VDiskId:l,VDiskState:s,SatisfactionRank:i,DiskSpace:d,FrontQueues:c,Replicated:u,UnsyncedVDisks:m,AllocatedSize:v,ReadThroughput:h,WriteThroughput:p,StoragePoolName:N}=e,b=[{label:"VDisk",value:(0,t.a2)(l)},{label:"State",value:null!==s&&void 0!==s?s:"not available"}];var g,I;return N&&b.push({label:"StoragePool",value:N}),i&&(null===(a=i.FreshRank)||void 0===a?void 0:a.Flag)!==k.K.Green&&b.push({label:"Fresh",value:null===(g=i.FreshRank)||void 0===g?void 0:g.Flag}),i&&(null===(o=i.LevelRank)||void 0===o?void 0:o.Flag)!==k.K.Green&&b.push({label:"Level",value:null===(I=i.LevelRank)||void 0===I?void 0:I.Flag}),i&&null!==(r=i.FreshRank)&&void 0!==r&&r.RankPercent&&b.push({label:"Fresh",value:i.FreshRank.RankPercent}),i&&null!==(n=i.LevelRank)&&void 0!==n&&n.RankPercent&&b.push({label:"Level",value:i.LevelRank.RankPercent}),d&&d!==k.K.Green&&b.push({label:"Space",value:d}),c&&c!==k.K.Green&&b.push({label:"FrontQueues",value:c}),u||b.push({label:"Replicated",value:"NO"}),m&&b.push({label:"UnsyncVDisks",value:m}),Number(v)&&b.push({label:"Allocated",value:(0,D.Uz)(v)}),Number(h)&&b.push({label:"Read",value:(0,D.Qt)(h)}),Number(p)&&b.push({label:"Write",value:(0,D.Qt)(p)}),b})(a):(e=>{const{NodeId:a,PDiskId:o,VSlotId:t,StoragePoolName:r}=e,n=[{label:"State",value:"not available"}];return r&&n.push({label:"StoragePool",value:r}),n.push({label:"NodeId",value:null!==a&&void 0!==a?a:v.jX},{label:"PDiskId",value:null!==o&&void 0!==o?o:v.jX},{label:"VSlotId",value:null!==t&&void 0!==t?t:v.jX}),n})(a)),[a,i]),c=n.useMemo((()=>i&&a.PDisk&&(0,S.b)(a.PDisk,o)),[a,o,i]);return(0,s.jsxs)(b.G,{contentClassName:R(),placement:["top","bottom"],offset:[0,12],...l,children:[a.DonorMode&&(0,s.jsx)(g._,{className:R("donor-label"),children:"Donor"}),(0,s.jsx)(I._P,{title:"VDisk",info:d,size:"s"}),c&&(0,s.jsx)(I._P,{title:"PDisk",info:c,size:"s"})]})},f=(0,l.cn)("ydb-vdisk-component"),x=e=>{let{data:a={},nodes:o,compact:l}=e;const i=(0,r.I)(a),[d]=(0,h.yu)(v.fo),[b,g]=n.useState(!1),k=n.useRef(null);let D;return d&&(0,m.D)(a.VDiskSlotId)&&(0,m.D)(a.PDiskId)&&(0,m.D)(a.NodeId)?D=(0,u.By)(a.VDiskSlotId,a.PDiskId,a.NodeId):(0,m.D)(a.NodeId)&&i&&(D=(0,u.ax)(u.ZP.node,{id:a.NodeId,activeTab:c.pV},{pdiskId:a.PDiskId,vdiskId:(0,t.a2)(a.VDiskId)})),(0,s.jsxs)(n.Fragment,{children:[(0,s.jsx)(y,{data:a,nodes:o,anchorRef:k,open:b}),(0,s.jsx)("div",{className:f(),ref:k,onMouseEnter:()=>{g(!0)},onMouseLeave:()=>{g(!1)},children:D?(0,s.jsx)(N.h,{to:D,className:f("content"),children:(0,s.jsx)(p.p,{diskAllocatedPercent:a.AllocatedPercent,severity:a.Severity,compact:l})}):(0,s.jsx)(p.p,{diskAllocatedPercent:a.AllocatedPercent,severity:a.Severity,compact:l})})]})};function P(e){let{data:a,nodes:o,compact:n,className:l,stackClassName:i}=e;const c=null===a||void 0===a?void 0:a.Donors,u=c&&c.length>0?(0,s.jsxs)(d,{className:i,children:[(0,s.jsx)(x,{data:a,nodes:o,compact:n}),c.map((e=>{const a=(0,r.I)(e);return(0,s.jsx)(x,{data:e,nodes:o,compact:n},(0,t.a2)(a?e.VDiskId:e))}))]}):(0,s.jsx)(x,{data:a,nodes:o,compact:n});return(0,s.jsx)("div",{className:l,children:u})}},92092:(e,a,o)=>{o.d(a,{KJ:()=>N,Y2:()=>p,mD:()=>u,sl:()=>v});var t=o(75850),r=o(21897),n=o(17632),l=o(3764),s=o(51688),i=o(15106);const d={[t.K.Grey]:0,[t.K.Blue]:0,[t.K.Green]:1,[t.K.Yellow]:100,[t.K.Orange]:1e4,[t.K.Red]:1e6},c=(e,a)=>{var o;const t=(0,l.w)(e);return{...t,StoragePoolName:a,Donors:null===t||void 0===t||null===(o=t.Donors)||void 0===o?void 0:o.map((e=>({...e,StoragePoolName:a})))}},u=(e,a)=>{var o;let t,s=0,u=0,m=0,v=0,h=0,p=0;const{Name:N,MediaType:b}=a;if(e.VDisks)for(const i of e.VDisks){const{Replicated:e,VDiskState:a,AvailableSize:o,AllocatedSize:c,PDisk:N,DiskSpace:b,ReadThroughput:g,WriteThroughput:k}=i,{Type:D,State:I,AvailableSize:S}=(0,l.b)(N);e&&I===r.w.Normal&&a===n.H.OK||(s+=1),b&&(u+=d[b]);const R=Number(null!==o&&void 0!==o?o:S)||0,y=Number(c)||0;m+=y,v+=R+y,h+=Number(g)||0,p+=Number(k)||0,t=!D||D!==t&&t?"Mixed":D}const g=null===(o=e.VDisks)||void 0===o?void 0:o.map((e=>c(e,N))),k=(0,i.Ic)({Used:m,Limit:v},5);return{...e,VDisks:g,Usage:k,Read:h,Write:p,PoolName:N,Used:m,Limit:v,Degraded:s,UsedSpaceFlag:u,MediaType:b||t||void 0}},m=e=>{const{VDisks:a=[],PoolName:o,Usage:r=0,Read:n=0,Write:l=0,Used:s=0,Limit:i=0,Degraded:u=0,Kind:m,MediaType:v}=e,h=a.reduce(((e,a)=>{let{DiskSpace:o}=a;return o&&o!==t.K.Grey?e+d[o]:e}),0),p=a.map((e=>c(e,o))),N=Math.floor(100*Number(r));return{...e,UsedSpaceFlag:h,PoolName:o,MediaType:v||m,VDisks:p,Usage:N,Read:Number(n),Write:Number(l),Used:Number(s),Limit:Number(i),Degraded:Number(u)}},v=(e,a)=>{let o=[];return e?o=e.map(m):null===a||void 0===a||a.forEach((e=>{var a;null===(a=e.Groups)||void 0===a||a.forEach((a=>{o.push(u(a,e))}))})),o},h=e=>{var a,o,t;const n=(null===(a=e.PDisks)||void 0===a?void 0:a.filter((e=>e.State!==r.w.Normal)).length)||0,i=null===(o=e.PDisks)||void 0===o?void 0:o.map((a=>({...(0,l.b)(a),NodeId:e.NodeId}))),d=null===(t=e.VDisks)||void 0===t?void 0:t.map((a=>({...(0,l.w)(a),NodeId:e.NodeId})));return{...(0,s.Ns)(e.SystemState),NodeId:e.NodeId,PDisks:i,VDisks:d,Missing:n}},p=e=>{const{Nodes:a,TotalNodes:o,FoundNodes:t}=e,r=null===a||void 0===a?void 0:a.map(h);return{nodes:r,total:Number(o)||(null===r||void 0===r?void 0:r.length),found:Number(t)}},N=e=>{const{StoragePools:a,StorageGroups:o,TotalGroups:t,FoundGroups:r}=e,n=v(o,a);return{groups:n,total:Number(t)||n.length,found:Number(r)}}},21897:(e,a,o)=>{let t;o.d(a,{w:()=>t}),function(e){e.Initial="Initial",e.InitialFormatRead="InitialFormatRead",e.InitialFormatReadError="InitialFormatReadError",e.InitialSysLogRead="InitialSysLogRead",e.InitialSysLogReadError="InitialSysLogReadError",e.InitialSysLogParseError="InitialSysLogParseError",e.InitialCommonLogRead="InitialCommonLogRead",e.InitialCommonLogReadError="InitialCommonLogReadError",e.InitialCommonLogParseError="InitialCommonLogParseError",e.CommonLoggerInitError="CommonLoggerInitError",e.Normal="Normal",e.OpenFileError="OpenFileError",e.ChunkQuotaError="ChunkQuotaError",e.DeviceIoError="DeviceIoError",e.Missing="Missing",e.Timeout="Timeout",e.NodeDisconnected="NodeDisconnected",e.Unknown="Unknown"}(t||(t={}))},11431:(e,a,o)=>{let t;o.d(a,{w:()=>t}),function(e){e.v1="v1",e.v2="v2"}(t||(t={}))},17632:(e,a,o)=>{let t;o.d(a,{H:()=>t}),function(e){e.Initial="Initial",e.LocalRecoveryError="LocalRecoveryError",e.SyncGuidRecovery="SyncGuidRecovery",e.SyncGuidRecoveryError="SyncGuidRecoveryError",e.OK="OK",e.PDiskError="PDiskError"}(t||(t={}))},77072:(e,a,o)=>{o.d(a,{i6:()=>s,mG:()=>l,mr:()=>d,oO:()=>n,s:()=>i,tH:()=>c});var t=o(21897),r=o(17632);const n={Grey:0,Green:1,Blue:2,Yellow:3,Orange:4,Red:5},l=Object.entries(n).reduce(((e,a)=>{let[o,t]=a;return{...e,[t]:o}}),{}),s=n.Grey,i=l[s],d={[r.H.OK]:n.Green,[r.H.Initial]:n.Yellow,[r.H.SyncGuidRecovery]:n.Yellow,[r.H.LocalRecoveryError]:n.Red,[r.H.SyncGuidRecoveryError]:n.Red,[r.H.PDiskError]:n.Red},c={[t.w.Initial]:n.Grey,[t.w.Normal]:n.Green,[t.w.InitialFormatRead]:n.Yellow,[t.w.InitialSysLogRead]:n.Yellow,[t.w.InitialCommonLogRead]:n.Yellow,[t.w.InitialFormatReadError]:n.Red,[t.w.InitialSysLogReadError]:n.Red,[t.w.InitialSysLogParseError]:n.Red,[t.w.InitialCommonLogReadError]:n.Red,[t.w.InitialCommonLogParseError]:n.Red,[t.w.CommonLoggerInitError]:n.Red,[t.w.OpenFileError]:n.Red,[t.w.ChunkQuotaError]:n.Red,[t.w.DeviceIoError]:n.Red}},92666:(e,a,o)=>{o.d(a,{I:()=>r,b:()=>n});var t=o(77072);function r(e){return"VDiskId"in e}function n(e){return void 0===e?t.s:t.mG[e]||t.s}},3764:(e,a,o)=>{o.d(a,{b:()=>p,w:()=>h});var t=o(47651),r=o(75850),n=o(99106),l=o(77072);const s=(0,n.p)(85,95,[r.K.Green,r.K.Yellow,r.K.Red]);function i(e){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;const o=function(e){return a=e,void 0!==a&&a in l.tH?l.tH[e]:l.i6;var a}(e.State),t=s(a);return o!==l.i6&&t?Math.max(o,l.oO[t]):o}var d=o(92666);function c(e){if(!(0,d.I)(e))return l.i6;const{DiskSpace:a,VDiskState:o,FrontQueues:t,Replicated:r,DonorMode:n}=e;if(!o)return l.i6;const s=u(a),i=function(e){var a;if(!e)return l.i6;return null!==(a=l.mr[e])&&void 0!==a?a:l.i6}(o),c=Math.min(l.oO.Orange,u(t));let m=Math.max(s,i,c);return r||n||m!==l.oO.Green||(m=l.oO.Blue),m}function u(e){var a;return e&&null!==(a=l.oO[e])&&void 0!==a?a:l.i6}const m={HDD:"HDD",SSD:"SSD",MVME:"NVME"};function v(e){if(!e)return;const a=function(e,a){const o={};return Object.entries(a).reduce(((a,t)=>{let[r,n]=t;const l=e.length-a,s=l-n;return o[r]=e.substring(s,l)||"0",a+n}),0),o}(BigInt(e).toString(2),{isSolidState:1,kind:55,typeExt:8});if("1"===a.isSolidState)switch(parseInt(a.typeExt,2)){case 0:return m.SSD;case 2:return m.MVME}else if("0"===a.typeExt)return m.HDD}function h(){var e,a;let o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const r=o.PDisk?p(o.PDisk):void 0,n=null!==(e=o.PDiskId)&&void 0!==e?e:null===r||void 0===r?void 0:r.PDiskId,l=function(e,a,o){const r=null!==a&&void 0!==a?a:o;if(!(0,t.kE)(e)||!(0,t.kE)(r))return;return Math.round(100*Number(e)/(Number(e)+Number(r)))}(o.AllocatedSize,o.AvailableSize,null===r||void 0===r?void 0:r.AvailableSize),s=null===(a=o.Donors)||void 0===a?void 0:a.map((e=>h({...e,DonorMode:!0}))),i=c(o);return{...o,PDisk:r,PDiskId:n,AllocatedPercent:l,Donors:s,Severity:i}}function p(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{AvailableSize:a,TotalSize:o,Category:r}=e,n=v(r),l=function(e,a){if(!(0,t.kE)(e)||!(0,t.kE)(a))return;return Math.round(100*(Number(a)-Number(e))/Number(a))}(a,o),s=i(e,l);return{...e,Type:n,AllocatedPercent:l,Severity:s}}},99106:(e,a,o)=>{o.d(a,{p:()=>t});const t=(e,a,o)=>t=>0<=t&&t<e?o[0]:e<=t&&t<a?o[1]:a<=t?o[2]:void 0},15106:(e,a,o)=>{o.d(a,{Ic:()=>t,P7:()=>n,t5:()=>r});const t=function(e){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;const o=e.Limit?100*e.Used/e.Limit:0;return Math.floor(o/a)*a},r={PoolName:"PoolName",Kind:"Kind",MediaType:"MediaType",Erasure:"Erasure",Degraded:"Degraded",Usage:"Usage",GroupId:"GroupId",Used:"Used",Limit:"Limit",Read:"Read",Write:"Write"},n=e=>Object.values(r).includes(e)}}]);