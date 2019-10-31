export const eventListMockData = (function() {
  const items = [];
  let sampleItem = {
    id: 1,
    title: "Event mock title",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: "https://source.unsplash.com/300x300/?house"
  };

  for (let i = 1; i < 10; i++) {
    let newItem = { ...sampleItem };
    newItem.id = i;
    newItem.title += i;
    newItem.image += "&cache" + i;

    items.push(newItem);
  }

  return items;
})();

module.exports = { eventListMockData };
