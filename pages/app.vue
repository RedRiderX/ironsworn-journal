<template>
  <div class="flex h-screen">
    <main class="flex-1 bg-gray-100 order-2 flex flex-col items-center">
      <section class="activity-log flex-1 overflow-y-auto py-4 max-w-2xl">
        <article class="log-item log-item--text my-4 mx-2">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro consectetur tempora suscipit aperiam et eum earum dolor rem distinctio dolorum cupiditate, reiciendis incidunt possimus, obcaecati repellat omnis! Inventore, suscipit hic.</p>
        </article>
        <hr>
        <article class="log-item log-item--meta log-item--move my-4 max-w-xs mx-auto">
          <h1 class="text-xl font-display text-center mb-2">Swear an Iron Vow</h1>
          <div class="dice-roll bg-gray-500 flex p-2">
            <div class="action-score flex-1 flex flex-col items-center">
              <h2 class="text-center font-bold">Action Score</h2>
              <div
                class="action-score__value bg-gray-100 font-display text-3xl w-16 h-16 m-1 flex items-center justify-center border-gray-800 border-4 rounded-full"
              >
                <span class="leading-none">6</span>
              </div>
            </div>
            <div class="challenge-dice flex-1">
              <h2 class="text-center font-bold">Challenge Dice</h2>
              <div class="challenge-dice__rolls flex justify-center">
                <div
                  class="challenge-dice-roll flex-shrink relative bg-gray-100 font-display text-3xl w-16 h-16 m-1 flex items-center justify-center border-gray-800 border-4"
                >
                  <span class="leading-none">4</span>
                  <div class="status status--hit absolute right-0 bottom-0">
                    <CheckIcon class="w-6 h-6 fill-current text-green-500"/>
                  </div>
                </div>
                <div
                  class="challenge-dice-roll flex-shrink relative bg-gray-100 font-display text-3xl w-16 h-16 m-1 flex items-center justify-center border-gray-800 border-4"
                >
                  <span class="leading-none">8</span>
                  <div class="status status--miss absolute right-0 bottom-0">
                    <CrossIcon class="w-6 h-6 fill-current text-red-600"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="dice-roll-result bg-gray-300 text-center uppercase tracking-wide p-1">Weak Hit</div>
          <div class="move-result mt-3 mx-3">
            <p>
              On a
              <strong>weak hit</strong>, you are determined but begin your quest with more questions than answers. Take +1 momentum, and envision what you do to find a path forward.
            </p>
          </div>
        </article>
      </section>
      <section class="w-full max-w-xl my-4 mx-2">
        <DiceRoller/>
        <div class="log-input flex flex-col">
          <BasicEditor class="bg-white border border-gray-400 p-2 mb-2" style="min-height: 7rem;"/>
          <button
            class="bg-gray-600 text-white font-bold uppercase text-sm rounded py-2 px-4 self-center"
          >Save to Journal</button>
        </div>
      </section>
    </main>
    <aside class="max-w-sm bg-gray-200 order-1 p-2 overflow-y-auto">
      <h1 class="font-display text-3xl mb-1" contenteditable="true">Character Name</h1>
      <div class="main-stats bg-gray-300 -mx-2 mb-3 p-3 pb-4 flex justify-around items-start">
        <div class="main-stat main-stat--edge flex flex-col items-center">
          <div class="main-stat__label uppercase text-sm tracking-wide">Edge</div>
          <div class="main-stat__value font-display text-2xl leading-none">1</div>
        </div>
        <div class="main-stat main-stat--heart flex flex-col items-center">
          <div class="main-stat__label uppercase text-sm tracking-wide">Heart</div>
          <div class="main-stat__value font-display text-2xl leading-none">2</div>
        </div>
        <div class="main-stat main-stat--iron flex flex-col items-center">
          <div class="main-stat__label uppercase text-sm tracking-wide">Iron</div>
          <div class="main-stat__value font-display text-2xl leading-none">3</div>
        </div>
        <div class="main-stat main-stat--shadow flex flex-col items-center">
          <div class="main-stat__label uppercase text-sm tracking-wide">Shadow</div>
          <div class="main-stat__value font-display text-2xl leading-none">1</div>
        </div>
        <div class="main-stat main-stat--wits flex flex-col items-center">
          <div class="main-stat__label uppercase text-sm tracking-wide">Wits</div>
          <div class="main-stat__value font-display text-2xl leading-none">2</div>
        </div>
      </div>
      <div class="resource-stats flex justify-around">
        <div
          class="resource-stat resource-stat--health w-20 my-3 bg-white border-gray-300 border flex flex-col items-center"
        >
          <div
            class="main-stat__label uppercase text-sm tracking-wide bg-gray-300 self-stretch text-center"
          >Health</div>
          <div class="main-stat__value font-display text-2xl leading-none p-2 pb-3">+5</div>
        </div>
        <div
          class="resource-spirit resource-stat--health w-20 my-3 bg-white border-gray-300 border flex flex-col items-center"
        >
          <div
            class="main-stat__label uppercase text-sm tracking-wide bg-gray-300 self-stretch text-center"
          >Spirit</div>
          <div class="main-stat__value font-display text-2xl leading-none p-2 pb-3">+3</div>
        </div>
        <div
          class="resource-supply resource-stat--health w-20 my-3 bg-white border-gray-300 border flex flex-col items-center"
        >
          <div
            class="main-stat__label uppercase text-sm tracking-wide bg-gray-300 self-stretch text-center"
          >Supply</div>
          <div class="main-stat__value font-display text-2xl leading-none p-2 pb-3">+2</div>
        </div>
      </div>
      <h2 class="text-center -mb-3 uppercase">
        <span class="inline-block px-2 bg-gray-200">Momentum</span>
      </h2>
      <div class="momentum-stats flex justify-around border-gray-500 border pt-1 mb-3">
        <div
          class="momentum-stat momentum-stat--total w-20 my-3 bg-white border-gray-300 border flex flex-col items-center"
        >
          <div class="main-stat__value font-display text-2xl leading-none p-2 pb-3">+7</div>
          <div
            class="main-stat__label uppercase text-sm tracking-wide bg-gray-300 self-stretch text-center"
          >Total</div>
        </div>
        <div
          class="momentum-stat momentum-stat--max w-20 my-3 bg-white border-gray-300 border flex flex-col items-center"
        >
          <div class="main-stat__value font-display text-2xl leading-none p-2 pb-3">9</div>
          <div
            class="main-stat__label uppercase text-sm tracking-wide bg-gray-300 self-stretch text-center"
          >Max</div>
        </div>
        <div
          class="momentum-stat momentum-stat--reset w-20 my-3 bg-white border-gray-300 border flex flex-col items-center"
        >
          <div class="main-stat__value font-display text-2xl leading-none p-2 pb-3">1</div>
          <div
            class="main-stat__label uppercase text-sm tracking-wide bg-gray-300 self-stretch text-center"
          >Reset</div>
        </div>
      </div>
      <section class="debilities mb-3">
        <header class="flex justify-between mb-1">
          <h1 class="text-lg font-bold">Debilities</h1>
          <button class>
            <span class="align-middle leading-none">Add</span>
            <AddIcon class="inline-block align-middle"/>
          </button>
        </header>
        <article class="debility bg-white border border-gray-500 p-2">
          <header class="flex justify-between items-start mb-1">
            <h1 class="font-bold text-lg">Wounded</h1>
            <button>
              <CollapseIcon/>
            </button>
          </header>
          <div class="debility__text">
            <p>
              Wounded may be marked when you are at 0 health and fail to
              <em>Endure Harm (page 91)</em>. You are severely injured and need treatment to recover.
            </p>
          </div>
        </article>
      </section>
      <section class="vows mb-3">
        <header class="flex justify-between mb-1">
          <h1 class="text-lg font-bold">Vows</h1>
          <button class>
            <span class="align-middle leading-none">Add</span>
            <AddIcon class="inline-block align-middle"/>
          </button>
        </header>
        <article class="vow bg-white border border-gray-500 p-2">
          <header class="flex justify-between items-start mb-1">
            <div class="title-wrapper">
              <h1 class="font-bold text-lg">Found the City of Hope</h1>
              <h2 class="subtitle uppercase text-sm leading-none tracking-wide">Epic Vow</h2>
            </div>
            <button>
              <CollapseIcon/>
            </button>
          </header>
          <div class="vow__progress-track progress-track flex -mx-2 my-2">
            <div
              class="progress-box flex-1 border border-gray-500 flex justify-center items-center"
              style="margin-left: -1px;"
            >
              <ProgressFullIcon class="w-8 h-8"/>
            </div>
            <div
              class="progress-box flex-1 border border-gray-500 flex justify-center items-center"
              style="margin-left: -1px;"
            >
              <ProgressThreeQuarterIcon class="w-8 h-8"/>
            </div>
            <div
              class="progress-box flex-1 border border-gray-500 flex justify-center items-center"
              style="margin-left: -1px;"
            >
              <ProgressHalfIcon class="w-8 h-8"/>
            </div>
            <div
              class="progress-box flex-1 border border-gray-500 flex justify-center items-center"
              style="margin-left: -1px;"
            >
              <ProgressQuarterIcon class="w-8 h-8"/>
            </div>
            <div
              class="progress-box flex-1 border border-gray-500 flex justify-center items-center"
              style="margin-left: -1px;"
            ></div>
            <div
              class="progress-box flex-1 border border-gray-500 flex justify-center items-center"
              style="margin-left: -1px;"
            ></div>
            <div
              class="progress-box flex-1 border border-gray-500 flex justify-center items-center"
              style="margin-left: -1px;"
            ></div>
            <div
              class="progress-box flex-1 border border-gray-500 flex justify-center items-center"
              style="margin-left: -1px;"
            ></div>
            <div
              class="progress-box flex-1 border border-gray-500 flex justify-center items-center"
              style="margin-left: -1px;"
            ></div>
            <div
              class="progress-box flex-1 border border-gray-500 flex justify-center items-center"
              style="margin-right: -1px;margin-left: -1px;"
            ></div>
          </div>
          <div class="vow__notes">
            <h3 class="vow-notes__title font-bold uppercase text-sm">Notes</h3>
            <div class="vow-notes__content" contenteditable="true">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro consectetur tempora suscipit aperiam</p>
            </div>
          </div>
        </article>
      </section>
      <section class="assets mb-3">
        <header class="flex justify-between items-center mb-1">
          <h1 class="text-lg font-bold">Assets</h1>
          <div class="exp text-sm flex-1 flex justify-center">
            <span class="bg-gray-200 relative px-2">3 EXP</span>
          </div>
          <button class>
            <span class="align-middle leading-none">Add</span>
            <AddIcon class="inline-block align-middle"/>
          </button>
        </header>
        <article class="asset bg-white border border-gray-500 p-2">
          <header class="flex justify-between items-start mb-2">
            <div class="title-wrapper">
              <h1 class="font-bold text-lg">
                <span class="asset__name" contenteditable="true">Companion Name</span> - Hawk
              </h1>
              <h2 class="subtitle uppercase text-sm leading-none tracking-wide">Companion</h2>
            </div>
            <button>
              <CollapseIcon/>
            </button>
          </header>
          <div class="asset__description mb-2">
            <p>Your hawk can aid you when it is aloft.</p>
          </div>
          <div class="asset__abilities">
            <div class="asset-ability border-t border-t-gray-500 mt-1 pt-1">
              <label for>
                <input type="checkbox" class="mr-1">
                <strong>Far-seeing:</strong> When you
                <em>Undertake a Journey</em>, or when you
                <em>Resupply</em> by hunting for small game, add +1.
              </label>
            </div>
            <div class="asset-ability border-t border-t-gray-500 mt-1 pt-1">
              <label for>
                <input type="checkbox" class="mr-1">
                <strong>Fierce:</strong> When you
                <em>Secure an Advantage</em> +edge using your hawk to harass and distract your foes, add +1 and take +1 momentum on a hit.
              </label>
            </div>
            <div class="asset-ability border-t border-t-gray-500 mt-1 pt-1">
              <label for>
                <input type="checkbox" class="mr-1">
                <strong>Vigilant:</strong> When you
                <em>Face Danger</em> +wits to detect an approaching threat, or when you
                <em>Enter the Fray</em> +wits against an ambush, add +2.
              </label>
            </div>
          </div>
          <div class="asset__resource-stats resource-stats flex justify-around">
            <div
              class="resource-stat resource-stat--health w-20 my-3 bg-white border-gray-300 border flex flex-col items-center"
            >
              <div
                class="main-stat__label uppercase text-sm tracking-wide bg-gray-300 self-stretch text-center"
              >Health</div>
              <div class="main-stat__value font-display text-2xl leading-none p-2 pb-3">+3</div>
            </div>
          </div>
        </article>
      </section>
    </aside>
    <aside class="max-w-sm bg-gray-200 order-3 overflow-y-auto">
      <section class="map p-2 border-b border-gray-600">
        <header class="sticky top-0 bg-gray-200 flex justify-between items-center mb-1">
          <h1 class="text-2xl font-bold">Map</h1>
          <button class>
            <span class="align-middle leading-none">Add</span>
            <AddIcon class="inline-block align-middle"/>
          </button>
          <button>
            <CollapseIcon/>
          </button>
        </header>
        <div class="map-wrapper bg-white border border-gray-600 mb-2">
          <img src="/ironlands-map.svg" alt="Ironlands Map">
        </div>
        <article class="poi mb-2">
          <header class="flex items-center mb-1">
            <div
              class="poi__number bg-gray-100 font-display text-lg w-6 h-6 mr-2 flex items-center justify-center border-gray-800 border rounded-full"
            >
              <span class="leading-none">1</span>
            </div>
            <h1 class="font-bold text-lg" contenteditable="true">Goodlanding (Wild, Rough, Withered)</h1>
          </header>
          <div class="poi__notes" contenteditable="true">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro consectetur tempora suscipit aperiam</p>
          </div>
        </article>
        <article class="poi mb-2">
          <header class="flex items-center mb-1">
            <div
              class="poi__number bg-gray-100 font-display text-lg w-6 h-6 mr-2 flex items-center justify-center border-gray-800 border rounded-full"
            >
              <span class="leading-none">2</span>
            </div>
            <h1 class="font-bold text-lg" contenteditable="true">Qui eum quod fugit corrupti.</h1>
          </header>
          <div class="poi__notes" contenteditable="true">
            <p>Minima ab deserunt praesentium cumque nulla voluptate vitae ullam. Aut dolor ullam commodi qui odio sunt quis vitae.</p>
          </div>
        </article>
      </section>
      <section class="world p-2 border-b border-gray-600">
        <header class="sticky top-0 bg-gray-200 flex justify-between items-center mb-1">
          <h1 class="text-2xl font-bold">Your World</h1>
          <button>
            <CollapseIcon/>
          </button>
        </header>
        <input
          class="border-2 border-gray-300 bg-white mb-2 px-5 rounded-lg text-sm focus:outline-none w-full leading-loose inline-block"
          type="search"
          name="search"
          placeholder="Search"
        >
        <article class="world__content mb-2" contenteditable="true">
          <h1 class="font-display font-bold text-lg">The Old World</h1>
          <p>The sickness moved like a horrible wave across the Old World, killing all in its path. Thousands fled aboard ships. However, the plague could not be outrun. On many ships, the disease was contained through ruthless measures—tossing overboard any who exhibited the slightest symptom. Other ships were forever lost. In the end, those who survived found the Ironlands and made it their new home. Some say we will forever be cursed by those we left behind.</p>
          <h1 class="font-display font-bold text-lg">Iron</h1>
          <p>Inscrutable metal pillars are found throughout the land. They are iron gray, and smooth as river stone. No one knows their purpose. Some say they are as old as the world. Some, such as the Iron Priests, worship them and swear vows upon them. Most make the warding sign and hurry along their way when they happen across one. The pillars do not tarnish,and even the sharpest blade cannot mark them.</p>
          <h1 class="font-display font-bold text-lg">Legacies</h1>
          <p>We are the first humans to walk these lands.</p>
        </article>
      </section>
      <section class="moves p-2 border-b border-gray-600">
        <header class="sticky top-0 flex justify-between items-center mb-1">
          <h1 class="text-2xl font-bold">Moves</h1>
          <button>
            <CollapseIcon/>
          </button>
        </header>
        <input
          class="border-2 border-gray-300 bg-white mb-2 px-5 rounded-lg text-sm focus:outline-none w-full leading-loose inline-block"
          type="search"
          name="search"
          placeholder="Search"
        >
        <section class="moves__adventure">
          <header class="sticky top-0 bg-gray-600 text-white px-2 py-1 -mx-2 mb-2">
            <h1 class="text-xl font-bold font-display">Adventure Moves</h1>
          </header>
          <article class="move__face-danger mb-2 pb-2 border-b border-gray-500">
            <h1 class="text-lg font-bold font-display">Face Danger</h1>
            <div class="move__description">
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
            </div>
            <DiceRoller/>
            <div class="move__results">
              <header class="flex justify-between items-center mb-1">
                <h1 class>Move Results</h1>
                <button>
                  <CollapseIcon/>
                </button>
              </header>
              <p>
                On a
                <strong>strong hit</strong>, you are successful. Take +1 momentum.
              </p>
              <p>
                On a
                <strong>weak hit</strong>, you succeed, but face a troublesome cost. Choose one.
              </p>
              <ul class="list-disc list-inside ml-3 my-2">
                <li>You are delayed, lose advantage, or face a new danger: Suffer -1 momentum.</li>
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
                <strong>miss</strong>, you fail, or your progress is undermined by a dramatic and costly turn of events.
                <em>Pay the Price</em>.
              </p>
            </div>
          </article>
          <article class="move__face-danger mb-2 pb-2 border-b border-gray-500">
            <h1 class="text-lg font-bold font-display">Face Danger</h1>
            <div class="move__description">
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
            </div>
            <DiceRoller/>
            <div class="move__results">
              <header class="flex justify-between items-center mb-1">
                <h1 class>Move Results</h1>
                <button>
                  <CollapseIcon/>
                </button>
              </header>
              <p>
                On a
                <strong>strong hit</strong>, you are successful. Take +1 momentum.
              </p>
              <p>
                On a
                <strong>weak hit</strong>, you succeed, but face a troublesome cost. Choose one.
              </p>
              <ul class="list-disc list-inside ml-3 my-2">
                <li>You are delayed, lose advantage, or face a new danger: Suffer -1 momentum.</li>
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
                <strong>miss</strong>, you fail, or your progress is undermined by a dramatic and costly turn of events.
                <em>Pay the Price</em>.
              </p>
            </div>
          </article>
        </section>
      </section>
      <section class="moves p-2 border-b border-gray-600">
        <header class="sticky top-0 flex justify-between items-center mb-1">
          <h1 class="text-2xl font-bold">Moves</h1>
          <button>
            <CollapseIcon/>
          </button>
        </header>
        <input
          class="border-2 border-gray-300 bg-white mb-2 px-5 rounded-lg text-sm focus:outline-none w-full leading-loose inline-block"
          type="search"
          name="search"
          placeholder="Search"
        >
        <section class="moves__adventure">
          <header class="sticky top-0 bg-gray-600 text-white px-2 py-1 -mx-2 mb-2">
            <h1 class="text-xl font-bold font-display">Adventure Moves</h1>
          </header>
          <article class="move__face-danger mb-2 pb-2 border-b border-gray-500">
            <h1 class="text-lg font-bold font-display">Face Danger</h1>
            <div class="move__description">
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
            </div>
            <DiceRoller/>
            <div class="move__results">
              <header class="flex justify-between items-center mb-1">
                <h1 class>Move Results</h1>
                <button>
                  <CollapseIcon/>
                </button>
              </header>
              <p>
                On a
                <strong>strong hit</strong>, you are successful. Take +1 momentum.
              </p>
              <p>
                On a
                <strong>weak hit</strong>, you succeed, but face a troublesome cost. Choose one.
              </p>
              <ul class="list-disc list-inside ml-3 my-2">
                <li>You are delayed, lose advantage, or face a new danger: Suffer -1 momentum.</li>
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
                <strong>miss</strong>, you fail, or your progress is undermined by a dramatic and costly turn of events.
                <em>Pay the Price</em>.
              </p>
            </div>
          </article>
          <article class="move__face-danger mb-2 pb-2 border-b border-gray-500">
            <h1 class="text-lg font-bold font-display">Face Danger</h1>
            <div class="move__description">
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
            </div>
            <DiceRoller/>
            <div class="move__results">
              <header class="flex justify-between items-center mb-1">
                <h1 class>Move Results</h1>
                <button>
                  <CollapseIcon/>
                </button>
              </header>
              <p>
                On a
                <strong>strong hit</strong>, you are successful. Take +1 momentum.
              </p>
              <p>
                On a
                <strong>weak hit</strong>, you succeed, but face a troublesome cost. Choose one.
              </p>
              <ul class="list-disc list-inside ml-3 my-2">
                <li>You are delayed, lose advantage, or face a new danger: Suffer -1 momentum.</li>
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
                <strong>miss</strong>, you fail, or your progress is undermined by a dramatic and costly turn of events.
                <em>Pay the Price</em>.
              </p>
            </div>
          </article>
        </section>
      </section>
    </aside>
  </div>
</template>

<script>
import DiceRoller from "~/components/DiceRoller.vue";
import BasicEditor from "~/components/BasicEditor.vue";
import CheckIcon from "~/assets/icons/check.svg";
import CrossIcon from "~/assets/icons/cross.svg";
import AddIcon from "~/assets/icons/add.svg";
import CollapseIcon from "~/assets/icons/expand_less.svg";
import ProgressFullIcon from "~/assets/icons/progress-wheel-full.svg";
import ProgressThreeQuarterIcon from "~/assets/icons/progress-wheel-three-quarter.svg";
import ProgressHalfIcon from "~/assets/icons/progress-wheel-half.svg";
import ProgressQuarterIcon from "~/assets/icons/progress-wheel-quarter.svg";

export default {
  components: {
    DiceRoller,
    BasicEditor,
    CheckIcon,
    CrossIcon,
    AddIcon,
    CollapseIcon,
    ProgressFullIcon,
    ProgressThreeQuarterIcon,
    ProgressHalfIcon,
    ProgressQuarterIcon
  }
};
</script>

<style scoped>
.assets .exp {
  position: relative;
}
.assets .exp:before {
  content: "";
  position: absolute;
  top: 50%;
  left: 0.5rem;
  right: 0.5rem;
  border-bottom: 1px solid theme("colors.gray.600");
}
</style>
