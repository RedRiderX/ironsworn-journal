import Oracle from "./Oracle";

export default new Oracle(
  "Region",
  `<p>Use this oracle when you want to randomly select a region with the Ironlands.</p>`,
  [
    {
      text: "Barrier Islands",
      range: {
        min: 1,
        max: 12,
      },
    },
    {
      text: "Ragged Coast",
      range: {
        min: 13,
        max: 24,
      },
    },
    {
      text: "Deep Wilds",
      range: {
        min: 25,
        max: 34,
      },
    },
    {
      text: "Flooded Lands",
      range: {
        min: 35,
        max: 46,
      },
    },
    {
      text: "Havens",
      range: {
        min: 47,
        max: 60,
      },
    },
    {
      text: "Hinterlands",
      range: {
        min: 61,
        max: 72,
      },
    },
    {
      text: "Tempest Hills",
      range: {
        min: 73,
        max: 84,
      },
    },
    {
      text: "Veiled Mountains",
      range: {
        min: 85,
        max: 94,
      },
    },
    {
      text: "Shattered Wastes",
      range: {
        min: 95,
        max: 99,
      },
    },
    {
      text: "Elsewhere",
      range: {
        min: 100,
        max: 100,
      },
    },
  ]
);
