import { Suspense, lazy, useEffect } from 'react'
import './App.css'
import { Navigate, Outlet, Route, RouterProvider, createBrowserRouter, createRoutesFromElements, useLocation } from 'react-router-dom'
import navigationPaths from './services/nav.service';
import { ToastContainer } from 'react-toastify';

const AppLayout = () => {
  const location = useLocation();
  useEffect(() => {
    console.log(location);
  }, [location]);
  
  return (
    <div>
      <ToastContainer position='bottom-right' />
      <Outlet />
    </div>
  );
};

const Login = lazy(() => import('./pages/auth/login'));
const Admin = lazy(() => import('./layout/admin.layout'));
const User = lazy(() => import('./layout/user.layout'));
const Auth = lazy(() => import('./pages/auth/auth'));
const Dashboard = lazy(() => import('./pages/dashboard'));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<AppLayout />}>
      <Route index path="" element={<Navigate to={navigationPaths.routePaths.user} />} />
      <Route path={navigationPaths.routePaths.user} element={<Suspense fallback={<></>}><User /></Suspense>} handle={{ crumb: () => "User" }} >
        <Route path={navigationPaths.routePaths.auth} element={<Suspense fallback={<></>}><Auth /></Suspense>} handle={{ crumb: () => "Auth" }} >
          <Route index path="" element={<Navigate to={navigationPaths.routePaths.login} />} />
          <Route path={navigationPaths.routePaths.login} element={<Suspense fallback={<></>}><Login /></Suspense>} handle={{ crumb: () => "Login" }} />
        </Route>
      </Route>
      <Route path={navigationPaths.routePaths.admin} element={<Suspense fallback={<></>}><Admin /></Suspense>} handle={{ crumb: () => "Admin" }} >
        <Route path="" element={<Navigate to={navigationPaths.routePaths.dashboard} />} />
        <Route path={navigationPaths.routePaths.dashboard} element={<Suspense fallback={<>...</>}><Dashboard /></Suspense>} handle={{ crumb: () => "Dashboard" }} />
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
