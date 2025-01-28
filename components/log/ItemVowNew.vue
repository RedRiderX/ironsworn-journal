<template>
  <BaseItem class="log-item--meta" canDelete :uuid="uuid">
    <div class="log-item__wrapper mx-auto">
      <div class="expanded-view" v-show="!collapsed">
        <h1 class="text-xl font-display text-center mb-2">New Vow</h1>
        <div class="form-details bg-gray-300 pt-3 px-4 pb-1 mb-3">
          <div class="mb-3">
            <label class="block font-bold mb-1" for="new-vow-name">Name</label>
            <input
              id="new-vow-name"
              class="bg-white border border-gray-400 appearance-none w-full py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-black"
              type="text"
              placeholder="Found the City of Hope"
              v-model="name"
            />
          </div>
          <div class="mb-3">
            <label class="block font-bold mb-1">Challenge Rank</label>
            <div class="radio-group">
              <label class="radio-group-item block my-1">
                <input
                  class="mr-1"
                  type="radio"
                  v-model="rank"
                  value="troublesome"
                />
                Troublesome
              </label>
              <label class="radio-group-item block my-1">
                <input
                  class="mr-1"
                  type="radio"
                  v-model="rank"
                  value="dangerous"
                />
                Dangerous
              </label>
              <label class="radio-group-item block my-1">
                <input
                  class="mr-1"
                  type="radio"
                  v-model="rank"
                  value="formidable"
                />
                Formidable
              </label>
              <label class="radio-group-item block my-1">
                <input
                  class="mr-1"
                  type="radio"
                  v-model="rank"
                  value="extreme"
                />
                Extreme
              </label>
              <label class="radio-group-item block my-1">
                <input class="mr-1" type="radio" v-model="rank" value="epic" />
                Epic
              </label>
            </div>
          </div>
          <div class="mb-3">
            <label class="block font-bold mb-1">
              <input class="mr-1" type="checkbox" v-model="bond" />
              Do you share a bond?
            </label>
          </div>
          <div class="mb-3">
            <label class="block font-bold mb-1" for="new-vow-name">Notes</label>
            <textarea
              class="bg-white border border-gray-400 appearance-none w-full p-2 focus:outline-none focus:bg-white focus:border-black"
              v-model="notes"
              placeholder="Enter Notes Here"
            ></textarea>
          </div>
        </div>
        <div class="form-actions">
          <BaseButton
            @click="makeRoll"
            label="Swear an Iron Vow"
            icon="SvgoDie"
          />
        </div>
      </div>
      <div class="collapsed-view" v-show="collapsed">
        <h1 class="text-lg font-display text-center">
          New Vow
          <br />
          {{ name }} - {{ rank }}
        </h1>
      </div>
    </div>
  </BaseItem>
</template>

<script setup lang="ts">
const props = defineProps({
  uuid: String,
})

const activityLogStore = useActivityLogStore()
const characterVowsStore = useCharacterVowsStore()

// Get initial state from store
let initialState = activityLogStore.getLog(props.uuid).data
const name = ref(initialState.name)
const rank = ref(initialState.rank)
const bond = ref(initialState.bond)
const notes = ref("")
const collapsed = ref(initialState.collapsed)

function makeRoll() {
  characterVowsStore.addVow({
    name: name.value,
    rank: rank.value,
    progress: 0,
    notes: notes.value,
  })

  activityLogStore.addRoll({
    rollStat: "heart",
    addNum: bond.value ? 1 : 0,
    move: "swear-an-iron-vow",
  })

  // And then collapse it I guess?
  collapsed.value = true;
  activityLogStore.updateNewVow({
    uuid: props.uuid,
    name: name.value,
    rank: rank.value,
    collapsed: true,
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
