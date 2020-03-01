<template>
  <transition-group
    tag="section"
    name="activity-log-transition"
    @enter="logEnter"
    enter-active-class="animated fast fadeInUp"
    leave-active-class="animated fast fadeOut"
    class="activity-log flex-auto h-0 overflow-y-scroll p-4 max-w-xl border-b border-gray-400"
    style="box-shadow: inset 0 -20px 20px -28px #0000004d, inset 0 20px 20px -28px #0000004d"
  >
    <component
      v-for="log in logs"
      :is="log.logType"
      :key="log.uuid"
      :uuid="log.uuid"
      v-bind="log.data"
    ></component>
  </transition-group>
</template>

<script>
import { mapGetters } from "vuex";
import ItemText from "~/components/log/ItemText";
import ItemRoll from "~/components/log/ItemRoll";
import ItemVowNew from "~/components/log/ItemVowNew";

export default {
  components: {
    ItemText,
    ItemRoll,
    ItemVowNew,
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
