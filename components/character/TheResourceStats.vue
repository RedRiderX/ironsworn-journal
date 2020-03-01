<template>
  <div class="resource-stats flex justify-around">
    <div
      class="resource-stat resource-stat--health w-20 my-3 bg-white border-gray-300 border flex flex-col items-center"
    >
      <div
        class="main-stat__label uppercase text-sm tracking-wide bg-gray-300 self-stretch text-center"
      >Health</div>
      <EditableResource
        class="main-stat__value font-display text-2xl leading-none p-2 pb-3"
        resource-name="health"
      />
    </div>
    <div
      class="resource-spirit resource-stat--health w-20 my-3 bg-white border-gray-300 border flex flex-col items-center"
    >
      <div
        class="main-stat__label uppercase text-sm tracking-wide bg-gray-300 self-stretch text-center"
      >Spirit</div>
      <EditableResource
        class="main-stat__value font-display text-2xl leading-none p-2 pb-3"
        resource-name="spirit"
      />
    </div>
    <div
      class="resource-supply resource-stat--health w-20 my-3 bg-white border-gray-300 border flex flex-col items-center"
    >
      <div
        class="main-stat__label uppercase text-sm tracking-wide bg-gray-300 self-stretch text-center"
      >Supply</div>
      <EditableResource
        class="main-stat__value font-display text-2xl leading-none p-2 pb-3"
        resource-name="supply"
      />
    </div>
  </div>
</template>

<script>
import EditableResource from "~/components/editor/EditableResource";

export default {
  components: {
    EditableResource,
  },
};
</script>
