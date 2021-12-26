import React, { useEffect, useState } from 'react';
// import { Form } from '@ant-design/compatible';
import '@ant-design/compatible/assets/index.css';
import { Row, Col, Form, Input, message, BackTop, Upload } from 'antd';
import { InboxOutlined, UploadOutlined } from '@ant-design/icons';
// import excelToJson as xltj from 'convert-excel-to-json';
// import { withRouter, Link, useHistory, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { Section, Heading, Button, Card, Layout } from 'components';
import { media, mobile, tablet, screenLG } from 'helpers';
import certiImage from 'assets/images/for-certi.svg';
import certiSampleImage from 'assets/images/for-certi-sample.PNG';
import fs from 'browserfs';

const excelToJson = require('convert-excel-to-json');

const BackgroundImage = styled.div`
	background-image: ${`url(${certiImage})`};
	background-size: 18em;
	background-repeat: no-repeat;
	background-position: 50% 100%;
	position: relative;
	height: 420px;
	img {
		position: absolute;
		left: 30px;
		top: 20px;
		cursor: pointer;
	}
	@media only screen and (min-width: 1024px) and (max-height: 1366px) and (-webkit-min-device-pixel-ratio: 1.5) {
		background-size: 30em;
		height: calc(40vh - 180px);
	}
	${media.tablet`
		background-size: 22em;
		height: calc(40vh - 100px);
	`}
`;

const BackgroundImage2 = styled(BackgroundImage)`
	background-image: ${`url(${certiSampleImage})`};
	background-position: 50% 50%;
	background-size: 35em;
`;

const StyledCard = styled(Card)`
	.ant-card-body {
		padding: 10px;
	}
	${media.mobile`
		.ant-card-body{
			padding: 10px;
		}
	`}
`;

const StyledSection = styled(Section)`
	${media.tablet`
        padding: 10px 15px;
    `}
	${media.mobile`
        padding: 10px;
    `}
`;

const StyledRow = styled(Row)`
	background-color: #fff;
	padding: 2.5rem 8rem 1.5rem 8rem;
	@media only screen and (min-width: 1024px) and (max-height: 1366px) and (-webkit-min-device-pixel-ratio: 1.5) {
		padding: 0 12rem;
	}
	${media.tablet`
		padding: 0 7rem;
	`}
	${media.mobile`
		padding: 5em 2em 3em 2em;
        height: fit-content;
	`}
	@media (max-width: 321px) {
		padding: 5em 1.5em 3em 1.5em;
	}
`;

const props2 = {
	beforeUpload: (file) => {
		if (file.type !== 'image/png') {
			message.error(`${file.name} is not a png file`);
		}
		return file.type === 'image/png' ? true : Upload.LIST_IGNORE;
	},
	onChange: (info) => {
		console.log(info.fileList);
	}
};

function Certificates({ i18n, country }) {
	const [file, setFile] = useState();
	useEffect(() => {
		if (file) {
			// fs.writeFileSync('a.xlsx', file);
			// const resultObj = excelToJson({
			// 	//TODO
			// 	sourceFile: file,
			// 	columnToKey: {
			// 		A: 'name',
			// 		B: 'email'
			// 	}
			// });
			console.log(file);
		}
	}, [file]);
	const onFinish = async (values) => {};
	const props = {
		name: 'file',
		multiple: true,
		action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
		beforeUpload: (file: any) => {
			setFile(file);
			return false;
		},
		onChange(info) {
			const { status } = info.file;
			if (status !== 'uploading') {
				console.log(info.file, info.fileList);
			}
			if (status === 'done') {
				message.success(`${info.file.name} file uploaded successfully.`);
			} else if (status === 'error') {
				message.error(`${info.file.name} file upload failed.`);
			}
		},
		onDrop(e) {
			console.log('Dropped files', e.dataTransfer.files);
		}
	};
	return (
		<>
			<Layout breadcrumb={false}>
				<BackTop />
				<StyledRow align="middle">
					<Col span={24}>
						<StyledCard autoheight="true" nohover="true" style={{ marginBottom: '0' }}>
							<Row>
								{!mobile && (
									<Col
										xl={12}
										lg={24}
										md={24}
										className={screenLG || tablet ? '' : 'border-right'}
										style={{ borderBottom: (tablet || screenLG) && '1px solid #ddd' }}>
										<BackgroundImage>
											<StyledSection style={{ marginTop: screenLG || tablet ? '1.5em' : '0em', marginBottom: 0 }}>
												<Heading
													title_color="#4dbf3b"
													content="Generate Certificates"
													subheader="Easily generate certificates and send them just by adding the details and performing a click operation."
													style={{ marginBottom: '.5em' }}
												/>
											</StyledSection>
										</BackgroundImage>
										<BackgroundImage2></BackgroundImage2>
									</Col>
								)}
								<Col xl={12} lg={24} md={24} xs={24}>
									<StyledSection style={{ marginTop: screenLG || tablet ? '1.5em' : '0em', marginBottom: 0 }}>
										<Upload.Dragger {...props}>
											<p className="ant-upload-drag-icon">
												<InboxOutlined />
											</p>
											<p className="ant-upload-text">Click or drag file to this area to upload</p>
											<p className="ant-upload-hint">
												Upload an excel file with just two fields
												<br />
												First as name and second as Email
											</p>
										</Upload.Dragger>
									</StyledSection>
									<StyledSection marginBottom={0}>
										<Form layout="vertical" onFinish={onFinish}>
											<Form.Item name="appreciation_text" label="Appreciation text">
												<Input.TextArea rows={4} placeholder="Enter Appreciation text" />
											</Form.Item>
											<Heading
												title_color="#4dbf3b"
												content="Enter details about authority"
												subheader="Enter details of two of the persons from the issueing authority for certificate."
												style={{ marginBottom: '1em' }}
											/>
											<Row gutter={16}>
												<Col md={12} xs={24}>
													<Form.Item name="first_name" label="First Person's Name">
														<Input name="first_name" placeholder="Enter Name..." required />
													</Form.Item>
												</Col>
												<Col md={12} xs={24}>
													<Form.Item name="second_name" label="Second Persons's Name">
														<Input name="second_name" placeholder="Enter Name..." required />
													</Form.Item>
												</Col>
											</Row>
											<Row gutter={16}>
												<Col md={12} xs={24}>
													<Form.Item name="first_designation" label="First Person's Designation">
														<Input name="first_designation" placeholder="Enter Designation..." required />
													</Form.Item>
												</Col>
												<Col md={12} xs={24}>
													<Form.Item name="second_designation" label="Second Persons's Designation">
														<Input name="second_designation" placeholder="Enter Designation..." required />
													</Form.Item>
												</Col>
											</Row>
											<Row gutter={16}>
												<Col md={12} xs={24}>
													<Form.Item name="first_signature" label="First Person's Signature">
														<Upload {...props2}>
															<Button type="dashed" icon={<UploadOutlined />}>
																Upload Signature
															</Button>
														</Upload>
													</Form.Item>
												</Col>
												<Col md={12} xs={24}>
													<Form.Item name="second_signature" label="Second Persons's Signature">
														<Upload {...props2}>
															<Button type="dashed" icon={<UploadOutlined />}>
																Upload Signature
															</Button>
														</Upload>
													</Form.Item>
												</Col>
											</Row>
											<Row gutter={24} justify="center">
												<Col md={18} xs={24} style={{ marginTop: '.5em', marginBottom: mobile && '1em' }}>
													<Button block type="primary">
														Generate and Send
													</Button>
												</Col>
											</Row>
										</Form>
									</StyledSection>
								</Col>
							</Row>
						</StyledCard>
					</Col>
				</StyledRow>
			</Layout>
		</>
	);
}
export default Certificates;
