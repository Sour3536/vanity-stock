import React, { useState } from 'react';
import { HomeOutlined, MenuOutlined } from '@ant-design/icons';
import { Layout as PageLayout, Breadcrumb, Button, Affix } from 'antd';
import styled from 'styled-components';
import { media } from 'helpers';
import { Section } from './Section';
import Footer from './Footer';
import Navbar from './Navbar';

const Header = styled(PageLayout.Header)`
	&& {
		background-color: #fff;
		height: auto;
		padding: 0;
		${media.mobile`
            height: auto;
        `}
	}
`;

function Layout({ breadcrumb = false, customBread = '', className, ...props }) {
	const { basic = false, sidebar = false, children, footer = true } = props;

	return (
		<PageLayoutStyled style={{ background: '#d1d1d1' }} className={className || ''}>
			<Header>
				<Navbar loading={props.loading} onUnauthUser={props.unauthUser} language={props.language} />
			</Header>

			<PageLayout.Content style={{ background: '#d1d1d1' }}>
				<PageLayout style={{ background: '#d1d1d1' }}>
					<PageLayout style={{ background: '#d1d1d1' }}>
						<PageLayout.Content style={{ background: '#d1d1d1' }}>{children}</PageLayout.Content>
						{/* {(footer || sidebar) && <Footer />} */}
					</PageLayout>
				</PageLayout>
			</PageLayout.Content>
		</PageLayoutStyled>
	);
}

export default Layout;

const PageLayoutStyled = styled(PageLayout)`
	${'' /* padding-top: 76.5px; */}
	padding-top: 70px;
	.ant-layout {
		height: calc(100vh - 70px);
	}
	${media.mobile`
		padding-top:48px;
	`}
`;
