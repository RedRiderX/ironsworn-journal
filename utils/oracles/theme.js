import Oracle from "./Oracle";

export default new Oracle(
  "Theme",
  `<p>
  As with the Action oracle, this is an interpretative table which you can use
  to answer questions or generate new situations. Combined, the Action and
  Theme tables provide creative prompts suitable for most situations and
  questions. In fact, with some creative interpretations, it’s entirely possible to
  play with only these two tables
</p>
<blockquote>
  <p>
    You are sworn to recover a stolen artifact which is sacred to a community.
    In your search for suspects, you make a <em>Gather Information</em> move as
    you question the village leader.
  </p>
  <p>
    You roll a strong hit, but where do the clues lead? You <em>Ask the Oracle</em>
    and, roll against the Action and Theme tables. “Leave mysticism,” the
    oracle responds.
  </p>
  <p>
    Interpreting this result, you decide the likely suspect is a traveling
    mystic who left shortly before the theft was discovered.
  </p>
</blockquote>`,
  [
    {
      text: "Risk",
      range: {
        min: 1,
        max: 1,
      },
    },
    {
      text: "Ability",
      range: {
        min: 2,
        max: 2,
      },
    },
    {
      text: "Price",
      range: {
        min: 3,
        max: 3,
      },
    },
    {
      text: "Ally",
      range: {
        min: 4,
        max: 4,
      },
    },
    {
      text: "Battle",
      range: {
        min: 5,
        max: 5,
      },
    },
    {
      text: "Safety",
      range: {
        min: 6,
        max: 6,
      },
    },
    {
      text: "Survival",
      range: {
        min: 7,
        max: 7,
      },
    },
    {
      text: "Weapon",
      range: {
        min: 8,
        max: 8,
      },
    },
    {
      text: "Wound",
      range: {
        min: 9,
        max: 9,
      },
    },
    {
      text: "Shelter",
      range: {
        min: 10,
        max: 10,
      },
    },
    {
      text: "Leader",
      range: {
        min: 11,
        max: 11,
      },
    },
    {
      text: "Fear",
      range: {
        min: 12,
        max: 12,
      },
    },
    {
      text: "Time",
      range: {
        min: 13,
        max: 13,
      },
    },
    {
      text: "Duty",
      range: {
        min: 14,
        max: 14,
      },
    },
    {
      text: "Secret",
      range: {
        min: 15,
        max: 15,
      },
    },
    {
      text: "Innocence",
      range: {
        min: 16,
        max: 16,
      },
    },
    {
      text: "Renown",
      range: {
        min: 17,
        max: 17,
      },
    },
    {
      text: "Direction",
      range: {
        min: 18,
        max: 18,
      },
    },
    {
      text: "Death",
      range: {
        min: 19,
        max: 19,
      },
    },
    {
      text: "Honor",
      range: {
        min: 20,
        max: 20,
      },
    },
    {
      text: "Labor",
      range: {
        min: 21,
        max: 21,
      },
    },
    {
      text: "Solution",
      range: {
        min: 22,
        max: 22,
      },
    },
    {
      text: "Tool",
      range: {
        min: 23,
        max: 23,
      },
    },
    {
      text: "Balance",
      range: {
        min: 24,
        max: 24,
      },
    },
    {
      text: "Love",
      range: {
        min: 25,
        max: 25,
      },
    },
    {
      text: "Barrier",
      range: {
        min: 26,
        max: 26,
      },
    },
    {
      text: "Creation",
      range: {
        min: 27,
        max: 27,
      },
    },
    {
      text: "Decay",
      range: {
        min: 28,
        max: 28,
      },
    },
    {
      text: "Trade",
      range: {
        min: 29,
        max: 29,
      },
    },
    {
      text: "Bond",
      range: {
        min: 30,
        max: 30,
      },
    },
    {
      text: "Hope",
      range: {
        min: 31,
        max: 31,
      },
    },
    {
      text: "Superstition",
      range: {
        min: 32,
        max: 32,
      },
    },
    {
      text: "Peace",
      range: {
        min: 33,
        max: 33,
      },
    },
    {
      text: "Deception",
      range: {
        min: 34,
        max: 34,
      },
    },
    {
      text: "History",
      range: {
        min: 35,
        max: 35,
      },
    },
    {
      text: "World",
      range: {
        min: 36,
        max: 36,
      },
    },
    {
      text: "Vow",
      range: {
        min: 37,
        max: 37,
      },
    },
    {
      text: "Protection",
      range: {
        min: 38,
        max: 38,
      },
    },
    {
      text: "Nature",
      range: {
        min: 39,
        max: 39,
      },
    },
    {
      text: "Opinion",
      range: {
        min: 40,
        max: 40,
      },
    },
    {
      text: "Burden",
      range: {
        min: 41,
        max: 41,
      },
    },
    {
      text: "Vengeance",
      range: {
        min: 42,
        max: 42,
      },
    },
    {
      text: "Opportunity",
      range: {
        min: 43,
        max: 43,
      },
    },
    {
      text: "Faction",
      range: {
        min: 44,
        max: 44,
      },
    },
    {
      text: "Danger",
      range: {
        min: 45,
        max: 45,
      },
    },
    {
      text: "Corruption",
      range: {
        min: 46,
        max: 46,
      },
    },
    {
      text: "Freedom",
      range: {
        min: 47,
        max: 47,
      },
    },
    {
      text: "Debt",
      range: {
        min: 48,
        max: 48,
      },
    },
    {
      text: "Hate",
      range: {
        min: 49,
        max: 49,
      },
    },
    {
      text: "Possession",
      range: {
        min: 50,
        max: 50,
      },
    },
    {
      text: "Stranger",
      range: {
        min: 51,
        max: 51,
      },
    },
    {
      text: "Passage",
      range: {
        min: 52,
        max: 52,
      },
    },
    {
      text: "Land",
      range: {
        min: 53,
        max: 53,
      },
    },
    {
      text: "Creature",
      range: {
        min: 54,
        max: 54,
      },
    },
    {
      text: "Disease",
      range: {
        min: 55,
        max: 55,
      },
    },
    {
      text: "Advantage",
      range: {
        min: 56,
        max: 56,
      },
    },
    {
      text: "Blood",
      range: {
        min: 57,
        max: 57,
      },
    },
    {
      text: "Language",
      range: {
        min: 58,
        max: 58,
      },
    },
    {
      text: "Rumor",
      range: {
        min: 59,
        max: 59,
      },
    },
    {
      text: "Weakness",
      range: {
        min: 60,
        max: 60,
      },
    },
    {
      text: "Greed",
      range: {
        min: 61,
        max: 61,
      },
    },
    {
      text: "Family",
      range: {
        min: 62,
        max: 62,
      },
    },
    {
      text: "Resource",
      range: {
        min: 63,
        max: 63,
      },
    },
    {
      text: "Structure",
      range: {
        min: 64,
        max: 64,
      },
    },
    {
      text: "Dream",
      range: {
        min: 65,
        max: 65,
      },
    },
    {
      text: "Community",
      range: {
        min: 66,
        max: 66,
      },
    },
    {
      text: "War",
      range: {
        min: 67,
        max: 67,
      },
    },
    {
      text: "Portent",
      range: {
        min: 68,
        max: 68,
      },
    },
    {
      text: "Prize",
      range: {
        min: 69,
        max: 69,
      },
    },
    {
      text: "Destiny",
      range: {
        min: 70,
        max: 70,
      },
    },
    {
      text: "Momentum",
      range: {
        min: 71,
        max: 71,
      },
    },
    {
      text: "Power",
      range: {
        min: 72,
        max: 72,
      },
    },
    {
      text: "Memory",
      range: {
        min: 73,
        max: 73,
      },
    },
    {
      text: "Ruin",
      range: {
        min: 74,
        max: 74,
      },
    },
    {
      text: "Mysticism",
      range: {
        min: 75,
        max: 75,
      },
    },
    {
      text: "Rival",
      range: {
        min: 76,
        max: 76,
      },
    },
    {
      text: "Problem",
      range: {
        min: 77,
        max: 77,
      },
    },
    {
      text: "Idea",
      range: {
        min: 78,
        max: 78,
      },
    },
    {
      text: "Revenge",
      range: {
        min: 79,
        max: 79,
      },
    },
    {
      text: "Health",
      range: {
        min: 80,
        max: 80,
      },
    },
    {
      text: "Fellowship",
      range: {
        min: 81,
        max: 81,
      },
    },
    {
      text: "Enemy",
      range: {
        min: 82,
        max: 82,
      },
    },
    {
      text: "Religion",
      range: {
        min: 83,
        max: 83,
      },
    },
    {
      text: "Spirit",
      range: {
        min: 84,
        max: 84,
      },
    },
    {
      text: "Fame",
      range: {
        min: 85,
        max: 85,
      },
    },
    {
      text: "Desolation",
      range: {
        min: 86,
        max: 86,
      },
    },
    {
      text: "Strength",
      range: {
        min: 87,
        max: 87,
      },
    },
    {
      text: "Knowledge",
      range: {
        min: 88,
        max: 88,
      },
    },
    {
      text: "Truth",
      range: {
        min: 89,
        max: 89,
      },
    },
    {
      text: "Quest",
      range: {
        min: 90,
        max: 90,
      },
    },
    {
      text: "Pride",
      range: {
        min: 91,
        max: 91,
      },
    },
    {
      text: "Loss",
      range: {
        min: 92,
        max: 92,
      },
    },
    {
      text: "Law",
      range: {
        min: 93,
        max: 93,
      },
    },
    {
      text: "Path",
      range: {
        min: 94,
        max: 94,
      },
    },
    {
      text: "Warning",
      range: {
        min: 95,
        max: 95,
      },
    },
    {
      text: "Relationship",
      range: {
        min: 96,
        max: 96,
      },
    },
    {
      text: "Wealth",
      range: {
        min: 97,
        max: 97,
      },
    },
    {
      text: "Home",
      range: {
        min: 98,
        max: 98,
      },
    },
    {
      text: "Strategy",
      range: {
        min: 99,
        max: 99,
      },
    },
    {
      text: "Supply",
      range: {
        min: 100,
        max: 100,
      },
    },
  ]
);
