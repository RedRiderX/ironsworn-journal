<template>
  <LogItem
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
              <BurnIcon class="w-6 h-6 p-1 fill-current text-orange-500" />
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
                <CheckIcon class="w-6 h-6 fill-current text-green-500" />
              </div>
              <div
                v-show="actionScore <= challengeDice[0]"
                class="status status--miss"
              >
                <CrossIcon class="w-6 h-6 fill-current text-red-600" />
              </div>
              <div v-show="challengeDiceBurned[0]" class="status status--burn">
                <BurnIcon class="w-6 h-6 p-1 fill-current text-orange-500" />
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
                <CheckIcon class="w-6 h-6 fill-current text-green-500" />
              </div>
              <div
                v-show="actionScore <= challengeDice[1]"
                class="status status--miss"
              >
                <CrossIcon class="w-6 h-6 fill-current text-red-600" />
              </div>
              <div v-show="challengeDiceBurned[1]" class="status status--burn">
                <BurnIcon class="w-6 h-6 p-1 fill-current text-orange-500" />
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
        <span v-if="this.challengeDice[0] === this.challengeDice[1]"
          >(Match)</span
        >
      </div>
      <div
        v-if="this.challengeDice[0] === this.challengeDice[1]"
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
      <button
        class="bg-gray-600 py-1 px-2 text-white font-bold uppercase text-sm rounded self-center flex items-center"
        @click="burnMomentum"
      >
        <span class="leading-none mx-1 inline-block">Burn</span>
        <BurnIcon class="w-5 h-5 fill-current" />
      </button>
    </div>
  </LogItem>
</template>

<script>
import LogItem from "~/components/log/BaseItem";
import CheckIcon from "~/assets/icons/check.svg";
import CrossIcon from "~/assets/icons/cross.svg";
import BurnIcon from "~/assets/icons/burn.svg";
import dieRoll from "~/plugins/dice";

export default {
  components: {
    LogItem,
    CheckIcon,
    CrossIcon,
    BurnIcon,
  },
  props: {
    uuid: String,
  },
  data() {
    // Get initial state from store
    let initialState = this.$store.getters["activityLog/getLog"](this.uuid)
      .data;

    return {
      rollStat: initialState.rollStat,
      addNum: initialState.addNum,
      move: initialState.move,
      actionDie: initialState.actionDie,
      actionScore: initialState.actionScore,
      challengeDice: [
        initialState.challengeDice[0],
        initialState.challengeDice[1],
      ],
      momentum: this.$store.state.character.momentum.total,
      challengeDiceBurned: [
        initialState.challengeDiceBurned[0],
        initialState.challengeDiceBurned[1],
      ],
    };
  },
  computed: {
    rollResult() {
      let didChallengeDie0Hit = false;
      let didChallengeDie1Hit = false;

      if (this.challengeDiceBurned[0]) {
        didChallengeDie0Hit = true;
      } else if (this.actionScore > this.challengeDice[0]) {
        didChallengeDie0Hit = true;
      }

      if (this.challengeDiceBurned[1]) {
        didChallengeDie1Hit = true;
      } else if (this.actionScore > this.challengeDice[1]) {
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
        if (this.rollResult === "Strong Hit") {
          return `<p>
              On a <strong>strong hit</strong>, you are emboldened and it is clear what you must do
              next (<em>Ask the Oracle</em> if unsure). Take +2 momentum.
            </p>`;
        } else if (this.rollResult === "Weak Hit") {
          return `<p>
              On a
              <strong>weak hit</strong>, you are determined but begin your quest with more questions than answers. 
              Take +1 momentum, and envision what you do to find a path forward.
            </p>`;
        } else if (this.rollResult === "Miss") {
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
    },
    negativeMomentumActive() {
      return this.momentum < 0 && this.actionDie === Math.abs(this.momentum);
    },
    burnPotential() {
      let potential = "";
      if (
        this.challengeDice[0] < this.momentum ||
        this.challengeDice[1] < this.momentum
      ) {
        potential = "Weak Hit";
      }
      if (
        this.challengeDice[0] < this.momentum &&
        this.challengeDice[1] < this.momentum
      ) {
        potential = "Strong Hit";
      }
      return potential;
    },
    momentumBurnPossible() {
      if (this.challengeDiceBurned[0] || this.challengeDiceBurned[0]) {
        return false;
      }

      if (
        (this.challengeDice[0] < this.momentum &&
          this.challengeDice[0] > this.actionScore) ||
        (this.challengeDice[1] < this.momentum &&
          this.challengeDice[1] > this.actionScore)
      ) {
        return true;
      }
      return false;
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
      this.actionDie = dieRoll();
      if (this.negativeMomentumActive) {
        this.actionScore = this.rollStatNum + this.addNum;
      } else {
        this.actionScore = this.actionDie + this.rollStatNum + this.addNum;
      }
    },
    rollChallengeDice() {
      this.challengeDice = [dieRoll(10), dieRoll(10)];
      this.challengeDiceBurned = [false, false];
    },
    reroll() {
      this.rollActionScore();
      this.rollChallengeDice();
      this.$store.commit("activityLog/updateRollResult", {
        uuid: this.uuid,
        actionScore: this.actionScore,
        challengeDice: this.challengeDice,
        challengeDiceBurned: this.challengeDiceBurned,
      });
    },
    burnMomentum() {
      // arrays are a little wierd reactivity-wise, be sure to set the whole array at once
      this.challengeDiceBurned = [
        this.challengeDice[0] < this.momentum,
        this.challengeDice[1] < this.momentum,
      ];
      this.$store.commit("activityLog/updateRollResult", {
        uuid: this.uuid,
        actionScore: this.actionScore,
        challengeDice: this.challengeDice,
        challengeDiceBurned: this.challengeDiceBurned,
      });
      this.$store.commit("character/resetMomentum");
    },
  },
};
</script>

<style lang="postcss" scoped>
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
