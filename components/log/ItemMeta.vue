<template>
  <LogItem class="log-item--meta" canReroll canDelete :uuid="uuid" @reroll-log="reroll">
    <div class="log-item__wrapper mx-auto">
      <h1 class="text-xl font-display text-center mb-2">Meta Log</h1>
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
      actionScore: initialState.actionScore,
      challengeDice: [
        initialState.challengeDice[0],
        initialState.challengeDice[1],
      ],
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
      this.$store.commit("activityLog/updateRollResult", {
        uuid: this.uuid,
        actionScore: this.actionScore,
        challengeDice: this.challengeDice,
      });
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
