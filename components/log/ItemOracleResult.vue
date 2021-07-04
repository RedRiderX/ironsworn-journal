<template>
  <LogItem class="log-item--meta" canDelete :uuid="uuid">
    <div class="log-item__wrapper mx-auto">
      <h1 class="text-lg font-display text-center">
        The Oracle of {{ name }} has been Consulted
      </h1>
      <p>{{ result }}</p>
    </div>
  </LogItem>
</template>

<script>
import LogItem from "~/components/log/BaseItem";

export default {
  components: {
    LogItem,
  },
  props: {
    uuid: String,
    name: String,
    result: String,
  },
};
</script>