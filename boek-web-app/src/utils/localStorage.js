function getItem(key) {
  let data = window.localStorage.getItem(key);

  try {
    data = JSON.parse(data);
  } catch (e) {
    return data;
  }
  return data;
}

function setItem(key, value) {
  if (typeof value == "object") {
    value = JSON.stringify(value);
  }
  window.localStorage.setItem(key, value);
}

const LocalStorage = {
  getGoogleUser() {
    return getItem("google_user");
  },
  setGoogleUser(user) {
    setItem("google_user", user);
  },
  removeGoogleUser() {
    window.localStorage.removeItem("google_user");
  },
  getRedirect() {
    return getItem("redirect");
  },
  setRedirect(redirect) {
    setItem("redirect", redirect);
  },
  removeRedirect() {
    window.localStorage.removeItem("redirect");
  }
};

export default LocalStorage;
