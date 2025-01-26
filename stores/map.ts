export interface Poi {
  x: number;
  y: number;
  title: string;
  description: string;
}

interface MapState {
  mapUrl: string;
  poi: Poi[];
}

export const useMapStore = defineStore("map", {
  state: (): MapState => ({
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
    addPOI(payload: Poi) {
      this.poi.push(payload);
    },
    updatePOITitle(payload: { index: number; newTitle: string }) {
      this.poi[payload.index].title = payload.newTitle;
    },
    updatePOIDescription(payload: { index: number; newDescription: string }) {
      this.poi[payload.index].description = payload.newDescription;
    },
    removePOI(index: number) {
      this.poi.splice(index, 1);
    },
  },
})
