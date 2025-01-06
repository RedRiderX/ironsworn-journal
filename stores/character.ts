const minMomentum = -6;

export const useCharacterStore = defineStore("character", {
  state: () => ({
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
    yourWorld: "",
    bondText: "",
  }),
  actions: {
    updateName(newName) {
      this.name = newName;
    },
    updateStat(payload) {
      if (isNaN(Number(payload.value))) {
        return false;
      }
      this.stats[payload.name] = Number(payload.value);
    },
    updateResource(payload) {
      let value = Number(payload.value);

      if (isNaN(value)) {
        return false;
      }

      // Check that it fits in params
      if (value >= 0 && value <= 5) {
        this.resources[payload.name] = value;
      }
    },
    updateMomentum(payload) {
      if (isNaN(Number(payload.value))) {
        return false;
      }
      this.momentum[payload.name] = Number(payload.value);
    },
    updateMomentumTotal(value) {
      value = Number(value);

      if (isNaN(value)) {
        return false;
      }

      // Check that it fits in params
      if (value >= minMomentum && value <= this.momentum.max) {
        this.momentum.total = value;
      }
    },
    resetMomentum() {
      this.momentum.total = this.momentum.reset;
    },
    addBond() {
      this.bonds = Math.min(this.bonds + 1, 40);
    },
    removeBond() {
      this.bonds = Math.max(this.bonds - 1, 0);
    },
  },
});
