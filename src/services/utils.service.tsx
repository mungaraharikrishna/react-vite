import Cookies from "js-cookie";
const colors = ['#7239ea', '#D9214E', '#FFC700', '#47BE7D', '#0B257B', '#898989'];
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

const getValueFromLocalStorage = (key: any) => {
  return localStorage.getItem(key)
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

const getAcronym = (fName: string, lName: string) => {
  let acronym: string = '';
  if (fName) {
    acronym = fName.charAt(0);
  }
  if (lName) {
    acronym = acronym + lName.charAt(0);
  }
  return acronym.toUpperCase();
}

const getRandomColor = (index?: number) => {
  if (index !== undefined) {
    return colors[index % colors.length]
  }
  else {
    const random = Math.floor(Math.random() * colors.length);
    return colors[random];
  }
}

const getOrgId = () => {
  const organization: any = localStorage.getItem('organization');
  return organization ? JSON.parse(organization).organizationId : null
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
  getMenus,
  getAcronym,
  getRandomColor,
  getValueFromLocalStorage,
  getOrgId
};

export default UtilsService;
