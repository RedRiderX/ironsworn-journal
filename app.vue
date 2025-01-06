<template>
  <div>
    <Html lang="en">
      <Head>
        <Title>Journey into the Ironlands</Title>
        <Meta
          charset="utf-8"
        />
        <Meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <Link rel="preconnect" href="https://fonts.googleapis.com" />
        <Link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <Link href="https://fonts.googleapis.com/css2?family=Inknut+Antiqua:wght@400;700&family=PT+Sans:wght@400;700&display=swap" rel="stylesheet" />
      </Head>
    </Html>
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
const title = ref("Journey into the Ironlands");

useHead({
  bodyAttrs: {
    class: 'font-body',
  },
})

</script>

<style scoped>
</style>
