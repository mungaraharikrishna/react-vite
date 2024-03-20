import { DoubleLeftOutlined, DoubleRightOutlined, KeyOutlined, LogoutOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Button, Dropdown, MenuProps, Space } from "antd";
import { Header } from "antd/es/layout/layout";
import { useState } from "react";
import Breadcrumbs from "./breadcrumbs";
import { useNavigate } from "react-router-dom";
import NavService from "../services/nav.service";
import UtilsService from "../services/utils.service";

function HeaderElm({ colorBgContainer, onToggleSideNav }: any) {
    const [collapsed, setCollapsed] = useState(false);
    const navigate = useNavigate();
    const items: MenuProps['items'] = [
        {
            label: 'Profile',
            icon: <UserOutlined />,
            key: '0',
        },
        {
            label: "Change Password",
            icon: <KeyOutlined />,
            key: '1',
        },
        {
            type: 'divider',
        },
        {
            label: 'Logout',
            key: '3',
            icon: <LogoutOutlined />,
            onClick: (event: any) => {
                console.log(event);
                UtilsService.removeFromCookie();
                navigate(NavService.routePaths.login);
            }
        },
    ];

    const setCollapsedFn = (val: boolean) => {
        setCollapsed(val);
        onToggleSideNav(val);
    }
    return (
        <>
            <Header style={{ padding: '0px', background: colorBgContainer }}>
                <div className="flex gap-3 items-center">
                    <div className="ml-2.5">
                        <Button type="text" icon={collapsed ? <DoubleRightOutlined /> : <DoubleLeftOutlined />} onClick={() => setCollapsedFn(!collapsed)} />
                    </div>
                    <div>
                        <Breadcrumbs />
                    </div>
                    <div className="ml-auto mr-3">
                        <Dropdown menu={{ items }} trigger={['click']} className="mt-3">
                            <a onClick={(e) => e.preventDefault()}>
                                <Space>
                                    <Avatar icon={<UserOutlined />} />
                                </Space>
                            </a>
                        </Dropdown>
                    </div>
                </div>
            </Header>
        </>
    )
}

export default HeaderElm;