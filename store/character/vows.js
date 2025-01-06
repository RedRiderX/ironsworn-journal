import { v1 as uuidv1 } from "uuid";

export const state = () => ({
  list: [
    {
      uuid: "0e1d7442-bdf7-4f04-9032-ebe0658879f7",
      name: "Found the City of Hope",
      rank: "epic",
      progress: 5,
      notes: "<p>foo</p>",
    },
    // {
    //   uuid: "7d950f60-4c8c-4748-90d8-be0a6ee2e2a8",
    //   name: "foo",
    //   rank: "epic",
    //   progress: 2,
    //   notes: "<p>bar</p>",
    // },
  ],
});

export const getters = {
  get(state) {
    return state.list;
  },
  getVow: (state) => (uuid) => {
    return state.list.find((el) => el.uuid === uuid);
  },
};

export const mutations = {
  add(state, payload) {
    state.list.push({
      uuid: uuidv1(),
      name: payload.name,
      rank: payload.rank,
      progress: payload.progress,
      notes: payload.notes,
    });
  },
  updateNotes(state, payload) {
    let vowItem = state.list.find((el) => el.uuid === payload.uuid);
    vowItem.notes = payload.notes;
  },
  remove(state, uuid) {
    let vowIndex = state.list.findIndex((el) => el.uuid === uuid);
    state.list.splice(vowIndex, 1);
  },
  // incrementProgress(state, payload) {
  //   let vowItem = state.list.find(el => el.uuid === payload.uuid);
  //   vowItem.notes = payload.notes;
  // },
};
