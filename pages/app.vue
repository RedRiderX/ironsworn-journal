<template>
  <div class="flex h-screen">
    <main class="flex-1 bg-gray-100 order-2 flex flex-col items-center">
      <section class="activity-log flex-1 overflow-y-auto py-4 max-w-2xl">
        <article class="log-item log-item--text my-4">
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
      <section class="w-full max-w-xl">
        <div
          class="dice-roller flex items-center justify-between border border-1 border-gray-400 p-1 bg-gray-200 mb-2"
        >
          <h1
            class="flex-shrink uppercase bg-gray-400 text-sm self-stretch -ml-1 -my-1 mr-2 p-1 flex items-center"
          >
            <span>Make A Roll</span>
          </h1>
          <div class="roll-options">
            <select name="main-stat" id>
              <option value="heart">+Heart</option>
              <option value="edge">+Edge</option>
            </select>
            <label for="modifier">Add</label>
            <input type="number" name="modifier" class="w-10">
          </div>
          <button class="bg-gray-600 text-white font-bold uppercase text-sm rounded py-2 px-4">Roll</button>
        </div>
        <div class="log-input">
          <BasicEditor class="bg-white border-1 border border-gray-400 p-2 mb-2"/>
          <button
            class="bg-gray-600 text-white font-bold uppercase text-sm rounded py-2 px-4"
          >Save to Journal</button>
        </div>
      </section>
    </main>
    <aside class="max-w-sm bg-gray-200 order-1">
      <h1 contenteditable="true">Character Name</h1>
      <div class="main-stats">
        <div class="main-stat main-stat--edge">
          <div class="main-stat__label">Edge</div>
          <div class="main-stat__value">1</div>
        </div>
        <div class="main-stat main-stat--heart">
          <div class="main-stat__label">Heart</div>
          <div class="main-stat__value">2</div>
        </div>
        <div class="main-stat main-stat--iron">
          <div class="main-stat__label">Iron</div>
          <div class="main-stat__value">3</div>
        </div>
        <div class="main-stat main-stat--shadow">
          <div class="main-stat__label">Shadow</div>
          <div class="main-stat__value">1</div>
        </div>
        <div class="main-stat main-stat--wits">
          <div class="main-stat__label">Wits</div>
          <div class="main-stat__value">2</div>
        </div>
      </div>
      <div class="resource-stats">
        <div class="resource-stat resource-stat--health">
          <div class="main-stat__label">Health</div>
          <div class="main-stat__value">+5</div>
        </div>
        <div class="resource-stat resource-stat--spirit">
          <div class="main-stat__label">Spirit</div>
          <div class="main-stat__value">+3</div>
        </div>
        <div class="resource-stat resource-stat--supply">
          <div class="main-stat__label">Supply</div>
          <div class="main-stat__value">+2</div>
        </div>
      </div>
      <div class="momentum-stats">
        <h2>Momentum</h2>
        <div class="momentum-stat momentum-stat--total">
          <div class="main-stat__value">+7</div>
          <div class="main-stat__label">Total</div>
        </div>
        <div class="momentum-stat momentum-stat--max">
          <div class="main-stat__value">9</div>
          <div class="main-stat__label">Max</div>
        </div>
        <div class="momentum-stat momentum-stat--reset">
          <div class="main-stat__value">1</div>
          <div class="main-stat__label">Reset</div>
        </div>
      </div>
      <section class="debilities">
        <header>
          <h1>Debilities</h1>
          <button>Add
            <AddIcon/>
          </button>
        </header>
        <article class="debility">
          <header>
            <h1>Wounded</h1>
            <button>Toggle</button>
          </header>
          <div class="debility__text">
            <p>Wounded may be marked when you are at 0 health and fail to Endure Harm (page 91). You are severely injured and need treatment to recover.</p>
          </div>
        </article>
      </section>
      <section class="vows">
        <header>
          <h1>Vows</h1>
          <button>Add
            <AddIcon/>
          </button>
        </header>
        <article class="vow">
          <header>
            <h1>Found the City of Hope</h1>
            <h2 class="subtitle">Epic Vow</h2>
            <button>Toggle</button>
          </header>
          <div class="vow__progress-track">Progress</div>
          <div class="vow__notes">
            <h3 class="vow-notes__title">Notes</h3>
            <div class="vow-notes__content" contenteditable="true">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro consectetur tempora suscipit aperiam</p>
            </div>
          </div>
        </article>
      </section>
    </aside>
    <aside class="max-w-sm bg-gray-200 order-3">
      <h1>Reference Stuff</h1>
    </aside>
  </div>
</template>

<script>
import BasicEditor from "~/components/BasicEditor.vue";
import CheckIcon from "~/assets/icons/check.svg";
import CrossIcon from "~/assets/icons/cross.svg";
import AddIcon from "~/assets/icons/add.svg";

export default {
  layout: "app",
  components: {
    BasicEditor,
    CheckIcon,
    CrossIcon,
    AddIcon
  }
};
</script>

<style scoped>
.action-score__value {
}
</style>
