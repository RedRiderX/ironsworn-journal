<template>
  <section>
    <div>
      <h1 class="title">Journey into the Ironlands</h1>
      <SwordIcon class="icon--sword"/>
      <hr>
      <h2 class="subtitle">
        A Journal for Solo
        <a href="https://www.ironswornrpg.com/" target="_blank">Ironsworn</a> play
      </h2>
      <div class="links">
        <NLink to="/app" class="button--green">Begin</NLink>
        <NLink to="/about" class="button--grey">About this app</NLink>
      </div>
    </div>
  </section>
</template>

<script>
import SwordIcon from "~/assets/icons/sword.svg?1";

export default {
  components: {
    SwordIcon
  }
};
</script>

<style scoped>
.title {
  font-family: "Inknut Antiqua", serif;
  color: rgba(55, 79, 83, 1);
  font-size: 4em;
  line-height: 1.3;
  /* margin-bottom: -1rem; */
}

.subtitle {
  font-family: "PT Sans", sans-serif;
  font-weight: 300;
  font-size: 2em;
  color: rgba(55, 79, 83, 1);
  padding-bottom: 1.5rem;
}

.links {
  padding-top: 15px;
}

.icon--sword {
  width: 6rem;
  height: 6rem;
  margin: auto;
  margin-bottom: -6.25rem;
  position: relative;
  background: white;
  padding: 0.5rem;
}

hr {
  max-width: 40rem;
  border: 2px solid rgba(51, 51, 51, 1);
  margin: 3rem auto;
}
</style>
