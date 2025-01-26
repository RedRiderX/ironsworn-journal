export const useMapStore = defineStore("map", {
  // state: (): State => ({
  state: () => ({
    mapUrl: "ironlands-map.svg",
    poi: [],
    // [
    //   {
    //     x: 90,
    //     y: 90,
    //     title: "Goodlanding (Wild, Rough, Withered)",
    //     description: `<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
    //       Porro consectetur tempora suscipit aperiam</p>`,
    //   },
    //   {
    //     x: 20,
    //     y: 50,
    //     title: "Qui eum quod fugit corrupti.",
    //     description: `<p>Minima ab deserunt praesentium cumque nulla voluptate vitae ullam.
    //       Aut dolor ullam commodi qui odio sunt quis vitae.</p>`,
    //   },
    // ],
  }),
  actions: {
    addPOI(payload) {
      this.poi.push({
        x: payload.x,
        y: payload.y,
        title: payload.title,
        description: payload.description,
      });
    },
    updatePOITitle(payload) {
      this.poi[payload.index].title = payload.newTitle;
    },
    updatePOIDescription(payload) {
      this.poi[payload.index].description = payload.newDescription;
    },
    removePOI(index) {
      this.poi.splice(index, 1);
    },
  },
})
