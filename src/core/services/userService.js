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
  }, 2000);
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
  }, 2000);
}

export function updateUser(data, callback) {}

module.exports = { getUsers, addUser, updateUser, getUserById };
