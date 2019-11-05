import { users } from "../user.mock";
export function getUsers(callback) {}

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

module.exports = { getUsers, addUser, updateUser };
