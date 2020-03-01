<template>
  <div class="momentum-stats">
    <h2 class="text-center -mb-3 uppercase">
      <span class="inline-block px-2 bg-gray-200">Momentum</span>
    </h2>
    <div class="momentum-stats__index flex justify-around border-gray-500 border pt-1 mb-3">
      <div
        class="momentum-stat momentum-stat--total w-20 my-3 bg-white border-gray-300 border flex flex-col items-center"
      >
        <EditableMomentumTotal
          class="main-stat__value font-display text-2xl leading-none p-2 pb-3"
        />
        <div
          class="main-stat__label uppercase text-sm tracking-wide bg-gray-300 self-stretch text-center"
        >Total</div>
      </div>
      <div
        class="momentum-stat momentum-stat--max w-20 my-3 bg-white border-gray-300 border flex flex-col items-center"
      >
        <EditableMomentum
          class="main-stat__value font-display text-2xl leading-none p-2 pb-3"
          stat-name="max"
        />
        <div
          class="main-stat__label uppercase text-sm tracking-wide bg-gray-300 self-stretch text-center"
        >Max</div>
      </div>
      <div
        class="momentum-stat momentum-stat--reset w-20 my-3 bg-white border-gray-300 border flex flex-col items-center"
      >
        <EditableMomentum
          class="main-stat__value font-display text-2xl leading-none p-2 pb-3"
          stat-name="reset"
        />
        <div
          class="main-stat__label uppercase text-sm tracking-wide bg-gray-300 self-stretch text-center"
        >Reset</div>
      </div>
    </div>
  </div>
</template>

<script>
import EditableMomentum from "~/components/editor/EditableMomentum";
import EditableMomentumTotal from "~/components/editor/EditableMomentumTotal";

export default {
  components: {
    EditableMomentum,
    EditableMomentumTotal,
  },
};
</script>
