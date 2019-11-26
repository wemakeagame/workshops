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
