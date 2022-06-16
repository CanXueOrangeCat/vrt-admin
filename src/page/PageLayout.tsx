import React, { useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { IconCaretRight, IconCaretLeft } from '@arco-design/web-react/icon';
import { Avatar, Layout, Menu } from '@arco-design/web-react';
import { getKeyFromPath, getRouterMenuList } from '@/utils/memu';

import { RoutesList } from '@/utils/memu';
import logo from '@/assets/logo.svg';
import { getRouters } from '../utils/router';

const { Sider, Header, Content, Footer } = Layout;

const PageLayout: React.FC = () => {
  const { pathname } = useLocation();
  const [collapsible, setCollapsible] = useState(false);
  const routes = useMemo(getRouters, []);
  const selectKey = useMemo(() => getKeyFromPath(pathname), [pathname]);

  return (
    <Layout className="h-screen w-full">
      <Header className="flex items-center w-full h-16 border-solid border-b bg-white drop-shadow-sm">
        <div className="flex items-center text-[20px] w-50">
          <img className="w-16 logo" src={logo} alt="logo" />
          <span>运营中后台</span>
        </div>
        <div className="flex-1 flex justify-end items-center">
          <Avatar>
            <img
              alt="avatar"
              src="//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp"
            />
          </Avatar>
          <span className="mr-6 ml-3">liwenhao.1314920</span>
        </div>
      </Header>
      <Layout>
        <Sider
          collapsed={collapsible}
          collapsible={true}
          onCollapse={() => setCollapsible(!collapsible)}
          trigger={collapsible ? <IconCaretRight /> : <IconCaretLeft />}
        >
          <Menu autoOpen={true} selectedKeys={[selectKey]}>
            {getRouterMenuList(routes)}
          </Menu>
        </Sider>
        <Layout>
          <Content className="m-6 h-500 overflow-auto bg-white drop-shadow-sm">
            <RoutesList lists={routes} />
          </Content>
          <Footer className="w-full h-[60px] bg-white flex items-center justify-center drop-shadow-sm">
            footer
          </Footer>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default PageLayout;
