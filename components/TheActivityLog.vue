<template>
  <transition-group
    tag="section"
    name="activity-log"
    @enter="logEnter"
    class="activity-log flex-auto h-0 overflow-y-scroll p-4 max-w-xl border-b border-gray-400"
    style="
      box-shadow: inset 0 -20px 20px -28px #0000004d,
        inset 0 20px 20px -28px #0000004d;
    "
  >
    <component
      v-for="log in logs"
      :is="log.logType"
      :key="log.uuid"
      :uuid="log.uuid"
      v-bind="log.data"
      class="activity-log-item"
    ></component>
  </transition-group>
</template>

<script>
import { mapGetters } from "vuex";
import ItemText from "~/components/log/ItemText";
import ItemRoll from "~/components/log/ItemRoll";
import ItemVowNew from "~/components/log/ItemVowNew";
import ItemOracleResult from "~/components/log/ItemOracleResult";
import ItemPOINew from "~/components/log/ItemPOINew";

export default {
  components: {
    ItemText,
    ItemRoll,
    ItemVowNew,
    ItemOracleResult,
    ItemPOINew,
  },
  computed: mapGetters({
    logs: "activityLog/logs",
  }),
  methods: {
    logEnter(el, done) {
      // some dumb math here:
      // When a new log is added I want to scroll to the bottom of the log
      // BUT the bottom will shift because of the entrance transition
      // So I want to scroll down to what will be the bottom eventually
      // This calculation assumes the animated element starts out
      // at twice its normal height
      this.$el.scrollTop =
        this.$el.scrollHeight - this.$el.clientHeight - el.offsetHeight;
    },
  },
};
</script>

<style>
.activity-log-item {
  /* position: relative; */
  /* transition: opacity 600ms; */
  transition: all 500ms;
}
.activity-log-enter {
  opacity: 0;
  transform: translateY(100%);
}
.activity-log-enter-to,
.activity-log-leave {
  opacity: 1;
  /* transform: translateY(0); */
}
.activity-log-leave-to {
  opacity: 0;
  /* height: 0; */
  /* padding: 0; */
  /* transform: translateY(0); */
}
.activity-log-leave-active {
  /* overflow: hidden; */
  /* position: absolute; */
  /* transform: translateY(0); */
}
</style>