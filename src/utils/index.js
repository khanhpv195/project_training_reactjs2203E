const info = localStorage.getItem("userInfo");

export const userData = info ? JSON.parse(info) : null;