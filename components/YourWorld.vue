<template>
  <ReferenceSection class="world" title="Your World">
    <input
      class="border-2 border-gray-300 bg-white mb-2 px-5 rounded-lg text-sm focus:outline-none w-full leading-loose inline-block"
      type="search"
      name="search"
      placeholder="Search"
    >
    <article class="world__content mb-2" contenteditable="true">
      <h1 class="font-display font-bold text-lg">The Old World</h1>
      <p>The sickness moved like a horrible wave across the Old World, killing all in its path. Thousands fled aboard ships. However, the plague could not be outrun. On many ships, the disease was contained through ruthless measures—tossing overboard any who exhibited the slightest symptom. Other ships were forever lost. In the end, those who survived found the Ironlands and made it their new home. Some say we will forever be cursed by those we left behind.</p>
      <h1 class="font-display font-bold text-lg">Iron</h1>
      <p>Inscrutable metal pillars are found throughout the land. They are iron gray, and smooth as river stone. No one knows their purpose. Some say they are as old as the world. Some, such as the Iron Priests, worship them and swear vows upon them. Most make the warding sign and hurry along their way when they happen across one. The pillars do not tarnish,and even the sharpest blade cannot mark them.</p>
      <h1 class="font-display font-bold text-lg">Legacies</h1>
      <p>We are the first humans to walk these lands.</p>
    </article>
  </ReferenceSection>
</template>

<script>
import ReferenceSection from "~/components/ReferenceSection";

export default {
  components: {
    ReferenceSection
  }
};
</script>

<style scoped>
</style>
