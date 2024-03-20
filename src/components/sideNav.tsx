import { NavLink, useLocation } from "react-router-dom";
import NavService from "../services/nav.service";
import { Menu, MenuProps } from "antd";
import Sider from "antd/es/layout/Sider";
import UtilsService from "../services/utils.service";

interface IMenuOptions {
    key: keyof typeof NavService.routePaths;
    label: string;
    imgKey:string;
}

function SideNav({ collapsed }: any) {
    const location = useLocation();
    const menusArr: any = UtilsService.getMenus() || [];
    const navItems: MenuProps['items'] = menusArr.map(({key, label, imgKey}: IMenuOptions) => {
        if (NavService.routePaths[key]) {
            return {
                key: NavService.routePaths[key],
                label: <nav title={label}>
                    <NavLink to={NavService.routePaths[key]} className={({ isActive }) => (isActive ? 'active' : 'inactive')}>{label}</NavLink>
                </nav>,
                icon: <img src={`https://ticketing-web-uat.azurewebsites.net/assets/img/new-images/${imgKey}.svg`} />,
            };
        }
    });
    
    return (
        <Sider trigger={null} collapsible collapsed={collapsed} className="min-h-screen">
            <div className="demo-logo-vertical p-4">
                <img className="h-8 w-auto" src={'https://ticketing-web-uat.azurewebsites.net/assets/img/ticketing-logo-white.svg'} alt="Logo" />
            </div>
            <Menu theme="dark" mode="inline" style={{ flex: 1, minWidth: 0 }} selectedKeys={[location.pathname]} items={navItems} />
        </Sider>
    );
}

export default SideNav;