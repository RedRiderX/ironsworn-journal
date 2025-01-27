<template>
  <div class="main-stats bg-gray-300 -mx-2 mb-3 p-3 pb-4 flex justify-around items-start">
    <div class="main-stat main-stat--edge flex flex-col items-center">
      <div class="main-stat__label uppercase text-sm tracking-wide">Edge</div>
      <EditableStat class="main-stat__value font-display text-2xl leading-none" stat-name="edge"/>
    </div>
    <div class="main-stat main-stat--heart flex flex-col items-center">
      <div class="main-stat__label uppercase text-sm tracking-wide">Heart</div>
      <EditableStat class="main-stat__value font-display text-2xl leading-none" stat-name="heart"/>
    </div>
    <div class="main-stat main-stat--iron flex flex-col items-center">
      <div class="main-stat__label uppercase text-sm tracking-wide">Iron</div>
      <EditableStat class="main-stat__value font-display text-2xl leading-none" stat-name="iron"/>
    </div>
    <div class="main-stat main-stat--shadow flex flex-col items-center">
      <div class="main-stat__label uppercase text-sm tracking-wide">Shadow</div>
      <EditableStat class="main-stat__value font-display text-2xl leading-none" stat-name="shadow"/>
    </div>
    <div class="main-stat main-stat--wits flex flex-col items-center">
      <div class="main-stat__label uppercase text-sm tracking-wide">Wits</div>
      <EditableStat class="main-stat__value font-display text-2xl leading-none" stat-name="wits"/>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>
