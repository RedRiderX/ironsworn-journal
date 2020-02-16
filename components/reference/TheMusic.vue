<template>
  <ReferenceSection class="music" title="Music">
    <template v-slot:headerExtra>
      <button @click.stop="toggleMusic" class="py-1 px-2 leading-none">⏯</button>
    </template>
    <youtube ref="musicEmbed" :playerVars="playerVars" resize fitParent class="w-full"/>
  </ReferenceSection>
</template>

<script>
import ReferenceSection from "~/components/ReferenceSection";

export default {
  components: {
    ReferenceSection,
  },
  data() {
    return {
      playerVars: {
        listType: "playlist",
        list: "PLczb7TC-cuxeP9Mwj7uSE47UTq4PERFb9",
        loop: 1,
        shuffle: 1,
      },
    };
  },
  computed: {
    player() {
      return this.$refs.musicEmbed.player;
    },
  },
  methods: {
    async toggleMusic() {
      await this.player
        .getPlayerState()
        .then(state =>
          state === 1 ? this.player.pauseVideo() : this.player.playVideo()
        );
    },
  },
};
</script>

<style scoped>
</style>
