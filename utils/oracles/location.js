import Oracle from "./Oracle";

export default new Oracle(
  "Location",
  `<p>
    Use this oracle when traveling to generate a point-of-interest or to answer a
    question about a place where someone or something can be found.
  </p>
  <p>
    Your roll may generate a place or geographical feature which doesn’t make
    sense in the context of your current location. If so, follow the guidelines on
    page 167 to generate a different result (look at adjacent rows or reverse the
    digits). Or, play off the original answer to introduce something unexpected.
  </p>
  <blockquote>
    <p>
      You ask, “Where was the traveling mystic bound?”
    </p>
    <p>
      The Location oracle answers, “River.” You decide she traveled south
      from the village aboard a merchant’s boat.
    </p>
  </blockquote>`,
  [
    {
      text: "Hideout",
      range: {
        min: 1,
        max: 1,
      },
    },
    {
      text: "Ruin",
      range: {
        min: 2,
        max: 2,
      },
    },
    {
      text: "Mine",
      range: {
        min: 3,
        max: 3,
      },
    },
    {
      text: "Waste",
      range: {
        min: 4,
        max: 4,
      },
    },
    {
      text: "Mystical Site",
      range: {
        min: 5,
        max: 5,
      },
    },
    {
      text: "Path",
      range: {
        min: 6,
        max: 6,
      },
    },
    {
      text: "Outpost",
      range: {
        min: 7,
        max: 7,
      },
    },
    {
      text: "Wall",
      range: {
        min: 8,
        max: 8,
      },
    },
    {
      text: "Battlefield",
      range: {
        min: 9,
        max: 9,
      },
    },
    {
      text: "Hovel",
      range: {
        min: 10,
        max: 10,
      },
    },
    {
      text: "Spring",
      range: {
        min: 11,
        max: 11,
      },
    },
    {
      text: "Lair",
      range: {
        min: 12,
        max: 12,
      },
    },
    {
      text: "Fort",
      range: {
        min: 13,
        max: 13,
      },
    },
    {
      text: "Bridge",
      range: {
        min: 14,
        max: 14,
      },
    },
    {
      text: "Camp",
      range: {
        min: 15,
        max: 15,
      },
    },
    {
      text: "Cairn/Grave",
      range: {
        min: 16,
        max: 16,
      },
    },
    {
      text: "Caravan",
      range: {
        min: 17,
        max: 18,
      },
    },
    {
      text: "Waterfall",
      range: {
        min: 19,
        max: 20,
      },
    },
    {
      text: "Cave",
      range: {
        min: 21,
        max: 22,
      },
    },
    {
      text: "Swamp",
      range: {
        min: 23,
        max: 24,
      },
    },
    {
      text: "Fen",
      range: {
        min: 25,
        max: 26,
      },
    },
    {
      text: "Ravine",
      range: {
        min: 27,
        max: 28,
      },
    },
    {
      text: "Road",
      range: {
        min: 29,
        max: 30,
      },
    },
    {
      text: "Tree",
      range: {
        min: 31,
        max: 32,
      },
    },
    {
      text: "Pond",
      range: {
        min: 33,
        max: 34,
      },
    },
    {
      text: "Fields",
      range: {
        min: 35,
        max: 36,
      },
    },
    {
      text: "Marsh",
      range: {
        min: 37,
        max: 38,
      },
    },
    {
      text: "Steading",
      range: {
        min: 39,
        max: 40,
      },
    },
    {
      text: "Rapids",
      range: {
        min: 41,
        max: 42,
      },
    },
    {
      text: "Pass",
      range: {
        min: 43,
        max: 44,
      },
    },
    {
      text: "Trail",
      range: {
        min: 45,
        max: 46,
      },
    },
    {
      text: "Glade",
      range: {
        min: 47,
        max: 48,
      },
    },
    {
      text: "Plain",
      range: {
        min: 49,
        max: 50,
      },
    },
    {
      text: "Ridge",
      range: {
        min: 51,
        max: 52,
      },
    },
    {
      text: "Cliff",
      range: {
        min: 53,
        max: 54,
      },
    },
    {
      text: "Grove",
      range: {
        min: 55,
        max: 56,
      },
    },
    {
      text: "Village",
      range: {
        min: 57,
        max: 58,
      },
    },
    {
      text: "Moor",
      range: {
        min: 59,
        max: 60,
      },
    },
    {
      text: "Thicket",
      range: {
        min: 61,
        max: 62,
      },
    },
    {
      text: "River Ford",
      range: {
        min: 63,
        max: 64,
      },
    },
    {
      text: "Valley",
      range: {
        min: 65,
        max: 66,
      },
    },
    {
      text: "Bay/Fjord",
      range: {
        min: 67,
        max: 68,
      },
    },
    {
      text: "Foothills",
      range: {
        min: 69,
        max: 70,
      },
    },
    {
      text: "Lake",
      range: {
        min: 71,
        max: 72,
      },
    },
    {
      text: "River",
      range: {
        min: 73,
        max: 75,
      },
    },
    {
      text: "Forest",
      range: {
        min: 76,
        max: 79,
      },
    },
    {
      text: "Coast",
      range: {
        min: 80,
        max: 83,
      },
    },
    {
      text: "Hill",
      range: {
        min: 84,
        max: 88,
      },
    },
    {
      text: "Mountain",
      range: {
        min: 89,
        max: 93,
      },
    },
    {
      text: "Woods",
      range: {
        min: 94,
        max: 99,
      },
    },
    {
      text: "Anomaly",
      range: {
        min: 100,
        max: 100,
      },
    },
  ]
);
