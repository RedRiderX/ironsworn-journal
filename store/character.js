export const state = () => ({
  name: "foo",
  stats: {
    edge: 1,
    heart: 2,
  },
  resources: {
    health: 5,
  },
  momentum: {
    total: 7,
  },
});

export const mutations = {
  updateName(state, newName) {
    state.name = newName;
  },
  updateStat(state, payload) {
    state.stats[payload.statName] = payload.newValue;
  },
  updateResource(state, payload) {
    state.resources[payload.statName] = payload.newValue;
  },
  updateMomentum(state, payload) {
    state.momentum[payload.statName] = payload.newValue;
  },
};
