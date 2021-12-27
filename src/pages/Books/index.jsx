/* eslint-disable no-unused-vars */
/* eslint-disable no-debugger */
import React, { useContext, useEffect, useState } from 'react';
import { LeftOutlined, RightOutlined, SearchOutlined } from '@ant-design/icons';
import { withRouter } from 'react-router-dom';
import { Layout, Heading, Section, Button, Loading } from 'components';
import '@ant-design/compatible/assets/index.css';
import { Row, Col, BackTop, Input, Typography } from 'antd';
import { baseStyles } from 'styles/base';
import styled, { keyframes } from 'styled-components';
import BooksCard from './BooksCard';
import { mobile, media } from 'helpers';
import BooksBackground from 'assets/images/for-books.svg';

function Books({ history, i18n, language }) {
	const [bookName, setBookName] = useState('');
	const [bookData, setBookData] = useState([]);
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		fetch(
			`https://www.googleapis.com/books/v1/volumes?q=Atul+Kahate&filter=partial&maxResults=30&key=AIzaSyCmunOqeEpzpjdCqtsDLCznm3puwDP8Sp4`
		)
			.then((response) => response.json())
			.then((data) => {
				setBookData(data['items']);
				setLoading(false);
			});
	}, []);
	const showSearch = () => {
		setLoading(true);
		fetch(
			`https://www.googleapis.com/books/v1/volumes?q=${bookName}&filter=partial&maxResults=30&key=AIzaSyCmunOqeEpzpjdCqtsDLCznm3puwDP8Sp4`
		)
			.then((response) => response.json())
			.then((data) => {
				setBookData(data['items']);
				setLoading(false);
			});
		console.log(bookName);
	};
	return (
		<Layout breadcrumb={false} language={language}>
			<BackTop />
			<Section className={mobile ? 'pos-rel pt2em' : 'pos-rel pt2em'}>
				<BackgroundImage>
					<MainRow align="middle" pl={'4rem'} pr={'4rem'} style={{ marginTop: mobile ? '0' : '2em' }}>
						<Col xl={11} lg={14} md={15} xs={24} offset={10}>
							<BoldHeadPar
								level={2}
								content={
									<Paragraph>
										<span className="primary">Search For Books</span>
									</Paragraph>
								}
								subheader={<p>Take out the best of yourself and sharpen your skills by the help of great books!</p>}
								style={{ marginBottom: '2em' }}
							/>
							<Row justify={mobile ? 'center' : 'left'} gutter={[0, 16]} style={{ marginTop: mobile ? '8em' : '0' }}>
								<Col md={20} xs={20}>
									<Input
										placeholder={`Search....`}
										size="large"
										autoFocus
										defaultValue="Atul Kahate"
										suffix={suffix}
										onChange={(e) => {
											setBookName(e.target.value);
										}}
										style={{
											borderRadius: '25px',
											fontSize: '20px',
											height: '50px',
											paddingLeft: '35px',
											paddingRight: '25px',
											width: '72%'
										}}
									/>
									<Button
										style={{ padding: '0 30px', fontSize: '20px', borderRadius: '8px', marginLeft: '15px' }}
										size="large"
										type="primary"
										onClick={showSearch}>
										Search
									</Button>
								</Col>
							</Row>
						</Col>
					</MainRow>
				</BackgroundImage>
			</Section>
			<hr />
			{loading ? (
				<Loading />
			) : (
				<Row gutter={[24, 16]} style={{ paddingLeft: '3rem', paddingRight: '3rem', marginTop: '3em' }}>
					{bookData.map((dat, ind) => (
						<Col span={4} key={ind}>
							<a href={dat.volumeInfo.previewLink} target="_blank" rel="noreferrer">
								<BooksCard data={dat} height="400px" />
							</a>
						</Col>
					))}
				</Row>
			)}
		</Layout>
	);
}

// prettier-ignore
export default (withRouter(Books))

/*
███████╗████████╗██╗   ██╗██╗     ███████╗███████╗
██╔════╝╚══██╔══╝╚██╗ ██╔╝██║     ██╔════╝██╔════╝
███████╗   ██║    ╚████╔╝ ██║     █████╗  ███████╗
╚════██║   ██║     ╚██╔╝  ██║     ██╔══╝  ╚════██║
███████║   ██║      ██║   ███████╗███████╗███████║
╚══════╝   ╚═╝      ╚═╝   ╚══════╝╚══════╝╚══════╝
*/
const MainRow = styled(Row).attrs(() => ({
	type: 'flex'
}))`
	padding-left: ${({ pl }) => pl || '8rem'};
	padding-right: ${({ pr }) => pr || '8rem'};
	margin-bottom: ${({ marginbottom }) => marginbottom || '2em'};
	margin-top: ${({ margintop }) => margintop || '2em'};

	.overflowing-section {
		max-height: ${({ datalength }) => datalength > 16 && '450px'};
		overflow-y: ${({ datalength }) => datalength > 16 && 'scroll'};
		-webkit-overflow-scrolling: touch;
		&::-webkit-scrollbar-thumb {
			border-radius: 8px;
			border: 2px solid ${baseStyles.lightGrey.two};
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
	@media only screen and (min-width: 1024px) and (max-height: 1366px) and (-webkit-min-device-pixel-ratio: 1.5) {
		padding-left: 3rem;
		padding-right: 3rem;
	}
	${media.tablet`
        padding-left: 4em;
        padding-right: 4em;
    `}
	${media.mobile`
        padding-left: 1.5em;
        padding-right: 1.5em;
    `}
	@media (max-width: 321px) {
		padding-left: 0.5em;
		padding-right: 0.5em;
	}
`;
const BoldHeading = styled(Heading)`
	&& {
		margin-bottom: 2em;
		h2 {
			font-weight: bold;
			line-height: 1.2;
		}
	}
`;

const BoldHeadPar = styled(BoldHeading)`
	&& {
		h2 {
			p {
				margin-bottom: 0;
			}
			.primary {
				color: ${baseStyles.primaryColor};
			}
		}
		.ant-typography:not(h2) {
			font-size: 1.3em;
		}
	}
	${media.mobile`
        text-align: center;
		.ant-typography.subheader {
			font-size: 1em !important;
		}
		h3.ant-typography {
			font-size: 1.3em !important;
		}
    `}
`;
const Paragraph = styled(Typography.Paragraph)`
	&& {
		margin-bottom: 0;
		color: ${({ color }) => color || baseStyles.greyColor};
	}
`;
const BackgroundImage = styled.div`
	background-image: ${`url(${BooksBackground})`};
	background-size: 20em;
	background-repeat: no-repeat;
	background-position: 22% 0%;
	position: relative;
	height: 210px;
	width: 100%;
	${media.tablet`
        background-size: 16em;
		background-position: 0% 40%;
        height: 240px;
    `}
	${media.mobile`
		height: 275px;
		background-size: 11em;
		background-position: 50% 80%;
	`}
	@media only screen and (min-width: 1024px) and (max-height: 1366px) and (-webkit-min-device-pixel-ratio: 1.5) {
		background-size: 23em;
		background-position: 0% 0%;
	}
	@media (max-width: 321px) {
		height: 285px;
		background-position: 50% 90%;
	}
`;
const suffix = (
	<SearchOutlined
		style={{
			fontSize: 16,
			color: '#4dbf3b'
		}}
	/>
);
