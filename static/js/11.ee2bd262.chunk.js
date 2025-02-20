(this["webpackJsonpvanity-stock"]=this["webpackJsonpvanity-stock"]||[]).push([[11],{423:function(e,t,a){"use strict";t.a=a.p+"static/media/img1.6ef76f5d.jpg"},499:function(e,t,a){"use strict";a.r(t);a(236);var r=a(53),o=(a(187),a(83)),i=(a(186),a(78)),n=(a(188),a(191)),s=(a(237),a(189)),l=a(0),c=a(226),p=a(30),d=a(185),b=(a(116),a(47)),h=a(22),g=a(17),m=(a(423),a(6));const x=Object(h.b)(d.b)`
	&& {
		width: 100%;
		margin-right: 1em;
		box-shadow: ${e=>{let{boxShadow:t}=e;return t||"0 12px 20px 0 rgba(0, 0, 0, 0.1), 0 17px 10px 0 rgba(0, 0, 0, 0.1)"}};
		cursor: pointer;
		.ant-card-body {
			padding: 0;
			padding-top: 1em;

			${g.a.mobile`
				> .ant-typography {
                    font-size: 12px;
					max-width: 120px;
				}
			`}
		}
		.ant-card-cover {
			height: 230px;
			img {
				height: 100%;
				object-fit: cover;
				border-radius: 10px 10px 0 0;
			}
		}
	}
`;function j(e){let{height:t="430px",boxShadow:a,...o}=e;return Object(m.jsxs)(x,{height:t,boxShadow:a,className:"ta-center",children:[Object(m.jsx)(r.a.Paragraph,{ellipsis:{rows:2},style:{fontWeight:"600",fontSize:"22px",height:"55px",padding:"0 20px 0 10px",marginBottom:"0.2em",lineHeight:"1.2"},children:o.data["job-title"]}),Object(m.jsxs)(r.a.Text,{style:{fontSize:"16px",padding:"0 10px"},ellipsis:!0,children:[o.data["company-name"],", ",o.data["company-location"]]}),Object(m.jsx)("br",{}),Object(m.jsxs)(r.a.Text,{style:{fontSize:"16px",display:"inline-block",margin:"5px 0 5px 0"},type:"secondary",children:["Job Salary : ",o.data["job-salary"]?o.data["job-salary"]:"Not Listed"]}),Object(m.jsx)("br",{}),Object(m.jsx)(r.a.Text,{style:{fontSize:"16px"},children:o.data["post-date"]?`Job posted ${o.data["post-date"]}`:""})]})}var u=a.p+"static/media/for-jobs.240549f0.svg";t.default=Object(p.g)((function(e){let{history:t,i18n:a,language:r}=e;const[c,p]=Object(l.useState)(""),[b,h]=Object(l.useState)([]),[x,u]=Object(l.useState)(!0);return Object(l.useEffect)((()=>{fetch("https://jobs-end-point.herokuapp.com/web-development").then((e=>e.json())).then((e=>{h(e),u(!1)}))}),[]),Object(l.useEffect)((()=>{})),Object(m.jsxs)(d.e,{breadcrumb:!1,language:r,children:[Object(m.jsx)(s.a,{}),Object(m.jsx)(d.g,{className:(g.b,"pos-rel pt2em"),children:Object(m.jsx)(w,{children:Object(m.jsx)(f,{align:"middle",pl:"4rem",pr:"4rem",style:{marginTop:g.b?"0":"2em"},children:Object(m.jsxs)(i.a,{xl:11,lg:14,md:15,xs:24,offset:10,children:[Object(m.jsx)(O,{level:2,content:Object(m.jsx)(k,{children:Object(m.jsx)("span",{className:"primary",children:"Search For Jobs"})}),subheader:Object(m.jsx)("p",{children:"Take a shot at the best possible jobs available in the workplace for you. Never settle at less!"}),style:{marginBottom:"2em"}}),Object(m.jsx)(o.a,{justify:g.b?"center":"left",gutter:[0,16],style:{marginTop:g.b?"8em":"0"},children:Object(m.jsxs)(i.a,{md:20,xs:20,children:[Object(m.jsx)(n.a,{placeholder:"Search....",size:"large",autoFocus:!0,defaultValue:"FrontEnd Developer",suffix:$,onChange:e=>{p(e.target.value)},style:{borderRadius:"25px",fontSize:"20px",height:"50px",paddingLeft:"35px",paddingRight:"25px",width:"72%"}}),Object(m.jsx)(d.a,{style:{padding:"0 30px",fontSize:"20px",borderRadius:"8px",marginLeft:"15px"},size:"large",type:"primary",onClick:()=>{u(!0),fetch(`https://jobs-end-point.herokuapp.com/${c.replace(/ /g,"-")}`).then((e=>e.json())).then((e=>{h(e),u(!1)})).catch((e=>(console.log(e),e))),console.log(c)},children:"Search"})]})})]})})})}),Object(m.jsx)("hr",{}),x?Object(m.jsx)(d.f,{}):Object(m.jsx)(o.a,{gutter:[32,16],style:{paddingLeft:"6rem",paddingRight:"6rem",marginTop:"3em",paddingBottom:"3em"},children:b.map(((e,t)=>Object(m.jsx)(i.a,{span:6,children:Object(m.jsx)("a",{href:e["job-link"],target:"_blank",rel:"noreferrer",children:Object(m.jsx)(j,{data:e,height:"180px"})})},t)))})]})}));const f=Object(h.b)(o.a).attrs((()=>({type:"flex"})))`
	padding-left: ${e=>{let{pl:t}=e;return t||"8rem"}};
	padding-right: ${e=>{let{pr:t}=e;return t||"8rem"}};
	margin-bottom: ${e=>{let{marginbottom:t}=e;return t||"2em"}};
	margin-top: ${e=>{let{margintop:t}=e;return t||"2em"}};

	.overflowing-section {
		max-height: ${e=>{let{datalength:t}=e;return t>16&&"450px"}};
		overflow-y: ${e=>{let{datalength:t}=e;return t>16&&"scroll"}};
		-webkit-overflow-scrolling: touch;
		&::-webkit-scrollbar-thumb {
			border-radius: 8px;
			border: 2px solid ${b.a.lightGrey.two};
			background-color: rgba(0, 0, 0, 0.5);
		}
		&::-webkit-scrollbar {
			-webkit-appearance: none;
		}
		&::-webkit-scrollbar:vertical {
			width: 11px;
		}
		&::-webkit-scrollbar:horizontal {
			height: 11px;
		}
	}
	${g.a.tablet`
        padding-left: 4em;
        padding-right: 4em;
    `}
	${g.a.mobile`
        padding-left: 1.5em;
        padding-right: 1.5em;
    `}
	@media (max-width: 321px) {
		padding-left: 0.5em;
		padding-right: 0.5em;
	}
`,y=Object(h.b)(d.d)`
	&& {
		margin-bottom: 2em;
		h2 {
			font-weight: bold;
			line-height: 1.2;
		}
	}
`,O=Object(h.b)(y)`
	&& {
		h2 {
			p {
				margin-bottom: 0;
			}
			.primary {
				color: ${b.a.primaryColor};
			}
		}
		.ant-typography:not(h2) {
			font-size: 1.3em;
		}
	}
	${g.a.mobile`
        text-align: center;
		.ant-typography.subheader {
			font-size: 1em !important;
		}
		h3.ant-typography {
			font-size: 1.3em !important;
		}
    `}
`,k=Object(h.b)(r.a.Paragraph)`
	&& {
		margin-bottom: 0;
		color: ${e=>{let{color:t}=e;return t||b.a.greyColor}};
	}
`,w=h.b.div`
	background-image: ${`url(${u})`};
	background-size: 20em;
	background-repeat: no-repeat;
	background-position: 22% 0%;
	position: relative;
	height: 210px;
	width: 100%;
	${g.a.tablet`
        background-size: 16em;
		background-position: 0% 40%;
        height: 240px;
    `}
	${g.a.mobile`
		height: 275px;
		background-size: 11em;
		background-position: 50% 80%;
	`}
	@media (max-width: 321px) {
		height: 285px;
		background-position: 50% 90%;
	}
`,$=Object(m.jsx)(c.a,{style:{fontSize:16,color:"#4dbf3b"}})}}]);
//# sourceMappingURL=11.ee2bd262.chunk.js.map