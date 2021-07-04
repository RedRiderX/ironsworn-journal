const uuidv1 = require("uuid/v1");

export const state = () => ({
  list: [
    {
      uuid: "5e30160a-8208-4c01-9e93-35c7173b4ebb",
      logType: "ItemText",
      data: {
        html:
          "<h1>Start Your Journey</h1><p>Describe your adventure below with Rolls and Text posts </p>",
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
  ],
});

export const getters = {
  logs(state) {
    return state.list;
  },
  logsCount(state) {
    return state.list.length;
  },
  getLog: (state) => (uuid) => {
    return state.list.find((el) => el.uuid === uuid);
  },
};

export const mutations = {
  addTextLog(state, html) {
    state.list.push({
      uuid: uuidv1(),
      logType: "ItemText",
      data: {
        html,
      },
    });
  },
  addRoll(state, data) {
    state.list.push({
      uuid: uuidv1(),
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
  addVow(state) {
    state.list.push({
      uuid: uuidv1(),
      logType: "ItemVowNew",
      data: {
        name: null,
        rank: null,
        bond: null,
        collapsed: false,
      },
    });
  },
  addOracleLog(state, data) {
    state.list.push({
      uuid: uuidv1(),
      logType: "ItemOracleResult",
      data: {
        name: data.name,
        result: data.result,
      },
    });
  },
  updateRollResult(state, payload) {
    let logItem = state.list.find((el) => el.uuid === payload.uuid);
    logItem.data.actionScore = payload.actionScore;
    logItem.data.challengeDice = payload.challengeDice;
    logItem.data.challengeDiceBurned = payload.challengeDiceBurned;
  },
  updateTextLog(state, payload) {
    let logItem = state.list.find((el) => el.uuid === payload.uuid);
    logItem.data.html = payload.html;
  },
  updateNewVow(state, payload) {
    let logItem = state.list.find((el) => el.uuid === payload.uuid);
    logItem.data.name = payload.name;
    logItem.data.rank = payload.rank;
    logItem.data.collapsed = payload.collapsed;
  },
  removeLog(state, uuid) {
    let logItemIndex = state.list.findIndex((el) => el.uuid === uuid);
    state.list.splice(logItemIndex, 1);
  },
};
