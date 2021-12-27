/* eslint-disable no-unused-vars */
/* eslint-disable no-debugger */
import React, { useContext, useEffect, useState } from 'react';
import { LeftOutlined, RightOutlined, SearchOutlined } from '@ant-design/icons';
import { withRouter } from 'react-router-dom';
import { Layout, Heading, Section, Card } from 'components';
import '@ant-design/compatible/assets/index.css';
import { Row, Col, BackTop, Button, Typography, Select, List, Tag } from 'antd';
import { baseStyles } from 'styles/base';
import styled, { keyframes } from 'styled-components';
import { mobile, media } from 'helpers';
import QuestionsBackground from 'assets/images/for-questions.svg';
import { data } from './data.jsx';

let list = [];
data.forEach((dat) => {
	list.push(Object.keys(dat)[0]);
});

const StyledSelect = styled(Select)`
	font-size: 20px !important;
	width: 70%;
	.ant-select-selector {
		height: 50px !important;
		border-radius: 25px !important;
		padding: 10px 30px !important;
	}
	input {
		padding: 10px 15px !important;
		height: 50px !important;
	}
`;

function Questions({ history, i18n, language }) {
	const [company, setCompany] = useState('');
	const [questionData, setQuestionData] = useState(data[0]['Amazon']);
	const showResults = () => {
		data.forEach((dat) => {
			if (Object.keys(dat)[0] === company) {
				setQuestionData(dat[company]);
			}
		});
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
										<span className="primary">Search For Questions</span>
									</Paragraph>
								}
								subheader={<p>Search for company specific coding questions to get a feel of what they expect from you.</p>}
								style={{ marginBottom: '2em' }}
							/>
							<Row justify={mobile ? 'center' : 'left'} gutter={[0, 16]} style={{ marginTop: mobile ? '8em' : '0' }}>
								<Col md={20} xs={20}>
									<StyledSelect
										showSearch
										autoFocus
										defaultValue="Amazon"
										placeholder="Select a company"
										optionFilterProp="children"
										onChange={(e) => {
											if (e && e !== '') {
												setCompany(e);
											}
										}}
										filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}>
										{list.map((comp, index) => (
											<Select.Option key={index} value={comp}>
												{comp}
											</Select.Option>
										))}
									</StyledSelect>
									<Button
										style={{ padding: '0 30px', fontSize: '20px', borderRadius: '8px', marginLeft: '15px' }}
										size="large"
										type="primary"
										onClick={showResults}>
										Search
									</Button>
								</Col>
							</Row>
						</Col>
					</MainRow>
				</BackgroundImage>
			</Section>
			<hr />
			<MainRow align="middle" pl={'12rem'} pr={'14rem'} style={{ marginTop: '2em', paddingBottom: '3em' }}>
				<List
					className="content-list"
					style={{ width: '100%' }}
					itemLayout="horizontal"
					dataSource={questionData}
					renderItem={(item) => (
						<li>
							<a href={item.link} target="_blank" rel="noreferrer">
								<QuestionRow>
									<Typography.Text
										type="secondary"
										style={{ fontSize: mobile ? '15px' : '20px', fontWeight: '500', marginBottom: '3px', width: '100%' }}>
										{item.name}
									</Typography.Text>
									{item.tags.map((tg, ind) => (
										<StyledTag key={ind}>{tg}</StyledTag>
									))}
								</QuestionRow>
							</a>
						</li>
					)}
				/>
			</MainRow>
		</Layout>
	);
}

// prettier-ignore
export default (withRouter(Questions))

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
	background-image: ${`url(${QuestionsBackground})`};
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
const QuestionRow = styled(Row)`
	padding: 1em 2.5em;
	margin: 6px;
	border-radius: 8px;
	cursor: pointer;
	width: 100% !important;
	background: #f9f9f9 !important;
	&:hover {
		background: #e9e9e9;
		transform: scale(1.01);
	}
	${media.mobile`
        padding: 0.4em !important;
    `}
`;
const StyledTag = styled(Tag)`
	border-radius: 4px !important;
	color: #fff !important;
	background: #4dbf3b !important;
	font-size: 16px !important;
	padding: 4px 10px !important;
`;
