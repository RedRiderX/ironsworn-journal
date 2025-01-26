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
// doesn't have complete api implementation, will probably need to switch to https://vue-youtube.github.io/docs/
import LiteYouTubeEmbed from 'vue-lite-youtube-embed'
import 'vue-lite-youtube-embed/style.css'
const iframe = ref(null)

async function toggleMusic() {
  console.log(iframe.value.getPlayerInstance())
  iframeEl = iframe.value.getPlayerInstance()
  
  iframeEl.contentWindow.postMessage(`{"event":"command","func":"getPlayerState","args":""}`, '*')

  await iframeEl.contentWindow.postMessage(`{"event":"command","func":"getPlayerState","args":""}`, '*')
    .then(state =>
      state === 1 ? iframe.value.pauseVideo() : iframe.value.playVideo()
    );
}
</script>

<style scoped>
</style>
