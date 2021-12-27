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
import gsap from 'gsap';
import $ from 'jquery';

gsap
	.timeline()
	.set('.ring', { rotationY: 180, cursor: 'grab' }) //set initial rotationY so the parallax jump happens off screen
	.set('.img', {
		// apply transform rotations to each image
		rotateY: (i) => i * -36,
		transformOrigin: '50% 50% 500px',
		z: -500,
		backfaceVisibility: 'hidden'
	})
	.from('.img', {
		duration: 1.5,
		y: 200,
		opacity: 0,
		stagger: 0.1,
		ease: 'expo'
	})
	.add(() => {
		$('.img').on('mouseenter', (e) => {
			let current = e.currentTarget;
			gsap.to('.img', { opacity: (i, t) => (t === current ? 1 : 0.3), ease: 'power3' });
		});
		$('.img').on('mouseleave', (e) => {
			gsap.to('.img', { opacity: 1, ease: 'power2.inOut' });
		});
	}, '-=0.5');

function Home({ i18n, language }) {
	const history = useHistory();
	return (
		<Layout breadcrumb={false} language={language}>
			<Div>
				<BoxDiv>
					<InnerBox
						i="1"
						className="img"
						onClick={() => {
							history.push({
								pathname: `/courses`
							});
						}}>
						<Span>
							<Image src={coursesImage} />
							<OverlayDiv></OverlayDiv>
						</Span>
						<SpanText>Search For</SpanText>
						<SpanText2>Courses</SpanText2>
					</InnerBox>
					<InnerBox
						i="2"
						className="img"
						onClick={() => {
							history.push({
								pathname: `/books`
							});
						}}>
						<Span>
							<Image src={booksImage} />
							<OverlayDiv></OverlayDiv>
						</Span>
						<SpanText>Search For</SpanText>
						<SpanText2>Books</SpanText2>
					</InnerBox>
					<InnerBox
						i="3"
						className="img"
						onClick={() => {
							history.push({
								pathname: `/jobs`
							});
						}}>
						<Span>
							<Image src={jobsImage} />
							<OverlayDiv></OverlayDiv>
						</Span>
						<SpanText>Search For</SpanText>
						<SpanText2>Jobs</SpanText2>
					</InnerBox>
					<InnerBox
						i="4"
						className="img"
						onClick={() => {
							history.push({
								pathname: `/questions`
							});
						}}>
						<Span>
							<Image src={questionImage} />
							<OverlayDiv></OverlayDiv>
						</Span>
						<SpanText style={{ padding: '6px 10px' }}>Search For</SpanText>
						<SpanText2>Questions</SpanText2>
					</InnerBox>
					<InnerBox
						i="5"
						className="img"
						onClick={() => {
							history.push({
								pathname: `/certificates`
							});
						}}>
						<Span>
							<Image src={certiImage} />
							<OverlayDiv></OverlayDiv>
						</Span>
						<SpanText>Wanna Generate</SpanText>
						<SpanText2>Certificates</SpanText2>
					</InnerBox>
					<InnerBox
						i="6"
						className="img"
						onClick={() => {
							history.push({
								pathname: `/openboard`
							});
						}}>
						<Span>
							<Image src={openBoardImage} />
							<OverlayDiv></OverlayDiv>
						</Span>
						<SpanText style={{ right: '35px' }}>Let's Try</SpanText>
						<SpanText2 style={{ right: '20px' }}>Openboard</SpanText2>
					</InnerBox>
				</BoxDiv>
			</Div>
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
const Span = styled.span`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
`;
const InnerBox = styled.div`
	--i: ${({ i }) => i || '0'};
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	border-radius: 15px;
	transform-origin: center;
	transform-style: preserve-3d;
	transform: rotateY(calc(var(--i) * 60deg)) translateZ(350px);
	transition: transform 250ms ease-in-out;
	-webkit-box-reflect: below 5px linear-gradient(transparent, transparent, #0009);
	&:hover {
		transform: rotateY(calc(var(--i) * 60deg)) translateZ(350px) scale(1.1);
		cursor: pointer;
	}
`;
const SpanText = styled.span`
	position: absolute;
	top: -15px;
	right: 20px;
	color: #fff;
	line-height: 1;
	z-index: 10;
	padding: 6px;
	box-shadow: 0 12px 15px 0 rgba(0, 0, 0, 0.3), 0 17px 50px 0 rgba(0, 0, 0, 0.3);
	${'' /* background-image: linear-gradient(to bottom right, rgba(125, 213, 111, 0.85), rgba(40, 180, 135, 0.85)); */}
	background-image: linear-gradient(to bottom right, rgba(77, 191, 59, 0.85),rgba(23, 176, 87, 0.85), rgba(23, 176, 87, 0.85));
	font-size: 1.5rem;
	text-align: right;
	text-transform: uppercase;
	font-weight: 300;
	border-radius: 8px;
`;
const SpanText2 = styled(SpanText)`
	top: 16px;
	right: 30px;
`;
const Div = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	min-height: 80vh;
`;
const OverlayDiv = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	${'' /* background-image: linear-gradient(to right bottom, #7dd56f, #28b487); */}
	background-image: linear-gradient(to right bottom, #4dbf3b, #20b057);
	opacity: 0.7;
	border-radius: 15px;
`;
const Image = styled.div`
	${'' /* z-index: 100; */}
	background-image: ${({ src }) => `url(${src})`};
	background-position: center;
	background-size: cover;
	box-shadow: ${baseStyles.boxShadow.main};
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
	object-fit: cover;
	border-radius: 15px;
`;
const animate = keyframes`
  0% {
    transform: perspective(900px) rotateY(0deg);
  }
  100% {
    transform: perspective(900px) rotateY(360deg);
  }
`;
const BoxDiv = styled.div`
	position: relative;
	width: 280px;
	height: 200px;
	transform-style: preserve-3d;
	transform: perspective(900px) rotateY(0deg);
	animation: ${animate} 20s linear infinite;
	&:hover {
		animation-play-state: paused;
	}
`;
