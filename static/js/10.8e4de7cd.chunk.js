(this["webpackJsonpvanity-stock"]=this["webpackJsonpvanity-stock"]||[]).push([[10],{423:function(e,t,n){"use strict";t.a=n.p+"static/media/img1.6ef76f5d.jpg"},497:function(e,t,n){"use strict";n.r(t);var s=n(0),i=n(30),r=n(185),a=(n(116),n(47),n(22)),o=n(423),l=n.p+"static/media/img2.dc82cc8e.jpg",c=n.p+"static/media/img3.582e06c8.jpg",d=n.p+"static/media/img4.6c0b8af4.jpg",b=n.p+"static/media/img5.1515cf4c.png",p=n.p+"static/media/img6.44339e41.png",g=n(17),m=n(6);t.default=Object(i.g)((function(e){let{i18n:t,language:n}=e;return Object(i.f)(),Object(s.useEffect)((()=>{var e=g.b?220:370,t=g.b?180:300,n=g.b?160:220;setTimeout(l,1e3);var s=document.getElementById("drag-container"),i=document.getElementById("spin-container"),r=[...i.getElementsByTagName("img"),...i.getElementsByTagName("video")],a=document.getElementsByClassName("sp");for(let g=0;g<a.length;g++)a[g].addEventListener("mouseenter",(()=>{for(let e=0;e<a.length;e++)e!==g?(a[e].style.transition=".3s ease-in-out",a[e].style.opacity=.3):a[e].style.transition=".3s ease-in-out"}),!1),a[g].addEventListener("mouseleave",(()=>{for(let e=0;e<a.length;e++)a[e].style.transition=".2s ease-in-out",a[e].style.opacity=1}),!1);i.style.width=t+"px",i.style.height=n+"px";var o=document.getElementById("ground");function l(t){if(void 0===t){let e=document.getElementsByTagName("span");setTimeout((()=>{for(let t=0;t<e.length;t++)e[t].style.opacity=1}),1500),console.log(document.getElementsByTagName("span").length)}if(g.b)for(let n=0;n<r.length;n++)a[n].style.transform="rotateY("+n*(360/a.length)+"deg) translateZ("+e+"px)",a[n].style.transition="transform 1s",a[n].style.transitionDelay=t||(a.length-n)/4+"s";else for(let n=0;n<r.length;n++)a[n].style.transform="rotateY("+n*(360/a.length)+"deg) translateZ("+e+"px)",a[n].style.transition="transform 1s",a[n].style.transitionDelay=t||(a.length-n)/4+"s"}function c(e){g.b?j=0:(j>10&&(j=10),j<0&&(j=0)),e.style.transform="rotateX("+-j+"deg) rotateY("+m+"deg)"}function d(e){i.style.animationPlayState=e?"running":"paused"}o.style.width=3*e+"px",o.style.height=3*e+"px";var b=0,p=0,m=0,j=0;document.onpointerdown=function(e){clearInterval(s.timer);var t=(e=e||window.event).clientX,n=e.clientY;return this.onpointermove=function(e){var i=(e=e||window.event).clientX,r=e.clientY;m+=.1*(b=i-t),j+=.1*(p=r-n),c(s),t=i,n=r},this.onpointerup=function(e){s.timer=setInterval((function(){m+=.1*(b*=.95),j+=.1*(p*=.95),c(s),d(!1),Math.abs(b)<.5&&Math.abs(p)<.5&&(clearInterval(s.timer),d(!0))}),17),this.onpointermove=this.onpointerup=null},!1},document.onmousewheel=function(t){var n=(t=t||window.event).wheelDelta/20||-t.detail;(e+=n)>500&&(e=500),e<300&&(e=300),l(1)}}),[]),Object(m.jsx)(r.e,{breadcrumb:!1,language:n,children:Object(m.jsx)(j,{children:Object(m.jsxs)(f,{id:"drag-container",children:[Object(m.jsxs)(h,{id:"spin-container",onMouseOver:()=>{document.getElementById("spin-container").style.animationPlayState="paused"},onMouseOut:()=>{document.getElementById("spin-container").style.animationPlayState="running"},children:[Object(m.jsxs)(O,{className:"sp",onDoubleClick:()=>{window.open("/courses","_blank").focus()},children:[Object(m.jsxs)(y,{children:[Object(m.jsx)("img",{src:o.a,alt:""}),Object(m.jsx)(x,{})]}),Object(m.jsx)(w,{children:"Search For"}),Object(m.jsx)(v,{children:"Courses"})]}),Object(m.jsxs)(O,{className:"sp",onDoubleClick:()=>{window.open("/books","_blank").focus()},children:[Object(m.jsxs)(y,{children:[Object(m.jsx)("img",{src:l,alt:""}),Object(m.jsx)(x,{})]}),Object(m.jsx)(w,{children:"Search For"}),Object(m.jsx)(v,{children:"Books"})]}),Object(m.jsxs)(O,{className:"sp",onDoubleClick:()=>{window.open("/jobs","_blank").focus()},children:[Object(m.jsxs)(y,{children:[Object(m.jsx)("img",{src:c,alt:""}),Object(m.jsx)(x,{})]}),Object(m.jsx)(w,{children:"Search For"}),Object(m.jsx)(v,{children:"Jobs"})]}),Object(m.jsxs)(O,{className:"sp",onDoubleClick:()=>{window.open("/questions","_blank").focus()},children:[Object(m.jsxs)(y,{children:[Object(m.jsx)("img",{src:d,alt:""}),Object(m.jsx)(x,{})]}),Object(m.jsx)(w,{style:{padding:"6px 10px"},children:"Search For"}),Object(m.jsx)(v,{children:"Questions"})]}),Object(m.jsxs)(O,{className:"sp",onDoubleClick:()=>{window.open("/certificates","_blank").focus()},children:[Object(m.jsxs)(y,{children:[Object(m.jsx)("img",{src:b,alt:""}),Object(m.jsx)(x,{})]}),Object(m.jsx)(w,{children:"Wanna Generate"}),Object(m.jsx)(v,{children:"Certificates"})]}),Object(m.jsxs)(O,{className:"sp",onDoubleClick:()=>{window.open("/openboard","_blank").focus()},children:[Object(m.jsxs)(y,{children:[Object(m.jsx)("img",{src:p,alt:""}),Object(m.jsx)(x,{})]}),Object(m.jsx)(w,{children:"Wanna Make"}),Object(m.jsx)(v,{style:{right:"40px"},children:"Notes"})]}),Object(m.jsx)("p",{})]}),Object(m.jsx)(u,{id:"ground",children:"LET ME HELP"})]})})})}));const j=a.b.div`
	min-height: 80vh;
	touch-action: none;
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	justify-content: center;
	align-items: center;
	-webkit-perspective: 1000px;
	perspective: 1000px;
	-webkit-transform-style: preserve-3d;
	transform-style: preserve-3d;
`,h=(a.c`
    from{
		-webkit-transform: rotateY(0deg);
				transform: rotateY(0deg);
	} to{
		-webkit-transform: rotateY(360deg);
				transform: rotateY(360deg);
	}
`,a.b.div`
	position: relative;
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-transform-style: preserve-3d;
	transform-style: preserve-3d;
	${""}
`),f=Object(a.b)(h)`
	animation: none;
	img {
		-webkit-transform-style: preserve-3d;
		${""}
		transform-style: preserve-3d;
		width: 100%;
		height: 100%;
		line-height: 200px;
		border-radius: 15px;
	}
	p {
		font-family: Serif;
		position: absolute;
		top: 100%;
		left: 50%;
		-webkit-transform: translate(-50%, -50%) rotateX(90deg);
		transform: translate(-50%, -50%) rotateX(90deg);
		color: #fff;
	}
`,u=a.b.div`
	width: 900px;
	height: 900px;
	position: absolute;
	top: 100%;
	left: 50%;
	-webkit-transform: translate(-50%, -50%) rotateX(90deg);
	transform: translate(-50%, -50%) rotateX(90deg);
	background: -webkit-radial-gradient(center center, farthest-side, #91d57f, transparent);
`,x=a.b.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-image: linear-gradient(to right bottom, #4dbf3b, #20b057);
	opacity: 0.4;
	border-radius: 15px;
	z-index: 0;
`,y=a.b.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	-webkit-transform-style: preserve-3d;
	transform-style: preserve-3d;
`,O=a.b.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	-webkit-transform-style: preserve-3d;
	transform-style: preserve-3d;
	-webkit-box-reflect: below 10px linear-gradient(transparent, transparent, #0005);
	cursor: pointer;
`,w=a.b.span`
	position: absolute;
	top: -15px;
	right: 20px;
	color: #fff;
	line-height: 1;
	z-index: 100;
	padding: 6px;
	box-shadow: 0 12px 15px 0 rgba(0, 0, 0, 0.3), 0 17px 50px 0 rgba(0, 0, 0, 0.3);
	background-image: linear-gradient(to bottom right, rgba(77, 191, 59, 0.85), rgba(23, 176, 87, 0.85), rgba(23, 176, 87, 0.85));
	font-size: 1.5rem;
	text-align: right;
	text-transform: uppercase;
	font-weight: 300;
	border-radius: 8px;
	opacity: 0;
	transition: 2s ease-in-out;
`,v=Object(a.b)(w)`
	top: 16px;
	right: 30px;
`}}]);
//# sourceMappingURL=10.8e4de7cd.chunk.js.map