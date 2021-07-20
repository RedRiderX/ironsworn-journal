export const state = () => ({
  mapUrl: "ironlands-map.svg",
  poi: [
    {
      x: 90,
      y: 90,
      title: "Goodlanding (Wild, Rough, Withered)",
      description: `<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Porro consectetur tempora suscipit aperiam</p>`,
    },
    {
      x: 20,
      y: 50,
      title: "Qui eum quod fugit corrupti.",
      description: `<p>Minima ab deserunt praesentium cumque nulla voluptate vitae ullam. 
        Aut dolor ullam commodi qui odio sunt quis vitae.</p>`,
    },
  ],
});

export const mutations = {
  addPOI(state, payload) {
    state.poi.push({
      x: payload.x,
      y: payload.y,
      title: payload.title,
      description: payload.description,
    });
  },
  updatePOITitle(state, payload) {
    state.poi[payload.index].title = payload.newTitle;
  },
  updatePOIDescription(state, payload) {
    state.poi[payload.index].title = payload.newDescription;
  },
};
