const routePaths = {
    admin: '/react-vite/admin',
    user: '/react-vite/user',
    auth: '/react-vite/user/auth',
    login: '/react-vite/user/auth/login',
    dashboard: '/react-vite/admin/dashboard',
    users: '/react-vite/admin/users',
}

const pageTitles = {
    [routePaths.login]: 'Login',
    [routePaths.dashboard]: 'Dashboard',
    [routePaths.users]: 'Users',
}

const NavService = {
    routePaths,
    pageTitles
};

export default NavService;