<template>
  <ReferenceSection class="moves" title="Moves">
    <input
      class="border-2 border-gray-300 bg-white mb-2 px-5 rounded-lg text-sm focus:outline-none w-full leading-loose inline-block"
      type="search"
      name="search"
      placeholder="Search"
    />
    <section class="moves__adventure">
      <header class="sticky top-0 bg-gray-600 text-white px-2 py-1 -mx-2 mb-2">
        <h1 class="text-xl font-bold font-display">Adventure Moves</h1>
      </header>
      <article class="move__face-danger mb-2 pb-2 border-b border-gray-500">
        <h1 class="text-lg font-bold font-display">Face Danger</h1>
        <div class="move__description">
          <p>
            When
            <strong
              >you attempt something risky or react to an imminent
              threat</strong
            >, envision your action and roll. If you act...
          </p>
          <ul class="list-disc list-inside ml-3 my-2">
            <li>With speed, agility, or precision: Roll +edge.</li>
            <li>With charm, loyalty, or courage: Roll +heart.</li>
            <li>
              With aggressive action, forceful defense, strength, or endurance:
              Roll +iron.
            </li>
            <li>With deception, stealth, or trickery: Roll +shadow.</li>
            <li>With expertise, insight, or observation: Roll +wits.</li>
          </ul>
        </div>
        <DiceRoller />
        <div class="move__results border border-gray-400 p-1">
          <header class="flex justify-between items-center mb-1">
            <h1 class="uppercase text-sm">Move Results</h1>
            <button>
              <SvgoExpandLess />
            </button>
          </header>
          <p>
            On a
            <strong>strong hit</strong>, you are successful. Take +1 momentum.
          </p>
          <p>
            On a
            <strong>weak hit</strong>, you succeed, but face a troublesome cost.
            Choose one.
          </p>
          <ul class="list-disc list-inside ml-3 my-2">
            <li>
              You are delayed, lose advantage, or face a new danger: Suffer -1
              momentum.
            </li>
            <li>
              You are tired or hurt:
              <em>Endure Harm</em> (1 harm).
            </li>
            <li>
              You are dispirited or afraid:
              <em>Endure Stress</em> (1 stress).
            </li>
            <li>You sacrifice resources: Suffer -1 supply.</li>
          </ul>
          <p>
            On a
            <strong>miss</strong>, you fail, or your progress is undermined by a
            dramatic and costly turn of events. <em>Pay the Price</em>.
          </p>
        </div>
      </article>
    </section>
  </ReferenceSection>
</template>
