const ROLES = {
  USER: "user",
  ADMIN: "admin",
  PRESENTER: "presenter"
};

const AUTH = {
  [ROLES.USER]: "user",
  [ROLES.ADMIN]: "admin user presenter",
  [ROLES.PRESENTER]: "user presenter"
};

module.exports = { AUTH, ROLES };
