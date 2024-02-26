import { NavLink, useMatches } from "react-router-dom";
import NavService from "../services/nav.service";
import { HomeOutlined } from "@ant-design/icons";
import { Breadcrumb } from "antd";

function Breadcrumbs() {
    const matches = useMatches();
    const crumbs = matches.filter((match: any) => Boolean(match.handle?.crumb))
    const breadcrumbItem: any[] = [
        {
            title: <NavLink to={NavService.routePaths.dashboard}><HomeOutlined /></NavLink>
        },
    ];
    crumbs.map((crumb: any, ind) => {
        const notLast = ind < crumbs.length - 1;
        if (notLast) {
            breadcrumbItem.push({ title: <NavLink to={crumb.pathname}>{crumb.handle?.crumb}</NavLink> })
        } else {
            breadcrumbItem.push({ title: `${crumb.handle?.crumb()}` })
        }
    });
    return (
        <Breadcrumb items={breadcrumbItem} />
    )
}

export default Breadcrumbs;
