import { v4 as uuidv4 } from 'uuid';

// Define the types for individual vow items
interface Vow {
  uuid: string;
  name: string;
  rank: 'epic' | 'legendary' | 'rare' | 'common';  // example ranks, adjust as necessary
  progress: number;
  notes: string;
}

// Define the state type
interface State {
  list: Vow[];
}

// Define the payload types for actions
interface AddVowPayload {
  name: string;
  rank: 'epic' | 'legendary' | 'rare' | 'common';
  progress: number;
  notes: string;
}

interface UpdateNotesPayload {
  uuid: string;
  notes: string;
}

export const useCharacterVowsStore = defineStore('characterVows', {
  state: (): State => ({
    list: [
      {
        uuid: '0e1d7442-bdf7-4f04-9032-ebe0658879f7',
        name: 'Found the City of Hope',
        rank: 'epic',
        progress: 5,
        notes: '<p>foo</p>',
      },
      // More initial vows can be added here
    ],
  }),

  getters: {
    // To get a specific vow by uuid
    getVow: (state) => (uuid: string): Vow | undefined => state.list.find((el) => el.uuid === uuid),
  },

  actions: {
    // Add a new vow
    addVow(payload: AddVowPayload): void {
      this.list.push({
        uuid: uuidv4(),
        name: payload.name,
        rank: payload.rank,
        progress: payload.progress,
        notes: payload.notes,
      });
    },

    // Update the notes of a vow by its uuid
    updateNotes(payload: UpdateNotesPayload): void {
      const vowItem = this.list.find((el) => el.uuid === payload.uuid);
      if (vowItem) vowItem.notes = payload.notes;
    },

    // Remove a vow by its uuid
    removeVow(uuid: string): void {
      const vowIndex = this.list.findIndex((el) => el.uuid === uuid);
      if (vowIndex !== -1) this.list.splice(vowIndex, 1);
    },
  },
});
