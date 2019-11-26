import { users } from "./user.mock";
export const workshops = (function() {
  const items = [];
  let sampleItem = {
    id: 1,
    title: "Event mock title",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: "https://source.unsplash.com/800x150/?house",
    status: "DRAFT",
    startDateTime: new Date().toString(),
    endDateTime: new Date().toString(),
    isFree: true,
    price: 0,
    topics: [
      { title: "Introduction", duration: "10" },
      { title: "Details", duration: "20" }
    ],
    mediaUrl: "https://www.youtube.com/watch?v=F_cIph-_N_w",
    ownerId: "0"
  };

  for (let i = 1; i < 10; i++) {
    let newItem = { ...sampleItem };
    newItem.id = i;
    newItem.title += i;
    newItem.image += "&cache" + i;
    newItem.status = getRandomStatus();
    newItem.ownerId = getRandomOwnerId();

    items.push(newItem);
  }

  return items;
})();

function getRandomStatus() {
  const status = ["DRAFT", "STARTED", "END", "PUBLISHED"];
  const rand = Math.floor(Math.random() * status.length);

  return status[rand];
}

function getRandomOwnerId() {
  const rand = Math.floor(Math.random() * users.length);

  return users[rand].id;
}

module.exports = { workshops };
