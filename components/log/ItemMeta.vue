<template>
  <LogItem class="log-item--meta" canReroll canDelete @reroll-log="reroll">
    <div class="log-item__wrapper mx-auto">
      <h1 class="text-xl font-display text-center mb-2">{{ moveTitle }}</h1>
      <div class="dice-roll bg-gray-500 flex justify-around p-2">
        <div class="action-score flex flex-none flex-col items-center">
          <h2 class="text-center font-bold">Action Score</h2>
          <div
            class="action-score__value bg-gray-100 font-display text-3xl w-16 h-16 m-1 flex items-center justify-center border-gray-800 border-4 rounded-full"
          >
            <span class="leading-none">{{ actionScore }}</span>
          </div>
        </div>
        <div class="challenge-dice flex-none">
          <h2 class="text-center font-bold">Challenge Dice</h2>
          <div class="challenge-dice__rolls flex justify-center mt-1">
            <div
              class="challenge-dice-roll flex-shrink relative bg-gray-100 font-display text-3xl m-1 flex items-center justify-center border-gray-800 border-4 rounded-lg"
            >
              <span class="challenge-dice-roll__value leading-none">{{ challengeDice[0] }}</span>
              <div
                v-show="actionScore > challengeDice[0]"
                class="status status--hit absolute right-0 bottom-0 bg-gray-800 rounded-full"
              >
                <CheckIcon class="w-6 h-6 fill-current text-green-500"/>
              </div>
              <div
                v-show="actionScore <= challengeDice[0]"
                class="status status--miss absolute right-0 bottom-0 bg-gray-800 rounded-full"
              >
                <CrossIcon class="w-6 h-6 fill-current text-red-600"/>
              </div>
            </div>
            <div
              class="challenge-dice-roll flex-shrink relative bg-gray-100 font-display text-3xl m-1 flex items-center justify-center border-gray-800 border-4 rounded-lg"
            >
              <span class="challenge-dice-roll__value leading-none">{{ challengeDice[1] }}</span>
              <div
                v-show="actionScore > challengeDice[1]"
                class="status status--hit absolute right-0 bottom-0 bg-gray-800 rounded-full"
              >
                <CheckIcon class="w-6 h-6 fill-current text-green-500"/>
              </div>
              <div
                v-show="actionScore <= challengeDice[1]"
                class="status status--miss absolute right-0 bottom-0 bg-gray-800 rounded-full"
              >
                <CrossIcon class="w-6 h-6 fill-current text-red-600"/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="dice-roll-result bg-gray-300 text-center uppercase tracking-wide p-1">
        {{ rollResult }}
        <span v-if="this.challengeDice[0] === this.challengeDice[1]">(Match)</span>
      </div>
      <div
        v-if="this.challengeDice[0] === this.challengeDice[1]"
        class="move-result mt-3 mx-3 border-b p-2"
      >
        <template v-if="rollResult === 'Strong Hit' ">
          <p>
            <strong>Strong hit:</strong> The
            <strong>match</strong> should represent a twist in the narrative, something
            interesting, or a new opportunity.
          </p>
        </template>
        <template v-else>
          <p>
            <strong>Miss:</strong> The
            <strong>match</strong> should represent a heightened negative outcome, a
            complication, or new danger. Things get worse for you in an unexpected way.
          </p>
        </template>
      </div>
      <div v-if="moveResult" class="move-result mt-3 mx-3" v-html="moveResult"></div>
    </div>
  </LogItem>
</template>

<script>
import LogItem from "~/components/log/BaseItem";
import CheckIcon from "~/assets/icons/check.svg";
import CrossIcon from "~/assets/icons/cross.svg";
import dieRoll from "~/plugins/dice";

export default {
  components: {
    LogItem,
    CheckIcon,
    CrossIcon,
  },
  props: {
    rollStat: String,
    addNum: Number,
    move: Object,
  },
  data() {
    return {
      actionScore: null,
      challengeDice: [null, null],
    };
  },
  computed: {
    rollResult() {
      if (this.actionScore > this.challengeDice[0]) {
        if (this.actionScore > this.challengeDice[1]) {
          return "Strong Hit";
        } else {
          return "Weak Hit";
        }
      } else {
        if (this.actionScore > this.challengeDice[1]) {
          return "Weak Hit";
        } else {
          return "Miss";
        }
      }
    },
    rollStatNum() {
      if (this.rollStat === "heart") {
        return this.$store.state.character.stats.heart;
      }
      return null;
    },
    moveTitle() {
      if (this.move) {
        return "Swear an Iron Vow";
      } else {
        return `Roll +${this.rollStat}`;
      }
    },
    moveResult() {
      if (this.move) {
        // TODO: Pull this from move reference
        return `<p>
            On a
            <strong>weak hit</strong>, you are determined but begin your quest with more questions than answers. 
            Take +1 momentum, and envision what you do to find a path forward.
          </p>`;
      } else {
        return null;
      }
    },
  },
  created() {
    // if it doesn't already have a state roll it?
    if (this.actionScore === null) {
      this.reroll();
    }
  },
  methods: {
    rollActionScore() {
      // d6 + stat + mod
      this.actionScore = dieRoll() + this.rollStatNum + this.addNum;
    },
    rollChallengeDice() {
      this.challengeDice = [dieRoll(10), dieRoll(10)];
    },
    reroll() {
      this.rollActionScore();
      this.rollChallengeDice();
    },
  },
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
