import { v4 as uuidv4 } from "uuid";

interface State {
  list: LogText[];
}

// Interface for different log data types with optional properties based on logType
interface LogData {
  [key: string]: any; // Base interface for any log data
}

interface TextLogData extends LogData {
  html: string;
}

interface RollLogData extends LogData {
  rollStat: string;
  addNum: number;
  move?: string; // Optional property
  actionDie?: null; // Optional property with initial null value
  actionScore?: null; // Optional property with initial null value
  challengeDice: [null, null]; // Array with initial null values
  challengeDiceBurned: [boolean, boolean]; // Array with initial boolean values
}

interface VowLogData extends LogData {
  name?: string; // Optional property with initial null value
  rank?: string; // Optional property with initial null value
  bond?: null; // Optional property with initial null value
  collapsed: boolean;
}

interface OracleLogData extends LogData {
  name: string;
  result: string;
}

interface POILogData extends LogData {
  title?: string; // Optional property with initial null value
  description?: string; // Optional property with initial null value
  collapsed: boolean;
}

// Union type for all possible log data types based on logType
type LogDataType =
  | TextLogData
  | RollLogData
  | VowLogData
  | OracleLogData
  | POILogData;

interface LogText {
  uuid: string;
  logType: string;
  data: LogDataType; // Use the union type for data based on logType
}

export const useActivityLogStore = defineStore("activityLog", {
  state: (): State => ({
    list: [
      {
        uuid: "5e30160a-8208-4c01-9e93-35c7173b4ebb",
        logType: "ItemText",
        data: {
          html: "<h1>Start Your Journey</h1><p>Describe your adventure below with Rolls and Text posts </p>",
        },
      },
      // {
      //   uuid: "e3699091-a374-43ca-b792-eab38510ef13",
      //   logType: "ItemOracleResult",
      //   data: {
      //     name: "Action",
      //     result: "Risky",
      //   },
      // },
      // {
      //   uuid: "61a4e4b6-ee78-4eda-b119-df7a7b637432",
      //   logType: "ItemVowNew",
      //   data: {
      //     name: "Found the City of Hope",
      //     rank: "epic",
      //     bond: null,
      //     collapsed: true,
      //   },
      // },
      // {
      //   uuid: "eb987b6d-0974-4246-ad99-72c001a4141e",
      //   logType: "ItemRoll",
      //   data: {
      //     rollStat: "heart",
      //     addNum: 1,
      //     move: null,
      //     // result: null,
      //     result: {
      //       actionScore: null,
      //       challengeDice: [null, null],
      //     },
      //   },
      // },
      // {
      //   uuid: "a001e869-e109-4fd7-a1de-30f23180fc27",
      //   logType: "ItemPOINew",
      //   data: {
      //     title: "Goodlanding (Wild, Rough, Withered)",
      // description: `<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
      //     Porro consectetur tempora suscipit aperiam</p>`
      //   },
      // },
    ],
  }),
  getters: {
    logs(state) {
      return state.list;
    },
    logsCount(state) {
      return state.list.length;
    },
    getLog: (state) => (uuid) => {
      return state.list.find((el) => el.uuid === uuid);
    },
  },
  actions: {
    addTextLog(html) {
      this.list.push({
        uuid: uuidv4(),
        logType: "ItemText",
        data: {
          html,
        },
      });
    },
    addRoll(data) {
      this.list.push({
        uuid: uuidv4(),
        logType: "ItemRoll",
        data: {
          rollStat: data.rollStat,
          addNum: data.addNum,
          move: data.move,
          actionDie: null,
          actionScore: null,
          challengeDice: [null, null],
          challengeDiceBurned: [false, false],
        },
      });
    },
    addVow() {
      this.list.push({
        uuid: uuidv4(),
        logType: "ItemVowNew",
        data: {
          name: null,
          rank: null,
          bond: null,
          collapsed: false,
        },
      });
    },
    addOracleLog(data) {
      this.list.push({
        uuid: uuidv4(),
        logType: "ItemOracleResult",
        data: {
          name: data.name,
          result: data.result,
        },
      });
    },
    addPOI() {
      this.list.push({
        uuid: uuidv4(),
        logType: "ItemPOINew",
        data: {
          title: null,
          description: null,
          collapsed: false,
        },
      });
    },
    updateRollResult(payload) {
      let logItem = this.list.find((el) => el.uuid === payload.uuid);
      logItem.data.actionScore = payload.actionScore;
      logItem.data.challengeDice = payload.challengeDice;
      logItem.data.challengeDiceBurned = payload.challengeDiceBurned;
    },
    updateTextLog(payload) {
      let logItem = this.list.find((el) => el.uuid === payload.uuid);
      logItem.data.html = payload.html;
    },
    updateNewVow(payload) {
      let logItem = this.list.find((el) => el.uuid === payload.uuid);
      logItem.data.name = payload.name;
      logItem.data.rank = payload.rank;
      logItem.data.collapsed = payload.collapsed;
    },
    updateNewPOI(payload) {
      let logItem = this.list.find((el) => el.uuid === payload.uuid);
      logItem.data.title = payload.title;
      logItem.data.description = payload.description;
      logItem.data.collapsed = payload.collapsed;
    },
    removeLog(uuid) {
      let logItemIndex = this.list.findIndex((el) => el.uuid === uuid);
      this.list.splice(logItemIndex, 1);
    },
  },
});
