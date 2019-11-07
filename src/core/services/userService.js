import { users } from "../user.mock";
export function getUsers(callback) {}

export function getUserById(id, callback) {
  setTimeout(() => {
    if (id) {
      const user = users.find(u => u.id === id);
      if (callback) {
        callback(null, user);
      }
    } else {
      callback({ message: "Id is missing" });
    }
  }, 500);
}

export function addUser(data, callback) {
  setTimeout(() => {
    if (data) {
      let id = -1;

      users.forEach(user => {
        if (user.id > id) {
          id = user.id;
        }
      });

      id++;

      data.role = "user";
      data.id = id.toString();
      users.push(data);
      if (callback) {
        callback();
      }
    } else {
      callback({ message: "no user data to add" });
    }
  }, 500);
}

export function updateUser(data, callback) {
  setTimeout(() => {
    if (data) {
      const user = users.find(u => data.id === u.id);

      if (!user && callback) {
        callback({ message: "User doesn't exist" });
      }

      if (user) {
        for (let key in data) {
          user[key] = data[key];
        }
      }

      if (callback) {
        callback(null, user);
      }
    } else {
      callback({ message: "no user data to add" });
    }
  }, 500);
}

export function updatePassword(data, callback) {
  setTimeout(() => {
    if (data) {
      const user = users.find(
        u => data.id === u.id && data.oldPassword === u.password
      );

      if (!user && callback) {
        callback({ message: "User doesn't exist" });
      }

      if (user) {
        user.password = data.newPassword;
      }

      if (callback) {
        callback(null, user);
      }
    } else {
      callback({ message: "no user data to add" });
    }
  }, 500);
}

module.exports = { getUsers, addUser, updateUser, getUserById, updatePassword };
