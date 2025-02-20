(this["webpackJsonpvanity-stock"]=this["webpackJsonpvanity-stock"]||[]).push([[0],{17:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return i})),n.d(t,"d",(function(){return d})),n.d(t,"c",(function(){return l}));var r=n(22);const a={tablet:768,mobile:767.98},o=Object.keys(a).reduce(((e,t)=>(e[t]=function(){return r.a`
		@media (max-width: ${a[t]}px) {
			${Object(r.a)(...arguments)};
		}
	`},e)),{}),i=window.innerWidth<=767.98,d=window.innerWidth>414&&window.innerWidth<769,l=1024===window.innerWidth&&1366===window.innerHeight},179:function(e,t,n){"use strict";n(237);var r=n(189),a=n(0),o=n.n(a),i=n(117),d=n(30),l=n(185),c=n(6);const s=o.a.lazy((()=>n.e(10).then(n.bind(null,497)))),p=o.a.lazy((()=>n.e(5).then(n.bind(null,498)))),b=o.a.lazy((()=>n.e(11).then(n.bind(null,499)))),x=o.a.lazy((()=>Promise.all([n.e(3),n.e(12)]).then(n.bind(null,500)))),u=o.a.lazy((()=>Promise.all([n.e(4),n.e(13)]).then(n.bind(null,501)))),h=o.a.lazy((()=>n.e(7).then(n.bind(null,496))));function m(e){let{language:t,country:n}=e;return Object(c.jsx)(a.Suspense,{fallback:Object(c.jsx)(l.f,{}),children:Object(c.jsxs)(d.c,{children:[Object(c.jsx)(d.a,{exact:!0,path:"/vanity-stock",render:()=>Object(c.jsx)(s,{language:t})}),Object(c.jsx)(d.a,{exact:!0,path:"/vanity-stock/courses",render:()=>Object(c.jsx)(p,{language:t})}),Object(c.jsx)(d.a,{exact:!0,path:"/vanity-stock/jobs",render:()=>Object(c.jsx)(b,{language:t})}),Object(c.jsx)(d.a,{exact:!0,path:"/vanity-stock/certificates",render:()=>Object(c.jsx)(x,{language:t})}),Object(c.jsx)(d.a,{exact:!0,path:"/vanity-stock/questions",render:()=>Object(c.jsx)(u,{language:t})}),Object(c.jsx)(d.a,{exact:!0,path:"/vanity-stock/books",render:()=>Object(c.jsx)(h,{language:t})}),Object(c.jsx)(d.a,{path:"/vanity-stock/openboard",component:()=>(window.location.href="https://letmehelp-open-board.herokuapp.com/",null)})]})})}n(400),n(116),n(171),n(405),n(147),n(172);var g=n(45),f=(n(152),n(55));n(417),n(418),n(419),n(420),n(421);const{Header:j,Content:y,Footer:O,Sider:w}=f.a,{SubMenu:v}=g.a;localStorage.getItem("i18n");let $=localStorage.getItem("country")||"sg";t.a=function(){return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("div",{className:"main-wrapper",children:Object(c.jsxs)(i.a,{children:[Object(c.jsx)(r.a,{}),Object(c.jsx)(m,{country:$})]})})})}},185:function(e,t,n){"use strict";n.d(t,"e",(function(){return B})),n.d(t,"f",(function(){return N})),n.d(t,"g",(function(){return p})),n.d(t,"d",(function(){return L})),n.d(t,"a",(function(){return J})),n.d(t,"b",(function(){return V})),n.d(t,"c",(function(){return Z}));n(152);var r=n(55),a=n(0),o=n.n(a),i=n(22),d=n(17),l=n(6);const c=i.b.section`
	color: ${e=>{let{dark:t}=e;return t?"#fff":"#222"}};
	max-width: ${e=>{let{maxWidth:t}=e;return t}};
	padding: ${e=>{let{noPadding:t,padding:n,paddingHorizontal:r}=e;return t?0:n||("padded"===r||"very"===r?"20px 110px":0===r?"20px 0":"20px 50px")}};
	width: ${e=>{let{width:t}=e;return t||"100%"}};
	border-bottom: ${e=>{let{borderBottom:t}=e;return t?"1px solid #ddd":"none"}};
	text-align: ${e=>{let{textAlign:t}=e;return t||"left"}};
	background-color: ${e=>{let{bg:t,dark:n}=e;return n?"#5d5d5d":t||"transparent"}};
	margin-bottom: ${e=>{let{marginBottom:t}=e;return("padded"===t?"1.5em":"very"===t&&"2.5em")||"super"===t&&"4em"||0===t&&0||"1em"}};
	margin: ${e=>{let{centered:t}=e;return t&&"0 auto"}};
	strong,
	h2,
	h3,
	h4,
	h5,
	h6 {
		color: ${e=>{let{dark:t}=e;return t?"#fff":"#222"}};
	}
	${d.a.mobile`
        padding: ${e=>e.noPadding?0:"20px"};
    `}
`;function s(e,t){let{children:n,...r}=e;return Object(l.jsx)(c,{...r,ref:t,children:n})}var p=o.a.forwardRef(s),b=(n(186),n(78)),x=(n(187),n(83)),u=(n(236),n(53)),h=(n(412),n(413),n(414),n(415),n(416),n(116),n(47));Object(i.b)(r.a.Footer)`
	&& {
		padding: 3em;
		border-top: 1px solid #ddd;
		background-color: #fff;
		z-index: 1;
		a {
			color: ${h.a.greyColor};
		}
	}
	${d.a.mobile`
		padding: 2em !important;
	`}
`,i.b.span`
	font-size: 20px;
	border-radius: 50%;
	height: 35px;
	width: 35px;
	background: ${h.a.greyColor};
	color: #fff;
	display: inline-flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	margin-left: 20px;
	&:hover {
		background: ${e=>{let{bg:t}=e;return t||`${h.a.greyColor}`}};
	}
	@media only screen and (min-width: 1024px) and (max-height: 1366px) and (-webkit-min-device-pixel-ratio: 1.5) {
		margin-left: 10px;
	}
	${d.a.mobile`
		margin-left: 10px;
	`}
`;const{Paragraph:m,Text:g}=u.a;Object(i.b)(m)`
	font-size: 16px;
	margin-bottom: 0.5em !important;
	${d.a.mobile`
		font-size: 14px;
	`}
`;n(242);var f=n(224),j=n(232),y=n.n(j),O=n.p+"static/media/logo_workdeputy.d236f13e.png";const w=i.b.div`
	margin-bottom: ${e=>{let{mb:t}=e;return t||"1em"}};
	cursor: pointer;
`;n(179);var v=n(30);const $=Object(i.b)((function(e){let{width:t,onClick:n,mb:r,isCudyTech:a=!1,...o}=e;return Object(l.jsx)(w,{...o,mb:r,children:Object(l.jsx)("img",{alt:"",src:O,onClick:n,width:t||100})})}))`
	margin-right: 5px;
	cursor: pointer;
`;var k=function(e){let{i18n:t,isUserLoggedIn:n=!0,forLogin:r,forSignUp:o}=e;const i=Object(v.f)(),[c,s]=Object(a.useState)({}),[p,b]=Object(a.useState)({}),[u,h]=Object(a.useState)(!1);return Object(l.jsx)(A,{disableInlineStyles:!0,children:Object(l.jsx)(z,{children:Object(l.jsx)(C,{type:"flex",style:{justifyContent:"space-between",padding:d.b?"2px 0":"2px 2%"},children:Object(l.jsx)(S,{lg:n?16:19,md:13,xs:24,children:Object(l.jsx)(x.a,{align:"middle",children:Object(l.jsx)("div",{className:"main-logo",children:Object(l.jsx)($,{style:{marginBottom:"0"},onClick:()=>i.push("/"),width:d.b?"270px":d.d?"180":"270"})})})})})})})};const C=Object(i.b)(x.a)`
	flex-wrap: nowrap !important;
`,z=i.b.header`
	.ant-col {
		line-height: 0;
		align-self: center;
		overlayStyle
	}
	background-color: #fff;

	#google_translate_element {
		margin-right: 2em;
		display: inline-block;
		+ * {
			display: inline-block;
		}
	}
	.main-logo {
		height: auto;
		img {
			cursor: pointer;
		}
	}
`,S=(i.b.div`
	text-align: right;

	${d.a.mobile`
        > * {
            display: block;
        }
    `}
`,Object(i.b)(b.a)`
	.ant-row-flex {
		align-items: center;
	}
`),A=Object(i.b)(y.a)`
	overflow-x: hidden;
	overflow-y: hidden;
	position: fixed;
	top: 0px;
	z-index: 1000;
	width: 100%;
	height: 70px !important;
	border-bottom: 1px solid ${h.a.lightGrey.one};
	box-shadow: ${h.a.boxShadow.main};

	@media (max-width: 575.98px) {
		.ant-row-flex {
			display: flex;
			justify-content: space-between;
			padding: 5px;
		}
	}
	.headroom {
		top: 0;
		left: 0;
		right: 0;
		z-index: 11;
		> header {
			@media (min-width: 1200px) {
				padding: 0rem 2.5rem;
			}
		}
		> header {
			@media (min-width: 768px) and (max-width: 991.98px) {
				padding: 0rem 1rem;
			}
		}

		> header {
			@media (min-width: 576px) and (max-width: 767.98px) {
				padding: 0rem 0.5rem;
			}
		}

		> header {
			@media (min-width: 992px) and (max-width: 1199.98px) {
				padding: 0rem 0rem;
			}
		}
		@media (min-width: 992px) and (max-width: 1199.98px) {
			.ant-input-search {
				width: 127px !important;
			}
		}
		@media (min-width: 768px) and (max-width: 991.98px) {
			.ant-input-search {
				width: 157px !important;
			}
		}

		@media (min-width: 576px) and (max-width: 767.98px) {
			.ant-input-search {
				width: 140px !important;
			}
		}
		.headroom--unfixed {
			position: fixed;
			transform: translateY(0);
		}
		.headroom--scrolled {
			position: fixed;
			/* transition: transform 0.3s ease; */
		}
		.headroom--unpinned {
			position: fixed;
			transform: translateY(0);
		}
		.headroom--pinned {
			position: fixed;
			transform: translateY(0%);
			> header {
				background-color: #fff;
			}
		}
	}
	${d.a.mobile`
		.headroom {
			> header {
				padding: 0 0.5em;
			}
		}
	`}
`,E=(Object(i.b)(f.a)`
	top: 10% !important;
	.ant-modal-header {
		border-radius: 8px !important;
		padding: 20px 30px 15px 30px !important;
	}
	.ant-modal-body {
		padding: 20px 40px 1px 40px !important;
	}
	.ant-modal-content {
		border-radius: 8px !important;
	}
	.subheader {
		font-weight: 400 !important;
	}
`,Object(i.b)(r.a.Header)`
	&& {
		background-color: #fff;
		height: auto;
		padding: 0;
		${d.a.mobile`
            height: auto;
        `}
	}
`);var B=function(e){let{breadcrumb:t=!1,customBread:n="",className:a,...o}=e;const{basic:i=!1,sidebar:d=!1,children:c,footer:s=!0}=o;return Object(l.jsxs)(T,{style:{background:"#d1d1d1"},className:a||"",children:[Object(l.jsx)(E,{children:Object(l.jsx)(k,{loading:o.loading,onUnauthUser:o.unauthUser,language:o.language})}),Object(l.jsx)(r.a.Content,{style:{background:"#d1d1d1"},children:Object(l.jsx)(r.a,{style:{background:"#d1d1d1"},children:Object(l.jsx)(r.a,{style:{background:"#d1d1d1"},children:Object(l.jsx)(r.a.Content,{style:{background:"#d1d1d1"},children:c})})})})]})};const T=Object(i.b)(r.a)`
	${""}
	padding-top: 70px;
	.ant-layout {
		height: calc(100vh - 70px);
	}
	${d.a.mobile`
		padding-top:48px;
	`}
`;n(201);var I=n(114);function N(){I.a;return Object(l.jsx)(p,{centered:!0,children:Object(l.jsx)(I.a,{avatar:!0,loading:!0,active:!0})})}var P=n(146),W=n.n(P),H=n(233),R=n.n(H);const U=Object(i.b)(W.a.Title)`
	&& {
		margin-bottom: 0;
		font-size: ${e=>{let{reverse:t}=e;return"false"!==t&&"12px"}};
		text-transform: ${e=>{let{reverse:t}=e;return"false"!==t?"uppercase":"initial"}};
		color: ${e=>{let{reverse:t,titlecolor:n}=e;return"false"!==t?"#5800ff":n&&n}};
		font-weight: ${e=>{let{bold:t}=e;return t&&"bold"}};
	}
`,F=Object(i.b)(W.a.Paragraph)`
	&& {
		margin-bottom: 0;
		color: ${e=>{let{color:t}=e;return t||h.a.greyColor}};
	}
`,G=Object(i.b)(W.a)`
	&& {
		margin-bottom: ${e=>{let{marginBottom:t}=e;return t||"1em"}};
		ul {
			margin-bottom: 0;
		}
	}
`;var L=function(e){let{content:t="",subheader:n="",icon:r="",iconSize:a=20,iconTheme:o="outlined",level:i=2,bold:d,color:c="",...s}=e;return Object(l.jsxs)(G,{...s,children:[r&&Object(l.jsx)(R.a,{type:r,theme:o,style:{fontSize:a,verticalAlign:"middle"}}),Object(l.jsx)(U,{className:"title",reverse:s.reverse?"true":"false",bold:d,level:i,titlecolor:s.title_color,children:t}),n&&Object(l.jsx)(F,{className:"subheader",color:c,children:n})]})},Y=n(234),_=n.n(Y);const M=Object(i.b)(_.a)`
	&& {
		border-radius: 4px;
		color: ${e=>{let{type:t,social:n,disabled:r}=e;return"facebook"===n||"google"===n||"primary"===t?"#fff":"dashed"===t?"#777":"ghost"===t||r?"#bbb":"default"===t?"rgba(0, 0, 0, 0.65)":"link"===t?"#5AB9EA":"inherit"}};
		background-color: ${e=>{let{social:t,type:n}=e;return"facebook"===t?"#3b5998":"google"===t?"#ea4335":"link"===n?"#e3e3e3":""}};
		border-color: ${e=>{let{social:t,type:n}=e;return"facebook"===t?"#3b5998":"google"===t?"#ea4335":"ghost"===n||"dashed"===n?"#d9d9d9":"primary"===n?"#4dbf3b":"default"===n||"link"===n?"transparent":"inherit"}};
		transition: all 0.1s ease;
	}
	&&& span {
		color: ${e=>{let{type:t,disabled:n}=e;return(n?"inherit":"primary"===t&&"#fff")||"inherit"}};
	}
`;var J=function(e){let{children:t,size:n="large",...r}=e;return Object(l.jsx)(M,{...r,size:n,children:t})},K=(n(396),n(235));Object(i.b)(K.a)`
	&& {
		margin-bottom: 2em;
		text-align: ${e=>{let{textAlign:t}=e;return t||"left"}};
	}
`;n(188);var q=n(191);Object(i.b)(q.a.Search)`
	&& {
		width: ${e=>{let{width:t}=e;return t||"280px"}};
		height: ${e=>{let{height:t}=e;return t||"45px"}};
		border: 1px solid ${h.a.lightGrey.one};
		border-radius: 32px;
		display: flex;
		align-items: center;
		padding: 0px 17px;
		.ant-input {
			box-shadow: none;
			border: none;
			font-size: ${e=>{let{fontSize:t}=e;return t||"14px"}};
			&:focus {
				width: 100%;
				box-shadow: none;
				background: initial;
			}
		}
		.ant-input-group-addon {
			button {
				border: 0;
			}
		}
		.ant-btn {
			border: 0;
		}
		&&:focus-within {
			box-shadow: 1px 3px 7px rgba(0, 0, 0, 0.2);
		}
	}
	${d.a.mobile`
		padding: 0px 10px !important;
		margin: 10px 5px 5px 5px;
	`}
`;n(411);n(407);var D=n(183);const Q=Object(i.b)(D.a)`
	&& {
		padding: ${e=>{let{padding:t={}}=e;return"object"!==typeof t?t:`${t.pt||0} ${t.pr||0} ${t.pb||0} ${t.pl||0}`}};
		height: ${e=>e.autoheight?"auto":e.height?e.height:"300px"};
		margin-bottom: 1.5em;
		border-radius: 8px;
		border: none;
		background: ${e=>{let{bg:t}=e;return t}};
		box-shadow: ${h.b[0]};
		transition: all 0.2s ease;
		&:hover {
			box-shadow: ${e=>{let{nohover:t}=e;return t?void 0:h.b[1]}};
			transform: ${e=>{let{nohover:t}=e;return t?"none":"translateY(-1px)"}};
		}
	}
	.ant-card-cover {
		max-height: 200px;
	}
	.ant-card-meta-detail {
		margin-bottom: 2em;
	}
`;var V=function(e){let{title:t="",description:n="",src:r="",children:a,nohover:o=0,...i}=e;return Object(l.jsxs)(Q,{...i,nohover:o,cover:r?Object(l.jsx)("img",{alt:t,src:r,width:"100%"}):null,children:[(t||n)&&Object(l.jsx)(D.a.Meta,{title:t,description:n}),a]})};var X=function(e){Object(a.useEffect)((()=>{const t=document.createElement("script");return t.src=e,t.async=!0,document.body.appendChild(t),()=>{document.body.removeChild(t)}}),[e])};function Z(e){let{src:t,width:n=400,height:r=400,...a}=e;return X("https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"),Object(l.jsx)("lottie-player",{...a,src:t,background:"transparent",speed:"1",style:{width:n,height:r,...a.style},loop:!0,autoplay:!0})}},400:function(e,t,n){},406:function(e,t,n){"use strict";n.r(t);n(0);var r=n(16),a=n.n(r),o=n(179);n(116),n(171);var i=n(6);a.a.render(Object(i.jsx)(o.a,{}),document.getElementById("root"))},47:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));const r=["0 12px 15px 0 rgba(0, 0, 0, 0.1), 0 17px 50px 0 rgba(0, 0, 0, 0.1)","2px 12px 9px rgba(0,0,0,0.1)","0 2px 5px rgba(0, 0, 0, .2)"],a={primaryColor:"#5AB9EA",mainBackgroundColor:"#C1C8e4 ",redColor:"#f50",greyColor:"#999",yellowColor:"#fbe126",greenColor:{primary:"#87d068",light:"#aae041"},lightGrey:{one:"#eee",two:"#f9f9f9"},socialColor:{SHARE:"slategray",FACEBOOK:"#3c589a",TWITTER:"#5eaade",LINKEDIN:"#107ab6",WHATSAPP:"#4dc247",TELEGRAM:"#00aef0"},primaryColorRgba:"rgba(90, 185, 234, 1)",boxShadow:{main:"0 12px 15px 0 rgba(0, 0, 0, 0.1), 0 17px 50px 0 rgba(0, 0, 0, 0.1)",hover:"0 2px 5px rgba(0, 0, 0, .2)",mild:"0 12px 20px 0 rgba(0, 0, 0, 0.1), 0 17px 20px 0 rgba(0, 0, 0, 0.1)"}}}},[[406,1,2]]]);
//# sourceMappingURL=main.cabcb6b6.chunk.js.map