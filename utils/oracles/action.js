import Oracle from "./Oracle";

export default new Oracle(
  "Action",
  `<p>
  Use this table to inspire a discovery, event, character goal, or
  situation. A roll on this table can be combined with a Theme (see
  below) to provide an actionand a subject. Then, interpret the result
  based on the context of the questionand your current situation.
</p>`,
  [
    {
      text: "Scheme",
      range: {
        min: 1,
        max: 1,
      },
    },
    {
      text: "Clash",
      range: {
        min: 2,
        max: 2,
      },
    },
    {
      text: "Weaken",
      range: {
        min: 3,
        max: 3,
      },
    },
    {
      text: "Initiate",
      range: {
        min: 4,
        max: 4,
      },
    },
    {
      text: "Create",
      range: {
        min: 5,
        max: 5,
      },
    },
    {
      text: "Swear",
      range: {
        min: 6,
        max: 6,
      },
    },
    {
      text: "Avenge",
      range: {
        min: 7,
        max: 7,
      },
    },
    {
      text: "Guard",
      range: {
        min: 8,
        max: 8,
      },
    },
    {
      text: "Defeat",
      range: {
        min: 9,
        max: 9,
      },
    },
    {
      text: "Control",
      range: {
        min: 10,
        max: 10,
      },
    },
    {
      text: "Break",
      range: {
        min: 11,
        max: 11,
      },
    },
    {
      text: "Risk",
      range: {
        min: 12,
        max: 12,
      },
    },
    {
      text: "Surrender",
      range: {
        min: 13,
        max: 13,
      },
    },
    {
      text: "Inspect",
      range: {
        min: 14,
        max: 14,
      },
    },
    {
      text: "Raid",
      range: {
        min: 15,
        max: 15,
      },
    },
    {
      text: "Evade",
      range: {
        min: 16,
        max: 16,
      },
    },
    {
      text: "Assault",
      range: {
        min: 17,
        max: 17,
      },
    },
    {
      text: "Deflect",
      range: {
        min: 18,
        max: 18,
      },
    },
    {
      text: "Threaten",
      range: {
        min: 19,
        max: 19,
      },
    },
    {
      text: "Attack",
      range: {
        min: 20,
        max: 20,
      },
    },
    {
      text: "Leave",
      range: {
        min: 21,
        max: 21,
      },
    },
    {
      text: "Preserve",
      range: {
        min: 22,
        max: 22,
      },
    },
    {
      text: "Manipulate",
      range: {
        min: 23,
        max: 23,
      },
    },
    {
      text: "Remove",
      range: {
        min: 24,
        max: 24,
      },
    },
    {
      text: "Eliminate",
      range: {
        min: 25,
        max: 25,
      },
    },
    {
      text: "Withdraw",
      range: {
        min: 26,
        max: 26,
      },
    },
    {
      text: "Abandon",
      range: {
        min: 27,
        max: 27,
      },
    },
    {
      text: "Investigate",
      range: {
        min: 28,
        max: 28,
      },
    },
    {
      text: "Hold",
      range: {
        min: 29,
        max: 29,
      },
    },
    {
      text: "Focus",
      range: {
        min: 30,
        max: 30,
      },
    },
    {
      text: "Uncover",
      range: {
        min: 31,
        max: 31,
      },
    },
    {
      text: "Breach",
      range: {
        min: 32,
        max: 32,
      },
    },
    {
      text: "Aid",
      range: {
        min: 33,
        max: 33,
      },
    },
    {
      text: "Uphold",
      range: {
        min: 34,
        max: 34,
      },
    },
    {
      text: "Falter",
      range: {
        min: 35,
        max: 35,
      },
    },
    {
      text: "Suppress",
      range: {
        min: 36,
        max: 36,
      },
    },
    {
      text: "Hunt",
      range: {
        min: 37,
        max: 37,
      },
    },
    {
      text: "Share",
      range: {
        min: 38,
        max: 38,
      },
    },
    {
      text: "Destroy",
      range: {
        min: 39,
        max: 39,
      },
    },
    {
      text: "Avoid",
      range: {
        min: 40,
        max: 40,
      },
    },
    {
      text: "Reject",
      range: {
        min: 41,
        max: 41,
      },
    },
    {
      text: "Demand",
      range: {
        min: 42,
        max: 42,
      },
    },
    {
      text: "Explore",
      range: {
        min: 43,
        max: 43,
      },
    },
    {
      text: "Bolster",
      range: {
        min: 44,
        max: 44,
      },
    },
    {
      text: "Seize",
      range: {
        min: 45,
        max: 45,
      },
    },
    {
      text: "Mourn",
      range: {
        min: 46,
        max: 46,
      },
    },
    {
      text: "Reveal",
      range: {
        min: 47,
        max: 47,
      },
    },
    {
      text: "Gather",
      range: {
        min: 48,
        max: 48,
      },
    },
    {
      text: "Defy",
      range: {
        min: 49,
        max: 49,
      },
    },
    {
      text: "Transform",
      range: {
        min: 50,
        max: 50,
      },
    },
    {
      text: "Persevere",
      range: {
        min: 51,
        max: 51,
      },
    },
    {
      text: "Serve",
      range: {
        min: 52,
        max: 52,
      },
    },
    {
      text: "Begin",
      range: {
        min: 53,
        max: 53,
      },
    },
    {
      text: "Move",
      range: {
        min: 54,
        max: 54,
      },
    },
    {
      text: "Coordinate",
      range: {
        min: 55,
        max: 55,
      },
    },
    {
      text: "Resist",
      range: {
        min: 56,
        max: 56,
      },
    },
    {
      text: "Await",
      range: {
        min: 57,
        max: 57,
      },
    },
    {
      text: "Impress",
      range: {
        min: 58,
        max: 58,
      },
    },
    {
      text: "Take",
      range: {
        min: 59,
        max: 59,
      },
    },
    {
      text: "Oppose",
      range: {
        min: 60,
        max: 60,
      },
    },
    {
      text: "Capture",
      range: {
        min: 61,
        max: 61,
      },
    },
    {
      text: "Overwhelm",
      range: {
        min: 62,
        max: 62,
      },
    },
    {
      text: "Challenge",
      range: {
        min: 63,
        max: 63,
      },
    },
    {
      text: "Acquire",
      range: {
        min: 64,
        max: 64,
      },
    },
    {
      text: "Protect",
      range: {
        min: 65,
        max: 65,
      },
    },
    {
      text: "Finish",
      range: {
        min: 66,
        max: 66,
      },
    },
    {
      text: "Strengthen",
      range: {
        min: 67,
        max: 67,
      },
    },
    {
      text: "Restore",
      range: {
        min: 68,
        max: 68,
      },
    },
    {
      text: "Advance",
      range: {
        min: 69,
        max: 69,
      },
    },
    {
      text: "Command",
      range: {
        min: 70,
        max: 70,
      },
    },
    {
      text: "Refuse",
      range: {
        min: 71,
        max: 71,
      },
    },
    {
      text: "Find",
      range: {
        min: 72,
        max: 72,
      },
    },
    {
      text: "Deliver",
      range: {
        min: 73,
        max: 73,
      },
    },
    {
      text: "Hide",
      range: {
        min: 74,
        max: 74,
      },
    },
    {
      text: "Fortify",
      range: {
        min: 75,
        max: 75,
      },
    },
    {
      text: "Betray",
      range: {
        min: 76,
        max: 76,
      },
    },
    {
      text: "Secure",
      range: {
        min: 77,
        max: 77,
      },
    },
    {
      text: "Arrive",
      range: {
        min: 78,
        max: 78,
      },
    },
    {
      text: "Affect",
      range: {
        min: 79,
        max: 79,
      },
    },
    {
      text: "Change",
      range: {
        min: 80,
        max: 80,
      },
    },
    {
      text: "Defend",
      range: {
        min: 81,
        max: 81,
      },
    },
    {
      text: "Debate",
      range: {
        min: 82,
        max: 82,
      },
    },
    {
      text: "Support",
      range: {
        min: 83,
        max: 83,
      },
    },
    {
      text: "Follow",
      range: {
        min: 84,
        max: 84,
      },
    },
    {
      text: "Construct",
      range: {
        min: 85,
        max: 85,
      },
    },
    {
      text: "Locate",
      range: {
        min: 86,
        max: 86,
      },
    },
    {
      text: "Endure",
      range: {
        min: 87,
        max: 87,
      },
    },
    {
      text: "Release",
      range: {
        min: 88,
        max: 88,
      },
    },
    {
      text: "Lose",
      range: {
        min: 89,
        max: 89,
      },
    },
    {
      text: "Reduce",
      range: {
        min: 90,
        max: 90,
      },
    },
    {
      text: "Escalate",
      range: {
        min: 91,
        max: 91,
      },
    },
    {
      text: "Distract",
      range: {
        min: 92,
        max: 92,
      },
    },
    {
      text: "Journey",
      range: {
        min: 93,
        max: 93,
      },
    },
    {
      text: "Escort",
      range: {
        min: 94,
        max: 94,
      },
    },
    {
      text: "Learn",
      range: {
        min: 95,
        max: 95,
      },
    },
    {
      text: "Communicate",
      range: {
        min: 96,
        max: 96,
      },
    },
    {
      text: "Depart",
      range: {
        min: 97,
        max: 97,
      },
    },
    {
      text: "Search",
      range: {
        min: 98,
        max: 98,
      },
    },
    {
      text: "Charge",
      range: {
        min: 99,
        max: 99,
      },
    },
    {
      text: "Summon",
      range: {
        min: 100,
        max: 100,
      },
    },
  ]
);
