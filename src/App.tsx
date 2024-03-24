import { Suspense, lazy, useEffect } from 'react'
import './App.css'
import { Navigate, Outlet, Route, RouterProvider, createBrowserRouter, createRoutesFromElements, useLocation } from 'react-router-dom'
import NavService from './services/nav.service';
import { ToastContainer } from 'react-toastify';
import globalData from './global.config';
import { CustomerServiceOutlined, CommentOutlined } from '@ant-design/icons';
import { FloatButton } from 'antd';

const AppLayout = () => {
  const location = useLocation();
  useEffect(() => {
    console.log(location);
    document.title = NavService.pageTitles[location.pathname] ? `${globalData.APP_NAME} | ${NavService.pageTitles[location.pathname]}` : globalData.APP_NAME
  }, [location]);

  return (
    <div>
      <ToastContainer position='bottom-right' />
      <Outlet />
      <FloatButton.Group
        trigger="hover"
        type="primary"
        style={{ right: 25 }}
        icon={<CustomerServiceOutlined />}
      >
        <FloatButton />
        <FloatButton icon={<CommentOutlined />} />
      </FloatButton.Group>
    </div>
  );
};


const Login = lazy(() => import('./pages/auth/login'));
const Admin = lazy(() => import('./layout/admin.layout'));
const User = lazy(() => import('./layout/user.layout'));
const Auth = lazy(() => import('./pages/auth/auth'));
const Dashboard = lazy(() => import('./pages/dashboard'));
const Users = lazy(() => import('./pages/users'));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/react-vite' element={<AppLayout />}>
      <Route index path="" element={<Navigate to={NavService.routePaths.user} />} />
      <Route path={NavService.routePaths.user} element={<Suspense fallback={<></>}><User /></Suspense>} handle={{ crumb: () => "User" }} >
        <Route index path="" element={<Navigate to={NavService.routePaths.auth} />} />
        <Route path={NavService.routePaths.auth} element={<Suspense fallback={<></>}><Auth /></Suspense>} handle={{ crumb: () => "Auth" }} >
          <Route index path="" element={<Navigate to={NavService.routePaths.login} />} />
          <Route path={NavService.routePaths.login} element={<Suspense fallback={<></>}><Login /></Suspense>} handle={{ crumb: () => "Login" }} />
        </Route>
      </Route>
      <Route path={NavService.routePaths.admin} element={<Suspense fallback={<></>}><Admin /></Suspense>} handle={{ crumb: () => "Admin" }} >
        <Route path="" element={<Navigate to={NavService.routePaths.dashboard} />} />
        <Route path={NavService.routePaths.dashboard} element={<Suspense fallback={<></>}><Dashboard /></Suspense>} handle={{ crumb: () => "Dashboard" }} />
        <Route path={NavService.routePaths.manageusers} element={<Suspense fallback={<></>}><Users /></Suspense>} handle={{ crumb: () => "Manage Users" }} />
      </Route>
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
