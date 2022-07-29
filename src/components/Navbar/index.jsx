import React, { useCallback, useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import Headroom from 'react-headroom';
import { SettingFilled, PlayCircleFilled, LogoutOutlined } from '@ant-design/icons';
import { Avatar, Form, Modal, Col, Dropdown, Menu, Row, Input, Space } from 'antd';
import { Button, Heading } from 'components';
import Logo from '../Logo';
import { country } from 'App';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { tablet, media, mobile, screenLG } from 'helpers';
import { baseStyles } from 'styles/base';

const StyledLogo = styled(Logo)`
	margin-right: 5px;
	cursor: pointer;
`;

function Navbar({ i18n, isUserLoggedIn = true, forLogin, forSignUp }) {
	const history = useHistory();
	const [userData, setUserData] = useState({});
	const [user, setUser] = useState({});
	const [isPreferenceModalVisible, setIsPreferenceModalVisible] = useState(false);
	const handlePreferenceCancel = () => {
		setIsPreferenceModalVisible(false);
	};
	return (
		<StyledHeadRoom disableInlineStyles>
			<Header>
				<RowStyled type="flex" style={{ justifyContent: 'space-between', padding: mobile ? '2px 0' : '2px 2%' }}>
					<StyledCol lg={isUserLoggedIn ? 16 : 19} md={13} xs={24}>
						<Row align="middle">
							<div className="main-logo">
								<StyledLogo
									style={{ marginBottom: '0' }}
									onClick={() => history.push(`/`)}
									width={mobile ? '270px' : tablet ? '180' : '270'}
								/>
							</div>
						</Row>
					</StyledCol>
				</RowStyled>
			</Header>
		</StyledHeadRoom>
	);
}

export default Navbar;

// ███████╗████████╗██╗   ██╗██╗     ███████╗███████╗
// ██╔════╝╚══██╔══╝╚██╗ ██╔╝██║     ██╔════╝██╔════╝
// ███████╗   ██║    ╚████╔╝ ██║     █████╗  ███████╗
// ╚════██║   ██║     ╚██╔╝  ██║     ██╔══╝  ╚════██║      🐣🐣🐣🐣🐣🐣
// ███████║   ██║      ██║   ███████╗███████╗███████║
// ╚══════╝   ╚═╝      ╚═╝   ╚══════╝╚══════╝╚══════╝

const RowStyled = styled(Row)`
	flex-wrap: nowrap !important;
`;

const Header = styled.header`
	.ant-col {
		line-height: 0;
		align-self: center;
		overlayStyle
	}
	background-color: #fff;

	#google_translate_element {
		margin-right: 2em;
		display: inline-block;
		+ * {
			display: inline-block;
		}
	}
	.main-logo {
		height: auto;
		img {
			cursor: pointer;
		}
	}
`;

const UnloggedinItems = styled.div`
	text-align: right;

	${media.mobile`
        > * {
            display: block;
        }
    `}
`;
const StyledCol = styled(Col)`
	.ant-row-flex {
		align-items: center;
	}
`;

const StyledHeadRoom = styled(Headroom)`
	overflow-x: hidden;
	overflow-y: hidden;
	position: fixed;
	top: 0px;
	z-index: 1000;
	width: 100%;
	height: 70px !important;
	border-bottom: 1px solid ${baseStyles.lightGrey.one};
	box-shadow: ${baseStyles.boxShadow.main};

	@media (max-width: 575.98px) {
		.ant-row-flex {
			display: flex;
			justify-content: space-between;
			padding: 5px;
		}
	}
	.headroom {
		top: 0;
		left: 0;
		right: 0;
		z-index: 11;
		> header {
			@media (min-width: 1200px) {
				padding: 0rem 2.5rem;
			}
		}
		> header {
			@media (min-width: 768px) and (max-width: 991.98px) {
				padding: 0rem 1rem;
			}
		}

		> header {
			@media (min-width: 576px) and (max-width: 767.98px) {
				padding: 0rem 0.5rem;
			}
		}

		> header {
			@media (min-width: 992px) and (max-width: 1199.98px) {
				padding: 0rem 0rem;
			}
		}
		@media (min-width: 992px) and (max-width: 1199.98px) {
			.ant-input-search {
				width: 127px !important;
			}
		}
		@media (min-width: 768px) and (max-width: 991.98px) {
			.ant-input-search {
				width: 157px !important;
			}
		}

		@media (min-width: 576px) and (max-width: 767.98px) {
			.ant-input-search {
				width: 140px !important;
			}
		}
		.headroom--unfixed {
			position: fixed;
			transform: translateY(0);
		}
		.headroom--scrolled {
			position: fixed;
			/* transition: transform 0.3s ease; */
		}
		.headroom--unpinned {
			position: fixed;
			transform: translateY(0);
		}
		.headroom--pinned {
			position: fixed;
			transform: translateY(0%);
			> header {
				background-color: #fff;
			}
		}
	}
	${media.mobile`
		.headroom {
			> header {
				padding: 0 0.5em;
			}
		}
	`}
`;

const StyledModal = styled(Modal)`
	top: 10% !important;
	.ant-modal-header {
		border-radius: 8px !important;
		padding: 20px 30px 15px 30px !important;
	}
	.ant-modal-body {
		padding: 20px 40px 1px 40px !important;
	}
	.ant-modal-content {
		border-radius: 8px !important;
	}
	.subheader {
		font-weight: 400 !important;
	}
`;
