const routePaths = {
    admin: '/react-vite/admin',
    user: '/react-vite/user',
    auth: '/react-vite/user/auth',
    login: '/react-vite/user/auth/login',
    dashboard: '/react-vite/admin/dashboard',
    manageusers: '/react-vite/admin/users',
}

const pageTitles = {
    [routePaths.login]: 'Login',
    [routePaths.dashboard]: 'Dashboard',
    [routePaths.manageusers]: 'Manage Users',
}

const NavService = {
    routePaths,
    pageTitles
};

export default NavService;