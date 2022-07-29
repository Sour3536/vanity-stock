/* eslint-disable no-unused-vars */
/* eslint-disable no-debugger */
import React, { useContext, useEffect, useState } from 'react';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { withRouter, useHistory } from 'react-router-dom';
import { Layout } from 'components';
import '@ant-design/compatible/assets/index.css';
import { Row, Col } from 'antd';
import { baseStyles } from 'styles/base';
import styled, { keyframes } from 'styled-components';
import coursesImage from 'assets/images/img1.jpg';
import booksImage from 'assets/images/img2.jpg';
import jobsImage from 'assets/images/img3.jpg';
import questionImage from 'assets/images/img4.jpg';
import certiImage from 'assets/images/img5.png';
import openBoardImage from 'assets/images/img6.png';
import { mobile } from 'helpers';

function Home({ i18n, language }) {
	const Start = () => {
		document.getElementById('spin-container').style.animationPlayState = 'running';
	};
	const Stop = () => {
		document.getElementById('spin-container').style.animationPlayState = 'paused';
	};
	const history = useHistory();
	useEffect(() => {
		var radius = mobile ? 220 : 370; // how big of the radius
		var imgWidth = mobile ? 180 : 300; // width of images (unit: px)
		var imgHeight = mobile ? 160 : 220; // height of images (unit: px)

		setTimeout(init, 1000);

		var odrag = document.getElementById('drag-container');
		var ospin = document.getElementById('spin-container');
		var aImg = ospin.getElementsByTagName('img');
		var aVid = ospin.getElementsByTagName('video');
		var aEle = [...aImg, ...aVid]; // combine 2 arrays

		var overlys = document.getElementsByClassName('sp');
		for (let k = 0; k < overlys.length; k++) {
			overlys[k].addEventListener(
				'mouseenter',
				() => {
					for (let l = 0; l < overlys.length; l++) {
						if (l !== k) {
							overlys[l].style.transition = '.3s ease-in-out';
							overlys[l].style.opacity = 0.3;
						} else {
							overlys[l].style.transition = '.3s ease-in-out';
							// overlys[l].style.transform += 'scale(1.1)';
						}
					}
				},
				false
			);
			overlys[k].addEventListener(
				'mouseleave',
				() => {
					// overlys[k].style.transform = overlys[k].style.transform.replace('scale(1.1)', '');
					for (let l = 0; l < overlys.length; l++) {
						overlys[l].style.transition = '.2s ease-in-out';
						overlys[l].style.opacity = 1;
					}
				},
				false
			);
		}

		// Size of images
		ospin.style.width = imgWidth + 'px';
		ospin.style.height = imgHeight + 'px';

		// Size of ground - depend on radius
		var ground = document.getElementById('ground');
		ground.style.width = radius * 3 + 'px';
		ground.style.height = radius * 3 + 'px';

		function init(delayTime) {
			if (delayTime === undefined) {
				let spans = document.getElementsByTagName('span');
				setTimeout(() => {
					for (let k = 0; k < spans.length; k++) {
						spans[k].style.opacity = 1;
					}
				}, 1500);
				console.log(document.getElementsByTagName('span').length);
			}
			if (mobile) {
				for (let i = 0; i < aEle.length; i++) {
					overlys[i].style.transform = 'rotateY(' + i * (360 / overlys.length) + 'deg) translateZ(' + radius + 'px)';
					overlys[i].style.transition = 'transform 1s';
					overlys[i].style.transitionDelay = delayTime || (overlys.length - i) / 4 + 's';
				}
			} else {
				for (let i = 0; i < aEle.length; i++) {
					overlys[i].style.transform = 'rotateY(' + i * (360 / overlys.length) + 'deg) translateZ(' + radius + 'px)';
					overlys[i].style.transition = 'transform 1s';
					overlys[i].style.transitionDelay = delayTime || (overlys.length - i) / 4 + 's';
				}
			}
		}

		function applyTranform(obj) {
			// Constrain the angle of camera (between 0 and 180)
			if (mobile) {
				tY = 0;
			} else {
				if (tY > 10) tY = 10;
				if (tY < 0) tY = 0;
			}

			// Apply the angle
			obj.style.transform = 'rotateX(' + -tY + 'deg) rotateY(' + tX + 'deg)';
		}

		function playSpin(yes) {
			ospin.style.animationPlayState = yes ? 'running' : 'paused';
		}

		var sX,
			sY,
			nX,
			nY,
			desX = 0,
			desY = 0,
			tX = 0,
			tY = 0;

		// setup events
		document.onpointerdown = function (e) {
			clearInterval(odrag.timer);
			e = e || window.event;
			var sX = e.clientX,
				sY = e.clientY;

			this.onpointermove = function (e) {
				e = e || window.event;
				var nX = e.clientX,
					nY = e.clientY;
				desX = nX - sX;
				desY = nY - sY;
				tX += desX * 0.1;
				tY += desY * 0.1;
				applyTranform(odrag);
				sX = nX;
				sY = nY;
			};

			this.onpointerup = function (e) {
				odrag.timer = setInterval(function () {
					desX *= 0.95;
					desY *= 0.95;
					tX += desX * 0.1;
					tY += desY * 0.1;
					applyTranform(odrag);
					playSpin(false);
					if (Math.abs(desX) < 0.5 && Math.abs(desY) < 0.5) {
						clearInterval(odrag.timer);
						playSpin(true);
					}
				}, 17);
				this.onpointermove = this.onpointerup = null;
			};

			return false;
		};

		document.onmousewheel = function (e) {
			e = e || window.event;
			var d = e.wheelDelta / 20 || -e.detail;
			radius += d;
			if (radius > 500) radius = 500;
			if (radius < 300) radius = 300;
			init(1);
		};
	}, []);
	return (
		<Layout breadcrumb={false} language={language}>
			<OuterDiv>
				<DragContainer id="drag-container">
					<SpinContainer id="spin-container" onMouseOver={Stop} onMouseOut={Start}>
						<InnerBox
							className="sp"
							onDoubleClick={() => {
								const win = window.open('/courses', '_blank');
								win.focus();
							}}>
							<Span>
								<img src={coursesImage} alt="" />
								<OverlayDiv />
							</Span>
							<SpanText>Search For</SpanText>
							<SpanText2>Courses</SpanText2>
						</InnerBox>
						<InnerBox
							className="sp"
							onDoubleClick={() => {
								const win = window.open('/books', '_blank');
								win.focus();
							}}>
							<Span>
								<img src={booksImage} alt="" />
								<OverlayDiv />
							</Span>
							<SpanText>Search For</SpanText>
							<SpanText2>Books</SpanText2>
						</InnerBox>
						<InnerBox
							className="sp"
							onDoubleClick={() => {
								const win = window.open('/jobs', '_blank');
								win.focus();
							}}>
							<Span>
								<img src={jobsImage} alt="" />
								<OverlayDiv />
							</Span>
							<SpanText>Search For</SpanText>
							<SpanText2>Jobs</SpanText2>
						</InnerBox>
						<InnerBox
							className="sp"
							onDoubleClick={() => {
								const win = window.open('/questions', '_blank');
								win.focus();
							}}>
							<Span>
								<img src={questionImage} alt="" />
								<OverlayDiv />
							</Span>
							<SpanText style={{ padding: '6px 10px' }}>Search For</SpanText>
							<SpanText2>Questions</SpanText2>
						</InnerBox>
						<InnerBox
							className="sp"
							onDoubleClick={() => {
								const win = window.open('/certificates', '_blank');
								win.focus();
							}}>
							<Span>
								<img src={certiImage} alt="" />
								<OverlayDiv />
							</Span>
							<SpanText>Wanna Generate</SpanText>
							<SpanText2>Certificates</SpanText2>
						</InnerBox>
						<InnerBox
							className="sp"
							onDoubleClick={() => {
								const win = window.open('/openboard', '_blank');
								win.focus();
							}}>
							<Span>
								<img src={openBoardImage} alt="" />
								<OverlayDiv />
							</Span>
							<SpanText>Wanna Make</SpanText>
							<SpanText2 style={{ right: '40px' }}>Notes</SpanText2>
						</InnerBox>
						<p></p>
					</SpinContainer>

					<Ground id="ground">LET ME HELP</Ground>
				</DragContainer>
			</OuterDiv>
		</Layout>
	);
}

// prettier-ignore
export default (withRouter(Home))

/*
███████╗████████╗██╗   ██╗██╗     ███████╗███████╗
██╔════╝╚══██╔══╝╚██╗ ██╔╝██║     ██╔════╝██╔════╝
███████╗   ██║    ╚████╔╝ ██║     █████╗  ███████╗
╚════██║   ██║     ╚██╔╝  ██║     ██╔══╝  ╚════██║
███████║   ██║      ██║   ███████╗███████╗███████║
╚══════╝   ╚═╝      ╚═╝   ╚══════╝╚══════╝╚══════╝
*/

const OuterDiv = styled.div`
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
`;
const spin = keyframes`
    from{
		-webkit-transform: rotateY(0deg);
				transform: rotateY(0deg);
	} to{
		-webkit-transform: rotateY(360deg);
				transform: rotateY(360deg);
	}
`;
const SpinContainer = styled.div`
	position: relative;
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-transform-style: preserve-3d;
	transform-style: preserve-3d;
	${'' /* animation: ${spin} 50s infinite linear; */}
`;
const DragContainer = styled(SpinContainer)`
	animation: none;
	img {
		-webkit-transform-style: preserve-3d;
		${'' /* object-fit: cover; */}
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
`;
const Ground = styled.div`
	width: 900px;
	height: 900px;
	position: absolute;
	top: 100%;
	left: 50%;
	-webkit-transform: translate(-50%, -50%) rotateX(90deg);
	transform: translate(-50%, -50%) rotateX(90deg);
	background: -webkit-radial-gradient(center center, farthest-side, #91d57f, transparent);
`;
const OverlayDiv = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-image: linear-gradient(to right bottom, #4dbf3b, #20b057);
	opacity: 0.4;
	border-radius: 15px;
	z-index: 0;
`;
const Span = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	-webkit-transform-style: preserve-3d;
	transform-style: preserve-3d;
`;
const InnerBox = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	-webkit-transform-style: preserve-3d;
	transform-style: preserve-3d;
	-webkit-box-reflect: below 10px linear-gradient(transparent, transparent, #0005);
	cursor: pointer;
`;
const SpanText = styled.span`
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
`;
const SpanText2 = styled(SpanText)`
	top: 16px;
	right: 30px;
`;
