const uuidv1 = require("uuid/v1");

export const state = () => ({
  list: [
    {
      uuid: "5e30160a-8208-4c01-9e93-35c7173b4ebb",
      logType: "TextLogItem",
      data: {
        html:
          "<h1>Start Your Journey</h1><p>Describe your adventure below with Rolls and Text posts </p>",
      },
    },
    // {
    //   uuid: "eb987b6d-0974-4246-ad99-72c001a4141e",
    //   logType: "MetaLogItem",
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
    //   uuid: "a77179ba-5371-4130-95a8-7e81fe5d693d",
    //   logType: "TextLogItem",
    //   data: {
    //     html: "<p>foo bar</p>",
    //   },
    // },
  ],
});
export const getters = {
  getLog: state => uuid => {
    return state.list.find(el => el.uuid === uuid);
  },
};

export const mutations = {
  addTextLog(state, html) {
    state.list.push({
      uuid: uuidv1(),
      logType: "TextLogItem",
      data: {
        html,
      },
    });
  },
  addRoll(state, data) {
    state.list.push({
      uuid: uuidv1(),
      logType: "MetaLogItem",
      data: {
        rollStat: data.rollStat,
        addNum: data.addNum,
        move: data.move,
        actionScore: null,
        challengeDice: [null, null],
      },
    });
  },
  updateRollResult(state, payload) {
    let logItem = state.list.find(el => el.uuid === payload.uuid);
    logItem.data.actionScore = payload.actionScore;
    logItem.data.challengeDice = payload.challengeDice;
  },
  updateTextLog(state, payload) {
    let logItem = state.list.find(el => el.uuid === payload.uuid);
    logItem.data.html = payload.html;
  },
  removeLog(state, uuid) {
    let logItemIndex = state.list.findIndex(el => el.uuid === uuid);
    state.list.splice(logItemIndex, 1);
  },
};
