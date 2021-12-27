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
			height: 250px;
			max-height: 250px;
			img {
				height: 100%;
				object-fit: cover;
				border-radius: 10px 10px 0 0;
			}
		}
	}
`;

export default function CourseCard({ height = '430px', boxShadow, ...props }) {
	let srcImg;
	if (props.data.img) {
		srcImg = props.data.img;
		if (srcImg.indexOf('.jpg') !== -1) {
			srcImg = srcImg.substring(0, srcImg.indexOf('.jpg') + 4);
		} else if (srcImg.indexOf('.png') !== -1) {
			srcImg = srcImg.substring(0, srcImg.indexOf('.png') + 4);
		} else if (srcImg.indexOf('.jpeg') !== -1) {
			srcImg = srcImg.substring(0, srcImg.indexOf('.jpeg') + 5);
		}
	} else {
		srcImg = coursesImage;
	}
	return (
		<StyledCard height={height} boxShadow={boxShadow} src={srcImg} className="ta-center">
			<Typography.Paragraph
				ellipsis={{
					rows: 2
				}}
				style={{ fontWeight: '600', fontSize: '22px', padding: '0 20px 0 10px', marginBottom: '0.2em', lineHeight: '1.2', height: '55px' }}>
				{props.data.title}
			</Typography.Paragraph>
			<Typography.Text style={{ fontSize: '18px', padding: '0 10px', marginBottom: '3px' }} type="secondary" ellipsis={true}>
				{props.data.partnerName}
			</Typography.Text>
			<br />
			{props.data.difficulty ? (
				<Typography.Text style={{ fontSize: '18px' }}>
					Difficulty :{' '}
					<StyledTag
						style={{
							background:
								props.data.difficulty == 'Beginner'
									? 'limegreen'
									: props.data.difficulty == 'mixed'
									? 'yellow'
									: props.data.difficulty == 'Intermediate'
									? 'blue'
									: 'red'
						}}>
						{props.data.difficulty}
					</StyledTag>
				</Typography.Text>
			) : (
				''
			)}
		</StyledCard>
	);
}

//beginner mixed intermediate advanced
const StyledTag = styled(Tag)`
	font-size: 17px !important;
	padding: 4px 12px 8px 12px !important;
	border-radius: 16px !important;
	color: #fff !important;
`;
