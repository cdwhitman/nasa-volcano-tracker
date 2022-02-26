(this["webpackJsonpvolcano-tracker"]=this["webpackJsonpvolcano-tracker"]||[]).push([[0],{14:function(e,t,c){e.exports={details:"EventDetails_details__2G7TU",links:"EventDetails_links__3fPri"}},19:function(e,t,c){e.exports={loader:"Loader_loader__1tU_p"}},20:function(e,t,c){},26:function(e,t,c){},31:function(e,t,c){"use strict";c.r(t);var n=c(2),a=c.n(n),s=c(3),r=c.n(s),i=(c(26),c(16)),o=c.n(i),l=c(17),j=c(5),d=c(21),u=c(4),b=c(10),O=c.n(b),x=c(11),f=c.n(x),v=c(12),h=c.n(v),_=c(13),m=c.n(_),p=c(0),g=function(e){var t=e.type,c=e.onClick,n=e.fire,a=e.volcano,s=e.ice,r=e.storm;return Object(p.jsxs)("div",{className:"location-marker",onClick:c,children:[12===t&&a&&Object(p.jsx)("div",{children:Object(p.jsx)(u.a,{icon:O.a,className:"icon"})}),8===t&&n&&Object(p.jsx)("div",{children:Object(p.jsx)(u.a,{icon:f.a,className:"icon"})}),10===t&&r&&Object(p.jsx)("div",{children:Object(p.jsx)(u.a,{icon:m.a,className:"icon"})}),15===t&&s&&Object(p.jsx)("div",{children:Object(p.jsx)(u.a,{icon:h.a,className:"icon"})})]})},k=c(14),N=c.n(k),S=function(e){var t=e.info;return Object(p.jsxs)("div",{className:N.a.details,children:[Object(p.jsx)("h2",{children:t.title}),Object(p.jsx)("p",{children:"More Information:"}),Object(p.jsxs)("div",{children:[Object(p.jsx)("a",{href:t.url,target:"blank",className:N.a.links,children:t.url}),void 0!==t.urls&&t.urls!==t.url&&Object(p.jsx)("a",{href:t.urls,target:"blank",className:N.a.links,children:t.urls})]})]})},E=c(6),C=c.n(E),P=function(e){var t=e.eventData,c=e.center,a=e.zoom,s=Object(n.useState)(null),r=Object(j.a)(s,2),i=r[0],o=r[1],l=Object(n.useState)(!0),b=Object(j.a)(l,2),x=b[0],v=b[1],_=Object(n.useState)(!0),k=Object(j.a)(_,2),N=k[0],E=k[1],P=Object(n.useState)(!0),T=Object(j.a)(P,2),y=T[0],A=T[1],D=Object(n.useState)(!0),M=Object(j.a)(D,2),w=M[0],R=M[1],U=t.map((function(e){return Object(p.jsx)(g,{type:e.categories[0].id,lat:e.geometries[0].coordinates[1],lng:e.geometries[0].coordinates[0],fire:x,ice:w,storm:y,volcano:N,onClick:function(){return o({title:e.title,url:e.sources[0].url})}},e.id)}));return Object(p.jsxs)("div",{className:C.a.container,children:[Object(p.jsxs)("div",{className:C.a.filter,children:[Object(p.jsxs)("button",{type:"button",className:C.a.toggle,onClick:function(){return v(!x)},children:[Object(p.jsx)(u.a,{icon:f.a})," Wildfires"]}),Object(p.jsxs)("button",{type:"button",className:C.a.toggle,onClick:function(){return E(!N)},children:[" ",Object(p.jsx)(u.a,{icon:O.a}),"Volcanos"]}),Object(p.jsxs)("button",{type:"button",className:C.a.toggle,onClick:function(){return R(!w)},children:[" ",Object(p.jsx)(u.a,{icon:h.a}),"Icebergs"]}),Object(p.jsxs)("button",{type:"button",className:C.a.toggle,onClick:function(){return A(!y)},children:[" ",Object(p.jsx)(u.a,{icon:m.a}),"Tripical Storms"]})]}),Object(p.jsxs)("div",{className:"grid",children:[Object(p.jsx)("div",{className:C.a.map,children:Object(p.jsx)(d.a,{bootstrapURLKeys:{key:Object({NODE_ENV:"production",PUBLIC_URL:"/nasa-natural-event-tracker",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_MAP_API_KEY},defaultCenter:c,defaultZoom:a,children:U})}),Object(p.jsx)("div",{className:C.a.details,children:i&&Object(p.jsx)(S,{info:i})})]})]})};P.defaultProps={center:{lat:19.8968,lng:-155.5828},zoom:2};var T=P,y=c.p+"static/media/loading.8760a8a1.gif",A=c(19),D=c.n(A),M=function(){return Object(p.jsxs)("div",{className:D.a.loader,children:[Object(p.jsx)("img",{src:y,alt:"Loading"}),Object(p.jsx)("h1",{children:"Fetching Data..."})]})},w=c(20),R=c.n(w),U=function(){return Object(p.jsx)(n.Fragment,{children:Object(p.jsx)("header",{className:R.a.Header,children:"NASA Powered Natural Event Tracker"})})};var F=function(){var e=Object(n.useState)([]),t=Object(j.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(!1),r=Object(j.a)(s,2),i=r[0],d=r[1];return Object(n.useEffect)((function(){var e=function(){var e=Object(l.a)(o.a.mark((function e(){var t,c,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d(!0),e.next=3,fetch("https://eonet.sci.gsfc.nasa.gov/api/v2.1/events");case 3:return t=e.sent,e.next=6,t.json();case 6:c=e.sent,n=c.events,a(n),d(!1);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),Object(p.jsxs)(n.Fragment,{children:[Object(p.jsx)(U,{}),Object(p.jsx)("div",{children:i?Object(p.jsx)(M,{}):Object(p.jsx)(T,{eventData:c})}),";"]})};r.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(F,{})}),document.getElementById("root"))},6:function(e,t,c){e.exports={container:"Map_container__3jri6",filter:"Map_filter__3UA95",toggle:"Map_toggle__1Ypf-",grid:"Map_grid__11Vws",map:"Map_map__2831q",details:"Map_details__SZPdk"}}},[[31,1,2]]]);
//# sourceMappingURL=main.fd470eed.chunk.js.map