(this["webpackJsonpvanity-stock"]=this["webpackJsonpvanity-stock"]||[]).push([[7],{423:function(e,t,a){"use strict";t.a=a.p+"static/media/img1.6ef76f5d.jpg"},482:function(e,t,a){},496:function(e,t,a){"use strict";a.r(t);a(236);var n=a(53),r=(a(187),a(83)),o=(a(186),a(78)),i=(a(188),a(191)),c=(a(237),a(189)),l=a(0),s=a.n(l),u=a(226),d=a(30),p=a(185),f=(a(116),a(47)),h=a(22),b=(a(33),a(482),a(190),a(2)),g=a(3),m={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z"}}]},name:"star",theme:"filled"},v=a(11),E=function(e,t){return l.createElement(v.a,Object(g.a)(Object(g.a)({},e),{},{ref:t,icon:m}))};var O=l.forwardRef(E),x=a(1),j=a(23),y=a(24),S=a(27),N=a(35),C=a(7),w=a(16),T=a.n(w);function M(e){return e instanceof HTMLElement||e instanceof SVGElement}function R(e){var t,a=function(e){return e&&"object"===Object(C.a)(e)&&M(e.nativeElement)?e.nativeElement:M(e)?e:null}(e);return a||(e instanceof s.a.Component?null===(t=T.a.findDOMNode)||void 0===t?void 0:t.call(T.a,e):null)}var I=a(5),_=a.n(I),k={MAC_ENTER:3,BACKSPACE:8,TAB:9,NUM_CENTER:12,ENTER:13,SHIFT:16,CTRL:17,ALT:18,PAUSE:19,CAPS_LOCK:20,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,PRINT_SCREEN:44,INSERT:45,DELETE:46,ZERO:48,ONE:49,TWO:50,THREE:51,FOUR:52,FIVE:53,SIX:54,SEVEN:55,EIGHT:56,NINE:57,QUESTION_MARK:63,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,META:91,WIN_KEY_RIGHT:92,CONTEXT_MENU:93,NUM_ZERO:96,NUM_ONE:97,NUM_TWO:98,NUM_THREE:99,NUM_FOUR:100,NUM_FIVE:101,NUM_SIX:102,NUM_SEVEN:103,NUM_EIGHT:104,NUM_NINE:105,NUM_MULTIPLY:106,NUM_PLUS:107,NUM_MINUS:109,NUM_PERIOD:110,NUM_DIVISION:111,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,NUMLOCK:144,SEMICOLON:186,DASH:189,EQUALS:187,COMMA:188,PERIOD:190,SLASH:191,APOSTROPHE:192,SINGLE_QUOTE:222,OPEN_SQUARE_BRACKET:219,BACKSLASH:220,CLOSE_SQUARE_BRACKET:221,WIN_KEY:224,MAC_FF_META:224,WIN_IME:229,isTextModifyingKeyEvent:function(e){var t=e.keyCode;if(e.altKey&&!e.ctrlKey||e.metaKey||t>=k.F1&&t<=k.F12)return!1;switch(t){case k.ALT:case k.CAPS_LOCK:case k.CONTEXT_MENU:case k.CTRL:case k.DOWN:case k.END:case k.ESC:case k.HOME:case k.INSERT:case k.LEFT:case k.MAC_FF_META:case k.META:case k.NUMLOCK:case k.NUM_CENTER:case k.PAGE_DOWN:case k.PAGE_UP:case k.PAUSE:case k.PRINT_SCREEN:case k.RIGHT:case k.SHIFT:case k.UP:case k.WIN_KEY:case k.WIN_KEY_RIGHT:return!1;default:return!0}},isCharacterKey:function(e){if(e>=k.ZERO&&e<=k.NINE)return!0;if(e>=k.NUM_ZERO&&e<=k.NUM_MULTIPLY)return!0;if(e>=k.A&&e<=k.Z)return!0;if(-1!==window.navigator.userAgent.indexOf("WebKit")&&0===e)return!0;switch(e){case k.SPACE:case k.QUESTION_MARK:case k.NUM_PLUS:case k.NUM_MINUS:case k.NUM_PERIOD:case k.NUM_DIVISION:case k.SEMICOLON:case k.DASH:case k.EQUALS:case k.COMMA:case k.PERIOD:case k.SLASH:case k.APOSTROPHE:case k.SINGLE_QUOTE:case k.OPEN_SQUARE_BRACKET:case k.BACKSLASH:case k.CLOSE_SQUARE_BRACKET:return!0;default:return!1}}},A=k;var U=function(e){Object(S.a)(a,e);var t=Object(N.a)(a);function a(){var e;Object(j.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).onHover=function(t){var a=e.props;(0,a.onHover)(t,a.index)},e.onClick=function(t){var a=e.props;(0,a.onClick)(t,a.index)},e.onKeyDown=function(t){var a=e.props,n=a.onClick,r=a.index;13===t.keyCode&&n(t,r)},e}return Object(y.a)(a,[{key:"getClassName",value:function(){var e=this.props,t=e.prefixCls,a=e.index,n=e.value,r=e.allowHalf,o=e.focused,i=a+1,c=t;return 0===n&&0===a&&o?c+=" ".concat(t,"-focused"):r&&n+.5>=i&&n<i?(c+=" ".concat(t,"-half ").concat(t,"-active"),o&&(c+=" ".concat(t,"-focused"))):(c+=" ".concat(t,i<=n?"-full":"-zero"),i===n&&o&&(c+=" ".concat(t,"-focused"))),c}},{key:"render",value:function(){var e=this.onHover,t=this.onClick,a=this.onKeyDown,n=this.props,r=n.disabled,o=n.prefixCls,i=n.character,c=n.characterRender,l=n.index,u=n.count,d=n.value,p="function"===typeof i?i(this.props):i,f=s.a.createElement("li",{className:this.getClassName()},s.a.createElement("div",{onClick:r?null:t,onKeyDown:r?null:a,onMouseMove:r?null:e,role:"radio","aria-checked":d>l?"true":"false","aria-posinset":l+1,"aria-setsize":u,tabIndex:r?-1:0},s.a.createElement("div",{className:"".concat(o,"-first")},p),s.a.createElement("div",{className:"".concat(o,"-second")},p)));return c&&(f=c(f,this.props)),f}}]),a}(s.a.Component);function L(){}var P=function(e){Object(S.a)(a,e);var t=Object(N.a)(a);function a(e){var n;Object(j.a)(this,a),(n=t.call(this,e)).stars=void 0,n.rate=void 0,n.onHover=function(e,t){var a=n.props.onHoverChange,r=n.getStarValue(t,e.pageX);r!==n.state.cleanedValue&&n.setState({hoverValue:r,cleanedValue:null}),a(r)},n.onMouseLeave=function(){var e=n.props.onHoverChange;n.setState({hoverValue:void 0,cleanedValue:null}),e(void 0)},n.onClick=function(e,t){var a=n.props.allowClear,r=n.state.value,o=n.getStarValue(t,e.pageX),i=!1;a&&(i=o===r),n.onMouseLeave(),n.changeValue(i?0:o),n.setState({cleanedValue:i?o:null})},n.onFocus=function(){var e=n.props.onFocus;n.setState({focused:!0}),e&&e()},n.onBlur=function(){var e=n.props.onBlur;n.setState({focused:!1}),e&&e()},n.onKeyDown=function(e){var t=e.keyCode,a=n.props,r=a.count,o=a.allowHalf,i=a.onKeyDown,c="rtl"===a.direction,l=n.state.value;t===A.RIGHT&&l<r&&!c?(l+=o?.5:1,n.changeValue(l),e.preventDefault()):t===A.LEFT&&l>0&&!c||t===A.RIGHT&&l>0&&c?(l-=o?.5:1,n.changeValue(l),e.preventDefault()):t===A.LEFT&&l<r&&c&&(l+=o?.5:1,n.changeValue(l),e.preventDefault()),i&&i(e)},n.saveRef=function(e){return function(t){n.stars[e]=t}},n.saveRate=function(e){n.rate=e};var r=e.value;return void 0===r&&(r=e.defaultValue),n.stars={},n.state={value:r,focused:!1,cleanedValue:null},n}return Object(y.a)(a,[{key:"componentDidMount",value:function(){var e=this.props,t=e.autoFocus,a=e.disabled;t&&!a&&this.focus()}},{key:"getStarDOM",value:function(e){return R(this.stars[e])}},{key:"getStarValue",value:function(e,t){var a=this.props,n=a.allowHalf,r="rtl"===a.direction,o=e+1;if(n){var i=this.getStarDOM(e),c=function(e){var t=function(e){var t,a,n=e.ownerDocument,r=n.body,o=n&&n.documentElement,i=e.getBoundingClientRect();return t=i.left,a=i.top,{left:t-=o.clientLeft||r.clientLeft||0,top:a-=o.clientTop||r.clientTop||0}}(e),a=e.ownerDocument,n=a.defaultView||a.parentWindow;return t.left+=function(e){var t=e.pageXOffset,a="scrollLeft";if("number"!==typeof t){var n=e.document;"number"!==typeof(t=n.documentElement[a])&&(t=n.body[a])}return t}(n),t.left}(i),l=i.clientWidth;(r&&t-c>l/2||!r&&t-c<l/2)&&(o-=.5)}return o}},{key:"focus",value:function(){this.props.disabled||this.rate.focus()}},{key:"blur",value:function(){this.props.disabled||this.rate.blur()}},{key:"changeValue",value:function(e){var t=this.props.onChange;"value"in this.props||this.setState({value:e}),t(e)}},{key:"render",value:function(){for(var e=this.props,t=e.count,a=e.allowHalf,n=e.style,r=e.id,o=e.prefixCls,i=e.disabled,c=e.className,l=e.character,u=e.characterRender,d=e.tabIndex,p=e.direction,f=this.state,h=f.value,b=f.hoverValue,g=f.focused,m=[],v=i?"".concat(o,"-disabled"):"",E=0;E<t;E+=1)m.push(s.a.createElement(U,{ref:this.saveRef(E),index:E,count:t,disabled:i,prefixCls:"".concat(o,"-star"),allowHalf:a,value:void 0===b?h:b,onClick:this.onClick,onHover:this.onHover,key:E,character:l,characterRender:u,focused:g}));var O=_()(o,v,c,Object(x.a)({},"".concat(o,"-rtl"),"rtl"===p));return s.a.createElement("ul",{className:O,style:n,id:r,onMouseLeave:i?null:this.onMouseLeave,tabIndex:i?-1:d,onFocus:i?null:this.onFocus,onBlur:i?null:this.onBlur,onKeyDown:i?null:this.onKeyDown,ref:this.saveRate,role:"radiogroup"},m)}}],[{key:"getDerivedStateFromProps",value:function(e,t){return"value"in e&&void 0!==e.value?Object(g.a)(Object(g.a)({},t),{},{value:e.value}):t}}]),a}(s.a.Component);P.defaultProps={defaultValue:0,count:5,allowHalf:!1,allowClear:!0,style:{},prefixCls:"rc-rate",onChange:L,character:"\u2605",onHoverChange:L,tabIndex:0,direction:"ltr"};var H=P,F=a(65),D=a(84),K=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a};var V=l.forwardRef((function(e,t){var a=e.prefixCls,n=e.tooltips,r=e.character,o=void 0===r?l.createElement(O,null):r,i=K(e,["prefixCls","tooltips","character"]),c=l.useContext(F.b),s=c.getPrefixCls,u=c.direction,d=s("rate",a);return l.createElement(H,Object(b.a)({ref:t,character:o,characterRender:function(e,t){var a=t.index;return n?l.createElement(D.a,{title:n[a]},e):e}},i,{prefixCls:d,direction:u}))})),z=a(17),$=(a(423),a(6));const B=Object(h.b)(p.b)`
	&& {
		width: 100%;
		margin-right: 1em;
		box-shadow: ${e=>{let{boxShadow:t}=e;return t||"0 12px 20px 0 rgba(0, 0, 0, 0.1), 0 17px 10px 0 rgba(0, 0, 0, 0.1)"}};
		cursor: pointer;
		.ant-card-body {
			padding: 0;
			padding-top: 1em;

			${z.a.mobile`
				> .ant-typography {
                    font-size: 12px;
					max-width: 120px;
				}
			`}
		}
		.ant-card-cover {
			max-height: 260px;
			height: 260px;
			img {
				height: 100%;
				object-fit: cover;
				border-radius: 10px 10px 0 0;
			}
		}
	}
`;function G(e){var t;let{height:a="430px",boxShadow:r,...o}=e;return Object($.jsxs)(B,{height:a,boxShadow:r,src:o.data.volumeInfo.imageLinks.thumbnail,className:"ta-center",children:[Object($.jsx)(n.a.Paragraph,{ellipsis:{rows:2},style:{fontWeight:"600",fontSize:"20px",padding:"0 20px 0 10px",marginBottom:"0.2em",lineHeight:"1.2"},children:o.data.volumeInfo.title}),Object($.jsx)(n.a.Text,{style:{fontSize:"16px"},type:"secondary",ellipsis:!0,children:null===(t=o.data.volumeInfo.authors)||void 0===t?void 0:t.toString()}),Object($.jsx)("br",{}),o.data.volumeInfo.averageRating?Object($.jsxs)($.Fragment,{children:[Object($.jsx)(V,{allowHalf:!0,defaultValue:o.data.volumeInfo.averageRating}),Object($.jsxs)(n.a.Text,{style:{fontSize:"14px",padding:"0 0 0 10px"},secondary:!0,children:["(",o.data.volumeInfo.ratingsCount,")"]})]}):Object($.jsx)(n.a.Text,{style:{fontSize:"14px"},strong:!0,children:"No Ratings Yet"})]})}var W=a.p+"static/media/for-books.b58e01a4.svg";t.default=Object(d.g)((function(e){let{history:t,i18n:a,language:n}=e;const[s,u]=Object(l.useState)(""),[d,f]=Object(l.useState)([]),[h,b]=Object(l.useState)(!0);return Object(l.useEffect)((()=>{fetch("https://www.googleapis.com/books/v1/volumes?q=Atul+Kahate&filter=partial&maxResults=30&key=AIzaSyCmunOqeEpzpjdCqtsDLCznm3puwDP8Sp4").then((e=>e.json())).then((e=>{f(e.items),b(!1)}))}),[]),Object($.jsxs)(p.e,{breadcrumb:!1,language:n,children:[Object($.jsx)(c.a,{}),Object($.jsx)(p.g,{className:(z.b,"pos-rel pt2em"),children:Object($.jsx)(Z,{children:Object($.jsx)(Q,{align:"middle",pl:"4rem",pr:"4rem",style:{marginTop:z.b?"0":"2em"},children:Object($.jsxs)(o.a,{xl:11,lg:14,md:15,xs:24,offset:10,children:[Object($.jsx)(Y,{level:2,content:Object($.jsx)(q,{children:Object($.jsx)("span",{className:"primary",children:"Search For Books"})}),subheader:Object($.jsx)("p",{children:"Take out the best of yourself and sharpen your skills by the help of great books!"}),style:{marginBottom:"2em"}}),Object($.jsx)(r.a,{justify:z.b?"center":"left",gutter:[0,16],style:{marginTop:z.b?"8em":"0"},children:Object($.jsxs)(o.a,{md:20,xs:20,children:[Object($.jsx)(i.a,{placeholder:"Search....",size:"large",autoFocus:!0,defaultValue:"Atul Kahate",suffix:J,onChange:e=>{u(e.target.value)},style:{borderRadius:"25px",fontSize:"20px",height:"50px",paddingLeft:"35px",paddingRight:"25px",width:"72%"}}),Object($.jsx)(p.a,{style:{padding:"0 30px",fontSize:"20px",borderRadius:"8px",marginLeft:"15px"},size:"large",type:"primary",onClick:()=>{b(!0),fetch(`https://www.googleapis.com/books/v1/volumes?q=${s}&filter=partial&maxResults=30&key=AIzaSyCmunOqeEpzpjdCqtsDLCznm3puwDP8Sp4`).then((e=>e.json())).then((e=>{f(e.items),b(!1)})),console.log(s)},children:"Search"})]})})]})})})}),Object($.jsx)("hr",{}),h?Object($.jsx)(p.f,{}):Object($.jsx)(r.a,{gutter:[24,16],style:{paddingLeft:"3rem",paddingRight:"3rem",marginTop:"3em"},children:d.map(((e,t)=>Object($.jsx)(o.a,{span:4,children:Object($.jsx)("a",{href:e.volumeInfo.previewLink,target:"_blank",rel:"noreferrer",children:Object($.jsx)(G,{data:e,height:"400px"})})},t)))})]})}));const Q=Object(h.b)(r.a).attrs((()=>({type:"flex"})))`
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
			border: 2px solid ${f.a.lightGrey.two};
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
	${z.a.tablet`
        padding-left: 4em;
        padding-right: 4em;
    `}
	${z.a.mobile`
        padding-left: 1.5em;
        padding-right: 1.5em;
    `}
	@media (max-width: 321px) {
		padding-left: 0.5em;
		padding-right: 0.5em;
	}
`,X=Object(h.b)(p.d)`
	&& {
		margin-bottom: 2em;
		h2 {
			font-weight: bold;
			line-height: 1.2;
		}
	}
`,Y=Object(h.b)(X)`
	&& {
		h2 {
			p {
				margin-bottom: 0;
			}
			.primary {
				color: ${f.a.primaryColor};
			}
		}
		.ant-typography:not(h2) {
			font-size: 1.3em;
		}
	}
	${z.a.mobile`
        text-align: center;
		.ant-typography.subheader {
			font-size: 1em !important;
		}
		h3.ant-typography {
			font-size: 1.3em !important;
		}
    `}
`,q=Object(h.b)(n.a.Paragraph)`
	&& {
		margin-bottom: 0;
		color: ${e=>{let{color:t}=e;return t||f.a.greyColor}};
	}
`,Z=h.b.div`
	background-image: ${`url(${W})`};
	background-size: 20em;
	background-repeat: no-repeat;
	background-position: 22% 0%;
	position: relative;
	height: 210px;
	width: 100%;
	${z.a.tablet`
        background-size: 16em;
		background-position: 0% 40%;
        height: 240px;
    `}
	${z.a.mobile`
		height: 275px;
		background-size: 11em;
		background-position: 50% 80%;
	`}
	@media (max-width: 321px) {
		height: 285px;
		background-position: 50% 90%;
	}
`,J=Object($.jsx)(u.a,{style:{fontSize:16,color:"#4dbf3b"}})}}]);
//# sourceMappingURL=7.d23f3c58.chunk.js.map