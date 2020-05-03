const STORAGE_KEY = '@Login';

export const UserService = {
  doLogin(email, password) {
    localStorage.setItem("@Login", JSON.stringify({ email, password }));
  }, 
  
  getUser() {
    const user = localStorage.getItem("@Login");
    return user ? JSON.parse(user) : null;
  },

  getEmail() {
    return UserService.getUser()?.email;
  },

  doLogout() {
    localStorage.removeItem("@Login");
  }
};