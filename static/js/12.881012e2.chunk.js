(this["webpackJsonpvanity-stock"]=this["webpackJsonpvanity-stock"]||[]).push([[12],{500:function(e,t,a){"use strict";a.r(t);a(242);var n=a(224),i=(a(236),a(53)),s=(a(448),a(490)),r=(a(188),a(191)),c=(a(493),a(489)),o=(a(186),a(78)),l=(a(237),a(189)),d=(a(452),a(225)),m=(a(187),a(83)),b=a(0),j=(a(116),a(502)),p=a(503),g=a(30),x=a(22),h=a(185),u=a(17),O=a.p+"static/media/for-certi.32db7500.svg",f=a.p+"static/media/for-certi-sample.6cdaa4f0.PNG",y=a(454),k=a.n(y),N=(a(47),a(6));const w=x.b.div`
	background-image: ${`url(${O})`};
	background-size: 16em;
	background-repeat: no-repeat;
	background-position: 50% 100%;
	position: relative;
	height: 50vh;
	img {
		position: absolute;
		left: 30px;
		top: 20px;
		cursor: pointer;
	}
`,$=Object(x.b)(w)`
	background-image: ${`url(${f})`};
	background-position: 50% 50%;
	background-size: 35em;
`,S=Object(x.b)(h.b)`
	.ant-card-body {
		padding: 10px;
	}
	${u.a.mobile`
		.ant-card-body{
			padding: 10px;
		}
	`}
`,T=Object(x.b)(h.g)`
	${u.a.tablet`
        padding: 10px 15px;
    `}
	${u.a.mobile`
        padding: 10px;
    `}
`,v=Object(x.b)(m.a)`
	padding: 2.5rem 8rem 1.5rem 8rem;
	${u.a.tablet`
		padding: 0 7rem;
	`}
	${u.a.mobile`
		padding: 5em 2em 3em 2em;
        height: fit-content;
	`}
	@media (max-width: 321px) {
		padding: 5em 1.5em 3em 1.5em;
	}
`;t.default=Object(g.g)((function(e){let{i18n:t,country:a}=e;const[n,g]=Object(b.useState)(),[x,O]=Object(b.useState)(),[f,y]=Object(b.useState)(),[E,C]=Object(b.useState)(!1),D="updatable",F={name:"file",multiple:!1,action:"https://www.mocky.io/v2/5cc8019d300000980a055e76",beforeUpload:e=>(-1===e.name.indexOf(".xlsx")?d.b.error(`${e.name} is not a png file`):g(e),!1),onChange(e){const{status:t}=e.file;"uploading"!==t&&console.log(e.file,e.fileList),"done"===t?d.b.success(`${e.file.name} file uploaded successfully.`):"error"===t&&d.b.error(`${e.file.name} file upload failed.`)},onDrop(e){console.log("Dropped files",e.dataTransfer.files)}},P={multiple:!1,beforeUpload:e=>("image/png"!==e.type?d.b.error(`${e.name} is not a png file`):O(e),!1),onChange:e=>{console.log(e.fileList)}},_={multiple:!1,beforeUpload:e=>("image/png"!==e.type?d.b.error(`${e.name} is not a png file`):y(e),!1),onChange:e=>{console.log(e.fileList)}};return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsxs)(h.e,{breadcrumb:!1,children:[Object(N.jsx)(l.a,{}),Object(N.jsx)(v,{align:"middle",children:Object(N.jsx)(o.a,{span:24,children:Object(N.jsx)(S,{autoheight:"true",nohover:"true",style:{marginBottom:"0"},children:Object(N.jsxs)(m.a,{children:[!u.b&&Object(N.jsxs)(o.a,{xl:12,lg:24,md:24,className:u.c||u.d?"":"border-right",style:{borderBottom:(u.d||u.c)&&"1px solid #ddd"},children:[Object(N.jsx)(w,{children:Object(N.jsx)(T,{style:{marginTop:u.c||u.d?"1.5em":"0em",marginBottom:0},children:Object(N.jsx)(h.d,{title_color:"#4dbf3b",content:"Generate Certificates",subheader:"Easily generate certificates and send them just by adding the details and performing a click operation.",style:{marginBottom:".5em"}})})}),Object(N.jsx)($,{})]}),Object(N.jsxs)(o.a,{xl:12,lg:24,md:24,xs:24,children:[Object(N.jsx)(T,{style:{marginTop:u.c||u.d?"1.5em":"0em",marginBottom:0},children:Object(N.jsxs)(c.a.Dragger,{...F,children:[Object(N.jsx)("p",{className:"ant-upload-drag-icon",children:Object(N.jsx)(j.a,{})}),Object(N.jsx)("p",{className:"ant-upload-text",children:"Click or drag file to this area to upload"}),Object(N.jsxs)("p",{className:"ant-upload-hint",children:["Upload an excel file with just two fields",Object(N.jsx)("br",{}),"First as Name and second as Email"]})]})}),Object(N.jsx)(T,{marginBottom:0,children:Object(N.jsxs)(s.a,{layout:"vertical",onFinish:e=>{if(n&&x&&f){d.b.loading({content:"Generating Certies...",key:D,duration:0});let t=e.appText.replace("\n"," ").split(" "),a="",i=112;for(let e=0;e<t.length;e++)a.length+t[e].length+1<=i?(a+=t[e],a+=" "):(a+="\n",i+=a.length);const s=new FormData;s.append("excelFile",n),s.append("sign1",x),s.append("sign2",f),s.append("desig1",e.desig1),s.append("desig2",e.desig2),s.append("org1Name",e.org1Name),s.append("org2Name",e.org2Name),s.append("appText",a),k.a.post("https://generate-mail-certis.herokuapp.com/certi-data",s).then((e=>{d.b.loading({content:"Generating Certies...",key:D,duration:.001}),C(!0)}))}else d.b.warning("Some file uploads still left!")},children:[Object(N.jsx)(s.a.Item,{name:"appText",label:"Appreciation text",children:Object(N.jsx)(r.a.TextArea,{rows:4,placeholder:"Enter Appreciation text",maxLength:320})}),Object(N.jsx)(h.d,{title_color:"#4dbf3b",content:"Enter details about authority",subheader:"Enter details of two of the persons from the issueing authority for certificate.",style:{marginBottom:"1em"}}),Object(N.jsxs)(m.a,{gutter:16,children:[Object(N.jsx)(o.a,{md:12,xs:24,children:Object(N.jsx)(s.a.Item,{name:"org1Name",label:"First Person's Name",children:Object(N.jsx)(r.a,{name:"first_name",placeholder:"Enter Name...",required:!0})})}),Object(N.jsx)(o.a,{md:12,xs:24,children:Object(N.jsx)(s.a.Item,{name:"org2Name",label:"Second Person's Name",children:Object(N.jsx)(r.a,{name:"second_name",placeholder:"Enter Name...",required:!0})})})]}),Object(N.jsxs)(m.a,{gutter:16,children:[Object(N.jsx)(o.a,{md:12,xs:24,children:Object(N.jsx)(s.a.Item,{name:"desig1",label:"First Person's Designation",children:Object(N.jsx)(r.a,{name:"first_designation",placeholder:"Enter Designation...",required:!0})})}),Object(N.jsx)(o.a,{md:12,xs:24,children:Object(N.jsx)(s.a.Item,{name:"desig2",label:"Second Person's Designation",children:Object(N.jsx)(r.a,{name:"second_designation",placeholder:"Enter Designation...",required:!0})})})]}),Object(N.jsxs)(m.a,{gutter:16,children:[Object(N.jsxs)(o.a,{md:12,xs:24,children:[Object(N.jsx)(i.a.Text,{style:{display:"block",paddingBottom:"8px"},children:"First Person's Signature"}),Object(N.jsx)(c.a,{...P,children:Object(N.jsx)(h.a,{type:"dashed",style:{width:"100% !important"},icon:Object(N.jsx)(p.a,{}),children:"Upload Signature"})})]}),Object(N.jsxs)(o.a,{md:12,xs:24,children:[Object(N.jsx)(i.a.Text,{style:{display:"block",paddingBottom:"8px"},children:"Second Person's Signature"}),Object(N.jsx)(c.a,{..._,children:Object(N.jsx)(h.a,{type:"dashed",icon:Object(N.jsx)(p.a,{}),children:"Upload Signature"})})]})]}),Object(N.jsx)(m.a,{gutter:24,justify:"center",children:Object(N.jsx)(o.a,{md:18,xs:24,style:{marginTop:"2em",marginBottom:u.b&&"1em"},children:Object(N.jsx)(h.a,{block:!0,type:"primary",htmlType:"submit",children:"Generate and Send"})})})]})})]})]})})})})]}),Object(N.jsx)(B,{visible:E,footer:null,onCancel:()=>{C(!1)},children:Object(N.jsx)(m.a,{align:"middle",justify:"center",children:Object(N.jsx)(h.c,{src:"https://assets10.lottiefiles.com/packages/lf20_sh5iuorb.json",style:{marginBottom:"-7em",marginTop:"-8em"},width:550,height:550})})})]})}));const B=Object(x.b)(n.a)`
	top: 25%;
	.ant-modal-content {
		border-radius: 20px !important;
	}
`}}]);
//# sourceMappingURL=12.881012e2.chunk.js.map