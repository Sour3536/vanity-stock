import React, { useEffect, useState } from 'react';
import '@ant-design/compatible/assets/index.css';
import { Row, Col, Form, Input, message, BackTop, Upload, Typography } from 'antd';
import { InboxOutlined, UploadOutlined } from '@ant-design/icons';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { Section, Heading, Button, Card, Layout } from 'components';
import { media, mobile, tablet, screenLG } from 'helpers';
import certiImage from 'assets/images/for-certi.svg';
import certiSampleImage from 'assets/images/for-certi-sample.PNG';
import axios from 'axios';

const BackgroundImage = styled.div`
	background-image: ${`url(${certiImage})`};
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

function Certificates({ i18n, country }) {
	const [xlfile, setXlFile] = useState();
	const [sign1File, setSign1File] = useState();
	const [sign2File, setSign2File] = useState();
	const key = 'updatable';
	const onFinish = (values) => {
		if (!xlfile || !sign1File || !sign2File) {
			message.warning('Some file uploads still left!');
		} else {
			message.loading({ content: 'Generating Certies...', key });
			const formData = new FormData();
			formData.append('excelFile', xlfile);
			formData.append('sign1', sign1File);
			formData.append('sign2', sign2File);
			formData.append('desig1', values.desig1);
			formData.append('desig2', values.desig2);
			formData.append('org1Name', values.org1Name);
			formData.append('org2Name', values.org2Name);
			formData.append('appText', values.appText);
			axios.post('https://generate-mail-certis.herokuapp.com/certi-data', formData).then((res) => {
				message.success({ content: 'Certies Sent Successfully..', key, duration: 2 });
			});
		}
	};
	const props = {
		name: 'file',
		multiple: false,
		action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
		beforeUpload: (file: any) => {
			if (file.name.indexOf('.xlsx') === -1) {
				message.error(`${file.name} is not a png file`);
			} else {
				setXlFile(file);
			}
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
	const props2 = {
		multiple: false,
		beforeUpload: (file: any) => {
			if (file.type !== 'image/png') {
				message.error(`${file.name} is not a png file`);
			} else {
				setSign1File(file);
			}
			return false;
		},
		onChange: (info) => {
			console.log(info.fileList);
		}
	};
	const props3 = {
		multiple: false,
		beforeUpload: (file: any) => {
			if (file.type !== 'image/png') {
				message.error(`${file.name} is not a png file`);
			} else {
				setSign2File(file);
			}
			return false;
		},
		onChange: (info) => {
			console.log(info.fileList);
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
											<Form.Item name="appText" label="Appreciation text">
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
													<Form.Item name="org1Name" label="First Person's Name">
														<Input name="first_name" placeholder="Enter Name..." required />
													</Form.Item>
												</Col>
												<Col md={12} xs={24}>
													<Form.Item name="org2Name" label="Second Persons's Name">
														<Input name="second_name" placeholder="Enter Name..." required />
													</Form.Item>
												</Col>
											</Row>
											<Row gutter={16}>
												<Col md={12} xs={24}>
													<Form.Item name="desig1" label="First Person's Designation">
														<Input name="first_designation" placeholder="Enter Designation..." required />
													</Form.Item>
												</Col>
												<Col md={12} xs={24}>
													<Form.Item name="desig2" label="Second Persons's Designation">
														<Input name="second_designation" placeholder="Enter Designation..." required />
													</Form.Item>
												</Col>
											</Row>
											<Row gutter={16}>
												<Col md={12} xs={24}>
													<Typography.Text style={{ display: 'block', paddingBottom: '8px' }}>First Person's Signature</Typography.Text>
													<Upload {...props2}>
														<Button type="dashed" icon={<UploadOutlined />}>
															Upload Signature
														</Button>
													</Upload>
												</Col>
												<Col md={12} xs={24}>
													<Typography.Text style={{ display: 'block', paddingBottom: '8px' }}>Second Person's Signature</Typography.Text>
													<Upload {...props3}>
														<Button type="dashed" icon={<UploadOutlined />}>
															Upload Signature
														</Button>
													</Upload>
												</Col>
											</Row>
											<Row gutter={24} justify="center">
												<Col md={18} xs={24} style={{ marginTop: '2em', marginBottom: mobile && '1em' }}>
													<Button block type="primary" htmlType="submit">
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

export default withRouter(Certificates);
