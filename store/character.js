export const state = () => ({
  name: "Character Name",
  stats: {
    edge: 1,
    heart: 2,
    iron: 3,
    shadow: 1,
    wits: 2,
  },
  resources: {
    health: 5,
    spirit: 3,
    supply: 2,
  },
  momentum: {
    total: 7,
    max: 9,
    reset: 1,
  },
  bonds: 3,
});

const minMomentum = -6;

export const mutations = {
  updateName(state, newName) {
    state.name = newName;
  },
  updateStat(state, payload) {
    if (isNaN(Number(payload.value))) {
      return false;
    }
    state.stats[payload.name] = Number(payload.value);
  },
  updateResource(state, payload) {
    let value = Number(payload.value);

    if (isNaN(value)) {
      return false;
    }

    // Check that it fits in params
    if (value >= 0 && value <= 5) {
      state.resources[payload.name] = value;
    }
  },
  updateMomentum(state, payload) {
    if (isNaN(Number(payload.value))) {
      return false;
    }
    state.momentum[payload.name] = Number(payload.value);
  },
  updateMomentumTotal(state, value) {
    value = Number(value);

    if (isNaN(value)) {
      return false;
    }

    // Check that it fits in params
    if (value >= minMomentum && value <= state.momentum.max) {
      state.momentum.total = value;
    }
  },
  resetMomentum(state) {
    state.momentum.total = state.momentum.reset;
  },
  addBond(state) {
    state.bonds = Math.min(state.bonds + 1, 40);
  },
  removeBond(state) {
    state.bonds = Math.max(state.bonds - 1, 0);
  },
};
