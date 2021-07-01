export const state = () => ({
  "0e1d7442-bdf7-4f04-9032-ebe0658879f7": {
    name: "Face Danger",
    description: `
      <p>
      When
      <strong>you attempt something risky or react to an imminent threat</strong>,
      envision your action and roll. If you act...
    </p>
    <ul class="list-disc list-inside ml-3 my-2">
      <li>With speed, agility, or precision: Roll +edge.</li>
      <li>With charm, loyalty, or courage: Roll +heart.</li>
      <li>With aggressive action, forceful defense, strength, or endurance: Roll +iron.</li>
      <li>With deception, stealth, or trickery: Roll +shadow.</li>
      <li>With expertise, insight, or observation: Roll +wits.</li>
    </ul>
`,
    actions: [
      {
        type: "roll",
        stats: [""],
        addNum: true,
      },
    ],
    notes: "<p>foo</p>",
  },
  // {
  //   uuid: "7d950f60-4c8c-4748-90d8-be0a6ee2e2a8",
  //   name: "foo",
  //   rank: "epic",
  //   progress: 2,
  //   notes: "<p>bar</p>",
  // },
});
