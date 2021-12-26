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
			max-height: 260px;
			height: 260px;
			img {
				height: 100%;
				object-fit: cover;
				border-radius: 10px 10px 0 0;
			}
		}
	}
`;

export default function BooksCard({ height = '430px', boxShadow, ...props }) {
	return (
		<StyledCard height={height} boxShadow={boxShadow} src={props.data.volumeInfo.imageLinks.thumbnail} className="ta-center">
			<Typography.Paragraph
				ellipsis={{
					rows: 2
				}}
				style={{ fontWeight: '600', fontSize: '20px', padding: '0 20px 0 10px', marginBottom: '0.2em', lineHeight: '1.2' }}>
				{props.data.volumeInfo.title}
			</Typography.Paragraph>
			<Typography.Text style={{ fontSize: '16px' }} type="secondary" ellipsis={true}>
				{props.data.volumeInfo.authors?.toString()}
			</Typography.Text>
			<br />
			{props.data.volumeInfo.averageRating ? (
				<>
					<Rate allowHalf defaultValue={props.data.volumeInfo.averageRating} />
					<Typography.Text style={{ fontSize: '14px', padding: '0 0 0 10px' }} secondary>
						({props.data.volumeInfo.ratingsCount})
					</Typography.Text>
				</>
			) : (
				<Typography.Text style={{ fontSize: '14px' }} strong>
					No Ratings Yet
				</Typography.Text>
			)}
		</StyledCard>
	);
}
