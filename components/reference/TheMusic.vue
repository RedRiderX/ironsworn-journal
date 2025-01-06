<template>
  <ReferenceSection class="music" title="Music">
    <template v-slot:headerExtra>
      <button @click.stop="toggleMusic" class="py-1 px-2 leading-none">⏯</button>
    </template>
    <!-- <youtube ref="musicEmbed" :playerVars="playerVars" resize fitParent class="w-full"/> -->
    <LiteYouTubeEmbed
      ref="iframe"
      id="PLczb7TC-cuxeP9Mwj7uSE47UTq4PERFb9"
      title="Background Music Playlist"
      :playlist="true"
      playerClass="w-full"
      params="suffle=1&loop=1"
    />
  </ReferenceSection>
</template>

<script setup>
import LiteYouTubeEmbed from 'vue-lite-youtube-embed'
import 'vue-lite-youtube-embed/style.css'
const musicEmbed = ref(null)

const player = computed(() => this.$refs.musicEmbed.value);

async function toggleMusic() {
  await musicEmbed.value
    .getPlayerState()
    .then(state =>
      state === 1 ? musicEmbed.value.pauseVideo() : musicEmbed.value.playVideo()
    );
}
</script>

<style scoped>
</style>
