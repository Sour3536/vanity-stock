import React, { useState } from 'react';
import { Card, Heading, Button } from 'components';
import { Typography, Tag, Rate } from 'antd';
import { HeartOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { media, mobile } from 'helpers';
import styled from 'styled-components';
import coursesImage from 'assets/images/img1.jpg';

const StyledCard = styled(Card)`
	&& {
		width: 100%;
		margin-right: 1em;
		box-shadow: ${({ boxShadow }) => boxShadow || '0 12px 20px 0 rgba(0, 0, 0, 0.1), 0 17px 10px 0 rgba(0, 0, 0, 0.1)'};
		cursor: pointer;
		.ant-card-body {
			padding: 0;
			padding-top: 1em;

			${media.mobile`
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
`;

export default function JobCard({ height = '430px', boxShadow, ...props }) {
	return (
		<StyledCard height={height} boxShadow={boxShadow} className="ta-center">
			<Typography.Paragraph
				ellipsis={{
					rows: 2
				}}
				style={{
					fontWeight: '600',
					fontSize: '22px',
					height: '55px',
					padding: '0 20px 0 10px',
					marginBottom: '0.2em',
					lineHeight: '1.2'
				}}>
				{props.data['job-title']}
			</Typography.Paragraph>
			<Typography.Text style={{ fontSize: '16px', padding: '0 10px' }} ellipsis={true}>
				{props.data['company-name']}, {props.data['company-location']}
			</Typography.Text>
			<br />
			<Typography.Text style={{ fontSize: '16px', display: 'inline-block', margin: '5px 0 5px 0' }} type="secondary">
				Job Salary : {props.data['job-salary'] ? props.data['job-salary'] : 'Not Listed'}
			</Typography.Text>
			<br />
			<Typography.Text style={{ fontSize: '16px' }}>
				{props.data['post-date'] ? `Job posted ${props.data['post-date']}` : ''}
			</Typography.Text>
		</StyledCard>
	);
}
