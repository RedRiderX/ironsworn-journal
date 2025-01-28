<template>
  <BaseItem class="log-item--meta" canReroll canDelete :uuid="uuid" @reroll-log="reroll">
    <div class="log-item__wrapper mx-auto">
      <h1 class="text-xl font-display text-center mb-2">Meta Log</h1>
    </div>
  </BaseItem>
</template>

<script setup lang="ts">
const props = defineProps({
  uuid: String
})

const activityLogStore = useActivityLogStore()
const characterStore = useCharacterStore()

// Get initial state from store
let initialState = activityLogStore.getLog(props.uuid).data
const rollStat = ref(initialState.rollStat)
const addNum = ref(initialState.addNum)
const move = ref(initialState.move)
const actionScore = ref(initialState.actionScore)
const challengeDice = ref([
  initialState.challengeDice[0],
  initialState.challengeDice[1],
])

const rollResult = computed(() => {
  if (actionScore.value > challengeDice.value[0]) {
    if (actionScore.value > challengeDice.value[1]) {
      return "Strong Hit";
    } else {
      return "Weak Hit";
    }
  } else {
    if (actionScore.value > challengeDice.value[1]) {
      return "Weak Hit";
    } else {
      return "Miss";
    }
  }
})

const rollStatNum = computed(() => {
  if (rollStat.value === "heart") {
    return characterStore.stats.heart;
  }
  return null;
})

const moveTitle = computed(() => {
  if (move.value) {
    return "Swear an Iron Vow";
  } else {
    return `Roll +${rollStat.value}`;
  }
})

const moveResult = computed(() => {
  if (move.value) {
    // TODO: Pull this from move reference
    return `<p>
        On a
        <strong>weak hit</strong>, you are determined but begin your quest with more questions than answers. 
        Take +1 momentum, and envision what you do to find a path forward.
      </p>`;
  } else {
    return null;
  }
})

// if it doesn't already have a state roll it?
if (actionScore.value === null) {
  reroll()
}

function rollActionScore() {
  // d6 + stat + mod
  actionScore.value = rollDie() + rollStatNum.value + addNum.value;
}

function rollChallengeDice() {
  challengeDice.value = [rollDie(10), rollDie(10)];
}

function reroll() {
  rollActionScore()
  rollChallengeDice()
  activityLogStore.updateRollResult({
    uuid: props.uuid,
    actionScore: actionScore.value,
    challengeDice: challengeDice.value,
  })
}
</script>

<style scoped>
.log-item__wrapper {
  width: 18rem;
}
.challenge-dice-roll {
  transform: rotate(45deg);
  width: 3.5rem;
  height: 3.5rem;
}
.challenge-dice-roll__value,
.status {
  transform: rotate(-45deg);
}
.status {
  bottom: calc(50% - 0.75rem);
  right: -1rem;
  padding: 1px;
}
</style>
