import Cookies from "js-cookie";

const setCookies = (cObj: any) => {
  Object.entries(cObj).forEach(([key, value]) => {
    Cookies.set(`${key}`, `${value}`, { path: "/" });
  });
};

const getCookieByName = (cName: string) => {
  return Cookies.get(cName);
};

const getJWTToken = () => {
  return Cookies.get("access_token");
};

const getSubdomain = () => {
  return Cookies.get("x_subdomain");
};

const getUsername = () => {
  return Cookies.get("username");
};

const removeFromCookie = () => {
  const cookieKeys: any[] = getAllCookieKeys();
  if (cookieKeys && cookieKeys.length) {
    cookieKeys.forEach((key) => {
      Cookies.remove(`${key}`, { path: "/" });
    });
  }
};

const getRoles = () => {
  return localStorage.getItem("roles") ?? null;
};

const isAdminUser = () => {
  const roles: any = getRoles();
  return roles ? roles.includes("admin") : false;
};

const clearSession = () => {
  removeFromCookie();
  localStorage.clear();
}

const getAllCookieKeys = () => {
  const cookies = document.cookie.split(';');
  const cookieKeys: string[] = [];
  cookies.forEach(cookie => {
    const key = cookie.split('=')[0].trim();
    cookieKeys.push(key);
  });

  return cookieKeys;
}

const isAuthenticated = () => {
  return getJWTToken() ? true : false;
}

const setLocalStorage = (cObj: any) => {
  Object.entries(cObj).forEach(([key, value]) => {
    if (typeof value === 'object') {
      localStorage.setItem(`${key}`, JSON.stringify(value));
    } else {
      localStorage.setItem(`${key}`, `${value}`);
    }
  });
}

const getMenus = () => {
  const lsMenu: any = localStorage.getItem('menu')
  const menuObj: any = lsMenu ? JSON.parse(lsMenu) : {};
  const menus: any[] = [];
  Object.entries(menuObj).forEach(([key, value]) => {
    const obj: any = {
      key: key.toLowerCase().trim().replace(/ /gi, ''),
      label: value,
      imgKey: key.trim().replace(/ /gi, '')
    };
    menus.unshift(obj);
  })
  return menus;
}

const UtilsService = {
  setCookies,
  getJWTToken,
  getSubdomain,
  getUsername,
  removeFromCookie,
  getCookieByName,
  isAdminUser,
  getRoles,
  clearSession,
  getAllCookieKeys,
  isAuthenticated,
  setLocalStorage,
  getMenus
};

export default UtilsService;
