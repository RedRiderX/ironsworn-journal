<template>
  <LogItem class="log-item--meta" canReroll canDelete>
    <div class="log-item__wrapper mx-auto">
      <h1 class="text-xl font-display text-center mb-2">Swear an Iron Vow</h1>
      <div class="dice-roll bg-gray-500 flex justify-around p-2">
        <div class="action-score flex flex-none flex-col items-center">
          <h2 class="text-center font-bold">Action Score</h2>
          <div
            class="action-score__value bg-gray-100 font-display text-3xl w-16 h-16 m-1 flex items-center justify-center border-gray-800 border-4 rounded-full"
          >
            <span class="leading-none">6</span>
          </div>
        </div>
        <div class="challenge-dice flex-none">
          <h2 class="text-center font-bold">Challenge Dice</h2>
          <div class="challenge-dice__rolls flex justify-center mt-1">
            <div
              class="challenge-dice-roll flex-shrink relative bg-gray-100 font-display text-3xl m-1 flex items-center justify-center border-gray-800 border-4 rounded-lg"
            >
              <span class="challenge-dice-roll__value leading-none">4</span>
              <div class="status status--hit absolute right-0 bottom-0 bg-gray-800 rounded-full">
                <CheckIcon class="w-6 h-6 fill-current text-green-500"/>
              </div>
            </div>
            <div
              class="challenge-dice-roll flex-shrink relative bg-gray-100 font-display text-3xl m-1 flex items-center justify-center border-gray-800 border-4 rounded-lg"
            >
              <span class="challenge-dice-roll__value leading-none">8</span>
              <div class="status status--miss absolute right-0 bottom-0 bg-gray-800 rounded-full">
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
    </div>
  </LogItem>
</template>

<script>
import LogItem from "~/components/LogItem";
import CheckIcon from "~/assets/icons/check.svg";
import CrossIcon from "~/assets/icons/cross.svg";

export default {
  components: {
    LogItem,
    CheckIcon,
    CrossIcon
  }
};
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
