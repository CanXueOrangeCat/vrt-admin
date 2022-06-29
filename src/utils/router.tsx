import loadable, { LoadableComponent } from '@loadable/component';
import { IconHome, IconCalendar } from '@arco-design/web-react/icon';

export type GroupItem = {
  title: string;
  icon?: JSX.Element;
  children: RoutesOptions;
};

export type LinkItem = {
  title?: string;
  icon?: JSX.Element;
  path: string;
  component: LoadableComponent<any>;
};

export type RoutesOptions = (GroupItem | LinkItem)[];

export const getRouters = () => [
  {
    title: 'Menu 1',
    icon: <IconHome />,
    path: 'menu1',
    component: loadable(() => import('@/page/menu1/index')),
  },
  {
    title: 'Menu 2',
    icon: <IconCalendar />,
    path: 'menu2',
    component: loadable(() => import('@/page/menu2/index'), {
      resolveComponent: (component) => component.Menu2,
    }),
  },
  {
    title: 'Menu 3',
    icon: <IconCalendar />,
    path: 'menu3',
    component: loadable(() => import('@/page/menu3/index'), {
      resolveComponent: (component) => component.Menu3,
    }),
  },
  {
    title: 'Menu 4',
    icon: <IconCalendar />,
    children: [
      {
        title: 'Menu 4_1',
        icon: <IconCalendar />,
        path: 'menu4/menu4_1',
        component: loadable(() => import('@/page/menu4/menu4_1/index'), {
          resolveComponent: (component) => component.Menu4_1,
        }),
      },
      {
        title: 'Menu 4_2',
        icon: <IconCalendar />,
        path: 'menu4/menu4_2',
        component: loadable(() => import('@/page/menu4/emnu4_2/index'), {
          resolveComponent: (component) => component.Menu4_2,
        }),
      },
    ],
  },
  {
    title: 'Menu 5',
    icon: <IconCalendar />,
    children: [
      {
        title: 'Menu 5_1',
        icon: <IconCalendar />,
        path: 'menu5/menu5_1',
        component: loadable(() => import('@/page/menu5/menu5_1/index'), {
          resolveComponent: (component) => component.Menu5_1,
        }),
      },
      {
        title: 'Menu 5_2',
        icon: <IconCalendar />,
        path: 'menu5/menu5_2',
        component: loadable(() => import('@/page/menu5/menu5_2/index'), {
          resolveComponent: (component) => component.Menu5_2,
        }),
      },
    ],
  },
];

export const notFoundRoute = {
  title: '404',
  path: '404',
  component: loadable(() => import('@/page/404/index')),
};

export const loginPageRoute = {
  title: 'login',
  path: 'login',
  component: loadable(() => import('@/page/Login/index')),
};
