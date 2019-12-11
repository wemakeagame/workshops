import { workshops } from "../workshop.mock";

export function getMyWorkshops(user, callback) {
  setTimeout(() => {
    if (user) {
      const ws = workshops.filter(w => w.ownerId === user.id);
      if (callback) {
        callback(null, ws);
      }
    } else {
      callback({ message: "User is missing" });
    }
  }, 500);
}

export function getMyWorkshopById(id, callback) {
  setTimeout(() => {
    if (id) {
      const ws = workshops.find(w => w.id === id);
      if (callback) {
        callback(null, ws);
      }
    } else {
      callback({ message: "Id is missing" });
    }
  }, 500);
}
