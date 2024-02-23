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

const removeFromCookie = (cObj: any) => {
  if (cObj) {
    Object.entries(cObj).forEach(([key]) => {
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

const clearSession = (obj: any) => {
    removeFromCookie(obj);
    localStorage.clear();
  }

const utilsService = {
  setCookies,
  getJWTToken,
  getSubdomain,
  removeFromCookie,
  getCookieByName,
  isAdminUser,
  getRoles,
  clearSession,
};

export default utilsService;
