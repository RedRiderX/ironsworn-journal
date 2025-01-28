<template>
  <BaseItem
    class="log-item--meta"
    canReroll
    canDelete
    :uuid="uuid"
    @reroll-log="reroll"
  >
    <div class="log-item__wrapper mx-auto">
      <h1 class="text-xl font-display text-center mb-2">{{ moveTitle }}</h1>
      <div class="dice-roll bg-gray-500 flex justify-around p-2">
        <div class="action-score flex flex-none flex-col items-center">
          <h2 class="text-center font-bold">Action Score</h2>
          <div
            class="action-score__value relative bg-gray-100 font-display text-3xl w-16 h-16 m-1 flex items-center justify-center border-gray-800 border-4 rounded-full"
          >
            <span class="leading-none">{{ actionScore }}</span>
            <div v-show="negativeMomentumActive" class="status status--burn">
              <SvgoBurn class="w-6 h-6 p-1 fill-current text-orange-500" />
            </div>
          </div>
        </div>
        <div class="challenge-dice flex-none">
          <h2 class="text-center font-bold">Challenge Dice</h2>
          <div class="challenge-dice__rolls flex justify-center mt-1">
            <div
              class="challenge-dice-roll transform rotate-45 flex-shrink relative bg-gray-100 font-display text-3xl m-1 flex items-center justify-center border-gray-800 border-4 rounded-lg"
            >
              <span
                class="challenge-dice-roll__value transform -rotate-45 leading-none"
                >{{ challengeDice[0] }}</span
              >
              <div
                v-show="actionScore > challengeDice[0]"
                class="status status--hit"
              >
                <SvgoCheck class="w-6 h-6 fill-current text-green-500" />
              </div>
              <div
                v-show="actionScore <= challengeDice[0]"
                class="status status--miss"
              >
                <SvgoCross class="w-6 h-6 fill-current text-red-600" />
              </div>
              <div v-show="challengeDiceBurned[0]" class="status status--burn">
                <SvgoBurn class="w-6 h-6 p-1 fill-current text-orange-500" />
              </div>
            </div>
            <div
              class="challenge-dice-roll transform rotate-45 flex-shrink relative bg-gray-100 font-display text-3xl m-1 flex items-center justify-center border-gray-800 border-4 rounded-lg"
            >
              <span
                class="challenge-dice-roll__value transform -rotate-45 leading-none"
                >{{ challengeDice[1] }}</span
              >
              <div
                v-show="actionScore > challengeDice[1]"
                class="status status--hit"
              >
                <SvgoCheck class="w-6 h-6 fill-current text-green-500" />
              </div>
              <div
                v-show="actionScore <= challengeDice[1]"
                class="status status--miss"
              >
                <SvgoCross class="w-6 h-6 fill-current text-red-600" />
              </div>
              <div v-show="challengeDiceBurned[1]" class="status status--burn">
                <SvgoBurn class="w-6 h-6 p-1 fill-current text-orange-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        v-if="negativeMomentumActive"
        class="negative-momentum-alert bg-gray-600 text-white uppercase tracking-wide text-center p-1"
      >
        Action Die <strong>Cancelled</strong>
      </div>
      <div
        v-show="challengeDiceBurned[0] || challengeDiceBurned[1]"
        class="burned-momentum-alert bg-gray-600 text-white uppercase tracking-wide text-center p-1"
      >
        Challenge Dice <strong>Cancelled</strong>
      </div>
      <div
        class="dice-roll-result bg-gray-300 text-center uppercase tracking-wide p-1"
      >
        {{ rollResult }}
        <span v-if="challengeDice.values[0] === challengeDice.values[1]"
          >(Match)</span
        >
      </div>
      <div
        v-if="challengeDice.values[0] === challengeDice.values[1]"
        class="move-result mt-3 mx-3 border-b p-2"
      >
        <template v-if="rollResult === 'Strong Hit'">
          <p>
            <strong>Strong hit:</strong> The <strong>match</strong> should
            represent a twist in the narrative, something interesting, or a new
            opportunity.
          </p>
        </template>
        <template v-else>
          <p>
            <strong>Miss:</strong> The <strong>match</strong> should represent a
            heightened negative outcome, a complication, or new danger. Things
            get worse for you in an unexpected way.
          </p>
        </template>
      </div>
      <div
        v-if="moveResult"
        class="move-result mt-3 mx-3"
        v-html="moveResult"
      ></div>
    </div>
    <div
      v-show="momentumBurnPossible"
      class="burn-momentum-prompt flex items-center justify-between border border-gray-400 p-1 bg-gray-200 mb-2 mt-4"
    >
      <span
        ><strong>Burn Momentum</strong> for a
        <strong>{{ burnPotential }}</strong
        >?</span
      >
      <BaseButton @click="burnMomentum" label="Burn" icon="SvgoBurn" />
    </div>
  </BaseItem>
</template>

<script setup lang="ts">
const props = defineProps({
  uuid: String,
})

const activityLogStore = useActivityLogStore()
const characterStore = useCharacterStore()

// Get initial state from store
let initialState = activityLogStore.getLog(props.uuid).data
const rollStat = ref(initialState.rollStat)
const addNum = ref(initialState.addNum)
const move = ref(initialState.move)
const actionDie = ref(initialState.actionDie)
const actionScore = ref(initialState.actionScore)
const challengeDice = ref([
  initialState.challengeDice[0],
  initialState.challengeDice[1],
])
const momentum = ref(characterStore.momentum.total)
const challengeDiceBurned = ref([
  initialState.challengeDiceBurned[0],
  initialState.challengeDiceBurned[1],
])

const rollResult = computed(() => {
  let didChallengeDie0Hit = false;
  let didChallengeDie1Hit = false;

  if (challengeDiceBurned.value[0]) {
    didChallengeDie0Hit = true;
  } else if (actionScore > challengeDice.value[0]) {
    didChallengeDie0Hit = true;
  }

  if (challengeDiceBurned.value[1]) {
    didChallengeDie1Hit = true;
  } else if (actionScore > challengeDice[1]) {
    didChallengeDie1Hit = true;
  }

  if (didChallengeDie0Hit && didChallengeDie1Hit) {
    return "Strong Hit";
  }
  
  // eslint-disable-next-line eqeqeq -- Mimic XOR
  if (didChallengeDie0Hit != didChallengeDie1Hit) {
    return "Weak Hit";
  }

  if (!didChallengeDie0Hit && !didChallengeDie1Hit) {
    return "Miss";
  }

  // idk how you got here
  return "Miss";
})

const rollStatNum = computed(() => {
  if (rollStat.value === "heart") {
    return characterStore.stats.heart;
  }
  return null;
})

const moveTitle = computed(() => {
  if (move) {
    return "Swear an Iron Vow";
  } else {
    return `Roll +${rollStat.value}`;
  }
})

const moveResult = computed(() => {
  if (move.value) {
    // TODO: Pull this from move reference
    if (rollResult.value === "Strong Hit") {
      return `<p>
          On a <strong>strong hit</strong>, you are emboldened and it is clear what you must do
          next (<em>Ask the Oracle</em> if unsure). Take +2 momentum.
        </p>`;
    } else if (rollResult.value === "Weak Hit") {
      return `<p>
          On a
          <strong>weak hit</strong>, you are determined but begin your quest with more questions than answers. 
          Take +1 momentum, and envision what you do to find a path forward.
        </p>`;
    } else if (rollResult.value === "Miss") {
      return `<p>
        On a <strong>miss</strong>, you face a significant obstacle before you can begin your
        quest. Envision what stands in your way (<em>Ask the Oracle</em> if unsure), and
        choose one.</p>
        <ul>
        <li>You press on: Suffer -2 momentum, and do what you must to
        overcome this obstacle</li>
        <li>You give up: <em>Forsake Your Vow</em>.</li></ul>`;
    }
  }
  return null;
})

const negativeMomentumActive = computed(() => {
  return momentum.value < 0 && actionDie.value === Math.abs(momentum.value);
})

const burnPotential = computed(() => {
  let potential = "";
  if (
    challengeDice.value[0] < momentum.value ||
    challengeDice.value[1] < momentum.value
  ) {
    potential = "Weak Hit";
  }
  if (
    challengeDice.value[0] < momentum.value &&
    challengeDice.value[1] < momentum.value
  ) {
    potential = "Strong Hit";
  }
  return potential
})

const momentumBurnPossible = computed(() => {
  if (challengeDiceBurned.value[0] || challengeDiceBurned.value[0]) {
    return false;
  }

  if (
    (challengeDice.value[0] < momentum.value &&
      challengeDice.value[0] > actionScore.value) ||
    (challengeDice.value[1] < momentum.value &&
      challengeDice.value[1] > actionScore.value)
  ) {
    return true;
  }
  return false;
})

// if it doesn't already have a state roll it?
if (actionScore.value === null) {
  reroll();
}

function rollActionScore() {
  // d6 + stat + mod
  actionDie.value = rollDie()
  if (negativeMomentumActive.value) {
    actionScore.value = rollStatNum.value + addNum.value
  } else {
    actionScore.value = actionDie.value + rollStatNum.value + addNum.value
  }
}
function rollChallengeDice() {
  challengeDice.value = [rollDie(10), rollDie(10)]
  challengeDiceBurned.value = [false, false]
}
function reroll() {
  rollActionScore();
  rollChallengeDice();
  activityLogStore.updateRollResult({
    uuid: props.uuid,
    actionScore: actionScore.value,
    challengeDice: challengeDice.value,
    challengeDiceBurned: challengeDiceBurned.value,
  })
}
function burnMomentum() {
  // arrays are a little wierd reactivity-wise, be sure to set the whole array at once
  challengeDiceBurned.value = [
    challengeDice.value[0] < momentum.value,
    challengeDice.value[1] < momentum.value,
  ];
  activityLogStore.updateRollResult({
    uuid: props.uuid,
    actionScore: actionScore.value,
    challengeDice: challengeDice.value,
    challengeDiceBurned: challengeDiceBurned.value,
  })
  characterStore.resetMomentum()
}
</script>

<style>
@reference "tailwindcss";

.log-item__wrapper {
  width: 18rem;
}
.challenge-dice-roll {
  width: 3.5rem;
  height: 3.5rem;
}
.status {
  @apply absolute -right-4 bottom-0 bg-gray-800 rounded-full p-px;
}
.challenge-dice .status {
  @apply transform -rotate-45;
  bottom: calc(50% - 0.75rem);
}
</style>
