(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(2676)}])},2676:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return x}});var r=t(5893),s=t(4051),i=t.n(s),o=t(7294),c=t(9669),d=t.n(c),a=t(9490),l=Intl.NumberFormat("ko-KR"),u=function(e){return null===e||0===e?"-":l.format(e)};function v(e,n,t,r,s,i,o){try{var c=e[i](o),d=c.value}catch(a){return void t(a)}c.done?n(d):Promise.resolve(d).then(r,s)}var f=function(e){var n,t=e.eventId,s=(0,o.useState)(),c=s[0],l=s[1],f=function(){var e,n=(e=i().mark((function e(){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d().get("".concat("https://api.matsurihi.me/mltd/v1","/events/").concat(t,"/rankings/borderPoints"));case 3:n=e.sent,console.log(n.data),l(n.data),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error();case 11:case"end":return e.stop()}}),e,null,[[0,8]])})),function(){var n=this,t=arguments;return new Promise((function(r,s){var i=e.apply(n,t);function o(e){v(i,r,s,o,c,"next",e)}function c(e){v(i,r,s,o,c,"throw",e)}o(void 0)}))});return function(){return n.apply(this,arguments)}}();return(0,o.useEffect)((function(){f()}),[]),(0,r.jsxs)("section",{className:"w-full flex flex-col gap-5",children:[(0,r.jsxs)("header",{className:"h-[60px] text-2xl flex justify-center items-center rounded-md shadow bg-[#ffc20b]",children:["\uac31\uc2e0 \uc2dc\uac04 ",a.ou.fromISO(null!==(n=null===c||void 0===c?void 0:c.eventPoint.summaryTime)&&void 0!==n?n:"").toFormat("yyyy-MM-dd HH:mm")]}),(0,r.jsxs)("article",{className:"w-full grid grid-cols-3 gap-3",children:[(0,r.jsxs)("div",{className:"border rounded-md p-3 shadow-sm",children:[(0,r.jsx)("div",{children:"\uc774\ubca4\ud2b8 pt \ub7ad\ud0b9"}),null===c||void 0===c?void 0:c.eventPoint.scores.map((function(e){return(0,r.jsxs)("div",{className:"h-[30px] flex justify-between",children:[(0,r.jsxs)("div",{children:[u(e.rank),"\uc704"]}),(0,r.jsxs)("div",{children:[u(e.score)," pt"]})]})}))]}),(0,r.jsxs)("div",{className:"border rounded-md p-3 shadow-sm",children:[(0,r.jsx)("div",{children:"\ud558\uc774\uc2a4\ucf54\uc5b4 \ub7ad\ud0b9"}),null===c||void 0===c?void 0:c.highScore.scores.map((function(e){return(0,r.jsxs)("div",{className:"h-[30px] flex justify-between",children:[(0,r.jsxs)("div",{children:[u(e.rank),"\uc704"]}),(0,r.jsx)("div",{children:u(e.score)})]})}))]}),(0,r.jsxs)("div",{className:"border rounded-md p-3 shadow-sm",children:[(0,r.jsx)("div",{children:"\ub77c\uc6b4\uc9c0 \ub7ad\ud0b9"}),null===c||void 0===c?void 0:c.loungePoint.scores.map((function(e){return(0,r.jsxs)("div",{className:"h-[30px] flex justify-between",children:[(0,r.jsxs)("div",{children:[u(e.rank),"\uc704"]}),(0,r.jsxs)("div",{children:[u(e.score)," pt"]})]})}))]})]})]})};function h(e,n,t,r,s,i,o){try{var c=e[i](o),d=c.value}catch(a){return void t(a)}c.done?n(d):Promise.resolve(d).then(r,s)}var m=function(){var e,n,t,s=(0,o.useState)(),c=s[0],l=s[1],u=(0,o.useState)(0),v=u[0],m=u[1],x=function(){var e,n=(e=i().mark((function e(){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d().get("".concat("https://api.matsurihi.me/mltd/v1","/events"),{params:{at:a.ou.now().toISO()}});case 3:n=e.sent,l(n.data[0]),m(n.data[0].id),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error();case 11:case"end":return e.stop()}}),e,null,[[0,8]])})),function(){var n=this,t=arguments;return new Promise((function(r,s){var i=e.apply(n,t);function o(e){h(i,r,s,o,c,"next",e)}function c(e){h(i,r,s,o,c,"throw",e)}o(void 0)}))});return function(){return n.apply(this,arguments)}}();return(0,o.useEffect)((function(){x()}),[]),(0,r.jsx)("section",{className:"w-full flex justify-center",children:(0,r.jsxs)("article",{className:"w-[720px] flex flex-col justify-center gap-5",children:[(0,r.jsx)("header",{className:"w-full h-10 flex items-center justify-center rounded-md bg-[#114c73] text-white font-bold",children:null===c||void 0===c?void 0:c.name}),v&&(0,r.jsx)(f,{eventId:v}),(0,r.jsxs)("div",{className:"w-full h-16 flex items-center justify-center gap-5 rounded-md shadow-md bg-[#114c73] text-white",children:[(0,r.jsxs)("div",{className:"flex flex-col justify-center",children:[(0,r.jsx)("div",{children:a.ou.fromISO(null!==(e=null===c||void 0===c?void 0:c.schedule.beginDate)&&void 0!==e?e:"").toFormat("yyyy-MM-dd HH:mm")}),(0,r.jsxs)("div",{className:"text-[12px] flex justify-center",children:["(",a.ou.fromISO(null!==(n=null===c||void 0===c?void 0:c.schedule.boostBeginDate)&&void 0!==n?n:"").toFormat("yyyy-MM-dd HH:mm"),")"]})]}),(0,r.jsx)("div",{className:"text-[30px] text-bold",children:" ~ "}),(0,r.jsx)("div",{children:a.ou.fromISO(null!==(t=null===c||void 0===c?void 0:c.schedule.endDate)&&void 0!==t?t:"").toFormat("yyyy-MM-dd HH:mm")})]})]})})},x=function(){return(0,r.jsx)(m,{})}}},function(e){e.O(0,[809,669,774,888,179],(function(){return n=8312,e(e.s=n);var n}));var n=e.O();_N_E=n}]);