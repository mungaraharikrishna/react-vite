import { Footer } from "antd/es/layout/layout";

function FooterElm({ colorBgContainer }: any) {
    return (
        <Footer style={{ textAlign: "center", background: colorBgContainer }}>
            Ant Design ©2023 Created by Ant UED
        </Footer>
    )
}
export default FooterElm;
