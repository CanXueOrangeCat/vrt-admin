import { Link, Navigate, Route, Routes } from 'react-router-dom';
import { Menu } from '@arco-design/web-react';
import { loginPageRoute, notFoundRoute } from './router';

const { Item: MenuItem, SubMenu } = Menu;

export const routePrefix = 'vrt-admin';

export const getKeyFromPath = (pathname: string) => {
  return pathname.replace(new RegExp(`^/${routePrefix}/`), '');
};

export const getRouterMenuList = (list: any[]) =>
  list?.map((v) => {
    if (!('title' in v)) {
      return null;
    }

    const titleDom = (
      <>
        {v.icon}
        {v.title}
      </>
    );

    if ('children' in v) {
      return (
        <SubMenu key={v.title} title={titleDom}>
          {getRouterMenuList(v.children)}
        </SubMenu>
      );
    }

    return (
      <MenuItem key={getKeyFromPath(v.path)}>
        <Link className="w-full" to={`/${routePrefix}/${v.path}`}>
          {titleDom}
        </Link>
      </MenuItem>
    );
  });

export const RouteList: any = (list: any[]) => {
  return list.map((v: any) => {
    const { path, component: RouteComponent, children } = v;
    if (children) {
      return RouteList(children);
    }
    return <Route key={path} path={path} element={<RouteComponent />} />;
  });
};

export const RoutesList: React.FC<{ lists: any[] }> = ({ lists }) => {
  const list = RouteList(lists);

  return (
    <Routes>
      <Route path={routePrefix}>{list}</Route>
      <Route
        key="/"
        path="/"
        element={<Navigate to={`/${routePrefix}/${lists[0].path}`} />}
      />
      <Route
        key={loginPageRoute.path}
        path="/login"
        element={<loginPageRoute.component />}
      />
      <Route
        key={notFoundRoute.path}
        path="*"
        element={<notFoundRoute.component />}
      />
    </Routes>
  );
};
